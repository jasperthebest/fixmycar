module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dev: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },
    concat: {
      options: {
        stripBanners: true,
        options: {
          block: true,
          line: true
        }
      },
      js: {
        src: ['build/js/*.js', 'build/js/app/main.js'],
        dest: 'js/main.js'
      }
    },
    uglify: {
      options: {
        preserveComments: false
      },
      build: {
        src: 'js/main.js',
        dest: 'js/main.min.js'
      }
    },
    connect: {
      server: {
        options: {
          //hostname: '172.20.10.2',
          hostname: '192.168.0.101',
          port: 8000,
          base: '.',
          livereload: true
        }
      }
    },
    watch: {
      dev: {
        files: ['sass/*.scss','sass/css/*.css'],
        tasks: ['compass'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['*.shtml'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['build/**/*.js'],
        tasks: ['concat','uglify'],
        options: {
          livereload: true,
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['compass','concat','uglify','connect','watch']);
};