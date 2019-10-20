const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Projects= require('../models/Projects');

const projectRouter = express.Router();

const cors = require('./cors');

projectRouter.use(bodyParser.json());

projectRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req,res,next) => {
    Projects.find(req.query)
    .then((projects) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(projects);
    }, (err) => next(err))
    .catch((err) => next(err));
})



module.exports = projectRouter;