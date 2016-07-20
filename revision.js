// var DEBUG = process.env.DEBUG ? true : false;
// var NODE_ENV = process.env.NODE_ENV;
//
// var gulp = require('gulp'),
//     flatten = require('gulp-flatten'),
//     Rev = require('gulp-rev-all'),
//     filter = require('gulp-filter');
//
// // configure new instance for revision
// var rev = new Rev({
//   fileNameVersion: 'cdn-version.json',
//   fileNameManifest: 'cdn-manifest.json',
//   dontRenameFile: [ /^.*\/index\.jade$/g ],
//   debug: DEBUG
// });
//
// // configure filter for source files
// var f = filter(['*', '!index.jade'], { restore: true, passthrough: false });
//
// // run revision
// gulp.src(['dist/**', 'index.jade'])
//   .pipe(rev.revision())
//   .pipe(flatten())
//   .pipe(f)
//   .pipe(gulp.dest('cdn'))
//   .pipe(rev.manifestFile())
//   .pipe(gulp.dest('cdn'));
//
// f.restore.pipe(gulp.dest('./'));

// evil me
var gulp = require('gulp');

gulp.src(['dist/**'])
  .pipe(gulp.dest('cdn'));
