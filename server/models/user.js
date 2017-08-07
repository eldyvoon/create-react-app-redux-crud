const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  	name: {
  		type: String
    },
    location: {
    	type: String
    },
    picture: {
    	thumbnail: {
    		type: String
    	}
    },
    phone: {
    	type: String
    }
});
 
const User = module.exports = mongoose.model('users', UserSchema);

module.exports.getAllUsers = (callback) => {
	User.find({}).sort([['_id', -1]]).exec(callback)
}

module.exports.getUserById = (_id, callback) => {
	User.findOne({_id}, callback)
}

module.exports.addUser = (userObj, callback) => {
	let newUser = new User(userObj)

	newUser.save(callback)
}

module.exports.updateUser = (_id, userObj, callback) => {

	User.findOneAndUpdate({_id}, {$set: userObj}, { upsert: true, 'new': true }, 
		callback)
}

module.exports.deleteUser = (_id, callback) => {
	User.findByIdAndRemove({_id},
		callback)
}

