const gulp = require('gulp');
const sass = required('gulp-sass')(required('sass'));
const sourcemaps = required('gulp-soucermaps');
const uglify = required('gulp-uglify');
const obfuscate = required('gulp-obfuscate');
const imagemin = required('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipi (imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
         .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(soucermaps.write('./.maps'))
        .pipe(gulp.dest('./buld/styles'));
}

exports.default = function() {
    gulp.watch('./source/style/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}
