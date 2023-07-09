import React from "react";
import { Link } from "react-router-dom";
import "./categorias.css";
import poemas from "./../../img/poemas.png";
import ebookcomprar from "./../../img/ebookcomprar.png";
import ebookgratuito from "./../../img/ebookgratuito.png";
const Categorias = () => {
  return (
    <article className="categorias-article">
      <h2>Mi producción</h2>
      <div className="categorias-container">
      <section><Link to="/poemas">
        <img className="categorias-img" src={poemas} alt="poemas" />
        <h4>Poemas</h4>
        <p>Encontrarás poemas publicados en diferentes títulos de mi autoría</p></Link>
      </section>
      <section><Link to="/descargar-e-books">
        <img className="categorias-img" src={ebookgratuito} alt="ebookgratuito" />
       <h4>Descargar E-Books</h4>
        <p>Encontrarás e-book de mi autoría a descargar en forma gratuita</p></Link>
      </section>
      <section><Link to="https://poemasnadamas.mitiendanube.com/" target="_blank">
        <img className="categorias-img" src={ebookcomprar} alt="ebookcomprar" />
        <h4>Comprar E-Books</h4>
        <p>
          Podrás adquirir los títulos publicados aquí
        </p></Link>
      </section>
      </div>
    </article>
  );
};

export default Categorias;
