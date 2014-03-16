# grunt-svg2css

> Use [svg2css](https://github.com/vieron/svg2css) in yout Grunt projects

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svg2css --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svg2css');
```

## The "svg2css" task

### Overview
In your project's Gruntfile, add a section named `svg2css` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svg2css: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

See [svg2css](https://github.com/vieron/svg2css).

### Usage Example

```js
grunt.initConfig({
  svg2css: {
    icons: {
      svgPath: 'test/svg/',
      outputPath: 'test/tmp/',
      cssPath: 'test/tmp/css/',
      colorFile: 'colors.json' // relative to svgPath
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

