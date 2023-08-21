---
lang: en-US
title: Exception Handler
description: global exception handler
---

## implements base interface

```java
public class MyExceptionHandler implements ExceptionHandler{

    @Override
    public void handle(WindwardContext windwardContext){
        // deal with exception
    }

    @Override
    public boolean supported(Exception e){
        // which exception that supported
    }
}
```

## register exception handler

```java
windward.registerExceptionHandler(new MyExceptionHandler());
```
