---
lang: zh-CN
title: 真实项目
icon: splotch
order: 1
category:
  - 案例

project:
  - name: 短链接
    desc: 简单高效的短链服务
    logo: /images/short-url.png
    url: https://case.flmelody.org/pollster
    repo: https://github.com/esotericman/short-url
    preview: /images/short-url.png

  - name: 问小卷
    desc: 精简版问卷系统，不仅可以学会Windward相关知识，还有很多不为人知的秘密
    logo: /images/pollster.png
    url: https://case.flmelody.org/pollster
    repo: https://github.com/esotericman/pollster
    preview: /images/pollster.png

forecast:
  - name: 即时消息
    desc: 构建属于你的即时通讯服务
    logo: /images/netmind.png
    url: https://netmind.flmelody.org
    repo: https://github.com/esotericman/netmind
    preview: /images/netmind.png
---

## 使用 Windward 的现有项目

<SiteInfo
  v-for="item in $frontmatter.project"
  :key="item.link"
  v-bind="item"
/>

## 使用 Windward 的预告项目

<SiteInfo
  v-for="item in $frontmatter.forecast"
  :key="item.link"
  v-bind="item"
/>

## 更多

- 随时随地通过 PR 添加你的项目至此。
