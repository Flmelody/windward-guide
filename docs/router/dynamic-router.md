---
lang: en-US
title: Dynamic Router
description: Dynamic Router
---

::: tip tip
Routers are FIFO;If you register a dynamic router before static one,The static router may not become effective.
:::

## register path variable

```java
 windward.get("/simple/{name}", controller::simpleFunction)
```

## access path variable

```java
windwardContext.getPathVariables().get("name")
```
