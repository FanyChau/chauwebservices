import Image from "next/image";
import estilos from "./page.module.css";
import SecaoSobre from "@/componentes/SecaoSobre";
import SecaoBanner from "@/componentes/SecaoBanner";




export default function Home() {
  return (
      <main className={estilos.main}>
        <SecaoBanner />
        <SecaoSobre />
      </main>
  );
}
