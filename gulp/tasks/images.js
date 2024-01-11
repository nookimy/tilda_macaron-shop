import tinypng from "gulp-tinypng-extended";
import newer from "gulp-newer";

export const img = (done) => {
    console.log(app.blocks);
    app.blocks.forEach (function (block) {
        // Возьми все изображения из папки
        return app.gulp.src(app.path.src.images)

            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "IMAGES-OPT",
                    message: "Error: <%= error.message %>"
                }))
            )

            .pipe(tinypng({
                key: 'jO4jokCHdaoyAiRSqQifbkbQzjh9LaQD',
                sigFile: app.path.src.imgOpt + '/.tinypng-sigs',
                log: true,
            }))

            .pipe(app.gulp.dest(app.path.build.images + '/'))

    });
    done();
}