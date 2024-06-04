---
title: Windward
home: true
heroImage: windward.png
heroText: Windward
tagline: 轻量级Web框架
actions:
  - text: 快速上手 →
    link: /zh/guide/dependency.html
    type: primary
  - text: 项目简介
    link: /zh/guide/introduction.html
    type: secondary
features:
  - title: 简洁至上👀
    details: 只需要函数，无注解，无预定义配置文件
  - title: Netty驱动💪
    details: 享受Netty的速度
  - title: 轻量🏂
    details: 接口即函数
  - title: 快🚀🚀🚀
    details: 相比许多其它框架更快
footer: Apache 2.0 Licensed | Copyright © flmelody.org
---

## 🛠 安装

::: important 重要
JDK 最低要求 8
:::

添加 Windward 依赖

::: code-tabs#shell

@tab:active maven

```xml
<dependency>
  <groupId>org.flmelody</groupId>
  <artifactId>windward</artifactId>
  <version>1.5.3-RELEASE</version>
</dependency>
```

@tab gradle(kotlin)

```kotlin
implementation("org.flmelody:windward:1.5.3-RELEASE")
```

@tab gradle(groovy)

```groovy
implementation 'org.flmelody:windward:1.5.3-RELEASE'
```

:::

添加 JSON 解析

::: code-tabs#shell

@tab maven

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.17.1</version>
</dependency>
```

@tab:active gradle(kotlin)

```kotlin
implementation("com.fasterxml.jackson.core:jackson-databind:2.17.1")
```

@tab gradle(groovy)

```groovy
implementation 'com.fasterxml.jackson.core:jackson-databind:2.17.1'
```

:::

添加 Logback 日志

::: code-tabs#shell

@tab:active maven

```xml
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.3.14</version>
</dependency>
```

@tab gradle(kotlin)

```kotlin
implementation("ch.qos.logback:logback-classic:1.3.14")
```

@tab gradle(groovy)

```groovy
implementation 'ch.qos.logback:logback-classic:1.3.14'
```

:::

添加`logback.xml`

```xml
<configuration>
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <layout class="ch.qos.logback.classic.PatternLayout">
            <Pattern>
                %d{HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n
            </Pattern>
        </layout>
    </appender>
    <statusListener class="ch.qos.logback.core.status.NopStatusListener"/>
    <logger name="org.flmelody" level="info" additivity="false">
        <appender-ref ref="CONSOLE"/>
    </logger>
    <!--添加你自己的包名-->
    <!--    <logger name="your package" level="info" additivity="false">
            <appender-ref ref="CONSOLE"/>
        </logger>-->

    <root level="error">
        <appender-ref ref="CONSOLE"/>
    </root>

</configuration>
```

## 🚀 运行

```java
Windward.setup().get("/", () -> "Hello World!").run();
```

## 🛸 启动成功

```console
  _      ___         __                   __
 | | /| / (_)__  ___/ /    _____ ________/ /
 | |/ |/ / / _ \/ _  / |/|/ / _ `/ __/ _  /
 |__/|__/_/_//_/\_,_/|__,__/\_,_/_/  \_,_/

     Windward Version 1.5.3-RELEASE
23:12:57.369 [main] INFO  o.f.core.netty.NettyHttpServer - Service started successfully, listening on port 8080
```

::: chart RPS Statistics

```json
{
  "type": "bar",
  "data": {
    "labels": [
      "Windward",
      "Spring WebMvc",
      "Spring WebFlux",
      "Javalin",
      "Playframework",
      "Vertx",
      "FastAPI",
      "Gin"
    ],
    "datasets": [
      {
        "label": "每秒请求数",
        "data": [
          320781.79, 71233.25, 52861.76, 289702.08, 139008.08, 148174.28,
          14998.39, 182415.85
        ],
        "backgroundColor": [
          "rgba(62, 175, 124, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(235, 61, 52, 0.2)",
          "rgba(52, 205, 235, 0.2)"
        ],
        "borderColor": [
          "rgba(62, 175, 124, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(235, 61, 52, 1)",
          "rgba(52, 205, 235, 1)"
        ],
        "borderWidth": 1
      }
    ]
  },
  "options": {
    "scales": {
      "y": {
        "beginAtZero": true
      }
    }
  }
}
```

:::

---

<div class="vp-features">
  <div class="vp-feature-item">
    <h3 class="vp-feature-title">
      <span>300并发连接</span>
    </h3>
  </div>
  <div class="vp-feature-item">
    <h3 class="vp-feature-title">
      <span>Hello World! 应用五百万请求</span>
    </h3>
  </div>
  <div class="vp-feature-item">
    <h3 class="vp-feature-title">
      <span>系统Ubuntu 22.04</span>
    </h3>
  </div>
  <div class="vp-feature-item">
    <h3 class="vp-feature-title">
      <span>32G内存以及Intel i7-10070处理器</span>
    </h3>
  </div>
</div>

<StatisticalTable title=""
 :headers="[
  '基准指标',
  'Windward(Java)',
  'Spring WebMvc(Java)',
  'Spring WebFlux(Java)',
  'Javalin(Kotlin)',
  'Playframework(Scala)',
  'Vertx(Java)',
  'FastAPI(Python)',
  'Gin(Go)']" 
 :rows="[
  ['每秒请求数','320781.79👍','71233.25👏','52861.76👏','289702.08👍','139008.08👍🏻','148174.28👍🏻','14998.39💔','182415.85👍🏻'],
  ['总计花费时间','15s✅','1m10s👌','1m34s👌','17s✅','36s⭐','33s⭐','5m33s💔','27s⭐'],
  ['平均延迟','0.93ms','4.22ms','5.68ms','1.03ms','2.16ms','2.02ms','20.02ms','1.64ms'],
  ['最大延迟','55.10ms','1.24s💔','123.20ms','1.04s💔','1.36s💔','80.02ms','77.96ms','45.58ms'],
  ['50%延迟时间','285.00us','4.25ms','4.95ms','0.87ms','1.95ms','1.84ms','19.55ms','1.00ms'],
  ['95%延迟时间','3.65ms','7.90ms','7.91ms','2.25ms','3.77ms','3.47ms','21.86ms','5.64ms']
  ]"
/>
