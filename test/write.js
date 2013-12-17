var assert = require('assert');
var fs = require('fs');
var PO = require('..');

function assertHasLine(str, line) {
    var lines = str.split("\n");
    var found = false;

    for (var i = 0; i < lines.length; i++) {
        if (lines[i].trim() === line) {
            found = true;
            break;
        }
    }

    assert(found, "Could not find line: " + line);
}

describe('Write', function () {
    it('write flags', function () {
        var input = fs.readFileSync(__dirname + '/fixtures/fuzzy.po', 'utf8');
        var po = PO.parse(input);
        var str = po.toString();
        assertHasLine(str, "#, fuzzy");
    });
});
