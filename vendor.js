'use strict'

const faker = require('faker')

const event = require('./event.js')

event.on('delivered',thanks)


function thanks(payload){
    console.log(`VENDOR: THANK YOU FOR DELIVERING ${payload.orderId}`)
}

setInterval(()=>{
    let newOrder = {
        storeName: 'Mugs',
        orderId: faker.datatype.uuid(),
        customerName:faker.name.findName(),
        productName:faker.commerce.productName(),
        address:faker.address.streetAddress()
    }
    event.emit('pickup',newOrder)
},5000)

tgtt