'use strict';
const co = require('co');
const prompt = require('co-prompt');
const config = require('../templates');
const chalk = require('chalk');
const fs = require('fs');
const path = require("path");

module.exports = () => {
    co(function *() {
        // 处理用户输入
        let tplName = yield prompt('Template name: ');
        let projectName = yield prompt('Project name: ');
        let _path=yield prompt('Project _path: ');   
        let dirArry=yield config.tpl[tplName]['dir'].split(",");
        if(_path==""){
            _path='C:/Users/Administrator/Desktop/'
        }
        if (!config.tpl[tplName]) {
            console.log(chalk.red('\n × Template does not exit!'));
            process.exit()
        }
        console.log(chalk.white('\n Start generating...'));

        // 创建所有目录
        let dirpath=_path+projectName;
        let mkdirs=(dirpath,callback)=> {
            fs.exists(dirpath, function (exists) {
                if (exists) {
                    dirArry.forEach(v => {
                        console.log(dirpath + "/" + v);
                        fs.mkdir(dirpath + "/" + v, err => {
                            if (err) {
                                console.log(err);
                            }
                        });
                    });
                    console.log(chalk.green('\n √ Generation completed!'));
                    process.exit();
                }
                else {
                    //尝试创建父目录，然后再创建当前目录
                    fs.mkdir(dirpath, err => {
                        if(err){
                            console.log(err);
                            process.exit()
                        }
                        mkdirs(dirpath,callback);
                    })
                }
            });
        };
        mkdirs(dirpath,err=>{
            if(err){
                console.log(err);
                process.exit()
            }
        });
        
    })
};