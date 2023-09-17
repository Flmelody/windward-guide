---
lang: zh-CN
title: WebSocket
description: WebSocket
---

## 注册 websocket

```java
    Windward.setup()
        .ws(
            "/ws",
            webSocketWindwardContext -> {
              switch (webSocketWindwardContext.getWebSocketEvent()) {
                case ON_CONNECT:
                  webSocketWindwardContext.writeString("Hello World!");
                  break;
                case ON_MESSAGE:
                  // webSocketFrame or just strings
                  Object webSocketData =
                      webSocketWindwardContext.getWebSocketData();
                  webSocketWindwardContext.writeString("Oh?");
                  break;
                default:
              }
            })
        .run();
```

## http 兼容响应

```java
    if (!webSocketWindwardContext.isUpgradedContext()) {
        webSocketWindwardContext.writeString("Unsupported protocol");
    }
```
