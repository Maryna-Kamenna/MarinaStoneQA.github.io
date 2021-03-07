const {src, dest, parallel, series, watch} = require('gulp');
const brwSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const mincss = require('mincss');// Минификация CSS
const scripts = require('gulp-scripts');// Минификация JS
const autoprefixer = require('gulp-autoprefixer');


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
        .pipe(brwSync.stream())
}

function watching(){
watch('app/styles/**/*.scss',styles);
watch('app/index.html').on('change',brwSync.reload)

}
function minimization(){
    return src('app/image/*')
    .pipe(imagemin())
    .pipe(dest('app/imgo'))
    .pipe(newer('app/imgo/*', {force:true}))
}


function cleanimg(){
return del ('app/imgo/*')
}


function build(){
    return src([
        'app/imgo/*',
        'app/styles/css/*',
        'app/**/*.html',
        'app/**/*.js'
    ], { base:'app' })
    .pipe(dest('dist'))
}

function autoprefixer() {
   src('src/app.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest('dist'))
    }

function mincss(){
    return src('styles/*.css')
    .pipe(cleanCss({compatibility:'*'}))
    .pipe(dest('dist'));
}

    function scripts(){
    return src([
        'node_modules/jquery/dist/jquery.min.js', 
        'app/script.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('src/js'));
    }


exports.brwSync = browserSync;
exports.styles = styles;
exports.watch = watching;
exports.minimg = minimization;
exports.cleanimg = cleanimg;
exports.build = build;
exports.autoprefixer = autoprefixer;
exports.mincss = mincss;
exports.scripts = scripts;

exports.reopimg = series(cleanimg, minimization);

exports.default = parallel(styles, browserSync, watching);

