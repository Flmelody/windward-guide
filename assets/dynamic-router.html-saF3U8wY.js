import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,d as t}from"./app-BWoNCIuP.js";const e={},i=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>路由遵循先入先出原则；如果动态路由先于静态路由注册，最终可能出现同时匹配，但是只有动态路由生效，此规则对所有路由均生效。</p></div><h2 id="注册动态路由" tabindex="-1"><a class="header-anchor" href="#注册动态路由"><span>注册动态路由</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Windward</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>
        <span class="token string">&quot;/get/{name}&quot;</span><span class="token punctuation">,</span>
        simpleWindwardContext <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            simpleWindwardContext<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问路由参数" tabindex="-1"><a class="header-anchor" href="#访问路由参数"><span>访问路由参数</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>simpleWindwardContext<span class="token punctuation">.</span><span class="token function">getPathVariables</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),o=[i];function c(p,l){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","dynamic-router.html.vue"]]),m=JSON.parse('{"path":"/zh/router/dynamic-router.html","title":"动态路由","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"动态路由","description":"动态路由"},"headers":[{"level":2,"title":"注册动态路由","slug":"注册动态路由","link":"#注册动态路由","children":[]},{"level":2,"title":"访问路由参数","slug":"访问路由参数","link":"#访问路由参数","children":[]}],"git":{"createdTime":1692626770000,"updatedTime":1706716897000,"contributors":[{"name":"esotericman","email":"justmysteriousman@163.com","commits":4}]},"readingTime":{"minutes":0.32,"words":96},"filePathRelative":"zh/router/dynamic-router.md","localizedDate":"2023年8月21日"}');export{d as comp,m as data};