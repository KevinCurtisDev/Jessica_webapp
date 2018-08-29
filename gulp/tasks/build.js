var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
browserSync = require('browser-sync').create();

gulp.task('previewDocs', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});

gulp.task('deleteDocsFolder', function() {
	return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDocsFolder'], function() {
	var pathsToCopy = [
		'./app/**/*',
		'!./app/**/*.html',
		'!./app/Jess-Wireframe.pdf',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/js/**',
		'!./app/temp',
		'!./app/temp/**'
	]

	return gulp.src(pathsToCopy)
		.pipe(gulp.dest("./docs"));
});

gulp.task('optimiseImages', ['deleteDocsFolder'], function() {
	return gulp.src(['./app/assets/images/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('usemin', ['deleteDocsFolder', 'styles'], function() {
	return gulp.src("./app/**/*.html")
		.pipe(usemin({
			css: [function() {return cssnano()}],
		}))
		.pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDocsFolder', 'copyGeneralFiles', 'optimiseImages', 'usemin']);