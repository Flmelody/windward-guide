---
lang: en-US
title: Host Static Resource
description: Host Static Resource
---

::: info

Static resources should in `classpath:/static` folder or its subfolder, of course, you can custom it yourself.

```java
// Default is `/static`
Windward.setup(8080,"/","/templates","your static resource locations");
```

:::

# Just register it!

```java
windward.resource("/**.js","/**.css","/**.jpeg","/**.png");
```

If you prefer to host all, register it like below.

```java
windward.resource("/**");
```

::: important

For routes registered with `windward.resource`, static resources should be placed in the global default static resource directory, which is unique. If you have multiple different static resource directories, try the following writeup.

```java
windward
    .resources("/static", "/static/**.js", "/static/**.png", "/static/**.html")
    .resources("/vue", "/vue/**.html")
    .resources("/home", "/home/**");
```

:::

Static resource hosting, in essence, is also a routing strategy, so we need to be extra careful with wildcard writing, e.g. `/**`.
::: caution

```java
// This writeup is not recommended and creates mixed routes
windward
    .group("/v1")
    .get(
        "/test",
        simpleWindwardContext -> {
            // codes
        })
    .resource("/**"); ❌
// Use this writing style
// We should always separate static resource routing from regular interface functions to avoid unexpected situations
windward
    .group("/v1")
    .get(
        "/test",
        simpleWindwardContext -> {
            // codes
        })
    .end() //👈👈This is important here, it means that the previous routing group is already registered
    .resource("/**"); ✅
```

:::
