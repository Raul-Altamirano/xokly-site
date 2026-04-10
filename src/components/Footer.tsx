import Link from "next/link";
import { brand } from "@/lib/theme/tokens";

export default function Footer() {
  return (
    <footer className="bg-plum text-muted px-8 py-12 text-[13px] leading-relaxed">
      <div className="max-w-[1000px] mx-auto flex flex-wrap gap-12 justify-between">
        <div className="min-w-[200px]">
          <div className="font-display text-[22px] font-extrabold text-white mb-3">
            {brand.name}
          </div>
          <div>Comercio electrónico para México.</div>
          <div className="mt-1">{brand.origin}</div>
        </div>

        <div className="min-w-[140px]">
          <div className="text-white font-bold mb-2 text-[13px] uppercase tracking-wider">
            Legal
          </div>
          <div className="flex flex-col gap-1">
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              Preguntas Frecuentes
            </Link>
          </div>
        </div>

        <div className="min-w-[180px]">
          <div className="text-white font-bold mb-2 text-[13px] uppercase tracking-wider">
            Contacto
          </div>
          <div>{brand.email}</div>
          <div className="mt-2">{brand.legalName}</div>
          <div>{brand.location}</div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto mt-8 pt-5 border-t border-white/10 text-center text-xs">
        © {new Date().getFullYear()} {brand.legalName} Todos los derechos reservados.
      </div>
    </footer>
  );
}