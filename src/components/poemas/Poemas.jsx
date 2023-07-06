import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";
import "./poemas.css";
import { BiArrowBack } from "react-icons/bi";
import image001 from "./../../img/poemasImg/image001.png";
import image002 from "./../../img/poemasImg/image002.png";
import image003 from "./../../img/poemasImg/image003.png";
import image004 from "./../../img/poemasImg/image004.png";
import image005 from "./../../img/poemasImg/image005.png";
import image006 from "./../../img/poemasImg/image006.png";
import image007 from "./../../img/poemasImg/image007.png";
import image008 from "./../../img/poemasImg/image008.png";
import image009 from "./../../img/poemasImg/image009.png";
import image010 from "./../../img/poemasImg/image010.png";
import image011 from "./../../img/poemasImg/image011.png";

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
          {/* 1 */}
          <article className="article-poem-container">
            <div className="title-container">
              <h5>(De “POEMAS CREPUSCULARES”)</h5>
            </div>
            <div className="block-poems-container">
              <div className="poem-container">
                <h5 className="poem-title">Camino Viajero</h5>
                <p>
                  Errante,
                  <br />
                  vagabunda.
                  <br />
                  hasta tácita
                  <br />
                  por estas calles mudas
                  <br />
                  desesperadas.
                  <br />
                  Da lo mismo
                  <br />
                  en esta soledad desértica
                  <br />
                  el rocío derramado
                  <br />
                  o la noche clara,
                  <br />
                  un aullido desnudo
                  <br />
                  o el lucero estrellándose.
                  <br />
                  El parámetro quedó sin fondo,
                  <br />
                  la referencia perdió el frente
                  <br />
                  y en el bolsillo
                  <br />
                  donde la razón esconde razones
                  <br />
                  una moneda alcanza para la próxima garantía:
                  <br />
                  <br />
                  Es hora de seguir.
                </p>
              </div>
              <div className="vr vr-blurry" style={{height: "250px"}}></div>
              <div className="poem-container ">
                <h5 className="poem-title">Espejismo</h5>
                <p>
                  La niebla
                  <br />
                  cubría el fondo del valle,
                  <br />
                  <br />
                  era blanca la línea del frío
                  <br />
                  recostada en horizonte,
                  <br />
                  <br />
                  jugaban sombras
                  <br />
                  e inquietudes
                  <br />
                  dispersándose
                  <br />
                  en roca y luna.
                  <br />
                  <br />
                  Todo era mágico,
                  <br />
                  hasta creí
                  <br />
                  esa noche
                  <br />
                  amarte.
                </p>
              </div>
            </div>
            <div className="image-container">
              <img src={image001} alt="" />
            </div>
          </article>
          {/* 2 */}
          <article className="article-poem-container">
            <div className="title-container">
              <h5>(De “VERSOS TRAVIESOS”)</h5>
            </div>
            <div className="block-poems-container">
              <div className="poem-container">
                <h5 className="poem-title">Llevo mi otoño</h5>
                <p>
                  bajo el brazo
                  <br />
                  amarillos ya los versos
                  <br />
                  de tanto esperar casualidades nuevas.
                  <br />
                  No claudica esta tonta esperanza
                  <br />
                  con un reencuentro fortuito
                  <br />
                  entre pompas de jabón
                  <br />
                  y casuarinas
                  <br />
                  al costado de un día de lluvia.
                  <br />
                  <br />
                  Desde el poema se alborota el alma
                  <br />
                  por sobre esta espera casi de siglos
                  <br />
                  y un estribillo le alimenta el ansia
                  <br />
                  a este sueño entre tonto y dormido
                  <br />
                  porque las sílabas entusiasmadas
                  <br />
                  no olvidaron tu risa.
                </p>
              </div>
              <div className="poem-container">
                <h5 className="poem-title">Confundida,</h5>
                <p>
                  sílabas cortadas,
                  <br />
                  absurdas letras sobre la cama
                  <br />
                  en un sinsentido de brújulas
                  <br />
                  enloquecidas
                  <br />
                  y frases rotas.
                  <br />
                  <br />
                  Tengo un mareo
                  <br />
                  de mascarón, proa y temporales
                  <br />
                  sobre esta almohada
                  <br />
                  donde antes descansaban
                  <br />
                  tranquilos versos
                  <br />
                  de playas quietas.
                </p>
              </div>
            </div>
            <div className="image-container">
              <img src={image002} alt="" />
            </div>
          </article>
          {/* 3 */}
          <article className="article-poem-container">
            <div className="title-container">
              <h5>
                (De la trilogía “a veces” (poemas en minúscula)
                <br />
                compuesto por los títulos:
                <br />
                “a veces la vida”, “a veces el tiempo” y “a veces el amor”)
              </h5>
            </div>
            <div className="block-poems-container">
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  le esquivé
                  <br />
                  a esa pena de violines
                  <br />
                  <br />
                  sepulté hasta la última cuerda
                  <br />
                  para que este dolor casi trágico
                  <br />
                  no vibrara en mi poro
                  <br />
                  <br />
                  hoy encontré unos ojos viejos
                  <br />
                  desde donde también
                  <br />
                  brotan adagios
                </p>
              </div>
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  el recital del alba
                  <br />
                  ese sonido gutural
                  <br />
                  desde las sombras
                  <br />
                  hoy moldea un divertimento
                  <br />
                  una curiosidad
                  <br />
                  <br />
                  no quiero
                  <br />
                  ni siquiera sospechar
                  <br />
                  lo que sigue
                </p>
              </div>
            </div>
            <div className="image-container">
              <img src={image003} alt="" />
            </div>
            <div className="block-poems-container">
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  hoy
                  <br />
                  el cielo
                  <br />
                  casi una onomatopeya de ormesí
                  <br />
                  <br />
                  hoy el jacarandá urbano
                  <br />
                  casi un oasis
                  <br />
                  de cielo
                  <br />
                  <br />
                  hoy te sugiero
                  <br />
                  <br />
                  camina
                  <br />
                  despacio
                </p>
              </div>
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  bufones
                  <br />
                  detrás de almanaque
                  <br />
                  urden quinielas
                  <br />
                  traman urgencias
                  <br />
                  o<br />
                  a veces
                  <br />
                  suspicacias
                  <br />
                  <br />
                  solo
                  <br />
                  para pasar
                  <br />
                  el día
                </p>
              </div>
            </div>
            <div className="image-container">
              <img src={image004} alt="" />
            </div>
            <div className="block-poems-container">
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  voy nadando
                  <br />
                  arenas estériles
                  <br />
                  <br />
                  alucino Náyades
                  <br />
                  y manantiales
                  <br />
                  <br />
                  me trastorno
                  <br />
                  en oasis
                  <br />
                  que alguna vez
                  <br />
                  me respondan
                  <br />
                  <br />
                  obcecadamente
                </p>
              </div>
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  no tengo normalidad
                  <br />
                  ni nombre
                  <br />
                  ni norte
                  <br />
                  <br />
                  tampoco ábacos
                  <br />
                  aritméticas
                  <br />
                  o azar
                  <br />
                  <br />
                  ni leyes
                  <br />
                  ni reglamentos
                  <br />
                  ni circunstancias
                  <br />
                  <br />
                  cuando me encuentro
                </p>
              </div>
            </div>
            <div className="image-container">
              <img src={image005} alt="" />
            </div>
          </article>
          {/* 4 */}
          <article className="article-poem-container">
            <div className="title-container">
              <h5>De la Antología “OJOS DE SEMILLA”</h5>
            </div>
            <div className="block-poems-container">
              <div className="poem-container">
                <h5 className="poem-title">Sorpresa</h5>
                <p>
                  Hasta la cáscara de mis huesos
                  <br />
                  se agrieta
                  <br />
                  se roe
                  <br />
                  en el intento de tu primavera que empieza.
                  <br />
                  Encallas
                  <br />
                  justo en el ángulo
                  <br />
                  donde laten viejas cábalas
                  <br />
                  y a la luz de tu luna y acerbo
                  <br />
                  esta pasado va volviéndose canción.
                  <br />
                  <br />
                  Sin saberlo
                  <br />
                  embistes <br />
                  sobre mi mirada demacrada
                  <br />
                  y el brillo de tu fulgor
                  <br />
                  va recuperándome
                  <br />
                  en brote fresco.
                  <br />
                  Amánsame
                  <br />
                  aunque a lágrima viva
                  <br />
                  se despelleje mi maleta
                  <br />
                  y así
                  <br />
                  sin darme cuenta
                  <br />
                  volverme
                  <br />
                  otra vez
                  <br />
                  manantial.
                </p>
              </div>
            </div>
          </article>
          {/* 5 */}
          <article className="article-poem-container">
            <div className="title-container">
              <h5>
                (De la bilogía “Ocurrencias (poemas en minúscula)”,
                <br />
                integrada por “primera ocurrencia” y “segunda ocurrencia”)
              </h5>
            </div>
            <div className="block-poems-container">
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  para que no me los roben
                  <br />
                  envaso
                  <br />
                  frenéticamente
                  <br />
                  momentos escarlata
                  <br />
                  días de papel
                  <br />
                  <br />
                  hoy el acero de la guerra
                  <br />
                  escarba bajo las uñas
                  <br />
                  los restos de renglones
                  <br />
                  que soñaban
                </p>
              </div>
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  pisando
                  <br />
                  pisoteando
                  <br />
                  aplastando
                  <br />
                  pateando hojas secas
                  <br />
                  amarillas
                  <br />
                  ocre
                  <br />
                  naranja
                  <br />
                  verde pálido
                  <br />
                  amarronadas
                  <br />
                  también en tonalidades pastel
                  <br />
                  y carmesí
                  <br />
                  <br />
                  todas
                  <br />
                  color sábado sin vos
                </p>
              </div>
            </div>
            <div className="image-container">
              <img src={image006} alt="" />
            </div>
            <div className="block-poems-container">
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  estoy abanicando un poema
                  <br />
                  céfiro azul de cosquillas espeluznadas
                  <br />
                  <br />
                  un lecho de palabras no dichas
                  <br />
                  le mencionaron
                  <br />
                  sin saber
                  <br />
                  una herida
                  <br />
                  que aún
                  <br />
                  sangraba
                </p>
              </div>
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  al swing
                  <br />
                  de emociones encontradas
                  <br />
                  voy evitando el jaque
                  <br />
                  de
                  <br />
                  otra vez
                  <br />
                  caer rendida
                  <br />a tu penumbra de versos
                </p>
              </div>
            </div>
            <div className="image-container">
              <img src={image007} alt="" />
            </div>
            <div className="block-poems-container">
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  en el degradé
                  <br />
                  de esas noches
                  <br />
                  perfilando encuentros perfumados
                  <br />
                  laten universos
                  <br />
                  casi espejismos
                  <br />
                  casi ovalados
                  <br />
                  casi paralelos
                  <br />
                  <br />
                  como cuando se sueña
                </p>
              </div>
              <div className="poem-container">
                {/* <h5 className="poem-title"></h5> */}
                <p>
                  el partenaire
                  <br />
                  de mis danza insípidas
                  <br />
                  de nocturnidades profundas
                  <br />
                  es una sombra
                  <br />
                  que espera el alba siguiente
                  <br />
                  y así
                  <br />
                  atravesar
                  <br />
                  su propio laberinto
                </p>
              </div>
            </div>
            <div className="image-container">
              <img src={image008} alt="" />
            </div>
          </article>
          {/* 6 */}
          <article className="article-poem-container">
            <div className="title-container">
              <h5>
                De la Antología “Poesía Desplegada”
                <br />
                Editorial Dunken 2019
              </h5>
            </div>
            <div className="block-poems-container">
              <div className="poem-container">
                <h5 className="poem-title">Inútil</h5>
                <p>
                  No pude abanicar
                  <br />
                  sobre las migajas que fueron cayendo
                  <br />
                  desde tu indiferencia,
                  <br />
                  <br />
                  se fue desgranando hilván a hilván
                  <br />
                  ese esmero empecinado
                  <br />
                  enloquecido
                  <br />
                  de resucitarte el beso
                  <br />
                  <br />
                  cociné
                  <br />
                  -hornalla, fuego, redención-
                  <br />
                  hasta el último intento
                  <br />
                  sobre sílabas repitiendo una súplica
                  <br />
                  pero
                  <br />
                  ay! ay!...
                  <br />
                  <br />
                  El después quedó en sombras…
                  <br />
                  <br />
                  Todo el saldo
                  <br />
                  otra vez
                  <br />
                  en llagas.
                </p>
              </div>
            </div>
          </article>
          {/* 7 */}
          <article className="article-poem-container">
            <div className="title-container">
              <h5>Del libro “Haiku II, Y Otra Vez Primavera”</h5>
            </div>
            <div className="image-container">
              <img src={image009} alt="" />
            </div>
            <div className="image-container">
              <img src={image010} alt="" />
            </div>
            <div className="image-container">
              <img src={image011} alt="" />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Poemas;

// {/* Modelo */}
// {/* <article className="article-poem-container">
// <div className="title-container"><h5></h5></div>
// <div className="block-poems-container">
//   <div className="poem-container"><h5 className="poem-title"></h5><p></p></div>
//   <div className="poem-container"><h5 className="poem-title"></h5><p></p></div>
//   </div>
// <div className="image-container"><img src={image00} alt=""/></div>
// </article> */}

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
