import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-amber-500 font-mono text-[10px] tracking-widest uppercase full-width border-t-2 rounded-none border-t border-amber-500/20 flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-8 py-8 md:py-12 gap-6 mt-auto text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
        <Link href="/">
          <img src="/logo2.png" alt="Debt Sentinel" className="h-16 md:h-20 w-auto object-contain" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto items-center">
        <Link className="text-gray-500 hover:text-amber-500 transition-colors" href="/independence-statement">Independence Statement</Link>
        <Link className="text-gray-500 hover:text-amber-500 transition-colors" href="/regulatory-disclosure">Regulatory Disclosure</Link>
        <Link className="text-amber-500 underline transition-colors" href="/privacy-ledger">Privacy Ledger</Link>
        <Link className="text-gray-500 hover:text-amber-500 transition-colors" href="/terms-of-audit">Terms of Audit</Link>
      </div>
      <div className="text-gray-500 md:text-right max-w-xs w-full md:w-auto mt-4 md:mt-0">
        DON'T TRUST THE PROMISE. AUDIT THE PERFORMANCE. © 2026 DEBT SENTINEL
      </div>
    </footer>
  );
}
