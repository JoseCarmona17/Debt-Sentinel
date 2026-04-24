import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">
      <main className="flex-grow pt-16 md:pt-[104px] pb-stack-lg px-4 md:px-margin max-w-container-max mx-auto w-full relative">
        <div className="flex flex-col gap-stack-lg max-w-4xl mx-auto">
          <header className="border-b-2 border-primary-container pb-stack-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>description</span>
              <span className="font-label-mono text-label-mono text-primary-container uppercase tracking-widest">Protocol Documentation // Ref: RD-001</span>
            </div>
            <h1 className="font-headline-display text-headline-display text-on-background uppercase tracking-tight text-glow">Regulatory Disclosure</h1>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
              Debt Sentinel operates as an independent data analysis platform. We are not a law firm, a debt collection agency, or a credit repair organization.
            </p>
          </header>

          <section className="space-y-8">
            <div className="border-l-4 border-primary-container pl-6 py-2">
              <h2 className="font-headline-md text-headline-md text-white mb-2 uppercase">Operational Scope</h2>
              <p className="font-body-md text-on-surface">
                Our services are limited to the algorithmic verification of financial data against public regulatory standards and contractual documentation. We provide tools for users to identify variances and potential violations; we do not execute legal filings on behalf of users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-container-low border border-surface-variant p-6">
                <h3 className="font-label-mono text-label-mono text-primary-container uppercase mb-4 underline">Compliance Matrix</h3>
                <ul className="space-y-4 font-body-md text-on-surface-variant">
                  <li className="flex gap-2">
                    <span className="text-primary-container">▪</span>
                    FDCPA (Fair Debt Collection Practices Act)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-container">▪</span>
                    FCRA (Fair Credit Reporting Act)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-container">▪</span>
                    UDAAP (Unfair, Deceptive, or Abusive Acts or Practices)
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-body-md text-on-surface-variant italic border-t border-b border-surface-variant py-4">
                  "The integrity of the financial system relies on the accurate representation of debt. We provide the mathematical proof of that accuracy, or lack thereof."
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
