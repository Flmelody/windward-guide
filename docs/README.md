---
title: Windward
home: true
heroImage: windward.png
heroText: Windward
tagline: Light Web Framework For Java
actions:
  - text: Get Started
    link: /guide/dependency.html
    type: primary
  - text: Introduction
    link: /guide/introduction.html
    type: secondary
features:
  - title: Simplicity First👀
    details: Only Function Needed,NO Annotation NO Predefined Setting.
  - title: Netty-Powered💪
    details: Enjoy The Speed Of Netty.
  - title: Light🏂
    details: Interface Is Function.
  - title: Fast🚀🚀🚀
    details: Faster Than Others.
footer: Apache 2.0 Licensed | Copyright © flmelody.org
---

## 🛠 Install

::: important
JDK Minimum Requirements 8
:::

Add Windward library

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

Add JSON library

::: code-tabs#shell

@tab:active maven

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.17.1</version>
</dependency>
```

@tab gradle(kotlin)

```kotlin
implementation("com.fasterxml.jackson.core:jackson-databind:2.17.1")
```

@tab gradle(groovy)

```groovy
implementation 'com.fasterxml.jackson.core:jackson-databind:2.17.1'
```

:::

Add Logging library

::: code-tabs#shell

@tab maven

```xml
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.3.14</version>
</dependency>
```

@tab:active gradle(kotlin)

```kotlin
implementation("ch.qos.logback:logback-classic:1.3.14")
```

@tab gradle(groovy)

```groovy
implementation 'ch.qos.logback:logback-classic:1.3.14'
```

:::
Add `logback.xml`

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
    <!--add your package name-->
    <!--    <logger name="your package" level="info" additivity="false">
            <appender-ref ref="CONSOLE"/>
        </logger>-->

    <root level="error">
        <appender-ref ref="CONSOLE"/>
    </root>

</configuration>
```

## 🚀 Run

```java
Windward.setup()
    // Register router group
    .group("/v1")
    .get(
        "/hello-world",
        simpleWindwardContext -> {
          simpleWindwardContext.writeString("Hello World!");
        })
    // Register dynamic router
    .get(
        "/user/{id}",
        simpleWindwardContext -> {
          Object o = simpleWindwardContext.getPathVariables().get("id");
          simpleWindwardContext.writeString(String.valueOf(o));
        })
    .end()
    // Register webSocket
    .ws(
        "/ws",
        webSocketWindwardContext -> {
          if (!webSocketWindwardContext.isUpgradedContext()) {
            webSocketWindwardContext.writeString("Unsupported protocol");
          }
          switch (webSocketWindwardContext.getWebSocketEvent()) {
            case ON_CONNECT:
              webSocketWindwardContext.writeString("Hello World!");
              break;
            case ON_MESSAGE:
              Object webSocketData =
                  webSocketWindwardContext.getWebSocketData();
              webSocketWindwardContext.writeString("Oh?");
              break;
            default:
          }
        })
    .then()
    // Host static files
    .resource("/**.js", "/**.css", "/**.jpeg", "/**.png")
    .run();
```

## 🛸 Cheers

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
        "label": "RPS",
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
      <span>300 concurrent connections</span>
    </h3>
  </div>
  <div class="vp-feature-item">
    <h3 class="vp-feature-title">
      <span>5 million requests of hello world application</span>
    </h3>
  </div>
  <div class="vp-feature-item">
    <h3 class="vp-feature-title">
      <span>Ubuntu 22.04</span>
    </h3>
  </div>
  <div class="vp-feature-item">
    <h3 class="vp-feature-title">
      <span>32GB of RAM and Intel i7-10070 processor</span>
    </h3>
  </div>
</div>

<StatisticalTable title=""
 :headers="[
  'Benchmark',
  'Windward(Java)',
  'Spring WebMvc(Java)',
  'Spring WebFlux(Java)',
  'Javalin(Kotlin)',
  'Playframework(Scala)',
  'Vertx(Java)',
  'FastAPI(Python)',
  'Gin(Go)']" 
 :rows="[
  ['RPS','320781.79👍','71233.25👏','52861.76👏','289702.08👍','139008.08👍🏻','148174.28👍🏻','14998.39💔','182415.85👍🏻'],
  ['Time taken','15s✅','1m10s👌','1m34s👌','17s✅','36s⭐','33s⭐','5m33s💔','27s⭐'],
  ['Avg latency','0.93ms','4.22ms','5.68ms','1.03ms','2.16ms','2.02ms','20.02ms','1.64ms'],
  ['Maximun latency','55.10ms','1.24s💔','123.20ms','1.04s💔','1.36s💔','80.02ms','77.96ms','45.58ms'],
  ['50% latency distribution','285.00us','4.25ms','4.95ms','0.87ms','1.95ms','1.84ms','19.55ms','1.00ms'],
  ['95% latency distribution','3.65ms','7.90ms','7.91ms','2.25ms','3.77ms','3.47ms','21.86ms','5.64ms']
  ]"
/>
