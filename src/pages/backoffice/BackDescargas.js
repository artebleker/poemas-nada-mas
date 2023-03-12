import React, { useRef, useState } from "react";
import { collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";

const BackDescargas = () => {
  const nombreDownload = useRef(""); //nombre del libro
  const descriptionDownload = useRef(""); // descripcion del libro
  const fileImagenDownload = useRef(null); // imagen + nombre de la img
  const fileDownload = useRef(null); // Archivo

  const upLoadImgFile = () => {
    const storage = getStorage();
    const storageRef = ref(
      storage,
      "/img-descargas/" + fileImagenDownload.current.files[0].name
    );
    uploadBytes(storageRef, fileImagenDownload.current.files[0]).then(
      (snapshot) => {
        console.log("Uploaded ");
      }
    );
  };
  const upLoadFile = () => {
    const storage = getStorage();
    const storageRef = ref(
      storage,
      "/descargas/" + fileDownload.current.files[0].name
    );
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
      nombreArchivo: fileDownload.current.files[0].name,
    });
    upLoadImgFile();
    upLoadFile();
    alert("E-book para descargar guardado");
    document.getElementById("e-book-Download-form").reset();
    setEdit(() => "");
    return newDownload;
  };
    // traer data
  const [listDescargas, setListDescargas] = useState([]);
  const [edit, setEdit] = useState("");
  const getEditSettings = async (value) => {
      const descargasData = await firestoreFetchSetting("/descargas/");
      setListDescargas(() => descargasData);
      setEdit(value)
  };

  
   

  // Borrar
  const deleteId = useRef("");

  const deleteDescargaHandleSubmit = async (e) => {
    e.preventDefault();
    await deleteDoc(doc(db, "descargas", deleteId.current.value));
    alert("E-book eliminado");
    document.getElementById("delete-descarga").reset();
    setEdit(() => "");
    setListDescargas([]);
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
            <h2>Agregar un E-book</h2>
          </Button>
          
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              getEditSettings("eliminar");
            }}
          >
            <h2>Eliminar un E-book</h2>
          </Button>
        </ButtonGroup>
      )}
      {edit === "agregar" && (
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
    
      {edit === "eliminar" && (
      <div>
        <h2>Eliminar E-Book para descargar</h2>
        
          <Form onSubmit={deleteDescargaHandleSubmit} id="delete-descarga">
            <Form.Group className="mb-3" controlId="formDeleteDescarga">
              <Form.Label>Elija el e-book a eliminar</Form.Label>
              <Form.Select aria-label="Texto a eliminar" ref={deleteId}>
                {listDescargas.map((m) => {
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

export default BackDescargas;
