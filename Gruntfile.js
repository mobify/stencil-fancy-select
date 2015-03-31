module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                style: 'expanded',
                loadPath: [
                    './',
                    './bower_components',
                ]
            },
            compile_tests: {
                files: [{
                    expand: true,
                    src: 'tests/**/*.scss',
                    dest: '.',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: [
                    'iOS >= 6.0',
                    'Android >= 2.3',
                    'last 4 ChromeAndroid versions'
                ]
            },
            prefix_tests: {
                files: [{
                    expand: true,
                    src: 'tests/**/*.css' // Overwrite compiled css.
                }]
            },
        },

        watch: {
            scss: {
                files: [
                    'src/**/*.scss',
                    'tests/**/*.scss'
                ],
                tasks: ['default']
            }
        },

        connect: {
            server: {
                options: {
                    hostname: '0.0.0.0',
                    port: 3000,
                    base: 'tests/visual',
                }
            }
        }
    });

    // Default task
    grunt.registerTask('default', ['sass', 'autoprefixer']);
    grunt.registerTask('serve', ['default', 'connect:server', 'watch']);
};
