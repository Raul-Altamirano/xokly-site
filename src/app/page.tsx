"use client";

import { useState, useEffect } from "react";
import DashboardCarousel from "@/app/DashboardCarousel";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Section, Badge } from "@/components/UI";
import { brand } from "@/lib/theme/tokens";
import { getFeatures, getSteps, getSocialProof, submitWaitlist } from "@/lib/services/api";

export default function Landing() {
  const [features, setFeatures] = useState<any[]>([]);
  const [steps, setSteps] = useState<any[]>([]);
  const [proof, setProof] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getFeatures().then(setFeatures);
    getSteps().then(setSteps);
    getSocialProof().then(setProof);
  }, []);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const res = await submitWaitlist(email);
    if (res.success) {
      setSubmitted(true);
      setEmail("");
    }
  };

    const dashboardImages = [
    {
      src: "/dashboard/dash-analitycs.jpg",
      alt: "Vista general del dashboard de Xokly",
      title: "Panel principal",
      description: "Resumen del negocio, métricas y actividad reciente.",
    },
    // {
    //   src: "/dashboard/02-products.png",
    //   alt: "Módulo de productos de Xokly",
    //   title: "Gestión de productos",
    //   description: "Administra catálogo, variantes, stock e imágenes.",
    // },
    // {
    //   src: "/dashboard/03-orders.png",
    //   alt: "Módulo de pedidos de Xokly",
    //   title: "Pedidos y ventas",
    //   description: "Consulta órdenes, estados y seguimiento comercial.",
    // },
    // {
    //   src: "/dashboard/04-storefront.png",
    //   alt: "Storefront de Xokly",
    //   title: "Storefront",
    //   description: "Experiencia de compra clara y lista para convertir.",
    // },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Nav dark />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-dark to-plum-darker py-24 px-6 text-center">
        <div className="absolute -top-32 -right-20 w-[340px] h-[340px] rounded-full bg-violet/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 w-[260px] h-[260px] rounded-full bg-violet-hover/15 blur-3xl" />

        <div className="relative z-10 max-w-[700px] mx-auto">
          <Badge>Plataforma ecommerce SaaS</Badge>

          <h1 className="font-display font-extrabold text-white text-[clamp(36px,6vw,58px)] leading-tight tracking-tight mt-5 mb-5">
            El comercio electrónico{" "}
            <span className="text-violet-hover">hecho para México</span>
          </h1>

          <p className="text-muted text-lg leading-relaxed max-w-[520px] mx-auto mb-9">
            {brand.description}
          </p>

          <a
            href={brand.appUrl}
            className="inline-block bg-violet hover:bg-violet-hover hover:-translate-y-0.5 text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-[0_4px_24px_rgba(124,79,212,0.35)]"
          >
            Crear mi tienda gratis
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <Section bg="warm" className="!py-7">
        <div className="flex justify-center gap-10 flex-wrap text-[13px] text-plum/60 font-semibold">
          {proof.map((item, i) => (
            <span key={i}>✦ {item}</span>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section>
        <div className="text-center mb-12">
          <Badge>Características</Badge>
          <h2 className="font-display text-[34px] text-plum mt-4 tracking-tight">
            Todo lo que necesitas para vender en línea
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-warm-white border border-tint rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(124,79,212,0.08)] transition-all"
            >
              <div className="text-[32px] mb-3.5">{f.icon}</div>
              <h3 className="text-plum text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-body text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Steps */}
      <Section bg="warm">
        <div className="text-center mb-12">
          <Badge>¿Cómo funciona?</Badge>
          <h2 className="font-display text-[34px] text-plum mt-4">
            Tres pasos para empezar a vender
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((s) => (
            <div key={s.number}>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet to-violet-hover text-white text-xl font-extrabold font-display flex items-center justify-center mx-auto mb-4">
                {s.number}
              </div>
              <h3 className="text-plum text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-body text-sm leading-relaxed max-w-[260px] mx-auto">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Screenshot placeholder */}
      {/* Screenshot carousel */}
      <Section>
        <div className="text-center mb-8">
          <Badge>Plataforma</Badge>
          <h2 className="font-display text-[34px] text-plum mt-4">
            Un dashboard pensado para ti
          </h2>
        </div>

        <DashboardCarousel items={dashboardImages} />
      </Section>

      {/* CTA / Waitlist */}
      <section className="bg-gradient-to-br from-plum to-plum-dark py-20 px-6 text-center">
        <h2 className="font-display font-extrabold text-4xl text-white mb-4 tracking-tight">
          ¿Listo para vender en línea?
        </h2>
        <p className="text-muted text-base max-w-[440px] mx-auto mb-8">
          Crea tu tienda hoy y únete a los negocios mexicanos que ya venden con Xokly.
        </p>

        {submitted ? (
          <div className="text-violet-hover text-base font-semibold">
            ¡Listo! Te avisaremos cuando lancemos.
          </div>
        ) : (
          <div className="flex gap-2 justify-center flex-wrap max-w-[440px] mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[200px] px-4 py-3.5 rounded-lg text-[15px] outline-none text-plum"
            />
            <button
              onClick={handleWaitlist}
              className="bg-violet hover:bg-violet-hover text-white px-7 py-3.5 rounded-lg text-[15px] font-bold cursor-pointer transition-colors shadow-[0_4px_24px_rgba(124,79,212,0.35)]"
            >
              Avísame
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
