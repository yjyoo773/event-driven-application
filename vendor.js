'use strict'

const faker = require('faker')

// const event = require('./event.js')

const io = require('socket.io-client')
const HOST = process.env.HOST || 'http://localhost:3000'

const capsConnection = io.connect(`${HOST}/caps`)

capsConnection.on('delivered',thanksHandler)





// event.on('delivered',thanks)


function thanksHandler(payload){
    console.log(`thank you for delivering ${payload.orderId}`)
}

setInterval(()=>{
    let newOrder = {
        store:'Random',
        orderId: faker.datatype.uuid(),
        customerName:faker.name.findName(),
        productName:faker.commerce.productName(),
        address:faker.address.streetAddress()
    }
    // event.emit('pickup',newOrder)
    capsConnection.emit('pickup',newOrder)
},5000)
