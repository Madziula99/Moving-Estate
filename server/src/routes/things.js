const { Router } = require('express');

const THINGS = [];
// GET /api/things -> list all things
// GET /api/things/:id -> list particular thing
// POST /api/things -> create new thing
// PUT /api/things/:id -> update a thing
// DELETE /api/things/:id -> delete things

async function index(req, res) {
    res.json({ things: THINGS })
}

async function read(req, res) {
    const { id } = req.params;

    const thing = THINGS.find(thing => thing.id === id);

    if (!thing) {
        return res.status(404).json({ error: `Thing with id ${id} not found`});
    }

    res.json({ thing });
}

async function create(req, res) {
    const thing = req.body;

    thing.id = 42;
    THINGS.push(thing);

    res.json({ thing });
}

module.exports = Router()
    .get('/', index)
    .get('/:id', read)
    .post('/', create);
