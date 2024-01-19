---
lang: zh-CN
title: Groovy Markup 模板
description: Groovy Markup 模板
---

::: warning 提示
当前并未实现静态资源托管，待开发。
:::

## 添加依赖

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

## 模板文件及路径

模板文件默认放置资源文件夹下`templates`目录(该目录可自定义)，默认解析器解析`tpl`后缀文件（可自定义解析器定制后缀名）。

## 返回文档流

```java
Map<String,Object> model = new HashMap<>()
// ... models data
// return  /templates/index.tpl
windwardContext.html("index.tpl", model);
```
