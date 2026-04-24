import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">
      <main className="flex-grow pt-16 md:pt-[104px] pb-stack-lg px-4 md:px-margin max-w-container-max mx-auto w-full relative">
        <div className="flex flex-col gap-stack-lg max-w-4xl mx-auto">
          <header className="border-b-2 border-primary-container pb-stack-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>lock</span>
              <span className="font-label-mono text-label-mono text-primary-container uppercase tracking-widest">Protocol Documentation // Ref: PL-001</span>
            </div>
            <h1 className="font-headline-display text-headline-display text-on-background uppercase tracking-tight text-glow">Privacy Ledger</h1>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
              Your data is not our asset. It is a cryptographic responsibility. The Privacy Ledger defines how we ingest, process, and ultimately purge sensitive financial information.
            </p>
          </header>

          <section className="flex flex-col gap-6">
            <div className="border border-surface-variant bg-[#1A1A1A] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-[120px]">security</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary-container mb-4 uppercase">Encryption Standard</h2>
              <p className="font-body-lg text-on-surface leading-relaxed relative z-10">
                All data ingested by Debt Sentinel is encrypted using AES-256 at rest and TLS 1.3 in transit. We utilize ephemeral processing environments where data is held in volatile memory only for the duration of the audit.
              </p>
            </div>

            <div className="bg-black border border-primary-container/20 p-6 font-label-mono text-[11px] text-on-surface-variant">
              <div className="flex justify-between border-b border-primary-container/10 pb-2 mb-2">
                <span>ENCRYPTION KEY STATUS</span>
                <span className="text-primary-container">ROTATED // ACTIVE</span>
              </div>
              <div className="flex justify-between border-b border-primary-container/10 pb-2 mb-2">
                <span>DATA RETENTION POLICY</span>
                <span>30 DAYS POST-AUDIT</span>
              </div>
              <div className="flex justify-between">
                <span>THIRD-PARTY ACCESS</span>
                <span className="text-error">PROHIBITED</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
