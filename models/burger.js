var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(response){
            cb(response);
        });
    },
    insertOne: function(colums, values, cb){
        orm.insertOne("burgers", colums, values, function(response){
            cb(response);
        });
    },
    updateOne: function(strColVals, condition, cb){
        orm.updateOne("burgers", strColVals, condition, function(response){
            cb(response);
        });
    }
}

module.exports = burger;