import React from 'react'

import Default from '../templates/Default';

import desenho from'../../assets/desenho.jpg';


export default function Agenda() {
  return (
    <body>    
    <header>        
        <nav>
            <h1><a href="index.html">Tera Agenda</a></h1>            
        </nav>
    </header> 

    <main>
        <h2 className="textShadowTitles">Desculpe-nos, página em construção...</h2>
        <img src={desenho} alt="Imagem do site Dreamstime - Desenho de um homem vestido com epi(Equipamento de Proteção Individual) com os dois braços meio levantado demonstrando o sinal de parada" style="display:flex; align-self:center; margin-top: 10px;" />       
    </main>

   <Default></Default>
</body>
  )
}
