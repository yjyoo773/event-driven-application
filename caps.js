"use strict";



const PORT = process.env.PORT || 3000;
const io = require("socket.io")(PORT);

const caps = io.of("/caps");

caps.on("connection", (socket) => {
  socket.on("pickup", (payload) => {
    console.log("EVENT:", {
      event: "pickup",
      time: new Date(),
      payload,
    });
    caps.emit("pickup", payload);
  });

  socket.on("in-transit", (payload) => {
    // io.t)o(socket.id.emit('in-transit',payload)
    console.log("EVENT:", {
      event: "in-transit",
      time: new Date(),
      payload,
    });
    // caps.to(payload.store).emit("in-transit", payload);
    caps.emit("in-transit", payload);
  });

  socket.on("delivered", (payload) => {
    // io.to(socket.id).emit('in-transit',payload)
    console.log("EVENT:", {
      event: "delivered",
      time: new Date(),
      payload,
    });
    caps.emit("delivered", payload);
  });
});

// const event = require("./event.js");

// require("./driver");
// require("./vendor");


// event.on('pickup',payload =>{
//     let date = new Date()
//     console.log('PICKUP')
//     console.log('TIMESTAMP:',date)
//     console.log('payload:')
//     console.log(payload)
// })

// event.on('in-transit',payload=>{
//     let date = new Date()
//     console.log('IN-TRANSIT')
//     console.log('TIMESTAMP:',date)
//     console.log('payload:')
//     console.log(payload)
// })

// event.on('delivered',payload=>{
//     let date = new Date()
//     console.log('DELIVERED')
//     console.log('TIMESTAMP:',date)
//     console.log('payload:')
//     console.log(payload)
// })
