"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21672],{58860:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>h});var a=t(37953);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),u=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=o,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||n;return t?a.createElement(h,s(s({ref:r},p),{},{components:t})):a.createElement(h,s({ref:r},p))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<n;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47808:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=t(72994),o=(t(37953),t(58860));const n={id:"prometheus",title:"Prometheus and Grafana"},s=void 0,l={unversionedId:"user_guide/prometheus",id:"user_guide/prometheus",title:"Prometheus and Grafana",description:"\x3c!--",source:"@site/docs/user_guide/prometheus.md",sourceDirName:"user_guide",slug:"/user_guide/prometheus",permalink:"/docs/next/user_guide/prometheus",draft:!1,tags:[],version:"current",frontMatter:{id:"prometheus",title:"Prometheus and Grafana"},sidebar:"docs",previous:{title:"Labels and Annotations in YuniKorn",permalink:"/docs/next/user_guide/labels_and_annotations_in_yunikorn"},next:{title:"Use Cases",permalink:"/docs/next/user_guide/use_cases"}},i={},u=[{value:"Run Prometheus locally",id:"run-prometheus-locally",level:2},{value:"1. Download Prometheus release",id:"1-download-prometheus-release",level:3},{value:"2. Configure prometheus.yml",id:"2-configure-prometheusyml",level:3},{value:"3. Start port-forward",id:"3-start-port-forward",level:3},{value:"4. Execute prometheus",id:"4-execute-prometheus",level:3},{value:"5. Access the Prometheus UI",id:"5-access-the-prometheus-ui",level:3},{value:"Deploy Prometheus and Grafana in a cluster.",id:"deploy-prometheus-and-grafana-in-a-cluster",level:2},{value:"1. Add Prometheus repository to helm",id:"1-add-prometheus-repository-to-helm",level:3},{value:"2. Configuring yunikorn for prometheus",id:"2-configuring-yunikorn-for-prometheus",level:3},{value:"3. Use helm to create Prometheus",id:"3-use-helm-to-create-prometheus",level:3},{value:"4. Access the Prometheus Web UI",id:"4-access-the-prometheus-web-ui",level:3},{value:"Access Grafana Dashboard",id:"access-grafana-dashboard",level:2},{value:"Download JSON files for Yunikorn Dashboard",id:"download-json-files-for-yunikorn-dashboard",level:3},{value:"Import the JSON files in the Dashboard",id:"import-the-json-files-in-the-dashboard",level:3}],p={toc:u},c="wrapper";function m(e){let{components:r,...n}=e;return(0,o.yg)(c,(0,a.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"YuniKorn exposes its scheduling metrics via Prometheus. Thus, we need to set up a Prometheus server to collect these metrics."),(0,o.yg)("p",null,"We will provide two methods for building Prometheus: either running it locally or using Helm to deploy it in your cluster. Additionally, in the Helm version, we will explain how to integrate it with Grafana and provide generic Grafana Dashboards for monitoring Yunikorn's metrics and observing the changes over time."),(0,o.yg)("p",null,"If you don't know what metric can be used, you can use ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/api/scheduler#metrics"},"REST API"),"."),(0,o.yg)("h2",{id:"run-prometheus-locally"},"Run Prometheus locally"),(0,o.yg)("h3",{id:"1-download-prometheus-release"},"1. Download Prometheus release"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/prometheus/prometheus/releases/download/v2.30.3/prometheus-2.30.3.linux-amd64.tar.gz\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"tar xvfz prometheus-*.tar.gz\ncd prometheus-*\n")),(0,o.yg)("h3",{id:"2-configure-prometheusyml"},"2. Configure prometheus.yml"),(0,o.yg)("p",null,"Prometheus collects metrics from\xa0",(0,o.yg)("em",{parentName:"p"},"targets"),"\xa0by scraping metrics HTTP endpoints."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['localhost:9080'] \n    # 9080 is internal port, need port forward or modify 9080 to service's port\n")),(0,o.yg)("h3",{id:"3-start-port-forward"},"3. Start port-forward"),(0,o.yg)("p",null,"Port forwarding for the core's web service on the standard port can be turned on via:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/yunikorn-service 9080:9080 -n yunikorn\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"9080"),"is the default port for core's web service. "),(0,o.yg)("h3",{id:"4-execute-prometheus"},"4. Execute prometheus"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"./prometheus --config.file=prometheus.yml\n")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"prometheus-cmd",src:t(506).A,width:"2560",height:"662"})),(0,o.yg)("h3",{id:"5-access-the-prometheus-ui"},"5. Access the Prometheus UI"),(0,o.yg)("p",null,"You should be able to browse to a status page at\xa0",(0,o.yg)("a",{parentName:"p",href:"http://localhost:9090/"},"localhost:9090"),". Give it a couple of seconds to collect data about itself from its own HTTP metrics endpoint."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"prometheus-web-ui",src:t(84857).A,width:"2560",height:"1418"})),(0,o.yg)("p",null,"You can also verify that Prometheus is serving metrics by navigating to its metrics endpoint:",(0,o.yg)("a",{parentName:"p",href:"http://localhost:9090/metrics"},"localhost:9090/metrics")),(0,o.yg)("h2",{id:"deploy-prometheus-and-grafana-in-a-cluster"},"Deploy Prometheus and Grafana in a cluster."),(0,o.yg)("h3",{id:"1-add-prometheus-repository-to-helm"},"1. Add Prometheus repository to helm"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"# add helm repo\nhelm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo update\n")),(0,o.yg)("h3",{id:"2-configuring-yunikorn-for-prometheus"},"2. Configuring yunikorn for prometheus"),(0,o.yg)("p",null,"Get the config from repository."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"helm show values prometheus-community/kube-prometheus-stack > /tmp/values.yaml\n")),(0,o.yg)("p",null,"Add a new job in Prometheus to collect metrics by scraping the metrics HTTP endpoints of the targets."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"vim /tmp/values.yaml\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'...\nadditionalScrapeConfigs:\n  - job_name: "yunikorn"\n    scrape_interval: 1s\n    metrics_path: \'/ws/v1/metrics\'\n    static_configs:\n      - targets: ["yunikorn-service.yunikorn.svc.cluster.local:9080"]\n...\n')),(0,o.yg)("h3",{id:"3-use-helm-to-create-prometheus"},"3. Use helm to create Prometheus"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"# create k8s namespace\nkubectl create namespace prometheus\n\n# deploy chart\nhelm install prometheus prometheus-community/kube-prometheus-stack -n prometheus -f /tmp/values.yaml\n")),(0,o.yg)("h3",{id:"4-access-the-prometheus-web-ui"},"4. Access the Prometheus Web UI"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"kubectl port-forward -n prometheus svc/prometheus-kube-prometheus-prometheus 9090:9090\n")),(0,o.yg)("p",null,"After running port-forward, you can enter ",(0,o.yg)("a",{parentName:"p",href:"http://localhost:9090"},"localhost:9090")," to access Prometheus Web UI."),(0,o.yg)("h2",{id:"access-grafana-dashboard"},"Access Grafana Dashboard"),(0,o.yg)("p",null,"Port forwarding for the Grafana web service on the standard port can be turned on via:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"kubectl port-forward -n prometheus svc/prometheus-grafana 7070:80\n")),(0,o.yg)("p",null,"After running port-forward, you can enter ",(0,o.yg)("a",{parentName:"p",href:"http://localhost:7070"},"localhost:7070")," to access grafana, and in the login page, enter account:",(0,o.yg)("inlineCode",{parentName:"p"},"admin")," ,password:",(0,o.yg)("inlineCode",{parentName:"p"},"prom-operator"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"grafana-login-page",src:t(67629).A,width:"2560",height:"1410"})),(0,o.yg)("h3",{id:"download-json-files-for-yunikorn-dashboard"},"Download JSON files for Yunikorn Dashboard"),(0,o.yg)("p",null,"A dashboard consists of multiple panels that are organized and arranged in rows. Each panel has the ability to interact with data from any Grafana data source that has been configured. For more detailed information, please refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/dashboards"},"Grafana Dashboards"),"."),(0,o.yg)("p",null,"We provide a sample dashboard JSON file. To access it, you can navigate to the ",(0,o.yg)("inlineCode",{parentName:"p"},"/deployments/grafana-dashboard")," directory in the Yunikorn-k8shim repository."),(0,o.yg)("p",null,"You can refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/api/scheduler#metrics"},"REST API")," to build your own custom Dashboard."),(0,o.yg)("h3",{id:"import-the-json-files-in-the-dashboard"},"Import the JSON files in the Dashboard"),(0,o.yg)("p",null,"Once you access the Dashboard page, you can proceed to import the provided JSON file."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"import_dashboard_01",src:t(5029).A,width:"2560",height:"1434"})),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"import_dashboard_02",src:t(51022).A,width:"2560",height:"1430"})),(0,o.yg)("p",null,"Once the import is complete, you will be able to locate Yunikorn's Dashboard on the page. From there, you can regularly monitor the status of Yunikorn."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"grafana_dashboard",src:t(8336).A,width:"1079",height:"1376"})))}m.isMDXComponent=!0},8336:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/grafana_dashboard-0befb519dda1c73efbd3bf308106f722.png"},67629:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/grafana_login_page-a1ded769d7575fa17b6acfd61f45a6f8.png"},5029:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/import_dashboard_01-8387f9f2ecc21d01579de036884e8b37.png"},51022:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/import_dashboard_02-26d463a674a2604bcceaed5047fa0715.png"},506:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/prometheus-cmd-e9648bf15688017326c8d89df9640099.png"},84857:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/prometheus-web-ui-19fc9b727de2706c897400faf4095815.png"}}]);