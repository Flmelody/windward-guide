---
lang: en-US
title: Groovy Markup Template
description: Groovy Markup Template
---

::: warning
Static resource hosting is not currently implemented, pending subsequent development.
:::

## Add dependency

::: tabs

@tab:active maven

```xml
<dependency>
    <groupId>org.apache.groovy</groupId>
    <artifactId>groovy-templates</artifactId>
    <version>4.0.14</version>
</dependency>
```

@tab gradle(kotlin)

```kotlin
implementation("org.apache.groovy:groovy-templates:4.0.14")
```

@tab gradle(groovy)

```groovy
implementation 'org.apache.groovy:groovy-templates:4.0.14'
```

:::

## Template file extension and location

Template file should be placed in `templates` folder of resource root, also you can custom your location.
The default template resolver only parse files that end with `tpl` extension, you can custom your owner
template resolver for custom file extension.

## Response document stream

```java
Map<String,Object> model = new HashMap<>()
// ... models data
// return  /templates/index.tpl
windwardContext.html("index.tpl", model);
```
