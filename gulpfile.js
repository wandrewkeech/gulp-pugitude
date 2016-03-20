var cleancss = require('gulp-clean-css');
var concat = require('gulp-concat');
var dest = require('gulp-dest');
var gulp = require('gulp');
var gulpJade = require('gulp-jade');
var jade = require('jade');
var liveServer = require("live-server");
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
 
var liveServerParams = {   //** FIX-ME **  auto-refresh in the browser does not function
	root: "./output/", // Set root directory that's being server. If left black, defaults
                           // wherever 'gulp' command was issued. 
	ignore: './output/html/layouts', // comma-separated string for paths to ignore - Does
                                         // not work for some reason.
};


gulp.task('liveserver', function(){      // Required gulp.task definition to call later
    liveServer.start(liveServerParams);
});

gulp.task('sass', function(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', sass.logError)
        .pipe(gulp.dest('./output/css/'))
        .pipe(cleancss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./output/css/'))
});

gulp.task('jade', function(){
    return gulp.src('./src/jade/**/*.jade')
        .pipe(gulpJade({
            jade : jade,
            pretty: true
        }))
        .pipe(gulp.dest('./output/html/'))
});

gulp.task('javascript', function(){
    gulp.src('./src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('output/js/'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./output/js/'));
});

gulp.task('default', ['jade', 'javascript', 'sass'], function () {
    gulp.watch('src/jade/**/*.jade', ['jade'])
    gulp.watch('src/js/**/*.js', ['javascript'])
    gulp.watch('src/scss/*.scss', ['sass'])
    liveServer.start(liveServerParams);
});
