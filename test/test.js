const friends = require('../lib');
const assert = require('assert');

const equalArrays = function(a1, a2) {
    if (a1.length === a2.length && a1.every(function(v, i) {
        return v === a2[i];
    })) {
        return true;
    } else {
        return false;
    }
};


describe('friendly words', function() {
    let list = [
        "LALALA",
        "XOXOXO",
        "GCGCGC",
        "HHHCCC",
        "BBBMMM",
        "EGONUH",
        "HHRGOE",
        "AB"
    ];

    describe('it encodes words', function() {
        it('should encode a single word', function() {
            let word = "LALALA";
            assert.equal(friends.encodeWord(word), '010101');
            assert.equal(friends.encodeWord('JKKJ'), '0110');
            assert.equal(friends.encodeWord('JKKJJ'), '01100');
            assert.equal(friends.encodeWord('HHHCCC'), '000111');
            assert.equal(friends.encodeWord('HHRGOE'), '001234');
        });

        it('should encode lists of words', function() {
            let encodedList = [
                "010101",
                "010101",
                "010101",
                "000111",
                "000111",
                "012345",
                "001234",
                "01"
            ];
            assert.ok(equalArrays(friends.encodeWordList(list), encodedList));
        });
    });

    describe('it handles friends', function() {
        it('should return sorted object of friends', function () {
            let sortedObj = { '010101': 3, '000111': 2, '012345': 1, '001234': 1, '01': 1 };
            assert.equal(JSON.stringify(friends.sortFriends(list)), JSON.stringify(sortedObj));
        });

        it('should return total number of friends in a list', function() {
            assert.equal(friends.countTotalFriends(list), 5);
        });
    });
});
