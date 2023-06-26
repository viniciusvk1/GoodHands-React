import './App.css'
import Login from './pages/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componentes/footer/footer';
import Navbar from './componentes/navbar/navbar';
import Sobrenos from './pages/sobre-nós/sobrenos';
import Postagem from './pages/home/postagem';
import Home from './pages/inicio/home';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Contato from './pages/contato/Contato';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch

          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postagem" element={<Postagem />} />
          <Route path="/sobre" element={<Sobrenos />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;