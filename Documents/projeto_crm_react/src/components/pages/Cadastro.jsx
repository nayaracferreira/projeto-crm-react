import React, { useState } from 'react'

import { AppFooter, AppHeader, Cep, ImaskCnpj, Imask} from '../organisms/Index';

export default function Cadastro() {

    const [cadastroSenha, setcadastroSenha] = useState({});
    const [confSenha, setConfSenha] = useState({});

    const validaSenha = (event) => {  
        if (cadastroSenha === confSenha){
        window.alert("Seu cadastro foi concluído com sucesso!");                  
        } else{
            window.alert('AS SENHAS ESTÃO DIFERENTES');  
            event.preventDefault()                   
        }        
        
    }      
          
  return (
    
    <div className="body">
    
    <AppHeader/>  
 
    <main> 

        <form action="/login" className="formCadastre" onSubmit={validaSenha}>
            <h2 className="textShadowTitles">Cadastre suas informações</h2>
        <div>
            <label htmlFor="razaoSocial">Razão Social*</label>
            <input name="razaoSocial" type="text" placeholder="Informe a Razão Social" required />
        </div>
 
        <ImaskCnpj/>

        <Imask/>
       
        <div>
            <label htmlFor="email">E-mail*</label>
            <input name="email" type="email" placeholder="...@email.com" required />
        </div>

      <Cep/>
               
        <div>
            <label htmlFor="cadastroSenha">Senha*</label>
            <input onBlur={event => setcadastroSenha(event.target.value)} name="cadastroSenha" type="password"  placeholder="Informe a senha" minLength="8" maxLength="8" required />
        </div>

        <div>
            <label htmlFor="confSenha">Confirme a senha*</label>
            <input onBlur={event => setConfSenha(event.target.value)} name="confSenha" type="password" placeholder="Confirme a senha" minLength="8" maxLength="8" required />
        </div>

        <h3 className="textShadowTitles">Responsável pela empresa</h3>
           
            <div>
                <label htmlFor="nome">Nome completo*</label>
                <input name="nome" type="text" placeholder="Digite seu nome completo" required />
            </div>

            <Imask/>
           
            <div className="campo">
                <p>(*) Campo obrigatório</p>                    
            </div>

            <div className="divBtnEnviar">
                <button type="submit" className="btnEnviar">Enviar</button>
              </div>
              </form>               
                         
    </main>

<AppFooter/>

    
</div>

  )
}
