var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/tabs/docs.mdx.js"]=function(e){function t(t){for(var n,i,r=t[0],c=t[1],o=t[2],b=0,m=[];b<r.length;b++)i=r[b],s[i]&&m.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);m.length;)m.shift()();return l.push.apply(l,o||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={73:0},l=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var d=c;return l.push([227,0]),a()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},227:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(3),i=a(1),r=a(23),c=a(11),o=a(15),d=a(4),b=a.n(d),m=a(5),h=a.n(m),u=a(10),f=a(66),p=a(14);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){return s.a.createElement("div",{className:"slds-tabs-mobile__group"},e.children)};O.propTypes={children:b.a.node};var T=function(e){return s.a.createElement("div",{className:"slds-tabs-mobile__container"},e.children)};T.propTypes={children:b.a.node};var j=function(e){return s.a.createElement("ul",{className:h()("slds-tabs-mobile",{"slds-hidden":e.isHidden})},e.children)};j.propTypes={children:b.a.node,isHidden:b.a.bool};var I=function(e){return s.a.createElement("li",{className:h()("slds-tabs-mobile__item")},e.children)};I.propTypes={children:b.a.node};var x=function(e){return s.a.createElement(p.a,{isFullWidth:!0,onClick:e.onClick},s.a.createElement("span",{className:"slds-truncate",title:e.summary},e.summary),s.a.createElement(u.a,{className:"slds-icon slds-icon_x-small slds-icon-text-default",sprite:"utility",symbol:"chevronright"}))};x.propTypes={onClick:b.a.func,summary:b.a.string};var _=function(e){return s.a.createElement(f.b,{title:e.title,isAnimated:!0,docked:"left",invoke:"drill-in",isInvokedByTab:!0,isVisible:e.isVisible||!1,handleVisibility:e.hidePanel,hasCenterTitle:!0},e.children||"A panel body accepts any layout or component")};_.propTypes={hidePanel:b.a.func,isVisible:b.a.bool,title:b.a.string,children:b.a.node};var N=function(e){return s.a.createElement(T,null,s.a.createElement(j,{isHidden:!0},s.a.createElement(I,null,s.a.createElement(x,{summary:"Item One"})),s.a.createElement(I,null,s.a.createElement(x,{summary:"Item Two"})),s.a.createElement(I,null,s.a.createElement(x,{summary:"Item Three"}))),s.a.createElement(_,{title:"Item 1 Panel",isVisible:!0},s.a.createElement(j,null,s.a.createElement(I,null,s.a.createElement(x,{summary:"Nested Item One"})),s.a.createElement(I,null,s.a.createElement(x,{summary:"Nested Item Two"})),s.a.createElement(I,null,s.a.createElement(x,{summary:"Nested Item Three"}))),s.a.createElement("div",null," Any content can be here "),s.a.createElement(j,null,s.a.createElement(I,null,s.a.createElement(x,{summary:"Nested Item Four"})),s.a.createElement(I,null,s.a.createElement(x,{summary:"Nested Item Five"})))),s.a.createElement(_,{title:"Item 2 Panel"}),s.a.createElement(_,{title:"Item 3 Panel"}),s.a.createElement(_,{title:"Nested Item 1 Panel"}),s.a.createElement(_,{title:"Nested Item 2 Panel"}),s.a.createElement(_,{title:"Nested Item 3 Panel"}),s.a.createElement(_,{title:"Nested Item 4 Panel"}),s.a.createElement(_,{title:"Nested Item 5 Panel"}))},S=function(e){function t(e){var a,n,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(s=y(t).call(this,e))||"object"!==E(s)&&"function"!=typeof s?g(n):s).hidePanel=a.hidePanel.bind(g(a)),a.state={visiblePanelIdx:-1},a}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){void 0!==this.props.visiblePanelIdx&&-1===this.state.visiblePanelIdx&&this.setState({visiblePanelIdx:this.props.visiblePanelIdx})}},{key:"showPanel",value:function(e){this.props.isStatic||this.setState({visiblePanelIdx:e})}},{key:"hidePanel",value:function(){this.props.isStatic||this.setState({visiblePanelIdx:-1})}},{key:"render",value:function(){var e=this.state.visiblePanelIdx;return s.a.createElement(T,null,s.a.createElement(j,{isHidden:-1!==e},s.a.createElement(I,null,s.a.createElement(x,{summary:"Item One",onClick:this.showPanel.bind(this,0)})),s.a.createElement(I,null,s.a.createElement(x,{summary:"Item Two",onClick:this.showPanel.bind(this,1)})),s.a.createElement(I,null,s.a.createElement(x,{summary:"Item Three",onClick:this.showPanel.bind(this,2)}))),s.a.createElement(_,{title:"Item 1 Panel",isVisible:0===e,hidePanel:this.hidePanel}),s.a.createElement(_,{title:"Item 2 Panel",isVisible:1===e,hidePanel:this.hidePanel}),s.a.createElement(_,{title:"Item 3 Panel",isVisible:2===e,hidePanel:this.hidePanel}))}}])&&v(a.prototype,n),l&&v(a,l),t}(n.Component);S.propTypes={visiblePanelIdx:b.a.number,isStatic:b.a.bool};var C=S,k=a(31),P=a(32),A=a(12),U=a(87),W=a(9),M=a(72),B=a(13),L=function(e){return s.a.createElement(k.a,{selectedIndex:e.selectedIndex},s.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},e.itemOneContent),s.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),s.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))};L.propTypes={selectedIndex:b.a.number,itemOneContent:b.a.node},L.defaultProps={selectedIndex:0,itemOneContent:"Item One Content"};var V=function(){return s.a.createElement(L,{itemOneContent:s.a.createElement(M.a,null)})},F=function(){return s.a.createElement("div",{className:"demo-only",style:{height:"12rem"}},s.a.createElement(k.a,null,s.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},s.a.createElement("h2",null,"Item One Content")),s.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2"},s.a.createElement("h2",null,"Item Two Content")),s.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},s.a.createElement("h2",null,"Item Three Content")),s.a.createElement(k.a.Item,{title:"Item Four",id:"tab-default-4"},s.a.createElement("h2",null,"Item Four Content")),s.a.createElement(k.a.Item,{title:"Item Five",id:"tab-default-5"},s.a.createElement("h2",null,"Item Five Content")),s.a.createElement(k.a.ItemOverflow,{title:"More Tabs",id:"tab-default-8"},s.a.createElement(U.a,{label:"More",type:"tabs",flavor:"default",isOpen:!0},s.a.createElement(z,null)))))},D=function(){return s.a.createElement("div",{className:"demo-only",style:{height:"12rem"}},s.a.createElement(k.a,null,s.a.createElement(k.a.Item,{title:"Opportunities",leftIcon:s.a.createElement(P.a,{className:"slds-icon_small",symbol:"opportunity",title:"Opportunities",assistiveText:!1}),id:"tab-default-1"},s.a.createElement("h2",null,"Item One Content")),s.a.createElement(k.a.Item,{title:"Cases",leftIcon:s.a.createElement(P.a,{className:"slds-icon_small",title:"Cases",symbol:"case",assistiveText:!1}),id:"tab-default-2"},s.a.createElement("h2",null,"Item Two Content")),s.a.createElement(k.a.Item,{title:"Products",leftIcon:s.a.createElement(P.a,{className:"slds-icon_small",title:"Products",symbol:"product",assistiveText:!1}),id:"tab-default-3"},s.a.createElement("h2",null,"Item Three Content")),s.a.createElement(k.a.Item,{title:"Price Books",leftIcon:s.a.createElement(P.a,{className:"slds-icon_small",title:"Price Books",symbol:"pricebook",assistiveText:!1}),id:"tab-default-4"},s.a.createElement("h2",null,"Item Four Content")),s.a.createElement(k.a.Item,{title:"Contacts",leftIcon:s.a.createElement(P.a,{className:"slds-icon_small",title:"Contacts",symbol:"contact",assistiveText:!1}),id:"tab-default-5"},s.a.createElement("h2",null,"Item Five Content")),s.a.createElement(k.a.ItemOverflow,{title:"More Tabs",id:"tab-default-8"},s.a.createElement(U.a,{label:"More",type:"tabs",flavor:"default",isOpen:!0},s.a.createElement(H,null)))))},z=function(){return s.a.createElement(W.f,{className:"slds-dropdown_right"},s.a.createElement(W.h,{className:"slds-dropdown_length-with-icon-10"},s.a.createElement(W.g,{title:"Accounts"},"Accounts"),s.a.createElement(W.g,{title:"Approvals"},"Approvals"),s.a.createElement(W.g,{title:"Lead"},"Leads")))},H=function(){return s.a.createElement(W.f,{className:"slds-dropdown_right"},s.a.createElement(W.h,{className:"slds-dropdown_length-with-icon-10"},s.a.createElement(W.g,{title:"Accounts"},s.a.createElement("span",{className:"slds-media slds-media_center"},s.a.createElement("span",{className:"slds-media__figure"},s.a.createElement(P.a,{className:"slds-icon_small",symbol:"account",assistiveText:!1})),s.a.createElement("span",{className:"slds-media__body"},"Accounts"))),s.a.createElement(W.g,{title:"Approvals"},s.a.createElement("span",{className:"slds-media slds-media_center"},s.a.createElement("span",{className:"slds-media__figure"},s.a.createElement(P.a,{className:"slds-icon_small",symbol:"approval",assistiveText:!1})),s.a.createElement("span",{className:"slds-media__body"},"Approvals"))),s.a.createElement(W.g,{title:"Lead"},s.a.createElement("span",{className:"slds-media slds-media_center"},s.a.createElement("span",{className:"slds-media__figure"},s.a.createElement(P.a,{className:"slds-icon_small",symbol:"lead",assistiveText:!1})),s.a.createElement("span",{className:"slds-media__body"},"Leads")))))},R=function(){return s.a.createElement(k.a,{isCard:!0,selectedIndex:0},s.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},s.a.createElement(B.d,null,s.a.createElement(B.c,{symbol:"contact",title:"Card Header",href:"javascript:void(0);",action:s.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),s.a.createElement(B.a,{hasPadding:!0},"This is a card inside an ",s.a.createElement("code",{className:"doc"},".slds-tabs_card")," ","to show how styling is removed when cards are nested inside."),s.a.createElement(B.b,null,"View All ",s.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))),s.a.createElement(B.d,null,s.a.createElement(B.c,{symbol:"contact",title:"Card Header",href:"javascript:void(0);",action:s.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),s.a.createElement(B.a,{hasPadding:!0},"This is a card inside an ",s.a.createElement("code",{className:"doc"},".slds-tabs_card")," ","to show how styling is removed when cards are nested inside."),s.a.createElement(B.b,null,"View All ",s.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))),s.a.createElement(B.d,{hasCardBoundary:!0},s.a.createElement(B.c,{symbol:"contact",title:"Card Header",href:"javascript:void(0);",action:s.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),s.a.createElement(B.a,{hasPadding:!0},"This is a card inside an ",s.a.createElement("code",{className:"doc"},".slds-tabs_card")," ","to illustrate how",s.a.createElement("code",{className:"doc"},".slds-card_boundary")," adds a rounded border when desired."),s.a.createElement(B.b,null,"View All ",s.a.createElement("span",{className:"slds-assistive-text"},"Contacts")))),s.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),s.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))},q=function(){return s.a.createElement("div",{className:"demo-only",style:{height:"12rem"}},s.a.createElement(k.a,null,s.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},s.a.createElement("h2",null,"Item One Content")),s.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2",rightIcon:s.a.createElement(A.a,{className:"slds-icon_x-small slds-icon-text-error",symbol:"error",title:"This item has an error",assistiveText:"This item has an error"})},s.a.createElement("h2",null,"Item Two Content - Has Error")),s.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},s.a.createElement("h2",null,"Item Three Content")),s.a.createElement(k.a.Item,{title:"Item Four",id:"tab-default-4"},s.a.createElement("h2",null,"Item Four Content"))))},J=function(){return s.a.createElement(k.a,{size:"medium"},s.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},"Item One Content"),s.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),s.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))},G=function(){return s.a.createElement(k.a,{size:"large"},s.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},"Item One Content"),s.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),s.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))},K=(s.a.createElement(L,null),s.a.createElement(L,{selectedIndex:1}),s.a.createElement(J,null),s.a.createElement(G,null),s.a.createElement(F,null),s.a.createElement(D,null),s.a.createElement(q,null),s.a.createElement(V,null),s.a.createElement(R,null),a(39)),Y=a(73),$=a(2);a.d(t,"getElement",(function(){return re})),a.d(t,"getContents",(function(){return ce}));var Q=l.c.a,X=l.c.code,Z=l.c.h2,ee=l.c.h3,te=l.c.h4,ae=l.c.h5,ne=l.c.li,se=l.c.p,le=l.c.strong,ie=l.c.ul,re=function(){return Object(n.createElement)(l.b,{},Object(n.createElement)("div",{className:"doc lead"},"Tabs keeps related content in a single container that is shown and hidden through navigation."),Object(n.createElement)(i.a,{exampleOnly:!0,style:{height:"200px"}},Object(n.createElement)(L,null)),Z({id:"About-Tabs"},"About Tabs"),se({},"The default tab set style encapsulates everything that is underneath it without enclosing it visually. Because tab sets can be nested, pay close attention to the markup. They are constructed to prevent styles from leaking from parent tab sets into child tab sets."),ee({id:"Implementation"},"Implementation"),te({id:"Markup"},"Markup"),se({},"The following markup is crucial for Accessibility"),ie({},ne({},"Selected tab’s anchor has ",X({},'aria-selected="true"'),", all other tabs’ anchors have ",X({},'aria-selected="false"')),ne({},"Selected tab’s anchor has ",X({},'tabindex="0"'),", all other tabs have ",X({},'tabindex="-1"')),ne({},"Each tab’s anchor has an ",X({},"aria-controls")," attribute whose value is the id of the associated ",X({},'<div role="tabpanel">')),ne({},"Each tab panel has an ",X({},"aria-labelledby")," attribute whose value is the id of its associated ",X({},'<a role="tab">'))),te({id:"Keyboard-Interactions"},"Keyboard Interactions"),ie({},ne({},"Arrow keys, when focus is on a selected tab, cycle selection to the next or previous tab"),ne({},"Tab key, when focus is before the tab list, moves focus to the selected tab"),ne({},"Tab key, when focus is on selected tab, moves focus into the selected tab’s associated tab panel or to the next focusable element on the page if that panel has no focusable elements"),ne({},"Shift+Tab keys, when focus is on first element in a tab panel, moves focus back to the selected tab")),te({id:"JavaScript-Needs"},"JavaScript Needs"),se({},"The active tab has two markup requirements:"),ie({},ne({},"The ",X({},".slds-active")," class should be placed on the ",X({},"li")," with ",X({},".slds-tabs_{variant}__item"),"."),ne({},"The corresponding ",X({},".slds-tabs_{variant}__content")," container receives ",X({},".slds-show"),"."),ne({},"In order to achieve the focus state styling, apply ",X({},".slds-has-focus")," to the parent ",X({},"li"),".")),se({},"Inactive ",X({},".slds-tabs_{variant}__content")," containers receive ",X({},".slds-hide"),"."),se({},"When the user clicks a different tab, move the ",X({},".slds-active")," class and toggle the ",X({},".slds-hide"),"/",X({},".slds-show")," classes."),ee({id:"Accessibility"},"Accessibility"),se({},"Tabbed UIs have three parts with specific ARIA role requirements:"),ie({},ne({},"The tab list, which should have ",X({},'role="tablist"')),ne({},"The tabs in that list, which should each be an ",X({},'<a role="tab">')," anchor wrapped in a ",X({},'<li role="presentation">')," list item"),ne({},"The tab panels, which display each tab’s content and should each have ",X({},'role="tabpanel"'))),Z({id:"Base"},"Base"),Object(n.createElement)(c.a,{title:"Tabs Base"},Object(n.createElement)(i.a,{style:{height:"200px"}},Object(n.createElement)(L,null))),Z({id:"With-Overflow"},"With Overflow"),se({},"The overflow tab style is provided as a tab item type that acts as a menu component and appears as a tab item. It could contain those tab items that don't all fit in a horizontal orientation."),Object(n.createElement)(c.a,{title:"Tabs Overflowing"},Object(n.createElement)(i.a,{style:{height:"200px"}},Object(n.createElement)(F,null))),Object(n.createElement)(o.a,{type:"note",header:"Implementation Guidelines"},"The ",Object(n.createElement)("code",null,"slds-dropdown__list")," element requires a",Object(n.createElement)("code",null,"slds-dropdown_length-with-icon-10")," class, where 10 is the maximum number of items that will be visible before having to scroll."),Z({id:"With-Icon"},"With Icon"),se({},"Icons can be used with tabs to help users differentiate among them."),Object(n.createElement)(c.a,{title:"Tabs With Icons"},Object(n.createElement)(i.a,{style:{height:"200px"}},Object(n.createElement)(D,null))),Z({id:"With-Error"},"With Error"),se({},"An icon can be used to communicate when a tab contains a validation error that needs attention."),Object(n.createElement)(c.a,{title:"Tabs With Icons"},Object(n.createElement)(i.a,{style:{height:"200px"}},Object(n.createElement)(q,null))),Z({id:"With-Nested-Scoped-Tabs"},"With Nested Scoped Tabs"),se({},"If nesting tabs within tabs, the second set should be rendered as Scoped Tabs to help differentiate between tab sets."),Object(n.createElement)(c.a,{title:"Tabs with Nested Scoped Tabs"},Object(n.createElement)(i.a,{style:{height:"200px"}},Object(n.createElement)(V,null))),Z({id:"Size-Modifiers"},"Size Modifiers"),se({},"Tabs come with three size modifiers: default, medium, and large. Each size step will gradually increase the typography. Add the modifier class ",X({},"slds-tabs_medium")," or ",X({},"slds-tabs_large")," to the ",X({},"slds-tabs_default")," element."),ee({id:"Medium"},"Medium"),Object(n.createElement)(c.a,{title:"Tabs with Medium sizing modifier"},Object(n.createElement)(i.a,null,Object(n.createElement)(J,null))),ee({id:"Large"},"Large"),Object(n.createElement)(c.a,{title:"Tabs with Large sizing modifier"},Object(n.createElement)(i.a,null,Object(n.createElement)(G,null))),Z({id:"Subtabs"},"Subtabs"),se({},"Subtabs are used to provide an additional level of navigation below the Global Navigation Tab Bar. Use these tabs when users need to work across multiple sub-pages within a single navigation item."),Object(n.createElement)(i.a,{style:{height:"100px"}},K.e),ee({id:"Expected-Behavior"},"Expected Behavior"),ie({},ne({},"The first tab within the Subtab Bar is always the default content for the parent navigation item. To differentiate this tab from other sub-navigation tabs, this tab cannot be closed."),ne({},"When opening a navigation item for the first time, the default sub-navigation tab can be assumed; don’t show the Subtab Bar.",ie({},ne({},"When opening the first additional sub-navigation tab, a new tab bar is inserted containing both the default tab and the new sub-navigation tab."))),ne({},"All sub tabs are closed when the parent navigation item is closed."),ne({},"Subtabs can optionally include a tab menu for additional controls.")),ee({id:"With-Focus"},"With Focus"),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"subtabs-has-focus")),ee({id:"With-Borders"},"With Borders"),se({},"To add borders on either side of the subtab, add the classes ",X({},"slds-border_right")," and ",X({},"slds-border_left"),", as needed, to the ",X({},"<li>")," with class ",X({},"slds-sub-tabs__item"),"."),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"subtabs-borders")),ee({id:"With-Tab-Actions"},"With Tab Actions"),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"subtabs-menu")),ee({id:"Status-Options"},"Status Options"),te({id:"Unsaved-Tab"},"Unsaved Tab"),se({},"Unsaved tabs receive a blue asterisk on the tab."),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"subtabs-unsaved")),Object(n.createElement)(o.a,{header:"Additional Tag for Accessibility",type:"a11y"},"In order to inform screen readers of the unsaved state, an ",Object(n.createElement)("code",null,"<abbr>")," tag is used to render the asterisk. The ",Object(n.createElement)("code",null,"title")," attribute and ",Object(n.createElement)("code",null,"aria-label")," should read ",Object(n.createElement)("b",null,'"Tab Not Saved"'),"."),Object(n.createElement)(r.a,{toggleCode:!1},Object(n.createElement)("abbr",{className:"slds-indicator_unsaved",title:"Tab Not Saved","aria-label":"Tab Not Saved"},"*")),te({id:"Communicating-Status-to-Screen-Readers"},"Communicating Status to Screen Readers"),se({},"The following examples of sub tab status updates should all employ the same technique to communicate that update to users of assistive technology, who would be otherwise unaware of that status change."),se({},"You should use a single hidden ARIA live region for the entire sub tabs block, the contents of which gets updated each time a sub tab changes its status. The contents should contain a description of the status level and the name of the tab the status change event occurred in. The markup would look something like:"),Object(n.createElement)(r.a,{toggleCode:!1},Object(n.createElement)("div",{className:"slds-assistive-text","aria-live":"polite"},"...")),se({},"Upon clearing the status on a given tab, you should clear the message from the live region."),te({id:"Unread-Tab"},"Unread Tab"),se({},"Unread tabs receive a red dot on the tab."),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"unread")),Object(n.createElement)(o.a,{header:"Accessibility",type:"a11y"},"In order to inform screen readers of new activity in a tab, 2 things should occur.",Object(n.createElement)("br",null),Object(n.createElement)("br",null),"1. The ",Object(n.createElement)("code",null,"title")," attribute and ",Object(n.createElement)("code",null,"aria-label")," on the element that displays the red dot should read ",Object(n.createElement)("b",null,'"New Activity"'),'. This will update the text content of the tab to include the "New Activity" text: "New Activity Chat - Customer".',Object(n.createElement)("br",null),Object(n.createElement)("br",null),"2. The hidden live region as described above, should have its content updated to ",Object(n.createElement)("b",null,'"New Activity in Tab: [Tab Name Here]"')," to alert the user of new activity in that particular sub tab."),Object(n.createElement)(r.a,{toggleCode:!1},Object(n.createElement)("span",{"aria-label":"New Activity",className:"slds-indicator_unread",title:"New Activity"})),Object(n.createElement)(r.a,{toggleCode:!1},Object(n.createElement)("div",{className:"slds-assistive-text","aria-live":"polite"},"New activity in Tab: Chat - Customer")),te({id:"Unread-and-Unsaved-Tab"},"Unread and Unsaved Tab"),se({},"Unread and unsaved tabs receive a blue asterisk with a red dot underneath. Be sure to check out the individual sections above for the Accessibility requirements."),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"unsaved")),Object(n.createElement)(o.a,{header:"Accessibility",type:"a11y"},"Don't forget to update the hidden live region with which sub tab has new activity"),te({id:"Warning-Tab"},"Warning Tab"),se({},"When you wish to draw attention to a particular sub tab because a warning about that tab has occurred, you can use the ",X({},"slds-has-warning")," class to change the background color and introduce a short pulsing animation to draw attention from the user."),se({},"The icon is updated to be the warning icon, to give an extra way to communicate the level of the status without relying on the use of color alone."),se({},"In this example we show that something inside the sub tab is about to break a service level agreement in 30 seconds, and we wish to draw the users attention to it to take action."),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"warning")),Object(n.createElement)(o.a,{header:"Accessibility",type:"a11y"},"Update the hidden live region with a message that informs the user of the status level, the warning and the offending sub tab"," ",Object(n.createElement)("b",null,"[level]: [message] in tab: [tab_name]")),Object(n.createElement)(r.a,{toggleCode:!1},Object(n.createElement)("div",{className:"slds-assistive-text","aria-live":"polite"},"Warning: SLA agreement in 30 seconds in tab: Chat - Customer")),ae({id:"Unsaved-Warning-Tab"},"Unsaved Warning Tab"),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"warning-unsaved")),ae({id:"Unread-Warning-Tab"},"Unread Warning Tab"),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"warning-unread")),te({id:"Error-Tab"},"Error Tab"),se({},"When you wish to draw attention to a particular sub tab because an error or violation has occurred in that tab, you can use the ",X({},"slds-has-error")," class to change the background color and introduce a short pulsing animation to draw attention from the user."),se({},"The icon is updated to be the error icon, to give an extra way to communicate the level of the status without relying on the use of color alone."),se({},"In this example we show that something inside the sub tab has broken an SLA agreement, and we wish to draw the users attention to it to take action."),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"error")),Object(n.createElement)(o.a,{header:"Accessibility",type:"a11y"},"Update the hidden live region with a message that informs the user of the status level, the error or violation and the offending sub tab"," ",Object(n.createElement)("b",null,"[level]: [message] in tab: [tab_name]")),Object(n.createElement)(r.a,{toggleCode:!1},Object(n.createElement)("div",{className:"slds-assistive-text","aria-live":"polite"},"Violation: SLA agreement in tab: Chat - Customer")),ae({id:"Unsaved-Error-Tab"},"Unsaved Error Tab"),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"error-unsaved")),ae({id:"Unread-Error-Tab"},"Unread Error Tab"),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"error-unread")),te({id:"Success-Tab"},"Success Tab"),se({},"When you wish to draw attention to a particular sub tab because a warning or violation has been cleared in the sub tab, you can use the ",X({},"slds-has-success")," class to change the background color and introduce a short pulsing animation to draw attention from the user."),se({},"The icon is updated to be the success icon, to give an extra way to communicate the level of the status without relying on the use of color alone."),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"success")),Object(n.createElement)(o.a,{header:"Accessibility",type:"a11y"},"Update the hidden live region with a message that informs the user that the status level has been successfully cleared and the sub tab it was cleared from"," ",Object(n.createElement)("b",null,"[level]: [message] in tab: [tab_name]")),Object(n.createElement)(r.a,{toggleCode:!1},Object(n.createElement)("div",{className:"slds-assistive-text","aria-live":"polite"},"Success: SLA agreement warning cleared in tab: Chat - Customer")),ae({id:"Unsaved-Success-Tab"},"Unsaved Success Tab"),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"success-unsaved")),ae({id:"Unread-Success-Tab"},"Unread Success Tab"),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"success-unread")),ee({id:"With-Overflow-Tab"},"With Overflow Tab"),se({},"Overflowing subtabs are contained in a More dropdown."),Object(n.createElement)(i.a,{style:{height:"100px"}},Object($.e)(K.f,"overflow-tabs")),te({id:"Overflow-Tab-Open"},"Overflow Tab Open"),Object(n.createElement)(i.a,{style:{height:"200px"}},Object($.e)(K.f,"overflow-tabs-open")),te({id:"Unread-Overflow-Tab"},"Unread Overflow Tab"),Object(n.createElement)(i.a,{style:{height:"200px"}},Object($.e)(K.f,"unread-overflow-tabs-open")),te({id:"Unsaved-Overflow-Tab"},"Unsaved Overflow Tab"),Object(n.createElement)(i.a,{style:{height:"200px"}},Object($.e)(K.f,"unsaved-overflow-tabs-open")),te({id:"Unread-and-Unsaved-Overflow-Tab"},"Unread and Unsaved Overflow Tab"),Object(n.createElement)(i.a,{style:{height:"200px"}},Object($.e)(K.f,"unsaved-unread-overflow-tabs-open")),te({id:"Success-Overflow-Tab"},"Success Overflow Tab"),Object(n.createElement)(i.a,{style:{height:"200px"}},Object($.e)(K.f,"overflow-tabs-success")),te({id:"Unread-and-Unsaved-Success-Overflow-Tab"},"Unread and Unsaved Success Overflow Tab"),Object(n.createElement)(i.a,{style:{height:"200px"}},Object($.e)(K.f,"overflow-tabs-success-unread-unsaved")),te({id:"Warning-Overflow-Tab"},"Warning Overflow Tab"),Object(n.createElement)(i.a,{style:{height:"200px"}},Object($.e)(K.f,"overflow-tabs-warning")),te({id:"Unread-and-Unsaved-Warning-Overflow-Tab"},"Unread and Unsaved Warning Overflow Tab"),Object(n.createElement)(i.a,{style:{height:"200px"}},Object($.e)(K.f,"overflow-tabs-warning-unread-unsaved")),te({id:"Error-Overflow-Tab"},"Error Overflow Tab"),Object(n.createElement)(i.a,{style:{height:"200px"}},Object($.e)(K.f,"overflow-tabs-error")),te({id:"Unread-and-Unsaved-Error-Overflow-Tab"},"Unread and Unsaved Error Overflow Tab"),Object(n.createElement)(i.a,{style:{height:"200px"}},Object($.e)(K.f,"overflow-tabs-error-unread-unsaved")),Z({id:"Vertical"},"Vertical"),se({},"To use vertical tabs, check out the ",Q({href:"../vertical-tabs"},"Vertical Tabs")," component"),Object(n.createElement)(c.a,{title:"Tabs as Vertical"},Y.a),Z({id:"As-a-Card"},"As a Card"),se({},"To style tabs as a card, add the class ",X({},"slds-tabs_card")," to the ",X({},"<div>")," with the class ",X({},"slds-tabs_default"),". See the following example for guidance on styling cards inside the tab panel content."),Object(n.createElement)(c.a,{title:"Tabs as a Card"},Object(n.createElement)(i.a,{style:{height:"600px"}},Object(n.createElement)(R,null))),Z({id:"On-Mobile"},"On Mobile"),se({},"For mobile, tabs become stacked and act as buttons that drill in to see the tab's content."),se({},"Mobile tabs consist of two parts, the tabs, which are represented via buttons, and their associated panels. When clicking on one of the buttons, the associated panel will slide in from right-to-left."),Object(n.createElement)(o.a,{header:"Focus Management",type:"a11y"},"When a user selects a tab button, focus should be placed on the back button of the panel that slides into view. When the user clicks the back button, focus should be placed on the button that was just pressed."),Object(n.createElement)(c.a,{title:"Tabs Mobile Base"},Object(n.createElement)(i.a,null,Object(n.createElement)(C,null))),ee({id:"Accessibility-2"},"Accessibility"),se({},le({},"Visibility")),ie({},ne({},"The panels should have ",X({},"aria-hidden=true")," when they are not visible to ensure keyboard and screen reader users cannot access the content."),ne({},"The tabs should have ",X({},"aria-hidden=true")," when a panel is open to ensure keyboard and screen reader users cannot access the buttons.")),se({},le({},"Focus Management")),se({},"When a user selects a tab button, focus should be placed on the back button of the panel that slides into view. When the user clicks the back button, focus should be placed on the button that was just pressed."),se({},le({},"Assistive Text")),se({},"The title and assistive text for the panel's back button text should read \"Collapse $&123;heading text&125;” so it stays contextual to the tab that was clicked on."),ee({id:"Panel-Open"},"Panel Open"),se({},'When clicking a tab button, the entire view changes and is replaced with the "content" of that tab inside of a panel. This includes a back button on the top left of the screen to go back to the view with the tabs.'),Object(n.createElement)(c.a,{title:"Tabs Mobile Drilled-in"},Object(n.createElement)(i.a,null,Object(n.createElement)(C,{visiblePanelIdx:0,isStatic:!0}))),ee({id:"Adjacent-Tab-Sets"},"Adjacent Tab Sets"),se({},"When there are two or more immediately adjacent tab sets on mobile, use the ",X({},"slds-tabs_mobile__group")," class to adjust the styling to make them appear as if they're part of one master list. Semantically, they are still two separate lists."),Object(n.createElement)(c.a,{title:"Tabs Mobile Adjacent Stacked"},Object(n.createElement)(i.a,null,Object(n.createElement)(O,null,Object(n.createElement)(C,{isStatic:!0}),Object(n.createElement)(C,{isStatic:!0,startingIdx:3})))),ee({id:"Nested-Tab-Sets"},"Nested Tab Sets"),Object(n.createElement)(c.a,{title:"Tabs Mobile Nested"},Object(n.createElement)(i.a,{style:{height:"300px"}},Object(n.createElement)(N,null))))},ce=function(){return Object(l.a)(re())}}});