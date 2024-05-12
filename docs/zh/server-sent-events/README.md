---
lang: zh-CN
title: SSE用法
description: SSE用法
---

## 常规用法

::: tip 提示
体验版新特性
:::

### 函数定义

```java
public class SSEFunction {

  public static SseEjector sse(SseWindwardContext sseWindwardContext) {
    SseEjector sseEjector = new SseEjector(sseWindwardContext);
    sseEjector.send(SseEventSource.builder().data("hi! "));
    return sseEjector; // 默认方法结束就终止
  }

  public static SseEjector keepAliveSse(SseWindwardContext sseWindwardContext) {
    SseEjector sseEjector = new SseEjector(sseWindwardContext);
    sseEjector.send(SseEventSource.builder().data("hi! "));
    return sseEjector.keepAlive(3600L); // 保活1小时 sseEjector在此期间内仍能发送消息
  }
}
```

### 注册 SSE

#### 默认 GET 用法

```java
windward.sse("/sse", SSEFunction::sse).sse("/alive-sse", SSEFunction::keepAliveSse);
```

#### 自定义方法

```java
windward
    .sse(HttpMethod.POST, "/sse", SSEFunction::sse)
    .sse(HttpMethod.POST, "/sse", SSEFunction::keepAliveSse);
```
