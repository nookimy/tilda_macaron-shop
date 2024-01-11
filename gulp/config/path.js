// Получаем имя папки проекта (build-2023)
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
import fs from "fs";

const buildFolder = `./dev`; // Также можно использовать rootFolder
const srcFolder = `./src`;

// Базовые пути отдельно, чтобы можно было использовать для других путей
export const basePath = {
    src: 'src',
    dev: 'dev',
    components: 'src/components',
    blocks: 'src/components/blocks',
}

export const path = {
    src: {
        html: basePath.src + '/*.html',
        scss: basePath.components + '/style.scss',
        js: basePath.src + '/js/*.js',
        images: basePath.src + '/img/**/*.{jpg,jpeg,png}',
        svg: basePath.src + '/img/**/*.svg',
        fonts: basePath.src + '/fonts/',   
    },

    build: {
        root: basePath.dev,
        css: basePath.dev + '/css/',
        js: basePath.dev + '/js/',
        images: basePath.dev + '/img/',
        fonts: basePath.dev + '/fonts/',
    },
    // Чтобы вотчер не тормозил прописываем каждую папку отдельно
    watch: {
        html:
            [basePath.src + '/*.html'
                // Сюда добавим пути к файлам блоков чуть ниже по коду
            ],
        scss:
            [basePath.components + '/*.scss'
                // Сюда добавим пути к файлам блоков чуть ниже по коду
            ],
        js: `${srcFolder}/js/**/*.js`,
        files: `${srcFolder}/files/**/*.*`,
    },

    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}

// Массив для списка папок блоков, заполнится сам чуть ниже по коду
export const blocks = [];


// Получаем список блоков и записываем их в массив blocks
if (basePath.blocks) {
    fs.readdirSync(basePath.blocks).forEach(function (directory) {
        blocks.push(directory);
    });
}

// Добавляем к path.src.componentsWatch пути к блокам
blocks.forEach (function (block) {
    path.watch.scss.push(basePath.components + '/blocks/' + block + '/*.scss');
});

// Добавляем к path.src.htmlWatch пути к блокам
blocks.forEach (function (block) {
    path.watch.html.push(basePath.components + '/blocks/' + block + '/*.html');
});