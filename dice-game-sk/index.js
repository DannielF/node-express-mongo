const express = require('express');
const cors = require('cors');
const { mongoConnect } = require('./db/mongo.connect');
const routerApi = require('./routes');
const { logErrors, errorHandler} = require('./middlewares/error.handler');

mongoConnect();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.get('/', (req, res) => res.send('Welcome to the Dice Game'));

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () =>{
  console.log(`Listening https://localhost:${port}`);
} );