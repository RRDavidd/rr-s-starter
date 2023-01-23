const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function compileSass() {
  // place code for your default task here
  return src('styles/*.scss')
  .pipe(sass())
  .pipe(dest('styles/css'))
}

function watcher(){
  watch(['styles/*.scss'], compileSass)
}


exports.default = series(compileSass, watcher)