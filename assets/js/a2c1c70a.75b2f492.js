"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78201],{33524:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(13274),r=s(1780);const i={id:"cluster",title:"Cluster"},o=void 0,c={id:"api/cluster",title:"Cluster",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/docs/0.10.0/api/cluster",draft:!1,unlisted:!1,tags:[],version:"0.10.0",frontMatter:{id:"cluster",title:"Cluster"},sidebar:"docs",previous:{title:"Run Tensorflow Jobs",permalink:"/docs/0.10.0/user_guide/workloads/run_tf"},next:{title:"Scheduler",permalink:"/docs/0.10.0/api/scheduler"}},l={},d=[{value:"Clusters",id:"clusters",level:2},{value:"Success response",id:"success-response",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"clusters",children:"Clusters"}),"\n",(0,t.jsx)(n.p,{children:"Returns general information about the clusters managed by the YuniKorn Scheduler. Information includes number of (total, failed, pending, running, completed) applications and containers."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"URL"})," : ",(0,t.jsx)(n.code,{children:"/ws/v1/clusters"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Method"})," : ",(0,t.jsx)(n.code,{children:"GET"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Auth required"})," : NO"]}),"\n",(0,t.jsx)(n.h3,{id:"success-response",children:"Success response"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Code"})," : ",(0,t.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Content examples"})}),"\n",(0,t.jsx)(n.p,{children:"As an example, here is a response from a 2-node cluster with 3 applications and 4 running containers."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "clusterName": "kubernetes",\n        "totalApplications": "3",\n        "failedApplications": "1",\n        "pendingApplications": "",\n        "runningApplications": "3",\n        "completedApplications": "",\n        "totalContainers": "4",\n        "failedContainers": "",\n        "pendingContainers": "",\n        "runningContainers": "4",\n        "activeNodes": "2",\n        "totalNodes": "2",\n        "failedNodes": ""\n    }\n]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1780:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(79474);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);