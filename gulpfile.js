var cleancss   = require('gulp-clean-css');
var concat     = require('gulp-concat');
var dest       = require('gulp-dest');
var gulp       = require('gulp');
var gulpPug    = require('gulp-pug');
var jade       = require('pug');
var liveServer = require('live-server');
var path       = require('path');
var rename     = require('gulp-rename');
var sass       = require('gulp-sass');
var uglify     = require('gulp-uglify');
 
var liveServerParams = {   //** FIX-ME **  auto-refresh in the browser does not function
	root: './build/html/',  // Set root directory that's being server. If left black, defaults
                           // wherever 'gulp' command was issued. 
	ignore: './build/html/layouts',  // comma-separated string for paths to ignore - Does
                                         // not work for some reason.
};


// gulp.task('liveserver', function(){      // Required gulp.task definition to call later
//     liveServer.start(liveServerParams);  // 
// });                                      // ** Actually might work better
//                                               without the gulp.task
//                                               invocation?

gulp.task('sass', function(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', sass.logError)
        .pipe(gulp.dest('./build/css/'))
        .pipe(cleancss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/css/'))
});

gulp.task('pug', function(){
    return gulp.src('./src/pug/**/*.pug')
        .pipe(gulpPug({
            filename: ".pug",
            pretty: true,
            basedir: './'
        }))
        .pipe(gulp.dest('./build/html/'))
});

gulp.task('javascript', function(){
    gulp.src('./src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build/js/'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('default', ['pug', 'javascript', 'sass'], function () {
   gulp.watch('./src/pug/**/*.pug', ['pug'])
    gulp.watch('./src/js/**/*.js', ['javascript'])
    gulp.watch('./src/scss/*.scss', ['sass'])
    liveServer.start(liveServerParams); // As replacement for using the gulp.task('live-server')
});
