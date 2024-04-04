import express from 'express';
import Datastore from 'nedb';

const app = express();
const port = 3000;

app.use(express.json());

// Initialize NeDB database
const db = new Datastore({ filename: './data/dbfile', autoload: true });

// Define a route for adding data to the database
app.post('/add', (req, res) => {
  db.insert(req.body, (err: any, newDoc: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(newDoc);
    }
  });
});

// Define a route for fetching all data from the database
app.get('/all', (req, res) => {
  db.find({}, (err: any, docs: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(docs);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
