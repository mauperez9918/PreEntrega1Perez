import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const q = query(
        collection(db, "products"),
        where("category", "==", categoryName)
      );
      getDocs(q).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } else {
      getDocs(itemCollection).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }
  }, [categoryName]);

  return <ItemList products={products} category={categoryName} />;
};

export default ItemListContainer;
