"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94979],{39556:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(13274),t=s(1780);const i={id:"cluster",title:"Cluster"},o=void 0,l={id:"api/cluster",title:"Cluster",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/docs/0.12.2/api/cluster",draft:!1,unlisted:!1,tags:[],version:"0.12.2",frontMatter:{id:"cluster",title:"Cluster"},sidebar:"docs",previous:{title:"Run TensorFlow Jobs",permalink:"/docs/0.12.2/user_guide/workloads/run_tf"},next:{title:"Scheduler",permalink:"/docs/0.12.2/api/scheduler"}},c={},d=[{value:"Clusters",id:"clusters",level:2},{value:"Success response",id:"success-response",level:3},{value:"Error response",id:"error-response",level:3},{value:"Clusters utilization",id:"clusters-utilization",level:2},{value:"Success response",id:"success-response-1",level:3},{value:"Error response",id:"error-response-1",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"clusters",children:"Clusters"}),"\n",(0,r.jsx)(n.p,{children:"Returns general information about the clusters managed by the YuniKorn Scheduler. Information includes number of (total, failed, pending, running, completed) applications and containers."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"URL"})," : ",(0,r.jsx)(n.code,{children:"/ws/v1/clusters"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Method"})," : ",(0,r.jsx)(n.code,{children:"GET"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Auth required"})," : NO"]}),"\n",(0,r.jsx)(n.h3,{id:"success-response",children:"Success response"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(n.p,{children:"As an example, here is a response from a 2-node cluster with 3 applications and 4 running containers."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "partition": "[rm-123]default",\n        "clusterName": "kubernetes",\n        "totalApplications": "3",\n        "failedApplications": "1",\n        "pendingApplications": "",\n        "runningApplications": "3",\n        "completedApplications": "",\n        "totalContainers": "4",\n        "failedContainers": "",\n        "pendingContainers": "",\n        "runningContainers": "4",\n        "activeNodes": "2",\n        "totalNodes": "2",\n        "failedNodes": ""\n    }\n]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"error-response",children:"Error response"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"500 Internal Server Error"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"clusters-utilization",children:"Clusters utilization"}),"\n",(0,r.jsx)(n.p,{children:"Returns statistical data related the cluster resource utilization"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"URL"})," : ",(0,r.jsx)(n.code,{children:"/ws/v1/clusters/utilization"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Method"})," : ",(0,r.jsx)(n.code,{children:"GET"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Auth required"})," : NO"]}),"\n",(0,r.jsx)(n.h3,{id:"success-response-1",children:"Success response"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "partition": "[mycluster]default",\n        "utilization": [\n            {\n                "type": "memory",\n                "total": 5076,\n                "used": 1500,\n                "usage": "29%"\n            },\n            {\n                "type": "vcore",\n                "total": 4000,\n                "used": 300,\n                "usage": "7%"\n            }\n        ]\n    }\n]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"error-response-1",children:"Error response"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"500 Internal Server Error"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1780:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(79474);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);