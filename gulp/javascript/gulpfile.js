const {series} = require ('gulp')
const gulp = require('gulp')
const concat = require ('gulp-concat')
const uglify = require ('gulp-uglify')
const babel = require ('gulp-babel')

function padrao(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, 
            presets: ["env"]
        }))

        .pipe(uglify())
        .on('error', err => console.log(err)) //tratando erro caso ocorra. 
        .pipe(concat('codigo.min.js'))
        .pipe (gulp.dest('build'))

    return cb() //também pode usar o return lá em cima do work flow. 
}

exports.default = series (padrao)