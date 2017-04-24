const mongoose = require('mongoose');

let profileSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    profilePicPath: {type: String}
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;