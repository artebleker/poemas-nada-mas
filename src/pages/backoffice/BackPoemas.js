import React, { useRef, useState } from "react";
import { collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";
const BackPoemas = () => {
  const titulo = useRef("");
  const libro = useRef("");
  const año = useRef("");
  const texto = useRef("");
  const estilo = useRef("");

  // Nuevo
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
    setEdit(() => "");
    return newPoem;
  };

  // traer data
  const [listPoemas, setListPoemas] = useState([]);
 const [edit, setEdit] = useState("");
  const getEditSettings = async (value) => {
      const poemaData = await firestoreFetchSetting("/poemas/");
      setListPoemas(() => poemaData);
      setEdit(value)
    }
  
    
    // editar
  const tituloEdit = useRef("");
  const libroEdit = useRef("");
  const añoEdit = useRef("");
  const textoEdit = useRef("");
  const estiloEdit = useRef("");

  const [editId, setEditId] = useState("");
  const [isEditId, setIsEditId] = useState(false);

  const poemEditHandleSubmit = async (e) => {
    e.preventDefault();
    console.log(tituloEdit.current.value,
      libroEdit.current.value,
      añoEdit.current.value,
      textoEdit.current.value,
      estiloEdit.current.value,)
   console.log(editId)
    await setDoc(doc(db, "poemas", editId), {
      año: añoEdit.current.value,
      estilo: estiloEdit.current.value,
      libro: libroEdit.current.value,
      texto: textoEdit.current.value,
      titulo: tituloEdit.current.value
    });
    alert("Poema modificado")
    setEdit(() => "");
    setIsEditId(false);
  };

  // borrar
  const deleteId = useRef("");
  const deletePoemHandleSubmit = async (e) => {
    e.preventDefault();
    await deleteDoc(doc(db, "poemas", deleteId.current.value));
    alert("Poema eliminado");
    document.getElementById("delete-poem").reset();
    setEdit(() => "");
    setListPoemas([]);
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
            <h2>Agregar un Poema</h2>
          </Button>
          <Button
            variant="warning"
            onClick={(e) => {
              e.preventDefault();
              getEditSettings("editar");
            }}
          >
            <h2>Editar un Poema</h2>
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              getEditSettings("eliminar");
            }}
          >
            <h2>Eliminar un Poema</h2>
          </Button>
        </ButtonGroup>
      )}
      {edit === "agregar" && (
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
              id="edit-poema"
            >
              <Form.Group className="mb-3" controlId="formEditPoema">
                <Form.Label>Elija el poema a editar</Form.Label>
                <Form.Select 
                  aria-label="Texto a editar"
                  onChange={(e) => setEditId(e.target.value)}
                >
                  {listPoemas.map((m) => {
                    return (
                      <option value={m.id} key={m.id}>
                        {m.titulo}
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
        <Form onSubmit={poemEditHandleSubmit} id="poema-edit-form">
          <Form.Group className="mb-3" controlId="formBasicEditPoemTitle">
            <Form.Label>Titulo del poema</Form.Label>
            <Form.Control type="text" ref={tituloEdit} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEditBook">
            <Form.Label>Libro donde se encuentra</Form.Label>
            <Form.Control type="text" ref={libroEdit} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEditYear">
            <Form.Label>Año que fue publicado/escrito</Form.Label>
            <Form.Control type="number" ref={añoEdit} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEditPoemText">
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
            <Form.Control as="textarea" rows={3} ref={textoEdit} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEditPoemStyle">
            <Form.Label>Elija el estilo</Form.Label>
            <Form.Select aria-label="Estilo de texto" ref={estiloEdit}>
              <option value="poema">Poema</option>
              <option value="haiku">Haiku</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Editar Poema
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
        <h2>Eliminar un Poema</h2>
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

export default BackPoemas;
