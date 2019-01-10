'use strict'

const Sprint = require('./sprint.js');
const express = require('express');
var app = express();

app.get('/', function(req, res){
    var s = new Sprint();
    var dt = s.getCurrentSprint().sprintStartDate;
    res.send("Current Sprint: " + s.getCurrentSprint().sprintNumer + ", started on " + dt.toDateString());
});

app.get('/:id', function(req, res){
    var dt = new Sprint().getSprint(req.params.id).sprintStartDate;
    res.send('Sprint ' + req.params.id + ' start date is ' + dt.toDateString());
 });

app.listen(3000);
