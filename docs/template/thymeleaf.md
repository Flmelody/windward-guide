---
lang: en-US
title: Thymeleaf Template
description: Thymeleaf Template
---

## add dependency

::: tabs

@tab:active maven

```xml
<dependency>
    <groupId>org.thymeleaf</groupId>
    <artifactId>thymeleaf</artifactId>
    <version>3.1.2.RELEASE</version>
</dependency>
```

@tab gradle(kotlin)

```kotlin
implementation("org.thymeleaf:thymeleaf:3.1.2.RELEASE")
```

@tab gradle(groovy)

```groovy
implementation 'org.thymeleaf:thymeleaf:3.1.2.RELEASE'
```

:::

## template file extension and location

Template file should be placed in `templates` folder of resource root, also you can custom your location.
The default template resolver only parse files that end with `html` extension, you can custom your owner
template resolver for custom file extension.

## response document stream

```java
Map<String,Object> model = new HashMap<>()
// ... models data
// return  /templates/index.html
windwardContext.html("index.html", model);
```

## dialect layout

::: tabs

@tab:active maven

```xml
<dependency>
    <groupId>nz.net.ultraq.thymeleaf</groupId>
    <artifactId>thymeleaf-layout-dialect</artifactId>
    <version>3.2.1</version>
</dependency>
```

@tab gradle(kotlin)

```kotlin
implementation("nz.net.ultraq.thymeleaf:thymeleaf-layout-dialect:3.2.1")
```

@tab gradle(groovy)

```groovy
implementation 'nz.net.ultraq.thymeleaf:thymeleaf-layout-dialect:3.2.1'
```

:::
