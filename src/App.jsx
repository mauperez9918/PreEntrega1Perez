import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/Home/Home";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import Navbar from "./components/layout/Navbar/Navbar";
import ItemListContainer from "./components/pages/ItemList/ItemListContainer";

const item = "HOLA MUNDO";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/itemdetail/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
