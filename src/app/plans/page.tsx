'use client';

import React, { useState, useRef } from 'react';

export default function Page() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    state: '',
    debtCompany: '',
    estimatedDebt: '',
    callDateTime: '',
    contactConsent: false,
    privacyConsent: false,
    termsConsent: false,
    dataUsageConsent: false,
  });

  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">
      <main className="flex-1 flex flex-col min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-4 md:px-8 py-4 md:h-16 bg-black border-b border-white/10 z-30 gap-4">
          <div className="flex items-center text-on-surface-variant font-label-mono gap-2">
            <span className="material-symbols-outlined text-[16px]">shield</span>
            <span>/ PROTECTION TIER CONFIGURATION</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input className="bg-transparent border-b border-white/20 text-white font-label-mono py-1 px-2 focus:outline-none focus:border-primary-container focus:ring-0 placeholder:text-white/30 w-64 rounded-none" placeholder="SEARCH PROTOCOLS..." type="text" />
              <span className="material-symbols-outlined absolute right-0 top-1 text-white/50">search</span>
            </div>
            <button className="text-white/60 hover:text-white transition-colors p-2"><span className="material-symbols-outlined">notifications</span></button>
          </div>
        </div>

        <div className="flex-1 p-4 sm:p-8 md:p-margin flex flex-col gap-stack-lg max-w-container-max mx-auto w-full">
          <header className="mb-8 border-l-4 border-primary-container pl-6 py-2">
            <h1 className="font-headline-display text-4xl text-white uppercase tracking-tighter">Operational Tiers</h1>
            <p className="font-body-lg text-on-surface-variant mt-2">Select a protection protocol to initiate formal enrollment sequence.</p>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* TIER 01 */}
            <div className={`flex flex-col border transition-all duration-300 relative group ${selectedPlan === 'STANDARD AUDIT' ? 'border-primary-container bg-primary-container/5 scale-[1.02]' : 'border-white/10 bg-surface-container-lowest hover:border-white/30'}`}>
              <div className="p-6 border-b border-white/10 flex flex-col gap-4">
                <div className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">TIER 01</div>
                <h3 className="font-headline-md text-headline-md text-white uppercase">STANDARD AUDIT</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-numeric-data text-[32px] font-bold text-white leading-none">0.25%</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">/ AUM ANNUALLY</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant h-16">Baseline operational verification and quarterly risk assessment for stable portfolios.</p>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-6">
                <ul className="flex flex-col gap-4 font-body-md text-sm text-on-surface">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_box</span>
                    <span>Quarterly Comprehensive Audit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_box</span>
                    <span>Standard Variance Reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_box</span>
                    <span>T+3 Settlement Verification</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/30">
                    <span className="material-symbols-outlined text-[18px] mt-0.5">close</span>
                    <span>Real-time API Access</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button 
                  onClick={() => handlePlanSelect('STANDARD AUDIT')}
                  className={`w-full font-label-mono font-bold uppercase py-3 transition-colors rounded-none border ${selectedPlan === 'STANDARD AUDIT' ? 'bg-primary-container text-black border-primary-container' : 'border-white/20 text-white hover:bg-white/5'}`}
                >
                  {selectedPlan === 'STANDARD AUDIT' ? 'SELECTED' : 'SELECT STANDARD'}
                </button>
              </div>
            </div>

            {/* TIER 02 */}
            <div className={`flex flex-col border-2 transition-all duration-300 relative ${selectedPlan === 'ACTIVE SENTINEL' ? 'border-primary-container bg-primary-container/5 scale-[1.02]' : 'border-primary-container bg-surface-container-lowest shadow-[4px_4px_0px_0px_#FFBA11] -translate-y-2'}`}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-container text-black font-label-mono font-bold uppercase px-4 py-1 text-[10px] z-10">
                RECOMMENDED DEPLOYMENT
              </div>
              <div className="p-6 border-b border-white/10 flex flex-col gap-4 bg-[#1A1A1A]">
                <div className="font-label-mono text-label-mono text-primary-container uppercase tracking-widest">TIER 02</div>
                <h3 className="font-headline-md text-headline-md text-primary-container uppercase">ACTIVE SENTINEL</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-numeric-data text-[32px] font-bold text-white leading-none">0.85%</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">/ AUM ANNUALLY</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant h-16">Continuous monitoring protocol. Instant anomaly detection and automated defensive posturing.</p>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-6 bg-[#0a0a0a]">
                <ul className="flex flex-col gap-4 font-body-md text-sm text-on-surface">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <span className="text-white font-semibold">Continuous Real-time Monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <span>Sub-second Anomaly Alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <span>T+0 Settlement Verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <span>Full REST &amp; WebSocket API Access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                    <span>Automated Covenant Enforcement</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto bg-[#0a0a0a]">
                <button 
                  onClick={() => handlePlanSelect('ACTIVE SENTINEL')}
                  className={`w-full font-label-mono font-bold uppercase py-3 transition-colors rounded-none ${selectedPlan === 'ACTIVE SENTINEL' ? 'bg-white text-black' : 'bg-primary-container text-black hover:bg-[#e6a600]'}`}
                >
                  {selectedPlan === 'ACTIVE SENTINEL' ? 'SELECTED' : 'DEPLOY SENTINEL'}
                </button>
              </div>
            </div>

            {/* TIER 03 */}
            <div className={`flex flex-col border transition-all duration-300 relative group ${selectedPlan === 'ENTERPRISE OVERSIGHT' ? 'border-primary-container bg-primary-container/5 scale-[1.02]' : 'border-white/10 bg-surface-container-lowest hover:border-white/30'}`}>
              <div className="p-6 border-b border-white/10 flex flex-col gap-4">
                <div className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">TIER 03</div>
                <h3 className="font-headline-md text-headline-md text-white uppercase">ENTERPRISE OVERSIGHT</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-numeric-data text-[32px] font-bold text-white leading-none">CUSTOM</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase"></span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant h-16">Bespoke auditing architecture for complex, multi-tranche institutional debt structures.</p>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-6">
                <ul className="flex flex-col gap-4 font-body-md text-sm text-on-surface">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-white text-[18px] mt-0.5">done_all</span>
                    <span>All Active Sentinel Features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-white text-[18px] mt-0.5">done_all</span>
                    <span>Dedicated Quantitative Analyst</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-white text-[18px] mt-0.5">done_all</span>
                    <span>Custom Risk Modeling Engine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-white text-[18px] mt-0.5">done_all</span>
                    <span>On-premise Deployment Option</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button 
                  onClick={() => handlePlanSelect('ENTERPRISE OVERSIGHT')}
                  className={`w-full font-label-mono font-bold uppercase py-3 transition-colors rounded-none border ${selectedPlan === 'ENTERPRISE OVERSIGHT' ? 'bg-primary-container text-black border-primary-container' : 'border-[#333333] text-white hover:border-white'}`}
                >
                  {selectedPlan === 'ENTERPRISE OVERSIGHT' ? 'SELECTED' : 'CONTACT SYNDICATE'}
                </button>
              </div>
            </div>
          </section>

          {selectedPlan && (
            <div ref={formRef} className="mt-16 bg-surface-container border border-white/10 p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500 relative scroll-mt-24">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 text-white/40 hover:text-primary-container transition-colors p-2 flex items-center gap-2 group"
                title="CLOSE TERMINAL"
              >
                <span className="font-label-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">CLOSE TERMINAL</span>
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>

              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <div className="w-12 h-12 bg-primary-container text-black flex items-center justify-center font-bold text-xl">
                  {selectedPlan === 'STANDARD AUDIT' ? '01' : selectedPlan === 'ACTIVE SENTINEL' ? '02' : '03'}
                </div>
                <div>
                  <h2 className="font-headline-md text-headline-md text-white uppercase">Enrollment Terminal</h2>
                  <p className="font-label-mono text-label-mono text-primary-container uppercase tracking-widest">Protocol: {selectedPlan}</p>
                </div>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono text-white/60 uppercase">Full Legal Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="ENTER FULL NAME"
                    className="bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-primary-container transition-colors rounded-none placeholder:text-white/10"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono text-white/60 uppercase">Government ID / Identifier</label>
                  <input 
                    type="text" 
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleInputChange}
                    placeholder="ID-XXXX-XXXX"
                    className="bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-primary-container transition-colors rounded-none placeholder:text-white/10 font-numeric-data"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono text-white/60 uppercase">Jurisdiction (State)</label>
                  <select 
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-primary-container transition-colors rounded-none appearance-none"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="">SELECT JURISDICTION</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                    {/* Add more states as needed */}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono text-white/60 uppercase">Creditor Entity (Debt Company)</label>
                  <input 
                    type="text" 
                    name="debtCompany"
                    value={formData.debtCompany}
                    onChange={handleInputChange}
                    placeholder="COMPANY NAME"
                    className="bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-primary-container transition-colors rounded-none placeholder:text-white/10"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono text-white/60 uppercase">Estimated Debt Liability</label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-white/30 font-numeric-data">$</span>
                    <input 
                      type="number" 
                      name="estimatedDebt"
                      value={formData.estimatedDebt}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      className="w-full bg-black border border-white/10 p-4 pl-8 text-white focus:outline-none focus:border-primary-container transition-colors rounded-none placeholder:text-white/10 font-numeric-data"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono text-white/60 uppercase">Scheduled Consultation Call</label>
                  <input 
                    type="datetime-local" 
                    name="callDateTime"
                    value={formData.callDateTime}
                    onChange={handleInputChange}
                    className="bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-primary-container transition-colors rounded-none font-numeric-data"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="font-label-mono text-label-mono text-white/60 uppercase">Original Debt Documentation (PDF/IMG)</label>
                  <div className="border border-dashed border-white/20 p-8 text-center bg-black/40 hover:bg-black/60 transition-colors cursor-pointer relative group">
                    <input 
                      type="file" 
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <span className="material-symbols-outlined text-4xl text-white/20 group-hover:text-primary-container transition-colors mb-2 block">upload_file</span>
                    <p className="font-label-mono text-sm text-white/40 uppercase">
                      {file ? `FILE: ${file.name}` : 'Click or drag to upload documentation'}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4 pt-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      name="contactConsent"
                      checked={formData.contactConsent}
                      onChange={handleInputChange}
                      className="mt-1.5 accent-primary-container w-4 h-4"
                    />
                    <span className="font-body-md text-sm text-on-surface-variant group-hover:text-white transition-colors">I consent to be contacted by Debt Sentinel analysts regarding my audit request.</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleInputChange}
                      className="mt-1.5 accent-primary-container w-4 h-4"
                    />
                    <span className="font-body-md text-sm text-on-surface-variant group-hover:text-white transition-colors">I have read and accept the <a href="/privacy-ledger" className="text-primary-container underline">Privacy Policy</a>.</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      name="termsConsent"
                      checked={formData.termsConsent}
                      onChange={handleInputChange}
                      className="mt-1.5 accent-primary-container w-4 h-4"
                    />
                    <span className="font-body-md text-sm text-on-surface-variant group-hover:text-white transition-colors">I agree to the <a href="/terms-of-audit" className="text-primary-container underline">Additional Terms of Service</a>.</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      name="dataUsageConsent"
                      checked={formData.dataUsageConsent}
                      onChange={handleInputChange}
                      className="mt-1.5 accent-primary-container w-4 h-4"
                    />
                    <span className="font-body-md text-sm text-on-surface-variant group-hover:text-white transition-colors">Acepto expresamente el uso y tratamiento de mis datos personales para fines de auditoría y gestión de deuda conforme a la ley vigente.</span>
                  </label>
                </div>

                <div className="md:col-span-2 pt-8 flex justify-center">
                  <button 
                    type="button"
                    className="bg-primary-container text-black font-label-mono font-bold uppercase py-4 px-12 hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    Initiate Protocol Deployment
                  </button>
                </div>
              </form>
            </div>
          )}

          <section className="mt-16 border border-white/10 bg-surface-container-lowest overflow-hidden flex flex-col">
            <div className="p-4 bg-black border-b border-white/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-[18px]">analytics</span>
              <span className="font-label-mono text-label-mono text-white uppercase tracking-widest">Protocol Comparison Matrix</span>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-white/20 bg-black/40 font-label-mono text-label-mono text-primary-container uppercase">
                    <th className="p-6 font-medium w-1/4">Metric / Parameter</th>
                    <th className="p-6 font-medium w-1/4 border-l border-white/10">Standard</th>
                    <th className="p-6 font-medium w-1/4 border-l border-white/10 bg-primary-container/10">Active Sentinel</th>
                    <th className="p-6 font-medium w-1/4 border-l border-white/10">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="font-numeric-data text-sm text-white">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6 font-body-md text-on-surface-variant">Audit Frequency</td>
                    <td className="p-6 border-l border-white/10">Quarterly</td>
                    <td className="p-6 border-l border-white/10 bg-primary-container/5 text-primary-container font-bold">Continuous (ms)</td>
                    <td className="p-6 border-l border-white/10">Continuous (ms)</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6 font-body-md text-on-surface-variant">Data Retention</td>
                    <td className="p-6 border-l border-white/10">1 Year</td>
                    <td className="p-6 border-l border-white/10 bg-primary-container/5">5 Years (Immutable)</td>
                    <td className="p-6 border-l border-white/10">Indefinite (Cold Storage)</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6 font-body-md text-on-surface-variant">API Rate Limit</td>
                    <td className="p-6 border-l border-white/10 text-white/30">N/A</td>
                    <td className="p-6 border-l border-white/10 bg-primary-container/5">10,000 req/sec</td>
                    <td className="p-6 border-l border-white/10">Unlimited</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6 font-body-md text-on-surface-variant">Automated Remediation</td>
                    <td className="p-6 border-l border-white/10 text-white/30">Manual Only</td>
                    <td className="p-6 border-l border-white/10 bg-primary-container/5 text-primary-container">Smart Contract Trigger</td>
                    <td className="p-6 border-l border-white/10">Custom Logic Engine</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
