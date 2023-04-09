import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container container-fluid text-center p-5" style={{minHeight:"80vh"}}>
      <h2 className="m-3">Página no encontrada</h2>
      <Link to="/"><button className="btn btn-info m-3">Volver</button></Link>
    </div>
  );
};

export default Error;
