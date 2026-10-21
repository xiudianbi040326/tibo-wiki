(() => {
  'use strict';
  const {categories,entries,settings}=window.TIBO;
  const main=document.getElementById('main');
  const input=document.getElementById('search-input');
  const byId=new Map(entries.map(x=>[x.id,x]));
  const byCategory=new Map(categories.map(x=>[x.id,x]));
  const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const image=(icon,alt='',lazy=true)=>'<img src="assets/'+escape(icon)+'.webp" alt="'+escape(alt)+'"'+(lazy?' loading="lazy"':'')+' decoding="async">';
  const table=(headers,rows)=>'<div class="table-wrap"><table><thead><tr>'+headers.map(x=>'<th scope="col">'+escape(x)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(x=>'<td>'+escape(x)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
  const crumb=(label,category)=>'<nav class="breadcrumb" aria-label="当前位置"><a href="#home">首页</a><span aria-hidden="true">/</span>'+(category?'<a href="#category/'+category.id+'">'+escape(category.name)+'</a><span aria-hidden="true">/</span>':'')+'<span aria-current="page">'+escape(label)+'</span></nav>';
  const card=x=>'<a class="item-card" href="#item/'+x.id+'">'+image(x.icon)+'<div><h2>'+escape(x.name)+'</h2><p>'+escape(x.summary)+'</p></div></a>';
  const grid=list=>'<div class="item-grid">'+list.map(card).join('')+'</div>';
  function home(){
    return '<section class="hero" aria-labelledby="home-title"><img class="hero-image" src="封面.png" alt="缇比手持蔷薇独角笛，漫步于蔷薇树荫下" fetchpriority="high" decoding="async"><div class="hero-copy"><p class="eyebrow">TIBO · A WITCH AND HER TREE</p><h1 id="home-title">听一曲，<br>在树荫下歇歇。</h1><p>缇比，一位喜欢和平的魔女。<br>一支笛子，一颗种子，一片慢慢长成的家园。</p><a class="hero-cta" href="#item/character">认识缇比 <span aria-hidden="true">→</span></a></div></section><section aria-labelledby="browse-title"><div class="section-heading"><h2 id="browse-title">翻开图鉴</h2><p>找一件物品，或一个小小心愿。</p></div><div class="category-grid">'+categories.map(c=>'<a class="category-tile" href="#category/'+c.id+'">'+image(c.icon)+'<div><h3>'+escape(c.name)+'</h3><p>'+escape(c.description)+'</p></div><span class="arrow" aria-hidden="true">↗</span></a>').join('')+'</div></section><aside class="home-note">'+image('seed')+'<p>第一次来到这里？从<a href="#item/flute">独角笛</a>与<a href="#item/seed">神树种子</a>开始。<br>图鉴按默认模组设置介绍，其他玩法可在<a href="#settings">模组选项</a>中查看。</p></aside>';
  }
  function block(b){
    const heading=b.title?'<h2>'+escape(b.title)+'</h2>':'';
    if(b.type==='bullets')return heading+'<ul>'+b.rows.map(x=>'<li>'+escape(x)+'</li>').join('')+'</ul>';
    if(b.type==='table')return heading+table(b.headers,b.rows);
    return heading+'<p'+(b.type==='note'?' class="article-note"':'')+'>'+escape(b.text)+'</p>';
  }
  function entry(x){
    const c=byCategory.get(x.category);
    const facts=x.facts||[['材料',x.recipe],['科技',x.tech],['获取',x.source]].filter(row=>row[1]);
    const related=(x.related||[]).map(id=>byId.get(id)).filter(Boolean);
    return crumb(x.name,c)+'<div class="entry-layout"><aside class="entry-aside"><div class="entry-art '+(x.id==='character'?'character':'')+'">'+image(x.art||x.icon,x.name,false)+'</div><div><p class="label">图鉴分类</p><a class="category-label" href="#category/'+c.id+'">'+escape(c.name)+' ↗</a></div></aside><article class="entry-body"><header class="entry-heading"><p class="eyebrow">TIBO ENCYCLOPEDIA</p><h1>'+escape(x.name)+'</h1><p class="summary">'+escape(x.summary)+'</p></header>'+(facts.length?'<dl class="facts">'+facts.map(([key,value])=>'<dt>'+escape(key)+'</dt><dd>'+escape(value)+'</dd>').join('')+'</dl>':'')+x.blocks.map(block).join('')+(related.length?'<nav class="related" aria-label="相关词条"><h2>还可以看看</h2><div class="related-list">'+related.map(r=>'<a href="#item/'+r.id+'">'+image(r.icon)+'<span>'+escape(r.name)+'</span></a>').join('')+'</div></nav>':'')+'</article></div>';
  }
  function settingsPage(){
    return crumb('模组选项')+'<article class="settings-page"><header class="page-heading"><p class="eyebrow">MAKE YOURSELF AT HOME</p><h1>模组选项</h1><p>按自己的习惯，为这段旅途换一点味道。</p></header>'+table(['选项','默认','另一种选择'],settings)+'<p>其余图鉴按默认选项介绍。</p></article>';
  }
  const index=entries.map(x=>({entry:x,text:JSON.stringify(x).toLocaleLowerCase()}));
  function searchPage(query){
    const words=query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const found=words.length?index.filter(x=>words.every(word=>x.text.includes(word))).map(x=>x.entry):entries;
    return crumb('搜索')+'<header class="page-heading"><p class="eyebrow">FIND A LITTLE SOMETHING</p><h1>'+(query?'寻找「'+escape(query)+'」':'全部图鉴')+'</h1></header><p class="search-count" role="status">'+found.length+' 个词条</p>'+(found.length?grid(found):'<div class="empty-state"><h2>这一页还没有写到</h2><p>试试物品名称、材料，或换一个更短的词。</p><a href="#home">回到图鉴首页 →</a></div>');
  }
  const scrollPositions=new Map();
  let lastHash=null;
  let searchTimer;
  let typing=false;
  function route(){
    const hash=location.hash.slice(1)||'home';
    let title='模组图鉴',active='',html='';
    if(hash==='home')html=home();
    else if(hash==='settings'){html=settingsPage();title='模组选项';}
    else if(hash.startsWith('search/')){
      let query='';try{query=decodeURIComponent(hash.slice(7));}catch{}
      html=searchPage(query);title='搜索';if(input.value!==query)input.value=query;
    }else if(hash.startsWith('category/')){
      const c=byCategory.get(hash.slice(9));
      if(c){active=c.id;title=c.name;html=crumb(c.name)+'<header class="page-heading"><p class="eyebrow">TIBO ENCYCLOPEDIA</p><h1>'+escape(c.name)+'</h1><p>'+escape(c.description)+'</p></header>'+grid(entries.filter(x=>x.category===c.id));}
    }else if(hash.startsWith('item/')){
      const x=byId.get(hash.slice(5));
      if(x){active=x.category;title=x.name;html=entry(x);}
    }
    if(!html)html=crumb('未找到')+'<div class="empty-state"><h1>这一页走丢了</h1><a href="#home">回到首页 →</a></div>';
    main.innerHTML=html;
    document.title=(title==='模组图鉴'?'缇比 · 神树':'缇比 · 神树｜'+title);
    document.getElementById('navigation').innerHTML='<a href="#home"'+(hash==='home'?' aria-current="page"':'')+'>首页</a>'+categories.map(c=>'<a href="#category/'+c.id+'"'+(c.id===active?' aria-current="page"':'')+'>'+escape(c.name)+'</a>').join('');
    document.querySelector('.settings-link').toggleAttribute('aria-current',hash==='settings');
    if(!hash.startsWith('search/'))input.value='';
    if(lastHash!==hash){
      const y=scrollPositions.get(hash)||0;
      window.scrollTo({top:y,behavior:'instant'});
      if(lastHash!==null&&!typing)main.focus({preventScroll:true});
    }
    lastHash=hash;
    typing=false;
  }
  window.addEventListener('scroll',()=>{if(lastHash)scrollPositions.set(lastHash,window.scrollY);},{passive:true});
  window.addEventListener('hashchange',route);
  if('scrollRestoration' in history)history.scrollRestoration='manual';
  input.addEventListener('input',()=>{
    clearTimeout(searchTimer);
    searchTimer=setTimeout(()=>{
      typing=true;
      const hash='#search/'+encodeURIComponent(input.value.trim());
      if(location.hash.startsWith('#search/')){history.replaceState(null,'',hash);route();}
      else location.hash=hash;
    },120);
  });
  document.getElementById('search-form').addEventListener('submit',event=>{
    event.preventDefault();clearTimeout(searchTimer);typing=false;
    const hash='#search/'+encodeURIComponent(input.value.trim());
    if(location.hash===hash){main.focus();return;}
    location.hash=hash;
  });
  document.addEventListener('keydown',event=>{
    if((event.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName))||((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k')){
      event.preventDefault();input.focus();input.select();
    }else if(event.key==='Escape'&&document.activeElement===input){input.blur();}
  });
  route();
})();
