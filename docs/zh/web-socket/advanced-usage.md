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

## 路由独占式 Socket 插件

某些时候，我们可能会注册多个 WebSocket 路由，这时候如何让 WebSocket 插件只在指定的 WebSocket 路由下生效呢？非常容易！

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

## Socket 鉴权

WebSocket 长连接是消耗服务器资源的，不能随便哪个客户端知道服务器地址就能连接上来。在用户建立 WebSocket 连接前对用户身份进行校验是有必要的
