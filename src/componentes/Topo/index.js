'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/cws.jpg';
import estilos from "./Topo.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Menu from "@/componentes/Menu";

export default function Topo (){
     const [menuAberto, setMenuAberto] = useState(false);

        function atualizarMenu() {
      setMenuAberto(!menuAberto);
  };
    return (
        <header className={estilos.container_topo}>
            <Image className={estilos.imagem_logo} src={logo} alt="logomarca"/>
            <div className={estilos.container_menu}>
              <Link href="#servicos">Serviços</Link>
              <Link href="#sobre">Sobre</Link>
              <Link href="#projetos">Projetos</Link>
            </div>
            <Link className={estilos.link_contato} href="#contacto">Contacto</Link>
            <button className={estilos.botao} onClick={atualizarMenu}>
                {menuAberto ? <IoCloseOutline /> : <CiMenuBurger />}
            </button>
                {menuAberto && (
                   <Menu />
                   )}
        </header>
    )
}
