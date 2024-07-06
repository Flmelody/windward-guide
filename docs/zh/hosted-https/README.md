---
lang: zh-CN
title: Https托管
description: 完全的Https应用
---

一般而言，大多数应用并不直接管理`https`，更多的是统一的中间件处理，但是在互不信任的网络下，应用自身使用`https`还是有必要的

## 证书文件及私钥

将`pem`证书文件及`pkcs8`格式私钥放置到资源文件目录`resources`

```:no-line-numbers {5-6}
├── src → 目录
│    ├── main
│         ├── java
│         └── resources
│               ├── windward-ssl-test.pem
│               ├── windward-ssl-test-pkcs8.key
│               └── ...
└── ...
```

## 启用 https

```java {7}
Windward windward =
    Windward.setup()
        .withSsl(
            SimpleSslPair.builder()
                .certFile("windward-ssl-test.pem")
                .keyFile("windward-ssl-test-pkcs8.key")
                //.forceSsl() // 强制使用https 否则请求失败
                .build());

```

此时应用已经支持`https`！默认情况下`Windward`同时支持`http`和`https`，如果必须要`https`，可以启用强制`https`
