'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/diagnostic', label: 'Diagnostic' },
    { href: '/report', label: 'Vulnerability Report' },
    { href: '/dashboard', label: 'Sentinel Watch' },
    { href: '/plans', label: 'Protection Plans' },
    { href: '/lexicography', label: 'Lexicography' },
  ];

  return (
    <nav className="bg-black text-amber-500 font-mono tracking-tight text-sm uppercase flex justify-between items-center w-full px-4 md:px-8 py-4 max-w-full docked full-width top-0 border-b-0 rounded-none border-b border-white/10 sticky z-50">
      <div className="font-black tracking-tighter text-amber-500 flex items-center">
        <Link href="/">
          <img 
            alt="Debt Sentinel Logo" 
            className="h-12 md:h-16 w-auto" 
            src="/logo.png"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
          return (
            <Link 
              key={link.href}
              href={link.href}
              className={`px-2 py-1 transition-colors ${
                isActive 
                  ? 'text-amber-500 border-b border-amber-500 pb-1 active:scale-95 duration-75' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="hidden lg:flex">
        <Link href="/diagnostic" className="bg-primary-container text-on-primary-fixed font-label-mono text-label-mono px-4 py-2 hover:bg-white transition-colors border border-primary-container text-center flex items-center justify-center">
          REQUEST AUDIT
        </Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <button 
        className="lg:hidden text-amber-500 hover:text-white transition-colors flex items-center"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <span className="material-symbols-outlined text-3xl">
          {isMobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col lg:hidden z-40 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-4 border-t border-white/5 transition-colors ${
                  isActive 
                    ? 'text-amber-500 bg-white/5 border-l-4 border-l-amber-500 pl-5' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-l-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="p-4 border-t border-white/5">
            <Link 
              href="/diagnostic" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-primary-container text-on-primary-fixed font-label-mono text-label-mono px-4 py-3 hover:bg-white transition-colors border border-primary-container text-center flex items-center justify-center"
            >
              REQUEST AUDIT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
