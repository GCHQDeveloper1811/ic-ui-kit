"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[8035],{"../react/src/stories/ic-skeleton.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,circle:()=>circle,default:()=>ic_skeleton_stories,deprecatedDark:()=>deprecatedDark,example:()=>example,light:()=>light,rectangle:()=>rectangle,text:()=>ic_skeleton_stories_text});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../react/node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("../react/src/components.ts");const readme_namespaceObject='# ic-skeleton\n\nWhen using the skeleton component, an aria-live level should be applied to the parent element of the skeleton and the element that it is\nrepresenting so that any changes, such as the real element replacing the skeleton placeholder, are announced to assistive technology like screen readers. The recommendation is to use aria-live="polite" over aria-live="recommended" unless changes are critically important. \n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property     | Attribute    | Description                                                                                                                               | Type                                | Default       |\n| ------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------- |\n| `appearance` | `appearance` | The appearance of the skeleton.                                                                                                           | `"default" \\| "light"`              | `"default"`   |\n| `light`      | `light`      | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `appearance` to "light" instead.<br/><br/> | `boolean`                           | `false`       |\n| `variant`    | `variant`    | The variant of the skeleton that will be displayed.                                                                                       | `"circle" \\| "rectangle" \\| "text"` | `"rectangle"` |\n\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Skeleton",component:components.UI}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"rectangle",children:"Rectangle"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Rectangle",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"Default"}),(0,jsx_runtime.jsx)(components.UI,{}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"Inherited from child"}),(0,jsx_runtime.jsx)(components.UI,{children:(0,jsx_runtime.jsx)("div",{style:{height:"200px",width:"450px"},children:"Test text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"Height and width set with styles"}),(0,jsx_runtime.jsx)(components.UI,{style:{height:"200px",width:"200px"}}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"Height set with styles"}),(0,jsx_runtime.jsx)(components.UI,{style:{height:"75px"}}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"Width set with styles"}),(0,jsx_runtime.jsx)(components.UI,{style:{width:"450px"}})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circle",children:"Circle"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Circle",children:(0,jsx_runtime.jsx)(components.UI,{variant:"circle"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"text",children:"Text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Text",children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"h1",children:"h1"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h1",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h2",children:"h2"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h2",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h3",children:"h3"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h3",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"h4"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-large",children:"subtitle-large"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-large",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-small",children:"subtitle-small"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"body"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption",children:"caption"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"label",children:"label"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption-uppercase",children:"caption uppercase"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption-uppercase",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"label-uppercase",children:"label uppercase"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"example",children:"Example"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Example",children:[(0,jsx_runtime.jsx)(components.UI,{variant:"circle",height:"20"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.UI,{})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light",children:"Light"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Light",children:[(0,jsx_runtime.jsx)(components.UI,{variant:"circle",height:"20",appearance:"light"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text",appearance:"light"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.UI,{appearance:"light"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---dark",children:"Deprecated - dark"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Deprecated - dark",children:[(0,jsx_runtime.jsx)(components.UI,{variant:"circle",height:"20",dark:"true"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text",dark:"true"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.UI,{dark:"true"})]})})]})}const rectangle=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"Default"}),(0,jsx_runtime.jsx)(components.UI,{}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"Inherited from child"}),(0,jsx_runtime.jsx)(components.UI,{children:(0,jsx_runtime.jsx)("div",{style:{height:"200px",width:"450px"},children:"Test text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"Height and width set with styles"}),(0,jsx_runtime.jsx)(components.UI,{style:{height:"200px",width:"200px"}}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"Height set with styles"}),(0,jsx_runtime.jsx)(components.UI,{style:{height:"75px"}}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"Width set with styles"}),(0,jsx_runtime.jsx)(components.UI,{style:{width:"450px"}})]});rectangle.storyName="Rectangle",rectangle.parameters={storySource:{source:'<IcTypography variant="h4">{"Default"}</IcTypography>\n<IcSkeleton />\n<IcTypography variant="h4">{"Inherited from child"}</IcTypography>\n<IcSkeleton><div style={{\n    height: "200px",\n    width: "450px"\n  }}>{"Test text"}</div></IcSkeleton>\n<IcTypography variant="h4">{"Height and width set with styles"}</IcTypography>\n<IcSkeleton style={{\n  height: "200px",\n  width: "200px"\n}} />\n<IcTypography variant="h4">{"Height set with styles"}</IcTypography>\n<IcSkeleton style={{\n  height: "75px"\n}} />\n<IcTypography variant="h4">{"Width set with styles"}</IcTypography>\n<IcSkeleton style={{\n  width: "450px"\n}} />'}};const circle=()=>(0,jsx_runtime.jsx)(components.UI,{variant:"circle"});circle.storyName="Circle",circle.parameters={storySource:{source:'<IcSkeleton variant="circle" />'}};const ic_skeleton_stories_text=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.Cu,{variant:"h1",children:"h1"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h1",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h2",children:"h2"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h2",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h3",children:"h3"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h3",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:"h4"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"h4",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-large",children:"subtitle-large"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-large",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-small",children:"subtitle-small"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:"body"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"body",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption",children:"caption"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"label",children:"label"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption-uppercase",children:"caption uppercase"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption-uppercase",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)(components.Cu,{variant:"label-uppercase",children:"label uppercase"}),(0,jsx_runtime.jsx)(components.Cu,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})})]});ic_skeleton_stories_text.storyName="Text",ic_skeleton_stories_text.parameters={storySource:{source:'<IcTypography variant="h1">{"h1"}</IcTypography>\n<IcTypography variant="h1"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="h2">{"h2"}</IcTypography>\n<IcTypography variant="h2"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="h3">{"h3"}</IcTypography>\n<IcTypography variant="h3"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="h4">{"h4"}</IcTypography>\n<IcTypography variant="h4"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="subtitle-large">{"subtitle-large"}</IcTypography>\n<IcTypography variant="subtitle-large"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="subtitle-small">{"subtitle-small"}</IcTypography>\n<IcTypography variant="subtitle-small"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="body">{"body"}</IcTypography>\n<IcTypography variant="body"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="caption">{"caption"}</IcTypography>\n<IcTypography variant="caption"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="label">{"label"}</IcTypography>\n<IcTypography variant="subtitle-small"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="caption-uppercase">{"caption uppercase"}</IcTypography>\n<IcTypography variant="caption-uppercase"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="label-uppercase">{"label uppercase"}</IcTypography>\n<IcTypography variant="subtitle-small"><IcSkeleton variant="text" /></IcTypography>'}};const example=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.UI,{variant:"circle",height:"20"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.UI,{})]});example.storyName="Example",example.parameters={storySource:{source:'<IcSkeleton variant="circle" height="20" />\n<div style={{\n  height: "8px"\n}} />\n<IcTypography variant="caption"><IcSkeleton variant="text" /></IcTypography>\n<div style={{\n  height: "8px"\n}} />\n<IcSkeleton />'}};const light=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.UI,{variant:"circle",height:"20",appearance:"light"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text",appearance:"light"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.UI,{appearance:"light"})]});light.storyName="Light",light.parameters={storySource:{source:'<IcSkeleton variant="circle" height="20" appearance="light" />\n<div style={{\n  height: "8px"\n}} />\n<IcTypography variant="caption"><IcSkeleton variant="text" appearance="light" /></IcTypography>\n<div style={{\n  height: "8px"\n}} />\n<IcSkeleton appearance="light" />'}};const deprecatedDark=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.UI,{variant:"circle",height:"20",dark:"true"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.Cu,{variant:"caption",children:(0,jsx_runtime.jsx)(components.UI,{variant:"text",dark:"true"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.UI,{dark:"true"})]});deprecatedDark.storyName="Deprecated - dark",deprecatedDark.parameters={storySource:{source:'<IcSkeleton variant="circle" height="20" dark="true" />\n<div style={{\n  height: "8px"\n}} />\n<IcTypography variant="caption"><IcSkeleton variant="text" dark="true" /></IcTypography>\n<div style={{\n  height: "8px"\n}} />\n<IcSkeleton dark="true" />'}};const componentMeta={title:"Skeleton",component:components.UI,tags:["stories-mdx"],includeStories:["rectangle","circle","text","example","light","deprecatedDark"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_skeleton_stories=componentMeta,__namedExportsOrder=["rectangle","circle","text","example","light","deprecatedDark"]}}]);