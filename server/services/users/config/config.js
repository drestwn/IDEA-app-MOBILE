// Walaupun di examplenya sudah menggunakan "import"
// Namun karena di sini kita masih menggunakan CommonJS
// Maka masih menggunakan require
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { MongoClient } = require("mongodb");

// Cara penulisan connectionString
// [protocol]://[ipaddress]:[port]/?[options1=value1]&[options2=value2]&[...]
const connectionString = `mongodb+srv://drestwn:${process.env.PASSWORD_MONGODB}@hactiv8.npzavyf.mongodb.net/?retryWrites=true&w=majority`;

// Kita akan membuat sebuah global variable yang akan menahan database
// Untuk mengetahui apakah database masih ada atau tidak

// Karena bisa berubah, maka harus menggunakan let
let db = null;

// Fungsi untuk koneksi ke db
const mongoConnect = async () => {
  const client = new MongoClient(connectionString);

  try {
    // client.db("nama-database-yang-akan-digunakan")
    const database = client.db("IKEA");
    // console.log(database);

    // Nilai variable global yang akan diset
    db = database;

    return database;
  } catch (err) {
    await client.close();
  }
};

// Fungsi untuk mengambil db
// Wajib dibuat, karena mongoConnect bersifat async
// Jadi tidak diketahui kapan selesainya
// (Itu juga alasannya kita menggunakan variable global "db")
const getDatabase = () => db;

module.exports = {
  mongoConnect,
  // Export getDatabase-nya
  getDatabase,
};
// const { MongoClient } = require("mongodb");

// const connectionString =
//   "mongodb+srv://drestwn:MongoDB@hactiv8.npzavyf.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(connectionString);
// let db = null;

// const mongoConnect = async () => {
//   try {
//     const database = client.db("Hactiv8");
//     return database;
//   } catch (err) {
//     await client.close();
//   }
// };
// const getDatabase = async () => {
//   if (!db) {
//     db = await mongoConnect();
//     return db;
//   } else {
//     return db;
//   }
// };

// const disconnectDb = async () => {
//   await client.close();
// };

// module.exports = {
//   mongoConnect,
//   getDatabase,
//   disconnectDb,
// };
