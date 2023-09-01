const fs = require('fs');

function readDatabase() {
    try {
        const data = fs.readFileSync('database.json');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading database:', error);
        return [];
    }
}

function writeDatabase(data) {
    try {
        fs.writeFileSync('database.json', JSON.stringify(data));
    }
    catch (error) {
        console.error('Error writing database:', error);
    }
}


module.exports = { readDatabase, writeDatabase };