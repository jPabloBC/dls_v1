export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export const publicNavigation: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Cotizar", href: "/cotizar" },
  { label: "Contacto", href: "/contacto" },
];

export const adminNavigation: NavigationItem[] = [
  {
    label: "Resumen",
    href: "/admin",
    description: "Indicadores comerciales y proximas acciones.",
  },
  {
    label: "Leads",
    href: "/admin/leads",
    description: "Oportunidades captadas desde formularios y campanas.",
  },
  {
    label: "Contactos",
    href: "/admin/contactos",
    description: "Base comercial de clientes, proveedores y prospectos.",
  },
  {
    label: "Cotizaciones",
    href: "/admin/cotizaciones",
    description: "Solicitudes y propuestas comerciales en preparacion.",
  },
  {
    label: "Inbox",
    href: "/admin/inbox",
    description: "Mensajes recibidos desde los formularios publicos.",
  },
  {
    label: "Ventas",
    href: "/admin/ventas",
    description: "Seguimiento del ciclo comercial y tareas de cierre.",
  },
  {
    label: "Configuracion",
    href: "/admin/configuracion",
    description: "Ajustes futuros de usuarios, canales y automatizaciones.",
  },
];
