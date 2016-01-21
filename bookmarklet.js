x=''+window.getSelection();y=document.createElement('script');z=document.body.appendChild(y);u='https://pixkoy.github.io/';s='src';l=location;t=l.hostname;f=l.href;k=' ';p=t+k+x;
if(!x)x=prompt('请输入：关键词、作品番号、神秘代码……\n');
i=prompt("1、磁力番号　2、学术搜索　3、词典翻译　4、文字视觉\n\n5、下载解析　6、收藏分享　7、音乐图片　8、效率工具\n\n9、科学上网　+、网址导航　-、慢慢更新　-、稍安勿躁\n\n~、酱酱酱酱　^、今日福利　!、你还想安静地做书签吗？\n\n#、发贴啦　　$、支持你　　*、给好评　　@、有话说\n");

if(i==1){
  i=prompt('1、磁力搜索　2、番号作品　3、链接补全\n');
  if(i==1){
    i=prompt('1、CiLiBaBa　2、BTDigg　3、Kickass\n');
    if(i==1){window.open('http://www.cilibaba.com/search/'+x);}
    else if(i==2){window.open('http://btdigg.org/search?info_hash=&q='+x);}
    else if(i==3){window.open('https://kat.cr/usearch/'+x);}
  }
  else if(i==2){
    i=prompt('1、Javbus\n');
    if(i==1){window.open('http://www.javbus.com/search/'+x);}
  }
  else if(i==3){
    i=prompt('1、磁力链接补全　2、百度网盘补全\n');
    if(i==1){window.open('magnet:?xt=urn:btih:'+x);}
    else if(i==2){window.open('http://pan.baidu.com/s/'+x);}
  }
}

else if(i==2){
  i=prompt('1、站内搜索　2、学术百科　3、网页快照\n');
  if(i==1){
    i=prompt('1、Google　2、百度　3、必应　4、搜狗　5、好搜\n');
    if(i==1){window.open('https://www.google.com/search?q=site:'+p);}
    else if(i==2){window.open('https://www.baidu.com/baidu?ct=2097152&si='+t+'&word='+x);}
    else if(i==3){window.open('https://cn.bing.com/search?q=site:'+p);}
    else if(i==4){window.open('https://www.sogou.com/web?query=site:'+p);}
    else if(i==5){window.open('https://www.haosou.com/s?q=site:'+p);}
  }
  else if(i==2){
    i=prompt('1、百度百科　2、维基百科\n');
    if(i==1){window.open('http://baike.baidu.com/search/none?word='+x);}
    else if(i==2){window.open('https://zh.wikipedia.org/wiki/'+x);}
  }
  else if(i==3){
    i=prompt('1、Google 快照　2、Archive 快照\n');
    if(i==1){window.open('https://www.google.com/search?q=cache:'+f);}
    else if(i==2){window.open('http://web.archive.org/web/*/'+f);}
  }
}

