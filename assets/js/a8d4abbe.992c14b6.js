"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92554],{77580:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=o(13274),i=o(1780);const s={id:"scheduler_core_design",title:"Scheduler Core Design"},t=void 0,c={id:"design/scheduler_core_design",title:"Scheduler Core Design",description:"\x3c!--",source:"@site/versioned_docs/version-1.2.0/design/scheduler_core_design.md",sourceDirName:"design",slug:"/design/scheduler_core_design",permalink:"/docs/1.2.0/design/scheduler_core_design",draft:!1,unlisted:!1,tags:[],version:"1.2.0",frontMatter:{id:"scheduler_core_design",title:"Scheduler Core Design"}},a={},l=[{value:"Components:",id:"components",level:2},{value:"Scheduler API Server (RMProxy)",id:"scheduler-api-server-rmproxy",level:3},{value:"Scheduler Cache",id:"scheduler-cache",level:3},{value:"Scheduler Cache Event Handler",id:"scheduler-cache-event-handler",level:3},{value:"Admin Service",id:"admin-service",level:3},{value:"Scheduler and Preemptor",id:"scheduler-and-preemptor",level:3},{value:"Scheduler&#39;s responsibility",id:"schedulers-responsibility",level:2},{value:"Preemption",id:"preemption",level:2},{value:"Communication between Shim and Core",id:"communication-between-shim-and-core",level:2},{value:"Configurations &amp; Semantics",id:"configurations--semantics",level:2},{value:"How scheduler do allocation",id:"how-scheduler-do-allocation",level:2},{value:"Flow of events",id:"flow-of-events",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["The scheduler core design has changed. ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-317",children:"YUNIKORN-317"})," was committed and has removed the scheduler cache.\nThis document will not be maintained and is just for historical reference.\nSee ",(0,r.jsx)(n.a,{href:"/docs/1.2.0/design/cache_removal",children:"scheduler cache removal design"})]})}),"\n",(0,r.jsxs)(n.p,{children:["Github repo: ",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-core",children:"https://github.com/apache/yunikorn-core"})]}),"\n",(0,r.jsxs)(n.p,{children:["Scheduler core encapsulates all scheduling algorithms, it collects resources from underneath resource management\nplatforms (like YARN/K8s), and is responsible for container allocation requests. It makes the decision where is the\nbest spot for each request and then sends response allocations to the resource management platform.\nScheduler core is agnostic about underneath platforms, all the communications are through the ",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-scheduler-interface",children:"scheduler interface"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"components",children:"Components:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n                     +---------------+  +--------------+\n                     |K8s Shim       |  |YARN Shim     |\n                     +---------------+  +--------------+\n\n                                +--------------+   +------------+\n                Scheduler-      | GRPC Protocol|   |Go API      |\n                Interface:      +--------------+   +------------+\n\n+---------------------------------------------------------------------------+\n                     +--------------------+\n                     |Scheduler API Server|\n +-------------+     +---------+----------+\n |AdminService |               |\n +-------------+               |Write Ops                    +----------------+\n +-------------+               V                            ++Scheduler       |\n |Configurator |      +-------------------+  Allocate       ||   And          |\n +-------------+      |Cache Event Handler+<-----------------|                |\n         +----------\x3e +-------------------+  Preempt        ++Preemptor       |\n          Update Cfg   Handled by policies                   +----------------+\n                               +  (Stateless)\n                        +------v--------+\n                        |Scheduler Cache|\n                        +---------------+\n                +---------------------------------------------+\n                |--------+ +------+ +----------+ +----------+ |\n                ||Node   | |Queue | |Allocation| |Requests  | |\n                |--------+ +------+ +----------+ +----------+ |\n                +---------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"scheduler-api-server-rmproxy",children:"Scheduler API Server (RMProxy)"}),"\n",(0,r.jsx)(n.p,{children:"Responsible for communication between RM and Scheduler, which implements scheduler-interface GRPC protocol,\nor just APIs. (For intra-process communication w/o Serde)."}),"\n",(0,r.jsx)(n.h3,{id:"scheduler-cache",children:"Scheduler Cache"}),"\n",(0,r.jsx)(n.p,{children:"Caches all data related to scheduler state, such as used resources of each queues, nodes, allocations.\nRelationship between allocations and nodes, etc. Should not include in-flight data for resource allocation.\nFor example to-be-preempted allocation candidates. Fair share resource of queues, etc."}),"\n",(0,r.jsx)(n.h3,{id:"scheduler-cache-event-handler",children:"Scheduler Cache Event Handler"}),"\n",(0,r.jsx)(n.p,{children:"Handles all events which needs to update scheduler internal state. So all the write operations will be carefully handled."}),"\n",(0,r.jsx)(n.h3,{id:"admin-service",children:"Admin Service"}),"\n",(0,r.jsx)(n.p,{children:"Handles request from Admin, which can also load configurations from storage and update scheduler policies."}),"\n",(0,r.jsx)(n.h3,{id:"scheduler-and-preemptor",children:"Scheduler and Preemptor"}),"\n",(0,r.jsx)(n.p,{children:"Handles Scheduler's internal state. (Which is not belong to scheduelr cache), such as internal reservations, etc.\nScheduler and preemptor will work together, make scheduling or preemption decisions. All allocate/preempt request\nwill be handled by event handler."}),"\n",(0,r.jsx)(n.h2,{id:"schedulers-responsibility",children:"Scheduler's responsibility"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"According to resource usages between queues, sort queues, applications, and figure out order of application allocation. (This will be used by preemption as well)."}),"\n",(0,r.jsx)(n.li,{children:"It is possible that we cannot satisfy some of the allocation request, we need to skip them and find next request."}),"\n",(0,r.jsx)(n.li,{children:"It is possible that some allocation request cannot be satisfied because of resource fragmentation. We need to reserve room for such requests."}),"\n",(0,r.jsx)(n.li,{children:"Different nodes may belong to different disjoint partitions, we can make independent scheduler runs"}),"\n",(0,r.jsx)(n.li,{children:"Be able to config and change ordering policies for apps, queues."}),"\n",(0,r.jsx)(n.li,{children:"Application can choose their own way to manage sort of nodes."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"preemption",children:"Preemption"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'It is important to know "who wants the resource", so we can do preemption based on allocation orders.'}),"\n",(0,r.jsx)(n.li,{children:"When do preemption, it is also efficient to trigger allocation op. Think about how to do it."}),"\n",(0,r.jsx)(n.li,{children:"Preemption needs to take care about queue resource balancing."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"communication-between-shim-and-core",children:"Communication between Shim and Core"}),"\n",(0,r.jsxs)(n.p,{children:["YuniKorn-Shim (like ",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim",children:"https://github.com/apache/yunikorn-k8shim"}),") communicates with core by\nusing scheduler-interface (",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-scheduler-interface",children:"https://github.com/apache/yunikorn-scheduler-interface"}),").\nScheduler interface has Go API or GRPC. Currently, yunikorn-k8shim is using Go API to communicate with yunikorn-core\nto avoid extra overhead introduced by GRPC."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Shim (like K8shim) first need to register with core:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (m *RMProxy) RegisterResourceManager(request *si.RegisterResourceManagerRequest, callback api.ResourceManagerCallback) (*si.RegisterResourceManagerResponse, error)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Which indicate ResourceManager's name, a callback function for updateResponse. The design of core is be able to do scheduling for multiple clusters (such as multiple K8s cluster) just with one core instance."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Shim interacts with core by invoking RMProxy's Update API frequently, which updates new allocation request, allocation to kill, node updates, etc."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (m *RMProxy) Update(request *si.UpdateRequest) error\n"})}),"\n",(0,r.jsx)(n.p,{children:"Response of update (such as new allocated container) will be received by registered callback."}),"\n",(0,r.jsx)(n.h2,{id:"configurations--semantics",children:"Configurations & Semantics"}),"\n",(0,r.jsx)(n.p,{children:"Example of configuration:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Partition is name space."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Same queues can under different partitions, but enforced to have same hierarchy."}),"\n",(0,r.jsx)(n.p,{children:"Good:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" partition=x    partition=y\n     a           a\n   /   \\        / \\\n  b     c      b   c\n"})}),"\n",(0,r.jsx)(n.p,{children:'Good (c in partition y acl=""):'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" partition=x    partition=y\n     a           a\n   /   \\        /\n  b     c      b\n"})}),"\n",(0,r.jsx)(n.p,{children:"Bad (c in different hierarchy)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" partition=x    partition=y\n     a           a\n   /   \\        /  \\\n  b     c      b    d\n              /\n             c\n"})}),"\n",(0,r.jsx)(n.p,{children:"Bad (Duplicated c)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" partition=x\n     a\n   /   \\\n  b     c\n /\nc\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Different hierarchies can be added"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scheduler-conf.yaml",children:"partitions:\n  - name:  default\n    queues:\n        root:\n          configs:\n            acls:\n          childrens:\n            - a\n            - b\n            - c\n            - ...\n        a:\n          configs:\n            acls:\n            capacity: (capacity is not allowed to set for root)\n            max-capacity: ...\n      mapping-policies:\n        ...\n  - name: partition_a:\n    queues:\n        root:...\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"how-scheduler-do-allocation",children:"How scheduler do allocation"}),"\n",(0,r.jsx)(n.p,{children:"Scheduler runs a separate goroutine to look at asks and available resources, and do resource allocation. Here's allocation logic in pseudo code:"}),"\n",(0,r.jsxs)(n.p,{children:["Entry point of scheduler allocation is ",(0,r.jsx)(n.code,{children:"scheduler.go: func (s *Scheduler) schedule()"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# First of all, YuniKorn has partition concept, a logical resource pool can consists\n# of one of multiple physical dis-joint partitions. It is similar to YARN's node\n# partition concept.\n\nfor partition : partitions:\n  # YuniKorn can reserve allocations for picky asks (such as large request, etc.)\n  # Before doing regular allocation, YuniKorn look at reservedAllocations first.\n  for reservedAllocation : partition.reservedAllocations: \n     reservedAllocation.tryAllocate(..)\n  \n  # After tried all reserved allocation, YuniKorn will go to regular allocation\n  partition.tryAllocate(..)\n  \n  # If there's any allocation created, scheduler will create an AllocationProposal\n  # and send to Cache to \"commit\" the AllocationProposal \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Allocation by hierchical of queues"})}),"\n",(0,r.jsxs)(n.p,{children:["Inside ",(0,r.jsx)(n.code,{children:"partition.tryAllocate"})]}),"\n",(0,r.jsxs)(n.p,{children:["It recursively traverse from root queue and down to lower level, for each level, logic is inside ",(0,r.jsx)(n.code,{children:"pkg/scheduler/scheduling_queue.go func (sq *SchedulingQueue) tryAllocate"})]}),"\n",(0,r.jsx)(n.p,{children:"Remember YuniKorn natively supports hierarchical of queues. For ParentQueue (which has sub queues under the parent queue), it uses queue's own sorting policy to sort subqueues and try to allocate from most preferred queue to least-preferred queue."}),"\n",(0,r.jsx)(n.p,{children:"For LeafQueue (which has applications inside the queue), it uses queue's own sorting policy to sort applications belong to the queue and allocate based on the sorted order."}),"\n",(0,r.jsx)(n.p,{children:"(All sorting policies can be configured differently at each level.)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Allocation by application"})}),"\n",(0,r.jsxs)(n.p,{children:["When it goes to Application, see (",(0,r.jsx)(n.code,{children:"scheduler_application.go: func (sa *SchedulingApplication) tryAllocate"}),"), It first sort the pending resource requests belong to the application (based on requests' priority). And based on the selected request, and configured node-sorting policy, it sorts nodes belong to the partition and try to allocate resources on the sorted nodes."]}),"\n",(0,r.jsx)(n.p,{children:"When application trying to allocate resources on nodes, it will invokes PredicatePlugin to make sure Shim can confirm the node is good. (For example K8shim runs predicates check for allocation pre-check)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Allocation completed by scheduler"})}),"\n",(0,r.jsx)(n.p,{children:"Once allocation is done, scheduler will create an AllocationProposal and send to Cache to do further check, we will cover details in the upcoming section."}),"\n",(0,r.jsx)(n.h2,{id:"flow-of-events",children:"Flow of events"}),"\n",(0,r.jsx)(n.p,{children:"Like mentioned before, all communications between components like RMProxy/Cache/Schedulers are done by using async event handler."}),"\n",(0,r.jsxs)(n.p,{children:["RMProxy/Cache/Scheduler include local event queues and event handlers. RMProxy and Scheduler have only one queue (For example: ",(0,r.jsx)(n.code,{children:"pkg/scheduler/scheduler.go: handleSchedulerEvent"}),"), and Cache has two queues (One for events from RMProxy, and one for events from Scheduler, which is designed for better performance)."]}),"\n",(0,r.jsx)(n.p,{children:"We will talk about how events flowed between components:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Events for ResourceManager registration and updates:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Update from ResourceManager -> RMProxy -> RMUpdateRequestEvent Send to Cache\nNew ResourceManager registration -> RMProxy -> RegisterRMEvent Send to Cache\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Cache Handles RM Updates"})}),"\n",(0,r.jsxs)(n.p,{children:["There're many fields inside RM Update event (",(0,r.jsx)(n.code,{children:"RMUpdateRequestEvent"}),"), among them, we have following categories:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"1) Update for Application-related updates\n2) Update for New allocation ask and release. \n3) Node (Such as kubelet) update (New node, remove node, node resource change, etc.)\n"})}),"\n",(0,r.jsx)(n.p,{children:"More details can be found at:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"func (m *ClusterInfo) processRMUpdateEvent(event *cacheevent.RMUpdateRequestEvent)\n\ninside cluster_info.go\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Cache send RM updates to Scheduler"})}),"\n",(0,r.jsxs)(n.p,{children:["For most cases, Cache propagate updates from RM to scheduler directly (including Application, Node, Asks, etc.). And it is possible that some updates from RM is not valid (such as adding an application to a non-existed queue), for such cases, cache can send an event back to RMProxy and notify the ResourceManager. (See ",(0,r.jsx)(n.code,{children:"RMApplicationUpdateEvent.RejectedApplications"}),")"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Cache handles scheduler config"})}),"\n",(0,r.jsx)(n.p,{children:"Cache also handles scheduler's config changes, see"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (m *ClusterInfo) processRMConfigUpdateEvent(event *commonevents.ConfigUpdateRMEvent)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Similar to other RM updates, it propages news to scheduelr."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Scheduler do allocation"})}),"\n",(0,r.jsxs)(n.p,{children:["Once an AllocationProposal created by scheduler, scheduler sends ",(0,r.jsx)(n.code,{children:"AllocationProposalBundleEvent"})," to Cache to commit."]}),"\n",(0,r.jsx)(n.p,{children:"Cache look at AllocationProposal under lock, and commit these proposals. The reason to do proposal/commit is Scheduler can run in multi-threads which could cause conflict for resource allocation. This approach is inspired by Borg/Omega/YARN Global Scheduling."}),"\n",(0,r.jsxs)(n.p,{children:["Cache checks more states such as queue resources, node resources (we cannot allocate more resource than nodes' available), etc. Once check is done, Cache updates internal data strcture and send confirmation to Scheduler to update the same, and scheduler sends allocated Allocation to RMProxy so Shim can do further options. For example, K8shim will ",(0,r.jsx)(n.code,{children:"bind"})," an allocation (POD) to kubelet."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Job Add:\n--------\nRM -> Cache -> Scheduler (Implemented)\n\nJob Remove:\n-----------\nRM -> Scheduler -> Cache (Implemented)\nReleased allocations: (Same as normal release) (Implemented)\nNote: Make sure remove from scheduler first to avoid new allocated created. \n\nScheduling Request Add:\n-----------------------\nRM -> Cache -> Scheduler (Implemented)\nNote: Will check if requested job exists, queue exists, etc.\nWhen any request invalid:\n   Cache -> RM (Implemented)\n   Scheduler -> RM (Implemented)\n\nScheduling Request remove:\n------------------------- \nRM -> Scheduler -> Cache (Implemented)\nNote: Make sure removed from scheduler first to avoid new container allocated\n\nAllocation remove (Preemption) \n-----------------\nScheduler -> Cache -> RM (TODO)\n              (confirmation)\n\nAllocation remove (RM voluntarilly ask)\n---------------------------------------\nRM -> Scheduler -> Cache -> RM. (Implemented)\n                      (confirmation)\n\nNode Add: \n---------\nRM -> Cache -> Scheduler (Implemented)\nNote: Inside Cache, update allocated resources.\nError handling: Reject Node to RM (Implemented)\n\nNode Remove: \n------------\nImplemented in cache side\nRM -> Scheduler -> Cache (TODO)\n\nAllocation Proposal:\n--------------------\nScheduler -> Cache -> RM\nWhen rejected/accepted:\n    Cache -> Scheduler\n    \nInitial: (TODO)\n--------\n1. Admin configured partitions\n2. Cache initializes\n3. Scheduler copies configurations\n\nRelations between Entities \n-------------------------\n1. RM includes one or multiple:\n   - Partitions \n   - Jobs\n   - Nodes \n   - Queues\n   \n2. One queue: \n   - Under one partition\n   - Under one RM.\n   \n3. One job: \n   - Under one queue (Job with same name can under different partitions)\n   - Under one partition\n\nRM registration: (TODO)\n----------------\n1. RM send registration\n2. If RM already registered, remove old one, including everything belong to RM.\n\nRM termination (TODO) \n--------------\nJust remove the old one.\n\nUpdate of queues (TODO) \n------------------------\nAdmin Service -> Cache\n\nAbout partition (TODO) \n-----------------------\nInternal partition need to be normalized, for example, RM specify node with partition = xyz. \nScheduler internally need to normalize it to <rm-id>_xyz\nThis need to be done by RMProxy\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1780:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var r=o(79474);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);