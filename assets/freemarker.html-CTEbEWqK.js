import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as u,b as a,e as n,a as o,w as s,d}from"./app-BWoNCIuP.js";const m={},k={class:"hint-container tip"},g=a("p",{class:"hint-container-title"},"提示",-1),v=a("h2",{id:"添加依赖",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#添加依赖"},[a("span",null,"添加依赖")])],-1),h=a("div",{class:"language-xml line-numbers-mode","data-ext":"xml","data-title":"xml"},[a("pre",{class:"language-xml"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("dependency")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("groupId")]),a("span",{class:"token punctuation"},">")]),n("org.freemarker"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("groupId")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("artifactId")]),a("span",{class:"token punctuation"},">")]),n("freemarker"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("artifactId")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("version")]),a("span",{class:"token punctuation"},">")]),n("2.3.32"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("version")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("dependency")]),a("span",{class:"token punctuation"},">")]),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),_=a("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt","data-title":"kt"},[a("pre",{class:"language-kotlin"},[a("code",null,[a("span",{class:"token function"},"implementation"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string-literal singleline"},[a("span",{class:"token string"},'"org.freemarker:freemarker:2.3.32"')]),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),b=a("div",{class:"language-groovy line-numbers-mode","data-ext":"groovy","data-title":"groovy"},[a("pre",{class:"language-groovy"},[a("code",null,[n("implementation "),a("span",{class:"token string"},"'org.freemarker:freemarker:2.3.32'"),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),f=d(`<h2 id="模板文件及路径" tabindex="-1"><a class="header-anchor" href="#模板文件及路径"><span>模板文件及路径</span></a></h2><p>模板文件默认放置资源文件夹下<code>templates</code>目录(该目录可自定义)，默认解析器解析<code>ftl</code>后缀文件（可自定义解析器定制后缀名）。</p><h2 id="返回文档流" tabindex="-1"><a class="header-anchor" href="#返回文档流"><span>返回文档流</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> model <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// ... models data</span>
<span class="token comment">// return  /templates/index.ftl</span>
windwardContext<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">&quot;index.ftl&quot;</span><span class="token punctuation">,</span> model<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function x(y,w){const c=l("RouteLink"),i=l("Tabs");return r(),u("div",null,[a("div",k,[g,a("p",null,[n("建议先阅读"),o(c,{to:"/zh/resource/static-host.html"},{default:s(()=>[n("静态资源托管")]),_:1})])]),v,o(i,{id:"8",data:[{id:"maven"},{id:"gradle(kotlin)"},{id:"gradle(groovy)"}],active:0},{title0:s(({value:e,isActive:t})=>[n("maven")]),title1:s(({value:e,isActive:t})=>[n("gradle(kotlin)")]),title2:s(({value:e,isActive:t})=>[n("gradle(groovy)")]),tab0:s(({value:e,isActive:t})=>[h]),tab1:s(({value:e,isActive:t})=>[_]),tab2:s(({value:e,isActive:t})=>[b]),_:1},8,["data"]),f])}const z=p(m,[["render",x],["__file","freemarker.html.vue"]]),A=JSON.parse('{"path":"/zh/template/freemarker.html","title":"Freemarker 模板","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Freemarker 模板","description":"Freemarker 模板"},"headers":[{"level":2,"title":"添加依赖","slug":"添加依赖","link":"#添加依赖","children":[]},{"level":2,"title":"模板文件及路径","slug":"模板文件及路径","link":"#模板文件及路径","children":[]},{"level":2,"title":"返回文档流","slug":"返回文档流","link":"#返回文档流","children":[]}],"git":{"createdTime":1703074999000,"updatedTime":1706112260000,"contributors":[{"name":"esotericman","email":"justmysteriousman@163.com","commits":3}]},"readingTime":{"minutes":0.47,"words":140},"filePathRelative":"zh/template/freemarker.md","localizedDate":"2023年12月20日"}');export{z as comp,A as data};
