const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
}

function css (  ) {
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        .pipe( dest('./build/css') )
}

function javascript (  ) {
    return src(paths.js)
        .pipe( concat('bundle.js') )
        .pipe( dest('./build/js') )
}

function watchArchivos ( ) {
    watch( paths.scss, css);
    watch( paths.js, javascript);
}

exports.css = css;
exports.javascript = javascript;
exports.watchArchivos = watchArchivos;
exports.default = series(javascript, css, watchArchivos);