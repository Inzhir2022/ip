'use strict';

const gulp = require('gulp');
const browsersync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require ('gulp-clean-css');
const autoprefixer = require ('gulp-autoprefixer');
const rename = require ("gulp-rename");
const imagemin = require ('gulp-imagemin');
const htmlmin = require ('gulp-htmlmin');
const fileinclude = require('gulp-file-include');

gulp.task('server', function() {

		browsersync({
				server: {
						baseDir: "dist"
				}
		});

		gulp.watch("src/*.html").on('change', browsersync.reload);
		gulp.watch("src/pages/*.html").on('change', browsersync.reload);
});

gulp.task('styles', function() {
		return gulp.src("src/sass/**/*.+(scss|sass)")
				.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
				.pipe(rename({suffix: '.min', prefix: ''}))
				.pipe(autoprefixer())
				.pipe(cleanCSS({compatibility: 'ie8'}))
				.pipe(gulp.dest("dist/css"))
				.pipe(browsersync.stream());
});

gulp.task('watch', function () {
		gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
		gulp.watch("src/*.html").on('change', gulp.parallel('html'));
		gulp.watch("src/**/[^_]*.html").on('change', gulp.parallel('html:build'));
	gulp.watch("src/db/**/*").on('change', gulp.parallel('data'));
	gulp.watch('src/**/*php').on('change', gulp.parallel('phpfiles'));
		//gulp.watch("src/**/*.html").on('change', gulp.parallel('fileinclude'));
		gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts'));
		gulp.watch("src/mailer/**/*").on('all', gulp.parallel('mailer'));
		gulp.watch("src/fonts/**/*").on('all', gulp.parallel('fonts'));
		gulp.watch("src/icons/**/*").on('all', gulp.parallel('icons'));
		gulp.watch("src/**/*.png").on('all', gulp.parallel('favicon'));
		gulp.watch("src/img/**/*").on('all', gulp.parallel('images'));
});

gulp.task('html', function () {
		return gulp.src("src/*.html")
				.pipe(htmlmin({ collapseWhitespace: true }))
				.pipe(gulp.dest("dist/"));
});



gulp.task('html:build', function() {
	return gulp.src('src/**/[^_]*.html')
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file',
		}))
		.pipe(gulp.dest('dist/'))
		.pipe(browsersync.stream());
});

gulp.task('data', function () {
		return gulp.src("src/_db/**/*")
				.pipe(gulp.dest("dist/db"))
				.pipe(browsersync.stream());
});


gulp.task('scripts', function () {
		return gulp.src("src/js/**/*.js")
				.pipe(gulp.dest("dist/js"))
				.pipe(browsersync.stream());
});

gulp.task('mailer', function () {
		return gulp.src("src/mailer/**/*")
				.pipe(gulp.dest("dist/mailer"))
				.pipe(browsersync.stream());
});

gulp.task('phpfiles', function () {
		return gulp.src("src/**/*php")
				.pipe(gulp.dest("dist/"))
				.pipe(browsersync.stream());
});

gulp.task('fonts', function () {
		return gulp.src("src/fonts/**/*")
				.pipe(gulp.dest("dist/fonts"))
				.pipe(browsersync.stream());
});

gulp.task('icons', function () {
		return gulp.src("src/icons/**/*")
				.pipe(gulp.dest("dist/icons"))
				.pipe(browsersync.stream());
});

gulp.task('favicon', function () {
	return gulp.src("src/**/*.png")
				.pipe(gulp.dest("dist/"))
				.pipe(browsersync.stream());
});

gulp.task('images', function () {
		return gulp.src("src/img/**/*")
				.pipe(imagemin())
				.pipe(gulp.dest("dist/img"))
				.pipe(browsersync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'html:build', 'data', 'scripts', 'mailer', 'phpfiles',  'fonts', 'icons', 'favicon', 'images'));