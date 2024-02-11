---
lang: en-US
title: FAQ
description: FAQ
---

#### Q: Is there a simple sample project 🤗 ?

#### A: Of course! Click to go [Sample Project](https://github.com/esotericman/hello-windward)

#### Q: 😕 Why aren't the logs printing?

#### A: `Windward` is not configured with a default logging implementation, built-in SLF4J facade mode adaptation, you need to add your own logging implementation

#### Q: What is `WindwardContext`? How does it work?

#### A: The `WindwardContext` is the only parameter of the routing function, and the request and response operations revolve around the `WindwardContext`

There are currently two commonly used

`SimpleWindwardContext` for HTTP routing

`JsonWindwardContext` is also used for HTTP routing, but automatically serialises the return value and responds as `JSON`

`WebSocketWindwardContext` for WebSocket routing

#### Q: 😕 How to customize the 404 return value?

#### A: When a request 404 occurs, `Windward` will throw `HandlerNotFoundException` exception, you can implement `ExceptionHandler` to customize the handling, currently the default implementation is `DefaultNotFoundHandler` (lowest priority)

#### Q: How to customize the plugin behavior?

#### A: The `Windward` plug-in is card-slot based and currently supports the following plug-ins

```java
/** Slot for json. */
JSON(JsonPlugin.class),
/** Slot for groovy template. */
GROOVY_VIEW(GroovyView.class),
/** Slot for thymeleaf template. */
THYMELEAF_VIEW(ThymeleafView.class),
/** Slot for freemarker template. */
FREEMARKER_VIEW(FreemarkerView.class),
/** Slot for websocket. */
WEBSOCKET(ExtensionalWebSocketPlugin.class),
/** Slot for static resource. */
RESOURCE(ResourcePlugin.class);
```

If you want to customize it, you can just override the already populated slot to achieve it, like this

```java
windward.registerPlugin(PluginSlot.JSON, new MyJacksonPlugin());
```
