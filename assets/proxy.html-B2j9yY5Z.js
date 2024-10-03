import{_ as e,c as o,o as t,a}from"./app-CEP_VtPX.js";const c={},r=a('<h1 id="代理设置" tabindex="-1"><a class="header-anchor" href="#代理设置"><span>代理设置</span></a></h1><h2 id="telegram-desktop" tabindex="-1"><a class="header-anchor" href="#telegram-desktop"><span>Telegram Desktop</span></a></h2><p>Telegram Desktop默认并没有勾选&quot;使用系统代理&quot;， 所以很多人觉得需要开全局才能用， 其实不然， 可以手动勾选&quot;使用系统代理&quot;或使用自定义代理。</p><p><strong>步骤：</strong></p><ul><li><p>未登录账号：界面左下角按钮</p></li><li><p>已登录账号：Telegram Desktop客户端-&gt;左上角三短线-&gt;<code>设置</code>-&gt;<code>高级</code>-&gt;<code>网络和代理</code>-&gt;<code>代理类型-</code>&gt;勾选<code>使用系统代理</code>或<code>使用自定义代理</code></p></li></ul><p>使用自定义代理添加方法： <code>添加代理</code>（Add proxy）-&gt;<code>SOCKS5/HTTP</code>-&gt;服务器： <code>127.0.0.1</code>， 端口：端口需查看你的代理软件，不需要填写用户名和密码。</p><details class="hint-container details"><summary>操作演示</summary><figure><img src="https://s2.loli.net/2024/01/27/hDALxbZoXgUQWEr.jpg" alt="proxy.jpg" tabindex="0" loading="lazy"><figcaption>proxy.jpg</figcaption></figure></details><p><strong>代理软件查看本地端口的方法：</strong></p><ul><li>Clash for Windows：主界面-&gt;<code>General</code>-&gt;<code>Port</code>（默认是<code>7890</code>）</li><li><a href="http://Clash.NET" target="_blank" rel="noopener noreferrer">Clash.NET</a>：主界面-&gt;右侧-&gt;<code>混合端口</code>（Mixe-Port）</li><li>SS/SSD-&gt;右键状态栏SS/SSD图标-&gt;<code>服务器</code>-&gt;<code>编辑服务器</code>-&gt;<code>本地端口</code>（默认是<code>1080</code>）</li><li>SSR-&gt;右键状态栏SSR图标-&gt;<code>选项设置</code>-&gt;<code>本地端口</code>（默认是 <code>1080</code>）</li><li>V2RayN：主界面-&gt;左下角-&gt;<code>SOCKS5</code>（或者<code>参数设置</code>-&gt;<code>本地监听端口</code>）（默认是<code>10808</code>）</li><li>Trojan-Qt5：打开Trojan-Qt5主界面-&gt;双击一个节点-&gt;<code>本地端口</code>（默认是<code>1080</code>）</li><li>Netch：打开Netch主界面-&gt;<code>设置</code>-&gt;<code>本地端口SOCKS5</code>（默认是<code>2801</code>）</li></ul><p>有可能你或你用的规则修改了代理软件的本地SOCKS5/HTTP端口， 具体以你的代理客户端为准。</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>不能乱设置乱猜测，乱设置可能导致Telegram Desktop连不上网络。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Windows，macOS，Linux系统的电脑都可以使用Telegram Desktop版本客户端。（macOS 上 Mac App Store 中的&quot;Telegram Desktop&quot;已更名为&quot;Telegram Lite&quot; ）</p></div><h2 id="telegram-macos" tabindex="-1"><a class="header-anchor" href="#telegram-macos"><span>Telegram macOS</span></a></h2><p>Telegram macOS客户端不遵从系统代理，所以需要设置自定义代理，也可以用Surge/ClashX Pro开启&quot;增强模式&quot;</p><p>（Surge/ClashX Pro 的&quot;增强模式&quot;就是针对这类不遵从系统代理的软件做的功能）</p><p><strong>自定义代理设置步骤：</strong></p><ul><li><p>未登录账号：界面右上角按钮-&gt;<code>Use Proxy</code></p></li><li><p>已登录账号：Telegram macOS客户端-&gt;<code>设置</code>-&gt;<code>数据</code>-&gt;<code>使用代理</code></p></li></ul><p>添加代理-&gt;SOCKS5/HTTP-&gt;服务器（Server）： <code>127.0.0.1</code>， 端口（Port）：端口需查看你的代理软件，不需要填写用户名和密码。</p><p><strong>代理软件查看本地端口的方法：</strong></p><ul><li>Surge：点击状态栏Surge图标-&gt;显示主界面-&gt;<code>SOCKS5</code>（默认是<code>6153</code>）</li><li>Clash for Windows：主界面-&gt;<code>General</code>-&gt;<code>Port</code>（默认是<code>7890</code>）</li><li>ClashX：点击状态栏ClashX图标-&gt;<code>帮助</code>-&gt;<code>端口</code>-&gt;<code>Socks Port</code>（默认是<code>7891</code>）</li><li>ShadowsocksX：点击状态栏ShadowsocksX图标-&gt;<code>高级设置</code>-&gt;<code>本地Socks5监听端口</code>（默认是<code>1086</code>）</li><li>V2RayX：点击状态栏V2RayX图标-&gt;<code>Configure</code>-&gt;<code>Local Socks5 Port</code>（默认是<code>1081</code>）</li><li>V2rayU：点击状态栏V2rayU图标-&gt;<code>偏好设置</code>-&gt;<code>Advance</code>-&gt;<code>本机 Sock 监听端口</code>（默认是<code>1080</code>）</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>设置完成保存后，记得重启Telegram macOS客户端！</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>有可能你或你用的规则修改了代理软件的本地SOCKS5/HTTP端口，具体以你的代理客户端为准。</p></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>不能乱设置乱猜测，乱设置可能导致Telegram macOS连不上网络。</p></div><h2 id="telegram-ios-android" tabindex="-1"><a class="header-anchor" href="#telegram-ios-android"><span>Telegram iOS/Android</span></a></h2><p>iOS/Android设备上开启代理软件即可，不需要单独在Telegram中设置代理。</p><p>Telegram iOS端是IP直连访问服务器的，所以需要代理软件做单独的规则处理才行；</p><p>iOS上有些代理软件并没有针对性的对此做处理，所以即使开启了这类代理软件，Telegram iOS 也会提示无网络链接，比如&quot;Wingy&quot;， <a href="https://congcong0806.github.io/2018/04/20/SS" target="_blank" rel="noopener noreferrer">点击查看代理软件</a> 。</p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><p>也可以自建SOCKS5/HTTP/MTProto代理，只用于Telegram 上使用，网络也有很多公开的SOCKS5/HTTP/MTProto代理，个人不建议使用这种方式，依然建议用代理软件。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>不建议使用某些内置代理的Telegram第三方客户端软件，可能存在安全隐患。</p></div>',30),i=[r];function d(l,n){return t(),o("div",null,i)}const p=e(c,[["render",d],["__file","proxy.html.vue"]]),s=JSON.parse('{"path":"/proxy.html","title":"代理设置","lang":"zh-CN","frontmatter":{"title":"代理设置","description":"Telegram连接失败？本文提供了Telegram代理设置的有关说明，向您介绍如何修改Telegram代理设置，添加内置代理。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。","head":[["meta",{"name":"keywords","content":"Telegram代理设置,Telegram代理,Telegram内置代理,Telegram自定义代理,TG代理设置,TG代理,TG内置代理,TG自定义代理,电报代理设置,电报代理,电报内置代理,电报自定义代理,Telegram设置,TGwiki,Telegram知识库"}],["meta",{"property":"og:url","content":"https://tgnav.github.io/tgwiki/proxy.html"}],["meta",{"property":"og:site_name","content":"TGwiki - Telegram知识库"}],["meta",{"property":"og:title","content":"代理设置"}],["meta",{"property":"og:description","content":"Telegram连接失败？本文提供了Telegram代理设置的有关说明，向您介绍如何修改Telegram代理设置，添加内置代理。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s2.loli.net/2024/01/27/hDALxbZoXgUQWEr.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T07:44:30.000Z"}],["meta",{"property":"article:author","content":"TGwiki"}],["meta",{"property":"article:modified_time","content":"2024-08-07T07:44:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代理设置\\",\\"image\\":[\\"https://s2.loli.net/2024/01/27/hDALxbZoXgUQWEr.jpg\\"],\\"dateModified\\":\\"2024-08-07T07:44:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TGwiki\\"}]}"]]},"headers":[{"level":2,"title":"Telegram Desktop","slug":"telegram-desktop","link":"#telegram-desktop","children":[]},{"level":2,"title":"Telegram macOS","slug":"telegram-macos","link":"#telegram-macos","children":[]},{"level":2,"title":"Telegram iOS/Android","slug":"telegram-ios-android","link":"#telegram-ios-android","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1692159232000,"updatedTime":1723016670000,"contributors":[{"name":"Anda Brown","email":"103917160+AndaBrown@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.63,"words":1088},"filePathRelative":"proxy.md","localizedDate":"2023年8月16日"}');export{p as comp,s as data};
