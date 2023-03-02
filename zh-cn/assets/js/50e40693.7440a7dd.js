"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6778],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||a;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84340:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"workload_overview",title:"\u6982\u8ff0"},u=void 0,c={unversionedId:"user_guide/workloads/workload_overview",id:"version-1.2.0/user_guide/workloads/workload_overview",title:"\u6982\u8ff0",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.2.0/user_guide/workloads/workload_overview.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/workload_overview",permalink:"/zh-cn/docs/user_guide/workloads/workload_overview",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"workload_overview",title:"\u6982\u8ff0"},sidebar:"docs",previous:{title:"Labels and Annotations in YuniKorn",permalink:"/zh-cn/docs/user_guide/labels_and_annotations_in_yunikorn"},next:{title:"Run NVIDIA GPU Jobs",permalink:"/zh-cn/docs/user_guide/workloads/run_nvidia"}},p={},s=[{value:"\u8fdb\u9636\u4f8b\u5b50",id:"\u8fdb\u9636\u4f8b\u5b50",level:2}],d={toc:s},f="wrapper";function m(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(f,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"YuniKorn\u8c03\u5ea6\u5668\u652f\u6301\u4efb\u4f55\u7684Kubernetes\u5de5\u4f5c\u8d1f\u8f7d\u3002\u6240\u9700\u8981\u7684\u53ea\u662f\u786e\u4fdd\u5c06Pod\u89c4\u8303\u7684\n",(0,a.kt)("inlineCode",{parentName:"p"},"schedulerName"),"\u5b57\u6bb5\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn"),"\u5e76\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"applicationId"),"\u6807\u7b7e\u8bbe\u7f6e\u4e3a\u6bcf\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u552f\u4e00\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: sleep\n    applicationId: "application-sleep-0001"\n  name: sleep-app-1\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-30s\n      image: "alpine:latest"\n      command: ["sleep", "30"]\n      resources:\n        requests:\n          cpu: "100m"\n          memory: "100M"\n')),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u5982\u679c\u5b58\u5728YuniKorn\u51c6\u5165\u63a7\u5236\u5668\uff0c\u5219\u53ef\u4ee5\u7701\u7565\u201cschedulerName\u201d\u5b57\u6bb5\uff0c\u56e0\u4e3a\u5b83\u5c06\u5728\u65b0\u521b\u5efa\u7684pod\u4e0a\u81ea\u52a8\u8bbe\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u8fdb\u9636\u4f8b\u5b50"},"\u8fdb\u9636\u4f8b\u5b50"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u6b64\u5904\u627e\u5230\u66f4\u8fdb\u9636\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"run_spark"},"\u8fd0\u884cSpark\u4f5c\u4e1a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"run_flink"},"\u8fd0\u884cFlink\u4f5c\u4e1a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"run_tf"},"\u8fd0\u884cTensorFlow\u4f5c\u4e1a"))))}m.isMDXComponent=!0}}]);