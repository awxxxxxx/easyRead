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
    del = require('del');

// 编译 less
gulp.task('style',function() {
    return gulp.src('./src/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'))
        .pipe(notify({message: 'style complete'}));
});

// js
gulp.task('script',function() {
    return gulp.src('./src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/script'))
        .pipe(notify({message: 'script complete'}));
});


// 监听
gulp.task('watch',function() {
    //监听 js 文件
    gulp.watch('./src/script/*.js',['script']);

    //监听 less 文件
    gulp.watch('./src/script/*.js',['style']);

    var server = load();
    gulp.watch(['./public/**']).on('change',function(file) {
        server,changed(file.path);
    })
})

//设置默认任务
gulp.task('default',['style','watch']);
