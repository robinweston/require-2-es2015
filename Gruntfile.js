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

	grunt.loadNpmTasks('grunt-babel');
	grunt.config('babel', {
    options: {
      modules: 'amd'
    },
    dist: {
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
    "es2015-to-generated-AMD": {
      files: [{
          expand:true, 
          src: ['**/*', '!**/*.es2015.js'], 
          cwd: 'src/es2015/', 
          dest: 'src/generated-AMD/'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.config('ngAnnotate', {
    target: {
      files: [{
          expand:true, 
          src: ['**/*'], 
          cwd: 'src/generated-AMD/', 
          dest: 'src/generated-AMD/'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.config('requirejs', {
      legacy: createRequireConfig('src/legacy-AMD', 'dist/legacy-AMD.js'),
      generated: createRequireConfig('src/generated-AMD', 'dist/generated-AMD.js')
   });

  	grunt.registerTask('legacy', ['requirejs:legacy']);
    grunt.registerTask('es2015', ['copy:es2015-to-generated-AMD', 'babel', 'ngAnnotate', 'requirejs:generated']);
};