"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[2677],{"../canary-web-components/dist/esm/helpers-5271897c.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>getFilteredMenuOptions,b:()=>getOptionsWithoutGroupTitlesCount,c:()=>removeDisabledFalse,d:()=>addFormResetListener,e:()=>renderHiddenInput,f:()=>getInputDescribedByText,g:()=>getLabelFromValue,h:()=>isMobileOrTablet,i:()=>inheritAttributes,j:()=>hasValidationStatus,k:()=>isMacDevice,l:()=>checkResizeObserver,o:()=>onComponentRequiredPropUndefined,r:()=>removeFormResetListener});const inheritAttributes=(element,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(element.hasAttribute(attr)){null!==element.getAttribute(attr)&&(attributeObject[attr]=element.getAttribute(attr)),element.removeAttribute(attr)}})),attributeObject},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputDescribedByText=(inputId,helperText,validationText)=>{return`${helperText?(id=inputId,id+"-helper-text"):""} ${validationText?(id=>id+"-validation-text")(inputId):""}`.trim();var id},isMobileOrTablet=()=>"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0,getLabelFromValue=(value,options,valueField="value",labelField="label")=>{const ungroupedOptions=[];if(options.length>0&&options.map){options.map((option=>{option.children?option.children.map((option=>ungroupedOptions.push(option))):ungroupedOptions.push(option)}));const matchingValue=ungroupedOptions.find((option=>option[valueField]===value));if(void 0!==matchingValue)return matchingValue[labelField]}},getFilteredMenuOptions=(options,includeDescriptions,searchString,position,labelField="label")=>options.filter((option=>{var _a;const label=option[labelField].toLowerCase(),description=null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase(),lowerSearchString=searchString.toLowerCase();return"anywhere"===position?includeDescriptions?label.includes(lowerSearchString)||(null==description?void 0:description.includes(lowerSearchString)):label.includes(lowerSearchString):includeDescriptions?label.startsWith(lowerSearchString)||(null==description?void 0:description.startsWith(lowerSearchString)):label.startsWith(lowerSearchString)})),getOptionsWithoutGroupTitlesCount=options=>{const optionsWithoutGroupTitles=[];return options.length>0&&options.map&&options.map((option=>{option.children?option.children.map((option=>optionsWithoutGroupTitles.push(option))):optionsWithoutGroupTitles.push(option)})),optionsWithoutGroupTitles.length},getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar);Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));const hasValidationStatus=(status,disabled)=>""!==status&&!disabled,onComponentRequiredPropUndefined=(props,component)=>{for(let i=0;i<props.length;i++){const{prop,propName}=props[i];null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}},kebabToCamelCase=kebabCase=>{const individualWords=(kebabCase=kebabCase.toLowerCase()).split("-");let camelCase=individualWords[0];for(let i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=el=>el.closest("FORM"),addFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},isMacDevice=()=>window.navigator.userAgent.toUpperCase().indexOf("MAC")>=0},"../canary-web-components/dist/esm/ic-pagination-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_pagination_bar:()=>PaginationBar});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-5271897c.js");const PaginationBar=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icPageChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icPageChange",7),this.icItemsPerPageChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icItemsPerPageChange",7),this.PAGINATION="ic-pagination",this.TEXT_FIELD="ic-text-field",this.TOOLTIP="ic-tooltip",this.PAGE_INPUT_FIELD_ID="go-to-page-input",this.INVALID_PAGE_ERROR="Please enter a valid page",this.NAN_ERROR="Please enter a number",this.resizeObserver=null,this.changeItemsPerPage=()=>{const value=this.el.shadowRoot.querySelector("ic-select").value;this.itemsPerPage=value,this.setNumberPages(),this.setUpperBound();const pagination=this.el.shadowRoot.querySelector(this.PAGINATION);this.currentPage>this.totalPages&&(pagination.setCurrentPage(this.totalPages),this.currentPage=this.totalPages),this.icItemsPerPageChange.emit({value:Number(this.itemsPerPage)}),this.icPageChange.emit({value:this.currentPage})},this.changePage=page=>{this.currentPage=page,this.lowerBound=1!==page?(page-1)*Number(this.itemsPerPage)+1:page,this.setUpperBound()},this.goToPage=()=>{const input=this.el.shadowRoot.querySelector(this.TEXT_FIELD),page=Number(input.value),tooltip=this.el.shadowRoot.querySelector("ic-tooltip");if(page<=this.totalPages&&page>0){this.changePage(page);this.el.shadowRoot.querySelector(this.PAGINATION).setCurrentPage(page),this.currentPage=page,input.value="",this.icPageChange.emit({value:page}),tooltip.displayTooltip(!1,!1),input.validationStatus=""}else this.inputError=this.INVALID_PAGE_ERROR,input.validationStatus="error",input.setFocus()},this.handleBlur=()=>{var _a,_b;const textField=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(this.TEXT_FIELD),tooltip=null===(_b=this.el.shadowRoot)||void 0===_b?void 0:_b.querySelector(this.TOOLTIP);(Number(textField.value)<=this.totalPages&&Number(textField.value)>0||""===textField.value)&&(textField.validationStatus=""),tooltip.displayTooltip(!1,!1)},this.handleFocus=()=>{var _a,_b;const textField=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(this.TEXT_FIELD),tooltip=null===(_b=this.el.shadowRoot)||void 0===_b?void 0:_b.querySelector(this.TOOLTIP);"error"===textField.validationStatus&&tooltip.displayTooltip(!0,!0)},this.handleInputChange=()=>{const tooltip=this.el.shadowRoot.querySelector(this.TOOLTIP),textField=this.el.shadowRoot.querySelector(this.TEXT_FIELD),inputValue=parseInt(textField.value);(inputValue>this.totalPages||inputValue<=0)&&(this.inputError=this.INVALID_PAGE_ERROR,tooltip.displayTooltip(!0,!0),textField.validationStatus="error",textField.focus())},this.handleKeydown=ev=>{const tooltip=this.el.shadowRoot.querySelector(this.TOOLTIP),textField=this.el.shadowRoot.querySelector(this.TEXT_FIELD);"Enter"===ev.key?"error"===textField.validationStatus?tooltip.displayTooltip(!0,!0):this.goToPage():(tooltip.displayTooltip(!1,!1),textField.validationStatus="")},this.handleKeyUp=ev=>{const tooltip=this.el.shadowRoot.querySelector(this.TOOLTIP),textField=this.el.shadowRoot.querySelector(this.TEXT_FIELD),inputValue=parseInt(textField.value);Number.isNaN(inputValue)&&"Backspace"!==ev.key&&"Enter"!==ev.key&&"Tab"!==ev.key&&"Shift"!==ev.key&&(this.inputError=this.NAN_ERROR,tooltip.displayTooltip(!0,!1),textField.validationStatus="error")},this.paginationShouldWrap=()=>{const pagination=this.el.shadowRoot.querySelector(this.PAGINATION);"simple"===this.paginationControl&&(pagination.clientHeight>63?this.paginationWrapped=!0:this.paginationWrapped=!1)},this.resizeObserverCallback=currSize=>{(currSize-this.paginationWidth>50||currSize-this.paginationWidth<-50)&&(this.paginationWidth=currSize,this.paginationShouldWrap())},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{const currSize=this.paginationBarEl.clientWidth;this.resizeObserverCallback(currSize)})),this.resizeObserver.observe(this.paginationBarEl)},this.setDefaultItemsPerPage=()=>{this.itemsPerPage=this.itemsPerPageOptions[0].value},this.setDefaultItemsPerPageOptions=()=>{this.itemsPerPageOptions=this.totalItems<=100?[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"},{label:"All",value:String(this.totalItems)}]:[{label:"25",value:"25"},{label:"100",value:"100"},{label:"1000",value:"1000"},{label:"All",value:String(this.totalItems)}]},this.setGoToPageInputStyles=()=>{var _a,_b;const textField=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(`.${this.PAGE_INPUT_FIELD_ID}`);if(void 0!==textField){const input=null===(_b=null==textField?void 0:textField.shadowRoot)||void 0===_b?void 0:_b.querySelector("input");void 0!==input&&(input.style.textAlign="center",input.style.padding="0")}},this.setNumberPages=()=>{this.totalPages=Math.ceil(this.totalItems/Number(this.itemsPerPage))},this.setUpperBound=()=>{this.upperBound=Math.min(this.lowerBound+Number(this.itemsPerPage)-1,this.totalItems)},this.trimItemsPerPageOptions=()=>{this.itemsPerPageOptions=this.itemsPerPageOptions.slice(0,3),this.itemsPerPageOptions.push({label:"All",value:String(this.totalItems)});for(let i=0;i<this.itemsPerPageOptions.length-1;i++)this.totalItems<=Number(this.itemsPerPageOptions[i].value)&&this.itemsPerPageOptions.splice(i,this.itemsPerPageOptions.length-(i+1))},this.currentPage=1,this.inputError="Please enter a valid page",this.itemsPerPage=void 0,this.lowerBound=1,this.paginationWidth=void 0,this.paginationWrapped=!1,this.totalPages=void 0,this.upperBound=void 0,this.alignment="right",this.appearance="default",this.itemLabel="Item",this.itemsPerPageOptions=void 0,this.paginationControl="simple",this.paginationType="page",this.pageLabel="Page",this.showGoToPageControl=!1,this.showItemsPerPage=!0,this.showItemsPerPageControl=!1,this.totalItems=void 0}disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}componentWillLoad(){void 0!==this.itemsPerPageOptions&&null!==this.itemsPerPageOptions||this.setDefaultItemsPerPageOptions(),this.trimItemsPerPageOptions(),this.setDefaultItemsPerPage(),this.setNumberPages(),this.setUpperBound()}componentDidLoad(){this.paginationWidth=this.paginationBarEl.clientWidth,(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.l)(this.runResizeObserver),this.setGoToPageInputStyles(),this.paginationShouldWrap()}pageChangeHandler(ev){const page=ev.detail.value;this.changePage(page)}render(){const{appearance,alignment,itemsPerPageOptions,PAGE_INPUT_FIELD_ID,paginationControl,paginationType,showItemsPerPage,showItemsPerPageControl,showGoToPageControl}=this,focusElFromLabel=el=>{var _a;null===(_a=this.paginationBarEl.querySelector(el))||void 0===_a||_a.setFocus()};return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"pagination-bar":!0,[`pagination-bar-${alignment}`]:!0},ref:el=>this.paginationBarEl=el},(showItemsPerPage||showItemsPerPageControl)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"item-controls"},showItemsPerPageControl&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"items-per-page-holder"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:{[`pagination-text-${appearance}`]:!0,"items-per-page-control-label":!0},variant:"label",onClick:()=>focusElFromLabel("ic-select")},this.itemLabel,"s per ",this.pageLabel.toLowerCase()),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-select",{small:!0,label:"items-per-page-input",class:"items-per-page-input",hideLabel:!0,options:itemsPerPageOptions,value:this.itemsPerPage,onIcChange:()=>this.changeItemsPerPage()})),showItemsPerPage&&"data"===paginationType?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:{[`pagination-text-${appearance}`]:!0,"item-pagination-label":!0},variant:"label","aria-live":"polite"},this.lowerBound," - ",this.upperBound," of ",this.totalItems," ",this.itemLabel.toLowerCase(),this.totalItems>1?"s":""):showItemsPerPage&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:{[`pagination-text-${appearance}`]:!0,"page-pagination-label":!0},variant:"label","aria-live":"polite"},this.pageLabel," ",this.currentPage," of ",this.totalPages)),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"pagination-controls":!0,"pagination-controls-wrap":this.paginationWrapped}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"pagination-holder"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-pagination",{appearance,type:paginationControl,pages:this.totalPages})),showGoToPageControl&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"go-to-page-holder"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:{[`pagination-text-${appearance}`]:!0},variant:"label",onClick:()=>focusElFromLabel("ic-text-field")},"Go to ",this.pageLabel.toLowerCase()),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-tooltip",{label:this.inputError,target:`#${PAGE_INPUT_FIELD_ID}`,disableHover:!0,disableClick:!0},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-text-field",{type:"number",size:"small",label:PAGE_INPUT_FIELD_ID,class:PAGE_INPUT_FIELD_ID,id:PAGE_INPUT_FIELD_ID,hideLabel:!0,onKeyDown:ev=>this.handleKeydown(ev),onKeyUp:ev=>this.handleKeyUp(ev),onInput:()=>this.handleInputChange(),max:this.totalPages,min:"1",validationInlineInternal:!0,onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus()})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{appearance,variant:"secondary",onClick:()=>this.goToPage(),size:"small",class:"go-to-page-button"},"Go"))))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};PaginationBar.style=":host(){display:block}.pagination-bar{height:3.5rem;display:flex;align-items:center;justify-content:flex-end;gap:var(--ic-space-xl);padding:var(--ic-space-xs) var(--ic-space-md);box-sizing:border-box}.pagination-bar-left{justify-content:flex-start}.item-controls{display:flex;align-items:center;gap:var(--ic-space-xl)}.pagination-bar-space-between .item-controls{margin-right:auto}.items-per-page-holder{display:flex;align-items:center;gap:var(--ic-space-xs)}.items-per-page-input{--input-width:5rem}.pagination-controls{display:flex;align-items:center;gap:var(--ic-space-xl)}.pagination-controls-wrap{flex-direction:column;align-items:flex-end;gap:var(--ic-space-xs)}.pagination-bar-space-between .pagination-controls{margin-left:auto}.go-to-page-holder{display:flex;align-items:center;gap:var(--ic-space-xs)}.go-to-page-input{--input-width:var(--ic-space-xl)}.go-to-page-button{--min-width:var(--ic-space-xl)}.pagination-text-default,.pagination-text-dark,.pagination-text-light{white-space:nowrap}.pagination-text-light{color:var(--ic-color-white-text)}@media screen and (max-width: 768px){.pagination-bar{flex-direction:column;align-items:flex-end;height:-moz-fit-content;height:fit-content;gap:var(--ic-space-xs)}.pagination-bar-left{align-items:flex-start}}@media screen and (max-width: 320px){.item-controls,.pagination-controls{flex-direction:column;align-items:flex-end;gap:var(--ic-space-xs)}.pagination-bar-left .item-controls,.pagination-bar-left .pagination-controls,.pagination-bar-space-between .item-controls,.pagination-bar-space-between .pagination-controls{align-items:flex-start}}"}}]);