const uri = "mongodb+srv://larissa:larissa123@ps.o2mzhqd.mongodb.net/cathub?retryWrites=true&w=majority&appName=ps";
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to DB.');
        console.log(mongoose.connection.name);
    } catch (err) {
        console.error('Failed to connect to DB: ', err);
    }
}

module.exports = connectDB