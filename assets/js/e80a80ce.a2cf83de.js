"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1224],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=a.createContext({}),c=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(r.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,g=p["".concat(r,".").concat(h)]||p[h]||u[h]||s;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=h;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},79809:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return r},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=t(87462),o=t(63366),s=(t(67294),t(3905)),i=["components"],l={id:"interface_message_simplification",title:"Simplifying Interface Messages"},r=void 0,c={unversionedId:"design/interface_message_simplification",id:"design/interface_message_simplification",title:"Simplifying Interface Messages",description:"\x3c!--",source:"@site/docs/design/interface_message_simplification.md",sourceDirName:"design",slug:"/design/interface_message_simplification",permalink:"/docs/next/design/interface_message_simplification",draft:!1,tags:[],version:"current",frontMatter:{id:"interface_message_simplification",title:"Simplifying Interface Messages"},sidebar:"docs",previous:{title:"User Based Resource Usage Tracking",permalink:"/docs/next/design/user_based_resource_usage_tracking"},next:{title:"Scheduler cache removal design",permalink:"/docs/next/design/cache_removal"}},d={},p=[{value:"Goals",id:"goals",level:2},{value:"Background",id:"background",level:2},{value:"Simplifying Interface Messages",id:"simplifying-interface-messages",level:2},{value:"API Interface Changes",id:"api-interface-changes",level:3},{value:"Interface Changes to replace UpdateRequest",id:"interface-changes-to-replace-updaterequest",level:3},{value:"AllocationRequest",id:"allocationrequest",level:4},{value:"ApplicationRequest",id:"applicationrequest",level:4},{value:"NodeRequest",id:"noderequest",level:4},{value:"Merging Create and Update NodeInfo into Single NodeInfo",id:"merging-create-and-update-nodeinfo-into-single-nodeinfo",level:3},{value:"Event Changes to replace UpdateRequest",id:"event-changes-to-replace-updaterequest",level:3},{value:"Interface Changes to replace UpdateResponse",id:"interface-changes-to-replace-updateresponse",level:3},{value:"AllocationResponse",id:"allocationresponse",level:4},{value:"ApplicationResponse",id:"applicationresponse",level:4},{value:"NodeResponse",id:"noderesponse",level:4},{value:"Event Changes for UpdateResponse",id:"event-changes-for-updateresponse",level:3},{value:"Detailed Flow Analysis",id:"detailed-flow-analysis",level:2},{value:"Add/Delete Allocations",id:"adddelete-allocations",level:3},{value:"Add/Delete Applications",id:"adddelete-applications",level:3},{value:"Add/Delete Nodes",id:"adddelete-nodes",level:3},{value:"Breaking the Shim build dependency on Core",id:"breaking-the-shim-build-dependency-on-core",level:2},{value:"Phase 1",id:"phase-1",level:3},{value:"Phase 2",id:"phase-2",level:3}],u={toc:p},h="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)(h,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"simplifying-interface-messages-and-breaking-shim-build-dependency-on-core"},"Simplifying Interface Messages and Breaking Shim build dependency on Core"),(0,s.kt)("h1",{id:"proposal"},"Proposal"),(0,s.kt)("p",null,"This document describes a) complexity hidden behind existing Interface messages and\nexplains the newly defined SI messages and its dependent changes on Core and Shim.\nb). Breaking Shim build dependency on Core."),(0,s.kt)("h2",{id:"goals"},"Goals"),(0,s.kt)("p",null,"The goal is to provide the same functionality before and after the change."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"unit tests before and after the merge must all pass."),(0,s.kt)("li",{parentName:"ul"},"Smoke tests defined in the core should all pass without major changes definition."),(0,s.kt)("li",{parentName:"ul"},"End-to-end tests that are part of the shim code must all pass without changes.")),(0,s.kt)("h2",{id:"background"},"Background"),(0,s.kt)("p",null,"The current interface allows us to only send one message between a shim and the core. This provides us with a really simple way of interactions definition."),(0,s.kt)("p",null,"The complexity is however hidden in the message itself. Every message serves multiple purposes and when the message is received the core and shim need to unpack it and process each part separately and for certain parts in a real specific order.\nBecause the message serves a number of purposes it has a large overhead. This might not show up in the code directly as the heavy lifting is done in the generated code. It will show up in the amount of data as a message, even if it does not have all fields, still needs to be encoded in a way that it unpacks correctly on the other side."),(0,s.kt)("h2",{id:"simplifying-interface-messages"},"Simplifying Interface Messages"),(0,s.kt)("p",null,"Proposal is to split the one large message into 3 separate messages - one for each entity:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Allocations"),(0,s.kt)("li",{parentName:"ul"},"Applications"),(0,s.kt)("li",{parentName:"ul"},"Nodes")),(0,s.kt)("h3",{id:"api-interface-changes"},"API Interface Changes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'package api\n\nimport "github.com/apache/incubator-yunikorn-scheduler-interface/lib/go/si"\n\ntype SchedulerAPI interface {\n    // Register a new RM, if it is a reconnect from previous RM, cleanup \n    // all in-memory data and resync with RM. \n    RegisterResourceManager(request *si.RegisterResourceManagerRequest, callback ResourceManagerCallback) (*si.RegisterResourceManagerResponse, error)\n    \n    // Update Allocation status\n    UpdateAllocation(request *si.AllocationRequest) error\n    \n    // Update Application status\n    UpdateApplication(request *si.ApplicationRequest) error\n    \n    // Update Node status\n    UpdateNode(request *si.NodeRequest) error\n    \n    // Notify scheduler to reload configuration and hot-refresh in-memory state based on configuration changes \n    UpdateConfiguration(clusterID string) error\n}\n\n// RM side needs to implement this API\ntype ResourceManagerCallback interface {\n    \n    //Receive Allocation Update Response\n    UpdateAllocation(response *si.AllocationResponse) error\n    \n    //Receive Application Update Response\n    UpdateApplication(response *si.ApplicationResponse) error\n    \n    //Receive Node update Response\n    UpdateNode(response *si.NodeResponse) error\n    \n    // Run a certain set of predicate functions to determine if a proposed allocation\n    // can be allocated onto a node.\n    Predicates(args *si.PredicatesArgs) error\n    \n    // RM side implements this API when it can provide plugin for reconciling\n    // Re-sync scheduler cache can sync some in-cache (yunikorn-core side) state changes\n    // to scheduler cache (shim-side), such as assumed allocations.\n    ReSyncSchedulerCache(args *si.ReSyncSchedulerCacheArgs) error\n    \n    // This plugin is responsible for transmitting events to the shim side.\n    // Events can be further exposed from the shim.\n    SendEvent(events []*si.EventRecord)\n    \n    // Scheduler core can update container scheduling state to the RM,\n    // the shim side can determine what to do incorporate with the scheduling state\n    // update container scheduling state to the shim side\n    // this might be called even the container scheduling state is unchanged\n    // the shim side cannot assume to only receive updates on state changes\n    // the shim side implementation must be thread safe\n    UpdateContainerSchedulingState(request *si.UpdateContainerSchedulingStateRequest)\n    \n    // Update configuration\n    UpdateConfiguration(args *si.UpdateConfigurationRequest) *si.UpdateConfigurationResponse\n}\n')),(0,s.kt)("h3",{id:"interface-changes-to-replace-updaterequest"},"Interface Changes to replace UpdateRequest"),(0,s.kt)("p",null,"UpdateRequest would be divided into below messages:"),(0,s.kt)("h4",{id:"allocationrequest"},"AllocationRequest"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"message AllocationRequest {\n  repeated AllocationAsk asks = 1;\n  AllocationReleasesRequest releases = 2;\n  string rmID = 3;\n}\n")),(0,s.kt)("h4",{id:"applicationrequest"},"ApplicationRequest"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"message ApplicationRequest {\n  repeated AddApplicationRequest new = 1;\n  repeated RemoveApplicationRequest remove = 2;\n  string rmID = 3;\n}\n")),(0,s.kt)("h4",{id:"noderequest"},"NodeRequest"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"message NodeRequest {\n  repeated NodeInfo nodes = 1;\n  string rmID = 2;\n}\n")),(0,s.kt)("h3",{id:"merging-create-and-update-nodeinfo-into-single-nodeinfo"},"Merging Create and Update NodeInfo into Single NodeInfo"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"message NodeInfo {\n  enum ActionFromRM {\n    CREATE = 0;\n    UPDATE = 1;\n    DRAIN = 2;\n    SCHEDULABLE = 3;\n    DECOMISSION = 4;\n  }\n\n  string nodeID = 1;\n  ActionFromRM action = 2;\n  map<string, string> attributes = 3;\n  Resource schedulableResource = 4;\n  Resource occupiedResource = 5;\n  repeated Allocation existingAllocations = 6;\n}\n")),(0,s.kt)("h3",{id:"event-changes-to-replace-updaterequest"},"Event Changes to replace UpdateRequest"),(0,s.kt)("p",null,"RMUpdateRequestEvent would be replaced by following events:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"RMUpdateAllocationEvent"),(0,s.kt)("li",{parentName:"ul"},"RMUpdateApplicationEvent"),(0,s.kt)("li",{parentName:"ul"},"RMUpdateNodeEvent")),(0,s.kt)("h3",{id:"interface-changes-to-replace-updateresponse"},"Interface Changes to replace UpdateResponse"),(0,s.kt)("p",null,"UpdateResponse would be divided into below messages:"),(0,s.kt)("h4",{id:"allocationresponse"},"AllocationResponse"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"message AllocationResponse {\n  repeated Allocation new = 1;\n  repeated AllocationRelease released = 2;\n  repeated AllocationAskRelease releasedAsks =3;\n  repeated RejectedAllocationAsk rejected = 4;\n}\n")),(0,s.kt)("h4",{id:"applicationresponse"},"ApplicationResponse"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"message ApplicationResponse {\n  repeated RejectedApplication rejected = 1;\n  repeated AcceptedApplication accepted = 2;\n  repeated UpdatedApplication updated = 3;\n}\n")),(0,s.kt)("h4",{id:"noderesponse"},"NodeResponse"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"message NodeResponse {\n  repeated RejectedNode rejected = 1;\n  repeated AcceptedNode accepted = 2;\n}\n")),(0,s.kt)("h3",{id:"event-changes-for-updateresponse"},"Event Changes for UpdateResponse"),(0,s.kt)("p",null,"Scheduler/Context.go from Core already triggers an event for each entity separately and rmproxy.go is the one which handles all these events and packs it under single *si.UpdateResponse and eventually sends to shim through scheduler_callback#RecvUpdateResponse. With the above API interface change, rmproxy.go would use appropriate callback method to send response to shim. With this separate callback approach, each entity response would be handled separately in shim."),(0,s.kt)("h2",{id:"detailed-flow-analysis"},"Detailed Flow Analysis"),(0,s.kt)("h3",{id:"adddelete-allocations"},"Add/Delete Allocations"),(0,s.kt)("p",null,"The RM (shim) sends a simplified AllocationRequest as described above. This message is wrapped by the RM proxy and forwarded to the cache for processing. The RM can request an allocation to be added or removed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. Shim sends a simplified AllocationRequest to core through SchedulerAPI.UpdateAllocation\n2. RMProxy sends rmevent.RMUpdateAllocationEvent to scheduler \n3. On receiving the above event, scheduler calls context.handleRMUpdateAllocationEvent to do the \n   following:\n   3.1: processAsks\n        2.1.2: Process each request.Asks ask of AllocationRequest request and adds to the application\n        2.1.2: In case of rejection, triggers RMRejectedAllocationAskEvent with \n        all asks which has been rejected\n        2.1.2: On receiving RMRejectedAllocationAskEvent, RMProxy.processUpdatePartitionConfigsEvent \n        process the event, creates a AllocationResponse using RMRejectedAllocationAskEvent \n        attributes and send to shim through UpdateAllocation callback method\n   3.2: processAskReleases\n        2.2.1: Process each request.Releases.AllocationAsksToRelease ask release of AllocationRequest request \n        and removes from the application\n   3.3: processAllocationReleases\n        3.3.1: Process each request.Releases.AllocationRelease allocation release of AllocationRequest \n        request and removes from the application\n        3.3.2: Collect all above exact released allocations and triggers RMReleaseAllocationEvent with all allocations needs to be released\n        3.3.3: On receiving RMReleaseAllocationEvent, RMProxy.processRMReleaseAllocationEvent\n        prcoess the event, creates a AllocationResponse using RMReleaseAllocationEvent\n        attributes and send to shim through UpdateAllocation callback method\n        3.3.4: Collect all above confirmed (placeholder swap & preemption) allocations \n        and send to shim through two ways \n            a). Wraps confirmed allocations as AssumedAllocation \n            and send to shim ReSyncSchedulerCache callback plugin \n            b). Wraps confirmed allocations as Allocation and triggers \n            RMNewAllocationsEvent. On receiving RMNewAllocationsEvent, \n            RMProxy.processAllocationUpdateEvent process the event, creates a \n            AllocationResponse using RMNewAllocationsEvent attributes and send to shim \n            through UpdateAllocation callback method\n")),(0,s.kt)("h3",{id:"adddelete-applications"},"Add/Delete Applications"),(0,s.kt)("p",null,"The RM (shim) sends a simplified ApplicationRequest as described above. This message is wrapped by the RM proxy and forwarded to the cache for processing. The RM can request an application to be added or removed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. Shim sends a simplified ApplicationRequest to core through SchedulerAPI.UpdateApplication\n2. RMProxy sends rmevent.RMUpdateApplicationEvent to scheduler\n3. On receiving the above event, scheduler calls context.handleRMUpdateApplicationEvent to do the \n   following:\n   3.1: Add new apps to the partition. \n        3.1.2: Wraps AcceptedApps and RejectedApps (if any) as part of RMApplicationUpdateEvent \n        and fires the same\n        3.1.2: On receiving RMApplicationUpdateEvent, RMProxy.processApplicationUpdateEvent \n        process the event, creates a ApplicationResponse using RMApplicationUpdateEvent \n        attributes and send to shim through UpdateApplication callback method\n   3.2 Remove apps from the partition.\n        3.2.1: Collect all allocations belongs to the removed app and triggers \n        RMReleaseAllocationEvent with all allocations needs to be released\n        3.2.2: On receiving RMReleaseAllocationEvent, RMProxy.processRMReleaseAllocationEvent\n        prcoess the event, creates a AllocationResponse using RMReleaseAllocationEvent\n        attributes and send to shim through UpdateAllocation callback method\n")),(0,s.kt)("h3",{id:"adddelete-nodes"},"Add/Delete Nodes"),(0,s.kt)("p",null,"The RM (shim) sends a simplified NodeRequest as described above. This message is wrapped by the RM proxy and forwarded to the cache for processing. The RM can request an node to be added or removed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. Shim sends a simplified NodeRequest to core through SchedulerAPI.UpdateNode\n2. RMProxy sends rmevent.RMUpdateNodeEvent to scheduler\n3. On receiving the above event, scheduler calls context.handleRMUpdateNodeEvent to do the \n   following:\n   3.1: Add new node to the partition. \n        3.1.2: Wraps AcceptedNodes and RejectedNodes (if any) as part of RMNodeUpdateEvent \n        and fires the same\n        3.1.2: On receiving RMNodeUpdateEvent, RMProxy.processRMNodeUpdateEvent \n        process the event, creates a NodeResponse using RMNodeUpdateEvent \n        attributes and send to shim through UpdateNode callback method\n   3.2: Update node\n        3.2.1 Update the partition resource\n   3.3: Drain node\n        3.3.1 Ensures node is not schedulable\n   3.4: Decommissioning (Remove) node from the partition.\n        3.4.1: Ensures node is not schedulable\n        3.4.2: Collect all above exact released allocations from that node and triggers \n        RMReleaseAllocationEvent with all allocations needs to be released\n        3.4.3: On receiving RMReleaseAllocationEvent, \n        RMProxy.processRMReleaseAllocationEvent process the event, creates a \n        AllocationResponse using RMReleaseAllocationEvent attributes and \n        send to shim through UpdateAllocation callback method\n        3.4.4: Collect all above confirmed (placeholder swap & preemption) from that node \n        allocations and send to shim through two ways \n            a). Wraps confirmed allocations as AssumedAllocation and send to shim \n            through ReSyncSchedulerCache callback plugin \n            b). Wraps confirmed allocations as Allocation and triggers RMNewAllocationsEvent. \n            On receiving RMNewAllocationsEvent, RMProxy.processAllocationUpdateEvent \n            process the event, creates a AllocationResponse using RMNewAllocationsEvent \n            attributes and send to shim through UpdateAllocation callback method\n")),(0,s.kt)("h2",{id:"breaking-the-shim-build-dependency-on-core"},"Breaking the Shim build dependency on Core"),(0,s.kt)("p",null,"Planned for different phases. "),(0,s.kt)("h3",{id:"phase-1"},"Phase 1"),(0,s.kt)("p",null,"Moved all plugins from core to appropriate place in SI under ResourceManagerCallback,\na single common interface."),(0,s.kt)("h3",{id:"phase-2"},"Phase 2"),(0,s.kt)("p",null,"Please refer ",(0,s.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-930"},"https://issues.apache.org/jira/browse/YUNIKORN-930")," for more details"))}g.isMDXComponent=!0}}]);