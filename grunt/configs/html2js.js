/**
 * HTML2JS is a Grunt plugin that takes all of your template files and
 * places them into JavaScript files as strings that are added to
 * AngularJS's template cache. This means that the templates too become
 * part of the initial payload as one JavaScript file. Neat!
 */
module.exports =
{
  /**
   * These are the templates from `src/app`.
   */
  app: {
    options: { base: 'src' },
    src: [ '<%= app_files.atpl %>' ],
    dest: '<%= build_dirs.root %>/templates-app.js'
  },
  test: {
    options: { base: 'test', module: 'fixtureCache'},
    src: [ '<%= app_files.ttpl %>' ],
    dest: '<%= build_dirs.test %>/fixtureCache.js'
  }
};
