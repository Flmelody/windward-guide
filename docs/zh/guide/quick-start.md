---
lang: zh-CN
title: 一键启动
description: 一键启动
---

## Windward 快速开始

```java
public class Application {
  public static void main(String[] args) {
    Windward.setup().get("/", () -> "Hello World!").run();
  }
}
```
