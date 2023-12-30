---
lang: zh-CN
title: 常见问题
description: 常见问题
---

#### Q: 😕 为什么没有打印日志？
#### A: `Windward`没有配置默认日志实现，内置SLF4J门面模式适配，需要自行添加日志实现

#### Q: 😕 怎么自定义404返回值？
#### A: 当发生请求404，`Windward`会抛出`HandlerNotFoundException`异常，可以实现`ExceptionHandler`自定义处理，目前默认实现为`DefaultNotFoundHandler`(最低优先级)