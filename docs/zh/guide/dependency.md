---
lang: zh-CN
title: 必要依赖
description: 必要依赖
---

::: info 提示
Java 版本最低要求 1.8
:::

## 添加依赖

::: tabs

@tab:active maven

```xml
<dependency>
  <groupId>org.flmelody</groupId>
  <artifactId>windward</artifactId>
  <version>1.4.4-RELEASE</version>
</dependency>
```

@tab gradle(kotlin)

```kotlin
implementation("org.flmelody:windward:1.4.4-RELEASE")
```

@tab gradle(groovy)

```groovy
implementation 'org.flmelody:windward:1.4.4-RELEASE'
```

:::

使用 jackson 序列化及反序列化

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
