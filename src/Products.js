import React, { useEffect, useState } from "react";

function Products(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3004/get-products";

    const fetchData = async () => {
      try {
        const response = await fetch(url, { credentials: "same-origin" });
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Produits proposés</h1>
      {products.map((article) => (
        <div>
          <div>Nom du produit: {article.produit}</div>
          <div>Prix du produit: {article.prix}</div>
          <div> image {article.image}</div>
          <div> <img className="little_image" src={article.image}></img> </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              props.setIdProduct(article.id);
              props.setPage("ProductDetail");
            }}
          >
            <input type="submit" value="Detail"></input>
            </form>
        </div>
      ))}
    </>
  );
}

export default Products;
