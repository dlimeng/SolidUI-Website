"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[7026],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>p});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(o),h=i,p=m["".concat(s,".").concat(h)]||m[h]||d[h]||r;return o?n.createElement(p,a(a({ref:t},c),{},{components:o})):n.createElement(p,a({ref:t},c))}));function p(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8441:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=o(7462),i=(o(7294),o(3905));const r={id:"develop-contributing",title:"Development Contribution",sidebar_position:3},a="How to participate in project contribution",l={unversionedId:"development/develop-contributing/develop-contributing",id:"development/develop-contributing/develop-contributing",title:"Development Contribution",description:"Many thanks for contributing to the SolidUI project! Before contributing, please read the following guidelines carefully.",source:"@site/docs/development/develop-contributing/README2.md",sourceDirName:"development/develop-contributing",slug:"/development/develop-contributing/develop-contributing",permalink:"/docs/development/develop-contributing/develop-contributing",draft:!1,editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/docs/development/develop-contributing/README2.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"develop-contributing",title:"Development Contribution",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/docs/user-guide/quick-start"},next:{title:"Development Commit",permalink:"/docs/development/development-commit/development-commit"}},s={},u=[{value:"1. Contribution category",id:"1-contribution-category",level:2},{value:"1.1 Bug feedback and fixes",id:"11-bug-feedback-and-fixes",level:3},{value:"1.2 Function communication, implementation, refactoring",id:"12-function-communication-implementation-refactoring",level:3},{value:"1.3 Issue Answers",id:"13-issue-answers",level:3},{value:"1.4 Documentation improvements",id:"14-documentation-improvements",level:3},{value:"1.5 Others",id:"15-others",level:3},{value:"2. Contribution process",id:"2-contribution-process",level:2},{value:"2.1 Branch structure",id:"21-branch-structure",level:3},{value:"2.1.1 Concept",id:"211-concept",level:4},{value:"2.1.2 Synchronize the latest code from the Upstream warehouse branch to your own Fork warehouse",id:"212-synchronize-the-latest-code-from-the-upstream-warehouse-branch-to-your-own-fork-warehouse",level:4},{value:"2.1.3 Synchronize the new branch of the Upstream warehouse to your own Fork warehouse",id:"213-synchronize-the-new-branch-of-the-upstream-warehouse-to-your-own-fork-warehouse",level:4},{value:"2.1.4 A pr process",id:"214-a-pr-process",level:4},{value:"2.2 Development Guidelines",id:"22-development-guidelines",level:3},{value:"2.3 Issue submission guidelines",id:"23-issue-submission-guidelines",level:3},{value:"2.4 Pull Request (PR) submission guidelines",id:"24-pull-request-pr-submission-guidelines",level:3},{value:"2.5 Review Criteria",id:"25-review-criteria",level:3},{value:"2.5.1 Gains",id:"251-gains",level:4},{value:"2.5.2 Side Effects and Risks",id:"252-side-effects-and-risks",level:4},{value:"2.5.3 Reviewer Notes",id:"253-reviewer-notes",level:4},{value:"3. Advanced contribution",id:"3-advanced-contribution",level:2},{value:"3.1 About Committers (Collaborators)",id:"31-about-committers-collaborators",level:3},{value:"3.1.1 How to become a Committer",id:"311-how-to-become-a-committer",level:4},{value:"3.1.2 Committer&#39;s rights",id:"312-committers-rights",level:4},{value:"3.2 About the Committee",id:"32-about-the-committee",level:3},{value:"3.2.1 How to become a Committee member",id:"321-how-to-become-a-committee-member",level:4},{value:"3.2.2 Rights of Committee members",id:"322-rights-of-committee-members",level:4}],c={toc:u},m="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-participate-in-project-contribution"},"How to participate in project contribution"),(0,i.kt)("p",null,"Many thanks for contributing to the SolidUI project! Before contributing, please read the following guidelines carefully."),(0,i.kt)("h2",{id:"1-contribution-category"},"1. Contribution category"),(0,i.kt)("h3",{id:"11-bug-feedback-and-fixes"},"1.1 Bug feedback and fixes"),(0,i.kt)("p",null,"We recommend that whether it is bug feedback or repair, first create an Issue to describe the status of the bug in detail, so that the community can find and review the problem and code through the Issue record. Bug feedback Issues usually need to include ",(0,i.kt)("strong",{parentName:"p"},"full information describing the bug")," and ",(0,i.kt)("strong",{parentName:"p"},"reproducible scenarios"),", so that the community can quickly locate the cause of the bug and fix it. Open Issues with ",(0,i.kt)("inlineCode",{parentName:"p"},"#bug")," tags are those that need to be fixed."),(0,i.kt)("h3",{id:"12-function-communication-implementation-refactoring"},"1.2 Function communication, implementation, refactoring"),(0,i.kt)("p",null,"In the communication process, describing in detail the details, mechanism and usage scenarios of the new function (or refactoring) can promote its better and faster implementation (including test cases and codes, and CI/CD related work). ",(0,i.kt)("strong",{parentName:"p"},"If you plan to implement a major function (or refactoring), please be sure to communicate with the core development team via Issue or other means"),", so that everyone can promote it in the most efficient way. Open Issues containing ",(0,i.kt)("inlineCode",{parentName:"p"},"#feature")," tags are all new features that need to be implemented, and open Issues containing ",(0,i.kt)("inlineCode",{parentName:"p"},"#enhancement")," tags are all functions that need to be improved and refactored."),(0,i.kt)("h3",{id:"13-issue-answers"},"1.3 Issue Answers"),(0,i.kt)("p",null,"Helping to answer usage questions in Issues is a very valuable way to contribute to the SolidUI community; there are always new users in the community, and you can show your expertise while helping new users."),(0,i.kt)("h3",{id:"14-documentation-improvements"},"1.4 Documentation improvements"),(0,i.kt)("p",null,"The SolidUI documentation is located at ",(0,i.kt)("a",{parentName:"p",href:"https://website.solidui.top/"},"SolidUI_Doc"),", and the completion of the documentation is also crucial to the development of SolidUI."),(0,i.kt)("h3",{id:"15-others"},"1.5 Others"),(0,i.kt)("p",null,"Including participating in and helping to organize community exchanges, community operation activities, etc., and other activities that can help SolidUI projects and communities."),(0,i.kt)("h2",{id:"2-contribution-process"},"2. Contribution process"),(0,i.kt)("h3",{id:"21-branch-structure"},"2.1 Branch structure"),(0,i.kt)("p",null,"The SolidUI source code may generate some temporary branches, but two are only the following three branches that are really meaningful:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"release-*: Stable release version;"),(0,i.kt)("li",{parentName:"ul"},"dev: The daily development branch, which is also the target branch for everyone to contribute code. If you want to contribute code, please create a new branch based on the dev branch. When the version is released, a new release branch will be created based on dev;")),(0,i.kt)("h4",{id:"211-concept"},"2.1.1 Concept"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upstream warehouse: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI"},"https://github.com/CloudOrc/SolidUI")," The SolidUI warehouse is called Upstream warehouse in the text"),(0,i.kt)("li",{parentName:"ul"},"Fork warehouse: Fork from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI"},"https://github.com/CloudOrc/SolidUI")," to your own personal warehouse, called Fork warehouse")),(0,i.kt)("h4",{id:"212-synchronize-the-latest-code-from-the-upstream-warehouse-branch-to-your-own-fork-warehouse"},"2.1.2 Synchronize the latest code from the Upstream warehouse branch to your own Fork warehouse"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step1 Enter the user project page, select the branch to be updated"),(0,i.kt)("li",{parentName:"ul"},"step2 Click Fetch upstream under the code download button, select Fetch and merge (if the branch of your own Fork warehouse is accidentally polluted, you can delete the branch, and then synchronize the new branch of the Upstream warehouse to your own Fork warehouse, see the guide ","[Synchronize Upstream Branch the latest code from the warehouse to your own Fork warehouse]","(#213-Synchronize the new branch of the Upstream warehouse to your own Fork warehouse))")),(0,i.kt)("h4",{id:"213-synchronize-the-new-branch-of-the-upstream-warehouse-to-your-own-fork-warehouse"},"2.1.3 Synchronize the new branch of the Upstream warehouse to your own Fork warehouse"),(0,i.kt)("p",null,"Scenario: There is a new branch in the Upstream repository, but the forked repository does not have this branch (you can choose to delete it and re-fork, but the changes that have not been merged to the original repository will be lost)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step1 Open the Git command line tool (such as Git Bash), clone your own Fork warehouse to the local")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/{your_github_username}/SolidUI.git\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step2 enter the local warehouse directory")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd SolidUI\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step3 Add Upstream warehouse as remote warehouse")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git remote add upstream https://github.com/CloudOrc/SolidUI.git\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step4 Get the branch information of the Upstream warehouse")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git fetch upstream\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step5 Synchronize the new branch of the Upstream warehouse to the local")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git checkout -b {new_branch_name} upstream/{new_branch_name}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step6 Push the new branch to your own Fork repository")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git push --set-upstream origin {new_branch_name}\n")),(0,i.kt)("h4",{id:"214-a-pr-process"},"2.1.4 A pr process"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"step1 Confirm the base branch of the current development (usually the current version in progress, such as the version 0.2.0 currently under development in the community, then the branch is dev, if you are not sure, you can ask in the community group or @related in the issue classmate)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"step2 Synchronize the latest code of the Upstream warehouse branch to your own Fork warehouse branch, refer to the guide ","[2.1.2 Synchronize the latest code of the Upstream warehouse branch to your own Fork warehouse]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"step3 Based on the development branch, pull the new fix/feature branch (do not directly modify the original branch, if the subsequent pr is merged in squash mode, the submitted commit records will be merged into one)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git checkout -b dev-fix dev\ngit push origin dev-fix:dev-fix\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"step4 for development"),(0,i.kt)("li",{parentName:"ul"},"step5 Submit pr (if it is in progress and the development has not been completely completed, please add the WIP logo to the pr title, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"[WIP] Dev 0.2.0 Add junit test code for [solidui-common]"),"; associate the corresponding issue etc.)"),(0,i.kt)("li",{parentName:"ul"},"step6 waiting to be merged"),(0,i.kt)("li",{parentName:"ul"},"step7 delete the fix/future branch (you can do it on the github page)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git branch -d dev-fix\ngit push\n")),(0,i.kt)("h3",{id:"22-development-guidelines"},"2.2 Development Guidelines"),(0,i.kt)("p",null,"The front-end and back-end codes of SolidUI share the same code base, but are separated in development. Before starting development, please fork a copy of the SolidUI project to your own Github Repositories, and develop based on the SolidUI code base in your own Github Repositories."),(0,i.kt)("p",null,"We recommend cloning the dev branch and naming it dev-fix for development. At the same time, create a new dev-fix branch in your warehouse and modify it directly on the original branch. If the subsequent pr is merged in squash mode, the submitted commit records will be merged into one"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# pull branch\ngit clone https://github.com/{githubid}/SolidUI.git --branch dev\n#Generate local dev-fix branch according to dev\ngit checkout -b dev-fix dev\n#Push the local dev-fix branch to your own warehouse\ngit push origin dev-fix dev-fix\n")),(0,i.kt)("h3",{id:"23-issue-submission-guidelines"},"2.3 Issue submission guidelines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you don't know how to initiate a PR to an open source project, please refer to ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/managing-your-work-on-github/about-issues"},"About issues")),(0,i.kt)("li",{parentName:"ul"},"The name of the issue, which should briefly describe your problem or suggestion in one sentence; for the international promotion of the project, please write the issue in English, or bilingual Chinese and English"),(0,i.kt)("li",{parentName:"ul"},"For each Issue, please bring at least a label. Reference: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/issues/63"},"issue #63"))),(0,i.kt)("h3",{id:"24-pull-request-pr-submission-guidelines"},"2.4 Pull Request (PR) submission guidelines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you don't know how to initiate a PR to an open source project, please refer to ","[About pull requests]","(",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull"},"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull")," -requests)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Whether it's a bug fix or a new feature development, please submit a PR to the dev branch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PR and commit name follow the principle of ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>(<scope>): <subject>"),", for details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/development-commit/development-commit"},"Commit message and Change log writing guide"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If a PR includes new features, documentation updates should be included in this PR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the PR is not ready to be merged, prefix the name with ","[WIP]"," (WIP = work-in-progress)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All commits to dev-* branches need to be reviewed at least once before they can be merged"))),(0,i.kt)("h3",{id:"25-review-criteria"},"2.5 Review Criteria"),(0,i.kt)("p",null,"Before contributing code, find out what kind of commits are welcome in Review. Simply put, if a commit brings as much gain as possible with as few side effects or risks as possible, the more likely it will be merged and the faster it will be reviewed. Commits with high risk and low value are almost impossible to be merged, and may be rejected for Review."),(0,i.kt)("h4",{id:"251-gains"},"2.5.1 Gains"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix the main cause of the bug"),(0,i.kt)("li",{parentName:"ul"},"Add or fix a feature or bug that was requested by a large number of users"),(0,i.kt)("li",{parentName:"ul"},"simple and effective"),(0,i.kt)("li",{parentName:"ul"},"Easy to test, with test cases"),(0,i.kt)("li",{parentName:"ul"},"Reduce complexity and code size"),(0,i.kt)("li",{parentName:"ul"},"Issues identified for improvement discussed by the community")),(0,i.kt)("h4",{id:"252-side-effects-and-risks"},"2.5.2 Side Effects and Risks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"only fix the surface of the bug"),(0,i.kt)("li",{parentName:"ul"},"Introducing new features with high complexity"),(0,i.kt)("li",{parentName:"ul"},"Adding complexity to meet niche needs"),(0,i.kt)("li",{parentName:"ul"},"Changes to stable existing APIs or semantics"),(0,i.kt)("li",{parentName:"ul"},"Cause other functions not to work properly"),(0,i.kt)("li",{parentName:"ul"},"Add a lot of dependencies"),(0,i.kt)("li",{parentName:"ul"},"Feel free to change dependency versions"),(0,i.kt)("li",{parentName:"ul"},"Commit a lot of code or changes at once")),(0,i.kt)("h4",{id:"253-reviewer-notes"},"2.5.3 Reviewer Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please write comments in a constructive tone"),(0,i.kt)("li",{parentName:"ul"},"If the submitter needs to make changes, please clearly state all the changes that need to be made to complete this Pull Request"),(0,i.kt)("li",{parentName:"ul"},"If a PR is found to have brought new problems after merging, Reviewer needs to contact the PR author and communicate to solve the problem; if the PR author cannot be contacted, Reviewer needs to restore the PR")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"3-advanced-contribution"},"3. Advanced contribution"),(0,i.kt)("h3",{id:"31-about-committers-collaborators"},"3.1 About Committers (Collaborators)"),(0,i.kt)("h4",{id:"311-how-to-become-a-committer"},"3.1.1 How to become a Committer"),(0,i.kt)("p",null,"If you have submitted a valuable PR to SolidUI and it has been merged, or have contributed continuously for more than half a year, and have led at least one version release, you can find a PMC of the SolidUI project through the official WeChat group, if he is willing to nominate you as a committer , and are willing to state your contribution to all PMCs and Committers for you, then a vote will be launched; PMC and other Committers will vote together to decide whether to allow you to join, if you get enough votes, you will become a Committer of the SolidUI project ."),(0,i.kt)("h4",{id:"312-committers-rights"},"3.1.2 Committer's rights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can join the official developer WeChat group to participate in discussions and formulate SolidUI development plans"),(0,i.kt)("li",{parentName:"ul"},"Can manage Issues, including closing and adding tags"),(0,i.kt)("li",{parentName:"ul"},"Can create and manage project branches, except dev branch"),(0,i.kt)("li",{parentName:"ul"},"Ability to review PRs submitted to the dev branch"),(0,i.kt)("li",{parentName:"ul"},"Can apply to become a Committee member")),(0,i.kt)("h3",{id:"32-about-the-committee"},"3.2 About the Committee"),(0,i.kt)("h4",{id:"321-how-to-become-a-committee-member"},"3.2.1 How to become a Committee member"),(0,i.kt)("p",null,"If you are a Committer of the SolidUI project, and all the content you contributed has been recognized by other Committee members, you can apply to become a member of the SolidUI Committee, and other Committee members will vote together to decide whether to allow you to join. If all votes pass, you will Become a SolidUI Committee member."),(0,i.kt)("h4",{id:"322-rights-of-committee-members"},"3.2.2 Rights of Committee members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ability to merge PRs submitted by other Committers and contributors to the dev branch"),(0,i.kt)("li",{parentName:"ul"},"Participate in determining the roadmap and development direction of the SolidUI project"),(0,i.kt)("li",{parentName:"ul"},"Can participate in new version releases")))}d.isMDXComponent=!0}}]);