import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import CartContextComponent from "./contexts/CartContext";
import CartContainer from "./components/pages/cart/CartContainer";
import CheckOut from "./components/pages/checkout/CheckOut";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <CartContextComponent>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              <Route path="/itemdetail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContextComponent>
    </>
  );
}

export default App;
