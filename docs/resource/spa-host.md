---
lang: en-US
title: SPA Hosting
description: SPA Hosting
---

::: important
Experience version feature ❤️
:::

# SPA plugin

Register the single page plugin, at which point the default resource plugin behaviour is overridden. The plugin returns `index.html` by default and tries to return the `index.html` file when the specified route cannot be found.

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
