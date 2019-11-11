// var Artista = require('../models/artista');
var models = require('../models');

function get(request, response) {
    models.Artist.findAll().then(artist => {
        response.json(artist);
    })
}

function getById(request, response) {

    models.Artist.findOne({where:{id: request.params.id }}).then(artist => {
        response.json(artist);
    });
}
function store(request, response) {
    models.Artist.create({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        description: request.body.description,
        image: request.body.image,
    }).then(function(data) {
        if (data) {
            response.status(200).send({ message: 'se registro' });
        } else {
            response.status(400).send({ message: 'no se registro' });
        }
    });
}

function update(req, res) {
    //const nuevoDato = req.body;
    const updatedArtist = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        description: req.body.description,
        image: req.body.image,
    };
    console.log(updatedArtist);
    models.Artist.update(updatedArtist, { where: { id: req.params.id } })
        .then(artist => {
            console.log(artist);
            return res.status(200).json({message:'Actualizado'});
        }).catch((err) => {
        return res.status(404).json({ message: "Server con problemas" });
    });
}

function destroy(req, res) {
    models.Artist.destroy({ where: { id: req.params.id } })
        .then(artist => {
            return res.status(200).json({ message: "Eliminado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "No ha sido eliminado" });
        });
}
module.exports = {get, getById, store, update, destroy}
