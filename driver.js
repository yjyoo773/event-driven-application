'use strict'

const event = require('./event.js')

const io = require('socket.io-client')
const HOST = process.env.HOST || 'http://localhost:3000'

const capsConnection = io.connect(`${HOST}/caps`)


// event.on('pickup',pickup)
capsConnection.on('pickup',pickupHandler)


// function pickup(payload){
//     setTimeout(()=>{
//         console.log(`DRIVER: picked up ${payload.orderId}`)
//         event.emit('in-transit',payload)
//     },1000)
//     setTimeout(()=>{
//         console.log(`DRIVER: delivered ${payload.orderId}`)
//         event.emit('delivered',payload)
//     },3000)
// }


function pickupHandler(payload){
    setTimeout(()=>{
        console.log(`picking up ${payload.orderId}`)
        capsConnection.emit('in-transit',payload)
    },1500)

    setTimeout(()=>{
        console.log(`delivered ${payload.orderId}`)
        capsConnection.emit('delivered',payload)
    },3000)
}