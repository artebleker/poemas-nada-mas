import React, { useRef, useState } from "react";
import { collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, ButtonGroup, Form } from "react-bootstrap";
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
      publicado: publicado.current.value,
    });
    alert("Publicación guardada");
    document.getElementById("publicacion-form").reset();
    setEdit(() => "");
    return newPublicacion;
  };
  
  // traer data
  const [listPublicaciones, setListPublicaciones] = useState([]);
  const [edit, setEdit] = useState("");
  const getEditSettings = async (value) => {
      const publicacionesData = await firestoreFetchSetting("/publicaciones/");
      setListPublicaciones(() => publicacionesData);
      setEdit(value)
  };

  // Editar
  const tituloEdit = useRef("");
  const añoEdit = useRef(Number);
  const publicadoEdit = useRef();

  const [editId, setEditId] = useState("");
  const [isEditId, setIsEditId] = useState(false);

  const publicacionEditHandleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      tituloEdit.current.value,
      añoEdit.current.value,
      publicadoEdit.current.value
    );
    console.log(editId);
    await setDoc(doc(db, "publicaciones", editId), {
      nombre: tituloEdit.current.value,
      año: añoEdit.current.value,
      publicado: publicadoEdit.current.value,
    });
    alert("Publicacion modificada");
    setEdit(() => "");
    setIsEditId(false);
  };

  // Eliminar
  const deleteId = useRef("");
  const deletePublicacionHandleSubmit = async (e) => {
    e.preventDefault();
    await deleteDoc(doc(db, "publicaciones", deleteId.current.value));
    alert("Publicaion eliminada");
    document.getElementById("delete-publicacion").reset();
    setEdit(() => "");
    setListPublicaciones([]);
  };
  return (
    <div>
      {edit === "" && (
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              setEdit("agregar");
            }}
          >
            <h2>Agregar una Publicación</h2>
          </Button>
          <Button
            variant="warning"
            onClick={(e) => {
              e.preventDefault();
              getEditSettings("editar");
            }}
          >
            <h2>Editar una Publicación</h2>
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              getEditSettings("eliminar");
            }}
          >
            <h2>Eliminar una Publicación</h2>
          </Button>
        </ButtonGroup>
      )}
      {edit === "agregar" && (
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
                Este dato solo sirve para ordenar las publicaciones, no
                aparecerá visible
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
            <Button
              variant="warning"
              onClick={() => {
                setEdit(() => "");
              }}
            >
              Cancelar
            </Button>
          </Form>
        </div>
      )}
      {edit === "editar" && (
        <div>
          {isEditId === false ? (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                setIsEditId(true);
              }}
              id="edit-Publicacion"
            >
              <Form.Group className="mb-3" controlId="formEditPublicacion">
                <Form.Label>Elija la publicación a editar</Form.Label>
                <Form.Select
                  aria-label="Texto a editar"
                  onChange={(e) => setEditId(e.target.value)}
                >
                  {listPublicaciones.map((m) => {
                    return (
                      <option value={m.id} key={m.id}>
                        {m.nombre}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit">
                Editar
              </Button>
              <Button
                variant="warning"
                onClick={() => {
                  setEdit(() => "");
                  setIsEditId(false);
                }}
              >
                Cancelar
              </Button>
            </Form>
          ) : (
            <Form onSubmit={publicacionEditHandleSubmit} id="publicacion-form">
              <Form.Group className="mb-3" controlId="formBasicPublishTitle">
                <Form.Label>Titulo de la publicacion</Form.Label>
                <Form.Control type="text" ref={tituloEdit} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicYears">
                <Form.Label>Año que se hizo la publicación</Form.Label>
                <Form.Text className="text-muted">
                  Este dato solo sirve para ordenar las publicaciones, no
                  aparecerá visible
                </Form.Text>
                <Form.Control type="number" ref={añoEdit} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formIsPublication">
                <Form.Label>Elija si ya fue publicado o aun no</Form.Label>
                <Form.Select aria-label="Texto a eliminar" ref={publicadoEdit}>
                  <option value="true">Si </option>
                  <option value="false">No</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit">
                Editar Publicación
              </Button>
              <Button
              variant="warning"
              onClick={() => {
                setEdit(() => "");
              }}
            >
              Cancelar
            </Button>
            </Form>
          )}
        </div>
      )}
      {edit === "eliminar" && (
        <div>
          <h2>Eliminar una publicacion</h2>
          <Form
            onSubmit={deletePublicacionHandleSubmit}
            id="delete-publicacion"
          >
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
            <Button
              variant="warning"
              onClick={() => {
                setEdit(() => "");
              }}
            >
              Cancelar
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default BackPublicaciones;
