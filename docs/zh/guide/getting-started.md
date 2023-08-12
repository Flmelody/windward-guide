---
lang: zh-CN
title: 快速上手
description: Windward快速上手
---

::: warning 注意
Windward 仍处于开发阶段，但是已基本可用
:::

## 依赖环境

- Jdk1.8+

## 添加 Maven 依赖

```xml
<dependency>
  <groupId>org.flmelody</groupId>
  <artifactId>windward</artifactId>
  <version>1.4.2-RELEASE</version>
</dependency>
```

使用 jackson 作为序列化反序列化库

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>${jackson-databind.version}</version>
</dependency>
```

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

## 注册并启动

```java
public static void main(String[] args) throws Exception {
    Windward windward = Windward.setup(); // windward引擎
    // 直接注册静态方法
    windward.get("/function1", Function::function1);
    windward.put("/function1", Function::function1);
    windward.post("/function1", Function::function1);
    windward.delete("/function1", Function::function1);
    // 注册非静态方法
    windward.get("/function2", new Function()::function2);
    // 注册路由组 同组默认同一个根路径v1
    windward
        .group("/v1")
        .get("/function1", Function::function1)
        .post("/function2", () -> "hi!")
        .delete("/function3", new Function()::function3);
    // 启动服务器 默认8080端口
    windward.run();
}
```

## 验证服务

```shell
curl http://127.0.0.1:8080/function1
```
