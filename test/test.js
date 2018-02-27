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
            assert.equal(friends.encodeWord(word), '0-1-0-1-0-1');
            assert.equal(friends.encodeWord('JKKJ'), '0-1-1-0');
            assert.equal(friends.encodeWord('JKKJJ'), '0-1-1-0-0');
            assert.equal(friends.encodeWord('HHHCCC'), '0-0-0-1-1-1');
            assert.equal(friends.encodeWord('HHRGOE'), '0-0-1-2-3-4');
        });

        it('should encode lists of words', function() {
            let encodedList = [
                "0-1-0-1-0-1",
                "0-1-0-1-0-1",
                "0-1-0-1-0-1",
                "0-0-0-1-1-1",
                "0-0-0-1-1-1",
                "0-1-2-3-4-5",
                "0-0-1-2-3-4",
                "0-1"
            ];
            assert.ok(equalArrays(friends.encodeWordList(list), encodedList));
        });
    });

    describe('it handles friends', function() {
        it('should return sorted object of friends', function () {
            let sortedObj = { '0-1-0-1-0-1': 3, '0-0-0-1-1-1': 2, '0-1-2-3-4-5': 1, '0-0-1-2-3-4': 1, '0-1': 1 };
            assert.equal(JSON.stringify(friends.sortFriends(list)), JSON.stringify(sortedObj));
        });

        it('should return total number of friends in a list', function() {
            assert.equal(friends.countTotalFriends(list), 5);
        });
    });
});
