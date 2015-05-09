var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');
    uglify = require('gulp-uglify');// se encarga de dejar mi archivo en una sola linea de codigo.
    concat = require('gulp-concat'),// se encarga de concatenar.

gulp.task('concat-css', function(){
    return gulp.src(['source/css/normalize.css', 'source/css/skeleton.css', 'source/css/styles.css'])
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('source/css/'));
});

gulp.task('concat-files-js', function(){
    gulp.src('source/js/*.js')
        .pipe(concat('lab33.min.js'))//concatena
        .pipe(uglify())//minifica
        .pipe(gulp.dest('build/'))
});



gulp.task('minify-css', ['concat-css', 'concat-files-js'], function(){
  return gulp.src('source/css/bundle.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'));
});


/*
* Dependencias
*/
var gulp = require('gulp'),
    concat = require('gulp-concat'),// se encarga de concatenar.
    uglify = require('gulp-uglify');// se encarga de dejar mi archivo en una sola linea de codigo.

/*
* Configuración de la tarea 'demo'
*/
gulp.task('concat-files', function(){
    gulp.src('source/*.js')
        .pipe(concat('lab31.min.js'))//concatena
        .pipe(uglify())//minifica
        .pipe(gulp.dest('build/'))
});