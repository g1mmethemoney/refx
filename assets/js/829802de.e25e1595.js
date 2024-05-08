"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[945],{4687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var r=n(4848),a=n(8453),o=n(1470),s=n(9365);const u={sidebar_position:6},l="Manual Destruction",c={id:"tutorial/guide/manual-destruction",title:"Manual Destruction",description:"If you want to manually destroy your effects, you can turn off automatic destruction on lifetime end by setting DestroyOnLifecycleEnd to false.",source:"@site/docs/tutorial/guide/manual-destruction.md",sourceDirName:"tutorial/guide",slug:"/tutorial/guide/manual-destruction",permalink:"/refx/docs/tutorial/guide/manual-destruction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/guide/manual-destruction.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/refx/docs/tutorial/guide/configuration"},next:{title:"Extras",permalink:"/refx/docs/category/extras"}},i={},d=[];function f(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"manual-destruction",children:"Manual Destruction"}),"\n","\n",(0,r.jsxs)(t.p,{children:["If you want to ",(0,r.jsx)(t.em,{children:"manually destroy"})," your effects, you can ",(0,r.jsx)(t.em,{children:"turn off"})," automatic destruction on lifetime end by setting ",(0,r.jsx)(t.code,{children:"DestroyOnLifecycleEnd"})," to ",(0,r.jsx)(t.code,{children:"false"}),".\nHowever, if you don't call ",(0,r.jsx)(t.code,{children:"Destroy"})," manually ",(0,r.jsx)(t.strong,{children:"refx"})," will warn you about a memory leak:"]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["It's not ",(0,r.jsx)(t.em,{children:"recommended"})," to ",(0,r.jsx)(t.strong,{children:"turn off"})," ",(0,r.jsx)(t.code,{children:"DestroyOnLifecycleEnd"}),", because you can still manually call ",(0,r.jsx)(t.code,{children:"Destroy()"})," on your proxy without ",(0,r.jsx)(t.em,{children:"setting the flag"}),"."]})}),"\n",(0,r.jsxs)(o.A,{groupId:"languages",children:[(0,r.jsx)(s.A,{value:"Luau",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",metastring:'title="myEffect.lua" showLineNumbers',children:'local refx = require(path.to.refx)\nlocal myEffect = refx.CreateEffect("myEffect")\n\nfunction myEffect:OnConstruct()\n    self.DestroyOnEnd = false\n    self.DestroyOnLifecycleEnd = false\nend\n\nreturn myEffect\n'})})}),(0,r.jsx)(s.A,{value:"TypeScript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="myEffect.ts" showLineNumbers',children:'import { BaseEffect, VisualEffectDecorator, Config } from "@rbxts/refx";\n\n@VisualEffectDecorator\nexport class myEffect extends BaseEffect<[number]> {\n    protected readonly DestroyOnEnd = false;\n    protected readonly DestroyOnLifecycleEnd = false;\n}\n'})})})]}),"\n",(0,r.jsx)("img",{src:n(174).A,alt:"Warning"}),"\n",(0,r.jsx)(t.p,{children:"\u200e"}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsxs)(t.p,{children:["You can ",(0,r.jsx)(t.strong,{children:"silence"})," the ",(0,r.jsx)(t.em,{children:"memory leak warning"})," by setting ",(0,r.jsx)(t.code,{children:"DisableLeakWarning"})," to ",(0,r.jsx)(t.code,{children:"true"}),". This is ",(0,r.jsx)(t.strong,{children:"not recommended"}),"."]})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(6540),a=n(4164),o=n(3104),s=n(6347),u=n(205),l=n(7485),c=n(1682),i=n(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=f(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=b({queryString:n,groupId:a}),[h,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=c??h;return m({value:e,tabValues:o})?e:null})();(0,u.A)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function p(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),i=e=>{const t=e.currentTarget,n=l.indexOf(t),a=u[n].value;a!==r&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:i,...o,className:(0,a.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function E(e){const t=h(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,j.jsx)(p,{...t,...e}),(0,j.jsx)(x,{...t,...e})]})}function I(e){const t=(0,v.A)();return(0,j.jsx)(E,{...e,children:d(e.children)},String(t))}},174:(e,t,n)=>{n.d(t,{A:()=>r});const r="data:image/png;base64,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"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>u});var r=n(6540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);