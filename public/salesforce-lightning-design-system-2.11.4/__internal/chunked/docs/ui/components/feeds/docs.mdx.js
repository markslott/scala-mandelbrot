var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/feeds/docs.mdx.js"]=function(e){function t(t){for(var l,i,r=t[0],c=t[1],m=t[2],o=0,u=[];o<r.length;o++)i=r[o],s[i]&&u.push(s[i][0]),s[i]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);for(d&&d(t);u.length;)u.shift()();return n.push.apply(n,m||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(l=!1)}l&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var l={},s={36:0},n=[];function i(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=l,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(a,l,function(t){return e[t]}.bind(null,l));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var m=0;m<r.length;m++)t(r[m]);var d=c;return n.push([219,0]),a()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},219:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),n=a(3),i=a(1),r=(a(26),a(41),a(15),a(2)),c=a(6),m=a(43),d=a(71),o=a(5),u=a.n(o),E=function(e){return s.a.createElement("article",{className:u()("slds-comment slds-media slds-hint-parent",e.className)},s.a.createElement("div",{className:"slds-media__figure"},s.a.createElement("a",{href:"javascript:void(0);",className:"slds-avatar slds-avatar_circle slds-avatar_medium"},s.a.createElement("img",{alt:"Jenna Davis",src:"/assets/images/avatar2.jpg",title:"Jenna Davis avatar"}))),s.a.createElement("div",{className:"slds-media__body"},e.children))},p=function(e){return s.a.createElement("header",{className:"slds-media slds-media_center"},s.a.createElement("div",{className:"slds-grid slds-grid_align-spread slds-has-flexi-truncate"},s.a.createElement("p",{className:"slds-truncate",title:"Jenna Davis"},s.a.createElement("a",{href:"javascript:void(0);"},"Jenna Davis")),s.a.createElement(c.b,{className:"slds-button_icon-border slds-button_icon-x-small","aria-haspopup":"true",symbol:"down",assistiveText:"More Options",title:"More Options"})))},h=function(e){return s.a.createElement("div",{className:u()("slds-comment__content slds-text-longform",e.className)},e.children)},f=function(e){return s.a.createElement("footer",null,s.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_right slds-text-body_small"},s.a.createElement("li",{className:"slds-item"},s.a.createElement("button",{className:"slds-button_reset slds-text-color_weak",title:"Like this item","aria-pressed":!!e.liked},e.liked?"Liked":"Like")),e.liked?s.a.createElement("li",{className:"slds-item"},"1 Like"):null,s.a.createElement("li",{className:"slds-item"},"16hr Ago")))},v=(s.a.createElement(E,null,s.a.createElement(p,null),s.a.createElement(h,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),s.a.createElement(f,null)),s.a.createElement(E,null,s.a.createElement(p,null),s.a.createElement(h,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),s.a.createElement(f,{liked:!0})),a(10)),_=function(e){return s.a.createElement("ul",{className:"slds-post__footer-actions-list slds-list_horizontal"},s.a.createElement("li",{className:"slds-col slds-item slds-m-right_medium"},s.a.createElement("button",{title:"Like this item",className:u()("slds-button_reset slds-post__footer-action",e.liked?"slds-is-active":null),"aria-pressed":!!e.liked},s.a.createElement(v.a,{className:"slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle",sprite:"utility",symbol:"like"}),e.liked?"Liked":"Like")),s.a.createElement("li",{className:"slds-col slds-item slds-m-right_medium"},s.a.createElement("button",{title:"Comment on this item",className:"slds-button_reset slds-post__footer-action"},s.a.createElement(v.a,{className:"slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle",sprite:"utility",symbol:"share_post"})," ","Comment")),s.a.createElement("li",{className:"slds-col slds-item slds-m-right_medium"},s.a.createElement("button",{title:"Share this item",className:"slds-button_reset slds-post__footer-action"},s.a.createElement(v.a,{className:"slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle",sprite:"utility",symbol:"share"})," ","Share")))},b=function(e){return s.a.createElement("ul",{className:"slds-post__footer-meta-list slds-list_horizontal slds-has-dividers_right slds-text-title"},e.comments?s.a.createElement("li",{className:"slds-item"},e.comments||"0"," comments"):null,s.a.createElement("li",{className:"slds-item"},"20 shares"),s.a.createElement("li",{className:"slds-item"},"259 views"))},N=function(e){return s.a.createElement("header",{className:"slds-post__header slds-media"},s.a.createElement("div",{className:"slds-media__figure"},s.a.createElement("a",{href:"javascript:void(0);",className:"slds-avatar slds-avatar_circle slds-avatar_large"},s.a.createElement("img",{alt:"Jason Rodgers",src:"/assets/images/avatar1.jpg",title:"Jason Rodgers avatar"}))),s.a.createElement("div",{className:"slds-media__body"},s.a.createElement("div",{className:"slds-grid slds-grid_align-spread slds-has-flexi-truncate"},s.a.createElement("p",null,s.a.createElement("a",{href:"javascript:void(0);",title:"Jason Rodgers"},"Jason Rogers")," ","—"," ",s.a.createElement("a",{href:"javascript:void(0);",title:"Design Systems"},"Design Systems")),s.a.createElement(c.b,{className:"slds-button_icon-border slds-button_icon-x-small","aria-haspopup":"true",symbol:"down",assistiveText:"More Options",title:"More Options"})),s.a.createElement("p",{className:"slds-text-body_small"},s.a.createElement("a",{href:"javascript:void(0);",title:"Click for single-item view of this post",className:"slds-text-link_reset"},"5 days Ago"))))},g=function(e){return s.a.createElement("div",{className:u()("slds-post__content slds-text-longform",e.className)},e.children)},y=function(e){return s.a.createElement("footer",{className:u()("slds-post__footer",e.className)},e.children)},w=function(e){return s.a.createElement("article",{className:u()("slds-post",e.className)},e.children)},k=function(e){return s.a.createElement("div",{className:"slds-feed__item-comments"},e.children)},x=function(e){return s.a.createElement("ul",null,r.c.times(e.comments||1,(function(e){return s.a.createElement("li",{key:"comment-".concat(e)},s.a.createElement(E,null,s.a.createElement(p,null),s.a.createElement(h,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),s.a.createElement(f,null)))})))},j=s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(w,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"javascript:void(0);",title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(_,null),s.a.createElement(b,null)))))),O=[{id:"post-with-liker-bar",label:"Like",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(w,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"javascript:void(0);",title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(_,{liked:!0}),s.a.createElement(b,{liked:!0}))),s.a.createElement(k,null,s.a.createElement("div",{className:"slds-p-horizontal_medium slds-p-vertical_x-small"},s.a.createElement("a",{href:"javascript:void(0);"},"You")," liked this post")))))}],D=[{id:"post-attachment-link",label:"Link attachment",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(w,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"javascript:void(0);",title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement("div",{className:"slds-post__payload"},s.a.createElement(m.a,{articleTitle:"Maui By Air The Best Way Around The Island",articleDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."})),s.a.createElement(y,null,s.a.createElement(_,null),s.a.createElement(b,null))))))},{id:"post-attachment-files",label:"Files(s) attachment",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(w,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"javascript:void(0);",title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement("div",{className:"slds-post__payload"},s.a.createElement("ul",{className:"slds-grid slds-grid_pull-padded"},s.a.createElement("li",{className:"slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3"},s.a.createElement(m.b,{isCard:!0,has16x9Crop:!0,hasTitleCard:!0,symbol:"image",hasImage:!0})),s.a.createElement("li",{className:"slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3 slds-medium-show"},s.a.createElement(m.b,{isCard:!0,has16x9Crop:!0,hasTitleCard:!0,symbol:"pdf"})),s.a.createElement("li",{className:"slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3"},s.a.createElement(m.b,{isCard:!0,has16x9Crop:!0,title:"22+",hasImage:!0,hasOverlay:!0})))),s.a.createElement(y,null,s.a.createElement(_,null),s.a.createElement(b,null))))))},{id:"post-with-comments",label:"With replies",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(w,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"javascript:void(0);",title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(_,null),s.a.createElement(b,{comments:"2"}))),s.a.createElement(k,null,s.a.createElement(x,{comments:"2"}),s.a.createElement(d.a,null)))))},{id:"post-with-overflow",label:"Replies - Overflow Bar",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(w,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Here's the latest demo presentation"," ",s.a.createElement("a",{href:"javascript:void(0);",title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(_,null),s.a.createElement(b,{comments:"8"}))),s.a.createElement(k,null,s.a.createElement("div",{className:"slds-p-horizontal_medium slds-p-vertical_x-small slds-grid"},s.a.createElement("button",{className:"slds-button_reset slds-text-link"},"More comments"),s.a.createElement("span",{className:"slds-text-body_small slds-col_bump-left"},"1 of 8")),s.a.createElement(x,null),s.a.createElement(d.a,null)))))},{id:"post-with-publisher-active",label:"Replies - Publisher active",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(w,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Here's the latest demo presentation"," ",s.a.createElement("a",{href:"javascript:void(0);",title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(_,null),s.a.createElement(b,{comments:"8"}))),s.a.createElement(k,null,s.a.createElement("div",{className:"slds-p-horizontal_medium slds-p-vertical_x-small slds-grid"},s.a.createElement("button",{className:"slds-button_reset slds-text-link"},"More comments"),s.a.createElement("span",{className:"slds-text-body_small slds-col_bump-left"},"1 of 8")),s.a.createElement(x,null),s.a.createElement(d.a,{className:"slds-is-active slds-has-focus"})))))},{id:"questions",label:"Question",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(w,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("h3",{className:"slds-text-heading_small"},"Barbecue Party Tips For A Truly Amazing Event?"),s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"javascript:void(0);",title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(_,null),s.a.createElement(b,null))))))}],J=s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(w,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"javascript:void(0);",title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(_,null),s.a.createElement(b,null))),s.a.createElement(k,null,s.a.createElement("div",{className:"slds-p-horizontal_medium slds-p-vertical_x-small slds-grid"},s.a.createElement("button",{className:"slds-button_reset slds-text-link"},"More comments"),s.a.createElement("span",{className:"slds-text-body_small slds-col_bump-left"},"1 of 8")),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(E,null,s.a.createElement(p,null),s.a.createElement(h,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),s.a.createElement(f,null)))))),s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(w,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"javascript:void(0);",title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(_,null),s.a.createElement(b,null))))));a.d(t,"getElement",(function(){return I})),a.d(t,"getContents",(function(){return M}));var L=n.c.code,S=n.c.h2,H=n.c.h3,z=n.c.p,I=function(){return Object(l.createElement)(n.b,{},Object(l.createElement)("div",{className:"doc lead"},"A feed consists of a list of recurring elements of similar types. Examples of a feed would be a discussion feed."),Object(l.createElement)(i.a,{exampleOnly:!0},Object(r.e)(O,"post-with-liker-bar")),S({id:"About-Feeds"},"About Feeds"),H({id:"Accessibility"},"Accessibility"),z({},"Most feeds have a media object containing the user's name and avatar image. If both the image and the name link to the same location, add ",L({},'tab-index="-1"')," to the ",L({},"<a>")," element so that assistive technology does not read out duplicate links."),S({id:"Base"},"Base"),Object(l.createElement)(i.a,null,J),S({id:"Post"},"Post"),Object(l.createElement)(i.a,null,j),S({id:"Examples"},"Examples"),H({id:"Link-attachment"},"Link attachment"),Object(l.createElement)(i.a,null,Object(r.e)(D,"post-attachment-link")),H({id:"Files(s)-attachment"},"Files(s) attachment"),Object(l.createElement)(i.a,null,Object(r.e)(D,"post-attachment-files")),H({id:"With-replies"},"With replies"),Object(l.createElement)(i.a,null,Object(r.e)(D,"post-with-comments")),H({id:"Replies-Overflow-Bar"},"Replies - Overflow Bar"),Object(l.createElement)(i.a,null,Object(r.e)(D,"post-with-overflow")),H({id:"Replies-Publisher-active"},"Replies - Publisher active"),Object(l.createElement)(i.a,null,Object(r.e)(D,"post-with-publisher-active")),H({id:"Question"},"Question"),Object(l.createElement)(i.a,null,Object(r.e)(D,"questions")),S({id:"States"},"States"),H({id:"Like"},"Like"),Object(l.createElement)(i.a,null,Object(r.e)(O,"post-with-liker-bar")))},M=function(){return Object(n.a)(I())}}});