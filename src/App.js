import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categorias from "./pages/categorias/Categorias";
import Publicaciones from "./pages/publicaciones/Publicaciones"
import Videos from "./pages/videos/Videos"
import Layout from "./components/layout/Layout";
import Poemas from "./components/poemas/Poemas"
import EBookBuy from "./components/eBook_buy/EBookBuy";
import EBookFree from "./components/eBook_free/EBookFree";
import "./app.css"
import BackOffice from "./pages/backoffice/BackOffice";
import Error from "./pages/error/Error";

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/categorias" element={<Categorias />} />
            <Route exact path="/videos" element={<Videos/>} />
            <Route exact path="/publicaciones" element={<Publicaciones/>} />
            <Route exact path="/poemas" element={<Poemas/>} />
            <Route exact path="/descargar-e-books" element={<EBookFree/>} />
            <Route exact path="/comprar-e-books" element={<EBookBuy/>} />
            <Route exact path="/login" element={<BackOffice/>} />
            <Route exact path="*" element={<Error/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
