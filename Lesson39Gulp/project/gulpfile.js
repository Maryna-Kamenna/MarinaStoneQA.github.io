const {src, dest, parallel, series, watch} = require('gulp');
const brwSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');


function browserSync() {
    brwSync.init({
        server:{ baseDir: 'app/'},
        notify: false,
        onlne: true
    });
}

function styles() {
    return src ([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'app/styles/main.scss'
    ])
        .pipe(sass())
        .pipe(concat('main.min.css'))
        .pipe(dest('app/styles/css'))
}

exports.brwSync = browserSync;
exports.styles = styles;