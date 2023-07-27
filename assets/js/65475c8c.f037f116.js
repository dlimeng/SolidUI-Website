"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[3163],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(o),u=n,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return o?i.createElement(h,a(a({ref:t},m),{},{components:o})):i.createElement(h,a({ref:t},m))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4799:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=o(7462),n=(o(7294),o(3905));const r={id:"development-commit",title:"Development Commit",sidebar_position:1},a="SolidUI Commit Message",s={unversionedId:"development/development-commit/development-commit",id:"development/development-commit/development-commit",title:"Development Commit",description:"https://linkis.apache.org/zh-CN/docs/latest/development/development-specification/commit-message",source:"@site/docs/development/development-commit/README3.md",sourceDirName:"development/development-commit",slug:"/development/development-commit/development-commit",permalink:"/docs/development/development-commit/development-commit",draft:!1,editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/docs/development/development-commit/README3.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"development-commit",title:"Development Commit",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Development Contribution",permalink:"/docs/development/develop-contributing/develop-contributing"},next:{title:"Docker Build",permalink:"/docs/development/docker-images/development-docker"}},l={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Commit Message RIP",id:"2-commit-message-rip",level:2},{value:"2.1 Clarify Changes",id:"21-clarify-changes",level:3},{value:"2.2 Associate with Relevant Pull Requests or Issues",id:"22-associate-with-relevant-pull-requests-or-issues",level:3},{value:"2.3 Unified Format",id:"23-unified-format",level:3},{value:"Header",id:"header",level:4},{value:"Body",id:"body",level:4},{value:"Footer",id:"footer",level:4},{value:"Example",id:"example",level:4},{value:"3. Reference Documents",id:"3-reference-documents",level:2}],m={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"solidui-commit-message"},"SolidUI Commit Message"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/docs/latest/development/development-specification/commit-message"},"https://linkis.apache.org/zh-CN/docs/latest/development/development-specification/commit-message"))),(0,n.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,n.kt)("p",null,"   A good commit message can help other developers (or future developers) quickly understand the context of related changes, and also help project managers determine whether the commit is suitable for inclusion in a release. However, after reviewing the commit logs of many open-source projects, we found an interesting problem: some developers have good code quality, but their commit messages are messy. When other contributors or learners view the code, they cannot intuitively understand the purpose of the changes before and after the commit. As Peter Hutterer said: Re-establishing the context of a piece of code is wasteful. We can't avoid it completely, so our efforts should go to reducing it as much as possible. Commit messages can do exactly that and as a result, a commit message shows whether a developer is a good collaborator. Therefore, DolphinScheduler has established this convention in combination with other communities and official Apache documentation."),(0,n.kt)("h2",{id:"2-commit-message-rip"},"2. Commit Message RIP"),(0,n.kt)("h3",{id:"21-clarify-changes"},"2.1 Clarify Changes"),(0,n.kt)("p",null,"Commit messages should clearly state the problems being addressed (bug fixes, feature enhancements, etc.) to help users and developers better track issues and clarify the optimization process during version iterations."),(0,n.kt)("h3",{id:"22-associate-with-relevant-pull-requests-or-issues"},"2.2 Associate with Relevant Pull Requests or Issues"),(0,n.kt)("p",null,"When our changes are large, it's best to associate the commit message with related Issues or Pull Requests on GitHub. This way, our developers can quickly understand the context of the code changes through the associated information when reviewing the code. If the current commit is for a specific issue, it can be closed in the Footer section."),(0,n.kt)("h3",{id:"23-unified-format"},"2.3 Unified Format"),(0,n.kt)("p",null,"Formatted commit messages can help us provide more historical information, facilitate quick browsing, and generate Change Logs directly from commits."),(0,n.kt)("p",null,"Commit messages should include three parts: Header, Body, and Footer. The Header is required, while the Body and Footer are optional."),(0,n.kt)("h4",{id:"header"},"Header"),(0,n.kt)("p",null,"The Header section consists of a single line and includes three fields: type (required), scope (optional), and subject (required)."),(0,n.kt)("p",null,"[DS-ISSUE number][type]"," subject"),(0,n.kt)("p",null,"(1) Type is used to indicate the category of the commit, and only the following seven identifiers are allowed:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feat: New feature"),(0,n.kt)("li",{parentName:"ul"},"fix: Bug fix"),(0,n.kt)("li",{parentName:"ul"},"docs: Documentation"),(0,n.kt)("li",{parentName:"ul"},"style: Formatting changes (that do not affect code execution)"),(0,n.kt)("li",{parentName:"ul"},"refactor: Refactoring (code changes that neither add features nor fix bugs)"),(0,n.kt)("li",{parentName:"ul"},"test: Adding tests"),(0,n.kt)("li",{parentName:"ul"},"chore: Changes to the build process or auxiliary tools")),(0,n.kt)("p",null,"If the type is 'feat' or 'fix', the commit will definitely appear in the Change Log. For other cases (docs, chore, style, refactor, test), it is recommended not to include them."),(0,n.kt)("p",null,"(2) Scope"),(0,n.kt)("p",null,"Scope is used to indicate the affected range of the commit, such as server, remote, etc. If there is no more suitable scope, you can use an asterisk (*)."),(0,n.kt)("p",null,"(3) Subject"),(0,n.kt)("p",null,"Subject is a brief description of the purpose of the commit, not exceeding 50 characters."),(0,n.kt)("h4",{id:"body"},"Body"),(0,n.kt)("p",null,"The Body section is a detailed description of the commit, which can be divided into multiple lines. Line breaks will occur every 72 characters to avoid automatic line breaks affecting aesthetics."),(0,n.kt)("p",null,"The Body section should pay attention to the following points:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use the verb-object structure and the present tense, e.g., use 'change' instead of 'changed' or 'changes'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Do not capitalize the first letter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Do not end the sentence with a period (.)"))),(0,n.kt)("h4",{id:"footer"},"Footer"),(0,n.kt)("p",null,"Footer is only applicable in two situations:"),(0,n.kt)("p",null,"(1) Incompatible Changes"),(0,n.kt)("p",null,"If the current code is incompatible with the previous version, the Footer section should start with BREAKING CHANGE, followed by a description of the changes, the reasons for the changes, and the migration methods."),(0,n.kt)("p",null,"(2) Closing Issues"),(0,n.kt)("p",null,"If the current commit is for a specific issue, it can be closed in the Footer section. Multiple issues can be closed at once."),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)("p",null,"[SolidUI-001][docs-en]"," add commit message"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"commit message RIP"),(0,n.kt)("li",{parentName:"ul"},"build some conventions"),(0,n.kt)("li",{parentName:"ul"},"help the commit messages become clean and tidy"),(0,n.kt)("li",{parentName:"ul"},"help developers and release managers better track issues"),(0,n.kt)("li",{parentName:"ul"},"and clarify the optimization in the version iteration")),(0,n.kt)("p",null,"This closes #001"),(0,n.kt)("h2",{id:"3-reference-documents"},"3. Reference Documents"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/GEODE/Commit+Message+Format"},"Commit Message Format")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://who-t.blogspot.com/2009/12/on-commit-messages.html"},"On Commit Messages")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/LKM4IXAY-7dKhTzGu5-oug"},"RocketMQ Community Operation Convention")))}p.isMDXComponent=!0}}]);