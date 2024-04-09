"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57426],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,y=m["".concat(u,".").concat(d)]||m[d]||l[d]||s;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(72994),r=(t(37953),t(58860));const s={id:"namespace_resource_quota",title:"Namespace Resource Quota"},o=void 0,i={unversionedId:"design/namespace_resource_quota",id:"version-1.2.0/design/namespace_resource_quota",title:"Namespace Resource Quota",description:"\x3c!--",source:"@site/versioned_docs/version-1.2.0/design/namespace_resource_quota.md",sourceDirName:"design",slug:"/design/namespace_resource_quota",permalink:"/docs/1.2.0/design/namespace_resource_quota",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"namespace_resource_quota",title:"Namespace Resource Quota"}},u={},p=[{value:"Best practice",id:"best-practice",level:2},{value:"1. Setup namespace",id:"1-setup-namespace",level:3},{value:"2. Setup YuniKorn queues",id:"2-setup-yunikorn-queues",level:3},{value:"3. Mapping applications to queues &amp; namespace",id:"3-mapping-applications-to-queues--namespace",level:3},{value:"Future Work",id:"future-work",level:2}],c={toc:p},m="wrapper";function l(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In K8s, user can setup namespace with ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"resource quotas")," to limit aggregated resource consumption in this namespace. The validation of namespace resource quotas is handled in api-server directly, therefore YuniKorn simply honors the quotas like the default scheduler."),(0,r.yg)("h2",{id:"best-practice"},"Best practice"),(0,r.yg)("p",null,"It is not mandatory to setup YuniKorn queues with respect of namespaces.\nHowever, in practice, it makes more sense to do so.\nNamespace is often used to set a cap for resource consumptions per user-group/team,\nYuniKorn queue is also meant to divide cluster resource into multiple groups.\nLet's go through an example."),(0,r.yg)("h3",{id:"1-setup-namespace"},"1. Setup namespace"),(0,r.yg)("p",null,"Namespace: ",(0,r.yg)("inlineCode",{parentName:"p"},"advertisement"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: advertisement\nspec:\n  hard:\n    requests.cpu: "200m"\n    requests.memory: 2000Mi\n    limits.cpu: "200m"\n    limits.memory: 4000Mi\n')),(0,r.yg)("p",null,"Create the namespace"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl create namespace advertisement\nkubectl create -f ./advertisement.yaml --namespace=advertisement\nkubectl get quota --namespace=advertisement\nkubectl describe quota advertisement --namespace=advertisement\n\n// output\nName:            advertisement\nNamespace:       advertisement\nResource         Used  Hard\n--------         ----  ----\nlimits.cpu       0     200m\nlimits.memory    0     4000Mi\nrequests.cpu     0     200m\nrequests.memory  0     2000Mi\n")),(0,r.yg)("h3",{id:"2-setup-yunikorn-queues"},"2. Setup YuniKorn queues"),(0,r.yg)("p",null,"Queue: ",(0,r.yg)("inlineCode",{parentName:"p"},"advertisement"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"name: advertisement\nresources:\n  guaranteed:\n    vcore: 100\n    memory: 1000\n  max:\n    vcore: 200\n    memory: 2000\n")),(0,r.yg)("p",null,"ensure ",(0,r.yg)("inlineCode",{parentName:"p"},"QueueMaxResource <= NamespaceResourceQuotaRequests")),(0,r.yg)("h3",{id:"3-mapping-applications-to-queues--namespace"},"3. Mapping applications to queues & namespace"),(0,r.yg)("p",null,"In a pod spec"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  namespace: advertisement\n  labels:\n    app: sleep\n    applicationId: "application_2019_01_22_00001"\n    queue: "root.advertisement"\n  name: task0\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-5s\n      image: "alpine:latest"\n      command: ["/bin/ash", "-ec", "while :; do echo \'.\'; sleep 5 ; done"]\n      resources:\n        requests:\n          cpu: "50m"\n          memory: "800M"\n        limits:\n          cpu: "100m"\n          memory: "1000M"\n')),(0,r.yg)("p",null,"Check Quota"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl describe quota advertisement --namespace=advertisement\n\nName:            advertisement\nNamespace:       advertisement\nResource         Used  Hard\n--------         ----  ----\nlimits.cpu       100m  200m\nlimits.memory    1G    4000Mi\nrequests.cpu     50m   200m\nrequests.memory  800M  2000Mi\n")),(0,r.yg)("p",null,"Now submit another application,"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  namespace: advertisement\n  labels:\n    app: sleep\n    applicationId: "application_2019_01_22_00002"\n    queue: "root.advertisement"\n  name: task1\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-5s\n      image: "alpine:latest"\n      command: ["/bin/ash", "-ec", "while :; do echo \'.\'; sleep 5 ; done"]\n      resources:\n        requests:\n          cpu: "200m"\n          memory: "800M"\n        limits:\n          cpu: "200m"\n          memory: "1000M"\n')),(0,r.yg)("p",null,"pod will not be able to submitted to api-server, because the requested cpu ",(0,r.yg)("inlineCode",{parentName:"p"},"200m")," + used cpu ",(0,r.yg)("inlineCode",{parentName:"p"},"100m")," = ",(0,r.yg)("inlineCode",{parentName:"p"},"300m")," which exceeds the resource quota."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'kubectl create -f pod_ns_adv_task1.yaml\nError from server (Forbidden): error when creating "pod_ns_adv_task1.yaml": pods "task1" is forbidden: exceeded quota: advertisement, requested: limits.cpu=200m,requests.cpu=200m, used: limits.cpu=100m,requests.cpu=50m, limited: limits.cpu=200m,requests.cpu=200m\n')),(0,r.yg)("h2",{id:"future-work"},"Future Work"),(0,r.yg)("p",null,"For compatibility, we should respect namespaces and resource quotas.\nResource quota is overlapped with queue configuration in many ways,\nfor example the ",(0,r.yg)("inlineCode",{parentName:"p"},"requests")," quota is just like queue's max resource. However,\nthere are still a few features resource quota can do but queue cannot, such as"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Resource ",(0,r.yg)("inlineCode",{parentName:"li"},"limits"),". The aggregated resource from all pods in a namespace cannot exceed this limit."),(0,r.yg)("li",{parentName:"ol"},"Storage Resource Quota, e.g storage size, PVC number, etc."),(0,r.yg)("li",{parentName:"ol"},"Object Count Quotas, e.g count of PVCs, services, configmaps, etc."),(0,r.yg)("li",{parentName:"ol"},"Resource Quota can map to priority class.")),(0,r.yg)("p",null,"Probably we can build something similar to cover (3) in this list.\nBut it would be hard to completely support all these cases."),(0,r.yg)("p",null,"But currently, setting applications mapping to a queue as well as a corresponding namespace is over complex.\nSome future improvements might be:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Automatically detects namespaces in k8s-shim and map them to queues. Behind the scenes, we automatically generates queue configuration based on namespace definition. Generated queues are attached under root queue."),(0,r.yg)("li",{parentName:"ol"},"When new namespace added/updated/removed, similarly to (1), we automatically update queues."),(0,r.yg)("li",{parentName:"ol"},"User can add more configuration to queues, e.g add queue ACL, add child queues on the generated queues."),(0,r.yg)("li",{parentName:"ol"},"Applications submitted to namespaces are transparently submitted to corresponding queues.")))}l.isMDXComponent=!0}}]);