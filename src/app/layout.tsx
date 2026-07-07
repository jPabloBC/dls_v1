import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "MONTAJE DSL",
    template: "%s | MONTAJE DSL",
  },
  description:
    "Plataforma comercial para montaje industrial, estructuras metálicas, soldadura y mantenimiento.",
  icons: {
    icon: "/brand/dls_icon.png",
    shortcut: "/brand/dls_icon.png",
    apple: "/brand/dls_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("h-full antialiased", "font-sans")}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
