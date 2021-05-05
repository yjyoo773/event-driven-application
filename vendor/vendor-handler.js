'use strict'

function thanksHandler(payload){
    console.log(`thank you for delivering ${payload.orderId}`)
}

module.exports = {thanksHandler}