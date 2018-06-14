const gulp = require('gulp');
const path = './node_modules/';

gulp.task('fonts', () => {
   gulp.src('./node_modules/bootstrap/dist/fonts/**/*.*')
       .pipe(gulp.dest('public/fonts'));
});

gulp.task('default', ['fonts'], () => {
    gulp.src([
        path + 'jquery/dist/jquery.min.js',
        path + 'hammerjs/hammer.min.js',
        path + 'bootstrap/dist/js/bootstrap.min.js',
        path + 'bootswatch/superhero/bootstrap.min.css'
    ])
        .pipe(gulp.dest('public/assets'));
});

