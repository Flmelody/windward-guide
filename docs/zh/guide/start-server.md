---
lang: zh-CN
title: 注册并启动
description: 注册并启动
---

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
