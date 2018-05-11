let gulp = require("gulp");
let minifycss = require('gulp-clean-css');
let zip = require('gulp-zip');
let del = require("del");

/************************
 *                  	*
 *	mininfy and moving	*
 *                  	*
************************/
gulp.task('css', () => {
	return gulp.src("*.css")
		.pipe(minifycss())
		.pipe(gulp.dest("build/src"))
})
gulp.task("manifest", () => {
	return gulp.src("manifest.json")
		.pipe(gulp.dest("build/src"))
})

/************************
 *                  	*
 *      zipping     	*
 *                  	*
************************/
gulp.task("zip", () => {
	return gulp.src("build/src/*")
		.pipe(zip("bilkatogo.zip"))
		.pipe(gulp.dest("build"))
})

/************************
 *						*
 *      Cleaning		*
 *                 	 	*
************************/

gulp.task("clean", () => {
	return del([
		"build/**/*"
	])
});

/************************
 *                  	*
 *      Build task  	*
 *                  	*
************************/

gulp.task("build", gulp.parallel("css", "manifest"), (done) => {
	done();
})

gulp.task("default", gulp.series("clean", "build", "zip", (done) => {
	done();
}));

