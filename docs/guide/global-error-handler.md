---
lang: en-US
title: exception handler
description: global exception handler
---

## implemnets base interface

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
