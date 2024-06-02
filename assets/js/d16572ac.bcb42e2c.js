"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1038],{42799:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=r(13274),s=r(1780);const a={id:"placement_rules",title:"App Placement Rules"},i=void 0,l={id:"user_guide/placement_rules",title:"App Placement Rules",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/user_guide/placement_rules.md",sourceDirName:"user_guide",slug:"/user_guide/placement_rules",permalink:"/docs/1.0.0/user_guide/placement_rules",draft:!1,unlisted:!1,tags:[],version:"1.0.0",frontMatter:{id:"placement_rules",title:"App Placement Rules"},sidebar:"docs",previous:{title:"Partition and Queue Configuration",permalink:"/docs/1.0.0/user_guide/queue_config"},next:{title:"User & Group Resolution",permalink:"/docs/1.0.0/user_guide/usergroup_resolution"}},o={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Create parameter",id:"create-parameter",level:3},{value:"Parent parameter",id:"parent-parameter",level:3},{value:"Filter parameter",id:"filter-parameter",level:3},{value:"Value parameter",id:"value-parameter",level:3},{value:"Access Control List",id:"access-control-list",level:2},{value:"Rules",id:"rules",level:2},{value:"Provided Rule",id:"provided-rule",level:3},{value:"User Name Rule",id:"user-name-rule",level:3},{value:"Fixed Rule",id:"fixed-rule",level:3},{value:"Tag Rule",id:"tag-rule",level:3},{value:"Complex examples",id:"complex-examples",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The basics for the placement rules are described in the ",(0,t.jsx)(n.a,{href:"/docs/1.0.0/design/scheduler_configuration#placement-rules-definition",children:"scheduler configuration design document"}),".\nMultiple rules can be chained to form a placement policy.\n",(0,t.jsx)(n.a,{href:"/docs/1.0.0/user_guide/acls",children:"Access control lists"})," and rule filters are defined per rule and enforced per rule.\nThis document explains how to build a policy, including the rule usage, that is part of the scheduler with examples."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Rules are defined per partition as part of the scheduler queue configuration.\nThe order that the rules are defined in is the order in which they are executed.\nIf a rule matches the policy will stop executing the remaining rules."}),"\n",(0,t.jsxs)(n.p,{children:["A matching rule generates a fully qualified queue name.\nThis means that the name returned starts at the ",(0,t.jsx)(n.em,{children:"root"})," queue.\nThere is no limit on the number of levels in the queue hierarchy that can be generated."]}),"\n",(0,t.jsxs)(n.p,{children:["When a rule is executed the result of rules that have been executed is unknown and not taken into account.\nSimilar for rule that have not been executed yet: rules cannot influence other rules except when they are configured as the ",(0,t.jsx)(n.a,{href:"#parent-parameter",children:"parent"})," rule."]}),"\n",(0,t.jsx)(n.p,{children:"If the policy does not generate a queue name and no more rules are left the application will be rejected."}),"\n",(0,t.jsx)(n.p,{children:"Basic structure for the rule placement definition in the configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"placementrules:\n  - name: <name of the 1st rule>\n  - name: <name of the 2nd rule>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Each rule can take a predefined set of parameters in the configuration.\nThe name of the rules that can be used are given in the ",(0,t.jsx)(n.a,{href:"#rules",children:"rule"})," description.\nA rule name is not case sensitive in the configuration.\nRule name must follow the following naming convention:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"start with a letter: a-z or A-Z"}),"\n",(0,t.jsx)(n.li,{children:"followed by 0 or more characters a-z, A-Z, 0-9 or _"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A rule that is not known, i.e. the name does not map to the rules defined below, will cause a initialisation error of the placement manager.\nRules can also throw a parse error or an error during the initialisation if the parameters are incorrect.\nA rule set with an error can never become active."}),"\n",(0,t.jsx)(n.p,{children:"A placement manager is considered initialised if it has an active rule set.\nWhen the configuration is reloaded a new rule set will be created to replace the active rule set.\nIn the case that a new rule set loaded contains an error, i.e. is broken, the placement manager ignores the new rule set.\nThis means that the placement manager stays in a the state it was in when a broken rule set is loaded.\nIf the placement manager keeps using the existing active rule set in the case that it was already initialised.\nA message will be logged about the broken and ignored configuration."}),"\n",(0,t.jsxs)(n.p,{children:['Dots "." in the rule result are replaced by the string "_dot_".\nA dot is replaced because it is used as the hierarchy separator in the fully qualified queue name.\nReplacing the dot occurs before the full queue hierarchy is build and the result is qualified.\nThis means that we allow user name and or tag values to contain dots without the dots affecting the queue hierarchy.\nFor queues in the configuration that as an example must map to username with a dot you must specify them as follows:\nA user rule with the user ',(0,t.jsx)(n.code,{children:"user.name"})," will generate the queue name ",(0,t.jsx)(n.code,{children:"root.user_dot_name"}),' as output.\nIf that "user queue" must be added to the configuration the ',(0,t.jsx)(n.code,{children:"user_dot_name"})," name should be used."]}),"\n",(0,t.jsx)(n.h3,{id:"create-parameter",children:"Create parameter"}),"\n",(0,t.jsxs)(n.p,{children:["The create parameter is a boolean flag that defines if a queue that is generated by the rule may be created if it does not exist.\nThere is no guarantee that the queue will be created because the existing queues might prevent the queue creation.\nIf the queue generated by the rule does not exist and the flag is not set to ",(0,t.jsx)(n.em,{children:"true"})," the result of the rule will be a fail."]}),"\n",(0,t.jsxs)(n.p,{children:["Basic yaml entry for a rule with ",(0,t.jsx)(n.code,{children:"create"})," flag:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"placementrules:\n  - name: <name of the rule>\n    create: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The default value is ",(0,t.jsx)(n.em,{children:"false"}),".\nAllowed values: ",(0,t.jsx)(n.em,{children:"true"})," or ",(0,t.jsx)(n.em,{children:"false"}),", any other value will cause a parse error."]}),"\n",(0,t.jsx)(n.h3,{id:"parent-parameter",children:"Parent parameter"}),"\n",(0,t.jsxs)(n.p,{children:["The parent parameter allows specifying a rule that generates a parent queue for the current rule.\nParent rules can be nested, a parent rule ",(0,t.jsx)(n.em,{children:"may"})," contain another parent rule.\nThere is no enforced limit of parent rules that can be nested."]}),"\n",(0,t.jsxs)(n.p,{children:["A parent rule is treated as if it was a rule specified at the top level of the list and thus has the same parameters and requirements as a any other rule in the placement definition.\nThe exception is that using a parent rule on a rule that already generates a fully qualified queue is considered a configuration error.\nThis error can only occur on the rule of type ",(0,t.jsx)(n.a,{href:"#fixed-rule",children:"fixed"}),", see the rule specification for more details."]}),"\n",(0,t.jsx)(n.p,{children:"NOTE: the rule execution traverses down the list of parent rules and executes the last one in the list first.\nThis means that the last parent rule will generate the queue directly below the root.\nSee the examples for details."}),"\n",(0,t.jsxs)(n.p,{children:["Basic yaml entry for a rule with a ",(0,t.jsx)(n.code,{children:"parent"})," rule:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"placementrules:\n  - name: <name of the rule>\n    parent:\n      name: <name of the parent rule>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The default value is ",(0,t.jsx)(n.em,{children:"no"})," parent."]}),"\n",(0,t.jsx)(n.h3,{id:"filter-parameter",children:"Filter parameter"}),"\n",(0,t.jsx)(n.p,{children:"The filter on a rule allows filtering the users that the rule applies to.\nA filter is a complex configuration object."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"users"})," and ",(0,t.jsx)(n.em,{children:"groups"})," that can be configured can be one of two types:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a regular expression"}),"\n",(0,t.jsx)(n.li,{children:"a list of users or groups."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If the entry for users or groups contains more than 1 entry in the yaml it is always considered a list of either users or groups.\nDuplicate entries in the lists are ignored and do not cause an error.\nSpecifying a regular expression beside other list elements is not allowed."}),"\n",(0,t.jsx)(n.p,{children:"User and group names follow the standard linux user and group conventions.\nFor user names:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"start with a letter: a-z or A-Z"}),"\n",(0,t.jsx)(n.li,{children:"followed by 0 or more characters a-z, A-Z, 0-9 or _ . @ -"}),"\n",(0,t.jsx)(n.li,{children:"the last character may also be a $"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For group names:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"start with a letter: a-z or A-Z"}),"\n",(0,t.jsx)(n.li,{children:"followed by 0 or more characters a-z, A-Z, 0-9 or _ -"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If the list is exactly one entry it can be either a single user or group or a regular expression.\nWhen an entry contains a character that is not allowed in a user or group name the entry is considered a regular expression.\nThe regular expression must compile as specified.\nA regular expression that does not compile is ignored."}),"\n",(0,t.jsx)(n.p,{children:"Specifically for the group regular expression: matching is performed one group at a time not the against the list of groups."}),"\n",(0,t.jsxs)(n.p,{children:["Basic ",(0,t.jsx)(n.code,{children:"filter"})," yaml entry:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"filter:\n  type: deny\n  users:\n    - <user name or regexp>\n    - <user name>\n  groups:\n    - <group name or regexp>\n    - <group name>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The default value is ",(0,t.jsx)(n.em,{children:"no"})," filter."]}),"\n",(0,t.jsx)(n.h3,{id:"value-parameter",children:"Value parameter"}),"\n",(0,t.jsxs)(n.p,{children:["This is a generic value that can be used to pass to a rule to implement or alter its behaviour.\nThe value It is used by the ",(0,t.jsx)(n.a,{href:"#fixed-rule",children:"fixed"})," and the ",(0,t.jsx)(n.a,{href:"#tag-rule",children:"tag"})," rule.\nThe value is a single value in string form and is not interpreted or manipulated by the system."]}),"\n",(0,t.jsxs)(n.p,{children:["Basic yaml entry for a rule with a ",(0,t.jsx)(n.code,{children:"value"})," set:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'placementrules:\n  - name: <name of the rule>\n    value: "any string"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The default is ",(0,t.jsx)(n.em,{children:"no"})," value."]}),"\n",(0,t.jsx)(n.h2,{id:"access-control-list",children:"Access Control List"}),"\n",(0,t.jsx)(n.p,{children:"Access control lists are not defined in the rules but they impact the outcome of the placement policy.\nTwo access control lists can be defined on a queue:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Submit ACL: ",(0,t.jsx)(n.em,{children:"submitacl"})]}),"\n",(0,t.jsxs)(n.li,{children:["Administration ACL: ",(0,t.jsx)(n.em,{children:"adminacl"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The placement rule will only match if the ACL of the queue allows submit access via either ACL.\nThe administrative queue ACL also provides ",(0,t.jsx)(n.em,{children:"submit"})," access.\nIf the queue does not exist or does not have an ACL set, the ACL of the parent queue is checked.\nThis recursive check is repeated until an ACL provides access or after the ACL of the root queue is checked."]}),"\n",(0,t.jsxs)(n.p,{children:["For more detail on the ACL syntax check the ",(0,t.jsx)(n.a,{href:"/docs/1.0.0/user_guide/acls",children:"ACL documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,t.jsx)(n.h3,{id:"provided-rule",children:"Provided Rule"}),"\n",(0,t.jsxs)(n.p,{children:["Name to be used in the configuration: ",(0,t.jsx)(n.em,{children:"provided"})]}),"\n",(0,t.jsx)(n.p,{children:"Returns the queue provided during the submission of the application.\nThe behaviour of the this rule is to fully qualify the queue provided by the application if the queue is not fully qualified.\nIf a parent rule is set and the queue provided in the application submission is fully qualified then the parent rule will not be executed."}),"\n",(0,t.jsx)(n.p,{children:"Supported parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"create"}),"\n",(0,t.jsx)(n.li,{children:"parent"}),"\n",(0,t.jsx)(n.li,{children:"filter"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example: create the queue passed in by the user if it does not exist under the users name"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"placementrules:\n  - name: provided\n    create: true\n    parent:\n      name: user\n      create: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Application submit request by the user ",(0,t.jsx)(n.code,{children:"developer"}),", queue in the application on submit: ",(0,t.jsx)(n.code,{children:"my_special_queue"}),(0,t.jsx)("br",{}),"\nResult: ",(0,t.jsx)(n.code,{children:"root.developer.my_special_queue"})," (parent rule set the user name)"]}),"\n",(0,t.jsxs)(n.p,{children:["Application submit request by the user ",(0,t.jsx)(n.code,{children:"developer"}),", queue in the application on submit: ",(0,t.jsx)(n.code,{children:"root.dev_queue"}),(0,t.jsx)("br",{}),"\nResult: ",(0,t.jsx)(n.code,{children:"root.dev_queue"})," (parent rule ignored)"]}),"\n",(0,t.jsx)(n.h3,{id:"user-name-rule",children:"User Name Rule"}),"\n",(0,t.jsxs)(n.p,{children:["Name to be used in the configuration: ",(0,t.jsx)(n.em,{children:"user"})]}),"\n",(0,t.jsx)(n.p,{children:"Returns the queue based on the user name that is part of the submitted application."}),"\n",(0,t.jsx)(n.p,{children:"Supported parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"create"}),"\n",(0,t.jsx)(n.li,{children:"parent"}),"\n",(0,t.jsx)(n.li,{children:"filter"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example: submit to a queue based on the user name, do not create the queue if the queue does not exist:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"placementrules:\n  - name: user\n    create: false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Application submit request by the user ",(0,t.jsx)(n.code,{children:"finance.test"}),", queue does exist:",(0,t.jsx)("br",{}),"\nResult: ",(0,t.jsx)(n.code,{children:"root.finance_dot_test"})," (note the replacement of the dot)"]}),"\n",(0,t.jsxs)(n.p,{children:["Application submit request by the user ",(0,t.jsx)(n.code,{children:"developer"}),", queue does not exist:",(0,t.jsx)("br",{}),"\nResult: failed, next rule executed"]}),"\n",(0,t.jsx)(n.h3,{id:"fixed-rule",children:"Fixed Rule"}),"\n",(0,t.jsxs)(n.p,{children:["Name to be used in the configuration: ",(0,t.jsx)(n.em,{children:"fixed"})]}),"\n",(0,t.jsxs)(n.p,{children:["Returns the name configured in the rule parameter ",(0,t.jsx)(n.em,{children:"value"}),".\nThe value configured must be a legal queue name or queue hierarchy.\nThe name does not have to be a fully qualified queue name.\nThe hierarchy in the name uses a dot as a separator for the queue names at the different levels in the hierarchy.\nThe fixed rule can only fail if the queue configured does not exist and the create flag is not set as it will always return the configured queue."]}),"\n",(0,t.jsxs)(n.p,{children:["If the configured value is a fully qualified queue name configuring a parent rule will be considered an ",(0,t.jsx)(n.em,{children:"error"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Supported parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"value (required)"}),"\n",(0,t.jsx)(n.li,{children:"create"}),"\n",(0,t.jsx)(n.li,{children:"parent"}),"\n",(0,t.jsx)(n.li,{children:"filter"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Example: a fixed queue returned always, without the ",(0,t.jsx)(n.code,{children:"create"})," flag set and thus requires the queue to be defined as a leaf queue in the configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"placementrules:\n  - name: fixed\n    value: last_resort\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Application submit request by the user ",(0,t.jsx)(n.code,{children:"developer"}),", queue in the application on submit: ",(0,t.jsx)(n.code,{children:"my_special_queue"}),(0,t.jsx)("br",{}),"\nResult: ",(0,t.jsx)(n.code,{children:"root.last_resort"})]}),"\n",(0,t.jsx)(n.h3,{id:"tag-rule",children:"Tag Rule"}),"\n",(0,t.jsxs)(n.p,{children:["Name to be used in the configuration: ",(0,t.jsx)(n.em,{children:"tag"}),"\nRetrieves the queue name from the applications tags.\nThe tag name that is checked for its value is configured in the rule using the ",(0,t.jsx)(n.code,{children:"value"}),".\nConfiguring a tag rule without a ",(0,t.jsx)(n.code,{children:"value"})," set is an error, however an application does not have to have the tag set."]}),"\n",(0,t.jsx)(n.p,{children:"If the tag is not set on the application the rule fails.\nIf the tag value returned from the application is a fully qualified queue name the parent rule, if configured, will not be executed."}),"\n",(0,t.jsx)(n.p,{children:"Supported parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"value (required)"}),"\n",(0,t.jsx)(n.li,{children:"create"}),"\n",(0,t.jsx)(n.li,{children:"parent"}),"\n",(0,t.jsx)(n.li,{children:"filter"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Example: place an application based on the kubernetes ",(0,t.jsx)(n.code,{children:"namespace"})," which gets sets automatically in the application when submitted:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"placementrules:\n  - name: tag\n    value: namespace\n    create: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Application submit request for a kubernetes based application in the namespace ",(0,t.jsx)(n.code,{children:"default"})," by the user ",(0,t.jsx)(n.code,{children:"developer"}),", queue in the application on submit: ",(0,t.jsx)(n.code,{children:"my_special_queue"}),(0,t.jsx)("br",{}),"\nResult: ",(0,t.jsx)(n.code,{children:"root.default"})]}),"\n",(0,t.jsxs)(n.p,{children:["Application submit request for a kubernetes based application in the namespace ",(0,t.jsx)(n.code,{children:"testing"})," by the user ",(0,t.jsx)(n.code,{children:"developer"}),(0,t.jsx)("br",{}),"\nResult: ",(0,t.jsx)(n.code,{children:"root.testing"})]}),"\n",(0,t.jsxs)(n.p,{children:["Application submit request for a non kubernetes based application by the user ",(0,t.jsx)(n.code,{children:"developer"}),(0,t.jsx)("br",{}),"\nResult: failed, next rule executed"]}),"\n",(0,t.jsx)(n.h2,{id:"complex-examples",children:"Complex examples"}),"\n",(0,t.jsx)(n.p,{children:"In this complex example we chain three rules:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.code,{children:"user"})," rule, with a parent rule ",(0,t.jsx)(n.code,{children:"tag"}),' using the kubernetes namespace, to be used only for users that are part of and "dev" group.']}),"\n",(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.code,{children:"tag"})," rule using the kubernetes namespace, with a parent rule ",(0,t.jsx)(n.code,{children:"fixed"})," using the existing queue ",(0,t.jsx)(n.code,{children:"root.namespaces"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.code,{children:"fixed"})," rule to place everything that reaches this point in the ",(0,t.jsx)(n.code,{children:"root.default"})," queue."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"placementrules:\n  - name: user\n    create: true\n    filter:\n      type: allow\n      groups:\n        - dev*\n    parent:\n      - name: tag\n        value: namespace\n  - name: tag\n    value: namespace\n    create: true\n    parent:\n      - name: fixed\n        value: root.namespaces\n        filter:\n          type: allow\n          users:\n            - john\n  - name: fixed\n    value: root.default\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Application submit request for a kubernetes based application in the namespace ",(0,t.jsx)(n.code,{children:"testing"})," by the user ",(0,t.jsx)(n.code,{children:"john"}),(0,t.jsx)("br",{}),"\nResult: ",(0,t.jsx)(n.code,{children:"root.namespaces.testing"})," (matched in rule 2)"]}),"\n",(0,t.jsxs)(n.p,{children:["Application submit request for a kubernetes based application in the namespace ",(0,t.jsx)(n.code,{children:"newapp"})," by the user ",(0,t.jsx)(n.code,{children:"sarah"})," with groups membership ",(0,t.jsx)(n.code,{children:"sarah, test_app, dev_app"}),(0,t.jsx)("br",{}),"\nResult: ",(0,t.jsx)(n.code,{children:"root.newapp.sarah"})," (matched in rule 1)"]}),"\n",(0,t.jsxs)(n.p,{children:["Application submit request for a kubernetes based application in the namespace ",(0,t.jsx)(n.code,{children:"testapp"})," by the user ",(0,t.jsx)(n.code,{children:"bob"})," with groups membership ",(0,t.jsx)(n.code,{children:"bob"}),(0,t.jsx)("br",{}),"\nResult: ",(0,t.jsx)(n.code,{children:"root.deault"})," (matched in rule 3)"]}),"\n",(0,t.jsx)(n.p,{children:"In this second example we chain two rules:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.code,{children:"fixed"})," rule to place everything in the ",(0,t.jsx)(n.code,{children:"root.production"})," queue"]}),"\n",(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.code,{children:"user"})," rule, with the create flag set"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In this case however we have ACLs set up on the ",(0,t.jsx)(n.code,{children:"root.production"})," queue to only allow two specific user to use this queue.\nSo even if the rule matches unless the user is either ",(0,t.jsx)(n.code,{children:"john"})," or ",(0,t.jsx)(n.code,{children:"bob"})," the application will not be placed in the ",(0,t.jsx)(n.code,{children:"production"})," queue.\nAll other users will match the second rule and use their own queue, which is created if it does not exist."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"partitions:\n  - name: default\n    queues:\n      - name: production\n        submitacl: john,bob\n    placementrules:\n      - name: fixed\n        value: root.production\n      - name: user\n        create: true\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1780:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(79474);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);