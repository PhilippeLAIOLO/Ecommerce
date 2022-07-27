import React, { useEffect, useState } from "react";

function DisplayProduct(props) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3004/get-product/" + props.idProduct;
   
    const fetchData = async () => {
      try {
        const response = await fetch(url, { credentials: "same-origin" });
        const json = await response.json();
        
        setProduct(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Description detaillée</h1>
      <div>
        <div>Nom du produit: {product[0] && product[0].produit}</div>
        <div>Description: {product[0] && product[0].description}</div>
        <div>Prix du produit: {product[0] && product[0].prix}</div>
        <div> <img className="middle_image" src={product[0] && product[0].image}></img> </div>
        <button onClick={()=>{props.setPage("Products")}}>Retour</button>
      </div>
    </>
  );
}

export default DisplayProduct;
