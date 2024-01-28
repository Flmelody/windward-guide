---
lang: zh-CN
title: 动态路由
description: 动态路由
---

::: tip 提示
路由遵循先入先出原则；如果动态路由先于静态路由注册，最终可能出现同时匹配，但是只有动态路由生效，此规则对所有路由均生效。
:::

::: warning 注意
动态路由目前`/{name}` 不仅匹配 `/url` 也匹配 `/url/name`，和 `/**` 表现一致。这是 BUG，正确的行为是只匹配 `/url`，下个版本将修复。
:::

## 注册动态路由

```java
Windward.setup()
    .get(
        "/get/{name}",
        simpleWindwardContext -> {
            simpleWindwardContext.writeString("Hello World!");
        });
```

## 访问路由参数

```java
simpleWindwardContext.getPathVariables().get("name");
```
