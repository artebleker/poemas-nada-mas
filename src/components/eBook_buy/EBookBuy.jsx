import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";
import { Button } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import "./eBookBuy.css";
const EBookBuy = () => {
  const [titleList, setTitleList] = useState([]);

  const getDataSettings = async () => {
    try {
      const tituloData = await firestoreFetchSetting("/comprar/");
      setTitleList(() => tituloData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDataSettings().then(() => {});
  }, []);
  function replaceWith(poema) {
    var eN = poema.replace(/eN/g, "<br />");
    var sP = eN.replace(/sP/g, "&nbsp;");
    var tB = sP.replace(/tB/g, "&emsp;");
    return tB;
  }
  return (
    <div>
      <Link to="/categorias" className="volver-link">
        <Button variant="primary" className="volver-button">
          <BiArrowBack />
        </Button>
      </Link>
      <section className="free-e-book-section">
        <h2>E-Books para Comprar</h2>
        <div className="free-e-book-div">
          {titleList.map((m) => {
            return (
              <div key={m.id} className="e-book-item">
                {/* imagen debe llamarse sin espacios ni guiones y tiene que tener la extension */}
                <img
                  className="img-ebook-free"
                  src={`https://firebasestorage.googleapis.com/v0/b/poemasnadamas-f4eb4.appspot.com/o/img-comprar%2F${m.imagen}?alt=media&token=4e094282-c760-46aa-a5b7-ef7497c62174`}
                  alt={m.nombre}
                />
                <h4>{m.nombre}</h4>
                <p
                  className="texto-p"
                  dangerouslySetInnerHTML={{
                    __html: replaceWith(m.descripcion),
                  }}
                />
                <Button variant="danger">
                  <a
                    className="btn-buy"
                    href={m.link}
                    target="_blank"
                    alt={m.nombre}
                    rel="noreferrer"
                  >
                    <h4>
                      <BsBook /> Comprar
                    </h4>
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default EBookBuy;
