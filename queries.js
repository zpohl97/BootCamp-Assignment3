/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');

var findLibraryWest = function() 
{
  Listing.findOne({'name' : 'Library West'}, function(err, building)
  {
    if(err)
      {
        handleError(err);
      }
      console.log(building);
  })
};
var removeCable = function() 
{
  Listing.findOneAndRemove({'code' : 'CABL'}, function(err, building)
  {
    if(err)
      {
        handleError(err);
      }
      console.log(building);
  })
};
var updatePhelpsLab = function() 
{
  Listing.update({'code' : 'PHL'}, {'address' : '102 Phelps Lab, Gainesville, FL 32611'}, function(err,building)
  {
    if(err)
      {
        handleError(err);
      }
    Listing.findOne({'code' : 'PHL'}, function(err, building)
    {
      if(err)
        {
          handleError(err);
        }
      console.log(building);
    })
  })
};
var retrieveAllListings = function() 
{
  Listing.find({}, function(err, building)
  {
    if(err)
      {
        handleError(err);
      }
    console.log(building);
  })
};

mongoose.connect(config.db.uri).then(function()
{
  console.log("Connection Opened");
}).then( function()
{
  findLibraryWest();
  removeCable();
  updatePhelpsLab();
  retrieveAllListings();
});
