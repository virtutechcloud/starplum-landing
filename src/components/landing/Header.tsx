"use client";
import { useState, useEffect } from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { landingCopy } from "@/lib/landing";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = landingCopy.header.links.map((l) => l.href.substring(1));
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-50/90 backdrop-blur-md border-b border-stone-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-20">
        <NextLink href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-plum-900 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg shadow-plum-900/10">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold text-stone-900 tracking-tight">
            Starplum
          </span>
        </NextLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {landingCopy.header.links.map((link) => (
            <NextLink
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-all hover:text-plum-900 ${
                activeSection === link.href.substring(1)
                  ? "text-plum-900"
                  : "text-stone-500"
              }`}
            >
              {link.label}
            </NextLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#waitlist">
            <Button
              size="sm"
              className="hidden md:inline-flex bg-plum-900 hover:bg-plum-950 text-white shadow-xl shadow-plum-900/10 px-6"
            >
              {landingCopy.header.primaryCTA}
            </Button>
          </a>
          <button
            className="lg:hidden p-2 text-stone-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-stone-50 border-b border-stone-200 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-4">
              {landingCopy.header.links.map((link) => (
                <NextLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-bold text-stone-900"
                >
                  {link.label}
                </NextLink>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a href="#waitlist" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-plum-900">
                    {landingCopy.header.primaryCTA}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
