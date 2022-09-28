const express = require('express');
require('dotenv').config();
const app = express();
const path = require("path");
const port = process.env.PORT;
//setting up the static landing page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/public.html')));

//middleware
app.use(express.json());

//importing the routes
const userRoutes = require('./src/routers/usersRouters');

app.use(userRoutes);

app.listen(port, () => {
  console.log('app is listening on:', port)
});