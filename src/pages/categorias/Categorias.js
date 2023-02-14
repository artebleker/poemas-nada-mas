import React from "react";
import { Link } from "react-router-dom";
import "./categorias.css";
import poemas from "./../../img/poemas.jpg";
import ebookcomprar from "./../../img/ebookcomprar.jpg";
import ebookgratuito from "./../../img/ebookgratuito.jpg";
const Categorias = () => {
  return (
    <article className="categorias-article">
      <h2>Mi producción</h2>
      <div className="categorias-container">
      <section>
        <img className="categorias-img" src={poemas} alt="poemas" />
        {/* <h4>Poemas</h4> */}
        <h4><Link to="/poemas">Poemas</Link></h4>
        <p>Encontrarás poemas publicados en diferentes títulos de mi autoría</p>
      </section>
      <section>
        <img className="categorias-img" src={ebookgratuito} alt="ebookgratuito" />
        {/* <h4>Descargar E-Books</h4> */}
       <h4><Link to="/descargar-e-books">Descargar E-Books</Link></h4>
        <p>Encontrarás e-book de mi autoría a descargar en forma gratuita</p>
      </section>
      <section>
        <img className="categorias-img" src={ebookcomprar} alt="ebookcomprar" />
        {/* <h4>Comprar E-Books</h4> */}
        <h4><Link to="/comprar-e-books">Comprar E-Books</Link></h4>
        <p>
          Podrás adquirir los títulos publicados, clickeeando en el enlace de
          "Compra"
        </p>
      </section>
      </div>
    </article>
  );
};

export default Categorias;
