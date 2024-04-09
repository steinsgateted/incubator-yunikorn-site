"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42856],{58860:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var i=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?i.createElement(h,o(o({ref:n},d),{},{components:t})):i.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(72994),a=(t(37953),t(58860));const r={id:"k8shim",title:"Kubernetes Shim Design"},o=void 0,l={unversionedId:"design/k8shim",id:"version-0.12.1/design/k8shim",title:"Kubernetes Shim Design",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.1/design/k8shim.md",sourceDirName:"design",slug:"/design/k8shim",permalink:"/docs/0.12.1/design/k8shim",draft:!1,tags:[],version:"0.12.1",frontMatter:{id:"k8shim",title:"Kubernetes Shim Design"},sidebar:"version-0.12.1/docs",previous:{title:"Scheduler cache removal design",permalink:"/docs/0.12.1/design/cache_removal"},next:{title:"Cross Queue Preemption",permalink:"/docs/0.12.1/design/cross_queue_preemption"}},s={},p=[{value:"The Kubernetes shim",id:"the-kubernetes-shim",level:2},{value:"The admission controller",id:"the-admission-controller",level:2},{value:"Admission controller deployment",id:"admission-controller-deployment",level:3}],d={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,i.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Github repo: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"https://github.com/apache/incubator-yunikorn-k8shim")),(0,a.yg)("p",null,"Please read the ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.12.1/design/architecture"},"architecture")," doc before reading this one, you will need to understand\nthe 3 layer design of YuniKorn before getting to understand what is the Kubernetes shim."),(0,a.yg)("h2",{id:"the-kubernetes-shim"},"The Kubernetes shim"),(0,a.yg)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the scheduler-interface."),(0,a.yg)("h2",{id:"the-admission-controller"},"The admission controller"),(0,a.yg)("p",null,"The admission controller runs in a separate pod, it runs a\n",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook"},"mutation webhook"),"\nand a ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"validation webhook"),", where:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"mutation webhook")," mutates pod spec by:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Adding ",(0,a.yg)("inlineCode",{parentName:"li"},"schedulerName: yunikorn"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"By explicitly specifying the scheduler name, the pod will be scheduled by YuniKorn scheduler."))),(0,a.yg)("li",{parentName:"ul"},"Adding ",(0,a.yg)("inlineCode",{parentName:"li"},"applicationId")," label",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"When a label ",(0,a.yg)("inlineCode",{parentName:"li"},"applicationId")," exists, reuse the given applicationId."),(0,a.yg)("li",{parentName:"ul"},"When a label ",(0,a.yg)("inlineCode",{parentName:"li"},"spark-app-selector")," exists, reuse the given spark app ID."),(0,a.yg)("li",{parentName:"ul"},"Otherwise, assign a generated application ID for this pod, using convention: ",(0,a.yg)("inlineCode",{parentName:"li"},"yunikorn-<namespace>-autogen"),". This is unique per namespace."))),(0,a.yg)("li",{parentName:"ul"},"Adding ",(0,a.yg)("inlineCode",{parentName:"li"},"queue")," label",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"When a label ",(0,a.yg)("inlineCode",{parentName:"li"},"queue")," exists, reuse the given queue name. Note, if placement rule is enabled, values set in the label is ignored."),(0,a.yg)("li",{parentName:"ul"},"Otherwise, adds ",(0,a.yg)("inlineCode",{parentName:"li"},"queue: root.default")))),(0,a.yg)("li",{parentName:"ul"},"Adding ",(0,a.yg)("inlineCode",{parentName:"li"},"disableStateAware")," label",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"If pod was assigned a generated applicationId by the admission controller, also set ",(0,a.yg)("inlineCode",{parentName:"li"},"disableStateAware: true"),". This causes the generated application\nto immediately transition from the ",(0,a.yg)("inlineCode",{parentName:"li"},"Starting")," to ",(0,a.yg)("inlineCode",{parentName:"li"},"Running")," state so that it will not block other applications."))))),(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"validation webhook")," validates the configuration set in the configmap",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"This is used to prevent writing malformed configuration into the configmap."),(0,a.yg)("li",{parentName:"ul"},"The validation webhook calls scheduler ",(0,a.yg)("a",{parentName:"li",href:"/docs/0.12.1/api/scheduler#configuration-validation"},"validation REST API")," to validate configmap updates.")))),(0,a.yg)("h3",{id:"admission-controller-deployment"},"Admission controller deployment"),(0,a.yg)("p",null,"Currently, the deployment of the admission-controller is done as a ",(0,a.yg)("inlineCode",{parentName:"p"},"post-start")," hook in the scheduler deployment, similarly, the\nuninstall is done as a ",(0,a.yg)("inlineCode",{parentName:"p"},"pre-stop")," hook. See the related code ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-release/blob/56e580af24ed3433e7d73d9ea556b19ad7b74337/helm-charts/yunikorn/templates/deployment.yaml#L80-L85"},"here"),".\nDuring the installation, it is expected to always co-locate the admission controller with the scheduler pod, this is done\nby adding the pod-affinity in the admission-controller pod, like:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'podAffinity:\n  requiredDuringSchedulingIgnoredDuringExecution:\n    - labelSelector:\n      matchExpressions:\n      - key: component\n        operator: In\n        values:\n        - yunikorn-scheduler\n      topologyKey: "kubernetes.io/hostname"\n')),(0,a.yg)("p",null,"it also tolerates all the taints in case the scheduler pod has some toleration set."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'tolerations:\n- operator: "Exists"\n')))}c.isMDXComponent=!0}}]);