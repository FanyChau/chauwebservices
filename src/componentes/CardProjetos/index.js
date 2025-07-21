import Image from "next/image";
import estilos from './CardProjetos.module.css';
export default function CardProjetos(props){
    return(
      <div className={estilos.card_projetos}>
                
         <Image className={estilos.img_projeto}
          src={props.imagem}
          alt={props.nome}
          title={props.title}
         />
         <h3>{props.nome}</h3>
         <p>{props.descricao}</p>
         <div className={estilos.container_botao}>
          <div className={estilos.botao}>
            {props.button}
          </div>
         </div>
         
      </div>
    )
}