---
lang: en-US
title: Dependency
description: Dependency
---

## Dependency

::: info
Java version 1.8+
:::

::: tabs

@tab:active maven

```xml
<dependency>
  <groupId>org.flmelody</groupId>
  <artifactId>windward</artifactId>
  <version>1.5.0-RELEASE</version>
</dependency>
```

@tab gradle(kotlin)

```kotlin
implementation("org.flmelody:windward:1.5.0-RELEASE")
```

@tab gradle(groovy)

```groovy
implementation 'org.flmelody:windward:1.5.0-RELEASE'
```

:::

use jackson

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
