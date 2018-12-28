### 解决CSS3变形和动画的兼容问题
> CSS3中的很多样式属性兼容性都不好：不兼容IE低版本浏览器、不兼容低版本的安卓系统（兼容分为两种：有一种是怎么都不兼容的，有一种是需要设置前缀才能识别的）
```
  .box{
      -webkit-animation:Move 1s linear both;
      animation:Move 1s linear both;
  }

  @-webkit-keyframes Move{
      100%{
          -webkit-transform:rotate(180deg);
          transform:rotate(180deg);
      }
  }

  @keyframes Move{
      100%{
          -webkit-transform:rotate(180deg);
          transform:rotate(180deg);
      }
  }
  //=>移动端开发，为了让transform/animation/@keyframes/transition...等兼容所有的手机，需要写两套（加前缀的在前，不加的在后）；PC端需要写五套（-webkit-/-moz-/-o-/-ms-）；
```
如果我们不想手动的设置前缀来处理兼容，可以导入一款JS插件：prefixfree.min.js，这款插件会帮我们补齐前缀的，我们写样式的时候写一套不加前缀的即可；

### 性能优化
1. 资源合并压缩，目的减少HTTP请求次数
- CSS合并成为一个
- JS合并成为一个
- 图片也可以根据需求进行合并
- 在保证图片不失真的情况下，把图片进行压缩
- ...
真实项目中资源的合并是依托webpack进行的
在线压缩：tool.css-js.com

2. 加快访问速度（服务器网络处理）
- CDN地域服务器分布
- 尽可能不用外国的服务器
- 可以单独架设资源服务器
- ...
可以选择使用七牛云服务器做为自己的图片资源服务器：https://www.qiniu.com/
代码中把所有资源的请求地址更新为七牛的云地址
例如：http://pkffc4n99.bkt.clouddn.com/image/arrow.png

3. 对于H5场景应用，会加载很多图片，为了提高体验度，我们可以给用户设置一个加载等待的效果(LOADING)
