const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs') 

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {
    timestamps: true
});

// This method encrypts the password that will be stored in the database
UserSchema.methods.encrypPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// This method compare the password that the user enters with the password that is stored in db
UserSchema.methods.matchPassword =  async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = model('User', UserSchema);