---
lang: en-US
title: Json
description: Use Json
---

## use jackson

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

## use gson

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

## overwrite default json plugin

- implement JsonPlugin
- register plugin with JsonPlugin.class key
