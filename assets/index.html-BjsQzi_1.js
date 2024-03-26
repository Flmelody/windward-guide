import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c,b as n,e as a,a as p,d}from"./app-BWoNCIuP.js";const i={},l=n("h4",{id:"q-有简单的示例项目吗-🤗",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#q-有简单的示例项目吗-🤗"},[n("span",null,"Q: 有简单的示例项目吗 🤗？")])],-1),r={id:"a-当然-点击前往入门项目",tabindex:"-1"},u={class:"header-anchor",href:"#a-当然-点击前往入门项目"},m={href:"https://github.com/esotericman/hello-windward",target:"_blank",rel:"noopener noreferrer"},k=d(`<h4 id="q-😕-为什么没有打印日志" tabindex="-1"><a class="header-anchor" href="#q-😕-为什么没有打印日志"><span>Q: 😕 为什么没有打印日志？</span></a></h4><h4 id="a-windward没有配置默认日志实现-内置-slf4j-门面模式适配-需要自行添加日志实现" tabindex="-1"><a class="header-anchor" href="#a-windward没有配置默认日志实现-内置-slf4j-门面模式适配-需要自行添加日志实现"><span>A: <code>Windward</code>没有配置默认日志实现，内置 SLF4J 门面模式适配，需要自行添加日志实现</span></a></h4><h4 id="q-windwardcontext是什么-怎么用" tabindex="-1"><a class="header-anchor" href="#q-windwardcontext是什么-怎么用"><span>Q: <code>WindwardContext</code>是什么？怎么用？</span></a></h4><h4 id="a-windwardcontext是路由函数的唯一参数-请求及响应的操作都围绕windwardcontext展开" tabindex="-1"><a class="header-anchor" href="#a-windwardcontext是路由函数的唯一参数-请求及响应的操作都围绕windwardcontext展开"><span>A: <code>WindwardContext</code>是路由函数的唯一参数，请求及响应的操作都围绕<code>WindwardContext</code>展开</span></a></h4><p>目前常用三个</p><p><code>SimpleWindwardContext</code>用于 HTTP 路由</p><p><code>JsonWindwardContext</code> 也用于 HTTP 路由，但是自动序列化返回值，并以<code>JSON</code>形式响应</p><p><code>WebSocketWindwardContext</code>用于 WebSocket 路由</p><h4 id="q-😕-怎么自定义-404-返回值" tabindex="-1"><a class="header-anchor" href="#q-😕-怎么自定义-404-返回值"><span>Q: 😕 怎么自定义 404 返回值？</span></a></h4><h4 id="a-当发生请求-404-windward会抛出handlernotfoundexception异常-可以实现exceptionhandler自定义处理-目前默认实现为defaultnotfoundhandler-最低优先级" tabindex="-1"><a class="header-anchor" href="#a-当发生请求-404-windward会抛出handlernotfoundexception异常-可以实现exceptionhandler自定义处理-目前默认实现为defaultnotfoundhandler-最低优先级"><span>A: 当发生请求 404，<code>Windward</code>会抛出<code>HandlerNotFoundException</code>异常，可以实现<code>ExceptionHandler</code>自定义处理，目前默认实现为<code>DefaultNotFoundHandler</code>(最低优先级)</span></a></h4><h4 id="q-怎么自定义插件行为" tabindex="-1"><a class="header-anchor" href="#q-怎么自定义插件行为"><span>Q: 怎么自定义插件行为？</span></a></h4><h4 id="a-windward-插件是卡槽式的-目前支持的插件如下" tabindex="-1"><a class="header-anchor" href="#a-windward-插件是卡槽式的-目前支持的插件如下"><span>A: <code>Windward</code> 插件是卡槽式的，目前支持的插件如下</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/** Slot for json. */</span>
<span class="token function">JSON</span><span class="token punctuation">(</span><span class="token class-name">JsonPlugin</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token doc-comment comment">/** Slot for groovy template. */</span>
<span class="token function">GROOVY_VIEW</span><span class="token punctuation">(</span><span class="token class-name">GroovyView</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token doc-comment comment">/** Slot for thymeleaf template. */</span>
<span class="token function">THYMELEAF_VIEW</span><span class="token punctuation">(</span><span class="token class-name">ThymeleafView</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token doc-comment comment">/** Slot for freemarker template. */</span>
<span class="token function">FREEMARKER_VIEW</span><span class="token punctuation">(</span><span class="token class-name">FreemarkerView</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token doc-comment comment">/** Slot for websocket. */</span>
<span class="token function">WEBSOCKET</span><span class="token punctuation">(</span><span class="token class-name">ExtensionalWebSocketPlugin</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token doc-comment comment">/** Slot for static resource. */</span>
<span class="token function">RESOURCE</span><span class="token punctuation">(</span><span class="token class-name">ResourcePlugin</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想自定义，可以直接覆盖已经填充的卡槽实现，就像这样</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>windward<span class="token punctuation">.</span><span class="token function">registerPlugin</span><span class="token punctuation">(</span><span class="token class-name">PluginSlot</span><span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyJacksonPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15);function h(w,f){const s=t("ExternalLinkIcon");return o(),c("div",null,[l,n("h4",r,[n("a",u,[n("span",null,[a("A: 当然！点击前往"),n("a",m,[a("入门项目"),p(s)])])])]),k])}const b=e(i,[["render",h],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/zh/faq/","title":"常见问题","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"常见问题","description":"常见问题"},"headers":[],"git":{"createdTime":1703743018000,"updatedTime":1707632584000,"contributors":[{"name":"esotericman","email":"justmysteriousman@163.com","commits":5}]},"readingTime":{"minutes":1.02,"words":307},"filePathRelative":"zh/faq/README.md","localizedDate":"2023年12月28日"}');export{b as comp,_ as data};