#!/usr/bin/env node --harmony
'use strict';
// 定义脚手架的文件路径
process.env.NODE_PATH = __dirname + '/../node_modules/';

const program = require('commander');//能够更好地组织和处理命令行的输入。
// 定义当前版本
program
    .version(require('../package').version );
// 定义使用方法
program
    .usage('<command>');

program
    .command('add')
    .description('Add a new template')
    .alias('a')
    .action(() => {
    require('../cmd/add')()
});

program
    .command('list')
    .description('List all the templates')
    .alias('l')
    .action(() => {
    require('../cmd/list')()
});

program
    .command('init')
    .description('Create a new project')
    .alias('i')
    .action(() => {
    require('../cmd/init')()
});

program.parse(process.argv);

if(!program.args.length){
    program.help()
}
