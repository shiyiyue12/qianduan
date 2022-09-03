# 第01节：JavaScript概述

## 一、JavaScript概述

1995年，JavaScript问世，主要目的是处理表单验证。起初命名为LiveScript，后来因为java语言盛行，更名为JavaScript，目的是希望借着Java的火爆流行起来（JavaScript的开发者一定想不到JavaScript在20多年后的今天会如此盛行）。

1997年，欧洲计算机制造商协会发布了ECMAScript，在接下来的几年里，web浏览器厂商就开始将ECMAScript作为JavaScript实现的标准。

2009年，Node.js问世，JavaScript这门语言逐步在后台占据一席之地，目前，前端开发的大量工具都基于node.js。

2015年，ECMAScript2015(ES6)正式发布，使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

## 二、JavaScript是做什么的

在前端，通过javascript可以实现更多的页面交互，与后台的数据交互，以及更为丰富的网页效果。

在后台，借助node的运行环境，使用javascript一门语言，即可完成服务器端开发。

## 三、hello world

学习所有编程语言编写第一个程序的时候，都习惯性地编写“hello world”程序，学习JavaScript也是一样。作为我们编写的第一个JavaScript程序，我们将代码写在html这个文档中，body标签里写想要的效果代码,JavaScript放在``<script></script>``这个标签里
代码如下所示：

``` javascript
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Document</title>
</head>
<body>
 <script>
  alert("hello world");
 </script>
</body>
</html>
```
