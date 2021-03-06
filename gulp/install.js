module.exports = function (gulp, $, gutil, helpers, src, options) {
  'use strict';

  gulp.task('bowerinstall', 'Run bower install (--env=prod)', function () {
    // If --env=prod, run in prod mode
    var prodMode = gutil.env.env === 'prod';

    if (prodMode || gutil.env.silent) {
      gutil.log('Prod mode, skipping bower install');
    }
    else {
      return gulp.src(['bower.json'])
        .on('error', helpers.logError)
        .pipe($.run('bower prune'))
        .pipe($.run('bower install -q'))
        ;
    }

  });

  gulp.task('npminstall', 'Run npm install (--env=prod)', function () {
    // If --env=prod, run in prod mode
    var prodMode = gutil.env.env === 'prod';

    if (prodMode || gutil.env.silent) {
      gutil.log('Prod mode, skipping npm install');
    }
    else {
      return gulp.src(['package.json'])
        .on('error', helpers.logError)
        .pipe($.run('npm prune'))
        .pipe($.run('npm install -s'))
        ;
    }
  });
};
