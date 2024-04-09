"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32287],{58860:(e,n,r)=>{r.d(n,{xA:()=>i,yg:()=>m});var t=r(37953);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),g=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},i=function(e){var n=g(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=g(r),u=a,m=c["".concat(l,".").concat(u)]||c[u]||y[u]||p;return r?t.createElement(m,o(o({ref:n},i),{},{components:r})):t.createElement(m,o({ref:n},i))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var g=2;g<p;g++)o[g]=r[g];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55233:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>p,metadata:()=>s,toc:()=>g});var t=r(72994),a=(r(37953),r(58860));const p={id:"system",title:"System"},o=void 0,s={unversionedId:"api/system",id:"version-1.5.0/api/system",title:"System",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/api/system.md",sourceDirName:"api",slug:"/api/system",permalink:"/docs/api/system",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"system",title:"System"},sidebar:"docs",previous:{title:"Scheduler",permalink:"/docs/api/scheduler"},next:{title:"Scheduler",permalink:"/docs/metrics/scheduler"}},l={},g=[{value:"pprof",id:"pprof",level:2},{value:"Success response",id:"success-response",level:3},{value:"Heap",id:"heap",level:2},{value:"Success response",id:"success-response-1",level:3},{value:"Thread create",id:"thread-create",level:2},{value:"Success response",id:"success-response-2",level:3},{value:"Goroutine",id:"goroutine",level:2},{value:"Success response",id:"success-response-3",level:3},{value:"Allocations",id:"allocations",level:2},{value:"Success response",id:"success-response-4",level:3},{value:"Block",id:"block",level:2},{value:"Success response",id:"success-response-5",level:3},{value:"Mutex",id:"mutex",level:2},{value:"Success response",id:"success-response-6",level:3},{value:"Cmdline",id:"cmdline",level:2},{value:"Success response",id:"success-response-7",level:3},{value:"Profile",id:"profile",level:2},{value:"Success response",id:"success-response-8",level:3},{value:"Symbol",id:"symbol",level:2},{value:"Success response",id:"success-response-9",level:3},{value:"Trace",id:"trace",level:2},{value:"Success response",id:"success-response-10",level:3}],i={toc:g},c="wrapper";function y(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},i,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"These endpoints are for the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/google/pprof"},"pprof")," profiling tool."),(0,a.yg)("h2",{id:"pprof"},"pprof"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/debug/pprof/")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("h3",{id:"success-response"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"/debug/pprof/\n\nTypes of profiles available:\nCount   Profile\n273 allocs\n0   block\n0   cmdline\n78  goroutine\n273 heap\n0   mutex\n0   profile\n29  threadcreate\n0   trace\nfull goroutine stack dump\nProfile Descriptions:\n\nallocs: A sampling of all past memory allocations\nblock: Stack traces that led to blocking on synchronization primitives\ncmdline: The command line invocation of the current program\ngoroutine: Stack traces of all current goroutines\nheap: A sampling of memory allocations of live objects. You can specify the gc GET parameter to run GC before taking the heap sample.\nmutex: Stack traces of holders of contended mutexes\nprofile: CPU profile. You can specify the duration in the seconds GET parameter. After you get the profile file, use the go tool pprof command to investigate the profile.\nthreadcreate: Stack traces that led to the creation of new OS threads\ntrace: A trace of execution of the current program. You can specify the duration in the seconds GET parameter. After you get the trace file, use the go tool trace command to investigate the trace.\n")),(0,a.yg)("h2",{id:"heap"},"Heap"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/debug/pprof/heap")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("h3",{id:"success-response-1"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.yg)("h2",{id:"thread-create"},"Thread create"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/debug/pprof/threadcreate")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("h3",{id:"success-response-2"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.yg)("h2",{id:"goroutine"},"Goroutine"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/debug/pprof/goroutine")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("h3",{id:"success-response-3"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.yg)("h2",{id:"allocations"},"Allocations"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/debug/pprof/allocs")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("h3",{id:"success-response-4"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.yg)("h2",{id:"block"},"Block"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/debug/pprof/block")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("h3",{id:"success-response-5"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.yg)("h2",{id:"mutex"},"Mutex"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/debug/pprof/mutex")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("h3",{id:"success-response-6"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.yg)("h2",{id:"cmdline"},"Cmdline"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/debug/pprof/cmdline")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("h3",{id:"success-response-7"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.yg)("h2",{id:"profile"},"Profile"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/debug/pprof/profile")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("h3",{id:"success-response-8"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.yg)("h2",{id:"symbol"},"Symbol"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/debug/pprof/symbol")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("h3",{id:"success-response-9"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.yg)("h2",{id:"trace"},"Trace"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"URL")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/debug/pprof/trace")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Method")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("h3",{id:"success-response-10"},"Success response"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Code")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Content examples")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")))}y.isMDXComponent=!0}}]);