import "./Inicio.css";
import home1 from "../assets/images/header/header-bg.jpg";
import Article from "../componentes/inicio/Article";
import Model from "../componentes/inicio/Model";



const Inicio = () => {
  return (
    <>
      <div className="home">
        <img src={home1} alt="" />
        <h1>hola lucia</h1>
      </div>
      <div className="containerr">
        <div className="estudio">
          <h2>Estudio de Escultura Digital y Modelado 3D</h2>
        </div>
        <Article/>
        <Model/>
      </div>
    </>
  );
};

export default Inicio;
