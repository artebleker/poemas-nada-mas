import React, { useState } from "react";
import BackPoemas from "./BackPoemas";
import BackPublicaciones from "./BackPublicaciones";
import BackDescargas from "./BackDescargas";
import BackComprar from "./BackComprar";
import BackVideos from "./BackVideos";
import "./backOffice.css";
import Login from "./Login";
import { Button, ButtonGroup } from "react-bootstrap";

const BackOffice = () => {
  const [goBack, setGoBack] = useState(false);
  const [category, setCategory] = useState("Poemas");
  const backOfficeArray = [
    { back: <BackPoemas />, query: "Poemas" },
    { back: <BackVideos />, query: "Videos" },
    { back: <BackComprar />, query: "Comprar" },
    { back: <BackDescargas />, query: "Descargas" },
    { back: <BackPublicaciones />, query: "Publicaciones" },
  ];

  return (
    <>
      {goBack ? (
        <div className="backoffice-container">
          <ButtonGroup aria-label="Categorias">
            <Button variant="primary" onClick={() => setCategory("Poemas")}>
              Poemas
            </Button>
            <Button variant="primary" onClick={() => setCategory("Videos")}>
              Videos
            </Button>
            <Button variant="primary" onClick={() => setCategory("Comprar")}>
              Comprar
            </Button>
            <Button variant="primary" onClick={() => setCategory("Descargas")}>
              Descargas
            </Button>
            <Button
              variant="primary"
              onClick={() => setCategory("Publicaciones")}
            >
              Publicaciones
            </Button>
          </ButtonGroup>
          {backOfficeArray
            .filter((f) => f.query === category)
            .map((m) => {
              return <div key={m.query}>{m.back}</div>;
            })}
        </div>
      ) : (
        <Login setGoBack={setGoBack} />
      )}
    </>
  );
};

export default BackOffice;
