---
lang: zh-CN
title: 为什么使用Windward
description: 为什么使用Windward
---

## 更快 🚀

<StatisticalTable title="300个并发连接发送5百万请求到Hello World服务"
 :headers="[
  '基准指标',
  'Windward(Java)',
  'Spring WebMvc(Java)',
  'Spring WebFlux(Java)'
  ]" 
 :rows="[
  ['每秒请求数','320781.79','71233.25','52861.76'],
  ['总计花费时间','15s','1m10s','1m34s'],
  ['平均延迟','0.93ms','4.22ms','5.68ms'],
  ['最大延迟','55.10ms','1.24s','123.20ms'],
  ['50%延迟时间','285.00us','4.25ms','4.95ms'],
  ['95%延迟时间','3.65ms','7.90ms','7.91ms']
  ]"
/>

## 更简单 👐
