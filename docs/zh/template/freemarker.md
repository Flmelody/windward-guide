---
lang: zh-CN
title: Freemarker 模板
description: Freemarker 模板
---

::: tip 提示
建议先阅读[静态资源托管](/zh/resource/static-host.html)
:::

## 添加依赖

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

## 模板文件及路径

模板文件默认放置资源文件夹下`templates`目录(该目录可自定义)，默认解析器解析`ftl`后缀文件（可自定义解析器定制后缀名）。

## 返回文档流

```java
Map<String,Object> model = new HashMap<>()
// ... models data
// return  /templates/index.ftl
windwardContext.html("index.ftl", model);
```
