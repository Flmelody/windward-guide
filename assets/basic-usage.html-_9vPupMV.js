import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-BWoNCIuP.js";const e={},o=t(`<h2 id="注册-websocket" tabindex="-1"><a class="header-anchor" href="#注册-websocket"><span>注册 websocket</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>    <span class="token class-name">Windward</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">ws</span><span class="token punctuation">(</span>
            <span class="token string">&quot;/ws&quot;</span><span class="token punctuation">,</span>
            webSocketWindwardContext <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">switch</span> <span class="token punctuation">(</span>webSocketWindwardContext<span class="token punctuation">.</span><span class="token function">getWebSocketEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token constant">ON_CONNECT</span><span class="token operator">:</span>
                  webSocketWindwardContext<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token constant">ON_MESSAGE</span><span class="token operator">:</span>
                  <span class="token comment">// webSocketFrame or just strings</span>
                  <span class="token class-name">Object</span> webSocketData <span class="token operator">=</span>
                      webSocketWindwardContext<span class="token punctuation">.</span><span class="token function">getWebSocketData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  webSocketWindwardContext<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span><span class="token string">&quot;Oh?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token operator">:</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-兼容响应" tabindex="-1"><a class="header-anchor" href="#http-兼容响应"><span>http 兼容响应</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>webSocketWindwardContext<span class="token punctuation">.</span><span class="token function">isUpgradedContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        webSocketWindwardContext<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span><span class="token string">&quot;Unsupported protocol&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","basic-usage.html.vue"]]),k=JSON.parse('{"path":"/zh/websocket/basic-usage.html","title":"基础用法","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"基础用法","description":"基础用法"},"headers":[{"level":2,"title":"注册 websocket","slug":"注册-websocket","link":"#注册-websocket","children":[]},{"level":2,"title":"http 兼容响应","slug":"http-兼容响应","link":"#http-兼容响应","children":[]}],"git":{"createdTime":1705038450000,"updatedTime":1705038450000,"contributors":[{"name":"esotericman","email":"justmysteriousman@163.com","commits":1}]},"readingTime":{"minutes":0.18,"words":55},"filePathRelative":"zh/websocket/basic-usage.md","localizedDate":"2024年1月12日"}');export{r as comp,k as data};