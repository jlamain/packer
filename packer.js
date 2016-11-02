// copied and pasted from http://dean.edwards.name/packer/

var document = require('jsdom').jsdom();
var base2={name:"base2",version:"1.0.1(pre)",exports:"Base, Package, Abstract, Module, Enumerable, Map, Collection, RegGrp, "+"assert, assertArity, assertType, "+"assignID, copy, counter, detect, extend, forEach, format, instanceOf, match, rescape, slice, trim, "+"I, K, Undefined, Null, True, False, bind, delegate, flip, not, partial, unbind",global:this,namespace:"var global=base2.global;function base(o,a){return o.base.apply(o,a)};",detect:new function(_){var global=_;var jscript/*@cc_on=@_jscript_version@*/;if(_.navigator){var element=document.createElement("span");var userAgent=navigator.platform+" "+navigator.userAgent;if(!jscript)userAgent=userAgent.replace(/MSIE\s[\d.]+/,"");userAgent=userAgent.replace(/([a-z])[\s\/](\d)/gi,"$1$2");}return function(a){var r=false;var b=a.charAt(0)=="!";if(b)a=a.slice(1);if(a.charAt(0)=="("){try{eval("r=!!"+a)}catch(error){}}else{r=new RegExp("("+a+")","i").test(userAgent)}return!!(b^r)}}(this)};new function(_){var detect=base2.detect;var slice=Array.slice||(function(b){return function(a){return b.apply(a,b.call(arguments,1))}})(Array.prototype.slice);var Undefined=K(),Null=K(null),True=K(true),False=K(false);var _0=/%([1-9])/g;var _1=/^\s\s*/;var _2=/\s\s*$/;var _3=/([\/()[\]{}|*+-.,^$?\\])/g;var _4=/eval/.test(detect)?/\bbase\s*\(/:/.*/;var _5=["constructor","toString","valueOf"];var _6=String(new RegExp);var _7=1;_8();eval(base2.namespace);var _9=function(a,b){base2.__prototyping=true;var c=new this;extend(c,a);delete base2.__prototyping;var d=c.constructor;function _10(){if(!base2.__prototyping){if(this.constructor==arguments.callee||this.__constructing){this.__constructing=true;d.apply(this,arguments);delete this.__constructing}else{return extend(arguments[0],c)}}return this};c.constructor=_10;for(var i in Base)_10[i]=this[i];_10.toString=K(String(d));_10.ancestor=this;_10.base=Undefined;_10.init=Undefined;extend(_10,b);_10.prototype=c;_10.init();return _10};var Base=_9.call(Object,{constructor:function(){if(arguments.length>0){this.extend(arguments[0])}},base:function(){},extend:delegate(extend)},Base={ancestorOf:delegate(_11),extend:_9,forEach:delegate(_8),implement:function(a){if(typeof a=="function"){if(_11(Base,a)){a(this.prototype)}}else{extend(this.prototype,a)}return this}});var Package=Base.extend({constructor:function(d,e){this.extend(e);if(this.init)this.init();if(this.name!="base2"){if(!this.parent)this.parent=base2;this.parent.addName(this.name,this);this.namespace=format("var %1=%2;",this.name,String(this).slice(1,-1))}var f=/[^\s,]+/g;if(d){d.imports=Array2.reduce(this.imports.match(f),function(a,b){eval("var ns=base2."+b);assert(ns,format("Package not found: '%1'.",b));return a+=ns.namespace},base2.namespace+JavaScript.namespace);d.exports=Array2.reduce(this.exports.match(f),function(a,b){var c=this.name+"."+b;this.namespace+="var "+b+"="+c+";";return a+="if(!"+c+")"+c+"="+b+";"},"",this)}},exports:"",imports:"",name:"",namespace:"",parent:null,addName:function(a,b){if(!this[a]){this[a]=b;this.exports+=", "+a;this.namespace+=format("var %1=%2.%1;",a,this.name)}},addPackage:function(a){this.addName(a,new Package(null,{name:a,parent:this}))},toString:function(){return format("[%1]",this.parent?String(this.parent).slice(1,-1)+"."+this.name:this.name)}});var Abstract=Base.extend({constructor:function(){throw new TypeError("Class cannot be instantiated.");}});var Module=Abstract.extend(null,{extend:function(a,b){var c=this.base();_12(c,this);c.implement(a);extend(c,b);c.init();return c},implement:function(c){var d=this;if(typeof c=="function"){d.base(c);if(_11(Module,c)){_12(d,c)}}else{var e={};_8(Object,c,function(a,b){if(b.charAt(0)=="@"){if(detect(b.slice(1))){forEach(a,arguments.callee)}}else if(!Module[b]&&typeof a=="function"&&a.call){function _13(){return d[b].apply(d,[this].concat(slice(arguments)))};_13.__base=_4.test(a);e[b]=_13}});extend(d.prototype,e);extend(d,c)}return d}});function _12(a,b){for(var c in b){var method=b[c];if(!Module[c]&&typeof method=="function"&&method.call){a[c]=method}}};var Enumerable=Module.extend({every:function(c,d,e){var f=true;try{this.forEach(c,function(a,b){f=d.call(e,a,b,c);if(!f)throw StopIteration;})}catch(error){if(error!=StopIteration)throw error;}return!!f},filter:function(d,e,f){var i=0;return this.reduce(d,function(a,b,c){if(e.call(f,b,c,d)){a[i++]=b}return a},[])},invoke:function(b,c){var d=slice(arguments,2);return this.map(b,(typeof c=="function")?function(a){return(a==null)?undefined:c.apply(a,d)}:function(a){return(a==null)?undefined:a[c].apply(a,d)})},map:function(c,d,e){var f=[],i=0;this.forEach(c,function(a,b){f[i++]=d.call(e,a,b,c)});return f},pluck:function(b,c){return this.map(b,function(a){return(a==null)?undefined:a[c]})},reduce:function(c,d,e,f){var g=arguments.length>2;this.forEach(c,function(a,b){if(g){e=d.call(f,e,a,b,c)}else{e=a;g=true}});return e},some:function(a,b,c){return!this.every(a,not(b),c)}},{forEach:forEach});var _14="#";var Map=Base.extend({constructor:function(a){this.merge(a)},copy:delegate(copy),forEach:function(a,b){for(var c in this)if(c.charAt(0)==_14){a.call(b,this[c],c.slice(1),this)}},get:function(a){return this[_14+a]},getKeys:function(){return this.map(flip(I))},getValues:function(){return this.map(I)},has:function(a){/*@cc_on@*//*@if(@_jscript_version<5.5)return $Legacy.has(this,_14+a);@else@*/return _14+a in this;/*@end@*/},merge:function(b){var c=flip(this.put);forEach(arguments,function(a){forEach(a,c,this)},this);return this},remove:function(a){delete this[_14+a]},put:function(a,b){if(arguments.length==1)b=a;this[_14+a]=b},size:function(){var a=0;for(var b in this)if(b.charAt(0)==_14)a++;return a},union:function(a){return this.merge.apply(this.copy(),arguments)}});Map.implement(Enumerable);var _15="~";var Collection=Map.extend({constructor:function(a){this[_15]=new Array2;this.base(a)},add:function(a,b){assert(!this.has(a),"Duplicate key '"+a+"'.");this.put.apply(this,arguments)},copy:function(){var a=this.base();a[_15]=this[_15].copy();return a},forEach:function(a,b){var c=this[_15];var d=c.length;for(var i=0;i<d;i++){a.call(b,this[_14+c[i]],c[i],this)}},getAt:function(a){if(a<0)a+=this[_15].length;var b=this[_15][a];return(b===undefined)?undefined:this[_14+b]},getKeys:function(){return this[_15].concat()},indexOf:function(a){return this[_15].indexOf(String(a))},insertAt:function(a,b,c){assert(Math.abs(a)<this[_15].length,"Index out of bounds.");assert(!this.has(b),"Duplicate key '"+b+"'.");this[_15].insertAt(a,String(b));this.put.apply(this,slice(arguments,1))},item:Undefined,put:function(a,b){if(arguments.length==1)b=a;if(!this.has(a)){this[_15].push(String(a))}var c=this.constructor;if(c.Item&&!instanceOf(b,c.Item)){b=c.create.apply(c,arguments)}this[_14+a]=b},putAt:function(a,b){assert(Math.abs(a)<this[_15].length,"Index out of bounds.");arguments[0]=this[_15].item(a);this.put.apply(this,arguments)},remove:function(a){if(this.has(a)){this[_15].remove(String(a));delete this[_14+a]}},removeAt:function(a){this[_15].removeAt(a);delete this[_14+key]},reverse:function(){this[_15].reverse();return this},size:function(){return this[_15].length},sort:function(c){if(c){var d=this;this[_15].sort(function(a,b){return c(d[_14+a],d[_14+b],a,b)})}else this[_15].sort();return this},toString:function(){return String(this[_15])}},{Item:null,init:function(){this.prototype.item=this.prototype.getAt},create:function(a,b){return this.Item?new this.Item(a,b):b},extend:function(a,b){var c=this.base(a);c.create=this.create;extend(c,b);if(!c.Item){c.Item=this.Item}else if(typeof c.Item!="function"){c.Item=(this.Item||Base).extend(c.Item)}c.init();return c}});var _16=/\\(\d+)/g,_17=/\\./g,_18=/\(\?[:=!]|\[[^\]]+\]/g,_19=/\(/g,_20=/\$(\d+)/,_21=/^\$\d+$/;var RegGrp=Collection.extend({constructor:function(a,b){this.base(a);if(typeof b=="string"){this.global=/g/.test(b);this.ignoreCase=/i/.test(b)}},global:true,ignoreCase:false,exec:function(h,j){var k=(this.global?"g":"")+(this.ignoreCase?"i":"");h=String(h)+"";if(arguments.length==1){var l=this;var m=this[_15];j=function(a){if(a){var b,c=1,i=0;while((b=l[_14+m[i++]])){var d=c+b.length+1;if(arguments[c]){var e=b.replacement;switch(typeof e){case"function":var f=slice(arguments,c,d);var g=arguments[arguments.length-2];return e.apply(l,f.concat(g,h));case"number":return arguments[c+e];default:return e}}c=d}}return""}}return h.replace(new RegExp(this,k),j)},insertAt:function(a,b,c){if(instanceOf(b,RegExp)){arguments[1]=b.source}return base(this,arguments)},test:function(a){return this.exec(a)!=a},toString:function(){var e=0;return"("+this.map(function(c){var d=String(c).replace(_16,function(a,b){return"\\"+(1+Number(b)+e)});e+=c.length+1;return d}).join(")|(")+")"}},{IGNORE:"$0",init:function(){forEach("add,get,has,put,remove".split(","),function(b){_22(this,b,function(a){if(a&&a.source){arguments[0]=a.source}return base(this,arguments)})},this.prototype)},Item:{constructor:function(a,b){a=(a&&a.source)?a.source:String(a);if(typeof b=="number")b=String(b);else if(b==null)b="";if(typeof b=="string"&&_20.test(b)){if(_21.test(b)){b=parseInt(b.slice(1))}else{var Q=/'/.test(b.replace(/\\./g,""))?'"':"'";b=b.replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\$(\d+)/g,Q+"+(arguments[$1]||"+Q+Q+")+"+Q);b=new Function("return "+Q+b.replace(/(['"])\1\+(.*)\+\1\1$/,"$1")+Q)}}this.length=RegGrp.count(a);this.replacement=b;this.toString=K(a)},length:0,replacement:""},count:function(a){a=String(a).replace(_17,"").replace(_18,"");return match(a,_19).length}});
var JavaScript={name:"JavaScript",version:base2.version,exports:"Array2, Date2, String2",namespace:"",bind:function(c){forEach(this.exports.match(/\w+/g),function(a){var b=a.slice(0,-1);extend(c[b],this[a]);this[a](c[b].prototype)},this)}};if((new Date).getYear()>1900){Date.prototype.getYear=function(){return this.getFullYear()-1900};Date.prototype.setYear=function(a){return this.setFullYear(a+1900)}}Function.prototype.prototype={};if("".replace(/^/,K("$$"))=="$"){extend(String.prototype,"replace",function(a,b){if(typeof b=="function"){var c=b;b=function(){return String(c.apply(null,arguments)).split("$").join("$$")}}return this.base(a,b)})}var Array2=_23(Array,Array,"concat,join,pop,push,reverse,shift,slice,sort,splice,unshift",[Enumerable,{combine:function(d,e){if(!e)e=d;return this.reduce(d,function(a,b,c){a[b]=e[c];return a},{})},contains:function(a,b){return this.indexOf(a,b)!=-1},copy:function(a){var b=this.slice(a);if(!b.swap)this(b);return b},flatten:function(c){return this.reduce(c,function(a,b){if(this.like(b)){this.reduce(b,arguments.callee,a,this)}else{a.push(b)}return a},[],this)},forEach:_24,indexOf:function(a,b,c){var d=a.length;if(c==null){c=0}else if(c<0){c=Math.max(0,d+c)}for(var i=c;i<d;i++){if(a[i]===b)return i}return-1},insertAt:function(a,b,c){this.splice(a,b,0,c);return c},item:function(a,b){if(b<0)b+=a.length;return a[b]},lastIndexOf:function(a,b,c){var d=a.length;if(c==null){c=d-1}else if(from<0){c=Math.max(0,d+c)}for(var i=c;i>=0;i--){if(a[i]===b)return i}return-1},map:function(c,d,e){var f=[];this.forEach(c,function(a,b){f[b]=d.call(e,a,b,c)});return f},remove:function(a,b){var c=this.indexOf(a,b);if(c!=-1)this.removeAt(a,c);return b},removeAt:function(a,b){return this.splice(a,b,1)},swap:function(a,b,c){var d=a[b];a[b]=a[c];a[c]=d;return a}}]);Array2.reduce=Enumerable.reduce;Array2.like=function(a){return!!(a&&typeof a=="object"&&typeof a.length=="number")};var _25=/^((-\d+|\d{4,})(-(\d{2})(-(\d{2}))?)?)?T((\d{2})(:(\d{2})(:(\d{2})(\.(\d{1,3})(\d)?\d*)?)?)?)?(([+-])(\d{2})(:(\d{2}))?|Z)?$/;var _26={FullYear:2,Month:4,Date:6,Hours:8,Minutes:10,Seconds:12,Milliseconds:14};var _27={Hectomicroseconds:15,UTC:16,Sign:17,Hours:18,Minutes:20};var _28=/(((00)?:0+)?:0+)?\.0+$/;var _29=/(T[0-9:.]+)$/;var Date2=_23(Date,function(a,b,c,h,m,s,d){switch(arguments.length){case 0:return new Date;case 1:return new Date(a);default:return new Date(a,b,arguments.length==2?1:c,h||0,m||0,s||0,d||0)}},"",[{toISOString:function(c){var d="####-##-##T##:##:##.###";for(var e in _26){d=d.replace(/#+/,function(a){var b=c["getUTC"+e]();if(e=="Month")b++;return("000"+b).slice(-a.length)})}return d.replace(_28,"").replace(_29,"$1Z")}}]);Date2.now=function(){return(new Date).valueOf()};Date2.parse=function(a,b){if(arguments.length>1){assertType(b,"number","defaultDate should be of type 'number'.")}var c=String(a).match(_25);if(c){if(c[_26.Month])c[_26.Month]--;if(c[_27.Hectomicroseconds]>=5)c[_26.Milliseconds]++;var d=new Date(b||0);var e=c[_27.UTC]||c[_27.Hours]?"UTC":"";for(var f in _26){var value=c[_26[f]];if(!value)continue;d["set"+e+f](value);if(d["get"+e+f]()!=c[_26[f]]){return NaN}}if(c[_27.Hours]){var g=Number(c[_27.Sign]+c[_27.Hours]);var h=Number(c[_27.Sign]+(c[_27.Minutes]||0));d.setUTCMinutes(d.getUTCMinutes()+(g*60)+h)}return d.valueOf()}else{return Date.parse(a)}};var String2=_23(String,function(a){return new String(arguments.length==0?"":a)},"charAt,charCodeAt,concat,indexOf,lastIndexOf,match,replace,search,slice,split,substr,substring,toLowerCase,toUpperCase",[{trim:trim}]);function _23(c,d,e,f){var g=Module.extend();forEach(e.match(/\w+/g),function(a){g[a]=unbind(c.prototype[a])});forEach(f,g.implement,g);var h=function(){return g(this.constructor==g?d.apply(null,arguments):arguments[0])};h.prototype=g.prototype;forEach(g,function(a,b){if(c[b]){g[b]=c[b];delete g.prototype[b]}h[b]=g[b]});h.ancestor=Object;delete h.extend;if(c!=Array)delete h.forEach;return h};function extend(a,b){if(a&&b){if(arguments.length>2){var c=b;b={};b[c]=arguments[2]}var d=(typeof b=="function"?Function:Object).prototype;var i=_5.length,c;if(base2.__prototyping){while((c=_5[--i])){var f=b[c];if(f!=d[c]){if(_4.test(f)){_22(a,c,f)}else{a[c]=f}}}}for(c in b){if(d[c]===undefined){var f=b[c];if(c.charAt(0)=="@"&&detect(c.slice(1))){arguments.callee(a,f);continue}var h=a[c];if(h&&typeof f=="function"){if(f!=h&&(!h.method||!_11(f,h))){if(f.__base||_4.test(f)){_22(a,c,f)}else{a[c]=f}}}else{a[c]=f}}}}return a};function _11(a,b){while(b){if(!b.ancestor)return false;b=b.ancestor;if(b==a)return true}return false};function _22(c,d,e){var f=c[d];function _30(){var a=this.base;this.base=f;var b=e.apply(this,arguments);this.base=a;return b};_30.ancestor=f;_30.method=e;_30.toString=function(){return String(e)};c[d]=_30};if(typeof StopIteration=="undefined"){StopIteration=new Error("StopIteration")}function forEach(a,b,c,d){if(a==null)return;if(!d){if(typeof a=="function"&&a.call){d=Function}else if(typeof a.forEach=="function"&&a.forEach!=arguments.callee){a.forEach(b,c);return}else if(typeof a.length=="number"){_24(a,b,c);return}}_8(d||Object,a,b,c)};function _24(a,b,c){if(a==null)return;var d=a.length,i;if(typeof a=="string"){for(i=0;i<d;i++){b.call(c,a.charAt(i),i,a)}}else{for(i=0;i<d;i++){/*@cc_on@*//*@if(@_jscript_version<5.2)if(a[i]!==undefined||$Legacy.has(a,i))@else@*/if(i in a)/*@end@*/b.call(c,a[i],i,a)}}};function _8(g,h,j,k){var l=function(){this.i=1};l.prototype={i:1};var m=0;for(var i in new l)m++;_8=(m>1)?function(a,b,c,d){var e={};for(var f in b){if(!e[f]&&a.prototype[f]===undefined){e[f]=true;c.call(d,b[f],f,b)}}}:function(a,b,c,d){for(var e in b){if(a.prototype[e]===undefined){c.call(d,b[e],e,b)}}};_8(g,h,j,k)};function instanceOf(a,b){if(typeof b!="function"){throw new TypeError("Invalid 'instanceOf' operand.");}if(a==null)return false;/*@cc_on@*//*@if(@_jscript_version<5.1)if($Legacy.instanceOf(a,b))return true;@else@*/if(a instanceof b)return true;/*@end@*/if(Base.ancestorOf==b.ancestorOf)return false;var c=a.constructor;if(typeof c!="function")return false;if(Base.ancestorOf==c.ancestorOf)return b==Object;switch(b){case Array:return!!(typeof a=="object"&&a.join&&a.splice);case Function:return!!(typeof a=="function"&&a.call);case RegExp:return c.prototype.toString()==_6;case Date:return!!a.getTimezoneOffset;case String:case Number:case Boolean:return typeof a==typeof b.prototype.valueOf();case Object:return true}return false};function assert(a,b,c){if(!a){throw new(c||Error)(b||"Assertion failed.");}};function assertArity(a,b,c){if(b==null)b=a.callee.length;if(a.length<b){throw new SyntaxError(c||"Not enough arguments.");}};function assertType(a,b,c){if(b&&(typeof b=="function"?!instanceOf(a,b):typeof a!=b)){throw new TypeError(c||"Invalid type.");}};function assignID(a){if(!a.base2ID)a.base2ID="b2_"+counter();return a.base2ID};function counter(){return _7++};function copy(a){var b=function(){};b.prototype=a;return new b};function format(c){var d=arguments;var e=new RegExp("%([1-"+arguments.length+"])","g");return String(c).replace(e,function(a,b){return b<d.length?d[b]:a})};function match(a,b){return String(a).match(b)||[]};function rescape(a){return String(a).replace(_3,"\\$1")};function trim(a){return String(a).replace(_1,"").replace(_2,"")};function I(i){return i};function K(k){return function(){return k}};function bind(a,b){var c=slice(arguments,2);var d=function(){return a.apply(b,c.concat(slice(arguments)))};d._31=assignID(a);return d};function delegate(a,b){return function(){return a.apply(b,[this].concat(slice(arguments)))}};function flip(a){return function(){return a.apply(this,Array2.swap(arguments,0,1))}};function not(a){return function(){return!a.apply(this,arguments)}};function partial(a){var b=slice.call(arguments,1);return function(){return a.apply(this,b.concat(slice(arguments)))}};function unbind(b){return function(a){return b.apply(a,slice(arguments,1))}};base2=new Package(this,base2);eval(this.exports);base2.extend=extend;forEach(Enumerable,function(a,b){if(!Module[b])base2.addName(b,bind(a,Enumerable))});JavaScript=new Package(this,JavaScript);eval(this.exports)};new function(_){var DOM=new base2.Package(this,{name:"DOM",version:"1.0 (beta 1)",exports:"Interface, Binding, Node, Document, Element, AbstractView, Event, EventTarget, DocumentEvent, "+"NodeSelector, DocumentSelector, ElementSelector, StaticNodeList, "+"ViewCSS, HTMLDocument, HTMLElement, Selector, Traversal, XPathParser",bind:function(a){if(a&&a.nodeType){var b=assignID(a);if(!arguments.callee[b]){switch(a.nodeType){case 1:if(typeof a.className=="string"){(HTMLElement.bindings[a.tagName]||HTMLElement).bind(a)}else{Element.bind(a)}break;case 9:if(a.writeln){HTMLDocument.bind(a)}else{Document.bind(a)}break;default:Node.bind(a)}arguments.callee[b]=true}}return a},"@MSIE5.+win":{bind:function(a){if(a&&a.writeln){a.nodeType=9}return this.base(a)}}});eval(this.imports);var _32=detect("MSIE");var _33=detect("MSIE5");if(detect("MSIE[56].+win")&&!detect("SV1")){var closures={};extend(base2,"bind",function(b,c){if(!c||c.nodeType!=1){return this.base(b,c)}var d=c.uniqueID;var e=assignID(b);closures[e]=b;b=null;c=null;if(!closures[d])closures[d]={};var f=closures[d][e];if(f)return f;var g=function(){var a=document.all[d];return a?closures[e].apply(a,arguments):undefined};g._31=e;closures[d][e]=g;return g});attachEvent("onunload",function(){closures=null})}var Interface=Module.extend(null,{implement:function(c){if(typeof c=="object"){forEach(c,function(a,b){if(b.charAt(0)=="@"){forEach(a,arguments.callee,this)}else if(!this[b]&&typeof a=="function"){this.createDelegate(b,a.length)}},this)}return this.base(c)},createDelegate:function(a,b){if(!this[a]){var c="var fn=function _%1(%2){%3.base=%3.%1.ancestor;var m=%3.base?'base':'%1';return %3[m](%4)}";var d="abcdefghij".split("").slice(-b);eval(format(c,a,d,d[0],d.slice(1)));this[a]=fn}}});var Binding=Interface.extend(null,{extend:function(d,a){if(a&&a.bind!=Function.bind){var c=a.bind;delete a.bind}
var b=this.base(d,a);b.bind=this.bind;if(c)extend(b,"bind",c);return b},bind:function(b){return extend(b,this.prototype)}});var Node=Binding.extend({"@!(element.compareDocumentPosition)":{compareDocumentPosition:function(a,b){if(Traversal.contains(a,b)){return 4|16}else if(Traversal.contains(b,a)){return 2|8}var c=_34(a);var d=_34(b);if(c<d){return 4}else if(c>d){return 2}return 0}}});var _34=document.documentElement.sourceIndex?function(a){return a.sourceIndex}:function(a){var b=0;while(a){b=Traversal.getNodeIndex(a)+"."+b;a=a.parentNode}return b};var Document=Node.extend(null,{bind:function(b){extend(b,"createElement",function(a){return DOM.bind(this.base(a))});AbstractView.bind(b.defaultView);if(b!=window.document)new DOMContentLoadedEvent(b);return this.base(b)},"@!(document.defaultView)":{bind:function(a){a.defaultView=Traversal.getDefaultView(a);return this.base(a)}}});var _35=/^(href|src|type|value)$/;var _36={"class":"className","for":"htmlFor"};var Element=Node.extend({"@MSIE.+win":{getAttribute:function(a,b,c){if(a.className===undefined){return this.base(a,b)}var d=_37(a,b);if(d&&d.specified){if(_35.test(b)){return this.base(a,b,2)}else if(b=="style"){return a.style.cssText}else{return d.nodeValue}}return null},setAttribute:function(a,b,c){if(a.className===undefined){this.base(a,b,c)}else if(b=="style"){a.style.cssText=c}else{this.base(a,_36[b]||b,String(c))}}},"@!(element.hasAttribute)":{hasAttribute:function(a,b){return this.getAttribute(a,b)!=null}}});extend(Element.prototype,"cloneNode",function(a){var b=this.base(a||false);b.base2ID=undefined;return b});if(_32){var names="colSpan,rowSpan,vAlign,dateTime,accessKey,tabIndex,encType,maxLength,readOnly,longDesc";extend(_36,Array2.combine(names.toLowerCase().split(","),names.split(",")));var _37=_33?function(a,b){return a.attributes[b]||a.attributes[_36[b.toLowerCase()]]}:function(a,b){return a.getAttributeNode(b)}}var TEXT=_32?"innerText":"textContent";var Traversal=Module.extend({getDefaultView:function(a){return this.getDocument(a).defaultView},getNextElementSibling:function(a){while(a&&(a=a.nextSibling)&&!this.isElement(a))continue;return a},getNodeIndex:function(a){var b=0;while(a&&(a=a.previousSibling))b++;return b},getOwnerDocument:function(a){return a.ownerDocument},getPreviousElementSibling:function(a){while(a&&(a=a.previousSibling)&&!this.isElement(a))continue;return a},getTextContent:function(a){return a[TEXT]},isEmpty:function(a){a=a.firstChild;while(a){if(a.nodeType==3||this.isElement(a))return false;a=a.nextSibling}return true},setTextContent:function(a,b){return a[TEXT]=b},"@MSIE":{getDefaultView:function(a){return this.getDocument(a).parentWindow},"@MSIE5":{getOwnerDocument:function(a){return a.ownerDocument||a.document}}}},{contains:function(a,b){while(b&&(b=b.parentNode)&&a!=b)continue;return!!b},getDocument:function(a){return this.isDocument(a)?a:this.getOwnerDocument(a)},isDocument:function(a){return!!(a&&a.documentElement)},isElement:function(a){return!!(a&&a.nodeType==1)},"@(element.contains)":{contains:function(a,b){return a!=b&&(this.isDocument(a)?a==this.getOwnerDocument(b):a.contains(b))}},"@MSIE5":{isElement:function(a){return!!(a&&a.nodeType==1&&a.tagName!="!")}}});var AbstractView=Binding.extend();var Event=Binding.extend({"@!(document.createEvent)":{initEvent:function(a,b,c,d){a.type=b;a.bubbles=c;a.cancelable=d;a.timeStamp=new Date().valueOf()},"@MSIE":{initEvent:function(a,b,c,d){this.base(a,b,c,d);a.cancelBubble=!a.bubbles},preventDefault:function(a){if(a.cancelable!==false){a.returnValue=false}},stopPropagation:function(a){a.cancelBubble=true}}}},{"@!(document.createEvent)":{"@MSIE":{"@Mac":{bind:function(a){return this.base(extend(copy(a),{preventDefault:function(){if(this.cancelable!==false){this.returnValue=false}}}))}},"@Windows":{bind:function(a){if(!a.timeStamp){a.bubbles=!!_38[a.type];a.cancelable=!!_39[a.type];a.timeStamp=new Date().valueOf()}if(!a.target){a.target=a.srcElement}a.relatedTarget=a[(a.type=="mouseout"?"to":"from")+"Element"];return this.base(a)}}}}});if(_32){var _38="abort,error,select,change,resize,scroll";var _39="click,mousedown,mouseup,mouseover,mousemove,mouseout,keydown,keyup,submit,reset";_38=Array2.combine((_38+","+_39).split(","));_39=Array2.combine(_39.split(","))}var EventTarget=Interface.extend({"@!(element.addEventListener)":{addEventListener:function(a,b,c,d){var e=assignID(a);var f=c._31||assignID(c);var g=_40[e];if(!g)g=_40[e]={};var h=g[b];var i=a["on"+b];if(!h){h=g[b]={};if(i)h[0]=i}h[f]=c;if(i!==undefined){a["on"+b]=delegate(_40.handleEvent)}},dispatchEvent:function(a,b){return _40.handleEvent(a,b)},removeEventListener:function(a,b,c,d){var e=_40[a.base2ID];if(e&&e[b]){delete e[b][c.base2ID]}},"@MSIE.+win":{addEventListener:function(a,b,c,d){if(typeof c=="function"){c=bind(c,a)}this.base(a,b,c,d)},dispatchEvent:function(a,b){b.target=a;try{return a.fireEvent(b.type,b)}catch(error){return this.base(a,b)}}}}});var _40=new Base({handleEvent:function(a,b){var c=true;var d=_40[a.base2ID];if(d){b=Event.bind(b);var e=d[b.type];for(var i in e){var listener=e[i];if(listener.handleEvent){var result=listener.handleEvent(b)}else{result=listener.call(a,b)}if(result===false||b.returnValue===false)c=false}}return c},"@MSIE":{handleEvent:function(a,b){if(a.Infinity){a=a.document.parentWindow;if(!b)b=a.event}return this.base(a,b||Traversal.getDefaultView(a).event)}}});var DocumentEvent=Interface.extend({"@!(document.createEvent)":{createEvent:function(a,b){return Event.bind({})},"@(document.createEventObject)":{createEvent:function(a,b){return Event.bind(a.createEventObject())}}},"@(document.createEvent)":{"@!(document.createEvent('Events'))":{createEvent:function(a,b){return this.base(a,b=="Events"?"UIEvents":b)}}}});var DOMContentLoadedEvent=Base.extend({constructor:function(b){var c=false;this.fire=function(){if(!c){c=true;setTimeout(function(){var a=DocumentEvent.createEvent(b,"Events");Event.initEvent(a,"DOMContentLoaded",false,false);EventTarget.dispatchEvent(b,a)},1)}};EventTarget.addEventListener(b,"DOMContentLoaded",function(){c=true},false);EventTarget.addEventListener(Traversal.getDefaultView(b),"load",this.fire,false)},"@(attachEvent)":{constructor:function(){this.base(document);Traversal.getDefaultView(document).attachEvent("onload",this.fire)}},"@MSIE.+win":{constructor:function(a){this.base(a);if(a.readyState!="complete"){var b=this;a.write("<script id=__ready defer src=//:><\/script>");a.all.__ready.onreadystatechange=function(){if(this.readyState=="complete"){this.removeNode();b.fire()}}}}},"@KHTML":{constructor:function(a){this.base(a);if(a.readyState!="complete"){var b=this;var c=setInterval(function(){if(/loaded|complete/.test(a.readyState)){clearInterval(c);b.fire()}},100)}}}});new DOMContentLoadedEvent(document);Document.implement(DocumentEvent);Document.implement(EventTarget);Element.implement(EventTarget);var _41=/^\d+(px)?$/i;var _42=/(width|height|top|bottom|left|right|fontSize)$/;var _43=/^(color|backgroundColor)$/;var ViewCSS=Interface.extend({"@!(document.defaultView.getComputedStyle)":{"@MSIE":{getComputedStyle:function(b,c,d){var e=c.currentStyle;var f={getPropertyValue:function(a){return this[ViewCSS.toCamelCase(a)]}};for(var i in e){if(_42.test(i)){f[i]=_44(c,f[i])+"px"}else if(_43.test(i)){f[i]=_45(c,i=="color"?"ForeColor":"BackColor")}else{f[i]=e[i]}}return f}}}},{toCamelCase:function(c){return c.replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})}});function _44(a,b){if(_41.test(b))return parseInt(b);var c=a.style.left;var d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b||0;b=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return b};function _45(a,b){var c=a.document.body.createTextRange();c.moveToElementText(a);var d=c.queryCommandValue(b);return format("rgb(%1,%2,%3)",d&0xff,(d&0xff00)>>8,(d&0xff0000)>>16)};AbstractView.implement(ViewCSS);var NodeSelector=Interface.extend({"@!(element.querySelector)":{querySelector:function(a,b){return new Selector(b).exec(a,1)},querySelectorAll:function(a,b){return new Selector(b).exec(a)}}});extend(NodeSelector.prototype,{querySelector:function(a){return DOM.bind(this.base(a))},querySelectorAll:function(b){return extend(this.base(b),"item",function(a){return DOM.bind(this.base(a))})}});var DocumentSelector=NodeSelector.extend();var ElementSelector=NodeSelector.extend({"@!(element.matchesSelector)":{matchesSelector:function(a,b){return new Selector(b).test(a)}}});var StaticNodeList=Base.extend({constructor:function(b){b=b||[];this.length=b.length;this.item=function(a){return b[a]}},length:0,forEach:function(a,b){for(var i=0;i<this.length;i++){a.call(b,this.item(i),i,this)}},item:Undefined,"@(XPathResult)":{constructor:function(b){if(b&&b.snapshotItem){this.length=b.snapshotLength;this.item=function(a){return b.snapshotItem(a)}}else this.base(b)}}});StaticNodeList.implement(Enumerable);var CSSParser=RegGrp.extend({constructor:function(a){this.base(a);this.cache={};this.sorter=new RegGrp;this.sorter.add(/:not\([^)]*\)/,RegGrp.IGNORE);this.sorter.add(/([ >](\*|[\w-]+))([^: >+~]*)(:\w+-child(\([^)]+\))?)([^: >+~]*)/,"$1$3$6$4")},cache:null,ignoreCase:true,escape:function(b){var c=/'/g;var d=this._46=[];return this.optimise(this.format(String(b).replace(CSSParser.ESCAPE,function(a){d.push(a.slice(1,-1).replace(c,"\\'"));return"\x01"+d.length})))},format:function(a){return a.replace(CSSParser.WHITESPACE,"$1").replace(CSSParser.IMPLIED_SPACE,"$1 $2").replace(CSSParser.IMPLIED_ASTERISK,"$1*$2")},optimise:function(a){return this.sorter.exec(a.replace(CSSParser.WILD_CARD,">* "))},parse:function(a){return this.cache[a]||(this.cache[a]=this.unescape(this.exec(this.escape(a))))},unescape:function(c){var d=this._46;return c.replace(/\x01(\d+)/g,function(a,b){return d[b-1]})}},{ESCAPE:/'(\\.|[^'\\])*'|"(\\.|[^"\\])*"/g,IMPLIED_ASTERISK:/([\s>+~,]|[^(]\+|^)([#.:@])/g,IMPLIED_SPACE:/(^|,)([^\s>+~])/g,WHITESPACE:/\s*([\s>+~(),]|^|$)\s*/g,WILD_CARD:/\s\*\s/g,_47:function(c,d,e,f,g,h,i,j){f=/last/i.test(c)?f+"+1-":"";if(!isNaN(d))d="0n+"+d;else if(d=="even")d="2n";else if(d=="odd")d="2n+1";d=d.split(/n\+?/);var a=d[0]?(d[0]=="-")?-1:parseInt(d[0]):1;var b=parseInt(d[1])||0;var k=a<0;if(k){a=-a;if(a==1)b++}var l=format(a==0?"%3%7"+(f+b):"(%4%3-%2)%6%1%70%5%4%3>=%2",a,b,e,f,h,i,j);if(k)l=g+"("+l+")";return l}});var XPathParser=CSSParser.extend({constructor:function(){this.base(XPathParser.rules);this.sorter.putAt(1,"$1$4$3$6")},escape:function(a){return this.base(a).replace(/,/g,"\x02")},unescape:function(a){return this.base(a.replace(/\[self::\*\]/g,"").replace(/(^|\x02)\//g,"$1./").replace(/\x02/g," | "))},"@opera":{unescape:function(a){return this.base(a.replace(/last\(\)/g,"count(preceding-sibling::*)+count(following-sibling::*)+1"))}}},{init:function(){this.values.attributes[""]="[@$1]";forEach(this.types,function(a,b){forEach(this.values[b],a,this.rules)},this)},optimised:{pseudoClasses:{"first-child":"[1]","last-child":"[last()]","only-child":"[last()=1]"}},rules:extend({},{"@!KHTML":{"(^|\\x02) (\\*|[\\w-]+)#([\\w-]+)":"$1id('$3')[self::$2]","([ >])(\\*|[\\w-]+):([\\w-]+-child(\\(([^)]+)\\))?)":function(a,b,c,d,e,f){var g=(b==" ")?"//*":"/*";if(/^nth/i.test(d)){g+=_47(d,f,"position()")}else{g+=XPathParser.optimised.pseudoClasses[d]}return g+"[self::"+c+"]"}}}),types:{identifiers:function(a,b){this[rescape(b)+"([\\w-]+)"]=a},combinators:function(a,b){this[rescape(b)+"(\\*|[\\w-]+)"]=a},attributes:function(a,b){this["\\[([\\w-]+)\\s*"+rescape(b)+"\\s*([^\\]]*)\\]"]=a},pseudoClasses:function(a,b){this[":"+b.replace(/\(\)$/,"\\(([^)]+)\\)")]=a}},values:{identifiers:{"#":"[@id='$1'][1]",".":"[contains(concat(' ',@class,' '),' $1 ')]"},combinators:{" ":"/descendant::$1",">":"/child::$1","+":"/following-sibling::*[1][self::$1]","~":"/following-sibling::$1"},attributes:{"*=":"[contains(@$1,'$2')]","^=":"[starts-with(@$1,'$2')]","$=":"[substring(@$1,string-length(@$1)-string-length('$2')+1)='$2']","~=":"[contains(concat(' ',@$1,' '),' $2 ')]","|=":"[contains(concat('-',@$1,'-'),'-$2-')]","!=":"[not(@$1='$2')]","=":"[@$1='$2']"},pseudoClasses:{"empty":"[not(child::*) and not(text())]","first-child":"[not(preceding-sibling::*)]","last-child":"[not(following-sibling::*)]","not()":_48,"nth-child()":_47,"nth-last-child()":_47,"only-child":"[not(preceding-sibling::*) and not(following-sibling::*)]","root":"[not(parent::*)]"}},"@opera":{init:function(){this.optimised.pseudoClasses["last-child"]=this.values.pseudoClasses["last-child"];this.optimised.pseudoClasses["only-child"]=this.values.pseudoClasses["only-child"];this.base()}}});var _49=new XPathParser;function _48(a,b){return"[not("+_49.exec(trim(b)).replace(/\[1\]/g,"").replace(/^(\*|[\w-]+)/,"[self::$1]").replace(/\]\[/g," and ").slice(1,-1)+")]"};function _47(a,b,c){return"["+CSSParser._47(a,b,c||"count(preceding-sibling::*)+1","last()","not"," and "," mod ","=")+"]"};var _50=":(checked|disabled|enabled|contains)|^(#[\\w-]+\\s*)?\\w+$";if(detect("KHTML")){if(detect("WebKit5")){_50+="|nth\\-|,"}else{_50="."}}_50=new RegExp(_50);var _51;var Selector=Base.extend({constructor:function(a){this.toString=K(trim(a))},exec:function(a,b){return Selector.parse(this)(a,b)},test:function(a){var b=new Selector(this+"[-base2-test]");a.setAttribute("-base2-test",true);var c=b.exec(Traversal.getOwnerDocument(a),true);a.removeAttribute("-base2-test");return c==a},toXPath:function(){return Selector.toXPath(this)},"@(XPathResult)":{exec:function(a,b){if(_50.test(this)){return this.base(a,b)}var c=Traversal.getDocument(a);var d=b?9:7;var e=c.evaluate(this.toXPath(),a,null,d,null);return b?e.singleNodeValue:e}},"@MSIE":{exec:function(a,b){if(typeof a.selectNodes!="undefined"&&!_50.test(this)){var c=b?"selectSingleNode":"selectNodes";return a[c](this.toXPath())}return this.base(a,b)}},"@(true)":{exec:function(a,b){try{var c=this.base(a||document,b)}catch(error){throw new SyntaxError(format("'%1' is not a valid CSS selector.",this));}return b?c:new StaticNodeList(c)}}},{toXPath:function(a){if(!_51)_51=new XPathParser;return _51.parse(a)}});new function(_){var _52={"=":"%1=='%2'","!=":"%1!='%2'","~=":/(^| )%1( |$)/,"|=":/^%1(-|$)/,"^=":/^%1/,"$=":/%1$/,"*=":/%1/};_52[""]="%1!=null";var _53={"checked":"e%1.checked","contains":"e%1[TEXT].indexOf('%2')!=-1","disabled":"e%1.disabled","empty":"Traversal.isEmpty(e%1)","enabled":"e%1.disabled===false","first-child":"!Traversal.getPreviousElementSibling(e%1)","last-child":"!Traversal.getNextElementSibling(e%1)","only-child":"!Traversal.getPreviousElementSibling(e%1)&&!Traversal.getNextElementSibling(e%1)","root":"e%1==Traversal.getDocument(e%1).documentElement"};var _54=detect("(element.sourceIndex)");var _55="var p%2=0,i%2,e%2,n%2=e%1.";var _56=_54?"e%1.sourceIndex":"assignID(e%1)";var _57="var g="+_56+";if(!p[g]){p[g]=1;";var _58="r[r.length]=e%1;if(s)return e%1;";var _59="r.sort(sorter);";var _60="fn=function(e0,s){indexed++;var r=[],p={},reg=[%1],"+"d=Traversal.getDocument(e0),c=d.body?'toUpperCase':'toString';";var byId=_32?function(a,b){var c=a.all[b]||null;if(!c||c.id==b)return c;for(var i=0;i<c.length;i++){if(c[i].id==b)return c[i]}return null}:function(a,b){return a.getElementById(b)};var indexed=1;function register(a){if(a.rows){a.b2_length=a.rows.length;a.b2_lookup="rowIndex"}else if(a.cells){a.b2_length=a.cells.length;a.b2_lookup="cellIndex"}else if(a.b2_indexed!=indexed){var b=0;var c=a.firstChild;while(c){if(c.nodeType==1&&c.nodeName!="!"){c.b2_index=++b}c=c.nextSibling}a.b2_length=b;a.b2_lookup="b2_index"}a.b2_indexed=indexed;return a};var sorter=_54?function(a,b){return a.sourceIndex-b.sourceIndex}:Node.compareDocumentPosition;var fn;var reg;var _61;var _62;var _63;var _64;var _65={};var parser=new CSSParser({"^ \\*:root":function(a){_62=false;var b="e%2=d.documentElement;if(Traversal.contains(e%1,e%2)){";return format(b,_61++,_61)}," (\\*|[\\w-]+)#([\\w-]+)":function(a,b,c){_62=false;var d="var e%2=byId(d,'%4');if(e%2&&";if(b!="*")d+="e%2.nodeName=='%3'[c]()&&";d+="Traversal.contains(e%1,e%2)){";if(_63)d+=format("i%1=n%1.length;",_63);return format(d,_61++,_61,b,c)}," (\\*|[\\w-]+)":function(a,b){_64++;_62=b=="*";var c=_55;c+=(_62&&_33)?"all":"getElementsByTagName('%3')";c+=";for(i%2=0;(e%2=n%2[i%2]);i%2++){";return format(c,_61++,_63=_61,b)},">(\\*|[\\w-]+)":function(a,b){var c=_32&&_63;_62=b=="*";var d=_55;d+=c?"children":"childNodes";if(!_62&&c)d+=".tags('%3')";d+=";for(i%2=0;(e%2=n%2[i%2]);i%2++){";if(_62){d+="if(e%2.nodeType==1){";_62=_33}else{if(!c)d+="if(e%2.nodeName=='%3'[c]()){"}return format(d,_61++,_63=_61,b)},"\\+(\\*|[\\w-]+)":function(a,b){var c="";if(_62&&_32)c+="if(e%1.tagName!='!'){";_62=false;c+="e%1=Traversal.getNextElementSibling(e%1);if(e%1";if(b!="*")c+="&&e%1.nodeName=='%2'[c]()";c+="){";return format(c,_61,b)},"~(\\*|[\\w-]+)":function(a,b){var c="";if(_62&&_32)c+="if(e%1.tagName!='!'){";_62=false;_64=2;c+="while(e%1=e%1.nextSibling){if(e%1.b2_adjacent==indexed)break;if(";if(b=="*"){c+="e%1.nodeType==1";if(_33)c+="&&e%1.tagName!='!'"}else c+="e%1.nodeName=='%2'[c]()";c+="){e%1.b2_adjacent=indexed;";return format(c,_61,b)},"#([\\w-]+)":function(a,b){_62=false;var c="if(e%1.id=='%2'){";if(_63)c+=format("i%1=n%1.length;",_63);return format(c,_61,b)},"\\.([\\w-]+)":function(a,b){_62=false;reg.push(new RegExp("(^|\\s)"+rescape(b)+"(\\s|$)"));return format("if(e%1.className&&reg[%2].test(e%1.className)){",_61,reg.length-1)},":not\\((\\*|[\\w-]+)?([^)]*)\\)":function(a,b,c){var d=(b&&b!="*")?format("if(e%1.nodeName=='%2'[c]()){",_61,b):"";d+=parser.exec(c);return"if(!"+d.slice(2,-1).replace(/\)\{if\(/g,"&&")+"){"},":nth(-last)?-child\\(([^)]+)\\)":function(a,b,c){_62=false;b=format("e%1.parentNode.b2_length",_61);var d="if(p%1!==e%1.parentNode)p%1=register(e%1.parentNode);";d+="var i=e%1[p%1.b2_lookup];if(";return format(d,_61)+CSSParser._47(a,c,"i",b,"!","&&","%","==")+"){"},":([\\w-]+)(\\(([^)]+)\\))?":function(a,b,c,d){return"if("+format(_53[b]||"throw",_61,d||"")+"){"},"\\[([\\w-]+)\\s*([^=]?=)?\\s*([^\\]]*)\\]":function(a,b,c,d){var e=_36[b]||b;if(c){var f="e%1.getAttribute('%2',2)";if(!_35.test(b)){f="e%1.%3||"+f}b=format("("+f+")",_61,b,e)}else{b=format("Element.getAttribute(e%1,'%2')",_61,b)}var g=_52[c||""];if(instanceOf(g,RegExp)){reg.push(new RegExp(format(g.source,rescape(parser.unescape(d)))));g="reg[%2].test(%1)";d=reg.length-1}return"if("+format(g,b,d)+"){"}});Selector.parse=function(a){if(!_65[a]){reg=[];fn="";var b=parser.escape(a).split(",");for(var i=0;i<b.length;i++){_62=_61=_63=0;_64=b.length>1?2:0;var c=parser.exec(b[i])||"throw;";if(_62&&_32){c+=format("if(e%1.tagName!='!'){",_61)}var d=(_64>1)?_57:"";c+=format(d+_58,_61);c+=Array(match(c,/\{/g).length+1).join("}");fn+=c}if(b.length>1)fn+=_59;eval(format(_60,reg)+parser.unescape(fn)+"return s?null:r}");_65[a]=fn}return _65[a]}};Document.implement(DocumentSelector);Element.implement(ElementSelector);var HTMLDocument=Document.extend(null,{"@(document.activeElement===undefined)":{bind:function(b){b.activeElement=null;EventTarget.addEventListener(b,"focus",function(a){b.activeElement=a.target},false);return this.base(b)}}});var HTMLElement=Element.extend({addClass:function(a,b){if(!this.hasClass(a,b)){a.className+=(a.className?" ":"")+b}},hasClass:function(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)");return c.test(a.className)},removeClass:function(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)","g");a.className=a.className.replace(c,"$2")},toggleClass:function(a,b){if(this.hasClass(a,b)){this.removeClass(a,b)}else{this.addClass(a,b)}}},{bindings:{},tags:"*",extend:function(){var b=base(this,arguments);var c=(b.tags||"").toUpperCase().split(",");forEach(c,function(a){HTMLElement.bindings[a]=b});return b},"@!(element.ownerDocument)":{bind:function(a){a.ownerDocument=Traversal.getOwnerDocument(a);return this.base(a)}}});eval(this.exports)};new function(_){var JSB=new base2.Package(this,{name:"JSB",version:"0.7",imports:"DOM",exports:"Behavior, Rule, RuleList"});eval(this.imports);var Behavior=Abstract.extend();var Call=Base.extend({constructor:function(a,b,c,d){this.release=function(){b.apply(a,c)};this.rank=d||(100+Call.list.length)}},{list:[],defer:function(a,b){return function(){if(Call.list){Call.list.push(new Call(this,a,arguments,b))}else{a.apply(this,arguments)}}},init:function(){EventTarget.addEventListener(document,"DOMContentLoaded",function(){if(Call.list){DOM.bind(document);Call.list.sort(function(a,b){return a.rank-b.rank});invoke(Call.list,"release");delete Call.list;setTimeout(function(){var a=DocumentEvent.createEvent(document,"Events");Event.initEvent(a,"ready",false,false);EventTarget.dispatchEvent(document,a)},1)}},false)}});var _66=/^on[a-z]+$/;var Rule=Base.extend({constructor:function(e,f){e=new Selector(e);if(Behavior.ancestorOf(f)){f=f.prototype}var g={},h={},i=f.style,j={};forEach(f,function(a,b){if(b.charAt(0)=="@"){if(detect(b.slice(1))){forEach(a,arguments.callee)}}else if(typeof a=="function"&&_66.test(b)){h[b.slice(2)]=a}else if(b!="style"){g[b]=a}});function addBehavior(a){var b=assignID(a);if(!j[b]){j[b]=true;DOM.bind(a);extend(a,g);extend(a.style,i);for(var c in h){var target=a;var d=h[c];if(c.indexOf("document")==0){target=document;c=c.slice(8);d=bind(d,a)}target.addEventListener(c,d,false)}}};this.refresh=Call.defer(function(){e.exec(document).forEach(addBehavior)});this.toString=K(String(e));this.refresh()},refresh:Undefined});var RuleList=Collection.extend({constructor:function(a){this.base(a);this.globalize()},globalize:Call.defer(function(){var e=/[^\s,]+/g;var f=/^#[\w-]+$/;forEach(this,function(c,d){forEach(match(d,e),function(a){if(f.test(a)){var b=ViewCSS.toCamelCase(a.slice(1));window[b]=Document.querySelector(document,a)}})})},10),refresh:function(){this.invoke("refresh")}},{Item:Rule});eval(this.exports)};eval(base2.namespace);var DEFAULT="@0";var IGNORE=RegGrp.IGNORE;var Colorizer=RegGrp.extend({constructor:function(c,d,e){this.extend(e);this.patterns=c||{};var f={},i;forEach(c,function(a,b){f[b]=d[b]||DEFAULT});forEach(d,function(a,b){f[b]=d[b]});this.base(f)},patterns:null,tabStop:4,urls:true,copy:function(){var a=this.base();a.patterns=copy(this.patterns);return a},exec:function(a,b){a=this.base(this.escape(a));if(!b){a=this._67(a);if(this.urls)a=Colorizer.urls.exec(a)}return this.unescape(a)},escape:function(a){return String(a).replace(/</g,"\x01").replace(/&/g,"\x02")},put:function(c,d){if(!instanceOf(c,RegGrp.Item)){if(typeof d=="string"){d=d.replace(/@(\d)/,function(a,b){return format(Colorizer.FORMAT,c,b)})}c=this.patterns[c]||Colorizer.patterns[c]||c;if(instanceOf(c,RegExp))c=c.source;c=this.escape(c)}return this.base(c,d)},unescape:function(a){return a.replace(/\x01/g,"&lt;").replace(/\x02/g,"&amp;")},_67:function(c){var d=this.tabStop;if(d>0){var e=Array(d+1).join(" ");return c.replace(Colorizer.TABS,function(a){a=a.replace(Colorizer.TAB,e);if(d>1){var b=(a.length-1)%d;if(b)a=a.slice(0,-b)}return a.replace(/ /g,"&nbsp;")})}return c},"@MSIE":{_67:function(a){return this.base(a).replace(/\r?\n/g,"<br>")}}},{version:"0.8",FORMAT:'<span class="%1">$%2</span>',DEFAULT:DEFAULT,IGNORE:IGNORE,TAB:/\t/g,TABS:/\n([\t \xa0]+)/g,init:function(){forEach(this.patterns,function(c,d,e){if(instanceOf(c,Array)){e[d]=reduce(c,function(a,b){a.add(e[b]);return a},new RegGrp)}});this.urls=this.patterns.urls.copy();this.urls.putAt(0,'<a href="mailto:$0">$0</a>');this.urls.putAt(1,'<a href="$0">$0</a>')},addScheme:function(a,b,c,d){this[a]=new this(b,c,d)},patterns:{block_comment:/\/\*[^*]*\*+([^\/][^*]*\*+)*\//,email:/([\w.+-]+@[\w.-]+\.\w+)/,line_comment:/\/\/[^\r\n]*/,number:/\b\-?(0|[1-9]\d*)(\.\d+)?([eE][-+]?\d+)?\b/,string1:/'(\\.|[^'\\])*'/,string2:/"(\\.|[^"\\])*"/,url:/(http:\/\/+[\w\/\-%&#=.,?+$]+)/,comment:["block_comment","line_comment"],string:["string1","string2"],urls:["email","url"]},urls:null});base2.addPackage("code");base2.code.addName("Colorizer",Colorizer);with(base2.code.Colorizer)addScheme("xml",{attribute:/(\w+)=("[^"]*"|'[^']*')/,cdata:/<!\[CDATA\[([^\]]|\][^\]]|\]\][^>])*\]\]>/,comment:/<!\s*(--([^-]|[\r\n]|-[^-])*--\s*)>/,entity:/&#?\w+;/,"processing-instruction":/<\?[\w-]+[^>]+>/,tag:/(<\/?)([\w:-]+)/,text:/[>;][^<>&]*/},{cdata:IGNORE,tag:"$1@2",attribute:'@1=<span class="attribute value">$2</span>',text:IGNORE},{tabStop:1});with(base2)code.Colorizer.addScheme("html",{conditional:/<!(--)?\[[^\]]*\]>|<!\[endif\](--)?>/,doctype:/<!(DOCTYPE|doctype)[^>]+>/,inline:/<(script|style)([^>]*)>((\\.|[^\\])*)<\/\1>/},{inline:function(a,b,c,d){return format(this.INLINE,b,this.exec(c,true),d)}},{INLINE:'&lt;<span class="tag">%1</span>%2&gt;%3&lt;/<span class="tag">%1</span>&gt;',tabStop:1});with(base2.code.Colorizer)html.merge(xml);with(base2.code.Colorizer)addScheme("css",{at_rule:/@[\w\s]+/,bracketed:/\([^'\x22)]*\)/,comment:patterns.block_comment,property:/(\w[\w-]*\s*):([^;}]+)/,special:/(\-[\w-]*\s*):/,selector:/([\w-:\[.#][^{};]*)\{/},{bracketed:IGNORE,selector:"@1{",special:"@1:",property:'@1:<span class="property value">$2</span>'});with(base2.code.Colorizer)addScheme("javascript",{conditional:/\/\*@if\s*\([^\)]*\)|\/\*@[\s\w]*|@\*\/|\/\/@\w+|@else[\s\w]*/,global:/\b(clearInterval|clearTimeout|constructor|document|escape|hasOwnProperty|Infinity|isNaN|NaN|parseFloat|parseInt|prototype|setInterval|setTimeout|toString|unescape|valueOf|window)\b/,keyword:/\b(&&|\|\||arguments|break|case|continue|default|delete|do|else|false|for|function|if|in|instanceof|new|null|return|switch|this|true|typeof|var|void|while|with|undefined)\b/,regexp:/([\[(\^=,{}:;&|!*?]\s*)(\/(\\\/|[^\/*])(\\.|[^\/\n\\])*\/[mgi]*)/,special:/\b(assert\w*|alert|catch|confirm|console|debug|debugger|eval|finally|prompt|throw|try)\b/},{comment:DEFAULT,string:DEFAULT,regexp:"$1@2",number:DEFAULT});with(base2)with(code)Colorizer["html-multi"]=Colorizer.html.union({inline:function(a,b,c,d){var e=b=="style"?"css":"javascript";d=Colorizer[e].exec(d,true);d=format('<span class="%1">%2</span>',e,d);return format(this.INLINE,b,this.exec(c,true),d)}});with(base2.code.Colorizer.javascript){add("\\b("+(base2.exports+",base,base2,merge,union,implement,Array2,Date2,String2").match(/[^\s,]+/g).join("|")+")\\b",'<span class="base2">$0</span>');insertAt(0,/("@[^"]+"):/,'<span class="special">$1</span>:');tabStop=2}eval(base2.namespace);eval(DOM.namespace);eval(JSB.namespace);var bindings=new RuleList;bindings.add("pre",{ondocumentready:function(){if(this.hasClass("js")){this.addClass("javascript")}var a=this.className.split(/\s+/);for(var i=0;i<a.length;i++){var b=a[i];var c=Colorizer[b];if(c instanceof Colorizer){var d=Traversal.getTextContent(this);this.innerHTML=c.exec(d);this.addClass("highlight");if(b=="html-multi")this.addClass("html");break}}}});function updateFlag(){this.nextSibling.style.color=this.value?"#898E79":"#A03333"};bindings.add("input.required,textarea.required",{ondocumentready:updateFlag,ondocumentmouseup:updateFlag,ondocumentkeyup:updateFlag});

var Words = Collection.extend({
	constructor: function(script, phrase) {
		this.base();
		forEach (script.match(WORDS), this.add, this);
		this.encode(phrase);
	},
	
	add: function(word) {
		if (!this.has(word)) this.base(word);
		word = this.get(word);
		word.count++;
		return word;
	},
	
	encode: function(phrase) {
		// sort by frequency
		this.sort(function(word1, word2) {
			return word2.count - word1.count;
		});
		
		eval("var a=62,e=" + Packer.ENCODE62(phrase));
		var encode = e;		
		var encoded = new Collection; // a dictionary of base62 -> base10
		var count = this.size();
		for (var i = 0; i < count; i++) {
			encoded.put(encode(i), i);
		}
		
		var empty = function() {return ""};
		var index = 0;
		forEach (this, function(word) {
			if (encoded.has(word)) {
				word.index = encoded.get(word);
				word.toString = empty;
			} else {
				while (this.has(encode(index))) index++;
				word.index = index++;
			}
			word.encoded = encode(word.index);
		}, this);
		
		// sort by encoding
		this.sort(function(word1, word2) {
			return word1.index - word2.index;
		});
	},
	
	toString: function() {
		return this.getValues().join("|");
	}
}, {
	Item: {
		constructor: function(word) {
			this.toString = function() {return word};
		},
		
		count: 0,
		encoded: "",
		index: -1
	}
});

/*
	Packer version 3.0 (final) - copyright 2004-2007, Dean Edwards
	http://www.opensource.org/licenses/mit-license
*/

eval(base2.namespace);
eval(JavaScript.namespace);

var IGNORE = RegGrp.IGNORE;
var REMOVE = "";
var SPACE = " ";
var WORDS = /\w+/g;

var Packer = Base.extend({
	minify: function(script) {
		script = script.replace(Packer.CONTINUE, "");
		script = Packer.data.exec(script);
		script = Packer.whitespace.exec(script);
		script = Packer.clean.exec(script);
		return script;
	},
	
	pack: function(script, base62, shrink, phrase) {
		script = this.minify(script + "\n");
		if (shrink) script = this._shrinkVariables(script);
		if (base62) script = this._base62Encode(script, phrase);
		return script;
	},
	
	_base62Encode: function(script, phrase) {
		var words = new Words(script, phrase);
		var encode = function(word) {
			return words.get(word).encoded;
		};

        // check if given array has all unique values
		var isUniq = function(arr) {
            return !!arr.reduce(function (dict, item) {
                if (!dict || dict[item]) {
                    return false;
                } else {
                    dict[item] = true;
                    return dict;
                }
            }, {});
        };

		phrase = ((phrase && phrase.length === 6 && !/[^a-z]/i.test(phrase) && isUniq(phrase.split(''))) ? phrase: 'packer').split('');
		
		/* build the packed script */
		
		var p = this._escape(script.replace(WORDS, encode));		
		var a = Math.min(Math.max(words.size(), 2), 62);
		var c = words.size();
		var k = words;
		var e = Packer["ENCODE" + (a > 10 ? a > 36 ? 62 : 36 : 10)];
		//var r = a > 10 ? "e(c)" : "c";
		var r = a > 10 ? (phrase[4] + '(' + phrase[2] + ')') : phrase[2];

		// the whole thing
		return format(Packer.UNPACK(phrase), p,a,c,k,e,r);
	},
	
	_escape: function(script) {
		// single quotes wrap the final string so escape them
		// also escape new lines required by conditional comments
		return script.replace(/([\\'])/g, "\\$1").replace(/[\r\n]+/g, "\\n");
	},
	
	_shrinkVariables: function(script) {
		// Windows Scripting Host cannot do regexp.test() on global regexps.
		var global = function(regexp) {
			// This function creates a global version of the passed regexp.
			return new RegExp(regexp.source, "g");
		};
		
		var data = []; // encoded strings and regular expressions
		var REGEXP = /^[^'"]\//;
		var store = function(string) {
			var replacement = "#" + data.length;
			if (REGEXP.test(string)) {
				replacement = string.charAt(0) + replacement;
				string = string.slice(1);
			}
			data.push(string);
			return replacement;
		};
		
		// Base52 encoding (a-Z)
		var encode52 = function(c) {
			return (c < 52 ? '' : arguments.callee(parseInt(c / 52))) +
				((c = c % 52) > 25 ? String.fromCharCode(c + 39) : String.fromCharCode(c + 97));
		};
				
		// identify blocks, particularly identify function blocks (which define scope)
		var BLOCK = /(function\s*[\w$]*\s*\(\s*([^\)]*)\s*\)\s*)?(\{([^{}]*)\})/;
		var VAR_ = /var\s+/g;
		var VAR_NAME = /var\s+[\w$]+/g;
		var COMMA = /\s*,\s*/;
		var blocks = []; // store program blocks (anything between braces {})
		// encoder for program blocks
		var encode = function(block, func, args) {
			if (func) { // the block is a function block
			
				// decode the function block (THIS IS THE IMPORTANT BIT)
				// We are retrieving all sub-blocks and will re-parse them in light
				// of newly shrunk variables
				block = decode(block);
				
				// create the list of variable and argument names 
				var vars = match(block, VAR_NAME).join(",").replace(VAR_, "");
				var ids = Array2.combine(args.split(COMMA).concat(vars.split(COMMA)));
				
				// process each identifier
				var count = 0, shortId;
				forEach (ids, function(id) {
					id = trim(id);
					if (id && id.length > 1) { // > 1 char
						id = rescape(id);
						// find the next free short name (check everything in the current scope)
						do shortId = encode52(count++);
						while (new RegExp("[^\\w$.]" + shortId + "[^\\w$:]").test(block));
						// replace the long name with the short name
						var reg = new RegExp("([^\\w$.])" + id + "([^\\w$:])");
						while (reg.test(block)) block = block.replace(global(reg), "$1" + shortId + "$2");
						var reg = new RegExp("([^{,\\w$.])" + id + ":", "g");
						block = block.replace(reg, "$1" + shortId + ":");
					}
				});
			}
			var replacement = "~" + blocks.length + "~";
			blocks.push(block);
			return replacement;
		};
		
		// decoder for program blocks
		var ENCODED = /~(\d+)~/;
		var decode = function(script) {
			while (ENCODED.test(script)) {
				script = script.replace(global(ENCODED), function(match, index) {
					return blocks[index];
				});
			}
			return script;
		};
		
		// encode strings and regular expressions
		script = Packer.data.exec(script, store);
		
		// remove closures (this is for base2 namespaces only)
		script = script.replace(/new function\(_\)\s*\{/g, "{;#;");
		
		// encode blocks, as we encode we replace variable and argument names
		while (BLOCK.test(script)) {
			script = script.replace(global(BLOCK), encode);
		}
		
		// put the blocks back
		script = decode(script);
		
		// put back the closure (for base2 namespaces only)
		script = script.replace(/\{;#;/g, "new function(_){");
		
		// put strings and regular expressions back
		script = script.replace(/#(\d+)/g, function(match, index) {		
			return data[index];
		});
		
		return script;
	}
}, {
	CONTINUE: /\\\r?\n/g,
	
	ENCODE10: "String",
	ENCODE36: "function(c){return c.toString(a)}",
    /**
     * @return {string}
     */
    ENCODE62: function(phrase){
        return "function("+phrase[2]+"){return("+phrase[2]+"<"+phrase[1]+"?'':"+phrase[4]+"(parseInt("+phrase[2]+"/"+phrase[1]+")))+(("+phrase[2]+"="+phrase[2]+"%"+phrase[1]+")>35?String.fromCharCode("+phrase[2]+"+29):"+phrase[2]+".toString(36))}";
	},

    /**
     * @return {string}
     * p 0
     * a 1
     * c 2
     * k 3
     * e 4
     * r 5
     */
    UNPACK: function(phrase){
        return "eval(function("+phrase.join(',')+"){"+phrase[4]+"=%5;if(!''.replace(/^/,String)){while("+phrase[2]+"--)"+phrase[5]+"[%6]="+phrase[3]+"["+phrase[2]+"]" +
	        "||%6;"+phrase[3]+"=[function("+phrase[4]+"){return "+phrase[5]+"["+phrase[4]+"]}];"+phrase[4]+"=function(){return'\\\\w+'};"+phrase[2]+"=1};while("+phrase[2]+"--)if("+phrase[3]+"["+phrase[2]+"])"+phrase[0]+"="+phrase[0]+"." +
			"replace(new RegExp('\\\\b'+"+phrase[4]+"("+phrase[2]+")+'\\\\b','g'),"+phrase[3]+"["+phrase[2]+"]);return "+phrase[0]+"}('%1',%2,%3,'%4'.split('|'),0,{}))";
	},
	
	init: function() {
		this.data = reduce(this.data, function(data, replacement, expression) {
			data.put(this.javascript.exec(expression), replacement);
			return data;
		}, new RegGrp, this);
		this.clean = this.data.union(this.clean);
		this.whitespace = this.data.union(this.whitespace);
	},
	
	clean: {
		"\\(\\s*;\\s*;\\s*\\)": "(;;)", // for (;;) loops
		"throw[^};]+[};]": IGNORE, // a safari 1.3 bug
		";+\\s*([};])": "$1"
	},
	
	data: {
		// strings
		"STRING1": IGNORE,
		'STRING2': IGNORE,
		"CONDITIONAL": IGNORE, // conditional comments
		"(COMMENT1)\\n\\s*(REGEXP)?": "\n$3",
		"(COMMENT2)\\s*(REGEXP)?": " $3",
		"([\\[(\\^=,{}:;&|!*?])\\s*(REGEXP)": "$1$2"
	},
	
	javascript: new RegGrp({
		COMMENT1:    /(\/\/|;;;)[^\n]*/.source,
		COMMENT2:    /\/\*[^*]*\*+([^\/][^*]*\*+)*\//.source,
		CONDITIONAL: /\/\*@|@\*\/|\/\/@[^\n]*\n/.source,
		REGEXP:      /\/(\\[\/\\]|[^*\/])(\\.|[^\/\n\\])*\/[gim]*/.source,
		STRING1:     /'(\\.|[^'\\])*'/.source,
		STRING2:     /"(\\.|[^"\\])*"/.source
	}),
	
	whitespace: {
		"(\\d)\\s+(\\.\\s*[a-z\\$_\\[(])": "$1 $2", // http://dean.edwards.name/weblog/2007/04/packer3/#comment84066
		"([+-])\\s+([+-])": "$1 $2", // c = a++ +b;
		"\\b\\s+\\$\\s+\\b": " $ ", // var $ in
		"\\$\\s+\\b": "$ ", // object$ in
		"\\b\\s+\\$": " $", // return $object
		"\\b\\s+\\b": SPACE,
		"\\s+": REMOVE
	}
});

var packer = new Packer;
exports.pack = function() {
	return packer.pack.apply(packer, arguments);
};
