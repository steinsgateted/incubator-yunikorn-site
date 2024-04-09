"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23907],{58860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var i=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),g=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=g(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=g(t),u=a,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return t?i.createElement(h,r(r({ref:n},p),{},{components:t})):i.createElement(h,r({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var g=2;g<o;g++)r[g]=t[g];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92656:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(72994),a=(t(37953),t(58860));const o={id:"coding_guidelines",title:"Coding Guidelines"},r=void 0,l={type:"mdx",permalink:"/community/coding_guidelines",source:"@site/src/pages/community/coding_guidelines.md",title:"Coding Guidelines",description:"\x3c!--",frontMatter:{id:"coding_guidelines",title:"Coding Guidelines"}},s=[{value:"The basics",id:"the-basics",level:2},{value:"Automated checks",id:"automated-checks",level:2},{value:"Installing and running locally",id:"installing-and-running-locally",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Integration in pull requests",id:"integration-in-pull-requests",level:3},{value:"False positives",id:"false-positives",level:2},{value:"GoLand IDE setup",id:"goland-ide-setup",level:2},{value:"Editor preferences",id:"editor-preferences",level:3},{value:"Inspections",id:"inspections",level:3}],g={toc:s},p="wrapper";function c(e){let{components:n,...o}=e;return(0,a.yg)(p,(0,i.A)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"coding-guidelines"},"Coding Guidelines"),(0,a.yg)("h2",{id:"the-basics"},"The basics"),(0,a.yg)("p",null,"GO as a language provides a build in formatter for the code: ",(0,a.yg)("inlineCode",{parentName:"p"},"gofmt"),".\nThe project uses the predefined format as implemented in ",(0,a.yg)("inlineCode",{parentName:"p"},"gofmt"),".\nThat means tabs and not spaces etc.\nRead the ",(0,a.yg)("a",{parentName:"p",href:"https://golang.org/doc/effective_go.html"},"Effective GO")," page for further details.\nBefore creating a pull request make sure the code at least is formatted using ",(0,a.yg)("inlineCode",{parentName:"p"},"gofmt"),"."),(0,a.yg)("p",null,"Beside the effective GO guide follow the recommendations from the ",(0,a.yg)("a",{parentName:"p",href:"https://go.dev/wiki/CodeReviewComments"},"CodeReviewComments")," wiki page.\nThe wiki provides a good collection of comments from code reviews.\nMost of the comments will be checked in the automated checks described below."),(0,a.yg)("p",null,"When using an IDE, like GoLand or Visual Studio Code, use the builtin options.\nMost IDEs will provide an extensive list of checks or formatting options that help formatting and point out code issues.\nSee ",(0,a.yg)("a",{parentName:"p",href:"#goland-ide-setup"},"IDE setup")," for a basic setup for the GoLand IDE. "),(0,a.yg)("h2",{id:"automated-checks"},"Automated checks"),(0,a.yg)("p",null,"Not all code will be written using an IDE.\nEven between contributors the settings might not be the same in all installs.\nTo help keep code formatted consistently a ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lint_(software)"},"lint")," tool is part of the code approval.   "),(0,a.yg)("p",null,"There are a large number of lint tools are available for Go.\nMost of the lint tools only check one specific thing.\nSome of the tools will aggregate a number of linters and provide an overview of all the issues found.\nFor the project we have chosen the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/golangci/golangci-lint"},"golangci-lint")," tool.\nThe tool can be run locally and will be integrated into the GitHub PR flow."),(0,a.yg)("h3",{id:"installing-and-running-locally"},"Installing and running locally"),(0,a.yg)("p",null,"Depending on your development system the instructions might differ slightly.\nFollow the ",(0,a.yg)("a",{parentName:"p",href:"https://golangci-lint.run/usage/install/#local-installation"},"installation instructions")," provided by the project."),(0,a.yg)("p",null,"After the tool is installed you can run it using the standard command line: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"golangci-lint run\n")),(0,a.yg)("p",null,"The projects still generate a number of warnings.\nThe high impact warnings have been fixed or ignored via comments, see ",(0,a.yg)("a",{parentName:"p",href:"#false-positives"},"False positives"),"."),(0,a.yg)("p",null,"If you have been working on a new feature, or a bug fix you only want to check the files that have changed.\nYou can run the tool with the option ",(0,a.yg)("inlineCode",{parentName:"p"},"--new")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"--new-from-rev")," option.\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"--new")," option will only check uncommitted files.\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"--new-from-rev")," option will check changes against a specific committed revision."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# for uncommitted changes\ngolangci-lint run --new\n# for committed changes against a revision\ngolangci-lint run --new-from-rev=origin/master\n")),(0,a.yg)("p",null,"The make target is ",(0,a.yg)("inlineCode",{parentName:"p"},"lint"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"make lint\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"make")," integration checks two locations for the linter executable:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"$(go env GOPATH)/bin/")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"./bin/"))),(0,a.yg)("p",null,"The location for a standard installation is slightly different for a developer and CI install.\nBy checking both locations we can run locally and during our automated builds."),(0,a.yg)("p",null,"The make integration uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"--new-from-rev")," command line option.\nThe revision to check against is determined as part of the run to allow it to run on different branches and on pull requests during our CI build.\nA lint check is part of the standard CI build run for the project. "),(0,a.yg)("p",null,"See the golangci-lint product documentation for more options and information on how to run the tool."),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"A predefined configuration is provided for the two projects that use them:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-k8shim"},"YuniKorn k8shim"),", configuration file ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-k8shim/blob/master/.golangci.yml"},"golangci.yml"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-core"},"YuniKorn core"),", configuration file ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-core/blob/master/.golangci.yml"},"golangci.yml"),". ")),(0,a.yg)("p",null,"The web interface is a javascript project and the scheduler interface only has generated Go code and thus do not use it. "),(0,a.yg)("h3",{id:"integration-in-pull-requests"},"Integration in pull requests"),(0,a.yg)("p",null,"The planning is to integrate the ",(0,a.yg)("inlineCode",{parentName:"p"},"golangci-lint")," check into the GitHub PR flow. "),(0,a.yg)("h2",{id:"false-positives"},"False positives"),(0,a.yg)("p",null,"Tools are never 100% correct and neither is this one.\nCertain issue are too hard to correct or are not important enough to fix."),(0,a.yg)("p",null,"The tool allows adding a comment to the code to ignore the issue.\nThese comments should be used sparingly as they could hide issues.\nIf they are used they should be accompanied by a comment to explain why they are used."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'    var s1 = "ignored by all linters" //nolint\n    var s2 = "ignored by the linter unused" //nolint:unused\n')),(0,a.yg)("p",null,"Using the ",(0,a.yg)("inlineCode",{parentName:"p"},"nolint")," comment without a specific linter is discouraged.  "),(0,a.yg)("h2",{id:"goland-ide-setup"},"GoLand IDE setup"),(0,a.yg)("p",null,"GoLand has a number of checks turned on by default.\nThese defaults already provide a good coverage and mark a lot of issues found by the linters as issues.\nTo extend the coverage further and help mark issues proactively check the following settings and change them to the settings as per the screenshots."),(0,a.yg)("h3",{id:"editor-preferences"},"Editor preferences"),(0,a.yg)("p",null,"Open the preferences pane and go to: Editor -> Code Style -> Go.\nThere are three tabs to configure, the first two are crucial to comply with the basic rules from ",(0,a.yg)("inlineCode",{parentName:"p"},"gofmt")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"goimports"),":"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Tabs"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{alt:"tabs",src:t(89925).A,width:"605",height:"328"}))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Imports"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{alt:"imports",src:t(67275).A,width:"601",height:"438"}))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Other"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{alt:"other",src:t(59383).A,width:"684",height:"387"}))))),(0,a.yg)("p",null,"The imports as configured above should create 3 groups of imports in a file when they are used:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"standard library imports"),(0,a.yg)("li",{parentName:"ol"},"third-party imports"),(0,a.yg)("li",{parentName:"ol"},"YuniKorn internal imports")),(0,a.yg)("p",null,"In the file it will give you an import that looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"import (\n  // standard libraries\n\n  // third-party\n\n  // YuniKorn project imports\n)\n")),(0,a.yg)("h3",{id:"inspections"},"Inspections"),(0,a.yg)("p",null,"The default inspections can be used except for one that helps highlight shadowing variables.\nShadowing can cause difficult to trace and obscure bugs in the code and should be prevented whenever possible. "),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"inspections",src:t(50868).A,width:"930",height:"552"})))}c.isMDXComponent=!0},67275:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/goland_ide_pref_imports-853b75298463f39a6cdffb70a1228a5e.png"},50868:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/goland_ide_pref_inspections-808d7022dc77eb23848adcea32557746.png"},59383:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/goland_ide_pref_other-f4969d5ecf1ad8a61e727cf4b93164e1.png"},89925:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/goland_ide_pref_tabs-35f887a9c67980c3a703b2463d869dba.png"}}]);