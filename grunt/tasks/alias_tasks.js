module.exports = function(grunt) {
    /**
   * In order to make it safe to just compile or copy *only* what was changed,
   * we need to ensure we are starting from a clean, fresh build. So we rename
   * the `watch` task to `delta` (that's why the configuration var above is
   * `delta`) and then add a new task called `watch` that does a clean build
   * before watching for changes.
   */
  grunt.renameTask( 'watch', 'delta' );
  grunt.registerTask( 'watch', [ 'develop', 'karma:unit:start', 'concurrent:server' ] );
  grunt.registerTask( 'watch:develop', [ 'develop', 'karma:unit:start', 'concurrent:server' ] );
  grunt.registerTask( 'watch:integrate', [ 'integrate', 'karma:unit:start','concurrent:server' ] );

  /**
   * The default task is to build and compile.
   */
  grunt.registerTask( 'default', [ 'compile' ] );

  grunt.registerTask( 'build', [
    'clean:build', 'bower:install',
    'html2js', //'jshint:target',
    'concat_sourcemap:compile_vendor_js',
    'copy:karmaUnit'
  ]);

  grunt.registerTask( 'qa', "Check source code before deploy", [ 'jshint:src', 'jsonlint']);

  grunt.registerTask( 'develop-build', "Compile the app under development", [
    'build',
    'traceur:build',
    'copy:traceur_runtime',
    'ngAnnotate:build',
    'ngAnnotate:build_vendor'
  ]);
  grunt.registerTask( 'develop', "Compile the app under development", [ 'copy:development-env', 'develop-build']);
  grunt.registerTask( 'integrate', "Compile the app under development", [ 'copy:integration-env', 'develop-build']);
  grunt.registerTask( 'ci-test', "First pass at a build-and-test run", [
    'copy:test-env',
    'develop-build',
    'traceur:es6test',
    'traceur:es6testhelp',
    'jshint:test',
    'html2js:test',
    'traceur:test',
    'ngAnnotate:test',
    'karma:dev' ]);
  grunt.registerTask( 'compile', "Compile the app in preparation for deploy", [
    'copy:production-env',
    'traceur:es6src',
    'jshint:precompile',
    'build',
    'traceur:deploy',
    'concat_sourcemap:compile_js',
    'ngAnnotate:compile',
   ]);

}
