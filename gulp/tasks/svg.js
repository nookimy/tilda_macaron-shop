import svgo from "gulp-svgo";

export const svg = () => {
    return app.gulp.src(app.path.src.svg, {})

        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG OPT",
                message: "Error: <%= error.message %>"
            }))
        )


        .pipe(svgo({
            plugins: [
                {removeXMLNS: false},
                {removeUselessStrokeAndFill: false},
                {convertColors: true},
                {removeAttrs: '(style)'},
                {removeViewBox: false},
                {sortAttrs: true}
            ]
        }))
        
        .pipe(app.gulp.dest(app.path.build.images))
};