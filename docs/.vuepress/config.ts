import { hopeTheme } from "vuepress-theme-hope";

export default {
    head: [['link', { rel: 'icon', href: '/windward.png' }]],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Windward',
            description: 'Vue-powered Static Site Generator',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Windward',
            description: 'Vue 驱动的静态网站生成器',
        },
    },
    theme: hopeTheme({
        logo: '/windward.png',
        repo: 'Flmelody/windward-guide',
        darkmode: 'switch',
        plugins: {
            mdEnhance: {
              // 添加选项卡支持
              tabs: true,
            },
            comment: {
                provider: 'Giscus',
                repo: 'Flmelody/comment',
                repoId: 'R_kgDOIOP_VA',
                category: 'Q&A',
                categoryId: 'DIC_kwDOKJoYSM4CYv8X'
                
              },
          },
        locales: {
            '/': {
                sidebar: {
                    '/': [
                        {
                            text: 'Quick Start',
                            collapsible: true,
                            children:
                                [
                                    '/guide/introduction.html',
                                    '/guide/why-windward.html',
                                    '/guide/dependency.html',
                                    '/guide/functions.html',
                                    '/guide/start-server.html',
                                ],
                        },
                        {
                            text: 'Serialize And Deserialize',
                            collapsible: true,
                            children:
                                [
                                    '/json/json.html',
                                ],
                        },
                        {
                            text: 'Router',
                            collapsible: true,
                            children:
                                [
                                    '/router/static-router.html',
                                    '/router/dynamic-router.html'
                                ],
                        },
                        {
                            text: 'Global Filter',
                            collapsible: true,
                            children:
                                [
                                    
                                ],
                        },
                        {
                            text: 'Global Exception',
                            collapsible: true,
                            children:
                                [
                                    '/exception/global-error-handler.html'
                                ],
                        },
                    ],

                }
            },
            '/zh/': {
                sidebar: {
                    '/zh/': [
                        {
                            text: '快速上手',
                            collapsible: true,
                            children:
                                [
                                    '/zh/guide/introduction.html',
                                    '/zh/guide/why-windward.html',
                                    '/zh/guide/dependency.html',
                                    '/zh/guide/functions.html',
                                    '/zh/guide/start-server.html',
                                ],
                        },
                        {
                            text: '序列化',
                            collapsible: true,
                            children:
                                [
                                    '/zh/json/json.html',
                                ],
                        },
                        {
                            text: '路由',
                            collapsible: true,
                            children:
                                [
                                    '/zh/router/static-router.html',
                                    '/zh/router/dynamic-router.html'
                                ],
                        },
                        {
                            text: '全局过滤器',
                            collapsible: true,
                            children:
                                [
                                    
                                ],
                        },
                        {
                            text: '全局异常',
                            collapsible: true,
                            children:
                                [
                                    '/zh/exception/global-error-handler.html'
                                ],
                        },
                    ],
                }
            },
        },
        editLink: false
    }),
}