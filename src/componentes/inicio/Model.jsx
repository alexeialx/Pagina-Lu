import figure from "../../assets/images/Inicio/ripper.webp";
import { Link } from "react-router-dom";
import '../../pages/Inicio.css'

const Model = () => {
  return (
    <div className="content bg-gray">
      <div className="cards">
        <div className="box-image">
          <img src={figure} alt="" />
        </div>
        <div className="box-text">
          <h3>Modelado 3D de personajes</h3>
          <hr />
          <h4>Ideas que cobran vida</h4>
          <p>
            Cada personaje cuenta una historia diferente mediante de su gesto,
            ropa, herramientas y pose. Nuestro trabajo consiste en hacer
            realidad esa historia modelando en 3D cada personaje para, así,
            poder llevarlo a la pantalla e incluso a tus manos.
          </p>
          <Link to="/contacto">
            <button>Descubre más</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Model;
