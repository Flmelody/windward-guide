---
lang: en-US
title: Build Application
description: Build An Uber Jar
---

To package the application into an executable Jar deployment, we need to add the packaging configuration.
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
                        <mainClass>you.main.class</mainClass> <!--Set to your own application entry main method class-->
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
                "Main-Class" to "you.main.class" /*Set to your own application entry main method class*/
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
                'Main-Class': 'you.main.class' /*Set to your own application entry main method class*/
        )
    }
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    from {
        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
    }
}
```

:::
