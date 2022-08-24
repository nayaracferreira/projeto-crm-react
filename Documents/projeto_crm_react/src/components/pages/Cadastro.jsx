import React from 'react'

import { AppFooter, AppHeader, Cep } from '../organisms';

export default function Cadastro() {
  return (
  
    <div className="body">
    
    <AppHeader/>  
 
    <main> 

        <form action="/login" id="formCadastre" className="size-margin-90-5 gapColuna" onSubmit=" funcConfirmar(event)">
            <h2 className="textShadowTitles">Cadastre suas informações</h2>
        <div>
            <label htmlFor="razaoSocial">Razão Social*</label>
            <input name="razaoSocial" type="text" id="razaoSocial" placeholder="Informe a Razão Social" required />
        </div>
 
        <div>
            <label htmlFor="cnpj">CNPJ*</label>
            <input name="cnpj" type="text" id="cnpj" placeholder="00.000.000/000-00" required />
        </div>

        <div>
            <label htmlFor="fone">Telefone comercial*</label>
            <input name="fone" type="tel" id="fone" placeholder="(00) 00000-0000" required />
        </div>
       
        <div>
            <label htmlFor="email">E-mail*</label>
            <input name="email" type="email" id="email" placeholder="...@email.com" required />
        </div>

        <Cep/>
               
        <div>
            <label htmlFor="cadastroSenha">Senha*</label>
            <input name="cadastroSenha" type="password" id="cadastroSenha" placeholder="Informe a senha" minLength="8" maxLength="8" required />
        </div>

        <div>
            <label htmlFor="confirmSenha">Confirme a senha*</label>
            <input name="confirmSenha" type="password" id="confirmSenha" placeholder="Confirme a senha" minLength="8" maxLength="8" required />
        </div>

        <h3 className="textShadowTitles">Responsável pela empresa</h3>
           
            <div>
                <label htmlFor="nome">Nome completo*</label>
                <input name="nome" type="text" id="nome" placeholder="Digite seu nome completo" required />
            </div>

            <div>
                <label htmlFor="fonePessoal">Telefone*</label>
                <input name="fonePessoal" type="tel" id="fonePessoal" placeholder="(00) 00000-0000" required />
            </div>
           
            <div className="campo">
                <p>(*) Campo obrigatório</p>                    
            </div>

            <div id="divBtnEnviar">
                <button type="submit" value="Validar" id="btnEnviar">Enviar</button>
              </div>
              </form>               
                         
    </main>

<AppFooter/>

    
</div>

  )
}
