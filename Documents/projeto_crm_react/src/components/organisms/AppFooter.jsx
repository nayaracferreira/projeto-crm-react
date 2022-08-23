import React from 'react'

import logoFacebook from'../../assets/logo_facebook.png';
import logoInstagram from'../../assets/logo_instagram.png';
import logoYoutube from'../../assets/logo_youtube.png';
import logoGmail from'../../assets/logo_gmail.png';

export default function AppFooter() {
  return (
    <footer>
    <h2 className="textShadowTitles" id="sigaNos">Sigam-nos nas Redes sociais</h2>
    <div className="redes">            
        <a href="https://pt-br.facebook.com/"><img src={logoFacebook} alt="Logo Facebook: círculo com f no centro" /></a>
        <a href="https://www.instagram.com/"><img src={logoInstagram} alt="Logo do Instagram: círculo com uma câmera em perspectiva frontal no centro" /></a>
        <a href="https://www.youtube.com/"><img src={logoYoutube} alt="Logo do Youtube: círculo onde no centro tem um retangulo com um triângulo rotacionado" /></a>
    </div>

    <div className="cabecalho">
    <p id="faleConosco"><b>Fale conosco</b></p>
    <div>
        <img src={logoGmail} alt="Logo Gmail: a representação de um envelope fechado" />        
    </div>
    <div>
    <a href="http://gmail.com">nayara.dcf@gmail.com</a>
    </div>
    <div>
    <a href="http://gmail.com">renatogamedesigner@gmail.com</a>
    </div>
    
    <p id="cComercial">© 2022 Tera Agenda Serviços de Tecnologia Ltda.
    </p>
    </div>
</footer>  
  )
}
