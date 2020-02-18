var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/modals/docs.mdx.js"]=function(e){function t(t){for(var o,s,l=t[0],r=t[1],d=t[2],h=0,u=[];h<l.length;h++)s=l[h],n[s]&&u.push(n[s][0]),n[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);for(c&&c(t);u.length;)u.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,l=1;l<a.length;l++){var r=a[l];0!==n[r]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},n={49:0},i=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=r;return i.push([198,0]),a()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},198:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return g})),a.d(t,"getContents",(function(){return b}));var o=a(0),n=a(3),i=a(22),s=a(1),l=a(2),r=n.c.a,d=n.c.code,c=n.c.h2,h=n.c.h3,u=n.c.h4,p=n.c.li,m=n.c.p,f=n.c.ul,g=function(){return Object(o.createElement)(n.b,{},Object(o.createElement)("div",{className:"doc lead"},"Modals are used to display content in a layer above the app. This paradigm is used in cases such as the creation or editing of a record, as well as various types of messaging and wizards."),Object(o.createElement)(s.a,{exampleOnly:!0,isViewport:!0,style:{height:"640px"}},i.f),c({id:"About-Modals"},"About Modals"),m({},"Default modals are used in the vast majority of cases. They are as wide as 50% of the viewport, but include a minimum and maximum width to avoid going too narrow or too wide."),m({},"Modals always have an equal amount of space at the top and bottom to account for the height of the close button."),m({},"Modals grow according to how much content is within, but once the modal  full height (including the previously mentioned space on top and bottom), the content area will begin to scroll. (This scrolling is currently not available in Salesforce1 Mobile.)"),m({},"Modals can have a tagline in the header, simply by adding a paragraph after the heading."),m({},"By default, the content area of the modal does not have spacing. This allows for content such as Tables to be full-width to the modal. To get spacing when you need it, apply a padding utility (",d({},".slds-p-around_medium"),")."),m({},"Modal headers can also have taglines, if you need to provide additional context. This tagline can also contain links, or the whole thing could be a link in and of itself."),m({},"Large modals call for large amounts of content. The height follows the same behavior and styles of other modals. The width changes to 90% of the viewport, and uses a wider minimum width and no maximum width."),m({},"These are modals that require a linearly directional paradigm of navigation (“Next” and “Back”, etc.) — the actionable buttons in the modal footer live on the left and right, rather than all on the right. These can either be within a large or default modal, depending on the use case."),m({},"If you're using a Modal for a system alert that the user must acknowledge, consider using a ",r({href:"/components/prompt"},"Prompt"),"."),h({id:"Accessibility"},"Accessibility"),m({},"Modals, by definition, trap focus. This means that if a user presses Tab or Shift+Tab while their keyboard focus is in the modal, their focus should stay in and cycle through the modal’s content. Focus shouldn’t return to the underlying page until the user presses the Esc key, presses an explicit “Cancel” or “Close” button in the modal, or performs another action that closes the modal."),u({id:"Expected-markup"},"Expected markup"),f({},p({},"Modal has ",d({},'role="dialog"')),p({},"When the modal is open, everything behind it has HTML attribute ",d({},'aria-hidden="true"'),", so assistive technology won't read out the underlying page. The best way to do this is to give the modal and the page separate wrapper elements and toggle ",d({},'aria-hidden="true"'),"/",d({},'aria-hidden="false"')," on the main page's wrapper depending on whether or not the modal is open."),p({},"Modal contains an HTML heading"),p({},"Modal has an ",d({},"aria-labelledby")," attribute whose value is the id of the modal’s heading")),u({id:"Expected-keyboard-interactions"},"Expected keyboard interactions"),f({},p({},"Esc key closes the modal and moves focus to whatever triggered the modal to open"),p({},"Tab key at bottom of modal cycles focus back to first focusable element at top of modal"),p({},"Shift+Tab keys at top of modal cycle focus back to last focusable element at bottom of modal"),p({},"Enter key submits modal’s form data, if applicable")),c({id:"Base"},"Base"),Object(o.createElement)(s.a,{isViewport:!0,style:Object(l.d)(i.g,"default")},Object(l.e)(i.g,"default")),c({id:"Examples"},"Examples"),h({id:"Taglines"},"Taglines"),Object(o.createElement)(s.a,{isViewport:!0,style:Object(l.d)(i.g,"taglines")},Object(l.e)(i.g,"taglines")),h({id:"Headless"},"Headless"),Object(o.createElement)(s.a,{isViewport:!0,style:Object(l.d)(i.g,"headless")},Object(l.e)(i.g,"headless")),h({id:"Footless"},"Footless"),Object(o.createElement)(s.a,{isViewport:!0,style:Object(l.d)(i.g,"footless")},Object(l.e)(i.g,"footless")),h({id:"Directional"},"Directional"),Object(o.createElement)(s.a,{isViewport:!0,style:Object(l.d)(i.g,"directional")},Object(l.e)(i.g,"directional")),h({id:"Small-Modal"},"Small Modal"),Object(o.createElement)(s.a,{isViewport:!0,style:Object(l.d)(i.g,"small")},Object(l.e)(i.g,"small")),h({id:"Medium-Modal"},"Medium Modal"),Object(o.createElement)(s.a,{isViewport:!0,style:Object(l.d)(i.g,"medium")},Object(l.e)(i.g,"medium")),h({id:"Large-Modal"},"Large Modal"),Object(o.createElement)(s.a,{isViewport:!0,style:Object(l.d)(i.g,"large")},Object(l.e)(i.g,"large")))},b=function(){return Object(n.a)(g())}}});