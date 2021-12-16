"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

require("./css/index.css");

require("./less/index.less");

var _ = _interopRequireDefault(require("./assets/1.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入Jquery
// 实现隔行变色
(0, _jquery["default"])("#myUL>li:odd").css('color', 'red');
(0, _jquery["default"])("#myUL>li:even").css('color', 'green'); // 引入css样式

var theImg = document.createElement("img");
theImg.src = _["default"];
document.body.appendChild(theImg);