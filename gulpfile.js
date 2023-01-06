let path = {
  build: {
    css: "css/",
  },
  src: {
    css: "scss/style.scss",
  },
  watch: {
    css: "scss/**/*.scss",
  }
}

let {src, dest} = require('gulp'),
  gulp = require('gulp'),
  scss = require('gulp-sass')(require('sass'))

function css(params) {
  return src(path.src.css)
    .pipe(scss().on('error', scss.logError))
    .pipe(dest(path.build.css))
}


function watchFiles(params) {
  gulp.watch([path.watch.css], css);
}


let build = gulp.series(css);
let watch = gulp.parallel(build, watchFiles);

exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = watch;