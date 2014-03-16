'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.svg2css = {
  setUp: function(done) {
    done();
  },
  icons: function(test) {
    test.expect(3);

    var not_colored_original = grunt.file.read('test/tmp/ios7-arrow-left.svg');
    var not_colored_new = grunt.file.read('test/svg/ios7-arrow-left.svg');
    test.equal(not_colored_original, not_colored_new, 'Not colored SVGs should be equal');

    var colored_original = grunt.file.read('test/tmp/ios7-albums.svg');
    var colored_new = grunt.file.read('test/svg/ios7-albums.svg');
    test.notEqual(colored_original, colored_new, 'Colored SVGs should be different');

    var css = grunt.file.read('test/tmp/css/icons.css');
    test.ok(css, 'should exist the generated CSS file');

    test.done();
  }
};
