"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23714],{46415:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=o(13274),i=o(1780);const s={id:"profiling",title:"Profiling"},t=void 0,l={id:"performance/profiling",title:"Profiling",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/performance/profiling.md",sourceDirName:"performance",slug:"/performance/profiling",permalink:"/docs/1.5.0/performance/profiling",draft:!1,unlisted:!1,tags:[],version:"1.5.0",frontMatter:{id:"profiling",title:"Profiling"},sidebar:"docs",previous:{title:"Scheduler Metrics",permalink:"/docs/1.5.0/performance/metrics"}},c={},a=[{value:"CPU profiling",id:"cpu-profiling",level:2},{value:"Memory Profiling",id:"memory-profiling",level:2},{value:"Download profiling samples and analyze it locally",id:"download-profiling-samples-and-analyze-it-locally",level:2},{value:"Resources",id:"resources",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.a,{href:"https://github.com/google/pprof",children:"pprof"})," to do CPU, Memory profiling can help you understand the runtime status of YuniKorn scheduler. Profiling instruments have been\nadded to YuniKorn rest service, we can easily retrieve and analyze them from HTTP\nendpoints."]}),"\n",(0,r.jsx)(n.h2,{id:"cpu-profiling",children:"CPU profiling"}),"\n",(0,r.jsxs)(n.p,{children:["At this step, ensure you already have YuniKorn running, it can be either running from\nlocal via a ",(0,r.jsx)(n.code,{children:"make run"})," command, or deployed as a pod running inside of K8s. Then run"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"go tool pprof http://localhost:9080/debug/pprof/profile\n"})}),"\n",(0,r.jsx)(n.p,{children:"The profile data will be saved on local file system, once that is done, it enters into\nthe interactive mode. Now you can run profiling commands, such as"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"(pprof) top\nShowing nodes accounting for 14380ms, 44.85% of 32060ms total\nDropped 145 nodes (cum <= 160.30ms)\nShowing top 10 nodes out of 106\n      flat  flat%   sum%        cum   cum%\n    2130ms  6.64%  6.64%     2130ms  6.64%  __tsan_read\n    1950ms  6.08% 12.73%     1950ms  6.08%  __tsan::MetaMap::FreeRange\n    1920ms  5.99% 18.71%     1920ms  5.99%  __tsan::MetaMap::GetAndLock\n    1900ms  5.93% 24.64%     1900ms  5.93%  racecall\n    1290ms  4.02% 28.67%     1290ms  4.02%  __tsan_write\n    1090ms  3.40% 32.06%     3270ms 10.20%  runtime.mallocgc\n    1080ms  3.37% 35.43%     1080ms  3.37%  __tsan_func_enter\n    1020ms  3.18% 38.62%     1120ms  3.49%  runtime.scanobject\n    1010ms  3.15% 41.77%     1010ms  3.15%  runtime.nanotime\n     990ms  3.09% 44.85%      990ms  3.09%  __tsan::DenseSlabAlloc::Refill\n"})}),"\n",(0,r.jsxs)(n.p,{children:["you can type command such as ",(0,r.jsx)(n.code,{children:"web"})," or ",(0,r.jsx)(n.code,{children:"gif"})," to get a graph that helps you better\nunderstand the overall performance on critical code paths. You can get something\nlike below:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"CPU Profiling",src:o(69689).A+"",width:"1793",height:"938"})}),"\n",(0,r.jsxs)(n.p,{children:["Note, in order to use these\noptions, you need to install the virtualization tool ",(0,r.jsx)(n.code,{children:"graphviz"})," first, if you are using Mac, simply run ",(0,r.jsx)(n.code,{children:"brew install graphviz"}),", for more info please refer ",(0,r.jsx)(n.a,{href:"https://graphviz.gitlab.io/",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"memory-profiling",children:"Memory Profiling"}),"\n",(0,r.jsx)(n.p,{children:"Similarly, you can run"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"go tool pprof http://localhost:9080/debug/pprof/heap\n"})}),"\n",(0,r.jsx)(n.p,{children:"this will return a snapshot of current heap which allows us to check memory usage.\nOnce it enters the interactive mode, you can run some useful commands. Such as\ntop can list top memory consumption objects."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"(pprof) top\nShowing nodes accounting for 83.58MB, 98.82% of 84.58MB total\nShowing top 10 nodes out of 86\n      flat  flat%   sum%        cum   cum%\n      32MB 37.84% 37.84%       32MB 37.84%  github.com/apache/yunikorn-core/pkg/cache.NewClusterInfo\n      16MB 18.92% 56.75%       16MB 18.92%  github.com/apache/yunikorn-core/pkg/rmproxy.NewRMProxy\n      16MB 18.92% 75.67%       16MB 18.92%  github.com/apache/yunikorn-core/pkg/scheduler.NewScheduler\n      16MB 18.92% 94.59%       16MB 18.92%  github.com/apache/yunikorn-k8shim/pkg/dispatcher.init.0.func1\n    1.04MB  1.23% 95.81%     1.04MB  1.23%  k8s.io/apimachinery/pkg/runtime.(*Scheme).AddKnownTypeWithName\n    0.52MB  0.61% 96.43%     0.52MB  0.61%  github.com/gogo/protobuf/proto.RegisterType\n    0.51MB  0.61% 97.04%     0.51MB  0.61%  sync.(*Map).Store\n    0.50MB   0.6% 97.63%     0.50MB   0.6%  regexp.onePassCopy\n    0.50MB  0.59% 98.23%     0.50MB  0.59%  github.com/json-iterator/go.(*Iterator).ReadString\n    0.50MB  0.59% 98.82%     0.50MB  0.59%  text/template/parse.(*Tree).newText\n"})}),"\n",(0,r.jsxs)(n.p,{children:["you can also run ",(0,r.jsx)(n.code,{children:"web"}),", ",(0,r.jsx)(n.code,{children:"pdf"})," or ",(0,r.jsx)(n.code,{children:"gif"})," command to get the graph for heap."]}),"\n",(0,r.jsx)(n.h2,{id:"download-profiling-samples-and-analyze-it-locally",children:"Download profiling samples and analyze it locally"}),"\n",(0,r.jsx)(n.p,{children:"We have included essential go/go-tool binaries in scheduler docker image, you should be able to do some basic profiling\nanalysis inside of the docker container. However, if you want to dig into some issues, it might be better to do the analysis\nlocally. Then you need to copy the samples file to local environment first. The command to copy files is like following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl cp ${SCHEDULER_POD_NAME}:${SAMPLE_PATH_IN_DOCKER_CONTAINER} ${LOCAL_COPY_PATH}\n"})}),"\n",(0,r.jsx)(n.p,{children:"for example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl cp yunikorn-scheduler-cf8f8dd8-6szh5:/root/pprof/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz /Users/wyang/Downloads/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz\n"})}),"\n",(0,r.jsxs)(n.p,{children:["once you get the file in your local environment, then you can run the ",(0,r.jsx)(n.code,{children:"pprof"})," command for analysis."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"go tool pprof /Users/wyang/Downloads/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz\n"})}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["pprof Document ",(0,r.jsx)(n.a,{href:"https://github.com/google/pprof/tree/master/doc",children:"https://github.com/google/pprof/tree/master/doc"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},69689:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/cpu_profile-9597863f861872384ae86daabd07f7f9.jpg"},1780:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>l});var r=o(79474);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);