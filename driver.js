'use strict'

const event = require('./event.js')

event.on('pickup',pickup)

function pickup(payload){
    setTimeout(()=>{
        console.log(`DRIVER: picked up ${payload.orderId}`)
        event.emit('in-transit',payload)
    },1000)
    setTimeout(()=>{
        console.log('DELIVERED')
        event.emit('delivered',payload)
    },3000)
}
