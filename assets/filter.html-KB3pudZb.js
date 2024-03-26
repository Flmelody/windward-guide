import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,d as e}from"./app-BWoNCIuP.js";const t={},i=e(`<h2 id="about-filter" tabindex="-1"><a class="header-anchor" href="#about-filter"><span>About filter</span></a></h2><p>Every filter is a child of <code>Filter</code>, will be executed before function invoking. Also they can access <code>WindwardContext</code>, so that you can do request logging, request verification and so on.</p><h2 id="logging-filter" tabindex="-1"><a class="header-anchor" href="#logging-filter"><span>Logging filter</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoggingFilter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">LoggingFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">WindwardContext</span> windwardContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>logger<span class="token punctuation">.</span><span class="token function">isDebugEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;Accepted request {}&quot;</span><span class="token punctuation">,</span> windwardContext<span class="token punctuation">.</span><span class="token function">windwardRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="register-filter" tabindex="-1"><a class="header-anchor" href="#register-filter"><span>Register filter</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>windward<span class="token punctuation">.</span><span class="token function">registerFilter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LoggingFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),o=[i];function l(p,c){return a(),s("div",null,o)}const d=n(t,[["render",l],["__file","filter.html.vue"]]),k=JSON.parse('{"path":"/filter/filter.html","title":"Filter","lang":"en-US","frontmatter":{"lang":"en-US","title":"Filter","description":"Filter"},"headers":[{"level":2,"title":"About filter","slug":"about-filter","link":"#about-filter","children":[]},{"level":2,"title":"Logging filter","slug":"logging-filter","link":"#logging-filter","children":[]},{"level":2,"title":"Register filter","slug":"register-filter","link":"#register-filter","children":[]}],"git":{"createdTime":1694995826000,"updatedTime":1705292341000,"contributors":[{"name":"esotericman","email":"justmysteriousman@163.com","commits":2}]},"readingTime":{"minutes":0.24,"words":73},"filePathRelative":"filter/filter.md","localizedDate":"September 18, 2023"}');export{d as comp,k as data};
