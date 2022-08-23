import React from 'react'

import logoCalendario from'../../assets/calendario_verde.png';

export default function AppHeaderAgendamento() {
  return (
    <header>        
        <nav>
            <h1><a href="/">Tera Agenda</a></h1>
            <a id="consulteAgenda" href="/clients"><img src={logoCalendario} alt="Imagem de uma folha de calendário com sinal de visto como verificação no centro" />
                <p>Consulte</p>
            </a> 
        </nav>
    </header> 
  )
}
