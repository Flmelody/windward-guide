---
lang: en-US
title: FAQ
description: FAQ
---

#### Q: 😕 Why aren't the logs printing?
#### A: `Windward` is not configured with a default logging implementation, built-in SLF4J facade mode adaptation, you need to add your own logging implementation

#### Q: 😕 How to customize the 404 return value?
#### A: When a request 404 occurs, `Windward` will throw `HandlerNotFoundException` exception, you can implement `ExceptionHandler` to customize the handling, currently the default implementation is `DefaultNotFoundHandler` (lowest priority)