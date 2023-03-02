"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5447],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return t?i.createElement(k,r(r({ref:n},u),{},{components:t})):i.createElement(k,r({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},14036:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var i=t(87462),a=t(63366),l=(t(67294),t(3905)),r=["components"],o={id:"config_v2",title:"Configuration V2"},p=void 0,s={unversionedId:"design/config_v2",id:"design/config_v2",title:"Configuration V2",description:"\x3c!--",source:"@site/docs/design/config_v2.md",sourceDirName:"design",slug:"/design/config_v2",permalink:"/docs/next/design/config_v2",draft:!1,tags:[],version:"current",frontMatter:{id:"config_v2",title:"Configuration V2"},sidebar:"docs",previous:{title:"Scheduler Object States",permalink:"/docs/next/design/scheduler_object_states"},next:{title:"Scheduler Configuration",permalink:"/docs/next/design/scheduler_configuration"}},u={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals",id:"non-goals",level:3},{value:"References",id:"references",level:3},{value:"Implementation JIRA",id:"implementation-jira",level:4},{value:"Other relevant JIRAs",id:"other-relevant-jiras",level:4},{value:"Services to cover",id:"services-to-cover",level:3},{value:"Services excluded",id:"services-excluded",level:3},{value:"Configuration format",id:"configuration-format",level:2},{value:"Mutability of configuration values",id:"mutability-of-configuration-values",level:3},{value:"Update handling",id:"update-handling",level:3},{value:"Legacy configuration handling",id:"legacy-configuration-handling",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Helm considerations",id:"helm-considerations",level:3},{value:"Core Configuration",id:"core-configuration",level:3},{value:"Appendix",id:"appendix",level:2},{value:"Default ConfigMap",id:"default-configmap",level:3},{value:"Admission Controller Configuration",id:"admission-controller-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables",level:4},{value:"Removed CLI Options",id:"removed-cli-options",level:4},{value:"Scheduler (Standard) Configuration",id:"scheduler-standard-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables-1",level:4},{value:"Removed CLI Options",id:"removed-cli-options-1",level:4},{value:"Scheduler (Plugin) Configuration",id:"scheduler-plugin-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables-2",level:4},{value:"Removed CLI Options",id:"removed-cli-options-2",level:4},{value:"Helm Configuration",id:"helm-configuration",level:3},{value:"Removed Options",id:"removed-options",level:4},{value:"Deprecated Options",id:"deprecated-options",level:4}],d={toc:m},c="wrapper";function k(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)(c,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Over time the YuniKorn configuration has increased in complexity. The current\nconfiguration for YuniKorn is split over a number of different options, file\nand command line, and formats. There is a requirement now to define an overall\nconfiguration approach that can be used for all components."),(0,l.kt)("h3",{id:"goals"},"Goals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Define a configuration format"),(0,l.kt)("li",{parentName:"ul"},"Define an update and modification strategy"),(0,l.kt)("li",{parentName:"ul"},"Provide consistency between configuration of YuniKorn components"),(0,l.kt)("li",{parentName:"ul"},"Legacy migration strategy")),(0,l.kt)("h3",{id:"non-goals"},"Non-Goals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Redefine the queue configuration"),(0,l.kt)("li",{parentName:"ul"},"Migration timeline for the old configuration options")),(0,l.kt)("h3",{id:"references"},"References"),(0,l.kt)("h4",{id:"implementation-jira"},"Implementation JIRA"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1221"},"YUNIKORN-1221")," - ","[Umbrella]"," Configuration V2"),(0,l.kt)("h4",{id:"other-relevant-jiras"},"Other relevant JIRAs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-455"},"YUNIKORN-455")," - Make the core configurable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1213"},"YUNIKORN-1213")," - Background health checker needs to be configurable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1335"},"YUNIKORN-1335")," - Write yunikorn-web error logs to stderr")),(0,l.kt)("h3",{id:"services-to-cover"},"Services to cover"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Scheduler (Standard) - K8Shim + Core"),(0,l.kt)("li",{parentName:"ul"},"Scheduler (Plugin) - K8Shim + Core"),(0,l.kt)("li",{parentName:"ul"},"Admission controller")),(0,l.kt)("h3",{id:"services-excluded"},"Services excluded"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Web UI (not needed after ",(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1335"},"YUNIKORN-1335"),")")),(0,l.kt)("h2",{id:"configuration-format"},"Configuration format"),(0,l.kt)("p",null,"Currently only Kubernetes is a supported deployment pattern. Future shims may\nneed an alternative configuration syntax. To enable this, we will update the\nscheduler interface to support passing the core configuration (the content of\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"queues.yaml")," ConfigMap entry) to the core on startup and refresh. The\nexisting config watcher functionality in the core will be removed and the shim\nwill gain the responsibility for watching for ConfigMap changes. The shim\nactually already has this ability now, it is just not used."),(0,l.kt)("p",null,"We will use two ConfigMaps to configure YuniKorn:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"yunikorn-defaults"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This will be a new ConfigMap written by Helm; it will contain only values\nexplicitly configured by an administrator via Helm variables."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"yunikorn-configs"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This ConfigMap will contain overrides for yunikorn-defaults. It was\npreviously a Helm hook in previous YuniKorn releases; it will no longer\nbe managed by Helm and may be updated freely by third-party tools.")))),(0,l.kt)("p",null,"The effective configuration will be the combination of both ",(0,l.kt)("inlineCode",{parentName:"p"},"yunikorn-defaults"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"yunikorn-configs"),", with ",(0,l.kt)("inlineCode",{parentName:"p"},"yunikorn-configs")," taking precedence."),(0,l.kt)("p",null,"Neither ConfigMap (even the existing one) is required for proper functionality.\nIn the case where a ConfigMap does not exist, we will use compiled-in defaults\nfor all options. This enables bootstrapping in a variety of environments,\nincluding local development mode, as the ConfigMap need not exist to bring the\nscheduler components up. Future configuration options should be set via the\nConfigMap exclusively."),(0,l.kt)("h3",{id:"mutability-of-configuration-values"},"Mutability of configuration values"),(0,l.kt)("p",null,"We should strive for hot-reload of all configuration values where possible.\nWhere hot-reload is not implemented, this should be clearly documented. For the\ninitial release, the core config and admission controller will be\nhot-reloadable but many items in the shim will likely not be. The shim was not\ndesigned to hot-reload anything so this will be a large future task. Some items\nmay never be reloadable due to architectural limitations."),(0,l.kt)("h3",{id:"update-handling"},"Update handling"),(0,l.kt)("p",null,"Given the security issues involved with updates, the default Kubernetes access\ncontrol alone should be used for ConfigMap updates. We can still syntax-check\nthe core side of the configuration in the admission controller as before.\nPartial updates are allowed as Kubernetes supports patching of ConfigMaps."),(0,l.kt)("h3",{id:"legacy-configuration-handling"},"Legacy configuration handling"),(0,l.kt)("p",null,"Helm will be updated to render all existing legacy options into the\n",(0,l.kt)("inlineCode",{parentName:"p"},"yunikorn-defaults")," ConfigMap for easier transition to the new configuration\nformat. Consequently, it is not necessary for YuniKorn components to parse the\nold environment and command-line arguments."),(0,l.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,l.kt)("p",null,"All environment variables for all services will be removed, with the exception\nof:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NAMESPACE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"default")),(0,l.kt)("li",{parentName:"ul"},"Will be auto-populated from Helm and resolve to the pod's running\nnamespace"),(0,l.kt)("li",{parentName:"ul"},"Needed so that YuniKorn can determine what namespace it was launched in"),(0,l.kt)("li",{parentName:"ul"},"Should only be provided explicitly at development time"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"KUBECONFIG"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.kube/config")),(0,l.kt)("li",{parentName:"ul"},"Will be ignored if running inside Kubernetes; in-cluster configuration\nwill be used in that case"),(0,l.kt)("li",{parentName:"ul"},"Needed so that we can bootstrap to K8s and load the YuniKorn ConfigMap at\nruntime"),(0,l.kt)("li",{parentName:"ul"},"Should only be provided explicitly at development time")))),(0,l.kt)("h3",{id:"helm-considerations"},"Helm considerations"),(0,l.kt)("p",null,"All configuration options which have moved into the ConfigMap will be marked as\ndeprecated in the Helm chart documentation. Their replacement is the more\ngeneric ",(0,l.kt)("inlineCode",{parentName:"p"},"yunikornDefaults")," dictionary. If the legacy values are present but\nthe associated ",(0,l.kt)("inlineCode",{parentName:"p"},"yunikornDefaults")," entry is missing, the legacy configuration\nvalue will be used. This will allow users some time to migrate to the new\nconfiguration style. The legacy attributes will be removed in a future release."),(0,l.kt)("h3",{id:"core-configuration"},"Core Configuration"),(0,l.kt)("p",null,"The core scheduler configuration is loaded from the ",(0,l.kt)("inlineCode",{parentName:"p"},"queues.yaml")," section of\nthe ConfigMap, assuming ",(0,l.kt)("inlineCode",{parentName:"p"},"service.policyGroup")," is set to the default value\n",(0,l.kt)("inlineCode",{parentName:"p"},"queues"),". If the policy group has been customized, core scheduler configuration\nwill be read from ",(0,l.kt)("inlineCode",{parentName:"p"},"{service.policyGroup}.yaml"),". This section is special as its\ncontents are passed directly to the core for evaluation and update and is not\nread directly by the shim. The content of this section is unchanged from prior\nreleases."),(0,l.kt)("h2",{id:"appendix"},"Appendix"),(0,l.kt)("h3",{id:"default-configmap"},"Default ConfigMap"),(0,l.kt)("p",null,"If not present, the default ConfigMap will resolve to these defaults.\nAdditionally, individual options will resolve to those listed here if not\nspecified. Note that these values are subject to change in future releases."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yunikorn-configs\ndata:\n  service.clusterId: "mycluster"\n  service.policyGroup: "queues"\n  service.schedulingInterval: "1s"\n  service.volumeBindTimeout: "10s"\n  service.eventChannelCapacity: "1048576"\n  service.dispatchTimeout: "5m"\n  service.operatorPlugins: "general"\n  service.disableGangScheduling: "false"\n  service.enableConfigHotRefresh: "true"\n  service.placeholderImage: "registry.k8s.io/pause:3.7"\n  health.checkInterval: "30s"\n  log.level: "0"\n  kubernetes.qps: "1000"\n  kubernetes.burst: "1000"\n  kubernetes.apiClientTimeout: "30s"\n  admissionController.webHook.amServiceName: "yunikorn-admission-controller-service"\n  admissionController.webHook.schedulerServiceAddress: "yunikorn-service:9080"\n  admissionController.filtering.processNamespaces: ""\n  admissionController.filtering.bypassNamespaces: "^kube-system$"\n  admissionController.filtering.labelNamespaces: ""\n  admissionController.filtering.noLabelNamespaces: ""\n  admissionController.accessControl.bypassAuth: "false"\n  admissionController.accessControl.trustControllers: "true"\n  admissionController.accessControl.systemUsers: "^system:serviceaccount:kube-system:"\n  admissionController.accessControl.externalUsers: ""\n  admissionController.accessControl.externalGroups: ""\n  queues.yaml: |\n    partitions:\n      - name: default\n        placementrules:\n          - name: tag\n            value: namespace\n            create: true\n        queues:\n          - name: root\n            submitacl: \'*\'`\n')),(0,l.kt)("h3",{id:"admission-controller-configuration"},"Admission Controller Configuration"),(0,l.kt)("h4",{id:"removed-environment-variables"},"Removed Environment Variables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"POLICY_GROUP"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.policyGroup")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ENABLE_CONFIG_HOT_REFRESH"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.enableConfigHotRefresh")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SCHEDULER_SERVICE_ADDRESS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.webHook.schedulerServiceAddress")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_SERVICE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.webHook.amServiceName")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_NAMESPACE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use Environment variable: ",(0,l.kt)("inlineCode",{parentName:"li"},"NAMESPACE")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_PROCESS_NAMESPACES"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.processNamespaces")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_BYPASS_NAMESPACES"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.bypassNamespaces")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ADMISSON_CONTROLLER_LABEL_NAMESPACES"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.labelNamespaces")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_NO_LABEL_NAMESPACES"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.noLabelNamespaces"))))),(0,l.kt)("h4",{id:"removed-cli-options"},"Removed CLI Options"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"scheduler-standard-configuration"},"Scheduler (Standard) Configuration"),(0,l.kt)("h4",{id:"removed-environment-variables-1"},"Removed Environment Variables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"USER_LABEL_KEY"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OPERATOR_PLUGINS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PLACEHOLDER_IMAGE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.placeholderImage"))))),(0,l.kt)("h4",{id:"removed-cli-options-1"},"Removed CLI Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-clusterId"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.clusterId")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-clusterVersion"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-policyGroup"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.policyGroup")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-interval"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.schedulingInterval")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-logLevel"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"log.level")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-logEncoding"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-logFile"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-volumeBindTimeout"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.volumeBindTimeout")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-eventChannelCapacity"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.eventChannelCapacity")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-dispatchTimeout"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.dispatchTimeout")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-kubeQPS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubernetes.qps")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-kubeBurst"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubernetes.burst")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-operatorPlugins"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-enableConfigHotRefresh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.enableConfigHotRefresh")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-disableGangScheduling"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.disableGangScheduling")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-userLabelKey"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-placeHolderImage"),"\nUse ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.placeholderImage"))),(0,l.kt)("h3",{id:"scheduler-plugin-configuration"},"Scheduler (Plugin) Configuration"),(0,l.kt)("h4",{id:"removed-environment-variables-2"},"Removed Environment Variables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"USER_LABEL_KEY"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OPERATOR_PLUGINS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PLACEHOLDER_IMAGE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.placeholderImage"))))),(0,l.kt)("h4",{id:"removed-cli-options-2"},"Removed CLI Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-scheduler-name"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-cluster-id"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.clusterId")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-cluster-version"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-policy-group"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.policyGroup")))),(0,l.kt)("li",{parentName:"ul"},"`--yk-scheduling-interval",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.schedulingInterval")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-kube-config"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use environment: ",(0,l.kt)("inlineCode",{parentName:"li"},"KUBECONFIG")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-log-level"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"log.level")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-log-encoding"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-log-file"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-event-channel-capacity"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.eventChannelCapacity")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-dispatcher-timeout"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.dispatchTimeout")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-kube-qps"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubernetes.qps")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-kube-burst"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubernetes.burst")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-operator-plugins"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-enable-config-hot-refresh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.enableConfigHotRefresh")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-disable-gang-scheduling"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.disableGangScheduling")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-user-label-key"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--yk-placeholder-image"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.placeholderImage"))))),(0,l.kt)("h3",{id:"helm-configuration"},"Helm Configuration"),(0,l.kt)("h4",{id:"removed-options"},"Removed Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"userLabelKey"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No replacement")))),(0,l.kt)("h4",{id:"deprecated-options"},"Deprecated Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"operatorPlugins"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"placeHolderImage"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"service.placeholderImage")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.processNamespaces"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.processNamespaces")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.bypassNamespaces"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.bypassNamespaces")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.labelNamespaces"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.labelNamespaces")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.noLabelNamespaces"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"admissionController.filtering.noLabelNamespaces")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"configuration"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.kt)("inlineCode",{parentName:"li"},"queues.yaml"))))))}k.isMDXComponent=!0}}]);