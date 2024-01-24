---
lang: en-US
title: Freemarker Template
description: Freemarker Template
---

::: tip
You should read [Static Hosting](/resource/static-host.html) first.
:::

## Add dependency

::: tabs

@tab:active maven

```xml
<dependency>
    <groupId>org.freemarker</groupId>
    <artifactId>freemarker</artifactId>
    <version>2.3.32</version>
</dependency>
```

@tab gradle(kotlin)

```kotlin
implementation("org.freemarker:freemarker:2.3.32")
```

@tab gradle(groovy)

```groovy
implementation 'org.freemarker:freemarker:2.3.32'
```

:::

## Template file extension and location

Template file should be placed in `templates` folder of resource root, also you can custom your location.
The default template resolver only parse files that end with `ftl` extension, you can custom your owner
template resolver for custom file extension.

## Response document stream

```java
Map<String,Object> model = new HashMap<>()
// ... models data
// return  /templates/index.ftl
windwardContext.html("index.ftl", model);
```
