var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/utilities/themes/docs.mdx.js"]=function(e){function t(t){for(var n,o,s=t[0],c=t[1],u=t[2],d=0,h=[];d<s.length;d++)o=s[d],r[o]&&h.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(i&&i(t);h.length;)h.shift()();return l.push.apply(l,u||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={106:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var i=c;return l.push([275,0]),a()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},275:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a(1),s=a(2),c=[{id:"default",label:"Default",element:r.a.createElement("div",{className:"slds-box slds-theme_default"},r.a.createElement("p",null,"This is a ",r.a.createElement("strong",null,"default")," theme and here is a"," ",r.a.createElement("a",{href:"javascript:void(0);"},"link"),"."))},{id:"shade",label:"Shade",element:r.a.createElement("div",{className:"slds-box slds-theme_shade"},r.a.createElement("p",null,"This is a ",r.a.createElement("strong",null,"default")," theme and here is a"," ",r.a.createElement("a",{href:"javascript:void(0);"},"link"),"."))},{id:"texture",label:"Shade with texture",element:r.a.createElement("div",{className:"slds-box slds-theme_shade slds-theme_alert-texture"},r.a.createElement("p",null,"This theme has the ",r.a.createElement("strong",null,"alert texture")," added to the default theme and has a ",r.a.createElement("a",{href:"javascript:void(0);"},"link"),"."))}];a.d(t,"getElement",(function(){return h})),a.d(t,"getContents",(function(){return f}));var u=l.c.h2,i=l.c.h3,d=l.c.p,h=function(){return Object(n.createElement)(l.b,{},Object(n.createElement)("div",{className:"doc lead"},"Themes apply a set of color styles to an area."),u({id:"About-Themes"},"About Themes"),d({},"Use a color theme to apply color to the background and text. Some color themes apply a background image or texture."),u({id:"Base"},"Base"),Object(n.createElement)(o.a,null,Object(s.e)(c,"default")),u({id:"Examples"},"Examples"),i({id:"Shade"},"Shade"),Object(n.createElement)(o.a,null,Object(s.e)(c,"shade")),i({id:"Texture"},"Texture"),Object(n.createElement)(o.a,null,Object(s.e)(c,"texture")))},f=function(){return Object(l.a)(h())}}});