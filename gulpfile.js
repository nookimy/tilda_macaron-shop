// Основной модуль
import gulp from "gulp";

// Импорт путей
import {basePath, blocks, path} from "./gulp/config/path.js";

// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
    path: path,
    basePath: basePath,
    blocks: blocks,
    gulp: gulp,
    plugins: plugins,
}

// Импорт задач
import  { reset } from "./gulp/tasks/reset.js";
import  { html } from "./gulp/tasks/html.js";
import  { server } from "./gulp/tasks/server.js";
import  { scss } from "./gulp/tasks/scss.js";
import  { js } from "./gulp/tasks/js.js";
import  { img } from "./gulp/tasks/images.js";
import  { svg } from "./gulp/tasks/svg.js";
import {otfToTtf, ttfToWoff, ttfToWoff2} from "./gulp/tasks/fonts.js";

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
}



// основные задачи
const test = gulp.series(svg);
const fonts = gulp.series( otfToTtf, ttfToWoff, ttfToWoff2);
const images = gulp.series(img, svg);
const mainTasks = gulp.parallel(html, scss, js);

// Построение сценариев выполнения задач
const dev = gulp.series(mainTasks, gulp.parallel(watcher, server));


//Экспорт сценариев
export { test }
export { dev }
export { fonts }
export { images }


//Выполнение сценария по умолчанию
gulp.task('default', dev);