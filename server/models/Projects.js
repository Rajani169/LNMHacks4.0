const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);


    const projectSchema = new Schema({
        projects: {
            type: String,
            required: true,
            unique: true
        },
        department: {
            type: String,
            required: true
        },
    });


var Projects = mongoose.model('Project', projectSchema);

module.exports = Projects;