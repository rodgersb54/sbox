'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({

	// nodemon our expressjs server
	script: './app.js',

	// watch core server file(s) that require server restart on change
	watch: ['app.js', '../components/**/*.js', 'controllers/**/*.js']
  })
	.on('start', function onStart() {
	  // ensure start only got called once
	  if (!called) { cb(); }
	  called = true;
	})
	.on('restart', function onRestart() {
	  // reload connected browsers after a slight delay
	  setTimeout(function reload() {
		browserSync.reload({
		  stream: false
		});
	  }, BROWSER_SYNC_RELOAD_DELAY);
	});
});

gulp.task('browser-sync', ['nodemon'], function () {

  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync({

	// informs browser-sync to proxy our expressjs app which would run at the following location
	proxy: 'http://localhost:3000',

	// informs browser-sync to use the following port for the proxied app
	// notice that the default port is 3000, which would clash with our expressjs
	port: 4000,

	// open the proxied app in chrome
	browser: ['google-chrome']
  });
});

gulp.task('js',  function () {
  return gulp.src('resources/scripts/**/*.js')
	//.pipe(uglify())
  	.pipe(rename(function(path){
		path.basename = 'app'
	}))
	.pipe(gulp.dest('public/js/'))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('css', function () {
  return gulp.src('resources/scss/bones.scss')
  	.pipe(sass().on('error', sass.logError))
  	.pipe(cssnano())
  	.pipe(rename(function(path){
			path.basename = 'style'
		}))
  	.pipe(gulp.dest('public/css'))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['css','js','browser-sync'], function () {
  gulp.watch('resources/**/*.js',   ['js', browserSync.reload]);
  gulp.watch('public/**/*.js',   ['js', browserSync.reload]);
  gulp.watch('resources/**/*.scss',  ['css']);
  gulp.watch('views/**/*.handlebars', ['bs-reload']);
  gulp.watch('views/**/*.html', ['bs-reload']);
  gulp.watch('public/**/*.html', ['bs-reload']);
});