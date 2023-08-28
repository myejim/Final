const express = require('express');
const app = express();
 
const censusRoute = express.Router();
let Census = require('../model/Census');
 
censusRoute.route('/').get((req, res) => {
    Book.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get census: ${error}`);
  })
})

censusRoute.route('/add-census').post((req, res) => {
  Census.create(req.body).then(() => {
    console.log('Census added successfully.');
    res.status(200);
  })
  .catch((error) => {
    console.error(`Could not save census: ${error}`);
  })

  censusRoute.route('/delete-census/:id').delete((req, res) => {
    console.log(`Preparing to delete: ${req.params.id}`);
    Census.findByIdAndDelete(req.params.id).then(() => {
      console.log('Census sucessfully deleted');
      res.status(200);
    })
    .catch((error) => {
      console.error(`Could not delete census: ${error}`);
    })
  })
})

module.exports = censusRoute;