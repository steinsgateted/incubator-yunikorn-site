"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16325],{23582:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=s(13274),t=s(1780);const i={id:"core_features",title:"Features",keywords:["feature"]},o=void 0,a={id:"get_started/core_features",title:"Features",description:"\x3c!--",source:"@site/versioned_docs/version-1.1.0/get_started/core_features.md",sourceDirName:"get_started",slug:"/get_started/core_features",permalink:"/docs/1.1.0/get_started/core_features",draft:!1,unlisted:!1,tags:[],version:"1.1.0",frontMatter:{id:"core_features",title:"Features",keywords:["feature"]},sidebar:"docs",previous:{title:"Get Started",permalink:"/docs/1.1.0/"},next:{title:"Deployment Modes",permalink:"/docs/1.1.0/user_guide/deployment_modes"}},c={},u=[{value:"App-aware scheduling",id:"app-aware-scheduling",level:2},{value:"Hierarchy Resource Queues",id:"hierarchy-resource-queues",level:2},{value:"Job Ordering and Queuing",id:"job-ordering-and-queuing",level:2},{value:"Resource fairness",id:"resource-fairness",level:2},{value:"Resource Reservation",id:"resource-reservation",level:2},{value:"Throughput",id:"throughput",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The main features of YuniKorn include:"}),"\n",(0,n.jsx)(r.h2,{id:"app-aware-scheduling",children:"App-aware scheduling"}),"\n",(0,n.jsx)(r.p,{children:"One of the key differences of YuniKorn is, it does app-aware scheduling. In default K8s scheduler, it simply schedules\npod by pod, without any context about user, app, queue. However, YuniKorn recognizes users, apps, queues, and it considers\na lot more factors, e.g resource, ordering etc, while making scheduling decisions. This gives us the possibility to do\nfine-grained controls on resource quotas, resource fairness and priorities, which are the most important requirements\nfor a multi-tenancy computing system."}),"\n",(0,n.jsx)(r.h2,{id:"hierarchy-resource-queues",children:"Hierarchy Resource Queues"}),"\n",(0,n.jsx)(r.p,{children:"Hierarchy queues provide an efficient mechanism to manage cluster resources. The hierarchy of the queues can logically\nmap to the structure of an organization. This gives fine-grained control over resources for different tenants. The YuniKorn\nUI provides a centralised view to monitor the usage of resource queues, it helps you to get the insight how the resources are\nused across different tenants. What's more, By leveraging the min/max queue capacity, it can define how elastic it can be\nin terms of the resource consumption for each tenant."}),"\n",(0,n.jsx)(r.h2,{id:"job-ordering-and-queuing",children:"Job Ordering and Queuing"}),"\n",(0,n.jsxs)(r.p,{children:["Applications can be properly queued in working-queues, the ordering policy determines which application can get resources first.\nThe policy can be various, such as simple ",(0,n.jsx)(r.code,{children:"FIFO"}),", ",(0,n.jsx)(r.code,{children:"Fair"}),", ",(0,n.jsx)(r.code,{children:"StateAware"})," or ",(0,n.jsx)(r.code,{children:"Priority"})," based. Queues can maintain the order of applications,\nand based on different policies, the scheduler allocates resources to jobs accordingly. The behavior is much more predictable."]}),"\n",(0,n.jsx)(r.p,{children:"What's more, when the queue max-capacity is configured, jobs and tasks can be properly queued up in the resource queue.\nIf the remaining capacity is not enough, they can be waiting in line until some resources are released. This simplifies\nthe client side operation. Unlike the default scheduler, resources are capped by namespace resource quotas,\nand that is enforced by the quota-admission-controller, if the underneath namespace has no enough quota, pods cannot be\ncreated. Client side needs complex logic, e.g retry by condition, to handle such scenarios."}),"\n",(0,n.jsx)(r.h2,{id:"resource-fairness",children:"Resource fairness"}),"\n",(0,n.jsx)(r.p,{children:"In a multi-tenant environment, a lot of users are sharing cluster resources. To avoid tenants from competing resources\nand potential get starving. More fine-grained fairness needs to achieve fairness across users, as well as teams/organizations.\nWith consideration of weights or priorities, some more important applications can get high demand resources that stand over its share.\nThis is often associated with resource budget, a more fine-grained fairness mode can further improve the expense control."}),"\n",(0,n.jsx)(r.h2,{id:"resource-reservation",children:"Resource Reservation"}),"\n",(0,n.jsx)(r.p,{children:"YuniKorn automatically does reservations for outstanding requests. If a pod could not be allocated, YuniKorn will try to\nreserve it on a qualified node and tentatively allocate the pod on this reserved node (before trying rest of nodes).\nThis mechanism can avoid this pod gets starved by later submitted smaller, less-picky pods.\nThis feature is important in the batch workloads scenario because when a large amount of heterogeneous pods is submitted\nto the cluster, it's very likely some pods can be starved even they are submitted much earlier."}),"\n",(0,n.jsx)(r.h2,{id:"throughput",children:"Throughput"}),"\n",(0,n.jsxs)(r.p,{children:["Throughput is a key criterion to measure scheduler performance. It is critical for a large scale distributed system.\nIf throughput is bad, applications may waste time on waiting for scheduling, and further impact service SLAs.\nWhen the cluster gets bigger, it also means the requirement of higher throughput. The ",(0,n.jsx)(r.a,{href:"/docs/1.1.0/performance/evaluate_perf_function_with_kubemark",children:"performance evaluation based on Kube-mark"}),"\nreveals some perf numbers."]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1780:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>a});var n=s(79474);const t={},i=n.createContext(t);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);