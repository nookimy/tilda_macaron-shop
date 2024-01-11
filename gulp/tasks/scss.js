import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов

const sass = gulpSass(dartSass);


export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true }) // либо app.isDev вместо true при использовании плагина if

        // Уведомления об ошибках
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))

        // Преобразование в css
        .pipe(sass({
           outputStyle: 'expanded'
        }))

        // Автопрефиксер
        .pipe(autoprefixer(
            {
                grid: true,
                overrideBrowserlist: ["last 3 versions"],
                cascade: true
            }
        ))
        // Положи в папку разработки
        .pipe(app.gulp.dest(app.path.build.css))

        .pipe(app.plugins.browsersync.stream());
}