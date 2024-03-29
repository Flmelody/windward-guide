import { hopeTheme } from "vuepress-theme-hope";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import path from "path";
import { viteBundler } from "@vuepress/bundler-vite";
import jsx from "@vitejs/plugin-vue-jsx";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { defineUserConfig } from "@vuepress/cli";
export default defineUserConfig({
  head: [["link", { rel: "icon", href: "/windward.png" }]],
  locales: {
    "/": {
      lang: "en-US",
      title: "Windward",
      description: "Vue-powered Static Site Generator",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Windward",
      description: "Vue 驱动的静态网站生成器",
    },
  },
  bundler: viteBundler({
    viteOptions: {
      plugins: [jsx()],
    },
  }),
  plugins: [
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, "./components"),
      componentsPatterns: ["*.jsx", ".vue"],
    }),
  ],
  theme: hopeTheme({
    logo: "/windward.png",
    repo: "Flmelody/windward",
    docsRepo: "Flmelody/windward-guide",
    docsDir: "docs",
    darkmode: "switch",
    plugins: {
      mdEnhance: {
        // 添加选项卡支持
        tabs: true,
        codetabs: true,
        // 启用图表
        chart: true,
      },
      comment: {
        provider: "Giscus",
        repo: "Flmelody/comment",
        repoId: "R_kgDOKJoYSA",
        category: "Q&A",
        categoryId: "DIC_kwDOKJoYSM4CYv8X",
      },
      components: {
        // components you want
        components: ["PDF", "Share", "VPBanner", "VPCard", "SiteInfo"],
      },
    },
    iconAssets: "iconfont",
    locales: {
      "/": {
        navbar: [
          {
            text: "Guide",
            link: "/guide/",
            icon: "launch",
          },
          {
            text: "Q&A",
            link: "/faq/",
            icon: "mark",
          },
          {
            text: "Showcase",
            link: "/showcase/",
            icon: "app",
          },
          {
            text: "Communication",
            link: "/communication/",
            icon: "group",
          },
        ],
        sidebar: {
          "/": [
            {
              text: "Quick Start",
              collapsible: true,
              children: [
                "/guide/introduction.html",
                "/guide/why-windward.html",
                "/guide/dependency.html",
                "/guide/quick-start.html",
              ],
            },
            {
              text: "Serialize And Deserialize",
              collapsible: true,
              children: ["/json/json.html"],
            },
            {
              text: "Router",
              collapsible: true,
              children: [
                "/router/static-router.html",
                "/router/dynamic-router.html",
                "/router/elegant-router.html",
              ],
            },
            {
              text: "Global Filter",
              collapsible: true,
              children: ["/filter/filter.html"],
            },
            {
              text: "Global Exception",
              collapsible: true,
              children: ["/exception/global-error-handler.html"],
            },
            {
              text: "Event Listener",
              collapsible: true,
              children: ["/listener/listener.html"],
            },
            {
              text: "Static Resource",
              collapsible: true,
              children: [
                "/resource/static-host.html",
                "/resource/spa-host.html",
              ],
            },
            {
              text: "Template Engine",
              collapsible: true,
              children: [
                "/template/groovy.html",
                "/template/thymeleaf.html",
                "/template/freemarker.html",
              ],
            },
            {
              text: "WebSocket",
              collapsible: true,
              children: [
                "/websocket/basic-usage.html",
                "/websocket/advanced-usage.html",
                "/websocket/mixed-usage.html",
              ],
            },
            {
              text: "Dependency Injection",
              collapsible: true,
              children: [
                "/dependency-injection/burner.html",
                "/dependency-injection/avaje.html",
                "/dependency-injection/dagger.html",
                "/dependency-injection/spring.html",
              ],
            },
          ],
        },
      },
      "/zh/": {
        navbar: [
          {
            text: "指南",
            link: "/zh/guide/",
            icon: "launch",
          },
          {
            text: "常见问题",
            link: "/zh/faq/",
            icon: "mark",
          },
          {
            text: "案例",
            link: "/zh/showcase/",
            icon: "app",
          },
          {
            text: "交流",
            link: "/zh/communication/",
            icon: "group",
          },
        ],
        sidebar: {
          "/zh/": [
            {
              text: "快速上手",
              collapsible: true,
              children: [
                "/zh/guide/introduction.html",
                "/zh/guide/why-windward.html",
                "/zh/guide/dependency.html",
                "/zh/guide/quick-start.html",
              ],
            },
            {
              text: "序列化",
              collapsible: true,
              children: ["/zh/json/json.html"],
            },
            {
              text: "路由",
              collapsible: true,
              children: [
                "/zh/router/static-router.html",
                "/zh/router/dynamic-router.html",
                "/zh/router/elegant-router.html",
              ],
            },
            {
              text: "全局过滤器",
              collapsible: true,
              children: ["/zh/filter/filter.html"],
            },
            {
              text: "事件监听器",
              collapsible: true,
              children: ["/zh/listener/listener.html"],
            },
            {
              text: "全局异常",
              collapsible: true,
              children: ["/zh/exception/global-error-handler.html"],
            },
            {
              text: "静态资源",
              collapsible: true,
              children: [
                "/zh/resource/static-host.html",
                "/zh/resource/spa-host.html",
              ],
            },
            {
              text: "模板引擎",
              collapsible: true,
              children: [
                "/zh/template/groovy.html",
                "/zh/template/thymeleaf.html",
                "/zh/template/freemarker.html",
              ],
            },
            {
              text: "长连接",
              collapsible: true,
              children: [
                "/zh/websocket/basic-usage.html",
                "/zh/websocket/advanced-usage.html",
                "/zh/websocket/mixed-usage.html",
              ],
            },
            {
              text: "依赖注入",
              collapsible: true,
              children: [
                "/zh/dependency-injection/burner.html",
                "/zh/dependency-injection/avaje.html",
                "/zh/dependency-injection/dagger.html",
                "/zh/dependency-injection/spring.html",
              ],
            },
          ],
        },
      },
    },
    editLink: true,
  }),
});
