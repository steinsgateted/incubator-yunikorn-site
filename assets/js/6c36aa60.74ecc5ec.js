"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7315],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6197:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return v},metadata:function(){return y},toc:function(){return g}});var r=n(7462),a=n(3366),i=n(7294),o=n(3905),u=n(2389),l=n(9443);var s=function(){var e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),m=n(6010),p="tabItem_vU9c";function d(e){var t,n,a,o=e.lazy,u=e.block,l=e.defaultValue,d=e.values,h=e.groupId,b=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,c.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===l?l:null!=(t=null!=l?l:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),N=g.tabGroupChoices,w=g.setTabGroupChoices,j=(0,i.useState)(y),C=j[0],T=j[1],E=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var Y=N[h];null!=Y&&Y!==C&&v.some((function(e){return e.value===Y}))&&T(Y)}var x=function(e){var t=e.currentTarget,n=E.indexOf(t),r=v[n].value;r!==C&&(O(t),T(r),null!=h&&w(h,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":u},b)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:x,onClick:x},a,{className:(0,m.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function h(e){var t=(0,u.Z)();return i.createElement(d,(0,r.Z)({key:String(t)},e))}var b=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},f=["components"],v={id:"get_involved",title:"Get Involved"},k=void 0,y={type:"mdx",permalink:"/community/get_involved",source:"@site/src/pages/community/get_involved.md"},g=[{value:"How to join YuniKorn Community",id:"how-to-join-yunikorn-community",children:[{value:"Contribute through github",id:"contribute-through-github",children:[],level:3},{value:"Communication Channels",id:"communication-channels",children:[],level:3},{value:"Community Meetings",id:"community-meetings",children:[{value:"Target Audiences:",id:"target-audiences",children:[],level:4},{value:"Schedule",id:"schedule",children:[],level:4},{value:"Resources",id:"resources",children:[],level:4}],level:3}],level:2},{value:"How to share feedback to YuniKorn Community",id:"how-to-share-feedback-to-yunikorn-community",children:[{value:"Other feedback mechanisms",id:"other-feedback-mechanisms",children:[],level:3}],level:2}],N={toc:g};function w(e){var t=e.components,n=(0,a.Z)(e,f);return(0,o.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-involved"},"Get Involved"),(0,o.kt)("p",null,'Apache YuniKorn (Incubating) community is quite diverse, we have engineers from Alibaba, Apple,\nCloudera, Linkedin, Microsoft, Nvidia, Tencent, Uber, etc. (sorted by alphabetical order). The community deeply believes in the\nimportance of this diversity and the value of "The Apache Way".  We welcome any form of contributions, code, documentation or suggestions!\n\ud83d\ude03 Don\'t wait, join us now!'),(0,o.kt)("h2",{id:"how-to-join-yunikorn-community"},"How to join YuniKorn Community"),(0,o.kt)("p",null,"Please join us through one of the following channels:"),(0,o.kt)("h3",{id:"contribute-through-github"},"Contribute through github"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Basic steps of contributing to project is explained here - ",(0,o.kt)("a",{parentName:"li",href:"how_to_contribute"},"How to contribute"))),(0,o.kt)("h3",{id:"communication-channels"},"Communication Channels"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mailing lists:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"for people wanting to contribute to or discuss the project development: ",(0,o.kt)("a",{parentName:"li",href:"mailto:dev@yunikorn.apache.org"},"dev@yunikorn.apache.org"),(0,o.kt)("br",{parentName:"li"}),"subscribe to: dev@ ",(0,o.kt)("a",{parentName:"li",href:"mailto:dev-subscribe@yunikorn.apache.org?subject=%22subscribe%20to%20YuniKorn%20dev%20list%22"},"subscribe")," (",(0,o.kt)("a",{parentName:"li",href:"mailto:dev-unsubscribe@yunikorn.apache.org?subject=%22unsubscribe%20from%20YuniKorn%20dev%20list%22"},"unsubscribe")," ",(0,o.kt)("a",{parentName:"li",href:"https://lists.apache.org/list.html?dev@yunikorn.apache.org"},"archives"),")"),(0,o.kt)("li",{parentName:"ul"},"for JIRA issue updates subscribe to: issues@ ",(0,o.kt)("a",{parentName:"li",href:"mailto:issues-subscribe@yunikorn.apache.org?subject=%22subscribe%20to%20YuniKorn%20issues%20list%22"},"subscribe")," (",(0,o.kt)("a",{parentName:"li",href:"mailto:issues-unsubscribe@yunikorn.apache.org?subject=%22unsubscribe%20from%20YuniKorn%20issues%20list%22"},"unsubscribe")," ",(0,o.kt)("a",{parentName:"li",href:"https://lists.apache.org/list.html?issues@yunikorn.apache.org"},"archives"),")"),(0,o.kt)("li",{parentName:"ul"},"for GitHub pull requests messages subscribe to: reviews@ ",(0,o.kt)("a",{parentName:"li",href:"mailto:reviews-subscribe@yunikorn.apache.org?subject=%22subscribe%20to%20YuniKorn%20reviews%20list%22"},"subscribe")," (",(0,o.kt)("a",{parentName:"li",href:"mailto:reviews-unsubscribe@yunikorn.apache.org?subject=%22unsubscribe%20from%20YuniKorn%20reviews%20list%22"},"unsubscribe")," ",(0,o.kt)("a",{parentName:"li",href:"https://lists.apache.org/list.html?reviews@yunikorn.apache.org"},"archives"),")"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We use ",(0,o.kt)("a",{parentName:"p",href:"https://slack.com/"},"Slack")," as our collaboration system, you can join us by accessing ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/yunikornworkspace/shared_invite/enQtNzAzMjY0OTI4MjYzLTBmMDdkYTAwNDMwNTE3NWVjZWE1OTczMWE4NDI2Yzg3MmEyZjUyYTZlMDE5M2U4ZjZhNmYyNGFmYjY4ZGYyMGE"},"this link"),".\nCurrently, we have following channels in the workspace: ",(0,o.kt)("inlineCode",{parentName:"p"},"#yunikorn-dev")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"#yunikorn-user"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We have periodically community sync ups in multiple timezones and languages, please find ",(0,o.kt)("a",{parentName:"p",href:"#community-meetings"},"Community Syncup")," to attend online sync ups."))),(0,o.kt)("h3",{id:"community-meetings"},"Community Meetings"),(0,o.kt)("h4",{id:"target-audiences"},"Target Audiences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Developers who are interested to contribute to YuniKorn project."),(0,o.kt)("li",{parentName:"ul"},"Users who are using or interested to learn about the project.")),(0,o.kt)("h4",{id:"schedule"},"Schedule"),(0,o.kt)(h,{defaultValue:"scheduleEN",values:[{label:"America/EU/India",value:"scheduleEN"},{label:"\u4e2d\u6587/Mandarin",value:"scheduleCN"}],mdxType:"Tabs"},(0,o.kt)(b,{value:"scheduleEN",mdxType:"TabItem"}," \ud83d\udcc6 Bi-weekly 9:30 AM US Pacific Time on Wednesdays. ",(0,o.kt)("a",{href:"https://cloudera.zoom.us/j/721195559"},"Click here to join the Zoom meeting.")," "),(0,o.kt)(b,{value:"scheduleCN",mdxType:"TabItem"}," \ud83d\udcc6 Weekly 1:00 PM China Standard Time (GMT+8) on Wednesday.  ",(0,o.kt)("a",{href:"https://cloudera.zoom.us/j/721195559"},"Click here to join the Zoom meeting.")," ")),(0,o.kt)("h4",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Meeting Notes: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/165gzC7uhcKc5XDWiMYSRKBiPQBy2tDtXADUPuhGlUa0/edit#heading=h.461goivmz24v"},"Google Doc"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Calendar: ",(0,o.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/b/3/r/week/2020/3/26?cid=YXBhY2hlLnl1bmlrb3JuQGdtYWlsLmNvbQ"},"Google Calendar")," \ud83d\udc48"))),(0,o.kt)("h2",{id:"how-to-share-feedback-to-yunikorn-community"},"How to share feedback to YuniKorn Community"),(0,o.kt)("p",null,"We welcome you to try our latest releases and share your experiences."),(0,o.kt)("p",null,"Any point, if you are facing any issues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Raise an issue or a feedback in the JIRA as per our ",(0,o.kt)("a",{parentName:"li",href:"reporting_issues"},"guide"),"."),(0,o.kt)("li",{parentName:"ul"},"Clarify / Seek help in the YuniKorn slack ",(0,o.kt)("inlineCode",{parentName:"li"},"#yunikorn-user")," channel")),(0,o.kt)("h3",{id:"other-feedback-mechanisms"},"Other feedback mechanisms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you think, we can add more inputs to this document or additional documentation links for developers including setup etc, please raise issue under YuniKorn Documentation. Refer our ",(0,o.kt)("a",{parentName:"li",href:"reporting_issues"},"guide"),"."),(0,o.kt)("li",{parentName:"ul"},"Any other support please request at YuniKorn slack ",(0,o.kt)("inlineCode",{parentName:"li"},"#general")," channel")))}w.isMDXComponent=!0}}]);