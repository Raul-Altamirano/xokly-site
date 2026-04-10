import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export function Section({ 
  bg, 
  children, 
  className = "" 
}: { 
  bg?: string; 
  children: ReactNode; 
  className?: string;
}) {
  const bgClass = bg === "warm" ? "bg-warm-white" : "bg-white";
  
  return (
    <section className={`${bgClass} py-18 px-6 ${className}`}>
      <div className="max-w-[1000px] mx-auto">{children}</div>
    </section>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-tint text-plum px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
      {children}
    </span>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-[22px] text-plum mt-9 mb-3">
      {children}
    </h2>
  );
}

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-warm-white min-h-screen">
      <Nav />
      <div className="max-w-[720px] mx-auto px-6 py-14 pb-20">
        <h1 className="font-display text-4xl text-plum mb-2">
          {title}
        </h1>
        <div className="h-[3px] w-12 bg-violet rounded-sm mb-8" />
        <div className="text-body text-[15px] leading-[1.85]">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}