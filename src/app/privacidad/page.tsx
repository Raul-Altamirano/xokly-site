import { LegalPage, SectionHeading } from "@/components/UI";
import { brand } from "@/lib/theme/tokens";
import Link from "next/link";

export default function Privacidad() {
  const H = SectionHeading;
  return (
    <LegalPage title="Aviso de Privacidad">
      <p className="text-violet font-semibold mb-6">
        {brand.legalName} — Última actualización: 9 de abril de 2026
      </p>
      <p>
        {brand.legalName} (en adelante "Xokly"), con domicilio fiscal en {brand.location}, es
        responsable del tratamiento de los datos personales que nos proporciones, de conformidad con
        la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y
        su Reglamento.
      </p>

      <H>1. Datos personales que recopilamos</H>
      <p>Dependiendo de tu relación con Xokly, podemos recopilar:</p>
      <p>
        <strong>Tenants (dueños de tienda):</strong> nombre completo, correo electrónico, teléfono,
        RFC, nombre del negocio, dirección fiscal, información bancaria (CLABE) para recepción de
        pagos.
      </p>
      <p>
        <strong>Compradores finales:</strong> nombre, correo electrónico, teléfono, dirección de
        envío, historial de pedidos.
      </p>
      <p>
        <strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas,
        cookies técnicas y analíticas.
      </p>

      <H>2. Finalidades del tratamiento</H>
      <p>
        <strong>Finalidades primarias (necesarias):</strong> crear y administrar tu cuenta, procesar
        pedidos y pagos vía SPEI/CoDi, sincronizar catálogos de productos con Meta (Facebook e
        Instagram), enviar notificaciones relacionadas con el servicio, cumplir obligaciones legales
        y fiscales.
      </p>
      <p>
        <strong>Finalidades secundarias (opcionales):</strong> enviar comunicaciones promocionales
        sobre Xokly, realizar análisis estadísticos para mejorar la plataforma. Si no deseas que tus
        datos sean tratados para finalidades secundarias, puedes comunicarlo a {brand.email}.
      </p>

      <H>3. Compartición de datos con terceros</H>
      <p>
        Xokly puede compartir tus datos personales con los siguientes terceros, únicamente para las
        finalidades descritas:
      </p>
      <p>
        <strong>Meta Platforms, Inc.</strong> — Sincronización de catálogos de productos con Facebook
        e Instagram. Xokly actúa como Tech Provider registrado ante Meta.
      </p>
      <p>
        <strong>Fintoc México</strong> — Procesamiento de pagos vía SPEI/CoDi.
      </p>
      <p>
        <strong>Proveedores de infraestructura</strong> — Amazon Web Services (AWS), MongoDB Atlas,
        Vercel y Cloudflare, para el alojamiento y operación de la plataforma.
      </p>

      <H>4. Datos recopilados a través de Meta (Facebook e Instagram)</H>
      <p>
        Cuando un tenant conecta su cuenta de Facebook o Instagram a través de Xokly, podemos
        acceder a: información del perfil público, lista de páginas administradas, catálogos de
        productos, información de WhatsApp Business (si aplica).
      </p>

      <H>5. Cookies y tecnologías de rastreo</H>
      <p>
        Xokly utiliza cookies técnicas esenciales para el funcionamiento de la plataforma y cookies
        analíticas para entender cómo se utiliza el servicio.
      </p>

      <H>6. Derechos ARCO</H>
      <p>
        Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos
        personales. Para ejercerlos, envía una solicitud a {brand.email}.
      </p>

      <H>7. Transferencias internacionales</H>
      <p>
        Tus datos pueden ser almacenados en servidores ubicados fuera de México (AWS, MongoDB Atlas,
        Vercel) para la operación del servicio.
      </p>

      <H>8. Seguridad</H>
      <p>
        Implementamos medidas técnicas, administrativas y físicas para proteger tus datos personales,
        incluyendo cifrado de datos en tránsito y reposo.
      </p>

      <H>9. Modificaciones al Aviso de Privacidad</H>
      <p>
        Nos reservamos el derecho de modificar este Aviso de Privacidad. Las modificaciones serán
        publicadas en esta página.
      </p>

      <H>10. Contacto</H>
      <p>
        <strong>Email:</strong> {brand.email}
        <br />
        <strong>Razón social:</strong> {brand.legalName}
        <br />
        <strong>Domicilio fiscal:</strong> {brand.location}
      </p>
    </LegalPage>
  );
}