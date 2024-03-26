import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,d as e}from"./app-BWoNCIuP.js";const t={},i=e(`<div class="hint-container important"><p class="hint-container-title">Important</p><p>Experience version feature ❤️ (expected official release in <code>1.5.1-RELEASE</code>)</p></div><h1 id="spa-plugin" tabindex="-1"><a class="header-anchor" href="#spa-plugin"><span>SPA plugin</span></a></h1><p>Register the single page plugin, at which point the default resource plugin behaviour is overridden. The plugin returns <code>index.html</code> by default and tries to return the <code>index.html</code> file when the specified route cannot be found.</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>windward<span class="token punctuation">.</span><span class="token function">registerPlugin</span><span class="token punctuation">(</span>
    <span class="token class-name">ResourcePlugin</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">FixedStaticResourcePlugin</span><span class="token punctuation">(</span>windward<span class="token punctuation">.</span><span class="token function">getStaticResourceLocations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="spa-name" tabindex="-1"><a class="header-anchor" href="#spa-name"><span>SPA name</span></a></h1><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// custom home file</span>
<span class="token class-name">FixedStaticResourcePlugin</span> fixedStaticResourcePlugin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FixedStaticResourcePlugin</span><span class="token punctuation">(</span>windward<span class="token punctuation">.</span><span class="token function">getStaticResourceLocations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fixedStaticResourcePlugin<span class="token punctuation">.</span><span class="token function">appendPages</span><span class="token punctuation">(</span><span class="token string">&quot;home.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[i];function c(p,l){return a(),s("div",null,o)}const d=n(t,[["render",c],["__file","spa-host.html.vue"]]),m=JSON.parse('{"path":"/resource/spa-host.html","title":"SPA Hosting","lang":"en-US","frontmatter":{"lang":"en-US","title":"SPA Hosting","description":"SPA Hosting"},"headers":[],"git":{"createdTime":1706112260000,"updatedTime":1711462476000,"contributors":[{"name":"esotericman","email":"justmysteriousman@163.com","commits":3}]},"readingTime":{"minutes":0.25,"words":76},"filePathRelative":"resource/spa-host.md","localizedDate":"January 24, 2024"}');export{d as comp,m as data};