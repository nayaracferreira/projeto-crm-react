import React from 'react'

import '../../styles/style.css';

import { AppFooter, AppHeaderAgendamento, Cep } from '../organisms';

export default function Agendamento() {
  return (
    <div className="body">    
    
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
           
        <Cep/>

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

        <h2 id="testoAgendado" className="textShadowTitles size-margin-90-5"> </h2>
        
        <div className="btnHolderAgendamento">
            <button type="button" id="botaoLimpar" className="btnAgendamento" hidden>Limpar</button>
        </div> 
        
    </main>

 <AppFooter/>

        {/* <script src="https://unpkg.com/imask"></script> */}
    {/* <script src="agendamento.js"></script> */}
</div>
  )
}
