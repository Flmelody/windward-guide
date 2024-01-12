---
lang: en-US
title: Basic Usage
description: Basic Usage
---

## Register websocket function

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

## Compatible http response

```java
    if (!webSocketWindwardContext.isUpgradedContext()) {
        webSocketWindwardContext.writeString("Unsupported protocol");
    }
```
