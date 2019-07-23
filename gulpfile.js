var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat")

//jQuery
gulp.task('jquery',function(){
    return gulp
    .src(
        './node_modules/jquery/dist/jquery.slim.js'
    )
    .pipe(plumber())
    .pipe(concat('jquery.slim.js'))
    .pipe(gulp.dest('./stylesheets/js'));
});
//popper.js
gulp.task('popperJs',function(){
    return gulp
    .src(
        './node_modules/popper.js/dist/umd/popper.min.js'
    )
    .pipe(plumber())
    .pipe(concat('popper.min.js'))
    .pipe(gulp.dest('./stylesheets/js'));

})
//bootstrap.js
gulp.task('bootstrapJs',function(){
    return gulp
    .src(
        './node_modules/bootstrap/dist/js/bootstrap.min.js'
    )
    .pipe(plumber())
    .pipe(concat('bootstrap.min.js'))
    .pipe(gulp.dest('./stylesheets/js'));
})
const all = gulp.series('jquery','popperJs','bootstrapJs');
gulp.task('default',all)
