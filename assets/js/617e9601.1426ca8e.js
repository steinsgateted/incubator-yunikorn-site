"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61980],{58860:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var r=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,g=d["".concat(u,".").concat(h)]||d[h]||c[h]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},32839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(72994),a=(t(37953),t(58860));const i={id:"build",title:"Build and Run"},o=void 0,l={unversionedId:"developer_guide/build",id:"version-1.5.0/developer_guide/build",title:"Build and Run",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/developer_guide/build.md",sourceDirName:"developer_guide",slug:"/developer_guide/build",permalink:"/docs/developer_guide/build",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"build",title:"Build and Run"},sidebar:"docs",previous:{title:"Dev Environment Setup",permalink:"/docs/developer_guide/env_setup"},next:{title:"Go module updates",permalink:"/docs/developer_guide/dependencies"}},u={},p=[{value:"Dev Environment setup",id:"dev-environment-setup",level:2},{value:"Build YuniKorn",id:"build-yunikorn",level:2},{value:"Build Docker images",id:"build-docker-images",level:3},{value:"Inspect Docker images",id:"inspect-docker-images",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Affected repositories",id:"affected-repositories",level:4},{value:"Making local changes",id:"making-local-changes",level:4},{value:"Updating dependencies",id:"updating-dependencies",level:4},{value:"Build the Web UI",id:"build-the-web-ui",level:2},{value:"Run YuniKorn locally",id:"run-yunikorn-locally",level:2},{value:"Run end-to-end tests",id:"run-end-to-end-tests",level:2}],s={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"YuniKorn always works with a container orchestrator system. Currently, a\nKubernetes shim (",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim"},"yunikorn-k8shim"),")\nis provided which provides a drop-in scheduler for the Kubernetes platform.\nThis document describes how to setup and use a local development environment."),(0,a.yg)("h2",{id:"dev-environment-setup"},"Dev Environment setup"),(0,a.yg)("p",null,"Read the ",(0,a.yg)("a",{parentName:"p",href:"/docs/developer_guide/env_setup"},"Dev Environment Setup")," guide first to\nsetup Docker and Kubernetes development environment."),(0,a.yg)("h2",{id:"build-yunikorn"},"Build YuniKorn"),(0,a.yg)("p",null,"Prerequisites:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Golang: check the ",(0,a.yg)("inlineCode",{parentName:"li"},".go_version")," file in the root of the repositories for the\nversion Yunikorn requires. The minimum version can change per release branch.\nUsing earlier Go versions will cause compilation issues. ")),(0,a.yg)("p",null,"You can build the scheduler for Kubernetes from the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim"},"yunikorn-k8shim"),"\nproject. The build procedure will build all components into a single executable\nthat can be deployed and running on Kubernetes."),(0,a.yg)("p",null,"Start the integrated build process by pulling the ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-k8shim")," repository:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir $HOME/yunikorn/\ncd $HOME/yunikorn/\ngit clone https://github.com/apache/yunikorn-k8shim.git\n")),(0,a.yg)("p",null,"At this point you have an environment that will allow you to build an\nintegrated image for the YuniKorn scheduler."),(0,a.yg)("h3",{id:"build-docker-images"},"Build Docker images"),(0,a.yg)("p",null,"Building the Docker images can be triggered by following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"make image\n")),(0,a.yg)("p",null,"This will generate images for the scheduler, scheduler plugin, and admission\ncontroller."),(0,a.yg)("p",null,"The images created can be deployed directly on Kubernetes.\nSome sample deployments that can be used are found under the\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/scheduler"},"deployments/scheduler"),"\ndirectory of the ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-k8shim")," repository. Alternatively, the Helm charts\nlocated within the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/tree/master/helm-charts"},"helm-charts"),"\ndirectory of the ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-release")," repository may be used. These match what is used\nfor release builds."),(0,a.yg)("p",null,"The configuration of YuniKorn can be customized via a ConfigMap as explained  in the\n",(0,a.yg)("a",{parentName:"p",href:"/docs/developer_guide/deployment"},"scheduler configuration deployment")," document."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"make image")," build command will first build the integrated executables and\nthen create the docker images. If you want to use pre-built images based on an\noffical release, please check the ",(0,a.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/yunikorn"},"Docker Hub repo"),"."),(0,a.yg)("p",null,"The default image tags are not suitable for deployments to a private\nrepository as these would attempt to push to Docker Hub without proper\ncredentials. You ",(0,a.yg)("em",{parentName:"p"},"must")," update the ",(0,a.yg)("inlineCode",{parentName:"p"},"REGISTRY")," variable in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Makefile")," to\npush to an accessible repository. When you update the image tag be aware that\nthe deployment examples given will also need to be updated to reflect the same\nchange."),(0,a.yg)("h3",{id:"inspect-docker-images"},"Inspect Docker images"),(0,a.yg)("p",null,"The Docker images built from previous step have embedded some important build\ninfo in the image metadata. You can retrieve this information with docker\n",(0,a.yg)("inlineCode",{parentName:"p"},"inspect")," command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker inspect apache/yunikorn:scheduler-amd64-latest\ndocker inspect apache/yunikorn:scheduler-plugin-amd64-latest\ndocker inspect apache/yunikorn:admission-controller-amd64-latest\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"amd64")," tag is dependent on your host architecture (i.e. for Intel it would\nbe ",(0,a.yg)("inlineCode",{parentName:"p"},"amd64")," and for Mac M1, it would be ",(0,a.yg)("inlineCode",{parentName:"p"},"arm64"),")."),(0,a.yg)("p",null,"This info includes git revisions (last commit SHA) for each component, to help\nyou understand which version of the source code was shipped by this image. They\nare listed as docker image ",(0,a.yg)("inlineCode",{parentName:"p"},"labels"),", such as"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"Labels": {\n    "BuildTimeStamp": "2019-07-16T23:08:06+0800",\n    "Version": "0.1",\n    "yunikorn-core-revision": "dca66c7e5a9e",\n    "yunikorn-k8shim-revision": "bed60f720b28",\n    "yunikorn-scheduler-interface-revision": "3df392eded1f"\n}\n')),(0,a.yg)("h3",{id:"dependencies"},"Dependencies"),(0,a.yg)("p",null,"The dependencies in the projects are managed using\n",(0,a.yg)("a",{parentName:"p",href:"https://blog.golang.org/using-go-modules"},"go modules"),"."),(0,a.yg)("p",null,"If you want to modify one of the projects locally and build with your local\ndependencies you will need to change the module file.  Changing dependencies\nrequires using ",(0,a.yg)("inlineCode",{parentName:"p"},"go.mod")," ",(0,a.yg)("inlineCode",{parentName:"p"},"replace")," directives as explained in the\n",(0,a.yg)("a",{parentName:"p",href:"#updating-dependencies"},"Update dependencies")," section."),(0,a.yg)("p",null,"The YuniKorn project has four code repositories:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-scheduler-interface"},"yunikorn-scheduler-interface"),"\n(protobuf interface between core and shim)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-core"},"yunikorn-core"),"\n(core scheduler logic)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-k8shim"},"yunikorn-k8shim"),"\n(Kubernetes-specific shim)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-web"},"yunikorn-web"),"\n(YuniKorn Web UI)")),(0,a.yg)("p",null,"Each of these dependencies is a Go module and there are dependencies between\nthem. During the development cycle it can be required to break the dependency\non the committed version from github. This requires making changes in the module\nfile to allow loading a local copy or a forked copy from a different repository.  "),(0,a.yg)("p",null,"Additionally, there are two additional auxiliary repositories:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-release"},"yunikorn-release"),"\n(release management scripts and official Helm charts)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-site"},"yunikorn-site"),"\n(source of the yunikorn.apache.org web site)")),(0,a.yg)("h4",{id:"affected-repositories"},"Affected repositories"),(0,a.yg)("p",null,"The following dependencies exist between the repositories:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Repository"),(0,a.yg)("th",{parentName:"tr",align:null},"Depends on"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-core"),(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-k8shim"),(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface, yunikorn-core")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface"),(0,a.yg)("td",{parentName:"tr",align:null},"none")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-web"),(0,a.yg)("td",{parentName:"tr",align:null},"none")))),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-web")," repository has no direct go dependency on the other\nrepositories. However any change to the ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-core")," web services can affect\nthe web interface. "),(0,a.yg)("h4",{id:"making-local-changes"},"Making local changes"),(0,a.yg)("p",null,"To make sure that the local changes will not break other parts of the\nbuild you should run:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A full build ",(0,a.yg)("inlineCode",{parentName:"li"},"make")," (build target depends on the repository)"),(0,a.yg)("li",{parentName:"ul"},"A full unit test run ",(0,a.yg)("inlineCode",{parentName:"li"},"make test"))),(0,a.yg)("p",null,"Any test failures should be fixed before proceeding."),(0,a.yg)("h4",{id:"updating-dependencies"},"Updating dependencies"),(0,a.yg)("p",null,"The simplest way is to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"replace")," directive in the module file.\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"replace")," directive allows you to override the import path with a new\n(local) path. There is no need to change any of the imports in the source code.\nThe change must be made in the ",(0,a.yg)("inlineCode",{parentName:"p"},"go.mod")," file of the repository that has the\ndependency. "),(0,a.yg)("p",null,"Using ",(0,a.yg)("inlineCode",{parentName:"p"},"replace")," to use of a forked dependency, such as:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"replace github.com/apache/yunikorn-core => example.com/some/forked-yunikorn\n")),(0,a.yg)("p",null,"There is no requirement to fork and create a new repository. If you do not have\na repository you can use a local checked out copy too. "),(0,a.yg)("p",null,"Using ",(0,a.yg)("inlineCode",{parentName:"p"},"replace")," to use of a local directory as a dependency:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"replace github.com/apache/yunikorn-core => /User/example/local/checked-out-yunikorn\n")),(0,a.yg)("p",null,"For the same dependency using a relative path:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"replace github.com/apache/yunikorn-core => ../checked-out-yunikorn\n")),(0,a.yg)("p",null,"Note: if the ",(0,a.yg)("inlineCode",{parentName:"p"},"replace")," directive is using a local filesystem path, then the target\nmust have a ",(0,a.yg)("inlineCode",{parentName:"p"},"go.mod")," file at that location."),(0,a.yg)("p",null,"Further details can be found on the Go Wiki:\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules#when-should-i-use-the-replace-directive"},"When should I use the 'replace' directive?")),(0,a.yg)("h2",{id:"build-the-web-ui"},"Build the Web UI"),(0,a.yg)("p",null,"Example deployments reference the\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-web"},"YuniKorn Web UI"),". The ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-web"),"\nproject has specific requirements for the build. Follow the steps in the\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-web/blob/master/README.md"},"README")," to prepare\na development environment and build the Web UI. However, the scheduler is fully\nfunctional without the Web UI."),(0,a.yg)("h2",{id:"run-yunikorn-locally"},"Run YuniKorn locally"),(0,a.yg)("p",null,"When you have a local development environment setup you can run the scheduler\nin your local Kubernetes environment. This has been tested in a desktop\nenviornment with Docker Desktop, Minikube, and Kind. See the\n",(0,a.yg)("a",{parentName:"p",href:"/docs/developer_guide/env_setup"},"Dev Environment Setup")," guide for further details."),(0,a.yg)("p",null,"To run a local instance of the scheduler:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"make run\n")),(0,a.yg)("p",null,"This will launch a local scheduler and connect to the Kubernetes cluster\nreferenced in your ",(0,a.yg)("inlineCode",{parentName:"p"},"KUBECONFIG")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"."),(0,a.yg)("p",null,"To run YuniKorn in Kubernetes scheduler plugin mode instead, execute:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"make run_plugin\n")),(0,a.yg)("p",null,"You can also use the same approach to run the scheduler locally but connecting\nto a remote kubernetes cluster, as long as the ",(0,a.yg)("inlineCode",{parentName:"p"},"$HOME/.kube/config")," file\nis pointing to that remote cluster."),(0,a.yg)("h2",{id:"run-end-to-end-tests"},"Run end-to-end tests"),(0,a.yg)("p",null,"In addition to the unit tests for each project, YuniKorn contains many e2e\n(end-to-end) tests in the ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-k8shim")," repository which validate\nfunctionaliy of the scheduler on a functioning Kubernetes cluster."),(0,a.yg)("p",null,"How to run the tests locally is described\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/test/e2e/README.md"},"here"),"."))}c.isMDXComponent=!0}}]);