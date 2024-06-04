---
lang: zh-CN
title: 分组路由
description: 分组路由
---

路由太多了，不好管理，需要配置统一的前缀进行分组

## 用法

```java
Windward.setup()
    .get("/", () -> "Hello World!")
    .then()
    .group("/v1")
    .get("/hi", () -> "Hello World! I'm v1")
    .end()
    .group("/v2")
    .get("/ha", () -> "Hello World! I'm v2")
    .end()
    .run();
```

经过上述分组，我们成功的注册了三个路由，分别是根路径的`/`以及两个分组的路由`/v1/hi`和`/v2/ha`
