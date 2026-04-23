import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">
      
{/* comment */}

{/* comment */}
<main className="flex-grow pt-[calc(64px+32px)] px-8 pb-32 max-w-container-max mx-auto w-full">
{/* comment */}
<div className="mb-stack-lg border-b border-white/10 pb-stack-md flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
<div>
<h1 className="font-headline-display text-headline-display text-white mb-2">Sentinel Watch™</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Real-time monitoring and compliance verification for Protected Members.</p>
</div>
<div className="text-left sm:text-right w-full sm:w-auto">
<div className="font-label-mono text-label-mono text-primary-container mb-1 uppercase">System Status</div>
<div className="inline-flex items-center space-x-2 bg-surface-container-high px-3 py-1 border border-primary-container">
<span className="w-2 h-2 rounded-none bg-primary-container animate-pulse"></span>
<span className="font-numeric-data text-numeric-data text-white">ACTIVE MONITORING</span>
</div>
</div>
</div>
{/* comment */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* comment */}
<div className="md:col-span-4 bg-surface-container border border-outline-variant p-6 relative flex flex-col justify-between min-h-[240px]">
<div className="absolute top-4 right-4 font-label-mono text-label-mono text-white/40 uppercase">Global Index</div>
<div>
<h2 className="font-headline-md text-headline-md text-white mb-1">Compliance Integrity</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Aggregate systemic adherence</p>
</div>
<div className="mt-auto flex items-end justify-between border-t border-white/10 pt-4">
<div className="font-headline-display text-headline-display text-primary-container">98.4<span className="text-headline-lg">%</span></div>
<div className="bg-green-500 text-black font-label-mono text-label-mono px-2 py-1 uppercase border border-black">Optimal</div>
</div>
</div>
{/* comment */}
<div className="md:col-span-8 bg-surface-container border border-outline p-6 relative">
<div className="absolute top-4 right-4 font-label-mono text-label-mono text-white/40 uppercase">Priority Queue</div>
<h2 className="font-headline-md text-headline-md text-white mb-6 border-b border-white/10 pb-2">Compliance Alerts™</h2>
<div className="space-y-4">
{/* comment */}
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-surface-container-low border border-primary-container/30 border-l-4 border-l-error gap-4">
<div className="flex items-start sm:items-center space-x-4">
<span className="material-symbols-outlined text-error mt-1 sm:mt-0" style={{ fontVariationSettings: '"FILL" 1' }}>warning</span>
<div>
<div className="font-label-mono text-label-mono text-error uppercase mb-1">Variance Detected</div>
<div className="font-body-md text-body-md text-white">Unusual liquidity drain in Member Node #7482</div>
</div>
</div>
<div className="text-left sm:text-right w-full sm:w-auto">
<div className="font-label-mono text-label-mono text-white/60 mb-2 sm:mb-1">08:14:22 UTC</div>
<button className="font-label-mono text-label-mono text-primary-container border border-primary-container px-3 py-2 sm:py-1 hover:bg-primary-container hover:text-black transition-none uppercase w-full sm:w-auto">Investigate</button>
</div>
</div>
{/* comment */}
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-surface-container-low border border-outline-variant gap-4">
<div className="flex items-start sm:items-center space-x-4">
<span className="material-symbols-outlined text-primary-container mt-1 sm:mt-0" style={{ fontVariationSettings: '"FILL" 1' }}>info</span>
<div>
<div className="font-label-mono text-label-mono text-primary-container uppercase mb-1">Audit Initiated</div>
<div className="font-body-md text-body-md text-white">Routine scan of collateral pools commencing</div>
</div>
</div>
<div className="text-left sm:text-right w-full sm:w-auto">
<div className="font-label-mono text-label-mono text-white/60 mb-1">07:55:00 UTC</div>
<span className="font-label-mono text-label-mono text-white/40 uppercase">In Progress</span>
</div>
</div>
</div>
</div>
{/* comment */}
<div className="md:col-span-12 bg-surface-container border border-outline-variant p-6 mt-2">
<div className="flex justify-between items-center mb-6 border-b border-white/10 pb-2">
<h2 className="font-headline-md text-headline-md text-white">Continuous Audit Vectors</h2>
<span className="font-label-mono text-label-mono text-primary-container uppercase">Live Feed</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* comment */}
<div>
<div className="flex justify-between font-label-mono text-label-mono uppercase mb-2">
<span className="text-white">Ledger Reconciliation</span>
<span className="text-primary-container">74%</span>
</div>
<div className="w-full bg-surface-container-low border border-white/10 h-2">
<div className="bg-primary-container h-full w-[74%]"></div>
</div>
<div className="mt-2 font-label-mono text-label-mono text-white/40 text-right">Node A-12</div>
</div>
{/* comment */}
<div>
<div className="flex justify-between font-label-mono text-label-mono uppercase mb-2">
<span className="text-white">Smart Contract Verification</span>
<span className="text-primary-container">100%</span>
</div>
<div className="w-full bg-surface-container-low border border-white/10 h-2">
<div className="bg-green-500 h-full w-[100%]"></div>
</div>
<div className="mt-2 font-label-mono text-label-mono text-green-500 text-right uppercase">Verified</div>
</div>
{/* comment */}
<div>
<div className="flex justify-between font-label-mono text-label-mono uppercase mb-2">
<span className="text-white">Collateral Assessment</span>
<span className="text-primary-container">22%</span>
</div>
<div className="w-full bg-surface-container-low border border-white/10 h-2">
<div className="bg-primary-container h-full w-[22%]"></div>
</div>
<div className="mt-2 font-label-mono text-label-mono text-white/40 text-right">Node C-04</div>
</div>
</div>
</div>
{/* comment */}
<div className="md:col-span-12 bg-surface border border-outline mt-2 overflow-hidden">
<div className="p-4 border-b border-outline-variant bg-surface-container flex justify-between items-center">
<h3 className="font-label-mono text-label-mono text-primary-container uppercase tracking-widest">Recent Account Activity Ledger</h3>
<button className="font-label-mono text-label-mono text-white/60 hover:text-primary-container uppercase flex items-center">
                        Export Data <span className="material-symbols-outlined ml-1 text-[16px]">download</span>
