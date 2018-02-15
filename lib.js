function encodeWord(word) {
    let chars = word.split("");
    let code = [];
    let charCounter = 0;

    chars.forEach((v, i) => {
        if (word.indexOf(v, code.length) === -1) {
            code.push(charCounter);
            charCounter ++;
        } else {
            code.push(word.indexOf(v));
        }
    });
    return code.join('');
}

function encodeWordList(wordList) {
    return wordList.map((v, i) => {
        return encodeWord(v);
    });
}

function sortFriends(list) {
    let encodedList = encodeWordList(list);
    let sortedObj = {};

    encodedList.forEach((v, i) => {
        if (sortedObj[v] === undefined) {
            sortedObj[v] = 1;
        } else {
            sortedObj[v] ++;
        }
    });
    return sortedObj;
}

function countTotalFriends(wordList) {
    let coll = sortFriends(wordList);
    let counter = 0;

    for(let key in coll) {
        let value = coll[key];
        if (value > 1) {
            counter += value;
        }
    }
    return counter;
}

module.exports = {
    encodeWord,
    encodeWordList,
    sortFriends,
    countTotalFriends
}
