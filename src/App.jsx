import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/Home/Home";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import Navbar from "./components/layout/Navbar/Navbar";
import ItemListContainer from "./components/pages/ItemList/ItemListContainer";
import CartContextComponent from "./contexts/CartContext";
import CartContainer from "./components/pages/Cart/CartContainer";

function App() {
  return (
    <>
      <CartContextComponent>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<Inicio />} />
              <Route path="/itemdetail/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContextComponent>
    </>
  );
}

export default App;
