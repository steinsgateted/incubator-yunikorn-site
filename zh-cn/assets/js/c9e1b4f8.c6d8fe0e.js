"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41120],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,k=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[s]="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32328:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],u={id:"acls",title:"ACLs"},o=void 0,p={unversionedId:"user_guide/acls",id:"user_guide/acls",title:"ACLs",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user_guide/acls.md",sourceDirName:"user_guide",slug:"/user_guide/acls",permalink:"/zh-cn/docs/next/user_guide/acls",draft:!1,tags:[],version:"current",frontMatter:{id:"acls",title:"ACLs"},sidebar:"docs",previous:{title:"Preemption",permalink:"/zh-cn/docs/next/user_guide/preemption_cases"},next:{title:"\u8d44\u6e90\u914d\u989d\u7ba1\u7406",permalink:"/zh-cn/docs/next/user_guide/resource_quota_management"}},c={},s=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b\u914d\u7f6e",id:"\u793a\u4f8b\u914d\u7f6e",level:2},{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"\u8f6c\u4e49\u548c\u5f15\u53f7",id:"\u8f6c\u4e49\u548c\u5f15\u53f7",level:3},{value:"\u8bbf\u95ee\u68c0\u67e5",id:"\u8bbf\u95ee\u68c0\u67e5",level:2},{value:"\u7528\u6237\u548c\u7ec4\u4fe1\u606f",id:"\u7528\u6237\u548c\u7ec4\u4fe1\u606f",level:2}],d={toc:s},m="wrapper";function k(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u7528\u6237\u4fe1\u606f\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"usergroup_resolution"},"\u8fd9\u91cc")," \u5b9a\u4e49\u7684\u65b9\u6cd5\u4ece kubernetes shim \u4f20\u9012\u7ed9 Yunikorn core\u3002")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.kt)("p",null,"\u8bbf\u95ee\u63a7\u5236\u5217\u8868\u5bf9 YuniKorn \u6765\u8bf4\u662f\u901a\u7528\u7684\u3002\n\u5b83\u4eec\u53ef\u4ee5\u5728 YuniKorn \u7684\u591a\u4e2a\u5730\u65b9\u4f7f\u7528\u3002\n\u76ee\u524d\u7684\u4f7f\u7528\u60c5\u51b5\u4ec5\u9650\u4e8e\u961f\u5217 ACL\u3002"),(0,l.kt)("p",null,"\u8bbf\u95ee\u63a7\u5236\u5217\u8868\u5141\u8bb8\u5bf9\u5217\u8868\u4e2d\u6307\u5b9a\u7684\u7528\u6237\u548c\u7ec4\u8fdb\u884c\u8bbf\u95ee\u3002\n\u4ed6\u4eec\u4e0d\u63d0\u4f9b\u660e\u786e\u5220\u9664\u6216\u62d2\u7edd\u8bbf\u95ee\u5217\u8868\u4e2d\u6307\u5b9a\u7684\u7528\u6237\u548c\u7ec4\u7684\u53ef\u80fd\u6027\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u8bbf\u95ee\u63a7\u5236\u5217\u8868\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8bbf\u95ee\u662f ",(0,l.kt)("em",{parentName:"p"},"\u62d2\u7edd")," \u7684\u3002"),(0,l.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,l.kt)("p",null,"\u8bbf\u95ee\u63a7\u5236\u5217\u8868\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ACL ::= \u201c*\u201d |  userlist [ \u201c \u201c grouplist ]\nuserlist ::= \u201c\u201d | user { \u201c,\u201d user }\ngrouplist ::= \u201c\u201d | group { \u201c,\u201d group }\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5b9a\u4e49\u6307\u5b9a\u4e86\u4e00\u4e2a\u901a\u914d\u7b26 *\uff0c\u7ed3\u679c\u662f\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u7528\u6237\u5217\u8868\u4e3a\u7a7a\uff0c\u7ec4\u5217\u8868\u4e3a\u7a7a\uff0c\u5219\u6ca1\u6709\u4eba\u53ef\u4ee5\u8bbf\u95ee\u3002\n\u62d2\u7edd\u6240\u6709\u7684 ACL \u6709\u4e24\u79cd\u53ef\u80fd\u7684\u8868\u73b0\u5f62\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7a7a\u7684\u8bbf\u95ee\u63a7\u5236\u5217\u8868\u3002(\u9690\u5f0f)"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7a7a\u683c(\u663e\u5f0f)")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u914d\u7f6e"},"\u793a\u4f8b\u914d\u7f6e"),(0,l.kt)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b"),(0,l.kt)("p",null,"\u4e00\u4e2a\u53ea\u5141\u8bb8\u7528\u6237 ",(0,l.kt)("inlineCode",{parentName:"p"},"sue")," \u8bbf\u95ee\u7684 ACL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue\n")),(0,l.kt)("p",null,"\u5176\u4ed6\u4eba\u4e0d\u4f1a\u5f97\u5230\u8bbf\u95ee\u6743\uff0c\u8fd9\u4ec5\u9002\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"sue"),"\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"john")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"bob")," \u5c06\u88ab\u62d2\u7edd\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u5141\u8bb8\u7528\u6237 ",(0,l.kt)("inlineCode",{parentName:"p"},"sue")," \u548c\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," \u6210\u5458\u8bbf\u95ee\u7684 ACL\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue dev\n")),(0,l.kt)("p",null,"\u7528\u6237 ",(0,l.kt)("inlineCode",{parentName:"p"},"sue")," \u6839\u636e\u5979\u5728ACL\u7684\u7528\u6237\u90e8\u5206\u7684\u660e\u786e\u63d0\u53ca\u800c\u83b7\u5f97\u8bbf\u95ee\u6743\u3002\n\u5c3d\u7ba1\u5979\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," \u7ec4\u7684\u6210\u5458\u3002\u5979\u7684\u7ec4\u5458\u8eab\u4efd\u662f\u4e0d\u76f8\u5173\u7684\u3002"),(0,l.kt)("p",null,"\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"john")," \u7684\u7528\u6237\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," \u7ec4\u7684\u6210\u5458\uff0c\u4ed6\u5c06\u88ab\u5141\u8bb8\u6839\u636e\u4ed6\u7684\u7ec4\u5458\u8eab\u4efd\u8fdb\u884c\u8bbf\u95ee\u3002\n\u7b2c\u4e09\u4e2a\u7528\u6237\u53eb ",(0,l.kt)("inlineCode",{parentName:"p"},"bob")," \uff0c\u4ed6\u6ca1\u6709\u88ab\u660e\u786e\u63d0\u5230\uff0c\u4e5f\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," \u7ec4\u7684\u6210\u5458\uff0c\u5c06\u88ab\u62d2\u7edd\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u5141\u8bb8\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," \u7ec4\u6210\u5458\u7684 ACL\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'  adminacl: " dev,test"\n')),(0,l.kt)("p",null,"ACL\u5fc5\u987b\u4ee5\u7a7a\u683c\u5f00\u59cb\uff0c\u8868\u793a\u6ca1\u6709\u7528\u6237\u5217\u8868\u3002\n\u5982\u679cACL\u6ca1\u6709\u6b63\u786e\u5f15\u7528\uff0c\u7a7a\u683c\u4f1a\u88ab yaml \u89e3\u6790\u5668\u5220\u9664\u3002\n\u7531\u4e8e\u7528\u6237\u5217\u8868\u662f\u7a7a\u7684\uff0c\u9664\u975e\u4ed6\u4eec\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," \u7ec4\u7684\u6210\u5458\uff0c\u5426\u5219\u6ca1\u6709\u4e00\u4e2a\u7528\u6237\u4f1a\u5f97\u5230\u8bbf\u95ee\u6743\u3002"),(0,l.kt)("p",null,"\u770b\u4e00\u4e0b\u548c\u4e4b\u524d\u4e00\u6837\u7684\u4e09\u4e2a\u7528\u6237\uff1a\n\u7528\u6237 ",(0,l.kt)("inlineCode",{parentName:"p"},"sue")," \u4e0d\u662f\u4efb\u4f55\u4e00\u4e2a\u7ec4\u7684\u6210\u5458\uff0c\u88ab\u62d2\u7edd\u8bbf\u95ee\u3002\n\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"john")," \u7684\u7528\u6237\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," \u7ec4\u7684\u6210\u5458\uff0c\u6839\u636e\u4ed6\u7684\u7ec4\u5458\u8eab\u4efd\uff0c\u4ed6\u5c06\u88ab\u5141\u8bb8\u8bbf\u95ee\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"bob")," \u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," \u7ec4\u7684\u6210\u5458\u3002\u7531\u4e8e\u5176\u4e3a test \u7684\u6210\u5458\uff0c\u6240\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"bob")," \u5c06\u88ab\u5141\u8bb8\u8bbf\u95ee\u3002"),(0,l.kt)("h3",{id:"\u8f6c\u4e49\u548c\u5f15\u53f7"},"\u8f6c\u4e49\u548c\u5f15\u53f7"),(0,l.kt)("p",null,"ACL \u76ee\u524d\u662f\u5728\u961f\u5217\u914d\u7f6e\u4e2d\u5b9e\u73b0\u7684\uff0c\u5b83\u4f7f\u7528\u4e00\u4e2a yaml \u6587\u4ef6\u3002\n\u8fd9\u5bf9\u5982\u4f55\u8f6c\u4e49\u503c\u6709\u4e00\u4e9b\u9650\u5236\u3002\n\u4e0d\u6b63\u786e\u7684\u5f15\u53f7\u503c\u5c06\u5bfc\u81f4 yaml \u89e3\u6790\u9519\u8bef\uff0c\u6216\u8005\u53ef\u80fd\u5bfc\u81f4\u5bf9\u503c\u7684\u4e0d\u6b63\u786e\u89e3\u91ca\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u51e0\u70b9\u9700\u8981\u8003\u8651\u5230\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u901a\u914d\u7b26\u6761\u76ee\u5fc5\u987b\u5728 yaml \u914d\u7f6e\u4e2d\u52a0\u5f15\u53f7\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u7b80\u5355\u7684\u7528\u6237\u5217\u8868\uff0c\u65e0\u8bba\u5b83\u540e\u9762\u662f\u5426\u6709\u4e00\u4e2a\u7ec4\u7684\u5217\u8868\uff0c\u90fd\u4e0d\u9700\u8981\u52a0\u5f15\u53f7\uff0c\u4f46\u53ef\u4ee5\u52a0\u5f15\u53f7\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u6ca1\u6709\u7528\u6237\u5217\u8868\uff0c\u53ea\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7ec4\u7684 ACL \u5fc5\u987b\u52a0\u5f15\u53f7\uff0c\u4ee5\u627e\u5230\u8d77\u59cb\u7a7a\u95f4\uff1a")),(0,l.kt)("p",null,"\u6b63\u786e\u5f15\u7528 ACL \u7684\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'partitions:\n  - name: default\n    queues:\n      - name: test\n        submitacl: "*"\n        adminacl: sue dev,test\n      - name: product\n        submitacl: " product"\n')),(0,l.kt)("h2",{id:"\u8bbf\u95ee\u68c0\u67e5"},"\u8bbf\u95ee\u68c0\u67e5"),(0,l.kt)("p",null,"\u8bbf\u95ee\u68c0\u67e5\u9075\u5faa\u4ee5\u4e0b\u6a21\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u68c0\u67e5 ACL \u662f\u5426\u662f\u901a\u914d\u7b26"),(0,l.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u8be5\u7528\u6237\u662f\u5426\u5728\u7528\u6237\u5217\u8868\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u8be5\u7528\u6237\u6240\u5c5e\u7684\u4efb\u4f55\u7ec4\u662f\u5426\u662f\u7ec4\u5217\u8868\u7684\u4e00\u90e8\u5206")),(0,l.kt)("p",null,"\u5982\u679c\u68c0\u67e5\u5339\u914d\uff0cACL \u5141\u8bb8\u8bbf\u95ee\u5e76\u505c\u6b62\u68c0\u67e5\u3002\n\u5982\u679c\u6ca1\u6709\u4e00\u4e2a\u68c0\u67e5\u5339\u914d\uff0c\u5219 ACL \u62d2\u7edd\u8bbf\u95ee\u3002"),(0,l.kt)("h2",{id:"\u7528\u6237\u548c\u7ec4\u4fe1\u606f"},"\u7528\u6237\u548c\u7ec4\u4fe1\u606f"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7528\u6237\u548c\u7ec4\u7684\u89e3\u51b3\uff0c\u8bf7\u9075\u5faa ",(0,l.kt)("a",{parentName:"p",href:"usergroup_resolution"},"\u8fd9\u91cc")," \u5b9a\u4e49\u7684\u8bf4\u660e"))}k.isMDXComponent=!0}}]);