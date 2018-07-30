//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const FacesSchema = mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    }
});

const Faces = module.exports = mongoose.model('Faces', FacesSchema );

module.exports.getFrowns = (callback) => {
                Faces.aggregate([
                     { $match: { status: "frown" } },
                     { $sample: { size: 24 } },
                   ],callback)
}

module.exports.getSmile = (callback) => {
    Faces.aggregate([
                     { $match: { status: "smile" } },
                     { $sample: { size: 1 } },
                   ],callback)
    // Faces.find({ status: { $eq: "smile" } },callback);
}

module.exports.addFace = (newFace, callback) => {
    newFace.save(callback);
}