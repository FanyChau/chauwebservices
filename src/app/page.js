'use client'
import Link from 'next/link';
import Image from "next/image";
import clinica from "../../public/foto-clinica.PNG"
import otica from "../../public/foto-otica.PNG"
import sorveteria from "../../public/foto-sorveteria.PNG"
import estilos from "./page.module.css";
import SecaoSobre from "@/componentes/SecaoSobre";
import SecaoBanner from "@/componentes/SecaoBanner";
import CardServicos from "@/componentes/CardServicos";
import CardProjetos from "@/componentes/CardProjetos";
import SecaoContacto from "@/componentes/SecaoContacto";
import Rodape from "@/componentes/Rodape";
import { useState } from "react";


export default function Home() {
  const [cardAtivo, setCardAtivo] = useState(null);
  return (
    
      <main className={estilos.main}>
        <SecaoBanner />
        <section id="servicos" className={estilos.secao_servicos}>
              <h3>Nossos Serviços</h3>
            <div className={estilos.container_servicos}>
               <CardServicos
                titulo="Sites e Landing Pages"
                descricao="Desenvolvemos soluções personalizadas que não apenas capturam a essência da sua marca, mas também convertem visitantes em clientes. Seja para apresentar sua empresa, vender produtos ou gerar leads, criamos plataformas intuitivas, visualmente atraentes e otimizadas para todos os dispositivos."
                ativo={cardAtivo === 0}
                onAtivar={() => setCardAtivo(0)}
               />
               <CardServicos
                titulo="Aplicações Web"
                descricao="Desenvolvemos sistemas customizados, pensados para resolver seus desafios específicos, otimizar fluxos de trabalho e impulsionar a eficiência operacional. Do gerenciamento de tarefas à interação complexa com dados, construímos a aplicação que você precisa."
                ativo={cardAtivo === 1}
                onAtivar={() => setCardAtivo(1)}
               />
               <CardServicos 
                titulo="SEO"
                descricao="Nosso serviço de SEO garante que seu site não apenas apareça nos motores de busca, mas que se destaque. Através de estratégias avançadas e monitoramento constante, trabalhamos para posicionar seu site nas primeiras páginas do Google, atraindo tráfego qualificado e gerando oportunidades de negócio reais."
                ativo={cardAtivo === 2}
                onAtivar={() => setCardAtivo(2)}
               /> 
            </div>
        </section>
        <SecaoSobre />
        <section id="projetos" className={estilos.secao_projetos}>
            <h3>Projetos</h3>
            <div className={estilos.container_projetos}>
              <CardProjetos 
                imagem={clinica}
                title="Clínica Médica Life"
                nome="Clínica Médica Life"
                descricao="Projeto de site para clínica médica, com foco em usabilidade e design responsivo."
                 button={<Link href="https://fanychau.github.io/projeto-clinica/" target="_blank"className={estilos.botao}>Ver Projeto</Link>}
              />
              <CardProjetos 
                imagem={otica}
                title="Ótica Vida"
                nome="Ótica Vida"
                descricao="Projeto de site para ótica, destacando produtos e serviços com uma interface amigável."
                 button={<Link href="https://projeto-site-otica.vercel.app/" target="_blank"className={estilos.botao}>Ver Projeto</Link>}
              />
              <CardProjetos
                imagem={sorveteria}
                nome="Sorveteria Artesanal"
                title="Projeto de site para sorveteria"
                descricao="Projeto de site para uma sorvetrtia com mulplas paginas com foco no uso de SPAs."
                button={<Link href="https://projeto-site-sorveteria.vercel.app/" target="_blank"className={estilos.botao}>Ver Projeto</Link>}
                 />
             </div> 
        </section>
        <SecaoContacto />
        <Rodape />
      </main>
  );
}
