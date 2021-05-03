'use strict'

const event = require('./event.js')

require('./driver')
require('./vendor')

event.on('pickup',payload =>{
    let date = new Date()
    console.log('PICKUP',payload, 'TIMESTAMP:',date)
    // event.emit()
})

event.on('in-transit',payload=>{
    let date = new Date()
    console.log('IN-TRANSIT',payload, 'TIMESTAMP:',date)
})

event.on('delivered',payload=>{
    let date = new Date()
    console.log('DELIVERED',payload, 'TIMESTAMP:',date)
})