'use strict'

const faker = require('faker')

const event = require('./event.js')

event.on('delivered',thanks)


function thanks(){
    console.log('THANK YOU')
}

setInterval(()=>{
    let newOrder = {
        storeName: 'Mugs',
        orderId: faker.datatype.uuid(),
        customerName:faker.name.findName(),
        address:faker.address.streetAddress()
    }
    event.emit('pickup',newOrder)
},5000)

module.exports = {thanks}