import Image from 'next/image';
import estilos from './SecaoSobre.module.css'
import sobreimg from '../../../public/proposta-sobre1.jpg';

export default function SecaoSobre() {
  return (
    <section className={estilos.secao_sobre}>
    <div className={estilos.container_sobre}>
      <div className={estilos.imagem_sobre}>
        <Image src={sobreimg} alt="Imagem sobre nós" />
     </div>
     <div className={estilos.conteudo_sobre}>
        <h3>Sobre nós</h3>
        <p>A Chauwebservices nasceu da paixão por inovação e da visão de impulsionar negócios no cenário digital. Nosso propósito é levar sua empresa ao próximo nível por meio de soluções digitais modernas e eficazes.</p>

        <p>Somos especialistas no desenvolvimento de sites, landing pages e aplicações web, transformando ideias em plataformas digitais poderosas que movem a sua empresa para frente.</p>

        <p>Se você busca resultados e crescimento no ambiente digital, estamos aqui para transformar sua visão em realidade.</p>
     </div>
     </div>
    </section>
  );
}
