const { scv } = require('../models/scv.models');



module.exports.createscv = (request, response) => {
    const { fname, lname, phone, space, addy, email } = request.body;
    scv.create({
        fname,
        lname,
        phone,
        space,
        addy,
        email,
    })
        .then(scv => response.json(scv))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllscvs  = (request, response) => {
    scv.find({})
        .then(scvs => response.json(scvs)) //this is a the var that we can use
        .catch(err => response.json(err))
}

module.exports.getscv = (request, response) => {
    scv.findOne({_id:request.params.id})
        .then(onescv => response.json(onescv))
        .catch(err => response.json(err))
}

module.exports.updatescv = (request, response) => {
    scv.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedscv => response.json(updatedscv))
        .catch(err => response.json(err))
}

module.exports.deletescv = (request, response) => {
    scv.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}