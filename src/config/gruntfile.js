"use strict";

module.exports = function( grunt ) {

	// Load all tasks
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// Watch
		watch: {
			css: {
				files: [ '../scss/**/*' ],
				tasks: [ 'compass' ]
			},
			js: {
				files: '../js/**/*',
				tasks: [ 'uglify' ]
			}
		},

		// Compile scss
		compass: {
			dist: {
				options: {
					force: true,
					config: 'config.rb',
					outputStyle: 'compressed'
				}
			}
		},

		// Concat and minify javascripts
		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'../../js/application.js': [
						'../js/lib/jquery-1.10.2.js',
						'../js/lib/jsi.js',
						'../js/core/Namespace.js',
						'../js/core/Main.js',
						'../js/component/Slider.js',
						'../js/component/SliderHome.js'
					]
				}
			}
		}

	});

	// registrando tarefa default
	grunt.registerTask( 'default', [ 'watch' ] );

};
