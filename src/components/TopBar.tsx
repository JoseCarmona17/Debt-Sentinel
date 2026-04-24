'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    // { href: '/diagnostic', label: 'Diagnostic' },
    { href: '/report', label: 'Vulnerability Report' },
    { href: '/dashboard', label: 'Sentinel Watch' },
    { href: '/plans', label: 'Protection Plans' },
    { href: '/lexicography', label: 'Lexicography' },
  ];

  return (
    <nav className="bg-black text-amber-500 font-mono tracking-tight text-sm uppercase w-full px-4 md:px-8 py-4 docked full-width top-0 border-b border-white/10 sticky z-50 flex items-center justify-between">
      {/* Logo - Left aligned */}
      <div className="flex-1 flex justify-start">
        <Link href="/" className="font-black tracking-tighter text-amber-500 flex items-center">
          <img 
            alt="Debt Sentinel Logo" 
            className="h-10 md:h-14 w-auto" 
            src="/logo.png"
          />
        </Link>
      </div>

      {/* Desktop Menu - Perfectly Centered */}
      <div className="hidden lg:flex flex-[2] justify-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
          return (
            <Link 
              key={link.href}
              href={link.href}
              className={`px-2 py-1 transition-colors relative group ${
                isActive 
                  ? 'text-amber-500' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-amber-500 transition-transform duration-200 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          );
        })}
      </div>

      {/* Right Side - Action/Mobile Toggle */}
      <div className="flex-1 flex justify-end items-center gap-4">
        <div className="hidden lg:flex">
          {/* <Link href="/diagnostic" className="bg-primary-container text-on-primary-fixed font-label-mono text-label-mono px-4 py-2 hover:bg-white transition-colors border border-primary-container text-center flex items-center justify-center">
            REQUEST AUDIT
          </Link> */}
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
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col lg:hidden z-40 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-5 border-t border-white/5 transition-colors ${
                  isActive 
                    ? 'text-amber-500 bg-white/5 border-l-4 border-l-amber-500 pl-5' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-l-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="p-6 border-t border-white/5 bg-surface-container-low">
            <Link 
              href="/diagnostic" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-primary-container text-black font-label-mono text-label-mono px-4 py-4 hover:bg-white transition-colors border border-primary-container text-center flex items-center justify-center font-bold"
            >
              REQUEST AUDIT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
