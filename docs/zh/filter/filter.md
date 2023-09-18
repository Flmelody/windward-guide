---
lang: zh-CN
title: 过滤器
description: 过滤器
---

## 关于过滤器

`Filter`是每一个过滤器的父接口，每一个过滤器都会在函数接口调用前执行。除此之外他们能够访问 `WindwardContext`，因此可以做请求日志，请求检查等操作

## 最基本的日志过滤器

```java
public class LoggingFilter implements Filter {
  private static final Logger logger = LoggerFactory.getLogger(LoggingFilter.class);

  @Override
  public void filter(WindwardContext windwardContext) {
    if (logger.isDebugEnabled()) {
      logger.debug("Accepted request {}", windwardContext.windwardRequest().getUri());
    }
  }
}
```

## 注册过滤器

```java
windward.registerFilter(new LoggingFilter());
```
