## 01.webpack基本使用
a.默认src/index.js为入口文件
b.需要将需求引入到入口文件中才能参与打包操作
c.执行打包操作 （npm run build）
d.出口文件默认为 dist/main.js

## 02.webpack配置_修改入口文件和出口文件
a.创建 webpack.config.js （webpack装备栏）
b.通过 entry 设置入口文件路径
c.通过 output 对象设置出口路径和文件名

## 03.webpack配置如何作用在前端页面
a.配置 html-webpack-plugin 插件
<!-- 
plugins: [new HtmlWebpackPlugin({ // plugins插件配置
        template: './public/index.html' // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
    })],
 -->