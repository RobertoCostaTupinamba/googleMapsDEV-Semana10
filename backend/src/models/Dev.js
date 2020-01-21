const mongoose = require('mongoose');
const PointSchema = require('./utils/PointShema')

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    avatar_url: String,
    techs: [String],
    location: {
        type:PointSchema,
        index: '2dsphere'
    }
});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
module.exports = mongoose.model('Dev', DevSchema);