import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-8bab6d59.js";const t={},p=e(`<h2 id="函数定义" tabindex="-1"><a class="header-anchor" href="#函数定义" aria-hidden="true">#</a> 函数定义</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Function</span> <span class="token punctuation">{</span>
    <span class="token comment">// 函数入参必须WindwardContext</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">function1</span><span class="token punctuation">(</span><span class="token class-name">SimpleWindwardContext</span> windwardContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    windwardContext<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span><span class="token string">&quot;hello world! function1!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 直接返回字符串</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">function2</span><span class="token punctuation">(</span><span class="token class-name">SimpleWindwardContext</span> windwardContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    windwardContext<span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span><span class="token string">&quot;hello world! function2!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">function3</span><span class="token punctuation">(</span><span class="token class-name">SimpleWindwardContext</span> windwardContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    windwardContext<span class="token punctuation">.</span><span class="token function">writeJson</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> esotericman<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回json</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> userId<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> userId<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> userName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> userId<span class="token punctuation">,</span> <span class="token class-name">String</span> userName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userId <span class="token operator">=</span> userId<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userName <span class="token operator">=</span> userName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","functions.html.vue"]]);export{r as default};
