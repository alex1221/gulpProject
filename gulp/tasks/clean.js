let gulp = require('gulp'),
    config = require('../config.js'),
    clean = require('gulp-clean');

gulp.task('cleanDev', function () {
    return gulp.src(config.buildPath + '**/*').pipe(clean());
})

gulp.task('cleanRel', function () {
    return gulp.src(config.buildPath).pipe(clean());
})