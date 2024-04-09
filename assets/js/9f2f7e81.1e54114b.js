"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77007],{58860:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>y});var t=n(37953);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?t.createElement(y,i(i({ref:r},u),{},{components:n})):t.createElement(y,i({ref:r},u))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54479:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=n(72994),a=(n(37953),n(58860));const o={id:"workload_overview",title:"Overview"},i=void 0,l={unversionedId:"user_guide/workloads/workload_overview",id:"version-1.4.0/user_guide/workloads/workload_overview",title:"Overview",description:"\x3c!--",source:"@site/versioned_docs/version-1.4.0/user_guide/workloads/workload_overview.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/workload_overview",permalink:"/docs/1.4.0/user_guide/workloads/workload_overview",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"workload_overview",title:"Overview"},sidebar:"docs",previous:{title:"Use Cases",permalink:"/docs/1.4.0/user_guide/use_cases"},next:{title:"Run NVIDIA GPU Jobs",permalink:"/docs/1.4.0/user_guide/workloads/run_nvidia"}},s={},p=[{value:"Advanced Examples",id:"advanced-examples",level:2}],u={toc:p},c="wrapper";function d(e){let{components:r,...n}=e;return(0,a.yg)(c,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The YuniKorn scheduler is able to run any Kubernetes workload. All that is required is to ensure\nthat the ",(0,a.yg)("inlineCode",{parentName:"p"},"schedulerName")," field of a Pod specification is set to ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn")," and an ",(0,a.yg)("inlineCode",{parentName:"p"},"applicationId"),"\nlabel is set to a unique value per application:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: sleep\n    applicationId: "application-sleep-0001"\n  name: sleep-app-1\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-30s\n      image: "alpine:latest"\n      command: ["sleep", "30"]\n      resources:\n        requests:\n          cpu: "100m"\n          memory: "100M"\n')),(0,a.yg)("p",null,"Additionally, if the YuniKorn admission controller is present, the ",(0,a.yg)("inlineCode",{parentName:"p"},"schedulerName")," field may be\nomitted as it will be set automatically on newly created pods."),(0,a.yg)("h2",{id:"advanced-examples"},"Advanced Examples"),(0,a.yg)("p",null,"Examples of more advanced use cases can be found here:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"run_nvidia"},"Run NVIDIA GPU Jobs")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"run_spark"},"Run Spark Jobs")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"run_flink"},"Run Flink Jobs")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"run_tf"},"Run TensorFlow Jobs")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"run_mpi"},"Run MPI Jobs"))))}d.isMDXComponent=!0}}]);