'use strict'

const event = require('./event.js')

require('./driver')
require('./vendor')

event.on('pickup',payload =>{
    let date = new Date()
    console.log('PICKUP')
    console.log('TIMESTAMP:',date)
    console.log('payload:')
    console.log(payload)
})

event.on('in-transit',payload=>{
    let date = new Date()
    console.log('IN-TRANSIT')
    console.log('TIMESTAMP:',date)
    console.log('payload:')
    console.log(payload)
})

event.on('delivered',payload=>{
    let date = new Date()
    console.log('DELIVERED')
    console.log('TIMESTAMP:',date)
    console.log('payload:')
    console.log(payload)
})