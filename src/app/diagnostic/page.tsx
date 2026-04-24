import React from 'react';

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md grid-bg">

      {/* comment */}

      {/* comment */}
      <main className="flex-grow pt-24 pb-16 grid-bg">
        <div className="max-w-container-max mx-auto px-margin">
          {/* comment */}
          <header className="mb-stack-lg border-b border-surface-bright pb-6">
            <h1 className="font-headline-display text-headline-display text-white mb-2 uppercase tracking-tight">The Diagnostic</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Secure intake terminal for program verification. All inputs are logged and structurally analyzed for variance against creditor norms.</p>
          </header>
          {/* comment */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-margin items-start">
            {/* comment */}
            <aside className="md:col-span-3 border border-surface-bright bg-surface-container-low p-6 shadow-[2px_2px_0px_0px_rgba(255,186,17,0)] hover:shadow-[2px_2px_0px_0px_rgba(255,186,17,1)] transition-none duration-0">
              <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-6 tracking-widest border-b border-surface-bright pb-2">Intake Sequence</h2>
              <nav className="flex flex-col gap-4">
                {/* comment */}
                <div className="flex items-start gap-3 cursor-default">
                  <div className="w-6 h-6 flex-shrink-0 bg-primary-container text-black flex items-center justify-center font-numeric-data text-[12px] font-bold">01</div>
                  <div>
                    <p className="font-label-mono text-label-mono text-primary-container uppercase">Contract Verification</p>
                    <p className="font-body-md text-[13px] text-on-surface-variant mt-1 leading-tight">Awaiting input parameters.</p>
                  </div>
                </div>
                {/* comment */}
                <div className="flex items-start gap-3 opacity-50 cursor-not-allowed">
                  <div className="w-6 h-6 flex-shrink-0 border border-on-surface-variant text-on-surface-variant flex items-center justify-center font-numeric-data text-[12px]">02</div>
                  <div>
                    <p className="font-label-mono text-label-mono text-on-surface uppercase">Payment History</p>
                  </div>
                </div>
                {/* comment */}
                <div className="flex items-start gap-3 opacity-50 cursor-not-allowed">
                  <div className="w-6 h-6 flex-shrink-0 border border-on-surface-variant text-on-surface-variant flex items-center justify-center font-numeric-data text-[12px]">03</div>
                  <div>
                    <p className="font-label-mono text-label-mono text-on-surface uppercase">Settlement Ledger</p>
                  </div>
                </div>
              </nav>
              <div className="mt-8 pt-6 border-t border-surface-bright">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label-mono text-[10px] text-on-surface-variant uppercase">Session ID</span>
                  <span className="font-numeric-data text-[12px] text-white">#DS-993-A4X</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label-mono text-[10px] text-on-surface-variant uppercase">Security Protocol</span>
                  <span className="font-label-mono text-[10px] text-green-500 uppercase">Active</span>
                </div>
              </div>
            </aside>
            {/* comment */}
            <section className="md:col-span-9 border border-white bg-surface-container-low p-8 relative">
              {/* comment */}
              <div className="flex justify-between items-start mb-8 pb-4 border-b border-surface-bright">
                <div>
                  <h2 className="font-headline-md text-headline-md text-white">Contract Parameters</h2>
                </div>
                <div className="font-label-mono text-label-mono text-on-surface-variant uppercase text-right">
                  <span className="block text-primary-container">Status: Unverified</span>
                  <span className="block mt-1 opacity-60">Req. Origin Data</span>
                </div>
              </div>
              {/* comment */}
              <div className="bg-black border border-primary-container p-4 mb-8 flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container mt-0.5">terminal</span>
                <div>
                  <p className="font-label-mono text-label-mono text-primary-container uppercase mb-2">System Directive: Raw Data Required</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">Input exact figures as they appear on the original creditor documentation. Do not round numbers. Do not estimate dates. Inaccuracies at this stage will trigger a variance alert during the settlement audit phase.</p>
                </div>
              </div>
              {/* comment */}
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* comment */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-mono text-label-mono text-on-surface uppercase flex justify-between">
                      Creditor Entity Name
                      <span className="text-error">*</span>
                    </label>
                    <input className="bg-black border border-surface-bright text-white font-body-md p-3 focus:outline-none focus:border-primary-container focus:ring-0 focus:shadow-[0_0_0_1px_rgba(255,186,17,1)] transition-none w-full placeholder:text-surface-variant" placeholder="e.g. SYCHRONY BANK" type="text" />
                  </div>
                  {/* comment */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-mono text-label-mono text-on-surface uppercase flex justify-between">
                      Full Account Identifier
                      <span className="text-error">*</span>
                    </label>
                    <input className="bg-black border border-surface-bright text-white font-numeric-data p-3 focus:outline-none focus:border-primary-container focus:ring-0 focus:shadow-[0_0_0_1px_rgba(255,186,17,1)] transition-none w-full placeholder:text-surface-variant tracking-wider" placeholder="XXXX-XXXX-XXXX-XXXX" type="text" />
                  </div>
                  {/* comment */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-mono text-label-mono text-on-surface uppercase flex justify-between">
                      Original Enrolled Balance
                      <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 font-numeric-data text-on-surface-variant">$</span>
                      <input className="bg-black border border-surface-bright text-white font-numeric-data p-3 pl-8 focus:outline-none focus:border-primary-container focus:ring-0 focus:shadow-[0_0_0_1px_rgba(255,186,17,1)] transition-none w-full placeholder:text-surface-variant" placeholder="0.00" type="number" />
                    </div>
                  </div>
                  {/* comment */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-mono text-label-mono text-on-surface uppercase flex justify-between">
                      Current Claimed Balance
                      <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 font-numeric-data text-on-surface-variant">$</span>
                      <input className="bg-black border border-surface-bright text-white font-numeric-data p-3 pl-8 focus:outline-none focus:border-primary-container focus:ring-0 focus:shadow-[0_0_0_1px_rgba(255,186,17,1)] transition-none w-full placeholder:text-surface-variant" placeholder="0.00" type="number" />
                    </div>
                  </div>
                  {/* comment */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-mono text-label-mono text-on-surface uppercase flex justify-between">
                      Date of Enrollment
                      <span className="text-error">*</span>
                    </label>
                    <input className="bg-black border border-surface-bright text-white font-numeric-data p-3 focus:outline-none focus:border-primary-container focus:ring-0 focus:shadow-[0_0_0_1px_rgba(255,186,17,1)] transition-none w-full" style={{ colorScheme: 'dark' }} type="date" />
                  </div>
                </div>
                {/* comment */}
                <div className="mt-8 border-2 border-dashed border-surface-bright bg-black p-8 text-center hover:border-primary-container hover:bg-surface-container-low transition-none cursor-pointer group">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 group-hover:text-primary-container">upload_file</span>
                  <p className="font-label-mono text-label-mono text-white uppercase mb-2">Upload Original Contract Documentation</p>
                  <p className="font-body-md text-[14px] text-on-surface-variant">Drag and drop PDF or encrypted image files. Max 50MB.</p>
                  <button className="mt-6 border border-white text-white font-label-mono text-[12px] uppercase tracking-widest px-6 py-2 hover:bg-white hover:text-black transition-none" type="button">Select File</button>
                </div>
                {/* comment */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4 mt-8 pt-8 border-t border-surface-bright">
                  <button className="w-full sm:w-auto border border-surface-bright text-on-surface-variant font-label-mono text-[12px] uppercase tracking-widest px-6 py-3 hover:text-white hover:border-white transition-none" type="button">
                    Clear Matrix
                  </button>
                  <button className="w-full sm:w-auto justify-center bg-primary-container text-black font-label-mono text-[12px] font-bold uppercase tracking-widest px-8 py-3 hover:bg-white transition-none flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none translate-x-0 translate-y-0 hover:translate-x-[2px] hover:translate-y-[2px]" type="button">
                    Inject Verification
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
      {/* comment */}


    </div>
  );
}
