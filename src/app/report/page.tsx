import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">
      
{/* comment */}

{/* comment */}
<main className="flex-grow pt-24 pb-16 px-8 max-w-container-max mx-auto w-full flex flex-col gap-gutter">
{/* comment */}
<header className="flex flex-col md:flex-row md:items-end justify-between border-b border-surface-variant pb-6 mb-4 rounded-none gap-4">
<div>
<div className="font-label-mono text-label-mono text-primary-container uppercase mb-2">System Generated</div>
<h1 className="font-headline-display text-4xl sm:text-headline-display text-on-surface uppercase tracking-tight">Vulnerability Report™</h1>
</div>
<div className="text-right mt-4 md:mt-0 font-label-mono text-label-mono text-on-surface-variant uppercase flex flex-col gap-1 border border-surface-variant p-2 bg-surface-container-low rounded-none">
<span>Subject: ACCT-8942-B</span>
<span>Audited: 2024-10-24 14:02:11 UTC</span>
</div>
</header>
{/* comment */}
<div className="grid grid-cols-12 gap-gutter">
{/* comment */}
<div className="col-span-12 md:col-span-4 bg-surface-container-low border border-outline-variant p-6 flex flex-col justify-between rounded-none relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 font-label-mono text-label-mono text-error uppercase">Critical</div>
<div>
<h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-4">Sentinel Score™</h2>
<div className="font-headline-display text-[72px] font-black leading-none text-error tracking-tighter mb-2">34</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 border-t border-surface-variant pt-2">Score below threshold (75). High probability of structural debt variance.</p>
</div>
</div>
{/* comment */}
<div className="col-span-12 md:col-span-8 bg-surface-container border border-outline-variant p-6 rounded-none flex flex-col">
<div className="flex justify-between items-center mb-6">
<h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase">Benchmark: Capital Efficiency</h2>
<span className="material-symbols-outlined text-primary-container">monitoring</span>
</div>
<div className="flex-grow flex flex-col justify-center gap-6">
{/* comment */}
<div>
<div className="flex justify-between font-label-mono text-label-mono text-on-surface uppercase mb-2">
<span>Amount Claimed (Unverified)</span>
<span className="font-numeric-data text-numeric-data text-on-surface">$14,500.00</span>
</div>
<div className="w-full bg-surface-variant h-4 rounded-none border border-outline-variant overflow-hidden">
<div className="bg-surface-bright h-full w-full"></div>
</div>
</div>
{/* comment */}
<div>
<div className="flex justify-between font-label-mono text-label-mono text-primary-container uppercase mb-2">
<span>Sentinel Projected Settlement</span>
<span className="font-numeric-data text-numeric-data text-primary-container">$6,200.00</span>
</div>
<div className="w-full bg-surface-variant h-4 rounded-none border border-outline-variant overflow-hidden relative">
<div className="bg-primary-container h-full w-[42%] border-r border-black relative">
{/* comment */}
<div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 6px)' }}></div>
</div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-surface-variant flex justify-between items-center bg-black p-3 rounded-none">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase">Identified Variance</span>
<span className="font-numeric-data text-headline-md text-primary-container font-bold">$8,300.00</span>
</div>
</div>
{/* comment */}
<div className="col-span-12 md:col-span-8 border border-outline-variant bg-surface-container-low rounded-none overflow-hidden">
<div className="p-4 border-b border-outline-variant bg-surface flex justify-between items-center">
<h2 className="font-label-mono text-label-mono text-primary-container uppercase">Detected Red Flags</h2>
<div className="bg-error text-on-error font-label-mono text-[10px] uppercase px-2 py-1 font-bold">3 Violations</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="font-label-mono text-label-mono text-on-surface-variant uppercase border-b border-surface-variant bg-surface">
<th className="p-4 font-normal">Status</th>
<th className="p-4 font-normal">Regulation Code</th>
<th className="p-4 font-normal">Variance Description</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
<tr className="border-b border-surface-variant bg-surface-container-low">
<td className="p-4">
<div className="inline-block bg-error text-black font-label-mono text-[10px] uppercase px-2 py-1 font-bold rounded-none">Variance Detected</div>
</td>
<td className="p-4 font-numeric-data text-primary-container">FDCPA §807(2)</td>
<td className="p-4">False representation of character/amount of debt.</td>
</tr>
<tr className="border-b border-surface-variant bg-surface">
<td className="p-4">
<div className="inline-block bg-error text-black font-label-mono text-[10px] uppercase px-2 py-1 font-bold rounded-none">Variance Detected</div>
</td>
<td className="p-4 font-numeric-data text-primary-container">FCRA §623(a)(1)</td>
<td className="p-4">Reporting information known to be inaccurate.</td>
</tr>
<tr className="bg-surface-container-low">
<td className="p-4">
<div className="inline-block bg-primary-container text-black font-label-mono text-[10px] uppercase px-2 py-1 font-bold rounded-none">Review Required</div>
</td>
<td className="p-4 font-numeric-data text-primary-container">UDAAP §1036</td>
<td className="p-4">Deceptive act in collection practice identified in log.</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* comment */}
<div className="col-span-12 md:col-span-4 bg-black border border-primary-container shadow-[2px_2px_0px_0px_#ffba11] p-6 rounded-none flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>warning</span>
<h2 className="font-headline-md text-headline-md text-primary-container uppercase tracking-tight">Sentinel Directive™</h2>
</div>
<p className="font-body-lg text-body-lg text-on-surface mb-6">Immediate action required. Structural anomalies detected in creditor ledger. Do not initiate payment sequence.</p>
</div>
<button className="w-full bg-primary-container text-black font-label-mono text-label-mono uppercase py-4 font-bold hover:bg-white transition-none rounded-none border border-transparent hover:border-primary-container">
                    Initiate Dispute Protocol
                </button>
</div>
{/* comment */}
<div className="col-span-12 mt-8 text-center border-t border-surface-variant pt-6">
<p className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface-variant">Independence Statement</p>
<p className="font-body-md text-[12px] text-surface-variant mt-2 max-w-3xl mx-auto">This Sentinel Score™ and accompanying data are generated via algorithmic audit of provided documentation and public regulatory databases. Debt Sentinel operates as an independent diagnostic entity and does not provide legal counsel. Data is unyielding; interpretation requires execution.</p>
</div>
</div>
</main>
{/* comment */}


    </div>
  );
}
