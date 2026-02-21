"use client";
import { Container } from './ui/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-stone-50 border-t border-stone-200">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center text-[10px] font-bold uppercase tracking-widest text-stone-400 gap-2">
          <span>© {currentYear} Starplum. All rights reserved.</span>
          <span className="hidden md:inline mx-1 opacity-30">•</span>
          <span>Made with ❤️ by <a href="https://vtci.org" target="_blank" rel="noopener noreferrer" className="text-plum-900 transition-all">VTCI</a></span>
        </div>
      </Container>
    </footer>
  );
};
