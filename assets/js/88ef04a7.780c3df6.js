"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6881],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2372:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"trouble_shooting",title:"Trouble Shooting"},s=void 0,c={unversionedId:"user_guide/trouble_shooting",id:"version-0.11.0/user_guide/trouble_shooting",title:"Trouble Shooting",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/user_guide/trouble_shooting.md",sourceDirName:"user_guide",slug:"/user_guide/trouble_shooting",permalink:"/docs/0.11.0/user_guide/trouble_shooting",tags:[],version:"0.11.0",frontMatter:{id:"trouble_shooting",title:"Trouble Shooting"},sidebar:"version-0.11.0/docs",previous:{title:"System",permalink:"/docs/0.11.0/api/system"},next:{title:"Dev Environment Setup",permalink:"/docs/0.11.0/developer_guide/env_setup"}},p=[{value:"Scheduler logs",id:"scheduler-logs",children:[{value:"Retrieve scheduler logs",id:"retrieve-scheduler-logs",children:[],level:3},{value:"Set Logging Level",id:"set-logging-level",children:[],level:3}],level:2},{value:"Pods are stuck at Pending state",id:"pods-are-stuck-at-pending-state",children:[{value:"1. Non of the nodes satisfy pod placement requirement",id:"1-non-of-the-nodes-satisfy-pod-placement-requirement",children:[],level:3},{value:"2. The queue is running out of capacity",id:"2-the-queue-is-running-out-of-capacity",children:[],level:3}],level:2},{value:"Restart the scheduler",id:"restart-the-scheduler",children:[],level:2},{value:"Gang Scheduling",id:"gang-scheduling",children:[{value:"1. No placeholders created, app&#39;s pods are pending",id:"1-no-placeholders-created-apps-pods-are-pending",children:[],level:3},{value:"2. Not all placeholders can be allocated",id:"2-not-all-placeholders-can-be-allocated",children:[],level:3},{value:"3. Not all placeholders are swapped",id:"3-not-all-placeholders-are-swapped",children:[],level:3},{value:"4.Placeholders are not cleaned up when the app terminated",id:"4placeholders-are-not-cleaned-up-when-the-app-terminated",children:[],level:3}],level:2},{value:"Still got questions?",id:"still-got-questions",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"scheduler-logs"},"Scheduler logs"),(0,o.kt)("h3",{id:"retrieve-scheduler-logs"},"Retrieve scheduler logs"),(0,o.kt)("p",null,"Currently, the scheduler writes its logs to stdout/stderr, docker container handles the redirection of these logs to a\nlocal location on the underneath node, you can read more document ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/configure/"},"here"),".\nThese logs can be retrieved by ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs"},"kubectl logs"),". Such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"// get the scheduler pod\nkubectl get pod -l component=yunikorn-scheduler -n yunikorn\nNAME                                  READY   STATUS    RESTARTS   AGE\nyunikorn-scheduler-766d7d6cdd-44b82   2/2     Running   0          33h\n\n// retrieve logs\nkubectl logs yunikorn-scheduler-766d7d6cdd-44b82 yunikorn-scheduler-k8s -n yunikorn\n")),(0,o.kt)("p",null,"In most cases, this command cannot get all logs because the scheduler is rolling logs very fast. To retrieve more logs in\nthe past, you will need to setup the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/#cluster-level-logging-architectures"},"cluster level logging"),".\nThe recommended setup is to leverage ",(0,o.kt)("a",{parentName:"p",href:"https://www.fluentd.org/"},"fluentd")," to collect and persistent logs on an external storage, e.g s3. "),(0,o.kt)("h3",{id:"set-logging-level"},"Set Logging Level"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Changing the logging level requires a restart of the scheduler pod."))),(0,o.kt)("p",null,"Stop the scheduler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=0\n")),(0,o.kt)("p",null,"edit the deployment config in vim:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl edit deployment yunikorn-scheduler -n yunikorn\n")),(0,o.kt)("p",null,"add ",(0,o.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," field of the container template. For example setting ",(0,o.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," sets the logging\nlevel to ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n ...\nspec:\n  template: \n   ...\n    spec:\n      containers:\n      - env:\n        - name: LOG_LEVEL\n          value: '0'\n")),(0,o.kt)("p",null,"Start the scheduler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=1\n")),(0,o.kt)("p",null,"Available logging levels:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Logging Level"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"DEBUG")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"0"),(0,o.kt)("td",{parentName:"tr",align:"center"},"INFO")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"WARN")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"ERROR")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"3"),(0,o.kt)("td",{parentName:"tr",align:"center"},"DPanic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"4"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Panic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"5"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Fatal")))),(0,o.kt)("h2",{id:"pods-are-stuck-at-pending-state"},"Pods are stuck at Pending state"),(0,o.kt)("p",null,"If some pods are stuck at Pending state, that means the scheduler could not find a node to allocate the pod. There are\nseveral possibilities to cause this:"),(0,o.kt)("h3",{id:"1-non-of-the-nodes-satisfy-pod-placement-requirement"},"1. Non of the nodes satisfy pod placement requirement"),(0,o.kt)("p",null,"A pod can be configured with some placement constraints, such as ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"},"node-selector"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity"},"affinity/anti-affinity"),",\ndo not have certain toleration for node ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"taints"),", etc.\nTo debug such issues, you can describe the pod by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl describe pod <pod-name> -n <namespace>\n")),(0,o.kt)("p",null,"the pod events will contain the predicate failures and that explains why nodes are not qualified for allocation."),(0,o.kt)("h3",{id:"2-the-queue-is-running-out-of-capacity"},"2. The queue is running out of capacity"),(0,o.kt)("p",null,"If the queue is running out of capacity, pods will be pending for available queue resources. To check if a queue is still\nhaving enough capacity for the pending pods, there are several approaches:"),(0,o.kt)("p",null,"1) check the queue usage from yunikorn UI"),(0,o.kt)("p",null,"If you do not know how to access the UI, you can refer the document ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.11.0/#access-the-web-ui"},"here"),". Go\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"Queues")," page, navigate to the queue where this job is submitted to. You will be able to see the available capacity\nleft for the queue."),(0,o.kt)("p",null,"2) check the pod events"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl describe pod")," to get the pod events. If you see some event like:\n",(0,o.kt)("inlineCode",{parentName:"p"},"Application <appID> does not fit into <queuePath> queue"),". That means the pod could not get allocated because the queue\nis running out of capacity."),(0,o.kt)("p",null,"The pod will be allocated if some other pods in this queue is completed or removed. If the pod remains pending even\nthe queue has capacity, that may because it is waiting for the cluster to scale up."),(0,o.kt)("h2",{id:"restart-the-scheduler"},"Restart the scheduler"),(0,o.kt)("p",null,"YuniKorn can recover its state upon a restart. YuniKorn scheduler pod is deployed as a deployment, restart the scheduler\ncan be done by scale down and up the replica:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=0\nkubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=1\n")),(0,o.kt)("h2",{id:"gang-scheduling"},"Gang Scheduling"),(0,o.kt)("h3",{id:"1-no-placeholders-created-apps-pods-are-pending"},"1. No placeholders created, app's pods are pending"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Reason"),": This is usually because the app is rejected by the scheduler, therefore non of the pods are scheduled.\nThe common reasons caused the rejection are: 1) The taskGroups definition is invalid. The scheduler does the\nsanity check upon app submission, to ensure all the taskGroups are defined correctly, if these info are malformed,\nthe scheduler rejects the app; 2) The total min resources defined in the taskGroups is bigger than the queues' max\ncapacity, scheduler rejects the app because it won't fit into the queue's capacity. Check the pod event for relevant messages,\nand you will also be able to find more detail error messages from the schedulers' log."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Solution"),": Correct the taskGroups definition and retry submitting the app. "),(0,o.kt)("h3",{id:"2-not-all-placeholders-can-be-allocated"},"2. Not all placeholders can be allocated"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Reason"),": The placeholders also consume resources, if not all of them can be allocated, that usually means either the queue\nor the cluster has no sufficient resources for them. In this case, the placeholders will be cleaned up after a certain\namount of time, defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"placeholderTimeoutInSeconds")," scheduling policy parameter."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Solution"),": Note, if the placeholder timeout reaches, currently the app will transit to failed state and can not be scheduled\nanymore. You can increase the placeholder timeout value if you are willing to wait for a longer time. In the future, a fallback policy\nmight be added to provide some retry other than failing the app."),(0,o.kt)("h3",{id:"3-not-all-placeholders-are-swapped"},"3. Not all placeholders are swapped"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Reason"),": This usually means the actual app's pods are less than the minMembers defined in the taskGroups."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Solution"),": Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"minMember")," in the taskGroup field and ensure it is correctly set. The ",(0,o.kt)("inlineCode",{parentName:"p"},"minMember")," can be less than\nthe actual pods, setting it to bigger than the actual number of pods is invalid."),(0,o.kt)("h3",{id:"4placeholders-are-not-cleaned-up-when-the-app-terminated"},"4.Placeholders are not cleaned up when the app terminated"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Reason"),": All the placeholders are set an ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/#owners-and-dependents"},"ownerReference"),"\nto the first real pod of the app, or the controller reference. If the placeholder could not be cleaned up, that means\nthe garbage collection is not working properly. "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Solution"),": check the placeholder ",(0,o.kt)("inlineCode",{parentName:"p"},"ownerReference")," and the garbage collector in Kubernetes.    "),(0,o.kt)("h2",{id:"still-got-questions"},"Still got questions?"),(0,o.kt)("p",null,"No problem! The Apache YuniKorn community will be happy to help. You can reach out to the community with the following options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Post your questions to ",(0,o.kt)("a",{parentName:"li",href:"mailto:dev@yunikorn.apache.org"},"dev@yunikorn.apache.org")),(0,o.kt)("li",{parentName:"ol"},"Join the ",(0,o.kt)("a",{parentName:"li",href:"https://join.slack.com/t/yunikornworkspace/shared_invite/enQtNzAzMjY0OTI4MjYzLTBmMDdkYTAwNDMwNTE3NWVjZWE1OTczMWE4NDI2Yzg3MmEyZjUyYTZlMDE5M2U4ZjZhNmYyNGFmYjY4ZGYyMGE"},"YuniKorn slack channel")," and post your questions to the ",(0,o.kt)("inlineCode",{parentName:"li"},"#yunikorn-user")," channel."),(0,o.kt)("li",{parentName:"ol"},"Join the ",(0,o.kt)("a",{parentName:"li",href:"http://yunikorn.apache.org/community/getInvolved#community-meetings"},"community sync up meetings")," and directly talk to the community members.")))}u.isMDXComponent=!0}}]);