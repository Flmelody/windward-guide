---
lang: en-US
title: SPA Hosting
description: SPA Hosting
---

::: important
Experience version feature ❤️
:::

# SPA plugin

Register the single page plugin, at which point the default resource plugin behavior is overridden. The plugin returns `index.html` by default.

```java
windward.registerPlugin(
    ResourcePlugin.class, new FixedStaticResourcePlugin(windward.getStaticResourceLocations()));
```

# SPA name

```java
// custom home file
FixedStaticResourcePlugin fixedStaticResourcePlugin = new FixedStaticResourcePlugin(windward.getStaticResourceLocations());
fixedStaticResourcePlugin.appendPages("home.html");
```
