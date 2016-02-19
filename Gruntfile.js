// Gruntfile.js

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },

            build: ['Gruntfile.js', 'public/js/includes/**/*.js']
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['public/js/libs/**/jquery-2.1.1.js', 'public/js/libs/**/*.js', 'public/js/includes/**/*.js'],
                dest: 'public/js/main.js'
            }
        },
        uglify: {
            options: {
                banner: ''
            },
            build: {
                src: 'public/js/main.js',
                dest: 'public/js/main.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //grunt.registerTask('default', ['concat','uglify']);
    grunt.registerTask('default', ['concat']);
};