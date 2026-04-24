import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">
      <main className="flex-grow pt-16 md:pt-[104px] pb-stack-lg px-4 md:px-margin max-w-container-max mx-auto w-full relative">
        <div className="flex flex-col gap-stack-lg max-w-4xl mx-auto">
          <header className="border-b-2 border-primary-container pb-stack-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
              <span className="font-label-mono text-label-mono text-primary-container uppercase tracking-widest">Protocol Documentation // Ref: IS-001</span>
            </div>
            <h1 className="font-headline-display text-headline-display text-on-background uppercase tracking-tight text-glow">Independence Statement</h1>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
              Debt Sentinel maintains absolute structural independence. We do not accept referral fees, commission sharing, or any form of compensation from creditors, law firms, or settlement agencies.
            </p>
          </header>

          <section className="flex flex-col gap-6">
            <div className="border border-surface-variant bg-[#1A1A1A] p-8">
              <h2 className="font-headline-md text-headline-md text-primary-container mb-4 uppercase">The Sentinel Pledge</h2>
              <p className="font-body-lg text-on-surface leading-relaxed">
                Our algorithm is agnostic to the parties involved. Its sole mandate is the detection of mathematical and legal variance between reported debt and underlying contractual truth. 
                <br /><br />
                Financial integrity requires an observer with no stake in the outcome. Debt Sentinel is that observer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-surface-variant bg-black p-6">
                <span className="font-label-mono text-label-mono text-primary-container uppercase block mb-2">No Conflicts</span>
                <p className="font-body-md text-on-surface-variant">We do not provide debt settlement services. We audit them.</p>
              </div>
              <div className="border border-surface-variant bg-black p-6">
                <span className="font-label-mono text-label-mono text-primary-container uppercase block mb-2">No Commission</span>
                <p className="font-body-md text-on-surface-variant">Our fee structure is flat and transparent. We never take a percentage of the variance detected.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
