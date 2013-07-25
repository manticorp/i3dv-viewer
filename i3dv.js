/**
 *     _______________    
 *    |            .. \   _ _____     _                _                        
 *    |            | | | (_)___ /  __| |_   __  __   _(_) _____      _____ _ __ 
 *    |            ''' / | | |_ \ / _` \ \ / /  \ \ / / |/ _ \ \ /\ / / _ \ '__|
 *     \__________/'''   | |___) | (_| |\ V /    \ V /| |  __/\ V  V /  __/ |   
 *    `____________'     |_|____/ \__,_| \_/      \_/ |_|\___| \_/\_/ \___|_|   
 *    
 *      
 * The i3dv viewer is Copyright (C) � 2013 by i3dv
 *
 * @url         http://www.i3dv.com
 * @email       admin (at) i3dv.com
 * 
 * All code contained within is owned and maintained exclusively by i3dv, you may
 * however use this code freely with the understanding that this code is generated
 * using a server side algorithm on the fly, and does not ever appear complete in
 * any one place.
 *
 * Unless otherwise noted, all code was written exclusively by i3dv employees.
 *
 * @author      Harry Mustoe-Playfair
 * @author      i3dv
 * @copyright   i3dv 2013
 * @version     0.2
 *
 * @section LICENSE
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 * http://www.gnu.org/copyleft/gpl.html
 *
 * @requires video.js (included)
 * @url http://www.videojs.com/
 * @requires hammer.js (included)
 * @url http://eightmedia.github.io/hammer.js/
 *
 * @todo take only those parts of video.js that are needed (it's a very big library and doubles the codebase)
 */
