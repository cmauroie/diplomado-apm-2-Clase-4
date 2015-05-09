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