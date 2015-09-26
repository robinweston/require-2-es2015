module.exports = function(grunt) {

	grunt.initConfig({});

	grunt.loadNpmTasks('grunt-traceur');
	grunt.config('traceur', {
    options: {
      modules: 'amd'
    },
    custom: {
      files: [{
        expand: true,
        cwd: 'src/es2015',
        src: ['*.js'],
        dest: 'src/new-AMD'
      }]
    }
	 });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.config('requirejs', {
      compile: {
        options: {
          baseUrl: "src/legacy-AMD",
          paths: {
            lodash: "../../bower_components/lodash/dist/lodash",
            angular: '../../bower_components/angular/angular',
            requireLib: "../../bower_components/requirejs/require"
          },
          shim: {
            angular: {
              exports: "angular"
            }
          },
          include: ['requireLib'],
          name: "main",
          out: 'dist/legacy-AMD.js',
          optimize: 'none'
        }
      }
   });

  	grunt.registerTask('default', ['requirejs']);

};