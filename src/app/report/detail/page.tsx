import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">

      {/* comment */}

      {/* comment */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto p-margin flex flex-col gap-margin">
        {/* comment */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-surface-variant pb-stack-sm">
          <div>
            <p className="font-label-mono text-label-mono text-primary-container mb-2 uppercase">Entity ID: #88392-AX // Audited</p>
            <h1 className="font-headline-display text-headline-display text-on-surface">Vulnerability Report™</h1>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <p className="font-label-mono text-label-mono text-on-surface-variant uppercase">Timestamp</p>
            <p className="font-numeric-data text-numeric-data text-on-surface">2023.10.24-14:32:00Z</p>
          </div>
        </div>
        {/* comment */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* comment */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-surface-variant relative p-6 flex flex-col justify-between min-h-[280px]">
            <div className="absolute top-4 right-4 font-label-mono text-label-mono text-on-surface-variant">
              LAST AUDITED: 0.2s AGO
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Sentinel Score</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-[200px]">Systemic risk evaluation based on 42 cross-referenced compliance vectors.</p>
            </div>
            <div className="flex items-baseline gap-2 mt-auto">
              <span className="text-[84px] font-headline-display text-error leading-none tracking-tighter">18</span>
              <span className="font-numeric-data text-numeric-data text-on-surface-variant">/ 100</span>
            </div>
            <div className="w-full bg-surface-variant h-2 mt-4 relative rounded-none">
              <div className="absolute top-0 left-0 h-full bg-error" style={{ width: '18%' }}></div>
            </div>
          </div>
          {/* comment */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-surface-variant p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline-md text-headline-md text-on-surface">The Benchmark</h2>
              <span className="bg-primary-container text-black px-2 py-1 uppercase font-label-mono text-label-mono">Variance Detected</span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-surface-variant border border-surface-variant flex-grow">
              {/* comment */}
              <div className="bg-surface p-6 flex flex-col gap-4">
                <div className="font-label-mono text-label-mono text-primary-container uppercase border-b border-surface-variant pb-2">The Promise</div>
                <div className="font-body-lg text-body-lg text-on-surface">"Guaranteed standard compliance and strict operational adherence to industry regulations."</div>
                <div className="mt-auto pt-4 flex gap-4 border-t border-surface-variant">
                  <div>
                    <span className="font-label-mono text-label-mono text-on-surface-variant block uppercase">Advertised Yield</span>
                    <span className="font-numeric-data text-numeric-data text-primary-fixed">14.2%</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-label-mono text-on-surface-variant block uppercase">Claimed Risk</span>
                    <span className="font-numeric-data text-numeric-data text-primary-fixed">Low</span>
                  </div>
                </div>
              </div>
              {/* comment */}
              <div className="bg-surface p-6 flex flex-col gap-4 relative overflow-hidden">
                {/* comment */}
                <div className="absolute inset-0 bg-error/5 pointer-events-none z-0"></div>
                <div className="relative z-10 font-label-mono text-label-mono text-error uppercase border-b border-error/30 pb-2">The Performance</div>
                <div className="relative z-10 font-body-lg text-body-lg text-on-surface">Material deviation from claimed operational procedures. High variance in debt collection practices.</div>
                <div className="relative z-10 mt-auto pt-4 flex gap-4 border-t border-error/30">
                  <div>
                    <span className="font-label-mono text-label-mono text-on-surface-variant block uppercase">Actual Yield</span>
                    <span className="font-numeric-data text-numeric-data text-error">8.1%</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-label-mono text-on-surface-variant block uppercase">Audited Risk</span>
                    <span className="font-numeric-data text-numeric-data text-error">CRITICAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* comment */}
          <div className="col-span-12 border border-surface-variant bg-surface-container-lowest mt-stack-sm">
            <div className="p-4 border-b border-surface-variant bg-surface-container flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface">Active Red Flags</h3>
              <div className="font-label-mono text-label-mono text-on-surface-variant uppercase">3 Violations Found</div>
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface font-label-mono text-label-mono text-primary-container border-b border-surface-variant">
                    <th className="p-4 uppercase font-normal">Vector ID</th>
                    <th className="p-4 uppercase font-normal">Regulation</th>
                    <th className="p-4 uppercase font-normal">Violation Description</th>
                    <th className="p-4 uppercase font-normal text-right">Risk Tier</th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-body-md text-on-surface">
                  <tr className="border-b border-surface-variant bg-surface hover:bg-surface-container-high transition-colors">
                    <td className="p-4 font-numeric-data text-numeric-data text-on-surface-variant">V-091</td>
                    <td className="p-4"><span className="bg-surface-variant px-2 py-1 font-label-mono text-label-mono border border-surface-variant">FDCPA § 807(2)</span></td>
                    <td className="p-4">False representation of the character, amount, or legal status of debt.</td>
                    <td className="p-4 text-right"><span className="bg-error text-black px-2 py-1 uppercase font-label-mono text-label-mono">Severe</span></td>
                  </tr>
                  <tr className="border-b border-surface-variant bg-surface-container hover:bg-surface-container-high transition-colors">
                    <td className="p-4 font-numeric-data text-numeric-data text-on-surface-variant">V-114</td>
                    <td className="p-4"><span className="bg-surface-variant px-2 py-1 font-label-mono text-label-mono border border-surface-variant">FCRA § 623</span></td>
                    <td className="p-4">Failure to provide accurate information to consumer reporting agencies.</td>
                    <td className="p-4 text-right"><span className="bg-primary-container text-black px-2 py-1 uppercase font-label-mono text-label-mono">Elevated</span></td>
                  </tr>
                  <tr className="bg-surface hover:bg-surface-container-high transition-colors">
                    <td className="p-4 font-numeric-data text-numeric-data text-on-surface-variant">V-202</td>
                    <td className="p-4"><span className="bg-surface-variant px-2 py-1 font-label-mono text-label-mono border border-surface-variant">UDAAP</span></td>
                    <td className="p-4">Deceptive omission of critical penalty clauses in collection communications.</td>
                    <td className="p-4 text-right"><span className="bg-error text-black px-2 py-1 uppercase font-label-mono text-label-mono">Severe</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* comment */}
          <div className="col-span-12 border border-primary-container bg-primary-container/10 p-8 mt-stack-sm flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary-container flex items-center gap-2">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>warning</span>
                Sentinel Directive™
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface mt-2 max-w-3xl">
                Immediate suspension of portfolio acquisition recommended. Entity demonstrates systemic regulatory vulnerability and high probability of operational failure. Proceeding poses severe compliance risk.
              </p>
            </div>
            <button className="bg-primary-container text-black font-label-mono text-label-mono uppercase px-8 py-4 border border-primary-container hover:bg-primary-fixed transition-colors whitespace-nowrap tracking-wider font-bold shadow-[2px_2px_0px_0px_#FFFFFF]">
              INITIATE LOCKDOWN
            </button>
          </div>
        </div>
      </main>
      {/* comment */}


    </div>
  );
}