</button>
</div>
<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant bg-surface-container-high">
<th className="p-4 font-label-mono text-label-mono text-primary-container uppercase">Timestamp</th>
<th className="p-4 font-label-mono text-label-mono text-primary-container uppercase">Event ID</th>
<th className="p-4 font-label-mono text-label-mono text-primary-container uppercase">Target Node</th>
<th className="p-4 font-label-mono text-label-mono text-primary-container uppercase">Action</th>
<th className="p-4 font-label-mono text-label-mono text-primary-container uppercase text-right">Status</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-white">
<tr className="data-table-row border-b border-white/5">
<td className="p-4 font-numeric-data text-numeric-data text-[14px] text-white/80">2023-10-27 08:12:01</td>
<td className="p-4 font-mono text-primary-container">EVT-9921-A</td>
<td className="p-4">Member Node #7482</td>
<td className="p-4">Liquidity Transfer</td>
<td className="p-4 text-right"><span className="bg-error/20 text-error border border-error px-2 py-1 font-label-mono text-label-mono uppercase">Flagged</span></td>
</tr>
<tr className="data-table-row border-b border-white/5">
<td className="p-4 font-numeric-data text-numeric-data text-[14px] text-white/80">2023-10-27 07:45:33</td>
<td className="p-4 font-mono text-white/60">EVT-9920-B</td>
<td className="p-4">Vault Alpha</td>
<td className="p-4">Collateral Lock</td>
<td className="p-4 text-right"><span className="bg-green-500/20 text-green-500 border border-green-500 px-2 py-1 font-label-mono text-label-mono uppercase">Cleared</span></td>
</tr>
<tr className="data-table-row border-b border-white/5">
<td className="p-4 font-numeric-data text-numeric-data text-[14px] text-white/80">2023-10-27 07:15:00</td>
<td className="p-4 font-mono text-white/60">EVT-9919-C</td>
<td className="p-4">System Wide</td>
<td className="p-4">Automated Diagnostic</td>
<td className="p-4 text-right"><span className="bg-green-500/20 text-green-500 border border-green-500 px-2 py-1 font-label-mono text-label-mono uppercase">Cleared</span></td>
</tr>
<tr className="data-table-row">
<td className="p-4 font-numeric-data text-numeric-data text-[14px] text-white/80">2023-10-27 06:30:22</td>
<td className="p-4 font-mono text-white/60">EVT-9918-A</td>
<td className="p-4">Member Node #1105</td>
<td className="p-4">Credential Update</td>
<td className="p-4 text-right"><span className="bg-green-500/20 text-green-500 border border-green-500 px-2 py-1 font-label-mono text-label-mono uppercase">Cleared</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
{/* comment */}


    </div>
  );
}
