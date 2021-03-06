"use strict";

const faker = require("faker");
const io = require("socket.io-client");
const { thanksHandler } = require("./vendor-handler.js");

const HOST = process.env.HOST || "http://localhost:3000";
const capsConnection = io.connect(`${HOST}/caps`);

// const store = "fake store";
const store = process.argv.splice(2)[0]

capsConnection.emit("join", store);
capsConnection.emit('getAll')
capsConnection.on('message',msg =>{
  console.log('messages: ',msg.payload)
  capsConnection.emit('received',msg)
})
capsConnection.on("delivered", thanksHandler);

// setInterval(() => {
//   let newOrder = {
//     store: store,
//     orderId: faker.datatype.uuid(),
//     customerName: faker.name.findName(),
//     productName: faker.commerce.productName(),
//     address: faker.address.streetAddress(),
//   };
//   capsConnection.emit("pickup", newOrder);
// }, 5000);
