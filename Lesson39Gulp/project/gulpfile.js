
const {src, dest, parallel, series, watch} = require('gulp');

const brwSync = require('browser-sync').create();
const sass = require('galp-sass');
const concat = require('gulp-concat')


function browserSync() {
    brwSync.init({
        server:{ baseDir: 'app/'},
        notify: false,
        onlne: true
    });
}


function styles(){
    return src (['node_modules/jquery.min.js',
        'app/styles/main.scss/'])

        .pipe(sass())
        .pipe(concat('main.min.css'))
        .pipie(dest('app/styless/css'))
}


exports.brwSync = browserSync;
exports.styles = styles;
