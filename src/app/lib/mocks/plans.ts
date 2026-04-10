export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: null,
    currency: "MXN",
    period: "mes",
    description: "Para emprendedores que empiezan a vender en línea.",
    features: [
      "1 tienda",
      "Hasta 50 productos",
      "Pagos SPEI",
      "Subdominio xokly.com.mx",
      "Soporte por email",
    ],
    cta: "Empezar gratis",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "500",
    currency: "MXN",
    period: "mes",
    description: "Para negocios que quieren crecer en múltiples canales.",
    features: [
      "1 tienda",
      "Productos ilimitados",
      "Pagos SPEI + CoDi",
      "Facebook & Instagram sync",
      "WhatsApp Business",
      "Soporte prioritario",
    ],
    cta: "Elegir Growth",
    highlighted: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: "3000",
    currency: "MXN",
    period: "mes",
    description: "Para empresas con operaciones avanzadas.",
    features: [
      "Múltiples tiendas",
      "Productos ilimitados",
      "Todos los canales de pago",
      "API access",
      "Dominio personalizado",
      "Soporte dedicado",
      "Reportes avanzados",
    ],
    cta: "Contactar ventas",
    highlighted: false,
  },
];

export function formatPrice(plan: typeof plans[0]) {
  if (plan.price === null) return "Próximamente";
  return `$${(plan.price as number).toLocaleString("es-MX")} ${plan.currency}/${plan.period}`;
}