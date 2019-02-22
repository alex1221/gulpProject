let gulp = require('gulp'),
    runSequence = require('gulp4-run-sequence');

gulp.task('dev', function (callback) {
    runSequence( /* 'cleanRel', */ 'html', 'image', 'javascript', 'sass', 'tpl', 'webserver', callback);
});