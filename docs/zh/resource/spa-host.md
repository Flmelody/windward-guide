---
lang: zh-CN
title: 单页面应用托管
description: 单页面应用托管
---

::: important 提醒
体验版特性 ❤️ （预计正式发布于`1.5.1-RELEASE`）
:::

# 单页面插件

注册单页面插件，此时默认资源插件行为已被覆盖。该插件默认返回`index.html`，当指定路由无法找到时，会尝试返回`index.html`文件。

```java
windward.registerPlugin(
    PluginSlot.RESOURCE, new FixedStaticResourcePlugin(windward.getStaticResourceLocations()));
```

# 自定义的单页面名称

```java
// 添加了自定义的home文件
FixedStaticResourcePlugin fixedStaticResourcePlugin = new FixedStaticResourcePlugin(windward.getStaticResourceLocations());
fixedStaticResourcePlugin.appendPages("home.html");
```
