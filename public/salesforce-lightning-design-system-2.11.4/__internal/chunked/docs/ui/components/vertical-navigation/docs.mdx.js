var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/vertical-navigation/docs.mdx.js"]=function(e){function t(t){for(var l,i,c=t[0],s=t[1],d=t[2],m=0,u=[];m<c.length;m++)i=c[m],n[i]&&u.push(n[i][0]),n[i]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);for(o&&o(t);u.length;)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(l=!1)}l&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var l={},n={82:0},r=[];function i(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=l,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(a,l,function(t){return e[t]}.bind(null,l));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var o=s;return r.push([229,0]),a()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},229:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(3),i=a(1),c=a(15),s=a(2),d=a(4),o=a(12),m=a(8),u=a(16),p=a(10),h=a(5),E=a.n(h),v=a(14),b="entity-header",f="folder-header",y=function(e){return n.a.createElement("nav",{className:E()("slds-nav-vertical",{"slds-nav-vertical_compact":e.isCompact,"slds-nav-vertical_shade":e.isShaded}),"aria-label":"Sub page"},e.children)};y.propTypes={className:d.PropTypes.string,children:d.PropTypes.node,isCompact:d.PropTypes.bool,isShaded:d.PropTypes.bool};var R=function(e){return n.a.createElement("li",{className:E()("slds-nav-vertical__item",{"slds-is-active":e.active},e.className)},n.a.createElement("a",{href:"javascript:void(0);",className:"slds-nav-vertical__action","aria-current":e.active},e.children))};R.propTypes={active:d.PropTypes.oneOf([!0,void 0,"page","step","location","date","time"]),className:d.PropTypes.string,children:d.PropTypes.node},R.defaultProps={active:void 0};var _=function(e){var t=e.children,a=e.className,l=e.collapsed,r=e.expanded,i=e.headerId,c=e.isNavVerticalRadioSet,s=e.listId,d=e.title,o=l||r,m=null;return m=c?n.a.createElement("div",null,t):n.a.createElement("ul",{"aria-describedby":i},t),n.a.createElement("div",{className:E()(o?"slds-nav-vertical__overflow":"slds-nav-vertical__section",a)},!o&&!c&&d&&n.a.createElement("h2",{id:i,className:"slds-nav-vertical__title"},d),o&&n.a.createElement(v.a,{className:"slds-button_reset slds-nav-vertical__action slds-nav-vertical__action_overflow","aria-controls":s,"aria-expanded":r?"true":"false"},n.a.createElement(p.a,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"chevronright"}),n.a.createElement("span",{className:"slds-nav-vertical__action-text"},l?"Show More":"Show Less",n.a.createElement("span",{className:"slds-assistive-text"},d))),o?n.a.createElement("div",{id:s,className:E()({"slds-hide":l,"slds-show":r})},m):m)};_.defaultProps={headerId:"header-id-1"},_.propTypes={children:d.PropTypes.node,className:d.PropTypes.string,collapsed:Object(s.b)("listId",d.PropTypes.bool),expanded:Object(s.b)("listId",d.PropTypes.bool),headerId:d.PropTypes.string.isRequired,isNavVerticalRadioSet:d.PropTypes.bool,listId:d.PropTypes.string,title:d.PropTypes.string};var g=n.a.createElement("div",{className:"demo-only",style:{width:"320px"}},n.a.createElement(y,null,n.a.createElement(_,{headerId:b,title:"Reports"},n.a.createElement(R,{active:!0},"Recent"),n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Private Reports"),n.a.createElement(R,null,"Public Reports"),n.a.createElement(R,null,"All Reports")),n.a.createElement(_,{headerId:f,title:"Folders"},n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Shared with Me"),n.a.createElement(R,null,"All Reports")))),w=[{id:"collapsed",label:"Collapsed",element:n.a.createElement("div",{className:"demo-only",style:{width:"320px"}},n.a.createElement(y,null,n.a.createElement(_,{headerId:b,title:"Reports"},n.a.createElement(R,{active:!0},"Recent"),n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Private Reports"),n.a.createElement(R,null,"Public Reports"),n.a.createElement(R,null,"All Reports")),n.a.createElement(_,{headerId:f,title:"Folders"},n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Shared with Me")),n.a.createElement(_,{title:"Folders",collapsed:!0,listId:"search-results",headerId:f},n.a.createElement(R,null,"Overflow Item One"),n.a.createElement(R,null,"Overflow Item Two"),n.a.createElement(R,null,"Overflow Item Three"))))},{id:"expanded",label:"Expanded",element:n.a.createElement("div",{className:"demo-only",style:{width:"320px"}},n.a.createElement(y,null,n.a.createElement(_,{headerId:b,title:"Reports"},n.a.createElement(R,{active:!0},"Recent"),n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Private Reports"),n.a.createElement(R,null,"Public Reports"),n.a.createElement(R,null,"All Reports")),n.a.createElement(_,{headerId:f,title:"Folders"},n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Shared with Me")),n.a.createElement(_,{title:"Folders",expanded:!0,listId:"search-results",headerId:f},n.a.createElement(R,null,"Overflow Item One"),n.a.createElement(R,null,"Overflow Item Two"),n.a.createElement(R,null,"Overflow Item Three"))))}],I=[{id:"compact",label:"Compact",element:n.a.createElement("div",{className:"demo-only",style:{width:"320px"}},n.a.createElement(y,{isCompact:!0},n.a.createElement(_,{headerId:b,title:"Reports"},n.a.createElement(R,{active:!0},"Recent"),n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Private Reports"),n.a.createElement(R,null,"Public Reports"),n.a.createElement(R,null,"All Reports")),n.a.createElement(_,{headerId:f,title:"Folders"},n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Shared with Me"),n.a.createElement(R,null,"All Reports"))))},{id:"items-with-icons",label:"Items with icon",element:n.a.createElement("div",{className:"demo-only",style:{width:"320px"}},n.a.createElement(y,null,n.a.createElement(_,{headerId:b,title:"Reports"},n.a.createElement(R,{active:!0},"Recent"),n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Private Reports"),n.a.createElement(R,null,"Public Reports"),n.a.createElement(R,null,"All Reports")),n.a.createElement(_,{headerId:f,title:"Folders"},n.a.createElement(R,null,n.a.createElement(o.a,{symbol:"open_folder",containerClassName:"slds-line-height_reset",className:"slds-icon-text-default slds-icon_x-small slds-m-right_x-small",assistiveText:"Folder",title:"Folder"}),"Created by Me"),n.a.createElement(R,null,n.a.createElement(o.a,{symbol:"open_folder",containerClassName:"slds-line-height_reset",className:"slds-icon-text-default slds-icon_x-small slds-m-right_x-small",assistiveText:"Folder",title:"Folder"}),"Shared with Me"),n.a.createElement(R,null,"All Reports"))))},{id:"items-with-notifications",label:"Items with notification",element:n.a.createElement("div",{className:"demo-only",style:{width:"320px"}},n.a.createElement(y,null,n.a.createElement(_,{headerId:b,title:"Reports"},n.a.createElement(R,{active:!0},"Recent",n.a.createElement("span",{className:"slds-badge slds-col_bump-left"},n.a.createElement("span",{className:"slds-assistive-text"},":"),"3",n.a.createElement("span",{className:"slds-assistive-text"},"New Items"))),n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Private Reports"),n.a.createElement(R,null,"Public Reports"),n.a.createElement(R,null,"All Reports")),n.a.createElement(_,{headerId:f,title:"Folders"},n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Shared with Me"),n.a.createElement(R,null,"All Reports"))))},{id:"shade",label:"Shaded Background",element:n.a.createElement("div",{className:"demo-only",style:{width:"320px",backgroundColor:"#FAFAFB"}},n.a.createElement(y,{isShaded:!0},n.a.createElement(_,{headerId:b,title:"Reports"},n.a.createElement(R,{active:!0},"Recent"),n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Private Reports"),n.a.createElement(R,null,"Public Reports"),n.a.createElement(R,null,"All Reports")),n.a.createElement(_,{headerId:f,title:"Folders"},n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Shared with Me"),n.a.createElement(R,null,"All Reports"))))},{id:"quickfind",label:"Quickfind",element:n.a.createElement("div",{className:"demo-only",style:{width:"320px"}},n.a.createElement(y,null,n.a.createElement(m.b,{formElementClassName:"slds-p-horizontal_large",labelContent:"Filter navigation items",inputId:"input-id-01",hasLeftIcon:!0,hasHiddenLabel:!0},n.a.createElement(o.a,{className:"slds-input__icon slds-input__icon_right slds-icon-text-default",symbol:"search",title:!1,assistiveText:!1}),n.a.createElement(u.a,{type:"search",id:"input-id-01",placeholder:"Quick Find"})),n.a.createElement(_,{headerId:b,title:"Reports"},n.a.createElement(R,{active:!0},"Recent"),n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Private Reports"),n.a.createElement(R,null,"Public Reports"),n.a.createElement(R,null,"All Reports")),n.a.createElement(_,{headerId:f,title:"Folders"},n.a.createElement(R,null,"Created by Me"),n.a.createElement(R,null,"Shared with Me"))))}],N=function(e){return n.a.createElement("fieldset",{className:E()("slds-nav-vertical",{"slds-nav-vertical_shade":e.shaded},{"slds-nav-vertical_compact":e.compact})},n.a.createElement("legend",{className:"slds-nav-vertical__title"},"Reports"),e.children)},O=function(e){return n.a.createElement("span",{className:E()("slds-nav-vertical__item",e.className)},n.a.createElement("input",{defaultChecked:e.checked,type:"radio",id:e.id,value:e.id,name:e.name||"unique-id-example"}),n.a.createElement("label",{className:"slds-nav-vertical__action",htmlFor:e.id},n.a.createElement("span",{className:"slds-nav-vertical_radio-faux"},e.children)))},x=n.a.createElement((function(e){return n.a.createElement(_,{headerId:"entity-header",title:"Reports",isNavVerticalRadioSet:!0},n.a.createElement(N,null,n.a.createElement(O,{checked:!0,id:"unique-id-01-recent"},"Recent"),n.a.createElement(O,{id:"unique-id-01-created-by-me"},"Created by Me"),n.a.createElement(O,{id:"unique-id-01-private-reports"},"Private Reports"),n.a.createElement(O,{id:"unique-id-01-public-reports"},"Public Reports"),n.a.createElement(O,{id:"unique-id-01-all-reports"},"All Reports")))}),null),P=[{id:"compact",label:"Compact",element:n.a.createElement(_,{headerId:"entity-header",title:"Reports",isNavVerticalRadioSet:!0},n.a.createElement(N,{compact:!0},n.a.createElement(O,{checked:!0,id:"unique-id-02-recent",name:"unique-id-compact"},"Recent"),n.a.createElement(O,{id:"unique-id-02-created-by-me",name:"unique-id-compact"},"Created by Me"),n.a.createElement(O,{id:"unique-id-02-private-reports",name:"unique-id-compact"},"Private Reports"),n.a.createElement(O,{id:"unique-id-02-public-reports",name:"unique-id-compact"},"Public Reports"),n.a.createElement(O,{id:"unique-id-02-all-reports",name:"unique-id-compact"},"All Reports")))},{id:"shade",label:"Shaded Background",element:n.a.createElement("div",{className:"demo-only",style:{backgroundColor:"#FAFAFB"}},n.a.createElement(_,{headerId:"entity-header",title:"Reports",isNavVerticalRadioSet:!0},n.a.createElement(N,{shaded:!0},n.a.createElement(O,{checked:!0,id:"unique-id-03-recent",name:"unique-id-shade"},"Recent"),n.a.createElement(O,{id:"unique-id-03-created-by-me",name:"unique-id-shade"},"Created by Me"),n.a.createElement(O,{id:"unique-id-03-private-reports",name:"unique-id-shade"},"Private Reports"),n.a.createElement(O,{id:"unique-id-03-public-reports",name:"unique-id-shade"},"Public Reports"),n.a.createElement(O,{id:"unique-id-03-all-reports",name:"unique-id-shade"},"All Reports"))))}];a.d(t,"getElement",(function(){return k})),a.d(t,"getContents",(function(){return q}));var S=r.c.a,j=r.c.h2,C=r.c.h3,M=r.c.h4,T=r.c.p,k=function(){return Object(l.createElement)(r.b,{},Object(l.createElement)("div",{className:"doc lead"},"Navigation represents a list of links that either take the user to another page or parts of the page the user is in."),j({id:"List"},"List"),Object(l.createElement)(i.a,null,g),Object(l.createElement)(c.a,{type:"a11y",header:"Accessibility Note"},"The ",Object(l.createElement)("code",null,"aria-current")," attribute is used when an element within a set (e.g., navigation list items) is styled to indicate the selected or active item. In our use case, the attribute should be placed on the ",Object(l.createElement)("code",null,"slds-nav-vertical__action")," link element. In our example above, we're using the generic ",Object(l.createElement)("code",null,"true")," value, but the attribute will accept a variety of options depending on your use case. For more information on ",Object(l.createElement)("code",null,"aria-current"),", please visit the ",Object(l.createElement)("a",{href:"https://www.w3.org/TR/wai-aria-1.1/#aria-current"},"W3C specification page"),"."),C({id:"States"},"States"),M({id:"Collapsed"},"Collapsed"),Object(l.createElement)(i.a,null,Object(s.e)(w,"collapsed")),M({id:"Expanded"},"Expanded"),Object(l.createElement)(i.a,null,Object(s.e)(w,"expanded")),C({id:"Examples"},"Examples"),M({id:"Compact"},"Compact"),Object(l.createElement)(i.a,null,Object(s.e)(I,"compact")),M({id:"Items-with-Icons"},"Items with Icons"),Object(l.createElement)(i.a,null,Object(s.e)(I,"items-with-icons")),M({id:"Items-with-Notifications"},"Items with Notifications"),Object(l.createElement)(i.a,null,Object(s.e)(I,"items-with-notifications")),M({id:"Shaded-Background"},"Shaded Background"),Object(l.createElement)(i.a,null,Object(s.e)(I,"shade")),M({id:"Quickfind"},"Quickfind"),Object(l.createElement)(i.a,null,Object(s.e)(I,"quickfind")),j({id:"Radio-Group"},"Radio Group"),T({},"The radio group variant should be used when your vertical navigation acts as a selection or filter on content, like within a modal. If the vertical navigation takes the user to another page or part of a page, use the standard List version. If your content changes entirely whenever options in the navigation are selected, instead of filtering one master list, then use the ",S({href:"/components/vertical-tabs"},"Vertical Tabs")," component."),Object(l.createElement)(i.a,null,x),C({id:"Examples-2"},"Examples"),M({id:"Compact-2"},"Compact"),Object(l.createElement)(i.a,null,Object(s.e)(P,"compact")),M({id:"Shaded-Background-2"},"Shaded Background"),Object(l.createElement)(i.a,null,Object(s.e)(P,"shade")))},q=function(){return Object(r.a)(k())}}});