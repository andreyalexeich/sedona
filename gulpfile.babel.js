"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.pug",
                "./src/views/pages/*.pug"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.pug",
                "./src/views/**/*.pug"
            ]
        },
        styles: {
            src: "./src/styles/main.scss",
            dist: "./dist/styles/",
            watch: [
                "./src/blocks/**/*.scss",
                "./src/styles/**/*.scss"
            ]
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./dist/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}"
        },
        webp: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif}"
            ],
            dist: "./dist/img/",
            watch: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon.{jpg,jpeg,png,gif}"
            ]
        },
        sprites_logo: {
            src: "./src/img/header/svg/logo/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./src/img/header/svg/logo/*.svg"
        },
        sprites_form: {
            src: "./src/img/form/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./src/img/form/*.svg"
        },
        sprites: {
            src: [
                "./src/img/features/*.svg",
                "./src/img/media/svg/*.svg",
                "./src/img/footer/*.svg"
            ],
            dist: "./dist/img/sprites/",
            watch: [
                "./src/img/features/*.svg",
                "./src/img/media/svg/*.svg",
                "./src/img/footer/*.svg"
            ]
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}"
        },
        favicons: {
            src: "./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
            dist: "./dist/img/favicons/"
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean", "smart-grid",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites_logo", "sprites_form", "sprites", "fonts", "favicons"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "images", "webp", "sprites_logo", "sprites_form", "sprites", "fonts", "favicons", "gzip"]));

export default development;