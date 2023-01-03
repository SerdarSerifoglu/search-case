const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const rename = require("gulp-rename");

gulp.task("styles", function () {
  return gulp
    .src("src/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      rename({
        basename: "style",
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("public/"));
});

gulp.task("default", gulp.series("styles"));
