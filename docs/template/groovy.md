---
lang: en-US
title: Groovy Markup Template
description: Groovy Markup Template
---

## add dependency

::: tabs

@tab:active maven

```xml
<dependency>
    <groupId>org.apache.groovy</groupId>
    <artifactId>groovy-templates</artifactId>
    <version>4.0.14</version>
</dependency>
```

@tab gradle

```groovy
implementation 'org.apache.groovy:groovy-templates:4.0.14'
```

:::

## template file extension and location

Template file should be placed in `template` folder of resource root, also you can custom your location.
The default template resolver only parse files that end with `tpl` extension, you can custom your owner
template resolver for custom file extension.

## response document stream

```java
Map<String,Object> model = new HashMap<>()
// ... models data
// return  /template/index.tpl
windwardContext.html("index.tpl", model);
```
