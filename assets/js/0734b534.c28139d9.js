"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87683],{58860:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>g});var t=n(37953);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,g=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return n?t.createElement(g,o(o({ref:r},l),{},{components:n})):t.createElement(g,o({ref:r},l))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38327:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(72994),a=(n(37953),n(58860));const i={id:"core_features",title:"Features",keywords:["feature"]},o=void 0,s={unversionedId:"get_started/core_features",id:"version-1.5.0/get_started/core_features",title:"Features",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/get_started/core_features.md",sourceDirName:"get_started",slug:"/get_started/core_features",permalink:"/docs/get_started/core_features",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"core_features",title:"Features",keywords:["feature"]},sidebar:"docs",previous:{title:"Get Started",permalink:"/docs/"},next:{title:"Version details",permalink:"/docs/get_started/version"}},u={},c=[{value:"App-aware scheduling",id:"app-aware-scheduling",level:2},{value:"Hierarchy Resource Queues",id:"hierarchy-resource-queues",level:2},{value:"Gang Scheduling",id:"gang-scheduling",level:2},{value:"Job Ordering and Queuing",id:"job-ordering-and-queuing",level:2},{value:"Resource fairness",id:"resource-fairness",level:2},{value:"Resource Reservation",id:"resource-reservation",level:2},{value:"Preemption",id:"preemption",level:2},{value:"Throughput",id:"throughput",level:2},{value:"MaxApplication Enforcement",id:"maxapplication-enforcement",level:2},{value:"CPU Architecture support",id:"cpu-architecture-support",level:2}],l={toc:c},p="wrapper";function d(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The main features of YuniKorn include:"),(0,a.yg)("h2",{id:"app-aware-scheduling"},"App-aware scheduling"),(0,a.yg)("p",null,"One of the key differences of YuniKorn is that it does app-aware scheduling. The default K8s scheduler simply schedules\npod by pod without any context about user, app, or queue. However, YuniKorn recognizes users, apps, and queues, and it considers\na lot more factors, e.g resource, ordering etc, while making scheduling decisions. This gives us the possibility to use\nfine-grained controls on resource quotas, resource fairness, and priorities, which are the most important requirements\nfor a multi-tenancy computing system."),(0,a.yg)("h2",{id:"hierarchy-resource-queues"},"Hierarchy Resource Queues"),(0,a.yg)("p",null,"Hierarchy queues provide an efficient mechanism to manage cluster resources. The hierarchy of the queues can logically\nmap to the structure of an organization. This gives fine-grained control over resources for different tenants. The YuniKorn\nUI provides a centralised view to monitor the usage of resource queues and helps you to gain insight into how the resources are\nused across different tenants. What's more, by leveraging the min/max queue capacity, it can define how elastic it can be\nin terms of the resource consumption for each tenant."),(0,a.yg)("h2",{id:"gang-scheduling"},"Gang Scheduling"),(0,a.yg)("p",null,"An application can request a set of resources, i.e. a gang, to be scheduled all at once.\nThe gang defines all the resources the application requires to start.\nDuring the first scheduling phase all resources requested will be reserved.\nThe application will only be started when all requested resources are available."),(0,a.yg)("p",null,"Reservation duration and application behaviour when the reservation fails are configurable.\nIt is even possible to create multiple gangs of different specifications for one application.\nSee the ",(0,a.yg)("a",{parentName:"p",href:"/docs/design/gang_scheduling"},"gang design")," and the Gang Scheduling ",(0,a.yg)("a",{parentName:"p",href:"/docs/user_guide/gang_scheduling"},"user guide")," for more details."),(0,a.yg)("h2",{id:"job-ordering-and-queuing"},"Job Ordering and Queuing"),(0,a.yg)("p",null,"Applications can be properly queued in working-queues, the ordering policy determining which application can get resources first.\nThere are various policies such as simple ",(0,a.yg)("inlineCode",{parentName:"p"},"FIFO"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Fair"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"StateAware"),", or ",(0,a.yg)("inlineCode",{parentName:"p"},"Priority")," based. Queues can maintain the order of applications,\nand based on different policies, the scheduler allocates resources to jobs accordingly. The behavior is much more predictable."),(0,a.yg)("p",null,"What's more, when the queue max-capacity is configured, jobs and tasks can be properly queued up in the resource queue.\nIf the remaining capacity is not enough, they can be waiting in line until some resources are released. This simplifies\nthe client side operation. Unlike the default scheduler, resources are capped by namespace resource quotas which\nare enforced by the quota-admission-controller. If the underlying namespace does not have enough quota, pods cannot be\ncreated. Client side needs complex logic, e.g retry by condition, to handle such scenarios."),(0,a.yg)("h2",{id:"resource-fairness"},"Resource fairness"),(0,a.yg)("p",null,"In a multi-tenant environment, a lot of users share cluster resources. To prevent tenants from competing for resources\nand potentially getting starved, more fine-grained fairness controls are needed to achieve fairness across users, as well as across teams/organizations.\nWith consideration of weights or priorities, more important applications can demand resources beyond their share.\nThis feature is often considered in relation to resource budgets, where a more fine-grained fairness mode can further improve spending efficiency."),(0,a.yg)("h2",{id:"resource-reservation"},"Resource Reservation"),(0,a.yg)("p",null,"YuniKorn automatically does reservations for outstanding requests. If a pod could not be allocated, YuniKorn will try to\nreserve it on a qualified node and tentatively allocate the pod on this reserved node (before trying rest of nodes).\nThis mechanism can prevent the pod from being starved by future smaller, less-picky pods.\nThis feature is important in the batch workloads scenario because when a large amount of heterogeneous pods are submitted\nto the cluster, it's very likely some pods can be starved even when they are submitted much earlier."),(0,a.yg)("h2",{id:"preemption"},"Preemption"),(0,a.yg)("p",null,"YuniKorn's preemption feature allows higher-priority tasks to dynamically reallocate resources by preempting lower-priority ones, ensuring critical workloads get necessary resources in a multi-tenant Kubernetes environment.\nThis proactive mechanism maintains system stability and fairness, integrating with Kubernetes' priority classes and YuniKorn's hierarchical queue system."),(0,a.yg)("h2",{id:"throughput"},"Throughput"),(0,a.yg)("p",null,"Throughput is a key criterion for measuring scheduler performance. It is critical for a large scale distributed system.\nIf throughput is bad, applications may waste time on waiting for scheduling and further impact service SLAs.\nWhen the cluster gets bigger, it also means there is a requirement for higher throughput. The ",(0,a.yg)("a",{parentName:"p",href:"/docs/performance/evaluate_perf_function_with_kubemark"},"performance evaluation based on Kube-mark"),"\nreveals some perf numbers."),(0,a.yg)("h2",{id:"maxapplication-enforcement"},"MaxApplication Enforcement"),(0,a.yg)("p",null,"The MaxApplication enforcement feature allows users to limit the number of running applications for a configured queue.\nThis feature is critical in large scale batch workloads.\nWithout this feature, when a large number of concurrent jobs are launched, they would compete for resources, and a certain amount of resources would be wasted, which could lead to job failure.\nThe ",(0,a.yg)("a",{parentName:"p",href:"/docs/user_guide/queue_config"},"Partition and Queue Configuration")," provides configuration examples."),(0,a.yg)("h2",{id:"cpu-architecture-support"},"CPU Architecture support"),(0,a.yg)("p",null,"YuniKorn supports running on ARM as well as on AMD/Intel CPUs.\nWith the release of YuniKorn 1.1.0, prebuilt convenience images for both architectures are provided in docker hub."))}d.isMDXComponent=!0}}]);