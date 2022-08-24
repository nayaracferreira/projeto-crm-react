import React from 'react'

import desenho from'../../assets/desenho.jpg';

import { AppFooter, AppHeader } from '../organisms';


export default function Agenda() {
  return (
    <div className="body">    
    
    <AppHeader/>

    <main>
        <h2 className="textShadowTitles">Desculpe-nos, página em construção...</h2>
        <img src={desenho} className="provisorio" alt="Imagem do site Dreamstime - Desenho de um homem vestido com epi(Equipamento de Proteção Individual) com os dois braços meio levantado demonstrando o sinal de parada" />       
    </main>

   <AppFooter/>
   
</div>
  )
}
