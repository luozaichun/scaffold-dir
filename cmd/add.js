'use strict';
const co = require('co');
const prompt = require('co-prompt');
const config = require('../templates.json');
const chalk = require('chalk');
const fs = require('fs');
module.exports = () => {
    co(function *() {
        /*分步接收用户输入的参数*/
        let tplName =yield prompt('Template name: ');
        let dirname=yield prompt('Direct name: ');
        /*避免重复添加*/
        if (!config.tpl[tplName]) {
            config.tpl[tplName] = {};
            config.tpl[tplName]['dir'] = dirname;
        } else {
            console.log(chalk.red('Template has already existed!'));
            process.exit()
        }
        /*把模板信息写入templates.json*/
        fs.writeFile(__dirname + '/../templates.json', JSON.stringify(config), 'utf-8', (err) => {
            if (err) console.log(err);
            console.log(chalk.green('New template added!\n'));
            console.log(chalk.grey('The last template list is: \n'));
            console.log(config);
            console.log('\n');
            process.exit()
        })
    })
};