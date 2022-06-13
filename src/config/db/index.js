const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://bqt:pAKVLyWVowHT1uBy@cluster0.z9be0.mongodb.net/project_db',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );

        console.log('Connect successfully!!');
    } catch (error) {
        console.log('Connect failed!!');
    }
}

module.exports = { connect };
