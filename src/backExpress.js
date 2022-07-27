const cors = require("cors");
const express = require("express");
const db = require("./backDatabase.js");
const app = express();
const port = 3004;
const cookieParser = require("cookie-parser");
//const session = require("express-session");

app.use(cookieParser());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

/* Obtenir la liste des produits*/
app.get("/get-products", (req, res) => {
  db.dbGetProduits((error, results) => {
    res.send(results);
  });
});

/* Login des personnes*/
app.post("/login", (req, res) => {

  db.dbGetUsers(req.body.name,(error, results) => {
    
    //  controle mot de passe
    if (results.length > 0) { 
      if (results[0].password == req.body.password)     { 
        res.send(true); 
      } else  { res.send(false);}
    }
    else  { res.send(false);}
  });
});

// Obtenir un seul produit
app.get("/get-product/:id", (req, res) => {
  db.dbGetOneProduit(parseInt(req.params.id, 10), (error, results) => {
    
    res.send(results);
  }); 

/* Ajouter un produit
app.post("/add-product", (req, res) => {
  // console.log("/addproduit", { produit: req.body.produit, prix: req.body.prix });
 
   db.dbGetAddProduit((error, results) => {
    // console.log("/results", results);
     // insert produit
     res.send({ id:true });
   });
 });  */
});
