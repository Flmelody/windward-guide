---
lang: zh-CN
title: 异常处理
description: 全局异常处理
---

## 实现异常处理接口

```java
public class MyExceptionHandler implements ExceptionHandler{

    @Override
    public void handle(WindwardContext windwardContext){
        // 异常处理逻辑
    }

    @Override
    public boolean supported(Exception e){
        // 支持处理哪种异常
    }
}
```

## 注册异常处理器

```java
windward.registerExceptionHandler(new MyExceptionHandler());
```
