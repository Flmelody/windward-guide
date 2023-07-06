---
lang: en-US
title: Getting Started
description: Getting Started
---
::: warning
Windward is currently in developing stage
:::
## Prerequisites
- Jdk1.8+
::: tip 
only Jdk1.8+ tested currently
:::
## maven dependency
``` xml
<dependency>
  <groupId>org.flmelody</groupId>
  <artifactId>windward</artifactId>
  <version>1.0-RELEASE</version>
</dependency>
```
## define functions
``` java
public class Function {
    // function with WindwardContext parameter
    public static void function1(WindwardContext windwardContext) {
    windwardContext.string("hello world! function1!");  // strings
    }

    public void function2(WindwardContext windwardContext) {
    windwardContext.string("hello world! function2!");
    }

    public void function3(WindwardContext windwardContext) {
    windwardContext.json(new User(1, esotericman)); // json
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
## register function and start
``` java
public static void main(String[] args) throws Exception {
    Windward windward = Windward.setup(); // windward engine
    // register static function
    windward.get("/function1", Function::function1); 
    windward.put("/function1", Function::function1);
    windward.post("/function1", Function::function1);
    windward.delete("/function1", Function::function1);
    // register nonstatic function
    windward.get("/function2", new Function()::function2);
    // register router group,same group with same base path
    windward
        .group("/v1")
        .get("/function1", Function::function1)
        .post("/function2", () -> "hi!")
        .delete("/function3", new Function()::function3);
    // start on 8080 default
    windward.run();
}
```
## verify interface
``` shell
curl http://127.0.0.1:8080/function1
```