(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{545:function(a,t,n){"use strict";n.r(t);var e=n(2),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#app-延长后台时间-和-background-fetch"}},[a._v("App 延长后台时间 和 background fetch")]),t("ul",[t("li",[t("a",{attrs:{href:"#app-延长后台时间"}},[a._v("App 延长后台时间")])]),t("li",[t("a",{attrs:{href:"#background-fetch"}},[a._v("Background Fetch")]),t("ul",[t("li",[t("a",{attrs:{href:"#开启backgound-fetch方法"}},[a._v("开启backgound fetch方法")])]),t("li",[t("a",{attrs:{href:"#实现-uiapplicationdelegate-方法"}},[a._v("实现 UIApplicationDelegate 方法")])])])]),t("li",[t("a",{attrs:{href:"#参考文档"}},[a._v("参考文档")])])])])])]),t("p"),a._v(" "),t("p",[a._v("[TOC]")]),a._v(" "),t("h1",{attrs:{id:"app-延长后台时间-和-background-fetch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-延长后台时间-和-background-fetch"}},[a._v("#")]),a._v(" App 延长后台时间 和 background fetch")]),a._v(" "),t("h2",{attrs:{id:"app-延长后台时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-延长后台时间"}},[a._v("#")]),a._v(" App 延长后台时间")]),a._v(" "),t("p",[a._v("退到后台时，如果需要存储数据等需要延长后台执行时间的，需要使用以下方法")]),a._v(" "),t("div",{staticClass:"language-objective-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@property(nonatomic,readonly) NSTimeInterval backgroundTimeRemaining NS_AVAILABLE_IOS(4_0);\n- (UIBackgroundTaskIdentifier)beginBackgroundTaskWithExpirationHandler:(void(^ __nullable)(void))handler  NS_AVAILABLE_IOS(4_0) NS_REQUIRES_SUPER;\n- (UIBackgroundTaskIdentifier)beginBackgroundTaskWithName:(nullable NSString *)taskName expirationHandler:(void(^ __nullable)(void))handler NS_AVAILABLE_IOS(7_0) NS_REQUIRES_SUPER;\n- (void)endBackgroundTask:(UIBackgroundTaskIdentifier)identifier NS_AVAILABLE_IOS(4_0) NS_REQUIRES_SUPER;\n\n")])])]),t("p",[a._v("官网示例代码")]),a._v(" "),t("div",{staticClass:"language-objective-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('- (void)applicationDidEnterBackground:(UIApplication *)application\n{\n    bgTask = [application beginBackgroundTaskWithName:@"MyTask" expirationHandler:^{\n        // Clean up any unfinished task business by marking where you\n        // stopped or ending the task outright.\n      \t//如果任务还没执行完，到最后4s左右的时候，系统会强制调用 expirationHandler走到这里\n      \n        [application endBackgroundTask:bgTask];\n        bgTask = UIBackgroundTaskInvalid;\n    }];\n \n    // Start the long-running task and return immediately.\n    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{\n \n        // Do the work associated with the task, preferably in chunks.\n       //这里开始执行后台任务。如果在系统允许的时间内任务已执行完，则通过这里结束后台任务；如果最后4s左右任务还未执行完，则系统会强制调用 expirationHandler，走到上面的回调里\n \n        [application endBackgroundTask:bgTask];\n        bgTask = UIBackgroundTaskInvalid;\n    });\n}\n\n')])])]),t("p",[a._v("两个方法 beginBackgroundTaskWithExpirationHandler: 与 beginBackgroundTaskWithName:expirationHandler: 两个方法一致，当需要debug的时候，最好指定一个名字，方便调试。backgroundTimeRemaining 标示后台还能执行多少时间，具体时间根据系统情况来确定，"),t("strong",[a._v("经过测试大约有 179.9s的时间，到最后4s左右开始调用 expirationHandler 执行收尾工作")])]),a._v(" "),t("h2",{attrs:{id:"background-fetch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background-fetch"}},[a._v("#")]),a._v(" Background Fetch")]),a._v(" "),t("p",[a._v("iOS 7开始苹果引入background fetch，该机制可以让App后台被定期唤醒，执行一些下载更新任务，比如新闻媒体等App,可以定期唤醒App更新数据。当App在后台被挂起或者被系统回收后，依然会被定期唤醒执行任务。")]),a._v(" "),t("p",[a._v("Backgroud fetch 的调用时机取决于系统，方法中设定时间后，系统会根据实际情况唤醒App， 被唤醒后，最多有30s的时间执行任务，如果超过会被系统杀死。如果App执行任务时间过长，系统会减少调用background fetch的时间。")]),a._v(" "),t("h3",{attrs:{id:"开启backgound-fetch方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启backgound-fetch方法"}},[a._v("#")]),a._v(" 开启backgound fetch方法")]),a._v(" "),t("ul",[t("li",[a._v("苹果开发者账号证书配置里，对AppleID打开backgound fetch功能")]),a._v(" "),t("li",[a._v("Xcode里Capablity里打开 Background fetch开关")])]),a._v(" "),t("h3",{attrs:{id:"实现-uiapplicationdelegate-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现-uiapplicationdelegate-方法"}},[a._v("#")]),a._v(" 实现 UIApplicationDelegate 方法")]),a._v(" "),t("div",{staticClass:"language-swift extra-class"},[t("pre",{pre:!0,attrs:{class:"language-swift"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("application")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token omit keyword"}},[a._v("_")]),a._v(" application"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UIApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                 didFinishLaunchingWithOptions launchOptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n                 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UIApplicationLaunchOptionsKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bool")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Override point for customization after application launch.")]),a._v("\n        \n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Fetch data once an hour. 设置 Background fetch间隔时间")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UIApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shared"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setMinimumBackgroundFetchInterval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3600")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Other initialization…")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//实现Background fetch回调，在该Handle里处理事情")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[a._v("application")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token omit keyword"}},[a._v("_")]),a._v(" application"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UIApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" \n                 performFetchWithCompletionHandler completionHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n                 "),t("span",{pre:!0,attrs:{class:"token attribute atrule"}},[a._v("@escaping")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UIBackgroundFetchResult")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Check for new data. ")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" newData "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fetchUpdates")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("addDataToFeed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("newData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" newData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("completionHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("newData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("completionHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("noData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[a._v("#")]),a._v(" 参考文档")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/core_app/managing_your_app_s_life_cycle/preparing_your_app_to_run_in_the_background/extending_your_app_s_background_execution_time?language=objc",target:"_blank",rel:"noopener noreferrer"}},[a._v("Extending Your App's Background Execution Time"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/core_app/managing_your_app_s_life_cycle/preparing_your_app_to_run_in_the_background/updating_your_app_with_background_app_refresh?language=objc",target:"_blank",rel:"noopener noreferrer"}},[a._v("Updating Your App with Background App Refresh"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072-CH1-SW1",target:"_blank",rel:"noopener noreferrer"}},[a._v("App Programming Guide for iOS"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.html#//apple_ref/doc/uid/TP40007072-CH4-SW25",target:"_blank",rel:"noopener noreferrer"}},[a._v("Background Execution"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/core_app/managing_your_app_s_life_cycle/preparing_your_app_to_run_in_the_background/about_the_background_execution_sequence?language=objc",target:"_blank",rel:"noopener noreferrer"}},[a._v("About the Background Execution Sequence"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/core_app/managing_your_app_s_life_cycle/preparing_your_app_to_run_in_the_background?language=objc",target:"_blank",rel:"noopener noreferrer"}},[a._v("Preparing Your App to Run in the Background"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/core_app/managing_your_app_s_life_cycle?language=objc#overview",target:"_blank",rel:"noopener noreferrer"}},[a._v("Managing Your App's Life Cycle"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/uiapplicationdelegate?language=objc",target:"_blank",rel:"noopener noreferrer"}},[a._v("UIApplicationDelegate"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);