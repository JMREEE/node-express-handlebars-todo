// Connection to database

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

})*/

// Creating Databases
/*con.query("CREATE DATABASE mydbs", function (err, result) {
      if (err) throw err;
      console.log("Database created");
  });
}); */

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});*/

//Creating Table
    // CREATE TABLE
    //var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255), createdAt TIMESTAMP)";
    // ALTERING TABLE
    /*var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table altered");
    });*/
  //});

    // Inserting in table
    /* var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}); */

// Insert multiple items

/* var sql = "INSERT INTO customers (name, address) VALUES ?";
var values = [
  ['John', 'Highway 71'],
  ['Peter', 'Lowstreet 4'],
  ['Amy', 'Apple st 652'],
  ['Hannah', 'Mountain 21'],
  ['Michael', 'Valley 345'],
  ['Sandy', 'Ocean blvd 2'],
  ['Betty', 'Green Grass 1'],
  ['Richard', 'Sky st 331'],
  ['Susan', 'One way 98'],
  ['Vicky', 'Yellow Garden 2'],
  ['Ben', 'Park Lane 38'],
  ['William', 'Central st 954'],
  ['Chuck', 'Main Road 989'],
  ['Viola', 'Sideway 1633']
];
con.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});
}); */

// Get Inserted ID

/*var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted, ID: " + result.insertId);
});
}); */


// Selecting from a table (ALL)

/* con.query("SELECT * FROM customers", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
}); */

// Selecting Columns

/* con.query("SELECT name, address FROM customers", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
}); */

/*con.query("SELECT name, address FROM customers", function (err, result, fields) {
  if (err) throw err;
  console.log(fields);
});
});*/

// Select With a Filter

/*con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
  if (err) throw err;
  console.log(result);
});
}); */

// Wildcard Characters

/*con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
  if (err) throw err;
  console.log(result);
});
});*/

// Escaping Query Values

/*var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});*/

/*var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ?';
con.query(sql, [adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});*/

/*var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});*/

// Sort the Result:

