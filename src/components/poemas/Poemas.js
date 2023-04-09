import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { firestoreFetchSetting } from "./../../firebase/fireStoreFetch";
import "./poemas.css";
import { BiArrowBack } from "react-icons/bi";
// import logo from './../../img/logopng.png'
import img1 from "./../../img/poemas/jp_Página_01.jpg";
import img2 from "./../../img/poemas/jp_Página_02.jpg";
import img3 from "./../../img/poemas/jp_Página_03.jpg";
import img4 from "./../../img/poemas/jp_Página_04.jpg";
import img5 from "./../../img/poemas/jp_Página_05.jpg";
import img6 from "./../../img/poemas/jp_Página_06.jpg";
import img7 from "./../../img/poemas/jp_Página_07.jpg";
import img8 from "./../../img/poemas/jp_Página_08.jpg";
import img9 from "./../../img/poemas/jp_Página_09.jpg";
import img10 from "./../../img/poemas/jp_Página_10.jpg";
import img11 from "./../../img/poemas/jp_Página_11.jpg";
import img12 from "./../../img/poemas/jp_Página_12.jpg";
import img13 from "./../../img/poemas/jp_Página_13.jpg";
import img14 from "./../../img/poemas/jp_Página_14.jpg";

const Poemas = () => {
  // const [poemas, setPoemas] = useState([]);

  // const getDataSettings = async () => {
  //   try {
  //     const poemaData = await firestoreFetchSetting("/poemas/");
  //     setPoemas(() => poemaData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   getDataSettings().then(() => {});
  // }, []);

  // function replaceWith(poema) {
  //   var eN = poema.replace(/eN/g, "<br />");
  //   var sP = eN.replace(/sP/g, "&nbsp;");
  //   var tB = sP.replace(/tB/g, "&emsp;");
  //   return tB;
  // }

  return (
    <div>
      <Link to="/categorias" className="volver-link">
        <Button variant="primary" className="volver-button">
          <BiArrowBack />
        </Button>
      </Link>
      <section className="poemas-section">
        <h2>Poemas</h2>
        <div className="text-center m-0">
          <img src={img1} alt="img" className="img-poema-pdf" />
          <img src={img2} alt="img" className="img-poema-pdf" />
          <img src={img3} alt="img" className="img-poema-pdf" />
          <img src={img4} alt="img" className="img-poema-pdf" />
          <img src={img5} alt="img" className="img-poema-pdf" />
          <img src={img6} alt="img" className="img-poema-pdf" />
          <img src={img7} alt="img" className="img-poema-pdf" />
          <img src={img8} alt="img" className="img-poema-pdf" />
          <img src={img9} alt="img" className="img-poema-pdf" />
          <img src={img10} alt="img" className="img-poema-pdf" />
          <img src={img11} alt="img" className="img-poema-pdf" />
          <img src={img12} alt="img" className="img-poema-pdf" />
          <img src={img13} alt="img" className="img-poema-pdf" />
          <img src={img14} alt="img" className="img-poema-pdf" />
        </div>
      </section>
    </div>
  );
};

export default Poemas;

//<div className="poemas-div">
// {poemas.map((poema) => {
//           return (
//             <div key={poema.id} className="">
//               <h3>{poema.titulo}</h3>
//               <h6 className="pertenece-al-libro">{poema.libro}</h6>
//               <p
//                 className={poema.estilo + " texto-p"}
//                 dangerouslySetInnerHTML={{ __html: replaceWith(poema.texto) }}
//               />
//               {/* <h6>{poema.año}</h6> */}
//               {/* <br/> */}
//               {/* <img src={logo} alt="" className="logo-separador"/> */}
//             </div>
//           );
//         })} </div>
