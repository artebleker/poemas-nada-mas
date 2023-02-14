import React, { useRef } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, Form } from "react-bootstrap";
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
  return (
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
  );
};

export default BackVideos;
