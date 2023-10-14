import NavBar from "./componentes/NAv/NavBar";
import Inicio from "./pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="inicio" element={<Inicio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
