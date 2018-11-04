var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var keySchema = new Schema({
    keyID: String,
    createdAt: {type: Date,  expireAfterSeconds: 3600, default: Date.now},
    ownedBy: {type: Schema.Types.ObjectId, ref:"User"}

});

var Key = mongoose.model('Key', keySchema);

module.exports = Key;