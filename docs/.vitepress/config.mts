import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ShadowViewer",
  description: "ShadowViewer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '插件开发', link: '/plugin' }
    ],

    sidebar: [
      {
        text: '插件开发', link: '/plugin',
        items: [
          { text: '创建插件项目', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '核心API', base: '/core',
        items: [
          { text: '依赖注入', link: '/di' ,
            items: [
              { text: '压缩/解压服务', link: '/api-examples' },
              { text: '响应器服务', link: '/api-examples' },
              { text: '事件服务', link: '/api-examples' },
              { text: '通知服务', link: '/api-examples' },
            ]

          },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '插件API', base: '/plugin-api',
        items: [
          { text: '本地阅读器', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: "开发规范",
        items:[
          { text: '资源文件与使用路径', link: 'https://plugin-loader.kituin.fun/zh/plugin/msplugin.html' },
          { text: '自定义控件', link: 'https://plugin-loader.kituin.fun/zh/plugin/control.html' },
          { text: '自定义资源字典', link: 'https://plugin-loader.kituin.fun/zh/plugin/resourcedictionary.html' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
