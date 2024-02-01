---
lang: zh-CN
title: 优雅路由
description: 优雅的路由
---

`Windward`路由的执行皆为函数，目前路由注册函数有以下几种

# Supplier

按照常规写法，我们可能会这么写，很明显太长了

```java
Windward.setup()
        .get("/", simpleWindwardContext -> {
            simpleWindwardContext.writeString("Hello World!");
        }).run();
```

一样的效果，我们可以这么写

```java
Windward.setup().get("/", () -> "Hello World!").run();
```

# Consumer

路由函数的定义我们可能是单独的一个或者多个类文件，并不和服务的启动放在一起，这时候方法引用就派上用场了

接口函数大概长这样

```java
public class UserRouterFunction {
    public static void selectOne(SimpleWindwardContext simpleWindwardContext) {
        simpleWindwardContext.writeJson("""
                {
                "id" : 1
                }
                """);
    }

    public void selectTwo(SimpleWindwardContext simpleWindwardContext) {
        simpleWindwardContext.writeJson("""
                {
                "id" : 2
                }
                """);
    }
}
```

静态方法的路由注册就可以这么写

```java
Windward.setup()
        .get("/one", UserRouterFunction::selectOne)
        .run();
```

非静态方法，我们使用实例的引用，当然，你集成了 DI 容器更好

```java
UserRouterFunction userRouterFunction = new UserRouterFunction();
Windward.setup()
        .get("/two", userRouterFunction::selectTwo)
        .run();
```

# Function

目前`Function`的用法和`Consumer`区别不大，并没有处理函数返回值
