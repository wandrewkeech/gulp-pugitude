var cleancss   = require('gulp-clean-css');
var concat     = require('gulp-concat');
var dest       = require('gulp-dest');
var gulp       = require('gulp');
var gulpPug    = require('gulp-pug');
var liveServer = require('live-server');
var path       = require('path');
var rename     = require('gulp-rename');
var sass       = require('gulp-sass');
var uglify     = require('gulp-uglify');
 
//** FIX-ME **  auto-refresh in the browser does not function
// Set root directory that's being server. If left black, 
// defaults to wherever 'gulp' command was issued.           
// comma-separated string for paths to ignore - Does not work for some reason.
var liveServerParams = {   
	root: './build/html/', 
	ignore: './build/html/layouts', 
};

gulp.task('pug', function(){
    return gulp.src('./src/pug/**/*.pug')
        .pipe(gulpPug({
            filename: ".pug",
            pretty: true,
            basedir: './'  // This value is required for gulp-pug to resolve the 'include',
        }))                // 'extends', etc. calls to other files in the build tree.
        .on('error', swallowError)
        .pipe(gulp.dest('./build/html/'))
        .on('error', swallowError);
});

gulp.task('javascript', function(){
    gulp.src('./src/js/**/*.js')
        .pipe(concat('app.js'))
        .on('error', swallowError)
        .pipe(gulp.dest('./build/html/js/'))
        .pipe(uglify())
        .on('error', swallowError)
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/html/js/'));
});

gulp.task('sass', function(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass({includePaths:['./node_modules/vanilla-framework/scss/']}))
        .on('error', sass.logError)
        .pipe(gulp.dest('./build/html/css/'))
        .pipe(cleancss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/html/css/'));
});

gulp.task('default', ['pug', 'javascript', 'sass'], function () {
    gulp.watch('./src/pug/**/*.pug', ['pug']);
    gulp.watch('./src/js/**/*.js', ['javascript']);
    gulp.watch('./src/scss/*.scss', ['sass']);
    liveServer.start(liveServerParams); // As replacement for using the gulp.task('live-server')
});

function swallowError(error){
    console.log(error.toString());
    this.emit('end');
}
