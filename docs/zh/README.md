---
title: Windward
home: true
heroImage: windward.png
heroText: Windward
tagline: 轻量级Web函数框架
actions:
  - text: 快速上手 →
    link: /zh/guide/dependency.html
    type: primary
  - text: 项目简介
    link: /zh/guide/introduction.html
    type: secondary
features:
  - title: 简洁至上
    details: 只需要函数，无注解，无预定义配置文件.
  - title: Netty驱动
    details: 享受Netty的速度.
  - title: 轻量
    details: 接口即函数.
footer: Apache 2.0 Licensed | Copyright © flmelody.org
---

<StatisticalTable title="300个并发连接发送5百万请求到Hello World服务(测试在32G的Ubuntu 22.04上进行，处理器为Intel i7-10070)"
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
  ['每秒请求数','320781.79','71233.25','52861.76','289702.08','139008.08','148174.28','14998.39','182415.85'],
  ['总计花费时间','15s','1m10s','1m34s','17s','36s','33s','5m33s','27s'],
  ['平均延迟','0.93ms','4.22ms','5.68ms','1.03ms','2.16ms','2.02ms','20.02ms','1.64ms'],
  ['最大延迟','55.10ms','1.24s','123.20ms','1.04s','1.36s','80.02ms','77.96ms','45.58ms'],
  ['50%延迟时间','285.00us','4.25ms','4.95ms','0.87ms','1.95ms','1.84ms','19.55ms','1.00ms'],
  ['95%延迟时间','3.65ms','7.90ms','7.91ms','2.25ms','3.77ms','3.47ms','21.86ms','5.64ms']
  ]"
/>
