---
lang: en-US
title: Define Functions
description: Define Functions
---

## Define functions

```java
public class Function {
    // function with WindwardContext parameter
    public static void function1(SimpleWindwardContext windwardContext) {
    windwardContext.writeString("hello world! function1!");  // strings
    }

    public void function2(SimpleWindwardContext windwardContext) {
    windwardContext.writeString("hello world! function2!");
    }

    public void function3(SimpleWindwardContext windwardContext) {
    windwardContext.writeJson(new User(1, esotericman)); // json
    }
}

public class User {
    private final Integer userId;
    private final String userName;

    public Integer getUserId() {
    return userId;
    }

    public String getUserName() {
    return userName;
    }

    public User(Integer userId, String userName) {
    this.userId = userId;
    this.userName = userName;
    }
}
```
