---
lang: en-US
title: Filter
description: Filter
---

## about filter

Every filter is a child of `Filter`, will be executed before function invoking. Also they can access `WindwardContext`, so that you can do request logging, request verification and so on.

## logging filter

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

## register filter

```java
windward.registerFilter(new LoggingFilter());
```
