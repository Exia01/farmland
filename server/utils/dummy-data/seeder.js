/* Seeder Script */
// require the necessary libraries
const path = require('path');
require('dotenv-safe').config({
  path: path.join(__dirname, '../../../.env'),
  // sample: path.join(__dirname, '../../.env.example'),
});
const data = require('../../utils/dummy-data/seed');
const MongoClient = require('mongodb').MongoClient;
// const env = process.MONGO_URI;
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
  console.log('hello??');
  // Connection URL
  const uri = process.env.MONGO_URI;

  console.log('hello??1');
  console.log(uri);
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log('hello??2');
  try {
    console.log('hello??3');
    await client.connect();
    console.log('Connected correctly to server');

    const collection = await client.db('farmland').collection('products');
    console.log('hello??4');
    console.log(collection);
    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    collection.drop();

    collection.insertMany(data);

    console.log('Database seeded! :)');
    client.close();
  } catch (err) {
    console.log(err.stack);
    console.log(err);
  }
}

// seedDB();

async function seedProductsCollections() {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    await client.connect();

    const collection = await client.db('farmland').collection('products');

    const [dropConfirmation, insertData] = await Promise.all([
      collection.drop(),
      collection.insertMany(data),
    ]);
    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    // const dropped = await collection.drop();
    // console.log(dropped);

    console.log('Database seeded! :)');
    client.close();
  } catch (err) {
    console.log(err.stack);
    console.log(err);
    process.exit(-1);
  }

  //   client.connect((err) => {
  //     // const collection = client.db("farmland").collection("devices");
  //     // perform actions on the collection object
  //     console.log('testing');
  //     client.close();
  //     console.log('connectionClosed');
  //   });
}
seedProductsCollections();
