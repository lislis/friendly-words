const fs = require('fs');
const path = require('path');

const countTotalFriends = require('./lib').countTotalFriends;

const filename = process.argv[2];
if (filename === undefined) {
    throw new Error('Please add path to a file');
}

const filepath = path.join(__dirname, filename);

console.log("Finding friendly words, just a sec");

let buffer = fs.readFileSync(filepath);
let list = buffer.toString().split("\n");

console.log("Total number of friends in file: ", countTotalFriends(list));
