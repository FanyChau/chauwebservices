import estilos from './Menu.module.css';
import Link from 'next/link';

export default function Menu() {
  return(
    <div className={estilos.menu}>
      <ul>
        <li><Link href="#servicos">Serviços</Link></li>
        <li><Link href="#sobre">Sobre</Link></li>
        <li><Link href="#projetos">Projetos</Link></li>
        <li><Link href="#contacto">Contacto</Link></li>
      </ul>
    </div>
  )
}