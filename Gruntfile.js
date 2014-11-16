module.exports = function(grunt) {

    // Configuration
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat: {
            option: {
                separator: '\n'
            },
            dist: {
                src: ['js/app/**/*.js'],
                dest: 'dist/application.js'
            }
        },
        emberTemplates: {
            compile: {
                options: {
                     // Path to the directory that stores your *.hbs files
                    templateBasePath: 'templates/'
                },
                files: {
                     // OutPath               // Template *.hbs file path
                    'dist/templates.js': 'templates/**/*.hbs'
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ember-templates');

    // Tasks
    grunt.registerTask('default', ['concat', 'emberTemplates']);

};