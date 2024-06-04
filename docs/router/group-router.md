---
lang: en-US
title: Group Router
description: Group Router
---

Too many routes, not good management, need to configure a uniform prefix for grouping.

## Usage

```java
Windward.setup()
    .get("/", () -> "Hello World!")
    .then()
    .group("/v1")
    .get("/", () -> "Hello World! I'm v1")
    .end()
    .group("/v2")
    .get("/", () -> "Hello World! I'm v2")
    .end()
    .run();
```

After the above grouping, we successfully registered three routes, `/` for the root path and two grouped routes `/v1/hi` and `/v2/ha`
