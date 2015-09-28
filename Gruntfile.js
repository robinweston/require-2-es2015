module.exports = function(grunt) {

  var createRequireConfig = function(srcDir, outJsFile) {
    return  {
        options: {
          baseUrl: srcDir,
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
          out: outJsFile,
          optimize: 'none'
        }
      }

  };

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
        src: ['*.es2015.js'],
        dest: 'src/generated-AMD',
        ext: '.js'
      }]
    }
	 });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.config('copy', {
    "legacy-AMD-files": {

    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.config('requirejs', {
      legacy: createRequireConfig('src/legacy-AMD', 'dist/legacy-AMD.js'),
      generated: createRequireConfig('src/generated-AMD', 'dist/generated-AMD.js')
   });

  	grunt.registerTask('legacy', ['requirejs:legacy']);
    grunt.registerTask('es2015', ['traceur', 'requirejs:generated']);
};