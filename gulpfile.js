var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');

gulp.task('clean', function() {
    return del(['dist/']);
});

gulp.task('build', ['clean'], function() {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('dist/'));

    gulp.src('./src/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('./dist/css'));

    return gulp.src(['src/app.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(['src/**/*.*'], ['build']);
});

gulp.task('default', ['watch']);
