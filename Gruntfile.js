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

  	grunt.registerTask('default', ['traceur']);

};