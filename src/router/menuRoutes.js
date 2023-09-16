import CartContainer from "../components/pages/Cart/CartContainer";
import ItemDetailContainer from "../components/pages/ItemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/ItemList/ItemListContainer";
import CheckOut from "../components/pages/CheckOut/CheckOut";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemdetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckOut,
  },
];
