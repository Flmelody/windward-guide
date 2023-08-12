import { defaultTheme } from 'vuepress';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';

export default {
    head: [['link', { rel: 'icon', href: '/windward.png' }]],
    plugins: [
        backToTopPlugin(),
    ],
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
    theme: defaultTheme({
        logo: '/windward.png',
        repo: 'Flmelody/windward-guide',
        locales: {
            '/': {
                selectLanguageName: 'English',
                navbar: [
                    {
                        text: 'Guide',
                        link: '/guide/introduction.html',
                    }
                ],
                sidebar: {
                    '/guide/': [
                        {
                            text: 'Guide',
                            children:
                                [
                                    '/guide/introduction.html',
                                    '/guide/getting-started.html',
                                    '/guide/json.html',
                                    '/guide/static-router.html',
                                    '/guide/dynamic-router.html',
                                    '/guide/global-error-handler.html'
                                ],
                        },
                    ],

                }
            },
            '/zh/': {
                selectLanguageText: "选择语言",
                selectLanguageName: '简体中文',
                navbar: [
                    {
                        text: '指南',
                        link: '/zh/guide/introduction.html',
                    }
                ],
                sidebar: {
                    '/zh/guide/': [
                        {
                            text: '指南',
                            children:
                                [
                                    '/zh/guide/introduction.html',
                                    '/zh/guide/getting-started.html',
                                    '/zh/guide/json.html',
                                    '/zh/guide/static-router.html',
                                    '/zh/guide/dynamic-router.html',
                                    '/zh/guide/global-error-handler.html'
                                ],
                        },
                    ],
                }
            },
        },
        editLink: false
    }),
}