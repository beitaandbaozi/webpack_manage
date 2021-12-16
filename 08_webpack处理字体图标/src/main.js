// 引入Jquery
import $ from 'jquery'
// 实现隔行变色
$("#myUL>li:odd").css('color', 'red')
$("#myUL>li:even").css('color', 'green')

// 引入css样式
import "./css/index.css"
// 引入less样式
import "./less/index.less"
// 引入图片
import imgObj from './assets/1.gif'
let theImg = document.createElement("img")
theImg.src = imgObj
document.body.appendChild(theImg)
// 引入字体图标样式文件
import "./assets/fonts/iconfont.css"
let theI = document.createElement("i");
theI.className = "iconfont icon-qq"
document.body.appendChild(theI)