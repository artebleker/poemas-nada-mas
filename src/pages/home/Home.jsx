import React from "react";
// import portada from "./../../img/portada.jpg";
// import presentacion from "./../../img/presentacion.jpg";
import bienvenidos from "./../../img/bienvenidos.jpg";
import bienvenidos2 from "./../../img/bienvenidos2.png";
import bienvenidos3 from "./../../img/bienvenidos3.png";
import bienvenidos4 from "./../../img/bienvenidos4.png";
import bienvenidos5 from "./../../img/bienvenidos5.png";
import bienvenidos6 from "./../../img/bienvenidos6.png";
import bienvenidos7 from "./../../img/bienvenidos7.png";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import logo from "./../../img/logopngchico.png";
import tiendaNube from './../../img/tiendaNube.png'
import "./home.css";
// import Instagram from "../../components/instagram/Instagram";
const Home = () => {
  return (
    <>
      <main className="home-container">
        {/* INICIO */}
        <section className="inicio-home">
          <div className="logo-titulo-container">
            <h1 className="titulo-home">
              Poemas,
              <br /> nada más
            </h1>
            <img src={logo} alt="Poemas, nada más" className="logo-home " />
          </div>
          <p className="primer-texto-home">
            La poesía ofrece lugares de paz; si hay conflicto, los escarba y,
            como resultado, surge de entre las líneas alguna propuesta
            superadora o enaltecedora. Este arte puesto en imágenes vuelve a la
            poesía un lugar accesible, sacándola del lugar de "arte difícil" o
            "solo para entendidos". Los medios actuales permiten esta fusión de
            imagen y palabra, y la poesía vuelta imagen, nos acerca al espíritu
            del poema, porque poesía es decir algo más de lo que en realidad se
            expresa con palabras. La imagen nos acerca aquello "no dicho" o
            "sugerido".
          </p>
        </section>

        {/* PRESENTACION */}
        <section className="presentacion-home ">
          <div className="presentacion-home_div ">
            <p>
              Mi nombre es Cecy Tapia <br />
              Soy Pianista Licenciada en Música y Poeta
            </p>
            <div className="div-saber-mas">
              <div>
              <a
                  href="https://www.youtube.com/@poemasnadamas"
                  target="_blank"
                  rel="noreferrer"
                  className="presentacion-home-link m-1 p-1"
                >
                  <BsYoutube />
                </a>
                <a
                  href="https://poemasnadamas.mitiendanube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="presentacion-home-link m-1 p-1"
                >
                  <img src={tiendaNube} alt="Tienda Nuebe" style={{width:"27.2px", height:"27.2px"}}/>

                </a>
                <a
                  href="https://www.instagram.com/cecy3493/?hl=es-la"
                  target="_blank"
                  rel="noreferrer"
                  className="presentacion-home-link m-1 p-1"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://www.facebook.com/ceciliadelvalle.tapia"
                  target="_blank"
                  rel="noreferrer"
                  className="presentacion-home-link m-1 p-1"
                >
                  <BsFacebook />
                </a>
               
              </div>
              {/* <br/>
            <br/> */}
              <Link to="/curriculum">Saber más</Link>
            </div>
          </div>
        </section>

        {/* BIENVENIDOS */}
        <section className="bienvenidos-home">
          <div className="bienvenidos-home-div ">
            <h2 className="text-start">
              Bienvenidos a este espacio donde compartiremos una de las más
              excelsas artes:
            </h2>
            <h2 className="text-center">Poemas, nada más.</h2>
          </div>
          <Carousel
            slide={false}
            indicators={true}
            nextLabel={false}
            prevLabel={false}
            className="carousel-container"
          >
            <Carousel.Item>
              <img
                className="d-block w-90 carousel-img-home"
                src={bienvenidos}
                alt="Federico Garía Lorca"
              />
              <Carousel.Caption className="carousel-caption" interval={1500}>
                {/* <h4>Federico Garía Lorca</h4> */}
                <p>
                  “Para quien busca, la poesía es el tren que nos lleva a donde
                  queremos regresar”.
                  {/* «Poesía es la unión de dos palabras que uno nunca supuso que
                  pudieran juntarse, y que forman algo algo así como un
                  misterio» */}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-90 carousel-img-home"
                src={bienvenidos2}
                alt="Jorge Luis Borges"
              />

              <Carousel.Caption className="carousel-caption" interval={1500}>
                {/* <h4>Jorge Luis Borges</h4> */}
                <p>
                  “Poetizar es insistir en ponerle nombre al misterio, sin
                  lograrlo”.
                  {/* «poesía es la expresión de la belleza por medio de palabras
                  artísticamente entretejidas» */}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-90 carousel-img-home"
                src={bienvenidos3}
                alt="Octavio Paz"
              />
              <Carousel.Caption className="carousel-caption" interval={1500}>
                {/* <h4>Octavio Paz</h4> */}
                <p>
                  “Poesía es el brindis del gran encuentro que perdura mucho más
                  allá de las palabras”.
                  {/* «La poesía es la memoria de los pueblos, y la parte secreta
                  del alma de cada uno. Este es un gráfico con un pie de foto de
                  muestra.» */}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-90 carousel-img-home"
                src={bienvenidos4}
                alt="Oliverio Girondo"
              />
              <Carousel.Caption className="carousel-caption" interval={1500}>
                {/* <h4>Oliverio Girondo</h4> */}
                <p>
                  “Un poema es el oasis prometido y alcanzado que no logra
                  aplacar la sed”.
                  {/* «La poesía siempre es lo otro, aquello que todos ignoran hasta
                  que lo descubre un verdadero poeta.» */}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-90 carousel-img-home"
                src={bienvenidos5}
                alt="Vicente Huidobro"
              />
              <Carousel.Caption className="carousel-caption" interval={1500}>
                {/* <h4>Vicente Huidobro</h4> */}
                <p>
                  “Los versos nos llenan de mundos que parecían imposibles hasta
                  que, sin darnos cuenta, empiezan a hacerse realidad”.
                  {/* «La poesía es un atentado celeste» */}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-90 carousel-img-home"
                src={bienvenidos6}
                alt="César Vallejo"
              />
              <Carousel.Caption className="carousel-caption" interval={1500}>
                {/* <h4>César Vallejo</h4> */}
                <p>
                  “El lado útil de la escritura es traducirnos a nosotros
                  mismos”
                  {/* «la poesía es un grito de justicia social y una manera de
                  intentar poner orden en el mundo.» */}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-90 carousel-img-home"
                src={bienvenidos7}
                alt="Cecy Tapia"
              />
              <Carousel.Caption className="carousel-caption" interval={1500}>
                {/* <h4>Cecy Tapia</h4> */}
                <p>
                  “La metáfora poética es el lenguaje del inconsciente, desde
                  allí que trascienda la razón. Es allí donde todos nos
                  encontramos alrededor del fuego”.
                  {/* «La metáfora poética es el lenguaje del inconsciente, desde
                  allí que la poesía trascienda la razón.» */}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </main>
    </>
  );
};

export default Home;
