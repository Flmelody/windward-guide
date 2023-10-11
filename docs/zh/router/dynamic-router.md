---
lang: zh-CN
title: 动态路由
description: 动态路由
---

::: tip 提示
路由遵循先入先出原则；如果动态路由先于静态路由注册，最终可能出现同时匹配，但是只有动态路由生效，此规则对所有路由均生效。
:::

## 注册路由参数

```java
 windward.get("/simple/{name}", controller::simpleFunction)
```

## 访问路由参数

```java
windwardContext.getPathVariables().get("name")
```
