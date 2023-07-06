import React, { useState, useEffect } from "react";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";
import "./publicaciones.css";
import rosas from './../../img/publicaciones.png'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  const getDataSettings = async () => {
    try {
      const publicacionesData = await firestoreFetchSetting("/publicaciones/");
      setPublicaciones(() =>
        publicacionesData.sort((p1, p2) =>
          p1.año < p2.año ? 1 : p1.año > p2.año ? -1 : 0
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDataSettings().then(() => {});
  }, []);

  return (<>
    <article className="publicaciones-container">
      <Link to="/curriculum" className="link-cv"><Button variant="outline-success" >Mi curriculum</Button></Link>
      <div className="prox-publicaciones">
        <h2 >Próximas publicaciones</h2>
        <section>
          <ol className="ol-publicaciones">
          {publicaciones.filter(f=>f.publicado === "false").map((p) => {
              return <li key={p.id}>{p.nombre}</li>;
            })}
          </ol>
        </section>
      </div>
      <div>
        <h2>Títulos publicados</h2>
        <section>
          <ol className="ol-publicaciones">
            {publicaciones.filter(f=>f.publicado === "true").map((p) => {
              return <li key={p.id}>{p.nombre}</li>;
            })}
          </ol>
        </section>
      </div>

      <img src={rosas} alt="" className="rosas-background"/>
    </article>
  </>
  );
};

export default Publicaciones;
