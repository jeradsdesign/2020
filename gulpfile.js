const { dest, parallel, series, src, watch } = require('gulp');
const browserSync   = require('browser-sync').create();
const $             = require('gulp-load-plugins')();
const autoprefixer  = require('autoprefixer');
const postcss       = require('gulp-postcss');
const sass          = require('gulp-sass');
const oldgulp       = require('gulp');
const terser        = require('gulp-terser');
const sassPaths = [
  'scss'
];

function scripts(){
  return src('js/*.js')
    .pipe(src('js/*.js'))
    .pipe(terser())
    .pipe(dest('min-js'))
    // reloads the current webpage when changes are made
    .pipe(browserSync.stream());
}

function css(){
    return oldgulp.src('scss/*.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(oldgulp.dest('css'))
    // reloads the current webpage when changes are made
    .pipe(browserSync.stream());
}

// This is where all the magic happens :) If a scss, js, or html file is changed, the browser will reload
function serve() {
  browserSync.init({
    server: "./"
  });
  
  watch('scss/*.scss', css);
  watch('js/*.js', scripts);
  watch("*.html").on('change', browserSync.reload);

}
// This default function runs when 'foundation watch' is entered in terminal
// The ignoreInitial: false part tells it to run scripts, css, and serve when 'foundation watch' is first entered and not to wait until a change is made to a file
exports.default = function (){
  watch('*', { ignoreInitial: false }, series(scripts, css, serve));
};