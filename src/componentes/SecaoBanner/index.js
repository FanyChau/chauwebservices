import estilos from './SecaoBanner.module.css';
import Link from 'next/link';
export default function SecaoBanner() {
    return (
        <section className={estilos.container_secao_banner}>
            <div className={estilos.texto_banner}>
             <h1>Transformamos ideias em Plataformas Digitais</h1> 
             <div className={estilos.container_botoes}>
                <Link href="#" className={estilos.botao_contato}>Faca seu orçamento</Link>
                <Link href="#servicos" className={estilos.botao_servicos}>Nossos Serviços</Link>
             </div>
            </div>
        </section>
    )
}