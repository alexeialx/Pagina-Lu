import { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../../assets/images/Trixart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArtstation,
  faBehance,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const [active, setActive] = useState(location.pathname);

  const links = [
    { id: 1, label: "Inicio", to: "/inicio" },
    { id: 2, label: "Servicios", to: "/servicio" },
    { id: 3, label: "El Estudio", to: "/estudio" },
    { id: 4, label: "Proyectos", to: "/proyectos" },
    { id: 5, label: "Formación", to: "/formacion" },
    { id: 6, label: "Blog", to: "/blog" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navBarStyle">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} ms-1 />
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mx-auto">
            {links.map(({ id, label, to, icon }) => (
              <li className="nav-item" key={id}>
                <Link
                  className={`link linkHover ${
                    to === active ? "active" : ""
                  }`}
                  to={to}
                >
                  <FontAwesomeIcon icon={icon} className="me-2" />
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link to="/contacto">
                <button className="btn btn-outline-light customHover">
                  Contacto
                </button>
              </Link>
            </li>
          </ul>
          <hr className="d-md-none text-white-50" />
          <ul className="navbar-nav flex-row flex-wrap text-light">
            <li className="nav-item col p-2 d-flex flex-column">
              <FontAwesomeIcon icon={faArtstation} />
              <small className="d-md-none text-center">Artstation</small>
            </li>
            <li className="nav-item col p-2 d-flex flex-column">
              <FontAwesomeIcon icon={faBehance} />
              <small className="d-md-none text-center">Behance</small>
            </li>
            <li className="nav-item col p-2 d-flex flex-column">
              <FontAwesomeIcon icon={faFacebook} />
              <small className="d-md-none text-center">Facebook</small>
            </li>
            <li className="nav-item col p-2 d-flex flex-column">
              <FontAwesomeIcon icon={faWhatsapp} />
              <small className="d-md-none text-center">WhatsApp</small>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
