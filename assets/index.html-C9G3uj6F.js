import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as i,b as n,e as a,a as c,d as l}from"./app-BWoNCIuP.js";const p={},r=n("h4",{id:"q-is-there-a-simple-sample-project-🤗",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#q-is-there-a-simple-sample-project-🤗"},[n("span",null,"Q: Is there a simple sample project 🤗 ?")])],-1),d={id:"a-of-course-click-to-go-sample-project",tabindex:"-1"},u={class:"header-anchor",href:"#a-of-course-click-to-go-sample-project"},h={href:"https://github.com/esotericman/hello-windward",target:"_blank",rel:"noopener noreferrer"},m=l(`<h4 id="q-😕-why-aren-t-the-logs-printing" tabindex="-1"><a class="header-anchor" href="#q-😕-why-aren-t-the-logs-printing"><span>Q: 😕 Why aren&#39;t the logs printing?</span></a></h4><h4 id="a-windward-is-not-configured-with-a-default-logging-implementation-built-in-slf4j-facade-mode-adaptation-you-need-to-add-your-own-logging-implementation" tabindex="-1"><a class="header-anchor" href="#a-windward-is-not-configured-with-a-default-logging-implementation-built-in-slf4j-facade-mode-adaptation-you-need-to-add-your-own-logging-implementation"><span>A: <code>Windward</code> is not configured with a default logging implementation, built-in SLF4J facade mode adaptation, you need to add your own logging implementation</span></a></h4><h4 id="q-what-is-windwardcontext-how-does-it-work" tabindex="-1"><a class="header-anchor" href="#q-what-is-windwardcontext-how-does-it-work"><span>Q: What is <code>WindwardContext</code>? How does it work?</span></a></h4><h4 id="a-the-windwardcontext-is-the-only-parameter-of-the-routing-function-and-the-request-and-response-operations-revolve-around-the-windwardcontext" tabindex="-1"><a class="header-anchor" href="#a-the-windwardcontext-is-the-only-parameter-of-the-routing-function-and-the-request-and-response-operations-revolve-around-the-windwardcontext"><span>A: The <code>WindwardContext</code> is the only parameter of the routing function, and the request and response operations revolve around the <code>WindwardContext</code></span></a></h4><p>There are currently two commonly used</p><p><code>SimpleWindwardContext</code> for HTTP routing</p><p><code>JsonWindwardContext</code> is also used for HTTP routing, but automatically serialises the return value and responds as <code>JSON</code></p><p><code>WebSocketWindwardContext</code> for WebSocket routing</p><h4 id="q-😕-how-to-customize-the-404-return-value" tabindex="-1"><a class="header-anchor" href="#q-😕-how-to-customize-the-404-return-value"><span>Q: 😕 How to customize the 404 return value?</span></a></h4><h4 id="a-when-a-request-404-occurs-windward-will-throw-handlernotfoundexception-exception-you-can-implement-exceptionhandler-to-customize-the-handling-currently-the-default-implementation-is-defaultnotfoundhandler-lowest-priority" tabindex="-1"><a class="header-anchor" href="#a-when-a-request-404-occurs-windward-will-throw-handlernotfoundexception-exception-you-can-implement-exceptionhandler-to-customize-the-handling-currently-the-default-implementation-is-defaultnotfoundhandler-lowest-priority"><span>A: When a request 404 occurs, <code>Windward</code> will throw <code>HandlerNotFoundException</code> exception, you can implement <code>ExceptionHandler</code> to customize the handling, currently the default implementation is <code>DefaultNotFoundHandler</code> (lowest priority)</span></a></h4><h4 id="q-how-to-customize-the-plugin-behavior" tabindex="-1"><a class="header-anchor" href="#q-how-to-customize-the-plugin-behavior"><span>Q: How to customize the plugin behavior?</span></a></h4><h4 id="a-the-windward-plug-in-is-card-slot-based-and-currently-supports-the-following-plug-ins" tabindex="-1"><a class="header-anchor" href="#a-the-windward-plug-in-is-card-slot-based-and-currently-supports-the-following-plug-ins"><span>A: The <code>Windward</code> plug-in is card-slot based and currently supports the following plug-ins</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/** Slot for json. */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to customize it, you can just override the already populated slot to achieve it, like this</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>windward<span class="token punctuation">.</span><span class="token function">registerPlugin</span><span class="token punctuation">(</span><span class="token class-name">PluginSlot</span><span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyJacksonPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15);function w(k,f){const e=t("ExternalLinkIcon");return o(),i("div",null,[r,n("h4",d,[n("a",u,[n("span",null,[a("A: Of course! Click to go "),n("a",h,[a("Sample Project"),c(e)])])])]),m])}const b=s(p,[["render",w],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/faq/","title":"FAQ","lang":"en-US","frontmatter":{"lang":"en-US","title":"FAQ","description":"FAQ"},"headers":[],"git":{"createdTime":1703743018000,"updatedTime":1707632584000,"contributors":[{"name":"esotericman","email":"justmysteriousman@163.com","commits":5}]},"readingTime":{"minutes":0.82,"words":245},"filePathRelative":"faq/README.md","localizedDate":"December 28, 2023"}');export{b as comp,y as data};