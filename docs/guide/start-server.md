---
lang: en-US
title: Run
description: Run
---

## Register function and start

```java
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

## Verify interface

```shell
curl http://127.0.0.1:8080/function1
```
