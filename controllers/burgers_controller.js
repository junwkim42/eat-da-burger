var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.selectAll(function(response){
        var burgerObj = {
            burgers: response
        };
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req,res){
    burger.insertOne(["burger_name", "devoured"], 
                    [req.body.burger_name, req.body.devoured],
                    function(response){
                        res.json({ id: response.insertId });
                    });
});

router.put("/api/burgers/:id", function(req,res){
    var colVar = "devoured = " + req.body.devoured;
    var condition = "id = " + req.params.id;
    burger.updateOne(colVar, condition, function(response){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
        }
    });
});