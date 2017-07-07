// ECMAScript
//
module.exports = function(grunt){
    grunt.initConfig({

        pkg:grunt.file.readJSON('package.json'),
        serve:{
            path:"d:/",
            options:{
                port:9000
            }
        },


        less: {
            maynlee: {
                options: {
                    paths: ['public/**/*.less'],
                    ieCompat:true,
                    compress:true
                },
                files: {
                    'public/css/may/maynleestyle.css': 'public/less/maynlee/import.less'

                }


            },
            maynlee_dev: {
                options: {
                    paths: ['public/**/*.less'],
                    dumpLineNumbers:"comments",
                    ieCompat:true
                },
                files: {
                    'public/css/may/maynleestyle.dev.css':'public/less/maynlee/import.less'

                }
            }
        },
            watch: {
                lesswatch: {
                    files: ['public/less/**/*.less'],
                    tasks: ['less'],
                    options: {
                        spawn: false,
                    },
                },
                includeswatch: {
                    files: ['public/less/**/*.less'],
                    tasks: ['includes'],
                    options: {
                        spawn: false,
                    },
                },

            },

                includes:{
                    dist:{
                        cwd:'./maynlee',   //현재 작업 폴더
                        src:['*.html'],
                        dest:'./maynlee_dist', //작업 완료 폴더
                        options:{
                        includePath:'./maynlee'
                        }
                    }
                },


        })

        // 나.플러그인 로드
        // grunt.LaodNpmTasks('플러그인명')
        grunt.loadNpmTasks('grunt-serve');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-includes');
        // 다. task 실행
        grunt.registerTask('default',['serve'])


    }
