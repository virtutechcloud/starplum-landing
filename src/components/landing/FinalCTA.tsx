"use client";
import { useState } from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { landingCopy } from "@/lib/landing";
import { motion, AnimatePresence } from "framer-motion";

const WEB3FORMS_ACCESS_KEY = "d863f4d2-0c29-407c-838c-73ea195e3d8f";

export const FinalCTA = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Starplum Waitlist Signup");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="waitlist" className="py-16 md:py-24 bg-stone-50 scroll-mt-20">
      <Container>
        <Card
          className="bg-stone-50 border-none p-6 sm:p-10 md:p-24 relative overflow-hidden text-center md:text-left shadow-[0_48px_96px_-12px_rgba(0,0,0,0.3)]"
          hover={false}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#f5ebf5_0%,transparent_50%)] opacity-70 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <div className="inline-flex mb-6 md:mb-8">
                <div className="bg-plum-50 text-plum-900 border border-plum-200 px-5 py-2 flex items-center gap-3 shadow-md shadow-plum-100/20 rounded-full">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                    Coming Soon
                  </span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-stone-900 leading-[1.05] tracking-tight mb-6 md:mb-10">
                {landingCopy.finalCTA.title}
              </h2>

              <p className="text-lg md:text-2xl text-stone-600 mb-8 md:mb-12 max-w-xl leading-relaxed font-medium">
                {landingCopy.finalCTA.description}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-[10px] font-black text-stone-700 uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2">
                  ✓ Private Cloud Secured
                </span>
                <span className="flex items-center gap-2">
                  ✓ No model training
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl w-full max-w-md mx-auto border border-stone-200">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-plum-50 text-plum-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner ring-4 ring-plum-100/50">
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black text-stone-900 mb-4 tracking-tight">
                      You&apos;re on the list!
                    </h3>
                    <p className="text-stone-500 font-medium leading-relaxed">
                      We&apos;ll notify you as soon as early access is available.
                      Thank you for your interest.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] ml-1">
                        Full Name
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        className="w-full px-6 py-4 rounded-2xl bg-stone-50 border-2 border-stone-100 focus:outline-none focus:border-plum-200 focus:ring-0 transition-all text-stone-900 font-bold placeholder:text-stone-300"
                        placeholder="Elizabeth Thorne"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] ml-1">
                        Firm Email
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        className="w-full px-6 py-4 rounded-2xl bg-stone-50 border-2 border-stone-100 focus:outline-none focus:border-plum-200 focus:ring-0 transition-all text-stone-900 font-bold placeholder:text-stone-300"
                        placeholder="e.thorne@firm.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] ml-1">
                        Organization
                      </label>
                      <input
                        required
                        name="organization"
                        type="text"
                        className="w-full px-6 py-4 rounded-2xl bg-stone-50 border-2 border-stone-100 focus:outline-none focus:border-plum-200 focus:ring-0 transition-all text-stone-900 font-bold placeholder:text-stone-300"
                        placeholder="Thorne & Co. Legal"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full py-5 text-xl font-black bg-plum-900 hover:bg-plum-950 text-white shadow-2xl shadow-plum-900/20 rounded-2xl transition-all active:scale-[0.98]"
                    >
                      {formState === "submitting"
                        ? "Processing..."
                        : landingCopy.finalCTA.cta}
                    </Button>
                    {formState === "error" && (
                      <p className="text-[11px] text-center text-red-500 font-bold pt-1">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    <p className="text-[10px] text-center text-stone-400 font-bold leading-relaxed pt-2">
                      We&apos;ll reach out when early access opens.
                      <br />
                      Your data is handled per professional confidentiality
                      standards.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};
