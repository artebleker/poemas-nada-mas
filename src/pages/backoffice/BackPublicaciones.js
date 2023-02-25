import React, { useRef, useState  } from "react";
import { collection, doc, setDoc, deleteDoc  } from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, Form } from "react-bootstrap";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";

const BackPublicaciones = () => {
  const titulo = useRef("");
  const año = useRef(Number);
  const publicado = useRef();

  const publicacionHandleSubmit = async (e) => {
    e.preventDefault();
    const newPublicacion = doc(collection(db, "publicaciones"));
    await setDoc(newPublicacion, {
      nombre: titulo.current.value,
      año: año.current.value,
      publicado: publicado.current.value
    });
    alert("Publicación guardada");
    document.getElementById("publicacion-form").reset();
    return newPublicacion;
  };
  const [listPublicaciones, setListPublicaciones] = useState([]);
  const getDeleteSettings = async () => {
    try {
      const publicacionesData = await firestoreFetchSetting("/publicaciones/");
      setListPublicaciones(() => publicacionesData);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteId = useRef("");

  const deletePublicacionHandleSubmit = async (e) => {
    e.preventDefault();
    await deleteDoc(doc(db, "publicaciones", deleteId.current.value));
    alert("Publicaion eliminada");
    document.getElementById("delete-publicacion").reset();
    setListPublicaciones([]);
  };
  return (
    <div>
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
        <Form.Group className="mb-3" controlId="formIsPublication">
            <Form.Label>Elija si ya fue publicado o aun no</Form.Label>
            <Form.Select aria-label="Texto a eliminar" ref={publicado}>
                  <option value="true">Si </option>
                  <option value="false">No</option>
            </Form.Select>
          </Form.Group>
        <Button variant="primary" type="submit">
          Guardar Publicación
        </Button>
      </Form>
    </div>
    <div>
        <h2>Eliminar una publicacion</h2>
        {listPublicaciones.length < 1 ? (
        <Button variant="info" onClick={() => getDeleteSettings()}>
          Eliminar publicacion
        </Button>
        ) : (
        <Form onSubmit={deletePublicacionHandleSubmit} id="delete-publicacion">
          <Form.Group className="mb-3" controlId="formDeletePublication">
            <Form.Label>Elija la publicacion a eliminar</Form.Label>
            <Form.Select aria-label="Texto a eliminar" ref={deleteId}>
              {listPublicaciones.map((m) => {
                return (
                  <option value={m.id} key={m.id}>
                    {m.nombre}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Button variant="danger" type="submit">
            Eliminar
          </Button>
        </Form>
        )
        }
      </div>
    </div>
  );
};

export default BackPublicaciones;
