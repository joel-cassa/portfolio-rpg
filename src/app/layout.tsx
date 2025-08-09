import type { Metadata } from "next";
// Importa a fonte pixelada do Google
import { Press_Start_2P } from "next/font/google";

// Importa a biblioteca de estilos que acabamos de instalar
import "nes.css/css/nes.min.css";

// Importa o CSS global (que já estava lá)
import "./globals.css";

// Configura a fonte para ser usada no site
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio RPG",
  description: "A aventura de um Devorador de Mentes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* Aplica a classe da fonte a todo o corpo do site */}
      <body className={pressStart2P.className}>{children}</body>
    </html>
  );
}