"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42183],{13345:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=n(13274),r=n(1780);const s={id:"priority_scheduling",title:"Priority Scheduling"},o=void 0,a={id:"design/priority_scheduling",title:"Priority Scheduling",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.1/design/priority_scheduling.md",sourceDirName:"design",slug:"/design/priority_scheduling",permalink:"/docs/design/priority_scheduling",draft:!1,unlisted:!1,tags:[],version:"1.5.1",frontMatter:{id:"priority_scheduling",title:"Priority Scheduling"},sidebar:"docs",previous:{title:"Generic Resource Types in Namespace Quota",permalink:"/docs/design/generic_resource"},next:{title:"Resilience",permalink:"/docs/design/resilience"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Goals",id:"goals",level:2},{value:"Non Goals",id:"non-goals",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Priority",id:"priority",level:3},{value:"Minimum Priority",id:"minimum-priority",level:3},{value:"Maximum Priority",id:"maximum-priority",level:3},{value:"Default Priority",id:"default-priority",level:3},{value:"PriorityClass",id:"priorityclass",level:3},{value:"Pre-defined PriorityClass objects",id:"pre-defined-priorityclass-objects",level:4},{value:"Current state",id:"current-state",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Priority fencing",id:"priority-fencing",level:3},{value:"Priority offset",id:"priority-offset",level:3},{value:"Extended application sorting",id:"extended-application-sorting",level:3},{value:"Extended queue sorting",id:"extended-queue-sorting",level:3},{value:"Priority Configuration",id:"priority-configuration",level:3},{value:"Queue Configuration",id:"queue-configuration",level:4},{value:"Scheduler storage object changes",id:"scheduler-storage-object-changes",level:3},{value:"Application",id:"application",level:4},{value:"Queue",id:"queue",level:4}];function c(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(i.p,{children:["Currently, YuniKorn can sort at two levels: the applications in a queue and\nthe resource requests within the application. The queue sorting policy is\nconfigurable and supports a ",(0,t.jsx)(i.em,{children:"Fair"})," or ",(0,t.jsx)(i.em,{children:"FIFO"})," policy. ",(0,t.jsx)(i.em,{children:"StateAware"})," is\nconsidered a filtered ",(0,t.jsx)(i.em,{children:"FIFO"})," policy. Applications cannot be sorted based\non priority."]}),"\n",(0,t.jsxs)(i.p,{children:["Within an application, requests are sorted based on priority of the requests.\nFor requests that have the same priority the submission time is used as a\nsecondary sort key. Requests are sorted in ",(0,t.jsx)(i.em,{children:"FIFO"})," order if they have the\nsame priority. Note that the priority of requests was not propagated from\nthe shim to the core until\n",(0,t.jsx)(i.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1235",children:"YUNIKORN-1235"})," was\nimplemented in v1.0.0. Until that implementation all requests were created\nwith the ",(0,t.jsx)(i.em,{children:"default"})," priority."]}),"\n",(0,t.jsxs)(i.p,{children:["Additionally, Kubernetes uses priority as a sort when performing preemption.\nYuniKorn currently only does preemption of requests if a node-specific task\nneeds to be scheduled (i.e. a DaemonSet pod,\n",(0,t.jsx)(i.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1085",children:"YUNIKORN-1085"}),")."]}),"\n",(0,t.jsx)(i.h2,{id:"goals",children:"Goals"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Attempt to be compatible with Kubernetes standard priority handling\nwherever possible"}),"\n",(0,t.jsxs)(i.li,{children:["Priority should be orthogonal to application sorting policies (i.e.\n",(0,t.jsx)(i.em,{children:"Fair"}),", ",(0,t.jsx)(i.em,{children:"FIFO"})," and ",(0,t.jsx)(i.em,{children:"StateAware"})," policies should support prioritization)"]}),"\n",(0,t.jsx)(i.li,{children:"It should be possible to limit the scope of priority handling"}),"\n",(0,t.jsx)(i.li,{children:"Design of priority scheduling should consider the impact on preemption\ndesign"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"non-goals",children:"Non Goals"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Design of preemption"}),"\n",(0,t.jsx)(i.li,{children:"Change AllocationAsk sorting within an application"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"definitions",children:"Definitions"}),"\n",(0,t.jsx)(i.p,{children:"The following terms are defined as follows and will be used throughout this\ndocument."}),"\n",(0,t.jsx)(i.h3,{id:"priority",children:"Priority"}),"\n",(0,t.jsx)(i.p,{children:"Priority is a numeric value associated with an Ask. Higher-priority asks have\nhigher numeric values. To be compatible with Kubernetes, all 32-bit signed\nintegers are considered valid priorities. An ask without a specific defined\npriority is assumed to have the default priority."}),"\n",(0,t.jsx)(i.h3,{id:"minimum-priority",children:"Minimum Priority"}),"\n",(0,t.jsxs)(i.p,{children:["Minimum priority is defined as the lowest possible priority, or\n",(0,t.jsx)(i.code,{children:"-2,147,483,648"})," (- 2",(0,t.jsx)("sup",{children:"31"}),")."]}),"\n",(0,t.jsx)(i.h3,{id:"maximum-priority",children:"Maximum Priority"}),"\n",(0,t.jsxs)(i.p,{children:["Maximum priority is defined as the highest possible priority, or\n",(0,t.jsx)(i.code,{children:"2,147,483,647"})," (2",(0,t.jsx)("sup",{children:"31"})," - 1). Note that Kubernetes does not permit\ncustom priority classes (see below) to define priorities greater than\n",(0,t.jsx)(i.code,{children:"1,000,000,000"})," (1 billion). Values higher are reserved for system-level\npriorities."]}),"\n",(0,t.jsx)(i.h3,{id:"default-priority",children:"Default Priority"}),"\n",(0,t.jsxs)(i.p,{children:["Default priority is defined as the value ",(0,t.jsx)(i.code,{children:"0"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"priorityclass",children:"PriorityClass"}),"\n",(0,t.jsxs)(i.p,{children:["A ",(0,t.jsx)(i.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/#priorityclass",children:"PriorityClass"}),"\nis a Kubernetes object which maps between a priority name and an integer\npriority value. The name cannot start with ",(0,t.jsx)(i.code,{children:"system-"})," as that prefix is\nreserved for Kubernetes internal usage."]}),"\n",(0,t.jsxs)(i.p,{children:["Additionally, a ",(0,t.jsx)(i.code,{children:"preemptionPolicy"})," may be set on a PriorityClass. Official\nGA support was added in Kubernetes 1.24. The preemption policy is only\nused while scheduling the pod itself. It is not taken into account after\nthe pod is scheduled."]}),"\n",(0,t.jsxs)(i.p,{children:["The policy defaults to ",(0,t.jsx)(i.code,{children:"Never"}),", implying that pods of this priority will\nnever preempt other pods. ",(0,t.jsx)(i.code,{children:"PreemptLowerPriority"})," is also possible, which\nallows the scheduler to preempt pods with lower priority values."]}),"\n",(0,t.jsxs)(i.p,{children:["When a pod is submitted with its ",(0,t.jsx)(i.code,{children:"priorityClassName"})," set to a valid priority\nclass, a Kubernetes-provided admission controller will automatically update\nthe ",(0,t.jsx)(i.code,{children:"priority"})," and ",(0,t.jsx)(i.code,{children:"preemptionPolicy"})," fields of the pod to match those of the\nreferenced PriorityClass. Pods that specify a priority as part of the\nspecification are rejected if the integer value set on the pod does not match\nthe PriorityClass value."]}),"\n",(0,t.jsx)(i.h4,{id:"pre-defined-priorityclass-objects",children:"Pre-defined PriorityClass objects"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["system-cluster-critical: ",(0,t.jsx)(i.code,{children:"2,000,000,000"})]}),"\n",(0,t.jsxs)(i.li,{children:["system-node-critical: ",(0,t.jsx)(i.code,{children:"2,000,000,100"})]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"current-state",children:"Current state"}),"\n",(0,t.jsxs)(i.p,{children:["The framework for priority is minimally implemented within YuniKorn. The\n",(0,t.jsx)(i.em,{children:"AllocationAsk"})," structure within the scheduler interface already contains a\n",(0,t.jsx)(i.em,{children:"priority"})," field which is populated by the shim based on the ",(0,t.jsx)(i.em,{children:"priority"})," field\non a Pod."]}),"\n",(0,t.jsxs)(i.p,{children:["One priority can be set on creation of the ",(0,t.jsx)(i.em,{children:"AllocationAsk"}),". Each\n",(0,t.jsx)(i.em,{children:"AllocationAsk"})," within an application may have its own priority.\n",(0,t.jsx)(i.em,{children:"AllocationAsk"})," sorting is based on this priority. This means that within the\napplication asks or pods are sorted based on priority. High-priority asks will\nbe scheduled before low-priority asks."]}),"\n",(0,t.jsxs)(i.p,{children:["Priorities are currently also used for the minimal DaemonSet preemption process\nimplemented in ",(0,t.jsx)(i.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1085",children:"YUNIKORN-1085"}),".\nPossible victims are sorted based on their priority among other things. The\npriority of the ",(0,t.jsx)(i.em,{children:"Allocation"})," is the same as the ",(0,t.jsx)(i.em,{children:"AllocationAsk"})," they\nrepresent."]}),"\n",(0,t.jsxs)(i.p,{children:["One use of the capability to set a priority for each ",(0,t.jsx)(i.em,{children:"AllocationAsk"})," could be to\nenable dynamic allocations such as those utilized by Apache Spark. An\napplication can submit a set of asks at high priority that will be scheduled\nas soon as possible, and a set of lower-priority asks that can be used for\nadditional capacity if available."]}),"\n",(0,t.jsx)(i.h2,{id:"proposal",children:"Proposal"}),"\n",(0,t.jsx)(i.h3,{id:"priority-fencing",children:"Priority fencing"}),"\n",(0,t.jsx)(i.p,{children:"By default, priority applies across queues globally. In other words, a\nhigher-priority ask will be attempted to be satisfied before a lower-priority\nask regardless of which queue the asks reside in."}),"\n",(0,t.jsxs)(i.p,{children:["However, it is often useful to limit the scope of priority handling. For\nexample, it may be desirable to limit the ability of asks in one area of the\nqueue hierarchy from jumping ahead of asks in another area. To support this,\nwe add the concept of a ",(0,t.jsx)(i.em,{children:"Priority Fence"}),". A queue (either ",(0,t.jsx)(i.em,{children:"leaf"})," or ",(0,t.jsx)(i.em,{children:"parent"}),")\nmay be configured as priority-fenced, which prevents priorities from\npropagating upward."]}),"\n",(0,t.jsx)(i.p,{children:"If a queue is fenced, asks within that queue (and subqueues) will be\nprioritized relative to each other, but not relative to asks in other portions\nof the queue hierarchy. A priority fence is a YuniKorn queue subtree boundary\nabove which priorities are no longer considered. A priority fenced queue does\nnot expose priority levels of its children to its parent queue, thereby\nensuring that priorities are only considered within that queue and its\ndescendants."}),"\n",(0,t.jsxs)(i.p,{children:["Priority fences may be nested; for example a fenced queue ",(0,t.jsx)(i.code,{children:"tenant 1"})," may have\nchild queues ",(0,t.jsx)(i.code,{children:"queue A"})," (fenced) and ",(0,t.jsx)(i.code,{children:"queue B"})," (unfenced). In this case tasks\nin ",(0,t.jsx)(i.code,{children:"queue A"})," will show as the default priority and will not be prioritized\nabove ",(0,t.jsx)(i.code,{children:"queue B"}),", but tasks in ",(0,t.jsx)(i.code,{children:"queue B"})," may be prioritized over those in\n",(0,t.jsx)(i.code,{children:"queue A"}),". In no case will tasks in either queue be prioritized over tasks\noutside the scope of queue ",(0,t.jsx)(i.code,{children:"tenant 1"}),", as they show as the default priority\n(shown in the diagram below with yellow arrows)."]}),"\n",(0,t.jsxs)(i.p,{children:["A similar setup is created for the ",(0,t.jsx)(i.code,{children:"tenant 2"})," queue. However in this case the\npriorities from ",(0,t.jsx)(i.code,{children:"queue 1"})," to ",(0,t.jsx)(i.code,{children:"queue 2"})," and vice-versa are fully visible\n(shown in the diagram below with blue arrows)."]}),"\n",(0,t.jsxs)(i.p,{children:["None of the tasks running in the queues below ",(0,t.jsx)(i.code,{children:"tenant 1"})," or ",(0,t.jsx)(i.code,{children:"tenant 2"})," can be\nprioritized above the ",(0,t.jsx)(i.code,{children:"system"})," queue. Tasks in the ",(0,t.jsx)(i.code,{children:"system"})," queue are not\nfenced. That means that a task in the ",(0,t.jsx)(i.code,{children:"system"})," queue can be prioritized above\nany queue in the hierarchy (shown in the diagram below with red arrows)."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"priority flows",src:n(23364).A+"",width:"1968",height:"774"})}),"\n",(0,t.jsx)(i.h3,{id:"priority-offset",children:"Priority offset"}),"\n",(0,t.jsx)(i.p,{children:"Priorities need to be pre-defined at the cluster level via the PriorityClass\nobjects. At the Kubernetes level there is no way to limit which priorities can\nbe used in which part of the system. The only exception to that rule are the\npre-defined system priorities from the Kubernetes system itself. This does not\ngive an administrator a lot of control."}),"\n",(0,t.jsxs)(i.p,{children:["Prioritizing a specific queue above another queue based on the priorities of\nthe tasks inside the queue is thus difficult. Any user can start a task with\nany priority anywhere in the cluster. To allow an administrator more control\nwe need to be able to steer, or augment, the priority of a queue. To\naccomplish this, we introduce the ",(0,t.jsx)(i.code,{children:"priority.offset"})," property of a queue."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"priority.offset"})," property on a queue allows the administrator to increase\n(or decrease) a queue's priority. By using the offset a queue can be boosted\nto become a high-priority queue. It also can be used to decrease the priority\ncompared to its siblings."]}),"\n",(0,t.jsxs)(i.p,{children:["As a general rule: the priority of a ",(0,t.jsx)(i.em,{children:"leaf"})," queue is equal to the maximum\npriority of the AllocationAsks in that queue, plus the ",(0,t.jsx)(i.code,{children:"priority.offset"}),"\nvalue. The priority of a ",(0,t.jsx)(i.em,{children:"parent"})," queue is the maximum of the priority of its\nchild queues plus the ",(0,t.jsx)(i.code,{children:"priority.offset"})," value. This means that priority\noffsets are additive when traversing up the queue hierarchy. A priority offset\nmay be any valid signed ",(0,t.jsx)(i.code,{children:"int32"})," value. The offset is applied after the dynamic\npriority for the queue is calculated."]}),"\n",(0,t.jsx)(i.p,{children:"As a note of caution: a side effect of a very large offset value for a queue\ncould result in all pods in that queue being clamped at the maximum priority\nlevel or exceeding the priority of Kubernetes system priority classes. This\ncould then adversely impact the scheduling of node and or cluster critical\npods in sibling queues. This effect needs to be clearly documented. Logging a\nwarning about a configured value that high should also be considered."}),"\n",(0,t.jsxs)(i.p,{children:["A second option that was considered is limiting the offset value to\n",(0,t.jsx)(i.code,{children:"999,999,999"}),". This would prevent the offset priority from exceeding the\npre-defined system priorities. This would be a safe option but does not take\ninto account the fact that we can have negative priorities that we want to\noffset. The current choice is to go with the first option to document and log."]}),"\n",(0,t.jsxs)(i.p,{children:["Fencing affects the priority calculation for the queue. When a queue is\nfenced (i.e. the ",(0,t.jsx)(i.code,{children:"priority.policy"})," is set to ",(0,t.jsx)(i.code,{children:"fence"}),"), queue priority\ncalculations are disabled for that queue. The result of application priority\nor child queue calculations are ignored for a fenced queue. The priority of\nthe fenced queue is always set to the default priority or to the priority\noffset, if specified."]}),"\n",(0,t.jsx)(i.h3,{id:"extended-application-sorting",children:"Extended application sorting"}),"\n",(0,t.jsx)(i.p,{children:"Applications are currently sorted based on one of the defined application\nsorting policies. All application sorting policies only take into account\napplications that have pending requests."}),"\n",(0,t.jsxs)(i.p,{children:["Currently defined are ",(0,t.jsx)(i.em,{children:"Fair"}),", ",(0,t.jsx)(i.em,{children:"FIFO"}),", and ",(0,t.jsx)(i.em,{children:"StateAware"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"Fair"})," sorting sorts based on relative usage within a queue"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"FIFO"})," sorts applications by creation time in a first-in, first-out manner"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"StateAware"})," is similar to ",(0,t.jsx)(i.em,{children:"FIFO"}),' except that only a single "new"\napplication is allowed at once (this is an over-simplification, but will\nsuffice here)']}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["To support priority scheduling, the policies ",(0,t.jsx)(i.em,{children:"Fair"})," and ",(0,t.jsx)(i.em,{children:"FIFO"})," will get an\nequivalent policy that considers the priority of an application first. For\napplications that have the same priority, sorting will then fall back to the\nsecondary sort criteria (",(0,t.jsx)(i.em,{children:"Fair"})," or ",(0,t.jsx)(i.em,{children:"FIFO"}),")."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"StateAware"})," as a special form of ",(0,t.jsx)(i.em,{children:"FIFO"})," will however always filter\napplications first and then sort. A priority based version of ",(0,t.jsx)(i.em,{children:"StateAware"}),'\nmust change the way it filters. The single "new" application that is\nconsidered can no longer be the oldest application. That would be a major\nbehavioral change from the current policy.']}),"\n",(0,t.jsx)(i.p,{children:"The existing policies will not be changed to maintain backwards\ncompatibility. None of the existing policies have a tiebreak built in. In\nthe case the comparison returns equality the order of the elements is not\nchanged."}),"\n",(0,t.jsx)(i.p,{children:"Instead of introducing new policies to add priority to the existing\nbehavior a flag will be added that allows switching priorities on or off.\nThe property will be added to the queue."}),"\n",(0,t.jsxs)(i.p,{children:["New property: ",(0,t.jsx)(i.code,{children:"appication.sort.priority"})]}),"\n",(0,t.jsx)(i.h3,{id:"extended-queue-sorting",children:"Extended queue sorting"}),"\n",(0,t.jsxs)(i.p,{children:["Queue sorting currently only supports one policy: ",(0,t.jsx)(i.em,{children:"Fair"}),". Queues cannot\nbe sorted using a ",(0,t.jsx)(i.em,{children:"FIFO"})," mechanism. ",(0,t.jsx)(i.em,{children:"FIFO"})," sorting of queues is not in\nscope of this design. However the design has allowed for a simple addition\nof a new policy."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"Fair"})," policy works similarly to application ",(0,t.jsx)(i.em,{children:"Fair"}),' sorting, except\nthat it sorts based on usage ratios between two queues. Allocations are\ncompared to guaranteed resources. This results in the queue furthest below\nits guaranteed resource to be first in the sorted queue list as it is\nconsidered "more starved". For queues that have the same usage ratio,\nthe queue with the highest pending requests is considered more starved.']}),"\n",(0,t.jsxs)(i.p,{children:["To add priority support, a new property will be added to consider the\ncurrent queue priority as the main sorting factor. To break the tie between\nqueues with the same priority, starvation like in the ",(0,t.jsx)(i.em,{children:"Fair"})," policy will be\nused. Again breaking the tie for queues with the same ",(0,t.jsx)(i.em,{children:"Fair"})," usage using the\npending requests."]}),"\n",(0,t.jsx)(i.p,{children:"The existing policy will not be changed to maintain backwards compatibility.\nThe same property as used for application sorting will be reused to control\npriority behavior."}),"\n",(0,t.jsxs)(i.p,{children:["New property: ",(0,t.jsx)(i.code,{children:"application.sort.priority"})]}),"\n",(0,t.jsx)(i.h3,{id:"priority-configuration",children:"Priority Configuration"}),"\n",(0,t.jsx)(i.h4,{id:"queue-configuration",children:"Queue Configuration"}),"\n",(0,t.jsxs)(i.p,{children:["Three new attributes will be added to the queue configuration object to allow\nspecifying the priority fence type and priority offset and priority sorting.\nAll properties ",(0,t.jsx)(i.code,{children:"priority.policy"}),", ",(0,t.jsx)(i.code,{children:"priority.offset"}),", and\n",(0,t.jsx)(i.code,{children:"application.sort.priority"}),", can be set on any queue. The attributes are part\nof the queue properties as follows:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"queues:\n  - name: fencedqueue\n    properties:\n      priority.policy: fence\n      priority.offset: 100\n      application.sort.priority: enabled\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"priority.policy"})," and ",(0,t.jsx)(i.code,{children:"priority.offset"})," fields are not inherited from the\nparent queue to a child queue; they apply only to the queue they are specified\non."]}),"\n",(0,t.jsxs)(i.p,{children:["Note that the ",(0,t.jsx)(i.code,{children:"application.sort.priority"})," field is only inherited if the value\nis set to ",(0,t.jsx)(i.code,{children:"disabled"})," (the ",(0,t.jsx)(i.code,{children:"enabled"})," value is already the default). This allows\npriorities to be ignored for an entire queue subtree by setting the property\non the parent queue."]}),"\n",(0,t.jsx)(i.p,{children:"Properties are fully supported in child templates. Support for setting these\nproperties for dynamic queues is included as part of the existing\nfunctionality."}),"\n",(0,t.jsxs)(i.p,{children:["The supported, not case sensitive, values for the ",(0,t.jsx)(i.code,{children:"application.sort.priority"}),"\nare:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"enabled"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"disabled"})}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The proposal is to default to ",(0,t.jsx)(i.code,{children:"enabled"})," for the ",(0,t.jsx)(i.code,{children:"application.sort.priority"}),"\nproperty. Given that the Kubernetes default scheduler and preemption support\nare all based on priorities that choice seems more logical than ",(0,t.jsx)(i.code,{children:"disabled"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"application.sort.priority"})," when set on a ",(0,t.jsx)(i.em,{children:"parent"})," queue affects the way\nthe queues are sorted. It will change queue sorting from the standard ",(0,t.jsx)(i.em,{children:"Fair"}),"\nsorting to priority-based sorting. To break the tie for equal priority\nqueues it will use the ",(0,t.jsx)(i.em,{children:"Fair"})," comparison. When set on a ",(0,t.jsx)(i.em,{children:"leaf"})," queue it will\nchange the application sorting itself. All three existing policies will be\nsupported with ",(0,t.jsx)(i.code,{children:"application.sort.priority"})," set to ",(0,t.jsx)(i.code,{children:"enabled"})," or ",(0,t.jsx)(i.code,{children:"disabled"}),".\nFor the ",(0,t.jsx)(i.code,{children:"disabled"})," case nothing will change and the old behavior is\nmaintained. For the ",(0,t.jsx)(i.code,{children:"enabled"})," case the primary sort will be priority and the\nconfigured policy (",(0,t.jsx)(i.em,{children:"Fair"}),", ",(0,t.jsx)(i.em,{children:"FIFO"}),",  or ",(0,t.jsx)(i.em,{children:"StateAware"}),") will be used as\ntiebreakers."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"priority.policy"})," and ",(0,t.jsx)(i.code,{children:"priority.offset"})," can be set on the ",(0,t.jsx)(i.code,{children:"root"})," queue\nbut have no effect. The root ",(0,t.jsx)(i.code,{children:"queue"})," as the top of the hierarchy has no\nparent. This means priority cannot traverse further up the tree. No messages\nwill be logged if the ",(0,t.jsx)(i.code,{children:"priority.policy"})," or ",(0,t.jsx)(i.code,{children:"priority.offset"})," are set on the\n",(0,t.jsx)(i.code,{children:"root"})," queue."]}),"\n",(0,t.jsxs)(i.p,{children:["The supported, not case sensitive, values for the ",(0,t.jsx)(i.code,{children:"priority.policy"})," are:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"default"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"fence"})}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["If the value ",(0,t.jsx)(i.code,{children:"fence"})," is set on a queue, the queue on which the property is\nset does not propagate its priority outside of the queue's subtree. The value\n",(0,t.jsx)(i.code,{children:"default"})," does not fence the queue. If no policy is set the value ",(0,t.jsx)(i.code,{children:"default"})," is\nused."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"priority.offset"})," value must be a valid integer in string form. The value\nwill be converted into an integer using the standard parsing methods as defined\nvia: ",(0,t.jsx)(i.a,{href:"https://pkg.go.dev/strconv#ParseInt",children:(0,t.jsx)(i.code,{children:"strconv.ParseInt"})}),(0,t.jsx)(i.code,{children:"(s, 10, 32)"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["If no ",(0,t.jsx)(i.code,{children:"priority.offset"})," property is specified in the queue the default of ",(0,t.jsx)(i.code,{children:"0"}),"\nis used. Specifying the property with an empty value is equivalent to ",(0,t.jsx)(i.code,{children:"0"}),". If\nparsing of the string fails the default of ",(0,t.jsx)(i.code,{children:"0"})," is used."]}),"\n",(0,t.jsx)(i.h3,{id:"scheduler-storage-object-changes",children:"Scheduler storage object changes"}),"\n",(0,t.jsx)(i.h4,{id:"application",children:"Application"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"Application"})," object within the scheduler core will be updated with a\ndynamic priority value, defined as the maximum priority of all pending asks.\nTo avoid sorting performance degradation, this value should be cached and\nrecomputed only when allocation asks are added, allocated, or removed."]}),"\n",(0,t.jsxs)(i.p,{children:["This recalculation can be avoided in many instances. When new asks are added,\nan application's priority need not be recalculated unless the priority of the\nnew ask is greater than that of the application as a whole. Similarly, when\nremoving an ask, the priority need not be adjusted unless the ask's priority\nis equal to the application's priority. When recalculating priority due to\nadding a high-priority ask, the application's priority can simply be set to\nthe new ask's priority. When recalculating due to removal of an ask of equal\npriority to the application, we can stop considering additional asks as soon\nas any other ask of equal priority is encountered. This means that the\nperformance impact of application priority updates will be ",(0,t.jsx)(i.code,{children:"O(1)"})," when adding\nan ask, and at worst ",(0,t.jsx)(i.code,{children:"O(n)"})," when removing an ask."]}),"\n",(0,t.jsxs)(i.p,{children:["New field: ",(0,t.jsx)(i.code,{children:"askMaxPriority"})]}),"\n",(0,t.jsx)(i.h4,{id:"queue",children:"Queue"}),"\n",(0,t.jsxs)(i.p,{children:["The new configuration values need to be maintained on the queue. Besides those\nvalues the ",(0,t.jsx)(i.em,{children:"Queue"}),' object within the scheduler core will be updated with a\ndynamic priority value. This dynamic priority will be defined as the maximum\npriority of all applications within the queue, plus any "priority offset"\nconfigured.']}),"\n",(0,t.jsxs)(i.p,{children:["To avoid sorting performance degradation, this value should be cached and\nrecomputed only when necessary. For a ",(0,t.jsx)(i.em,{children:"leaf"})," queue, this is required if\napplication priorities in the queue have changed, and for a ",(0,t.jsx)(i.em,{children:"parent"})," queue this\nis required if the priorities of child queues have changed."]}),"\n",(0,t.jsxs)(i.p,{children:["New fields: ",(0,t.jsx)(i.code,{children:"priorityPolicy"}),", ",(0,t.jsx)(i.code,{children:"priorityOffset"}),", ",(0,t.jsx)(i.code,{children:"currentPriority"})]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},23364:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/priority-flows-a6d25ccb858c715c6711ed1630aefd27.png"},1780:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(79474);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);