---
lang: zh-CN
title: 静态资源托管
description: 静态资源托管
---

::: info 提示

静态资源应该放置于 `classpath:/static` 目录或其子目录下，当然你也可以自定义这个目录。像下面一样

```java
// 默认是 `/static`
Windward.setup(8080,"/","/templates","自己定义的目录");
```

:::

# 注册就完了！

```java
windward.resource("/**.js","/**.css","/**.jpeg","/**.png");
```

如果你嫌上面太麻烦，也可以直接这么写

```java
windward.resource("/**");
```

::: important 注意

`windward.resource`注册的路由，静态资源应放置于全局默认的静态资源目录，该目录唯一。如果你有多个不同的静态资源目录，可以尝试以下写法

```java
windward
    .resources("/static", "/static/**.js", "/static/**.png", "/static/**.html")
    .resources("/vue", "/vue/**.html")
    .resources("/home", "/home/**");
```

:::

静态资源托管，本质也是路由策略，所以我们需要格外小心通配符写法，例如`/**`，时刻注意路由的先入先出原则
::: caution 危险

```java
// 这种写法不推荐，会产生混合路由
windward
    .group("/v1")
    .get(
        "/test",
        simpleWindwardContext -> {
            // 应用代码
        })
    .resource("/**"); ❌
// 使用这种写法
// 我们应该总是将静态资源路由和常规接口函数分离开，以免出现意料之外的情况
windward
    .group("/v1")
    .get(
        "/test",
        simpleWindwardContext -> {
            // 应用代码
        })
    .end() //👈👈这里很重要，意味着前一个路由组已经注册完毕
    .resource("/**"); ✅
```

:::
