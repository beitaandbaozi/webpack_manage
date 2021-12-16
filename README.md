## 01.webpack基本使用
a.默认src/index.js为入口文件
b.需要将需求引入到入口文件中才能参与打包操作
c.执行打包操作 （npm run build）
d.出口文件默认为 dist/main.js

## 02.webpack配置_修改入口文件和出口文件
a.创建 webpack.config.js （webpack装备栏）
b.通过 entry 设置入口文件路径
c.通过 output 对象设置出口路径和文件名

## 03、04.webpack配置如何作用在前端页面
a.配置 html-webpack-plugin 插件
<!-- 
plugins: [new HtmlWebpackPlugin({ // plugins插件配置
        template: './public/index.html' // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
    })],
 -->
## 05.webpack配置CSS文件
a.配置 css-loader 和 style-loader
01. css-loader会将webpack解析css文件-把css代码一起打包进js中
02. style-loader会把css代码插入到head下style标签内
b.css代码打包到js文件中

## 06.webpack配置less文件
a.配置 less-loader 和 less 
01. less-loader识别less文件
02. less 将less编译为css

## 07.webpack处理图片
a.webpack5，在rules里，针对图片文件设置type:asset
b.小于8KB转base64字符串进js里, 大于8KB输出文件

## 08.webpack处理字体图标
<!--
{
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',// 所有的字体图标文件, 都输出到dist下            generator: { // 生成文件名字 - 定义规则
                filename: 'font/[name].[hash:6][ext]'// [ext]会替换成.eot/.woff
            }
    },

 -->
