var CDN_BASE_PATH = process.env.CDN_BASE_PATH || null;
var DEBUG = process.env.DEBUG;
var NODE_ENV = process.env.NODE_ENV;

var gulp = require('gulp'),
    flatten = require('gulp-flatten'),
    Rev = require('gulp-rev-all'),
    rev = new Rev({
      fileNameVersion: 'cdn-version.json',
      fileNameManifest: 'cdn-manifest.json',
      dontRenameFile: [ /^.*\/index\.jade$/g ],
      prefix: CDN_BASE_PATH,
      debug: DEBUG
    });

if (NODE_ENV === 'production') {
  // in production, we want to reference our fingerprinted files
  gulp.src(['dist/**', 'src/index.jade'])
    .pipe(rev.revision())
    .pipe(flatten())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifestFile())
    .pipe(gulp.dest('dist'));
} else {
  // during development, we want watchify to do it's thing,
  // so we don't replace references.
  gulp.src(['src/index.jade'])
    .pipe(flatten())
    .pipe(gulp.dest('dist'));
}
