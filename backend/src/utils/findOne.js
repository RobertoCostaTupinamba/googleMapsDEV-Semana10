const Dev = require('../models/Dev');

module.exports = function findOne(githubUsername) {
    return Dev.findOne(githubUsername);
}