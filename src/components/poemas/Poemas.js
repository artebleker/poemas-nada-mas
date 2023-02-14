import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { firestoreFetchSetting } from "./../../firebase/fireStoreFetch";
import "./poemas.css";
import { BiArrowBack } from "react-icons/bi";

const Poemas = () => {
  const [poemas, setPoemas] = useState([]);

  const getDataSettings = async () => {
    try {
      const poemaData = await firestoreFetchSetting("/poemas/");
      setPoemas(() => poemaData);
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
        <Link to="/categorias"  className="volver-link">
      <Button variant="primary"  className="volver-button">
         <BiArrowBack/> 
      </Button>
        </Link>
      <section className="poemas-section">
        <h2>Poemas</h2>
        <div className="poemas-div">
          {poemas.map((poema) => {
            return (
              <div key={poema.id} className={poema.estilo}>
                <h3>{poema.titulo}</h3>
                <h6 className="pertenece-al-libro">{poema.libro}</h6>
                <p
                  className="texto-p"
                  dangerouslySetInnerHTML={{ __html: replaceWith(poema.texto) }}
                />
                <h6>{poema.año}</h6>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Poemas;
