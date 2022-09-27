const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.MYSQL_PORT

app.get('/', (req, res) => res.send('<div><h2>How this works:</h2></div><div><ul><li>GET /users will provide a list of all users id, first and last name, and address in the database</li><li>GET /users/id will provide you with a specific user in the database, provided they exist</li><li>POST /users will allow you to add an entry that will be assigned an ID and returned to you so long as you provide the first name, last name, address, email, phone, username, user password</li><li>PUT /users/id will allow you to update a specific entrys field with new information specified in the body of your request</li><li>DELETE /users/id allows you to delete a specific entry from the database</li></ul></div>'))

//middleware
app.use(express.json());

//importing the routes
const userRoutes = require('./src/routers/usersRouters');
app.use(userRoutes);

app.listen(port, () => {
  console.log('app is listening on:', port)
})