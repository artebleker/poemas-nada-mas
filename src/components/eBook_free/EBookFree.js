import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";
import "./eBookFree.css";
import { Button } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
const EBookFree = () => {
  const storage = getStorage();

  const downloadTextLink = (file) =>
    getDownloadURL(ref(storage, `descargas/${file}`))
      .then((url) => {
        window.open(url, "_blank");
      })
      .catch((error) => {
        console.error(error);
      });

  const [titleList, setTitleList] = useState([]);

  const getDataSettings = async () => {
    try {
      const tituloData = await firestoreFetchSetting("/descargas/");
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
        <h2>E-Books para Descargar</h2>
        <div className="free-e-book-div">
          {titleList.map((m) => {
            return (
              <div key={m.id} className="e-book-item">
                {/* imagen debe llamarse sin espacios ni guiones y tiene que tener la extension */}
                <img
                  className="img-ebook-free"
                  src={`https://firebasestorage.googleapis.com/v0/b/poemasnadamas-f4eb4.appspot.com/o/img-descargas%2F${m.imagen}?alt=media&token=4e094282-c760-46aa-a5b7-ef7497c62174`}
                  alt={m.nombre}
                />
                <h4>{m.nombre}</h4>
                <p
                  className="texto-p"
                  dangerouslySetInnerHTML={{
                    __html: replaceWith(m.descripcion),
                  }}
                />
                <Button variant='danger' onClick={() => downloadTextLink(m.nombreArchivo)}>
                  Descarga
                </Button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default EBookFree;