// video.js
(function(){var b=void 0,f=!0,h=null,l=!1;function m(){return function(){}}function p(a){return function(){return this[a]}}function r(a){return function(){return a}}var t;document.createElement("video");document.createElement("audio");function u(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(u.La[a])return u.La[a];a=u.r(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new u.ea(a,c,d)}var v=u;window.xd=window.yd=u;u.Ob="4.0";u.xc="https:"==document.location.protocol?"https://":"http://";u.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{}}};"GENERATED_CDN_VSN"!==u.Ob&&(v.options.flash.swf=u.xc+"vjs.zencdn.net/"+u.Ob+"/video-js.swf");u.La={};u.ka=u.CoreObject=m();u.ka.extend=function(a){var c,d;a=a||{};c=a.init||a.g||this.prototype.init||this.prototype.g||m();d=function(){c.apply(this,arguments)};d.prototype=u.i.create(this.prototype);d.prototype.constructor=d;d.extend=u.ka.extend;d.create=u.ka.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};u.ka.create=function(){var a=u.i.create(this.prototype);this.apply(a,arguments);return a};u.d=function(a,c,d){var e=u.getData(a);e.z||(e.z={});e.z[c]||(e.z[c]=[]);d.u||(d.u=u.u++);e.z[c].push(d);e.S||(e.disabled=l,e.S=function(c){if(!e.disabled){c=u.fc(c);var d=e.z[c.type];if(d)for(var d=d.slice(0),k=0,q=d.length;k<q&&!c.lc();k++)d[k].call(a,c)}});1==e.z[c].length&&(document.addEventListener?a.addEventListener(c,e.S,l):document.attachEvent&&a.attachEvent("on"+c,e.S))};u.t=function(a,c,d){if(u.kc(a)){var e=u.getData(a);if(e.z)if(c){var g=e.z[c];if(g){if(d){if(d.u)for(e=0;e<g.length;e++)g[e].u===d.u&&g.splice(e--,1)}else e.z[c]=[];u.cc(a,c)}}else for(g in e.z)c=g,e.z[c]=[],u.cc(a,c)}};u.cc=function(a,c){var d=u.getData(a);0===d.z[c].length&&(delete d.z[c],document.removeEventListener?a.removeEventListener(c,d.S,l):document.detachEvent&&a.detachEvent("on"+c,d.S));u.zb(d.z)&&(delete d.z,delete d.S,delete d.disabled);u.zb(d)&&u.rc(a)};u.fc=function(a){function c(){return f}function d(){return l}if(!a||!a.Ab){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&"layerY"!==g&&(a[g]=e[g]);a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.yb=c};a.yb=d;a.stopPropagation=function(){e.stopPropagation&&e.stopPropagation();a.cancelBubble=f;a.Ab=c};a.Ab=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.lc=c;a.stopPropagation()};a.lc=d;if(a.clientX!=h){g=document.documentElement;var j=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||j&&j.scrollLeft||0)-(g&&g.clientLeft||j&&j.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||j&&j.scrollTop||0)-(g&&g.clientTop||j&&j.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=h&&(a.button=a.button&1?0:a.button&4?1:a.button&2?2:0)}return a};u.k=function(a,c){var d=u.kc(a)?u.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=u.fc(c);d.S&&d.S.call(a,c);if(e&&!c.Ab())u.k(e,c);else if(!e&&!c.yb()&&(d=u.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.yb()};u.Q=function(a,c,d){u.d(a,c,function(){u.t(a,c,arguments.callee);d.apply(this,arguments)})};var w=Object.prototype.hasOwnProperty;u.e=function(a,c){var d=document.createElement(a||"div"),e;for(e in c)w.call(c,e)&&(-1!==e.indexOf("aria-")||"role"==e?d.setAttribute(e,c[e]):d[e]=c[e]);return d};u.Y=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};u.i={};u.i.create=Object.create||function(a){function c(){}c.prototype=a;return new c};u.i.qa=function(a,c,d){for(var e in a)w.call(a,e)&&c.call(d||this,e,a[e])};u.i.B=function(a,c){if(!c)return a;for(var d in c)w.call(c,d)&&(a[d]=c[d]);return a};u.i.ec=function(a,c){var d,e,g;a=u.i.copy(a);for(d in c)w.call(c,d)&&(e=a[d],g=c[d],a[d]=u.i.mc(e)&&u.i.mc(g)?u.i.ec(e,g):c[d]);return a};u.i.copy=function(a){return u.i.B({},a)};u.i.mc=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};u.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.u||(c.u=u.u++);e.u=d?d+"_"+c.u:c.u;return e};u.oa={};u.u=1;u.expando="vdata"+(new Date).getTime();u.getData=function(a){var c=a[u.expando];c||(c=a[u.expando]=u.u++,u.oa[c]={});return u.oa[c]};u.kc=function(a){a=a[u.expando];return!(!a||u.zb(u.oa[a]))};u.rc=function(a){var c=a[u.expando];if(c){delete u.oa[c];try{delete a[u.expando]}catch(d){a.removeAttribute?a.removeAttribute(u.expando):a[u.expando]=h}}};u.zb=function(a){for(var c in a)if(a[c]!==h)return l;return f};u.p=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)};u.w=function(a,c){if(-1!=a.className.indexOf(c)){for(var d=a.className.split(" "),e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};u.gb=u.e("video");u.O=navigator.userAgent;u.Bc=!!u.O.match(/phone/i);u.Ac=!!u.O.match(/pad/i);u.Cc=!!u.O.match(/pod/i);u.Sb=u.Bc||u.Ac||u.Cc;var x=u,y;var z=u.O.match(/OS (\d+)_/i);y=z&&z[1]?z[1]:b;x.qd=y;u.Za=!!u.O.match(/Android.*AppleWebKit/i);var aa=u,A=u.O.match(/Android (\d+)\./i);aa.yc=A&&A[1]?A[1]:h;u.zc=function(){return!!u.O.match("Firefox")};u.vb=function(a){var c={};if(a&&a.attributes&&0<a.attributes.length)for(var d=a.attributes,e,g,j=d.length-1;0<=j;j--){e=d[j].name;g=d[j].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==h?f:l;c[e]=g}return c};u.td=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};u.xb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};u.Mb={};u.r=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};u.Ga=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),j=Math.floor(c/60%60),k=Math.floor(c/3600),g=0<g||0<k?g+":":"";return g+(((g||10<=j)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};u.Gc=function(){document.body.focus();document.onselectstart=r(l)};u.ld=function(){document.onselectstart=r(f)};u.trim=function(a){return a.toString().replace(/^\s+/,"").replace(/\s+$/,"")};u.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};u.rb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};u.get=function(a,c,d){var e=0===a.indexOf("file:")||0===window.location.href.indexOf("file:")&&-1===a.indexOf("http");"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");});var g=new XMLHttpRequest;try{g.open("GET",a)}catch(j){d(j)}g.onreadystatechange=function(){4===g.readyState&&(200===g.status||e&&0===g.status?c(g.responseText):d&&d())};try{g.send()}catch(k){d&&d(k)}};u.dd=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?u.log("LocalStorage Full (VideoJS)",d):18==d.code?u.log("LocalStorage not allowed (VideoJS)",d):u.log("LocalStorage Error (VideoJS)",d)}};u.ic=function(a){a.match(/^https?:\/\//)||(a=u.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};u.log=function(){u.log.history=u.log.history||[];u.log.history.push(arguments);window.console&&window.console.log(Array.prototype.slice.call(arguments))};u.Oc=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0),top:c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0)}};u.c=u.ka.extend({g:function(a,c,d){this.a=a;this.f=u.i.copy(this.f);c=this.options(c);this.L=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+u.u++);this.Tc=c.name||h;this.b=c.el||this.e();this.D=[];this.pb={};this.R={};if((a=this.f)&&a.children){var e=this;u.i.qa(a.children,function(a,c){c!==l&&!c.loadEvent&&(e[a]=e.X(a,c))})}this.M(d)}});t=u.c.prototype;t.C=function(){if(this.D)for(var a=this.D.length-1;0<=a;a--)this.D[a].C&&this.D[a].C();this.R=this.pb=this.D=h;this.t();this.b.parentNode&&this.b.parentNode.removeChild(this.b);u.rc(this.b);this.b=h};t.oc=p("a");t.options=function(a){return a===b?this.f:this.f=u.i.ec(this.f,a)};t.e=function(a,c){return u.e(a,c)};t.r=p("b");t.id=p("L");t.name=p("Tc");t.children=p("D");t.X=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||u.Y(e),c.name=e,d=new window.videojs[d](this.a||this,c)):d=a;this.D.push(d);"function"===typeof d.id&&(this.pb[d.id()]=d);(e=e||d.name&&d.name())&&(this.R[e]=d);"function"===typeof d.el&&d.el()&&(this.pa||this.b).appendChild(d.el());return d};t.removeChild=function(a){"string"===typeof a&&(a=this.R[a]);if(a&&this.D){for(var c=l,d=this.D.length-1;0<=d;d--)if(this.D[d]===a){c=f;this.D.splice(d,1);break}c&&(this.pb[a.id]=h,this.R[a.name]=h,(c=a.r())&&c.parentNode===(this.pa||this.b)&&(this.pa||this.b).removeChild(a.r()))}};t.P=r("");t.d=function(a,c){u.d(this.b,a,u.bind(this,c));return this};t.t=function(a,c){u.t(this.b,a,c);return this};t.Q=function(a,c){u.Q(this.b,a,u.bind(this,c));return this};t.k=function(a,c){u.k(this.b,a,c);return this};t.M=function(a){a&&(this.Z?a.call(this):(this.Oa===b&&(this.Oa=[]),this.Oa.push(a)));return this};t.Ra=function(){this.Z=f;var a=this.Oa;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.Oa=[];this.k("ready")}};t.p=function(a){u.p(this.b,a);return this};t.w=function(a){u.w(this.b,a);return this};t.show=function(){this.b.style.display="block";return this};t.v=function(){this.b.style.display="none";return this};t.ha=function(){this.w("vjs-fade-out");this.p("vjs-fade-in");return this};t.Fa=function(){this.w("vjs-fade-in");this.p("vjs-fade-out");return this};t.nc=function(){this.p("vjs-lock-showing");return this};t.Sa=function(){this.w("vjs-lock-showing");return this};t.disable=function(){this.v();this.show=m();this.ha=m()};t.width=function(a,c){return B(this,"width",a,c)};t.height=function(a,c){return B(this,"height",a,c)};t.Kc=function(a,c){return this.width(a,f).height(c)};function B(a,c,d,e){if(d!==b)return a.b.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px",e||a.k("resize"),a;if(!a.b)return 0;d=a.b.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.b["offset"+u.Y(c)],10)}u.o=u.c.extend({g:function(a,c){u.c.call(this,a,c);var d=l;this.d("touchstart",function(){d=f});this.d("touchmove",function(){d=l});var e=this;this.d("touchend",function(a){d&&e.n(a);a.preventDefault();a.stopPropagation()});this.d("click",this.n);this.d("focus",this.Ja);this.d("blur",this.Ia)}});t=u.o.prototype;t.e=function(a,c){c=u.i.B({className:this.P(),innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+(this.na||"Need Text")+"</span></div>",ad:"button","aria-live":"polite",tabIndex:0},c);return u.c.prototype.e.call(this,a,c)};t.P=function(){return"vjs-control "+u.c.prototype.P.call(this)};t.n=m();t.Ja=function(){u.d(document,"keyup",u.bind(this,this.$))};t.$=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.n()};t.Ia=function(){u.t(document,"keyup",u.bind(this,this.$))};u.J=u.c.extend({g:function(a,c){u.c.call(this,a,c);this.Fc=this.R[this.f.barName];this.handle=this.R[this.f.handleName];a.d(this.pc,u.bind(this,this.update));this.d("mousedown",this.Ka);this.d("touchstart",this.Ka);this.d("focus",this.Ja);this.d("blur",this.Ia);this.d("click",this.n);this.a.d("controlsvisible",u.bind(this,this.update));a.M(u.bind(this,this.update));this.K={}}});t=u.J.prototype;t.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=u.i.B({ad:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return u.c.prototype.e.call(this,a,c)};t.Ka=function(a){a.preventDefault();u.Gc();this.K.move=u.bind(this,this.Fb);this.K.end=u.bind(this,this.Gb);u.d(document,"mousemove",this.K.move);u.d(document,"mouseup",this.K.end);u.d(document,"touchmove",this.K.move);u.d(document,"touchend",this.K.end);this.Fb(a)};t.Gb=function(){u.ld();u.t(document,"mousemove",this.K.move,l);u.t(document,"mouseup",this.K.end,l);u.t(document,"touchmove",this.K.move,l);u.t(document,"touchend",this.K.end,l);this.update()};t.update=function(){if(this.b){var a,c=this.wb(),d=this.handle,e=this.Fc;isNaN(c)&&(c=0);a=c;if(d){a=this.b.offsetWidth;var g=d.r().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.r().style.left=u.round(100*c,2)+"%"}e.r().style.width=u.round(100*a,2)+"%"}};function C(a,c){var d,e,g,j;d=a.b;e=u.Oc(d);j=g=d.offsetWidth;d=a.handle;if(a.f.md)return j=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.r().offsetHeight,j+=d/2,g-=d),Math.max(0,Math.min(1,(j-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.r().offsetWidth,g+=d/2,j-=d);return Math.max(0,Math.min(1,(e-g)/j))}t.Ja=function(){u.d(document,"keyup",u.bind(this,this.$))};t.$=function(a){37==a.which?(a.preventDefault(),this.uc()):39==a.which&&(a.preventDefault(),this.vc())};t.Ia=function(){u.t(document,"keyup",u.bind(this,this.$))};t.n=function(a){a.stopImmediatePropagation();a.preventDefault()};u.fa=u.c.extend();u.fa.prototype.defaultValue=0;u.fa.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=u.i.B({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return u.c.prototype.e.call(this,"div",c)};u.la=u.c.extend();function ba(a,c){a.X(c);c.d("click",u.bind(a,function(){this.Sa()}))}u.la.prototype.e=function(){var a=this.options().Ic||"ul";this.pa=u.e(a,{className:"vjs-menu-content"});a=u.c.prototype.e.call(this,"div",{append:this.pa,className:"vjs-menu"});a.appendChild(this.pa);u.d(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};u.I=u.o.extend({g:function(a,c){u.o.call(this,a,c);this.selected(c.selected)}});u.I.prototype.e=function(a,c){return u.o.prototype.e.call(this,"li",u.i.B({className:"vjs-menu-item",innerHTML:this.f.label},c))};u.I.prototype.n=function(){this.selected(f)};u.I.prototype.selected=function(a){a?(this.p("vjs-selected"),this.b.setAttribute("aria-selected",f)):(this.w("vjs-selected"),this.b.setAttribute("aria-selected",l))};u.ca=u.o.extend({g:function(a,c){u.o.call(this,a,c);this.sa=this.Ea();this.X(this.sa);this.G&&0===this.G.length&&this.v();this.d("keyup",this.$);this.b.setAttribute("aria-haspopup",f);this.b.setAttribute("role","button")}});t=u.ca.prototype;t.ma=l;t.Ea=function(){var a=new u.la(this.a);this.options().title&&a.r().appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Y(this.A),jd:-1}));if(this.G=this.qb())for(var c=0;c<this.G.length;c++)ba(a,this.G[c]);return a};t.qb=m();t.P=function(){return this.className+" vjs-menu-button "+u.o.prototype.P.call(this)};t.Ja=m();t.Ia=m();t.n=function(){this.Q("mouseout",u.bind(this,function(){this.sa.Sa();this.b.blur()}));this.ma?D(this):E(this)};t.$=function(a){a.preventDefault();32==a.which||13==a.which?this.ma?D(this):E(this):27==a.which&&this.ma&&D(this)};function E(a){a.ma=f;a.sa.nc();a.b.setAttribute("aria-pressed",f);a.G&&0<a.G.length&&a.G[0].r().focus()}function D(a){a.ma=l;a.sa.Sa();a.b.setAttribute("aria-pressed",l)}u.ea=u.c.extend({g:function(a,c,d){this.N=a;c=u.i.B(ca(a),c);this.s={};this.qc=c.poster;this.Da=c.controls;c.customControlsOnMobile!==f&&(u.Sb||u.Za)?(a.controls=c.controls,this.Da=l):a.controls=l;u.c.call(this,this,c,d);this.Q("play",function(a){u.k(this.b,{type:"firstplay",target:this.b})||(a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation())});this.d("ended",this.Vc);this.d("play",this.Ib);this.d("firstplay",this.Wc);this.d("pause",this.Hb);this.d("progress",this.Yc);this.d("durationchange",this.Uc);this.d("error",this.Eb);this.d("fullscreenchange",this.Xc);u.La[this.L]=this;c.plugins&&u.i.qa(c.plugins,function(a,c){this[a](c)},this)}});t=u.ea.prototype;t.f=u.options;t.C=function(){u.La[this.L]=h;this.N&&this.N.player&&(this.N.player=h);this.b&&this.b.player&&(this.b.player=h);clearInterval(this.Na);this.ta();this.h&&this.h.C();u.c.prototype.C.call(this)};function ca(a){var c={sources:[],tracks:[]};u.i.B(c,u.vb(a));if(a.hasChildNodes())for(var d,e=a.childNodes,g=0,j=e.length;g<j;g++)a=e[g],d=a.nodeName.toLowerCase(),"source"===d?c.sources.push(u.vb(a)):"track"===d&&c.tracks.push(u.vb(a));return c}t.e=function(){var a=this.b=u.c.prototype.e.call(this,"div"),c=this.N;c.removeAttribute("width");c.removeAttribute("height");if(c.hasChildNodes())for(var d=c.childNodes.length,e=0,g=c.childNodes;e<d;e++)("source"==g[0].nodeName.toLowerCase()||"track"==g[0].nodeName.toLowerCase())&&c.removeChild(g[0]);c.id=c.id||"vjs_video_"+u.u++;a.id=c.id;a.className=c.className;c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.p("vjs-paused");this.width(this.f.width,f);this.height(this.f.height,f);c.parentNode&&c.parentNode.insertBefore(a,c);u.xb(c,a);return a};function F(a,c,d){a.h?(a.Z=l,a.h.C(),a.Cb&&(a.Cb=l,clearInterval(a.Na)),a.Db&&G(a),a.h=l):"Html5"!==c&&a.N&&(a.b.removeChild(a.N),a.N.oc=h,a.N=h);a.ua=c;a.Z=l;var e=u.i.B({source:d,parentEl:a.b},a.f[c.toLowerCase()]);d&&(d.src==a.s.src&&0<a.s.currentTime&&(e.startTime=a.s.currentTime),a.s.src=d.src);a.h=new window.videojs[c](a,e);a.h.M(function(){this.a.Ra();if(!this.j.Kb){var a=this.a;a.Cb=f;a.Na=setInterval(u.bind(a,function(){this.s.lb<this.buffered().end(0)?this.k("progress"):1==H(this)&&(clearInterval(this.Na),this.k("progress"))}),500);a.h.Q("progress",function(){this.j.Kb=f;var a=this.a;a.Cb=l;clearInterval(a.Na)})}this.j.Nb||(a=this.a,a.Db=f,a.d("play",a.wc),a.d("pause",a.ta),a.h.Q("timeupdate",function(){this.j.Nb=f;G(this.a)}))})}function G(a){a.Db=l;a.ta();a.t("play",a.wc);a.t("pause",a.ta)}t.wc=function(){this.dc&&this.ta();this.dc=setInterval(u.bind(this,function(){this.k("timeupdate")}),250)};t.ta=function(){clearInterval(this.dc)};t.Vc=function(){this.f.loop&&(this.currentTime(0),this.play())};t.Ib=function(){u.w(this.b,"vjs-paused");u.p(this.b,"vjs-playing")};t.Wc=function(){this.f.starttime&&this.currentTime(this.f.starttime)};t.Hb=function(){u.w(this.b,"vjs-playing");u.p(this.b,"vjs-paused")};t.Yc=function(){1==H(this)&&this.k("loadedalldata")};t.Uc=function(){this.duration(I(this,"duration"))};t.Eb=function(a){u.log("Video Error",a)};t.Xc=function(){this.F?this.p("vjs-fullscreen"):this.w("vjs-fullscreen")};function J(a,c,d){if(a.h&&a.h.Z)a.h.M(function(){this[c](d)});else try{a.h[c](d)}catch(e){throw u.log(e),e;}}function I(a,c){if(a.h.Z)try{return a.h[c]()}catch(d){throw a.h[c]===b?u.log("Video.js: "+c+" method not defined for "+a.ua+" playback technology.",d):"TypeError"==d.name?(u.log("Video.js: "+c+" unavailable on "+a.ua+" playback technology element.",d),a.h.Z=l):u.log(d),d;}}t.play=function(){J(this,"play");return this};t.pause=function(){J(this,"pause");return this};t.paused=function(){return I(this,"paused")===l?l:f};t.currentTime=function(a){return a!==b?(this.s.vd=a,J(this,"setCurrentTime",a),this.Db&&this.k("timeupdate"),this):this.s.currentTime=I(this,"currentTime")||0};t.duration=function(a){return a!==b?(this.s.duration=parseFloat(a),this):this.s.duration};t.buffered=function(){var a=I(this,"buffered"),c=this.s.lb=this.s.lb||0;a&&(0<a.length&&a.end(0)!==c)&&(c=a.end(0),this.s.lb=c);return u.rb(0,c)};function H(a){return a.duration()?a.buffered().end(0)/a.duration():0}t.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.s.volume=a,J(this,"setVolume",a),u.dd(a),this;a=parseFloat(I(this,"volume"));return isNaN(a)?1:a};t.muted=function(a){return a!==b?(J(this,"setMuted",a),this):I(this,"muted")||l};t.Qa=function(){return I(this,"supportsFullScreen")||l};t.Pa=function(){var a=u.Mb.Pa;this.F=f;a?(u.d(document,a.tb,u.bind(this,function(c){this.F=document[a.F];this.F===l&&u.t(document,a.tb,arguments.callee);this.k("fullscreenchange")})),this.b[a.sc]()):this.h.Qa()?J(this,"enterFullScreen"):(this.Qc=f,this.Lc=document.documentElement.style.overflow,u.d(document,"keydown",u.bind(this,this.gc)),document.documentElement.style.overflow="hidden",u.p(document.body,"vjs-full-window"),this.k("enterFullWindow"),this.k("fullscreenchange"));return this};function K(a){var c=u.Mb.Pa;a.F=l;if(c)document[c.nb]();else a.h.Qa()?J(a,"exitFullScreen"):(L(a),a.k("fullscreenchange"))}t.gc=function(a){27===a.keyCode&&(this.F===f?K(this):L(this))};function L(a){a.Qc=l;u.t(document,"keydown",a.gc);document.documentElement.style.overflow=a.Lc;u.w(document.body,"vjs-full-window");a.k("exitFullWindow")}t.src=function(a){if(a instanceof Array){var c;a:{c=a;for(var d=0,e=this.f.techOrder;d<e.length;d++){var g=u.Y(e[d]),j=window.videojs[g];if(j.isSupported())for(var k=0,q=c;k<q.length;k++){var n=q[k];if(j.canPlaySource(n)){c={source:n,h:g};break a}}}c=l}c?(a=c.source,c=c.h,c==this.ua?this.src(a):F(this,c,a)):this.b.appendChild(u.e("p",{innerHTML:'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'}))}else a instanceof Object?window.videojs[this.ua].canPlaySource(a)?this.src(a.src):this.src([a]):(this.s.src=a,this.Z?(J(this,"src",a),"auto"==this.f.preload&&this.load(),this.f.autoplay&&this.play()):this.M(function(){this.src(a)}));return this};t.load=function(){J(this,"load");return this};t.currentSrc=function(){return I(this,"currentSrc")||this.s.src||""};t.Ma=function(a){return a!==b?(J(this,"setPreload",a),this.f.preload=a,this):I(this,"preload")};t.autoplay=function(a){return a!==b?(J(this,"setAutoplay",a),this.f.autoplay=a,this):I(this,"autoplay")};t.loop=function(a){return a!==b?(J(this,"setLoop",a),this.f.loop=a,this):I(this,"loop")};t.poster=function(a){a!==b&&(this.qc=a);return this.qc};t.controls=function(a){a!==b&&this.Da!==a&&(this.Da=!!a,this.k("controlschange"));return this.Da};t.error=function(){return I(this,"error")};var M,N,O;O=document.createElement("div");N={};O.rd!==b?(N.sc="requestFullscreen",N.nb="exitFullscreen",N.tb="fullscreenchange",N.F="fullScreen"):(document.mozCancelFullScreen?(M="moz",N.F=M+"FullScreen"):(M="webkit",N.F=M+"IsFullScreen"),O[M+"RequestFullScreen"]&&(N.sc=M+"RequestFullScreen",N.nb=M+"CancelFullScreen"),N.tb=M+"fullscreenchange");document[N.nb]&&(u.Mb.Pa=N);u.ba=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.controls()||this.disable();a.Q("play",u.bind(this,function(){var a,c=u.bind(this,this.ha),g=u.bind(this,this.Fa);this.ha();"ontouchstart"in window||(this.a.d("mouseover",c),this.a.d("mouseout",g),this.a.d("pause",u.bind(this,this.nc)),this.a.d("play",u.bind(this,this.Sa)));a=l;this.a.d("touchstart",function(){a=f});this.a.d("touchmove",function(){a=l});this.a.d("touchend",u.bind(this,function(c){var e;a&&(e=this.r().className.search("fade-in"),-1!==e?this.Fa():this.ha());a=l;this.a.paused()||c.preventDefault()}))}))}});u.ba.prototype.f={wd:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{}}};u.ba.prototype.e=function(){return u.e("div",{className:"vjs-control-bar"})};u.ba.prototype.ha=function(){u.c.prototype.ha.call(this);this.a.k("controlsvisible")};u.ba.prototype.Fa=function(){u.c.prototype.Fa.call(this);this.a.k("controlshidden")};u.Vb=u.o.extend({g:function(a,c){u.o.call(this,a,c);a.d("play",u.bind(this,this.Ib));a.d("pause",u.bind(this,this.Hb))}});t=u.Vb.prototype;t.na="Play";t.P=function(){return"vjs-play-control "+u.o.prototype.P.call(this)};t.n=function(){this.a.paused()?this.a.play():this.a.pause()};t.Ib=function(){u.w(this.b,"vjs-paused");u.p(this.b,"vjs-playing");this.b.children[0].children[0].innerHTML="Pause"};t.Hb=function(){u.w(this.b,"vjs-playing");u.p(this.b,"vjs-paused");this.b.children[0].children[0].innerHTML="Play"};u.Wa=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.d("timeupdate",u.bind(this,this.xa))}});u.Wa.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(u.e("div").appendChild(this.content));return a};u.Wa.prototype.xa=function(){var a=this.a.Lb?this.a.s.currentTime:this.a.currentTime();this.content.innerHTML='<span class="vjs-control-text">Current Time </span>'+u.Ga(a,this.a.duration())};u.Xa=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.d("timeupdate",u.bind(this,this.xa))}});u.Xa.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',"aria-live":"off"});a.appendChild(u.e("div").appendChild(this.content));return a};u.Xa.prototype.xa=function(){this.a.duration()&&(this.content.innerHTML='<span class="vjs-control-text">Duration Time </span>'+u.Ga(this.a.duration()))};u.Zb=u.c.extend({g:function(a,c){u.c.call(this,a,c)}});u.Zb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};u.eb=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.d("timeupdate",u.bind(this,this.xa))}});u.eb.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',"aria-live":"off"});a.appendChild(u.e("div").appendChild(this.content));return a};u.eb.prototype.xa=function(){this.a.duration()&&this.a.duration()&&(this.content.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+u.Ga(this.a.duration()-this.a.currentTime()))};u.za=u.o.extend({g:function(a,c){u.o.call(this,a,c)}});u.za.prototype.na="Fullscreen";u.za.prototype.P=function(){return"vjs-fullscreen-control "+u.o.prototype.P.call(this)};u.za.prototype.n=function(){this.a.F?(K(this.a),this.b.children[0].children[0].innerHTML="Fullscreen"):(this.a.Pa(),this.b.children[0].children[0].innerHTML="Non-Fullscreen")};u.cb=u.c.extend({g:function(a,c){u.c.call(this,a,c)}});u.cb.prototype.f={children:{seekBar:{}}};u.cb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};u.Wb=u.J.extend({g:function(a,c){u.J.call(this,a,c);a.d("timeupdate",u.bind(this,this.wa));a.M(u.bind(this,this.wa))}});t=u.Wb.prototype;t.f={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};t.pc="timeupdate";t.e=function(){return u.J.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};t.wa=function(){var a=this.a.Lb?this.a.s.currentTime:this.a.currentTime();this.b.setAttribute("aria-valuenow",u.round(100*this.wb(),2));this.b.setAttribute("aria-valuetext",u.Ga(a,this.a.duration()))};t.wb=function(){return this.a.currentTime()/this.a.duration()};t.Ka=function(a){u.J.prototype.Ka.call(this,a);this.a.Lb=f;this.nd=!this.a.paused();this.a.pause()};t.Fb=function(a){a=C(this,a)*this.a.duration();a==this.a.duration()&&(a-=0.1);this.a.currentTime(a)};t.Gb=function(a){u.J.prototype.Gb.call(this,a);this.a.Lb=l;this.nd&&this.a.play()};t.vc=function(){this.a.currentTime(this.a.currentTime()+5)};t.uc=function(){this.a.currentTime(this.a.currentTime()-5)};u.$a=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.d("progress",u.bind(this,this.update))}});u.$a.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'})};u.$a.prototype.update=function(){this.b.style&&(this.b.style.width=u.round(100*H(this.a),2)+"%")};u.Ub=u.c.extend({g:function(a,c){u.c.call(this,a,c)}});u.Ub.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'})};u.fb=u.fa.extend();u.fb.prototype.defaultValue="00:00";u.fb.prototype.e=function(){return u.fa.prototype.e.call(this,"div",{className:"vjs-seek-handle"})};u.ib=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.h&&(a.h.j&&a.h.j.T===l)&&this.p("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.h.j&&a.h.j.T===l?this.p("vjs-hidden"):this.w("vjs-hidden")}))}});u.ib.prototype.f={children:{volumeBar:{}}};u.ib.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};u.hb=u.J.extend({g:function(a,c){u.J.call(this,a,c);a.d("volumechange",u.bind(this,this.wa));a.M(u.bind(this,this.wa));setTimeout(u.bind(this,this.update),0)}});t=u.hb.prototype;t.wa=function(){this.b.setAttribute("aria-valuenow",u.round(100*this.a.volume(),2));this.b.setAttribute("aria-valuetext",u.round(100*this.a.volume(),2)+"%")};t.f={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};t.pc="volumechange";t.e=function(){return u.J.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};t.Fb=function(a){this.a.volume(C(this,a))};t.wb=function(){return this.a.muted()?0:this.a.volume()};t.vc=function(){this.a.volume(this.a.volume()+0.1)};t.uc=function(){this.a.volume(this.a.volume()-0.1)};u.$b=u.c.extend({g:function(a,c){u.c.call(this,a,c)}});u.$b.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};u.jb=u.fa.extend();u.jb.prototype.defaultValue="00:00";u.jb.prototype.e=function(){return u.fa.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};u.da=u.o.extend({g:function(a,c){u.o.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.h&&(a.h.j&&a.h.j.T===l)&&this.p("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.h.j&&a.h.j.T===l?this.p("vjs-hidden"):this.w("vjs-hidden")}))}});u.da.prototype.e=function(){return u.o.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.da.prototype.n=function(){this.a.muted(this.a.muted()?l:f)};u.da.prototype.update=function(){var a=this.a.volume(),c=3;0===a||this.a.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.a.muted()?"Unmute"!=this.b.children[0].children[0].innerHTML&&(this.b.children[0].children[0].innerHTML="Unmute"):"Mute"!=this.b.children[0].children[0].innerHTML&&(this.b.children[0].children[0].innerHTML="Mute");for(a=0;4>a;a++)u.w(this.b,"vjs-vol-"+a);u.p(this.b,"vjs-vol-"+c)};u.Ba=u.ca.extend({g:function(a,c){u.ca.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.h&&(a.h.j&&a.h.j.T===l)&&this.p("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.h.j&&a.h.j.T===l?this.p("vjs-hidden"):this.w("vjs-hidden")}));this.p("vjs-menu-button")}});u.Ba.prototype.Ea=function(){var a=new u.la(this.a,{Ic:"div"}),c=new u.hb(this.a,u.i.B({md:f},this.f.zd));a.X(c);return a};u.Ba.prototype.n=function(){u.da.prototype.n.call(this);u.ca.prototype.n.call(this)};u.Ba.prototype.e=function(){return u.o.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.Ba.prototype.update=u.da.prototype.update;u.bb=u.o.extend({g:function(a,c){u.o.call(this,a,c);(!a.poster()||!a.controls())&&this.v();a.d("play",u.bind(this,this.v))}});u.bb.prototype.e=function(){var a=u.e("div",{className:"vjs-poster",tabIndex:-1}),c=this.a.poster();c&&("backgroundSize"in a.style?a.style.backgroundImage='url("'+c+'")':a.appendChild(u.e("img",{src:c})));return a};u.bb.prototype.n=function(){this.a.play()};u.Tb=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.d("canplay",u.bind(this,this.v));a.d("canplaythrough",u.bind(this,this.v));a.d("playing",u.bind(this,this.v));a.d("seeked",u.bind(this,this.v));a.d("seeking",u.bind(this,this.show));a.d("seeked",u.bind(this,this.v));a.d("error",u.bind(this,this.show));a.d("waiting",u.bind(this,this.show))}});u.Tb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};u.Ua=u.o.extend({g:function(a,c){u.o.call(this,a,c);a.controls()||this.v();a.d("play",u.bind(this,this.v))}});u.Ua.prototype.e=function(){return u.o.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:"<span></span>","aria-label":"play video"})};u.Ua.prototype.n=function(){this.a.play()};u.q=u.c.extend({g:function(a,c,d){u.c.call(this,a,c,d)}});u.q.prototype.n=u.Za?m():function(){this.a.controls()&&(this.a.paused()?this.a.play():this.a.pause())};u.q.prototype.j={T:f,hc:l,Kb:l,Nb:l};u.media={};u.media.Ta="play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");function da(){var a=u.media.Ta[i];return function(){throw Error('The "'+a+"\" method is not available on the playback technology's API");}}for(var i=u.media.Ta.length-1;0<=i;i--)u.q.prototype[u.media.Ta[i]]=da();u.m=u.q.extend({g:function(a,c,d){this.j.T=u.m.Hc();this.j.Sc=!u.Sb;this.j.hc=f;u.q.call(this,a,c,d);(c=c.source)&&this.b.currentSrc==c.src?a.k("loadstart"):c&&(this.b.src=c.src);a.M(function(){this.f.autoplay&&this.paused()&&(this.N.poster=h,this.play())});this.d("click",this.n);for(a=u.m.Ya.length-1;0<=a;a--)u.d(this.b,u.m.Ya[a],u.bind(this.a,this.Nc));this.Ra()}});t=u.m.prototype;t.C=function(){u.q.prototype.C.call(this)};t.e=function(){var a=this.a,c=a.N;if(!c||this.j.Sc===l)c?(a.r().removeChild(c),c=c.cloneNode(l)):c=u.e("video",{id:a.id()+"_html5_api",className:"vjs-tech"}),c.player=a,u.xb(c,a.r());for(var d=["autoplay","preload","loop","muted"],e=d.length-1;0<=e;e--){var g=d[e];a.f[g]!==h&&(c[g]=a.f[g])}return c};t.Nc=function(a){this.k(a);a.stopPropagation()};t.play=function(){this.b.play()};t.pause=function(){this.b.pause()};t.paused=function(){return this.b.paused};t.currentTime=function(){return this.b.currentTime};t.cd=function(a){try{this.b.currentTime=a}catch(c){u.log(c,"Video is not ready. (Video.js)")}};t.duration=function(){return this.b.duration||0};t.buffered=function(){return this.b.buffered};t.volume=function(){return this.b.volume};t.hd=function(a){this.b.volume=a};t.muted=function(){return this.b.muted};t.fd=function(a){this.b.muted=a};t.width=function(){return this.b.offsetWidth};t.height=function(){return this.b.offsetHeight};t.Qa=function(){return"function"==typeof this.b.webkitEnterFullScreen&&(/Android/.test(u.O)||!/Chrome|Mac OS X 10.5/.test(u.O))?f:l};t.src=function(a){this.b.src=a};t.load=function(){this.b.load()};t.currentSrc=function(){return this.b.currentSrc};t.Ma=function(){return this.b.Ma};t.gd=function(a){this.b.Ma=a};t.autoplay=function(){return this.b.autoplay};t.bd=function(a){this.b.autoplay=a};t.loop=function(){return this.b.loop};t.ed=function(a){this.b.loop=a};t.error=function(){return this.b.error};u.m.isSupported=function(){return!!document.createElement("video").canPlayType};u.m.mb=function(a){return!!document.createElement("video").canPlayType(a.type)};u.m.Hc=function(){var a=u.gb.volume;u.gb.volume=a/2+0.1;return a!==u.gb.volume};u.m.Ya="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");u.Za&&3>u.yc&&(document.createElement("video").constructor.prototype.canPlayType=function(a){return a&&-1!=a.toLowerCase().indexOf("video/mp4")?"maybe":""});u.l=u.q.extend({g:function(a,c,d){u.q.call(this,a,c,d);d=c.source;var e=c.parentEl,g=this.b=u.e("div",{id:a.id()+"_temp_flash"}),j=a.id()+"_flash_api";a=a.f;var k=u.i.B({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:a.autoplay,preload:a.Ma,loop:a.loop,muted:a.muted},c.flashVars),q=u.i.B({wmode:"opaque",bgcolor:"#000000"},c.params),n=u.i.B({id:j,name:j,"class":"vjs-tech"},c.attributes);d&&(k.src=encodeURIComponent(u.ic(d.src)));u.xb(g,e);c.startTime&&this.M(function(){this.load();this.play();this.currentTime(c.startTime)});if(c.frameMode===f&&!u.zc){var s=u.e("iframe",{id:j+"_iframe",name:j+"_iframe",className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});k.readyFunction="ready";k.eventProxyFunction="events";k.errorEventProxyFunction="errors";u.d(s,"load",u.bind(this,function(){var a,d=s.contentWindow;a=s.contentDocument?s.contentDocument:s.contentWindow.document;a.write(u.l.jc(c.swf,k,q,n));d.player=this.a;d.ready=u.bind(this.a,function(c){c=a.getElementById(c);var d=this.h;d.b=c;u.d(c,"click",d.bind(d.n));u.l.ob(d)});d.events=u.bind(this.a,function(a,c){this&&"flash"===this.ua&&this.k(c)});d.errors=u.bind(this.a,function(a,c){u.log("Flash Error",c)})}));g.parentNode.replaceChild(s,g)}else u.l.Mc(c.swf,g,k,q,n)}});t=u.l.prototype;t.C=function(){u.q.prototype.C.call(this)};t.play=function(){this.b.vjs_play()};t.pause=function(){this.b.vjs_pause()};t.src=function(a){a=u.ic(a);this.b.vjs_src(a);if(this.a.autoplay()){var c=this;setTimeout(function(){c.play()},0)}};t.load=function(){this.b.vjs_load()};t.poster=function(){this.b.vjs_getProperty("poster")};t.buffered=function(){return u.rb(0,this.b.vjs_getProperty("buffered"))};t.Qa=r(l);var P=u.l.prototype,Q="preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),R="error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");function ea(){var a=Q[S],c=a.charAt(0).toUpperCase()+a.slice(1);P["set"+c]=function(c){return this.b.vjs_setProperty(a,c)}}function T(a){P[a]=function(){return this.b.vjs_getProperty(a)}}var S;for(S=0;S<Q.length;S++)T(Q[S]),ea();for(S=0;S<R.length;S++)T(R[S]);u.l.isSupported=function(){return 10<=u.l.version()[0]};u.l.mb=function(a){if(a.type in u.l.Pc)return"maybe"};u.l.Pc={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};u.l.onReady=function(a){a=u.r(a);var c=a.player||a.parentNode.player,d=c.h;a.player=c;d.b=a;d.d("click",d.n);u.l.ob(d)};u.l.ob=function(a){a.r().vjs_getProperty?a.Ra():setTimeout(function(){u.l.ob(a)},50)};u.l.onEvent=function(a,c){u.r(a).player.k(c)};u.l.onError=function(a,c){u.r(a).player.k("error");u.log("Flash Error",c,a)};u.l.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};u.l.Mc=function(a,c,d,e,g){a=u.l.jc(a,d,e,g);a=u.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);var j=d.childNodes[0];setTimeout(function(){j.style.display="block"},1E3)};u.l.jc=function(a,c,d,e){var g="",j="",k="";c&&u.i.qa(c,function(a,c){g+=a+"="+c+"&"});d=u.i.B({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);u.i.qa(d,function(a,c){j+='<param name="'+a+'" value="'+c+'" />'});e=u.i.B({data:a,width:"100%",height:"100%"},e);u.i.qa(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash"'+k+">"+j+"</object>"};u.Dc=u.c.extend({g:function(a,c,d){u.c.call(this,a,c,d);if(!a.f.sources||0===a.f.sources.length){c=0;for(d=a.f.techOrder;c<d.length;c++){var e=u.Y(d[c]),g=window.videojs[e];if(g&&g.isSupported()){F(a,e);break}}}else a.src(a.f.sources)}});function U(a){a.va=a.va||[];return a.va}function V(a,c,d){for(var e=a.va,g=0,j=e.length,k,q;g<j;g++)k=e[g],k.id()===c?(k.show(),q=k):d&&(k.H()==d&&0<k.mode())&&k.disable();(c=q?q.H():d?d:l)&&a.k(c+"trackchange")}u.U=u.c.extend({g:function(a,c){u.c.call(this,a,c);this.L=c.id||"vjs_"+c.kind+"_"+c.language+"_"+u.u++;this.tc=c.src;this.Jc=c["default"]||c.dflt;this.kd=c.title;this.ud=c.srclang;this.Rc=c.label;this.ga=[];this.ac=[];this.ia=this.ja=0;this.a.d("fullscreenchange",u.bind(this,this.Ec))}});t=u.U.prototype;t.H=p("A");t.src=p("tc");t.sb=p("Jc");t.title=p("kd");t.label=p("Rc");t.readyState=p("ja");t.mode=p("ia");t.Ec=function(){this.b.style.fontSize=this.a.F?140*(screen.width/this.a.width())+"%":""};t.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-"+this.A+" vjs-text-track"})};t.show=function(){W(this);this.ia=2;u.c.prototype.show.call(this)};t.v=function(){W(this);this.ia=1;u.c.prototype.v.call(this)};t.disable=function(){2==this.ia&&this.v();this.a.t("timeupdate",u.bind(this,this.update,this.L));this.a.t("ended",u.bind(this,this.reset,this.L));this.reset();this.a.R.textTrackDisplay.removeChild(this);this.ia=0};function W(a){0===a.ja&&a.load();0===a.ia&&(a.a.d("timeupdate",u.bind(a,a.update,a.L)),a.a.d("ended",u.bind(a,a.reset,a.L)),("captions"===a.A||"subtitles"===a.A)&&a.a.R.textTrackDisplay.X(a))}t.load=function(){0===this.ja&&(this.ja=1,u.get(this.tc,u.bind(this,this.Zc),u.bind(this,this.Eb)))};t.Eb=function(a){this.error=a;this.ja=3;this.k("error")};t.Zc=function(a){var c,d;a=a.split("\n");for(var e="",g=1,j=a.length;g<j;g++)if(e=u.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=u.trim(a[++g])):c=this.ga.length;c={id:c,index:this.ga.length};d=e.split(" --\x3e ");c.startTime=X(d[0]);c.ra=X(d[1]);for(d=[];a[++g]&&(e=u.trim(a[g]));)d.push(e);c.text=d.join("<br/>");this.ga.push(c)}this.ja=2;this.k("loaded")};function X(a){var c=a.split(":");a=0;var d,e,g;3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);c=c.split(/\s+/);c=c.splice(0,1)[0];c=c.split(/\.|,/);g=parseFloat(c[1]);c=c[0];a+=3600*parseFloat(d);a+=60*parseFloat(e);a+=parseFloat(c);g&&(a+=g/1E3);return a}t.update=function(){if(0<this.ga.length){var a=this.a.currentTime();if(this.Jb===b||a<this.Jb||this.Ha<=a){var c=this.ga,d=this.a.duration(),e=0,g=l,j=[],k,q,n,s;a>=this.Ha||this.Ha===b?s=this.ub!==b?this.ub:0:(g=f,s=this.Bb!==b?this.Bb:c.length-1);for(;;){n=c[s];if(n.ra<=a)e=Math.max(e,n.ra),n.Ca&&(n.Ca=l);else if(a<n.startTime){if(d=Math.min(d,n.startTime),n.Ca&&(n.Ca=l),!g)break}else g?(j.splice(0,0,n),q===b&&(q=s),k=s):(j.push(n),k===b&&(k=s),q=s),d=Math.min(d,n.ra),e=Math.max(e,n.startTime),n.Ca=f;if(g)if(0===s)break;else s--;else if(s===c.length-1)break;else s++}this.ac=j;this.Ha=d;this.Jb=e;this.ub=k;this.Bb=q;a=this.ac;c="";d=0;for(e=a.length;d<e;d++)c+='<span class="vjs-tt-cue">'+a[d].text+"</span>";this.b.innerHTML=c;this.k("cuechange")}}};t.reset=function(){this.Ha=0;this.Jb=this.a.duration();this.Bb=this.ub=0};u.Pb=u.U.extend();u.Pb.prototype.A="captions";u.Xb=u.U.extend();u.Xb.prototype.A="subtitles";u.Rb=u.U.extend();u.Rb.prototype.A="chapters";u.Yb=u.c.extend({g:function(a,c,d){u.c.call(this,a,c,d);if(a.f.tracks&&0<a.f.tracks.length){c=this.a;a=a.f.tracks;var e;for(d=0;d<a.length;d++){e=a[d];var g=c,j=e.kind,k=e.label,q=e.language,n=e;e=g.va=g.va||[];n=n||{};n.kind=j;n.label=k;n.language=q;j=u.Y(j||"subtitles");g=new window.videojs[j+"Track"](g,n);e.push(g)}}}});u.Yb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};u.W=u.I.extend({g:function(a,c){var d=this.aa=c.track;c.label=d.label();c.selected=d.sb();u.I.call(this,a,c);this.a.d(d.H()+"trackchange",u.bind(this,this.update))}});u.W.prototype.n=function(){u.I.prototype.n.call(this);V(this.a,this.aa.L,this.aa.H())};u.W.prototype.update=function(){2==this.aa.mode()?this.selected(f):this.selected(l)};u.ab=u.W.extend({g:function(a,c){c.track={H:function(){return c.kind},oc:a,label:function(){return c.kind+" off"},sb:r(l),mode:r(l)};u.W.call(this,a,c);this.selected(f)}});u.ab.prototype.n=function(){u.W.prototype.n.call(this);V(this.a,this.aa.L,this.aa.H())};u.ab.prototype.update=function(){for(var a=U(this.a),c=0,d=a.length,e,g=f;c<d;c++)e=a[c],e.H()==this.aa.H()&&2==e.mode()&&(g=l);g?this.selected(f):this.selected(l)};u.V=u.ca.extend({g:function(a,c){u.ca.call(this,a,c);1>=this.G.length&&this.v()}});u.V.prototype.qb=function(){var a=[],c;a.push(new u.ab(this.a,{kind:this.A}));for(var d=0;d<U(this.a).length;d++)c=U(this.a)[d],c.H()===this.A&&a.push(new u.W(this.a,{track:c}));return a};u.ya=u.V.extend({g:function(a,c,d){u.V.call(this,a,c,d);this.b.setAttribute("aria-label","Captions Menu")}});u.ya.prototype.A="captions";u.ya.prototype.na="Captions";u.ya.prototype.className="vjs-captions-button";u.Aa=u.V.extend({g:function(a,c,d){u.V.call(this,a,c,d);this.b.setAttribute("aria-label","Subtitles Menu")}});u.Aa.prototype.A="subtitles";u.Aa.prototype.na="Subtitles";u.Aa.prototype.className="vjs-subtitles-button";u.Qb=u.V.extend({g:function(a,c,d){u.V.call(this,a,c,d);this.b.setAttribute("aria-label","Chapters Menu")}});t=u.Qb.prototype;t.A="chapters";t.na="Chapters";t.className="vjs-chapters-button";t.qb=function(){for(var a=[],c,d=0;d<U(this.a).length;d++)c=U(this.a)[d],c.H()===this.A&&a.push(new u.W(this.a,{track:c}));return a};t.Ea=function(){for(var a=U(this.a),c=0,d=a.length,e,g,j=this.G=[];c<d;c++)if(e=a[c],e.H()==this.A&&e.sb()){if(2>e.readyState()){this.sd=e;e.d("loaded",u.bind(this,this.Ea));return}g=e;break}a=this.sa=new u.la(this.a);a.b.appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Y(this.A),jd:-1}));if(g){e=g.ga;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new u.Va(this.a,{track:g,cue:k}),j.push(k),a.X(k)}0<this.G.length&&this.show();return a};u.Va=u.I.extend({g:function(a,c){var d=this.aa=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.ra;u.I.call(this,a,c);d.d("cuechange",u.bind(this,this.update))}});u.Va.prototype.n=function(){u.I.prototype.n.call(this);this.a.currentTime(this.cue.startTime);this.update(this.cue.startTime)};u.Va.prototype.update=function(){var a=this.cue,c=this.a.currentTime();a.startTime<=c&&c<a.ra?this.selected(f):this.selected(l)};u.i.B(u.ba.prototype.f.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)u.JSON=window.JSON;else{u.JSON={};var Y=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;u.JSON.parse=function(a,c){function d(a,e){var k,q,n=a[e];if(n&&"object"===typeof n)for(k in n)Object.prototype.hasOwnProperty.call(n,k)&&(q=d(n,k),q!==b?n[k]=q:delete n[k]);return c.call(a,e,n)}var e;a=String(a);Y.lastIndex=0;Y.test(a)&&(a=a.replace(Y,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}u.bc=function(){var a,c,d=document.getElementsByTagName("video");if(d&&0<d.length)for(var e=0,g=d.length;e<g;e++)if((c=d[e])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==h&&(a=u.JSON.parse(a||"{}"),v(c,a)));else{u.kb();break}else u.od||u.kb()};u.kb=function(){setTimeout(u.bc,1)};u.Q(window,"load",function(){u.od=f});u.kb();u.$c=function(a,c){u.ea.prototype[a]=c};var Z=this;Z.pd=f;function $(a,c){var d=a.split("."),e=Z;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",u);$("_V_",u);$("videojs.options",u.options);$("videojs.cache",u.oa);$("videojs.Component",u.c);u.c.prototype.dispose=u.c.prototype.C;u.c.prototype.createEl=u.c.prototype.e;u.c.prototype.el=u.c.prototype.r;u.c.prototype.addChild=u.c.prototype.X;u.c.prototype.children=u.c.prototype.children;u.c.prototype.on=u.c.prototype.d;u.c.prototype.off=u.c.prototype.t;u.c.prototype.one=u.c.prototype.Q;u.c.prototype.trigger=u.c.prototype.k;u.c.prototype.triggerReady=u.c.prototype.Ra;u.c.prototype.show=u.c.prototype.show;u.c.prototype.hide=u.c.prototype.v;u.c.prototype.width=u.c.prototype.width;u.c.prototype.height=u.c.prototype.height;u.c.prototype.dimensions=u.c.prototype.Kc;u.c.prototype.ready=u.c.prototype.M;$("videojs.Player",u.ea);u.ea.prototype.dispose=u.ea.prototype.C;$("videojs.MediaLoader",u.Dc);$("videojs.TextTrackDisplay",u.Yb);$("videojs.ControlBar",u.ba);$("videojs.Button",u.o);$("videojs.PlayToggle",u.Vb);$("videojs.FullscreenToggle",u.za);$("videojs.BigPlayButton",u.Ua);$("videojs.LoadingSpinner",u.Tb);$("videojs.CurrentTimeDisplay",u.Wa);$("videojs.DurationDisplay",u.Xa);$("videojs.TimeDivider",u.Zb);$("videojs.RemainingTimeDisplay",u.eb);$("videojs.Slider",u.J);$("videojs.ProgressControl",u.cb);$("videojs.SeekBar",u.Wb);$("videojs.LoadProgressBar",u.$a);$("videojs.PlayProgressBar",u.Ub);$("videojs.SeekHandle",u.fb);$("videojs.VolumeControl",u.ib);$("videojs.VolumeBar",u.hb);$("videojs.VolumeLevel",u.$b);$("videojs.VolumeHandle",u.jb);$("videojs.MuteToggle",u.da);$("videojs.PosterImage",u.bb);$("videojs.Menu",u.la);$("videojs.MenuItem",u.I);$("videojs.SubtitlesButton",u.Aa);$("videojs.CaptionsButton",u.ya);$("videojs.ChaptersButton",u.Qb);$("videojs.MediaTechController",u.q);u.q.prototype.features=u.q.prototype.j;u.q.prototype.j.volumeControl=u.q.prototype.j.T;u.q.prototype.j.fullscreenResize=u.q.prototype.j.hc;u.q.prototype.j.progressEvents=u.q.prototype.j.Kb;u.q.prototype.j.timeupdateEvents=u.q.prototype.j.Nb;$("videojs.Html5",u.m);u.m.Events=u.m.Ya;u.m.isSupported=u.m.isSupported;u.m.canPlaySource=u.m.mb;u.m.prototype.setCurrentTime=u.m.prototype.cd;u.m.prototype.setVolume=u.m.prototype.hd;u.m.prototype.setMuted=u.m.prototype.fd;u.m.prototype.setPreload=u.m.prototype.gd;u.m.prototype.setAutoplay=u.m.prototype.bd;u.m.prototype.setLoop=u.m.prototype.ed;$("videojs.Flash",u.l);u.l.isSupported=u.l.isSupported;u.l.canPlaySource=u.l.mb;u.l.onReady=u.l.onReady;$("videojs.TextTrack",u.U);u.U.prototype.label=u.U.prototype.label;$("videojs.CaptionsTrack",u.Pb);$("videojs.SubtitlesTrack",u.Xb);$("videojs.ChaptersTrack",u.Rb);$("videojs.autoSetup",u.bc);$("videojs.plugin",u.$c);$("videojs.createTimeRange",u.rb)})();//@ sourceMappingURL=video.js.map
_V_.options.flash.swf = "/viewer/video-js/video-js.swf"

/**
 * This is a small polyfill to get event listeners to be 
 * the same for all browsers.
 */
if(!Element.prototype.addEventListener){var oListeners={};function runListeners(oEvent){if(!oEvent){oEvent=window.event}for(var lstId=0,elId=0,oEvtListeners=oListeners[oEvent.type];elId<oEvtListeners.aEls.length;elId++){if(oEvtListeners.aEls[elId]===this){for(lstId;lstId<oEvtListeners.aEvts[elId].length;lstId++){oEvtListeners.aEvts[elId][lstId].call(this,oEvent)}break}}}Element.prototype.addEventListener=function(sEventType,fListener){if(oListeners.hasOwnProperty(sEventType)){var oEvtListeners=oListeners[sEventType];for(var nElIdx=-1,elId=0;elId<oEvtListeners.aEls.length;elId++){if(oEvtListeners.aEls[elId]===this){nElIdx=elId;break}}if(nElIdx===-1){oEvtListeners.aEls.push(this);oEvtListeners.aEvts.push([fListener]);this["on"+sEventType]=runListeners}else{var aElListeners=oEvtListeners.aEvts[nElIdx];if(this["on"+sEventType]!==runListeners){aElListeners.splice(0);this["on"+sEventType]=runListeners}for(var lstId=0;lstId<aElListeners.length;lstId++){if(aElListeners[lstId]===fListener){return}}aElListeners.push(fListener)}}else{oListeners[sEventType]={aEls:[this],aEvts:[[fListener]]};this["on"+sEventType]=runListeners}};Element.prototype.removeEventListener=function(sEventType,fListener){if(!oListeners.hasOwnProperty(sEventType)){return}var oEvtListeners=oListeners[sEventType];for(var nElIdx=-1,elId=0;elId<oEvtListeners.aEls.length;elId++){if(oEvtListeners.aEls[elId]===this){nElIdx=elId;break}}if(nElIdx===-1){return}for(var lstId=0,aElListeners=oEvtListeners.aEvts[nElIdx];lstId<aElListeners.length;lstId++){if(aElListeners[lstId]===fListener){aElListeners.splice(lstId,1)}}}}

// hammer.js
(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this);(function(j){j.plugins.showTouches=function(f){var g='position:absolute;z-index:9999;left:0;top:0;height:14px;width:14px;border:solid 2px #777;'+'background:rgba(255,255,255,.7);border-radius:20px;pointer-events:none;'+'margin-top:-9px;margin-left:-9px;';var h={};var i={};function removeUnusedElements(){for(var a in h){if(h.hasOwnProperty(a)&&!i[a]){document.body.removeChild(h[a]);delete h[a]}}}j.detection.register({name:'show_touches',priority:0,handler:function(a,b){i={};if(a.pointerType!=j.POINTER_MOUSE&&!f){removeUnusedElements();return}for(var t=0,total_touches=a.touches.length;t<total_touches;t++){var c=a.touches[t];var d=c.identifier;i[d]=c;if(!h[d]){var e=document.createElement('div');e.setAttribute('style',g);document.body.appendChild(e);h[d]=e}h[d].style.left=c.pageX+'px';h[d].style.top=c.pageY+'px'}removeUnusedElements()}})}})(window.Hammer);

/**
 * This is a ployfill that makes requestAnimationFrame available to
 * all browsers old and new.
 *
 * @url https://gist.github.com/paulirish/1579671
 */
(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame']}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);lastTime=currTime+timeToCall;return id};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id)}}());

/**
 * A JS browser detection function. Described here:
 *
 * @url http://www.quirksmode.org/js/detect.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('b W={Y:p(){6.y=6.h(6.B)||"N l y";6.F=6.n(3.7)||6.n(3.S)||"z l F";6.x=6.h(6.v)||"z l x"},h:p(8){11(b i=0;i<8.s;i++){b a=8[i].4;b q=8[i].H;6.o=8[i].9||8[i].2;e(a){e(a.w(8[i].5)!=-1)c 8[i].2}T e(q)c 8[i].2}},n:p(a){b f=a.w(6.o);e(f==-1)c;c R(a.Q(f+6.o.s+1))},B:[{4:3.7,5:"E",2:"E"},{4:3.7,5:"m",9:"m/",2:"m"},{4:3.d,5:"U",2:"K",9:"I"},{H:13.L,2:"M",9:"I"},{4:3.d,5:"G",2:"G"},{4:3.d,5:"O",2:"P"},{4:3.7,5:"D",2:"D"},{4:3.d,5:"C",2:"C"},{4:3.7,5:"j",2:"j"},{4:3.7,5:"A",2:"J",9:"A"},{4:3.7,5:"V",2:"g",9:"X"},{4:3.7,5:"g",2:"j",9:"g"}],v:[{4:3.k,5:"Z",2:"10"},{4:3.k,5:"u",2:"u"},{4:3.7,5:"t",2:"t/12"},{4:3.k,5:"r",2:"r"}]};',62,66,'||identity|navigator|string|subString|this|userAgent|data|versionSearch|dataString|var|return|vendor|if|index|Mozilla|searchString||Netscape|platform|unknown|Omnweb|searchVersion|versionSearchString|function|dataProp|Linux|length|phone|Mac|dataOS|indexOf|OS|browser|an|MSIE|dataBrowser|Camino|Firefox|Chrome|version|cab|prop|Version|Explorer|Safari|opera|Opera|An|KDE|Konqueror|substring|parseFloat|appVersion|else|Apple|Gecko|BrowserDetect|rv|init|Win|Windows|for|pod|window'.split('|'),0,{}))
BrowserDetect.init();

/**
 * Main class.
 *
 * @class
 * This is the main class and is used to initiate _containers and _players, both subclasses
 * of this. All containers will be a member of this class (although they are returned when
 * the init() function is called).
 *
 * This class is initiated with several of the options below, all optional, that will take on
 * the default options if not explicitly set.
 *
 * @param {object} [options] the options
 */
var _i3dv_ = function (options, elem){
	
	if(typeof options == 'object' && options !== '[object NodeList]'){
		this.options = options; // Starts of by setting the options to the user defined options.
	}
	
    // These are all the default options.
    // @todo the baseurl will be set to the i3dv CDN once complete...this will mean that
    //  once we're all set up, players will automatically retrieve videos from the CDN. At
    //  the moment, everything is done locally.
    this.default_options = {
        modelid:        "tesseract",        // The id of the model (the name of the video folder/file and sprite folder.
        playertype:     "auto",             // The type of player to use. Setting to "auto" will intelligently decide
                                            //  based on browser capabilities. Available players: "video", "videojs", "image", "canvas".
        quality:        0,                  // The quality, from 1-100. This is a proprietary scale.
        isMax:          false,              // Whether the container is a maximised container or not.
        init:           false,              // Whether to call the init function straight away
        momentum:       false,              // This describes whether objects carry on moving after being dragged.
        decayfactor :   50,                 // The friction after the movement. When set to 0, the object moves indefinitely.
        trans:          false,              // Whether transparency should be used. Not supported on iPhone.
        transtolerance: 100,                // The tolerance of the above. @see this._container._canvasPlayer.trans()
        interactive:    true,               // Whether the player can be interacted with.
        move:           true,               // Whether the player can be moved.
        zoom:           true,               // Whether the player can be zoomed.
        keys:           true,               // Whether the player responds the keypresses.
        loading:        true,               // Whether the loading graphic appears.
        maximise:       true,               // Whether you can maximise or not.
        instructions:   true,               // Whether the instructions appear or not.
        progresstext:   "",                 // @deprecated
        loadingtext:    "Loading...",       // @deprecated
        vfps:           25,                 // The fps of the video files
        steps: {                            // The amount of steps the model was rendered with.
            x :         36,                 // 
            y:          17                  // 
        },                                  // 
        start: {                            // The starting values for various values:
            col :       4,                  // column
            row:        8,                  // row
            scale:      1.0,                // scale
            v: {                            // velocity in the:
                x: -2.0,                    // x direction
                y: 0.0                      // y direction
            }                               // 
        },                                  // 
        keycode: {                          // The keycodes for up down left and right movement.
            left:               37,         // This defaults to the arrow keys, but you could
            up:                 38,         // just as easily set it to the WASD keys.
            right:              39,         // 
            down:               40          // 
        },                                  // 
        friction: {                         // The friction in x and y directions. Auto will intelligently
            x:          "auto",             // change the friction depending on viewer size.
            y:          "auto",             // 
        },                                  // 
        bg:             "#CCC",             // The background colour to use in case of transparency
        secretkey:      false,              // @since ?? Not yet implemented. Will be used to change certain options (ads, for example)
        ads:            true,               // Whether ads appear.
        overlay:        true,               // Whether the overlay is rendered
        baseurl:        "",                 // The base url. When released, this will be the CDN url.
        renderpath:     "renders/",         // The path to models after the base url
        modelpath:      "models/",          // The path to models after the base url
        imgpath:        "img/",             // The img path to use for skin elements.
        preset:         0                   // The preset values (described below @see below) 
    };
    
    /** 
     * Where an options can take multiple types, it is
     *  necessary to say so in this variable with each
     *  type seperated by a "pipe" character, i.e. |
     */
    this.default_options_types = {
        friction: {
            x:          "string|int",
            y:          "string|int",
        },
        preset: "string|int",
        bg: "color"
    };
    
    /**
     * This holds all the container objects allowing for 
     * multiple viewers on the page from the same i3dv object.
     */
    this.containers = [];
    
    /**
     * This checks and updates all the options.
     *
     * @see this.checkOptions
     * @see this.update
     */
    this.options = this.update(this.default_options, this.options);
    this.options = this.checkOptions(
        this.options, 
        this.default_options, 
        this.default_options_types
    );
    
    /**
     * This deals with any presets given in the options. These take precedence over any
     * other options set.
     *
     * @todo deal with presets in data tags too.
     */
    if(this.options["preset"] !== false ){
        this.options["preset"] = String(this.options["preset"]);
        switch(this.options["preset"]){
            case "staticanim":
            case 1:
                this.options["interactive"] = false;
                this.options["momentum"]    = true;
                this.options["decayfactor"] = 0;
                break;
            case "static":
            case 2:
                this.options["interactive"] = false;
                this.options["momentum"]    = false;
                this.options["decayfactor"] = 0;   
                break;
            case "rotator":
            case 3:
                this.options["interactive"] = true;
                this.options["momentum"]    = true;
                this.options["decayfactor"] = 0;
                break;
            case "default":
            case 0:
            default:
        }
    }
    
    // If the options.init == true, this will initiate straight away.
    if(this.options["init"]) this.init();

	if (typeof options == 'string' || options == '[object NodeList]'){
		this.init(options);
	}
	
	if(typeof elem !== 'undefined'){
		this.init(elem);
	}
};
    
/**
 * Creates the container(s). Based on what [id] is given this will either:
 *  Creates the elements given
 *  Creates all elements with a given classname
 *  Creates the element with the given [id] as their id attribute
 *
 * Then, depending on whether [init] is set, it initialises them.
 *
 * @param {String|DOMelement(s)} [id] Either a Dom element or list of dom elements or a string containing either a class or id. Defaults to "i3dv_viewer"
 * @param {bool} [init] Whether to initiate each container, defaults to true.
 */
_i3dv_.prototype.init = function (id, init){
    id = (typeof id === "undefined" || id === null) ? "i3dv_viewer" : id;
    init = (typeof init === "undefined" || id === null) ? true : init;
    
    if(typeof id === "string"){
        var conts = document.getElementsByClassName(id);
        if(conts.length === 0 || conts == null){
            conts = document.getElementById(id);
            if(conts === null || conts.length === 0){
                if(id !== "i3dv_viewer"){
                    throw new Error("element(s) with id/class " + id + " do not exist");
                } else {
                    console.log('Nothing to initialise / no containers found...');
                    return false;
                }
            } else {
                this.addContainer(conts);
            }
        } else {
            for(var q = 0; q < conts.length; q++){
                this.addContainer(conts[q]);
            }
        }
    } else if (typeof id === "object"){
    	if(id == '[object NodeList]'){
            for(var q = 0; q < id.length; q++){
                this.addContainer(id[q]);
            }
    	} else {
    		this.addContainer(id);
    	}
    } else {
        throw new Error("Given element/id not valid.");
    }
    
    if(this.containers.length != 0 && typeof this.containers !== "undefined"){
        if(init) this.prep(this.containers);
    } else {
        if(id !== "i3dv_viewer"){
            throw new Error("element(s) with id/class " + id + " do not exist"); 
        } else {
            console.log("Nothing to initialise / no containers found...");
        }
    }
    return this.containers;
}


    
/**
 * Adds a container and sets its tab index
 *
 * @param {DOMelement} elem the element to initiate as a container.
 * @todo Set the tab index the the container contructor (theres no reason for it to be here??)
 */
_i3dv_.prototype.addContainer = function (elem) {
    var cont = new _i3dv_container(elem,this.options);
    this.containers.push(cont);
    return this.containers[this.containers.length-1];
}

/**
 * This initiates the list of containers.
 *
 * @param {_container[]} conts An array of _containers
 */
_i3dv_.prototype.prep = function (conts){
    for(var q = 0; q < conts.length; q++){
        conts[q].init();
    }
}

/**
 * Casts variable x to type.
 *
 * @param {mixed} x - the variable to cast.
 * @param {string} [type] - the type. Can be a list of types seperated by
 *  the pipe character | in the order of preference. Defaults to boolean.
 */
_i3dv_.prototype.cast = function (x, type){
    type = (typeof type == "undefined") ? "b" : type;
    var parts = type.split("|");
    for(var q = 0; q < parts.length; q++){
        switch(parts[q][0].toLowerCase()){
            case "f":
            case "n":
                return parseFloat(x);
            case "i":
                if(
                    (isNaN(parseFloat(x)) && isFinite(x)) 
                    || (x == parseInt(x))
                ) return parseInt(x);
                break;
            case "c":
                x = String(x);
                if(x[0] !== "#") x = "#" + x;
                return x
            case "s":
                return String(x);
            case "b":
            default:
                if(typeof x === "string"){
                    if(x.toLowerCase() == "true") {x = true;}
                    else {x = false;}
                }
                return !! x;
        }
    }
}
    
/**
 * Updates o's properties with n.
 *
 * @param {object} o - the old object
 * @param {object} n - the new object
 * @param {boolean} [right] - if set to true, all properties from 
 *  n will copied whether they exist in o or not.
 */
_i3dv_.prototype.update = function (o, n, right){
    right = (typeof right === "undefined") ? false : right;
    var newOb = this.clone(o);
    for(var key in n){
        if( o.hasOwnProperty( key ) || right ) {
            if(typeof o[key] === "object") newOb[key] = this.update(o[key], n[key]);
            else newOb[key] = n[key];
        }
    }
    return newOb;
}
    
/**
 * Checks all of the properties of o against the defaults in dft.
 * It casts them to the type found in dft unless the type is explicitly
 * set in ot in which case that takes precedence.
 *
 * @param {object} o - the original object
 * @param {object} dft - an object with default properties
 * @param {object} [ot] - an object with properties that are set to the
 *  expected type of o's respective property.
 *
 * @example
 *  var o = {prop1: 1, prop2: true, prop3: "abc"};
 *  var dft = {prop1: true, prop2: true, prop3: true};
 *  var ot = {prop3: "string"};
 *  console.log(_i3dv_.checkOptions(o,dft,ot)); 
 *  // outputs: {prop1: true, prop1: true, prop3: "abc"}
 *
 */
_i3dv_.prototype.checkOptions = function(o, dft, ot) {
    ot = (typeof ot == "undefined") ? false : ot;
    for(var key in o){
        if(typeof o[key] === "object"){
            if(typeof ot === "undefined") {
                if(!dft.hasOwnProperty(key)) break;
                this.checkOptions(o[key], dft[key], {});
            } else {
                this.checkOptions(o[key], dft[key], ot[key]);
            }
        } else {
            if((typeof ot != "undefined") && ot.hasOwnProperty( key )) {
                o[key] = this.cast(o[key], ot[key]);
            } else {
                if(!dft.hasOwnProperty(key)) break;
                o[key] = this.cast(o[key], typeof dft[key]);
            }
        }
    }
    return o;
}

/**
 * Makes an exact copy of o recursively
 */
_i3dv_.prototype.clone = function(obj) {
    var newObj = (obj instanceof Array) ? [] : {};
    for (prop in obj) {
        if (prop == 'clone') continue;
        if (obj[prop] && typeof obj[prop] === "object") {
            newObj[prop] = this.clone(obj[prop]);
        } else newObj[prop] = obj[prop]
    }
    return newObj;
}

/**
 * The container object. This contains all functions and properties of the container, 
 * including the player objects.
 *
 * @param {String|DOMelement} id Either a dom element or the ID of a dom element.
 * @param {object} o the options to inherit.
 */
var _i3dv_container = function (id, o){
        this.options = o;
        // Whether this is a maximised player.
        this.isMax = false;
        // Whether this is currently active.
        this.active = false;
        // Sets id depending on what id is.
        this.id = (typeof id === "object") ? id : document.getElementById(id);

        // Creates the options variable for the container by cloning the options and
        // populating the new options with variables from the data tags.
        this.options = this.checkDataTags(_i3dv_.prototype.clone(this.options), this.id);
        
        // Whether certain things have been done...just for keeping track of certain things.
        // @todo with most of these there is a better way of telling this.
        this.doneOverlayTimeouts = false;
        this.hasHoveredOverMaximise = false;
        this.hasZoomed = false;
}

/**
 * Initialises the container. 
 * 
 * @param {object} [o] inits the container with these options.
 */
_i3dv_container.prototype.init = function (o) {
	if(typeof o !== "undefined"){
		this.options = _i3dv_.prototype.update(this.options,o);
	}
    // Destroys the viewer if it is already active (i.e. being re-initialised).
    if(this.active) this.destroy();
    
    // Sets the container to the id passed and creates the player container inside the id container.
    // I.e. the user passes us id and we create a container for our player inside it (there are 2 containers,
    // the one that already existed [id or this.container] and the one we create [this.elem])
    this.container = this.id;
    this.container.innerHTML = "";
    while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
    }
    this.elem = document.createElement("div");
    this.container.appendChild(this.elem);
    this.elem.classList.add("i3dv_container");
    this.elem.id = "i3dv_" + Math.floor(Math.random()*1000);
    this.setTabIndex(1);
    
    // Saves the original style (not used)
    this.originalstyle = this.elem.style;
    
    // sets a few mandatory styles (in case of changes to the css)
    this.elem.style.overflow = "hidden";
    if(!this.options.isMax)
        this.elem.style.position = "relative";
    this.elem.style.outline  = "none";

    // This stops the elastic scrolling on iOS (and other touch ?) devices.
    this.elem.addEventListener('touchmove',function (e){e.preventDefault();},false);
    
    // Changes the background color to the bg option.
    this.elem.style.backgroundColor = "" + this.options["bg"];
    
    // Sets the dynamic cursor.
    if(this.options["interactive"] && !this.options["nomove"]){
        var that = this;
        this.elem.onmousedown = function (e) {
            this.style.cursor = "url('" + that.options.imgpath + "move_cursor.png'), move";
        }
        this.elem.onmouseup = function (e) {
            this.style.cursor = "default";
        }
    }
    
    // Finally, this container's state is now *active*
    this.active = true;
    
    // Either gets the thumbnail and changes background based on that, or in the
    // case of the trans option being true, just sets the background to the bg
    // variable.
    if(this.trans){
        this.elem.style.background = this.options.bg;
    } else {
        this.getThumb();
    }
    
    // Starts the loading sequence.
    this.doLoading();
    this.doOverlay();
    this.load();
    this.doEvents();
    this.checkModel();
    return this.player;
}

/**
 * Callback for a click on the maximise button.
 *
 * All this actually does is create a div the size of the screen,
 * puts it in place and makes a viewer out of it.
 */
_i3dv_container.prototype.maximise = function () {
    // Makes sure this isn't the maximised version.
    if(this.options.isMax === false){
        // Creating the new element and setting the styles.
        this.elem_maxed = document.createElement("div");
        document.body.appendChild(this.elem_maxed);
        this.elem_maxed.id = this.elem.id + "_maxed";
        this.elem_maxed.classList.add("i3dv_container_maxed");
        
        // Clones the options for the new viewer, with a few changes
        var o = _i3dv_.prototype.clone(this.options);
        o.isMax = true;
        o.loadingtext = "Loading High Resolution Model...";
        o.start.x = o.start.col = this.player.i.col;
        o.start.y = o.start.row = this.player.i.row;
        // create a new _i3dv_ instance.
        var temp = new _i3dv_(o);
        var cont = temp.init(this.elem_maxed);
        var that = this;
        cont.max.onclick = function (e){
            e.preventDefault();
            document.body.removeChild(that.elem_maxed);
            return false;
        }
    } else {
        document.body.removeChild(this.elem);
    }
    return false;
}

/**
 * Gets the thumbnail in the video folder, for doing the
 * background colour. Doing this we don't have to wait for the 
 * whole video/sprite to load before getting the correct
 * background colour.
 */
_i3dv_container.prototype.getThumb = function (){
    if(!this.active) return;
    this.thumbcanvas   = document.createElement("canvas");
    this.context       = this.thumbcanvas.getContext("2d");
    this.thumb         = new Image();
    this.thumb.src     = this.options.baseurl + this.options.renderpath + this.options.modelid + "/videos/thumb.jpg";
    var that           = this;
    this.thumb.onload  = function(){
        that.thumbLoadComplete.call(that);
    };
}

/**
 * Callback for when the thumbnail finishes loading.
 * This basically just gets the top left pixel and makes
 * the background that colour.
 */
_i3dv_container.prototype.thumbLoadComplete = function (){
    if(!this.active) return;
    this.thumbcanvas.style.height = 
        this.thumbcanvas.style.width =
        this.thumbcanvas.width =
        this.thumbcanvas.height = 64;
    this.context = this.thumbcanvas.getContext("2d");
    this.context.drawImage(
        this.thumb,
        0,
        0,
        this.thumbcanvas.width,
        this.thumbcanvas.height
    );
    var data = this.context.getImageData(0,0,1,1).data;
    if(!this.options.trans)
        this.elem.style.backgroundColor = "rgba("+data[0]+","+data[1]+","+data[2]+",1)";
}

/**
 * This function deals with everything in the overlay. That is:
 *      
 *      Instructions
 *      Advert
 *      Maximise link
 *
 */
_i3dv_container.prototype.doOverlay = function (){
    if(!this.active) return;
    var l = window.location;
    this.iOC = document.createElement('div');
    this.iOC.id = this.elem.id + "_overlayContainer";
    this.iOC.classList.add("i3dv_overlayContainer");
    this.iOC.style.position = "relative";

    // Sets up the maximise button.
    if(this.options["maximise"]){
        this.max = document.createElement('a');
        this.max.id = this.elem.id + "_maximise";
        this.max.classList.add("i3dv_maximise");
        this.max.href   = "javascript:void(0);";
        var that = this;
        this.max.onclick = function(e){
            e.preventDefault();
            that.maximise();
            return false;
        }
        this.max.target = "_blank";
        this.iOC.appendChild(this.max);
        if(Math.min(
                this.elem.clientWidth,
                this.elem.clientHeight
            ) > 380) {
            this.max.style.height = "32px";
            this.max.style.width  = "32px";
            this.max.style.backgroundImage = "url('" + this.options.imgpath + "maximise.png')";
        } else {
            this.max.style.height = "16px";
            this.max.style.width  = "16px";
            this.max.style.backgroundImage = "url('" + this.options.imgpath + "maximise_small.png')";
       }
    }

    /**
     * Creates the overlay. This includes the instructions and advert.
     */
    if(this.options["overlay"]){
        var that = this
        if(this.options["ads"]){
            this.advert = document.createElement('div');
            this.advert.id = this.elem.id + "_advert";
            this.advert.classList.add("i3dv_advert");
            this.advert.innerHTML  = "<p>This is an overlay that could contain an advertisment. A simple text advert with a link. <a href='#' target='_blank'>Such as this one</a></p>";
            
            this.closeX = document.createElement('span');
            this.closeX.classList.add("i3dv_close-x");
            this.closeX.onclick = function (e) {
                that.fadeOut(that.advert);
            }
            this.closeX.style.backgroundImage = "url('" + this.options.imgpath + "x.png')";
            
            this.advert.appendChild(this.closeX);
            this.iOC.appendChild(this.advert);
        }
        if(this.options["instructions"]){
            this.instructions = document.createElement('div');
            this.instructions.id = this.elem.id + "_instructions";
            this.instructions.classList.add("i3dv_instructions");
            if(this.options["hastouch"]){
                if(
                    Math.min(
                        this.elem.clientWidth,
                        this.elem.clientHeight) > 380) {
                    this.instructions.style.height = "41px";
                    this.instructions.style.width  = "102px";
                    this.instructions.style.backgroundImage = "url('" + this.options.imgpath + "instructions_touch.png')";
                } else {
                    this.instructions.style.height = "41px";
                    this.instructions.style.width  = "102px";
                    this.instructions.style.backgroundImage = "url('" + this.options.imgpath + "instructions_iphone.png')";
                }
            } else {
                if(
                    Math.min(
                        this.elem.clientWidth,
                        this.elem.clientHeight) > 380) {
                    this.instructions.style.height = "53px";
                    this.instructions.style.width  = "166px";
                    this.instructions.style.backgroundImage = "url('" + this.options.imgpath + "instructions.png')";
                } else {
                    this.instructions.style.height = "36px";
                    this.instructions.style.width  = "103px";
                    this.instructions.style.backgroundImage = "url('" + this.options.imgpath + "instructions_small.png')";
                }
            }
            this.iOC.appendChild(this.instructions);
        }
    }
    this.elem.appendChild(this.iOC);
}
   
/**
 * This function sets the fades in and out of the overlay components.
 * 
 * This gets called in the viewer once the loading is complete.
 */
_i3dv_container.prototype.doOverlayTimeouts = function (){
    if(!this.active) return;
    var that = this;
    if(!this.doneOverlayTimeouts && this.options["overlay"]){
        setTimeout(function () {
            if(that.options["maximise"]){
                that.fadeIn(that.max);
            }
            if(that.options["instructions"]){
                that.fadeIn(that.instructions);
            }
        },300);
        if(this.options["maximise"]){
            setTimeout(function () {
                if(!that.hasHoveredOverMaximise){
                    that.hideOut(that.max);
                }
            },10000);
        }
        if(this.options["instructions"]){
            setTimeout(function () {
                that.fadeOut(that.instructions);
            },5000);
        }
        if(this.options["maximise"]){
            this.max.addEventListener("mouseover",function (){
                that.fadeIn(that.max);
                that.hasHoveredOverMaximise = true;
            }, false);
            this.max.addEventListener("mouseout",function (){
                that.hideOut(that.max);
            }, false);
        }
        if(this.options["instructions"]){
            this.instructions.addEventListener("mouseout",function (){
                that.fadeOut(that.instructions);
            }, false);
        }
    }
    this.doneOverlayTimeouts = true;
}

/**
 * Creates the loading bar and its containers etc.
 */
_i3dv_container.prototype.doLoading = function (){
    if(!this.active) return;
    if(this.options["loading"]){
        this.loading = document.createElement("div");
        this.loadingBarContainer = document.createElement("div");
        this.loadingBar = document.createElement("div");
        this.loadingLink = document.createElement("a");
        this.loadingGraphic = document.createElement("img");
        
        this.loadingLink.src = "http://i3dv.com";
        this.loadingLink.target = "_blank";
        
        this.loadingGraphic.src = this.options.imgpath + "logo-viewer.png";
        
        this.loading.classList.add("i3dv_loading_container");
        this.loadingBarContainer.classList.add("i3dv_loading_bar_container");
        this.loadingBar.classList.add("i3dv_loading_bar");
        this.loadingGraphic.classList.add("i3dv_loading_graphic");
        
        this.loadingLink.appendChild(this.loadingGraphic);
        this.loadingBarContainer.appendChild(this.loadingBar);
        this.loading.appendChild(this.loadingLink);
        this.loading.appendChild(this.loadingBarContainer);
        this.appendChild(this.loading);
    }
}  

/**
 * An error callback for the errors.
 */
_i3dv_container.prototype.error = function (e){
    var e = window.event || e; // old IE support
    e.returnValue = false;
    type = (typeof e.type == "undefined") ? "no type" : e.type;
    console.log(type);
    console.log(e);
    this.load();
}

/**
 * Fades out id (using css classes)
 *
 * @param {DOM Element|string} id - either a DOM element or the id of one.
 */
_i3dv_container.prototype.fadeOut = function (id){
    var elem = (typeof id == "object") ? id : document.getElementById(id);
    elem.classList.remove("i3dv_show");
    elem.classList.add("i3dv_hide");
    setTimeout(
        function Remove() {
            elem.classList.remove("i3dv_add");
            elem.classList.add("i3dv_remove");
        },
    300 );
}

/**
 * Hides id (using css classes) - doesn't completely remove.
 *
 * @param {DOM Element|string} id - either a DOM element or the id of one.
 */
_i3dv_container.prototype.hideOut = function (id){
    var elem =(typeof id == "object") ? id : document.getElementById(id);
    if(elem.classList.contains("i3dv_show"))
        elem.classList.remove("i3dv_show");
    if(elem.classList.contains("i3dv_remove"))
        elem.classList.remove("i3dv_remove");
    elem.classList.add("i3dv_hide");
}

/**
 * Fades in id (using css classes).
 *
 * @param {DOM Element|string} id - either a DOM element or the id of one.
 */
_i3dv_container.prototype.fadeIn = function (id){
    var elem = (typeof id == "object") ? id : document.getElementById(id);
    elem.classList.remove("i3dv_remove");
    elem.classList.add("i3dv_add");
    setTimeout(
        function () {
            elem.classList.add("i3dv_show");
            elem.classList.remove("i3dv_hide");
        },
    300 );
}



/**
 * Allows to append children to elem by appending to the container object.
 */
_i3dv_container.prototype.appendChild = function(e){
    this.elem.appendChild(e);
}

/**
 * This pulls data tags from the containing element and applies them to the provided options.
 * Sub objects are defined in data tags by hyphens.
 *
 * @example
 * To set the option start.v.x to 5 you would set:
 *
 *  data-start-v-x=5
 *
 * on your DOM element. It doesn't matter whether you have data-start-v-x="5" as the options
 * are all typecast depending on the expected type.
 *
 * @param {object} o the options to populate
 * @param {DOM element} elem the DOM element from which to extract data tags
 * @param {String} [parent] only used for recursion.
 */
_i3dv_container.prototype.checkDataTags = function (o, elem, parent) {
    parent = (typeof parent === "undefined") ? "" : parent;
    for(var key in o){
        if(typeof o[key] === "object"){
            o[key] = this.checkDataTags(o[key], elem, parent + "-" + key);
        } else {
            if(elem.getAttribute("data" + parent + "-" + key)){
                o[key] = _i3dv_.prototype.cast(elem.getAttribute("data" + parent + "-" + key), typeof o[key]);
                // console.log(key + " = " + o[key]);
            }
        }
    }
    return o;
}

/**
 * This function checks if a model exists.
 *
 * This function basically checks for the existance of a STATUS
 * file in the model directory. If the file or folder doesn't exist
 * then it calls the modelNotExists function. If it does, then it
 * passes the contents of the file to the modelExists fuction, which
 * deals with it appropriately.
 */
_i3dv_container.prototype.checkModel = function () {
    //Create a boolean variable to check for a valid Internet Explorer instance.
    var xmlhttp = false;
    //Check if we are using IE.
    try {
        //If the Javascript version is greater than 5.
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        //If not, then use the older active x object.
        try {
            //If we are using Internet Explorer.
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            //Else we must be using a non-IE browser.
            xmlhttp = false;
        }
    }
    //If we are using a non-IE browser, create a javascript instance of the object.
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    var fn = this.options.baseurl + this.options.renderpath + this.options.modelid + "/STATUS";
    xmlhttp.open("GET", fn);
    var that = this;
    xmlhttp.onreadystatechange = function (){
        if(xmlhttp.readyState == 4){
            if (xmlhttp.status == 200) {
                that.modelExists(xmlhttp.responseText);
                return true;
            }else if (xmlhttp.status == 404) {
                that.modelNotExists();
                return false;
            }
        }
    };
    xmlhttp.send(null);
}

/**
 * This function takes the [status] and does the appropriate 
 * action depending on the value of [status]
 *
 * The status codes accepted by this function are a 3 digit code,
 * where the first number indicates the status, and, in most cases,
 * the last two numbers indicate the percentage until completion
 * of that particular state. For example, during rendering, if there
 * are 612 total render images to be done, and 153 are complete, then
 * the status would start with 1, and the last part would be:
 *
 *  (612/153)*100 = 25;
 *
 * Therefore our code would be 125.
 *
 * @param {Int|String} status 3 digit status code. Can be int or string.
 */
_i3dv_container.prototype.modelExists = function (status){
    // Pads with zeros then cuts down to 3 digits.
    status = status + "00";
    status = status.substr(0,3);
    switch(parseInt(status[0])){
        case 1:
            this.modelNotExists("The model is currently being rendered. " + status[1] + status[2] + "% complete.");
            return false;
            break;
        case 2:
            this.modelNotExists("Initial render complete, but the files are still being transferred. " + status[1] + status[2] + "% complete.");
            return false;
            break;
        case 9:
        default:
            return true;
    }
}

/**
 * If the model doesn't exist of isn't ready, this function is called.
 *
 * @param {String} [text] optional text to have in the title element. Default is 'The model does not exist, sorry.'.
 */
_i3dv_container.prototype.modelNotExists = function (text){
    this.modelError(text);
}

/**
 * This replaces all the innerHTML of our container with a div in a div
 * with some text inside, indicating the problem.
 *
 * @param {String} [text] optional text to have in the title element. Default is 'The model does not exist, sorry.'.
 */
_i3dv_container.prototype.modelError = function (text){
    text = (typeof text === 'undefined') ? 'The model does not exist, sorry.' : text + "";
    this.container.innerHTML = "";
    this.noFile = document.createElement('div');
    this.noFile.classList.add("i3dv_no_file");
    this.noFileTitle = document.createElement('div');
    this.noFileTitle.classList.add("i3dv_no_file_title");
    this.noFileTitle.innerHTML = text;
    this.noFile.appendChild(this.noFileTitle);
    this.container.appendChild(this.noFile);
}


/**
 * Destroys the viewer and container and everything...this is basically
 * only used of the container is re-initialised...
 */
_i3dv_container.prototype.destroy = function () {
    this.active = false;
    try{ this.player.destroy();
    } catch (e){}
    try{ this.elem.removeChild(this.iOC);
    } catch (e){}
    try{ this.elem.removeChild(this.loading);
    } catch (e){}
    try{ this.elem.removeChild(this.loadingbar);
    } catch (e){}
    this.elem.style = this.originalstyle;
    this.elem.removeEventListener("mousedown");
    this.elem.style.background = "none";
    this.elem.style.backgroundColor = "none";
    this.elem.innerHtml = "";
    this.container.removeChild(this.elem);
}

/**
 * Sets the tab index of the container element. This is needed
 * to capture keypresses on that element.
 *
 * @param {int} [i] the index, default 1
 */
_i3dv_container.prototype.setTabIndex = function (i) {
    i = (typeof i === "undefined") ? 1 : i;
    this.elem.setAttribute("tabindex", i);
}

/**
 * Loads the correct player depending on the playertype and initiates it.
 */
_i3dv_container.prototype.load = function () {
    if(!this.active) return;
    switch(this.options.playertype) {
        case "image":
            this.player = new _i3dv_imagePlayer(this.options,this);
            break;
        case "canvas":
            this.player = new _i3dv_canvasPlayer(this.options,this);
            break;
        case "videojs":
            this.player = new _i3dv_videojsPlayer(this.options,this);
            break;
        case "video":
            this.player = new _i3dv_videoPlayer(this.options,this);
            break;
        case "auto":
        default:
            if(/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
                this.player = new _i3dv_imagePlayer(this.options,this);
            } else if (BrowserDetect.browser === "Safari" && BrowserDetect.OS === "Windows"){
                this.player = new _i3dv_imagePlayer(this.options,this);
            } else if(this.options.trans) {
                this.player = new _i3dv_canvasPlayer(this.options,this);
            } else {
                this.player = new _i3dv_videojsPlayer(this.options,this);
            }
    }
    this.player.init();
}

/**
 * This function sets up the events (drag, move, zoom, etc)
 * 
 * It is called in the main script (as it relies on lots of
 * functions common to each viewer type)
 *
 * @requires hammer.js 
 */
_i3dv_container.prototype.doEvents = function (){
    if(!this.active) return;
    this.hammer = Hammer(this.elem);
    if(BrowserDetect.browser === "Explorer" && parseInt(BrowserDetect.version) >= 9) {
        Hammer.plugins.showTouches();
    }
    var that = this;
    window.addEventListener("resize",function(){
        that.player.scaler();
    }, false);
    if(this.options["interactive"]){
        if(Hammer.HAS_TOUCHEVENTS || Hammer.HAS_POINTEREVENTS) {
            if(!this.options["nomove"]) {
                this.hammer.on("tap",function(e){
                    that.player.i.v.x = 0;
                    that.player.i.v.y = 0;
                });
            }
            if(this.options["zoom"]) {
                this.hammer.on("pinch",function(e){
                    that.player.i.scale = e.gesture.scale;
                    that.player.scaler();
                });
            }
        }
        
        if(this.options["zoom"]) {
            this.elem.addEventListener('DOMMouseScroll',
                function(e){
                    that.player.zoom(e);
                },
            false);
            this.elem.addEventListener('mousewheel',
                function(e){
                    that.player.zoom(e);
                }, 
            false);
            
            this.hammer.on("doubletap",function(e){
                if(that.hasZoomed){
                    that.player.zoomOut(e);
                    that.player.zoomOut(e);
                } else {
                    that.player.zoomIn(e);
                    that.player.zoomIn(e);
                }
                that.hasZoomed = !that.hasZoomed;
            });
        }
        if(this.options["move"]) {
            if(this.options["keys"]){
                that.elem.addEventListener('keydown',function(e){
                    that.player.keypad(e);
                }, false);
            }
            this.hammer.on("drag",      function(e){
                that.player.drag(e);
            });
            this.hammer.on("touch",     function(e){
                that.player.start(e);
            });
            this.hammer.on("release",   function(e){
                that.player.stop(e);
            });
        }
            
    }
}

/**
 * The main default player function, on which all player types are based.
 * This sets up some of the common variables and functions.
 *
 * @param {object} o the parents options
 * @param {object} c the parent container
 */
var _i3dv_player = function(o,c) {
    this.options = o;
    this.container = c;
    
    /**
     * This i object holds all the information about the viewer. i is for i3dv, and
     * holds i3dv properties (don't ask why, this is just a legacy thing).
     * 
     * Where needed, each option is described in detail with a comment next to it.
     *
     * @todo rename options.decayfactor to options.friction and change this friction
     *  parameter's name to something else, as it is misleading for us physicists.
     */
    this.i = {
        active:         false,                      // Whether the player is active or not yet.
        firstload:      true,                       // Whether it's the first load or not (players can be loaded multiple times)
        size:           0,                          // Size of the viewer
        friction: {                         
            x: this.options.friction.x,             // These are the viewer frictions, or rather, how responsive
            y: this.options.friction.y              // the viewer is to movement. (this should be renamed and the
        },                                          // decayfactor should be called friction instead...)
        dim: Math.min(                              // The minimum container dimension
            this.container.elem.clientWidth,        
            this.container.elem.clientHeight
        ),                                          
        col: this.options.start.col,                // The current column
        row: this.options.start.row,                // The current row
        x: this.options.start.col,                  // The position on the x axis
        y: this.options.start.row,                  // The position on the y axis
        v: {                                        // The velocity values
            x: this.options.start.v.x,              // 
            y: this.options.start.v.y,              // 
            max: 5                                  // 
        },                                          // 
        scale: {                                    // The scale factors (used for zoom)
            val:        this.options.start.scale,   //
            ratio:      1.2,                        //
            min:        0.5,                        //
            max:        3                           //
        },                                          //
        progress:       0,                          // The current progress
        percentloaded:  0,                          // The current percent loaded
        last:{                                      // For storing the last calculated versions of various variables
            row:        -1,                         //
            col:        -1,                         //
            x:          -1,                         //
            y:          -1,                         //
            size:       -1,                         //
            scale:      -1,                         //
            percentloaded : -1
        },                                          //
        ratio:          0,                          // The ratio between rows and columns.
        context:        0                           // This just stores the canvas context in various places.
    };
    
    // Holds the render loop variable from requestAnimationFrame
    this.renderer = false;
    
    // this is for the render loop. A simple object for storing times and deltas.
    this.time = {
        now: new Date(),
        prev: new Date(),
        delta: 0
    }
    
    // whether the player is destroyed or not...
    this.destroyed = false;
    
    // the loadchecker object, one property for each viewer.
    // @todo I'm sure this doesn't need to be an object...
    this.loadChecker = {};
}

/**
 * the default init function.
 */
_i3dv_player.prototype.init = function () {
    this.load();
    this.scaler();
}

/**
 * The main render loop. To keep things consistent, this only calls the draw
 * function if the delta between calls is greater than 10ms, otherwise we get
 * some problems with stuttering and uneven framerates.
 */
_i3dv_player.prototype.render = function() {
    this.time.delta = this.time.now - this.time.prev;
    if(this.time.delta > 16) {
        this.draw();
        this.time.prev = this.time.now;
    }
    this.time.now = new Date();
    this.renderer = requestAnimationFrame(this.render.bind(this))
}

/**
 * The default Draw function. Basically just checks the co-ordinates, and if
 * they are different, it seeks the viewer.
 */
_i3dv_player.prototype.draw = function () {
    this.checkCoords();
    if(this.i.last.row != this.i.row || this.i.last.col != this.i.col){
        this.seek();
        this.i.last.col = this.i.col;
        this.i.last.row = this.i.row;
    }
};

/**
 * this destroys and removes the viewer and any eventListeners, so that it can be re-initiated.
 */
_i3dv_player.prototype.destroy = function () {
    this.destroyed = true;
    cancelAnimationFrame(this.renderer);
    this.elem.removeEventListener("progress");
    this.elem.removeEventListener("ready");
    try{ this.container.elem.removeChild(this.elem);
    } catch (e){}
};

/**
 * default load function. not used.
 */
_i3dv_player.prototype.load = function () {
    console.log("load");     
};  

_i3dv_player.prototype.fileNotExist = function (){
    console.log("_player.fileNotExist");
    this.container.fileNotExist();
    this.destroy();
}

/**
 * default seek function. not used.
 */
_i3dv_player.prototype.seek = function () {
    console.log("seek");     
};  

/**
 * Callback for any errors (only attached to the video players at the moment).
 */
_i3dv_player.prototype.error = function (e) {
    console.log("error");
    console.log(e);
    if(typeof e.preventDefault != "undefined") e.preventDefault();
    this.load();
};   

/**
 * Sets the velocities to zero.
 */
_i3dv_player.prototype.start = function () {
    this.i.v.x = this.i.v.y = 0;
};

/**
 * Clears the detectStillMouse timeout from the drag event.
 */
_i3dv_player.prototype.stop = function () {
    clearTimeout(this.detectStillMouse);
};

/**
 * Zooms in by i.scale.ratio (default 1.2)
 */
_i3dv_player.prototype.zoomIn = function () {
    this.i.scale.val = Math.ceil((this.i.scale.val*this.i.scale.ratio)*5)/5;
    this.scaler();
};

/**
 * Zooms out by i.scale.ratio (default 1.2)
 */
_i3dv_player.prototype.zoomOut = function () {
    this.i.scale.val = Math.floor((this.i.scale.val/this.i.scale.ratio)*5)/5;
    this.scaler();
};

/**
 * Callback for the scroll wheel. Calls zoomIn or Out depending
 * on whether the user zoomed in or out.
 */
_i3dv_player.prototype.zoom = function (e) {
    if(typeof e.gesture != "undefined"){
        e.gesture.preventDefault();
    }
    e.preventDefault();
    this.i.v.y = this.i.v.x = 0;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    (delta == 1) ? this.zoomIn(e) : this.zoomOut(e);
    return false;
};

/**
 * This caculates the proper sizes and scales depending on the
 * container size and the scale values. It also, if friction is
 * set to "auto", sets the friction value.
 *
 * Finally, it calls resize.
 */
_i3dv_player.prototype.scaler = function () {
    if(this.destroyed) return;
    // Sets the min/max scale
    this.i.scale.val = Math.min(Math.max(this.i.scale.val,this.i.scale.min),this.i.scale.max);
    
    // Gets the minimum container dimension
    var height  = this.container.elem.clientHeight;
    var width   = this.container.elem.clientWidth;
    this.i.dim  = Math.min(width, height);
    this.i.size = this.i.dim * this.i.scale.val;

    // Sets the frictions accordingly
    this.i.ratio = this.options.steps.x/(this.options.steps.y*2);
    var power = 0.47;
    if(this.options.friction.x === "auto")
        this.i.friction.x  = (240*(1/this.i.ratio)/Math.pow(this.i.dim,power));
    if(this.options.friction.y === "auto")
        this.i.friction.y  = (240*this.i.ratio)/Math.pow(this.i.dim,power);
    this.resize();
};

/**
 * This resizes the actual viewer inside the container and makes
 * sure that it's still in the center.
 */
_i3dv_player.prototype.resize = function () {
    if(this.destroyed) return;
    // Change canvas width and height
    this.elem.width = 
    this.elem.height = this.i.size;
    this.elem.style.width = 
    this.elem.style.height = this.i.size + "px";

    // Centers the video
    var mTB = Math.floor((this.container.elem.clientHeight - this.i.size)/2);
    var mRL = Math.floor((this.container.elem.clientWidth  - this.i.size)/2);
    this.elem.style.margin = mTB + "px " + mRL + "px";
}

/**
 * This rotates the object according to the velocity.
 */
_i3dv_player.prototype.rotate = function () {
    if(this.destroyed) return;
    // Max and Min
    this.i.v.x = ((this.i.v.x > this.i.v.max) ? this.i.v.max : (this.i.v.x < -this.i.v.max) ? -this.i.v.max : this.i.v.x);
    this.i.v.y = ((this.i.v.y > this.i.v.max) ? this.i.v.max : (this.i.v.y < -this.i.v.max) ? -this.i.v.max : this.i.v.y);
    
    // Sets the minimum velocity
    if(Math.abs(this.i.v.x) < 0.01) this.i.v.x = 0;
    if(Math.abs(this.i.v.y) < 0.01) this.i.v.y = 0;
    
    // Decays the velocity
    if(this.options.decayfactor && this.options.momentum){
        var d = 1-(this.options.decayfactor/2500);
        if(this.i.v.x < 0)
            this.i.v.x = (-(Math.pow(Math.abs(this.i.v.x)+1,d)-1));
        else if(this.i.v.x > 0)
            this.i.v.x = Math.pow(Math.abs(this.i.v.x)+1,d)-1;
        if(this.i.v.y < 0) 
            this.i.v.y = (-(Math.pow(Math.abs(this.i.v.y)+1,d)-1));
        else if(this.i.v.y > 0)
            this.i.v.y = Math.pow(Math.abs(this.i.v.y)+1,d)-1;
    }

    // Add this to this.i.x (taking into account the friction)
    this.i.x += this.i.v.x*(1/this.i.friction.x);
    this.i.y += this.i.v.y*(1/this.i.friction.y);
};

/**
 * This sets the column and row from a combination of the values of
 * velocities and co-ordinates.
 */
_i3dv_player.prototype.checkCoords = function () {
    if(this.destroyed) return;
    if(this.i.v.x || this.i.v.y) this.rotate();
    if(!this.options.momentum) this.i.v.x = this.i.v.y = 0;

    // Stops negative this.i.x
    if(this.i.x < 0) this.i.x = this.options.steps.x + this.i.x;

    // Modulo this.i.x for wraparaound
    this.i.x = this.i.x % this.options.steps.x;

    // this.i.y cannot be greater than steps or less than 0
    this.i.y = Math.max(Math.min(this.i.y,this.options.steps.y-1),0);
    
    // Calculates the Row and Column.
    this.i.row = Math.floor(Math.max(Math.min(Math.floor( this.i.y ) % (this.options.steps.y),this.options.steps.y-1),0));
    this.i.col = Math.floor(Math.max(Math.min(Math.floor( this.i.x ) % (this.options.steps.x),this.options.steps.x-1),0));
};

/**
 * Callback for the drag event.
 */
_i3dv_player.prototype.drag = function (e) {
    if(this.destroyed) return;
    clearTimeout(this.detectStillMouse);
    
    if(typeof e.gesture != "undefined"){
        var x =  e.gesture.center.pageX;
        var y =  e.gesture.center.pageY;
    } else {
        var x =  e.x;
        var y =  e.y;
    }
    this.i.v.x = (this.i.last.x - x);
    this.i.v.y = (this.i.last.y - y);
    
    this.i.last.x = x;
    this.i.last.y = y;
    
    this.draw();
    
    var that = this;
    this.detectStillMouse = setTimeout(function(){
        that.i.v.x = that.i.v.y = 0;
    }, 50);
}

/**
 * The default loadComplete functions. This gets rid of the loading bar,
 * puts on the overlay (with instructions, ads and maximise button) and
 * then insets the viewer, doing the background at the same time.
 *
 * After all this, it sets the render loop going.
 */
_i3dv_player.prototype.loadComplete = function () {
    if(this.destroyed) return;
    this.container.fadeOut(this.container.loading);
    this.container.doOverlayTimeouts();
    this.container.appendChild(this.elem);
    this.doBackground();
    this.render();
}

/**
 * default doBackground function. Not used.
 */
_i3dv_player.prototype.doBackground = function () {
    console.log("doBackground");
}

/**
 * This just updates the loading bar and then calls loadComplete when the percentage
 * loaded is greater than 99%.
 *
 * In the case of Chrome, it also checks to see if the percentage is changing. Chrome
 * has a problem with buffering videos in that it's buffer cache is *very* small (less
 * than 3mb) hence it needs to be initiated before the video actually finishes loading.
 * It will store the whole video once it starts playing however, but this does mean there
 * might be a bit of lag on Chrome.
 *
 * @todo Find a better solution for Chrome.
 */
_i3dv_player.prototype.progress = function () {
    if(this.destroyed) return;
    var p = this.percent();
    this.container.loadingBar.width = this.container.loadingBar.style.width = p + "%";
    if(p > 99 || (BrowserDetect.browser == "Chrome" && p > 15 && p == this.i.last.percentloaded)){
        this.loadComplete();
    }
    this.i.last.percentloaded = p;
}

/**
 * default function for getting the percentage. Not used.
 */
_i3dv_player.prototype.percent = function () {
    if(this.destroyed) return;
    return this.i.percentloaded;
}

/**
 * Call back for the keypad presses. Basically increments or decrements
 * the x or y value depending on the key pressed.
 */
_i3dv_player.prototype.keypad = function (e){
    if(this.destroyed) return;
    var wasThere = false;
    if(e.keyCode == this.options.keycode.up) {
        this.i.y++;
        wasThere = true;
    } else if(e.keyCode == this.options.keycode.down){
        this.i.y--;
        wasThere = true;
    } else if(e.keyCode == this.options.keycode.left) {
        this.i.x++;
        wasThere = true;
    } else if(e.keyCode == this.options.keycode.right) {
        this.i.x--;
        wasThere = true;
    }
    if(wasThere) {
        this.i.v.x = this.i.v.y = 0;
        if (e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;
        this.draw();
        return false;
    }
}

/**
 * Inherits the default player and gives a v object that stores
 * all sorts of 'video' information.
 */
_i3dv_videoPlayer = function (o, c) {
    _i3dv_player.call(this, o, c);
    this.v = {
        size:       0,
        type:       0,
        fn:         false,
        frame:      0,
        time:       0,
        fps:        (this.options.vfps/1),
        last: {     
            size:   false,
            type:   false,
            frame:  0,
            time:   0,
            fn:     null
        },          
        hasBg:      false
    };
}

/**
 * Inherits the videoPlayer
 */
_i3dv_videojsPlayer = function (o, c){
    _i3dv_videoPlayer.call(this, o, c);
}

/**
 * Inherits the videoPlayer
 */
_i3dv_canvasPlayer = function (o, c) {
    _i3dv_videoPlayer.call(this, o, c);
}

/**
 * Sets up the image player, inheriting the default player.
 *
 * This also creates a v object for holding options, however, not
 * video specific like above, but very similar.
 *
 * This also initiates the image buffer array to hold all the
 * background images.
 */
_i3dv_imagePlayer = function (o, c) {
    _i3dv_player.call(this, o, c);
    this.v = {
        size:       0,
        type:       "jpg",
        fn:         false,
        loaded:     0,
        bg: {
            position:   0,
            src:        0,
        },
        last: {  
            size:   false,
            type:   false,
            fn:     null,   
            bg: {
                position:   null,
                src:        null,
            }
        },          
        hasBg:      false
    };
    this.imageBuffer = new Array(this.options.steps.y);
}

/**
 * This creates the 4 basic players.
 *
 * canvasPlayer and videojsPlayer inherit from videoPlayer.
 * videoPlayer and imagePlayer just inherit from the generic player.
 */
_i3dv_videoPlayer.prototype     = Object.create( _i3dv_player.prototype );
_i3dv_canvasPlayer.prototype    = Object.create( _i3dv_videoPlayer.prototype );
_i3dv_videojsPlayer.prototype   = Object.create( _i3dv_videoPlayer.prototype );
_i3dv_imagePlayer.prototype     = Object.create( _i3dv_player.prototype );

/**
 * This loads the videoplayer. It creates two objects (this.elem and
 * this.video) for seperating the video specific things from the viewer
 * based things.
 *
 * This behaviour allows the player to reuse a lot of code later on.
 * 
 * This loads the appropriate video and sets up some events for checking the
 * progress of the video (loading) and whether it is ready or not.
 */
_i3dv_videoPlayer.prototype.load = function (){
    if(this.destroyed) return;
    this.elem = this.video = document.createElement("video");
    this.elem.classList.add("i3dv_video");
    this.getVideoInfo();
    if(this.v.size !== this.v.last.size){
        this.v.fn = this.options.baseurl + this.options.renderpath + this.options.modelid + "/videos/" + this.v.size + "." + this.v.type;
        console.log("fn = " + this.v.fn);
        this.elem.src = this.v.fn;
        this.elem.setAttribute("preload", "auto");
        this.elem.setAttribute("poster",this.options.baseurl + this.options.renderpath + this.options.modelid + "/videos/thumb.jpg");
        this.elem.load();
        var that = this;
        if(BrowserDetect.browser == "Chrome" || BrowserDetect.browser == "Safari" || BrowserDetect.browser == "Opera"){
            this.loadChecker[this.container.elem.id] = setInterval(function (){
                that.progress.call(that);
            }, 200);
        } else {
            this.elem.addEventListener('progress',function(e){
                that.progress.call(that, e);
            }, false);
        }
        this.v.last.size = this.v.size;
    }
}

/**
 * The main loading function for the Canvas player.
 *
 * This creates the video and canvas element and loads the video just like 
 * with the video player. There is one important difference. This function
 * sets up the video element with a "seeked" event, so that when the video
 * has finished seeking, it updates the canvas.
 *
 * This is preferable to updating the canvas alongside seeking the player
 * because otherwise it lags behind by 1 frame. For some reason the event
 * actually fires too early in Opera and Safari...hence the timeout as well,
 * just in case...
 *
 * @todo Find a way to do without the timeout
 */
_i3dv_canvasPlayer.prototype.load = function (){
    if(this.destroyed) return;
    this.video = document.createElement("video");
    var that = this;
    this.video.addEventListener("seeked",function(){
        that.vToC();
        if(BrowserDetect.browser == "Opera" || BrowserDetect.browser == "Safari"){
            setTimeout(that.vToC(),1000);
        }
    },false);
    
    // Un-comment these to *see* the video element that the canvas is being
    // copied from for debugging purposes.
    // this.container.elem.appendChild(this.video);
    // this.video.style.position = "absolute";
    // this.video.style.top = 0;
    // this.video.style.left = 0;
    // this.video.width = this.video.style.width = "70px";
    // this.video.height = this.video.style.height = "70px";
    
    this.elem = document.createElement("canvas");
    this.elem.classList.add("i3dv_video");
    this.vcontext = this.elem.getContext("2d");
    this.getVideoInfo();
    if(this.v.size !== this.v.last.size){
        this.v.fn = this.options.baseurl + this.options.renderpath + this.options.modelid + "/videos/" + this.v.size + "." + this.v.type;
        console.log("fn = " + this.v.fn);
        this.video.src = this.v.fn;
        this.video.setAttribute("preload", "auto");
        this.video.setAttribute("poster",this.options.baseurl + this.options.renderpath + this.options.modelid + "/videos/thumb.jpg");
        this.video.load();
        if(BrowserDetect.browser == "Chrome" || BrowserDetect.browser == "Safari" || BrowserDetect.browser == "Opera"){
            this.loadChecker[this.container.elem.id] = setInterval(function (){
                that.progress.call(that);
            }, 200);
        } else {
            this.video.addEventListener('progress',function(e){
                that.progress.call(that, e);
            }, false);
        }
        this.v.last.size = this.v.size;
    }
}

/**
 * This is the main loading function for the videojs player.
 *
 * This makes a video element and assigns it to a videojs object
 * (in this case this.elem_videojs). It also sets up the progress
 * and loading events, as well as setting a loadChecker interval
 * in the cases of Chrome, Safari and Opera...(funnily enough, IE
 * seems to be the only one that calls "progress" reliably);
 */
_i3dv_videojsPlayer.prototype.load = function (){
    if(this.destroyed) return;
    this.elem = this.video = document.createElement("video");
    this.getVideoInfo();
    if(this.v.size !== this.v.last.size){
        var that = this;
        _V_(this.elem, {
            "width"     : this.i.dim,
            "height"    : this.i.dim,
            "controls"  : false, 
            "autoplay"  : false, 
            "preload"   : "auto",
            "poster"    :  this.options.baseurl + this.options.renderpath + this.options.modelid + "/videos/thumb.jpg"}, 
        function(){
            that.elem_videojs = this;
            var fn = that.options.baseurl + that.options.renderpath + that.options.modelid + "/videos/" + that.v.size + ".";
            console.log("fn = " + fn + "{mp4/webm}");
            that.elem_videojs.src([
                { type: "video/webm", src: fn + "webm" },
                { type: "video/mp4", src: fn + "mp4" }
            ]);
            that.elem_videojs.load();
            if(BrowserDetect.browser == "Chrome" || BrowserDetect.browser == "Safari" || BrowserDetect.browser == "Opera"){
                that.loadChecker[that.container.elem.id] = setInterval(function (){
                    that.progress();
                }, 200);
            } else {
                that.elem_videojs.on("progress", function(e) {
                    that.progress();
                });
                that.elem_videojs.on("loadedalldata", function(e) {
                    that.loadComplete();
                });
            }
            that.elem_videojs.on("error", function(e) {
                that.error(e);
            });
        });
        this.v.last.size = this.v.size;
    }
    this.elem.classList.add("i3dv_video");
}

/**
 * The main loading function for the images.
 *
 * It creates the viewer element (just a div).
 *
 * It populates the imageBuffer object with images and 
 * starts their loading. It then calls back the imageLoaded
 * function when each image is finished loading.
 */
_i3dv_imagePlayer.prototype.load = function (){
    if(this.destroyed) return;
    var that = this;
    this.elem = document.createElement("div");
    this.elem.classList.add("i3dv_video");
    this.getImageInfo();
    if(this.v.size !== this.v.last.size){
        var row = this.i.row;
        var fn = this.options.baseurl + this.options.renderpath + this.options.modelid + "/sprites/" + this.v.size + "/sprite-";
        for(var q=0; q < this.options.steps.y; q++){
            this.imageBuffer[row]        = new Image();
            this.imageBuffer[row].src    = fn + row + "." + this.v.type;
            this.imageBuffer[row].id     = this.container.elem.id + "_sprite" + row;
            this.imageBuffer[row].onload = function(){
                that.imageLoaded(this);
            };
            row = (row + 1) % this.options.steps.y;
        }
        console.log(fn + "i." + this.v.type);
        this.v.last.size = this.v.size;
    }
}

/**
 * Callback for each image that's loaded in the image player. The
 * v.loaded variables increases each time, so that it can be used
 * to work out what percentage of images are loaded (this was the
 * best way I could think of for working out the percentage loaded
 * in the case of the image player...).
 *
 * This could be integrated into the anonymous function above...
 */
_i3dv_imagePlayer.prototype.imageLoaded = function (){
    this.v.loaded++;
    this.progress();
}

/**
 * Gets the image dimension needed depending on player size or quality setting.
 */
_i3dv_imagePlayer.prototype.getImageInfo = function (){
    // Selects the right size
    var q = this.options["quality"],
    v = this.v;
    if((this.i.dim > 720 && q === 0) || q > 75)
        v.size = 960;
    else if((this.i.dim > 460 && q === 0) || q > 50)
        v.size = 720;
    else if((this.i.dim > 380 && q === 0) || q > 25)
        v.size = 460;
    else 
        v.size = 380;
}

/**
 * This doBackground function basically puts the video on a canvas
 * and takes the top left pixel colour, making that the background
 * for the container. This is done as well as the thumbnail because
 * the video bg is slightly different from the thumbnail bg thanks
 * to the video compression.
 */
_i3dv_videoPlayer.prototype.doBackground = function () {
    if(this.destroyed) return;
    if(BrowserDetect.browser === "Safari" && BrowserDetect.OS === "Windows") return;
    this.container.thumbcanvas.style.height = 
        this.container.thumbcanvas.style.width  = 
        this.container.thumbcanvas.height = 
        this.container.thumbcanvas.width  = 
        this.elem.height;
    this.context = this.container.thumbcanvas.getContext("2d");
    this.context.drawImage(
        this.video,
        0,
        0,
        this.container.thumbcanvas.width,
        this.container.thumbcanvas.height
    );
    var data = 
        this.context.getImageData(
            0,
            0,
            1,
            1
        ).data;
    var brt = data[0] + data[1] + data[2] ;
    if(brt === 0 && this.v.hasBg === false){
        this.v.hasBg = true;
        var that = this;
        setTimeout(function(){that.doBackground();},500);
    } else {
        this.container.elem.style.backgroundColor = "rgba("+data[0]+","+data[1]+","+data[2]+",1)";
        this.v.hasBg = true;
    }
}

/**
 * This inherits the standard doBackground function unless trans = true
 */
_i3dv_canvasPlayer.prototype.doBackground = function (){
    if(this.options.trans){
        this.container.elem.style.backgroundColor = this.options.bg;
    } else {
        _i3dv_videoPlayer.prototype.doBackground.call(this);
    }
}

/**
 * The doBackground function for the image player should do nothing.
 */
_i3dv_imagePlayer.prototype.doBackground = function (){
    return;
}

/**
 * This gets info on the video type/size needed.
 */
_i3dv_videoPlayer.prototype.getVideoInfo = function (){
    if(this.destroyed) return;
    // Checks client playability
    var c = this.video, 
    p = "probably", 
    q = this.options["quality"], 
    v = this.v,
    w = "webm";
    if(c.canPlayType('video/webm; codecs="vpm, yuv420p"') === p){
        v.type = w;
    } else if(c.canPlayType('video/webm; codecs="vp8, vorbis"') === p){
        v.type = w;
    } else if (c.canPlayType('video/mp4; codecs="avc1.4D401E, mp4a.40.2"') === p){
        v.type = "mp4";
    } else {
        v.type = w;
    }
    
    // Selects the right size
    if((this.i.dim > 720 && q === 0) || q > 75)
        v.size = 960;
    else if((this.i.dim > 360 && q === 0) || q > 50)
        v.size = 720;
    else 
        v.size = 360;
}

/**
 * Stops the loadChecker interval as well as inheriting the _player loadComplete method.
 * 
 * @see this.container._player.prototype.loadComplete
 */
_i3dv_videoPlayer.prototype.loadComplete = function() {
    _i3dv_player.prototype.loadComplete.call(this);
    if(BrowserDetect.browser == "Chrome" || BrowserDetect.browser == "Safari" || BrowserDetect.browser == "Opera")
        clearInterval(this.loadChecker[this.container.elem.id]);
}

/**
 * Resizes the canvas payer and then redraws the video to the canvas.
 * 
 * @see this.container._player.prototype.resize
 */
_i3dv_canvasPlayer.prototype.resize = function (){
    _i3dv_player.prototype.resize.call(this);
    this.vToC();
    var that = this;
    if(BrowserDetect.browser == "Safari"){
        setTimeout(function(){
            that.vToC();
        }, 1000);
    }
}

/**
 * Resizes image player, setting the background size and then seeking to
 * redraw the background.
 * 
 * @see this.container._player.prototype.resize
 */
_i3dv_imagePlayer.prototype.resize = function (){
    _i3dv_player.prototype.resize.call(this);
    this.elem.style.backgroundSize = "auto " + this.i.size + "px";
    this.seek(true);
}

/**
 * Seeks to the correct time in the video
 */
_i3dv_videoPlayer.prototype.seek = function (){
    if(this.destroyed) return;
    this.v.frame = ( (this.i.row * this.options.steps.x) + this.i.col );
    this.v.time = this.v.frame / this.v.fps;
    if(this.v.time != this.v.last.time && typeof this.v.time !== "undefined"){
        this.video.currentTime = this.v.time;
        this.v.last.time = this.v.time;
    }
}

/**
 * Seeks to the correct time in the video
 */
_i3dv_videojsPlayer.prototype.seek = function (){
    if(this.destroyed) return;
    this.v.frame = ( (this.i.row * this.options.steps.x) + this.i.col );
    this.v.time = this.v.frame / this.v.fps;
    if(BrowserDetect.browser == "Explorer") this.v.time += (2/this.v.fps);
    if(this.v.time != this.v.last.time && typeof this.v.time !== "undefined"){
        this.elem_videojs.currentTime(this.v.time);
        this.v.last.time = this.v.time;
    }
}

/**
 * This is the seek function for the image based player. It moves and changes the background
 * depending on the column and row we want to look at.
 */
_i3dv_imagePlayer.prototype.seek = function (force){
    force = (typeof force === "undefined") ? false : force;
    if(this.i.last.row !== this.i.row || force) {
        this.elem.style.backgroundImage = "url('" + (this.imageBuffer[this.i.row].src) + "')";
        this.elem.style.backgroundPosition = (-this.i.col * this.i.size) + "px 0";
    } else if(this.i.last.col !== this.i.col) {
        this.elem.style.backgroundPosition = (-this.i.col * this.i.size) + "px 0";
    }
}

/**
 * Puts the video on the canvas and does transparency if need be.
 */
_i3dv_canvasPlayer.prototype.vToC = function () {
    this.elem.getContext("2d").drawImage(this.video,0,0,this.elem.width,this.elem.height);
    if(this.options.trans){
        this.trans();
    }
}

/**
 * Does a key type transparency on the canvas based on the top left pixel colour.
 * 
 * This scans every pixel on the canvas and makes it transparent depending on
 * whether it's in the range set by transtolerance from the top left pixel colour.
 * By default this is set to 100.
 */
_i3dv_canvasPlayer.prototype.trans = function (){
    var frame = this.vcontext.getImageData(0,0,this.elem.width, this.elem.height);
    var data = frame.data;
    var l = data.length,
    r = data[0],
    g = data[1],
    b = data[2];
    for(var q = 0; q < l; q+=4){
        diff = Math.abs((data[q] - data[0])) + Math.abs((data[q+1] - data[1])) + Math.abs((data[q+2] - data[2]));
        if(diff <= this.options.transtolerance/1.5) {
            frame.data[q+3] = 0;
        } else if(diff <= this.options.transtolerance) { 
            frame.data[q+3] = 255*((diff/this.options.transtolerance));
        }
    }
    this.vcontext.putImageData(frame,0,0);
}

/**
 * These three functions simply return the percent loaded on a scale of 1-100.
 * 
 * @return {float} the percentage (between 0 and 100).
 */
_i3dv_videoPlayer.prototype.percent = function (){
    if(this.destroyed) return;
    this.i.percentloaded = (this.video.duration) ? (this.video.buffered.end(0) / this.video.duration)*100 : 0;
    return this.i.percentloaded;
}

_i3dv_imagePlayer.prototype.percent = function (){
    if(this.destroyed) return;
    this.i.percentloaded = ((this.v.loaded * 100)/ this.options.steps.y);
    return this.i.percentloaded;
}

_i3dv_videojsPlayer.prototype.percent = function (){
    if(this.destroyed) return;
    this.i.percentloaded =(this.elem_videojs.duration()) ? (this.elem_videojs.buffered().end(0) / this.elem_videojs.duration())*100 : 0;
    return this.i.percentloaded;
}