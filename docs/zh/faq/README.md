---
lang: zh-CN
title: 常见问题
description: 常见问题
---

#### Q: 有简单的示例项目吗 🤗？

#### A: 当然！点击前往[入门项目](https://github.com/esotericman/hello-windward)

#### Q: 😕 为什么没有打印日志？

#### A: `Windward`没有配置默认日志实现，内置 SLF4J 门面模式适配，需要自行添加日志实现

#### Q: 😕 怎么自定义 404 返回值？

#### A: 当发生请求 404，`Windward`会抛出`HandlerNotFoundException`异常，可以实现`ExceptionHandler`自定义处理，目前默认实现为`DefaultNotFoundHandler`(最低优先级)

#### Q: 怎么自定义插件行为？

#### A: `Windward` 插件是卡槽式的，目前支持的插件如下

```java
/** Slot for json. */
JSON(JsonPlugin.class),
/** Slot for groovy template. */
GROOVY_VIEW(GroovyView.class),
/** Slot for thymeleaf template. */
THYMELEAF_VIEW(ThymeleafView.class),
/** Slot for freemarker template. */
FREEMARKER_VIEW(FreemarkerView.class),
/** Slot for websocket. */
WEBSOCKET(ExtensionalWebSocketPlugin.class),
/** Slot for static resource. */
RESOURCE(ResourcePlugin.class);
```

如果你想自定义，可以直接覆盖已经填充的卡槽实现，就像这样

```java
windward.registerPlugin(PluginSlot.JSON, new MyJacksonPlugin());
```
