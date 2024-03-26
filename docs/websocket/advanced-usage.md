---
lang: zh-CN
title: Advanced Usage
description: Advanced Usage
---

::: info this follows on from the basic usage above
Basic usage configuration registration is omitted.
:::

## Writing codecs

The following is an example of a decoder

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

## Writing a message parser

```java
  @ChannelHandler.Sharable
  public class Parser extends WebSocketParser<Object> {

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Object msg) throws Exception {
      System.out.println("Received My msg");
    }
  }
```

## Registering codecs and message parsers

::: important have a try

Advanced usage is for technicians with some ability to implement custom protocols using multiple custom codecs and message parsers with this plugin.

```java
ExtensionalWebSocketPlugin extensionalWebSocketPlugin =
        new ExtensionalWebSocketPlugin(
            Collections.singletonList(new Decoder()), Collections.singletonList(new Parser()));
windward.registerPlugin(PluginSlot.WEBSOCKET, extensionalWebSocketPlugin);
```

:::
