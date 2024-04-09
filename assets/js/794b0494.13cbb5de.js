"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99222],{58860:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>h});var t=a(37953);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(a),d=o,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return a?t.createElement(h,r(r({ref:n},p),{},{components:a})):t.createElement(h,r({ref:n},p))}));function h(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[c]="string"==typeof e?e:o,r[1]=u;for(var s=2;s<i;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37542:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var t=a(72994),o=(a(37953),a(58860));const i={id:"resource_quota_management",title:"Resource Quota Management"},r=void 0,u={unversionedId:"user_guide/resource_quota_management",id:"version-0.12.2/user_guide/resource_quota_management",title:"Resource Quota Management",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/user_guide/resource_quota_mgmt.md",sourceDirName:"user_guide",slug:"/user_guide/resource_quota_management",permalink:"/docs/0.12.2/user_guide/resource_quota_management",draft:!1,tags:[],version:"0.12.2",frontMatter:{id:"resource_quota_management",title:"Resource Quota Management"},sidebar:"version-0.12.2/docs",previous:{title:"ACLs",permalink:"/docs/0.12.2/user_guide/acls"},next:{title:"Gang Scheduling",permalink:"/docs/0.12.2/user_guide/gang_scheduling"}},l={},s=[{value:"Quota configuration and rules",id:"quota-configuration-and-rules",level:2},{value:"Converting Kubernetes resources and quotas",id:"converting-kubernetes-resources-and-quotas",level:2},{value:"Kubernetes and YuniKorn quota interaction",id:"kubernetes-and-yunikorn-quota-interaction",level:2},{value:"Static queue definition",id:"static-queue-definition",level:2},{value:"Goal",id:"goal",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Run a workload",id:"run-a-workload",level:3},{value:"Namespace to queue mapping",id:"namespace-to-queue-mapping",level:2},{value:"Goal",id:"goal-1",level:3},{value:"Configuration",id:"configuration-1",level:3},{value:"Namespace quota",id:"namespace-quota",level:3},{value:"Run a workload",id:"run-a-workload-1",level:3},{value:"Parent queue mapping for namespaces",id:"parent-queue-mapping-for-namespaces",level:2},{value:"Goal",id:"goal-2",level:3},{value:"Configuration",id:"configuration-2",level:3},{value:"Namespace parent queue",id:"namespace-parent-queue",level:3},{value:"Run a workload",id:"run-a-workload-2",level:3}],p={toc:s},c="wrapper";function m(e){let{components:n,...i}=e;return(0,o.yg)(c,(0,t.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"quota-configuration-and-rules"},"Quota configuration and rules"),(0,o.yg)("p",null,"YuniKorn can offer a finer grained resource quota management setup compared to the simple namespace resource quota provided by Kubernetes."),(0,o.yg)("p",null,"On Kubernetes a pod must fit into the namespace quota when the pod is submitted.\nIf the pod does not fit in the namespace quota the pod is rejected.\nThe client must implement a retry-mechanism and re-submit the pod if it needs the pod to be scheduled."),(0,o.yg)("p",null,"Contrary to quotas in Kubernetes YuniKorn does not enforce quotas on submission but only on actively consumed resources.\nTo explain the difference: when using YuniKorn for quota enforcement a new pod submitted to Kubernetes is always accepted.\nYunikorn will queue the pod without counting the queued pod's resources towards the consumed quota.\nWhen YuniKorn tries to schedule the pod it checks at scheduling time if the pod fits in the quota configured for the queue the pod is assigned to.\nIf at that point the pod does not fit in the quota the pod is skipped and not counted in the resource consumption.\nThis means that until a scheduling attempt of a pod is successful a pod it is not consuming resources in the YuniKorn quota system."),(0,o.yg)("p",null,"Resource quotas in YuniKorn are linked to the queue and its place in the queue hierarchy.\nThe base of the queue structure, the ",(0,o.yg)("inlineCode",{parentName:"p"},"root")," queue, does not allow setting a quota as it reflects the current size of the cluster.\nNode additions and removals update the ",(0,o.yg)("inlineCode",{parentName:"p"},"root")," queue quota automatically."),(0,o.yg)("p",null,"Beside the ",(0,o.yg)("inlineCode",{parentName:"p"},"root")," queue the quotas can be set, and is enforced, at any point in the hierarchy.\nEvery queue can have a quota set. The quota is enforced recursively throughout the hierarchy.\nThis means that a child queue can never use more resources than the ",(0,o.yg)("strong",{parentName:"p"},"configured")," quota of the parent queue.\nSetting a quota on a child queue larger than its parent queue's quota would thus not have any effect and is handled as a configuration error."),(0,o.yg)("p",null,"In the hierarchy there are some further rules that need to be considered.\nIf a parent queue has multiple children the sum of the ",(0,o.yg)("strong",{parentName:"p"},"usage")," of all children combined can never exceed the quota ",(0,o.yg)("strong",{parentName:"p"},"configured")," on the parent.\nHowever, from a configuration perspective this does not mean that the sum of the ",(0,o.yg)("strong",{parentName:"p"},"configured")," quotas for all children must be smaller than the parent quota."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Queue Quota",src:a(39182).A,width:"1364",height:"732"})),(0,o.yg)("p",null,"As an example the ",(0,o.yg)("inlineCode",{parentName:"p"},"root.parent")," queue has a quota of 900.\nIt contains three child queues, two with a quota set.\nThe ",(0,o.yg)("inlineCode",{parentName:"p"},"root.parent.child1")," has no quota set and will thus be limited to the ",(0,o.yg)("inlineCode",{parentName:"p"},"root.parent")," quota.\nThe two other queues ",(0,o.yg)("inlineCode",{parentName:"p"},"root.parent.child2")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"root.parent.child3")," each have a quota of 750 set.\nDuring normal operation the total usage of the 3 child queues together will be 900.\nThe applications running in each child queue have a demand of more than 1000 each.  "),(0,o.yg)("p",null,"Distribution in that case could be any of:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"all 900 used by just the ",(0,o.yg)("inlineCode",{parentName:"li"},"child1")," queue"),(0,o.yg)("li",{parentName:"ul"},"spread out evenly over the 3 queues (300 by each)"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"child2")," maxed out using 750, and the left over 150 used by ",(0,o.yg)("inlineCode",{parentName:"li"},"child3"),"  ")),(0,o.yg)("p",null,"The exact distribution between the queues will fluctuate and is dependent on the scheduling policies."),(0,o.yg)("h2",{id:"converting-kubernetes-resources-and-quotas"},"Converting Kubernetes resources and quotas"),(0,o.yg)("p",null,"Resource support for pods is limited to the resources specified as part of the ",(0,o.yg)("em",{parentName:"p"},"requests")," specification:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"cpu")," is mapped to ",(0,o.yg)("em",{parentName:"li"},"vcore")," with the value in milli cpu."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"memory")," is mapped to ",(0,o.yg)("em",{parentName:"li"},"memory")," with the value in MB (1 MB = 10^6 B = 1 000 000 B)."),(0,o.yg)("li",{parentName:"ul"},"all other resources are mapped as provided.")),(0,o.yg)("p",null,"Extended resource as per the ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"Kubernetes documentation")," are supported."),(0,o.yg)("p",null,"Example pod with a single container:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nspec:\n  containers:\n  - name: container-1\n    resources:\n      requests:\n        cpu: "250m"\n        memory: "1Gi"\n        hugepages-1Gi: "1"\n')),(0,o.yg)("p",null,"The above specification will set pod resources request for scheduling in YuniKorn to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"vcore")," -> 250"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"memory")," -> 1074"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"hugepages-1Gi")," -> 1")),(0,o.yg)("p",null,"Two remarks:",(0,o.yg)("br",{parentName:"p"}),"\n","Multiple container specifications will be aggregated into one total pod resource request automatically.",(0,o.yg)("br",{parentName:"p"}),"\n","All memory is reported in MB with unit conversions applied where needed. "),(0,o.yg)("p",null,"In the case that static queue definitions are used for a queue there is no limit on the type of resource that can be specified in a quota.\nQuota annotations on namespaces, used as part of the automatic queue creation, are limited to the equivalent ",(0,o.yg)("em",{parentName:"p"},"cpu")," and ",(0,o.yg)("em",{parentName:"p"},"memory")," resources.\nSee the ",(0,o.yg)("a",{parentName:"p",href:"#Namespace-quota"},"setup")," below for the annotations on the namespace for quotas."),(0,o.yg)("h2",{id:"kubernetes-and-yunikorn-quota-interaction"},"Kubernetes and YuniKorn quota interaction"),(0,o.yg)("p",null,"The recommendation is to turn off, not configure, the Kubernetes Namespace quotas.\nUsing only YuniKorn queue quotas provides a more flexible setup and allows queueing of workloads.  "),(0,o.yg)("p",null,"In a setup that has both YuniKorn and Kubernetes quotas turned on consider the following points:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Two separate configurations need to be maintained.\nThis increases the maintenance burden, and the possibility of configuration mistakes."),(0,o.yg)("li",{parentName:"ul"},"Both quotas will be enforced.")),(0,o.yg)("p",null,"Having both quotas turned on can lead to unexpected behaviour.\nThe main issue is the fact that the Kubernetes namespace quota is enforced on submit.\nThere are three combinations of quota configuration that are possible.\nThe 3 combinations could have two effects when used in combination with the YuniKorn quota."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Both quotas are ",(0,o.yg)("em",{parentName:"li"},"equal"),": workloads will not be queued, the full configured quota can be used.  ",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Maximum usage and queueing will be limited to the set quota"))),(0,o.yg)("li",{parentName:"ol"},"Kubernetes quota is ",(0,o.yg)("em",{parentName:"li"},"lower")," than YuniKorn: the YuniKorn quota will never be reached and workloads will not be queued.   ",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Maximum usage will be limited to the Kubernetes quota."))),(0,o.yg)("li",{parentName:"ol"},"Kubernetes quota is ",(0,o.yg)("em",{parentName:"li"},"higher")," than YuniKorn: YuniKorn will limit the usage to the quota set in YuniKorn.\nThe Kubernetes quota will be enforced on submit and thus set the limit for the workload that can be queued on top of the YuniKorn quota.  ",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Maximum usage will be limited to the YuniKorn quota."),(0,o.yg)("li",{parentName:"ul"},"Workload queueing will be limited to the Kubernetes quota.")))),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The following configuration examples are just to demonstrate the format needed\nto create a queue hierarchy with quotas set.")),(0,o.yg)("h2",{id:"static-queue-definition"},"Static queue definition"),(0,o.yg)("h3",{id:"goal"},"Goal"),(0,o.yg)("p",null,"A preconfigured hierarchy of queues with a maximum and guaranteed capacity.\nThe users can only submit applications to the leaf queues.\nThis approach manages the resource capacity for each of the queues, which is suitable to the scenarios that queues do not change too often."),(0,o.yg)("h3",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"Apply the following configuration to YuniKorn's configmap to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"setup 3 queues under ",(0,o.yg)("inlineCode",{parentName:"li"},"root")),(0,o.yg)("li",{parentName:"ul"},"each queue has a specific guaranteed and maximum capacity"),(0,o.yg)("li",{parentName:"ul"},"anyone can submit to any queue")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    queues:\n      - name: root\n        submitacl: '*'\n        queues:\n          - name: advertisement\n            resources:\n              guaranteed:\n                memory: 500000\n                vcore: 50000\n              max:\n                memory: 800000\n                vcore: 80000\n          - name: search\n            resources:\n              guaranteed:\n                memory: 400000\n                vcore: 40000\n              max:\n                memory: 600000\n                vcore: 60000\n          - name: sandbox\n            resources:\n              guaranteed:\n                memory: 100000\n                vcore: 10000\n              max:\n                memory: 100000\n                vcore: 10000\n")),(0,o.yg)("h3",{id:"run-a-workload"},"Run a workload"),(0,o.yg)("p",null,"In order to run applications in specific queues, you will need to set the following labels in all pod specs.\nAll pods with the same ",(0,o.yg)("inlineCode",{parentName:"p"},"applicationID")," label are considered ti be one application.\nIn the below example the application ",(0,o.yg)("inlineCode",{parentName:"p"},"my-test-app")," will run in the queue ",(0,o.yg)("inlineCode",{parentName:"p"},"root.sandbox"),": "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'labels:\n  app: my-test-app\n  applicationId: "my-test-app-01"\n  queue: root.sandbox\n')),(0,o.yg)("h2",{id:"namespace-to-queue-mapping"},"Namespace to queue mapping"),(0,o.yg)("h3",{id:"goal-1"},"Goal"),(0,o.yg)("p",null,"Automatically map a Kubernetes ",(0,o.yg)("inlineCode",{parentName:"p"},"namespace")," to a queue in YuniKorn.\nThe user creates the required namespaces in Kubernetes.\nThe YuniKorn k8s shim and core scheduler automatically pass the required information and map the namespace to a queue, creating the queue if it does not exist.\nThe resource quota will be managed by YuniKorn instead of using the Kubernetes namespace quota.\nThis does require the namespaces to be setup without Kubernetes quota enforcement and tags as per the ",(0,o.yg)("a",{parentName:"p",href:"#Namespace-quota"},"setup")," below."),(0,o.yg)("h3",{id:"configuration-1"},"Configuration"),(0,o.yg)("p",null,"Apply the following configuration to YuniKorn's configmap:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    placementrules:\n      - name: tag\n        value: namespace\n        create: true\n    queues:\n      - name: root\n        submitacl: '*'\n        properties:\n          application.sort.policy: stateaware\n")),(0,o.yg)("p",null,"This configuration places an application based on the ",(0,o.yg)("inlineCode",{parentName:"p"},"tag")," rule.\nThe tag selected is the ",(0,o.yg)("inlineCode",{parentName:"p"},"namespace")," tag which is automatically added by the k8s shim to all applications that get created.\nThe ",(0,o.yg)("inlineCode",{parentName:"p"},"create")," flag is set to true which will trigger the creation of the queue with the same name as the namespace if it does not exist. "),(0,o.yg)("p",null,"Applications within the automatically created child queues will be sorted based sorting policy set on the parent queue.\nIn this case the property ",(0,o.yg)("inlineCode",{parentName:"p"},"application.sort.policy")," is in this configuration set to ",(0,o.yg)("inlineCode",{parentName:"p"},"stateaware"),".\nThis is a simple app sorting policy applicable for batch jobs, you can find more document ",(0,o.yg)("a",{parentName:"p",href:"/docs/0.12.2/user_guide/sorting_policies#StateAwarePolicy"},"here"),"."),(0,o.yg)("p",null,"You can change the configuration using the helm charts during the installation by overwriting the configuration in the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-release/blob/master/helm-charts/yunikorn/values.yaml#L71-L81"},"helm chart template"),"."),(0,o.yg)("h3",{id:"namespace-quota"},"Namespace quota"),(0,o.yg)("p",null,"Namespaces in Kubernetes contain the quota information.\nIf a quota is set on a namespace Kubernetes will automatically enforce the quota.\nIn the case that YuniKorn is used for quota enforcement no quota must be set on the namespace."),(0,o.yg)("p",null,"To allow specifying a quota on the namespace the following annotations should be set in the namespace object:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'yunikorn.apache.org/namespace.max.cpu: "64"\nyunikorn.apache.org/namespace.max.memory: "100Gi"\n')),(0,o.yg)("p",null,"YuniKorn will parse these annotations and set the maximum capacity of the queue mapped to this namespace.\nThe values specified follow the standard Kubernetes formatting and unit specification.\nCurrently, we only support mapping memory and cpu not other resource types."),(0,o.yg)("p",null,"The example above will limit the queue mapped to the annotated namespace to 64 CPUs and 100GB memory."),(0,o.yg)("h3",{id:"run-a-workload-1"},"Run a workload"),(0,o.yg)("p",null,"Applications, and the pods that are part of the application, can be submitted without specific labels.\nYuniKorn will automatically add the required tags.\nThe configured placement rule will create the queue, if required, and add the application to the queue."),(0,o.yg)("p",null,"For example, if an application is submitted to namespace ",(0,o.yg)("inlineCode",{parentName:"p"},"development"),", then the application will run in the ",(0,o.yg)("inlineCode",{parentName:"p"},"root.development")," queue."),(0,o.yg)("h2",{id:"parent-queue-mapping-for-namespaces"},"Parent queue mapping for namespaces"),(0,o.yg)("h3",{id:"goal-2"},"Goal"),(0,o.yg)("p",null,"Though the tag placement rule using the ",(0,o.yg)("inlineCode",{parentName:"p"},"namespace")," tag is capable of placing an application in a queue this might not be enough in all setups.\nIn some cases, multi tenancy for example, namespaces need to be grouped together.\nAdministrators could annotate namespaces which allows dynamic placement of applications based on multiple annotations if placement rules were setup.\nYuniKorn cannot and does not just add all annotations from a namespace to an application."),(0,o.yg)("p",null,"To help support this grouping case a parent queue can be tagged on a namespace.   "),(0,o.yg)("h3",{id:"configuration-2"},"Configuration"),(0,o.yg)("p",null,"The configuration for this functionality consists of two pieces:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"the mapping rule"),(0,o.yg)("li",{parentName:"ol"},"the namespace annotation")),(0,o.yg)("p",null,"First we set the following configuration to YuniKorn's configmap:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    placementrules:\n    - name: tag\n      value: namespace\n      create: true\n      parent:\n      - name: tag\n        value: namespace.parentqueue\n    queues:\n    - name: root\n      queues:\n      - name: production\n      - name: development\n")),(0,o.yg)("p",null,"The configuration used for the namespace to queue mapping is the same as ",(0,o.yg)("a",{parentName:"p",href:"#Namespace-to-queue-mapping"},"above"),".\nAs an extension to the placement rule a ",(0,o.yg)("inlineCode",{parentName:"p"},"parent")," rule is added to support the grouping.\nThe parent rule is used to generate the parent, or the queue above, in the hierarchy.\nThe rule uses the tag ",(0,o.yg)("inlineCode",{parentName:"p"},"namespace.parentqueue")," from the application to generate the parent queue name.\nThe ",(0,o.yg)("inlineCode",{parentName:"p"},"namespace.parentqueue")," tag is automatically added by the Kubernetes shim but does require a namespace annotation (see below)."),(0,o.yg)("p",null,"In the example rule configuration given the ",(0,o.yg)("inlineCode",{parentName:"p"},"create")," flag is not set on the parent rule.\nThis means that the parent queue must exist in the configuration otherwise the application submit will fail.\nFor the example configuration this means supported values for the parent are thus limited to ",(0,o.yg)("inlineCode",{parentName:"p"},"production")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"development"),"."),(0,o.yg)("p",null,"Quotas cannot be set on the parent queue using any of these mappings.\nThe quota linked to the namespace is set on the namespace queue not the parent  as per the namespace mapping provided earlier."),(0,o.yg)("p",null,"Parent queue quotas must always be set directly in the configuration.\nThis requires the ",(0,o.yg)("inlineCode",{parentName:"p"},"create")," flag to be set to ",(0,o.yg)("inlineCode",{parentName:"p"},"false")," on the parent rule."),(0,o.yg)("h3",{id:"namespace-parent-queue"},"Namespace parent queue"),(0,o.yg)("p",null,"Contrary to the namespace name itself, and inline with the quota settings, the namespaces need to be annotated to use the parent queue mapping.\nNamespace names must be unique in Kubernetes which is not affected by this annotation.\nThe same annotation value may be used for multiple namespaces:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"yunikorn.apache.org/parentqueue: root.production\n")),(0,o.yg)("p",null,"The example annotation above will map the parent queue to the existing ",(0,o.yg)("inlineCode",{parentName:"p"},"root.production")," queue.\nNote that the rule will fully qualify the name if needed, you can thus omit the ",(0,o.yg)("inlineCode",{parentName:"p"},"root.")," part in the annotation.\nIf the annotation starts with ",(0,o.yg)("inlineCode",{parentName:"p"},"root.")," the system assumes it is a fully qualified queue name."),(0,o.yg)("p",null,"To complete the picture here is an image that shows the mapping from Kubernetes namespaces to queues in YuniKorn.\nIt uses the annotations on the namespaces in Kubernetes as described, and the example configuration for the mapping rules.\nThe ",(0,o.yg)("inlineCode",{parentName:"p"},"finance")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"sales")," namespaces become queues grouped under the parent queue ",(0,o.yg)("inlineCode",{parentName:"p"},"production"),".\nThe namespaces ",(0,o.yg)("inlineCode",{parentName:"p"},"dev")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"test")," are placed under the ",(0,o.yg)("inlineCode",{parentName:"p"},"development")," parent queue.   "),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Queue Quota",src:a(92094).A,width:"1600",height:"624"})),(0,o.yg)("h3",{id:"run-a-workload-2"},"Run a workload"),(0,o.yg)("p",null,"Applications, and the pods that are part of the application, can be submitted without specific labels or changes.\nYuniKorn will add the tags, the placement rules will do the rest.\nThe configured placement rule will create the queues, if required, and add the application to the queue."),(0,o.yg)("p",null,"Since the namespace ",(0,o.yg)("inlineCode",{parentName:"p"},"finance")," is annotated with the example value, and the rules are in place.\nApplications in the ",(0,o.yg)("inlineCode",{parentName:"p"},"finance")," namespace will run in the ",(0,o.yg)("inlineCode",{parentName:"p"},"root.production.finance")," queue that is created dynamically."))}m.isMDXComponent=!0},92094:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/namespace-mapping-703b2384a21c2e401291fbb49acdb1f4.png"},39182:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/queue-resource-quotas-02ec11ddedad1f2057bbc4d3ef1c900a.png"}}]);