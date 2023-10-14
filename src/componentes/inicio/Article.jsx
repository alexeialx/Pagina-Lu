import img1 from "../../assets/images/Inicio/1.jpg";
import img2 from "../../assets/images/Inicio/2.jpg";
import img3 from "../../assets/images/Inicio/3.jpg";
import '../../pages/Inicio.css'

const dateArtic = [
  { imagen: img1, titulo: "CONCEPTUALIZACIÓN 3D" },
  { imagen: img2, titulo: "ESCULTURA DIGITAL" },
  { imagen: img3, titulo: "PREPARACIÓN PARA IMPRESIÓN 3D" },
];

const Article = () => {
  return (
    <div className="content">
      <div className="art-container">
        {dateArtic.map((articulo, index) => (
          <article className="artic" key={index}>
            <div className="box-circle">
              <img src={articulo.imagen} alt="" />
              <h4>{articulo.titulo}</h4>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Article;
