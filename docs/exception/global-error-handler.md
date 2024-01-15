---
lang: en-US
title: Exception Handler
description: global exception handler
---

## Implements base interface

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

## Register exception handler

```java
windward.registerExceptionHandler(new MyExceptionHandler());
```
