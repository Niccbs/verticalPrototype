const express = require('express')
const app = express.Router();
const Page = require('../Model/classes')


app.post("/page" , (req, res) => {
    const all = new Page(req.body.page)
    all.pagesFunc(all)
    .then(rows => res.status(200).send(rows))
    .catch(err => res.status(400).send(err))
});


app.post("/create" , (req, res) => {
    const pages = new Page(req.body.title, req.body.type, req.body.content)
    pages.create(pages)
    .then(res => res.status(200).send(res))
    .catch(err => res.status(400).send(err))
});

/*
app.post("/eksponering" , (req, res) => {
    const all = new Page(req.body.page)
    all.pagesFunc(all)
    .then(rows => res.status(200).send(rows))
    .catch(err => res.status(400).send(err))
});
*/
app.post("/all" , (req, res) => {
    const type = new Page(req.body.title, req.body.type)
    console.log(type)
    type.getAll(type)
    .then(rows => res.status(200).send(rows))
    .catch(err => res.status(400).send(err))
});




module.exports = app
