
// Connection
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

})

const addMember = (name, address) => {
  return new Promise( ( resolve, reject ) => {
    return con.query(`INSERT INTO customers (name, address) VALUES (${mysql.escape(name)}, ${mysql.escape(address)})`, function (err, result, fields) {
      if (err) throw err;
      //close
      
      resolve(result);
      });
  }) 

}

const deleteMembersById = (id) => {
  return new Promise( ( resolve, reject ) => {
    return con.query("DELETE FROM customers WHERE id ="+ mysql.escape(id), function (err, result, fields) {
      if (err) throw err;
      resolve(result);
      });
  })
}

const getAll = () => {
  return new Promise( ( resolve, reject ) => {
        return con.query("SELECT * FROM customers", function (err, result, fields) {
          if (err) throw err;
          //close
          resolve(result);
          });
      }) 
};


module.exports={getAll, addMember, deleteMembersById}