else if(i==3){
  i=prompt('1、谷歌翻译　2、百度翻译　3、有道翻译　4、必应翻译\n\n5、沪江小Ｄ　6、爱词霸　　7、汉典　　　8、繁转简体\n');
  if(i==1){if(x){window.open('https://translate.google.com/#auto/zh-CN/'+x);}else{window.open('https://translate.google.com/translate?u='+f);}}
  else if(i==2){window.open('http://fanyi.baidu.com/transpage?query='+f+'&render=1');}
  else if(i==3){y.setAttribute(s,'http://fanyi.youdao.com/web2/seed.js');z;}
  else if(i==4){y.setAttribute(s,'http://labs.microsofttranslator.com/bookmarklet/default.aspx?f=js&to=zh-chs');z;}
  else if(i==5){y.setAttribute(s,'http://dict.hujiang.com/app/js/dict_ajax.js');z;}
  else if(i==6){var ICIBA_HUAYI_ALLOW=1,iciba_huaci_url="http://open.iciba.com/huaci/";void function(){if(!document.getElementById("icIBahyI-yi")){var a=document.createElement("div");a.id="icIBahyI-yi",a.style.display="none",a.style.zIndex="4294967295",document.body.insertBefore(a,document.body.firstChild);var i=document.createElement("div");i.id="icIBahyI-main_box",i.style.display="none",document.body.insertBefore(i,document.body.firstChild);var e='<link type="text/css" rel="stylesheet" href="'+iciba_huaci_url+'mini.css" /><object style="height:0px;width:0px;overflow:hidden;" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="0" height="0" id="asound_hanci" align="absmiddle"><param name="allowScriptAccess" value="always" /><param name="movie" value="http://www.iciba.com/top/asound.swf" /><param name="quality" value="high" /><embed src="http://www.iciba.com/top/asound.swf" quality="high" width="0" height="0" name="asound_hanci" align="absmiddle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object><div class="icIBahyI-main_title" id="icIBahyI-main_title" ><a href="javascript:;" id="icIBahyI-gb" class="icIBahyI-gb" title="关闭"></a><a href="javascript:;" id="icIBahyI-dq" class="icIBahyI-dq2" title="点击固定结果"></a>爱词霸 即划即译<div class="icIBahyI-sz_list" id="icIBahyI-sz_list"><a href="javascript:;">关闭即划即译</a><a href="#" target="_blank">反馈</a><a href="#" style="border:none;" target="_blank">帮助</a><span class="icIBahyI-j icIBahyI-tl"></span><span class="icIBahyI-j icIBahyI-tr"></span><span class="icIBahyI-j icIBahyI-bl"></span><span class="icIBahyI-j icIBahyI-br"></span></div></div><div class="icIBahyI-search"><input id="ICIBA_HUAYI_input" name="" type="text" onkeydown="ICIBA_HUAYI_KEYDOWN(event);"><a href="javascript:;" class="icIBahyI-sear" onclick="ICIBA_HUAYI_searchword()" >查 词</a></div><span class="icIBahyI-contTop"></span><div class="icIBahyI-loading" id="loading"></div><div class="icIBahyI-main_cont" id="icIBahyI-main_cont"></div><div class="icIBahyI-CB" id="icIBahyI-scbiframe" style="display:none"></div><div id="ICIBA_TOO_LONG" style="height:150px" class="icIBahyI-footer">您划取的内容太长，建议您去爱词霸<a href="http://fy.iciba.com">翻译</a>页面。</div><span class="icIBahyI-contB"></span>';document.getElementById("icIBahyI-main_box").innerHTML=e;var c=document.createElement("script");c.setAttribute("src",iciba_huaci_url+"dict.php"),document.body.appendChild(c);var i=document.createElement("div");i.id="icIBahyI-USER_LOGIN",i.className="icIBahyI-USER_LOGIN",i.style.display="none",document.body.insertBefore(i,document.body.firstChild);var t=document.createElement("script");t.setAttribute("src",iciba_huaci_url+"ICIBA_HUACI_COM.js"),document.body.appendChild(t)}}();}
  else if(i==7){y.setAttribute(s,'http://www.zdic.net/tools/xzsy');z;}
  else if(i==8){y.setAttribute(s,u+'繁转简体.js');z;}
}

else if(i==4){
  i=prompt('1、视频广告　2、网页广告　3、夜间模式　4、阅读模式\n\n5、右键限制　6、复制链接文字\n');
  if(i==1){y.setAttribute(s,'http://zythum.sinaapp.com/mama2/dest/index.js');z;}
  else if(i==2){y.setAttribute(s,u+'去浮动广告.js');z;}
  else if(i==3){var night=function(w){(function(d){var css='html{opacity:0.7!important;background:black!important;}body{background:white!important;}';var s=d.getElementsByTagName('style');for(var i=0,si;si=s[i];i++){if(si.innerHTML==css){si.parentNode.removeChild(si);return;}}var heads=d.getElementsByTagName('head');if(heads.length){var node=d.createElement('style');node.type='text/css';node.appendChild(d.createTextNode(css));heads[0].appendChild(node);}})(w.document);for(var i=0,f;f=w.frames[i];i++){try{arguments.callee(f);}catch(e){}}};night(window);}
  else if(i==4){y.setAttribute(s,u+'阅读模式.js');z;}
  else if(i==5){y.setAttribute(s,u+'解除限制.js');z;}
  else if(i==6){document.body.contentEditable=true;}
}

