'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    jsonListings = require('./listings.json');

var tempArray = [];
jsonListings.entries.forEach(function(building) 
{
  tempArray.push(building);
});

mongoose.connect(config.db.uri).then(function() 
{
  console.log("Connection opened")
  return Listing.insertMany(tempArray);
}).then(function()
{
    mongoose.connection.close();
    console.log("connection closed");
});