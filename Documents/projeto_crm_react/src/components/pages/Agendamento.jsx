import React, { useState } from 'react'
import { IMaskInput } from 'react-imask'

import '../../styles/style.css';

import { AppFooter, AppHeaderAgendamento, Cep } from '../organisms/Index';


export default function Agendamento() {
  const[escondido, setEscondido] = useState(true);

  const [nomeCliente, setNomeCliente] = useState("");
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const [emailCliente, setEmailCliente] = useState("");

  const Mostrar=() => {
    setEscondido(false);
  }
  const Esconder =() => {
    setEscondido(true);
    
  }

  return (
    <div className="body">    
    
    <AppHeaderAgendamento/>

    <main>
        <h2>Cadastre as informações do seu cliente</h2>
        <form id="formAgendamento" className="gapColuna">
            
            <label>Nome: </label>
            <input type="text" placeholder="Nome do cliente" name="nomeDoCliente" id="nomeDoCliente" className="informacaoTexto" onBlur={event => setNomeCliente(event.target.value)} />
         
            <div className="telefoneDoCliente">
         <label>Telefone*</label>
            <IMaskInput
            mask="+{55}(00)00000-0000"         name="telefoneDoCliente"
            type="text"  
            placeholder="Telefone do cliente"
            onBlur={event => setTelefoneCliente(event.target.value)}
            />
        </div>

            <label>E-mail: </label>
            <input type="email"placeholder="E-mail do cliente" name="emailDoCliente" id="emailDoCliente" className="informacaoTexto" onBlur={event => setEmailCliente(event.target.value)} /> 
           
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
                <button type="button" id="botaoAgendarServico" className="btnAgendamento" onClick={Mostrar}>Agendar Serviço</button>
             </div> 
        </form>

        <h2 id="testoAgendado" className="textShadowTitles size-margin-90-5" 
        hidden ={escondido} > 'Cliente tem o nome de {nomeCliente} sendo seu telefone {telefoneCliente} e seu {emailCliente}.' </h2>
        
        <div className="btnHolderAgendamento">
            <button type="button" id="botaoLimpar" className="btnAgendamento" onClick={Esconder} hidden ={escondido}>Limpar</button>
        </div> 
        
    </main>

 <AppFooter/>
    
</div>
  )
}
