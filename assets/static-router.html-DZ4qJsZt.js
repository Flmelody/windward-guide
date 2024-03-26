import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-BWoNCIuP.js";const e={},p=t(`<h2 id="get-方法" tabindex="-1"><a class="header-anchor" href="#get-方法"><span>get 方法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Windward</span> windward <span class="token operator">=</span>
    <span class="token class-name">Windward</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>
            <span class="token string">&quot;/get&quot;</span><span class="token punctuation">,</span>
            simpleWindwardContext <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                simpleWindwardContext<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="post-方法" tabindex="-1"><a class="header-anchor" href="#post-方法"><span>post 方法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Windward</span> windward <span class="token operator">=</span>
    <span class="token class-name">Windward</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>
            <span class="token string">&quot;/post&quot;</span><span class="token punctuation">,</span>
            simpleWindwardContext <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                simpleWindwardContext<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="put-方法" tabindex="-1"><a class="header-anchor" href="#put-方法"><span>put 方法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Windward</span> windward <span class="token operator">=</span>
    <span class="token class-name">Windward</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>
            <span class="token string">&quot;/put&quot;</span><span class="token punctuation">,</span>
            simpleWindwardContext <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                simpleWindwardContext<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-方法" tabindex="-1"><a class="header-anchor" href="#delete-方法"><span>delete 方法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Windward</span> windward <span class="token operator">=</span>
    <span class="token class-name">Windward</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>
            <span class="token string">&quot;/delete&quot;</span><span class="token punctuation">,</span>
            simpleWindwardContext <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                simpleWindwardContext<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">提示</p><p>当然你也可以像下面一样直接使用通用方法 <code>http</code>。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Windward</span> windward <span class="token operator">=</span>
    <span class="token class-name">Windward</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">http</span><span class="token punctuation">(</span>
            <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/get&quot;</span><span class="token punctuation">,</span>
            simpleWindwardContext <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                simpleWindwardContext<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,9),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(e,[["render",o],["__file","static-router.html.vue"]]),k=JSON.parse('{"path":"/zh/router/static-router.html","title":"静态路由","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"静态路由","description":"静态路由"},"headers":[{"level":2,"title":"get 方法","slug":"get-方法","link":"#get-方法","children":[]},{"level":2,"title":"post 方法","slug":"post-方法","link":"#post-方法","children":[]},{"level":2,"title":"put 方法","slug":"put-方法","link":"#put-方法","children":[]},{"level":2,"title":"delete 方法","slug":"delete-方法","link":"#delete-方法","children":[]}],"git":{"createdTime":1692626770000,"updatedTime":1706458607000,"contributors":[{"name":"esotericman","email":"justmysteriousman@163.com","commits":2}]},"readingTime":{"minutes":0.33,"words":99},"filePathRelative":"zh/router/static-router.md","localizedDate":"2023年8月21日"}');export{r as comp,k as data};
