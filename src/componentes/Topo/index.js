import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/cws.jpg';
import estilos from "./Topo.module.css"

export default function Topo (){
    return (
        <header className={estilos.container_topo}>
            <Image className={estilos.imagem_logo} src={logo} alt="logomarca"/>
            <div className={estilos.container_menu}>
              <Link href="/">Home</Link>
              <Link href="#servicos">Serviços</Link>
              <Link href="#sobre">Sobre</Link>
              <Link href="#projetos">Projetos</Link>
            </div>
            <Link className={estilos.link_contato} href="#contacto">Contacto</Link>
        </header>
    )
}
