import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as u,b as a,e as n,a as l,w as s,d}from"./app-BWoNCIuP.js";const m={},k={class:"hint-container tip"},g=a("p",{class:"hint-container-title"},"提示",-1),v=a("h2",{id:"添加依赖",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#添加依赖"},[a("span",null,"添加依赖")])],-1),h=a("div",{class:"language-xml line-numbers-mode","data-ext":"xml","data-title":"xml"},[a("pre",{class:"language-xml"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("dependency")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("groupId")]),a("span",{class:"token punctuation"},">")]),n("org.apache.groovy"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("groupId")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("artifactId")]),a("span",{class:"token punctuation"},">")]),n("groovy-templates"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("artifactId")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("version")]),a("span",{class:"token punctuation"},">")]),n("4.0.14"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("version")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("dependency")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),_=a("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt","data-title":"kt"},[a("pre",{class:"language-kotlin"},[a("code",null,[a("span",{class:"token function"},"implementation"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string-literal singleline"},[a("span",{class:"token string"},'"org.apache.groovy:groovy-templates:4.0.14"')]),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),b=a("div",{class:"language-groovy line-numbers-mode","data-ext":"groovy","data-title":"groovy"},[a("pre",{class:"language-groovy"},[a("code",null,[n("implementation "),a("span",{class:"token string"},"'org.apache.groovy:groovy-templates:4.0.14'"),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),y=d(`<h2 id="模板文件及路径" tabindex="-1"><a class="header-anchor" href="#模板文件及路径"><span>模板文件及路径</span></a></h2><p>模板文件默认放置资源文件夹下<code>templates</code>目录(该目录可自定义)，默认解析器解析<code>tpl</code>后缀文件（可自定义解析器定制后缀名）。</p><h2 id="返回文档流" tabindex="-1"><a class="header-anchor" href="#返回文档流"><span>返回文档流</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> model <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// ... models data</span>
<span class="token comment">// return  /templates/index.tpl</span>
windwardContext<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">&quot;index.tpl&quot;</span><span class="token punctuation">,</span> model<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function x(f,w){const c=o("RouteLink"),i=o("Tabs");return r(),u("div",null,[a("div",k,[g,a("p",null,[n("建议先阅读"),l(c,{to:"/zh/resource/static-host.html"},{default:s(()=>[n("静态资源托管")]),_:1})])]),v,l(i,{id:"8",data:[{id:"maven"},{id:"gradle(kotlin)"},{id:"gradle(groovy)"}],active:0},{title0:s(({value:t,isActive:e})=>[n("maven")]),title1:s(({value:t,isActive:e})=>[n("gradle(kotlin)")]),title2:s(({value:t,isActive:e})=>[n("gradle(groovy)")]),tab0:s(({value:t,isActive:e})=>[h]),tab1:s(({value:t,isActive:e})=>[_]),tab2:s(({value:t,isActive:e})=>[b]),_:1},8,["data"]),y])}const z=p(m,[["render",x],["__file","groovy.html.vue"]]),A=JSON.parse('{"path":"/zh/template/groovy.html","title":"Groovy Markup 模板","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Groovy Markup 模板","description":"Groovy Markup 模板"},"headers":[{"level":2,"title":"添加依赖","slug":"添加依赖","link":"#添加依赖","children":[]},{"level":2,"title":"模板文件及路径","slug":"模板文件及路径","link":"#模板文件及路径","children":[]},{"level":2,"title":"返回文档流","slug":"返回文档流","link":"#返回文档流","children":[]}],"git":{"createdTime":1694100503000,"updatedTime":1706112260000,"contributors":[{"name":"esotericman","email":"justmysteriousman@163.com","commits":6}]},"readingTime":{"minutes":0.48,"words":145},"filePathRelative":"zh/template/groovy.md","localizedDate":"2023年9月7日"}');export{z as comp,A as data};
