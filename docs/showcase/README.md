---
lang: en-US
title: Real Projects
icon: splotch
order: 1
category:
  - Showcase

project:
  - name: Short Url
    desc: Build your short url service
    logo: /images/short-url.png
    url: https://case.flmelody.org/short-url
    repo: https://github.com/esotericman/short-url
    preview: /images/short-url.png

  - name: Questionnaire
    desc: Lite version of the questionnaire system, from which you can not only learn Windward-related knowledge, but also a lot of unknown secrets
    logo: /images/pollster.png
    url: https://case.flmelody.org/pollster
    repo: https://github.com/esotericman/pollster
    preview: /images/pollster.png

forecast:
  - name: Instant Message
    desc: Build your instant message service
    logo: /images/netmind.png
    url: https://netmind.flmelody.org
    repo: https://github.com/esotericman/netmind
    preview: /images/netmind.png
---

## Existing projects using Windward

<SiteInfo
  v-for="item in $frontmatter.project"
  :key="item.link"
  v-bind="item"
/>

## Using Windward's preview program

<SiteInfo
  v-for="item in $frontmatter.forecast"
  :key="item.link"
  v-bind="item"
/>

## More

- Add your projects to this via PR anytime, anywhere.
