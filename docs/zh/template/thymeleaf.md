---
lang: zh-CN
title: Thymeleaf 模板
description: Thymeleaf 模板
---

## 添加依赖

::: tabs

@tab:active maven

```xml
<dependency>
    <groupId>org.thymeleaf</groupId>
    <artifactId>thymeleaf</artifactId>
    <version>3.1.2.RELEASE</version>
</dependency>
```

@tab gradle

```groovy
implementation 'org.thymeleaf:thymeleaf:3.1.2.RELEASE'
```

:::

## 模板文件及路径

模板文件默认放置资源文件夹下`templates`目录(该目录可自定义)，默认解析器解析`html`后缀文件（可自定义解析器定制后缀名）。

## 返回文档流

```java
Map<String,Object> model = new HashMap<>()
// ... models data
// return  /template/index.html
windwardContext.html("index.html", model);
```

## 使用布局方言

```xml
 <dependency>
    <groupId>nz.net.ultraq.thymeleaf</groupId>
    <artifactId>thymeleaf-layout-dialect</artifactId>
    <version>3.2.1</version>
</dependency>
```
