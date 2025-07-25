import "./globals.css";
import Topo from "../componentes/Topo";
export const metadata = {
  title: "ChauWebServices | Soluções de Tecnologia para a sua Empresa",
  description: "Na ChauWebServices, transformamos suas ideias em plataformas digitais de sucessos. Somos comprometidos em oferecer soluções de tecnologia para atender às necessidades específicas da sua empresa.",
  robots: "index, follow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
