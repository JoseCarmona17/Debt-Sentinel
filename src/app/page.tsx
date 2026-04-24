import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">



      <main className="flex-grow w-full max-w-[var(--spacing-container-max)] mx-auto px-4 sm:px-[var(--spacing-margin)] py-8 sm:py-[var(--spacing-stack-lg)] flex flex-col gap-16 sm:gap-32">
        {/* Hero Section */}
        <section className="flex flex-col gap-stack-lg border-l border-r border-white/10 px-4 sm:px-8 py-8 sm:py-16 relative">
          <div className="absolute top-0 right-0 p-2 sm:p-4 border-b border-l border-white/10 font-label-mono text-[10px] sm:text-label-mono text-primary-container">
            STATUS: ACTIVE MONITORING
          </div>
          <div className="max-w-4xl flex flex-col gap-stack-md mt-12">
            <div className="flex items-center gap-2 text-primary-container font-label-mono text-[10px] sm:text-label-mono uppercase">
              <span className="w-4 sm:w-8 h-[1px] bg-primary-container"></span>
              System Activation
            </div>
            <h1 className="font-headline-display text-4xl sm:text-headline-display text-white leading-tight">
              Don't trust the promise.<br />
              <span className="text-primary-container">Audit the performance.</span>
            </h1>
            <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-primary-container pl-4">
              The Independent Oversight Authority for Debt Settlement. We bridge the gap between what was promised and what is actually delivered. Data over narrative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* <Link href="/diagnostic" className="bg-primary-container text-on-primary-fixed font-label-mono text-label-mono px-6 sm:px-8 py-4 border border-primary-container hover:bg-white transition-colors hard-shadow flex items-center justify-center gap-2 w-full sm:w-auto">
                GET THE DIAGNOSTIC
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link> */}
              <Link href="/lexicography" className="bg-transparent text-white font-label-mono text-label-mono px-6 sm:px-8 py-4 border border-white hover:border-primary-container hover:text-primary-container transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                VIEW LEXICOGRAPHY
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border-t border-b border-white/10 py-8 mt-12">
            <div className="p-4 sm:p-6 border-b md:border-b-0 md:border-r border-white/10 flex flex-col gap-2">
              <span className="font-label-mono text-label-mono uppercase color-white">Data Integrity</span>
              <span className="font-numeric-data text-3xl sm:text-numeric-data text-white">99.98%</span>
              <span className="font-label-mono text-label-mono text-primary-container">VERIFIED</span>
            </div>
            <div className="p-4 sm:p-6 border-b md:border-b-0 md:border-r border-white/10 flex flex-col gap-2">
              <span className="font-label-mono text-label-mono uppercase color-white">Audits Completed</span>
              <span className="font-numeric-data text-3xl sm:text-numeric-data text-white">12,450+</span>
              <span className="font-label-mono text-label-mono text-primary-container">Q3 2026</span>
            </div>
            <div className="p-4 sm:p-6 flex flex-col gap-2">
              <span className="font-label-mono text-label-mono uppercase color-white">Average Variance Detected</span>
              <span className="font-numeric-data text-3xl sm:text-numeric-data text-white">14.2%</span>
              <span className="font-label-mono text-label-mono text-error">CRITICAL FLAG</span>
            </div>
          </div>
        </section>
      </main>



    </div>
  );
}
