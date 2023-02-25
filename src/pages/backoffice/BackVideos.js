import React, { useRef, useState  } from "react";
import { collection, doc, setDoc, deleteDoc  } from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, Form } from "react-bootstrap";
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
    document.getElementById("video-form").reset();
    return newVideo;
  };

  const [listVideos, setListVideos] = useState([]);
  const getDeleteSettings = async () => {
    try {
      const videosData = await firestoreFetchSetting("/videos/");
      setListVideos(() => videosData);
    } catch (err) {
      console.error(err);
    }
  };
const deleteId = useRef("")

  const deleteVideoHandleSubmit = async (e) => {
    e.preventDefault();
    await deleteDoc(doc(db, "videos", deleteId.current.value));
    alert("Video eliminado");
    document.getElementById("delete-video").reset();
    setListVideos([])
  };
  return (
    <div>
    <div>
      <h2>Agregar un Video</h2>
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
    </div>
    <div>
        <h2>Eliminar un Video</h2>
        {listVideos.length < 1 ? (
        <Button variant="info" onClick={() => getDeleteSettings()}>
          Eliminar video
        </Button>
        ) : (
        <Form onSubmit={deleteVideoHandleSubmit} id="delete-video">
          <Form.Group className="mb-3" controlId="formDeletePoem">
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
        </Form>
        )
        }
      </div>
    </div>
  );
};

export default BackVideos;
