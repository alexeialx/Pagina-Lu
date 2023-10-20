import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NAv/NavBar";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";
import Estudio from "./pages/Estudio";
import Proyectos from "./pages/Proyectos";
import Formacion from "./pages/Formacion";
import Blog from "./pages/Blog";
import Load from "./componentes/inicio/Load";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // La página ha cargado completamente
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading && <Load />}{" "}
      {/* Mostrar el componente Load mientras la página está cargando */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />

          <Route path="/servicios" element={<Servicios />} />
          <Route path="/estudio" element={<Estudio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
