'use client'
import estilos from './CardServicos.module.css';

export default function CardServicos(props){
    function handleMouseEnter(e) {
        e.stopPropagation();
        if (props.onAtivar) props.onAtivar();
    }
    return(
        <div 
            className={`${estilos.card_servicos} ${props.ativo ? estilos.card_ativo : ''}`}
            onMouseEnter={handleMouseEnter}
            tabIndex={0}
            role="button"
            style={{cursor: 'pointer'}}
        >
            <h4 className={estilos.subititulo_Cardservicos}>{props.titulo}</h4>
            <p className={estilos.descricao_Cardservicos}>{props.descricao}</p>    
        </div>
    )
}