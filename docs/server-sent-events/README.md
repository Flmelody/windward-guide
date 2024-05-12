---
lang: en-US
title: SSE Usage
description: SSE Usage
---

## General Usage

::: tip
Experience Version Feature
:::

### Define Function

```java
public class SSEFunction {

  public static SseEjector sse(SseWindwardContext sseWindwardContext) {
    SseEjector sseEjector = new SseEjector(sseWindwardContext);
    sseEjector.send(SseEventSource.builder().data("hi! "));
    return sseEjector; // SSE terminates at the end of the method by default
  }

  public static SseEjector keepAliveSse(SseWindwardContext sseWindwardContext) {
    SseEjector sseEjector = new SseEjector(sseWindwardContext);
    sseEjector.send(SseEventSource.builder().data("hi! "));
    return sseEjector.keepAlive(3600L); // Keep alive for 1 hour so that sseEjector can still send messages during this period
  }
}
```

### Register SSE

#### Use `GET`

```java
windward.sse("/sse", SSEFunction::sse).sse("/alive-sse", SSEFunction::keepAliveSse);
```

#### Custom Mehtod

```java
windward
    .sse(HttpMethod.POST, "/sse", SSEFunction::sse)
    .sse(HttpMethod.POST, "/sse", SSEFunction::keepAliveSse);
```
