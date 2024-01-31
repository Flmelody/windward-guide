---
lang: zh-CN
title: 序列化及反序列化
description: 使用json
---

## 使用 jackson

::: tabs

@tab:active maven

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.2</version>
</dependency>
```

@tab gradle(kotlin)

```kotlin
implementation("com.fasterxml.jackson.core:jackson-databind:2.15.2")
```

@tab gradle(groovy)

```groovy
implementation 'com.fasterxml.jackson.core:jackson-databind:2.15.2'
```

:::

## 使用 gson

::: tabs

@tab:active maven

```xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.10.1</version>
</dependency>
```

@tab gradle(kotlin)

```kotlin
implementation("com.google.code.gson:gson:2.10.1")
```

@tab gradle(groovy)

```groovy
implementation 'com.google.code.gson:gson:2.10.1'
```

:::
