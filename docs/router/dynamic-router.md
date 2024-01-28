---
lang: en-US
title: Dynamic Router
description: Dynamic Router
---

::: tip
Routers are FIFO;If you register a dynamic router before static one,The static router may not become effective.
:::

::: warning
Dynamic router `/{name}` matches `/url` and `/url/name`, likes `/**` now. But it's a bug, expected behavior is it should only matches `/url`, this will be fixed in next version.
:::

## Register path variable

```java
Windward.setup()
    .get(
        "/get/{name}",
        simpleWindwardContext -> {
            simpleWindwardContext.writeString("Hello World!");
        });
```

## Access path variable

```java
simpleWindwardContext.getPathVariables().get("name");
```
