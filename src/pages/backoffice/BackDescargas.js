import React, { useRef } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, Form } from "react-bootstrap";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const BackDescargas = () => {
  const nombreDownload = useRef(""); //nombre del libro
  const descriptionDownload = useRef(""); // descripcion del libro
  const fileImagenDownload = useRef(null); // imagen + nombre de la img
  const fileDownload = useRef(null); // Archivo

  const upLoadImgFile = () => {
    const storage = getStorage();
    const storageRef = ref(storage, "/img-descargas/" + fileImagenDownload.current.files[0].name);
    uploadBytes(storageRef, fileImagenDownload.current.files[0]).then((snapshot) => {
      console.log("Uploaded ");
    });
  };
  const upLoadFile = () => {
    const storage = getStorage();
    const storageRef = ref(storage, "/descargas/" + fileDownload.current.files[0].name);
    uploadBytes(storageRef, fileDownload.current.files[0]).then((snapshot) => {
      console.log("file!");
    });
  };
  const DownloadHandleSubmit = async (e) => {
    e.preventDefault();
    const newDownload = doc(collection(db, "descargas"));
    await setDoc(newDownload, {
      nombre: nombreDownload.current.value,
      imagen: fileImagenDownload.current.files[0].name,
      descripcion: descriptionDownload.current.value,
      nombreArchivo: fileDownload.current.files[0].name
    });
    upLoadImgFile();
    upLoadFile();
    alert("E-book para descargar guardado");
    document.getElementById("e-book-Download-form").reset();
    return newDownload;
  };

  return (
    <div>
      <h2>Agregar un E-Book para Descargar</h2>
      <Form onSubmit={DownloadHandleSubmit} id="e-book-Download-form">
        <Form.Group className="mb-3" controlId="formBasicDownloadTitle">
          <Form.Label>Titulo del E-Book para descargar</Form.Label>
          <Form.Control type="text" ref={nombreDownload} />
        </Form.Group>
        <Form.Group
          className="mb-3 p-3 border border-danger"
          controlId="formBasicImagenDownload"
        >
          <Form.Label>Archivo de imagen</Form.Label>
        <Form.Text className="text-muted">
          ¡El nombre del archivo NO debe contener espacios ni guiones!
        </Form.Text>
          <Form.Control type="file" ref={fileImagenDownload} />
        </Form.Group>
        <Form.Group
          className="mb-3 p-3 border border-danger"
          controlId="formBasicFileDownload"
        >
          <Form.Label>Archivo PDF</Form.Label>
        <Form.Text className="text-muted">
          ¡El nombre del archivo NO debe contener espacios ni guiones!
        </Form.Text>
          <Form.Control type="file" ref={fileDownload} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescriptionDownload">
          <Form.Label>Descripción del E-Book</Form.Label>
          <Form.Text className="text-muted">
            Para subir correctamente el texto remplazar:
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
          <Form.Control as="textarea" rows={3} ref={descriptionDownload} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar E-Book para descargar
        </Button>
      </Form>
    </div>
  );
}

export default BackDescargas