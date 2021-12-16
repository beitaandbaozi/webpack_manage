## 01.webpack基本使用
a.默认src/index.js为入口文件
b.需要将需求引入到入口文件中才能参与打包操作
c.执行打包操作 （npm run build）
d.出口文件默认为 dist/main.js

## 02.webpack配置_修改入口文件和出口文件
a.创建 webpack.config.js （webpack装备栏）
b.通过 entry 设置入口文件路径
c.通过 output 对象设置出口路径和文件名