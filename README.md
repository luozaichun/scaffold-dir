# scaffold-dir
基于es6自定义创建文件脚手架
# 安装
全局安装
```
npm install scaffold-dir -g
```
# 入口文件
打开命令行，输入`scaffold-dir` 获取帮助信息
```
Usage: scaffold-dir <command>

  Commands:
    add|a    Add a new template
    list|l   List all the templates
    init|i   Create a new project

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
#使用命令
### 添加模板 add|a
`$ scaffold-dir add`
```
Template name: webpack  /*创建模板名字*/

Direct name: dev/css/abc,dev/images/efg,dev/js,lib /*创建文件目录列表*/

New template added! /*创建成功*/

The last template list is: 

{ tpl: { webpack: { dir: 'dev/css/abc,dev/images/efg,dev/js,lib' } } }  /*最新的模板列表*/
```
### 根据模板构建项目 init|i
在需要创建文件的路径下 `$ scaffold-dir init`
```
Template name: webpack /*创建项目基于的模板名字*/

Project name: test /*创建项目的名字*/

Start Project... 

√ Project completed!  /*项目创建成功*/                                         
```
### 罗列模板 list|l
`$ scaffold-dir list`
```
{ webpack: { dir: 'dev/css/abc,dev/images/efg,dev/js,lib' } }  /*列出所有的模板*/                               
```
