const mongoose = require('mongoose');

const dbConnection = async () => {
    await mongoose.connect("mongodb+srv://node:dgCxcaMQyOU5RtBA@node.tabkb.mongodb.net/eCommerce")
}
dbConnection()
    .then((res) => console.log("Chall gaya"))
    .catch((err) => console.log("Trouble" + err.message));

module.exports = { dbConnection };