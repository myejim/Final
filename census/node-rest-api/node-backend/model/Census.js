const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    year: { type: String },
    name: { type: String },
    householdNum: { type: String },
    state: { type: String },
    city: { type: String },
    zipcode: { type: String }
}, {
    collection: 'census'
});

module.exports = mongoose.model('Census', CensusSchema);
