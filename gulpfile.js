//Подключаем галп
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const svgstore = require('gulp-svgstore');

gulp.task('html', () => {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('./build'));
});
gulp.task('js', () => {
  return gulp.src('source/js/*.js')
    .pipe(gulp.dest('./build/js'));
});

gulp.task("css", function () {
  return (
    gulp.src("source/less/style.less")
      // обработчик ошибок
      .pipe(plumber())
      .pipe(less())
      .pipe(gulp.dest("build/css"))
  );
});


gulp.task('imagemin', () => {
  return gulp.src('source/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('build/img'))
});

gulp.task("sprite", function () {
  return gulp.src("source/img/*.svg")
    .pipe(imagemin([imagemin.svgo()]))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*",
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});


gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });

  gulp.watch('./source/*.html', gulp.series('html'));  
  gulp.watch("./source/less/**/*.less", gulp.series("css"));  
  gulp.watch('./source/js/*.js', gulp.series('js'));  
  gulp.watch('./source/img/*', gulp.series('imagemin'));
  gulp.watch('./source/img/*.svg', gulp.series('sprite'));
  gulp.watch("./source/less/**/*.less").on("change", browserSync.reload);
  gulp.watch("./source/*.html").on("change", browserSync.reload);
  gulp.watch("./source/js/*.js").on("change", browserSync.reload);
});

//Таск по умолчанию, Запускает del, styles, scripts и watch

gulp.task('start', gulp.series("imagemin", "html", "css", "js", "sprite", "watch" ));