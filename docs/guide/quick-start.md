---
lang: en-US
title: Run Directly
description: Run Directly
---

## Run

```java
public class Application {
  public static void main(String[] args) {
    Windward.setup().get("/", () -> "Hello World!").run();
  }
}
```
