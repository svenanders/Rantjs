var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var rename   = require('gulp-rename');

gulp.task('minify', function () {
	var browserified = transform(function(filename) {
		return browserify(filename,
			{paths: ['./source/core/']})
			.require(filename, { expose: 'rant'})
			.bundle();
	});
	return gulp.src('./source/core/index.js')
		.pipe(browserified)
		.pipe(uglify())
		.pipe(rename('rant.min.js'))
		.pipe(gulp.dest('./dist'));
});
