---
lang: zh-CN
title: 动态路由
description: 动态路由
---

## 注册路由参数

```java
 windward.get("/simple/{name}", controller::simpleFunction)
```

## 访问路由参数

```java
windwardContext.getPathVariables()
```
