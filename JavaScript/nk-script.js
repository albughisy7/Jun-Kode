/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});

// MirrorCode
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : ((e = e || self).CodeMirror = t());
})(this, function () {
    "use strict";
    var e = navigator.userAgent,
        l = navigator.platform,
        d = /gecko\/\d/i.test(e),
        s = /MSIE \d/.test(e),
        a = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
        u = /Edge\/(\d+)/.exec(e),
        w = s || a || u,
        v = w && (s ? document.documentMode || 6 : +(u || a)[1]),
        x = !u && /WebKit\//.test(e),
        s = x && /Qt\/\d+\.\d+/.test(e),
        m = !u && /Chrome\/(\d+)/.exec(e),
        V = m && +m[1],
        K = /Opera\//.test(e),
        j = /Apple Computer/.test(navigator.vendor),
        c = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
        X = /PhantomJS/.test(e),
        Y = j && (/Mobile\/\w+/.test(e) || 2 < navigator.maxTouchPoints),
        $ = /Android/.test(e),
        _ =
            Y ||
            $ ||
            /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
        C = Y || /Mac/.test(l),
        q = /\bCrOS\b/.test(e),
        a = /win/i.test(l),
        u = K && e.match(/Version\/(\d*\.\d*)/),
        Z =
            ((u = u && Number(u[1])) && 15 <= u && (x = !(K = !1)),
            C && (s || (K && (null == u || u < 12.11)))),
        Q = d || (w && 9 <= v);
    function J(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
    }
    var ee = function (e, t) {
        var n,
            r = e.className,
            t = J(t).exec(r);
        t &&
            ((n = r.slice(t.index + t[0].length)),
            (e.className = r.slice(0, t.index) + (n ? t[1] + n : "")));
    };
    function te(e) {
        for (var t = e.childNodes.length; 0 < t; --t)
            e.removeChild(e.firstChild);
        return e;
    }
    function y(e, t) {
        return te(e).appendChild(t);
    }
    function M(e, t, n, r) {
        var i = document.createElement(e);
        if (
            (n && (i.className = n),
            r && (i.style.cssText = r),
            "string" == typeof t)
        )
            i.appendChild(document.createTextNode(t));
        else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
        return i;
    }
    function ne(e, t, n, r) {
        e = M(e, t, n, r);
        return e.setAttribute("role", "presentation"), e;
    }
    function re(e, t) {
        if ((3 == t.nodeType && (t = t.parentNode), e.contains))
            return e.contains(t);
        do {
            if ((t = 11 == t.nodeType ? t.host : t) == e) return !0;
        } while ((t = t.parentNode));
    }
    function N(t) {
        var n;
        try {
            n = t.activeElement;
        } catch (e) {
            n = t.body || null;
        }
        for (; n && n.shadowRoot && n.shadowRoot.activeElement; )
            n = n.shadowRoot.activeElement;
        return n;
    }
    function ie(e, t) {
        var n = e.className;
        J(t).test(n) || (e.className += (n ? " " : "") + t);
    }
    function oe(e, t) {
        for (var n = e.split(" "), r = 0; r < n.length; r++)
            n[r] && !J(n[r]).test(t) && (t += " " + n[r]);
        return t;
    }
    var le = document.createRange
            ? function (e, t, n, r) {
                  var i = document.createRange();
                  return i.setEnd(r || e, n), i.setStart(e, t), i;
              }
            : function (e, t, n) {
                  var r = document.body.createTextRange();
                  try {
                      r.moveToElementText(e.parentNode);
                  } catch (e) {
                      return r;
                  }
                  return (
                      r.collapse(!0),
                      r.moveEnd("character", n),
                      r.moveStart("character", t),
                      r
                  );
              },
        se = function (e) {
            e.select();
        };
    function ae(e) {
        return e.display.wrapper.ownerDocument;
    }
    function ue(e) {
        return ae(e).defaultView;
    }
    function ce(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function () {
            return e.apply(null, t);
        };
    }
    function he(e, t, n) {
        for (var r in ((t = t || {}), e))
            !e.hasOwnProperty(r) ||
                (!1 === n && t.hasOwnProperty(r)) ||
                (t[r] = e[r]);
        return t;
    }
    function S(e, t, n, r, i) {
        null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
        for (var o = r || 0, l = i || 0; ; ) {
            var s = e.indexOf("\t", o);
            if (s < 0 || t <= s) return l + (t - o);
            (l = (l += s - o) + (n - (l % n))), (o = s + 1);
        }
    }
    Y
        ? (se = function (e) {
              (e.selectionStart = 0), (e.selectionEnd = e.value.length);
          })
        : w &&
          (se = function (e) {
              try {
                  e.select();
              } catch (e) {}
          });
    function de() {
        (this.id = null),
            (this.f = null),
            (this.time = 0),
            (this.handler = ce(this.onTimeout, this));
    }
    function L(e, t) {
        for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
        return -1;
    }
    de.prototype.onTimeout = function (e) {
        (e.id = 0),
            e.time <= +new Date()
                ? e.f()
                : setTimeout(e.handler, e.time - +new Date());
    };
    var fe = 50,
        pe = {
            toString: function () {
                return "CodeMirror.Pass";
            },
        },
        ge = {
            scroll: !(de.prototype.set = function (e, t) {
                this.f = t;
                t = +new Date() + e;
                (!this.id || t < this.time) &&
                    (clearTimeout(this.id),
                    (this.id = setTimeout(this.handler, e)),
                    (this.time = t));
            }),
        },
        me = { origin: "*mouse" },
        ve = { origin: "+move" };
    function ye(e, t, n) {
        for (var r = 0, i = 0; ; ) {
            var o = e.indexOf("\t", r),
                l = (o = -1 == o ? e.length : o) - r;
            if (o == e.length || t <= i + l) return r + Math.min(l, t - i);
            if (((i += o - r), (r = o + 1), t <= (i += n - (i % n)))) return r;
        }
    }
    var be = [""];
    function we(e) {
        for (; be.length <= e; ) be.push(z(be) + " ");
        return be[e];
    }
    function z(e) {
        return e[e.length - 1];
    }
    function xe(e, t) {
        for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
        return n;
    }
    function Ce() {}
    function Se(e, t) {
        e = Object.create ? Object.create(e) : ((Ce.prototype = e), new Ce());
        return t && he(t, e), e;
    }
    var Le =
        /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function ke(e) {
        return (
            /\w/.test(e) ||
            ("" < e && (e.toUpperCase() != e.toLowerCase() || Le.test(e)))
        );
    }
    function Te(e, t) {
        return t
            ? !!(-1 < t.source.indexOf("\\w") && ke(e)) || t.test(e)
            : ke(e);
    }
    function Me(e) {
        for (var t in e) if (e.hasOwnProperty(t) && e[t]) return;
        return 1;
    }
    var Ne =
        /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function Oe(e) {
        return 768 <= e.charCodeAt(0) && Ne.test(e);
    }
    function Ae(e, t, n) {
        for (; (n < 0 ? 0 < t : t < e.length) && Oe(e.charAt(t)); ) t += n;
        return t;
    }
    function De(e, t, n) {
        for (var r = n < t ? -1 : 1; ; ) {
            if (t == n) return t;
            var i = (t + n) / 2,
                i = r < 0 ? Math.ceil(i) : Math.floor(i);
            if (i == t) return e(i) ? t : n;
            e(i) ? (n = i) : (t = i + r);
        }
    }
    var We = null;
    function He(e, t, n) {
        var r;
        We = null;
        for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t) return i;
            o.to == t && (o.from != o.to && "before" == n ? (r = i) : (We = i)),
                o.from == t &&
                    (o.from != o.to && "before" != n ? (r = i) : (We = i));
        }
        return null != r ? r : We;
    }
    (Fe = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/),
        (Pe = /[stwN]/),
        (Ee = /[LRr]/),
        (Ie = /[Lb1n]/),
        (ze = /[1n]/);
    var Fe,
        Pe,
        Ee,
        Ie,
        ze,
        Re = function (e, t) {
            var n = "ltr" == t ? "L" : "R";
            if (0 == e.length || ("ltr" == t && !Fe.test(e))) return !1;
            for (var r, i = e.length, o = [], l = 0; l < i; ++l)
                o.push(
                    (r = e.charCodeAt(l)) <= 247
                        ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(
                              r
                          )
                        : 1424 <= r && r <= 1524
                        ? "R"
                        : 1536 <= r && r <= 1785
                        ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(
                              r - 1536
                          )
                        : 1774 <= r && r <= 2220
                        ? "r"
                        : 8192 <= r && r <= 8203
                        ? "w"
                        : 8204 == r
                        ? "b"
                        : "L"
                );
            for (var s = 0, a = n; s < i; ++s) {
                var u = o[s];
                "m" == u ? (o[s] = a) : (a = u);
            }
            for (var c = 0, h = n; c < i; ++c) {
                var d = o[c];
                "1" == d && "r" == h
                    ? (o[c] = "n")
                    : Ee.test(d) && "r" == (h = d) && (o[c] = "R");
            }
            for (var f = 1, p = o[0]; f < i - 1; ++f) {
                var g = o[f];
                "+" == g && "1" == p && "1" == o[f + 1]
                    ? (o[f] = "1")
                    : "," != g ||
                      p != o[f + 1] ||
                      ("1" != p && "n" != p) ||
                      (o[f] = p),
                    (p = g);
            }
            for (var m = 0; m < i; ++m) {
                var v = o[m];
                if ("," == v) o[m] = "N";
                else if ("%" == v) {
                    for (var y = void 0, y = m + 1; y < i && "%" == o[y]; ++y);
                    for (
                        var b =
                                (m && "!" == o[m - 1]) || (y < i && "1" == o[y])
                                    ? "1"
                                    : "N",
                            w = m;
                        w < y;
                        ++w
                    )
                        o[w] = b;
                    m = y - 1;
                }
            }
            for (var x = 0, C = n; x < i; ++x) {
                var S = o[x];
                "L" == C && "1" == S ? (o[x] = "L") : Ee.test(S) && (C = S);
            }
            for (var L = 0; L < i; ++L)
                if (Pe.test(o[L])) {
                    for (
                        var k = void 0, k = L + 1;
                        k < i && Pe.test(o[k]);
                        ++k
                    );
                    for (
                        var T = "L" == (L ? o[L - 1] : n),
                            M =
                                T == ("L" == (k < i ? o[k] : n))
                                    ? T
                                        ? "L"
                                        : "R"
                                    : n,
                            N = L;
                        N < k;
                        ++N
                    )
                        o[N] = M;
                    L = k - 1;
                }
            for (var O, A = [], D = 0; D < i; )
                if (Ie.test(o[D])) {
                    var E = D;
                    for (++D; D < i && Ie.test(o[D]); ++D);
                    A.push(new Be(0, E, D));
                } else {
                    var W = D,
                        H = A.length,
                        F = "rtl" == t ? 1 : 0;
                    for (++D; D < i && "L" != o[D]; ++D);
                    for (var P = W; P < D; )
                        if (ze.test(o[P])) {
                            W < P &&
                                (A.splice(H, 0, new Be(1, W, P)), (H += F));
                            var I = P;
                            for (++P; P < D && ze.test(o[P]); ++P);
                            A.splice(H, 0, new Be(2, I, P)), (H += F), (W = P);
                        } else ++P;
                    W < D && A.splice(H, 0, new Be(1, W, D));
                }
            return (
                "ltr" == t &&
                    (1 == A[0].level &&
                        (O = e.match(/^\s+/)) &&
                        ((A[0].from = O[0].length),
                        A.unshift(new Be(0, 0, O[0].length))),
                    1 == z(A).level &&
                        (O = e.match(/\s+$/)) &&
                        ((z(A).to -= O[0].length),
                        A.push(new Be(0, i - O[0].length, i)))),
                "rtl" == t ? A.reverse() : A
            );
        };
    function Be(e, t, n) {
        (this.level = e), (this.from = t), (this.to = n);
    }
    function Ge(e, t) {
        var n = e.order;
        return (n = null == n ? (e.order = Re(e.text, t)) : n);
    }
    var Ue = [],
        k = function (e, t, n) {
            e.addEventListener
                ? e.addEventListener(t, n, !1)
                : e.attachEvent
                ? e.attachEvent("on" + t, n)
                : ((e = e._handlers || (e._handlers = {}))[t] = (
                      e[t] || Ue
                  ).concat(n));
        };
    function Ve(e, t) {
        return (e._handlers && e._handlers[t]) || Ue;
    }
    function T(e, t, n) {
        var r;
        e.removeEventListener
            ? e.removeEventListener(t, n, !1)
            : e.detachEvent
            ? e.detachEvent("on" + t, n)
            : (r = (e = e._handlers) && e[t]) &&
              -1 < (n = L(r, n)) &&
              (e[t] = r.slice(0, n).concat(r.slice(n + 1)));
    }
    function O(e, t) {
        var n = Ve(e, t);
        if (n.length)
            for (
                var r = Array.prototype.slice.call(arguments, 2), i = 0;
                i < n.length;
                ++i
            )
                n[i].apply(null, r);
    }
    function A(e, t, n) {
        return (
            "string" == typeof t &&
                (t = {
                    type: t,
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                    },
                }),
            O(e, n || t.type, e, t),
            $e(t) || t.codemirrorIgnore
        );
    }
    function Ke(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
            for (
                var n =
                        e.curOp.cursorActivityHandlers ||
                        (e.curOp.cursorActivityHandlers = []),
                    r = 0;
                r < t.length;
                ++r
            )
                -1 == L(n, t[r]) && n.push(t[r]);
    }
    function je(e, t) {
        return 0 < Ve(e, t).length;
    }
    function Xe(e) {
        (e.prototype.on = function (e, t) {
            k(this, e, t);
        }),
            (e.prototype.off = function (e, t) {
                T(this, e, t);
            });
    }
    function D(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
    }
    function Ye(e) {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
    }
    function $e(e) {
        return null != e.defaultPrevented
            ? e.defaultPrevented
            : 0 == e.returnValue;
    }
    function _e(e) {
        D(e), Ye(e);
    }
    function qe(e) {
        return e.target || e.srcElement;
    }
    function Ze(e) {
        var t = e.which;
        return (
            null == t &&
                (1 & e.button
                    ? (t = 1)
                    : 2 & e.button
                    ? (t = 3)
                    : 4 & e.button && (t = 2)),
            (t = C && e.ctrlKey && 1 == t ? 3 : t)
        );
    }
    var Qe,
        Je,
        et = (function () {
            if (w && v < 9) return !1;
            var e = M("div");
            return "draggable" in e || "dragDrop" in e;
        })();
    var tt =
            3 != "\n\nb".split(/\n/).length
                ? function (e) {
                      for (var t = 0, n = [], r = e.length; t <= r; ) {
                          var i = e.indexOf("\n", t),
                              o =
                                  (-1 == i && (i = e.length),
                                  e.slice(
                                      t,
                                      "\r" == e.charAt(i - 1) ? i - 1 : i
                                  )),
                              l = o.indexOf("\r");
                          -1 != l
                              ? (n.push(o.slice(0, l)), (t += l + 1))
                              : (n.push(o), (t = i + 1));
                      }
                      return n;
                  }
                : function (e) {
                      return e.split(/\r\n?|\n/);
                  },
        nt = window.getSelection
            ? function (e) {
                  try {
                      return e.selectionStart != e.selectionEnd;
                  } catch (e) {
                      return !1;
                  }
              }
            : function (e) {
                  var t;
                  try {
                      t = e.ownerDocument.selection.createRange();
                  } catch (e) {}
                  return (
                      !(!t || t.parentElement() != e) &&
                      0 != t.compareEndPoints("StartToEnd", t)
                  );
              },
        rt =
            "oncopy" in (l = M("div")) ||
            (l.setAttribute("oncopy", "return;"),
            "function" == typeof l.oncopy),
        it = null;
    var ot = {},
        lt = {};
    function st(e) {
        if ("string" == typeof e && lt.hasOwnProperty(e)) e = lt[e];
        else if (e && "string" == typeof e.name && lt.hasOwnProperty(e.name)) {
            var t = lt[e.name];
            (e = Se((t = "string" == typeof t ? { name: t } : t), e)).name =
                t.name;
        } else {
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
                return st("application/xml");
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
                return st("application/json");
        }
        return "string" == typeof e ? { name: e } : e || { name: "null" };
    }
    function at(e, t) {
        t = st(t);
        var n = ot[t.name];
        if (!n) return at(e, "text/plain");
        var r = n(e, t);
        if (ut.hasOwnProperty(t.name)) {
            var i,
                o = ut[t.name];
            for (i in o)
                o.hasOwnProperty(i) &&
                    (r.hasOwnProperty(i) && (r["_" + i] = r[i]), (r[i] = o[i]));
        }
        if (
            ((r.name = t.name),
            t.helperType && (r.helperType = t.helperType),
            t.modeProps)
        )
            for (var l in t.modeProps) r[l] = t.modeProps[l];
        return r;
    }
    var ut = {};
    function ct(e, t) {
        he(t, ut.hasOwnProperty(e) ? ut[e] : (ut[e] = {}));
    }
    function ht(e, t) {
        if (!0 === t) return t;
        if (e.copyState) return e.copyState(t);
        var n,
            r = {};
        for (n in t) {
            var i = t[n];
            i instanceof Array && (i = i.concat([])), (r[n] = i);
        }
        return r;
    }
    function dt(e, t) {
        for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; )
            (t = n.state), (e = n.mode);
        return n || { mode: e, state: t };
    }
    function ft(e, t, n) {
        return !e.startState || e.startState(t, n);
    }
    var g = function (e, t, n) {
        (this.pos = this.start = 0),
            (this.string = e),
            (this.tabSize = t || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = n);
    };
    function W(e, t) {
        if ((t -= e.first) < 0 || t >= e.size)
            throw new Error(
                "There is no line " + (t + e.first) + " in the document."
            );
        for (var n = e; !n.lines; )
            for (var r = 0; ; ++r) {
                var i = n.children[r],
                    o = i.chunkSize();
                if (t < o) {
                    n = i;
                    break;
                }
                t -= o;
            }
        return n.lines[t];
    }
    function pt(e, t, n) {
        var r = [],
            i = t.line;
        return (
            e.iter(t.line, n.line + 1, function (e) {
                e = e.text;
                i == n.line && (e = e.slice(0, n.ch)),
                    i == t.line && (e = e.slice(t.ch)),
                    r.push(e),
                    ++i;
            }),
            r
        );
    }
    function gt(e, t, n) {
        var r = [];
        return (
            e.iter(t, n, function (e) {
                r.push(e.text);
            }),
            r
        );
    }
    function mt(e, t) {
        var n = t - e.height;
        if (n) for (var r = e; r; r = r.parent) r.height += n;
    }
    function H(e) {
        if (null == e.parent) return null;
        for (
            var t = e.parent, n = L(t.lines, e), r = t.parent;
            r;
            r = (t = r).parent
        )
            for (var i = 0; r.children[i] != t; ++i)
                n += r.children[i].chunkSize();
        return n + t.first;
    }
    function vt(e, t) {
        var n = e.first;
        e: do {
            for (var r = 0; r < e.children.length; ++r) {
                var i = e.children[r],
                    o = i.height;
                if (t < o) {
                    e = i;
                    continue e;
                }
                (t -= o), (n += i.chunkSize());
            }
            return n;
        } while (!e.lines);
        for (var l = 0; l < e.lines.length; ++l) {
            var s = e.lines[l].height;
            if (t < s) break;
            t -= s;
        }
        return n + l;
    }
    function yt(e, t) {
        return t >= e.first && t < e.first + e.size;
    }
    function bt(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber));
    }
    function F(e, t, n) {
        if ((void 0 === n && (n = null), !(this instanceof F)))
            return new F(e, t, n);
        (this.line = e), (this.ch = t), (this.sticky = n);
    }
    function P(e, t) {
        return e.line - t.line || e.ch - t.ch;
    }
    function wt(e, t) {
        return e.sticky == t.sticky && 0 == P(e, t);
    }
    function xt(e) {
        return F(e.line, e.ch);
    }
    function Ct(e, t) {
        return P(e, t) < 0 ? t : e;
    }
    function St(e, t) {
        return P(e, t) < 0 ? e : t;
    }
    function Lt(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1));
    }
    function E(e, t) {
        if (t.line < e.first) return F(e.first, 0);
        var n = e.first + e.size - 1;
        return t.line > n
            ? F(n, W(e, n).text.length)
            : ((e = W(e, (n = t).line).text.length),
              null == (t = n.ch) || e < t
                  ? F(n.line, e)
                  : t < 0
                  ? F(n.line, 0)
                  : n);
    }
    function kt(e, t) {
        for (var n = [], r = 0; r < t.length; r++) n[r] = E(e, t[r]);
        return n;
    }
    (g.prototype.eol = function () {
        return this.pos >= this.string.length;
    }),
        (g.prototype.sol = function () {
            return this.pos == this.lineStart;
        }),
        (g.prototype.peek = function () {
            return this.string.charAt(this.pos) || void 0;
        }),
        (g.prototype.next = function () {
            if (this.pos < this.string.length)
                return this.string.charAt(this.pos++);
        }),
        (g.prototype.eat = function (e) {
            var t = this.string.charAt(this.pos),
                e =
                    "string" == typeof e
                        ? t == e
                        : t && (e.test ? e.test(t) : e(t));
            if (e) return ++this.pos, t;
        }),
        (g.prototype.eatWhile = function (e) {
            for (var t = this.pos; this.eat(e); );
            return this.pos > t;
        }),
        (g.prototype.eatSpace = function () {
            for (
                var e = this.pos;
                /[\s\u00a0]/.test(this.string.charAt(this.pos));

            )
                ++this.pos;
            return this.pos > e;
        }),
        (g.prototype.skipToEnd = function () {
            this.pos = this.string.length;
        }),
        (g.prototype.skipTo = function (e) {
            e = this.string.indexOf(e, this.pos);
            if (-1 < e) return (this.pos = e), !0;
        }),
        (g.prototype.backUp = function (e) {
            this.pos -= e;
        }),
        (g.prototype.column = function () {
            return (
                this.lastColumnPos < this.start &&
                    ((this.lastColumnValue = S(
                        this.string,
                        this.start,
                        this.tabSize,
                        this.lastColumnPos,
                        this.lastColumnValue
                    )),
                    (this.lastColumnPos = this.start)),
                this.lastColumnValue -
                    (this.lineStart
                        ? S(this.string, this.lineStart, this.tabSize)
                        : 0)
            );
        }),
        (g.prototype.indentation = function () {
            return (
                S(this.string, null, this.tabSize) -
                (this.lineStart
                    ? S(this.string, this.lineStart, this.tabSize)
                    : 0)
            );
        }),
        (g.prototype.match = function (e, t, n) {
            var r;
            if ("string" != typeof e)
                return (r = this.string.slice(this.pos).match(e)) && 0 < r.index
                    ? null
                    : (r && !1 !== t && (this.pos += r[0].length), r);
            function i(e) {
                return n ? e.toLowerCase() : e;
            }
            return i(this.string.substr(this.pos, e.length)) == i(e)
                ? (!1 !== t && (this.pos += e.length), !0)
                : void 0;
        }),
        (g.prototype.current = function () {
            return this.string.slice(this.start, this.pos);
        }),
        (g.prototype.hideFirstChars = function (e, t) {
            this.lineStart += e;
            try {
                return t();
            } finally {
                this.lineStart -= e;
            }
        }),
        (g.prototype.lookAhead = function (e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e);
        }),
        (g.prototype.baseToken = function () {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos);
        });
    function Tt(e, t) {
        (this.state = e), (this.lookAhead = t);
    }
    var Mt = function (e, t, n, r) {
        (this.state = t),
            (this.doc = e),
            (this.line = n),
            (this.maxLookAhead = r || 0),
            (this.baseTokens = null),
            (this.baseTokenPos = 1);
    };
    function Nt(t, n, r, e) {
        for (
            var a = [t.state.modeGen],
                i = {},
                u =
                    (It(
                        t,
                        n.text,
                        t.doc.mode,
                        r,
                        function (e, t) {
                            a.push(e, t);
                        },
                        i,
                        e
                    ),
                    r.state),
                o = 0;
            o < t.state.overlays.length;
            ++o
        )
            !(function (e) {
                r.baseTokens = a;
                var o = t.state.overlays[e],
                    l = 1,
                    s = 0;
                (r.state = !0),
                    It(
                        t,
                        n.text,
                        o.mode,
                        r,
                        function (e, t) {
                            for (var n = l; s < e; ) {
                                var r = a[l];
                                e < r && a.splice(l, 1, e, a[l + 1], r),
                                    (l += 2),
                                    (s = Math.min(e, r));
                            }
                            if (t)
                                if (o.opaque)
                                    a.splice(n, l - n, e, "overlay " + t),
                                        (l = n + 2);
                                else
                                    for (; n < l; n += 2) {
                                        var i = a[n + 1];
                                        a[n + 1] =
                                            (i ? i + " " : "") + "overlay " + t;
                                    }
                        },
                        i
                    ),
                    (r.state = u),
                    (r.baseTokens = null),
                    (r.baseTokenPos = 1);
            })(o);
        return { styles: a, classes: i.bgClass || i.textClass ? i : null };
    }
    function Ot(e, t, n) {
        var r, i, o;
        return (
            (t.styles && t.styles[0] == e.state.modeGen) ||
                ((r = At(e, H(t))),
                (i =
                    t.text.length > e.options.maxHighlightLength &&
                    ht(e.doc.mode, r.state)),
                (o = Nt(e, t, r)),
                i && (r.state = i),
                (t.stateAfter = r.save(!i)),
                (t.styles = o.styles),
                o.classes
                    ? (t.styleClasses = o.classes)
                    : t.styleClasses && (t.styleClasses = null),
                n === e.doc.highlightFrontier &&
                    (e.doc.modeFrontier = Math.max(
                        e.doc.modeFrontier,
                        ++e.doc.highlightFrontier
                    ))),
            t.styles
        );
    }
    function At(n, r, e) {
        var t = n.doc,
            i = n.display;
        if (!t.mode.startState) return new Mt(t, !0, r);
        var o = (function (e, t, n) {
                for (
                    var r,
                        i,
                        o = e.doc,
                        l = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                        s = t;
                    l < s;
                    --s
                ) {
                    if (s <= o.first) return o.first;
                    var a = W(o, s - 1),
                        u = a.stateAfter;
                    if (
                        u &&
                        (!n ||
                            s + (u instanceof Tt ? u.lookAhead : 0) <=
                                o.modeFrontier)
                    )
                        return s;
                    u = S(a.text, null, e.options.tabSize);
                    (null == i || u < r) && ((i = s - 1), (r = u));
                }
                return i;
            })(n, r, e),
            l = o > t.first && W(t, o - 1).stateAfter,
            s = l ? Mt.fromSaved(t, l, o) : new Mt(t, ft(t.mode), o);
        return (
            t.iter(o, r, function (e) {
                Dt(n, e.text, s);
                var t = s.line;
                (e.stateAfter =
                    t == r - 1 ||
                    t % 5 == 0 ||
                    (t >= i.viewFrom && t < i.viewTo)
                        ? s.save()
                        : null),
                    s.nextLine();
            }),
            e && (t.modeFrontier = s.line),
            s
        );
    }
    function Dt(e, t, n, r) {
        var i = e.doc.mode,
            o = new g(t, e.options.tabSize, n);
        for (o.start = o.pos = r || 0, "" == t && Wt(i, n.state); !o.eol(); )
            Ht(i, o, n.state), (o.start = o.pos);
    }
    function Wt(e, t) {
        if (e.blankLine) return e.blankLine(t);
        if (e.innerMode)
            return (
                (e = dt(e, t)),
                e.mode.blankLine ? e.mode.blankLine(e.state) : void 0
            );
    }
    function Ht(e, t, n, r) {
        for (var i = 0; i < 10; i++) {
            r && (r[0] = dt(e, n).mode);
            var o = e.token(t, n);
            if (t.pos > t.start) return o;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
    }
    (Mt.prototype.lookAhead = function (e) {
        var t = this.doc.getLine(this.line + e);
        return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
    }),
        (Mt.prototype.baseToken = function (e) {
            if (!this.baseTokens) return null;
            for (; this.baseTokens[this.baseTokenPos] <= e; )
                this.baseTokenPos += 2;
            var t = this.baseTokens[this.baseTokenPos + 1];
            return {
                type: t && t.replace(/( |^)overlay .*/, ""),
                size: this.baseTokens[this.baseTokenPos] - e,
            };
        }),
        (Mt.prototype.nextLine = function () {
            this.line++, 0 < this.maxLookAhead && this.maxLookAhead--;
        }),
        (Mt.fromSaved = function (e, t, n) {
            return t instanceof Tt
                ? new Mt(e, ht(e.mode, t.state), n, t.lookAhead)
                : new Mt(e, ht(e.mode, t), n);
        }),
        (Mt.prototype.save = function (e) {
            e = !1 !== e ? ht(this.doc.mode, this.state) : this.state;
            return 0 < this.maxLookAhead ? new Tt(e, this.maxLookAhead) : e;
        });
    var Ft = function (e, t, n) {
        (this.start = e.start),
            (this.end = e.pos),
            (this.string = e.current()),
            (this.type = t || null),
            (this.state = n);
    };
    function Pt(e, t, n, r) {
        var i,
            o,
            l = e.doc,
            s = l.mode,
            a = W(l, (t = E(l, t)).line),
            u = At(e, t.line, n),
            c = new g(a.text, e.options.tabSize, u);
        for (r && (o = []); (r || c.pos < t.ch) && !c.eol(); )
            (c.start = c.pos),
                (i = Ht(s, c, u.state)),
                r && o.push(new Ft(c, i, ht(l.mode, u.state)));
        return r ? o : new Ft(c, i, u.state);
    }
    function Et(e, t) {
        if (e)
            for (;;) {
                var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!n) break;
                e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                var r = n[1] ? "bgClass" : "textClass";
                null == t[r]
                    ? (t[r] = n[2])
                    : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) ||
                      (t[r] += " " + n[2]);
            }
        return e;
    }
    function It(e, t, n, r, i, o, l) {
        var s = n.flattenSpans,
            a = (null == s && (s = e.options.flattenSpans), 0),
            u = null,
            c = new g(t, e.options.tabSize, r),
            h = e.options.addModeClass && [null];
        for ("" == t && Et(Wt(n, r.state), o); !c.eol(); ) {
            var d,
                f =
                    c.pos > e.options.maxHighlightLength
                        ? ((s = !1),
                          l && Dt(e, t, r, c.pos),
                          (c.pos = t.length),
                          null)
                        : Et(Ht(n, c, r.state, h), o);
            if (
                (!h || ((d = h[0].name) && (f = "m-" + (f ? d + " " + f : d))),
                !s || u != f)
            ) {
                for (; a < c.start; ) i((a = Math.min(c.start, a + 5e3)), u);
                u = f;
            }
            c.start = c.pos;
        }
        for (; a < c.pos; ) {
            var p = Math.min(c.pos, a + 5e3);
            i(p, u), (a = p);
        }
    }
    var zt = !1,
        Rt = !1;
    function Bt(e, t, n) {
        (this.marker = e), (this.from = t), (this.to = n);
    }
    function Gt(e, t) {
        if (e)
            for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                if (r.marker == t) return r;
            }
    }
    function Ut(e, t) {
        if (t.full) return null;
        var n = yt(e, t.from.line) && W(e, t.from.line).markedSpans,
            e = yt(e, t.to.line) && W(e, t.to.line).markedSpans;
        if (!n && !e) return null;
        var r = t.from.ch,
            i = t.to.ch,
            o = 0 == P(t.from, t.to),
            l = (function (e, t, n) {
                var r;
                if (e)
                    for (var i = 0; i < e.length; ++i) {
                        var o,
                            l = e[i],
                            s = l.marker;
                        (!(
                            null == l.from ||
                            (s.inclusiveLeft ? l.from <= t : l.from < t)
                        ) &&
                            (l.from != t ||
                                "bookmark" != s.type ||
                                (n && l.marker.insertLeft))) ||
                            ((o =
                                null == l.to ||
                                (s.inclusiveRight ? l.to >= t : l.to > t)),
                            (r = r || []).push(
                                new Bt(s, l.from, o ? null : l.to)
                            ));
                    }
                return r;
            })(n, r, o),
            s = (function (e, t, n) {
                var r;
                if (e)
                    for (var i = 0; i < e.length; ++i) {
                        var o,
                            l = e[i],
                            s = l.marker;
                        (!(
                            null == l.to ||
                            (s.inclusiveRight ? l.to >= t : l.to > t)
                        ) &&
                            (l.from != t ||
                                "bookmark" != s.type ||
                                (n && !l.marker.insertLeft))) ||
                            ((o =
                                null == l.from ||
                                (s.inclusiveLeft ? l.from <= t : l.from < t)),
                            (r = r || []).push(
                                new Bt(
                                    s,
                                    o ? null : l.from - t,
                                    null == l.to ? null : l.to - t
                                )
                            ));
                    }
                return r;
            })(e, i, o),
            a = 1 == t.text.length,
            u = z(t.text).length + (a ? r : 0);
        if (l)
            for (var c = 0; c < l.length; ++c) {
                var h,
                    d = l[c];
                null == d.to &&
                    ((h = Gt(s, d.marker))
                        ? a && (d.to = null == h.to ? null : h.to + u)
                        : (d.to = r));
            }
        if (s)
            for (var f = 0; f < s.length; ++f) {
                var p = s[f];
                null != p.to && (p.to += u),
                    null == p.from
                        ? Gt(l, p.marker) ||
                          ((p.from = u), a && (l = l || []).push(p))
                        : ((p.from += u), a && (l = l || []).push(p));
            }
        (l = l && Vt(l)), s && s != l && (s = Vt(s));
        var g = [l];
        if (!a) {
            var m,
                v = t.text.length - 2;
            if (0 < v && l)
                for (var y = 0; y < l.length; ++y)
                    null == l[y].to &&
                        (m = m || []).push(new Bt(l[y].marker, null, null));
            for (var b = 0; b < v; ++b) g.push(m);
            g.push(s);
        }
        return g;
    }
    function Vt(e) {
        for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            null != n.from &&
                n.from == n.to &&
                !1 !== n.marker.clearWhenEmpty &&
                e.splice(t--, 1);
        }
        return e.length ? e : null;
    }
    function Kt(e) {
        var t = e.markedSpans;
        if (t) {
            for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
            e.markedSpans = null;
        }
    }
    function jt(e, t) {
        if (t) {
            for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
            e.markedSpans = t;
        }
    }
    function Xt(e) {
        return e.inclusiveLeft ? -1 : 0;
    }
    function Yt(e) {
        return e.inclusiveRight ? 1 : 0;
    }
    function $t(e, t) {
        var n = e.lines.length - t.lines.length;
        if (0 != n) return n;
        var n = e.find(),
            r = t.find(),
            i = P(n.from, r.from) || Xt(e) - Xt(t);
        if (i) return -i;
        i = P(n.to, r.to) || Yt(e) - Yt(t);
        return i || t.id - e.id;
    }
    function _t(e, t) {
        var n,
            r = Rt && e.markedSpans;
        if (r)
            for (var i, o = 0; o < r.length; ++o)
                (i = r[o]).marker.collapsed &&
                    null == (t ? i.from : i.to) &&
                    (!n || $t(n, i.marker) < 0) &&
                    (n = i.marker);
        return n;
    }
    function qt(e) {
        return _t(e, !0);
    }
    function Zt(e) {
        return _t(e, !1);
    }
    function Qt(e, t, n, r, i) {
        var e = W(e, t),
            o = Rt && e.markedSpans;
        if (o)
            for (var l = 0; l < o.length; ++l) {
                var s = o[l];
                if (s.marker.collapsed) {
                    var a = s.marker.find(0),
                        u = P(a.from, n) || Xt(s.marker) - Xt(i),
                        c = P(a.to, r) || Yt(s.marker) - Yt(i);
                    if (
                        !((0 <= u && c <= 0) || (u <= 0 && 0 <= c)) &&
                        ((u <= 0 &&
                            (s.marker.inclusiveRight && i.inclusiveLeft
                                ? 0 <= P(a.to, n)
                                : 0 < P(a.to, n))) ||
                            (0 <= u &&
                                (s.marker.inclusiveRight && i.inclusiveLeft
                                    ? P(a.from, r) <= 0
                                    : P(a.from, r) < 0)))
                    )
                        return 1;
                }
            }
    }
    function Jt(e) {
        for (var t; (t = qt(e)); ) e = t.find(-1, !0).line;
        return e;
    }
    function en(e, t) {
        var e = W(e, t),
            n = Jt(e);
        return e == n ? t : H(n);
    }
    function tn(e, t) {
        if (t > e.lastLine()) return t;
        var n,
            r = W(e, t);
        if (!nn(e, r)) return t;
        for (; (n = Zt(r)); ) r = n.find(1, !0).line;
        return H(r) + 1;
    }
    function nn(e, t) {
        var n = Rt && t.markedSpans;
        if (n)
            for (var r, i = 0; i < n.length; ++i)
                if ((r = n[i]).marker.collapsed) {
                    if (null == r.from) return !0;
                    if (
                        !r.marker.widgetNode &&
                        0 == r.from &&
                        r.marker.inclusiveLeft &&
                        (function e(t, n, r) {
                            {
                                var i;
                                if (null == r.to)
                                    return (
                                        (i = r.marker.find(1, !0)),
                                        e(
                                            t,
                                            i.line,
                                            Gt(i.line.markedSpans, r.marker)
                                        )
                                    );
                            }
                            if (
                                r.marker.inclusiveRight &&
                                r.to == n.text.length
                            )
                                return !0;
                            for (
                                var o = void 0, l = 0;
                                l < n.markedSpans.length;
                                ++l
                            )
                                if (
                                    (o = n.markedSpans[l]).marker.collapsed &&
                                    !o.marker.widgetNode &&
                                    o.from == r.to &&
                                    (null == o.to || o.to != r.from) &&
                                    (o.marker.inclusiveLeft ||
                                        r.marker.inclusiveRight) &&
                                    e(t, n, o)
                                )
                                    return !0;
                        })(e, t, r)
                    )
                        return !0;
                }
    }
    function rn(e) {
        for (
            var t = 0, n = (e = Jt(e)).parent, r = 0;
            r < n.lines.length;
            ++r
        ) {
            var i = n.lines[r];
            if (i == e) break;
            t += i.height;
        }
        for (var o = n.parent; o; o = (n = o).parent)
            for (var l = 0; l < o.children.length; ++l) {
                var s = o.children[l];
                if (s == n) break;
                t += s.height;
            }
        return t;
    }
    function on(e) {
        if (0 == e.height) return 0;
        for (var t, n = e.text.length, r = e; (t = qt(r)); ) {
            var i = t.find(0, !0),
                r = i.from.line;
            n += i.from.ch - i.to.ch;
        }
        for (r = e; (t = Zt(r)); )
            var o = t.find(0, !0),
                n =
                    (n -= r.text.length - o.from.ch) +
                    ((r = o.to.line).text.length - o.to.ch);
        return n;
    }
    function ln(e) {
        var n = e.display,
            e = e.doc;
        (n.maxLine = W(e, e.first)),
            (n.maxLineLength = on(n.maxLine)),
            (n.maxLineChanged = !0),
            e.iter(function (e) {
                var t = on(e);
                t > n.maxLineLength && ((n.maxLineLength = t), (n.maxLine = e));
            });
    }
    var sn = function (e, t, n) {
        (this.text = e), jt(this, t), (this.height = n ? n(this) : 1);
    };
    (sn.prototype.lineNo = function () {
        return H(this);
    }),
        Xe(sn);
    var an = {},
        un = {};
    function cn(e, t) {
        if (!e || /^\s*$/.test(e)) return null;
        t = t.addModeClass ? un : an;
        return t[e] || (t[e] = e.replace(/\S+/g, "cm-$&"));
    }
    function hn(e, t) {
        var n = ne("span", null, null, x ? "padding-right: .1px" : null),
            r = {
                pre: ne("pre", [n], "CodeMirror-line"),
                content: n,
                col: 0,
                pos: 0,
                cm: e,
                trailingSpace: !1,
                splitSpaces: e.getOption("lineWrapping"),
            };
        t.measure = {};
        for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line,
                l = void 0,
                l =
                    ((r.pos = 0),
                    (r.addToken = fn),
                    (function (e) {
                        if (null != Je) return Je;
                        var t = y(e, document.createTextNode("AخA")),
                            n = le(t, 0, 1).getBoundingClientRect(),
                            t = le(t, 1, 2).getBoundingClientRect();
                        return (
                            te(e),
                            n &&
                                n.left != n.right &&
                                (Je = t.right - n.right < 3)
                        );
                    })(e.display.measure) &&
                        (l = Ge(o, e.doc.direction)) &&
                        (r.addToken = (function (h, d) {
                            return function (e, t, n, r, i, o, l) {
                                n = n
                                    ? n + " cm-force-border"
                                    : "cm-force-border";
                                for (var s = e.pos, a = s + t.length; ; ) {
                                    for (
                                        var u = void 0, c = 0;
                                        c < d.length &&
                                        !((u = d[c]).to > s && u.from <= s);
                                        c++
                                    );
                                    if (u.to >= a)
                                        return h(e, t, n, r, i, o, l);
                                    h(
                                        e,
                                        t.slice(0, u.to - s),
                                        n,
                                        r,
                                        null,
                                        o,
                                        l
                                    ),
                                        (r = null),
                                        (t = t.slice(u.to - s)),
                                        (s = u.to);
                                }
                            };
                        })(r.addToken, l)),
                    (r.map = []),
                    t != e.display.externalMeasured && H(o));
            !(function (e, t, n) {
                var r = e.markedSpans,
                    i = e.text,
                    o = 0;
                if (r)
                    for (
                        var l,
                            s,
                            a,
                            u,
                            c,
                            h,
                            d,
                            f = i.length,
                            p = 0,
                            g = 1,
                            m = "",
                            v = 0;
                        ;

                    ) {
                        if (v == p) {
                            (a = u = c = s = ""), (h = d = null), (v = 1 / 0);
                            for (
                                var y = [], b = void 0, w = 0;
                                w < r.length;
                                ++w
                            ) {
                                var x = r[w],
                                    C = x.marker;
                                if (
                                    "bookmark" == C.type &&
                                    x.from == p &&
                                    C.widgetNode
                                )
                                    y.push(C);
                                else if (
                                    x.from <= p &&
                                    (null == x.to ||
                                        x.to > p ||
                                        (C.collapsed &&
                                            x.to == p &&
                                            x.from == p))
                                ) {
                                    if (
                                        (null != x.to &&
                                            x.to != p &&
                                            v > x.to &&
                                            ((v = x.to), (u = "")),
                                        C.className && (a += " " + C.className),
                                        C.css &&
                                            (s = (s ? s + ";" : "") + C.css),
                                        C.startStyle &&
                                            x.from == p &&
                                            (c += " " + C.startStyle),
                                        C.endStyle &&
                                            x.to == v &&
                                            (b = b || []).push(
                                                C.endStyle,
                                                x.to
                                            ),
                                        C.title &&
                                            ((d = d || {}).title = C.title),
                                        C.attributes)
                                    )
                                        for (var S in C.attributes)
                                            (d = d || {})[S] = C.attributes[S];
                                    C.collapsed &&
                                        (!h || $t(h.marker, C) < 0) &&
                                        (h = x);
                                } else x.from > p && v > x.from && (v = x.from);
                            }
                            if (b)
                                for (var L = 0; L < b.length; L += 2)
                                    b[L + 1] == v && (u += " " + b[L]);
                            if (!h || h.from == p)
                                for (var k = 0; k < y.length; ++k)
                                    pn(t, 0, y[k]);
                            if (h && (h.from || 0) == p) {
                                if (
                                    (pn(
                                        t,
                                        (null == h.to ? f + 1 : h.to) - p,
                                        h.marker,
                                        null == h.from
                                    ),
                                    null == h.to)
                                )
                                    return;
                                h.to == p && (h = !1);
                            }
                        }
                        if (f <= p) break;
                        for (var T = Math.min(f, v); ; ) {
                            if (m) {
                                var M,
                                    N = p + m.length;
                                if (
                                    (h ||
                                        ((M = T < N ? m.slice(0, T - p) : m),
                                        t.addToken(
                                            t,
                                            M,
                                            l ? l + a : a,
                                            c,
                                            p + M.length == v ? u : "",
                                            s,
                                            d
                                        )),
                                    T <= N)
                                ) {
                                    (m = m.slice(T - p)), (p = T);
                                    break;
                                }
                                (p = N), (c = "");
                            }
                            (m = i.slice(o, (o = n[g++]))),
                                (l = cn(n[g++], t.cm.options));
                        }
                    }
                else
                    for (var O = 1; O < n.length; O += 2)
                        t.addToken(
                            t,
                            i.slice(o, (o = n[O])),
                            cn(n[O + 1], t.cm.options)
                        );
            })(o, r, Ot(e, o, l)),
                o.styleClasses &&
                    (o.styleClasses.bgClass &&
                        (r.bgClass = oe(
                            o.styleClasses.bgClass,
                            r.bgClass || ""
                        )),
                    o.styleClasses.textClass &&
                        (r.textClass = oe(
                            o.styleClasses.textClass,
                            r.textClass || ""
                        ))),
                0 == r.map.length &&
                    r.map.push(
                        0,
                        0,
                        r.content.appendChild(
                            ((l = e.display.measure),
                            (o = void 0),
                            null == Qe &&
                                ((o = M("span", "​")),
                                y(
                                    l,
                                    M("span", [o, document.createTextNode("x")])
                                ),
                                0 != l.firstChild.offsetHeight &&
                                    (Qe =
                                        o.offsetWidth <= 1 &&
                                        2 < o.offsetHeight &&
                                        !(w && v < 8))),
                            (l = Qe
                                ? M("span", "​")
                                : M(
                                      "span",
                                      " ",
                                      null,
                                      "display: inline-block; width: 1px; margin-right: -1px"
                                  )).setAttribute("cm-text", ""),
                            l)
                        )
                    ),
                0 == i
                    ? ((t.measure.map = r.map), (t.measure.cache = {}))
                    : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                      (t.measure.caches || (t.measure.caches = [])).push({}));
        }
        return (
            x &&
                ((n = r.content.lastChild),
                (/\bcm-tab\b/.test(n.className) ||
                    (n.querySelector && n.querySelector(".cm-tab"))) &&
                    (r.content.className = "cm-tab-wrap-hack")),
            O(e, "renderLine", e, t.line, r.pre),
            r.pre.className &&
                (r.textClass = oe(r.pre.className, r.textClass || "")),
            r
        );
    }
    function dn(e) {
        var t = M("span", "•", "cm-invalidchar");
        return (
            (t.title = "\\u" + e.charCodeAt(0).toString(16)),
            t.setAttribute("aria-label", t.title),
            t
        );
    }
    function fn(e, t, n, r, i, o, l) {
        if (t) {
            var s = e.splitSpaces
                    ? (function (e, t) {
                          if (1 < e.length && !/  /.test(e)) return e;
                          for (var n = t, r = "", i = 0; i < e.length; i++) {
                              var o = e.charAt(i);
                              " " != o ||
                                  !n ||
                                  (i != e.length - 1 &&
                                      32 != e.charCodeAt(i + 1)) ||
                                  (o = " "),
                                  (r += o),
                                  (n = " " == o);
                          }
                          return r;
                      })(t, e.trailingSpace)
                    : t,
                a = e.cm.state.specialChars,
                u = !1;
            if (a.test(t))
                for (var c = document.createDocumentFragment(), h = 0; ; ) {
                    a.lastIndex = h;
                    var d = a.exec(t),
                        f = d ? d.index - h : t.length - h;
                    if (
                        (f &&
                            ((p = document.createTextNode(s.slice(h, h + f))),
                            w && v < 9
                                ? c.appendChild(M("span", [p]))
                                : c.appendChild(p),
                            e.map.push(e.pos, e.pos + f, p),
                            (e.col += f),
                            (e.pos += f)),
                        !d)
                    )
                        break;
                    h += 1 + f;
                    var p = void 0;
                    "\t" == d[0]
                        ? ((f = (f = e.cm.options.tabSize) - (e.col % f)),
                          (p = c.appendChild(
                              M("span", we(f), "cm-tab")
                          )).setAttribute("role", "presentation"),
                          p.setAttribute("cm-text", "\t"),
                          (e.col += f))
                        : ("\r" == d[0] || "\n" == d[0]
                              ? (p = c.appendChild(
                                    M(
                                        "span",
                                        "\r" == d[0] ? "␍" : "␤",
                                        "cm-invalidchar"
                                    )
                                )).setAttribute("cm-text", d[0])
                              : ((p = e.cm.options.specialCharPlaceholder(
                                    d[0]
                                )).setAttribute("cm-text", d[0]),
                                w && v < 9
                                    ? c.appendChild(M("span", [p]))
                                    : c.appendChild(p)),
                          (e.col += 1)),
                        e.map.push(e.pos, e.pos + 1, p),
                        e.pos++;
                }
            else
                (e.col += t.length),
                    (c = document.createTextNode(s)),
                    e.map.push(e.pos, e.pos + t.length, c),
                    w && v < 9 && (u = !0),
                    (e.pos += t.length);
            if (
                ((e.trailingSpace = 32 == s.charCodeAt(t.length - 1)),
                n || r || i || u || o || l)
            ) {
                var u = n || "",
                    g = (r && (u += r), i && (u += i), M("span", [c], u, o));
                if (l)
                    for (var m in l)
                        l.hasOwnProperty(m) &&
                            "style" != m &&
                            "class" != m &&
                            g.setAttribute(m, l[m]);
                return e.content.appendChild(g);
            }
            e.content.appendChild(c);
        }
    }
    function pn(e, t, n, r) {
        var i = !r && n.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i),
            !r &&
                e.cm.display.input.needsContentAttribute &&
                (i =
                    i ||
                    e.content.appendChild(
                        document.createElement("span")
                    )).setAttribute("cm-marker", n.id),
            i &&
                (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
            (e.pos += t),
            (e.trailingSpace = !1);
    }
    function gn(e, t, n) {
        (this.line = t),
            (this.rest = (function (e) {
                for (var t, n; (t = Zt(e)); )
                    (e = t.find(1, !0).line), (n = n || []).push(e);
                return n;
            })(t)),
            (this.size = this.rest ? H(z(this.rest)) - n + 1 : 1),
            (this.node = this.text = null),
            (this.hidden = nn(e, t));
    }
    function mn(e, t, n) {
        for (var r = [], i = t; i < n; i = l) {
            var o = new gn(e.doc, W(e.doc, i), i),
                l = i + o.size;
            r.push(o);
        }
        return r;
    }
    var vn = null;
    var yn = null;
    function b(e, t) {
        var n = Ve(e, t);
        if (n.length)
            for (
                var r,
                    i = Array.prototype.slice.call(arguments, 2),
                    o =
                        (vn
                            ? (r = vn.delayedCallbacks)
                            : yn
                            ? (r = yn)
                            : ((r = yn = []), setTimeout(bn, 0)),
                        0);
                o < n.length;
                ++o
            )
                !(function (e) {
                    r.push(function () {
                        return n[e].apply(null, i);
                    });
                })(o);
    }
    function bn() {
        var e = yn;
        yn = null;
        for (var t = 0; t < e.length; ++t) e[t]();
    }
    function wn(e, t, n, r) {
        for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            if ("text" == o) {
                u = a = s = l = void 0;
                var l = e,
                    s = t,
                    a = s.text.className,
                    u = Cn(l, s);
                s.text == s.node && (s.node = u.pre),
                    s.text.parentNode.replaceChild(u.pre, s.text),
                    (s.text = u.pre),
                    u.bgClass != s.bgClass || u.textClass != s.textClass
                        ? ((s.bgClass = u.bgClass),
                          (s.textClass = u.textClass),
                          Sn(l, s))
                        : a && (s.text.className = a);
            } else if ("gutter" == o) Ln(e, t, n, r);
            else if ("class" == o) Sn(e, t);
            else if ("widget" == o) {
                f = d = h = l = c = u = void 0;
                var u = e,
                    c = t,
                    l = r;
                c.alignable && (c.alignable = null);
                for (
                    var h = J("CodeMirror-linewidget"),
                        d = c.node.firstChild,
                        f = void 0;
                    d;
                    d = f
                )
                    (f = d.nextSibling),
                        h.test(d.className) && c.node.removeChild(d);
                kn(u, c, l);
            }
        }
        t.changes = null;
    }
    function xn(e) {
        return (
            e.node == e.text &&
                ((e.node = M("div", null, null, "position: relative")),
                e.text.parentNode &&
                    e.text.parentNode.replaceChild(e.node, e.text),
                e.node.appendChild(e.text),
                w && v < 8 && (e.node.style.zIndex = 2)),
            e.node
        );
    }
    function Cn(e, t) {
        var n = e.display.externalMeasured;
        return n && n.line == t.line
            ? ((e.display.externalMeasured = null),
              (t.measure = n.measure),
              n.built)
            : hn(e, t);
    }
    function Sn(e, t) {
        (e = e),
            (i = (n = t).bgClass
                ? n.bgClass + " " + (n.line.bgClass || "")
                : n.line.bgClass) && (i += " CodeMirror-linebackground"),
            n.background
                ? i
                    ? (n.background.className = i)
                    : (n.background.parentNode.removeChild(n.background),
                      (n.background = null))
                : i &&
                  ((r = xn(n)),
                  (n.background = r.insertBefore(
                      M("div", null, i),
                      r.firstChild
                  )),
                  e.display.input.setUneditable(n.background)),
            t.line.wrapClass
                ? (xn(t).className = t.line.wrapClass)
                : t.node != t.text && (t.node.className = "");
        var n,
            r,
            i = t.textClass
                ? t.textClass + " " + (t.line.textClass || "")
                : t.line.textClass;
        t.text.className = i || "";
    }
    function Ln(e, t, n, r) {
        t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
            t.gutterBackground &&
                (t.node.removeChild(t.gutterBackground),
                (t.gutterBackground = null)),
            t.line.gutterClass &&
                ((o = xn(t)),
                (t.gutterBackground = M(
                    "div",
                    null,
                    "CodeMirror-gutter-background " + t.line.gutterClass,
                    "left: " +
                        (e.options.fixedGutter
                            ? r.fixedPos
                            : -r.gutterTotalWidth) +
                        "px; width: " +
                        r.gutterTotalWidth +
                        "px"
                )),
                e.display.input.setUneditable(t.gutterBackground),
                o.insertBefore(t.gutterBackground, t.text));
        var i = t.line.gutterMarkers;
        if (e.options.lineNumbers || i) {
            var o = xn(t),
                l = (t.gutter = M(
                    "div",
                    null,
                    "CodeMirror-gutter-wrapper",
                    "left: " +
                        (e.options.fixedGutter
                            ? r.fixedPos
                            : -r.gutterTotalWidth) +
                        "px"
                ));
            if (
                (l.setAttribute("aria-hidden", "true"),
                e.display.input.setUneditable(l),
                o.insertBefore(l, t.text),
                t.line.gutterClass && (l.className += " " + t.line.gutterClass),
                !e.options.lineNumbers ||
                    (i && i["CodeMirror-linenumbers"]) ||
                    (t.lineNumber = l.appendChild(
                        M(
                            "div",
                            bt(e.options, n),
                            "CodeMirror-linenumber CodeMirror-gutter-elt",
                            "left: " +
                                r.gutterLeft["CodeMirror-linenumbers"] +
                                "px; width: " +
                                e.display.lineNumInnerWidth +
                                "px"
                        )
                    )),
                i)
            )
                for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                    var a = e.display.gutterSpecs[s].className,
                        u = i.hasOwnProperty(a) && i[a];
                    u &&
                        l.appendChild(
                            M(
                                "div",
                                [u],
                                "CodeMirror-gutter-elt",
                                "left: " +
                                    r.gutterLeft[a] +
                                    "px; width: " +
                                    r.gutterWidth[a] +
                                    "px"
                            )
                        );
                }
        }
    }
    function kn(e, t, n) {
        if ((Tn(e, t.line, t, n, !0), t.rest))
            for (var r = 0; r < t.rest.length; r++) Tn(e, t.rest[r], t, n, !1);
    }
    function Tn(e, t, n, r, i) {
        if (t.widgets)
            for (var o = xn(n), l = 0, s = t.widgets; l < s.length; ++l) {
                var a = s[l],
                    u = M(
                        "div",
                        [a.node],
                        "CodeMirror-linewidget" +
                            (a.className ? " " + a.className : "")
                    ),
                    c =
                        (a.handleMouseEvents ||
                            u.setAttribute("cm-ignore-events", "true"),
                        (d = f = d = h = c = void 0),
                        a),
                    h = u,
                    d = n,
                    f = r;
                c.noHScroll &&
                    ((d.alignable || (d.alignable = [])).push(h),
                    (d = f.wrapperWidth),
                    (h.style.left = f.fixedPos + "px"),
                    c.coverGutter ||
                        ((d -= f.gutterTotalWidth),
                        (h.style.paddingLeft = f.gutterTotalWidth + "px")),
                    (h.style.width = d + "px")),
                    c.coverGutter &&
                        ((h.style.zIndex = 5),
                        (h.style.position = "relative"),
                        c.noHScroll ||
                            (h.style.marginLeft = -f.gutterTotalWidth + "px")),
                    e.display.input.setUneditable(u),
                    i && a.above
                        ? o.insertBefore(u, n.gutter || n.text)
                        : o.appendChild(u),
                    b(a, "redraw");
            }
    }
    function Mn(e) {
        if (null != e.height) return e.height;
        var t,
            n = e.doc.cm;
        return n
            ? (re(document.body, e.node) ||
                  ((t = "position: relative;"),
                  e.coverGutter &&
                      (t +=
                          "margin-left: -" +
                          n.display.gutters.offsetWidth +
                          "px;"),
                  e.noHScroll &&
                      (t += "width: " + n.display.wrapper.clientWidth + "px;"),
                  y(n.display.measure, M("div", [e.node], null, t))),
              (e.height = e.node.parentNode.offsetHeight))
            : 0;
    }
    function Nn(e, t) {
        for (var n = qe(t); n != e.wrapper; n = n.parentNode)
            if (
                !n ||
                (1 == n.nodeType &&
                    "true" == n.getAttribute("cm-ignore-events")) ||
                (n.parentNode == e.sizer && n != e.mover)
            )
                return 1;
    }
    function On(e) {
        return e.lineSpace.offsetTop;
    }
    function An(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
    }
    function Dn(e) {
        if (e.cachedPaddingH) return e.cachedPaddingH;
        var t = y(e.measure, M("pre", "x", "CodeMirror-line-like")),
            t = window.getComputedStyle
                ? window.getComputedStyle(t)
                : t.currentStyle,
            t = {
                left: parseInt(t.paddingLeft),
                right: parseInt(t.paddingRight),
            };
        return isNaN(t.left) || isNaN(t.right) || (e.cachedPaddingH = t), t;
    }
    function Wn(e) {
        return fe - e.display.nativeBarWidth;
    }
    function Hn(e) {
        return e.display.scroller.clientWidth - Wn(e) - e.display.barWidth;
    }
    function Fn(e) {
        return e.display.scroller.clientHeight - Wn(e) - e.display.barHeight;
    }
    function Pn(e, t, n) {
        if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
        if (e.rest) {
            for (var r = 0; r < e.rest.length; r++)
                if (e.rest[r] == t)
                    return {
                        map: e.measure.maps[r],
                        cache: e.measure.caches[r],
                    };
            for (var i = 0; i < e.rest.length; i++)
                if (H(e.rest[i]) > n)
                    return {
                        map: e.measure.maps[i],
                        cache: e.measure.caches[i],
                        before: !0,
                    };
        }
    }
    function En(e, t, n, r) {
        return Rn(e, zn(e, t), n, r);
    }
    function In(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
            return e.display.view[pr(e, t)];
        e = e.display.externalMeasured;
        return e && t >= e.lineN && t < e.lineN + e.size ? e : void 0;
    }
    function zn(e, t) {
        var n,
            r,
            i = H(t),
            o = In(e, i),
            e =
                (o && !o.text
                    ? (o = null)
                    : o &&
                      o.changes &&
                      (wn(e, o, i, ur(e)), (e.curOp.forceUpdate = !0)),
                o ||
                    ((e = e),
                    (r = H((n = Jt((n = t))))),
                    ((n = e.display.externalMeasured =
                        new gn(e.doc, n, r)).lineN = r),
                    (r = n.built = hn(e, n)),
                    (n.text = r.pre),
                    y(e.display.lineMeasure, r.pre),
                    (o = n)),
                Pn(o, t, i));
        return {
            line: t,
            view: o,
            rect: null,
            map: e.map,
            cache: e.cache,
            before: e.before,
            hasHeights: !1,
        };
    }
    function Rn(e, t, n, r, i) {
        var o,
            l = (n = t.before ? -1 : n) + (r || "");
        if (t.cache.hasOwnProperty(l)) o = t.cache[l];
        else {
            if (
                (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                !t.hasHeights)
            ) {
                var s = e,
                    a = t.view,
                    u = t.rect,
                    c = s.options.lineWrapping,
                    s = c && Hn(s);
                if (!a.measure.heights || (c && a.measure.width != s)) {
                    var h = (a.measure.heights = []);
                    if (c) {
                        a.measure.width = s;
                        for (
                            var d = a.text.firstChild.getClientRects(), f = 0;
                            f < d.length - 1;
                            f++
                        ) {
                            var p = d[f],
                                g = d[f + 1];
                            2 < Math.abs(p.bottom - g.bottom) &&
                                h.push((p.bottom + g.top) / 2 - u.top);
                        }
                    }
                    h.push(u.bottom - u.top);
                }
                t.hasHeights = !0;
            }
            (o = (function (e, t, n, r) {
                var i,
                    o = Un(t.map, n, r),
                    l = o.node,
                    s = o.start,
                    a = o.end,
                    u = o.collapse;
                if (3 == l.nodeType) {
                    for (var c = 0; c < 4; c++) {
                        for (; s && Oe(t.line.text.charAt(o.coverStart + s)); )
                            --s;
                        for (
                            ;
                            o.coverStart + a < o.coverEnd &&
                            Oe(t.line.text.charAt(o.coverStart + a));

                        )
                            ++a;
                        if (
                            (i =
                                w &&
                                v < 9 &&
                                0 == s &&
                                a == o.coverEnd - o.coverStart
                                    ? l.parentNode.getBoundingClientRect()
                                    : (function (e, t) {
                                          var n = Gn;
                                          if ("left" == t)
                                              for (
                                                  var r = 0;
                                                  r < e.length &&
                                                  (n = e[r]).left == n.right;
                                                  r++
                                              );
                                          else
                                              for (
                                                  var i = e.length - 1;
                                                  0 <= i &&
                                                  (n = e[i]).left == n.right;
                                                  i--
                                              );
                                          return n;
                                      })(le(l, s, a).getClientRects(), r))
                                .left ||
                            i.right ||
                            0 == s
                        )
                            break;
                        (a = s), (s -= 1), (u = "right");
                    }
                    w &&
                        v < 11 &&
                        (i = (function (e, t) {
                            if (
                                !window.screen ||
                                null == screen.logicalXDPI ||
                                screen.logicalXDPI == screen.deviceXDPI ||
                                !(function (e) {
                                    if (null != it) return it;
                                    var t = (e = y(
                                            e,
                                            M("span", "x")
                                        )).getBoundingClientRect(),
                                        e = le(e, 0, 1).getBoundingClientRect();
                                    return (it = 1 < Math.abs(t.left - e.left));
                                })(e)
                            )
                                return t;
                            var e = screen.logicalXDPI / screen.deviceXDPI,
                                n = screen.logicalYDPI / screen.deviceYDPI;
                            return {
                                left: t.left * e,
                                right: t.right * e,
                                top: t.top * n,
                                bottom: t.bottom * n,
                            };
                        })(e.display.measure, i));
                } else
                    0 < s && (u = r = "right"),
                        (i =
                            e.options.lineWrapping &&
                            1 < (n = l.getClientRects()).length
                                ? n["right" == r ? n.length - 1 : 0]
                                : l.getBoundingClientRect());
                !(w && v < 9) ||
                    s ||
                    (i && (i.left || i.right)) ||
                    ((n = l.parentNode.getClientRects()[0]),
                    (i = n
                        ? {
                              left: n.left,
                              right: n.left + ar(e.display),
                              top: n.top,
                              bottom: n.bottom,
                          }
                        : Gn));
                for (
                    var n = i.top - t.rect.top,
                        h = i.bottom - t.rect.top,
                        d = (n + h) / 2,
                        f = t.view.measure.heights,
                        p = 0;
                    p < f.length - 1 && !(d < f[p]);
                    p++
                );
                var g = p ? f[p - 1] : 0,
                    m = f[p],
                    g = {
                        left: ("right" == u ? i.right : i.left) - t.rect.left,
                        right: ("left" == u ? i.left : i.right) - t.rect.left,
                        top: g,
                        bottom: m,
                    };
                i.left || i.right || (g.bogus = !0);
                e.options.singleCursorHeightPerLine ||
                    ((g.rtop = n), (g.rbottom = h));
                return g;
            })(e, t, n, r)).bogus || (t.cache[l] = o);
        }
        return {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom,
        };
    }
    var Bn,
        Gn = { left: 0, right: 0, top: 0, bottom: 0 };
    function Un(e, t, n) {
        for (var r, i, o, l, s, a, u = 0; u < e.length; u += 3)
            if (
                ((s = e[u]),
                (a = e[u + 1]),
                t < s
                    ? ((i = 0), (o = 1), (l = "left"))
                    : t < a
                    ? (o = (i = t - s) + 1)
                    : (u == e.length - 3 || (t == a && e[u + 3] > t)) &&
                      ((i = (o = a - s) - 1), a <= t && (l = "right")),
                null != i)
            ) {
                if (
                    ((r = e[u + 2]),
                    s == a && n == (r.insertLeft ? "left" : "right") && (l = n),
                    "left" == n && 0 == i)
                )
                    for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
                        (r = e[2 + (u -= 3)]), (l = "left");
                if ("right" == n && i == a - s)
                    for (
                        ;
                        u < e.length - 3 &&
                        e[u + 3] == e[u + 4] &&
                        !e[u + 5].insertLeft;

                    )
                        (r = e[(u += 3) + 2]), (l = "right");
                break;
            }
        return {
            node: r,
            start: i,
            end: o,
            collapse: l,
            coverStart: s,
            coverEnd: a,
        };
    }
    function Vn(e) {
        if (
            e.measure &&
            ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
        )
            for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
    }
    function Kn(e) {
        (e.display.externalMeasure = null), te(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++) Vn(e.display.view[t]);
    }
    function jn(e) {
        Kn(e),
            (e.display.cachedCharWidth =
                e.display.cachedTextHeight =
                e.display.cachedPaddingH =
                    null),
            e.options.lineWrapping || (e.display.maxLineChanged = !0),
            (e.display.lineNumChars = null);
    }
    function Xn(e) {
        return m && $
            ? -(
                  e.body.getBoundingClientRect().left -
                  parseInt(getComputedStyle(e.body).marginLeft)
              )
            : e.defaultView.pageXOffset ||
                  (e.documentElement || e.body).scrollLeft;
    }
    function Yn(e) {
        return m && $
            ? -(
                  e.body.getBoundingClientRect().top -
                  parseInt(getComputedStyle(e.body).marginTop)
              )
            : e.defaultView.pageYOffset ||
                  (e.documentElement || e.body).scrollTop;
    }
    function $n(e) {
        var t = Jt(e).widgets,
            n = 0;
        if (t) for (var r = 0; r < t.length; ++r) t[r].above && (n += Mn(t[r]));
        return n;
    }
    function _n(e, t, n, r, i) {
        if ((i || ((i = $n(t)), (n.top += i), (n.bottom += i)), "line" == r))
            return n;
        r = r || "local";
        i = rn(t);
        return (
            "local" == r ? (i += On(e.display)) : (i -= e.display.viewOffset),
            ("page" != r && "window" != r) ||
                ((i +=
                    (t = e.display.lineSpace.getBoundingClientRect()).top +
                    ("window" == r ? 0 : Yn(ae(e)))),
                (t = t.left + ("window" == r ? 0 : Xn(ae(e)))),
                (n.left += t),
                (n.right += t)),
            (n.top += i),
            (n.bottom += i),
            n
        );
    }
    function qn(e, t, n) {
        if ("div" == n) return t;
        var r = t.left,
            t = t.top,
            n =
                ("page" == n
                    ? ((r -= Xn(ae(e))), (t -= Yn(ae(e))))
                    : ("local" != n && n) ||
                      ((r += (n = e.display.sizer.getBoundingClientRect())
                          .left),
                      (t += n.top)),
                e.display.lineSpace.getBoundingClientRect());
        return { left: r - n.left, top: t - n.top };
    }
    function Zn(e, t, n, r, i) {
        return _n(e, (r = r || W(e.doc, t.line)), En(e, r, t.ch, i), n);
    }
    function Qn(n, e, r, i, o, l) {
        function s(e, t) {
            e = Rn(n, o, e, t ? "right" : "left", l);
            return t ? (e.left = e.right) : (e.right = e.left), _n(n, i, e, r);
        }
        (i = i || W(n.doc, e.line)), (o = o || zn(n, i));
        var a = Ge(i, n.doc.direction),
            t = e.ch,
            e = e.sticky;
        if (
            (t >= i.text.length
                ? ((t = i.text.length), (e = "before"))
                : t <= 0 && ((t = 0), (e = "after")),
            !a)
        )
            return s("before" == e ? t - 1 : t, "before" == e);
        function u(e, t, n) {
            return s(n ? e - 1 : e, (1 == a[t].level) != n);
        }
        var c = He(a, t, e),
            h = We,
            c = u(t, c, "before" == e);
        return null != h && (c.other = u(t, h, "before" != e)), c;
    }
    function Jn(e, t) {
        var n = 0,
            t =
                ((t = E(e.doc, t)),
                e.options.lineWrapping || (n = ar(e.display) * t.ch),
                W(e.doc, t.line)),
            e = rn(t) + On(e.display);
        return { left: n, right: n, top: e, bottom: e + t.height };
    }
    function er(e, t, n, r, i) {
        e = F(e, t, n);
        return (e.xRel = i), r && (e.outside = r), e;
    }
    function tr(e, t, n) {
        var r = e.doc;
        if ((n += e.display.viewOffset) < 0)
            return er(r.first, 0, null, -1, -1);
        var i = vt(r, n),
            o = r.first + r.size - 1;
        if (o < i)
            return er(r.first + r.size - 1, W(r, o).text.length, null, 1, 1);
        t < 0 && (t = 0);
        for (var l = W(r, i); ; ) {
            var s = (function (n, e, t, r, i) {
                    i -= rn(e);
                    var o = zn(n, e),
                        l = $n(e),
                        s = 0,
                        a = e.text.length,
                        u = !0,
                        c = Ge(e, n.doc.direction);
                    c &&
                        ((c = (n.options.lineWrapping ? lr : or)(
                            n,
                            e,
                            t,
                            o,
                            c,
                            r,
                            i
                        )),
                        (u = 1 != c.level),
                        (s = u ? c.from : c.to - 1),
                        (a = u ? c.to : c.from - 1));
                    var h = null,
                        d = null,
                        c = De(
                            function (e) {
                                var t = Rn(n, o, e);
                                return (
                                    (t.top += l),
                                    (t.bottom += l),
                                    ir(t, r, i, !1) &&
                                        (t.top <= i &&
                                            t.left <= r &&
                                            ((h = e), (d = t)),
                                        1)
                                );
                            },
                            s,
                            a
                        ),
                        f = !1;
                    {
                        var p, g;
                        d
                            ? ((p = r - d.left < d.right - r),
                              (c = h + ((g = p == u) ? 0 : 1)),
                              (g = g ? "after" : "before"),
                              (p = p ? d.left : d.right))
                            : (u || (c != a && c != s) || c++,
                              (g =
                                  0 == c ||
                                  (c != e.text.length &&
                                      Rn(n, o, c - (u ? 1 : 0)).bottom + l <=
                                          i ==
                                          u)
                                      ? "after"
                                      : "before"),
                              (a = Qn(n, F(t, c, g), "line", e, o)),
                              (p = a.left),
                              (f = i < a.top ? -1 : i >= a.bottom ? 1 : 0));
                    }
                    return (c = Ae(e.text, c, 1)), er(t, c, g, f, r - p);
                })(e, l, i, t, n),
                a = (function (e, t) {
                    var n,
                        r = Rt && e.markedSpans;
                    if (r)
                        for (var i = 0; i < r.length; ++i) {
                            var o = r[i];
                            o.marker.collapsed &&
                                (null == o.from || o.from < t) &&
                                (null == o.to || o.to > t) &&
                                (!n || $t(n, o.marker) < 0) &&
                                (n = o.marker);
                        }
                    return n;
                })(l, s.ch + (0 < s.xRel || 0 < s.outside ? 1 : 0));
            if (!a) return s;
            s = a.find(1);
            if (s.line == i) return s;
            l = W(r, (i = s.line));
        }
    }
    function nr(t, e, n, r) {
        r -= $n(e);
        var e = e.text.length,
            i = De(
                function (e) {
                    return Rn(t, n, e - 1).bottom <= r;
                },
                e,
                0
            );
        return {
            begin: i,
            end: De(
                function (e) {
                    return Rn(t, n, e).top > r;
                },
                i,
                e
            ),
        };
    }
    function rr(e, t, n, r) {
        return nr(e, t, (n = n || zn(e, t)), _n(e, t, Rn(e, n, r), "line").top);
    }
    function ir(e, t, n, r) {
        return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
    }
    function or(n, r, i, o, l, s, a) {
        var e,
            t = De(
                function (e) {
                    var e = l[e],
                        t = 1 != e.level;
                    return ir(
                        Qn(
                            n,
                            F(i, t ? e.to : e.from, t ? "before" : "after"),
                            "line",
                            r,
                            o
                        ),
                        s,
                        a,
                        !0
                    );
                },
                0,
                l.length - 1
            ),
            u = l[t];
        return (
            0 < t &&
                ((e = 1 != u.level),
                ir(
                    (e = Qn(
                        n,
                        F(i, e ? u.from : u.to, e ? "after" : "before"),
                        "line",
                        r,
                        o
                    )),
                    s,
                    a,
                    !0
                ) &&
                    e.top > a &&
                    (u = l[t - 1])),
            u
        );
    }
    function lr(e, t, n, r, i, o, l) {
        for (
            var l = nr(e, t, r, l),
                s = l.begin,
                a = l.end,
                u = (/\s/.test(t.text.charAt(a - 1)) && a--, null),
                c = null,
                h = 0;
            h < i.length;
            h++
        ) {
            var d,
                f = i[h];
            f.from >= a ||
                f.to <= s ||
                ((d =
                    (d = Rn(
                        e,
                        r,
                        1 != f.level
                            ? Math.min(a, f.to) - 1
                            : Math.max(s, f.from)
                    ).right) < o
                        ? o - d + 1e9
                        : d - o),
                (!u || d < c) && ((u = f), (c = d)));
        }
        return (u =
            (u =
                (u = u || i[i.length - 1]).from < s
                    ? { from: s, to: u.to, level: u.level }
                    : u).to > a
                ? { from: u.from, to: a, level: u.level }
                : u);
    }
    function sr(e) {
        if (null != e.cachedTextHeight) return e.cachedTextHeight;
        if (null == Bn) {
            Bn = M("pre", null, "CodeMirror-line-like");
            for (var t = 0; t < 49; ++t)
                Bn.appendChild(document.createTextNode("x")),
                    Bn.appendChild(M("br"));
            Bn.appendChild(document.createTextNode("x"));
        }
        y(e.measure, Bn);
        var n = Bn.offsetHeight / 50;
        return 3 < n && (e.cachedTextHeight = n), te(e.measure), n || 1;
    }
    function ar(e) {
        if (null != e.cachedCharWidth) return e.cachedCharWidth;
        var t = M("span", "xxxxxxxxxx"),
            n = M("pre", [t], "CodeMirror-line-like"),
            n = (y(e.measure, n), t.getBoundingClientRect()),
            t = (n.right - n.left) / 10;
        return 2 < t && (e.cachedCharWidth = t), t || 10;
    }
    function ur(e) {
        for (
            var t = e.display,
                n = {},
                r = {},
                i = t.gutters.clientLeft,
                o = t.gutters.firstChild,
                l = 0;
            o;
            o = o.nextSibling, ++l
        ) {
            var s = e.display.gutterSpecs[l].className;
            (n[s] = o.offsetLeft + o.clientLeft + i), (r[s] = o.clientWidth);
        }
        return {
            fixedPos: cr(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: r,
            wrapperWidth: t.wrapper.clientWidth,
        };
    }
    function cr(e) {
        return (
            e.scroller.getBoundingClientRect().left -
            e.sizer.getBoundingClientRect().left
        );
    }
    function hr(r) {
        var i = sr(r.display),
            o = r.options.lineWrapping,
            l =
                o &&
                Math.max(5, r.display.scroller.clientWidth / ar(r.display) - 3);
        return function (e) {
            if (nn(r.doc, e)) return 0;
            var t = 0;
            if (e.widgets)
                for (var n = 0; n < e.widgets.length; n++)
                    e.widgets[n].height && (t += e.widgets[n].height);
            return o ? t + (Math.ceil(e.text.length / l) || 1) * i : t + i;
        };
    }
    function dr(e) {
        var t = e.doc,
            n = hr(e);
        t.iter(function (e) {
            var t = n(e);
            t != e.height && mt(e, t);
        });
    }
    function fr(e, t, n, r) {
        var i = e.display;
        if (!n && "true" == qe(t).getAttribute("cm-not-content")) return null;
        var o,
            l,
            n = i.lineSpace.getBoundingClientRect();
        try {
            (o = t.clientX - n.left), (l = t.clientY - n.top);
        } catch (e) {
            return null;
        }
        i = tr(e, o, l);
        return (
            r &&
                0 < i.xRel &&
                (t = W(e.doc, i.line).text).length == i.ch &&
                ((n = S(t, t.length, e.options.tabSize) - t.length),
                (i = F(
                    i.line,
                    Math.max(
                        0,
                        Math.round((o - Dn(e.display).left) / ar(e.display)) - n
                    )
                ))),
            i
        );
    }
    function pr(e, t) {
        if (t >= e.display.viewTo) return null;
        if ((t -= e.display.viewFrom) < 0) return null;
        for (var n = e.display.view, r = 0; r < n.length; r++)
            if ((t -= n[r].size) < 0) return r;
    }
    function I(e, t, n, r) {
        null == t && (t = e.doc.first),
            null == n && (n = e.doc.first + e.doc.size);
        var i,
            o = e.display,
            l =
                ((r = r || 0) &&
                    n < o.viewTo &&
                    (null == o.updateLineNumbers || o.updateLineNumbers > t) &&
                    (o.updateLineNumbers = t),
                (e.curOp.viewChanged = !0),
                t >= o.viewTo
                    ? Rt && en(e.doc, t) < o.viewTo && mr(e)
                    : n <= o.viewFrom
                    ? Rt && tn(e.doc, n + r) > o.viewFrom
                        ? mr(e)
                        : ((o.viewFrom += r), (o.viewTo += r))
                    : t <= o.viewFrom && n >= o.viewTo
                    ? mr(e)
                    : t <= o.viewFrom
                    ? (l = vr(e, n, n + r, 1))
                        ? ((o.view = o.view.slice(l.index)),
                          (o.viewFrom = l.lineN),
                          (o.viewTo += r))
                        : mr(e)
                    : n >= o.viewTo
                    ? (l = vr(e, t, t, -1))
                        ? ((o.view = o.view.slice(0, l.index)),
                          (o.viewTo = l.lineN))
                        : mr(e)
                    : ((l = vr(e, t, t, -1)),
                      (i = vr(e, n, n + r, 1)),
                      l && i
                          ? ((o.view = o.view
                                .slice(0, l.index)
                                .concat(mn(e, l.lineN, i.lineN))
                                .concat(o.view.slice(i.index))),
                            (o.viewTo += r))
                          : mr(e)),
                o.externalMeasured);
        l &&
            (n < l.lineN
                ? (l.lineN += r)
                : t < l.lineN + l.size && (o.externalMeasured = null));
    }
    function gr(e, t, n) {
        e.curOp.viewChanged = !0;
        var r = e.display,
            i = e.display.externalMeasured;
        i &&
            t >= i.lineN &&
            t < i.lineN + i.size &&
            (r.externalMeasured = null),
            t < r.viewFrom ||
                t >= r.viewTo ||
                (null != (i = r.view[pr(e, t)]).node &&
                    -1 == L((r = i.changes || (i.changes = [])), n) &&
                    r.push(n));
    }
    function mr(e) {
        (e.display.viewFrom = e.display.viewTo = e.doc.first),
            (e.display.view = []),
            (e.display.viewOffset = 0);
    }
    function vr(e, t, n, r) {
        var i,
            o = pr(e, t),
            l = e.display.view;
        if (!Rt || n == e.doc.first + e.doc.size) return { index: o, lineN: n };
        for (var s = e.display.viewFrom, a = 0; a < o; a++) s += l[a].size;
        if (s != t) {
            if (0 < r) {
                if (o == l.length - 1) return null;
                (i = s + l[o].size - t), o++;
            } else i = s - t;
            (t += i), (n += i);
        }
        for (; en(e.doc, n) != n; ) {
            if (o == (r < 0 ? 0 : l.length - 1)) return null;
            (n += r * l[o - (r < 0 ? 1 : 0)].size), (o += r);
        }
        return { index: o, lineN: n };
    }
    function yr(e) {
        for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
            var i = t[r];
            i.hidden || (i.node && !i.changes) || ++n;
        }
        return n;
    }
    function br(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
    }
    function wr(e, t) {
        void 0 === t && (t = !0);
        var n = e.doc,
            r = {},
            i = (r.cursors = document.createDocumentFragment()),
            o = (r.selection = document.createDocumentFragment()),
            l = e.options.$customCursor;
        l && (t = !0);
        for (var s, a, u, c = 0; c < n.sel.ranges.length; c++)
            (!t && c == n.sel.primIndex) ||
                (s = n.sel.ranges[c]).from().line >= e.display.viewTo ||
                s.to().line < e.display.viewFrom ||
                ((a = s.empty()),
                l
                    ? (u = l(e, s)) && xr(e, u, i)
                    : (a || e.options.showCursorWhenSelecting) &&
                      xr(e, s.head, i),
                a ||
                    (function (i, e, t) {
                        var n = i.display,
                            o = i.doc,
                            l = document.createDocumentFragment(),
                            r = Dn(i.display),
                            S = r.left,
                            L =
                                Math.max(
                                    n.sizerWidth,
                                    Hn(i) - n.sizer.offsetLeft
                                ) - r.right,
                            k = "ltr" == o.direction;
                        function T(e, t, n, r) {
                            t < 0 && (t = 0),
                                (t = Math.round(t)),
                                (r = Math.round(r)),
                                l.appendChild(
                                    M(
                                        "div",
                                        null,
                                        "CodeMirror-selected",
                                        "position: absolute; left: " +
                                            e +
                                            "px;\n                             top: " +
                                            t +
                                            "px; width: " +
                                            (null == n ? L - e : n) +
                                            "px;\n                             height: " +
                                            (r - t) +
                                            "px"
                                    )
                                );
                        }
                        function s(n, g, m) {
                            var v,
                                y,
                                r = W(o, n),
                                b = r.text.length;
                            function w(e, t) {
                                return Zn(i, F(n, e), "div", r, t);
                            }
                            function x(e, t, n) {
                                (e = rr(i, r, null, e)),
                                    (t =
                                        ("ltr" == t) == ("after" == n)
                                            ? "left"
                                            : "right");
                                return w(
                                    "after" == n
                                        ? e.begin
                                        : e.end -
                                              (/\s/.test(
                                                  r.text.charAt(e.end - 1)
                                              )
                                                  ? 2
                                                  : 1),
                                    t
                                )[t];
                            }
                            var C = Ge(r, o.direction);
                            return (
                                (function (e, t, n, r) {
                                    if (!e) return r(t, n, "ltr", 0);
                                    for (var i = !1, o = 0; o < e.length; ++o) {
                                        var l = e[o];
                                        ((l.from < n && l.to > t) ||
                                            (t == n && l.to == t)) &&
                                            (r(
                                                Math.max(l.from, t),
                                                Math.min(l.to, n),
                                                1 == l.level ? "rtl" : "ltr",
                                                o
                                            ),
                                            (i = !0));
                                    }
                                    i || r(t, n, "ltr");
                                })(
                                    C,
                                    g || 0,
                                    null == m ? b : m,
                                    function (e, t, n, r) {
                                        var i,
                                            o,
                                            l,
                                            s,
                                            a,
                                            u = "ltr" == n,
                                            c = w(e, u ? "left" : "right"),
                                            h = w(t - 1, u ? "right" : "left"),
                                            d = null == g && 0 == e,
                                            f = null == m && t == b,
                                            p = 0 == r,
                                            r = !C || r == C.length - 1;
                                        h.top - c.top <= 3
                                            ? ((i =
                                                  (k ? d : f) && p
                                                      ? S
                                                      : (u ? c : h).left),
                                              (a =
                                                  (k ? f : d) && r
                                                      ? L
                                                      : (u ? h : c).right),
                                              T(i, c.top, a - i, c.bottom))
                                            : ((a = u
                                                  ? ((o =
                                                        k && d && p
                                                            ? S
                                                            : c.left),
                                                    (l = k
                                                        ? L
                                                        : x(e, n, "before")),
                                                    (s = k
                                                        ? S
                                                        : x(t, n, "after")),
                                                    k && f && r ? L : h.right)
                                                  : ((o = k
                                                        ? x(e, n, "before")
                                                        : S),
                                                    (l =
                                                        !k && d && p
                                                            ? L
                                                            : c.right),
                                                    (s =
                                                        !k && f && r
                                                            ? S
                                                            : h.left),
                                                    k ? x(t, n, "after") : L)),
                                              T(o, c.top, l - o, c.bottom),
                                              c.bottom < h.top &&
                                                  T(S, c.bottom, null, h.top),
                                              T(s, h.top, a - s, h.bottom)),
                                            (!v || Cr(c, v) < 0) && (v = c),
                                            Cr(h, v) < 0 && (v = h),
                                            (!y || Cr(c, y) < 0) && (y = c),
                                            Cr(h, y) < 0 && (y = h);
                                    }
                                ),
                                { start: v, end: y }
                            );
                        }
                        (n = e.from()), (r = e.to());
                        {
                            var a;
                            n.line == r.line
                                ? s(n.line, n.ch, r.ch)
                                : ((e = W(o, n.line)),
                                  (a = W(o, r.line)),
                                  (a = Jt(e) == Jt(a)),
                                  (n = s(
                                      n.line,
                                      n.ch,
                                      a ? e.text.length + 1 : null
                                  ).end),
                                  (e = s(r.line, a ? 0 : null, r.ch).start),
                                  a &&
                                      (n.top < e.top - 2
                                          ? (T(n.right, n.top, null, n.bottom),
                                            T(S, e.top, e.left, e.bottom))
                                          : T(
                                                n.right,
                                                n.top,
                                                e.left - n.right,
                                                n.bottom
                                            )),
                                  n.bottom < e.top &&
                                      T(S, n.bottom, null, e.top));
                        }
                        t.appendChild(l);
                    })(e, s, o));
        return r;
    }
    function xr(e, t, n) {
        var r = Qn(
                e,
                t,
                "div",
                null,
                null,
                !e.options.singleCursorHeightPerLine
            ),
            i = n.appendChild(M("div", " ", "CodeMirror-cursor"));
        (i.style.left = r.left + "px"),
            (i.style.top = r.top + "px"),
            (i.style.height =
                Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px"),
            /\bcm-fat-cursor\b/.test(e.getWrapperElement().className) &&
                ((t = (t = Zn(e, t, "div", null, null)).right - t.left),
                (i.style.width = (0 < t ? t : e.defaultCharWidth()) + "px")),
            r.other &&
                (((i = n.appendChild(
                    M(
                        "div",
                        " ",
                        "CodeMirror-cursor CodeMirror-secondarycursor"
                    )
                )).style.display = ""),
                (i.style.left = r.other.left + "px"),
                (i.style.top = r.other.top + "px"),
                (i.style.height =
                    0.85 * (r.other.bottom - r.other.top) + "px"));
    }
    function Cr(e, t) {
        return e.top - t.top || e.left - t.left;
    }
    function Sr(e) {
        var t, n;
        e.state.focused &&
            ((t = e.display),
            clearInterval(t.blinker),
            (n = !0),
            (t.cursorDiv.style.visibility = ""),
            0 < e.options.cursorBlinkRate
                ? (t.blinker = setInterval(function () {
                      e.hasFocus() || Mr(e),
                          (t.cursorDiv.style.visibility = (n = !n)
                              ? ""
                              : "hidden");
                  }, e.options.cursorBlinkRate))
                : e.options.cursorBlinkRate < 0 &&
                  (t.cursorDiv.style.visibility = "hidden"));
    }
    function Lr(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || Tr(e));
    }
    function kr(e) {
        (e.state.delayingBlurEvent = !0),
            setTimeout(function () {
                e.state.delayingBlurEvent &&
                    ((e.state.delayingBlurEvent = !1),
                    e.state.focused && Mr(e));
            }, 100);
    }
    function Tr(e, t) {
        e.state.delayingBlurEvent &&
            !e.state.draggingText &&
            (e.state.delayingBlurEvent = !1),
            "nocursor" != e.options.readOnly &&
                (e.state.focused ||
                    (O(e, "focus", e, t),
                    (e.state.focused = !0),
                    ie(e.display.wrapper, "CodeMirror-focused"),
                    e.curOp ||
                        e.display.selForContextMenu == e.doc.sel ||
                        (e.display.input.reset(),
                        x &&
                            setTimeout(function () {
                                return e.display.input.reset(!0);
                            }, 20)),
                    e.display.input.receivedFocus()),
                Sr(e));
    }
    function Mr(e, t) {
        e.state.delayingBlurEvent ||
            (e.state.focused &&
                (O(e, "blur", e, t),
                (e.state.focused = !1),
                ee(e.display.wrapper, "CodeMirror-focused")),
            clearInterval(e.display.blinker),
            setTimeout(function () {
                e.state.focused || (e.display.shift = !1);
            }, 150));
    }
    function Nr(e) {
        for (
            var t = e.display,
                n = t.lineDiv.offsetTop,
                r = Math.max(0, t.scroller.getBoundingClientRect().top),
                i = t.lineDiv.getBoundingClientRect().top,
                o = 0,
                l = 0;
            l < t.view.length;
            l++
        ) {
            var s = t.view[l],
                a = e.options.lineWrapping,
                u = void 0,
                c = 0;
            if (!s.hidden) {
                (i += s.line.height),
                    w && v < 8
                        ? ((u =
                              (h = s.node.offsetTop + s.node.offsetHeight) - n),
                          (n = h))
                        : ((u =
                              (h = s.node.getBoundingClientRect()).bottom -
                              h.top),
                          !a &&
                              s.text.firstChild &&
                              (c =
                                  s.text.firstChild.getBoundingClientRect()
                                      .right -
                                  h.left -
                                  1));
                var h,
                    a = s.line.height - u;
                if (
                    (0.005 < a || a < -0.005) &&
                    (i < r && (o -= a), mt(s.line, u), Or(s.line), s.rest)
                )
                    for (var d = 0; d < s.rest.length; d++) Or(s.rest[d]);
                c > e.display.sizerWidth &&
                    (a = Math.ceil(c / ar(e.display))) >
                        e.display.maxLineLength &&
                    ((e.display.maxLineLength = a),
                    (e.display.maxLine = s.line),
                    (e.display.maxLineChanged = !0));
            }
        }
        2 < Math.abs(o) && (t.scroller.scrollTop += o);
    }
    function Or(e) {
        if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t) {
                var n = e.widgets[t],
                    r = n.node.parentNode;
                r && (n.height = r.offsetHeight);
            }
    }
    function Ar(e, t, n) {
        var r,
            i = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop,
            i = Math.floor(i - On(e)),
            o = n && null != n.bottom ? n.bottom : i + e.wrapper.clientHeight,
            i = vt(t, i),
            o = vt(t, o);
        return (
            n &&
                n.ensure &&
                ((r = n.ensure.from.line),
                (n = n.ensure.to.line),
                r < i
                    ? (o = vt(t, rn(W(t, (i = r))) + e.wrapper.clientHeight))
                    : Math.min(n, t.lastLine()) >= o &&
                      ((i = vt(t, rn(W(t, n)) - e.wrapper.clientHeight)),
                      (o = n))),
            { from: i, to: Math.max(o, i + 1) }
        );
    }
    function Dr(e, t) {
        var n = e.display,
            r = sr(e.display),
            i =
                (t.top < 0 && (t.top = 0),
                (e.curOp && null != e.curOp.scrollTop ? e.curOp : n.scroller)
                    .scrollTop),
            o = Fn(e),
            l = {},
            s =
                (t.bottom - t.top > o && (t.bottom = t.top + o),
                e.doc.height + An(n)),
            a = t.top < r,
            r = t.bottom > s - r,
            r =
                (t.top < i
                    ? (l.scrollTop = a ? 0 : t.top)
                    : t.bottom > i + o &&
                      (a = Math.min(t.top, (r ? s : t.bottom) - o)) != i &&
                      (l.scrollTop = a),
                e.options.fixedGutter ? 0 : n.gutters.offsetWidth),
            s =
                e.curOp && null != e.curOp.scrollLeft
                    ? e.curOp.scrollLeft
                    : n.scroller.scrollLeft - r,
            o = Hn(e) - n.gutters.offsetWidth,
            i = t.right - t.left > o;
        return (
            i && (t.right = t.left + o),
            t.left < 10
                ? (l.scrollLeft = 0)
                : t.left < s
                ? (l.scrollLeft = Math.max(0, t.left + r - (i ? 0 : 10)))
                : t.right > o + s - 3 &&
                  (l.scrollLeft = t.right + (i ? 0 : 10) - o),
            l
        );
    }
    function Wr(e, t) {
        null != t &&
            (Pr(e),
            (e.curOp.scrollTop =
                (null == e.curOp.scrollTop ? e.doc : e.curOp).scrollTop + t));
    }
    function Hr(e) {
        Pr(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = {
            from: t,
            to: t,
            margin: e.options.cursorScrollMargin,
        };
    }
    function Fr(e, t, n) {
        (null == t && null == n) || Pr(e),
            null != t && (e.curOp.scrollLeft = t),
            null != n && (e.curOp.scrollTop = n);
    }
    function Pr(e) {
        var t = e.curOp.scrollToPos;
        t &&
            ((e.curOp.scrollToPos = null),
            Er(e, Jn(e, t.from), Jn(e, t.to), t.margin));
    }
    function Er(e, t, n, r) {
        t = Dr(e, {
            left: Math.min(t.left, n.left),
            top: Math.min(t.top, n.top) - r,
            right: Math.max(t.right, n.right),
            bottom: Math.max(t.bottom, n.bottom) + r,
        });
        Fr(e, t.scrollLeft, t.scrollTop);
    }
    function Ir(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 ||
            (d || ti(e, { top: t }), zr(e, t, !0), d && ti(e), qr(e, 100));
    }
    function zr(e, t, n) {
        (t = Math.max(
            0,
            Math.min(
                e.display.scroller.scrollHeight -
                    e.display.scroller.clientHeight,
                t
            )
        )),
            (e.display.scroller.scrollTop == t && !n) ||
                ((e.doc.scrollTop = t),
                e.display.scrollbars.setScrollTop(t),
                e.display.scroller.scrollTop != t &&
                    (e.display.scroller.scrollTop = t));
    }
    function Rr(e, t, n, r) {
        (t = Math.max(
            0,
            Math.min(
                t,
                e.display.scroller.scrollWidth - e.display.scroller.clientWidth
            )
        )),
            ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
                !r) ||
                ((e.doc.scrollLeft = t),
                ii(e),
                e.display.scroller.scrollLeft != t &&
                    (e.display.scroller.scrollLeft = t),
                e.display.scrollbars.setScrollLeft(t));
    }
    function Br(e) {
        var t = e.display,
            n = t.gutters.offsetWidth,
            r = Math.round(e.doc.height + An(e.display));
        return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? n : 0,
            docHeight: r,
            scrollHeight: r + Wn(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: n,
        };
    }
    function Gr(e, t, n) {
        this.cm = n;
        var r = (this.vert = M(
                "div",
                [M("div", null, null, "min-width: 1px")],
                "CodeMirror-vscrollbar"
            )),
            i = (this.horiz = M(
                "div",
                [M("div", null, null, "height: 100%; min-height: 1px")],
                "CodeMirror-hscrollbar"
            ));
        (r.tabIndex = i.tabIndex = -1),
            e(r),
            e(i),
            k(r, "scroll", function () {
                r.clientHeight && t(r.scrollTop, "vertical");
            }),
            k(i, "scroll", function () {
                i.clientWidth && t(i.scrollLeft, "horizontal");
            }),
            (this.checkedZeroWidth = !1),
            w &&
                v < 8 &&
                (this.horiz.style.minHeight = this.vert.style.minWidth =
                    "18px");
    }
    function Ur() {}
    (Gr.prototype.update = function (e) {
        var t,
            n = e.scrollWidth > e.clientWidth + 1,
            r = e.scrollHeight > e.clientHeight + 1,
            i = e.nativeBarWidth;
        return (
            r
                ? ((this.vert.style.display = "block"),
                  (this.vert.style.bottom = n ? i + "px" : "0"),
                  (t = e.viewHeight - (n ? i : 0)),
                  (this.vert.firstChild.style.height =
                      Math.max(0, e.scrollHeight - e.clientHeight + t) + "px"))
                : ((this.vert.scrollTop = 0),
                  (this.vert.style.display = ""),
                  (this.vert.firstChild.style.height = "0")),
            n
                ? ((this.horiz.style.display = "block"),
                  (this.horiz.style.right = r ? i + "px" : "0"),
                  (this.horiz.style.left = e.barLeft + "px"),
                  (t = e.viewWidth - e.barLeft - (r ? i : 0)),
                  (this.horiz.firstChild.style.width =
                      Math.max(0, e.scrollWidth - e.clientWidth + t) + "px"))
                : ((this.horiz.style.display = ""),
                  (this.horiz.firstChild.style.width = "0")),
            !this.checkedZeroWidth &&
                0 < e.clientHeight &&
                (0 == i && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
            { right: r ? i : 0, bottom: n ? i : 0 }
        );
    }),
        (Gr.prototype.setScrollLeft = function (e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                this.disableHoriz &&
                    this.enableZeroWidthBar(
                        this.horiz,
                        this.disableHoriz,
                        "horiz"
                    );
        }),
        (Gr.prototype.setScrollTop = function (e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e),
                this.disableVert &&
                    this.enableZeroWidthBar(
                        this.vert,
                        this.disableVert,
                        "vert"
                    );
        }),
        (Gr.prototype.zeroWidthHack = function () {
            (this.horiz.style.height = this.vert.style.width =
                C && !c ? "12px" : "18px"),
                (this.horiz.style.visibility = this.vert.style.visibility =
                    "hidden"),
                (this.disableHoriz = new de()),
                (this.disableVert = new de());
        }),
        (Gr.prototype.enableZeroWidthBar = function (n, r, i) {
            (n.style.visibility = ""),
                r.set(1e3, function e() {
                    var t = n.getBoundingClientRect();
                    ("vert" == i
                        ? document.elementFromPoint(
                              t.right - 1,
                              (t.top + t.bottom) / 2
                          )
                        : document.elementFromPoint(
                              (t.right + t.left) / 2,
                              t.bottom - 1
                          )) != n
                        ? (n.style.visibility = "hidden")
                        : r.set(1e3, e);
                });
        }),
        (Gr.prototype.clear = function () {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert);
        });
    function Vr(e, t) {
        t = t || Br(e);
        var n = e.display.barWidth,
            r = e.display.barHeight;
        Kr(e, t);
        for (
            var i = 0;
            (i < 4 && n != e.display.barWidth) || r != e.display.barHeight;
            i++
        )
            n != e.display.barWidth && e.options.lineWrapping && Nr(e),
                Kr(e, Br(e)),
                (n = e.display.barWidth),
                (r = e.display.barHeight);
    }
    function Kr(e, t) {
        var n = e.display,
            r = n.scrollbars.update(t);
        (n.sizer.style.paddingRight = (n.barWidth = r.right) + "px"),
            (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px"),
            (n.heightForcer.style.borderBottom =
                r.bottom + "px solid transparent"),
            r.right && r.bottom
                ? ((n.scrollbarFiller.style.display = "block"),
                  (n.scrollbarFiller.style.height = r.bottom + "px"),
                  (n.scrollbarFiller.style.width = r.right + "px"))
                : (n.scrollbarFiller.style.display = ""),
            r.bottom &&
            e.options.coverGutterNextToScrollbar &&
            e.options.fixedGutter
                ? ((n.gutterFiller.style.display = "block"),
                  (n.gutterFiller.style.height = r.bottom + "px"),
                  (n.gutterFiller.style.width = t.gutterWidth + "px"))
                : (n.gutterFiller.style.display = "");
    }
    (Ur.prototype.update = function () {
        return { bottom: 0, right: 0 };
    }),
        (Ur.prototype.setScrollLeft = function () {}),
        (Ur.prototype.setScrollTop = function () {}),
        (Ur.prototype.clear = function () {});
    var jr = { native: Gr, null: Ur };
    function Xr(n) {
        n.display.scrollbars &&
            (n.display.scrollbars.clear(),
            n.display.scrollbars.addClass &&
                ee(n.display.wrapper, n.display.scrollbars.addClass)),
            (n.display.scrollbars = new jr[n.options.scrollbarStyle](
                function (e) {
                    n.display.wrapper.insertBefore(
                        e,
                        n.display.scrollbarFiller
                    ),
                        k(e, "mousedown", function () {
                            n.state.focused &&
                                setTimeout(function () {
                                    return n.display.input.focus();
                                }, 0);
                        }),
                        e.setAttribute("cm-not-content", "true");
                },
                function (e, t) {
                    ("horizontal" == t ? Rr : Ir)(n, e);
                },
                n
            )),
            n.display.scrollbars.addClass &&
                ie(n.display.wrapper, n.display.scrollbars.addClass);
    }
    var Yr = 0;
    function $r(e) {
        (e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Yr,
            markArrays: null,
        }),
            (e = e.curOp),
            vn
                ? vn.ops.push(e)
                : (e.ownsGroup = vn = { ops: [e], delayedCallbacks: [] });
    }
    function _r(e) {
        e = e.curOp;
        if (e) {
            var t = function (e) {
                for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                for (var n = e.ops, r = 0; r < n.length; r++) {
                    l = o = i = void 0;
                    var i = n[r],
                        o = i.cm,
                        l = o.display;
                    (function (e) {
                        var t = e.display;
                        !t.scrollbarsClipped &&
                            t.scroller.offsetWidth &&
                            ((t.nativeBarWidth =
                                t.scroller.offsetWidth -
                                t.scroller.clientWidth),
                            (t.heightForcer.style.height = Wn(e) + "px"),
                            (t.sizer.style.marginBottom =
                                -t.nativeBarWidth + "px"),
                            (t.sizer.style.borderRightWidth = Wn(e) + "px"),
                            (t.scrollbarsClipped = !0));
                    })(o),
                        i.updateMaxLine && ln(o),
                        (i.mustUpdate =
                            i.viewChanged ||
                            i.forceUpdate ||
                            null != i.scrollTop ||
                            (i.scrollToPos &&
                                (i.scrollToPos.from.line < l.viewFrom ||
                                    i.scrollToPos.to.line >= l.viewTo)) ||
                            (l.maxLineChanged && o.options.lineWrapping)),
                        (i.update =
                            i.mustUpdate &&
                            new Qr(
                                o,
                                i.mustUpdate && {
                                    top: i.scrollTop,
                                    ensure: i.scrollToPos,
                                },
                                i.forceUpdate
                            ));
                }
                for (var s = 0; s < n.length; s++) {
                    a = void 0;
                    var a = n[s];
                    a.updatedDisplay = a.mustUpdate && Jr(a.cm, a.update);
                }
                for (var u = 0; u < n.length; u++) {
                    c = void 0;
                    h = void 0;
                    d = void 0;
                    var c = n[u];
                    var h = c.cm,
                        d = h.display;
                    c.updatedDisplay && Nr(h);
                    (c.barMeasure = Br(h)),
                        d.maxLineChanged &&
                            !h.options.lineWrapping &&
                            ((c.adjustWidthTo =
                                En(h, d.maxLine, d.maxLine.text.length).left +
                                3),
                            (h.display.sizerWidth = c.adjustWidthTo),
                            (c.barMeasure.scrollWidth = Math.max(
                                d.scroller.clientWidth,
                                d.sizer.offsetLeft +
                                    c.adjustWidthTo +
                                    Wn(h) +
                                    h.display.barWidth
                            )),
                            (c.maxScrollLeft = Math.max(
                                0,
                                d.sizer.offsetLeft + c.adjustWidthTo - Hn(h)
                            )));
                    (c.updatedDisplay || c.selectionChanged) &&
                        (c.preparedSelection = d.input.prepareSelection());
                }
                for (var f = 0; f < n.length; f++) {
                    p = void 0;
                    g = void 0;
                    m = void 0;
                    var p = n[f];
                    var g = p.cm;
                    null != p.adjustWidthTo &&
                        ((g.display.sizer.style.minWidth =
                            p.adjustWidthTo + "px"),
                        p.maxScrollLeft < g.doc.scrollLeft &&
                            Rr(
                                g,
                                Math.min(
                                    g.display.scroller.scrollLeft,
                                    p.maxScrollLeft
                                ),
                                !0
                            ),
                        (g.display.maxLineChanged = !1));
                    var m = p.focus && p.focus == N(ae(g));
                    p.preparedSelection &&
                        g.display.input.showSelection(p.preparedSelection, m);
                    (!p.updatedDisplay && p.startHeight == g.doc.height) ||
                        Vr(g, p.barMeasure);
                    p.updatedDisplay && ri(g, p.barMeasure);
                    p.selectionChanged && Sr(g);
                    g.state.focused &&
                        p.updateInput &&
                        g.display.input.reset(p.typing);
                    m && Lr(p.cm);
                }
                for (var v, y = 0; y < n.length; y++) {
                    b = void 0;
                    w = void 0;
                    x = void 0;
                    C = void 0;
                    v = void 0;
                    S = void 0;
                    L = void 0;
                    k = void 0;
                    T = void 0;
                    var b = n[y];
                    var w = b.cm,
                        x = w.display,
                        C = w.doc;
                    b.updatedDisplay && ei(w, b.update);
                    null == x.wheelStartX ||
                        (null == b.scrollTop &&
                            null == b.scrollLeft &&
                            !b.scrollToPos) ||
                        (x.wheelStartX = x.wheelStartY = null);
                    null != b.scrollTop && zr(w, b.scrollTop, b.forceScroll);
                    null != b.scrollLeft && Rr(w, b.scrollLeft, !0, !0);
                    b.scrollToPos &&
                        ((v = (function (e, t, n, r) {
                            null == r && (r = 0),
                                e.options.lineWrapping ||
                                    t != n ||
                                    ((n =
                                        "before" == t.sticky
                                            ? F(t.line, t.ch + 1, "before")
                                            : t),
                                    (t = t.ch
                                        ? F(
                                              t.line,
                                              "before" == t.sticky
                                                  ? t.ch - 1
                                                  : t.ch,
                                              "after"
                                          )
                                        : t));
                            for (var i = 0; i < 5; i++) {
                                var o,
                                    l = !1,
                                    s = Qn(e, t),
                                    a = n && n != t ? Qn(e, n) : s,
                                    s = Dr(
                                        e,
                                        (o = {
                                            left: Math.min(s.left, a.left),
                                            top: Math.min(s.top, a.top) - r,
                                            right: Math.max(s.left, a.left),
                                            bottom:
                                                Math.max(s.bottom, a.bottom) +
                                                r,
                                        })
                                    ),
                                    a = e.doc.scrollTop,
                                    u = e.doc.scrollLeft;
                                if (
                                    (null != s.scrollTop &&
                                        (Ir(e, s.scrollTop),
                                        1 < Math.abs(e.doc.scrollTop - a) &&
                                            (l = !0)),
                                    null != s.scrollLeft &&
                                        (Rr(e, s.scrollLeft),
                                        1 < Math.abs(e.doc.scrollLeft - u) &&
                                            (l = !0)),
                                    !l)
                                )
                                    break;
                            }
                            return o;
                        })(
                            w,
                            E(C, b.scrollToPos.from),
                            E(C, b.scrollToPos.to),
                            b.scrollToPos.margin
                        )),
                        (function (e, t) {
                            var n, r, i, o;
                            A(e, "scrollCursorIntoView") ||
                                ((o = (n =
                                    e.display).sizer.getBoundingClientRect()),
                                (r = null),
                                (i = n.wrapper.ownerDocument),
                                t.top + o.top < 0
                                    ? (r = !0)
                                    : t.bottom + o.top >
                                          (i.defaultView.innerHeight ||
                                              i.documentElement.clientHeight) &&
                                      (r = !1),
                                null == r ||
                                    X ||
                                    ((o = M(
                                        "div",
                                        "​",
                                        null,
                                        "position: absolute;\n                         top: " +
                                            (t.top -
                                                n.viewOffset -
                                                On(e.display)) +
                                            "px;\n                         height: " +
                                            (t.bottom -
                                                t.top +
                                                Wn(e) +
                                                n.barHeight) +
                                            "px;\n                         left: " +
                                            t.left +
                                            "px; width: " +
                                            Math.max(2, t.right - t.left) +
                                            "px;"
                                    )),
                                    e.display.lineSpace.appendChild(o),
                                    o.scrollIntoView(r),
                                    e.display.lineSpace.removeChild(o)));
                        })(w, v));
                    var S = b.maybeHiddenMarkers,
                        L = b.maybeUnhiddenMarkers;
                    if (S)
                        for (var k = 0; k < S.length; ++k)
                            S[k].lines.length || O(S[k], "hide");
                    if (L)
                        for (var T = 0; T < L.length; ++T)
                            L[T].lines.length && O(L[T], "unhide");
                    x.wrapper.offsetHeight &&
                        (C.scrollTop = w.display.scroller.scrollTop);
                    b.changeObjs && O(w, "changes", w, b.changeObjs);
                    b.update && b.update.finish();
                }
            };
            if ((e = e.ownsGroup))
                try {
                    var n = e,
                        r = n.delayedCallbacks,
                        i = 0;
                    do {
                        for (; i < r.length; i++) r[i].call(null);
                        for (var o = 0; o < n.ops.length; o++) {
                            var l = n.ops[o];
                            if (l.cursorActivityHandlers)
                                for (
                                    ;
                                    l.cursorActivityCalled <
                                    l.cursorActivityHandlers.length;

                                )
                                    l.cursorActivityHandlers[
                                        l.cursorActivityCalled++
                                    ].call(null, l.cm);
                        }
                    } while (i < r.length);
                } finally {
                    (vn = null), t(e);
                }
        }
    }
    function h(e, t) {
        if (e.curOp) return t();
        $r(e);
        try {
            return t();
        } finally {
            _r(e);
        }
    }
    function R(e, t) {
        return function () {
            if (e.curOp) return t.apply(e, arguments);
            $r(e);
            try {
                return t.apply(e, arguments);
            } finally {
                _r(e);
            }
        };
    }
    function t(e) {
        return function () {
            if (this.curOp) return e.apply(this, arguments);
            $r(this);
            try {
                return e.apply(this, arguments);
            } finally {
                _r(this);
            }
        };
    }
    function n(t) {
        return function () {
            var e = this.cm;
            if (!e || e.curOp) return t.apply(this, arguments);
            $r(e);
            try {
                return t.apply(this, arguments);
            } finally {
                _r(e);
            }
        };
    }
    function qr(e, t) {
        e.doc.highlightFrontier < e.display.viewTo &&
            e.state.highlight.set(t, ce(Zr, e));
    }
    function Zr(l) {
        var s,
            a,
            u,
            c = l.doc;
        c.highlightFrontier >= l.display.viewTo ||
            ((s = +new Date() + l.options.workTime),
            (a = At(l, c.highlightFrontier)),
            (u = []),
            c.iter(
                a.line,
                Math.min(c.first + c.size, l.display.viewTo + 500),
                function (e) {
                    if (a.line >= l.display.viewFrom) {
                        for (
                            var t = e.styles,
                                n =
                                    e.text.length > l.options.maxHighlightLength
                                        ? ht(c.mode, a.state)
                                        : null,
                                r = Nt(l, e, a, !0),
                                n =
                                    (n && (a.state = n),
                                    (e.styles = r.styles),
                                    e.styleClasses),
                                r = r.classes,
                                i =
                                    (r
                                        ? (e.styleClasses = r)
                                        : n && (e.styleClasses = null),
                                    !t ||
                                        t.length != e.styles.length ||
                                        (n != r &&
                                            (!n ||
                                                !r ||
                                                n.bgClass != r.bgClass ||
                                                n.textClass != r.textClass))),
                                o = 0;
                            !i && o < t.length;
                            ++o
                        )
                            i = t[o] != e.styles[o];
                        i && u.push(a.line),
                            (e.stateAfter = a.save()),
                            a.nextLine();
                    } else
                        e.text.length <= l.options.maxHighlightLength &&
                            Dt(l, e.text, a),
                            (e.stateAfter = a.line % 5 == 0 ? a.save() : null),
                            a.nextLine();
                    if (+new Date() > s) return qr(l, l.options.workDelay), !0;
                }
            ),
            (c.highlightFrontier = a.line),
            (c.modeFrontier = Math.max(c.modeFrontier, a.line)),
            u.length &&
                h(l, function () {
                    for (var e = 0; e < u.length; e++) gr(l, u[e], "text");
                }));
    }
    var Qr = function (e, t, n) {
        var r = e.display;
        (this.viewport = t),
            (this.visible = Ar(r, e.doc, t)),
            (this.editorIsHidden = !r.wrapper.offsetWidth),
            (this.wrapperHeight = r.wrapper.clientHeight),
            (this.wrapperWidth = r.wrapper.clientWidth),
            (this.oldDisplayWidth = Hn(e)),
            (this.force = n),
            (this.dims = ur(e)),
            (this.events = []);
    };
    function Jr(e, t) {
        var n = e.display,
            r = e.doc;
        if (t.editorIsHidden) return mr(e), !1;
        if (
            !t.force &&
            t.visible.from >= n.viewFrom &&
            t.visible.to <= n.viewTo &&
            (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
            n.renderedView == n.view &&
            0 == yr(e)
        )
            return !1;
        oi(e) && (mr(e), (t.dims = ur(e)));
        var i = r.first + r.size,
            o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
            l = Math.min(i, t.visible.to + e.options.viewportMargin),
            r =
                (n.viewFrom < o &&
                    o - n.viewFrom < 20 &&
                    (o = Math.max(r.first, n.viewFrom)),
                n.viewTo > l &&
                    n.viewTo - l < 20 &&
                    (l = Math.min(i, n.viewTo)),
                Rt && ((o = en(e.doc, o)), (l = tn(e.doc, l))),
                o != n.viewFrom ||
                    l != n.viewTo ||
                    n.lastWrapHeight != t.wrapperHeight ||
                    n.lastWrapWidth != t.wrapperWidth),
            i =
                ((i = o),
                (o = l),
                0 == (c = (l = e).display).view.length ||
                i >= c.viewTo ||
                o <= c.viewFrom
                    ? ((c.view = mn(l, i, o)), (c.viewFrom = i))
                    : (c.viewFrom > i
                          ? (c.view = mn(l, i, c.viewFrom).concat(c.view))
                          : c.viewFrom < i && (c.view = c.view.slice(pr(l, i))),
                      (c.viewFrom = i),
                      c.viewTo < o
                          ? (c.view = c.view.concat(mn(l, c.viewTo, o)))
                          : c.viewTo > o &&
                            (c.view = c.view.slice(0, pr(l, o)))),
                (c.viewTo = o),
                (n.viewOffset = rn(W(e.doc, n.viewFrom))),
                (e.display.mover.style.top = n.viewOffset + "px"),
                yr(e));
        if (
            !r &&
            0 == i &&
            !t.force &&
            n.renderedView == n.view &&
            (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
        )
            return !1;
        var l = (function (e) {
                if (e.hasFocus()) return null;
                if (!(n = N(ae(e))) || !re(e.display.lineDiv, n)) return null;
                var t,
                    n = { activeElt: n };
                return (
                    window.getSelection &&
                        (t = ue(e).getSelection()).anchorNode &&
                        t.extend &&
                        re(e.display.lineDiv, t.anchorNode) &&
                        ((n.anchorNode = t.anchorNode),
                        (n.anchorOffset = t.anchorOffset),
                        (n.focusNode = t.focusNode),
                        (n.focusOffset = t.focusOffset)),
                    n
                );
            })(e),
            s = (4 < i && (n.lineDiv.style.display = "none"), e),
            a = n.updateLineNumbers,
            u = t.dims,
            c = s.display,
            h = s.options.lineNumbers,
            d = c.lineDiv,
            f = d.firstChild;
        function p(e) {
            var t = e.nextSibling;
            return (
                x && C && s.display.currentWheelTarget == e
                    ? (e.style.display = "none")
                    : e.parentNode.removeChild(e),
                t
            );
        }
        for (var g = c.view, m = c.viewFrom, v = 0; v < g.length; v++) {
            var y = g[v];
            if (!y.hidden)
                if (y.node && y.node.parentNode == d) {
                    for (; f != y.node; ) f = p(f);
                    var b = h && null != a && a <= m && y.lineNumber;
                    y.changes &&
                        (-1 < L(y.changes, "gutter") && (b = !1),
                        wn(s, y, m, u)),
                        b &&
                            (te(y.lineNumber),
                            y.lineNumber.appendChild(
                                document.createTextNode(bt(s.options, m))
                            )),
                        (f = y.node.nextSibling);
                } else {
                    b = (function (e, t, n, r) {
                        var i = Cn(e, t);
                        return (
                            (t.text = t.node = i.pre),
                            i.bgClass && (t.bgClass = i.bgClass),
                            i.textClass && (t.textClass = i.textClass),
                            Sn(e, t),
                            Ln(e, t, n, r),
                            kn(e, t, r),
                            t.node
                        );
                    })(s, y, m, u);
                    d.insertBefore(b, f);
                }
            m += y.size;
        }
        for (; f; ) f = p(f);
        return (
            4 < i && (n.lineDiv.style.display = ""),
            (n.renderedView = n.view),
            (o = l) &&
                o.activeElt &&
                o.activeElt != N(o.activeElt.ownerDocument) &&
                (o.activeElt.focus(),
                !/^(INPUT|TEXTAREA)$/.test(o.activeElt.nodeName) &&
                    o.anchorNode &&
                    re(document.body, o.anchorNode) &&
                    re(document.body, o.focusNode) &&
                    ((i = (c =
                        o.activeElt.ownerDocument).defaultView.getSelection()),
                    (c = c.createRange()).setEnd(o.anchorNode, o.anchorOffset),
                    c.collapse(!1),
                    i.removeAllRanges(),
                    i.addRange(c),
                    i.extend(o.focusNode, o.focusOffset))),
            te(n.cursorDiv),
            te(n.selectionDiv),
            (n.gutters.style.height = n.sizer.style.minHeight = 0),
            r &&
                ((n.lastWrapHeight = t.wrapperHeight),
                (n.lastWrapWidth = t.wrapperWidth),
                qr(e, 400)),
            !(n.updateLineNumbers = null)
        );
    }
    function ei(e, t) {
        for (var n = t.viewport, r = !0; ; r = !1) {
            if (r && e.options.lineWrapping && t.oldDisplayWidth != Hn(e))
                r && (t.visible = Ar(e.display, e.doc, n));
            else if (
                (n &&
                    null != n.top &&
                    (n = {
                        top: Math.min(
                            e.doc.height + An(e.display) - Fn(e),
                            n.top
                        ),
                    }),
                (t.visible = Ar(e.display, e.doc, n)),
                t.visible.from >= e.display.viewFrom &&
                    t.visible.to <= e.display.viewTo)
            )
                break;
            if (!Jr(e, t)) break;
            Nr(e);
            var i = Br(e);
            br(e), Vr(e, i), ri(e, i), (t.force = !1);
        }
        t.signal(e, "update", e),
            (e.display.viewFrom == e.display.reportedViewFrom &&
                e.display.viewTo == e.display.reportedViewTo) ||
                (t.signal(
                    e,
                    "viewportChange",
                    e,
                    e.display.viewFrom,
                    e.display.viewTo
                ),
                (e.display.reportedViewFrom = e.display.viewFrom),
                (e.display.reportedViewTo = e.display.viewTo));
    }
    function ti(e, t) {
        var n,
            t = new Qr(e, t);
        Jr(e, t) &&
            (Nr(e),
            ei(e, t),
            (n = Br(e)),
            br(e),
            Vr(e, n),
            ri(e, n),
            t.finish());
    }
    function ni(e) {
        var t = e.gutters.offsetWidth;
        (e.sizer.style.marginLeft = t + "px"), b(e, "gutterChanged", e);
    }
    function ri(e, t) {
        (e.display.sizer.style.minHeight = t.docHeight + "px"),
            (e.display.heightForcer.style.top = t.docHeight + "px"),
            (e.display.gutters.style.height =
                t.docHeight + e.display.barHeight + Wn(e) + "px");
    }
    function ii(e) {
        var t = e.display,
            n = t.view;
        if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
            for (
                var r = cr(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
                    i = t.gutters.offsetWidth,
                    o = r + "px",
                    l = 0;
                l < n.length;
                l++
            )
                if (!n[l].hidden) {
                    e.options.fixedGutter &&
                        (n[l].gutter && (n[l].gutter.style.left = o),
                        n[l].gutterBackground &&
                            (n[l].gutterBackground.style.left = o));
                    var s = n[l].alignable;
                    if (s)
                        for (var a = 0; a < s.length; a++) s[a].style.left = o;
                }
            e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
        }
    }
    function oi(e) {
        var t, n, r, i;
        if (e.options.lineNumbers)
            return (
                (t = e.doc),
                (t = bt(e.options, t.first + t.size - 1)),
                (n = e.display),
                t.length != n.lineNumChars
                    ? ((r = (i = n.measure.appendChild(
                          M(
                              "div",
                              [M("div", t)],
                              "CodeMirror-linenumber CodeMirror-gutter-elt"
                          )
                      )).firstChild.offsetWidth),
                      (i = i.offsetWidth - r),
                      (n.lineGutter.style.width = ""),
                      (n.lineNumInnerWidth =
                          Math.max(r, n.lineGutter.offsetWidth - i) + 1),
                      (n.lineNumWidth = n.lineNumInnerWidth + i),
                      (n.lineNumChars = n.lineNumInnerWidth ? t.length : -1),
                      (n.lineGutter.style.width = n.lineNumWidth + "px"),
                      ni(e.display),
                      1)
                    : void 0
            );
    }
    function li(e, t) {
        for (var n = [], r = !1, i = 0; i < e.length; i++) {
            var o = e[i],
                l = null;
            if (
                ("string" != typeof o && ((l = o.style), (o = o.className)),
                "CodeMirror-linenumbers" == o)
            ) {
                if (!t) continue;
                r = !0;
            }
            n.push({ className: o, style: l });
        }
        return (
            t &&
                !r &&
                n.push({ className: "CodeMirror-linenumbers", style: null }),
            n
        );
    }
    function si(e) {
        var t = e.gutters,
            n = e.gutterSpecs;
        te(t), (e.lineGutter = null);
        for (var r = 0; r < n.length; ++r) {
            var i = n[r],
                o = i.className,
                i = i.style,
                l = t.appendChild(M("div", null, "CodeMirror-gutter " + o));
            i && (l.style.cssText = i),
                "CodeMirror-linenumbers" == o &&
                    ((e.lineGutter = l).style.width =
                        (e.lineNumWidth || 1) + "px");
        }
        (t.style.display = n.length ? "" : "none"), ni(e);
    }
    function ai(e) {
        si(e.display), I(e), ii(e);
    }
    function ui(e, t, n, r) {
        var i = this,
            o =
                ((this.input = n),
                (i.scrollbarFiller = M(
                    "div",
                    null,
                    "CodeMirror-scrollbar-filler"
                )),
                i.scrollbarFiller.setAttribute("cm-not-content", "true"),
                (i.gutterFiller = M("div", null, "CodeMirror-gutter-filler")),
                i.gutterFiller.setAttribute("cm-not-content", "true"),
                (i.lineDiv = ne("div", null, "CodeMirror-code")),
                (i.selectionDiv = M(
                    "div",
                    null,
                    null,
                    "position: relative; z-index: 1"
                )),
                (i.cursorDiv = M("div", null, "CodeMirror-cursors")),
                (i.measure = M("div", null, "CodeMirror-measure")),
                (i.lineMeasure = M("div", null, "CodeMirror-measure")),
                (i.lineSpace = ne(
                    "div",
                    [
                        i.measure,
                        i.lineMeasure,
                        i.selectionDiv,
                        i.cursorDiv,
                        i.lineDiv,
                    ],
                    null,
                    "position: relative; outline: none"
                )),
                ne("div", [i.lineSpace], "CodeMirror-lines"));
        (i.mover = M("div", [o], null, "position: relative")),
            (i.sizer = M("div", [i.mover], "CodeMirror-sizer")),
            (i.sizerWidth = null),
            (i.heightForcer = M(
                "div",
                null,
                null,
                "position: absolute; height: " + fe + "px; width: 1px;"
            )),
            (i.gutters = M("div", null, "CodeMirror-gutters")),
            (i.lineGutter = null),
            (i.scroller = M(
                "div",
                [i.sizer, i.heightForcer, i.gutters],
                "CodeMirror-scroll"
            )),
            i.scroller.setAttribute("tabIndex", "-1"),
            (i.wrapper = M(
                "div",
                [i.scrollbarFiller, i.gutterFiller, i.scroller],
                "CodeMirror"
            )),
            i.wrapper.setAttribute("translate", "no"),
            w &&
                v < 8 &&
                ((i.gutters.style.zIndex = -1),
                (i.scroller.style.paddingRight = 0)),
            x || (d && _) || (i.scroller.draggable = !0),
            e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
            (i.viewFrom = i.viewTo = t.first),
            (i.reportedViewFrom = i.reportedViewTo = t.first),
            (i.view = []),
            (i.renderedView = null),
            (i.externalMeasured = null),
            (i.viewOffset = 0),
            (i.lastWrapHeight = i.lastWrapWidth = 0),
            (i.updateLineNumbers = null),
            (i.nativeBarWidth = i.barHeight = i.barWidth = 0),
            (i.scrollbarsClipped = !1),
            (i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null),
            (i.alignWidgets = !1),
            (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
            (i.maxLine = null),
            (i.maxLineLength = 0),
            (i.maxLineChanged = !1),
            (i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null),
            (i.shift = !1),
            (i.selForContextMenu = null),
            (i.activeTouch = null),
            (i.gutterSpecs = li(r.gutters, r.lineNumbers)),
            si(i),
            n.init(i);
    }
    (Qr.prototype.signal = function (e, t) {
        je(e, t) && this.events.push(arguments);
    }),
        (Qr.prototype.finish = function () {
            for (var e = 0; e < this.events.length; e++)
                O.apply(null, this.events[e]);
        });
    var ci = 0,
        hi = null;
    function di(e) {
        var t = e.wheelDeltaX,
            n = e.wheelDeltaY;
        return (
            null == t &&
                e.detail &&
                e.axis == e.HORIZONTAL_AXIS &&
                (t = e.detail),
            null == n && e.detail && e.axis == e.VERTICAL_AXIS
                ? (n = e.detail)
                : null == n && (n = e.wheelDelta),
            { x: t, y: n }
        );
    }
    function fi(e) {
        e = di(e);
        return (e.x *= hi), (e.y *= hi), e;
    }
    function pi(e, t) {
        m &&
            102 == V &&
            (null == e.display.chromeScrollHack
                ? (e.display.sizer.style.pointerEvents = "none")
                : clearTimeout(e.display.chromeScrollHack),
            (e.display.chromeScrollHack = setTimeout(function () {
                (e.display.chromeScrollHack = null),
                    (e.display.sizer.style.pointerEvents = "");
            }, 100)));
        var n = di(t),
            r = n.x,
            n = n.y,
            i = hi,
            o =
                (0 === t.deltaMode && ((r = t.deltaX), (n = t.deltaY), (i = 1)),
                e.display),
            l = o.scroller,
            s = l.scrollWidth > l.clientWidth,
            a = l.scrollHeight > l.clientHeight;
        if ((r && s) || (n && a)) {
            if (n && C && x)
                e: for (var u = t.target, c = o.view; u != l; u = u.parentNode)
                    for (var h = 0; h < c.length; h++)
                        if (c[h].node == u) {
                            e.display.currentWheelTarget = u;
                            break e;
                        }
            if (r && !d && !K && null != i)
                return (
                    n && a && Ir(e, Math.max(0, l.scrollTop + n * i)),
                    Rr(e, Math.max(0, l.scrollLeft + r * i)),
                    (n && !a) || D(t),
                    void (o.wheelStartX = null)
                );
            n &&
                null != i &&
                ((a = (s = e.doc.scrollTop) + o.wrapper.clientHeight),
                (i = n * i) < 0
                    ? (s = Math.max(0, s + i - 50))
                    : (a = Math.min(e.doc.height, a + i + 50)),
                ti(e, { top: s, bottom: a })),
                ci < 20 &&
                    0 !== t.deltaMode &&
                    (null == o.wheelStartX
                        ? ((o.wheelStartX = l.scrollLeft),
                          (o.wheelStartY = l.scrollTop),
                          (o.wheelDX = r),
                          (o.wheelDY = n),
                          setTimeout(function () {
                              var e, t;
                              null != o.wheelStartX &&
                                  ((e = l.scrollLeft - o.wheelStartX),
                                  (t =
                                      ((t = l.scrollTop - o.wheelStartY) &&
                                          o.wheelDY &&
                                          t / o.wheelDY) ||
                                      (e && o.wheelDX && e / o.wheelDX)),
                                  (o.wheelStartX = o.wheelStartY = null),
                                  t && ((hi = (hi * ci + t) / (ci + 1)), ++ci));
                          }, 200))
                        : ((o.wheelDX += r), (o.wheelDY += n)));
        }
    }
    w ? (hi = -0.53) : d ? (hi = 15) : m ? (hi = -0.7) : j && (hi = -1 / 3);
    var B = function (e, t) {
            (this.ranges = e), (this.primIndex = t);
        },
        G =
            ((B.prototype.primary = function () {
                return this.ranges[this.primIndex];
            }),
            (B.prototype.equals = function (e) {
                if (e == this) return !0;
                if (
                    e.primIndex != this.primIndex ||
                    e.ranges.length != this.ranges.length
                )
                    return !1;
                for (var t = 0; t < this.ranges.length; t++) {
                    var n = this.ranges[t],
                        r = e.ranges[t];
                    if (!wt(n.anchor, r.anchor) || !wt(n.head, r.head))
                        return !1;
                }
                return !0;
            }),
            (B.prototype.deepCopy = function () {
                for (var e = [], t = 0; t < this.ranges.length; t++)
                    e[t] = new G(
                        xt(this.ranges[t].anchor),
                        xt(this.ranges[t].head)
                    );
                return new B(e, this.primIndex);
            }),
            (B.prototype.somethingSelected = function () {
                for (var e = 0; e < this.ranges.length; e++)
                    if (!this.ranges[e].empty()) return !0;
                return !1;
            }),
            (B.prototype.contains = function (e, t) {
                t = t || e;
                for (var n = 0; n < this.ranges.length; n++) {
                    var r = this.ranges[n];
                    if (0 <= P(t, r.from()) && P(e, r.to()) <= 0) return n;
                }
                return -1;
            }),
            function (e, t) {
                (this.anchor = e), (this.head = t);
            });
    function gi(e, t, n) {
        var r = e && e.options.selectionsMayTouch,
            e = t[n];
        t.sort(function (e, t) {
            return P(e.from(), t.from());
        }),
            (n = L(t, e));
        for (var i = 1; i < t.length; i++) {
            var o,
                l = t[i],
                s = t[i - 1],
                a = P(s.to(), l.from());
            (r && !l.empty() ? 0 < a : 0 <= a) &&
                ((a = St(s.from(), l.from())),
                (o = Ct(s.to(), l.to())),
                (l = s.empty() ? l.from() == l.head : s.from() == s.head),
                i <= n && --n,
                t.splice(--i, 2, new G(l ? o : a, l ? a : o)));
        }
        return new B(t, n);
    }
    function mi(e, t) {
        return new B([new G(e, t || e)], 0);
    }
    function vi(e) {
        return e.text
            ? F(
                  e.from.line + e.text.length - 1,
                  z(e.text).length + (1 == e.text.length ? e.from.ch : 0)
              )
            : e.to;
    }
    function yi(e, t) {
        if (P(e, t.from) < 0) return e;
        if (P(e, t.to) <= 0) return vi(t);
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
            r = e.ch;
        return e.line == t.to.line && (r += vi(t).ch - t.to.ch), F(n, r);
    }
    function bi(e, t) {
        for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
            var i = e.sel.ranges[r];
            n.push(new G(yi(i.anchor, t), yi(i.head, t)));
        }
        return gi(e.cm, n, e.sel.primIndex);
    }
    function wi(e, t, n) {
        return e.line == t.line
            ? F(n.line, e.ch - t.ch + n.ch)
            : F(n.line + (e.line - t.line), e.ch);
    }
    function xi(e) {
        (e.doc.mode = at(e.options, e.doc.modeOption)), Ci(e);
    }
    function Ci(e) {
        e.doc.iter(function (e) {
            e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null);
        }),
            (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
            qr(e, 100),
            e.state.modeGen++,
            e.curOp && I(e);
    }
    function Si(e, t) {
        return (
            0 == t.from.ch &&
            0 == t.to.ch &&
            "" == z(t.text) &&
            (!e.cm || e.cm.options.wholeLineUpdateBefore)
        );
    }
    function Li(e, o, t, l) {
        function i(e) {
            return t ? t[e] : null;
        }
        function n(e, t, n) {
            var r, i;
            (t = t),
                (n = n),
                (i = l),
                ((r = e).text = t),
                r.stateAfter && (r.stateAfter = null),
                r.styles && (r.styles = null),
                null != r.order && (r.order = null),
                Kt(r),
                jt(r, n),
                (t = i ? i(r) : 1) != r.height && mt(r, t),
                b(e, "change", e, o);
        }
        function r(e, t) {
            for (var n = [], r = e; r < t; ++r) n.push(new sn(c[r], i(r), l));
            return n;
        }
        var s,
            a = o.from,
            u = o.to,
            c = o.text,
            h = W(e, a.line),
            d = W(e, u.line),
            f = z(c),
            p = i(c.length - 1),
            g = u.line - a.line;
        o.full
            ? (e.insert(0, r(0, c.length)),
              e.remove(c.length, e.size - c.length))
            : Si(e, o)
            ? ((s = r(0, c.length - 1)),
              n(d, d.text, p),
              g && e.remove(a.line, g),
              s.length && e.insert(a.line, s))
            : h == d
            ? 1 == c.length
                ? n(h, h.text.slice(0, a.ch) + f + h.text.slice(u.ch), p)
                : ((s = r(1, c.length - 1)).push(
                      new sn(f + h.text.slice(u.ch), p, l)
                  ),
                  n(h, h.text.slice(0, a.ch) + c[0], i(0)),
                  e.insert(a.line + 1, s))
            : 1 == c.length
            ? (n(h, h.text.slice(0, a.ch) + c[0] + d.text.slice(u.ch), i(0)),
              e.remove(a.line + 1, g))
            : (n(h, h.text.slice(0, a.ch) + c[0], i(0)),
              n(d, f + d.text.slice(u.ch), p),
              (s = r(1, c.length - 1)),
              1 < g && e.remove(a.line + 1, g - 1),
              e.insert(a.line + 1, s)),
            b(e, "change", e, o);
    }
    function ki(e, s, a) {
        !(function e(t, n, r) {
            if (t.linked)
                for (var i = 0; i < t.linked.length; ++i) {
                    var o,
                        l = t.linked[i];
                    l.doc != n &&
                        ((o = r && l.sharedHist),
                        (a && !o) || (s(l.doc, o), e(l.doc, t, o)));
                }
        })(e, null, !0);
    }
    function Ti(e, t) {
        if (t.cm) throw new Error("This document is already in use.");
        dr(((e.doc = t).cm = e)),
            xi(e),
            Mi(e),
            (e.options.direction = t.direction),
            e.options.lineWrapping || ln(e),
            (e.options.mode = t.modeOption),
            I(e);
    }
    function Mi(e) {
        ("rtl" == e.doc.direction
            ? ie
            : ee)(e.display.lineDiv, "CodeMirror-rtl");
    }
    function Ni(e) {
        (this.done = []),
            (this.undone = []),
            (this.undoDepth = e ? e.undoDepth : 1 / 0),
            (this.lastModTime = this.lastSelTime = 0),
            (this.lastOp = this.lastSelOp = null),
            (this.lastOrigin = this.lastSelOrigin = null),
            (this.generation = this.maxGeneration = e ? e.maxGeneration : 1);
    }
    function Oi(e, t) {
        var n = { from: xt(t.from), to: vi(t), text: pt(e, t.from, t.to) };
        return (
            Fi(e, n, t.from.line, t.to.line + 1),
            ki(
                e,
                function (e) {
                    return Fi(e, n, t.from.line, t.to.line + 1);
                },
                !0
            ),
            n
        );
    }
    function Ai(e) {
        for (; e.length; ) {
            if (!z(e).ranges) break;
            e.pop();
        }
    }
    function Di(e, t, n, r) {
        var i,
            o,
            l = e.history,
            s = ((l.undone.length = 0), +new Date());
        if (
            (l.lastOp == r ||
                (l.lastOrigin == t.origin &&
                    t.origin &&
                    (("+" == t.origin.charAt(0) &&
                        l.lastModTime >
                            s -
                                (e.cm
                                    ? e.cm.options.historyEventDelay
                                    : 500)) ||
                        "*" == t.origin.charAt(0)))) &&
            (o =
                (o = l).lastOp == r
                    ? (Ai(o.done), z(o.done))
                    : o.done.length && !z(o.done).ranges
                    ? z(o.done)
                    : 1 < o.done.length && !o.done[o.done.length - 2].ranges
                    ? (o.done.pop(), z(o.done))
                    : void 0)
        )
            (i = z(o.changes)),
                0 == P(t.from, t.to) && 0 == P(t.from, i.to)
                    ? (i.to = vi(t))
                    : o.changes.push(Oi(e, t));
        else {
            var a = z(l.done);
            for (
                (a && a.ranges) || Hi(e.sel, l.done),
                    o = { changes: [Oi(e, t)], generation: l.generation },
                    l.done.push(o);
                l.done.length > l.undoDepth;

            )
                l.done.shift(), l.done[0].ranges || l.done.shift();
        }
        l.done.push(n),
            (l.generation = ++l.maxGeneration),
            (l.lastModTime = l.lastSelTime = s),
            (l.lastOp = l.lastSelOp = r),
            (l.lastOrigin = l.lastSelOrigin = t.origin),
            i || O(e, "historyAdded");
    }
    function Wi(e, t, n, r) {
        var i,
            o,
            l,
            s = e.history,
            a = r && r.origin;
        n == s.lastSelOp ||
        (a &&
            s.lastSelOrigin == a &&
            ((s.lastModTime == s.lastSelTime && s.lastOrigin == a) ||
                ((e = e),
                (i = a),
                (o = z(s.done)),
                (l = t),
                "*" == (i = i.charAt(0)) ||
                    ("+" == i &&
                        o.ranges.length == l.ranges.length &&
                        o.somethingSelected() == l.somethingSelected() &&
                        new Date() - e.history.lastSelTime <=
                            (e.cm ? e.cm.options.historyEventDelay : 500)))))
            ? (s.done[s.done.length - 1] = t)
            : Hi(t, s.done),
            (s.lastSelTime = +new Date()),
            (s.lastSelOrigin = a),
            (s.lastSelOp = n),
            r && !1 !== r.clearRedo && Ai(s.undone);
    }
    function Hi(e, t) {
        var n = z(t);
        (n && n.ranges && n.equals(e)) || t.push(e);
    }
    function Fi(t, n, e, r) {
        var i = n["spans_" + t.id],
            o = 0;
        t.iter(
            Math.max(t.first, e),
            Math.min(t.first + t.size, r),
            function (e) {
                e.markedSpans &&
                    ((i = i || (n["spans_" + t.id] = {}))[o] = e.markedSpans),
                    ++o;
            }
        );
    }
    function Pi(e, t) {
        var n = t["spans_" + e.id];
        if (!n) return null;
        for (var r = [], i = 0; i < t.text.length; ++i)
            r.push(
                (function (e) {
                    if (!e) return null;
                    for (var t, n = 0; n < e.length; ++n)
                        e[n].marker.explicitlyCleared
                            ? (t = t || e.slice(0, n))
                            : t && t.push(e[n]);
                    return t ? (t.length ? t : null) : e;
                })(n[i])
            );
        return r;
    }
    function Ei(e, t) {
        var n = Pi(e, t),
            r = Ut(e, t);
        if (!n) return r;
        if (!r) return n;
        for (var i = 0; i < n.length; ++i) {
            var o = n[i],
                l = r[i];
            if (o && l)
                e: for (var s = 0; s < l.length; ++s) {
                    for (var a = l[s], u = 0; u < o.length; ++u)
                        if (o[u].marker == a.marker) continue e;
                    o.push(a);
                }
            else l && (n[i] = l);
        }
        return n;
    }
    function Ii(e, t, n) {
        for (var r = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges) r.push(n ? B.prototype.deepCopy.call(o) : o);
            else {
                var l = o.changes,
                    s = [];
                r.push({ changes: s });
                for (var a = 0; a < l.length; ++a) {
                    var u,
                        c = l[a];
                    if ((s.push({ from: c.from, to: c.to, text: c.text }), t))
                        for (var h in c)
                            (u = h.match(/^spans_(\d+)$/)) &&
                                -1 < L(t, Number(u[1])) &&
                                ((z(s)[h] = c[h]), delete c[h]);
                }
            }
        }
        return r;
    }
    function zi(e, t, n, r) {
        return r
            ? ((r = e.anchor),
              n &&
                  ((e = P(t, r) < 0) != P(n, r) < 0
                      ? ((r = t), (t = n))
                      : e != P(t, n) < 0 && (t = n)),
              new G(r, t))
            : new G(n || t, t);
    }
    function Ri(e, t, n, r, i) {
        null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
            U(e, new B([zi(e.sel.primary(), t, n, i)], 0), r);
    }
    function Bi(e, t, n) {
        for (
            var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
            o < e.sel.ranges.length;
            o++
        )
            r[o] = zi(e.sel.ranges[o], t[o], null, i);
        U(e, gi(e.cm, r, e.sel.primIndex), n);
    }
    function Gi(e, t, n, r) {
        var i = e.sel.ranges.slice(0);
        (i[t] = n), U(e, gi(e.cm, i, e.sel.primIndex), r);
    }
    function Ui(e, t, n, r) {
        U(e, mi(t, n), r);
    }
    function Vi(e, t, n) {
        var r = e.history.done,
            i = z(r);
        i && i.ranges ? Ki(e, (r[r.length - 1] = t), n) : U(e, t, n);
    }
    function U(e, t, n) {
        Ki(e, t, n), Wi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
    }
    function Ki(e, t, n) {
        (je(e, "beforeSelectionChange") ||
            (e.cm && je(e.cm, "beforeSelectionChange"))) &&
            ((r = e),
            (o = n),
            (o = {
                ranges: (i = t).ranges,
                update: function (e) {
                    this.ranges = [];
                    for (var t = 0; t < e.length; t++)
                        this.ranges[t] = new G(
                            E(r, e[t].anchor),
                            E(r, e[t].head)
                        );
                },
                origin: o && o.origin,
            }),
            O(r, "beforeSelectionChange", r, o),
            r.cm && O(r.cm, "beforeSelectionChange", r.cm, o),
            (t =
                o.ranges != i.ranges
                    ? gi(r.cm, o.ranges, o.ranges.length - 1)
                    : i));
        var r,
            i,
            o =
                (n && n.bias) ||
                (P(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        ji(e, Yi(e, t, o, !0)),
            (n && !1 === n.scroll) ||
                !e.cm ||
                "nocursor" == e.cm.getOption("readOnly") ||
                Hr(e.cm);
    }
    function ji(e, t) {
        t.equals(e.sel) ||
            ((e.sel = t),
            e.cm &&
                ((e.cm.curOp.updateInput = 1),
                (e.cm.curOp.selectionChanged = !0),
                Ke(e.cm)),
            b(e, "cursorActivity", e));
    }
    function Xi(e) {
        ji(e, Yi(e, e.sel, null, !1));
    }
    function Yi(e, t, n, r) {
        for (var i, o = 0; o < t.ranges.length; o++) {
            var l = t.ranges[o],
                s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                a = _i(e, l.anchor, s && s.anchor, n, r),
                s = l.head == l.anchor ? a : _i(e, l.head, s && s.head, n, r);
            (!i && a == l.anchor && s == l.head) ||
                ((i = i || t.ranges.slice(0, o))[o] = new G(a, s));
        }
        return i ? gi(e.cm, i, t.primIndex) : t;
    }
    function $i(e, t, n, r, i) {
        var o = W(e, t.line);
        if (o.markedSpans)
            for (var l = 0; l < o.markedSpans.length; ++l) {
                var s = o.markedSpans[l],
                    a = s.marker,
                    u = "selectLeft" in a ? !a.selectLeft : a.inclusiveLeft,
                    c = "selectRight" in a ? !a.selectRight : a.inclusiveRight;
                if (
                    (null == s.from || (u ? s.from <= t.ch : s.from < t.ch)) &&
                    (null == s.to || (c ? s.to >= t.ch : s.to > t.ch))
                ) {
                    if (i && (O(a, "beforeCursorEnter"), a.explicitlyCleared)) {
                        if (o.markedSpans) {
                            --l;
                            continue;
                        }
                        break;
                    }
                    if (a.atomic) {
                        if (n) {
                            var s = a.find(r < 0 ? 1 : -1),
                                h = void 0;
                            if (
                                (s = (r < 0 ? c : u)
                                    ? qi(
                                          e,
                                          s,
                                          -r,
                                          s && s.line == t.line ? o : null
                                      )
                                    : s) &&
                                s.line == t.line &&
                                (h = P(s, n)) &&
                                (r < 0 ? h < 0 : 0 < h)
                            )
                                return $i(e, s, t, r, i);
                        }
                        h = a.find(r < 0 ? -1 : 1);
                        return (h = (r < 0 ? u : c)
                            ? qi(e, h, r, h.line == t.line ? o : null)
                            : h)
                            ? $i(e, h, t, r, i)
                            : null;
                    }
                }
            }
        return t;
    }
    function _i(e, t, n, r, i) {
        (r = r || 1),
            (i =
                $i(e, t, n, r, i) ||
                (!i && $i(e, t, n, r, !0)) ||
                $i(e, t, n, -r, i) ||
                (!i && $i(e, t, n, -r, !0)));
        return i || ((e.cantEdit = !0), F(e.first, 0));
    }
    function qi(e, t, n, r) {
        return n < 0 && 0 == t.ch
            ? t.line > e.first
                ? E(e, F(t.line - 1))
                : null
            : 0 < n && t.ch == (r || W(e, t.line)).text.length
            ? t.line < e.first + e.size - 1
                ? F(t.line + 1, 0)
                : null
            : new F(t.line, t.ch + n);
    }
    function Zi(e) {
        e.setSelection(F(e.firstLine(), 0), F(e.lastLine()), ge);
    }
    function Qi(i, e, t) {
        var o = {
            canceled: !1,
            from: e.from,
            to: e.to,
            text: e.text,
            origin: e.origin,
            cancel: function () {
                return (o.canceled = !0);
            },
        };
        return (
            t &&
                (o.update = function (e, t, n, r) {
                    e && (o.from = E(i, e)),
                        t && (o.to = E(i, t)),
                        n && (o.text = n),
                        void 0 !== r && (o.origin = r);
                }),
            O(i, "beforeChange", i, o),
            i.cm && O(i.cm, "beforeChange", i.cm, o),
            o.canceled
                ? (i.cm && (i.cm.curOp.updateInput = 2), null)
                : { from: o.from, to: o.to, text: o.text, origin: o.origin }
        );
    }
    function Ji(e, t, n) {
        if (e.cm) {
            if (!e.cm.curOp) return R(e.cm, Ji)(e, t, n);
            if (e.cm.state.suppressEdits) return;
        }
        if (
            !(je(e, "beforeChange") || (e.cm && je(e.cm, "beforeChange"))) ||
            (t = Qi(e, t, !0))
        ) {
            var r =
                zt &&
                !n &&
                (function (e, t, n) {
                    var r = null;
                    if (
                        (e.iter(t.line, n.line + 1, function (e) {
                            if (e.markedSpans)
                                for (var t = 0; t < e.markedSpans.length; ++t) {
                                    var n = e.markedSpans[t].marker;
                                    !n.readOnly ||
                                        (r && -1 != L(r, n)) ||
                                        (r = r || []).push(n);
                                }
                        }),
                        !r)
                    )
                        return null;
                    for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                        for (
                            var l = r[o], s = l.find(0), a = 0;
                            a < i.length;
                            ++a
                        ) {
                            var u,
                                c,
                                h,
                                d = i[a];
                            P(d.to, s.from) < 0 ||
                                0 < P(d.from, s.to) ||
                                ((u = [a, 1]),
                                (c = P(d.from, s.from)),
                                (h = P(d.to, s.to)),
                                (c < 0 || (!l.inclusiveLeft && !c)) &&
                                    u.push({ from: d.from, to: s.from }),
                                (0 < h || (!l.inclusiveRight && !h)) &&
                                    u.push({ from: s.to, to: d.to }),
                                i.splice.apply(i, u),
                                (a += u.length - 3));
                        }
                    return i;
                })(e, t.from, t.to);
            if (r)
                for (var i = r.length - 1; 0 <= i; --i)
                    eo(e, {
                        from: r[i].from,
                        to: r[i].to,
                        text: i ? [""] : t.text,
                        origin: t.origin,
                    });
            else eo(e, t);
        }
    }
    function eo(e, n) {
        var t, r;
        (1 == n.text.length && "" == n.text[0] && 0 == P(n.from, n.to)) ||
            ((t = bi(e, n)),
            Di(e, n, t, e.cm ? e.cm.curOp.id : NaN),
            ro(e, n, t, Ut(e, n)),
            (r = []),
            ki(e, function (e, t) {
                t ||
                    -1 != L(r, e.history) ||
                    (so(e.history, n), r.push(e.history)),
                    ro(e, n, null, Ut(e, n));
            }));
    }
    function to(i, o, e) {
        var t = i.cm && i.cm.state.suppressEdits;
        if (!t || e) {
            for (
                var l,
                    n = i.history,
                    r = i.sel,
                    s = "undo" == o ? n.done : n.undone,
                    a = "undo" == o ? n.undone : n.done,
                    u = 0;
                u < s.length &&
                ((l = s[u]), e ? !l.ranges || l.equals(i.sel) : l.ranges);
                u++
            );
            if (u != s.length) {
                for (n.lastOrigin = n.lastSelOrigin = null; ; ) {
                    if (!(l = s.pop()).ranges) {
                        if (t) return void s.push(l);
                        break;
                    }
                    if ((Hi(l, a), e && !l.equals(i.sel)))
                        return void U(i, l, { clearRedo: !1 });
                    r = l;
                }
                for (
                    var c = [],
                        h =
                            (Hi(r, a),
                            a.push({ changes: c, generation: n.generation }),
                            (n.generation = l.generation || ++n.maxGeneration),
                            je(i, "beforeChange") ||
                                (i.cm && je(i.cm, "beforeChange"))),
                        d = l.changes.length - 1;
                    0 <= d;
                    --d
                ) {
                    var f = (function (e) {
                        var n = l.changes[e];
                        if (((n.origin = o), h && !Qi(i, n, !1)))
                            return (s.length = 0), {};
                        c.push(Oi(i, n));
                        var t = e ? bi(i, n) : z(s),
                            r =
                                (ro(i, n, t, Ei(i, n)),
                                !e &&
                                    i.cm &&
                                    i.cm.scrollIntoView({
                                        from: n.from,
                                        to: vi(n),
                                    }),
                                []);
                        ki(i, function (e, t) {
                            t ||
                                -1 != L(r, e.history) ||
                                (so(e.history, n), r.push(e.history)),
                                ro(e, n, null, Ei(e, n));
                        });
                    })(d);
                    if (f) return f.v;
                }
            }
        }
    }
    function no(e, t) {
        if (
            0 != t &&
            ((e.first += t),
            (e.sel = new B(
                xe(e.sel.ranges, function (e) {
                    return new G(
                        F(e.anchor.line + t, e.anchor.ch),
                        F(e.head.line + t, e.head.ch)
                    );
                }),
                e.sel.primIndex
            )),
            e.cm)
        ) {
            I(e.cm, e.first, e.first - t, t);
            for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
                gr(e.cm, r, "gutter");
        }
    }
    function ro(e, t, n, r) {
        if (e.cm && !e.cm.curOp) return R(e.cm, ro)(e, t, n, r);
        if (t.to.line < e.first)
            no(e, t.text.length - 1 - (t.to.line - t.from.line));
        else if (!(t.from.line > e.lastLine())) {
            t.from.line < e.first &&
                (no(e, (i = t.text.length - 1 - (e.first - t.from.line))),
                (t = {
                    from: F(e.first, 0),
                    to: F(t.to.line + i, t.to.ch),
                    text: [z(t.text)],
                    origin: t.origin,
                }));
            var i = e.lastLine();
            if (
                (((t =
                    t.to.line > i
                        ? {
                              from: t.from,
                              to: F(i, W(e, i).text.length),
                              text: [t.text[0]],
                              origin: t.origin,
                          }
                        : t).removed = pt(e, t.from, t.to)),
                (n = n || bi(e, t)),
                e.cm)
            ) {
                var i = e.cm,
                    o = t,
                    l = r,
                    s = i.doc,
                    a = i.display,
                    u = o.from,
                    c = o.to,
                    h = !1,
                    d = u.line,
                    f =
                        (i.options.lineWrapping ||
                            ((d = H(Jt(W(s, u.line)))),
                            s.iter(d, c.line + 1, function (e) {
                                if (e == a.maxLine) return (h = !0);
                            })),
                        -1 < s.sel.contains(o.from, o.to) && Ke(i),
                        Li(s, o, l, hr(i)),
                        i.options.lineWrapping ||
                            (s.iter(d, u.line + o.text.length, function (e) {
                                var t = on(e);
                                t > a.maxLineLength &&
                                    ((a.maxLine = e),
                                    (a.maxLineLength = t),
                                    (a.maxLineChanged = !0),
                                    (h = !1));
                            }),
                            h && (i.curOp.updateMaxLine = !0)),
                        s),
                    p = u.line;
                if (
                    ((f.modeFrontier = Math.min(f.modeFrontier, p)),
                    !(f.highlightFrontier < p - 10))
                ) {
                    for (var g = f.first, m = p - 1; g < m; m--) {
                        var v = W(f, m).stateAfter;
                        if (v && (!(v instanceof Tt) || m + v.lookAhead < p)) {
                            g = m + 1;
                            break;
                        }
                    }
                    f.highlightFrontier = Math.min(f.highlightFrontier, g);
                }
                qr(i, 400),
                    (l = o.text.length - (c.line - u.line) - 1),
                    o.full
                        ? I(i)
                        : u.line != c.line || 1 != o.text.length || Si(i.doc, o)
                        ? I(i, u.line, c.line + 1, l)
                        : gr(i, u.line, "text"),
                    (d = je(i, "changes")),
                    ((s = je(i, "change")) || d) &&
                        ((l = {
                            from: u,
                            to: c,
                            text: o.text,
                            removed: o.removed,
                            origin: o.origin,
                        }),
                        s && b(i, "change", i, l),
                        d &&
                            (
                                i.curOp.changeObjs || (i.curOp.changeObjs = [])
                            ).push(l)),
                    (i.display.selForContextMenu = null);
            } else Li(e, t, r);
            Ki(e, n, ge),
                e.cantEdit && _i(e, F(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
    }
    function io(e, t, n, r, i) {
        var o;
        P((r = r || n), n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])),
            "string" == typeof t && (t = e.splitLines(t)),
            Ji(e, { from: n, to: r, text: t, origin: i });
    }
    function oo(e, t, n, r) {
        n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
    }
    function lo(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
            var o = e[i],
                l = !0;
            if (o.ranges) {
                o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                for (var s = 0; s < o.ranges.length; s++)
                    oo(o.ranges[s].anchor, t, n, r),
                        oo(o.ranges[s].head, t, n, r);
            } else {
                for (var a = 0; a < o.changes.length; ++a) {
                    var u = o.changes[a];
                    if (n < u.from.line)
                        (u.from = F(u.from.line + r, u.from.ch)),
                            (u.to = F(u.to.line + r, u.to.ch));
                    else if (t <= u.to.line) {
                        l = !1;
                        break;
                    }
                }
                l || (e.splice(0, i + 1), (i = 0));
            }
        }
    }
    function so(e, t) {
        var n = t.from.line,
            r = t.to.line,
            t = t.text.length - (r - n) - 1;
        lo(e.done, n, r, t), lo(e.undone, n, r, t);
    }
    function ao(e, t, n, r) {
        var i = t,
            o = t;
        return (
            "number" == typeof t ? (o = W(e, Lt(e, t))) : (i = H(t)),
            null == i ? null : (r(o, i) && e.cm && gr(e.cm, i, n), o)
        );
    }
    function uo(e) {
        (this.lines = e), (this.parent = null);
        for (var t = 0, n = 0; n < e.length; ++n)
            (e[n].parent = this), (t += e[n].height);
        this.height = t;
    }
    function co(e) {
        this.children = e;
        for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
            var i = e[r];
            (t += i.chunkSize()), (n += i.height), (i.parent = this);
        }
        (this.size = t), (this.height = n), (this.parent = null);
    }
    (G.prototype.from = function () {
        return St(this.anchor, this.head);
    }),
        (G.prototype.to = function () {
            return Ct(this.anchor, this.head);
        }),
        (G.prototype.empty = function () {
            return (
                this.head.line == this.anchor.line &&
                this.head.ch == this.anchor.ch
            );
        }),
        (uo.prototype = {
            chunkSize: function () {
                return this.lines.length;
            },
            removeInner: function (e, t) {
                for (var n, r = e, i = e + t; r < i; ++r) {
                    var o = this.lines[r];
                    (this.height -= o.height),
                        ((n = o).parent = null),
                        Kt(n),
                        b(o, "delete");
                }
                this.lines.splice(e, t);
            },
            collapse: function (e) {
                e.push.apply(e, this.lines);
            },
            insertInner: function (e, t, n) {
                (this.height += n),
                    (this.lines = this.lines
                        .slice(0, e)
                        .concat(t)
                        .concat(this.lines.slice(e)));
                for (var r = 0; r < t.length; ++r) t[r].parent = this;
            },
            iterN: function (e, t, n) {
                for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
            },
        }),
        (co.prototype = {
            chunkSize: function () {
                return this.size;
            },
            removeInner: function (e, t) {
                this.size -= t;
                for (var n, r = 0; r < this.children.length; ++r) {
                    var i = this.children[r],
                        o = i.chunkSize();
                    if (e < o) {
                        var l = Math.min(t, o - e),
                            s = i.height;
                        if (
                            (i.removeInner(e, l),
                            (this.height -= s - i.height),
                            o == l &&
                                (this.children.splice(r--, 1),
                                (i.parent = null)),
                            0 == (t -= l))
                        )
                            break;
                        e = 0;
                    } else e -= o;
                }
                this.size - t < 25 &&
                    (1 < this.children.length ||
                        !(this.children[0] instanceof uo)) &&
                    (this.collapse((n = [])),
                    (this.children = [new uo(n)]),
                    (this.children[0].parent = this));
            },
            collapse: function (e) {
                for (var t = 0; t < this.children.length; ++t)
                    this.children[t].collapse(e);
            },
            insertInner: function (e, t, n) {
                (this.size += t.length), (this.height += n);
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r],
                        o = i.chunkSize();
                    if (e <= o) {
                        if (
                            (i.insertInner(e, t, n),
                            i.lines && 50 < i.lines.length)
                        ) {
                            for (
                                var l = (i.lines.length % 25) + 25, s = l;
                                s < i.lines.length;

                            ) {
                                var a = new uo(i.lines.slice(s, (s += 25)));
                                (i.height -= a.height),
                                    this.children.splice(++r, 0, a),
                                    (a.parent = this);
                            }
                            (i.lines = i.lines.slice(0, l)), this.maybeSpill();
                        }
                        break;
                    }
                    e -= o;
                }
            },
            maybeSpill: function () {
                if (!(this.children.length <= 10)) {
                    var e = this;
                    do {
                        var t,
                            n = new co(
                                e.children.splice(e.children.length - 5, 5)
                            );
                    } while (
                        (e.parent
                            ? ((e.size -= n.size),
                              (e.height -= n.height),
                              (t = L(e.parent.children, e)),
                              e.parent.children.splice(t + 1, 0, n))
                            : ((((t = new co(e.children)).parent = e).children =
                                  [t, n]),
                              (e = t)),
                        (n.parent = e.parent),
                        10 < e.children.length)
                    );
                    e.parent.maybeSpill();
                }
            },
            iterN: function (e, t, n) {
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r],
                        o = i.chunkSize();
                    if (e < o) {
                        var l = Math.min(t, o - e);
                        if (i.iterN(e, l, n)) return !0;
                        if (0 == (t -= l)) break;
                        e = 0;
                    } else e -= o;
                }
            },
        });
    function ho(e, t, n) {
        if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
        (this.doc = e), (this.node = t);
    }
    function fo(e, t, n) {
        rn(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Wr(e, n);
    }
    (ho.prototype.clear = function () {
        var e = this.doc.cm,
            t = this.line.widgets,
            n = this.line,
            r = H(n);
        if (null != r && t) {
            for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
            t.length || (n.widgets = null);
            var o = Mn(this);
            mt(n, Math.max(0, n.height - o)),
                e &&
                    (h(e, function () {
                        fo(e, n, -o), gr(e, r, "widget");
                    }),
                    b(e, "lineWidgetCleared", e, this, r));
        }
    }),
        (ho.prototype.changed = function () {
            var e = this,
                t = this.height,
                n = this.doc.cm,
                r = this.line,
                i = ((this.height = null), Mn(this) - t);
            i &&
                (nn(this.doc, r) || mt(r, r.height + i),
                n &&
                    h(n, function () {
                        (n.curOp.forceUpdate = !0),
                            fo(n, r, i),
                            b(n, "lineWidgetChanged", n, e, H(r));
                    }));
        }),
        Xe(ho);
    function po(e, t) {
        (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++go);
    }
    var go = 0;
    function mo(r, i, o, e, t) {
        if (e && e.shared)
            return (
                (f = r),
                (n = i),
                (l = o),
                (a = t),
                ((s = he((s = e))).shared = !1),
                (u = [mo(f, n, l, s, a)]),
                (c = u[0]),
                (h = s.widgetNode),
                ki(f, function (e) {
                    h && (s.widgetNode = h.cloneNode(!0)),
                        u.push(mo(e, E(e, n), E(e, l), s, a));
                    for (var t = 0; t < e.linked.length; ++t)
                        if (e.linked[t].isParent) return;
                    c = z(u);
                }),
                new vo(u, c)
            );
        var n, l, s, a, u, c, h;
        if (r.cm && !r.cm.curOp) return R(r.cm, mo)(r, i, o, e, t);
        var d = new po(r, t),
            f = P(i, o);
        if ((e && he(e, d, !1), 0 < f || (0 == f && !1 !== d.clearWhenEmpty)))
            return d;
        if (
            (d.replacedWith &&
                ((d.collapsed = !0),
                (d.widgetNode = ne(
                    "span",
                    [d.replacedWith],
                    "CodeMirror-widget"
                )),
                e.handleMouseEvents ||
                    d.widgetNode.setAttribute("cm-ignore-events", "true"),
                e.insertLeft && (d.widgetNode.insertLeft = !0)),
            d.collapsed)
        ) {
            if (
                Qt(r, i.line, i, o, d) ||
                (i.line != o.line && Qt(r, o.line, i, o, d))
            )
                throw new Error(
                    "Inserting collapsed marker partially overlapping an existing one"
                );
            Rt = !0;
        }
        d.addToHistory &&
            Di(r, { from: i, to: o, origin: "markText" }, r.sel, NaN);
        var p,
            g = i.line,
            m = r.cm;
        if (
            (r.iter(g, o.line + 1, function (e) {
                var t, n;
                m &&
                    d.collapsed &&
                    !m.options.lineWrapping &&
                    Jt(e) == m.display.maxLine &&
                    (p = !0),
                    d.collapsed && g != i.line && mt(e, 0),
                    (e = e),
                    (t = new Bt(
                        d,
                        g == i.line ? i.ch : null,
                        g == o.line ? o.ch : null
                    )),
                    (n =
                        (n = r.cm && r.cm.curOp) &&
                        window.WeakSet &&
                        (n.markedSpans || (n.markedSpans = new WeakSet()))) &&
                    e.markedSpans &&
                    n.has(e.markedSpans)
                        ? e.markedSpans.push(t)
                        : ((e.markedSpans = e.markedSpans
                              ? e.markedSpans.concat([t])
                              : [t]),
                          n && n.add(e.markedSpans)),
                    t.marker.attachLine(e),
                    ++g;
            }),
            d.collapsed &&
                r.iter(i.line, o.line + 1, function (e) {
                    nn(r, e) && mt(e, 0);
                }),
            d.clearOnEnter &&
                k(d, "beforeCursorEnter", function () {
                    return d.clear();
                }),
            d.readOnly &&
                ((zt = !0),
                (r.history.done.length || r.history.undone.length) &&
                    r.clearHistory()),
            d.collapsed && ((d.id = ++go), (d.atomic = !0)),
            m)
        ) {
            if ((p && (m.curOp.updateMaxLine = !0), d.collapsed))
                I(m, i.line, o.line + 1);
            else if (
                d.className ||
                d.startStyle ||
                d.endStyle ||
                d.css ||
                d.attributes ||
                d.title
            )
                for (var v = i.line; v <= o.line; v++) gr(m, v, "text");
            d.atomic && Xi(m.doc), b(m, "markerAdded", m, d);
        }
        return d;
    }
    (po.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            for (
                var e,
                    t = this.doc.cm,
                    n = t && !t.curOp,
                    r =
                        (n && $r(t),
                        !je(this, "clear") ||
                            ((e = this.find()) &&
                                b(this, "clear", e.from, e.to)),
                        null),
                    i = null,
                    o = 0;
                o < this.lines.length;
                ++o
            ) {
                var l = this.lines[o],
                    s = Gt(l.markedSpans, this);
                t && !this.collapsed
                    ? gr(t, H(l), "text")
                    : t &&
                      (null != s.to && (i = H(l)),
                      null != s.from && (r = H(l))),
                    (l.markedSpans = (function (e, t) {
                        for (var n, r = 0; r < e.length; ++r)
                            e[r] != t && (n = n || []).push(e[r]);
                        return n;
                    })(l.markedSpans, s)),
                    null == s.from &&
                        this.collapsed &&
                        !nn(this.doc, l) &&
                        t &&
                        mt(l, sr(t.display));
            }
            if (t && this.collapsed && !t.options.lineWrapping)
                for (var a = 0; a < this.lines.length; ++a) {
                    var u = Jt(this.lines[a]),
                        c = on(u);
                    c > t.display.maxLineLength &&
                        ((t.display.maxLine = u),
                        (t.display.maxLineLength = c),
                        (t.display.maxLineChanged = !0));
                }
            null != r && t && this.collapsed && I(t, r, i + 1),
                (this.lines.length = 0),
                (this.explicitlyCleared = !0),
                this.atomic &&
                    this.doc.cantEdit &&
                    ((this.doc.cantEdit = !1), t && Xi(t.doc)),
                t && b(t, "markerCleared", t, this, r, i),
                n && _r(t),
                this.parent && this.parent.clear();
        }
    }),
        (po.prototype.find = function (e, t) {
            var n, r;
            null == e && "bookmark" == this.type && (e = 1);
            for (var i = 0; i < this.lines.length; ++i) {
                var o = this.lines[i],
                    l = Gt(o.markedSpans, this);
                if (null != l.from && ((n = F(t ? o : H(o), l.from)), -1 == e))
                    return n;
                if (null != l.to && ((r = F(t ? o : H(o), l.to)), 1 == e))
                    return r;
            }
            return n && { from: n, to: r };
        }),
        (po.prototype.changed = function () {
            var n = this,
                r = this.find(-1, !0),
                i = this,
                o = this.doc.cm;
            r &&
                o &&
                h(o, function () {
                    var e = r.line,
                        t = H(r.line),
                        t = In(o, t);
                    t &&
                        (Vn(t),
                        (o.curOp.selectionChanged = o.curOp.forceUpdate = !0)),
                        (o.curOp.updateMaxLine = !0),
                        nn(i.doc, e) ||
                            null == i.height ||
                            ((t = i.height),
                            (i.height = null),
                            (t = Mn(i) - t) && mt(e, e.height + t)),
                        b(o, "markerChanged", o, n);
                });
        }),
        (po.prototype.attachLine = function (e) {
            var t;
            this.lines.length ||
                !this.doc.cm ||
                ((t = this.doc.cm.curOp).maybeHiddenMarkers &&
                    -1 != L(t.maybeHiddenMarkers, this)) ||
                (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
                    this
                ),
                this.lines.push(e);
        }),
        (po.prototype.detachLine = function (e) {
            this.lines.splice(L(this.lines, e), 1),
                !this.lines.length &&
                    this.doc.cm &&
                    (
                        (e = this.doc.cm.curOp).maybeHiddenMarkers ||
                        (e.maybeHiddenMarkers = [])
                    ).push(this);
        }),
        Xe(po);
    var vo = function (e, t) {
        (this.markers = e), (this.primary = t);
        for (var n = 0; n < e.length; ++n) e[n].parent = this;
    };
    function yo(e) {
        return e.findMarks(
            F(e.first, 0),
            e.clipPos(F(e.lastLine())),
            function (e) {
                return e.parent;
            }
        );
    }
    function bo(o) {
        for (var e = 0; e < o.length; e++)
            !(function (e) {
                var t = o[e],
                    n = [t.primary.doc];
                ki(t.primary.doc, function (e) {
                    return n.push(e);
                });
                for (var r = 0; r < t.markers.length; r++) {
                    var i = t.markers[r];
                    -1 == L(n, i.doc) &&
                        ((i.parent = null), t.markers.splice(r--, 1));
                }
            })(e);
    }
    (vo.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e)
                this.markers[e].clear();
            b(this, "clear");
        }
    }),
        (vo.prototype.find = function (e, t) {
            return this.primary.find(e, t);
        }),
        Xe(vo);
    function f(e, t, n, r, i) {
        if (!(this instanceof f)) return new f(e, t, n, r, i);
        null == n && (n = 0),
            co.call(this, [new uo([new sn("", null)])]),
            (this.first = n),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (n = F((this.modeFrontier = this.highlightFrontier = n), 0)),
            (this.sel = mi(n)),
            (this.history = new Ni(null)),
            (this.id = ++wo),
            (this.modeOption = t),
            (this.lineSep = r),
            (this.direction = "rtl" == i ? "rtl" : "ltr"),
            (this.extend = !1),
            "string" == typeof e && (e = this.splitLines(e)),
            Li(this, { from: n, to: n, text: e }),
            U(this, mi(n), ge);
    }
    var wo = 0,
        xo =
            (((f.prototype = Se(co.prototype, {
                constructor: f,
                iter: function (e, t, n) {
                    n
                        ? this.iterN(e - this.first, t - e, n)
                        : this.iterN(this.first, this.first + this.size, e);
                },
                insert: function (e, t) {
                    for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
                    this.insertInner(e - this.first, t, n);
                },
                remove: function (e, t) {
                    this.removeInner(e - this.first, t);
                },
                getValue: function (e) {
                    var t = gt(this, this.first, this.first + this.size);
                    return !1 === e ? t : t.join(e || this.lineSeparator());
                },
                setValue: n(function (e) {
                    var t = F(this.first, 0),
                        n = this.first + this.size - 1;
                    Ji(
                        this,
                        {
                            from: t,
                            to: F(n, W(this, n).text.length),
                            text: this.splitLines(e),
                            origin: "setValue",
                            full: !0,
                        },
                        !0
                    ),
                        this.cm && Fr(this.cm, 0, 0),
                        U(this, mi(t), ge);
                }),
                replaceRange: function (e, t, n, r) {
                    io(this, e, (t = E(this, t)), (n = n ? E(this, n) : t), r);
                },
                getRange: function (e, t, n) {
                    e = pt(this, E(this, e), E(this, t));
                    return !1 === n
                        ? e
                        : "" === n
                        ? e.join("")
                        : e.join(n || this.lineSeparator());
                },
                getLine: function (e) {
                    e = this.getLineHandle(e);
                    return e && e.text;
                },
                getLineHandle: function (e) {
                    if (yt(this, e)) return W(this, e);
                },
                getLineNumber: H,
                getLineHandleVisualStart: function (e) {
                    return Jt((e = "number" == typeof e ? W(this, e) : e));
                },
                lineCount: function () {
                    return this.size;
                },
                firstLine: function () {
                    return this.first;
                },
                lastLine: function () {
                    return this.first + this.size - 1;
                },
                clipPos: function (e) {
                    return E(this, e);
                },
                getCursor: function (e) {
                    var t = this.sel.primary(),
                        e =
                            null == e || "head" == e
                                ? t.head
                                : "anchor" == e
                                ? t.anchor
                                : "end" == e || "to" == e || !1 === e
                                ? t.to()
                                : t.from();
                    return e;
                },
                listSelections: function () {
                    return this.sel.ranges;
                },
                somethingSelected: function () {
                    return this.sel.somethingSelected();
                },
                setCursor: n(function (e, t, n) {
                    Ui(
                        this,
                        E(this, "number" == typeof e ? F(e, t || 0) : e),
                        null,
                        n
                    );
                }),
                setSelection: n(function (e, t, n) {
                    Ui(this, E(this, e), E(this, t || e), n);
                }),
                extendSelection: n(function (e, t, n) {
                    Ri(this, E(this, e), t && E(this, t), n);
                }),
                extendSelections: n(function (e, t) {
                    Bi(this, kt(this, e), t);
                }),
                extendSelectionsBy: n(function (e, t) {
                    Bi(this, kt(this, xe(this.sel.ranges, e)), t);
                }),
                setSelections: n(function (e, t, n) {
                    if (e.length) {
                        for (var r = [], i = 0; i < e.length; i++)
                            r[i] = new G(
                                E(this, e[i].anchor),
                                E(this, e[i].head || e[i].anchor)
                            );
                        null == t &&
                            (t = Math.min(e.length - 1, this.sel.primIndex)),
                            U(this, gi(this.cm, r, t), n);
                    }
                }),
                addSelection: n(function (e, t, n) {
                    var r = this.sel.ranges.slice(0);
                    r.push(new G(E(this, e), E(this, t || e))),
                        U(this, gi(this.cm, r, r.length - 1), n);
                }),
                getSelection: function (e) {
                    for (var t = this.sel.ranges, n = 0; n < t.length; n++)
                        var r = pt(this, t[n].from(), t[n].to()),
                            i = i ? i.concat(r) : r;
                    return !1 === e ? i : i.join(e || this.lineSeparator());
                },
                getSelections: function (e) {
                    for (
                        var t = [], n = this.sel.ranges, r = 0;
                        r < n.length;
                        r++
                    ) {
                        var i = pt(this, n[r].from(), n[r].to());
                        !1 !== e && (i = i.join(e || this.lineSeparator())),
                            (t[r] = i);
                    }
                    return t;
                },
                replaceSelection: function (e, t, n) {
                    for (var r = [], i = 0; i < this.sel.ranges.length; i++)
                        r[i] = e;
                    this.replaceSelections(r, t, n || "+input");
                },
                replaceSelections: n(function (e, t, n) {
                    for (
                        var r = [], i = this.sel, o = 0;
                        o < i.ranges.length;
                        o++
                    ) {
                        var l = i.ranges[o];
                        r[o] = {
                            from: l.from(),
                            to: l.to(),
                            text: this.splitLines(e[o]),
                            origin: n,
                        };
                    }
                    for (
                        var t =
                                t &&
                                "end" != t &&
                                (function (e, t, n) {
                                    for (
                                        var r = [],
                                            i = (u = F(e.first, 0)),
                                            o = 0;
                                        o < t.length;
                                        o++
                                    ) {
                                        var l = t[o],
                                            s = wi(l.from, u, i),
                                            a = wi(vi(l), u, i),
                                            u = l.to,
                                            i = a;
                                        "around" == n
                                            ? ((l =
                                                  P(
                                                      (l = e.sel.ranges[o])
                                                          .head,
                                                      l.anchor
                                                  ) < 0),
                                              (r[o] = new G(
                                                  l ? a : s,
                                                  l ? s : a
                                              )))
                                            : (r[o] = new G(s, s));
                                    }
                                    return new B(r, e.sel.primIndex);
                                })(this, r, t),
                            s = r.length - 1;
                        0 <= s;
                        s--
                    )
                        Ji(this, r[s]);
                    t ? Vi(this, t) : this.cm && Hr(this.cm);
                }),
                undo: n(function () {
                    to(this, "undo");
                }),
                redo: n(function () {
                    to(this, "redo");
                }),
                undoSelection: n(function () {
                    to(this, "undo", !0);
                }),
                redoSelection: n(function () {
                    to(this, "redo", !0);
                }),
                setExtending: function (e) {
                    this.extend = e;
                },
                getExtending: function () {
                    return this.extend;
                },
                historySize: function () {
                    for (
                        var e = this.history, t = 0, n = 0, r = 0;
                        r < e.done.length;
                        r++
                    )
                        e.done[r].ranges || ++t;
                    for (var i = 0; i < e.undone.length; i++)
                        e.undone[i].ranges || ++n;
                    return { undo: t, redo: n };
                },
                clearHistory: function () {
                    var t = this;
                    (this.history = new Ni(this.history)),
                        ki(
                            this,
                            function (e) {
                                return (e.history = t.history);
                            },
                            !0
                        );
                },
                markClean: function () {
                    this.cleanGeneration = this.changeGeneration(!0);
                },
                changeGeneration: function (e) {
                    return (
                        e &&
                            (this.history.lastOp =
                                this.history.lastSelOp =
                                this.history.lastOrigin =
                                    null),
                        this.history.generation
                    );
                },
                isClean: function (e) {
                    return (
                        this.history.generation == (e || this.cleanGeneration)
                    );
                },
                getHistory: function () {
                    return {
                        done: Ii(this.history.done),
                        undone: Ii(this.history.undone),
                    };
                },
                setHistory: function (e) {
                    var t = (this.history = new Ni(this.history));
                    (t.done = Ii(e.done.slice(0), null, !0)),
                        (t.undone = Ii(e.undone.slice(0), null, !0));
                },
                setGutterMarker: n(function (e, n, r) {
                    return ao(this, e, "gutter", function (e) {
                        var t = e.gutterMarkers || (e.gutterMarkers = {});
                        return (
                            !(t[n] = r) && Me(t) && (e.gutterMarkers = null), 1
                        );
                    });
                }),
                clearGutter: n(function (t) {
                    var n = this;
                    this.iter(function (e) {
                        e.gutterMarkers &&
                            e.gutterMarkers[t] &&
                            ao(n, e, "gutter", function () {
                                return (
                                    (e.gutterMarkers[t] = null),
                                    Me(e.gutterMarkers) &&
                                        (e.gutterMarkers = null),
                                    1
                                );
                            });
                    });
                }),
                lineInfo: function (e) {
                    var t;
                    if ("number" == typeof e) {
                        if (!yt(this, e)) return null;
                        if (!(e = W(this, (t = e)))) return null;
                    } else if (null == (t = H(e))) return null;
                    return {
                        line: t,
                        handle: e,
                        text: e.text,
                        gutterMarkers: e.gutterMarkers,
                        textClass: e.textClass,
                        bgClass: e.bgClass,
                        wrapClass: e.wrapClass,
                        widgets: e.widgets,
                    };
                },
                addLineClass: n(function (e, n, r) {
                    return ao(
                        this,
                        e,
                        "gutter" == n ? "gutter" : "class",
                        function (e) {
                            var t =
                                "text" == n
                                    ? "textClass"
                                    : "background" == n
                                    ? "bgClass"
                                    : "gutter" == n
                                    ? "gutterClass"
                                    : "wrapClass";
                            if (e[t]) {
                                if (J(r).test(e[t])) return;
                                e[t] += " " + r;
                            } else e[t] = r;
                            return 1;
                        }
                    );
                }),
                removeLineClass: n(function (e, o, l) {
                    return ao(
                        this,
                        e,
                        "gutter" == o ? "gutter" : "class",
                        function (e) {
                            var t =
                                    "text" == o
                                        ? "textClass"
                                        : "background" == o
                                        ? "bgClass"
                                        : "gutter" == o
                                        ? "gutterClass"
                                        : "wrapClass",
                                n = e[t];
                            if (n) {
                                if (null == l) e[t] = null;
                                else {
                                    var r = n.match(J(l));
                                    if (!r) return;
                                    var i = r.index + r[0].length;
                                    e[t] =
                                        n.slice(0, r.index) +
                                            (r.index && i != n.length
                                                ? " "
                                                : "") +
                                            n.slice(i) || null;
                                }
                                return 1;
                            }
                        }
                    );
                }),
                addLineWidget: n(function (e, t, n) {
                    return (
                        (e = e),
                        (i = new ho((r = this), t, n)),
                        (o = r.cm) &&
                            i.noHScroll &&
                            (o.display.alignWidgets = !0),
                        ao(r, e, "widget", function (e) {
                            var t = e.widgets || (e.widgets = []);
                            return (
                                null == i.insertAt
                                    ? t.push(i)
                                    : t.splice(
                                          Math.min(
                                              t.length,
                                              Math.max(0, i.insertAt)
                                          ),
                                          0,
                                          i
                                      ),
                                (i.line = e),
                                o &&
                                    !nn(r, e) &&
                                    ((t = rn(e) < r.scrollTop),
                                    mt(e, e.height + Mn(i)),
                                    t && Wr(o, i.height),
                                    (o.curOp.forceUpdate = !0)),
                                1
                            );
                        }),
                        o &&
                            b(
                                o,
                                "lineWidgetAdded",
                                o,
                                i,
                                "number" == typeof e ? e : H(e)
                            ),
                        i
                    );
                    var r, i, o;
                }),
                removeLineWidget: function (e) {
                    e.clear();
                },
                markText: function (e, t, n) {
                    return mo(
                        this,
                        E(this, e),
                        E(this, t),
                        n,
                        (n && n.type) || "range"
                    );
                },
                setBookmark: function (e, t) {
                    t = {
                        replacedWith: t && (null == t.nodeType ? t.widget : t),
                        insertLeft: t && t.insertLeft,
                        clearWhenEmpty: !1,
                        shared: t && t.shared,
                        handleMouseEvents: t && t.handleMouseEvents,
                    };
                    return mo(this, (e = E(this, e)), e, t, "bookmark");
                },
                findMarksAt: function (e) {
                    var t = [],
                        n = W(this, (e = E(this, e)).line).markedSpans;
                    if (n)
                        for (var r = 0; r < n.length; ++r) {
                            var i = n[r];
                            (null == i.from || i.from <= e.ch) &&
                                (null == i.to || i.to >= e.ch) &&
                                t.push(i.marker.parent || i.marker);
                        }
                    return t;
                },
                findMarks: function (i, o, l) {
                    (i = E(this, i)), (o = E(this, o));
                    var s = [],
                        a = i.line;
                    return (
                        this.iter(i.line, o.line + 1, function (e) {
                            var t = e.markedSpans;
                            if (t)
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (null != r.to &&
                                        a == i.line &&
                                        i.ch >= r.to) ||
                                        (null == r.from && a != i.line) ||
                                        (null != r.from &&
                                            a == o.line &&
                                            r.from >= o.ch) ||
                                        (l && !l(r.marker)) ||
                                        s.push(r.marker.parent || r.marker);
                                }
                            ++a;
                        }),
                        s
                    );
                },
                getAllMarks: function () {
                    var r = [];
                    return (
                        this.iter(function (e) {
                            var t = e.markedSpans;
                            if (t)
                                for (var n = 0; n < t.length; ++n)
                                    null != t[n].from && r.push(t[n].marker);
                        }),
                        r
                    );
                },
                posFromIndex: function (t) {
                    var n,
                        r = this.first,
                        i = this.lineSeparator().length;
                    return (
                        this.iter(function (e) {
                            e = e.text.length + i;
                            if (t < e) return (n = t), !0;
                            (t -= e), ++r;
                        }),
                        E(this, F(r, n))
                    );
                },
                indexFromPos: function (e) {
                    var t = (e = E(this, e)).ch;
                    if (e.line < this.first || e.ch < 0) return 0;
                    var n = this.lineSeparator().length;
                    return (
                        this.iter(this.first, e.line, function (e) {
                            t += e.text.length + n;
                        }),
                        t
                    );
                },
                copy: function (e) {
                    var t = new f(
                        gt(this, this.first, this.first + this.size),
                        this.modeOption,
                        this.first,
                        this.lineSep,
                        this.direction
                    );
                    return (
                        (t.scrollTop = this.scrollTop),
                        (t.scrollLeft = this.scrollLeft),
                        (t.sel = this.sel),
                        (t.extend = !1),
                        e &&
                            ((t.history.undoDepth = this.history.undoDepth),
                            t.setHistory(this.getHistory())),
                        t
                    );
                },
                linkedDoc: function (e) {
                    for (
                        var t = this.first,
                            n = this.first + this.size,
                            n =
                                (null != (e = e || {}).from &&
                                    e.from > t &&
                                    (t = e.from),
                                null != e.to && e.to < n && (n = e.to),
                                new f(
                                    gt(this, t, n),
                                    e.mode || this.modeOption,
                                    t,
                                    this.lineSep,
                                    this.direction
                                )),
                            r =
                                (e.sharedHist && (n.history = this.history),
                                (this.linked || (this.linked = [])).push({
                                    doc: n,
                                    sharedHist: e.sharedHist,
                                }),
                                (n.linked = [
                                    {
                                        doc: this,
                                        isParent: !0,
                                        sharedHist: e.sharedHist,
                                    },
                                ]),
                                n),
                            i = yo(this),
                            o = 0;
                        o < i.length;
                        o++
                    ) {
                        var l = i[o],
                            s = l.find(),
                            a = r.clipPos(s.from),
                            s = r.clipPos(s.to);
                        P(a, s) &&
                            ((a = mo(r, a, s, l.primary, l.primary.type)),
                            l.markers.push(a),
                            (a.parent = l));
                    }
                    return n;
                },
                unlinkDoc: function (e) {
                    if ((e instanceof p && (e = e.doc), this.linked))
                        for (var t = 0; t < this.linked.length; ++t) {
                            var n = this.linked[t];
                            if (n.doc == e) {
                                this.linked.splice(t, 1),
                                    e.unlinkDoc(this),
                                    bo(yo(this));
                                break;
                            }
                        }
                    var r;
                    e.history == this.history &&
                        ((r = [e.id]),
                        ki(
                            e,
                            function (e) {
                                return r.push(e.id);
                            },
                            !0
                        ),
                        (e.history = new Ni(null)),
                        (e.history.done = Ii(this.history.done, r)),
                        (e.history.undone = Ii(this.history.undone, r)));
                },
                iterLinkedDocs: function (e) {
                    ki(this, e);
                },
                getMode: function () {
                    return this.mode;
                },
                getEditor: function () {
                    return this.cm;
                },
                splitLines: function (e) {
                    return this.lineSep ? e.split(this.lineSep) : tt(e);
                },
                lineSeparator: function () {
                    return this.lineSep || "\n";
                },
                setDirection: n(function (e) {
                    var t;
                    (e = "rtl" != e ? "ltr" : e) != this.direction &&
                        ((this.direction = e),
                        this.iter(function (e) {
                            return (e.order = null);
                        }),
                        this.cm &&
                            h((t = this.cm), function () {
                                Mi(t), I(t);
                            }));
                }),
            })).eachLine = f.prototype.iter),
            0);
    function Co(e) {
        var r = this;
        if ((So(r), !A(r, e) && !Nn(r.display, e))) {
            D(e), w && (xo = +new Date());
            var t = fr(r, e, !0),
                n = e.dataTransfer.files;
            if (t && !r.isReadOnly())
                if (n && n.length && window.FileReader && window.File)
                    for (
                        var i = n.length,
                            o = Array(i),
                            l = 0,
                            s = function () {
                                ++l == i &&
                                    R(r, function () {
                                        var e = {
                                            from: (t = E(r.doc, t)),
                                            to: t,
                                            text: r.doc.splitLines(
                                                o
                                                    .filter(function (e) {
                                                        return null != e;
                                                    })
                                                    .join(r.doc.lineSeparator())
                                            ),
                                            origin: "paste",
                                        };
                                        Ji(r.doc, e),
                                            Vi(
                                                r.doc,
                                                mi(E(r.doc, t), E(r.doc, vi(e)))
                                            );
                                    })();
                            },
                            a = 0;
                        a < n.length;
                        a++
                    )
                        !(function (e, t) {
                            var n;
                            r.options.allowDropFileTypes &&
                            -1 == L(r.options.allowDropFileTypes, e.type)
                                ? s()
                                : (((n = new FileReader()).onerror =
                                      function () {
                                          return s();
                                      }),
                                  (n.onload = function () {
                                      var e = n.result;
                                      /[\x00-\x08\x0e-\x1f]{2}/.test(e) ||
                                          (o[t] = e),
                                          s();
                                  }),
                                  n.readAsText(e));
                        })(n[a], a);
                else {
                    if (r.state.draggingText && -1 < r.doc.sel.contains(t))
                        return (
                            r.state.draggingText(e),
                            void setTimeout(function () {
                                return r.display.input.focus();
                            }, 20)
                        );
                    try {
                        var u,
                            c = e.dataTransfer.getData("Text");
                        if (c) {
                            if (
                                (r.state.draggingText &&
                                    !r.state.draggingText.copy &&
                                    (u = r.listSelections()),
                                Ki(r.doc, mi(t, t)),
                                u)
                            )
                                for (var h = 0; h < u.length; ++h)
                                    io(
                                        r.doc,
                                        "",
                                        u[h].anchor,
                                        u[h].head,
                                        "drag"
                                    );
                            r.replaceSelection(c, "around", "paste"),
                                r.display.input.focus();
                        }
                    } catch (e) {}
                }
        }
    }
    function So(e) {
        e.display.dragCursor &&
            (e.display.lineSpace.removeChild(e.display.dragCursor),
            (e.display.dragCursor = null));
    }
    function Lo(t) {
        if (document.getElementsByClassName) {
            for (
                var e = document.getElementsByClassName("CodeMirror"),
                    n = [],
                    r = 0;
                r < e.length;
                r++
            ) {
                var i = e[r].CodeMirror;
                i && n.push(i);
            }
            n.length &&
                n[0].operation(function () {
                    for (var e = 0; e < n.length; e++) t(n[e]);
                });
        }
    }
    var ko = !1;
    function To() {
        var e;
        ko ||
            (k(window, "resize", function () {
                null == e &&
                    (e = setTimeout(function () {
                        (e = null), Lo(Mo);
                    }, 100));
            }),
            k(window, "blur", function () {
                return Lo(Mr);
            }),
            (ko = !0));
    }
    function Mo(e) {
        var t = e.display;
        (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
            (t.scrollbarsClipped = !1),
            e.setSize();
    }
    for (
        var No = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                224: "Mod",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert",
            },
            Oo = 0;
        Oo < 10;
        Oo++
    )
        No[Oo + 48] = No[Oo + 96] = String(Oo);
    for (var Ao = 65; Ao <= 90; Ao++) No[Ao] = String.fromCharCode(Ao);
    for (var Do = 1; Do <= 12; Do++) No[Do + 111] = No[Do + 63235] = "F" + Do;
    var Wo = {};
    function Ho(e) {
        var t,
            n,
            r,
            i,
            o = e.split(/-(?!$)/);
        e = o[o.length - 1];
        for (var l = 0; l < o.length - 1; l++) {
            var s = o[l];
            if (/^(cmd|meta|m)$/i.test(s)) i = !0;
            else if (/^a(lt)?$/i.test(s)) t = !0;
            else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
            else {
                if (!/^s(hift)?$/i.test(s))
                    throw new Error("Unrecognized modifier name: " + s);
                r = !0;
            }
        }
        return (
            t && (e = "Alt-" + e),
            n && (e = "Ctrl-" + e),
            i && (e = "Cmd-" + e),
            (e = r ? "Shift-" + e : e)
        );
    }
    function Fo(e) {
        var t,
            n,
            r = {};
        for (t in e)
            if (e.hasOwnProperty(t)) {
                var i = e[t];
                if (!/^(name|fallthrough|(de|at)tach)$/.test(t))
                    if ("..." == i) delete e[t];
                    else {
                        for (
                            var o = xe(t.split(" "), Ho), l = 0;
                            l < o.length;
                            l++
                        ) {
                            var s = void 0,
                                a = void 0,
                                s =
                                    l == o.length - 1
                                        ? ((a = o.join(" ")), i)
                                        : ((a = o.slice(0, l + 1).join(" ")),
                                          "..."),
                                u = r[a];
                            if (u) {
                                if (u != s)
                                    throw new Error(
                                        "Inconsistent bindings for " + a
                                    );
                            } else r[a] = s;
                        }
                        delete e[t];
                    }
            }
        for (n in r) e[n] = r[n];
        return e;
    }
    function Po(e, t, n, r) {
        var i = (t = Ro(t)).call ? t.call(e, r) : t[e];
        if (!1 === i) return "nothing";
        if ("..." === i) return "multi";
        if (null != i && n(i)) return "handled";
        if (t.fallthrough) {
            if (
                "[object Array]" !=
                Object.prototype.toString.call(t.fallthrough)
            )
                return Po(e, t.fallthrough, n, r);
            for (var o = 0; o < t.fallthrough.length; o++) {
                var l = Po(e, t.fallthrough[o], n, r);
                if (l) return l;
            }
        }
    }
    function Eo(e) {
        e = "string" == typeof e ? e : No[e.keyCode];
        return "Ctrl" == e || "Alt" == e || "Shift" == e || "Mod" == e;
    }
    function Io(e, t, n) {
        var r = e;
        return (
            t.altKey && "Alt" != r && (e = "Alt-" + e),
            (Z ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e),
            (Z ? t.ctrlKey : t.metaKey) && "Mod" != r && (e = "Cmd-" + e),
            (e = !n && t.shiftKey && "Shift" != r ? "Shift-" + e : e)
        );
    }
    function zo(e, t) {
        if (K && 34 == e.keyCode && e.char) return !1;
        var n = No[e.keyCode];
        return (
            null != n &&
            !e.altGraphKey &&
            Io((n = 3 == e.keyCode && e.code ? e.code : n), e, t)
        );
    }
    function Ro(e) {
        return "string" == typeof e ? Wo[e] : e;
    }
    function Bo(t, e) {
        for (var n = t.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
            for (var o = e(n[i]); r.length && P(o.from, z(r).to) <= 0; ) {
                var l = r.pop();
                if (P(l.from, o.from) < 0) {
                    o.from = l.from;
                    break;
                }
            }
            r.push(o);
        }
        h(t, function () {
            for (var e = r.length - 1; 0 <= e; e--)
                io(t.doc, "", r[e].from, r[e].to, "+delete");
            Hr(t);
        });
    }
    function Go(e, t, n) {
        t = Ae(e.text, t + n, n);
        return t < 0 || t > e.text.length ? null : t;
    }
    function Uo(e, t, n) {
        e = Go(e, t.ch, n);
        return null == e ? null : new F(t.line, e, n < 0 ? "after" : "before");
    }
    function Vo(e, t, n, r, i) {
        if (e) {
            "rtl" == t.doc.direction && (i = -i);
            var o,
                l,
                s,
                a,
                e = Ge(n, t.doc.direction);
            if (e)
                return (
                    (o =
                        i < 0 == (1 == (e = i < 0 ? z(e) : e[0]).level)
                            ? "after"
                            : "before"),
                    0 < e.level || "rtl" == t.doc.direction
                        ? ((l = zn(t, n)),
                          (s = i < 0 ? n.text.length - 1 : 0),
                          (a = Rn(t, l, s).top),
                          (s = De(
                              function (e) {
                                  return Rn(t, l, e).top == a;
                              },
                              i < 0 == (1 == e.level) ? e.from : e.to - 1,
                              s
                          )),
                          "before" == o && (s = Go(n, s, 1)))
                        : (s = i < 0 ? e.to : e.from),
                    new F(r, s, o)
                );
        }
        return new F(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
    }
    function Ko(t, n, s, e) {
        var a = Ge(n, t.doc.direction);
        if (!a) return Uo(n, s, e);
        s.ch >= n.text.length
            ? ((s.ch = n.text.length), (s.sticky = "before"))
            : s.ch <= 0 && ((s.ch = 0), (s.sticky = "after"));
        var r = He(a, s.ch, s.sticky),
            i = a[r];
        if (
            "ltr" == t.doc.direction &&
            i.level % 2 == 0 &&
            (0 < e ? i.to > s.ch : i.from < s.ch)
        )
            return Uo(n, s, e);
        function u(e, t) {
            return Go(n, e instanceof F ? e.ch : e, t);
        }
        function o(e) {
            return t.options.lineWrapping
                ? ((l = l || zn(t, n)), rr(t, n, l, e))
                : { begin: 0, end: n.text.length };
        }
        var l,
            c = o("before" == s.sticky ? u(s, -1) : s.ch);
        if ("rtl" == t.doc.direction || 1 == i.level) {
            var h = (1 == i.level) == e < 0,
                d = u(s, h ? 1 : -1);
            if (
                null != d &&
                (h ? d <= i.to && d <= c.end : d >= i.from && d >= c.begin)
            )
                return new F(s.line, d, h ? "before" : "after");
        }
        function f(e, t, n) {
            for (
                var r = function (e, t) {
                    return t
                        ? new F(s.line, u(e, 1), "before")
                        : new F(s.line, e, "after");
                };
                0 <= e && e < a.length;
                e += t
            ) {
                var i = a[e],
                    o = 0 < t == (1 != i.level),
                    l = o ? n.begin : u(n.end, -1);
                if (i.from <= l && l < i.to) return r(l, o);
                if (((l = o ? i.from : u(i.to, -1)), n.begin <= l && l < n.end))
                    return r(l, o);
            }
        }
        i = f(r + e, e, c);
        if (i) return i;
        d = 0 < e ? c.end : u(c.begin, -1);
        return null == d ||
            (0 < e && d == n.text.length) ||
            !(i = f(0 < e ? 0 : a.length - 1, e, o(d)))
            ? null
            : i;
    }
    (Wo.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection",
    }),
        (Wo.pcDefault = {
            "Ctrl-A": "selectAll",
            "Ctrl-D": "deleteLine",
            "Ctrl-Z": "undo",
            "Shift-Ctrl-Z": "redo",
            "Ctrl-Y": "redo",
            "Ctrl-Home": "goDocStart",
            "Ctrl-End": "goDocEnd",
            "Ctrl-Up": "goLineUp",
            "Ctrl-Down": "goLineDown",
            "Ctrl-Left": "goGroupLeft",
            "Ctrl-Right": "goGroupRight",
            "Alt-Left": "goLineStart",
            "Alt-Right": "goLineEnd",
            "Ctrl-Backspace": "delGroupBefore",
            "Ctrl-Delete": "delGroupAfter",
            "Ctrl-S": "save",
            "Ctrl-F": "find",
            "Ctrl-G": "findNext",
            "Shift-Ctrl-G": "findPrev",
            "Shift-Ctrl-F": "replace",
            "Shift-Ctrl-R": "replaceAll",
            "Ctrl-[": "indentLess",
            "Ctrl-]": "indentMore",
            "Ctrl-U": "undoSelection",
            "Shift-Ctrl-U": "redoSelection",
            "Alt-U": "redoSelection",
            fallthrough: "basic",
        }),
        (Wo.emacsy = {
            "Ctrl-F": "goCharRight",
            "Ctrl-B": "goCharLeft",
            "Ctrl-P": "goLineUp",
            "Ctrl-N": "goLineDown",
            "Ctrl-A": "goLineStart",
            "Ctrl-E": "goLineEnd",
            "Ctrl-V": "goPageDown",
            "Shift-Ctrl-V": "goPageUp",
            "Ctrl-D": "delCharAfter",
            "Ctrl-H": "delCharBefore",
            "Alt-Backspace": "delWordBefore",
            "Ctrl-K": "killLine",
            "Ctrl-T": "transposeChars",
            "Ctrl-O": "openLine",
        }),
        (Wo.macDefault = {
            "Cmd-A": "selectAll",
            "Cmd-D": "deleteLine",
            "Cmd-Z": "undo",
            "Shift-Cmd-Z": "redo",
            "Cmd-Y": "redo",
            "Cmd-Home": "goDocStart",
            "Cmd-Up": "goDocStart",
            "Cmd-End": "goDocEnd",
            "Cmd-Down": "goDocEnd",
            "Alt-Left": "goGroupLeft",
            "Alt-Right": "goGroupRight",
            "Cmd-Left": "goLineLeft",
            "Cmd-Right": "goLineRight",
            "Alt-Backspace": "delGroupBefore",
            "Ctrl-Alt-Backspace": "delGroupAfter",
            "Alt-Delete": "delGroupAfter",
            "Cmd-S": "save",
            "Cmd-F": "find",
            "Cmd-G": "findNext",
            "Shift-Cmd-G": "findPrev",
            "Cmd-Alt-F": "replace",
            "Shift-Cmd-Alt-F": "replaceAll",
            "Cmd-[": "indentLess",
            "Cmd-]": "indentMore",
            "Cmd-Backspace": "delWrappedLineLeft",
            "Cmd-Delete": "delWrappedLineRight",
            "Cmd-U": "undoSelection",
            "Shift-Cmd-U": "redoSelection",
            "Ctrl-Up": "goDocStart",
            "Ctrl-Down": "goDocEnd",
            fallthrough: ["basic", "emacsy"],
        }),
        (Wo.default = C ? Wo.macDefault : Wo.pcDefault);
    var jo = {
        selectAll: Zi,
        singleSelection: function (e) {
            return e.setSelection(
                e.getCursor("anchor"),
                e.getCursor("head"),
                ge
            );
        },
        killLine: function (n) {
            return Bo(n, function (e) {
                var t;
                return e.empty()
                    ? ((t = W(n.doc, e.head.line).text.length),
                      e.head.ch == t && e.head.line < n.lastLine()
                          ? { from: e.head, to: F(e.head.line + 1, 0) }
                          : { from: e.head, to: F(e.head.line, t) })
                    : { from: e.from(), to: e.to() };
            });
        },
        deleteLine: function (t) {
            return Bo(t, function (e) {
                return {
                    from: F(e.from().line, 0),
                    to: E(t.doc, F(e.to().line + 1, 0)),
                };
            });
        },
        delLineLeft: function (e) {
            return Bo(e, function (e) {
                return { from: F(e.from().line, 0), to: e.from() };
            });
        },
        delWrappedLineLeft: function (n) {
            return Bo(n, function (e) {
                var t = n.charCoords(e.head, "div").top + 5;
                return {
                    from: n.coordsChar({ left: 0, top: t }, "div"),
                    to: e.from(),
                };
            });
        },
        delWrappedLineRight: function (n) {
            return Bo(n, function (e) {
                var t = n.charCoords(e.head, "div").top + 5,
                    t = n.coordsChar(
                        { left: n.display.lineDiv.offsetWidth + 100, top: t },
                        "div"
                    );
                return { from: e.from(), to: t };
            });
        },
        undo: function (e) {
            return e.undo();
        },
        redo: function (e) {
            return e.redo();
        },
        undoSelection: function (e) {
            return e.undoSelection();
        },
        redoSelection: function (e) {
            return e.redoSelection();
        },
        goDocStart: function (e) {
            return e.extendSelection(F(e.firstLine(), 0));
        },
        goDocEnd: function (e) {
            return e.extendSelection(F(e.lastLine()));
        },
        goLineStart: function (t) {
            return t.extendSelectionsBy(
                function (e) {
                    return Xo(t, e.head.line);
                },
                { origin: "+move", bias: 1 }
            );
        },
        goLineStartSmart: function (t) {
            return t.extendSelectionsBy(
                function (e) {
                    return Yo(t, e.head);
                },
                { origin: "+move", bias: 1 }
            );
        },
        goLineEnd: function (i) {
            return i.extendSelectionsBy(
                function (e) {
                    var t = i,
                        e = e.head.line,
                        n = W(t.doc, e),
                        r = (function (e) {
                            for (var t; (t = Zt(e)); ) e = t.find(1, !0).line;
                            return e;
                        })(n);
                    return r != n && (e = H(r)), Vo(!0, t, n, e, -1);
                },
                { origin: "+move", bias: -1 }
            );
        },
        goLineRight: function (t) {
            return t.extendSelectionsBy(function (e) {
                e = t.cursorCoords(e.head, "div").top + 5;
                return t.coordsChar(
                    { left: t.display.lineDiv.offsetWidth + 100, top: e },
                    "div"
                );
            }, ve);
        },
        goLineLeft: function (t) {
            return t.extendSelectionsBy(function (e) {
                e = t.cursorCoords(e.head, "div").top + 5;
                return t.coordsChar({ left: 0, top: e }, "div");
            }, ve);
        },
        goLineLeftSmart: function (n) {
            return n.extendSelectionsBy(function (e) {
                var t = n.cursorCoords(e.head, "div").top + 5,
                    t = n.coordsChar({ left: 0, top: t }, "div");
                return t.ch < n.getLine(t.line).search(/\S/)
                    ? Yo(n, e.head)
                    : t;
            }, ve);
        },
        goLineUp: function (e) {
            return e.moveV(-1, "line");
        },
        goLineDown: function (e) {
            return e.moveV(1, "line");
        },
        goPageUp: function (e) {
            return e.moveV(-1, "page");
        },
        goPageDown: function (e) {
            return e.moveV(1, "page");
        },
        goCharLeft: function (e) {
            return e.moveH(-1, "char");
        },
        goCharRight: function (e) {
            return e.moveH(1, "char");
        },
        goColumnLeft: function (e) {
            return e.moveH(-1, "column");
        },
        goColumnRight: function (e) {
            return e.moveH(1, "column");
        },
        goWordLeft: function (e) {
            return e.moveH(-1, "word");
        },
        goGroupRight: function (e) {
            return e.moveH(1, "group");
        },
        goGroupLeft: function (e) {
            return e.moveH(-1, "group");
        },
        goWordRight: function (e) {
            return e.moveH(1, "word");
        },
        delCharBefore: function (e) {
            return e.deleteH(-1, "codepoint");
        },
        delCharAfter: function (e) {
            return e.deleteH(1, "char");
        },
        delWordBefore: function (e) {
            return e.deleteH(-1, "word");
        },
        delWordAfter: function (e) {
            return e.deleteH(1, "word");
        },
        delGroupBefore: function (e) {
            return e.deleteH(-1, "group");
        },
        delGroupAfter: function (e) {
            return e.deleteH(1, "group");
        },
        indentAuto: function (e) {
            return e.indentSelection("smart");
        },
        indentMore: function (e) {
            return e.indentSelection("add");
        },
        indentLess: function (e) {
            return e.indentSelection("subtract");
        },
        insertTab: function (e) {
            return e.replaceSelection("\t");
        },
        insertSoftTab: function (e) {
            for (
                var t = [],
                    n = e.listSelections(),
                    r = e.options.tabSize,
                    i = 0;
                i < n.length;
                i++
            ) {
                var o = n[i].from(),
                    o = S(e.getLine(o.line), o.ch, r);
                t.push(we(r - (o % r)));
            }
            e.replaceSelections(t);
        },
        defaultTab: function (e) {
            e.somethingSelected()
                ? e.indentSelection("add")
                : e.execCommand("insertTab");
        },
        transposeChars: function (l) {
            return h(l, function () {
                for (
                    var e, t, n, r = l.listSelections(), i = [], o = 0;
                    o < r.length;
                    o++
                )
                    r[o].empty() &&
                        ((e = r[o].head),
                        (t = W(l.doc, e.line).text) &&
                            (0 <
                            (e = e.ch == t.length ? new F(e.line, e.ch - 1) : e)
                                .ch
                                ? ((e = new F(e.line, e.ch + 1)),
                                  l.replaceRange(
                                      t.charAt(e.ch - 1) + t.charAt(e.ch - 2),
                                      F(e.line, e.ch - 2),
                                      e,
                                      "+transpose"
                                  ))
                                : e.line > l.doc.first &&
                                  (n = W(l.doc, e.line - 1).text) &&
                                  ((e = new F(e.line, 1)),
                                  l.replaceRange(
                                      t.charAt(0) +
                                          l.doc.lineSeparator() +
                                          n.charAt(n.length - 1),
                                      F(e.line - 1, n.length - 1),
                                      e,
                                      "+transpose"
                                  ))),
                        i.push(new G(e, e)));
                l.setSelections(i);
            });
        },
        newlineAndIndent: function (r) {
            return h(r, function () {
                for (var e = (t = r.listSelections()).length - 1; 0 <= e; e--)
                    r.replaceRange(
                        r.doc.lineSeparator(),
                        t[e].anchor,
                        t[e].head,
                        "+input"
                    );
                for (var t = r.listSelections(), n = 0; n < t.length; n++)
                    r.indentLine(t[n].from().line, null, !0);
                Hr(r);
            });
        },
        openLine: function (e) {
            return e.replaceSelection("\n", "start");
        },
        toggleOverwrite: function (e) {
            return e.toggleOverwrite();
        },
    };
    function Xo(e, t) {
        var n = W(e.doc, t),
            r = Jt(n);
        return Vo(!0, e, r, (t = r != n ? H(r) : t), 1);
    }
    function Yo(e, t) {
        var n = Xo(e, t.line),
            r = W(e.doc, n.line),
            e = Ge(r, e.doc.direction);
        return e && 0 != e[0].level
            ? n
            : ((e = Math.max(n.ch, r.text.search(/\S/))),
              (r = t.line == n.line && t.ch <= e && t.ch),
              F(n.line, r ? 0 : e, n.sticky));
    }
    function $o(e, t, n) {
        if ("string" == typeof t && !(t = jo[t])) return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift,
            i = !1;
        try {
            e.isReadOnly() && (e.state.suppressEdits = !0),
                n && (e.display.shift = !1),
                (i = t(e) != pe);
        } finally {
            (e.display.shift = r), (e.state.suppressEdits = !1);
        }
        return i;
    }
    var _o = new de();
    function qo(e, t, n, r) {
        var i = e.state.keySeq;
        if (i) {
            if (Eo(t)) return "handled";
            if (
                (/\'$/.test(t)
                    ? (e.state.keySeq = null)
                    : _o.set(50, function () {
                          e.state.keySeq == i &&
                              ((e.state.keySeq = null),
                              e.display.input.reset());
                      }),
                Zo(e, i + " " + t, n, r))
            )
                return !0;
        }
        return Zo(e, t, n, r);
    }
    function Zo(e, t, n, r) {
        r = (function (e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
                var i = Po(t, e.state.keyMaps[r], n, e);
                if (i) return i;
            }
            return (
                (e.options.extraKeys && Po(t, e.options.extraKeys, n, e)) ||
                Po(t, e.options.keyMap, n, e)
            );
        })(e, t, r);
        return (
            "multi" == r && (e.state.keySeq = t),
            "handled" == r && b(e, "keyHandled", e, t, n),
            ("handled" != r && "multi" != r) || (D(n), Sr(e)),
            !!r
        );
    }
    function Qo(t, e) {
        var n = zo(e, !0);
        return (
            !!n &&
            (e.shiftKey && !t.state.keySeq
                ? qo(t, "Shift-" + n, e, function (e) {
                      return $o(t, e, !0);
                  }) ||
                  qo(t, n, e, function (e) {
                      if ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion)
                          return $o(t, e);
                  })
                : qo(t, n, e, function (e) {
                      return $o(t, e);
                  }))
        );
    }
    var Jo = null;
    function el(e) {
        var t,
            n,
            r,
            i = this;
        function o(e) {
            (18 != e.keyCode && e.altKey) ||
                (ee(r, "CodeMirror-crosshair"),
                T(document, "keyup", o),
                T(document, "mouseover", o));
        }
        (e.target && e.target != i.display.input.getField()) ||
            ((i.curOp.focus = N(ae(i))),
            A(i, e) ||
                (w && v < 11 && 27 == e.keyCode && (e.returnValue = !1),
                (t = e.keyCode),
                (i.display.shift = 16 == t || e.shiftKey),
                (n = Qo(i, e)),
                K &&
                    ((Jo = n ? t : null),
                    !n &&
                        88 == t &&
                        !rt &&
                        (C ? e.metaKey : e.ctrlKey) &&
                        i.replaceSelection("", null, "cut")),
                d &&
                    !C &&
                    !n &&
                    46 == t &&
                    e.shiftKey &&
                    !e.ctrlKey &&
                    document.execCommand &&
                    document.execCommand("cut"),
                18 != t ||
                    /\bCodeMirror-crosshair\b/.test(
                        i.display.lineDiv.className
                    ) ||
                    (ie((r = i.display.lineDiv), "CodeMirror-crosshair"),
                    k(document, "keyup", o),
                    k(document, "mouseover", o))));
    }
    function tl(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1), A(this, e);
    }
    function nl(e) {
        var t = this;
        if (
            !(
                (e.target && e.target != t.display.input.getField()) ||
                Nn(t.display, e) ||
                A(t, e) ||
                (e.ctrlKey && !e.altKey) ||
                (C && e.metaKey)
            )
        ) {
            var n,
                r = e.keyCode,
                i = e.charCode;
            if (K && r == Jo) return (Jo = null), void D(e);
            (K && (!e.which || e.which < 10) && Qo(t, e)) ||
                "\b" == (r = String.fromCharCode(null == i ? r : i)) ||
                qo((n = t), "'" + r + "'", e, function (e) {
                    return $o(n, e, !0);
                }) ||
                t.display.input.onKeyPress(e);
        }
    }
    function rl(e, t, n) {
        (this.time = e), (this.pos = t), (this.button = n);
    }
    var il, ol;
    function ll(e) {
        var t,
            n,
            r,
            i,
            o,
            l,
            s,
            a,
            u,
            c = this,
            h = c.display;
        A(c, e) ||
            (h.activeTouch && h.input.supportsTouch()) ||
            (h.input.ensurePolled(),
            (h.shift = e.shiftKey),
            Nn(h, e)
                ? x ||
                  ((h.scroller.draggable = !1),
                  setTimeout(function () {
                      return (h.scroller.draggable = !0);
                  }, 100))
                : ul(c, e) ||
                  ((t = fr(c, e)),
                  (n = Ze(e)),
                  (r = t
                      ? ((i = t),
                        (o = n),
                        (r = +new Date()),
                        ol && ol.compare(r, i, o)
                            ? ((il = ol = null), "triple")
                            : il && il.compare(r, i, o)
                            ? ((ol = new rl(r, i, o)), (il = null), "double")
                            : ((il = new rl(r, i, o)), (ol = null), "single"))
                      : "single"),
                  ue(c).focus(),
                  1 == n && c.state.selectingText && c.state.selectingText(e),
                  (t &&
                      (function (n, e, r, t, i) {
                          var o = "Click";
                          "double" == t
                              ? (o = "Double" + o)
                              : "triple" == t && (o = "Triple" + o);
                          return qo(
                              n,
                              Io(
                                  (o =
                                      (1 == e
                                          ? "Left"
                                          : 2 == e
                                          ? "Middle"
                                          : "Right") + o),
                                  i
                              ),
                              i,
                              function (e) {
                                  if (!(e = "string" == typeof e ? jo[e] : e))
                                      return !1;
                                  var t = !1;
                                  try {
                                      n.isReadOnly() &&
                                          (n.state.suppressEdits = !0),
                                          (t = e(n, r) != pe);
                                  } finally {
                                      n.state.suppressEdits = !1;
                                  }
                                  return t;
                              }
                          );
                      })(c, n, t, r, e)) ||
                      (1 == n
                          ? t
                              ? ((i = c),
                                (o = t),
                                (l = r),
                                (s = e),
                                w
                                    ? setTimeout(ce(Lr, i), 0)
                                    : (i.curOp.focus = N(ae(i))),
                                (a = (function (e, t, n) {
                                    var r = e.getOption("configureMouse"),
                                        r = r ? r(e, t, n) : {};
                                    {
                                        var i;
                                        null == r.unit &&
                                            ((i = q
                                                ? n.shiftKey && n.metaKey
                                                : n.altKey),
                                            (r.unit = i
                                                ? "rectangle"
                                                : "single" == t
                                                ? "char"
                                                : "double" == t
                                                ? "word"
                                                : "line"));
                                    }
                                    (null != r.extend && !e.doc.extend) ||
                                        (r.extend = e.doc.extend || n.shiftKey);
                                    null == r.addNew &&
                                        (r.addNew = C ? n.metaKey : n.ctrlKey);
                                    null == r.moveOnDrag &&
                                        (r.moveOnDrag = !(C
                                            ? n.altKey
                                            : n.ctrlKey));
                                    return r;
                                })(i, l, s)),
                                (u = i.doc.sel),
                                (i.options.dragDrop &&
                                    et &&
                                    !i.isReadOnly() &&
                                    "single" == l &&
                                    -1 < (l = u.contains(o)) &&
                                    (P((l = u.ranges[l]).from(), o) < 0 ||
                                        0 < o.xRel) &&
                                    (0 < P(l.to(), o) || o.xRel < 0)
                                    ? function (t, n, r, i) {
                                          var o = t.display,
                                              l = !1,
                                              s = R(t, function (e) {
                                                  x &&
                                                      (o.scroller.draggable =
                                                          !1),
                                                      (t.state.draggingText =
                                                          !1),
                                                      t.state
                                                          .delayingBlurEvent &&
                                                          (t.hasFocus()
                                                              ? (t.state.delayingBlurEvent =
                                                                    !1)
                                                              : kr(t)),
                                                      T(
                                                          o.wrapper
                                                              .ownerDocument,
                                                          "mouseup",
                                                          s
                                                      ),
                                                      T(
                                                          o.wrapper
                                                              .ownerDocument,
                                                          "mousemove",
                                                          a
                                                      ),
                                                      T(
                                                          o.scroller,
                                                          "dragstart",
                                                          u
                                                      ),
                                                      T(o.scroller, "drop", s),
                                                      l ||
                                                          (D(e),
                                                          i.addNew ||
                                                              Ri(
                                                                  t.doc,
                                                                  r,
                                                                  null,
                                                                  null,
                                                                  i.extend
                                                              ),
                                                          (x && !j) ||
                                                          (w && 9 == v)
                                                              ? setTimeout(
                                                                    function () {
                                                                        o.wrapper.ownerDocument.body.focus(
                                                                            {
                                                                                preventScroll:
                                                                                    !0,
                                                                            }
                                                                        ),
                                                                            o.input.focus();
                                                                    },
                                                                    20
                                                                )
                                                              : o.input.focus());
                                              }),
                                              a = function (e) {
                                                  l =
                                                      l ||
                                                      10 <=
                                                          Math.abs(
                                                              n.clientX -
                                                                  e.clientX
                                                          ) +
                                                              Math.abs(
                                                                  n.clientY -
                                                                      e.clientY
                                                              );
                                              },
                                              u = function () {
                                                  return (l = !0);
                                              };
                                          x && (o.scroller.draggable = !0);
                                          ((t.state.draggingText = s).copy =
                                              !i.moveOnDrag),
                                              k(
                                                  o.wrapper.ownerDocument,
                                                  "mouseup",
                                                  s
                                              ),
                                              k(
                                                  o.wrapper.ownerDocument,
                                                  "mousemove",
                                                  a
                                              ),
                                              k(o.scroller, "dragstart", u),
                                              k(o.scroller, "drop", s),
                                              (t.state.delayingBlurEvent = !0),
                                              setTimeout(function () {
                                                  return o.input.focus();
                                              }, 20),
                                              o.scroller.dragDrop &&
                                                  o.scroller.dragDrop();
                                      }
                                    : function (d, e, f, p) {
                                          w && kr(d);
                                          var l = d.display,
                                              g = d.doc;
                                          D(e);
                                          var m,
                                              v,
                                              y = g.sel,
                                              t = y.ranges;
                                          p.addNew && !p.extend
                                              ? ((v = g.sel.contains(f)),
                                                (m =
                                                    -1 < v
                                                        ? t[v]
                                                        : new G(f, f)))
                                              : ((m = g.sel.primary()),
                                                (v = g.sel.primIndex));
                                          "rectangle" == p.unit
                                              ? (p.addNew || (m = new G(f, f)),
                                                (f = fr(d, e, !0, !0)),
                                                (v = -1))
                                              : ((e = sl(d, f, p.unit)),
                                                (m = p.extend
                                                    ? zi(
                                                          m,
                                                          e.anchor,
                                                          e.head,
                                                          p.extend
                                                      )
                                                    : e));
                                          p.addNew
                                              ? -1 == v
                                                  ? ((v = t.length),
                                                    U(
                                                        g,
                                                        gi(d, t.concat([m]), v),
                                                        {
                                                            scroll: !1,
                                                            origin: "*mouse",
                                                        }
                                                    ))
                                                  : 1 < t.length &&
                                                    t[v].empty() &&
                                                    "char" == p.unit &&
                                                    !p.extend
                                                  ? (U(
                                                        g,
                                                        gi(
                                                            d,
                                                            t
                                                                .slice(0, v)
                                                                .concat(
                                                                    t.slice(
                                                                        v + 1
                                                                    )
                                                                ),
                                                            0
                                                        ),
                                                        {
                                                            scroll: !1,
                                                            origin: "*mouse",
                                                        }
                                                    ),
                                                    (y = g.sel))
                                                  : Gi(g, v, m, me)
                                              : (U(g, new B([m], (v = 0)), me),
                                                (y = g.sel));
                                          var b = f;
                                          function s(e) {
                                              if (0 != P(b, e))
                                                  if (
                                                      ((b = e),
                                                      "rectangle" == p.unit)
                                                  ) {
                                                      for (
                                                          var t = [],
                                                              n =
                                                                  d.options
                                                                      .tabSize,
                                                              r = S(
                                                                  W(g, f.line)
                                                                      .text,
                                                                  f.ch,
                                                                  n
                                                              ),
                                                              i = S(
                                                                  W(g, e.line)
                                                                      .text,
                                                                  e.ch,
                                                                  n
                                                              ),
                                                              o = Math.min(
                                                                  r,
                                                                  i
                                                              ),
                                                              l = Math.max(
                                                                  r,
                                                                  i
                                                              ),
                                                              s = Math.min(
                                                                  f.line,
                                                                  e.line
                                                              ),
                                                              a = Math.min(
                                                                  d.lastLine(),
                                                                  Math.max(
                                                                      f.line,
                                                                      e.line
                                                                  )
                                                              );
                                                          s <= a;
                                                          s++
                                                      ) {
                                                          var u = W(g, s).text,
                                                              c = ye(u, o, n);
                                                          o == l
                                                              ? t.push(
                                                                    new G(
                                                                        F(s, c),
                                                                        F(s, c)
                                                                    )
                                                                )
                                                              : u.length > c &&
                                                                t.push(
                                                                    new G(
                                                                        F(s, c),
                                                                        F(
                                                                            s,
                                                                            ye(
                                                                                u,
                                                                                l,
                                                                                n
                                                                            )
                                                                        )
                                                                    )
                                                                );
                                                      }
                                                      t.length ||
                                                          t.push(new G(f, f)),
                                                          U(
                                                              g,
                                                              gi(
                                                                  d,
                                                                  y.ranges
                                                                      .slice(
                                                                          0,
                                                                          v
                                                                      )
                                                                      .concat(
                                                                          t
                                                                      ),
                                                                  v
                                                              ),
                                                              {
                                                                  origin: "*mouse",
                                                                  scroll: !1,
                                                              }
                                                          ),
                                                          d.scrollIntoView(e);
                                                  } else {
                                                      var h,
                                                          r = m,
                                                          i = sl(d, e, p.unit),
                                                          e = r.anchor,
                                                          e =
                                                              0 < P(i.anchor, e)
                                                                  ? ((h =
                                                                        i.head),
                                                                    St(
                                                                        r.from(),
                                                                        i.anchor
                                                                    ))
                                                                  : ((h =
                                                                        i.anchor),
                                                                    Ct(
                                                                        r.to(),
                                                                        i.head
                                                                    )),
                                                          r = y.ranges.slice(0);
                                                      (r[v] = (function (e, t) {
                                                          var n = t.anchor,
                                                              r = t.head,
                                                              i = W(
                                                                  e.doc,
                                                                  n.line
                                                              );
                                                          if (
                                                              0 == P(n, r) &&
                                                              n.sticky ==
                                                                  r.sticky
                                                          )
                                                              return t;
                                                          i = Ge(i);
                                                          if (!i) return t;
                                                          var o = He(
                                                                  i,
                                                                  n.ch,
                                                                  n.sticky
                                                              ),
                                                              l = i[o];
                                                          if (
                                                              l.from != n.ch &&
                                                              l.to != n.ch
                                                          )
                                                              return t;
                                                          var s =
                                                              o +
                                                              ((l.from ==
                                                                  n.ch) ==
                                                              (1 != l.level)
                                                                  ? 0
                                                                  : 1);
                                                          if (
                                                              0 == s ||
                                                              s == i.length
                                                          )
                                                              return t;
                                                          l =
                                                              r.line != n.line
                                                                  ? 0 <
                                                                    (r.line -
                                                                        n.line) *
                                                                        ("ltr" ==
                                                                        e.doc
                                                                            .direction
                                                                            ? 1
                                                                            : -1)
                                                                  : ((e = He(
                                                                        i,
                                                                        r.ch,
                                                                        r.sticky
                                                                    )),
                                                                    (o =
                                                                        e - o ||
                                                                        (r.ch -
                                                                            n.ch) *
                                                                            (1 ==
                                                                            l.level
                                                                                ? -1
                                                                                : 1)),
                                                                    e ==
                                                                        s - 1 ||
                                                                    e == s
                                                                        ? o < 0
                                                                        : 0 <
                                                                          o);
                                                          (e =
                                                              i[
                                                                  s +
                                                                      (l
                                                                          ? -1
                                                                          : 0)
                                                              ]),
                                                              (o =
                                                                  l ==
                                                                  (1 ==
                                                                      e.level)),
                                                              (i = o
                                                                  ? e.from
                                                                  : e.to),
                                                              (s = o
                                                                  ? "after"
                                                                  : "before");
                                                          return n.ch == i &&
                                                              n.sticky == s
                                                              ? t
                                                              : new G(
                                                                    new F(
                                                                        n.line,
                                                                        i,
                                                                        s
                                                                    ),
                                                                    r
                                                                );
                                                      })(d, new G(E(g, e), h))),
                                                          U(g, gi(d, r, v), me);
                                                  }
                                          }
                                          var a =
                                                  l.wrapper.getBoundingClientRect(),
                                              u = 0;
                                          function n(e) {
                                              (d.state.selectingText = !1),
                                                  (u = 1 / 0),
                                                  e && (D(e), l.input.focus()),
                                                  T(
                                                      l.wrapper.ownerDocument,
                                                      "mousemove",
                                                      r
                                                  ),
                                                  T(
                                                      l.wrapper.ownerDocument,
                                                      "mouseup",
                                                      i
                                                  ),
                                                  (g.history.lastSelOrigin =
                                                      null);
                                          }
                                          var r = R(d, function (e) {
                                                  (0 !== e.buttons && Ze(e)
                                                      ? function e(t) {
                                                            var n,
                                                                r,
                                                                i = ++u,
                                                                o = fr(
                                                                    d,
                                                                    t,
                                                                    !0,
                                                                    "rectangle" ==
                                                                        p.unit
                                                                );
                                                            o &&
                                                                (0 != P(o, b)
                                                                    ? ((d.curOp.focus =
                                                                          N(
                                                                              ae(
                                                                                  d
                                                                              )
                                                                          )),
                                                                      s(o),
                                                                      (n = Ar(
                                                                          l,
                                                                          g
                                                                      )),
                                                                      (o.line >=
                                                                          n.to ||
                                                                          o.line <
                                                                              n.from) &&
                                                                          setTimeout(
                                                                              R(
                                                                                  d,
                                                                                  function () {
                                                                                      u ==
                                                                                          i &&
                                                                                          e(
                                                                                              t
                                                                                          );
                                                                                  }
                                                                              ),
                                                                              150
                                                                          ))
                                                                    : (r =
                                                                          t.clientY <
                                                                          a.top
                                                                              ? -20
                                                                              : t.clientY >
                                                                                a.bottom
                                                                              ? 20
                                                                              : 0) &&
                                                                      setTimeout(
                                                                          R(
                                                                              d,
                                                                              function () {
                                                                                  u ==
                                                                                      i &&
                                                                                      ((l.scroller.scrollTop +=
                                                                                          r),
                                                                                      e(
                                                                                          t
                                                                                      ));
                                                                              }
                                                                          ),
                                                                          50
                                                                      ));
                                                        }
                                                      : n)(e);
                                              }),
                                              i = R(d, n);
                                          (d.state.selectingText = i),
                                              k(
                                                  l.wrapper.ownerDocument,
                                                  "mousemove",
                                                  r
                                              ),
                                              k(
                                                  l.wrapper.ownerDocument,
                                                  "mouseup",
                                                  i
                                              );
                                      })(i, s, o, a))
                              : qe(e) == h.scroller && D(e)
                          : 2 == n
                          ? (t && Ri(c.doc, t),
                            setTimeout(function () {
                                return h.input.focus();
                            }, 20))
                          : 3 == n &&
                            (Q ? c.display.input.onContextMenu(e) : kr(c)))));
    }
    function sl(e, t, n) {
        if ("char" == n) return new G(t, t);
        if ("word" == n) return e.findWordAt(t);
        if ("line" == n) return new G(F(t.line, 0), E(e.doc, F(t.line + 1, 0)));
        n = n(e, t);
        return new G(n.from, n.to);
    }
    function al(e, t, n, r) {
        var i, o;
        if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
        else
            try {
                (i = t.clientX), (o = t.clientY);
            } catch (e) {
                return !1;
            }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
            return !1;
        r && D(t);
        var l = e.display,
            r = l.lineDiv.getBoundingClientRect();
        if (o > r.bottom || !je(e, n)) return $e(t);
        o -= r.top - l.viewOffset;
        for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
            var a = l.gutters.childNodes[s];
            if (a && a.getBoundingClientRect().right >= i)
                return (
                    O(
                        e,
                        n,
                        e,
                        vt(e.doc, o),
                        e.display.gutterSpecs[s].className,
                        t
                    ),
                    $e(t)
                );
        }
    }
    function ul(e, t) {
        return al(e, t, "gutterClick", !0);
    }
    function cl(e, t) {
        var n, r;
        Nn(e.display, t) ||
            ((r = t),
            je((n = e), "gutterContextMenu") &&
                al(n, r, "gutterContextMenu", !1)) ||
            A(e, t, "contextmenu") ||
            Q ||
            e.display.input.onContextMenu(t);
    }
    function hl(e) {
        (e.display.wrapper.className =
            e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
            e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
            jn(e);
    }
    rl.prototype.compare = function (e, t, n) {
        return this.time + 400 > e && 0 == P(t, this.pos) && n == this.button;
    };
    var dl = {
            toString: function () {
                return "CodeMirror.Init";
            },
        },
        fl = {},
        pl = {};
    function gl(e, t, n) {
        !t != !(n && n != dl) &&
            ((n = e.display.dragFunctions),
            (t = t ? k : T)(e.display.scroller, "dragstart", n.start),
            t(e.display.scroller, "dragenter", n.enter),
            t(e.display.scroller, "dragover", n.over),
            t(e.display.scroller, "dragleave", n.leave),
            t(e.display.scroller, "drop", n.drop));
    }
    function ml(e) {
        e.options.lineWrapping
            ? (ie(e.display.wrapper, "CodeMirror-wrap"),
              (e.display.sizer.style.minWidth = ""),
              (e.display.sizerWidth = null))
            : (ee(e.display.wrapper, "CodeMirror-wrap"), ln(e)),
            dr(e),
            I(e),
            jn(e),
            setTimeout(function () {
                return Vr(e);
            }, 100);
    }
    function p(e, t) {
        var n = this;
        if (!(this instanceof p)) return new p(e, t);
        (this.options = t = t ? he(t) : {}), he(fl, t, !1);
        var r,
            i = t.value,
            o =
                ("string" == typeof i
                    ? (i = new f(i, t.mode, null, t.lineSeparator, t.direction))
                    : t.mode && (i.modeOption = t.mode),
                (this.doc = i),
                new p.inputStyles[t.inputStyle](this)),
            e = (this.display = new ui(e, i, o, t)),
            l =
                (hl((e.wrapper.CodeMirror = this)),
                t.lineWrapping &&
                    (this.display.wrapper.className += " CodeMirror-wrap"),
                Xr(this),
                (this.state = {
                    keyMaps: [],
                    overlays: [],
                    modeGen: 0,
                    overwrite: !1,
                    delayingBlurEvent: !1,
                    focused: !1,
                    suppressEdits: !1,
                    pasteIncoming: -1,
                    cutIncoming: -1,
                    selectingText: !1,
                    draggingText: !1,
                    highlight: new de(),
                    keySeq: null,
                    specialChars: null,
                }),
                t.autofocus && !_ && e.input.focus(),
                w &&
                    v < 11 &&
                    setTimeout(function () {
                        return n.display.input.reset(!0);
                    }, 20),
                this),
            s = l.display;
        k(s.scroller, "mousedown", R(l, ll)),
            k(
                s.scroller,
                "dblclick",
                w && v < 11
                    ? R(l, function (e) {
                          var t;
                          A(l, e) ||
                              !(t = fr(l, e)) ||
                              ul(l, e) ||
                              Nn(l.display, e) ||
                              (D(e),
                              (e = l.findWordAt(t)),
                              Ri(l.doc, e.anchor, e.head));
                      })
                    : function (e) {
                          return A(l, e) || D(e);
                      }
            ),
            k(s.scroller, "contextmenu", function (e) {
                return cl(l, e);
            }),
            k(s.input.getField(), "contextmenu", function (e) {
                s.scroller.contains(e.target) || cl(l, e);
            });
        var a,
            u = { end: 0 };
        function c() {
            s.activeTouch &&
                ((a = setTimeout(function () {
                    return (s.activeTouch = null);
                }, 1e3)),
                ((u = s.activeTouch).end = +new Date()));
        }
        function h(e, t) {
            if (null == t.left) return 1;
            var n = t.left - e.left,
                t = t.top - e.top;
            return 400 < n * n + t * t;
        }
        k(s.scroller, "touchstart", function (e) {
            var t;
            A(l, e) ||
                (function (e) {
                    if (1 == e.touches.length)
                        return (
                            (e = e.touches[0]).radiusX <= 1 && e.radiusY <= 1
                        );
                })(e) ||
                ul(l, e) ||
                (s.input.ensurePolled(),
                clearTimeout(a),
                (t = +new Date()),
                (s.activeTouch = {
                    start: t,
                    moved: !1,
                    prev: t - u.end <= 300 ? u : null,
                }),
                1 == e.touches.length &&
                    ((s.activeTouch.left = e.touches[0].pageX),
                    (s.activeTouch.top = e.touches[0].pageY)));
        }),
            k(s.scroller, "touchmove", function () {
                s.activeTouch && (s.activeTouch.moved = !0);
            }),
            k(s.scroller, "touchend", function (e) {
                var t,
                    n = s.activeTouch;
                n &&
                    !Nn(s, e) &&
                    null != n.left &&
                    !n.moved &&
                    new Date() - n.start < 300 &&
                    ((t = l.coordsChar(s.activeTouch, "page")),
                    (n =
                        !n.prev || h(n, n.prev)
                            ? new G(t, t)
                            : !n.prev.prev || h(n, n.prev.prev)
                            ? l.findWordAt(t)
                            : new G(F(t.line, 0), E(l.doc, F(t.line + 1, 0)))),
                    l.setSelection(n.anchor, n.head),
                    l.focus(),
                    D(e)),
                    c();
            }),
            k(s.scroller, "touchcancel", c),
            k(s.scroller, "scroll", function () {
                s.scroller.clientHeight &&
                    (Ir(l, s.scroller.scrollTop),
                    Rr(l, s.scroller.scrollLeft, !0),
                    O(l, "scroll", l));
            }),
            k(s.scroller, "mousewheel", function (e) {
                return pi(l, e);
            }),
            k(s.scroller, "DOMMouseScroll", function (e) {
                return pi(l, e);
            }),
            k(s.wrapper, "scroll", function () {
                return (s.wrapper.scrollTop = s.wrapper.scrollLeft = 0);
            }),
            (s.dragFunctions = {
                enter: function (e) {
                    A(l, e) || _e(e);
                },
                over: function (e) {
                    var t, n;
                    A(l, e) ||
                        ((n = fr((t = l), (n = e))) &&
                            (xr(t, n, (n = document.createDocumentFragment())),
                            t.display.dragCursor ||
                                ((t.display.dragCursor = M(
                                    "div",
                                    null,
                                    "CodeMirror-cursors CodeMirror-dragcursors"
                                )),
                                t.display.lineSpace.insertBefore(
                                    t.display.dragCursor,
                                    t.display.cursorDiv
                                )),
                            y(t.display.dragCursor, n)),
                        _e(e));
                },
                start: function (e) {
                    var t, n;
                    (t = l),
                        (e = e),
                        w && (!t.state.draggingText || +new Date() - xo < 100)
                            ? _e(e)
                            : A(t, e) ||
                              Nn(t.display, e) ||
                              (e.dataTransfer.setData("Text", t.getSelection()),
                              (e.dataTransfer.effectAllowed = "copyMove"),
                              e.dataTransfer.setDragImage &&
                                  !j &&
                                  (((n = M(
                                      "img",
                                      null,
                                      null,
                                      "position: fixed; left: 0; top: 0;"
                                  )).src =
                                      "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                                  K &&
                                      ((n.width = n.height = 1),
                                      t.display.wrapper.appendChild(n),
                                      (n._top = n.offsetTop)),
                                  e.dataTransfer.setDragImage(n, 0, 0),
                                  K && n.parentNode.removeChild(n)));
                },
                drop: R(l, Co),
                leave: function (e) {
                    A(l, e) || So(l);
                },
            });
        o = s.input.getField();
        for (r in (k(o, "keyup", function (e) {
            return tl.call(l, e);
        }),
        k(o, "keydown", R(l, el)),
        k(o, "keypress", R(l, nl)),
        k(o, "focus", function (e) {
            return Tr(l, e);
        }),
        k(o, "blur", function (e) {
            return Mr(l, e);
        }),
        To(),
        $r(this),
        (this.curOp.forceUpdate = !0),
        Ti(this, i),
        (t.autofocus && !_) || this.hasFocus()
            ? setTimeout(function () {
                  n.hasFocus() && !n.state.focused && Tr(n);
              }, 20)
            : Mr(this),
        pl))
            pl.hasOwnProperty(r) && pl[r](this, t[r], dl);
        oi(this), t.finishInit && t.finishInit(this);
        for (var d = 0; d < vl.length; ++d) vl[d](this);
        _r(this),
            x &&
                t.lineWrapping &&
                "optimizelegibility" ==
                    getComputedStyle(e.lineDiv).textRendering &&
                (e.lineDiv.style.textRendering = "auto");
    }
    (p.defaults = fl), (p.optionHandlers = pl);
    var vl = [];
    function yl(e, t, n, r) {
        var i,
            o = e.doc,
            l =
                ("smart" == (n = null == n ? "add" : n) &&
                    (o.mode.indent ? (i = At(e, t).state) : (n = "prev")),
                e.options.tabSize),
            s = W(o, t),
            a = S(s.text, null, l),
            u =
                (s.stateAfter && (s.stateAfter = null),
                s.text.match(/^\s*/)[0]);
        if (r || /\S/.test(s.text)) {
            if (
                "smart" == n &&
                ((c = o.mode.indent(i, s.text.slice(u.length), s.text)) == pe ||
                    150 < c)
            ) {
                if (!r) return;
                n = "prev";
            }
        } else (c = 0), (n = "not");
        "prev" == n
            ? (c = t > o.first ? S(W(o, t - 1).text, null, l) : 0)
            : "add" == n
            ? (c = a + e.options.indentUnit)
            : "subtract" == n
            ? (c = a - e.options.indentUnit)
            : "number" == typeof n && (c = a + n);
        var c = Math.max(0, c),
            h = "",
            d = 0;
        if (e.options.indentWithTabs)
            for (var f = Math.floor(c / l); f; --f) (d += l), (h += "\t");
        if ((d < c && (h += we(c - d)), h != u))
            return (
                io(o, h, F(t, 0), F(t, u.length), "+input"),
                !(s.stateAfter = null)
            );
        for (var p = 0; p < o.sel.ranges.length; p++) {
            var g = o.sel.ranges[p];
            if (g.head.line == t && g.head.ch < u.length) {
                g = F(t, u.length);
                Gi(o, p, new G(g, g));
                break;
            }
        }
    }
    p.defineInitHook = function (e) {
        return vl.push(e);
    };
    var bl = null;
    function wl(e) {
        bl = e;
    }
    function xl(e, t, n, r, i) {
        var o = e.doc,
            l = ((e.display.shift = !1), (r = r || o.sel), +new Date() - 200),
            s = "paste" == i || e.state.pasteIncoming > l,
            a = tt(t),
            u = null;
        if (s && 1 < r.ranges.length)
            if (bl && bl.text.join("\n") == t) {
                if (r.ranges.length % bl.text.length == 0)
                    for (var u = [], c = 0; c < bl.text.length; c++)
                        u.push(o.splitLines(bl.text[c]));
            } else
                a.length == r.ranges.length &&
                    e.options.pasteLinesPerSelection &&
                    (u = xe(a, function (e) {
                        return [e];
                    }));
        for (
            var h = e.curOp.updateInput, d = r.ranges.length - 1;
            0 <= d;
            d--
        ) {
            var f = r.ranges[d],
                p = f.from(),
                g = f.to(),
                f =
                    (f.empty() &&
                        (n && 0 < n
                            ? (p = F(p.line, p.ch - n))
                            : e.state.overwrite && !s
                            ? (g = F(
                                  g.line,
                                  Math.min(
                                      W(o, g.line).text.length,
                                      g.ch + z(a).length
                                  )
                              ))
                            : s &&
                              bl &&
                              bl.lineWise &&
                              bl.text.join("\n") == a.join("\n") &&
                              (p = g = F(p.line, 0))),
                    {
                        from: p,
                        to: g,
                        text: u ? u[d % u.length] : a,
                        origin:
                            i ||
                            (s
                                ? "paste"
                                : e.state.cutIncoming > l
                                ? "cut"
                                : "+input"),
                    });
            Ji(e.doc, f), b(e, "inputRead", e, f);
        }
        t && !s && Sl(e, t),
            Hr(e),
            e.curOp.updateInput < 2 && (e.curOp.updateInput = h),
            (e.curOp.typing = !0),
            (e.state.pasteIncoming = e.state.cutIncoming = -1);
    }
    function Cl(e, t) {
        var n = e.clipboardData && e.clipboardData.getData("Text");
        return (
            n &&
            (e.preventDefault(),
            t.isReadOnly() ||
                t.options.disableInput ||
                !t.hasFocus() ||
                h(t, function () {
                    return xl(t, n, 0, null, "paste");
                }),
            1)
        );
    }
    function Sl(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
            for (var n = e.doc.sel, r = n.ranges.length - 1; 0 <= r; r--) {
                var i = n.ranges[r];
                if (
                    !(
                        100 < i.head.ch ||
                        (r && n.ranges[r - 1].head.line == i.head.line)
                    )
                ) {
                    var o = e.getModeAt(i.head),
                        l = !1;
                    if (o.electricChars) {
                        for (var s = 0; s < o.electricChars.length; s++)
                            if (-1 < t.indexOf(o.electricChars.charAt(s))) {
                                l = yl(e, i.head.line, "smart");
                                break;
                            }
                    } else
                        o.electricInput &&
                            o.electricInput.test(
                                W(e.doc, i.head.line).text.slice(0, i.head.ch)
                            ) &&
                            (l = yl(e, i.head.line, "smart"));
                    l && b(e, "electricInput", e, i.head.line);
                }
            }
    }
    function Ll(e) {
        for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
            var i = e.doc.sel.ranges[r].head.line,
                i = { anchor: F(i, 0), head: F(i + 1, 0) };
            n.push(i), t.push(e.getRange(i.anchor, i.head));
        }
        return { text: t, ranges: n };
    }
    function kl(e, t, n, r) {
        e.setAttribute("autocorrect", n ? "" : "off"),
            e.setAttribute("autocapitalize", r ? "" : "off"),
            e.setAttribute("spellcheck", !!t);
    }
    function Tl() {
        var e = M(
                "textarea",
                null,
                null,
                "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"
            ),
            t = M(
                "div",
                [e],
                null,
                "overflow: hidden; position: relative; width: 3px; height: 0px;"
            );
        return (
            x ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
            Y && (e.style.border = "1px solid black"),
            kl(e),
            t
        );
    }
    function Ml(n, r, i, o, l) {
        var e = r,
            t = i,
            s = W(n, r.line),
            a = l && "rtl" == n.direction ? -i : i;
        function u(e) {
            var t;
            if (
                null ==
                (t =
                    "codepoint" == o
                        ? ((t = s.text.charCodeAt(r.ch + (0 < i ? 0 : -1))),
                          isNaN(t)
                              ? null
                              : ((t =
                                    0 < i
                                        ? 55296 <= t && t < 56320
                                        : 56320 <= t && t < 57343),
                                new F(
                                    r.line,
                                    Math.max(
                                        0,
                                        Math.min(
                                            s.text.length,
                                            r.ch + i * (t ? 2 : 1)
                                        )
                                    ),
                                    -i
                                )))
                        : l
                        ? Ko(n.cm, s, r, i)
                        : Uo(s, r, i))
            ) {
                if (
                    e ||
                    (e = r.line + a) < n.first ||
                    e >= n.first + n.size ||
                    ((r = new F(e, r.ch, r.sticky)), !(s = W(n, e)))
                )
                    return;
                r = Vo(l, n.cm, s, r.line, a);
            } else r = t;
            return 1;
        }
        if ("char" == o || "codepoint" == o) u();
        else if ("column" == o) u(!0);
        else if ("word" == o || "group" == o)
            for (
                var c = null,
                    h = "group" == o,
                    d = n.cm && n.cm.getHelper(r, "wordChars"),
                    f = !0;
                !(i < 0) || u(!f);
                f = !1
            ) {
                var p = s.text.charAt(r.ch) || "\n",
                    p = Te(p, d)
                        ? "w"
                        : h && "\n" == p
                        ? "n"
                        : !h || /\s/.test(p)
                        ? null
                        : "p";
                if ((!h || f || p || (p = "s"), c && c != p)) {
                    i < 0 && ((i = 1), u(), (r.sticky = "after"));
                    break;
                }
                if ((p && (c = p), 0 < i && !u(!f))) break;
            }
        t = _i(n, r, e, t, !0);
        return wt(e, t) && (t.hitSide = !0), t;
    }
    function Nl(e, t, n, r) {
        var i,
            o,
            l,
            s = e.doc,
            a = t.left;
        for (
            "page" == r
                ? ((i = Math.min(
                      e.display.wrapper.clientHeight,
                      ue(e).innerHeight || s(e).documentElement.clientHeight
                  )),
                  (i = Math.max(i - 0.5 * sr(e.display), 3)),
                  (o = (0 < n ? t.bottom : t.top) + n * i))
                : "line" == r && (o = 0 < n ? t.bottom + 3 : t.top - 3);
            (l = tr(e, a, o)).outside;

        ) {
            if (n < 0 ? o <= 0 : o >= s.height) {
                l.hitSide = !0;
                break;
            }
            o += 5 * n;
        }
        return l;
    }
    function r(e) {
        (this.cm = e),
            (this.lastAnchorNode =
                this.lastAnchorOffset =
                this.lastFocusNode =
                this.lastFocusOffset =
                    null),
            (this.polling = new de()),
            (this.composing = null),
            (this.gracePeriod = !1),
            (this.readDOMTimeout = null);
    }
    function Ol(e, t) {
        var n = In(e, t.line);
        if (!n || n.hidden) return null;
        var r = W(e.doc, t.line),
            n = Pn(n, r, t.line),
            r = Ge(r, e.doc.direction),
            e = "left",
            r =
                (r && (e = He(r, t.ch) % 2 ? "right" : "left"),
                Un(n.map, t.ch, e));
        return (r.offset = "right" == r.collapse ? r.end : r.start), r;
    }
    function Al(e, t) {
        return t && (e.bad = !0), e;
    }
    function Dl(e, t, n) {
        var r;
        if (t == e.display.lineDiv) {
            if (!(r = e.display.lineDiv.childNodes[n]))
                return Al(e.clipPos(F(e.display.viewTo - 1)), !0);
            (t = null), (n = 0);
        } else
            for (r = t; ; r = r.parentNode) {
                if (!r || r == e.display.lineDiv) return null;
                if (r.parentNode && r.parentNode == e.display.lineDiv) break;
            }
        for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == r) {
                var u = o,
                    o = t,
                    l = n,
                    s = u.text.firstChild,
                    a = !1;
                if (!o || !re(s, o)) return Al(F(H(u.line), 0), !0);
                if (o == s)
                    if (((a = !0), (o = s.childNodes[l]), (l = 0), !o))
                        return Al(
                            F(
                                H((c = u.rest ? z(u.rest) : u.line)),
                                c.text.length
                            ),
                            a
                        );
                var c = 3 == o.nodeType ? o : null,
                    h = o;
                for (
                    c ||
                    1 != o.childNodes.length ||
                    3 != o.firstChild.nodeType ||
                    ((c = o.firstChild), (l = l && c.nodeValue.length));
                    h.parentNode != s;

                )
                    h = h.parentNode;
                var d = u.measure,
                    f = d.maps;
                function p(e, t, n) {
                    for (var r = -1; r < (f ? f.length : 0); r++)
                        for (
                            var i = r < 0 ? d.map : f[r], o = 0;
                            o < i.length;
                            o += 3
                        ) {
                            var l,
                                s,
                                a = i[o + 2];
                            if (a == e || a == t)
                                return (
                                    (l = H(r < 0 ? u.line : u.rest[r])),
                                    (s = i[o] + n),
                                    F(
                                        l,
                                        (s =
                                            n < 0 || a != e
                                                ? i[o + (n ? 1 : 0)]
                                                : s)
                                    )
                                );
                        }
                }
                var g = p(c, h, l);
                if (g) return Al(g, a);
                for (
                    var m = h.nextSibling, v = c ? c.nodeValue.length - l : 0;
                    m;
                    m = m.nextSibling
                ) {
                    if ((g = p(m, m.firstChild, 0)))
                        return Al(F(g.line, g.ch - v), a);
                    v += m.textContent.length;
                }
                for (
                    var y = h.previousSibling, b = l;
                    y;
                    y = y.previousSibling
                ) {
                    if ((g = p(y, y.firstChild, -1)))
                        return Al(F(g.line, g.ch + b), a);
                    b += y.textContent.length;
                }
                return;
            }
        }
    }
    (r.prototype.init = function (e) {
        var t = this,
            o = this,
            l = o.cm,
            s = (o.div = e.lineDiv);
        function a(e) {
            for (var t = e.target; t; t = t.parentNode) {
                if (t == s) return 1;
                if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
            }
        }
        function n(e) {
            if (a(e) && !A(l, e)) {
                if (l.somethingSelected())
                    wl({ lineWise: !1, text: l.getSelections() }),
                        "cut" == e.type && l.replaceSelection("", null, "cut");
                else {
                    if (!l.options.lineWiseCopyCut) return;
                    var t = Ll(l);
                    wl({ lineWise: !0, text: t.text }),
                        "cut" == e.type &&
                            l.operation(function () {
                                l.setSelections(t.ranges, 0, ge),
                                    l.replaceSelection("", null, "cut");
                            });
                }
                if (e.clipboardData) {
                    e.clipboardData.clearData();
                    var n = bl.text.join("\n");
                    if (
                        (e.clipboardData.setData("Text", n),
                        e.clipboardData.getData("Text") == n)
                    )
                        return void e.preventDefault();
                }
                var r = Tl(),
                    n = r.firstChild,
                    i =
                        (l.display.lineSpace.insertBefore(
                            r,
                            l.display.lineSpace.firstChild
                        ),
                        (n.value = bl.text.join("\n")),
                        N(s.ownerDocument));
                se(n),
                    setTimeout(function () {
                        l.display.lineSpace.removeChild(r),
                            i.focus(),
                            i == s && o.showPrimarySelection();
                    }, 50);
            }
        }
        (s.contentEditable = !0),
            kl(
                s,
                l.options.spellcheck,
                l.options.autocorrect,
                l.options.autocapitalize
            ),
            k(s, "paste", function (e) {
                !a(e) ||
                    A(l, e) ||
                    Cl(e, l) ||
                    (v <= 11 &&
                        setTimeout(
                            R(l, function () {
                                return t.updateFromDOM();
                            }),
                            20
                        ));
            }),
            k(s, "compositionstart", function (e) {
                t.composing = { data: e.data, done: !1 };
            }),
            k(s, "compositionupdate", function (e) {
                t.composing || (t.composing = { data: e.data, done: !1 });
            }),
            k(s, "compositionend", function (e) {
                t.composing &&
                    (e.data != t.composing.data && t.readFromDOMSoon(),
                    (t.composing.done = !0));
            }),
            k(s, "touchstart", function () {
                return o.forceCompositionEnd();
            }),
            k(s, "input", function () {
                t.composing || t.readFromDOMSoon();
            }),
            k(s, "copy", n),
            k(s, "cut", n);
    }),
        (r.prototype.screenReaderLabelChanged = function (e) {
            e
                ? this.div.setAttribute("aria-label", e)
                : this.div.removeAttribute("aria-label");
        }),
        (r.prototype.prepareSelection = function () {
            var e = wr(this.cm, !1);
            return (e.focus = N(this.div.ownerDocument) == this.div), e;
        }),
        (r.prototype.showSelection = function (e, t) {
            e &&
                this.cm.display.view.length &&
                ((e.focus || t) && this.showPrimarySelection(),
                this.showMultipleSelections(e));
        }),
        (r.prototype.getSelection = function () {
            return this.cm.display.wrapper.ownerDocument.getSelection();
        }),
        (r.prototype.showPrimarySelection = function () {
            var e = this.getSelection(),
                t = this.cm,
                n = t.doc.sel.primary(),
                r = n.from(),
                n = n.to();
            if (
                t.display.viewTo == t.display.viewFrom ||
                r.line >= t.display.viewTo ||
                n.line < t.display.viewFrom
            )
                e.removeAllRanges();
            else {
                var i = Dl(t, e.anchorNode, e.anchorOffset),
                    o = Dl(t, e.focusNode, e.focusOffset);
                if (
                    !i ||
                    i.bad ||
                    !o ||
                    o.bad ||
                    0 != P(St(i, o), r) ||
                    0 != P(Ct(i, o), n)
                ) {
                    var i = t.display.view,
                        o = (r.line >= t.display.viewFrom && Ol(t, r)) || {
                            node: i[0].measure.map[2],
                            offset: 0,
                        },
                        r = n.line < t.display.viewTo && Ol(t, n);
                    if (
                        (r ||
                            (r = {
                                node: (i = (n = i[i.length - 1].measure).maps
                                    ? n.maps[n.maps.length - 1]
                                    : n.map)[i.length - 1],
                                offset: i[i.length - 2] - i[i.length - 3],
                            }),
                        o && r)
                    ) {
                        var l,
                            n = e.rangeCount && e.getRangeAt(0);
                        try {
                            l = le(o.node, o.offset, r.offset, r.node);
                        } catch (e) {}
                        l &&
                            (!d && t.state.focused
                                ? (e.collapse(o.node, o.offset),
                                  l.collapsed ||
                                      (e.removeAllRanges(), e.addRange(l)))
                                : (e.removeAllRanges(), e.addRange(l)),
                            n && null == e.anchorNode
                                ? e.addRange(n)
                                : d && this.startGracePeriod()),
                            this.rememberSelection();
                    } else e.removeAllRanges();
                }
            }
        }),
        (r.prototype.startGracePeriod = function () {
            var e = this;
            clearTimeout(this.gracePeriod),
                (this.gracePeriod = setTimeout(function () {
                    (e.gracePeriod = !1),
                        e.selectionChanged() &&
                            e.cm.operation(function () {
                                return (e.cm.curOp.selectionChanged = !0);
                            });
                }, 20));
        }),
        (r.prototype.showMultipleSelections = function (e) {
            y(this.cm.display.cursorDiv, e.cursors),
                y(this.cm.display.selectionDiv, e.selection);
        }),
        (r.prototype.rememberSelection = function () {
            var e = this.getSelection();
            (this.lastAnchorNode = e.anchorNode),
                (this.lastAnchorOffset = e.anchorOffset),
                (this.lastFocusNode = e.focusNode),
                (this.lastFocusOffset = e.focusOffset);
        }),
        (r.prototype.selectionInEditor = function () {
            var e = this.getSelection();
            if (!e.rangeCount) return !1;
            e = e.getRangeAt(0).commonAncestorContainer;
            return re(this.div, e);
        }),
        (r.prototype.focus = function () {
            "nocursor" != this.cm.options.readOnly &&
                ((this.selectionInEditor() &&
                    N(this.div.ownerDocument) == this.div) ||
                    this.showSelection(this.prepareSelection(), !0),
                this.div.focus());
        }),
        (r.prototype.blur = function () {
            this.div.blur();
        }),
        (r.prototype.getField = function () {
            return this.div;
        }),
        (r.prototype.supportsTouch = function () {
            return !0;
        }),
        (r.prototype.receivedFocus = function () {
            var e = this,
                t = this;
            this.selectionInEditor()
                ? setTimeout(function () {
                      return e.pollSelection();
                  }, 20)
                : h(this.cm, function () {
                      return (t.cm.curOp.selectionChanged = !0);
                  }),
                this.polling.set(this.cm.options.pollInterval, function e() {
                    t.cm.state.focused &&
                        (t.pollSelection(),
                        t.polling.set(t.cm.options.pollInterval, e));
                });
        }),
        (r.prototype.selectionChanged = function () {
            var e = this.getSelection();
            return (
                e.anchorNode != this.lastAnchorNode ||
                e.anchorOffset != this.lastAnchorOffset ||
                e.focusNode != this.lastFocusNode ||
                e.focusOffset != this.lastFocusOffset
            );
        }),
        (r.prototype.pollSelection = function () {
            if (
                null == this.readDOMTimeout &&
                !this.gracePeriod &&
                this.selectionChanged()
            ) {
                var e,
                    t,
                    n = this.getSelection(),
                    r = this.cm;
                if (
                    $ &&
                    m &&
                    this.cm.display.gutterSpecs.length &&
                    (function (e) {
                        for (var t = e; t; t = t.parentNode)
                            if (/CodeMirror-gutter-wrapper/.test(t.className))
                                return 1;
                        return;
                    })(n.anchorNode)
                )
                    return (
                        this.cm.triggerOnKeyDown({
                            type: "keydown",
                            keyCode: 8,
                            preventDefault: Math.abs,
                        }),
                        this.blur(),
                        void this.focus()
                    );
                this.composing ||
                    (this.rememberSelection(),
                    (e = Dl(r, n.anchorNode, n.anchorOffset)),
                    (t = Dl(r, n.focusNode, n.focusOffset)),
                    e &&
                        t &&
                        h(r, function () {
                            U(r.doc, mi(e, t), ge),
                                (e.bad || t.bad) &&
                                    (r.curOp.selectionChanged = !0);
                        }));
            }
        }),
        (r.prototype.pollContent = function () {
            null != this.readDOMTimeout &&
                (clearTimeout(this.readDOMTimeout),
                (this.readDOMTimeout = null));
            var e,
                t = this.cm,
                n = t.display,
                r = t.doc.sel.primary(),
                i = r.from(),
                r = r.to();
            if (
                (0 == i.ch &&
                    i.line > t.firstLine() &&
                    (i = F(i.line - 1, W(t.doc, i.line - 1).length)),
                r.ch == W(t.doc, r.line).text.length &&
                    r.line < t.lastLine() &&
                    (r = F(r.line + 1, 0)),
                i.line < n.viewFrom || r.line > n.viewTo - 1)
            )
                return !1;
            var o,
                l =
                    i.line == n.viewFrom || 0 == (l = pr(t, i.line))
                        ? ((e = H(n.view[0].line)), n.view[0].node)
                        : ((e = H(n.view[l].line)),
                          n.view[l - 1].node.nextSibling),
                r = pr(t, r.line),
                n =
                    r == n.view.length - 1
                        ? ((o = n.viewTo - 1), n.lineDiv.lastChild)
                        : ((o = H(n.view[r + 1].line) - 1),
                          n.view[r + 1].node.previousSibling);
            if (!l) return !1;
            for (
                var s = t.doc.splitLines(
                        (function (o, e, t, l, s) {
                            var n = "",
                                a = !1,
                                u = o.doc.lineSeparator(),
                                c = !1;
                            function h() {
                                a && ((n += u), c && (n += u), (a = c = !1));
                            }
                            function d(e) {
                                e && (h(), (n += e));
                            }
                            for (
                                ;
                                !(function e(t) {
                                    if (1 == t.nodeType) {
                                        var n = t.getAttribute("cm-text");
                                        if (n) d(n);
                                        else if (
                                            (n = t.getAttribute("cm-marker"))
                                        )
                                            (n = o.findMarks(
                                                F(l, 0),
                                                F(s + 1, 0),
                                                ((i = +n),
                                                function (e) {
                                                    return e.id == i;
                                                })
                                            )).length &&
                                                (n = n[0].find(0)) &&
                                                d(
                                                    pt(
                                                        o.doc,
                                                        n.from,
                                                        n.to
                                                    ).join(u)
                                                );
                                        else if (
                                            "false" !=
                                                t.getAttribute(
                                                    "contenteditable"
                                                ) &&
                                            ((n =
                                                /^(pre|div|p|li|table|br)$/i.test(
                                                    t.nodeName
                                                )),
                                            /^br$/i.test(t.nodeName) ||
                                                0 != t.textContent.length)
                                        ) {
                                            n && h();
                                            for (
                                                var r = 0;
                                                r < t.childNodes.length;
                                                r++
                                            )
                                                e(t.childNodes[r]);
                                            /^(pre|p)$/i.test(t.nodeName) &&
                                                (c = !0),
                                                n && (a = !0);
                                        }
                                    } else
                                        3 == t.nodeType &&
                                            d(
                                                t.nodeValue
                                                    .replace(/\u200b/g, "")
                                                    .replace(/\u00a0/g, " ")
                                            );
                                    var i;
                                })(e),
                                    e != t;

                            )
                                (e = e.nextSibling), (c = !1);
                            return n;
                        })(t, l, n, e, o)
                    ),
                    a = pt(t.doc, F(e, 0), F(o, W(t.doc, o).text.length));
                1 < s.length && 1 < a.length;

            )
                if (z(s) == z(a)) s.pop(), a.pop(), o--;
                else {
                    if (s[0] != a[0]) break;
                    s.shift(), a.shift(), e++;
                }
            for (
                var u = 0,
                    c = 0,
                    h = s[0],
                    d = a[0],
                    f = Math.min(h.length, d.length);
                u < f && h.charCodeAt(u) == d.charCodeAt(u);

            )
                ++u;
            for (
                var p = z(s),
                    g = z(a),
                    m = Math.min(
                        p.length - (1 == s.length ? u : 0),
                        g.length - (1 == a.length ? u : 0)
                    );
                c < m &&
                p.charCodeAt(p.length - c - 1) ==
                    g.charCodeAt(g.length - c - 1);

            )
                ++c;
            if (1 == s.length && 1 == a.length && e == i.line)
                for (
                    ;
                    u &&
                    u > i.ch &&
                    p.charCodeAt(p.length - c - 1) ==
                        g.charCodeAt(g.length - c - 1);

                )
                    u--, c++;
            (s[s.length - 1] = p
                .slice(0, p.length - c)
                .replace(/^\u200b+/, "")),
                (s[0] = s[0].slice(u).replace(/\u200b+$/, ""));
            (r = F(e, u)), (l = F(o, a.length ? z(a).length - c : 0));
            return 1 < s.length || s[0] || P(r, l)
                ? (io(t.doc, s, r, l, "+input"), !0)
                : void 0;
        }),
        (r.prototype.ensurePolled = function () {
            this.forceCompositionEnd();
        }),
        (r.prototype.reset = function () {
            this.forceCompositionEnd();
        }),
        (r.prototype.forceCompositionEnd = function () {
            this.composing &&
                (clearTimeout(this.readDOMTimeout),
                (this.composing = null),
                this.updateFromDOM(),
                this.div.blur(),
                this.div.focus());
        }),
        (r.prototype.readFromDOMSoon = function () {
            var e = this;
            null == this.readDOMTimeout &&
                (this.readDOMTimeout = setTimeout(function () {
                    if (((e.readDOMTimeout = null), e.composing)) {
                        if (!e.composing.done) return;
                        e.composing = null;
                    }
                    e.updateFromDOM();
                }, 80));
        }),
        (r.prototype.updateFromDOM = function () {
            var e = this;
            (!this.cm.isReadOnly() && this.pollContent()) ||
                h(this.cm, function () {
                    return I(e.cm);
                });
        }),
        (r.prototype.setUneditable = function (e) {
            e.contentEditable = "false";
        }),
        (r.prototype.onKeyPress = function (e) {
            0 == e.charCode ||
                this.composing ||
                (e.preventDefault(),
                this.cm.isReadOnly() ||
                    R(this.cm, xl)(
                        this.cm,
                        String.fromCharCode(
                            null == e.charCode ? e.keyCode : e.charCode
                        ),
                        0
                    ));
        }),
        (r.prototype.readOnlyChanged = function (e) {
            this.div.contentEditable = String("nocursor" != e);
        }),
        (r.prototype.onContextMenu = function () {}),
        (r.prototype.resetPosition = function () {}),
        (r.prototype.needsContentAttribute = !0);
    function i(e) {
        (this.cm = e),
            (this.prevInput = ""),
            (this.pollingFast = !1),
            (this.polling = new de()),
            (this.hasSelection = !1),
            (this.composing = null);
    }
    var Wl, Hl, Fl, Pl, El;
    function o(e, t, r, n) {
        (Wl.defaults[e] = t),
            r &&
                (Hl[e] = n
                    ? function (e, t, n) {
                          n != dl && r(e, t, n);
                      }
                    : r);
    }
    (i.prototype.init = function (n) {
        var e = this,
            r = this,
            i = this.cm,
            o = (this.createField(n), this.textarea);
        function t(e) {
            if (!A(i, e)) {
                if (i.somethingSelected())
                    wl({ lineWise: !1, text: i.getSelections() });
                else {
                    if (!i.options.lineWiseCopyCut) return;
                    var t = Ll(i);
                    wl({ lineWise: !0, text: t.text }),
                        "cut" == e.type
                            ? i.setSelections(t.ranges, null, ge)
                            : ((r.prevInput = ""),
                              (o.value = t.text.join("\n")),
                              se(o));
                }
                "cut" == e.type && (i.state.cutIncoming = +new Date());
            }
        }
        n.wrapper.insertBefore(this.wrapper, n.wrapper.firstChild),
            Y && (o.style.width = "0px"),
            k(o, "input", function () {
                w && 9 <= v && e.hasSelection && (e.hasSelection = null),
                    r.poll();
            }),
            k(o, "paste", function (e) {
                A(i, e) ||
                    Cl(e, i) ||
                    ((i.state.pasteIncoming = +new Date()), r.fastPoll());
            }),
            k(o, "cut", t),
            k(o, "copy", t),
            k(n.scroller, "paste", function (e) {
                if (!Nn(n, e) && !A(i, e)) {
                    if (!o.dispatchEvent)
                        return (
                            (i.state.pasteIncoming = +new Date()),
                            void r.focus()
                        );
                    var t = new Event("paste");
                    (t.clipboardData = e.clipboardData), o.dispatchEvent(t);
                }
            }),
            k(n.lineSpace, "selectstart", function (e) {
                Nn(n, e) || D(e);
            }),
            k(o, "compositionstart", function () {
                var e = i.getCursor("from");
                r.composing && r.composing.range.clear(),
                    (r.composing = {
                        start: e,
                        range: i.markText(e, i.getCursor("to"), {
                            className: "CodeMirror-composing",
                        }),
                    });
            }),
            k(o, "compositionend", function () {
                r.composing &&
                    (r.poll(), r.composing.range.clear(), (r.composing = null));
            });
    }),
        (i.prototype.createField = function (e) {
            (this.wrapper = Tl()), (this.textarea = this.wrapper.firstChild);
        }),
        (i.prototype.screenReaderLabelChanged = function (e) {
            e
                ? this.textarea.setAttribute("aria-label", e)
                : this.textarea.removeAttribute("aria-label");
        }),
        (i.prototype.prepareSelection = function () {
            var e,
                t = this.cm,
                n = t.display,
                r = t.doc,
                i = wr(t);
            return (
                t.options.moveInputWithCursor &&
                    ((t = Qn(t, r.sel.primary().head, "div")),
                    (r = n.wrapper.getBoundingClientRect()),
                    (e = n.lineDiv.getBoundingClientRect()),
                    (i.teTop = Math.max(
                        0,
                        Math.min(
                            n.wrapper.clientHeight - 10,
                            t.top + e.top - r.top
                        )
                    )),
                    (i.teLeft = Math.max(
                        0,
                        Math.min(
                            n.wrapper.clientWidth - 10,
                            t.left + e.left - r.left
                        )
                    ))),
                i
            );
        }),
        (i.prototype.showSelection = function (e) {
            var t = this.cm.display;
            y(t.cursorDiv, e.cursors),
                y(t.selectionDiv, e.selection),
                null != e.teTop &&
                    ((this.wrapper.style.top = e.teTop + "px"),
                    (this.wrapper.style.left = e.teLeft + "px"));
        }),
        (i.prototype.reset = function (e) {
            var t, n;
            this.contextMenuPending ||
                this.composing ||
                ((t = this.cm).somethingSelected()
                    ? ((this.prevInput = ""),
                      (n = t.getSelection()),
                      (this.textarea.value = n),
                      t.state.focused && se(this.textarea),
                      w && 9 <= v && (this.hasSelection = n))
                    : e ||
                      ((this.prevInput = this.textarea.value = ""),
                      w && 9 <= v && (this.hasSelection = null)));
        }),
        (i.prototype.getField = function () {
            return this.textarea;
        }),
        (i.prototype.supportsTouch = function () {
            return !1;
        }),
        (i.prototype.focus = function () {
            if (
                "nocursor" != this.cm.options.readOnly &&
                (!_ || N(this.textarea.ownerDocument) != this.textarea)
            )
                try {
                    this.textarea.focus();
                } catch (e) {}
        }),
        (i.prototype.blur = function () {
            this.textarea.blur();
        }),
        (i.prototype.resetPosition = function () {
            this.wrapper.style.top = this.wrapper.style.left = 0;
        }),
        (i.prototype.receivedFocus = function () {
            this.slowPoll();
        }),
        (i.prototype.slowPoll = function () {
            var e = this;
            this.pollingFast ||
                this.polling.set(this.cm.options.pollInterval, function () {
                    e.poll(), e.cm.state.focused && e.slowPoll();
                });
        }),
        (i.prototype.fastPoll = function () {
            var t = !1,
                n = this;
            (n.pollingFast = !0),
                n.polling.set(20, function e() {
                    n.poll() || t
                        ? ((n.pollingFast = !1), n.slowPoll())
                        : ((t = !0), n.polling.set(60, e));
                });
        }),
        (i.prototype.poll = function () {
            var e = this,
                t = this.cm,
                n = this.textarea,
                r = this.prevInput;
            if (
                this.contextMenuPending ||
                !t.state.focused ||
                (nt(n) && !r && !this.composing) ||
                t.isReadOnly() ||
                t.options.disableInput ||
                t.state.keySeq
            )
                return !1;
            var i = n.value;
            if (i == r && !t.somethingSelected()) return !1;
            if (
                (w && 9 <= v && this.hasSelection === i) ||
                (C && /[\uf700-\uf7ff]/.test(i))
            )
                return t.display.input.reset(), !1;
            if (t.doc.sel == t.display.selForContextMenu) {
                var o = i.charCodeAt(0);
                if ((8203 != o || r || (r = "​"), 8666 == o))
                    return this.reset(), this.cm.execCommand("undo");
            }
            for (
                var l = 0, s = Math.min(r.length, i.length);
                l < s && r.charCodeAt(l) == i.charCodeAt(l);

            )
                ++l;
            return (
                h(t, function () {
                    xl(
                        t,
                        i.slice(l),
                        r.length - l,
                        null,
                        e.composing ? "*compose" : null
                    ),
                        1e3 < i.length || -1 < i.indexOf("\n")
                            ? (n.value = e.prevInput = "")
                            : (e.prevInput = i),
                        e.composing &&
                            (e.composing.range.clear(),
                            (e.composing.range = t.markText(
                                e.composing.start,
                                t.getCursor("to"),
                                { className: "CodeMirror-composing" }
                            )));
                }),
                !0
            );
        }),
        (i.prototype.ensurePolled = function () {
            this.pollingFast && this.poll() && (this.pollingFast = !1);
        }),
        (i.prototype.onKeyPress = function () {
            w && 9 <= v && (this.hasSelection = null), this.fastPoll();
        }),
        (i.prototype.onContextMenu = function (e) {
            var n,
                r,
                t,
                i,
                o = this,
                l = o.cm,
                s = l.display,
                a = o.textarea,
                u = (o.contextMenuPending && o.contextMenuPending(), fr(l, e)),
                c = s.scroller.scrollTop;
            function h() {
                var e, t;
                null != a.selectionStart &&
                    ((t = "​" + ((e = l.somethingSelected()) ? a.value : "")),
                    (a.value = "⇚"),
                    (a.value = t),
                    (o.prevInput = e ? "" : "​"),
                    (a.selectionStart = 1),
                    (a.selectionEnd = t.length),
                    (s.selForContextMenu = l.doc.sel));
            }
            function d() {
                var e, t;
                o.contextMenuPending == d &&
                    ((o.contextMenuPending = !1),
                    (o.wrapper.style.cssText = r),
                    (a.style.cssText = n),
                    w &&
                        v < 9 &&
                        s.scrollbars.setScrollTop((s.scroller.scrollTop = c)),
                    null != a.selectionStart &&
                        ((!w || v < 9) && h(),
                        (e = 0),
                        (t = function () {
                            s.selForContextMenu == l.doc.sel &&
                            0 == a.selectionStart &&
                            0 < a.selectionEnd &&
                            "​" == o.prevInput
                                ? R(l, Zi)(l)
                                : e++ < 10
                                ? (s.detectingSelectAll = setTimeout(t, 500))
                                : ((s.selForContextMenu = null),
                                  s.input.reset());
                        }),
                        (s.detectingSelectAll = setTimeout(t, 200))));
            }
            u &&
                !K &&
                (l.options.resetSelectionOnContextMenu &&
                    -1 == l.doc.sel.contains(u) &&
                    R(l, U)(l.doc, mi(u), ge),
                (n = a.style.cssText),
                (r = o.wrapper.style.cssText),
                (u = o.wrapper.offsetParent.getBoundingClientRect()),
                (o.wrapper.style.cssText = "position: static"),
                (a.style.cssText =
                    "position: absolute; width: 30px; height: 30px;\n      top: " +
                    (e.clientY - u.top - 5) +
                    "px; left: " +
                    (e.clientX - u.left - 5) +
                    "px;\n      z-index: 1000; background: " +
                    (w ? "rgba(255, 255, 255, .05)" : "transparent") +
                    ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
                x && (t = a.ownerDocument.defaultView.scrollY),
                s.input.focus(),
                x && a.ownerDocument.defaultView.scrollTo(null, t),
                s.input.reset(),
                l.somethingSelected() || (a.value = o.prevInput = " "),
                (o.contextMenuPending = d),
                (s.selForContextMenu = l.doc.sel),
                clearTimeout(s.detectingSelectAll),
                w && 9 <= v && h(),
                Q
                    ? (_e(e),
                      (i = function () {
                          T(window, "mouseup", i), setTimeout(d, 20);
                      }),
                      k(window, "mouseup", i))
                    : setTimeout(d, 50));
        }),
        (i.prototype.readOnlyChanged = function (e) {
            e || this.reset(),
                (this.textarea.disabled = "nocursor" == e),
                (this.textarea.readOnly = !!e);
        }),
        (i.prototype.setUneditable = function () {}),
        (i.prototype.needsContentAttribute = !1),
        (Hl = (Wl = p).optionHandlers),
        (Wl.defineOption = o),
        (Wl.Init = dl),
        o(
            "value",
            "",
            function (e, t) {
                return e.setValue(t);
            },
            !0
        ),
        o(
            "mode",
            null,
            function (e, t) {
                (e.doc.modeOption = t), xi(e);
            },
            !0
        ),
        o("indentUnit", 2, xi, !0),
        o("indentWithTabs", !1),
        o("smartIndent", !0),
        o(
            "tabSize",
            4,
            function (e) {
                Ci(e), jn(e), I(e);
            },
            !0
        ),
        o("lineSeparator", null, function (e, r) {
            if ((e.doc.lineSep = r)) {
                var i = [],
                    o = e.doc.first;
                e.doc.iter(function (e) {
                    for (var t = 0; ; ) {
                        var n = e.text.indexOf(r, t);
                        if (-1 == n) break;
                        (t = n + r.length), i.push(F(o, n));
                    }
                    o++;
                });
                for (var t = i.length - 1; 0 <= t; t--)
                    io(e.doc, r, i[t], F(i[t].line, i[t].ch + r.length));
            }
        }),
        o(
            "specialChars",
            /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
            function (e, t, n) {
                (e.state.specialChars = new RegExp(
                    t.source + (t.test("\t") ? "" : "|\t"),
                    "g"
                )),
                    n != dl && e.refresh();
            }
        ),
        o(
            "specialCharPlaceholder",
            dn,
            function (e) {
                return e.refresh();
            },
            !0
        ),
        o("electricChars", !0),
        o(
            "inputStyle",
            _ ? "contenteditable" : "textarea",
            function () {
                throw new Error(
                    "inputStyle can not (yet) be changed in a running editor"
                );
            },
            !0
        ),
        o(
            "spellcheck",
            !1,
            function (e, t) {
                return (e.getInputField().spellcheck = t);
            },
            !0
        ),
        o(
            "autocorrect",
            !1,
            function (e, t) {
                return (e.getInputField().autocorrect = t);
            },
            !0
        ),
        o(
            "autocapitalize",
            !1,
            function (e, t) {
                return (e.getInputField().autocapitalize = t);
            },
            !0
        ),
        o("rtlMoveVisually", !a),
        o("wholeLineUpdateBefore", !0),
        o(
            "theme",
            "default",
            function (e) {
                hl(e), ai(e);
            },
            !0
        ),
        o("keyMap", "default", function (e, t, n) {
            (t = Ro(t)), (n = n != dl && Ro(n));
            n && n.detach && n.detach(e, t), t.attach && t.attach(e, n || null);
        }),
        o("extraKeys", null),
        o("configureMouse", null),
        o("lineWrapping", !1, ml, !0),
        o(
            "gutters",
            [],
            function (e, t) {
                (e.display.gutterSpecs = li(t, e.options.lineNumbers)), ai(e);
            },
            !0
        ),
        o(
            "fixedGutter",
            !0,
            function (e, t) {
                (e.display.gutters.style.left = t ? cr(e.display) + "px" : "0"),
                    e.refresh();
            },
            !0
        ),
        o(
            "coverGutterNextToScrollbar",
            !1,
            function (e) {
                return Vr(e);
            },
            !0
        ),
        o(
            "scrollbarStyle",
            "native",
            function (e) {
                Xr(e),
                    Vr(e),
                    e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                    e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
            },
            !0
        ),
        o(
            "lineNumbers",
            !1,
            function (e, t) {
                (e.display.gutterSpecs = li(e.options.gutters, t)), ai(e);
            },
            !0
        ),
        o("firstLineNumber", 1, ai, !0),
        o(
            "lineNumberFormatter",
            function (e) {
                return e;
            },
            ai,
            !0
        ),
        o("showCursorWhenSelecting", !1, br, !0),
        o("resetSelectionOnContextMenu", !0),
        o("lineWiseCopyCut", !0),
        o("pasteLinesPerSelection", !0),
        o("selectionsMayTouch", !1),
        o("readOnly", !1, function (e, t) {
            "nocursor" == t && (Mr(e), e.display.input.blur()),
                e.display.input.readOnlyChanged(t);
        }),
        o("screenReaderLabel", null, function (e, t) {
            e.display.input.screenReaderLabelChanged((t = "" === t ? null : t));
        }),
        o(
            "disableInput",
            !1,
            function (e, t) {
                t || e.display.input.reset();
            },
            !0
        ),
        o("dragDrop", !0, gl),
        o("allowDropFileTypes", null),
        o("cursorBlinkRate", 530),
        o("cursorScrollMargin", 0),
        o("cursorHeight", 1, br, !0),
        o("singleCursorHeightPerLine", !0, br, !0),
        o("workTime", 100),
        o("workDelay", 100),
        o("flattenSpans", !0, Ci, !0),
        o("addModeClass", !1, Ci, !0),
        o("pollInterval", 100),
        o("undoDepth", 200, function (e, t) {
            return (e.doc.history.undoDepth = t);
        }),
        o("historyEventDelay", 1250),
        o(
            "viewportMargin",
            10,
            function (e) {
                return e.refresh();
            },
            !0
        ),
        o("maxHighlightLength", 1e4, Ci, !0),
        o("moveInputWithCursor", !0, function (e, t) {
            t || e.display.input.resetPosition();
        }),
        o("tabindex", null, function (e, t) {
            return (e.display.input.getField().tabIndex = t || "");
        }),
        o("autofocus", null),
        o(
            "direction",
            "ltr",
            function (e, t) {
                return e.doc.setDirection(t);
            },
            !0
        ),
        o("phrases", null),
        (Pl = (Fl = p).optionHandlers),
        (El = Fl.helpers = {}),
        (Fl.prototype = {
            constructor: Fl,
            focus: function () {
                ue(this).focus(), this.display.input.focus();
            },
            setOption: function (e, t) {
                var n = this.options,
                    r = n[e];
                (n[e] == t && "mode" != e) ||
                    ((n[e] = t),
                    Pl.hasOwnProperty(e) && R(this, Pl[e])(this, t, r),
                    O(this, "optionChange", this, e));
            },
            getOption: function (e) {
                return this.options[e];
            },
            getDoc: function () {
                return this.doc;
            },
            addKeyMap: function (e, t) {
                this.state.keyMaps[t ? "push" : "unshift"](Ro(e));
            },
            removeKeyMap: function (e) {
                for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                    if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
            },
            addOverlay: t(function (e, t) {
                var n = e.token ? e : Fl.getMode(this.options, e);
                if (n.startState)
                    throw new Error("Overlays may not be stateful.");
                for (
                    var r = this.state.overlays,
                        n = {
                            mode: n,
                            modeSpec: e,
                            opaque: t && t.opaque,
                            priority: (t && t.priority) || 0,
                        },
                        i = function (e) {
                            return e.priority;
                        },
                        o = 0,
                        l = i(n);
                    o < r.length && i(r[o]) <= l;

                )
                    o++;
                r.splice(o, 0, n), this.state.modeGen++, I(this);
            }),
            removeOverlay: t(function (e) {
                for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                    var r = t[n].modeSpec;
                    if (r == e || ("string" == typeof e && r.name == e))
                        return (
                            t.splice(n, 1), this.state.modeGen++, void I(this)
                        );
                }
            }),
            indentLine: t(function (e, t, n) {
                "string" != typeof t &&
                    "number" != typeof t &&
                    (t =
                        null == t
                            ? this.options.smartIndent
                                ? "smart"
                                : "prev"
                            : t
                            ? "add"
                            : "subtract"),
                    yt(this.doc, e) && yl(this, e, t, n);
            }),
            indentSelection: t(function (e) {
                for (
                    var t = this.doc.sel.ranges, n = -1, r = 0;
                    r < t.length;
                    r++
                ) {
                    var i = t[r];
                    if (i.empty())
                        i.head.line > n &&
                            (yl(this, i.head.line, e, !0),
                            (n = i.head.line),
                            r == this.doc.sel.primIndex && Hr(this));
                    else {
                        for (
                            var o = i.from(),
                                i = i.to(),
                                l = Math.max(n, o.line),
                                n =
                                    Math.min(
                                        this.lastLine(),
                                        i.line - (i.ch ? 0 : 1)
                                    ) + 1,
                                s = l;
                            s < n;
                            ++s
                        )
                            yl(this, s, e);
                        i = this.doc.sel.ranges;
                        0 == o.ch &&
                            t.length == i.length &&
                            0 < i[r].from().ch &&
                            Gi(this.doc, r, new G(o, i[r].to()), ge);
                    }
                }
            }),
            getTokenAt: function (e, t) {
                return Pt(this, e, t);
            },
            getLineTokens: function (e, t) {
                return Pt(this, F(e), t, !0);
            },
            getTokenTypeAt: function (e) {
                e = E(this.doc, e);
                var t,
                    n = Ot(this, W(this.doc, e.line)),
                    r = 0,
                    i = (n.length - 1) / 2,
                    o = e.ch;
                if (0 == o) t = n[2];
                else
                    for (;;) {
                        var l = (r + i) >> 1;
                        if ((l ? n[2 * l - 1] : 0) >= o) i = l;
                        else {
                            if (!(n[2 * l + 1] < o)) {
                                t = n[2 * l + 2];
                                break;
                            }
                            r = 1 + l;
                        }
                    }
                e = t ? t.indexOf("overlay ") : -1;
                return e < 0 ? t : 0 == e ? null : t.slice(0, e - 1);
            },
            getModeAt: function (e) {
                var t = this.doc.mode;
                return t.innerMode
                    ? Fl.innerMode(t, this.getTokenAt(e).state).mode
                    : t;
            },
            getHelper: function (e, t) {
                return this.getHelpers(e, t)[0];
            },
            getHelpers: function (e, t) {
                var n = [];
                if (!El.hasOwnProperty(t)) return n;
                var r = El[t],
                    i = this.getModeAt(e);
                if ("string" == typeof i[t]) r[i[t]] && n.push(r[i[t]]);
                else if (i[t])
                    for (var o = 0; o < i[t].length; o++) {
                        var l = r[i[t][o]];
                        l && n.push(l);
                    }
                else
                    i.helperType && r[i.helperType]
                        ? n.push(r[i.helperType])
                        : r[i.name] && n.push(r[i.name]);
                for (var s = 0; s < r._global.length; s++) {
                    var a = r._global[s];
                    a.pred(i, this) && -1 == L(n, a.val) && n.push(a.val);
                }
                return n;
            },
            getStateAfter: function (e, t) {
                var n = this.doc;
                return At(
                    this,
                    (e = Lt(n, null == e ? n.first + n.size - 1 : e)) + 1,
                    t
                ).state;
            },
            cursorCoords: function (e, t) {
                var n = this.doc.sel.primary(),
                    e =
                        null == e
                            ? n.head
                            : "object" == typeof e
                            ? E(this.doc, e)
                            : e
                            ? n.from()
                            : n.to();
                return Qn(this, e, t || "page");
            },
            charCoords: function (e, t) {
                return Zn(this, E(this.doc, e), t || "page");
            },
            coordsChar: function (e, t) {
                return tr(this, (e = qn(this, e, t || "page")).left, e.top);
            },
            lineAtHeight: function (e, t) {
                return (
                    (e = qn(this, { top: e, left: 0 }, t || "page").top),
                    vt(this.doc, e + this.display.viewOffset)
                );
            },
            heightAtLine: function (e, t, n) {
                var r = !1,
                    i =
                        "number" == typeof e
                            ? ((i = this.doc.first + this.doc.size - 1),
                              e < this.doc.first
                                  ? (e = this.doc.first)
                                  : i < e && ((e = i), (r = !0)),
                              W(this.doc, e))
                            : e;
                return (
                    _n(this, i, { top: 0, left: 0 }, t || "page", n || r).top +
                    (r ? this.doc.height - rn(i) : 0)
                );
            },
            defaultTextHeight: function () {
                return sr(this.display);
            },
            defaultCharWidth: function () {
                return ar(this.display);
            },
            getViewport: function () {
                return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function (e, t, n, r, i) {
                var o,
                    l,
                    s = this.display,
                    a = (e = Qn(this, E(this.doc, e))).bottom,
                    u = e.left;
                (t.style.position = "absolute"),
                    t.setAttribute("cm-ignore-events", "true"),
                    this.display.input.setUneditable(t),
                    s.sizer.appendChild(t),
                    "over" == r
                        ? (a = e.top)
                        : ("above" != r && "near" != r) ||
                          ((l = Math.max(
                              s.wrapper.clientHeight,
                              this.doc.height
                          )),
                          (o = Math.max(
                              s.sizer.clientWidth,
                              s.lineSpace.clientWidth
                          )),
                          ("above" == r || e.bottom + t.offsetHeight > l) &&
                          e.top > t.offsetHeight
                              ? (a = e.top - t.offsetHeight)
                              : e.bottom + t.offsetHeight <= l &&
                                (a = e.bottom),
                          u + t.offsetWidth > o && (u = o - t.offsetWidth)),
                    (t.style.top = a + "px"),
                    (t.style.left = t.style.right = ""),
                    "right" == i
                        ? ((u = s.sizer.clientWidth - t.offsetWidth),
                          (t.style.right = "0px"))
                        : ("left" == i
                              ? (u = 0)
                              : "middle" == i &&
                                (u = (s.sizer.clientWidth - t.offsetWidth) / 2),
                          (t.style.left = u + "px")),
                    n &&
                        ((r = this),
                        (l = {
                            left: u,
                            top: a,
                            right: u + t.offsetWidth,
                            bottom: a + t.offsetHeight,
                        }),
                        null != (l = Dr(r, l)).scrollTop && Ir(r, l.scrollTop),
                        null != l.scrollLeft && Rr(r, l.scrollLeft));
            },
            triggerOnKeyDown: t(el),
            triggerOnKeyPress: t(nl),
            triggerOnKeyUp: tl,
            triggerOnMouseDown: t(ll),
            execCommand: function (e) {
                if (jo.hasOwnProperty(e)) return jo[e].call(null, this);
            },
            triggerElectric: t(function (e) {
                Sl(this, e);
            }),
            findPosH: function (e, t, n, r) {
                for (
                    var i = 1,
                        o = (t < 0 && ((i = -1), (t = -t)), E(this.doc, e)),
                        l = 0;
                    l < t && !(o = Ml(this.doc, o, i, n, r)).hitSide;
                    ++l
                );
                return o;
            },
            moveH: t(function (t, n) {
                var r = this;
                this.extendSelectionsBy(function (e) {
                    return r.display.shift || r.doc.extend || e.empty()
                        ? Ml(r.doc, e.head, t, n, r.options.rtlMoveVisually)
                        : t < 0
                        ? e.from()
                        : e.to();
                }, ve);
            }),
            deleteH: t(function (n, r) {
                var e = this.doc.sel,
                    i = this.doc;
                e.somethingSelected()
                    ? i.replaceSelection("", null, "+delete")
                    : Bo(this, function (e) {
                          var t = Ml(i, e.head, n, r, !1);
                          return n < 0
                              ? { from: t, to: e.head }
                              : { from: e.head, to: t };
                      });
            }),
            findPosV: function (e, t, n, r) {
                for (
                    var i = 1,
                        o = r,
                        l = (t < 0 && ((i = -1), (t = -t)), E(this.doc, e)),
                        s = 0;
                    s < t;
                    ++s
                ) {
                    var a = Qn(this, l, "div");
                    if (
                        (null == o ? (o = a.left) : (a.left = o),
                        (l = Nl(this, a, i, n)).hitSide)
                    )
                        break;
                }
                return l;
            },
            moveV: t(function (r, i) {
                var o = this,
                    l = this.doc,
                    s = [],
                    a =
                        !this.display.shift &&
                        !l.extend &&
                        l.sel.somethingSelected();
                if (
                    (l.extendSelectionsBy(function (e) {
                        if (a) return r < 0 ? e.from() : e.to();
                        var t = Qn(o, e.head, "div"),
                            n =
                                (null != e.goalColumn &&
                                    (t.left = e.goalColumn),
                                s.push(t.left),
                                Nl(o, t, r, i));
                        return (
                            "page" == i &&
                                e == l.sel.primary() &&
                                Wr(o, Zn(o, n, "div").top - t.top),
                            n
                        );
                    }, ve),
                    s.length)
                )
                    for (var e = 0; e < l.sel.ranges.length; e++)
                        l.sel.ranges[e].goalColumn = s[e];
            }),
            findWordAt: function (e) {
                var t = W(this.doc, e.line).text,
                    n = e.ch,
                    r = e.ch;
                if (t) {
                    for (
                        var i = this.getHelper(e, "wordChars"),
                            o =
                                (("before" != e.sticky && r != t.length) || !n
                                    ? ++r
                                    : --n,
                                t.charAt(n)),
                            l = Te(o, i)
                                ? function (e) {
                                      return Te(e, i);
                                  }
                                : /\s/.test(o)
                                ? function (e) {
                                      return /\s/.test(e);
                                  }
                                : function (e) {
                                      return !/\s/.test(e) && !Te(e);
                                  };
                        0 < n && l(t.charAt(n - 1));

                    )
                        --n;
                    for (; r < t.length && l(t.charAt(r)); ) ++r;
                }
                return new G(F(e.line, n), F(e.line, r));
            },
            toggleOverwrite: function (e) {
                (null != e && e == this.state.overwrite) ||
                    (((this.state.overwrite = !this.state.overwrite) ? ie : ee)(
                        this.display.cursorDiv,
                        "CodeMirror-overwrite"
                    ),
                    O(this, "overwriteToggle", this, this.state.overwrite));
            },
            hasFocus: function () {
                return this.display.input.getField() == N(ae(this));
            },
            isReadOnly: function () {
                return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: t(function (e, t) {
                Fr(this, e, t);
            }),
            getScrollInfo: function () {
                var e = this.display.scroller;
                return {
                    left: e.scrollLeft,
                    top: e.scrollTop,
                    height: e.scrollHeight - Wn(this) - this.display.barHeight,
                    width: e.scrollWidth - Wn(this) - this.display.barWidth,
                    clientHeight: Fn(this),
                    clientWidth: Hn(this),
                };
            },
            scrollIntoView: t(function (e, t) {
                var n;
                null == e
                    ? ((e = { from: this.doc.sel.primary().head, to: null }),
                      null == t && (t = this.options.cursorScrollMargin))
                    : "number" == typeof e
                    ? (e = { from: F(e, 0), to: null })
                    : null == e.from && (e = { from: e, to: null }),
                    e.to || (e.to = e.from),
                    (e.margin = t || 0),
                    null != e.from.line
                        ? ((t = e), Pr((n = this)), (n.curOp.scrollToPos = t))
                        : Er(this, e.from, e.to, e.margin);
            }),
            setSize: t(function (e, t) {
                function n(e) {
                    return "number" == typeof e || /^\d+$/.test(String(e))
                        ? e + "px"
                        : e;
                }
                var r = this,
                    i =
                        (null != e && (this.display.wrapper.style.width = n(e)),
                        null != t && (this.display.wrapper.style.height = n(t)),
                        this.options.lineWrapping && Kn(this),
                        this.display.viewFrom);
                this.doc.iter(i, this.display.viewTo, function (e) {
                    if (e.widgets)
                        for (var t = 0; t < e.widgets.length; t++)
                            if (e.widgets[t].noHScroll) {
                                gr(r, i, "widget");
                                break;
                            }
                    ++i;
                }),
                    (this.curOp.forceUpdate = !0),
                    O(this, "refresh", this);
            }),
            operation: function (e) {
                return h(this, e);
            },
            startOperation: function () {
                return $r(this);
            },
            endOperation: function () {
                return _r(this);
            },
            refresh: t(function () {
                var e = this.display.cachedTextHeight;
                I(this),
                    (this.curOp.forceUpdate = !0),
                    jn(this),
                    Fr(this, this.doc.scrollLeft, this.doc.scrollTop),
                    ni(this.display),
                    (null == e ||
                        0.5 < Math.abs(e - sr(this.display)) ||
                        this.options.lineWrapping) &&
                        dr(this),
                    O(this, "refresh", this);
            }),
            swapDoc: t(function (e) {
                var t = this.doc;
                return (
                    (t.cm = null),
                    this.state.selectingText && this.state.selectingText(),
                    Ti(this, e),
                    jn(this),
                    this.display.input.reset(),
                    Fr(this, e.scrollLeft, e.scrollTop),
                    (this.curOp.forceScroll = !0),
                    b(this, "swapDoc", this, t),
                    t
                );
            }),
            phrase: function (e) {
                var t = this.options.phrases;
                return t && Object.prototype.hasOwnProperty.call(t, e)
                    ? t[e]
                    : e;
            },
            getInputField: function () {
                return this.display.input.getField();
            },
            getWrapperElement: function () {
                return this.display.wrapper;
            },
            getScrollerElement: function () {
                return this.display.scroller;
            },
            getGutterElement: function () {
                return this.display.gutters;
            },
        }),
        Xe(Fl),
        (Fl.registerHelper = function (e, t, n) {
            El.hasOwnProperty(e) || (El[e] = Fl[e] = { _global: [] }),
                (El[e][t] = n);
        }),
        (Fl.registerGlobalHelper = function (e, t, n, r) {
            Fl.registerHelper(e, t, r), El[e]._global.push({ pred: n, val: r });
        });
    var Il,
        zl = "iter insert remove copy getEditor constructor".split(" ");
    for (Il in f.prototype)
        f.prototype.hasOwnProperty(Il) &&
            L(zl, Il) < 0 &&
            (p.prototype[Il] = (function (e) {
                return function () {
                    return e.apply(this.doc, arguments);
                };
            })(f.prototype[Il]));
    return (
        Xe(f),
        (p.inputStyles = { textarea: i, contenteditable: r }),
        (p.defineMode = function (e) {
            p.defaults.mode || "null" == e || (p.defaults.mode = e),
                function (e, t) {
                    2 < arguments.length &&
                        (t.dependencies = Array.prototype.slice.call(
                            arguments,
                            2
                        )),
                        (ot[e] = t);
                }.apply(this, arguments);
        }),
        (p.defineMIME = function (e, t) {
            lt[e] = t;
        }),
        p.defineMode("null", function () {
            return {
                token: function (e) {
                    return e.skipToEnd();
                },
            };
        }),
        p.defineMIME("text/plain", "null"),
        (p.defineExtension = function (e, t) {
            p.prototype[e] = t;
        }),
        (p.defineDocExtension = function (e, t) {
            f.prototype[e] = t;
        }),
        (p.fromTextArea = function (t, n) {
            var e;
            function r() {
                t.value = s.getValue();
            }
            if (
                (((n = n ? he(n) : {}).value = t.value),
                !n.tabindex && t.tabIndex && (n.tabindex = t.tabIndex),
                !n.placeholder &&
                    t.placeholder &&
                    (n.placeholder = t.placeholder),
                null == n.autofocus &&
                    ((e = N(t.ownerDocument)),
                    (n.autofocus =
                        e == t ||
                        (null != t.getAttribute("autofocus") &&
                            e == document.body))),
                t.form && (k(t.form, "submit", r), !n.leaveSubmitMethodAlone))
            ) {
                var i = t.form,
                    o = i.submit;
                try {
                    var l = (i.submit = function () {
                        r(), (i.submit = o), i.submit(), (i.submit = l);
                    });
                } catch (e) {}
            }
            (n.finishInit = function (e) {
                (e.save = r),
                    (e.getTextArea = function () {
                        return t;
                    }),
                    (e.toTextArea = function () {
                        (e.toTextArea = isNaN),
                            r(),
                            t.parentNode.removeChild(e.getWrapperElement()),
                            (t.style.display = ""),
                            t.form &&
                                (T(t.form, "submit", r),
                                n.leaveSubmitMethodAlone ||
                                    "function" != typeof t.form.submit ||
                                    (t.form.submit = o));
                    });
            }),
                (t.style.display = "none");
            var s = p(function (e) {
                return t.parentNode.insertBefore(e, t.nextSibling);
            }, n);
            return s;
        }),
        ((e = p).off = T),
        (e.on = k),
        (e.wheelEventPixels = fi),
        (e.Doc = f),
        (e.splitLines = tt),
        (e.countColumn = S),
        (e.findColumn = ye),
        (e.isWordChar = ke),
        (e.Pass = pe),
        (e.signal = O),
        (e.Line = sn),
        (e.changeEnd = vi),
        (e.scrollbarModel = jr),
        (e.Pos = F),
        (e.cmpPos = P),
        (e.modes = ot),
        (e.mimeModes = lt),
        (e.resolveMode = st),
        (e.getMode = at),
        (e.modeExtensions = ut),
        (e.extendMode = ct),
        (e.copyState = ht),
        (e.startState = ft),
        (e.innerMode = dt),
        (e.commands = jo),
        (e.keyMap = Wo),
        (e.keyName = zo),
        (e.isModifierKey = Eo),
        (e.lookupKey = Po),
        (e.normalizeKeyMap = Fo),
        (e.StringStream = g),
        (e.SharedTextMarker = vo),
        (e.TextMarker = po),
        (e.LineWidget = ho),
        (e.e_preventDefault = D),
        (e.e_stopPropagation = Ye),
        (e.e_stop = _e),
        (e.addClass = ie),
        (e.contains = re),
        (e.rmClass = ee),
        (e.keyNames = No),
        (p.version = "6.65.7"),
        p
    );
});


// PERL.MIN.JS
!(function (e) {
    "object" == typeof exports && "object" == typeof module
        ? e(require("../../lib/codemirror"))
        : "function" == typeof define && define.amd
        ? define(["../../lib/codemirror"], e)
        : e(CodeMirror);
})(function (e) {
    "use strict";
    function R(e, t) {
        return e.string.charAt(e.pos + (t || 0));
    }
    function c(e, t) {
        var r;
        return t
            ? ((r = e.pos - t), e.string.substr(0 <= r ? r : 0, t))
            : e.string.substr(0, e.pos - 1);
    }
    function p(e, t) {
        var r = e.string.length,
            n = r - e.pos + 1;
        return e.string.substr(e.pos, t && t < r ? t : n);
    }
    function _(e, t) {
        var r,
            t = e.pos + t;
        t <= 0
            ? (e.pos = 0)
            : t >= (r = e.string.length - 1)
            ? (e.pos = r)
            : (e.pos = t);
    }
    e.defineMode("perl", function () {
        var a = {
                "->": 4,
                "++": 4,
                "--": 4,
                "**": 4,
                "=~": 4,
                "!~": 4,
                "*": 4,
                "/": 4,
                "%": 4,
                x: 4,
                "+": 4,
                "-": 4,
                ".": 4,
                "<<": 4,
                ">>": 4,
                "<": 4,
                ">": 4,
                "<=": 4,
                ">=": 4,
                lt: 4,
                gt: 4,
                le: 4,
                ge: 4,
                "==": 4,
                "!=": 4,
                "<=>": 4,
                eq: 4,
                ne: 4,
                cmp: 4,
                "~~": 4,
                "&": 4,
                "|": 4,
                "^": 4,
                "&&": 4,
                "||": 4,
                "//": 4,
                "..": 4,
                "...": 4,
                "?": 4,
                ":": 4,
                "=": 4,
                "+=": 4,
                "-=": 4,
                "*=": 4,
                ",": 4,
                "=>": 4,
                "::": 4,
                not: 4,
                and: 4,
                or: 4,
                xor: 4,
                BEGIN: [5, 1],
                END: [5, 1],
                PRINT: [5, 1],
                PRINTF: [5, 1],
                GETC: [5, 1],
                READ: [5, 1],
                READLINE: [5, 1],
                DESTROY: [5, 1],
                TIE: [5, 1],
                TIEHANDLE: [5, 1],
                UNTIE: [5, 1],
                STDIN: 5,
                STDIN_TOP: 5,
                STDOUT: 5,
                STDOUT_TOP: 5,
                STDERR: 5,
                STDERR_TOP: 5,
                $ARG: 5,
                $_: 5,
                "@ARG": 5,
                "@_": 5,
                $LIST_SEPARATOR: 5,
                '$"': 5,
                $PROCESS_ID: 5,
                $PID: 5,
                $$: 5,
                $REAL_GROUP_ID: 5,
                $GID: 5,
                "$(": 5,
                $EFFECTIVE_GROUP_ID: 5,
                $EGID: 5,
                "$)": 5,
                $PROGRAM_NAME: 5,
                $0: 5,
                $SUBSCRIPT_SEPARATOR: 5,
                $SUBSEP: 5,
                "$;": 5,
                $REAL_USER_ID: 5,
                $UID: 5,
                "$<": 5,
                $EFFECTIVE_USER_ID: 5,
                $EUID: 5,
                "$>": 5,
                $a: 5,
                $b: 5,
                $COMPILING: 5,
                "$^C": 5,
                $DEBUGGING: 5,
                "$^D": 5,
                "${^ENCODING}": 5,
                $ENV: 5,
                "%ENV": 5,
                $SYSTEM_FD_MAX: 5,
                "$^F": 5,
                "@F": 5,
                "${^GLOBAL_PHASE}": 5,
                "$^H": 5,
                "%^H": 5,
                "@INC": 5,
                "%INC": 5,
                $INPLACE_EDIT: 5,
                "$^I": 5,
                "$^M": 5,
                $OSNAME: 5,
                "$^O": 5,
                "${^OPEN}": 5,
                $PERLDB: 5,
                "$^P": 5,
                $SIG: 5,
                "%SIG": 5,
                $BASETIME: 5,
                "$^T": 5,
                "${^TAINT}": 5,
                "${^UNICODE}": 5,
                "${^UTF8CACHE}": 5,
                "${^UTF8LOCALE}": 5,
                $PERL_VERSION: 5,
                "$^V": 5,
                "${^WIN32_SLOPPY_STAT}": 5,
                $EXECUTABLE_NAME: 5,
                "$^X": 5,
                $1: 5,
                $MATCH: 5,
                "$&": 5,
                "${^MATCH}": 5,
                $PREMATCH: 5,
                "$`": 5,
                "${^PREMATCH}": 5,
                $POSTMATCH: 5,
                "$'": 5,
                "${^POSTMATCH}": 5,
                $LAST_PAREN_MATCH: 5,
                "$+": 5,
                $LAST_SUBMATCH_RESULT: 5,
                "$^N": 5,
                "@LAST_MATCH_END": 5,
                "@+": 5,
                "%LAST_PAREN_MATCH": 5,
                "%+": 5,
                "@LAST_MATCH_START": 5,
                "@-": 5,
                "%LAST_MATCH_START": 5,
                "%-": 5,
                $LAST_REGEXP_CODE_RESULT: 5,
                "$^R": 5,
                "${^RE_DEBUG_FLAGS}": 5,
                "${^RE_TRIE_MAXBUF}": 5,
                $ARGV: 5,
                "@ARGV": 5,
                ARGV: 5,
                ARGVOUT: 5,
                $OUTPUT_FIELD_SEPARATOR: 5,
                $OFS: 5,
                "$,": 5,
                $INPUT_LINE_NUMBER: 5,
                $NR: 5,
                "$.": 5,
                $INPUT_RECORD_SEPARATOR: 5,
                $RS: 5,
                "$/": 5,
                $OUTPUT_RECORD_SEPARATOR: 5,
                $ORS: 5,
                "$\\": 5,
                $OUTPUT_AUTOFLUSH: 5,
                "$|": 5,
                $ACCUMULATOR: 5,
                "$^A": 5,
                $FORMAT_FORMFEED: 5,
                "$^L": 5,
                $FORMAT_PAGE_NUMBER: 5,
                "$%": 5,
                $FORMAT_LINES_LEFT: 5,
                "$-": 5,
                $FORMAT_LINE_BREAK_CHARACTERS: 5,
                "$:": 5,
                $FORMAT_LINES_PER_PAGE: 5,
                "$=": 5,
                $FORMAT_TOP_NAME: 5,
                "$^": 5,
                $FORMAT_NAME: 5,
                "$~": 5,
                "${^CHILD_ERROR_NATIVE}": 5,
                $EXTENDED_OS_ERROR: 5,
                "$^E": 5,
                $EXCEPTIONS_BEING_CAUGHT: 5,
                "$^S": 5,
                $WARNING: 5,
                "$^W": 5,
                "${^WARNING_BITS}": 5,
                $OS_ERROR: 5,
                $ERRNO: 5,
                "$!": 5,
                "%OS_ERROR": 5,
                "%ERRNO": 5,
                "%!": 5,
                $CHILD_ERROR: 5,
                "$?": 5,
                $EVAL_ERROR: 5,
                "$@": 5,
                $OFMT: 5,
                "$#": 5,
                "$*": 5,
                $ARRAY_BASE: 5,
                "$[": 5,
                $OLD_PERL_VERSION: 5,
                "$]": 5,
                if: [1, 1],
                elsif: [1, 1],
                else: [1, 1],
                while: [1, 1],
                unless: [1, 1],
                for: [1, 1],
                foreach: [1, 1],
                abs: 1,
                accept: 1,
                alarm: 1,
                atan2: 1,
                bind: 1,
                binmode: 1,
                bless: 1,
                bootstrap: 1,
                break: 1,
                caller: 1,
                chdir: 1,
                chmod: 1,
                chomp: 1,
                chop: 1,
                chown: 1,
                chr: 1,
                chroot: 1,
                close: 1,
                closedir: 1,
                connect: 1,
                continue: [1, 1],
                cos: 1,
                crypt: 1,
                dbmclose: 1,
                dbmopen: 1,
                default: 1,
                defined: 1,
                delete: 1,
                die: 1,
                do: 1,
                dump: 1,
                each: 1,
                endgrent: 1,
                endhostent: 1,
                endnetent: 1,
                endprotoent: 1,
                endpwent: 1,
                endservent: 1,
                eof: 1,
                eval: 1,
                exec: 1,
                exists: 1,
                exit: 1,
                exp: 1,
                fcntl: 1,
                fileno: 1,
                flock: 1,
                fork: 1,
                format: 1,
                formline: 1,
                getc: 1,
                getgrent: 1,
                getgrgid: 1,
                getgrnam: 1,
                gethostbyaddr: 1,
                gethostbyname: 1,
                gethostent: 1,
                getlogin: 1,
                getnetbyaddr: 1,
                getnetbyname: 1,
                getnetent: 1,
                getpeername: 1,
                getpgrp: 1,
                getppid: 1,
                getpriority: 1,
                getprotobyname: 1,
                getprotobynumber: 1,
                getprotoent: 1,
                getpwent: 1,
                getpwnam: 1,
                getpwuid: 1,
                getservbyname: 1,
                getservbyport: 1,
                getservent: 1,
                getsockname: 1,
                getsockopt: 1,
                given: 1,
                glob: 1,
                gmtime: 1,
                goto: 1,
                grep: 1,
                hex: 1,
                import: 1,
                index: 1,
                int: 1,
                ioctl: 1,
                join: 1,
                keys: 1,
                kill: 1,
                last: 1,
                lc: 1,
                lcfirst: 1,
                length: 1,
                link: 1,
                listen: 1,
                local: 2,
                localtime: 1,
                lock: 1,
                log: 1,
                lstat: 1,
                m: null,
                map: 1,
                mkdir: 1,
                msgctl: 1,
                msgget: 1,
                msgrcv: 1,
                msgsnd: 1,
                my: 2,
                new: 1,
                next: 1,
                no: 1,
                oct: 1,
                open: 1,
                opendir: 1,
                ord: 1,
                our: 2,
                pack: 1,
                package: 1,
                pipe: 1,
                pop: 1,
                pos: 1,
                print: 1,
                printf: 1,
                prototype: 1,
                push: 1,
                q: null,
                qq: null,
                qr: null,
                quotemeta: null,
                qw: null,
                qx: null,
                rand: 1,
                read: 1,
                readdir: 1,
                readline: 1,
                readlink: 1,
                readpipe: 1,
                recv: 1,
                redo: 1,
                ref: 1,
                rename: 1,
                require: 1,
                reset: 1,
                return: 1,
                reverse: 1,
                rewinddir: 1,
                rindex: 1,
                rmdir: 1,
                s: null,
                say: 1,
                scalar: 1,
                seek: 1,
                seekdir: 1,
                select: 1,
                semctl: 1,
                semget: 1,
                semop: 1,
                send: 1,
                setgrent: 1,
                sethostent: 1,
                setnetent: 1,
                setpgrp: 1,
                setpriority: 1,
                setprotoent: 1,
                setpwent: 1,
                setservent: 1,
                setsockopt: 1,
                shift: 1,
                shmctl: 1,
                shmget: 1,
                shmread: 1,
                shmwrite: 1,
                shutdown: 1,
                sin: 1,
                sleep: 1,
                socket: 1,
                socketpair: 1,
                sort: 1,
                splice: 1,
                split: 1,
                sprintf: 1,
                sqrt: 1,
                srand: 1,
                stat: 1,
                state: 1,
                study: 1,
                sub: 1,
                substr: 1,
                symlink: 1,
                syscall: 1,
                sysopen: 1,
                sysread: 1,
                sysseek: 1,
                system: 1,
                syswrite: 1,
                tell: 1,
                telldir: 1,
                tie: 1,
                tied: 1,
                time: 1,
                times: 1,
                tr: null,
                truncate: 1,
                uc: 1,
                ucfirst: 1,
                umask: 1,
                undef: 1,
                unlink: 1,
                unpack: 1,
                unshift: 1,
                untie: 1,
                use: 1,
                utime: 1,
                values: 1,
                vec: 1,
                wait: 1,
                waitpid: 1,
                wantarray: 1,
                warn: 1,
                when: 1,
                write: 1,
                y: null,
            },
            u = "string-2",
            $ = /[goseximacplud]/;
        function l(e, t, s, o, a) {
            return (
                (t.chain = null),
                (t.style = null),
                (t.tail = null),
                (t.tokenize = function (e, t) {
                    for (var r, n = !1, i = 0; (r = e.next()); ) {
                        if (r === s[i] && !n)
                            return (
                                void 0 !== s[++i]
                                    ? ((t.chain = s[i]),
                                      (t.style = o),
                                      (t.tail = a))
                                    : a && e.eatWhile(a),
                                (t.tokenize = E),
                                o
                            );
                        n = !n && "\\" == r;
                    }
                    return o;
                }),
                t.tokenize(e, t)
            );
        }
        function f(e, t, r) {
            return (
                (t.tokenize = function (e, t) {
                    return (
                        e.string == r && (t.tokenize = E),
                        e.skipToEnd(),
                        "string"
                    );
                }),
                t.tokenize(e, t)
            );
        }
        function E(e, t) {
            if (e.eatSpace()) return null;
            if (t.chain) return l(e, t, t.chain, t.style, t.tail);
            if (
                e.match(
                    /^(\-?((\d[\d_]*)?\.\d+(e[+-]?\d+)?|\d+\.\d*)|0x[\da-fA-F_]+|0b[01_]+|\d[\d_]*(e[+-]?\d+)?)/
                )
            )
                return "number";
            if (e.match(/^<<(?=[_a-zA-Z])/))
                return e.eatWhile(/\w/), f(e, t, e.current().substr(2));
            if (e.sol() && e.match(/^\=item(?!\w)/)) return f(e, t, "=cut");
            var r = e.next();
            if ('"' == r || "'" == r) {
                if (c(e, 3) == "<<" + r) {
                    var n = e.pos,
                        i = (e.eatWhile(/\w/), e.current().substr(1));
                    if (i && e.eat(r)) return f(e, t, i);
                    e.pos = n;
                }
                return l(e, t, [r], "string");
            }
            if ("q" == r && (!(s = R(e, -2)) || !/\w/.test(s)))
                if ("x" == (s = R(e, 0))) {
                    if ("(" == (s = R(e, 1)))
                        return _(e, 2), l(e, t, [")"], u, $);
                    if ("[" == s) return _(e, 2), l(e, t, ["]"], u, $);
                    if ("{" == s) return _(e, 2), l(e, t, ["}"], u, $);
                    if ("<" == s) return _(e, 2), l(e, t, [">"], u, $);
                    if (/[\^'"!~\/]/.test(s))
                        return _(e, 1), l(e, t, [e.eat(s)], u, $);
                } else if ("q" == s) {
                    if ("(" == (s = R(e, 1)))
                        return _(e, 2), l(e, t, [")"], "string");
                    if ("[" == s) return _(e, 2), l(e, t, ["]"], "string");
                    if ("{" == s) return _(e, 2), l(e, t, ["}"], "string");
                    if ("<" == s) return _(e, 2), l(e, t, [">"], "string");
                    if (/[\^'"!~\/]/.test(s))
                        return _(e, 1), l(e, t, [e.eat(s)], "string");
                } else if ("w" == s) {
                    if ("(" == (s = R(e, 1)))
                        return _(e, 2), l(e, t, [")"], "bracket");
                    if ("[" == s) return _(e, 2), l(e, t, ["]"], "bracket");
                    if ("{" == s) return _(e, 2), l(e, t, ["}"], "bracket");
                    if ("<" == s) return _(e, 2), l(e, t, [">"], "bracket");
                    if (/[\^'"!~\/]/.test(s))
                        return _(e, 1), l(e, t, [e.eat(s)], "bracket");
                } else if ("r" == s) {
                    if ("(" == (s = R(e, 1)))
                        return _(e, 2), l(e, t, [")"], u, $);
                    if ("[" == s) return _(e, 2), l(e, t, ["]"], u, $);
                    if ("{" == s) return _(e, 2), l(e, t, ["}"], u, $);
                    if ("<" == s) return _(e, 2), l(e, t, [">"], u, $);
                    if (/[\^'"!~\/]/.test(s))
                        return _(e, 1), l(e, t, [e.eat(s)], u, $);
                } else if (/[\^'"!~\/(\[{<]/.test(s)) {
                    if ("(" == s) return _(e, 1), l(e, t, [")"], "string");
                    if ("[" == s) return _(e, 1), l(e, t, ["]"], "string");
                    if ("{" == s) return _(e, 1), l(e, t, ["}"], "string");
                    if ("<" == s) return _(e, 1), l(e, t, [">"], "string");
                    if (/[\^'"!~\/]/.test(s))
                        return l(e, t, [e.eat(s)], "string");
                }
            if ("m" == r) {
                var s = R(e, -2);
                if ((!s || !/\w/.test(s)) && (s = e.eat(/[(\[{<\^'"!~\/]/))) {
                    if (/[\^'"!~\/]/.test(s)) return l(e, t, [s], u, $);
                    if ("(" == s) return l(e, t, [")"], u, $);
                    if ("[" == s) return l(e, t, ["]"], u, $);
                    if ("{" == s) return l(e, t, ["}"], u, $);
                    if ("<" == s) return l(e, t, [">"], u, $);
                }
            }
            if ("s" == r) {
                var s = /[\/>\]})\w]/.test(R(e, -2));
                if (!s && (s = e.eat(/[(\[{<\^'"!~\/]/)))
                    return l(
                        e,
                        t,
                        "[" == s
                            ? ["]", "]"]
                            : "{" == s
                            ? ["}", "}"]
                            : "<" == s
                            ? [">", ">"]
                            : "(" == s
                            ? [")", ")"]
                            : [s, s],
                        u,
                        $
                    );
            }
            if ("y" == r) {
                var s = /[\/>\]})\w]/.test(R(e, -2));
                if (!s && (s = e.eat(/[(\[{<\^'"!~\/]/)))
                    return l(
                        e,
                        t,
                        "[" == s
                            ? ["]", "]"]
                            : "{" == s
                            ? ["}", "}"]
                            : "<" == s
                            ? [">", ">"]
                            : "(" == s
                            ? [")", ")"]
                            : [s, s],
                        u,
                        $
                    );
            }
            if ("t" == r) {
                s = /[\/>\]})\w]/.test(R(e, -2));
                if (!s && (s = (s = e.eat("r")) && e.eat(/[(\[{<\^'"!~\/]/)))
                    return l(
                        e,
                        t,
                        "[" == s
                            ? ["]", "]"]
                            : "{" == s
                            ? ["}", "}"]
                            : "<" == s
                            ? [">", ">"]
                            : "(" == s
                            ? [")", ")"]
                            : [s, s],
                        u,
                        $
                    );
            }
            if ("`" == r) return l(e, t, [r], "variable-2");
            if ("/" == r)
                return /~\s*$/.test(c(e)) ? l(e, t, [r], u, $) : "operator";
            if ("$" == r) {
                n = e.pos;
                if (
                    e.eatWhile(/\d/) ||
                    (e.eat("{") && e.eatWhile(/\d/) && e.eat("}"))
                )
                    return "variable-2";
                e.pos = n;
            }
            if (/[$@%]/.test(r)) {
                n = e.pos;
                if (
                    (e.eat("^") && e.eat(/[A-Z]/)) ||
                    (!/[@$%&]/.test(R(e, -2)) &&
                        e.eat(/[=|\\\-#?@;:&`~\^!\[\]*'"$+.,\/<>()]/))
                ) {
                    s = e.current();
                    if (a[s]) return "variable-2";
                }
                e.pos = n;
            }
            if (
                /[$@%&]/.test(r) &&
                (e.eatWhile(/[\w$]/) ||
                    (e.eat("{") && e.eatWhile(/[\w$]/) && e.eat("}")))
            )
                return (s = e.current()), a[s] ? "variable-2" : "variable";
            if ("#" == r && "$" != R(e, -2)) return e.skipToEnd(), "comment";
            if (/[:+\-\^*$&%@=<>!?|\/~\.]/.test(r)) {
                n = e.pos;
                if ((e.eatWhile(/[:+\-\^*$&%@=<>!?|\/~\.]/), a[e.current()]))
                    return "operator";
                e.pos = n;
            }
            if ("_" == r && 1 == e.pos) {
                if ("_END__" == p(e, 6)) return l(e, t, ["\0"], "comment");
                if ("_DATA__" == p(e, 7)) return l(e, t, ["\0"], "variable-2");
                if ("_C__" == p(e, 7)) return l(e, t, ["\0"], "string");
            }
            if (/\w/.test(r)) {
                n = e.pos;
                if (
                    "{" == R(e, -2) &&
                    ("}" == R(e, 0) || (e.eatWhile(/\w/) && "}" == R(e, 0)))
                )
                    return "string";
                e.pos = n;
            }
            if (/[A-Z]/.test(r)) {
                var o = R(e, -2),
                    n = e.pos;
                if ((e.eatWhile(/[A-Z_]/), !/[\da-z]/.test(R(e, 0))))
                    return (s = a[e.current()])
                        ? (s[1] && (s = s[0]),
                          ":" != o
                              ? 1 == s
                                  ? "keyword"
                                  : 2 == s
                                  ? "def"
                                  : 3 == s
                                  ? "atom"
                                  : 4 == s
                                  ? "operator"
                                  : 5 == s
                                  ? "variable-2"
                                  : "meta"
                              : "meta")
                        : "meta";
                e.pos = n;
            }
            return /[a-zA-Z_]/.test(r)
                ? ((o = R(e, -2)),
                  e.eatWhile(/\w/),
                  (s = a[e.current()])
                      ? (s[1] && (s = s[0]),
                        ":" != o
                            ? 1 == s
                                ? "keyword"
                                : 2 == s
                                ? "def"
                                : 3 == s
                                ? "atom"
                                : 4 == s
                                ? "operator"
                                : 5 == s
                                ? "variable-2"
                                : "meta"
                            : "meta")
                      : "meta")
                : null;
        }
        return {
            startState: function () {
                return { tokenize: E, chain: null, style: null, tail: null };
            },
            token: function (e, t) {
                return (t.tokenize || E)(e, t);
            },
            lineComment: "#",
        };
    }),
        e.registerHelper("wordChars", "perl", /[\w$]/),
        e.defineMIME("text/x-perl", "perl");
});

// PLACEHOLDER MIRRORCODE
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/5/LICENSE

(function (mod) {
    if (typeof exports == "object" && typeof module == "object")
        // CommonJS
        mod(require("../../lib/codemirror"));
    else if (typeof define == "function" && define.amd)
        // AMD
        define(["../../lib/codemirror"], mod);
    // Plain browser env
    else mod(CodeMirror);
})(function (CodeMirror) {
    CodeMirror.defineOption("placeholder", "", function (cm, val, old) {
        var prev = old && old != CodeMirror.Init;
        if (val && !prev) {
            cm.on("blur", onBlur);
            cm.on("change", onChange);
            cm.on("swapDoc", onChange);
            CodeMirror.on(
                cm.getInputField(),
                "compositionupdate",
                (cm.state.placeholderCompose = function () {
                    onComposition(cm);
                })
            );
            onChange(cm);
        } else if (!val && prev) {
            cm.off("blur", onBlur);
            cm.off("change", onChange);
            cm.off("swapDoc", onChange);
            CodeMirror.off(
                cm.getInputField(),
                "compositionupdate",
                cm.state.placeholderCompose
            );
            clearPlaceholder(cm);
            var wrapper = cm.getWrapperElement();
            wrapper.className = wrapper.className.replace(
                " CodeMirror-empty",
                ""
            );
        }

        if (val && !cm.hasFocus()) onBlur(cm);
    });

    function clearPlaceholder(cm) {
        if (cm.state.placeholder) {
            cm.state.placeholder.parentNode.removeChild(cm.state.placeholder);
            cm.state.placeholder = null;
        }
    }
    function setPlaceholder(cm) {
        clearPlaceholder(cm);
        var elt = (cm.state.placeholder = document.createElement("pre"));
        elt.style.cssText = "height: 0; overflow: visible";
        elt.style.direction = cm.getOption("direction");
        elt.className = "CodeMirror-placeholder CodeMirror-line-like";
        var placeHolder = cm.getOption("placeholder");
        if (typeof placeHolder == "string")
            placeHolder = document.createTextNode(placeHolder);
        elt.appendChild(placeHolder);
        cm.display.lineSpace.insertBefore(elt, cm.display.lineSpace.firstChild);
    }

    function onComposition(cm) {
        setTimeout(function () {
            var empty = false;
            if (cm.lineCount() == 1) {
                var input = cm.getInputField();
                empty =
                    input.nodeName == "TEXTAREA"
                        ? !cm.getLine(0).length
                        : !/[^\u200b]/.test(
                              input.querySelector(".CodeMirror-line")
                                  .textContent
                          );
            }
            if (empty) setPlaceholder(cm);
            else clearPlaceholder(cm);
        }, 20);
    }

    function onBlur(cm) {
        if (isEmpty(cm)) setPlaceholder(cm);
    }
    function onChange(cm) {
        var wrapper = cm.getWrapperElement(),
            empty = isEmpty(cm);
        wrapper.className =
            wrapper.className.replace(" CodeMirror-empty", "") +
            (empty ? " CodeMirror-empty" : "");

        if (empty) setPlaceholder(cm);
        else clearPlaceholder(cm);
    }

    function isEmpty(cm) {
        return cm.lineCount() === 1 && cm.getLine(0) === "";
    }
});

// MY SCRIPT.JS
var resizer = document.querySelector(".resizer"),
    sidebar = document.querySelector(".content-left"),
    wcnt = $(".content").width();

function initResizerFn(resizer, sidebar) {
    // track current mouse position in x var
    var x, w;

    function rs_mousedownHandler(e) {
        x = e.clientX;

        var sbWidth = window.getComputedStyle(sidebar).width;
        w = parseInt(sbWidth, 10);

        document.addEventListener("mousemove", rs_mousemoveHandler);
        document.addEventListener("mouseup", rs_mouseupHandler);

        sidebar.style.userSelect = "none";
    }

    function rs_mousemoveHandler(e) {
        var dx = e.clientX - x;

        var cw = w + dx; // complete width
        var content = $(".content").width();

        if (cw > 200 && cw < content) {
            sidebar.style.width = `${cw}px`;
        }
        var wrz = wcnt - cw;
        $(".resizer").width(wcnt);
        $(".resizer").css("right", "-" + wrz + "px");
    }

    function rs_mouseupHandler() {
        // remove event mousemove && mouseup
        document.removeEventListener("mouseup", rs_mouseupHandler);
        document.removeEventListener("mousemove", rs_mousemoveHandler);
        sidebar.style.userSelect = "auto";
        $(".resizer").width(12);
        $(".resizer").css("right", "-12px");
        editor.refresh();
        editor2.refresh();
        editor3.refresh();
    }

    resizer.addEventListener("mousedown", rs_mousedownHandler);
}

initResizerFn(resizer, sidebar);

// MENAMPILKAN OUTPUT
function run() {
    let htmlCode = editor.getValue();
    let cssCode = "<style>" + editor2.getValue() + "</style>";

    if ($(".themes").hasClass("bx-moon")) {
        cssCode =
            "<style>body{color:#fefefe;}" + editor2.getValue() + "</style>";
    }

    let jsCode = editor3.getValue();
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = cssCode + htmlCode;

    jQuery.get("assets/jquery/jquery.min.js", function (data) {
        output.contentWindow.eval(data + jsCode);
    });
}

$(document).ready(run);

$(document).ready(function () {
    function changeCode(code) {
        code.on("change", function () {
            $(".content-right").empty();
            $(".content-right").append(
                '<iframe id="output" frameborder="0"></iframe>'
            );
            run();
        });
    }
    changeCode(editor);
    changeCode(editor2);
    changeCode(editor3);
});

// HIDDEN CODE ----------------------------------------
function hideWrap(wrap) {
    $(wrap).css("flex-grow", "1");
    $(wrap).css("flex-basis", $(wrap).height());
    $(wrap).css("flex-grow", "0");
}

// HIDE HTML CODE--------------------------------------------------
$(".arrow-html").click(function () {
    if (
        $(".wrap-html").height() != 34.6667 &&
        ($(".wrap-css").height() != 34.6667 ||
            $(".wrap-js").height() != 34.6667)
    ) {
        $(".wrap-html").css("flex-basis", "34.6667px");

        if ($(".wrap-css").height() != 34.6667) {
            hideWrap(".wrap-css");
        } else if (
            $(".wrap-css").height() == 34.6667 &&
            $(".wrap-js").height() != 34.6667
        ) {
            hideWrap(".wrap-js");
        }

        hoverAllarrow();

        y = $(".resizer-1").offset().top + 15;
        y2 = $(".resizer-2").offset().top + 15;
    }
});

$(".arrow-css").click(function () {
    if (
        $(".wrap-css").height() != 34.6667 &&
        ($(".wrap-html").height() != 34.6667 ||
            $(".wrap-js").height() != 34.6667)
    ) {
        if (
            $(".wrap-html").height() != 34.6667 &&
            $(".wrap-js").height() != 34.6667
        ) {
            $(".wrap-html").css(
                "flex-basis",
                $(".wrap-html").height() + $(".wrap-css").height() / 2
            );
            $(".wrap-js").css(
                "flex-basis",
                $(".wrap-js").height() + $(".wrap-css").height() / 2
            );
        }

        $(".wrap-css").css("flex-basis", "34.6667px");

        if (
            $(".wrap-html").height() == 34.6667 &&
            $(".wrap-js").height() != 34.6667
        ) {
            hideWrap(".wrap-js");
        } else if (
            $(".wrap-html").height() != 34.6667 &&
            $(".wrap-js").height() == 34.6667
        ) {
            hideWrap(".wrap-html");
        }

        hoverAllarrow();

        y = $(".resizer-1").offset().top + 15;
        y2 = $(".resizer-2").offset().top + 15;
    }
});

$(".arrow-js").click(function () {
    if (
        $(".wrap-js").height() != 34.6667 &&
        ($(".wrap-html").height() != 34.6667 ||
            $(".wrap-css").height() != 34.6667)
    ) {
        $(".wrap-js").css("flex-basis", "34.6667px");

        if (
            $(".wrap-css").height() != 34.6667 &&
            $(".wrap-html").height() != 34.6667
        ) {
            hideWrap(".wrap-css");
        } else if (
            $(".wrap-css").height() == 34.6667 &&
            $(".wrap-html").height() != 34.6667
        ) {
            hideWrap(".wrap-html");
        } else if (
            $(".wrap-html").height() == 34.6667 &&
            $(".wrap-css").height() != 34.6667
        ) {
            hideWrap(".wrap-css");
        }

        hoverAllarrow();

        y = $(".resizer-1").offset().top + 15;
        y2 = $(".resizer-2").offset().top + 15;
    }
});

var editor = CodeMirror.fromTextArea(document.getElementById("c-html"), {
    lineNumbers: true,
    mode: "text/x-perl",
    theme: "abbott",
    lineWrapping: true,
});

var editor2 = CodeMirror.fromTextArea(document.getElementById("c-css"), {
    lineNumbers: true,
    mode: "text/x-perl",
    theme: "abbott",
    lineWrapping: true,
});
var editor3 = CodeMirror.fromTextArea(document.getElementById("c-js"), {
    lineNumbers: true,
    mode: "text/x-perl",
    theme: "abbott",
    lineWrapping: true,
});

// VERTICAL RESIZER
function hoverArrow(wrap, nameArrow) {
    if ($(wrap).height() == 34.6667) {
        $(nameArrow).addClass("arrow-disable");
    } else {
        $(nameArrow).removeClass("arrow-disable");
    }
}

function hoverAllarrow() {
    hoverArrow(".wrap-html", ".arrow-html");
    hoverArrow(".wrap-css", ".arrow-css");
    hoverArrow(".wrap-js", ".arrow-js");
}

// RESIZER----------------------------------------------------------

var resizer = document.querySelector(".resizer-1"),
    resizer2 = document.querySelector(".resizer-2");

var y = $(".resizer-1").offset().top + 15;
var y2 = $(".resizer-2").offset().top + 15;

const t = document.querySelector(".wrap-html");
const m = document.querySelector(".wrap-css");
const b = document.querySelector(".wrap-js");

// RESIZER 1 --------------------------------------
function initResizerFn1(resizer) {
    resizer.addEventListener("mousedown", onmousedown);

    function onmousedown(e) {
        e.preventDefault();
        document.addEventListener("mousemove", onmousemove);
        document.addEventListener("mouseup", onmouseup);
    }

    function onmousemove(e) {
        e.preventDefault();
        const clientY = e.clientY;
        const deltaY = clientY - (resizer._clientY || clientY);
        resizer._clientY = clientY;

        // UP
        if (deltaY < 0) {
            if (clientY < y && deltaY > -65) {
                const ht = Math.round(
                    parseInt(getComputedStyle(t).height) + deltaY
                );
                const hm = Math.round(
                    parseInt(getComputedStyle(m).height) - deltaY
                );

                t.style.flex = `0 ${ht}px`;
                m.style.flex = `0 ${hm}px`;

                y = $(".resizer-1").offset().top + 15;
                y2 = $(".resizer-2").offset().top + 15;
            }
        }

        // DOWN
        if (deltaY > 0) {
            if (clientY > y) {
                const ht = Math.round(
                    parseInt(getComputedStyle(t).height) + deltaY
                );
                const hm = Math.round(
                    parseInt(getComputedStyle(m).height) - deltaY
                );
                const hb = Math.round(
                    parseInt(getComputedStyle(b).height) - deltaY
                );

                if (hm > 33) {
                    m.style.flex = `0 ${hm}px`;
                } else {
                    b.style.flex = `0 ${hb}px`;
                }

                t.style.flex = `0 ${ht}px`;

                y = $(".resizer-1").offset().top + 15;
                y2 = $(".resizer-2").offset().top + 15;
            }
        }
    }
    function onmouseup(e) {
        e.preventDefault();
        document.removeEventListener("mousemove", onmousemove);
        document.removeEventListener("mouseup", onmouseup);
        delete e._clientY;

        hoverAllarrow();
    }
}

initResizerFn1(resizer);

// RESIZER 2 --------------------------------------
function initResizerFn2() {
    resizer2.addEventListener("mousedown", onmousedown2);
    function onmousedown2(e) {
        e.preventDefault();
        document.addEventListener("mousemove", onmousemove2);
        document.addEventListener("mouseup", onmouseup2);
    }
    function onmousemove2(e) {
        e.preventDefault();
        const clientY2 = e.clientY;
        const deltaY2 = clientY2 - (resizer2._clientY || clientY2);
        resizer2._clientY = clientY2;

        //UP
        if (clientY2 < y2) {
            if (deltaY2 < 0) {
                const ht = Math.round(
                    parseInt(getComputedStyle(t).height) + deltaY2
                );
                const hm = Math.round(
                    parseInt(getComputedStyle(m).height) + deltaY2
                );
                const hb = Math.round(
                    parseInt(getComputedStyle(b).height) - deltaY2
                );

                if (hm > 33) {
                    m.style.flex = `0 ${hm}px`;
                } else {
                    t.style.flex = `0 ${ht}px`;
                }

                b.style.flex = `0 ${hb}px`;

                y2 = $(".resizer-2").offset().top + 15;
                y = $(".resizer-1").offset().top + 15;
            }
        }

        // DOWN
        if (deltaY2 > 0 && deltaY2 < 65) {
            const hm = Math.round(
                parseInt(getComputedStyle(m).height) + deltaY2
            );
            const hb = Math.round(
                parseInt(getComputedStyle(b).height) - deltaY2
            );

            if (clientY2 > y2) {
                m.style.flex = `0 ${hm}px`;
                b.style.flex = `0 ${hb}px`;

                y2 = $(".resizer-2").offset().top + 15;
                y = $(".resizer-1").offset().top + 15;
            }
        }
    }
    function onmouseup2(e) {
        e.preventDefault();
        document.removeEventListener("mousemove", onmousemove2);
        document.removeEventListener("mouseup", onmouseup2);
        delete e._clientY;
        hoverAllarrow();
    }
}

initResizerFn2(resizer2);


