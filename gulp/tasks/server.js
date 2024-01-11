export const server = (done) => {
    app.plugins.browsersync.init({
       server: {
           baseDir: `${app.path.build.root}`
       },
        notify: true,
        port: 3000,
    });
}