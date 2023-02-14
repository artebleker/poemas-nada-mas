import React, { useState } from "react";
import BackPoemas from "./BackPoemas";
import BackPublicaciones from "./BackPublicaciones";
import BackDescargas from "./BackDescargas";
import BackComprar from "./BackComprar";
import BackVideos from "./BackVideos";
import "./backOffice.css";
import Login from "./Login";

const BackOffice = () => {
  const [goBack, setGoBack] = useState(false);
  return (
    <>
      {goBack ? (
        <div className="backoffice-container">
          <BackPoemas />
          <BackVideos />
          <BackComprar />
          <BackDescargas />
          <BackPublicaciones />
        </div>
      ) : (
        <Login setGoBack={setGoBack} />
      )}
    </>
  );
};

export default BackOffice;
