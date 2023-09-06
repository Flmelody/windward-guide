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

## 请求统计

| Method | Name       | # Requests | # Fails | Average (ms) | Min (ms) | Max (ms) | Average size (bytes) | RPS    | Failures/s |
| :----- | :--------- | :--------- | :------ | :----------- | :------- | :------- | :------------------- | :----- | :--------- |
| GET    | /test/a    | 1774178    | 0       | 111          | 0        | 574      | 12                   | 8344.5 | 0.0        |
|        | Aggregated | 1774178    | 0       | 111          | 0        | 574      | 12                   | 8344.5 | 0.0        |

## 响应统计

| Method | Name       | 50%ile (ms) | 60%ile (ms) | 70%ile (ms) | 80%ile (ms) | 90%ile (ms) | 95%ile (ms) | 99%ile (ms) | 100%ile (ms) |
| :----- | :--------- | :---------- | :---------- | :---------- | :---------- | :---------- | :---------- | :---------- | :----------- |
| GET    | /test/a    | 110         | 110         | 120         | 130         | 160         | 200         | 270         | 570          |
|        | Aggregated | 110         | 110         | 120         | 130         | 160         | 200         | 270         | 570          |

<div style="text-align: center;">

![Windward](/images/total_requests_per_second.png)
![Windward](</images/response_times_(ms).png>)
![Windward](/images/number_of_users.png)

</div>
