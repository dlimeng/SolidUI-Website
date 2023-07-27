"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[7242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=a(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var a=2;a<i;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=r(7462),o=(r(7294),r(3905));const i={id:"quick-start",title:"Quick start",sidebar_position:1},c=void 0,l={unversionedId:"user-guide/quick-start",id:"user-guide/quick-start",title:"Quick start",description:"1. \u73af\u5883\u51c6\u5907",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/quickstart.md",sourceDirName:"user-guide",slug:"/user-guide/quick-start",permalink:"/zh-CN/docs/user-guide/quick-start",draft:!1,editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"quick-start",title:"Quick start",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6846\u67b6\u4ecb\u7ecd",permalink:"/zh-CN/docs/intro"},next:{title:"Development Contribution",permalink:"/zh-CN/docs/development/develop-contributing/develop-contributing"}},u={},a=[{value:"1. \u73af\u5883\u51c6\u5907",id:"1-\u73af\u5883\u51c6\u5907",level:2},{value:"2.\u4ee5 docker-compose \u7684\u65b9\u5f0f\u542f\u52a8 DolphinScheduler (\u63a8\u8350)",id:"2\u4ee5-docker-compose-\u7684\u65b9\u5f0f\u542f\u52a8-dolphinscheduler-\u63a8\u8350",level:2},{value:"2.1 \u4e0b\u8f7d\u90e8\u7f72\u5305\u6216\u8005\u6e90\u7801",id:"21-\u4e0b\u8f7d\u90e8\u7f72\u5305\u6216\u8005\u6e90\u7801",level:3},{value:"2.2 \u62c9\u53d6\u955c\u50cf\u5e76\u542f\u52a8\u670d\u52a1",id:"22-\u62c9\u53d6\u955c\u50cf\u5e76\u542f\u52a8\u670d\u52a1",level:3},{value:"2.3 \u8bbf\u95ee\u670d\u52a1",id:"23-\u8bbf\u95ee\u670d\u52a1",level:3}],s={toc:a},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u73af\u5883\u51c6\u5907"},"1. \u73af\u5883\u51c6\u5907"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker")," 1.13.1+\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," 1.11.0+"),(0,o.kt)("h2",{id:"2\u4ee5-docker-compose-\u7684\u65b9\u5f0f\u542f\u52a8-dolphinscheduler-\u63a8\u8350"},"2.\u4ee5 docker-compose \u7684\u65b9\u5f0f\u542f\u52a8 DolphinScheduler (\u63a8\u8350)"),(0,o.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u9700\u8981\u5148\u5b89\u88c5 docker-compose, docker-compose \u7684\u5b89\u88c5\u7f51\u4e0a\u5df2\u7ecf\u6709\u975e\u5e38\u591a\u7684\u8d44\u6599\uff0c\u8bf7\u81ea\u884c\u5b89\u88c5\u5373\u53ef"),(0,o.kt)("h3",{id:"21-\u4e0b\u8f7d\u90e8\u7f72\u5305\u6216\u8005\u6e90\u7801"},"2.1 \u4e0b\u8f7d\u90e8\u7f72\u5305\u6216\u8005\u6e90\u7801"),(0,o.kt)("p",null,"\u65b9\u5f0f1\uff1a\u4ecegithub\u4ed3\u5e93 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CloudOrc/SolidUI"},"https://github.com/CloudOrc/SolidUI")," \u83b7\u53d6\u9879\u76ee\u7684\u6e90\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u65b9\u5f0f2\uff1a\u4ece",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CloudOrc/SolidUI/releases"},"https://github.com/CloudOrc/SolidUI/releases")," \u4e0b\u8f7d\u4e0b\u8f7d\u6240\u9700\u7248\u672c\u7684\u6e90\u7801\u5305\u3002"),(0,o.kt)("p",null,"\u8bf7\u4e0b\u8f7d\u6e90\u7801\u5305 solidui-x.x.x-bin.tar.gz"),(0,o.kt)("h3",{id:"22-\u62c9\u53d6\u955c\u50cf\u5e76\u542f\u52a8\u670d\u52a1"},"2.2 \u62c9\u53d6\u955c\u50cf\u5e76\u542f\u52a8\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# \u8fdb\u5165\u670d\u52a1\u5668\uff08\u4ee5Centos7\u4e3a\u4f8b\uff09\ntar -zxvf solidui-x.x.x-bin.tar.gz\n\ncd solidui-x.x.x-src/solidui-dist/docker/\n\ndocker-compose up -d\n\n")),(0,o.kt)("h3",{id:"23-\u8bbf\u95ee\u670d\u52a1"},"2.3 \u8bbf\u95ee\u670d\u52a1"),(0,o.kt)("p",null,"\u8bbf\u95ee\u94fe\u63a5 http://localhost:8099"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7528\u6237\u540d\u5bc6\u7801\uff1aadmin/admin"))}d.isMDXComponent=!0}}]);