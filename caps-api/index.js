"use strict";

const express = require("express");
const cors = require("cors");
const faker = require("faker");
const io = require("socket.io-client");

const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";

const app = express();
const PORT = process.env.PORT || 3001;
const socket = io.connect(`${SERVER_URL}/caps`);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/pickup", (req, res) => {
  let newOrder = req.body || {
    store: store,
    orderId: faker.datatype.uuid(),
    customerName: faker.name.findName(),
    productName: faker.commerce.productName(),
    address: faker.address.streetAddress(),
  };
  socket.emit('pickup',newOrder)
  res.status(200).send('Your package has been scheduled')
});


app.listen(PORT,()=>{console.log(`Server up on ${PORT}`)})