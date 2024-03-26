import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-BWoNCIuP.js";const t={},p=e(`<div class="hint-container info"><p class="hint-container-title">此接上文基础用法</p><p>本处省略基础用法配置注册相关</p></div><h2 id="编写编解码器" tabindex="-1"><a class="header-anchor" href="#编写编解码器"><span>编写编解码器</span></a></h2><p>以下为解码器示例</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@ChannelHandler.Sharable</span>
  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Decoder</span> <span class="token keyword">extends</span> <span class="token class-name">WebSocketDecoder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Object</span> msg<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> out<span class="token punctuation">)</span>
          <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>msg <span class="token keyword">instanceof</span> <span class="token class-name">WebSocketFrame</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// Example of parsing a text frame</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>msg <span class="token keyword">instanceof</span> <span class="token class-name">TextWebSocketFrame</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Decoded my msg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            out<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TextWebSocketFrame</span><span class="token punctuation">)</span> msg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">retain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写消息解析器" tabindex="-1"><a class="header-anchor" href="#编写消息解析器"><span>编写消息解析器</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@ChannelHandler.Sharable</span>
  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Parser</span> <span class="token keyword">extends</span> <span class="token class-name">WebSocketParser</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">channelRead0</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Object</span> msg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received My msg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注册编解码器及消息解析器" tabindex="-1"><a class="header-anchor" href="#注册编解码器及消息解析器"><span>注册编解码器及消息解析器</span></a></h2><div class="hint-container important"><p class="hint-container-title">值得一试</p><p>高级用法适用于有一定能力的技术人员，利用该插件可以使用多个自定义编解码器和消息解析器，实现自定义协议。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">ExtensionalWebSocketPlugin</span> extensionalWebSocketPlugin <span class="token operator">=</span>
        <span class="token keyword">new</span> <span class="token class-name">ExtensionalWebSocketPlugin</span><span class="token punctuation">(</span>
            <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Decoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Parser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
windward<span class="token punctuation">.</span><span class="token function">registerPlugin</span><span class="token punctuation">(</span><span class="token class-name">PluginSlot</span><span class="token punctuation">.</span><span class="token constant">WEBSOCKET</span><span class="token punctuation">,</span> extensionalWebSocketPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,8),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","advanced-usage.html.vue"]]),r=JSON.parse('{"path":"/zh/websocket/advanced-usage.html","title":"高级用法","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"高级用法","description":"高级用法"},"headers":[{"level":2,"title":"编写编解码器","slug":"编写编解码器","link":"#编写编解码器","children":[]},{"level":2,"title":"编写消息解析器","slug":"编写消息解析器","link":"#编写消息解析器","children":[]},{"level":2,"title":"注册编解码器及消息解析器","slug":"注册编解码器及消息解析器","link":"#注册编解码器及消息解析器","children":[]}],"git":{"createdTime":1705038450000,"updatedTime":1711462476000,"contributors":[{"name":"esotericman","email":"justmysteriousman@163.com","commits":5}]},"readingTime":{"minutes":0.68,"words":203},"filePathRelative":"zh/websocket/advanced-usage.md","localizedDate":"2024年1月12日"}');export{k as comp,r as data};