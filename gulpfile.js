const gulp = require('gulp')
const browserSync = require('browser-sync').create()

gulp.task('server', () => {
  browserSync.init({
    server:{
      port: 9000,
      baseDir: "builds"
    }
  })

  gulp.watch('bulds/**/*').on('change', browserSync.reload)
})