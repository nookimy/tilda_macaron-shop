import posthtml from "gulp-posthtml";
import include from "posthtml-include";
import htmlBeautify from "gulp-html-beautify";

export const html = () => {
    return app.gulp.src(app.path.src.html)

        // Уведомления об ошибках
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            }))
        )

        // Сборка html-файлов
        .pipe(posthtml([
            include()
        ]))

        .pipe(htmlBeautify())

        .pipe(app.gulp.dest(app.path.build.root))

        .pipe(app.plugins.browsersync.stream());
}