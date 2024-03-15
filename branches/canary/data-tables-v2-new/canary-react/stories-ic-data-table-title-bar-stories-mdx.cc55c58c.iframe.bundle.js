/*! For license information please see stories-ic-data-table-title-bar-stories-mdx.cc55c58c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[8196],{"./src/stories/ic-data-table-title-bar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,customActions:()=>customActions,default:()=>ic_data_table_title_bar_stories,hideDensitySelector:()=>hideDensitySelector,slots:()=>slots,withMetadataAndDescription:()=>withMetadataAndDescription});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts"),dist_components=__webpack_require__("../react/dist/components.js");const readme_namespaceObject='# ic-data-table-title-bar\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property            | Attribute             | Description                                                                                                                                                        | Type      | Default                     |\n| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | --------------------------- |\n| `description`       | `description`         | The description that is displayed below the `heading` and `metadata`. Can be overridden with the `description` slot.                                               | `string`  | `undefined`                 |\n| `heading`           | `heading`             | The heading of the title bar. Can be overridden with the `heading` slot. If used with an ic-data-table it will default to the table\'s `caption` unless overridden. | `string`  | `DEFAULT_TITLE_BAR_HEADING` |\n| `hideDensitySelect` | `hide-density-select` | When `true`, the density select will not be rendered.                                                                                                              | `boolean` | `false`                     |\n| `metadata`          | `metadata`            | The metadata displayed next to the `heading`.                                                                                                                      | `string`  | `undefined`                 |\n\n\n## Events\n\n| Event                  | Description                                             | Type                                      |\n| ---------------------- | ------------------------------------------------------- | ----------------------------------------- |\n| `icTableDensityUpdate` | Emitted when the table density select value is changed. | `CustomEvent<IcDensityUpdateEventDetail>` |\n\n\n## Slots\n\n| Slot               | Description                                                                                                   |\n| ------------------ | ------------------------------------------------------------------------------------------------------------- |\n| `"custom-actions"` | Render additional custom actions to the left of the density select.                                           |\n| `"description"`    | Render an alternative description in the description section.                                                 |\n| `"heading"`        | The heading to render on the data table title bar.                                                            |\n| `"primary-action"` | Render an interactive element that will perform a primary action. Renders to the right of the density select. |\n\n\n## Dependencies\n\n### Depends on\n\n- ic-typography\n- ic-select\n\n### Graph\n```mermaid\ngraph TD;\n  ic-data-table-title-bar --\x3e ic-typography\n  ic-data-table-title-bar --\x3e ic-select\n  ic-select --\x3e ic-input-container\n  ic-select --\x3e ic-input-label\n  ic-select --\x3e ic-input-component-container\n  ic-select --\x3e ic-typography\n  ic-select --\x3e ic-button\n  ic-select --\x3e ic-menu\n  ic-select --\x3e ic-input-validation\n  ic-input-label --\x3e ic-typography\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-menu --\x3e ic-loading-indicator\n  ic-menu --\x3e ic-typography\n  ic-menu --\x3e ic-button\n  ic-input-validation --\x3e ic-typography\n  style ic-data-table-title-bar fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';__webpack_require__("../react/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../react/node_modules/react/jsx-runtime.js");const defaultProps={xmlns:"http://www.w3.org/2000/svg"};function slot(name=""){return{ref:e=>e?e.setAttribute("slot",name):null}}const SlottedSVG=({path,slot:slotName,children,...props})=>(0,jsx_runtime.jsxs)("svg",{...slot(slotName),...props,...defaultProps,children:[!!path&&(0,jsx_runtime.jsx)("path",{d:path}),children]});SlottedSVG.displayName="SlottedSVG";try{SlottedSVG.displayName="SlottedSVG",SlottedSVG.__docgenInfo={description:"",displayName:"SlottedSVG",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../react/src/react-component-lib/slottedSVG.tsx#SlottedSVG"]={docgenInfo:SlottedSVG.__docgenInfo,name:"SlottedSVG",path:"../react/src/react-component-lib/slottedSVG.tsx#SlottedSVG"})}catch(__react_docgen_typescript_loader_error){}var mdi=__webpack_require__("./node_modules/@mdi/js/mdi.js"),react_jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",ul:"ul",li:"li",h4:"h4",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment,{children:[(0,react_jsx_runtime.jsx)(dist.h_,{title:"React Components/Data Table Title Bar",component:components.Ol,parameters:{componentAPI:{data:readme_namespaceObject}}}),"\n",(0,react_jsx_runtime.jsx)(_components.h1,{id:"canary-data-table-title-bar",children:"[Canary]: Data Table Title Bar"}),"\n",(0,react_jsx_runtime.jsx)(_components.p,{children:"Use the Data Table Title Bar component to provide titling, description, metadata and also global table functionality."}),"\n",(0,react_jsx_runtime.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,react_jsx_runtime.jsx)(_components.p,{children:"A basic example with a heading."}),"\n",(0,react_jsx_runtime.jsx)(_components.p,{children:"By default, the density selector appears within the Data Table Title Bar. The three density options are:"}),"\n",(0,react_jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime.jsx)(_components.li,{children:"Default"}),"\n",(0,react_jsx_runtime.jsx)(_components.li,{children:"Dense"}),"\n",(0,react_jsx_runtime.jsx)(_components.li,{children:"Spacious"}),"\n"]}),"\n",(0,react_jsx_runtime.jsx)(dist.Xz,{children:(0,react_jsx_runtime.jsx)(dist.oG,{name:"Basic",children:(0,react_jsx_runtime.jsx)(components.Ol,{heading:"Title Bar"})})}),"\n",(0,react_jsx_runtime.jsx)(_components.h4,{id:"basic-code-example",children:"Basic code example"}),"\n",(0,react_jsx_runtime.jsx)(_components.pre,{children:(0,react_jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcDataTableTitleBar } from "@ukic/canary-react";\n\nconst DataTableTitleBar = () => (\n  <IcDataTableTitleBar heading="Title Bar" />\n)\n\nexport default DataTableTitleBar;\n'})}),"\n",(0,react_jsx_runtime.jsx)(_components.p,{children:"It is also possible to pass custom elements into the area which contains the title bar heading and description. This flexibility allows the heading tag to be updated if the heading prop is not semantically corrected based on your content structure."}),"\n",(0,react_jsx_runtime.jsx)(dist.Xz,{children:(0,react_jsx_runtime.jsx)(dist.oG,{name:"Slots",children:(0,react_jsx_runtime.jsxs)(components.Ol,{children:[(0,react_jsx_runtime.jsx)(dist_components.yi,{slot:"heading",variant:"h1",children:(0,react_jsx_runtime.jsx)("h3",{children:"Title Bar"})}),(0,react_jsx_runtime.jsxs)("div",{slot:"description",children:[(0,react_jsx_runtime.jsx)(dist_components.mk,{label:"Chip"}),(0,react_jsx_runtime.jsx)(dist_components.mk,{label:"Chip"})]})]})})}),"\n",(0,react_jsx_runtime.jsx)(_components.pre,{children:(0,react_jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import * as React from \"react\";\nimport { IcDataTableTitleBar } from \"@ukic/canary-react\";\nimport { IcTypography, IcChip } from \"@ukic/react\";\n\nconst DataTableTitleBar = () => (\n  <IcDataTableTitleBar>\n    <IcTypography slot='heading' variant='h1'>\n      <h3>Title Bar</h3>\n    </IcTypography>\n    <div slot='description'>\n      <IcChip label='Chip' />\n      <IcChip label='Chip' />\n    </div>\n  </IcDataTableTitleBar>\n)\n\nexport default DataTableTitleBar;\n"})}),"\n",(0,react_jsx_runtime.jsx)(_components.h3,{id:"with-metadata-and-description",children:"With metadata and description"}),"\n",(0,react_jsx_runtime.jsxs)(_components.p,{children:["Data table metadata and description can be added to the Data Table Title Bar via the ",(0,react_jsx_runtime.jsx)(_components.code,{children:"metadata"})," and ",(0,react_jsx_runtime.jsx)(_components.code,{children:"description"})," prop."]}),"\n",(0,react_jsx_runtime.jsx)(dist.Xz,{children:(0,react_jsx_runtime.jsx)(dist.oG,{name:"With metadata and description",children:(0,react_jsx_runtime.jsx)(components.Ol,{heading:"Title Bar",metadata:"128 items | 32gb | Updated: 01/02/03",description:"Data table description that describes the purpose of the table."})})}),"\n",(0,react_jsx_runtime.jsx)(_components.h3,{id:"with-metadata-and-description-code-example",children:"With metadata and description code example"}),"\n",(0,react_jsx_runtime.jsx)(_components.pre,{children:(0,react_jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcDataTableTitleBar } from "@ukic/canary-react";\n\nconst DataTableTitleBar = () => (\n  <IcDataTableTitleBar\n    heading="Title Bar"\n    metadata="128 items | 32gb | Updated: 01/02/03"\n    description="Data table description that describes the purpose of the table."\n  />\n)\n\nexport default DataTableTitleBar;\n'})}),"\n",(0,react_jsx_runtime.jsx)(_components.h3,{id:"hide-density-selector",children:"Hide density selector"}),"\n",(0,react_jsx_runtime.jsxs)(_components.p,{children:["By default, the density selector is displayed on the Data Table Title Bar. To hide it, set ",(0,react_jsx_runtime.jsx)(_components.code,{children:"hideDensitySelect"})," to ",(0,react_jsx_runtime.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,react_jsx_runtime.jsx)(dist.Xz,{children:(0,react_jsx_runtime.jsx)(dist.oG,{name:"Hide density selector",children:(0,react_jsx_runtime.jsx)(components.Ol,{hideDensitySelect:!0,heading:"Title Bar",metadata:"128 items | 32gb | Updated: 01/02/03",description:"Data table description that describes the purpose of the table."})})}),"\n",(0,react_jsx_runtime.jsx)(_components.pre,{children:(0,react_jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcDataTableTitleBar } from "@ukic/canary-react";\n\nconst DataTableTitleBar = () => (\n  <IcDataTableTitleBar\n    hideDensitySelect\n    heading="Title Bar"\n    metadata="128 items | 32gb | Updated: 01/02/03"\n    description="Data table description that describes the purpose of the table."\n  />\n)\n\nexport default DataTableTitleBar;\n'})}),"\n",(0,react_jsx_runtime.jsx)(_components.h3,{id:"custom-actions",children:"Custom actions"}),"\n",(0,react_jsx_runtime.jsx)(_components.p,{children:"Custom actions can be added to the Data Table Title Bar via slots."}),"\n",(0,react_jsx_runtime.jsx)(_components.p,{children:"There are two slots available:"}),"\n",(0,react_jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime.jsxs)(_components.li,{children:[(0,react_jsx_runtime.jsx)(_components.code,{children:"primary-action"})," is suitable for an primary button. The custom element will appear to the right of the Data Table Title Bar."]}),"\n",(0,react_jsx_runtime.jsxs)(_components.li,{children:[(0,react_jsx_runtime.jsx)(_components.code,{children:"custom-actions"})," can be used for secondary actions. The custom element will appear to the left of the density selector if displayed."]}),"\n"]}),"\n",(0,react_jsx_runtime.jsx)(dist.Xz,{children:(0,react_jsx_runtime.jsx)(dist.oG,{name:"Custom actions",children:(0,react_jsx_runtime.jsxs)(components.Ol,{heading:"Title Bar",metadata:"128 items | 32gb | Updated: 01/02/03",description:"Data table description that describes the purpose of the table.",children:[(0,react_jsx_runtime.jsx)(dist_components.$Z,{slot:"primary-action",size:"small",children:(0,react_jsx_runtime.jsx)(_components.p,{children:"Primary"})}),(0,react_jsx_runtime.jsx)(dist_components.$Z,{slot:"custom-actions",variant:"icon","aria-label":"Icon Button",children:(0,react_jsx_runtime.jsx)(SlottedSVG,{path:mdi.TaT,viewBox:"0 0 24 24"})})]})})}),"\n",(0,react_jsx_runtime.jsx)(_components.pre,{children:(0,react_jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import * as React from "react";\nimport { IcDataTableTitleBar } from "@ukic/canary-react";\nimport { IcButton, SlottedSVG } from "@ukic/react";\nimport { mdiImage } from "@mdi/js";\n\nconst DataTableTitleBar = () => (\n  <IcDataTableTitleBar\n    heading="Title Bar"\n    metadata="128 items | 32gb | Updated: 01/02/03"\n    description="Data table description that describes the purpose of the table."\n  >\n    <IcButton slot="primary-action" size="small">\n      Primary\n    </IcButton>\n    <IcButton slot="custom-actions" variant="icon" aria-label="Icon Button">\n      <SlottedSVG path={mdiImage} viewBox="0 0 24 24" />\n    </IcButton>\n  </IcDataTableTitleBar>\n)\n\nexport default DataTableTitleBar;\n'})})]})}const basic=()=>(0,react_jsx_runtime.jsx)(components.Ol,{heading:"Title Bar"});basic.storyName="Basic",basic.parameters={storySource:{source:'<IcDataTableTitleBar heading="Title Bar" />'}};const slots=()=>(0,react_jsx_runtime.jsxs)(components.Ol,{children:[(0,react_jsx_runtime.jsx)(dist_components.yi,{slot:"heading",variant:"h1",children:(0,react_jsx_runtime.jsx)("h3",{children:"Title Bar"})}),(0,react_jsx_runtime.jsxs)("div",{slot:"description",children:[(0,react_jsx_runtime.jsx)(dist_components.mk,{label:"Chip"}),(0,react_jsx_runtime.jsx)(dist_components.mk,{label:"Chip"})]})]});slots.storyName="Slots",slots.parameters={storySource:{source:'<IcDataTableTitleBar><IcTypography slot="heading" variant="h1"><h3>{"Title Bar"}</h3></IcTypography><div slot="description"><IcChip label="Chip" /><IcChip label="Chip" /></div></IcDataTableTitleBar>'}};const withMetadataAndDescription=()=>(0,react_jsx_runtime.jsx)(components.Ol,{heading:"Title Bar",metadata:"128 items | 32gb | Updated: 01/02/03",description:"Data table description that describes the purpose of the table."});withMetadataAndDescription.storyName="With metadata and description",withMetadataAndDescription.parameters={storySource:{source:'<IcDataTableTitleBar heading="Title Bar" metadata="128 items | 32gb | Updated: 01/02/03" description="Data table description that describes the purpose of the table." />'}};const hideDensitySelector=()=>(0,react_jsx_runtime.jsx)(components.Ol,{hideDensitySelect:!0,heading:"Title Bar",metadata:"128 items | 32gb | Updated: 01/02/03",description:"Data table description that describes the purpose of the table."});hideDensitySelector.storyName="Hide density selector",hideDensitySelector.parameters={storySource:{source:'<IcDataTableTitleBar hideDensitySelect heading="Title Bar" metadata="128 items | 32gb | Updated: 01/02/03" description="Data table description that describes the purpose of the table." />'}};const customActions=()=>(0,react_jsx_runtime.jsxs)(components.Ol,{heading:"Title Bar",metadata:"128 items | 32gb | Updated: 01/02/03",description:"Data table description that describes the purpose of the table.",children:[(0,react_jsx_runtime.jsx)(dist_components.$Z,{slot:"primary-action",size:"small",children:(0,react_jsx_runtime.jsx)("p",{children:"Primary"})}),(0,react_jsx_runtime.jsx)(dist_components.$Z,{slot:"custom-actions",variant:"icon","aria-label":"Icon Button",children:(0,react_jsx_runtime.jsx)(SlottedSVG,{path:mdi.TaT,viewBox:"0 0 24 24"})})]});customActions.storyName="Custom actions",customActions.parameters={storySource:{source:'<IcDataTableTitleBar heading="Title Bar" metadata="128 items | 32gb | Updated: 01/02/03" description="Data table description that describes the purpose of the table."><IcButton slot="primary-action" size="small"><p>{"Primary"}</p></IcButton><IcButton slot="custom-actions" variant="icon" aria-label="Icon Button"><SlottedSVG path={mdiImage} viewBox="0 0 24 24" /></IcButton></IcDataTableTitleBar>'}};const componentMeta={title:"React Components/Data Table Title Bar",parameters:{componentAPI:{data:readme_namespaceObject}},component:components.Ol,tags:["stories-mdx"],includeStories:["basic","slots","withMetadataAndDescription","hideDensitySelector","customActions"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_data_table_title_bar_stories=componentMeta,__namedExportsOrder=["basic","slots","withMetadataAndDescription","hideDensitySelector","customActions"]},"../react/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../react/node_modules/react/index.js"),g=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"../react/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../react/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);