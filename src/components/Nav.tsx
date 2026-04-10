import Link from "next/link";
import { brand } from "@/lib/theme/tokens";

export default function Nav({ dark = false }: { dark?: boolean }) {
  return (
    <nav className={`sticky top-0 z-50 px-8 py-4 flex items-center justify-between ${
      dark ? 'bg-plum' : 'bg-white border-b border-tint'
    }`}>
      <Link
        href="/"
        className={`text-2xl font-display font-extrabold tracking-tight ${
          dark ? 'text-white' : 'text-plum'
        }`}
      >
        {brand.name}
      </Link>

      <div className="flex items-center gap-7 text-sm font-medium">
        <Link 
          href="/" 
          className={`hover:opacity-80 transition-opacity ${
            dark ? 'text-muted' : 'text-plum'
          }`}
        >
          Inicio
        </Link>
        <Link 
          href="/faq" 
          className={`hover:opacity-80 transition-opacity ${
            dark ? 'text-muted' : 'text-plum'
          }`}
        >
          FAQ
        </Link>
        <a
          href={brand.appUrl}
          className="bg-violet hover:bg-violet-hover text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          Iniciar sesión
        </a>
      </div>
    </nav>
  );
}