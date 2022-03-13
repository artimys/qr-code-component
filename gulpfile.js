const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();

// File paths
const files = {
	scssPath: 'src/scss/**/*.scss',
  distPath: 'dist'
};




function style() {
  // 1. where is my scss file
  return gulp.src(files.scssPath)
  // 2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))
  // 3. where do I save the compiled CSS?
    .pipe(gulp.dest(files.distPath))
  // 4. stream changes to all browser
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(files.scssPath, style);
  gulp.watch('./*.html').on('change', browserSync.reload);
}


exports.watch = watch;