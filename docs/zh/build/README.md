---
lang: zh-CN
title: 打包应用
description: 将应用打包成可执行的Jar
---

将应用打包成 可执行的 Jar 部署，我们需要添加打包配置
::: code-tabs#shell

@tab maven

```xml {10}
<build>
    <plugins>
        <plugin>
            <artifactId>maven-assembly-plugin</artifactId>
            <version>3.6.0</version>
            <configuration>
                <appendAssemblyId>false</appendAssemblyId>
                <archive>
                    <manifest>
                        <mainClass>you.main.class</mainClass> <!--设置为你自己的应用入口main方法类-->
                    </manifest>
                </archive>
                <descriptorRefs>
                    <descriptorRef>jar-with-dependencies</descriptorRef>
                </descriptorRefs>
            </configuration>
            <executions>
                <execution>
                    <id>make-assembly</id>
                    <phase>package</phase>
                    <goals>
                        <goal>single</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

@tab:active gradle(kotlin)

```kotlin {5}
tasks.jar {
    manifest {
        attributes(
            mapOf(
                "Main-Class" to "you.main.class" /*设置为你自己的应用入口main方法类*/
            )
        )
    }
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    from(sourceSets.main.get().output)

    dependsOn(configurations.runtimeClasspath)
    from({
        configurations.runtimeClasspath.get().filter { it.name.endsWith("jar") }.map { zipTree(it) }
    })
}
```

@tab gradle(groovy)

```groovy
jar {
    manifest {
        attributes(
                'Main-Class': 'you.main.class' /*设置为你自己的应用入口main方法类*/
        )
    }
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    from {
        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
    }
}
```

:::
