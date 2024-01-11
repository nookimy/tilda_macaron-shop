import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
    // Ищем файлы шрифтов .otf
    return app.gulp.src(app.path.src.fonts + '*.otf', {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            }))
        )
        // Конвертируем в .ttf
        .pipe(fonter({
            formats: ['ttf']
        }))
        // Выгружаем в исходную папку
        .pipe(app.gulp.dest(app.path.src.fonts))

}

export const ttfToWoff = () => {
    // Ищем файлы шрифтов .ttf
    return app.gulp.src(app.path.src.fonts + '*.ttf', {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            }))
        )
        // Конвертируем в .woff
        .pipe(fonter({
            formats: ['woff']
        }))
        
        // Выгружаем в папку c результатом
        .pipe(app.gulp.dest(app.path.build.fonts))

        // Ищем файлы шрифтов .ttf
        .pipe(app.gulp.src(app.path.src.fonts + '*.ttf'))
        // Конвертируем в .woff2
        .pipe(ttf2woff2())
        // Выгружаем в папку c результатом
        .pipe(app.gulp.dest(app.path.build.fonts))

}

export const ttfToWoff2 = () => {
    // Ищем файлы шрифтов .ttf
    return app.gulp.src(app.path.src.fonts + '*.ttf')
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            }))
        )
        // Конвертируем в .woff2
        .pipe(ttf2woff2())
        // Выгружаем в папку c результатом
        .pipe(app.gulp.dest(app.path.build.fonts))
}