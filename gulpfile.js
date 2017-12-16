/* 	GULP FILE
*
*	This is the gulp file that facilitates the developement enviornment.
*/

//define dependenceis
var gulp 	= require('gulp');

gulp.task('copy-html', function() {
	//copy the index file
	gulp.src('public/index.html')
		.pipe(gulp.dest('dist'));
});
