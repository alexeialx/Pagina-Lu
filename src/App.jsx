import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/Nav/NavBar';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Load from './componentes/inicio/Load';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);  // La página ha cargado completamente
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loading && <Load />} {/* Mostrar el componente Load mientras la página está cargando */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
