const mysql = require("mysql");

// Connect to MySQL
function connectToMySQL() {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Philou67",
    database: "ecommerce",
  });
  connection.connect();
  return connection;
}

// Récupérer tous les produits
function dbGetProduits(afterTreatment) {
  let connection = connectToMySQL();
  let query = "SELECT * FROM produits ORDER BY id desc";
  connection.query(query, (error, result) => {
    if (error) {
      console.log(error);
    }

    connection.commit();
    afterTreatment(error, result);
    connection.end;
  });
  connection.end;
}

// Recuperer un seul produit
function dbGetOneProduit(produitId, afterTreatment) {
  let connection = connectToMySQL();
  let query = `SELECT * FROM produits Where id=?`;
  connection.query(query, produitId, (error, result) => {
    if (error) {
      console.log(error);
    }
    connection.commit();
    afterTreatment(error, result);
    connection.end;
  });
  connection.end;
}

// Recupere et controle user mot de passe
function dbGetUsers(idname, afterTreatment) {
  let connection = connectToMySQL();
  let query = `SELECT password FROM users where name=? `;
  connection.query(query, idname,(error, result) => {
    if (error) {
      console.log(error);
    }

    connection.commit();
    afterTreatment(error, result);
    
    connection.end;
  });
  connection.end;
}

/* Ajouter un produit
function dbGetAddProduit(produit,prix, afterTreatment) {
  let connection = connectToMySQL();
  let query = `INSERT INTO produits (produit , prix) VALUES (?,?)`;
    connection.query(query, produit,prix, (error, result) => {
    if (error) {
      console.log(error);
    }
    connection.commit();
    afterTreatment(error, result);
    connection.end;
  });
  connection.end;
} */
module.exports = {
  dbGetProduits,
  dbGetUsers,
  dbGetOneProduit,
  };
