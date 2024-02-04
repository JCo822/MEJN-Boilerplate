/*const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({path: './config/.env'});
const uri = process.env.DB_CONNECT;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/
/*const mongoose = require('mongoose');
const uri = process.env.DB_CONNECT;

const connectDB = async() => {
  try{
    const connect = await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }
}
module.exports = DB_CONNECT*/