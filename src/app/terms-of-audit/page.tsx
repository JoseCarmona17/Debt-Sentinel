import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">
      
      <main className="flex-grow pt-16 md:pt-[104px] pb-stack-lg px-4 md:px-margin max-w-container-max mx-auto w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          <aside className="col-span-1 md:col-span-3 hidden md:block">
            <div className="sticky top-[104px] border border-surface-variant bg-[#1A1A1A] p-6">
              <h3 className="font-label-mono text-label-mono text-primary-container uppercase mb-stack-md pb-2 border-b border-surface-variant">Protocol Index</h3>
              <ul className="flex flex-col gap-4 font-body-md text-body-md text-on-surface">
                <li>
                  <a className="hover:text-primary-container hover:underline transition-none flex items-center gap-2" href="#governance">
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    Audit Governance
                  </a>
                </li>
                <li className="pl-6 text-on-surface-variant"><a className="hover:text-primary-container transition-none" href="#methodology">Standard Procedures</a></li>
                <li className="pl-6 text-on-surface-variant"><a className="hover:text-primary-container transition-none" href="#verification">Verification Levels</a></li>
                <li className="pt-2">
                  <a className="hover:text-primary-container hover:underline transition-none flex items-center gap-2" href="#terms">
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    Legal Provisions
                  </a>
                </li>
                <li className="pl-6 text-on-surface-variant"><a className="hover:text-primary-container transition-none" href="#liabilities">Liability Framework</a></li>
              </ul>
            </div>
          </aside>

          <article className="col-span-1 md:col-span-9 flex flex-col gap-stack-lg">
            
            <header className="border-b-2 border-primary-container pb-stack-md">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>gavel</span>
                <span className="font-label-mono text-label-mono text-primary-container uppercase tracking-widest">Regulatory Framework // Ref: T-001</span>
              </div>
              <h1 className="font-headline-display text-headline-display text-on-background uppercase tracking-tight text-glow">Terms of Audit</h1>
              <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                The binding protocols and operational mandates governing the execution of financial verification, data integrity assessment, and systemic monitoring by Debt Sentinel.
              </p>
            </header>

            <section className="flex flex-col gap-stack-md" id="governance">
              <h2 className="font-headline-lg text-headline-lg text-on-background border-l-4 border-primary-container pl-4 uppercase">Audit Governance</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="border border-surface-variant bg-[#1A1A1A] p-6 relative group" id="methodology">
                  <div className="absolute top-0 right-0 p-4 font-label-mono text-label-mono text-on-surface-variant uppercase">REF: GA-01</div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-4">Procedural Integrity</h3>
                  <p className="font-body-md text-body-md text-on-surface mb-4">
                    All audits conducted by Debt Sentinel utilize the Sentinel Engine™ protocol. This ensures that every data point is cross-referenced against the original contractual source, eliminating intermediary distortions.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-surface-variant text-on-background font-label-mono text-[10px] px-2 py-1 uppercase border border-[#333333]">Immutable Logic</span>
                    <span className="bg-surface-variant text-on-background font-label-mono text-[10px] px-2 py-1 uppercase border border-[#333333]">Zero Trust Protocol</span>
                  </div>
                </div>

                <div className="border border-surface-variant bg-[#1A1A1A] p-6 relative" id="verification">
                  <div className="absolute top-0 right-0 p-4 font-label-mono text-label-mono text-on-surface-variant uppercase">REF: GA-02</div>
                  <h3 className="font-headline-md text-headline-md text-white mb-4">Verification Standards</h3>
                  <p className="font-body-md text-body-md text-on-surface mb-4">
                    We maintain three tiers of verification intensity, depending on the risk profile of the asset class under review.
                  </p>
                  <div className="bg-black border border-[#333333] p-4 font-label-mono text-label-mono text-on-surface-variant mt-2 space-y-2">
                    <div className="flex justify-between items-center">
                      <span>LEVEL 1: STANDARD SCAN</span>
                      <span className="text-primary-container">PASS</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>LEVEL 2: DEEP INTRUSION</span>
                      <span className="text-primary-container">ACTIVE</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>LEVEL 3: FORENSIC RECONSTRUCTION</span>
                      <span className="text-amber-500/50">PENDING</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-stack-md mt-stack-md" id="terms">
              <h2 className="font-headline-lg text-headline-lg text-on-background border-l-4 border-primary-container pl-4 uppercase">Legal Provisions</h2>
              
              <div className="flex flex-col border border-surface-variant bg-[#1A1A1A]">
                <div className="grid grid-cols-12 border-b border-surface-variant">
                  <div className="col-span-2 md:col-span-1 bg-black flex items-center justify-center border-r border-surface-variant p-4">
                    <span className="font-numeric-data text-numeric-data text-primary-container">01</span>
                  </div>
                  <div className="col-span-10 md:col-span-11 p-6">
                    <h4 className="font-headline-md text-headline-md text-on-background mb-2">Non-Negotiable Access</h4>
                    <p className="font-body-md text-body-md text-on-surface">By engaging Debt Sentinel, the client grants irrevocable, read-only access to all relevant financial data streams for the duration of the monitoring cycle.</p>
                  </div>
                </div>

                <div className="grid grid-cols-12 border-b border-surface-variant" id="liabilities">
                  <div className="col-span-2 md:col-span-1 bg-black flex items-center justify-center border-r border-surface-variant p-4">
                    <span className="font-numeric-data text-numeric-data text-primary-container">02</span>
                  </div>
                  <div className="col-span-10 md:col-span-11 p-6">
                    <h4 className="font-headline-md text-headline-md text-on-background mb-2">Liability Disclaimer</h4>
                    <p className="font-body-md text-body-md text-on-surface">Debt Sentinel provides objective data verification. We do not provide financial advice. All decisions based on our audit reports are the sole responsibility of the client.</p>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <div className="col-span-2 md:col-span-1 bg-black flex items-center justify-center border-r border-surface-variant p-4">
                    <span className="font-numeric-data text-numeric-data text-primary-container">03</span>
                  </div>
                  <div className="col-span-10 md:col-span-11 p-6">
                    <h4 className="font-headline-md text-headline-md text-on-background mb-2">Data Sovereignty</h4>
                    <p className="font-body-md text-body-md text-on-surface">While we process your data, the original data remains your property. Debt Sentinel stores only the cryptographic hashes of verified records to ensure permanent auditability without compromising privacy.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-stack-lg pt-stack-md border-t border-primary-container text-center">
              <h3 className="font-headline-md text-headline-md text-on-surface-variant uppercase tracking-widest text-glow">
                UNYIELDING PRECISION. INDEPENDENT VERIFICATION.
              </h3>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
