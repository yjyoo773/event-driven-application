'use strict'

function pickupHandler(socket,payload){
    setTimeout(()=>{
        console.log(`picking up ${payload.orderId}`)
        socket.emit('in-transit',payload)
    },1500)

    setTimeout(()=>{
        console.log(`delivered ${payload.orderId}`)
        socket.emit('delivered',payload)
    },3000)
}

module.exports = {pickupHandler}