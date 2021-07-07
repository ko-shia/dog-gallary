// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
var sass = require('gulp-sass')(require('sass'));
sass.compiler = require("dart-sass"); // sassのコンパイルにdart-sassを使用する

// style.scssをタスクを作成する
gulp.task("default", function() {
	// style.scssファイルを取得
	return (
		gulp
		.src("src/sass/style.scss")
		// Sassのコンパイルを実行
		.pipe(
			sass({
				outputStyle: "expanded"
			})
		)
		// cssフォルダー以下に保存
		.pipe(gulp.dest("src/css"))
	);
});