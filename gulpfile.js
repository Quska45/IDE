const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

var concatList = [
    //콘솔
    "./IDB.Console/IDB.Console.js",

    //생성자
    "./IDB/IDB.js",

    //렌더러
    "./IDB.Renderer/IDB.Renderer.js",

    //씬
    "./IDB.Scene/IDB.Scene.js",

    //객체
    "./IDB.Object/IDB.Object.js",
    "./IDB.Object/IDB.Shape.js"

];

gulp.task('default', async function() {
    //노드 소스
    await gulp.src(concatList)
        .pipe(concat("index.js"))
        // .pipe(babel())
        .pipe(gulp.dest("./es5"));
});