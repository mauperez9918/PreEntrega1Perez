import { BrowserRouter } from "react-router-dom";
import CartContextComponent from "./contexts/CartContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <CartContextComponent>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </CartContextComponent>
    </>
  );
}

export default App;
