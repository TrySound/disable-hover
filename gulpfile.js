var gulp = require('gulp'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	header = require('gulp-header'),
	pkg = JSON.parse(require('fs').readFileSync('package.json')),
	template = ['/*!',
				' * <%= name %> <%= version %>',
				' * <%= description %>',
				' * <%= homepage %>',
				' * ',
				' * Released under the <%= license %> license',
				' * Copyright (c) <%= new Date().getFullYear() %>, <%= author %>',
				' */\n\n'].join('\n');


gulp.task('default', function () {
	gulp.src('src/disable-hover.css')
		.pipe(header(template, pkg))
		.pipe(gulp.dest('dist'));

	gulp.src('src/disable-hover.js')
		.pipe(header(template, pkg))
		.pipe(gulp.dest('dist'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify({
			preserveComments: 'some'
		}))
		.pipe(gulp.dest('dist'));
});
