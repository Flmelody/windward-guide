---
lang: zh-CN
title: 序列化及反序列化
description: 使用json
---

## 使用 jackson

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>${jackson-databind.version}</version>
</dependency>
```

## 使用 gson

```xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>${gson.version}</version>
</dependency>
```

## 覆盖默认的 json 插件行为

- 实现 JsonPlugin 接口
- 通过调用 windward 的 registerPlugin 方法覆盖 JsonPlugin.class 的实现
