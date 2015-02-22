
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        jshint: {
        	files: ['gruntfile.js', 'app/**/*.js'],
        	options: {
        		globals: {
        			jQuery: true,
        			console: true,
        			module: true
        		}
        	}
        },
        concat: {
        	options: {
        		// define a string to put between each file in the concatenated output
        		separator: ';'
        	},
        	app: {
        		src: [ 'app/**/*.js', 'scripts/climatevisiontx.js' ],
		        dest: 'scripts/<%= pkg.name %>.app.js'
        	}
        },
        uglify: {
        	options: {
        		banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        	},
        	dist: {
        		files: {
					         'scripts/<%= pkg.name %>.app.min.js': ['<%= concat.app.dest %>']
        		}
        	}
        },
        cssmin: {
        	options: {
        		shorthandCompacting: false,
        		roundingPrecision: -1
        	},
        	target: {
        		files: {
        			'site.min.css': ['site.css']
        		}
        	}
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask("default", ["jshint", "concat", "uglify", "cssmin"]);
};
