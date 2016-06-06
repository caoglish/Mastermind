var config = {
    src: "./src/"

};

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            app: {
                options: {
                      transform: [ ["babelify", { "presets": ["es2015"] }] ]
                   // transform: ["babelify"]
                },
                files: {
                    'dist/app.js': [config.src + "js/main.js"]
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: true,
                    optimization: 2,
                    path:['./src/less','./node_modules/bootstrap/dist/less']
                },
                files: {
                    "dist/style.css": config.src + "less/main.less"
                }
            }
        },
        copy: {
            html: {
                expand: true,
                cwd: config.src,
                src: '*.html',
                dest: 'dist/'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    livereload: true,
                    hostname: '127.0.0.1',
                    open: true,
                    base: './'
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            js: {
                files: [config.src + "js/**/*.js"],
                tasks: ['browserify'],
            },
            css: {
                files: [config.src + "less/**/*.less"],
                tasks: ['less']
            },
            html: {
                files: [config.src + "*.html"],
                tasks: ['copy']
            }
        }
    });


    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.registerTask('dev', ["connect", "watch"]);
    grunt.registerTask('default', ['browserify', 'less', 'copy:html']);
};