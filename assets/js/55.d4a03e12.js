(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{508:function(t,a,e){"use strict";e.r(a);var n=e(2),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#机票大赚卡需求总结"}},[t._v("机票大赚卡需求总结")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-需求层面"}},[t._v("1. 需求层面")])]),a("li",[a("a",{attrs:{href:"#_2-技术积累点"}},[t._v("2. 技术积累点")]),a("ul",[a("li",[a("a",{attrs:{href:"#_2-1-vue-知识点"}},[t._v("2.1 Vue 知识点")])]),a("li",[a("a",{attrs:{href:"#_2-2-公司框架相关"}},[t._v("2.2 公司框架相关")])]),a("li",[a("a",{attrs:{href:"#_2-3-工具"}},[t._v("2.3 工具")])])])]),a("li",[a("a",{attrs:{href:"#_3-小结"}},[t._v("3. 小结")])]),a("li",[a("a",{attrs:{href:"#_4-疑惑点"}},[t._v("4.疑惑点")])]),a("li",[a("a",{attrs:{href:"#_5-todo"}},[t._v("5. TODO")])])])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"机票大赚卡需求总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机票大赚卡需求总结"}},[t._v("#")]),t._v(" 机票大赚卡需求总结")]),t._v(" "),a("h2",{attrs:{id:"_1-需求层面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-需求层面"}},[t._v("#")]),t._v(" 1. 需求层面")]),t._v(" "),a("p",[t._v("该需求整体较为简单，主要为 UI+一个接口，非常适合入门。\n需求技术方案为：Vue + 万象，通过该需求熟悉了万象，熟悉了 Vue。\n整体耗时约 8 天。")]),t._v(" "),a("h2",{attrs:{id:"_2-技术积累点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-技术积累点"}},[t._v("#")]),t._v(" 2. 技术积累点")]),t._v(" "),a("h3",{attrs:{id:"_2-1-vue-知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-vue-知识点"}},[t._v("#")]),t._v(" 2.1 Vue 知识点")]),t._v(" "),a("ol",[a("li",[t._v('子组件事件回传给父组件，核心为：this.$emit("父组件函数名");')])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//父组件的写法\n    <flightAlert\n      @clickAlertLeft="clickAlertLeft"\n    ></flightAlert>\n\n    clickAlertLeft() {\n        //to do somthing\n    },\n\n//子组件的写法\n    leftButtonClick() {\n      this.$emit("clickAlertLeft");     //通过 $emit 调用父组件函数名\n    },\n\n\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("背景图片写法")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  background: url("https://file.40017.cn/appresource/image/wangxiangyuejin/flightcoupon/top_bg_new.png")\n    no-repeat;\n  background-size: 100% 100%;\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("board 图片拉伸写法，")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  border-width: 270px 0px 185px 0px;\n        border-style: solid;\n        border-image-source: url("https://file.40017.cn/appresource/image/wangxiangyuejin/flightcoupon/coupon_bg.png");\n        border-image-slice: 270 0 185 0 fill;\n        border-image-width: 270px 0px 185px 0px;\n        border-image-repeat: round;\n        border-image-outset: 0;\n')])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("伪元素 "),a("code",[t._v("::before")]),t._v("、"),a("code",[t._v("::after")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//对于：￥100这种情况，一般UI会让钱符号小一点，价格大一点，这种就可以使用伪元素来处理\n.price-act {\n  font-size: 64px;\n  font-weight: bold;\n  color: #ed5a55;\n  margin-left: 38px;\n  margin-top: 34px;\n}\n.price-act::before {\n  content: "￥";         //伪元素的内容，用 content\n  font-size: 36px;\n  margin-right: -10px;\n}\n')])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("attr()函数，用于伪元素 content 动态获取内容")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<p class="price-act" :priceOriginalSymbol="123">\n\n.price-act::after {\n  content: attr(priceOriginalSymbol);   //动态获取其他元素的属性值\n}\n')])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("css 动画，呼吸灯效果")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n.pay-button {\n  //这里声明需要使用动画\n  animation: mybigsmall 1s linear infinite;\n  -webkit-animation: mybigsmall 1s linear infinite;\n}\n\n//具体动画代码\n@keyframes mybigsmall {\n  0% {\n    -webkit-transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(.9);\n  }\n  100% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@-webkit-keyframes mybigsmall {\n  0% {\n    -webkit-transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n  }\n}\n\n")])])]),a("h3",{attrs:{id:"_2-2-公司框架相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-公司框架相关"}},[t._v("#")]),t._v(" 2.2 公司框架相关")]),t._v(" "),a("ol",[a("li",[t._v("分享相关，公司分享框架，看 PM 需求是否需要用特殊的唤起中间页背景，如果需要则让 UI 做特定尺寸的图片，使用后台进行配置，生成分享链接；如果不需要则用默认图生成即可。")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://tcwireless.17usoft.com/newadmin/PushLandingPage/WakePageCreate",target:"_blank",rel:"noopener noreferrer"}},[t._v("唤起中间页后台"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//分享链接一般写法\n//如遇微信被封的情况，则需要加token，token规则为十八味随机数，\n//例如：shareToken: "_77480805547925e244",\n      jumpUrl: `https://m.17u.cn/app/links/web/main${\n          this.wanxiangConfig.shareToken\n        }?url=${encodeURIComponent(\n          location.href.split("?")[0] + `?refid=1752344963`\n        )}&wakePwdId=0&wakeRefid=1752344963&wakeDIC=999999`,\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("万象，万象分为组件和活动，活动为最后的活动页面，组件为 Vue 层面的组件。万象具备了配置功能，常用变动的文案或配置，可放到万象组件属性里，减少组件发版次数。")])]),t._v(" "),a("h3",{attrs:{id:"_2-3-工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-工具"}},[t._v("#")]),t._v(" 2.3 工具")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart",target:"_blank",rel:"noopener noreferrer"}},[t._v("js-code-to-svg-flowchart"),a("OutboundLink")],1),t._v("，对 JS 文件生成函数调用关系图，但是还不完美，不能直接支持 Vue 文件，而且不能生成连续的调用图，后续改善。逻辑分散到几个函数以后，流程后面修改容易忘，需要一个整体的函数调用流程图，按照流程图来修改 Review 逻辑。")]),t._v(" "),a("li",[t._v("代码统计工具 "),a("a",{attrs:{href:"https://github.com/AlDanial/cloc",target:"_blank",rel:"noopener noreferrer"}},[t._v("cloc"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//基本使用，跟代码所在目录\ncloc ./\n//\n查看具体每个文件统计，跟--by-file\ncloc ./ --by-file\n")])])]),a("ul",[a("li",[t._v("Postman，需要详细研究，精通")])]),t._v(" "),a("h2",{attrs:{id:"_3-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-小结"}},[t._v("#")]),t._v(" 3. 小结")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("通过该项目熟悉了 Vue 的基本语法")])]),t._v(" "),a("li",[a("p",[t._v("通过该项目熟悉了万象的基本使用")])]),t._v(" "),a("li",[a("p",[t._v("该项目整体上还是非常适合入门")])]),t._v(" "),a("li",[a("p",[t._v("项目基本流程，分为以下接个阶段")]),t._v(" "),a("ol",[a("li",[t._v("策划稿分析，分析逻辑，确定技术选型，初步估时，估时一般按 1.5 计算")]),t._v(" "),a("li",[t._v("UI 稿分析，分析页面 UI、动画难点，初步确定技术实现方案，确定项目真正估时，如果与初步估时不一致，则需要跟 PM、QA 同步，确定提测时间")]),t._v(" "),a("li",[t._v("接口分析，用 Postman 调试，分析接口节点是否满足，有不满足点沟通调整")]),t._v(" "),a("li",[t._v("页面开发，基于 UI 稿 + 接口 + 技术方案，开始实现")]),t._v(" "),a("li",[t._v("自测阶段，写一个覆盖大部分场景的测试案例自测，可用测试数据实现")]),t._v(" "),a("li",[t._v("提测阶段，修改 QA 反馈问题")]),t._v(" "),a("li",[t._v("上线\n"),a("img",{attrs:{src:"evernotecid://0324601C-604D-4933-80AD-61333E7917E7/appyinxiangcom/2005435/ENResource/p9955",alt:"5867a48c4ac417b6d8df1ac7c5cae351.png"}})])])]),t._v(" "),a("li",[a("p",[t._v("代码量，1227 行")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-------------------------------------------------------------------------------\nLanguage                     files          blank        comment           code\n-------------------------------------------------------------------------------\nVuejs Component                  6             81            167           1188\nJavaScript                       1              5              1             39\n-------------------------------------------------------------------------------\nSUM:                             7             86            168           1227\n-------------------------------------------------------------------------------\n")])])]),a("h2",{attrs:{id:"_4-疑惑点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-疑惑点"}},[t._v("#")]),t._v(" 4.疑惑点")]),t._v(" "),a("ol",[a("li",[t._v("目前 HTML 元素，基本我就是 DIV + P，感觉不是很好")])]),t._v(" "),a("h2",{attrs:{id:"_5-todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-todo"}},[t._v("#")]),t._v(" 5. TODO")]),t._v(" "),a("ul",[a("li",[t._v("精通 Postman 工具")]),t._v(" "),a("li",[t._v("持续改善 js-code-to-svg-flowchart 工具")]),t._v(" "),a("li",[t._v("Vue 继续学习")])])])}),[],!1,null,null,null);a.default=r.exports}}]);