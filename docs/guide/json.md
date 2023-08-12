---
lang: en-US
title: Json
description: Use Json
---

## use jackson

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>${jackson-databind.version}</version>
</dependency>
```

## use gson

```xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>${gson.version}</version>
</dependency>
```

## overwrite default json plugin

- implement JsonPlugin
- register plugin with JsonPlugin.class key
