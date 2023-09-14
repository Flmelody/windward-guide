---
title: Windward
home: true
heroImage: windward.png
heroText: Windward
tagline: Light Web Function Framework
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
  ['RPS','320781.79👍','71233.25👏','52861.76👏','289702.08👍','139008.08👍🏻','148174.28👍🏻','14998.39❌','182415.85👍🏻'],
  ['Time taken','15s✅','1m10s👌','1m34s👌','17s✅','36s⭐','33s⭐','5m33s❌','27s⭐'],
  ['Avg latency','0.93ms','4.22ms','5.68ms','1.03ms','2.16ms','2.02ms','20.02ms','1.64ms'],
  ['Maximun latency','55.10ms','1.24s💔','123.20ms','1.04s💔','1.36s💔','80.02ms','77.96ms','45.58ms'],
  ['50% latency distribution','285.00us','4.25ms','4.95ms','0.87ms','1.95ms','1.84ms','19.55ms','1.00ms'],
  ['95% latency distribution','3.65ms','7.90ms','7.91ms','2.25ms','3.77ms','3.47ms','21.86ms','5.64ms']
  ]"
/>
