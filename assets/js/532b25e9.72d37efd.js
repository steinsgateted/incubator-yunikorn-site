"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62242],{91097:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=o(13274),t=o(1780);const s={id:"run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",keywords:["tensorflow"]},i=void 0,a={id:"user_guide/workloads/run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",source:"@site/versioned_docs/version-1.5.0/user_guide/workloads/run_tensorflow.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_tf",permalink:"/docs/1.5.0/user_guide/workloads/run_tf",draft:!1,unlisted:!1,tags:[],version:"1.5.0",frontMatter:{id:"run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",keywords:["tensorflow"]},sidebar:"docs",previous:{title:"Run Flink Jobs",permalink:"/docs/1.5.0/user_guide/workloads/run_flink"},next:{title:"Run MPI Jobs",permalink:"/docs/1.5.0/user_guide/workloads/run_mpi"}},l={},c=[{value:"Install training-operator",id:"install-training-operator",level:2},{value:"Prepare the docker image",id:"prepare-the-docker-image",level:2},{value:"Run a TensorFlow job",id:"run-a-tensorflow-job",level:2},{value:"Run a TensorFlow job with GPU scheduling",id:"run-a-tensorflow-job-with-gpu-scheduling",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This guide gives an overview of how to set up ",(0,r.jsx)(n.a,{href:"https://github.com/kubeflow/training-operator",children:"training-operator"}),"\nand how to run a Tensorflow job with YuniKorn scheduler. The training-operator is a unified training operator maintained by\nKubeflow. It not only supports TensorFlow but also PyTorch, XGboots, etc."]}),"\n",(0,r.jsx)(n.h2,{id:"install-training-operator",children:"Install training-operator"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the following command to install training operator in kubeflow namespace by default. If you have problems with installation,\nplease refer to ",(0,r.jsx)(n.a,{href:"https://github.com/kubeflow/training-operator#installation",children:"this doc"})," for details."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'kubectl apply -k "github.com/kubeflow/training-operator/manifests/overlays/standalone?ref=v1.3.0"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"prepare-the-docker-image",children:"Prepare the docker image"}),"\n",(0,r.jsx)(n.p,{children:"Before you start running a TensorFlow job on Kubernetes, you'll need to build the docker image."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Download files from ",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/examples/tfjob",children:"deployment/examples/tfjob"})]}),"\n",(0,r.jsx)(n.li,{children:"To build this docker image with the following command"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker build -f Dockerfile -t kubeflow/tf-dist-mnist-test:1.0 .\n"})}),"\n",(0,r.jsx)(n.h2,{id:"run-a-tensorflow-job",children:"Run a TensorFlow job"}),"\n",(0,r.jsxs)(n.p,{children:["Here is a TFJob yaml for MNIST ",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/examples/tfjob/tf-job-mnist.yaml",children:"example"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: kubeflow.org/v1\nkind: TFJob\nmetadata:\n  name: dist-mnist-for-e2e-test\n  namespace: kubeflow\nspec:\n  tfReplicaSpecs:\n    PS:\n      replicas: 2\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n    Worker:\n      replicas: 4\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n'})}),"\n",(0,r.jsx)(n.p,{children:"Create the TFJob"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl create -f deployments/examples/tfjob/tf-job-mnist.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can view the job info from YuniKorn UI. If you do not know how to access the YuniKorn UI,\nplease read the document ",(0,r.jsx)(n.a,{href:"/docs/1.5.0/#access-the-web-ui",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"tf-job-on-ui",src:o(83280).A+"",width:"2442",height:"1308"})}),"\n",(0,r.jsx)(n.h2,{id:"run-a-tensorflow-job-with-gpu-scheduling",children:"Run a TensorFlow job with GPU scheduling"}),"\n",(0,r.jsxs)(n.p,{children:["To use Time-Slicing GPU your cluster must be configured to use ",(0,r.jsx)(n.a,{href:"https://yunikorn.apache.org/docs/next/user_guide/workloads/run_nvidia",children:"GPUs and Time-Slicing GPUs"}),"\nThis section covers a workload test scenario to validate TFJob with Time-slicing GPU."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"Verify that the time-slicing configuration is applied successfully"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl describe node\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Capacity:\n  nvidia.com/gpu:     8\n...\nAllocatable:\n  nvidia.com/gpu:     8\n...\n"})})]}),"\n",(0,r.jsxs)(n.p,{children:["Create a workload test file ",(0,r.jsx)(n.code,{children:"tf-gpu.yaml"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# tf-gpu.yaml\napiVersion: "kubeflow.org/v1"\nkind: "TFJob"\nmetadata:\n  name: "tf-smoke-gpu"\n  namespace: kubeflow\nspec:\n  tfReplicaSpecs:\n    PS:\n      replicas: 1\n      template:\n        metadata:\n          creationTimestamp: \n          labels:\n            applicationId: "tf_job_20200521_001"\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - args:\n                - python\n                - tf_cnn_benchmarks.py\n                - --batch_size=32\n                - --model=resnet50\n                - --variable_update=parameter_server\n                - --flush_stdout=true\n                - --num_gpus=1\n                - --local_parameter_device=cpu\n                - --device=cpu\n                - --data_format=NHWC\n              image: docker.io/kubeflow/tf-benchmarks-cpu:v20171202-bdab599-dirty-284af3\n              name: tensorflow\n              ports:\n                - containerPort: 2222\n                  name: tfjob-port\n              workingDir: /opt/tf-benchmarks/scripts/tf_cnn_benchmarks\n          restartPolicy: OnFailure\n    Worker:\n      replicas: 1\n      template:\n        metadata:\n          creationTimestamp: null\n          labels:\n            applicationId: "tf_job_20200521_001"\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - args:\n                - python\n                - tf_cnn_benchmarks.py\n                - --batch_size=32\n                - --model=resnet50\n                - --variable_update=parameter_server\n                - --flush_stdout=true\n                - --num_gpus=1\n                - --local_parameter_device=cpu\n                - --device=gpu\n                - --data_format=NHWC\n              image: docker.io/kubeflow/tf-benchmarks-gpu:v20171202-bdab599-dirty-284af3\n              name: tensorflow\n              ports:\n                - containerPort: 2222\n                  name: tfjob-port\n              resources:\n                limits:\n                  nvidia.com/gpu: 2\n              workingDir: /opt/tf-benchmarks/scripts/tf_cnn_benchmarks\n          restartPolicy: OnFailure\n'})}),"\n",(0,r.jsx)(n.p,{children:"Create the TFJob"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f tf-gpu.yaml\nkubectl get pods -n kubeflow\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"NAME                                 READY   STATUS    RESTARTS   AGE\ntf-smoke-gpu-ps-0                    1/1     Running   0          18m\ntf-smoke-gpu-worker-0                1/1     Running   0          18m\ntraining-operator-7d98f9dd88-dd45l   1/1     Running   0          19m\n"})}),"\n",(0,r.jsx)(n.p,{children:"Verify that TFJob are running."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In pod logs"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl logs tf-smoke-gpu-worker-0 -n kubeflow\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".......\n..Found device 0 with properties\n..name: NVIDIA GeForce RTX 3080 major: 8 minor: 6 memoryClockRate(GHz): 1.71\n\n.......\n..Creating TensorFlow device (/device:GPU:0) -> (device: 0, name: NVIDIA GeForce RTX 3080, pci bus id: 0000:01:00.0, compute capability: 8.6)\n.......\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In node"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"...\nAllocated resources:\n  (Total limits may be over 100 percent, i.e., overcommitted.)\n  Resource           Requests     Limits\n  --------           --------     ------\n  ...\n  nvidia.com/gpu     2            2\n...\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In Yunikorn UI applications\n",(0,r.jsx)(n.img,{alt:"tf-job-gpu-on-ui",src:o(96109).A+"",width:"958",height:"698"})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},96109:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/tf-job-gpu-on-ui-f6dfde883fe4393624dfe813086a68d1.png"},83280:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/tf-job-on-ui-e31edb85612822915f336b8cf9a25c3f.png"},1780:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(79474);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);