import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Agendamento from './components/pages/Agendamento';
import Agenda from './components/pages/Agenda';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/login/company/:companyId' element={<Agendamento/>}/>
        <Route path='/clients' element={<Agenda/>}/>
    </Routes>
    </BrowserRouter>      
  );
}

export default App;
