"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[8716],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=i.createContext({}),s=function(e){var r=i.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return i.createElement(a.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,v=u["".concat(a,".").concat(m)]||u[m]||p[m]||o;return t?i.createElement(v,l(l({ref:r},c),{},{components:t})):i.createElement(v,l({ref:r},c))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var d={};for(var a in r)hasOwnProperty.call(r,a)&&(d[a]=r[a]);d.originalType=e,d[u]="string"==typeof e?e:n,l[1]=d;for(var s=2;s<o;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1675:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var i=t(7462),n=(t(7294),t(3905));const o={id:"development-docker",title:"Docker Build",sidebar_position:1},l="Docker Build for SolidUI",d={unversionedId:"development/docker-images/development-docker",id:"development/docker-images/development-docker",title:"Docker Build",description:"1. Prerequisites",source:"@site/docs/development/docker-images/README5.md",sourceDirName:"development/docker-images",slug:"/development/docker-images/development-docker",permalink:"/docs/development/docker-images/development-docker",draft:!1,editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/docs/development/docker-images/README5.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"development-docker",title:"Docker Build",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Development Commit",permalink:"/docs/development/development-commit/development-commit"},next:{title:"Front-End Compilation",permalink:"/docs/development/frontend-document/development-front"}},a={},s=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"2. Image building",id:"2-image-building",level:2},{value:"2.1 Building server-side image build-entrance-server",id:"21-building-server-side-image-build-entrance-server",level:3},{value:"2.2 Server-side image build-soliduimodelui (after version 0.2.0)",id:"22-server-side-image-build-soliduimodelui-after-version-020",level:3},{value:"2.3 Building front-end image",id:"23-building-front-end-image",level:3}],c={toc:s},u="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,i.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docker-build-for-solidui"},"Docker Build for SolidUI"),(0,n.kt)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker")," 1.13.1+"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Method 1: Download the address from the official website: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/releases"},"https://github.com/CloudOrc/SolidUI/releases"),", and download the corresponding installation package (overall installation package)."),(0,n.kt)("li",{parentName:"ul"},"Method 2: Compile the project installation package according to SolidUI.")),(0,n.kt)("h2",{id:"2-image-building"},"2. Image building"),(0,n.kt)("h3",{id:"21-building-server-side-image-build-entrance-server"},"2.1 Building server-side image build-entrance-server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"tar -zxvf solidui-x.x.x-bin.tar.gz\ncd solidui-x.x.x-bin/entrance-server \ndocker build  -f ./docker/Dockerfile  -t  solidui-entrance:x.x.x . \n\n")),(0,n.kt)("h3",{id:"22-server-side-image-build-soliduimodelui-after-version-020"},"2.2 Server-side image build-soliduimodelui (after version 0.2.0)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"tar -zxvf solidui-x.x.x-bin.tar.gz\ncd solidui-x.x.x-bin\n# update .env\nvi soliduimodelui/.env\nSNAKEMQ_LISTENER=0.0.0.0\nSNAKEMQ_CONNECTOR=soliduimodelui\ndocker build  -f ./soliduimodelui/docker/Dockerfile  -t  soliduimodelui:x.x.x .\n")),(0,n.kt)("h3",{id:"23-building-front-end-image"},"2.3 Building front-end image"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\ntar -zxvf solidui-x.x.x-bin.tar.gz\ncd solidui-x.x.x-bin/solidui-web\ndocker build  -f ./docker/Dockerfile  -t  solidui-web:x.x.x .\n\n")))}p.isMDXComponent=!0}}]);