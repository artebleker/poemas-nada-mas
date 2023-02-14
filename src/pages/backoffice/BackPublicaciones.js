import React, { useRef } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, Form } from "react-bootstrap";
const BackPublicaciones = () => {
  const titulo = useRef("");
  const año = useRef(Number);

  const publicacionHandleSubmit = async (e) => {
    e.preventDefault();
    const newPublicacion = doc(collection(db, "publicaciones"));
    await setDoc(newPublicacion, {
      nombre: titulo.current.value,
      año: año.current.value,
    });
    alert("Publicación guardada");
    document.getElementById("publicacion-form").reset();
    return newPublicacion;
  };

  return (
    <div>
      <h2>Agregar una Publicación</h2>
      <Form onSubmit={publicacionHandleSubmit} id="publicacion-form">
        <Form.Group className="mb-3" controlId="formBasicPublishTitle">
          <Form.Label>Titulo de la publicacion</Form.Label>
          <Form.Control type="text" ref={titulo} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicYears">
          <Form.Label>Año que se hizo la publicación</Form.Label>
          <Form.Text className="text-muted">
            Este dato solo sirve para ordenar las publicaciones, no aparecerá
            visible
          </Form.Text>
          <Form.Control type="number" ref={año} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar Publicación
        </Button>
      </Form>
    </div>
  );
};

export default BackPublicaciones;
