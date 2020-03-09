const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

var concatList = [
    //콘솔
    "./IDE.Console/IDE.Console.js",

    //생성자
    "./IDE/IDE.js",

    //렌더러
    "./IDE.Renderer/IDE.Renderer.js",

    //씬
    "./IDE.Scene/IDE.Scene.js",

    //객체
    "./IDE.Object/IDE.Object.js",
    "./IDE.Object/IDE.Shape.js"

];

gulp.task('default', async function() {
    //노드 소스
    await gulp.src(concatList)
        .pipe(concat("index.js"))
        // .pipe(babel())
        .pipe(gulp.dest("./es5"));
});