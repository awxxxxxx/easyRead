/**
 *@author: waterbear
 */

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    load = require('gulp-livereload'),
    cache = require('gulp-cache'),
    notify = require('gulp-notify'),
    del = require('del'),
    connect = require('gulp-connect');

// 编译 less
gulp.task('style',function() {
    return gulp.src('./src/style/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'))
        .pipe(notify({message: 'style complete'}))
        .pipe(connect.reload());
});

// js
gulp.task('script',function() {
    return gulp.src('./src/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/script'))
        .pipe(notify({message: 'script complete'}))
        .pipe(connect.reload());
});

//connect
gulp.task('connect',function() {
    connect.server({
        root: './',
        livereload: true
    });
})

// 监听
gulp.task('watch',function() {
    //监听 js 文件
    gulp.watch('./src/script/*.js',['script']);

    //监听 less 文件
    gulp.watch('./src/style/*.less',['style']);
})

//设置默认任务
gulp.task('default',['style','connect']);
