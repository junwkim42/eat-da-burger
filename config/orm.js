var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryStr = "SELECT * FROM " + table + ";";
        connection.query(queryStr, function(err, response){
            if (err) throw err;
            cb(response);
        });
    },
    insertOne: function(table, colums, values, cb){
        var queryStr = "INSERT INTO " + table + " (" + colums.toString() + ") VALUES (";
        for (var i = 0; i < values.length; i++){
            queryStr += "?";
            if (i != values.length - 1){
                queryStr += ",";
            }
        }
        queryStr += ")";

        connection.query(queryStr, values, function(err, response){
            if (err) throw err;
            cb(response);
        });
    },
    updateOne: function(table, strColVals, condition, cb){
        var queryStr = "UPDATE " + table + " SET " + strColVals + " WHERE " + condition;
        connection.query(queryStr, function(err, response){
            if (err) throw err;
            cb(response);
        });        
    }
}

module.exports = orm;