else if(i==5){
  i=prompt('1、视频下载　2、Chrome 应用下载　3、网站排名数据\n\n4、离线下载\n');
  if(i==1){
    i=prompt('1.福利狗、　2、Deturl　3、哔哩哔哩　4、YouTube\n');
    if(i==1){window.open('https://flvgo.com/download?url='+f);}
    else if(i==2){window.open('http://deturl.com/'+f);}
    else if(i==3){
      i=prompt('1、爱哔哩　　　2、哔哩哔哩唧唧\n\n3、bilibili.audio');
      if(i==1){window.open(f.replace('bilibili','ibilibili'));}
      else if(i==2){window.open(f.replace('bilibili','bilibilijj'));}
      else if(i==3){window.open('http://bilibili.audio/'+f.match(/(av)([0-9]{6,8})/)[2]+'/1');}
    }
    else if(i==4){
      i=prompt('1、超簡単♪　2、10YouTube　3、SaveMedia　4、YouTube-MP4');
      if(i==1){window.open(f.replace('https://www.youtube.com/watch?v=','http://youtube-video-download.info/video/'));}
      else if(i==2){window.open(f.replace('https://www.youtube','http://www.10youtube'));}
      else if(i==3){window.open(f.replace('youtube','savemedia'));}
      else if(i==4){y.setAttribute(s,u+'Youtube-MP4.js');z;}
    }
  }
  else if(i==2){
    i=prompt('1.官方下载、　2.代理下载\n');
    if(i==1){if(x){window.open('https://clients2.google.com/service/update2/crx?response=redirect&prodversion=40&x=id='+x+escape('&uc'));}else{window.open('https://clients2.google.com/service/update2/crx?response=redirect&prodversion=40&x=id='+window.location.href.match(/([a-p]{32})/)[1]+escape('&uc'));}}
    else if(i==2){window.open('http://chrome-extension-downloader.com/');}
  }
  else if(i==3){window.open('http://s3.amazonaws.com/alexa-static/top-1m.csv.zip');}
  else if(i==4){
    y=prompt('1、待添加　2、迅雷离线下载\n');
    if(y==1){y.setAttribute(s,u+'x.js');z;}
    else if(y==2){y.setAttribute(s,'http://lixian.vip.xunlei.com/lxrc/js/load.js');z;}}
}

else if(i==6){
  i=prompt('1、Saved.io　　　　2、Google 书签\n\n3、Google 二维码 　4、微博短网址\n');
  if(i==1){x=prompt('请选择分类：');if(x){window.open('http://'+x+'.saved.io/'+f);}else{window.open('http://saved.io/'+f);}}
  else if(i==2){var a=window,b=document,c=encodeURIComponent,d=a.open('https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk='+c(b.location)+'&title='+c(b.title),'','left=500,top=85,height=470,width=560');}
  else if(i==3){window.open('http://chart.apis.google.com/chart?cht=qr&chs=500x500&chl='+encodeURIComponent(f),'Qr code','top=100,left=600,width=500,height=500,status=yes');}
  else if(i==4){if(f.match(5786724301)){document.write('<style type="text/css">body{background:#333;color:#f69;font-family:Microsoft YaHei Light;font-size:10em;margin:0px auto;text-align:center;}</style></br>'+document.body.innerHTML.match(/(short":")(.{15,25})(",")/)[2]);}else{window.open('http://api.weibo.com/2/short_url/shorten.json?source=5786724301&url_long='+f);}}
}

else if(i==7){
  i=prompt('1、豆瓣电台　2、显示所有图片　3、隐藏搜索图片\n');
  if(i==1){window.open('http://douban.fm/radio','','height=186,width=420');}
  else if(i==2){y.setAttribute(s,u+'列出图片.js');z;}
  else if(i==3){function toArray (c){var a, k;a=new Array;for (k=0; k < c.length; ++k)a[k]=c[k];return a;}var images, img, altText;images=toArray(document.images);for (var i=0; i < images.length; ++i){img=images[i];altText=document.createTextNode(img.alt);img.parentNode.replaceChild(altText, img);}}
}

else if(i==8){
  i=prompt('1、百度云输入法　2、自动翻页\n');
  if(i==1){y.setAttribute(s,'http://www.baidu.com/olime/bdime_open.js');z;}
  else if(i==2){y.setAttribute(s,'http://www.printwhatyoulike.com/static/pagezipper/pagezipper_10.js');z;}
}

else if(i==9){alert('　　　待更新、免费账号、可看YouTube 4K\n\n1、PAC　2、DNS　3、SwitchyOmega\n\n4、Shadowsocks　5、XX-net　6、Heroku　\n\n７、蓝灯优化　8、赛风　９、检测查询　0、教程推荐\n');}

else if(i=='+'){
  i=prompt('1、百度、　2、Google　3、网易云音乐\n');
  if(i==1){window.open('https://www.baidu.com/');}
  else if(i==2){window.open('https://www.google.com/');}
  else if(i==3){window.open('http://music.163.com/');}
}

else if(i=='#'){window.open('http://www.wndflb.com/forum.php?mod=post&action=newthread&fid=2');}

else if(i=='$'){window.open('http://www.wndflb.com/home.php?mod=spacecp&ac=favorite&type=thread&id=40134&formhash=53735c96');}

else if(i=='*'){window.open('http://www.wndflb.com/thread-40134-1-1.html');}

else if(i=='@'){window.open('http://www.wndflb.com/forum.php?mod=post&action=reply&fid=2&tid=40134&reppost=824791&extra=page%3D1&page=1');}
