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

## Routing exclusive socket plugin

At some point, we may register more than one WebSocket route, how can we make the WebSocket plugin work only under the specified WebSocket route? It's very easy!

```java
    ExtensionalWebSocketPlugin uws =
        new ExtensionalWebSocketPlugin(
            "/u-ws/**",
            Collections.singletonList(new DecoderU()),
            Collections.singletonList(new ParserU()));
    ExtensionalWebSocketPlugin ows =
        new ExtensionalWebSocketPlugin(
            "/o-ws/**",
            Collections.singletonList(new DecoderO()),
            Collections.singletonList(new ParserO()));
    windward.registerPlugin(
        PluginSlot.WEBSOCKET, new MultiWebSocketPlugin(Arrays.asList(uws, ows)));
```

## Socket authentication

WebSocket long connection is consuming server resources, can not just any client knows the address of the server can connect. It is necessary to verify the user's identity before the user establishes a WebSocket connection.

### Implementing authentication logic

```java
public class CustomAuthorizationProvider implements AuthorizationProvider {
  @Override
  public boolean authenticate(WindwardContext windwardContext) {
    // Returns true to indicate authentication passed
    return true;
  }
}
```

### Add forensic processing

```java
Windward.setup()
    .ws(
        "/ws",
        webSocketWindwardContext -> {
          // do something
        },
        new CustomAuthorizationProvider());
```
