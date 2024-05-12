---
lang: zh-CN
title: 高级用法
description: 高级用法
---

::: info 此接上文基础用法
本处省略基础用法配置注册相关
:::

## 编写编解码器

以下为解码器示例

```java
  @ChannelHandler.Sharable
  public class Decoder extends WebSocketDecoder<Object> {

      @Override
      protected void decode(ChannelHandlerContext ctx, Object msg, List<Object> out)
          throws Exception {
        if (msg instanceof WebSocketFrame) {
          // Example of parsing a text frame
          if (msg instanceof TextWebSocketFrame) {
            System.out.println("Decoded my msg");
            out.add(msg);
            ((TextWebSocketFrame) msg).retain();
          }
        }
      }
  }
```

## 编写消息解析器

```java
  @ChannelHandler.Sharable
  public class Parser extends WebSocketParser<Object> {

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Object msg) throws Exception {
      System.out.println("Received My msg");
    }
  }
```

## 注册编解码器及消息解析器

::: important 值得一试

高级用法适用于有一定能力的技术人员，利用该插件可以使用多个自定义编解码器和消息解析器，实现自定义协议。

```java
ExtensionalWebSocketPlugin extensionalWebSocketPlugin =
        new ExtensionalWebSocketPlugin(
            Collections.singletonList(new Decoder()), Collections.singletonList(new Parser()));
windward.registerPlugin(PluginSlot.WEBSOCKET, extensionalWebSocketPlugin);
```

:::
