import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">
      
{/* comment */}

{/* comment */}
<main className="flex-1 flex flex-col min-h-screen">
{/* comment */}
<div className="hidden md:flex justify-between items-center w-full px-8 py-4 h-16 bg-black border-b border-white/10 z-30">
<div className="flex items-center text-on-surface-variant font-label-mono gap-2">
<span className="material-symbols-outlined text-[16px]" data-icon="shield">shield</span>
<span>/ PROTECTION TIER CONFIGURATION</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<input className="bg-transparent border-b border-white/20 text-white font-label-mono py-1 px-2 focus:outline-none focus:border-primary-container focus:ring-0 placeholder:text-white/30 w-64 rounded-none" placeholder="SEARCH PROTOCOLS..." type="text"/>
<span className="material-symbols-outlined absolute right-0 top-1 text-white/50" data-icon="search">search</span>
</div>
<button className="text-white/60 hover:text-white transition-colors p-2"><span className="material-symbols-outlined" data-icon="notifications">notifications</span></button>
</div>
</div>
{/* comment */}
<div className="flex-1 p-8 md:p-margin flex flex-col gap-stack-lg max-w-container-max mx-auto w-full">
{/* comment */}

{/* comment */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* comment */}
<div className="flex flex-col border border-white/10 bg-surface-container-lowest relative group hover:border-white/30 transition-colors">
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
<span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" data-icon="check_box">check_box</span>
<span>Quarterly Comprehensive Audit</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" data-icon="check_box">check_box</span>
<span>Standard Variance Reporting</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" data-icon="check_box">check_box</span>
<span>T+3 Settlement Verification</span>
</li>
<li className="flex items-start gap-3 text-white/30">
<span className="material-symbols-outlined text-[18px] mt-0.5" data-icon="close">close</span>
<span>Real-time API Access</span>
</li>
</ul>
</div>
<div className="p-6 pt-0 mt-auto">
<button className="w-full border border-white/20 text-white font-label-mono font-bold uppercase py-3 hover:bg-white/5 transition-colors rounded-none">SELECT STANDARD</button>
</div>
</div>
{/* comment */}
<div className="flex flex-col border-2 border-primary-container bg-surface-container-lowest relative shadow-[4px_4px_0px_0px_#FFBA11] -translate-y-2">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-container text-black font-label-mono font-bold uppercase px-4 py-1 text-[10px]">
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
<span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" data-icon="check_circle" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
<span className="text-white font-semibold">Continuous Real-time Monitoring</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" data-icon="check_circle" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
<span>Sub-second Anomaly Alerts</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" data-icon="check_circle" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
<span>T+0 Settlement Verification</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" data-icon="check_circle" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
<span>Full REST &amp; WebSocket API Access</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5" data-icon="check_circle" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
<span>Automated Covenant Enforcement</span>
</li>
</ul>
</div>
<div className="p-6 pt-0 mt-auto bg-[#0a0a0a]">
<button className="w-full bg-primary-container text-black font-label-mono font-bold uppercase py-3 hover:bg-[#e6a600] transition-colors rounded-none">DEPLOY SENTINEL</button>
</div>
</div>
{/* comment */}
<div className="flex flex-col border border-white/10 bg-surface-container-lowest relative group hover:border-white/30 transition-colors">
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
<span className="material-symbols-outlined text-white text-[18px] mt-0.5" data-icon="done_all">done_all</span>
<span>All Active Sentinel Features</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-white text-[18px] mt-0.5" data-icon="done_all">done_all</span>
<span>Dedicated Quantitative Analyst</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-white text-[18px] mt-0.5" data-icon="done_all">done_all</span>
<span>Custom Risk Modeling Engine</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-white text-[18px] mt-0.5" data-icon="done_all">done_all</span>
<span>On-premise Deployment Option</span>
</li>
</ul>
</div>
<div className="p-6 pt-0 mt-auto">
<button className="w-full border border-[#333333] text-white font-label-mono font-bold uppercase py-3 hover:border-white transition-colors rounded-none">CONTACT SYNDICATE</button>
</div>
</div>
</section>
{/* comment */}
<section className="mt-stack-lg border border-white/10 bg-surface-container-lowest overflow-hidden flex flex-col">

<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-white/20 bg-black font-label-mono text-label-mono text-primary-container uppercase">
<th className="p-4 font-medium w-1/4">Metric / Parameter</th>
<th className="p-4 font-medium w-1/4 border-l border-white/10">Standard</th>
<th className="p-4 font-medium w-1/4 border-l border-white/10 bg-primary-container/10">Active Sentinel</th>
<th className="p-4 font-medium w-1/4 border-l border-white/10">Enterprise</th>
</tr>
</thead>
<tbody className="font-numeric-data text-sm text-white">
<tr className="zebra-row border-b border-white/5">
<td className="p-4 font-body-md text-on-surface-variant">Audit Frequency</td>
<td className="p-4 border-l border-white/10">Quarterly</td>
<td className="p-4 border-l border-white/10 bg-primary-container/5 text-primary-container font-bold">Continuous (ms)</td>
<td className="p-4 border-l border-white/10">Continuous (ms)</td>
</tr>
<tr className="zebra-row border-b border-white/5">
<td className="p-4 font-body-md text-on-surface-variant">Data Retention</td>
<td className="p-4 border-l border-white/10">1 Year</td>
<td className="p-4 border-l border-white/10 bg-primary-container/5">5 Years (Immutable)</td>
<td className="p-4 border-l border-white/10">Indefinite (Cold Storage)</td>
</tr>
<tr className="zebra-row border-b border-white/5">
<td className="p-4 font-body-md text-on-surface-variant">API Rate Limit</td>
<td className="p-4 border-l border-white/10 text-white/30">N/A</td>
<td className="p-4 border-l border-white/10 bg-primary-container/5">10,000 req/sec</td>
<td className="p-4 border-l border-white/10">Unlimited</td>
</tr>
<tr className="zebra-row border-b border-white/5">
<td className="p-4 font-body-md text-on-surface-variant">Automated Remediation</td>
<td className="p-4 border-l border-white/10 text-white/30">Manual Only</td>
<td className="p-4 border-l border-white/10 bg-primary-container/5 text-primary-container">Smart Contract Trigger</td>
<td className="p-4 border-l border-white/10">Custom Logic Engine</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/* comment */}

</main>

    </div>
  );
}
