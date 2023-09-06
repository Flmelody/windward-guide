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
  - title: Simplicity First
    details: Only Function Needed,NO Annotation NO Predefined Setting.
  - title: Netty-Powered
    details: Enjoy the speed of Netty.
  - title: Light
    details: Interface Is Function.
footer: Apache 2.0 Licensed | Copyright © flmelody.org
---

## Request Statistics

| Method | Name       | # Requests | # Fails | Average (ms) | Min (ms) | Max (ms) | Average size (bytes) | RPS    | Failures/s |
| :----- | :--------- | :--------- | :------ | :----------- | :------- | :------- | :------------------- | :----- | :--------- |
| GET    | /test/a    | 1774178    | 0       | 111          | 0        | 574      | 12                   | 8344.5 | 0.0        |
|        | Aggregated | 1774178    | 0       | 111          | 0        | 574      | 12                   | 8344.5 | 0.0        |

## Response Time Statistics

| Method | Name       | 50%ile (ms) | 60%ile (ms) | 70%ile (ms) | 80%ile (ms) | 90%ile (ms) | 95%ile (ms) | 99%ile (ms) | 100%ile (ms) |
| :----- | :--------- | :---------- | :---------- | :---------- | :---------- | :---------- | :---------- | :---------- | :----------- |
| GET    | /test/a    | 110         | 110         | 120         | 130         | 160         | 200         | 270         | 570          |
|        | Aggregated | 110         | 110         | 120         | 130         | 160         | 200         | 270         | 570          |

<div style="text-align: center;">

![Windward](/images/total_requests_per_second.png)
![Windward](</images/response_times_(ms).png>)
![Windward](/images/number_of_users.png)

</div>
