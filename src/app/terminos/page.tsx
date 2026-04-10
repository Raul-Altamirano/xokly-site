import { LegalPage, SectionHeading } from "@/components/UI";
import { brand } from "@/lib/theme/tokens";
import Link from "next/link";

export default function Terminos() {
  const H = SectionHeading;
  return (
    <LegalPage title="Términos y Condiciones">
      <p className="text-violet font-semibold mb-6">
        {brand.legalName} — Última actualización: 9 de abril de 2026
      </p>

      <H>1. Aceptación de Términos</H>
      <p>
        Bienvenido a Xokly, plataforma de comercio electrónico SaaS desarrollada y operada por{" "}
        {brand.legalName}. Al registrarte, acceder o utilizar nuestros servicios, aceptas estar
        sujeto a estos Términos y Condiciones.
      </p>

      <H>2. Descripción del Servicio</H>
      <p>
        Xokly es una plataforma SaaS multi-tenant que permite a emprendedores y empresas mexicanas
        gestionar su tienda en línea, catálogo de productos, pedidos, pagos vía SPEI, y publicación
        en marketplaces como Facebook e Instagram.
      </p>

      <H>3. Registro y Cuenta de Tenant</H>
      <p>
        Para utilizar Xokly como tenant debes proporcionar información verídica, completa y
        actualizada. Eres responsable de mantener la confidencialidad de tus credenciales.
      </p>

      <H>4. Uso Aceptable</H>
      <p>
        Te comprometes a utilizar la plataforma únicamente para fines lícitos y comerciales
        legítimos, cumpliendo con todas las leyes mexicanas aplicables.
      </p>

      <H>5. Integración con Plataformas de Terceros</H>
      <p>
        <strong>Meta (Facebook e Instagram):</strong> La sincronización de productos está sujeta a las Políticas de la Plataforma de Meta. {brand.legalName} actúa como Tech Provider registrado.
      </p>
      <p>
        <strong>Fintoc:</strong> El procesamiento de pagos vía SPEI está sujeto a los términos de Fintoc.
      </p>

      <H>6. Pagos y Facturación</H>
      <p>
        Los planes de Xokly se cobran mensualmente en pesos mexicanos (MXN) incluido IVA.
      </p>

      <H>7. Propiedad de los Datos</H>
      <p>
        Los datos de tu negocio (productos, clientes, pedidos) son de tu propiedad exclusiva. En caso
        de cancelación, tendrás 30 días para exportarlos antes de su eliminación.
      </p>

      <H>8. Privacidad</H>
      <p>
        El tratamiento de datos personales cumple con la LFPDPPP. Consulta nuestro{" "}
        <Link href="/privacidad" className="text-violet font-semibold hover:underline">
          Aviso de Privacidad
        </Link>.
      </p>

      <H>9. Propiedad Intelectual</H>
      <p>
        Todo el software, diseño, marca y tecnología de Xokly son propiedad de {brand.legalName}.
      </p>

      <H>10. Limitación de Responsabilidad</H>
      <p>
        La responsabilidad máxima de {brand.legalName} se limita al monto pagado por el tenant en los
        últimos 3 meses.
      </p>

      <H>11. Jurisdicción y Ley Aplicable</H>
      <p>
        Estos términos se rigen por las leyes de los Estados Unidos Mexicanos.
      </p>

      <H>12. Contacto</H>
      <p>
        <strong>Email:</strong> {brand.email}
        <br />
        <strong>Horario:</strong> Lunes a Viernes, 9:00 AM – 6:00 PM
        <br />
        <strong>Razón social:</strong> {brand.legalName}
      </p>
    </LegalPage>
  );
}