import React, { useRef , useState} from "react";
import { collection, doc, setDoc , deleteDoc} from "firebase/firestore";
import db from "./../../firebase/fireBaseConfig";
import { Button, Form } from "react-bootstrap";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";
const BackComprar = () => {
  const linkShop = useRef("");
  const nombreShop = useRef("");
  const descriptionShop = useRef("");
  const fileImagenShop = useRef(null);

  const upLoadFile = () => {
    const storage = getStorage();
    const storageRef = ref(storage, "/img-comprar/" + fileImagenShop.current.files[0].name);
    uploadBytes(storageRef, fileImagenShop.current.files[0]).then((snapshot) => {
      // console.log("Uploaded file!");
    });
  };
  const shopHandleSubmit = async (e) => {
    e.preventDefault();
    const newShop = doc(collection(db, "comprar"));
    await setDoc(newShop, {
      link: linkShop.current.value,
      nombre: nombreShop.current.value,
      imagen: fileImagenShop.current.files[0].name,
      descripcion: descriptionShop.current.value
    });
    upLoadFile();
    alert("E-book para vender guardado");
    document.getElementById("e-book-shop-form").reset();
    return newShop;
  };
  const [listComprar, setListComprar] = useState([]);
  const getDeleteSettings = async () => {
    try {
      const comprarData = await firestoreFetchSetting("/comprar/");
      setListComprar(() => comprarData);
    } catch (err) {
      console.error(err);
    }
  };
const deleteId = useRef("")

  const deletePoemHandleSubmit = async (e) => {
    e.preventDefault();
    await deleteDoc(doc(db, "comprar", deleteId.current.value));
    alert("E-book para vender eliminado");
    document.getElementById("delete-comprar").reset();
    setListComprar([])
  };
  return (
    <div>
    <div>
      <h2>Agregar un E-Book para Vender</h2>
      <Form onSubmit={shopHandleSubmit} id="e-book-shop-form">
        <Form.Group className="mb-3" controlId="formBasicShopTitle">
          <Form.Label>Titulo del E-Book para vender</Form.Label>
          <Form.Control type="text" ref={nombreShop} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicShopLink">
          <Form.Label>Link a mercado libre</Form.Label>
          <Form.Control type="text" ref={linkShop} />
        </Form.Group>
        <Form.Group
          className="mb-3 p-3 border border-danger"
          controlId="formBasicImagenShop"
        >
          <Form.Label>Archivo de imagen</Form.Label>
        <Form.Text className="text-muted">
          ¡El nombre del archivo NO debe contener espacios ni guiones!
        </Form.Text>
          <Form.Control type="file" ref={fileImagenShop} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescriptionShop">
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
          <Form.Control as="textarea" rows={3} ref={descriptionShop} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar E-Book para vender
        </Button>
      </Form>
    </div>
    <div>
        <h2>Eliminar un Poema</h2>
        {listComprar.length < 1 ? (
        <Button variant="info" onClick={() => getDeleteSettings()}>
          Eliminar E-book para vender
        </Button>
        ) : (
        <Form onSubmit={deletePoemHandleSubmit} id="delete-comprar">
          <Form.Group className="mb-3" controlId="formDeleteComprar">
            <Form.Label>Elija el e-book a eliminar</Form.Label>
            <Form.Select aria-label="Texto a eliminar" ref={deleteId}>
              {listComprar.map((m) => {
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

export default BackComprar;
