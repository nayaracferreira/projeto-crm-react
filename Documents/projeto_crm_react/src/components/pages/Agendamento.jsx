import React from 'react'

import '../../styles/style.css';
import { AppFooter, AppHeaderAgendamento } from '../organisms';

export default function Agendamento() {
  return (
    <body>    
    
    <AppHeaderAgendamento/>

    <main>
        <h2 className="textShadowTitles">Cadastre as informações do seu cliente</h2>
        <form id="formAgendamento" className="gapColuna">
            <label>Nome: </label>
            <input type="text" placeholder="Nome do cliente" name="nomeDoCliente" id="nomeDoCliente" className="informacaoTexto" />
         
            <label>Telefone: </label>
            <input type="text"placeholder="Telefone do cliente" name="telefoneDoCliente" id="telefoneDoCliente" className="informacaoTexto" />

            <label>E-mail: </label>
            <input type="email"placeholder="E-mail do cliente" name="emailDoCliente" id="emailDoCliente" className="informacaoTexto" /> 
           
        <div className="local gapColuna"> 
            <div className="columnFlexBox">
                <label htmlFor="cep">Cep*</label>
                <input name="cep" type="text" id="cep" placeholder="Ex:012345-678" />
            </div>

            <div className="columnFlexBox">
                <label htmlFor="logradouro">Endereço*</label>
                <input name="logradouro" type="text" id="logradouro" placeholder="Ex:Rua Vinte e Cindo de ..." />
            </div>
    
            <div className="columnFlexBox">
                <label htmlFor="numero">Número*</label>
                <input name="numero" type="text" id="numero" placeholder="Ex:123" />
            </div>
    
            <div className="columnFlexBox">
                <label htmlFor="blocoSala">Bloco/Sala</label>
                <input name="blocoSala" type="text" id="blocoSala" placeholder="Número do bloco ou sala" />
            </div>
    
            <div className="columnFlexBox">
                <label htmlFor="bairro">Bairro*</label>
                <input name="bairro" type="text" id="bairro" placeholder="Informe o bairro" />
            </div>      
            
            <div className="columnFlexBox">
                <label htmlFor="localidade">Cidade*</label>
                <input name="localidade" type="text" id="localidade" placeholder="Informe a cidade" />
            </div>
         
            <div className="columnFlexBox">
                <label htmlFor="uf">UF*</label>
                <input name="uf" type="text" id="uf" placeholder="Informe a UF" />                
            </div> 
        </div> 

            <h2 className="textShadowTitles">Serviços</h2>

            <input type="text" id="caixaTextoInputServico"  placeholder="Adicionar serviço oferecido." />
            <div className="btnHolderAgendamento">
                <button type="button" id="botaoAdicionarServico" className="btnAgendamento">Adicionar</button>
            </div>    
            <label htmlFor="listaServicos">Selecione o Serviço:</label>
            <select id="listaServicos">   
            </select>

            <label>Data:</label><input type="text"placeholder="dia/mês/ano" name="dataAgendada" id="dataAgendada" className="informacaoTexto" /> 
            <div className="btnHolderAgendamento">
                <button type="button" id="botaoAgendarServico" className="btnAgendamento">Agendar Serviço</button>
             </div> 
        </form>

        <h2 id="testoAgendado" className="textShadowTitles size-margin-90-5"></h2>
        
        <div className="btnHolderAgendamento">
            <button type="button" id="botaoLimpar" className="btnAgendamento" hidden>Limpar</button>
        </div> 
        
    </main>

 <AppFooter/>

        {/* <script src="https://unpkg.com/imask"></script> */}
    {/* <script src="agendamento.js"></script> */}
</body>
  )
}
