---
lang: zh-CN
title: 函数定义
description: 函数定义
---

## 函数定义

```java
public class Function {
    // 函数入参必须WindwardContext
    public static void function1(SimpleWindwardContext windwardContext) {
    windwardContext.writeString("hello world! function1!");  // 直接返回字符串
    }

    public void function2(SimpleWindwardContext windwardContext) {
    windwardContext.writeString("hello world! function2!");
    }

    public void function3(SimpleWindwardContext windwardContext) {
    windwardContext.writeJson(new User(1, esotericman)); // 返回json
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
