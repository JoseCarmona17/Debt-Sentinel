import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">
      
{/* comment */}

{/* comment */}
<main className="flex-grow pt-16 md:pt-[104px] pb-stack-lg px-4 md:px-margin max-w-container-max mx-auto w-full relative">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* comment */}
<aside className="col-span-1 md:col-span-3 hidden md:block">
<div className="sticky top-[104px] border border-surface-variant bg-[#1A1A1A] p-6">
<h3 className="font-label-mono text-label-mono text-primary-container uppercase mb-stack-md pb-2 border-b border-surface-variant">Document Index</h3>
<ul className="flex flex-col gap-4 font-body-md text-body-md text-on-surface">
<li>
<a className="hover:text-primary-container hover:underline transition-none flex items-center gap-2" href="#lexicography">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                Official Lexicography
                            </a>
</li>
<li className="pl-6 text-on-surface-variant"><a className="hover:text-primary-container transition-none" href="#term-audit">Sentinel Audit™</a></li>
<li className="pl-6 text-on-surface-variant"><a className="hover:text-primary-container transition-none" href="#term-alert">Compliance Alert™</a></li>
<li className="pl-6 text-on-surface-variant"><a className="hover:text-primary-container transition-none" href="#term-protect">Sentinel Protection</a></li>
<li className="pt-2">
<a className="hover:text-primary-container hover:underline transition-none flex items-center gap-2" href="#methodology">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                The Sentinel Directive
                            </a>
</li>
</ul>
</div>
</aside>
{/* comment */}
<article className="col-span-1 md:col-span-9 flex flex-col gap-stack-lg">
{/* comment */}
<header className="border-b-2 border-primary-container pb-stack-md">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>book</span>
<span className="font-label-mono text-label-mono text-primary-container uppercase tracking-widest">Protocol Documentation // Ref: D-774</span>
</div>
<h1 className="font-headline-display text-headline-display text-on-background uppercase tracking-tight text-glow">Sentinel Lexicography</h1>
<p className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                        Standardized terminology and operational methodologies governing the execution of debt analysis, variance detection, and institutional risk mitigation protocols.
                    </p>
</header>
{/* comment */}
<section className="flex flex-col gap-stack-md" id="lexicography">
<h2 className="font-headline-lg text-headline-lg text-on-background border-l-4 border-primary-container pl-4 uppercase">Official Lexicon</h2>
<div className="grid grid-cols-1 gap-4">
{/* comment */}
<div className="border border-surface-variant bg-[#1A1A1A] p-6 relative group" id="term-audit">
<div className="absolute top-0 right-0 p-4 font-label-mono text-label-mono text-on-surface-variant uppercase">ID: LX-01</div>
<h3 className="font-headline-md text-headline-md text-primary-container mb-4">Sentinel Audit™</h3>
<p className="font-body-md text-body-md text-on-surface mb-4">
                                A highly intrusive, non-destructive analytical process designed to extract, verify, and cross-reference underlying debt obligations against contractual covenants. It bypasses intermediary summaries to evaluate raw performance data.
                            </p>
<div className="flex gap-2 flex-wrap">
<span className="bg-surface-variant text-on-background font-label-mono text-[10px] px-2 py-1 uppercase border border-[#333333]">Data Extraction</span>
<span className="bg-surface-variant text-on-background font-label-mono text-[10px] px-2 py-1 uppercase border border-[#333333]">Verification</span>
</div>
</div>
{/* comment */}
<div className="border border-surface-variant bg-[#1A1A1A] p-6 relative" id="term-alert">
<div className="absolute top-0 right-0 p-4 font-label-mono text-label-mono text-on-surface-variant uppercase">ID: LX-02</div>
<h3 className="font-headline-md text-headline-md text-error-container mb-4 flex items-center gap-2">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>warning</span>
                                Compliance Alert™
                            </h3>
<p className="font-body-md text-body-md text-on-surface mb-4">
                                An automated, high-priority notification triggered when localized data streams deviate from expected covenant thresholds by a margin exceeding established statistical tolerances (var &gt; 0.005).
                            </p>
<div className="bg-black border border-[#333333] p-4 font-label-mono text-label-mono text-on-surface-variant mt-2">
                                STATUS CHIP REPRESENTATION: <span className="bg-error-container text-on-error-container px-2 py-1 ml-2">VARIANCE DETECTED</span>
</div>
</div>
{/* comment */}
<div className="border border-white bg-[#1A1A1A] p-6 relative" id="term-protect">
<div className="absolute top-0 right-0 p-4 font-label-mono text-label-mono text-on-surface-variant uppercase">ID: LX-03</div>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Sentinel Protection</h3>
<p className="font-body-md text-body-md text-on-surface">
                                The overarching state of structural security achieved post-audit. Indicates that a specific asset portfolio has been rigorously verified and is actively monitored for subsequent deviations, rendering it "Audited &amp; Secured."
                            </p>
</div>
</div>
</section>
{/* comment */}
<section className="flex flex-col gap-stack-md mt-stack-md" id="methodology">
<h2 className="font-headline-lg text-headline-lg text-on-background border-l-4 border-primary-container pl-4 uppercase">The Sentinel Directive</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                        The immutable sequence of operations utilized by our analytical engine to dissect and secure financial portfolios.
                    </p>
<div className="flex flex-col border border-surface-variant bg-[#1A1A1A]">
{/* comment */}
<div className="grid grid-cols-12 border-b border-surface-variant">
<div className="col-span-2 md:col-span-1 bg-black flex items-center justify-center border-r border-surface-variant p-4">
<span className="font-numeric-data text-numeric-data text-primary-container">01</span>
</div>
<div className="col-span-10 md:col-span-11 p-6">
<h4 className="font-headline-md text-headline-md text-on-background mb-2">Data Ingestion &amp; Normalization</h4>
<p className="font-body-md text-body-md text-on-surface">Raw ledgers and contractual documents are assimilated, stripped of narrative formatting, and converted into standardized numerical arrays.</p>
</div>
</div>
{/* comment */}
<div className="grid grid-cols-12 border-b border-surface-variant">
<div className="col-span-2 md:col-span-1 bg-black flex items-center justify-center border-r border-surface-variant p-4">
<span className="font-numeric-data text-numeric-data text-primary-container">02</span>
</div>
<div className="col-span-10 md:col-span-11 p-6">
<h4 className="font-headline-md text-headline-md text-on-background mb-2">Algorithmic Variance Scanning</h4>
<p className="font-body-md text-body-md text-on-surface">Normalized data is processed through the Sentinel Engine to detect mathematical inconsistencies between reported performance and underlying contractual reality.</p>
</div>
</div>
{/* comment */}
<div className="grid grid-cols-12">
<div className="col-span-2 md:col-span-1 bg-black flex items-center justify-center border-r border-surface-variant p-4">
<span className="font-numeric-data text-numeric-data text-primary-container">03</span>
</div>
<div className="col-span-10 md:col-span-11 p-6">
<h4 className="font-headline-md text-headline-md text-on-background mb-2">Vulnerability Flagging</h4>
<p className="font-body-md text-body-md text-on-surface">Detected anomalies are isolated, categorized by risk severity, and output into the actionable Vulnerability Report architecture.</p>
</div>
</div>
</div>
</section>
{/* comment */}
<div className="mt-stack-lg pt-stack-md border-t border-primary-container text-center">
<h3 className="font-headline-md text-headline-md text-on-surface-variant uppercase tracking-widest text-glow">
                        Don't trust the promise. Audit the performance.
                    </h3>
</div>
</article>
</div>
</main>
{/* comment */}


    </div>
  );
}
