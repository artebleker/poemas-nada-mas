import React, { useState, useEffect } from "react";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";
import "./publicaciones.css";
const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  const getDataSettings = async () => {
    try {
      const publicacionesData = await firestoreFetchSetting("/publicaciones/");
      setPublicaciones(() => publicacionesData.sort((p1, p2) => (p1.año < p2.año) ? 1 : (p1.año > p2.año) ? -1 : 0));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDataSettings().then(() => {});
  }, []);
  return (
    <article className="publicaciones-container">
      <h2>Títulos publicados</h2>
      <section>
        <ol className="ol-publicaciones">
          {publicaciones.map((p) => {
            return <li key={p.id}>{p.nombre}</li>;
          })}
        </ol>
      </section>
    </article>
  );
};

export default Publicaciones;
