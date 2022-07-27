import "./App.css";
import Login from "./Login";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import React, { useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAccess, setIsAccess] = useState(false);
  const [page, setPage] = useState("login");
  const [idProduct, setIdProduct] = useState(0);
  return (
    <div className="App">
      {isAccess === false && (
        <Login
          setPage={setPage}
          //setIsAdmin={setIsAdmin}
          setIsAccess={setIsAccess}
        />
      )}
      {page === "Products" && (
        <Products
          setPage={setPage}
          //idProduct={idProduct}
          setIdProduct={setIdProduct}
        />
      )}
      {page === "ProductDetail" && (
        <ProductDetail
          setPage={setPage}
          idProduct={idProduct}
          //setIdProduct={setIdProduct}
        />
      )}
  {/*     {page === "AddProduit" && (
        <AddProduit
          setPage={setPage}
          idProduct={idProduct}
          setIdProduct={setIdProduct}
        />
      )}  */}
    </div>
  );
}

export default App;
