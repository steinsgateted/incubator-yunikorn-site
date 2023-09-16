"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92465],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"build",title:"Build and Run"},u=void 0,d={unversionedId:"developer_guide/build",id:"developer_guide/build",title:"Build and Run",description:"\x3c!--",source:"@site/docs/developer_guide/build.md",sourceDirName:"developer_guide",slug:"/developer_guide/build",permalink:"/docs/next/developer_guide/build",draft:!1,tags:[],version:"current",frontMatter:{id:"build",title:"Build and Run"},sidebar:"docs",previous:{title:"Dev Environment Setup",permalink:"/docs/next/developer_guide/env_setup"},next:{title:"Go module updates",permalink:"/docs/next/developer_guide/dependencies"}},s={},p=[{value:"Development Environment setup",id:"development-environment-setup",level:2},{value:"Build YuniKorn for Kubernetes",id:"build-yunikorn-for-kubernetes",level:2},{value:"A note on Go modules and git version",id:"a-note-on-go-modules-and-git-version",level:3},{value:"Build Docker image",id:"build-docker-image",level:3},{value:"Inspect the docker image",id:"inspect-the-docker-image",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Affected repositories",id:"affected-repositories",level:4},{value:"Making local changes",id:"making-local-changes",level:4},{value:"Updating dependencies",id:"updating-dependencies",level:4},{value:"Build the web UI",id:"build-the-web-ui",level:2},{value:"Locally run the integrated scheduler",id:"locally-run-the-integrated-scheduler",level:2},{value:"Verify external interface changes with e2e tests",id:"verify-external-interface-changes-with-e2e-tests",level:2}],c={toc:p},h="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"YuniKorn always works with a container orchestrator system. Currently, a Kubernetes shim ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim"},"yunikorn-k8shim"),"\nis provided in our repositories, you can leverage it to develop YuniKorn scheduling features and integrate with Kubernetes.\nThis document describes resources how to setup dev environment and how to do the development."),(0,o.kt)("h2",{id:"development-environment-setup"},"Development Environment setup"),(0,o.kt)("p",null,"Read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/developer_guide/env_setup"},"environment setup guide")," first to setup Docker and Kubernetes development environment."),(0,o.kt)("h2",{id:"build-yunikorn-for-kubernetes"},"Build YuniKorn for Kubernetes"),(0,o.kt)("p",null,"Prerequisite:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Golang: check the ",(0,o.kt)("inlineCode",{parentName:"li"},".go_version")," file in the root of the repositories for the version Yunikorn requires. The minimum version can change per release branch.  Earlier Go versions might cause compilation issues. ")),(0,o.kt)("p",null,"You can build the scheduler for Kubernetes from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim"},"yunikorn-k8shim")," project.\nThe build procedure will build all components into a single executable that can be deployed and running on Kubernetes."),(0,o.kt)("p",null,"Start the integrated build process by pulling the ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn-k8shim")," repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir $HOME/yunikorn/\ncd $HOME/yunikorn/\ngit clone https://github.com/apache/yunikorn-k8shim.git\n")),(0,o.kt)("p",null,"At this point you have an environment that will allow you to build an integrated image for the YuniKorn scheduler."),(0,o.kt)("h3",{id:"a-note-on-go-modules-and-git-version"},"A note on Go modules and git version"),(0,o.kt)("p",null,"Go use git to fetch module information.\nCertain modules cannot be retrieved if the git version installed on the machine used to build is old.\nA message similar to the one below will be logged when trying to build for the first time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"go: finding modernc.org/mathutil@v1.0.0\ngo: modernc.org/golex@v1.0.0: git fetch -f origin refs/heads/*:refs/heads/* refs/tags/*:refs/tags/* in <location>: exit status 128:\n    error: RPC failed; result=22, HTTP code = 404\n    fatal: The remote end hung up unexpectedly\n")),(0,o.kt)("p",null,"Update git to a recent version to fix this issue.\nGit releases later than 1.22 are known to work."),(0,o.kt)("h3",{id:"build-docker-image"},"Build Docker image"),(0,o.kt)("p",null,"Building a docker image can be triggered by following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make image\n")),(0,o.kt)("p",null,"The image with the build in configuration can be deployed directly on kubernetes.\nSome sample deployments that can be used are found under ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/scheduler"},"deployments")," directory.\nFor the deployment that uses a config map you need to set up the ConfigMap in kubernetes.\nHow to deploy the scheduler with a ConfigMap is explained in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/developer_guide/deployment"},"scheduler configuration deployment")," document."),(0,o.kt)("p",null,"The image build command will first build the integrated executable and then create the docker image.\nIf you want to use pre-built images based on a release, please check the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/yunikorn"},"Docker Hub repo"),"."),(0,o.kt)("p",null,"The default image tags are not suitable for deployments to an accessible repository as it uses a hardcoded user and would push to Docker Hub with proper credentials.\nYou ",(0,o.kt)("em",{parentName:"p"},"must")," update the ",(0,o.kt)("inlineCode",{parentName:"p"},"TAG")," variable in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," to push to an accessible repository.\nWhen you update the image tag be aware that the deployment examples given will also need to be updated to reflect the same change."),(0,o.kt)("h3",{id:"inspect-the-docker-image"},"Inspect the docker image"),(0,o.kt)("p",null,"The docker image built from previous step has embedded some important build info in image's metadata. You can retrieve\nthese info with docker ",(0,o.kt)("inlineCode",{parentName:"p"},"inspect")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker inspect apache/yunikorn:scheduler-amd64-latest\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"amd64")," tag is dependent on your host architecture (i.e. for Intel it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"amd64")," and for Mac M1, it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"arm64v8"),")."),(0,o.kt)("p",null,"This info includes git revisions (last commit SHA) for each component, to help you understand which version of the source code\nwas shipped by this image. They are listed as docker image ",(0,o.kt)("inlineCode",{parentName:"p"},"labels"),", such as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Labels": {\n    "BuildTimeStamp": "2019-07-16T23:08:06+0800",\n    "Version": "0.1",\n    "yunikorn-core-revision": "dca66c7e5a9e",\n    "yunikorn-k8shim-revision": "bed60f720b28",\n    "yunikorn-scheduler-interface-revision": "3df392eded1f"\n}\n')),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"The dependencies in the projects are managed using ",(0,o.kt)("a",{parentName:"p",href:"https://blog.golang.org/using-go-modules"},"go modules"),".\nGo Modules require at least Go version 1.11 to be installed on the development system."),(0,o.kt)("p",null,"If you want to modify one of the projects locally and build with your local dependencies you will need to change the module file.\nChanging dependencies uses mod ",(0,o.kt)("inlineCode",{parentName:"p"},"replace")," directives as explained in the ",(0,o.kt)("a",{parentName:"p",href:"#updating-dependencies"},"Update dependencies"),"."),(0,o.kt)("p",null,"The YuniKorn project has four repositories three of those repositories have a dependency at the go level.\nThese dependencies are part of the go modules and point to the github repositories.\nDuring the development cycle it can be required to break the dependency on the committed version from github.\nThis requires making changes in the module file to allow loading a local copy or a forked copy from a different repository.  "),(0,o.kt)("h4",{id:"affected-repositories"},"Affected repositories"),(0,o.kt)("p",null,"The following dependencies exist between the repositories:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"repository"),(0,o.kt)("th",{parentName:"tr",align:null},"depends on"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn-core"),(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn-k8shim"),(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface, yunikorn-core")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface"),(0,o.kt)("td",{parentName:"tr",align:null},"none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn-web"),(0,o.kt)("td",{parentName:"tr",align:null},"yunikorn-core")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn-web")," repository has no direct go dependency on the other repositories. However any change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn-core")," webservices can affect the web interface. "),(0,o.kt)("h4",{id:"making-local-changes"},"Making local changes"),(0,o.kt)("p",null,"To make sure that the local changes will not break other parts of the build you should run:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A full build ",(0,o.kt)("inlineCode",{parentName:"li"},"make")," (build target depends on the repository)"),(0,o.kt)("li",{parentName:"ul"},"A full unit test run ",(0,o.kt)("inlineCode",{parentName:"li"},"make test"))),(0,o.kt)("p",null,"Any test failures should be fixed before proceeding."),(0,o.kt)("h4",{id:"updating-dependencies"},"Updating dependencies"),(0,o.kt)("p",null,"The simplest way is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"replace")," directive in the module file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"replace")," directive allows you to override the import path with a new (local) path.\nThere is no need to change any of the imports in the source code. The change must be made in the ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod")," file of the repository that has the dependency. "),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"replace")," to use of a forked dependency, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"replace github.com/apache/yunikorn-core => example.com/some/forked-yunikorn\n")),(0,o.kt)("p",null,"There is no requirement to fork and create a new repository. If you do not have a repository you can use a local checked out copy too.\nUsing ",(0,o.kt)("inlineCode",{parentName:"p"},"replace")," to use of a local directory as a dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"replace github.com/apache/yunikorn-core => /User/example/local/checked-out-yunikorn\n")),(0,o.kt)("p",null,"and for the same dependency using a relative path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"replace github.com/apache/yunikorn-core => ../checked-out-yunikorn\n")),(0,o.kt)("p",null,"Note: if the ",(0,o.kt)("inlineCode",{parentName:"p"},"replace")," directive is using a local filesystem path, then the target must have the ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod")," file at that location."),(0,o.kt)("p",null,"Further details on the modules' wiki: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules#when-should-i-use-the-replace-directive"},"When should I use the 'replace' directive?"),"."),(0,o.kt)("h2",{id:"build-the-web-ui"},"Build the web UI"),(0,o.kt)("p",null,"Example deployments reference the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-web"},"YuniKorn web UI"),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn-web")," project has specific requirements for the build. Follow the steps in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-web/blob/master/README.md"},"README")," to prepare a development environment and build the web UI. However, the scheduler is fully functional without the web UI. "),(0,o.kt)("h2",{id:"locally-run-the-integrated-scheduler"},"Locally run the integrated scheduler"),(0,o.kt)("p",null,"When you have a local development environment setup you can run the scheduler in your local Kubernetes environment.\nThis has been tested in a desktop enviornment with Docker Desktop, Minikube, and Kind. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/developer_guide/env_setup"},"environment setup guide")," for further details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make run\n")),(0,o.kt)("p",null,"It will connect with the kubernetes cluster using the users configured configuration located in ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"."),(0,o.kt)("p",null,"To run YuniKorn in Kubernetes scheduler plugin mode instead, execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make run_plugin\n")),(0,o.kt)("p",null,"You can also use the same approach to run the scheduler locally but connecting to a remote kubernetes cluster,\nas long as the ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config")," file is pointing to that remote cluster."),(0,o.kt)("h2",{id:"verify-external-interface-changes-with-e2e-tests"},"Verify external interface changes with e2e tests"),(0,o.kt)("p",null,"Yunikorn has an external REST interface which is validated by end-to-end tests. However, the tests exist in the k8shim repository.\nWhenever a change is made to the external interface, make sure that it is validated by running e2e tests or adjust the test cases accordingly."),(0,o.kt)("p",null,"How to run the tests locally is described ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/test/e2e/README.md"},"here"),"."))}m.isMDXComponent=!0}}]);