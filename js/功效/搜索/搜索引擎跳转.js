(function() {
	'use strict';
	var prefs = {
		openInNewTab: false, //是否在新页面打开.
		hidePrefsBtn: false, //隐藏设置按钮
		hideEnglineLabel: 0, //是否隐藏前几个搜索的文字部分。0：不隐藏，1：根据高度自行判断，2：隐藏
		engineListDataType: 'define', //搜索列表默认类型
		iconType: '', //获取 icon 的在线服务的地址类型
		//position: '',//全局搜索条插入的位置：default, left, top
		debug: false
	};
	var engineListData = {
		custom: '',
		define:
		'网页--search\n	'+
		  'Google\n	'+
		    ' Google, https://www.google.com/search?q=%s\n '+
		    ' Google 香港, https://www.google.com/search?hl=zh-hk&q=%s\n '+
		    ' Google 日本, https://www.google.com/search?hl=ja-jp&q=%s\n '+
		    ' Google 美国, https://www.google.com/search?hl=en&q=%s\n '+
		  '百度, https://www.baidu.com/s?wd=%s\n '+
		  '好搜, https://www.haosou.com/s?q=%s\n '+
		  '必应, https://cn.bing.com/search?q=%s, https://cn.bing.com/sa/simg/bing_p_rr.ico\n '+
		  '搜狗, https://www.sogou.com/web?query=%s\n	'+
		  'DuckDuckGo, https://duckduckgo.com/?q=%s\n'+
		'音乐--music\n '+
		  '网易云音乐, http://music.163.com/#/search/m/?s=%s, http://s1.music.126.net/music.ico\n '+
  		'百度音乐, http://music.baidu.com/search?key=%s\n'+
		'磁力--magnet\n	'+
		  'CiLiBaBa, http://www.cilibaba.com/search/%s/, http://www.cilibaba.com/static/favicon.e3c6edce4e92.ico\n '+
		  'Kickass, https://kat.cr/usearch/%s/\n '+
		  'BTDigg, https://btdigg.org/search?q=%s\n'+
		'翻译--translate\n '+
		'汉典, http://www.zdic.net/sousuo/?q=%s'
	};

	var MAIN_CSS = 'i{\n	vertical-align:initial;\n    color: #333;\n}\n#sej-container:hover{\n	z-index: 999999999999999;\n	opacity: 1;\n}\nsejul, sejli {\n	margin: 0;\n	padding: 0;\n	list-style: none outside;\n}\nsejli {\n	display: list-item;\n}\nsejli:hover>sejul {\n	display:block;\n}\nbody>sejul>sejli {\n	float: left;\n}\nsejli sejul {\n	position: absolute;\n}\nsejli sejul sejul {\n	margin-left: 100px;\n	margin-top: -30px;\n}\nsejli sejul .sej-engine {\n	padding: 4px 0px;\n	width:100%;\n}\n#sej-container {\n   background: white;\n	box-shadow:0px 0px 3px #aaaaaa;\n	margin:0 auto;\n	opacity: 0;\n	display:table;\n	font-family: Microsoft YaHei;\n	position: relative;\n	padding: 1px 0 1px 10px;\n	line-height: 1.5;\n	font-size: 13px;\n	transition: opacity 0.5s ease-in-out;\n}\n#sej-container>sejli {\n    float: left;\n}\n#sej-expanded-category {\n	display: inline-block;\n	font-weight: bold;\n	padding: 2px 0;\n	line-height: 2;\n}\n#sej-expanded-category::after {\n	content:" :";\n}\n.sej-engine {\n line-height: 2;\n display: inline-block;\n margin: 0;\n border: none;\n padding: 2px 4px;\n text-decoration: none;\n transition: background-color 0.15s ease-in-out;\n}\na.sej-engine{white-space: nowrap;}\na.sej-engine:visited, a.sej-engine:active{\n color: #6699ff;\n}\na.sej-engine.only-icon {\n	margin-left: 3px;\n	margin-right: 3px;\n}\na.sej-engine.only-icon > span {\n	display: none;\n}\na.sej-engine:link, a.sej-engine:visited {\n	text-decoration: none;\n}\n.sej-drop-list-trigger-shown {\n	background-color: #DEEDFF !important;\n}\n.sej-drop-list-trigger::after {\n	content:\'\';\n	display: inline-block;\n	margin: 0 0 0 3px;\n	padding: 0;\n	width: 0;\n	height: 0;\n	border-top: 6px solid #BCBCBC;\n	border-right: 5px solid transparent;\n	border-left: 5px solid transparent;\n	border-bottom: 0px solid transparent;\n	transition: -webkit-transform 0.3s ease-in-out;\n	transition: transform 0.3s ease-in-out;\n}\n.sej-drop-list-trigger-shown::after {\n	-webkit-transform: rotate(180deg);\n	transform: rotate(180deg);\n}\n.sej-engine:hover {\n	background-color: #EAEAEA;\n}\n.sej-drop-list > .sej-engine {\n	display: block;\n	padding-top: 4px;\n	padding-bottom: 4px;\n}\n.sej-drop-list > .sej-engine:hover {\n	background-color: #DEEDFF;\n}\n.sej-drop-list i,.sej-drop-list img{padding-left:5px;}\n.sej-engine-icon {\n	display: inline-block;\n	height: 16px;\n	border: none;\n	padding: 0;\n	margin: 0 3px 0 0;\n	vertical-align: sub;\n}\n.sej-drop-list {\n	display: none;\n	float: left;\n	min-width: 100px;\n	border: 1px solid #FAFAFA;\n	font-size: 13px;\n	-moz-box-shadow: 2px 2px 5px #ccc;\n	-webkit-box-shadow: 2px 2px 5px #ccc;\n	box-shadow: 2px 2px 5px #ccc;\n	background-color: white;\n}';
	var fontawesome ='';

	var categoryMap = { //rules 和 engineList 的对应
		'web': '网页',
		'music': '音乐',
		'magnet': '磁力',
		'translate': '翻译',
	};

	function isTheSameCategory(c1, c2) {
		return (categoryMap[c1] || c1) == (categoryMap[c2] || c2);
	}
      // 'beforeBegin'(插入到给定元素的前面) ;
			// 'afterBegin'(作为给定元素的第一个子元素) ;
			// 'beforeEnd' (作为给定元素的最后一个子元素) ;
			// 'afterEnd'(插入到给定元素的后面);.
	
	var rules = [
		{
			name: "Google",
			url: /^https?:\/\/www\.google\.(com|co\.jp)\/(webhp|search|#)/,
			change: 'mutationTitle',
			engineList: 'web',
			style: '\
			margin-left: 132px;\
			',
			insertIntoDoc: {
				target: '#hdtb-msb',
				where: 'beforeEnd',
			},
		}, {
			name: "百度",
			url: /^https?:\/\/www\.baidu\.com\/s\?/,
			change: 'mutationTitle',
			engineList: 'web',
			style: '\
			top: 95px;\
			left: -914px;\
			',
			insertIntoDoc: {
				target: '.s_form',
				where: 'beforeEnd',
			},
		}, {
			name: "好搜",
			url: /^https?:\/\/www\.haosou\.com\/s\?/,
			engineList: 'web',
			style: '\
			margin-left: 21px;\
			',
			insertIntoDoc: {
				target: '.inner',
				where: 'beforeEnd',
			},
		}, {
			name: "必应",
			url: /^https?:\/\/cn\.bing\.com\/search/,
			engineList: 'web',
			style: '\
			margin-left: 120px;\
			',
			insertIntoDoc: {
				target: '#b_header',
				where: 'beforeEnd',
			},
		}, {
			name: "搜狗",
			url: /^https?:\/\/www\.sogou\.com\/(?:web|s)/,
			engineList: 'web',
			style: "\
			top: -20px;\
			margin-left: 35px;\
			",
			insertIntoDoc: {
				target: '#wrapper',
				where: 'beforeBegin',
			},
		}, {
			name: "DuckDuckGo",
			url: /^https?:\/\/duckduckgo\.com\/\?/,
			engineList: '网页',
			style: "\
			margin-left:112px;\
			",
			insertIntoDoc: {
				target: '#zero_click_wrapper',
				where: 'afterEnd'
			},
		},
		// 音乐
		{
			name: "网易云音乐",
			url: /^https?:\/\/music\.163\.com/,
			engineList: "music",
			style: "\
			left: -104px;\
			",
			insertIntoDoc: {
				target: '#g_nav2',
				where: 'afterEnd'
			}
		}, {
			name: "百度音乐",
			url: /^https?:\/\/music\.baidu\.com/,
			engineList: "music",
			style: "\
			left: -50px;\
			",
			insertIntoDoc: {
				target: '.nav-wrapper',
				where: 'beforeEnd'
			},
		},
		// 磁力
		{
			name: "CiLiBaBa",
			url: /^https?:\/\/www\.cilibaba\.com/,
			engineList: "magnet",
			insertIntoDoc: {
				target: '.container',
				where: 'afterEnd'
			},
		}, {
			name: "Kickass",
			url: /^https?:\/\/kat\.cr/,
			engineList: "magnet",
			style: "\
			margin-left:50px;\
			",
			insertIntoDoc: {
				target: '#menu',
				where: 'afterEnd'
			},
		}, {
			name: "BTDigg",
			url: /^https?:\/\/btdigg\.org/,
			engineList: "magnet",
			insertIntoDoc: {
				target: '.pager',
				where: 'beforeBegin'
			}
		},
		// 词典
		{
			name: "汉典",
			url: /^https?:\/\/www\.zdic\.net\/sousuo/,
			engineList: "translate",
			insertIntoDoc: {
				target: '.secpan',
				where: 'afterEnd'
			}
		},
	];

	if (typeof exports !== 'undefined') {
		exports.rules = rules;
	}

	reloadDebug();
	// --------------------可设置项结束------------------------
	var debug;

	function reloadDebug() {
		debug = prefs.debug ? console.debug.bind(console) : function() {};
	}

	if (typeof String.prototype.startsWith != 'function') {
		String.prototype.startsWith = function(str) {
			return this.slice(0, str.length) == str;
		};
	}

	function getPostFormHTML(url, args, newTab) { //获取 method 为 POST 的表单的 HTML
		var form = '<form method="post"' +
			' action="' + url + '"' +
			(newTab ? ' target="_blank"' : '') +
			'>';
		for (var arg in args) {
			var input = '<input type="hidden"' +
				' name="' + arg + '"' +
				' value="' + args[arg] + '"' +
				' />';
			form += input;
		}
		form += '</form>';
		return form;
	}

	function wrapToHide(html) { //包装 HTML 元素代码以隐藏该元素
		return '<span style="display:none;">' + html + '</span>';
	}

	function toRE(obj) {
		if (obj instanceof RegExp) {
			return obj;
		} else if (obj instanceof Array) {
			return new RegExp(obj[0], obj[1]);
		} else {
			return new RegExp(obj);
		}
	}

	function getMStr(func) {
		var lines = func.toString();
		lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
		return lines;
	}

	function toUTF16(str) { //说是UTF16，但其实是dA专用的，是对转义字符进行编码
		var length = str.length;
		var ret = [];
		var character;
		var charCode;
		var gCode;
		var neReg = /[\dA-z]/;
		for (var i = 0; i < length; i++) {
			charCode = str.charCodeAt(i);
			if (charCode <= 128) {
				character = str.charAt(i);
				if (neReg.test(character)) { /*ascii的数字字母不编码*/
					ret.push(character);
				} else {
					ret.push('%' + charCode.toString(16));
				};
			} else {
				gCode = charCode.toString();
				if (gCode) {
					while (gCode.length < 4) {
						gCode = '0' + gCode;
					};
					ret.push('%26%23' + gCode + '%3B');
				} else {
					/*字库里面没有.*/
				};
			};
		};
		return ret.join('');
	};

	function getFaviconUrl(url, type) {
		var uri = parseUri(url);
		switch (type) {
			case 0:
				return 'https://www.google.com/s2/favicons?domain=' + uri.host;
			default:
				return uri.protocol + '://' + uri.host + '/favicon.ico';
		}
	}

	// parseUri 1.2.2
	// (c) Steven Levithan <stevenlevithan.com>
	// MIT License
	var parseUri = function(str) {
		var o = parseUri.options,
			m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
			uri = {},
			i = 14;

		while (i--) uri[o.key[i]] = m[i] || "";

		uri[o.ds.name] = {};
		uri[o.ds.name][0] = {};
		uri[o.ds.name][0]['key'] = (uri.protocol ? uri.protocol : 'http') + '://' + uri.host + (uri.port ? ':' + uri.port : '') + '/';
		uri[o.ds.name][0]['val'] = '/';
		var i = 0,
			tempsub = '/',
			subs = uri[o.key[10]].substr(1).split('/');
		for (var j = 1; j < (subs.length + 1); j++, i++) {
			tempsub += tempsub === '/' ? subs[i] : '/' + subs[i];
			if (subs[i]) {
				uri[o.ds.name][j] = {};
				uri[o.ds.name][j]['key'] = subs[i];
				uri[o.ds.name][j]['val'] = tempsub;
			}
		}

		uri[o.q.name] = {};
		uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
			if ($1) uri[o.q.name][$1] = $2;
		});
		uri[o.aq.name] = {};
		uri[o.key[13]].replace(o.aq.parser, function($0, $1, $2) {
			if ($1) uri[o.aq.name][$1] = $2;
		});

		return uri;
	};
	parseUri.options = {
		strictMode: false,
		key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
		q: {
			name: "queryKey",
			parser: /(?:^|&)([^&=]*)=?([^&]*)/g
		},
		aq: {
			name: "anchorqueryKey",
			parser: /(?:^|&)([^&=]*)=?([^&]*)/g
		},
		ds: {
			name: "directorySub"
		},
		parser: {
			strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
			loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
		}
	};

	if (typeof exports !== 'undefined') {
		exports.parseUri = parseUri;
	}

	function addGlobalStyle() {
		// 添加全局样式和自定义样式
		if (!document.getElementById('sej-style')) {
			var style = document.createElement('style');
			style.id = 'sej-style';
			style.type = 'text/css';
			style.textContent = MAIN_CSS + '\n' + (matchedRule.stylish || '');
			document.head.appendChild(style);
		}
		if(!(matchedRule.change&&matchedRule.change == 'noExternalRequests')){
			if (!document.getElementById('sej-fontawesome')) {
				var style = document.createElement('style');
				style.id = 'sej-fontawesome';
				style.type = 'text/css';
				style.textContent = fontawesome;
				document.head.appendChild(style);
			}
		}
	}

	function addContainer(iTarget, iInput) {
		function parseDataStr(str) { //转换文本数据

			var List = str.split(/\n(?=[^\s])/);
			List.forEach(function(eachList) {
				var line = eachList.split(/[\n\r]+/);
				var category = line[0];
				var category = category.split('--');
				if (isTheSameCategory(category[0], matchedRule.engineList)) {
					container.innerHTML += '<sejli><i class="fa fa-'+category[1]+'"></i><sejspan id="sej-expanded-category">' + category[0] + '</sejspan></sejli>'
					parseLine(container, line, true);
				} else {
					var contSejli = document.createElement('sejli');
					contSejli.innerHTML = '<sejspan class="sej-engine sej-drop-list-trigger"><i class="fa fa-'+category[1]+'"></i>' + category[0] + '</sejspan>'
					var sejul = document.createElement('sejul');
					sejul.className = "sej-drop-list";
					parseLine(sejul, line, false);
					contSejli.appendChild(sejul);
					container.appendChild(contSejli);
				}
			})


			str = str.replace(/[\n\r]+[\s\/]*-\s*(\S+):/g, '_POST_ $1:'); //提前处理下特殊的 post 方式

			var parseArgs = function(str) {
				var arr = str.replace(/，/g, ', ').split(/\s*, \s*/);
				var args = {};
				arr.forEach(function(s) {
					var argArr = s.split(/\s*: \s*/);
					args[argArr[0]] = argArr[1];
				});
				return args;
			};

			function parseLine(container, line, isCurrent) {
				line.splice(0, 1);
				var sejul, defaultEngine, contSejli;
				var flag, flag2;
				for (var i = 0; i < line.length; i++) {
					if (!line[i]) continue;

					if (line[i].indexOf('//') == 0) {
						continue;
					}
					var arr = line[i].replace(/，/g, ', ').split(/,\s/);
					if (isCurrent && matchedRule.engineList && toRE(matchedRule.url).test(arr[1])) { //去掉跳转到当前引擎
						if(flag==i-1)flag++;
						if(flag2==i-1){
							if (i == line.length - 1) {
								contSejli.appendChild(sejul);
								container.appendChild(contSejli);
							}
							flag2++
						}
						continue;
					}
					var engine = {};
					if (line[i].indexOf('_POST_') != -1) {
						engine.method = 'POST';
						var two = line.split(/\s*_POST_\s*/);
						line[i] = two[0];
						engine.args = parseArgs(two[1]);
					}
					if (arr.length === 1) { //分类
						flag = i;
						if (flag2 == i - 1 && sejul != "") {
							contSejli.appendChild(sejul);
							container.appendChild(contSejli);
						}
						defaultEngine = arr[0].trim();
						sejul = document.createElement('sejul');
						sejul.className = "sej-drop-list";
						continue;
					}
					if (/\s\s/.test(arr[0])) {//引擎分类只支持2级，所以两个tab就是二级分类的引擎
						var url = arr[1];
						var sejli = document.createElement('sejli');
						sejli.innerHTML = getaPattern(arr);
						sejul.appendChild(sejli);
						if (i == flag + 1) { //由于二级分类大多是引擎细分，所以引擎名字上也需要能点击才行
							arr[0] = defaultEngine;
							contSejli = document.createElement('sejli');
							contSejli.innerHTML = getaPattern(arr).replace("sej-engine", "sej-engine sej-drop-list-trigger");
						}
						flag2 = i;//flag2代表二级分类的引擎标记，结束后需要写入列表
						if (i == line.length - 1) {//如果已二级分类的引擎结尾，写入列表
							contSejli.appendChild(sejul);
							container.appendChild(contSejli);
						}
						continue;
					}
					if (/\s[^\s]/.test(arr[0])) {
						if (flag2 == i - 1 && sejul != "") {//看是否二级分类引擎结束
							contSejli.appendChild(sejul);
							container.appendChild(contSejli);
						}
						sejul = "";
						var sejli = document.createElement('sejli');
						sejli.innerHTML = getaPattern(arr);
						container.appendChild(sejli);
					}
				}
			};

		}

		function getaPattern(arr) {
				if (arr[1].indexOf('_POST_') != -1) {
					engine.method = 'POST';
					var two = line.split(/\s*_POST_\s*/);
					line = two[0];
					engine.args = parseArgs(two[1]);
				}

				var engine = {};
				engine.name = arr[0].trim();
				engine.url = arr[1];
				engine.host = parseUri(engine.url).host;
				if (arr[2]) engine.favicon = arr[2];
				if (!engine.favicon) {
					engine.favicon = getFaviconUrl(engine.url);
				}
				var a = aPattern.replace('$url$', engine.url)
					.replace('$name$', engine.name)
					.replace('$title$', engine.name);
				if(matchedRule.change == 'noExternalRequests')a = a.replace('<img src="$favicon$" class="sej-engine-icon" />','')
				else if (engine.favicon) {
					if(/^fa/.test(engine.favicon))a = a.replace('<img src="$favicon$" class="sej-engine-icon" />', '<i class="fa '+engine.favicon+'"></i>');
					a = a.replace('$favicon$', engine.favicon);
				} else {
					a = a.replace('src="$favicon$"', '');
				}

				if (engine.method && engine.method.toUpperCase() == 'POST') {
					var f = wrapToHide(getPostFormHTML(engine.url, engine.args, prefs.openInNewTab));
					a = a.replace('$form$', f);
					a = a.replace('$onclick$', "this.getElementsByTagName('form')[0].submit();return false;");
				} else {
					a = a.replace('$form$', '');
					a = a.replace('onclick="$onclick$"', '');
				}
				return a;
			}
			// 创建dom
		var aPattern = '<a href="" class="sej-engine"' + (prefs.openInNewTab ? ' target="_blank" ' : ' ') +
			'url="$url$" onclick="$onclick$" _title="$title$">' +
			'<img src="$favicon$" class="sej-engine-icon" />$form$<span>$name$</span></a>';

		var container = document.createElement('sejul');
		container.id = 'sej-container';

		container.addEventListener('mousedown', mousedownhandler, true);
		if (matchedRule.style) {
			container.style.cssText = matchedRule.style;
		}
		// 根据搜索列表的类型得到数据
		var engineListDataStr = engineListData[prefs.engineListDataType] || engineListData.normal;
		parseDataStr(engineListDataStr);
		var isMatched = false; //当前搜索只匹配一次
		var insertWhere = matchedRule.insertIntoDoc.where; //设置插入的位置

		switch (insertWhere.toLowerCase()) { //插入到文档中
			case 'beforebegin':
				iTarget.parentNode.insertBefore(container, iTarget);
				break;
			case 'afterbegin':
				if (iTarget.firstChild) {
					iTarget.insertBefore(container, iTarget.firstChild);
				} else {
					iTarget.appendChild(container);
				}
				break;
			case 'beforeend':
				iTarget.appendChild(container);
				break;
			case 'afterend':
				if (iTarget.nextSibling) {
					iTarget.parentNode.insertBefore(container, iTarget.nextSibling);
				} else {
					iTarget.parentNode.appendChild(container);
				}
				break;

		};

		var isTwoLine = container.clientHeight / container.children[1].clientHeight > 2;

		// 插入后调整下，如果变成两行，隐藏文字
		if (prefs.hideEnglineLabel == 2 || (prefs.hideEnglineLabel == 1 && isTwoLine)) {
			[].forEach.call(document.querySelectorAll('#sej-container > a[class="sej-engine"] > span'), function(span) {
				var link = span.parentNode;
				link.classList.add('only-icon');
				link.setAttribute('title', span.textContent);
			});
		}

		if (typeof matchedRule.endFix == 'function') {
			try {
				matchedRule.endFix();
			} catch (ex) {
				console.error('endFix 错误', ex);
			}
		}

		function mousedownhandler(e) {
			var target = e.target;
			if (!target.href) target = target.parentNode;

			if (!target || target.className.indexOf('sej-engine') == -1) return;
			if (!target || !this.contains(target)) return;

			var value;
			if (typeof iInput == 'function') value = iInput();
			else {
				if (iInput.nodeName == 'INPUT' || iInput.localName == 'textarea') value = iInput.value;
				else value = iInput.textContent;
			}

			// 根据后代元素中是否存在 form 元素，判断提交方式并进行处理
			// 如果没有 form 元素，将会使用 GET 方法提交；如果有，将会使用 POST 方法提交
			var forms = target.getElementsByTagName('form');
			if (forms.length == 0) { //提交方式为 GET
				target.href = target.getAttribute('url').replace(/%s/g, value); //替换“全部”关键词
			} else { //提交方式为 POST
				var inputs = target.getElementsByTagName('input');
				for (var i = 0; i < inputs.length; i++) inputs[i].value = inputs[i].value.replace(/%s/g, value); //// 替换“全部”关键词
			}
		}
	}

	function run() {
		// 百度搜索插入到顶部搜索条下面就会造成页面部分元素的消失，所以需要每个部分都判断下是否存在
		// 判断插入位置和输入框是否存在
		var iTarget = document.querySelector(matchedRule.insertIntoDoc.target);
		var iInput;
		if (matchedRule.insertIntoDoc.keyword) {
			if (typeof matchedRule.insertIntoDoc.keyword == 'function') {
				iInput = matchedRule.insertIntoDoc.keyword;
				if (!iInput()) {
					return;
				}
			} else {
				iInput = document.querySelector(matchedRule.insertIntoDoc.keyword);
			}
		} else {
			iInput = document.querySelector('input[type="search"],input[name][value]:not([type]),input[type="text"][value][name]');
			if (!iInput) {
				iInput = document.querySelector('input[autocomplete="off"]:not([type]),input[type="text"]');
			}
		}
		debug('插入的位置为 %o', iTarget);
		debug('匹配的输入框为 %o', iInput);

		if (!iTarget || !iInput) {
			debug('不存在插入的位置或匹配的输入框', iTarget, iInput);
			return;
		}

		addGlobalStyle();

		// 判断是否存在
		var container = document.getElementById('sej-container');

		if (!container) {
			if (container) {
				container.parentNode.removeChild(container);
			}
			addContainer(iTarget, iInput);
		}
	}

	function remove() {
		var elems = document.querySelectorAll('#sej-container');
		if (!elems) return;

		[].forEach.call(elems, function(elem) {
			elem.parentNode.removeChild(elem);
		});
	}

	// iframe 禁止加载
	if (window.self != window.top) return;

	var matchedRule;

	rules.some(function(rule) {
		if (toRE(rule.url).test(location.href)) {
			matchedRule = rule;
			if (typeof rule.etc == 'function') {
				try {
					rule.etc();
				} catch (ex) {
					console.error('执行 etc 错误', ex);
				}
			}
			return true;
		};
	});


	debug('匹配的规则为', matchedRule);

	if (!matchedRule) return;

	if (matchedRule.change) {
		if (matchedRule.change == "mutationTitle") {
			run();
			debug('添加标题节点监视器: title');

			var watch = document.querySelector('title');
			var observer = new MutationObserver(function(mutations) {
				debug('标题发生了变化', document.title);
				run();
			});
			observer.observe(watch, {
				childList: true,
				subtree: true,
				characterData: true
			});
		}
		else if (matchedRule.change == "runAtComplete") {
			document.onreadystatechange = function() {
				debug('onreadystatechange');
				if (document.readyState == "complete") {
					run();
				}
			}
		}
		else run();
	} else run();
})()
