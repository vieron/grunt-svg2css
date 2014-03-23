/*
 * grunt-svg2css
 * https://github.com/vieron/grunt-svg2css
 *
 * Copyright (c) 2014 vieron
 * Licensed under the MIT license.
 */

'use strict';

var SVG2CSS = require('svg2css');
var path = require('path');

module.exports = function(grunt) {
    grunt.registerMultiTask('svg2css', 'Colorfy', function() {
        var svg2css = new SVG2CSS(this.data);
        svg2css.run();

        grunt.log.writeln('SVG generated');
    });
};
