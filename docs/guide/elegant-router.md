---
lang: en-US
title: Elegant Router
description: Elegant Router
---

`Windward` routes are implemented as functions, and currently there are several types of route registration functions

# Supplier

In regular writing, we might write it like this, which is obviously too long

```java
Windward.setup()
        .get("/", simpleWindwardContext -> {
            simpleWindwardContext.writeString("Hello World!");
        }).run();
```

For the same effect, we could write this

```java
Windward.setup().get("/", () -> "Hello World!").run();
```

# Consumer

The definition of the routing function we may have is in a separate class file or files and is not put together with the startup of the service, which is where method references come in handy

The interface function looks like this

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

Route registration for static methods can be written like this

```java
Windward.setup()
        .get("/one", UserRouterFunction::selectOne)
        .run();
```

For non-static methods, we use references to instances, but of course, it's better if you integrate DI containers!

```java
UserRouterFunction userRouterFunction = new UserRouterFunction();
Windward.setup()
        .get("/two", userRouterFunction::selectTwo)
        .run();
```

# Function

The current usage of `Function` is not much different from `Consumer` and does not deal with function return values
