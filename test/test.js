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
        "HHRGOE"
    ];

    describe('it encodes words', function() {
        it('should encode a single word', function() {
            let word = "LALALA";
            assert.equal(friends.encodeWord(word), '010101');
        });

        it('should encode lists of words', function() {
            let encodedList = [
                "010101",
                "010101",
                "010101",
                "000333",
                "000333",
                "012345",
                "002345"
            ];
            assert.ok(equalArrays(friends.encodeWordList(list), encodedList));
        });
    });

    describe('it handles friends', function() {
        it('should return sorted object of friends', function () {
            let sortedObj = { '010101': 3, '000333': 2, '012345': 1, '002345': 1 };
            assert.equal(JSON.stringify(friends.sortFriends(list)), JSON.stringify(sortedObj));
        });

        it('should return total number of friends in a list', function() {
            assert.equal(friends.countTotalFriends(list), 5);
        });
    });
});
