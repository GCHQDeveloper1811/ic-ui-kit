/*! For license information please see ic-theme-stories-mdx.6ca3ec17.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[210],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-theme.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_theme_stories,switchTheme:()=>switchTheme});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-theme\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property | Attribute | Description                                                                                                        | Type     | Default |\n| -------- | --------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- |\n| `color`  | `color`   | The theme colour. Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)". | `string` | `null`  |\n\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Controlled=()=>{const[color,setColour]=(0,react.useState)("rgb(255, 201, 60)");return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.S_,{color}),(0,jsx_runtime.jsx)(components.$Z,{variant:"primary",onClick:()=>{setColour("rgb(27, 60, 121)")},children:"Default theme"}),(0,jsx_runtime.jsx)(components.$Z,{variant:"primary",onClick:()=>{setColour("rgb(255, 201, 60)")},children:"Sunset theme"})]})};function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Theme",component:"IcTheme"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"switch-theme",children:"Switch theme"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Switch theme",parameters:{layout:"fullscreen"},children:[(0,jsx_runtime.jsx)(Controlled,{}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)(components.OT,{appTitle:"ApplicationName",status:"alpha",version:"v0.0.7",children:[(0,jsx_runtime.jsxs)("svg",{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})]}),(0,jsx_runtime.jsx)(components.BS,{slot:"search",placeholder:"Search",label:"Search"}),(0,jsx_runtime.jsx)(components.Rj,{label:"button1",slot:"buttons",onClick:()=>alert("test"),children:(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})]})}),(0,jsx_runtime.jsx)(components.WS,{label:"Navigation",href:"/",slot:"navigation"}),(0,jsx_runtime.jsx)(components.WS,{label:"Navigation",href:"/",slot:"navigation"}),(0,jsx_runtime.jsx)(components.WS,{label:"Navigation",href:"/",slot:"navigation"}),(0,jsx_runtime.jsx)(components.WS,{label:"Navigation",href:"/",selected:"true",slot:"navigation"}),(0,jsx_runtime.jsx)(components.WS,{label:"Navigation",href:"/",slot:"navigation"})]}),(0,jsx_runtime.jsxs)(components.pJ,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.","secondary-heading":"Secondary Heading","secondary-subheading":"This is a secondary description.","full-width":!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"interaction",style:{display:"flex"},children:[(0,jsx_runtime.jsx)("ic-text-field",{placeholder:"Filter display",label:"Filter display","hide-label":!0}),(0,jsx_runtime.jsx)(components.$Z,{variant:"primary",style:{marginLeft:16},children:(0,jsx_runtime.jsx)(_components.p,{children:"Filter"})})]}),(0,jsx_runtime.jsx)(components.$Z,{variant:"secondary",slot:"interaction",children:(0,jsx_runtime.jsx)(_components.p,{children:"See all"})}),(0,jsx_runtime.jsx)("ic-link",{href:"https://google.com",slot:"interaction",style:{marginTop:10},children:(0,jsx_runtime.jsx)(_components.p,{children:"Help"})})]}),(0,jsx_runtime.jsxs)(components.d$,{heading:"This alert uses a custom message slot",dismissible:"true",children:[(0,jsx_runtime.jsx)(components.$Z,{slot:"action",variant:"secondary",children:(0,jsx_runtime.jsx)(_components.p,{children:"Button"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"body",slot:"message",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["This is some text and\n",(0,jsx_runtime.jsx)("ic-link",{href:"/",children:" this is an inline link ic-link"}),"\nwithin the text"]})})})]}),(0,jsx_runtime.jsxs)(components.zR,{align:"full-width",description:"The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, \nplease get in touch.",caption:"All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence.",children:[(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)(_components.p,{children:"Get Started"})}),(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)(_components.p,{children:"Accessibility"})}),(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)(_components.p,{children:"Styles"})}),(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)(_components.p,{children:"Components"})}),(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)(_components.p,{children:"Patterns"})}),(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)(_components.p,{children:"Design toolkit"})}),(0,jsx_runtime.jsxs)("div",{slot:"logo",style:{display:"flex",alignItems:"center",gap:"var(--ic-space-sm);"},children:[(0,jsx_runtime.jsx)(components.$Z,{children:"Slotted Button"}),(0,jsx_runtime.jsx)(components.Ez,{href:"/",children:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48px",viewBox:"0 0 24 24",width:"48px",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"})]})})]})]})]})]})})]})}const switchTheme=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Controlled,{}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)(components.OT,{appTitle:"ApplicationName",status:"alpha",version:"v0.0.7",children:[(0,jsx_runtime.jsxs)("svg",{slot:"app-icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})]}),(0,jsx_runtime.jsx)(components.BS,{slot:"search",placeholder:"Search",label:"Search"}),(0,jsx_runtime.jsx)(components.Rj,{label:"button1",slot:"buttons",onClick:()=>alert("test"),children:(0,jsx_runtime.jsxs)("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})]})}),(0,jsx_runtime.jsx)(components.WS,{label:"Navigation",href:"/",slot:"navigation"}),(0,jsx_runtime.jsx)(components.WS,{label:"Navigation",href:"/",slot:"navigation"}),(0,jsx_runtime.jsx)(components.WS,{label:"Navigation",href:"/",slot:"navigation"}),(0,jsx_runtime.jsx)(components.WS,{label:"Navigation",href:"/",selected:"true",slot:"navigation"}),(0,jsx_runtime.jsx)(components.WS,{label:"Navigation",href:"/",slot:"navigation"})]}),(0,jsx_runtime.jsxs)(components.pJ,{heading:"Hero heading",subheading:"Hero description. This is a Hero component, it should be used as a page heading.","secondary-heading":"Secondary Heading","secondary-subheading":"This is a secondary description.","full-width":!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"interaction",style:{display:"flex"},children:[(0,jsx_runtime.jsx)("ic-text-field",{placeholder:"Filter display",label:"Filter display","hide-label":!0}),(0,jsx_runtime.jsx)(components.$Z,{variant:"primary",style:{marginLeft:16},children:(0,jsx_runtime.jsx)("p",{children:"Filter"})})]}),(0,jsx_runtime.jsx)(components.$Z,{variant:"secondary",slot:"interaction",children:(0,jsx_runtime.jsx)("p",{children:"See all"})}),(0,jsx_runtime.jsx)("ic-link",{href:"https://google.com",slot:"interaction",style:{marginTop:10},children:(0,jsx_runtime.jsx)("p",{children:"Help"})})]}),(0,jsx_runtime.jsxs)(components.d$,{heading:"This alert uses a custom message slot",dismissible:"true",children:[(0,jsx_runtime.jsx)(components.$Z,{slot:"action",variant:"secondary",children:(0,jsx_runtime.jsx)("p",{children:"Button"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"body",slot:"message",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)("p",{children:["This is some text and\n",(0,jsx_runtime.jsx)("ic-link",{href:"/",children:" this is an inline link ic-link"}),"\nwithin the text"]})})})]}),(0,jsx_runtime.jsxs)(components.zR,{align:"full-width",description:"The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, \\nplease get in touch.",caption:"All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence.",children:[(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)("p",{children:"Get Started"})}),(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)("p",{children:"Accessibility"})}),(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)("p",{children:"Styles"})}),(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)("p",{children:"Components"})}),(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)("p",{children:"Patterns"})}),(0,jsx_runtime.jsx)(components.Ez,{slot:"link",href:"/",children:(0,jsx_runtime.jsx)("p",{children:"Design toolkit"})}),(0,jsx_runtime.jsxs)("div",{slot:"logo",style:{display:"flex",alignItems:"center",gap:"var(--ic-space-sm);"},children:[(0,jsx_runtime.jsx)(components.$Z,{children:"Slotted Button"}),(0,jsx_runtime.jsx)(components.Ez,{href:"/",children:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48px",viewBox:"0 0 24 24",width:"48px",children:[(0,jsx_runtime.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,jsx_runtime.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"})]})})]})]})]})]});switchTheme.storyName="Switch theme",switchTheme.parameters={storySource:{source:'<Controlled />\n<div><br /><IcTopNavigation appTitle="ApplicationName" status="alpha" version="v0.0.7"><svg slot="app-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" /></svg><IcSearchBar slot="search" placeholder="Search" label="Search" /><IcNavigationButton label="button1" slot="buttons" onClick={() => alert("test")}><svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" /></svg></IcNavigationButton><IcNavigationItem label="Navigation" href="/" slot="navigation" /><IcNavigationItem label="Navigation" href="/" slot="navigation" /><IcNavigationItem label="Navigation" href="/" slot="navigation" /><IcNavigationItem label="Navigation" href="/" selected="true" slot="navigation" /><IcNavigationItem label="Navigation" href="/" slot="navigation" /></IcTopNavigation><IcHero heading="Hero heading" subheading="Hero description. This is a Hero component, it should be used as a page heading." secondary-heading="Secondary Heading" secondary-subheading="This is a secondary description." full-width><div slot="interaction" style={{\n      display: "flex"\n    }}><ic-text-field placeholder="Filter display" label="Filter display" hide-label /><IcButton variant="primary" style={{\n        marginLeft: 16\n      }}><p>{"Filter"}</p></IcButton></div><IcButton variant="secondary" slot="interaction"><p>{"See all"}</p></IcButton><ic-link href="https://google.com" slot="interaction" style={{\n      marginTop: 10\n    }}><p>{"Help"}</p></ic-link></IcHero><IcAlert heading="This alert uses a custom message slot" dismissible="true"><IcButton slot="action" variant="secondary"><p>{"Button"}</p></IcButton><IcTypography variant="body" slot="message"><p><p>{"This is some text and\\n"}<ic-link href="/">{" this is an inline link ic-link"}</ic-link>{"\\nwithin the text"}</p></p></IcTypography></IcAlert><IcFooter align="full-width" description="The ICDS is maintained by the Design Practice Team. If you\'ve got a question or want to feedback, \\nplease get in touch." caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."><IcFooterLink slot="link" href="/"><p>{"Get Started"}</p></IcFooterLink><IcFooterLink slot="link" href="/"><p>{"Accessibility"}</p></IcFooterLink><IcFooterLink slot="link" href="/"><p>{"Styles"}</p></IcFooterLink><IcFooterLink slot="link" href="/"><p>{"Components"}</p></IcFooterLink><IcFooterLink slot="link" href="/"><p>{"Patterns"}</p></IcFooterLink><IcFooterLink slot="link" href="/"><p>{"Design toolkit"}</p></IcFooterLink><div slot="logo" style={{\n      display: "flex",\n      alignItems: "center",\n      gap: "var(--ic-space-sm);"\n    }}><IcButton>{"Slotted Button"}</IcButton><IcFooterLink href="/"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" /></svg></IcFooterLink></div></IcFooter></div>'},layout:"fullscreen"};const componentMeta={title:"Theme",tags:["stories-mdx"],includeStories:["switchTheme"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_theme_stories=componentMeta,__namedExportsOrder=["Controlled","switchTheme"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);