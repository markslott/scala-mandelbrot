var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/cards/einstein/example.jsx.js"]=function(e){function t(t){for(var n,i,r=t[0],c=t[1],o=t[2],u=0,m=[];u<r.length;u++)i=r[u],a[i]&&m.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);m.length;)m.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var e,t=0;t<l.length;t++){for(var s=l[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={29:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},l=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var d=c;return l.push([238,0]),s()}({0:function(e,t){e.exports=React},238:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),l=s(11),i=s(9),r=s(4),c=s(58),o=s(2),d=s.n(o),u=function(e){return a.a.createElement("div",{className:"slds-einstein-header__actions"},a.a.createElement(c.ButtonGroup,null,a.a.createElement(r.b,{className:"slds-button_icon-border-filled",symbol:"email",assistiveText:"Email",title:"Email","aria-pressed":"false"}),a.a.createElement(r.b,{className:"slds-button_icon-border-filled",symbol:"edit",assistiveText:"Edit",title:"Edit","aria-pressed":"false"})))},m=function(e){return a.a.createElement("div",{className:d()("slds-grid slds-einstein-header",e.className)},e.closeButton?a.a.createElement(r.b,{className:d()("slds-button_icon-small slds-float_right slds-popover__close",e.inverse?"slds-button_icon-inverse":"slds-button_icon"),symbol:"close",assistiveText:"Close dialog",title:"Close dialog"}):null,a.a.createElement("header",{className:d()("slds-media slds-media_center slds-has-flexi-truncate")},a.a.createElement("div",{className:"slds-grid slds-grid_vertical-align-center slds-size_3-of-4 slds-medium-size_2-of-3"},e.symbol?a.a.createElement("div",{className:"slds-media__figure"},a.a.createElement("span",{className:"slds-icon_container slds-icon-utility-"+e.symbol},a.a.createElement(i.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:e.symbol}))):null,a.a.createElement("div",{className:"slds-media__body"},a.a.createElement("h2",{className:"slds-truncate",id:e.headingId,title:e.headerTitle||"Einstein"},e.hasLink?a.a.createElement("a",{href:"javascript:void(0);",className:"slds-card__header-link",title:e.headerTitle||"Einstein"},a.a.createElement("span",{className:"slds-text-heading_small"},e.headerTitle||"Einstein")):a.a.createElement("span",{className:"slds-text-heading_small"},e.headerTitle||"Einstein")))),a.a.createElement("div",{className:"slds-einstein-header__figure slds-size_1-of-4 slds-medium-size_1-of-3"})),e.actions&&a.a.createElement(u,null))};s.d(t,"EinsteinCard",(function(){return f})),s.d(t,"states",(function(){return h}));var f=function(e){return a.a.createElement(l.d,null,a.a.createElement(m,{className:"slds-card__header",headerTitle:"Einstein (10+)",hasLink:!0,actions:e.hasActions,symbol:e.hasIcon&&"salesforce1"}),a.a.createElement(l.a,{hasPadding:!0},"Card Body"),a.a.createElement(l.b,null,"View All"," ",a.a.createElement("span",{className:"slds-assistive-text"},"Einstein Recommendations")))},h=(t.default=a.a.createElement(f,null),[{id:"einstein-with-icon",label:"Einstein card - with icon",element:a.a.createElement(f,{hasIcon:!0})},{id:"einstein-with-icon-and-actions",label:"Einstein card - with icon and actions",element:a.a.createElement(f,{hasIcon:!0,hasActions:!0})}])}});