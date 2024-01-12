"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[2732],{"../canary-web-components/dist/esm/helpers-ed4fb8f1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>getFilteredMenuOptions,b:()=>removeDisabledFalse,c:()=>addFormResetListener,d:()=>renderHiddenInput,e:()=>getInputDescribedByText,f:()=>isMobileOrTablet,g:()=>getLabelFromValue,h:()=>hasValidationStatus,i:()=>inheritAttributes,j:()=>isMacDevice,k:()=>checkResizeObserver,o:()=>onComponentRequiredPropUndefined,r:()=>removeFormResetListener});__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js");var inheritAttributes=function inheritAttributes(element){var attributeObject={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((function(attr){element.hasAttribute(attr)&&(null!==element.getAttribute(attr)&&(attributeObject[attr]=element.getAttribute(attr)),element.removeAttribute(attr))})),attributeObject},renderHiddenInput=function renderHiddenInput(always,container,name,value,disabled){if(void 0!==name&&(always||hasShadowDom(container))){var inputs=container.querySelectorAll("input.ic-input"),input=Array.from(inputs).filter((function(el){return container===el.parentElement}))[0];null==input&&((input=container.ownerDocument.createElement("input")).type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},getInputDescribedByText=function getInputDescribedByText(inputId,helperText,validationText){return((helperText?function getInputHelperTextID(id){return id+"-helper-text"}(inputId):"")+" "+(validationText?function getInputValidationTextID(id){return id+"-validation-text"}(inputId):"")).trim()},isMobileOrTablet=function isMobileOrTablet(){return"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0},getLabelFromValue=function getLabelFromValue(value,options){var valueField=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",labelField=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"label",ungroupedOptions=[];if(options.length>0&&options.map){options.map((function(option){option.children?option.children.map((function(option){return ungroupedOptions.push(option)})):ungroupedOptions.push(option)}));var matchingValue=ungroupedOptions.find((function(option){return option[valueField]===value}));if(void 0!==matchingValue)return matchingValue[labelField]}},getFilteredMenuOptions=function getFilteredMenuOptions(options,includeDescriptions,searchString,position){var labelField=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"label";return options.filter((function(option){var _a,label=option[labelField].toLowerCase(),description=null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase(),lowerSearchString=searchString.toLowerCase();return"anywhere"===position?includeDescriptions?label.includes(lowerSearchString)||(null==description?void 0:description.includes(lowerSearchString)):label.includes(lowerSearchString):includeDescriptions?label.startsWith(lowerSearchString)||(null==description?void 0:description.startsWith(lowerSearchString)):label.startsWith(lowerSearchString)}))},getCssProperty=function getCssProperty(cssVar){return getComputedStyle(document.documentElement).getPropertyValue(cssVar)};Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));var hasValidationStatus=function hasValidationStatus(status,disabled){return""!==status&&!disabled},onComponentRequiredPropUndefined=function onComponentRequiredPropUndefined(props,component){for(var i=0;i<props.length;i++){var _props$i=props[i],prop=_props$i.prop,propName=_props$i.propName;null==prop&&console.error("No "+propName+" specified for "+component+" component - prop '"+propName+"' (web components) / '"+kebabToCamelCase(propName)+"' (react) required")}},kebabToCamelCase=function kebabToCamelCase(kebabCase){for(var individualWords=(kebabCase=kebabCase.toLowerCase()).split("-"),camelCase=individualWords[0],i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=function checkResizeObserver(callbackFn){"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=function getForm(el){return el.closest("FORM")},addFormResetListener=function addFormResetListener(el,callbackFn){var form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=function removeFormResetListener(el,callbackFn){var form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=function removeDisabledFalse(disabled,element){disabled||element.removeAttribute("disabled")},isMacDevice=function isMacDevice(){return window.navigator.userAgent.toUpperCase().indexOf("MAC")>=0}},"../canary-web-components/dist/esm/ic-pagination-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_pagination_bar:()=>PaginationBar});__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.number.is-nan.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_93509377_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_ed4fb8f1_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../canary-web-components/dist/esm/helpers-ed4fb8f1.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var PaginationBar=function(){function PaginationBar(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PaginationBar),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.r)(this,hostRef),this.icPageChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.c)(this,"icPageChange",7),this.icItemsPerPageChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.c)(this,"icItemsPerPageChange",7),this.PAGINATION="ic-pagination",this.TEXT_FIELD="ic-text-field",this.TOOLTIP="ic-tooltip",this.PAGE_INPUT_FIELD_ID="go-to-page-input",this.INVALID_PAGE_ERROR="Please enter a valid page",this.NAN_ERROR="Please enter a number",this.resizeObserver=null,this.changeItemsPerPage=function(){var value=_this.el.shadowRoot.querySelector("ic-select").value;_this.itemsPerPage=value,_this.setNumberPages(),_this.setUpperBound();var pagination=_this.el.shadowRoot.querySelector(_this.PAGINATION);_this.currentPage>_this.totalPages&&(pagination.setCurrentPage(_this.totalPages),_this.currentPage=_this.totalPages),_this.icItemsPerPageChange.emit({value:Number(_this.itemsPerPage)}),_this.icPageChange.emit({value:_this.currentPage})},this.changePage=function(page){_this.currentPage=page,_this.lowerBound=1!==page?(page-1)*Number(_this.itemsPerPage)+1:page,_this.setUpperBound()},this.goToPage=function(){var input=_this.el.shadowRoot.querySelector(_this.TEXT_FIELD),page=Number(input.value),tooltip=_this.el.shadowRoot.querySelector("ic-tooltip");page<=_this.totalPages&&page>0?(_this.changePage(page),_this.el.shadowRoot.querySelector(_this.PAGINATION).setCurrentPage(page),_this.currentPage=page,input.value="",_this.icPageChange.emit({value:page}),tooltip.displayTooltip(!1,!1),input.validationStatus=""):(_this.inputError=_this.INVALID_PAGE_ERROR,input.validationStatus="error",input.setFocus())},this.handleBlur=function(){var _a,_b,textField=null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(_this.TEXT_FIELD),tooltip=null===(_b=_this.el.shadowRoot)||void 0===_b?void 0:_b.querySelector(_this.TOOLTIP);(Number(textField.value)<=_this.totalPages&&Number(textField.value)>0||""===textField.value)&&(textField.validationStatus=""),tooltip.displayTooltip(!1,!1)},this.handleFocus=function(){var _a,_b,textField=null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector(_this.TEXT_FIELD),tooltip=null===(_b=_this.el.shadowRoot)||void 0===_b?void 0:_b.querySelector(_this.TOOLTIP);"error"===textField.validationStatus&&tooltip.displayTooltip(!0,!0)},this.handleInputChange=function(){var tooltip=_this.el.shadowRoot.querySelector(_this.TOOLTIP),textField=_this.el.shadowRoot.querySelector(_this.TEXT_FIELD),inputValue=parseInt(textField.value);(inputValue>_this.totalPages||inputValue<=0)&&(_this.inputError=_this.INVALID_PAGE_ERROR,tooltip.displayTooltip(!0,!0),textField.validationStatus="error",textField.focus())},this.handleKeydown=function(ev){var tooltip=_this.el.shadowRoot.querySelector(_this.TOOLTIP),textField=_this.el.shadowRoot.querySelector(_this.TEXT_FIELD);"Enter"===ev.key?"error"===textField.validationStatus?tooltip.displayTooltip(!0,!0):_this.goToPage():(tooltip.displayTooltip(!1,!1),textField.validationStatus="")},this.handleKeyUp=function(ev){var tooltip=_this.el.shadowRoot.querySelector(_this.TOOLTIP),textField=_this.el.shadowRoot.querySelector(_this.TEXT_FIELD),inputValue=parseInt(textField.value);Number.isNaN(inputValue)&&"Backspace"!==ev.key&&"Enter"!==ev.key&&"Tab"!==ev.key&&"Shift"!==ev.key&&(_this.inputError=_this.NAN_ERROR,tooltip.displayTooltip(!0,!1),textField.validationStatus="error")},this.paginationShouldWrap=function(){var pagination=_this.el.shadowRoot.querySelector(_this.PAGINATION);"simple"===_this.paginationControl&&(pagination.clientHeight>63?_this.paginationWrapped=!0:_this.paginationWrapped=!1)},this.resizeObserverCallback=function(currSize){(currSize-_this.paginationWidth>50||currSize-_this.paginationWidth<-50)&&(_this.paginationWidth=currSize,_this.paginationShouldWrap())},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){var currSize=_this.paginationBarEl.clientWidth;_this.resizeObserverCallback(currSize)})),_this.resizeObserver.observe(_this.paginationBarEl)},this.setDefaultItemsPerPage=function(){_this.itemsPerPage=_this.itemsPerPageOptions[0].value},this.setDefaultItemsPerPageOptions=function(){_this.itemsPerPageOptions=_this.totalItems<=100?[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"},{label:"All",value:String(_this.totalItems)}]:[{label:"25",value:"25"},{label:"100",value:"100"},{label:"1000",value:"1000"},{label:"All",value:String(_this.totalItems)}]},this.setGoToPageInputStyles=function(){var _a,_b,textField=null===(_a=_this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector("."+_this.PAGE_INPUT_FIELD_ID);if(void 0!==textField){var input=null===(_b=null==textField?void 0:textField.shadowRoot)||void 0===_b?void 0:_b.querySelector("input");void 0!==input&&(input.style.textAlign="center",input.style.padding="0")}},this.setNumberPages=function(){_this.totalPages=Math.ceil(_this.totalItems/Number(_this.itemsPerPage))},this.setUpperBound=function(){_this.upperBound=Math.min(_this.lowerBound+Number(_this.itemsPerPage)-1,_this.totalItems)},this.trimItemsPerPageOptions=function(){_this.itemsPerPageOptions=_this.itemsPerPageOptions.slice(0,3),_this.itemsPerPageOptions.push({label:"All",value:String(_this.totalItems)});for(var i=0;i<_this.itemsPerPageOptions.length-1;i++)_this.totalItems<=Number(_this.itemsPerPageOptions[i].value)&&_this.itemsPerPageOptions.splice(i,_this.itemsPerPageOptions.length-(i+1))},this.currentPage=1,this.inputError="Please enter a valid page",this.itemsPerPage=void 0,this.lowerBound=1,this.paginationWidth=void 0,this.paginationWrapped=!1,this.totalPages=void 0,this.upperBound=void 0,this.alignment="right",this.appearance="default",this.itemLabel="Item",this.itemsPerPageOptions=void 0,this.paginationControl="simple",this.paginationType="page",this.pageLabel="Page",this.showGoToPageControl=!1,this.showItemsPerPage=!0,this.showItemsPerPageControl=!1,this.totalItems=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(PaginationBar,[{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){void 0!==this.itemsPerPageOptions&&null!==this.itemsPerPageOptions||this.setDefaultItemsPerPageOptions(),this.trimItemsPerPageOptions(),this.setDefaultItemsPerPage(),this.setNumberPages(),this.setUpperBound()}},{key:"componentDidLoad",value:function componentDidLoad(){this.paginationWidth=this.paginationBarEl.clientWidth,(0,_helpers_ed4fb8f1_js__WEBPACK_IMPORTED_MODULE_12__.k)(this.runResizeObserver),this.setGoToPageInputStyles(),this.paginationShouldWrap()}},{key:"pageChangeHandler",value:function pageChangeHandler(ev){var page=ev.detail.value;this.changePage(page)}},{key:"render",value:function render(){var _class,_class2,_class3,_class4,_class5,_class6,_this2=this,appearance=this.appearance,alignment=this.alignment,itemsPerPageOptions=this.itemsPerPageOptions,PAGE_INPUT_FIELD_ID=this.PAGE_INPUT_FIELD_ID,paginationControl=this.paginationControl,paginationType=this.paginationType,showItemsPerPage=this.showItemsPerPage,showItemsPerPageControl=this.showItemsPerPageControl,showGoToPageControl=this.showGoToPageControl,focusElFromLabel=function focusElFromLabel(el){var _a;null===(_a=_this2.paginationBarEl.querySelector(el))||void 0===_a||_a.setFocus()};return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("div",{class:(_class={},_class["pagination-bar"]=!0,_class["pagination-bar-"+alignment]=!0,_class),ref:function ref(el){return _this2.paginationBarEl=el}},(showItemsPerPage||showItemsPerPageControl)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("div",{class:"item-controls"},showItemsPerPageControl&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("div",{class:"items-per-page-holder"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("ic-typography",{class:(_class2={},_class2["pagination-text-"+appearance]=!0,_class2["items-per-page-control-label"]=!0,_class2),variant:"label",onClick:function onClick(){return focusElFromLabel("ic-select")}},this.itemLabel,"s per ",this.pageLabel.toLowerCase()),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("ic-select",{small:!0,label:"items-per-page-input",class:"items-per-page-input",hideLabel:!0,options:itemsPerPageOptions,value:this.itemsPerPage,onIcChange:function onIcChange(){return _this2.changeItemsPerPage()}})),showItemsPerPage&&"data"===paginationType?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("ic-typography",{class:(_class3={},_class3["pagination-text-"+appearance]=!0,_class3["item-pagination-label"]=!0,_class3),variant:"label","aria-live":"polite"},this.lowerBound," - ",this.upperBound," of ",this.totalItems," ",this.itemLabel.toLowerCase(),this.totalItems>1?"s":""):showItemsPerPage&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("ic-typography",{class:(_class4={},_class4["pagination-text-"+appearance]=!0,_class4["page-pagination-label"]=!0,_class4),variant:"label","aria-live":"polite"},this.pageLabel," ",this.currentPage," of ",this.totalPages)),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("div",{class:(_class5={},_class5["pagination-controls"]=!0,_class5["pagination-controls-wrap"]=this.paginationWrapped,_class5)},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("div",{class:"pagination-holder"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("ic-pagination",{appearance,type:paginationControl,pages:this.totalPages})),showGoToPageControl&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("div",{class:"go-to-page-holder"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("ic-typography",{class:(_class6={},_class6["pagination-text-"+appearance]=!0,_class6),variant:"label",onClick:function onClick(){return focusElFromLabel("ic-text-field")}},"Go to ",this.pageLabel.toLowerCase()),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("ic-tooltip",{label:this.inputError,target:"#"+PAGE_INPUT_FIELD_ID,disableHover:!0,disableClick:!0},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("ic-text-field",{type:"number",size:"small",label:PAGE_INPUT_FIELD_ID,class:PAGE_INPUT_FIELD_ID,id:PAGE_INPUT_FIELD_ID,hideLabel:!0,onKeyDown:function onKeyDown(ev){return _this2.handleKeydown(ev)},onKeyUp:function onKeyUp(ev){return _this2.handleKeyUp(ev)},onInput:function onInput(){return _this2.handleInputChange()},max:this.totalPages,min:"1",validationInlineInternal:!0,onBlur:function onBlur(){return _this2.handleBlur()},onFocus:function onFocus(){return _this2.handleFocus()}})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("ic-button",{appearance,variant:"secondary",onClick:function onClick(){return _this2.goToPage()},size:"small",class:"go-to-page-button"},"Go"))))}},{key:"el",get:function get(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.g)(this)}}]),PaginationBar}();PaginationBar.style=":host(){display:block}.pagination-bar{height:3.5rem;display:flex;align-items:center;justify-content:flex-end;gap:var(--ic-space-xl);padding:var(--ic-space-xs) var(--ic-space-md);box-sizing:border-box}.pagination-bar-left{justify-content:flex-start}.item-controls{display:flex;align-items:center;gap:var(--ic-space-xl)}.pagination-bar-space-between .item-controls{margin-right:auto}.items-per-page-holder{display:flex;align-items:center;gap:var(--ic-space-xs)}.items-per-page-input{--input-width:5rem}.pagination-controls{display:flex;align-items:center;gap:var(--ic-space-xl)}.pagination-controls-wrap{flex-direction:column;align-items:flex-end;gap:var(--ic-space-xs)}.pagination-bar-space-between .pagination-controls{margin-left:auto}.go-to-page-holder{display:flex;align-items:center;gap:var(--ic-space-xs)}.go-to-page-input{--input-width:var(--ic-space-xl)}.go-to-page-button{--min-width:var(--ic-space-xl)}.pagination-text-default,.pagination-text-dark,.pagination-text-light{white-space:nowrap}.pagination-text-light{color:var(--ic-color-white-text)}@media screen and (max-width: 768px){.pagination-bar{flex-direction:column;align-items:flex-end;height:-moz-fit-content;height:fit-content;gap:var(--ic-space-xs)}.pagination-bar-left{align-items:flex-start}}@media screen and (max-width: 320px){.item-controls,.pagination-controls{flex-direction:column;align-items:flex-end;gap:var(--ic-space-xs)}.pagination-bar-left .item-controls,.pagination-bar-left .pagination-controls,.pagination-bar-space-between .item-controls,.pagination-bar-space-between .pagination-controls{align-items:flex-start}}"}}]);