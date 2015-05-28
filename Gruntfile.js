module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'example/style.min.css': 'example/style.scss'
        }
      }
    },

    watch: {
      css: {
        files: [
          '*.scss',
          'example/*.scss'
        ],
        tasks: ['sass:dist']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','watch']);
};