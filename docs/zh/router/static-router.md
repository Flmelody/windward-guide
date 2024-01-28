---
lang: zh-CN
title: 静态路由
description: 静态路由
---

## get 方法

```java
Windward windward =
    Windward.setup()
        .get(
            "/get",
            simpleWindwardContext -> {
                simpleWindwardContext.writeString("Hello World!");
            });
```

## post 方法

```java
Windward windward =
    Windward.setup()
        .post(
            "/post",
            simpleWindwardContext -> {
                simpleWindwardContext.writeString("Hello World!");
            });
```

## put 方法

```java
Windward windward =
    Windward.setup()
        .put(
            "/put",
            simpleWindwardContext -> {
                simpleWindwardContext.writeString("Hello World!");
            });
```

## delete 方法

```java
Windward windward =
    Windward.setup()
        .delete(
            "/delete",
            simpleWindwardContext -> {
                simpleWindwardContext.writeString("Hello World!");
            });
```

::: info 提示

当然你也可以像下面一样直接使用通用方法 `http`。

```java
Windward windward =
    Windward.setup()
        .http(
            HttpMethod.GET,
            "/get",
            simpleWindwardContext -> {
                simpleWindwardContext.writeString("Hello World!");
            });
```

:::
