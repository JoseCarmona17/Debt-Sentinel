import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-amber-500 font-mono text-[10px] tracking-widest uppercase full-width border-t-2 rounded-none border-t border-amber-500/20 flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-6 mt-auto">
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo2.png" alt="Debt Sentinel" className="h-10 w-auto" />
        </Link>
      </div>
      <div className="flex gap-4">
        <a className="text-gray-500 hover:text-amber-500 transition-colors" href="#">Independence Statement</a>
        <a className="text-gray-500 hover:text-amber-500 transition-colors" href="#">Regulatory Disclosure</a>
        <a className="text-amber-500 underline transition-colors" href="#">Privacy Ledger</a>
        <a className="text-gray-500 hover:text-amber-500 transition-colors" href="#">Terms of Audit</a>
      </div>
      <div className="text-gray-500 text-right max-w-xs">
        DON'T TRUST THE PROMISE. AUDIT THE PERFORMANCE. © 2024 DEBT SENTINEL
      </div>
    </footer>
  );
}
