(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{441:function(s,t,c){"use strict";c.r(t);var a=c(35),_=Object(a.a)({},(function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[c("h2",{attrs:{id:"_1-css-加载会阻塞-dom-树的解析和渲染吗"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-加载会阻塞-dom-树的解析和渲染吗"}},[s._v("#")]),s._v(" 1. css 加载会阻塞 DOM 树的解析和渲染吗？")]),s._v(" "),c("p",[s._v("（1）css 加载不会影响 DOM 树的解析，只会影响渲染。")]),s._v(" "),c("p",[s._v("（2）当加载 css 的时候，可能会改变 DOM 节点的样式，如果 css 加载不阻塞 DOM 树渲染，那么当 css 加载完成之后，DOM 树可能又会重新重绘或者回流，这就造成了一些没有必要的损耗。所以浏览器会先进行 DOM 树的结构解析，然后再进行渲染。这样可以大大提高渲染的性能。")]),s._v(" "),c("h2",{attrs:{id:"_2-css-加载会阻塞-js-运行吗"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_2-css-加载会阻塞-js-运行吗"}},[s._v("#")]),s._v(" 2.css 加载会阻塞 js 运行吗？")]),s._v(" "),c("p",[s._v("css 加载会阻塞后面 js 语句的执行")]),s._v(" "),c("h2",{attrs:{id:"_3-为了避免让用户看到长时间的白屏时间-我们应该尽可能的提高-css-加载速度"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_3-为了避免让用户看到长时间的白屏时间-我们应该尽可能的提高-css-加载速度"}},[s._v("#")]),s._v(" 3. 为了避免让用户看到长时间的白屏时间，我们应该尽可能的提高 css 加载速度")]),s._v(" "),c("p",[s._v("(1) 使用 CDN(因为 CDN 会根据你的网络状况，替你挑选最近的一个具有缓存内容的节点为你提供资源，因此可以减少加载时间)")]),s._v(" "),c("p",[s._v("(2) 对 css 进行压缩(可以用很多打包工具，比如 webpack,gulp 等，也可以通过开启 gzip 压缩)")]),s._v(" "),c("p",[s._v("(3) 合理的使用缓存(设置 cache-control,expires,以及 E-tag 都是不错的，不过要注意一个问题，就是文件更新后，你要避免缓存而带来的影响。其中一个解决防范是在文件名字后面加一个版本号)")]),s._v(" "),c("p",[s._v("(4) 减少 http 请求数，将多个 css 文件合并")])])}),[],!1,null,null,null);t.default=_.exports}}]);