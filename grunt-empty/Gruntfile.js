'use strict';

module.exports = function (grunt){

	require('load-grunt-tasks')(grunt);

	require('time-grunt')(grunt);

	var config = {
		'app':'app',
		"dist":'dist'
	}

	grunt.initConfig({
		config:config,

		// tasks
		copy: {
			// 只读模式 支持额外参数
			// dist_html:{ //target
			// 	src:'<%= config.app %>/index.html', //源文件
			// 	dest:'<%= config.dist %>/index.html' //目标文件
			// },
			// dist_js: {
			// 	src:'<%= config.app %>/js/index.js',
			// 	dest:'<%= config.dist %>/js/index.js'
			// }

			//file模式 支持额外参数
			// dist: {
			// 	files:[
			// 		{
			// 			src:'<%= config.app %>/index.html', //源文件
			// 			dest:'<%= config.dist %>/index.html' //目标文件
			// 		},
			// 		{
			// 			src:'<%= config.app %>/js/index.js',
			// 			dest:'<%= config.dist %>/js/index.js'
			// 		}
			// 	]
			// }

			// 模式三 键值对 不支持额外参数
			dist:{
				files:{  //target
					'<%= config.dist %>/index.html':'<%= config.app %>/index.html',
					'<%= config.dist %>/js/index.js':['<%= config.app %>/js/index.js'],
				}
			}

		},

		clean: {
			dist: {
				// src:'<%= config.dist %>/index.html'  //单例模式
				// src:['<%= config.dist %>/index.html','<%= config.dist %>/js/index.js'] //详细模式
				src:['<%= config.dist %>/**/*'],
				// 额外参数
				// filter: 'isFile'     //保留文件夹
				fileter: function(filepath){ //构造函数
					return (!grunt.file.isDir(filepath));
				}
			}
		}
	})

}