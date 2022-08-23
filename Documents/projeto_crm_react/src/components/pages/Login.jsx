import React from 'react'

import { AppFooter, AppHeader } from '../organisms';


export default function Login() {
  return (
    <body>  

    <AppHeader/>
    
    <main>

        <div id="mainEntrar" className="size-margin-90-5">
            <h2 className="textShadowTitles">Acesse a Tera Agenda</h2>        

        <form action="/login/company/:companyId" id="formEntrar">
            <div>
                <label htmlFor="login">Login</label>
                <input name="login" type="email" id="login" placeholder="Digite seu e-mail de cadastro" required />
            </div>

            <div>
                <label htmlFor="senha">Senha</label>
                <input name="senha" type="password" id="senha" placeholder="Digite sua senha" minlength="8" maxlength="8" required />
            </div>

            <label>
                <input type="checkbox" checked="cheked" />Lembrar-me
            </label>

            <a href="/login/company/:companyId" aria-label="Entrar: Encaminha para a página de agendamento"></a>
            <button type="submit" className="btnAcesso">Entrar</button>            
        </form>
        
        <form action= "/cadastro">
            <div id="cadastrese">
            <h2 className="textShadowTitles">Não tem acesso ainda?</h2>
            <button type="submit" className="btnAcesso">Cadastre-se</button>
            </div>            
        </form>
        </div>
    </main>
    
<AppFooter/>            

</body>
  )
}
