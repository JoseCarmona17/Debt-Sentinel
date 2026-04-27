'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function submitProtectionPlan(formData: FormData) {
  // Verificación de credenciales para producción
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return { 
      success: false, 
      message: 'Configuración de servidor incompleta (faltan variables de entorno en Netlify).' 
    };
  }

  try {
    const fullName = formData.get('fullName') as string;
    const idNumber = formData.get('idNumber') as string;
    const state = formData.get('state') as string;
    const debtCompany = formData.get('debtCompany') as string;
    const estimatedDebt = parseFloat(formData.get('estimatedDebt') as string || '0');
    const callDateTime = formData.get('callDateTime') as string;
    const plan = formData.get('plan') as string;
    
    // Consents
    const contactConsent = formData.get('contactConsent') === 'true';
    const privacyConsent = formData.get('privacyConsent') === 'true';
    const termsConsent = formData.get('termsConsent') === 'true';
    const dataUsageConsent = formData.get('dataUsageConsent') === 'true';

    // 1. Get or Create Empresa
    let empresaId: number | null = null;
    const { data: existingEmpresa, error: findError } = await supabase
      .from('empresas')
      .select('empresa_id')
      .eq('razon_social', debtCompany)
      .maybeSingle();

    if (existingEmpresa) {
      empresaId = existingEmpresa.empresa_id;
    } else {
      const { data: newEmpresa, error: empresaError } = await supabase
        .from('empresas')
        .insert({ razon_social: debtCompany, direccion: state })
        .select()
        .single();
      
      if (empresaError) throw new Error(`Empresa error: ${empresaError.message}`);
      empresaId = newEmpresa.empresa_id;
    }

    // 2. Create Contacto
    const { data: contacto, error: contactoError } = await supabase
      .from('contactos')
      .insert({
        nombre_completo: fullName,
        identificacion: idNumber,
        empresa_id: empresaId,
        estado: 'activo'
      })
      .select()
      .single();

    if (contactoError) throw new Error(`Contacto error: ${contactoError.message}`);
    const contactoId = contacto.contacto_id;

    // 3. Create Deuda
    const { data: deuda, error: deudaError } = await supabase
      .from('deudas')
      .insert({
        contacto_id: contactoId,
        empresa_id: empresaId,
        monto_estimado: estimatedDebt,
        moneda: 'ARS', // Default as per schema
        estado_deuda: 'pendiente'
      })
      .select()
      .single();

    if (deudaError) throw new Error(`Deuda error: ${deudaError.message}`);
    const deudaId = deuda.deuda_id;

    // 4. Create Consentimientos
    const { error: consentError } = await supabase
      .from('consentimientos')
      .insert({
        contacto_id: contactoId,
        acepta_contacto: contactConsent,
        acepta_privacidad: privacyConsent,
        acepta_terminos: termsConsent,
        // accepts_data_usage isn't in the provided schema, so we skip it or map it if possible.
        // The schema has accepts_contacto, accepts_privacidad, accepts_terminos.
      });

    if (consentError) throw new Error(`Consent error: ${consentError.message}`);

    // 5. Create Llamada Programada (if provided)
    if (callDateTime) {
      const { error: callError } = await supabase
        .from('llamadas_programadas')
        .insert({
          deuda_id: deudaId,
          fecha_hora_utc: new Date(callDateTime).toISOString(),
          estado_llamada: 'programada',
          notas: `Protocol selected: ${plan}`
        });

      if (callError) throw new Error(`Call schedule error: ${callError.message}`);
    }

    // 6. Handle File (if provided)
    const file = formData.get('file') as File;
    console.log('File detected in action:', file ? `${file.name} (${file.size} bytes)` : 'No file');

    if (file && file.size > 0) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${deudaId}_${Date.now()}.${fileExt}`;
      const filePath = `documents/${fileName}`;

      console.log('Attempting upload to bucket "debt-documents" at path:', filePath);

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('debt-documents')
        .upload(filePath, file);

      if (uploadError) {
        console.error('UPLOAD ERROR:', uploadError);
        // No lanzamos error aquí para que al menos la data de la DB se mantenga, 
        // pero lo logueamos para saber qué falló.
      } else {
        console.log('Upload successful:', uploadData);
        const { error: docError } = await supabase
          .from('documentos_deuda')
          .insert({
            deuda_id: deudaId,
            tipo_documento: file.type,
            ruta_archivo: filePath
          });
        
        if (docError) console.error('DOC TABLE ERROR:', docError);
      }
    }

    revalidatePath('/plans');
    return { 
      success: true, 
      message: 'Protocol deployment initiated successfully. Your information has been received, and our specialist team will contact you within the next week. Thank you for your trust in Debt Sentinel.' 
    };

  } catch (error: any) {
    console.error('Submission error:', error);
    return { success: false, message: error.message || 'An unexpected error occurred.' };
  }
}
