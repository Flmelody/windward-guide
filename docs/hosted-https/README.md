---
lang: en-US
title: Hosted Https
description: Use Your Own Https Certificate
---

In general, most applications don't manage `https` directly, it's more of a unified middleware process, but in the case of an untrusted network, it's still necessary for the application to use `https` itself.

## Certificate file and private key

Place the `pem` certificate file and the `pkcs8` format private key into the resource file directory `resources`.

```:no-line-numbers {5-6}
├── src → your folder
│    ├── main
│         ├── java
│         └── resources
│               ├── windward-ssl-test.pem
│               ├── windward-ssl-test-pkcs8.key
│               └── ...
└── ...
```

## Enable https

```java {7}
Windward windward =
    Windward.setup()
        .withSsl(
            SimpleSslPair.builder()
                .certFile("windward-ssl-test.pem")
                .keyFile("windward-ssl-test-pkcs8.key")
                //.forceSsl() // Force https or request fails
                .build());

```

At this point the application already supports `https`! By default `Windward` supports both `http` and `https`, if `https` is necessary, you can enable forced `https`.
