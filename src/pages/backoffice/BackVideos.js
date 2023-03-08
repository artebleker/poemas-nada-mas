import React, { useRef, useState } from "react";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";

const BackVideos = () => {
  const link = useRef("");
  const nombre = useRef("");

  const videoHandleSubmit = async (e) => {
    e.preventDefault();
    const newVideo = doc(collection(db, "videos"));
    await setDoc(newVideo, {
      link: link.current.value.split(".be/")[1],
      nombre: nombre.current.value,
    });
    alert("Video guardado");
    setEdit(() => "");
    return newVideo;
  };

  const [listVideos, setListVideos] = useState([]);
  const [edit, setEdit] = useState("");
  const getEditSettings = async (value) => {
    const videosData = await firestoreFetchSetting("/videos/");
    setListVideos(() => videosData);
    setEdit(value);
  };

  const [editId, setEditId] = useState("");
  const nombreEdit = useRef("");
  const linkEdit = useRef("");

  const [isEditId, setIsEditId] = useState(false);

  const videoEditHandleSubmit = async (e) => {
    e.preventDefault();
    console.log(linkEdit.current.value.split(".be/")[1])
    console.log(nombreEdit.current.value)
    await setDoc(doc(db, "videos", editId), {
      link: linkEdit.current.value.split(".be/")[1],
      nombre: nombreEdit.current.value,
    });
    alert("Video modificado")
    setEdit(() => "");
    setIsEditId(false);
  };

  const deleteId = useRef("");
  const deleteVideoHandleSubmit = async (e) => {
    e.preventDefault();
    await deleteDoc(doc(db, "videos", deleteId.current.value));
    alert("Video eliminado");
    setEdit(() => "");
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
            <h2>Agregar un Video</h2>
          </Button>
          <Button
            variant="warning"
            onClick={(e) => {
              e.preventDefault();
              getEditSettings("editar");
            }}
          >
            <h2>Editar un Video</h2>
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              getEditSettings("eliminar");
            }}
          >
            <h2>Eliminar un Video</h2>
          </Button>
        </ButtonGroup>
      )}

      {edit === "agregar" && (
        <>
          <Form onSubmit={videoHandleSubmit} id="video-form">
            <Form.Group className="mb-3" controlId="formBasicVideoTitle">
              <Form.Label>Titulo del video</Form.Label>
              <Form.Control type="text" ref={nombre} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVideoLink">
              <Form.Label>Link de youtube</Form.Label>
              <Form.Control type="text" ref={link} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar Video
            </Button>
          </Form>
          <Button
            variant="warning"
            onClick={(e) => {
              e.preventDefault();
              setEdit(() => "");
            }}
          >
            Cancelar
          </Button>
        </>
      )}
      {edit === "editar" && (
        <>
          {isEditId === false ? (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                setIsEditId(true);
              }}
              id="edit-video"
            >
              <Form.Group className="mb-3" controlId="formEditVideo">
                <Form.Label>Elija el video a editar</Form.Label>
                <Form.Select 
                  aria-label="Texto a editar"
                  onChange={(e) => setEditId(e.target.value)}
                >
                  {listVideos.map((m) => {
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
            <Form onSubmit={videoEditHandleSubmit} id="edit-video-form">
              <Form.Group className="mb-3" controlId="formBasicVideoEditTitle">
                <Form.Label>Titulo del video</Form.Label>
                <Form.Control type="text" ref={nombreEdit} required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicVideoEditLink">
                <Form.Label>Link de youtube</Form.Label>
                <Form.Control type="text" ref={linkEdit} required/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Editar Video
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
          )}
        </>
      )}
      {edit === "eliminar" && (
        <>
          <Form onSubmit={deleteVideoHandleSubmit} id="delete-video">
            <Form.Group className="mb-3" controlId="formDeleteVideo">
              <Form.Label>Elija el video a eliminar</Form.Label>
              <Form.Select aria-label="Texto a eliminar" ref={deleteId}>
                {listVideos.map((m) => {
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
        </>
      )}
    </div>
  );
};

export default BackVideos;
