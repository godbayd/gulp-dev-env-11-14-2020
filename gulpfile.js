const gulp = require('gulp')
const {parallel, watch, src, dest, series} = gulp
const sass = require('gulp-sass')
const browserSync = require('browser-sync')
const path = require('path')
const gulpPug = require('gulp-pug')


// High level configuration
// can be modified in 
// ./gulp-config.js
const config = require('./gulp-config.js')




sass.compiler = require('node-sass')





// Compiles pug files into html  
// file and copies then copies
// them over to outputDir
const handlePugFiles = cb => {
    src(`${config.srcDir}/**/*.pug`)
        .pipe(gulpPug())
        .pipe(dest(config.outputDir))
    cb()
}





// Compiles scss files into css  
// file and copies then copies
// them over to outputDir
const handleScssFiles = cb => {
    src(`${config.srcDir}/**/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(config.outputDir))
    cb()
}





// Copies javascript files into
// outputDir
const handleJsFiles = cb => {
    src(`${config.srcDir}/**/*.js`)
        .pipe(dest(config.outputDir))
    cb()
}





// Watches all handledFiles and 
// starts live reload server
const server = () => {
    browserSync.init({
        server: {
            baseDir: config.outputDir
        },
        port: config.server.port,
        host: config.server.host,
        open: false
    })

    watch(['gulpfile.js']).on('change', browserSync.reload) // might be unneccessary

    watch([`${config.srcDir}/**/*.scss`], handleScssFiles)
        .on('change', browserSync.reload)

    watch([`${config.srcDir}/**/*.js`], handleJsFiles)
        .on('change', browserSync.reload)

    watch([`${config.srcDir}/**/*.pug`], handlePugFiles)
        .on('change', browserSync.reload)
}

exports.default = series(
    parallel(handlePugFiles, handleScssFiles, handleJsFiles),
    server
)
