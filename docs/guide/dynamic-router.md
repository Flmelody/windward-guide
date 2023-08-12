---
lang: en-US
title: Dynamic Router
description: Dynamic Router
---

## register path variable

```java
 windward.get("/simple/{name}", controller::simpleFunction)
```

## access path variable

```java
windwardContext.getPathVariables()
```
