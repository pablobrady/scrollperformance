module.exports = function(grunt) {

  // Project Configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'public/js/*.js']
    },

    sass: {
      dist: {
        files: {
          'public/css/main.css' : 'source/scss/main.scss'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },

    // configure nodemon
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },


    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    },

    // dev: {                                       // Another target
    //   files: {
    //     'dist/index.html': 'src/index.html',
    //     'dist/contact.html': 'src/contact.html'
    //   }
    // }

  });

/*
ALT SERVER:  "http-server public/"
*/

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('start',['nodemon']);
  grunt.registerTask('serve',['nodemon']);

  grunt.registerTask('default',['jshint', 'sass']);
};
