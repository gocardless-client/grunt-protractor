'use strict';

module.exports = function(grunt) {

  grunt.registerTask('protractor', 'Run integration tests', function() {
    var done = this.async();
    var opts = this.options();

    var protractor = grunt.util.spawn({
      cmd: 'protractor',
      args: [opts.configFile]
    }, function(err, result, code) {
      done(code === 0);
    });

    protractor.stdout.pipe(process.stdout);
    protractor.stderr.pipe(process.stderr);
  });

};
