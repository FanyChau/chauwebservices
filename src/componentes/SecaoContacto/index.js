import estilos from './SecaoContacto.module.css';
import Image from 'next/image';
import telefone from '../../../public/telefone.png';
import email from '../../../public/email.png';  
import instagram from '../../../public/ig.png';

export default function SecaoContacto(){
    return (
        <section id="contacto" className={estilos.secao_contacto}>
                
            <div className={estilos.container_contacto}>
                 <h3>Contacto</h3>
                 <div className={estilos.container}>
                <Image src={telefone} alt="telefone" />
                <span>Telefone: (+258) 87 279 4003</span>
             </div> 
             <div className={estilos.container_icons}>
                <Image src={email} alt="Email" />
                <span>Email: chauwebservices@gmail.com</span>
             </div>
            
            </div>
           
            <div className={estilos.container_contacto}>
                <h3>Nossas Redes Sociais</h3>
                <div className={estilos.container_icons}>  
                  <Image src={instagram} alt="Instagram" />
                  <span>/@chauwebservices</span>    
              </div>  
            </div>
        </section>
    )
}