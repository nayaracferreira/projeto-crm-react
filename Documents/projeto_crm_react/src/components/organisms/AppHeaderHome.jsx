import React from 'react'

import avatar from'../../assets/avatar-verde.png';

export default function AppHeaderHome() {
  return (
    <header>        
        <nav>
            <h1 className="textShadowTitles">Tera Agenda</h1>
            <a href="/login"><img src={avatar} alt="Logo em forma redonda com a silhueta de um busto no centro"/>
            </a>           
        </nav>
    </header>
  )
}
