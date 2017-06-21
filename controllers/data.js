'use stric'

// Get elements
const Data = require('../models/data')

// Read only one animal
function getData(req, res) {
    let dataId = req.params.dataId

    Data.findById(dataId, (err, data) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!data) return res.status(404).send({message: `El producto no existe`})
        
        res.status(200).send({ data })
    })
}

// Read animals
function getAllData (req, res) {
    Data.find({}, (err, data) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if (!data) return res.status(404).send({message: 'No existen productos'})

        res.status(200).send({ data })
    })
}

// Create animal
function saveData (req, res) {
    console.log('POST /api/data')
    console.log(req.body)

    let data = new Data()
    data.name = req.body.name
    data.email = req.body.email
    data.phone = req.body.phone
    data.job = req.body.job

    data.save((err,dataUser) => {
        if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
        res.status(200).send({data: dataUser})
    })
}

// Update animal
function updateData (req, res) {
    let dataId = req.params.dataId
    let update = req.body

    Data.findByIdAndUpdate(dataId, update, (err, DataUpdate) => {
        if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})

        res.status(200).send({ data: DataUpdate })
    })
}

// Delete animals
function deleteData (req, res) {
    let dataId = req.params.dataId

    Data.findById(dataId, (err, data) => {
        if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})

        data.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
            res.status(200).send({message: 'El producto ha sido eliminado'})
        })
    })
}

module.exports = {
    getData,
    getAllData,
    saveData,
    updateData,
    deleteData
}