import React, { useRef } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, Form } from "react-bootstrap";
const BackPoemas = () => {
  const titulo = useRef("");
  const libro = useRef("");
  const año = useRef("");
  const texto = useRef("");
  const estilo = useRef("");

  const poemHandleSubmit = async (e) => {
    e.preventDefault();
    const newPoem = doc(collection(db, "poemas"));
    await setDoc(newPoem, {
      año: año.current.value,
      estilo: estilo.current.value,
      libro: libro.current.value,
      texto: texto.current.value,
      titulo: titulo.current.value,
    });
    alert("Poema guardado");
    document.getElementById("poema-form").reset();
    return newPoem;
  };

  return (
    <div>
      <h2>Agregar un Poema</h2>
      <Form onSubmit={poemHandleSubmit} id="poema-form">
        <Form.Group className="mb-3" controlId="formBasicPoemTitle">
          <Form.Label>Titulo del poema</Form.Label>
          <Form.Control type="text" ref={titulo} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBook">
          <Form.Label>Libro donde se encuentra</Form.Label>
          <Form.Control type="text" ref={libro} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicYear">
          <Form.Label>Año que fue publicado/escrito</Form.Label>
          <Form.Control type="text" ref={año} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPoem">
          <Form.Label>Poema</Form.Label>
          <Form.Text className="text-muted">
            Para subir correctamente el poema remplazar:
            <ul>
              <li>
                Enter por: <b>eN</b>
              </li>
              <li>
                Tabulación por: <b>tB</b>
              </li>
              <li>
                Espacio (cuando sea más de un espacio) por: <b>sP</b>
              </li>
            </ul>
          </Form.Text>
          <Form.Control as="textarea" rows={3} ref={texto} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPoem">
          <Form.Label>Elija el estilo</Form.Label>
          <Form.Select aria-label="Default select example" ref={estilo}>
            <option value="poema">Poema</option>
            <option value="haiku">Haiku</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar Poema
        </Button>
      </Form>
    </div>
  );
};

export default BackPoemas;
