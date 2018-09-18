var gulp = require('gulp')
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');
var order = require('gulp-order');
var concat = require('gulp-concat');
var mainBowerFiles  = require('main-bower-files');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify')
var minifyCSS = require('gulp-minify-css')
var webserver = require('gulp-webserver');

var ngAnnotate = require('gulp-ng-annotate')
var imagemin = require('gulp-imagemin')

var paths = {
	scripts: 'static/js/**/*.js',
	images: 'static/img/**/*',
	app: 'app/**/*.js',
	styles: 'static/css/**/*.css'
};

var jsFilter = gulpFilter('*.js');
var cssFilter = gulpFilter('*.css');
var vendors = mainBowerFiles();
gulp.task('clean:app:js', function (cb) {
	del('dist/js/app.*', cb);
});

gulp.task('clean:static:js', function (cb) {
	del('dist/js/static.*', cb);
});

gulp.task('clean:static:css', function (cb) {
	del('dist/css/static.*', cb);
});

gulp.task('clean:libs', function (cb) {
	del(['dist/js/libs.*', 'dist/css/libs.*'], cb);
});

gulp.task('libs', ['clean:libs'], function () {
	return gulp.src(mainBowerFiles())
	.pipe(jsFilter)
	// .pipe(order(vendors))
	.pipe(notify("Found file: <%= file.relative %>!"))
	.pipe(concat('libs.min.js'))
	.pipe(uglify({mangle: false}))
	.pipe(gulp.dest('dist/js'))
	.pipe(jsFilter.restore())

	.pipe(cssFilter)
	.pipe(notify("Found file: <%= file.relative %>!"))
	.pipe(concat('libs.min.css'))
	.pipe(sourcemaps.init())
	.pipe(minifyCSS({comments:false,spare:true}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/css'))
	.pipe(cssFilter.restore())
});

gulp.task('styles', ['clean:static:css'], function() {
	return gulp.src(paths.styles)
	.pipe(notify("Found file: <%= file.relative %>!"))
	.pipe(concat('static.min.css'))
	.pipe(sourcemaps.init())
	.pipe(minifyCSS({comments:false,spare:true}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('app', ['clean:app:js'], function() {
	return gulp.src(paths.app)
	.pipe(notify("Found file: <%= file.relative %>!"))
	.pipe(ngAnnotate())
	.pipe(concat('app.min.js'))
	.pipe(uglify({mangle: false}))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('scripts', ['clean:static:js'], function() {
	return gulp.src(paths.scripts)
	.pipe(notify("Found file: <%= file.relative %>!"))
	.pipe(concat('static.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('icons', function() { 
    return gulp.src('./bower_components/font-awesome-bower/fonts/**.*') 
        .pipe(gulp.dest('./dist/fonts')); 
});

gulp.task('watch', function() {
	gulp.watch('bower.json', ['libs']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.app, ['app']);
	gulp.watch(paths.scripts, ['scripts']);
});

// Локальный сервер для разработки
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 9000,
      fallback: 'index.html'
    }));
});

gulp.task('default', ['libs', 'styles', 'app', 'scripts', 'icons'], function() {
    gulp.start('webserver', 'watch');
});
