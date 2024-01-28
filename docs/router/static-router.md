---
lang: en-US
title: Static Router
description: Static Router
---

## Get method

```java
Windward windward =
    Windward.setup()
        .get(
            "/get",
            simpleWindwardContext -> {
                simpleWindwardContext.writeString("Hello World!");
            });
```

## Post method

```java
Windward windward =
    Windward.setup()
        .post(
            "/post",
            simpleWindwardContext -> {
                simpleWindwardContext.writeString("Hello World!");
            });
```

## Put method

```java
Windward windward =
    Windward.setup()
        .put(
            "/put",
            simpleWindwardContext -> {
                simpleWindwardContext.writeString("Hello World!");
            });
```

## Delete method

```java
Windward windward =
    Windward.setup()
        .delete(
            "/delete",
            simpleWindwardContext -> {
                simpleWindwardContext.writeString("Hello World!");
            });
```

::: info

You can use common method `http` like below.

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
