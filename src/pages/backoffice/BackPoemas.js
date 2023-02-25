import React, { useRef, useState } from "react";
import { collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, Form } from "react-bootstrap";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";
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

  const [listPoemas, setListPoemas] = useState([]);
  const getDeleteSettings = async () => {
    try {
      const poemaData = await firestoreFetchSetting("/poemas/");
      setListPoemas(() => poemaData);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteId = useRef("");

  const deletePoemHandleSubmit = async (e) => {
    e.preventDefault();
    await deleteDoc(doc(db, "poemas", deleteId.current.value));
    alert("Poema eliminado");
    document.getElementById("delete-poem").reset();
    setListPoemas([]);
  };

  return (
    <div>
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
            <Form.Control type="number" ref={año} />
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
            <Form.Select aria-label="Estilo de texto" ref={estilo}>
              <option value="poema">Poema</option>
              <option value="haiku">Haiku</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar Poema
          </Button>
        </Form>
      </div>
      <div>
        <h2>Eliminar un Poema</h2>
        {listPoemas.length < 1 ? (
          <Button variant="info" onClick={() => getDeleteSettings()}>
            Eliminar poemas
          </Button>
        ) : (
          <Form onSubmit={deletePoemHandleSubmit} id="delete-poem">
            <Form.Group className="mb-3" controlId="formDeletePoem">
              <Form.Label>Elija el poema a eliminar</Form.Label>
              <Form.Select aria-label="Texto a eliminar" ref={deleteId}>
                {listPoemas.map((m) => {
                  return (
                    <option value={m.id} key={m.id}>
                      {m.titulo}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Button variant="danger" type="submit">
              Eliminar
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default BackPoemas;
