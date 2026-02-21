"use client";

export const Divider = ({ className = "" }: { className?: string }) => (
  <div className={`h-px bg-slate-200 w-full ${className}`} />
);
