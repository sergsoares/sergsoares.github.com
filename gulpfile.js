const gulp = require('gulp')
const browserSync = require('browser-sync')

// Start Static Server with browserSync
gulp.task('server', () => {
    browserSync({
        server: {
            baseDir: "./dist/"
        }
    });
});

// Task for Reload BrowserSync
gulp.task('reload', () => {
    browserSync.reload();
});

gulp.task('default', ['server']);


