"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[7510],{"../canary-web-components/dist/esm/helpers-8df79303.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var IcInformationStatus,IcThemeForegroundEnum,IcDateInputMonths,IcShortDayNames,IcDayNames,IcWeekDays;__webpack_require__.d(__webpack_exports__,{I:()=>IcDayNames,a:()=>IcDateInputMonths,b:()=>IcWeekDays,c:()=>IcShortDayNames,d:()=>getLabelFromValue,e:()=>getFilteredMenuOptions,f:()=>getOptionsWithoutGroupTitlesCount,g:()=>getSlotContent,h:()=>inheritAttributes,i:()=>isSlotUsed,j:()=>removeDisabledFalse,k:()=>addFormResetListener,l:()=>renderHiddenInput,m:()=>getInputDescribedByText,n:()=>isMobileOrTablet,o:()=>onComponentRequiredPropUndefined,p:()=>IcThemeForegroundEnum,q:()=>hasValidationStatus,r:()=>removeFormResetListener,s:()=>stringEnumToArray,t:()=>IcInformationStatus,u:()=>isEmptyString,v:()=>isNumeric,w:()=>checkResizeObserver,x:()=>isMacDevice}),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={})),function(IcDateInputMonths){IcDateInputMonths[IcDateInputMonths.January=0]="January",IcDateInputMonths[IcDateInputMonths.February=1]="February",IcDateInputMonths[IcDateInputMonths.March=2]="March",IcDateInputMonths[IcDateInputMonths.April=3]="April",IcDateInputMonths[IcDateInputMonths.May=4]="May",IcDateInputMonths[IcDateInputMonths.June=5]="June",IcDateInputMonths[IcDateInputMonths.July=6]="July",IcDateInputMonths[IcDateInputMonths.August=7]="August",IcDateInputMonths[IcDateInputMonths.September=8]="September",IcDateInputMonths[IcDateInputMonths.October=9]="October",IcDateInputMonths[IcDateInputMonths.November=10]="November",IcDateInputMonths[IcDateInputMonths.December=11]="December"}(IcDateInputMonths||(IcDateInputMonths={})),function(IcShortDayNames){IcShortDayNames[IcShortDayNames.Sun=0]="Sun",IcShortDayNames[IcShortDayNames.Mon=1]="Mon",IcShortDayNames[IcShortDayNames.Tue=2]="Tue",IcShortDayNames[IcShortDayNames.Wed=3]="Wed",IcShortDayNames[IcShortDayNames.Thu=4]="Thu",IcShortDayNames[IcShortDayNames.Fri=5]="Fri",IcShortDayNames[IcShortDayNames.Sat=6]="Sat"}(IcShortDayNames||(IcShortDayNames={})),function(IcDayNames){IcDayNames[IcDayNames.Sunday=0]="Sunday",IcDayNames[IcDayNames.Monday=1]="Monday",IcDayNames[IcDayNames.Tuesday=2]="Tuesday",IcDayNames[IcDayNames.Wednesday=3]="Wednesday",IcDayNames[IcDayNames.Thursday=4]="Thursday",IcDayNames[IcDayNames.Friday=5]="Friday",IcDayNames[IcDayNames.Saturday=6]="Saturday"}(IcDayNames||(IcDayNames={})),function(IcWeekDays){IcWeekDays[IcWeekDays.Sunday=0]="Sunday",IcWeekDays[IcWeekDays.Monday=1]="Monday",IcWeekDays[IcWeekDays.Tuesday=2]="Tuesday",IcWeekDays[IcWeekDays.Wednesday=3]="Wednesday",IcWeekDays[IcWeekDays.Thursday=4]="Thursday",IcWeekDays[IcWeekDays.Friday=5]="Friday",IcWeekDays[IcWeekDays.Saturday=6]="Saturday"}(IcWeekDays||(IcWeekDays={}));const stringEnumToArray=theEnum=>{const arr=[];return Object.values(theEnum).forEach((val=>{if(isNaN(Number(val))){const str=val;arr.push(str)}})),arr},inheritAttributes=(element,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(element.hasAttribute(attr)){null!==element.getAttribute(attr)&&(attributeObject[attr]=element.getAttribute(attr)),element.removeAttribute(attr)}})),attributeObject},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,value instanceof Date?input.value=value?value.toISOString():null:input.value=value||""}},isEmptyString=value=>!value||0===value.trim().length,getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar),getSlotContent=(element,name)=>{const slot=((element,name)=>element&&element.querySelector?element.querySelector(`[slot="${name}"]`):null)(element,name);return slot?getSlotElements(slot):null},getSlotElements=slot=>{const slotContent=slot.firstElementChild;if(null!==slotContent){const elements=slotContent.assignedElements?slotContent.assignedElements():slotContent.childNodes;return elements.length?elements:null}return null===slot?null:[slot]};Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));const isSlotUsed=(element,slotName)=>Array.from(element.children).some((child=>child.getAttribute("slot")===slotName)),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputDescribedByText=(inputId,helperText,validationText)=>{return`${helperText?(id=inputId,id+"-helper-text"):""} ${validationText?(id=>id+"-validation-text")(inputId):""}`.trim();var id},isMobileOrTablet=()=>"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0,getLabelFromValue=(value,options,valueField="value",labelField="label")=>{const ungroupedOptions=[];if(options.length>0&&options.map){options.map((option=>{option.children?option.children.map((option=>ungroupedOptions.push(option))):ungroupedOptions.push(option)}));const matchingValue=ungroupedOptions.find((option=>option[valueField]===value));if(void 0!==matchingValue)return matchingValue[labelField]}},getFilteredMenuOptions=(options,includeDescriptions,searchString,position,labelField="label")=>options.filter((option=>{var _a;const label=option[labelField].toLowerCase(),description=null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase(),lowerSearchString=searchString.toLowerCase();return"anywhere"===position?includeDescriptions?label.includes(lowerSearchString)||(null==description?void 0:description.includes(lowerSearchString)):label.includes(lowerSearchString):includeDescriptions?label.startsWith(lowerSearchString)||(null==description?void 0:description.startsWith(lowerSearchString)):label.startsWith(lowerSearchString)})),getOptionsWithoutGroupTitlesCount=options=>{const optionsWithoutGroupTitles=[];return options.length>0&&options.map&&options.map((option=>{option.children?option.children.map((option=>optionsWithoutGroupTitles.push(option))):optionsWithoutGroupTitles.push(option)})),optionsWithoutGroupTitles.length},isNumeric=value=>/^-?\d+$/.test(value),hasValidationStatus=(status,disabled)=>""!==status&&!disabled,onComponentRequiredPropUndefined=(props,component)=>{for(let i=0;i<props.length;i++){const{prop,propName}=props[i];null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}},kebabToCamelCase=kebabCase=>{const individualWords=(kebabCase=kebabCase.toLowerCase()).split("-");let camelCase=individualWords[0];for(let i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=el=>el.closest("FORM"),addFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},isMacDevice=()=>window.navigator.userAgent.toUpperCase().indexOf("MAC")>=0},"../canary-web-components/dist/esm/ic-data-table.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_data_table:()=>DataTable});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_8df79303_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../canary-web-components/dist/esm/helpers-8df79303.js");const DataTable=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icRowHeightChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icRowHeightChange",7),this.DENSITY_HEIGHT_MULTIPLIER={dense:.8,default:1,spacious:1.2},this.SORT_ICONS={unsorted:'<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">\n    <path d="M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path>\n</svg>',ascending:'<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" style="transform: rotate(-90deg);">\n    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>\n</svg>',descending:'<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" style="transform: rotate(90deg)">\n    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>\n</svg>'},this.hasLoadedForOneSecond=!0,this.startLoadingTimer=()=>{this.hasLoadedForOneSecond=!1,this.timerStarted=Date.now(),setTimeout((()=>{this.hasLoadedForOneSecond=!0,this.timerStarted=null}),this.minimumLoadingDisplayDuration)},this.isObject=value=>"object"==typeof value,this.notDefaultDensity=()=>"default"!==this.density,this.getCellContent=(cell,dataType)=>{switch(dataType){case"element":return;case"date":return(cell instanceof Date?cell:new Date(cell)).toLocaleDateString();default:return cell}},this.getCellAlignment=(cell,alignment)=>{if(this.isObject(cell)&&Object.keys(cell).includes("cellAlignment"))return this.getObjectValue(this.getObjectValue(cell,"cellAlignment"),alignment)},this.createUpdatingIndicator=()=>{const{appearance,description,max,min,progress}=this.updatingOptions||{};return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("th",{colSpan:this.columns.length,class:"updating-state"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-loading-indicator",{appearance,description:description||"Updating table data",fullWidth:!0,max,min,progress,type:"linear",size:"small"}))},this.createCells=(row,rowIndex)=>{const rowValues=Object.values(row),rowKeys=Object.keys(row);let rowAlignment,rowEmphasis;const headerIndex=rowKeys.indexOf("header");return headerIndex>-1&&(rowAlignment=this.getObjectValue(rowValues[headerIndex],"rowAlignment"),rowEmphasis=this.getObjectValue(rowValues[headerIndex],"emphasis")),rowValues.map(((cell,index)=>{var _a,_b,_c,_d,_e;const columnProps=this.columns[index],cellSlotName=`${null==columnProps?void 0:columnProps.key}-${rowIndex}`,hasIcon=this.isObject(cell)&&Object.keys(cell).includes("icon"),cellValue=key=>this.getObjectValue(cell,key);return"header"===rowKeys[index]?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("th",{scope:"row",colSpan:cellValue("colspan"),class:{"row-header":!0,[`row-header-alignment-${cellValue("cellAlignment")}`]:!!cellValue("cellAlignment"),"row-header-sticky":this.stickyRowHeaders}},cellValue("title")):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("td",{class:{"table-cell":!0,[`table-density-${this.density}`]:this.notDefaultDensity(),[`data-type-${null==columnProps?void 0:columnProps.dataType}`]:!0,[`cell-alignment-${(null===(_a=null==columnProps?void 0:columnProps.columnAlignment)||void 0===_a?void 0:_a.vertical)||rowAlignment||this.getCellAlignment(cell,"vertical")}`]:!!(null===(_b=null==columnProps?void 0:columnProps.columnAlignment)||void 0===_b?void 0:_b.vertical)||!!rowAlignment||!!this.getCellAlignment(cell,"vertical")}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{innerHTML:"element"!==(null==columnProps?void 0:columnProps.dataType)||(0,_helpers_8df79303_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,cellSlotName)?null:cell,class:{"cell-container":"element"!==(null==columnProps?void 0:columnProps.dataType),[`data-type-${null==columnProps?void 0:columnProps.dataType}`]:!0,[`cell-alignment-${(null===(_c=null==columnProps?void 0:columnProps.columnAlignment)||void 0===_c?void 0:_c.horizontal)||this.getCellAlignment(cell,"horizontal")}`]:!!(null===(_d=null==columnProps?void 0:columnProps.columnAlignment)||void 0===_d?void 0:_d.horizontal)||!!this.getCellAlignment(cell,"horizontal")}},(0,_helpers_8df79303_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,cellSlotName)?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:cellSlotName}):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_helpers_8df79303_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,`${cellSlotName}-icon`)?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:`${cellSlotName}-icon`}):(hasIcon||(null===(_e=null==columnProps?void 0:columnProps.icon)||void 0===_e?void 0:_e.onAllCells))&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"icon",innerHTML:cellValue("icon")||(null==columnProps?void 0:columnProps.icon.icon)}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body",class:{[`cell-emphasis-${this.isObject(cell)&&cellValue("emphasis")||(null==columnProps?void 0:columnProps.emphasis)||rowEmphasis}`]:this.isObject(cell)&&!!cellValue("emphasis")||!!(null==columnProps?void 0:columnProps.emphasis)||!!rowEmphasis,[`text-${this.density}`]:this.notDefaultDensity()}},this.isObject(cell)&&"date"!==(null==columnProps?void 0:columnProps.dataType)?Object.keys(cell).includes("href")?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-link",{href:cellValue("href")},cellValue("data")):cellValue("data"):this.getCellContent(cell,null==columnProps?void 0:columnProps.dataType)))))}))},this.createColumnHeaders=()=>this.columns.map((({cellAlignment,colspan,icon,key,title})=>(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("th",{scope:"col",class:{"column-header":!0,[`table-density-${this.density}`]:this.notDefaultDensity(),"updating-state-headers":this.updating&&!this.loading},colSpan:colspan},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"column-header-inner-container":!0,[`column-header-alignment-${cellAlignment}`]:!!cellAlignment}},(0,_helpers_8df79303_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,`${key}-column-icon`)?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:`${key}-column-icon`}):icon&&!icon.hideOnHeader&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"icon",innerHTML:icon.icon}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body",class:{"column-header-text":!0,[`text-${this.density}`]:this.notDefaultDensity()}},title),this.sortable&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{variant:"icon",id:`sort-button-${key}`,"aria-label":this.getSortButtonLabel(key),onClick:()=>this.sortRows(key),innerHTML:this.SORT_ICONS[this.sortedColumn===key?this.sortedColumnOrder:"unsorted"],class:{"sort-button":!0,"sort-button-unsorted":this.sortedColumn!==key||"unsorted"===this.sortedColumnOrder}}))))),this.createRows=()=>{const data=this.showPagination?this.data.slice(this.fromRow,this.toRow):this.data.slice();return this.columns.forEach((({key})=>{data.forEach(((row,rowIndex)=>{const cellSlotName=`${key}-${rowIndex}`;(0,_helpers_8df79303_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,cellSlotName)&&(row[key]=(0,_helpers_8df79303_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el,cellSlotName))}))})),data.sort(this.sortable?this.getSortFunction():void 0).map(((row,index)=>{var _a;const variableRowHeightVal=null===(_a=this.variableRowHeight)||void 0===_a?void 0:_a.call(this,Object.assign(Object.assign({},row),{index})),findRowHeight=variableRowHeightVal?"auto"!==variableRowHeightVal&&variableRowHeightVal:"auto"!==this.globalRowHeight&&this.globalRowHeight;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr",{onClick:()=>this.selectedRow=this.selectedRow!==row&&!this.loading&&!this.updating&&row,class:{"table-row":!0,"table-row-selected":this.selectedRow===row},style:{height:findRowHeight?findRowHeight*this.DENSITY_HEIGHT_MULTIPLIER[this.density]+"px":null}},this.createCells(row,index))}))},this.getObjectValue=(cell,key)=>Object.values(cell)[Object.keys(cell).indexOf(key)],this.getSortButtonLabel=key=>{let label="";const getNextSortOption=option=>{const sortOrders=this.sortOptions.sortOrders;return sortOrders[(sortOrders.indexOf(option)+1)%sortOrders.length]};if(this.sortedColumn===key){const sortOption=getNextSortOption(this.sortedColumnOrder);label="unsorted"!==sortOption?`Sort ${sortOption}`:"Remove sort"}else label=`Sort ${getNextSortOption("unsorted")}`;return label},this.getComparison=(targetRow,comparisonRow)=>{const targetRowValue=targetRow[this.sortedColumn],comparisonRowValue=comparisonRow[this.sortedColumn];return"date"===this.columns.find((col=>col.key===this.sortedColumn)).dataType?new Date(targetRowValue).valueOf()-new Date(comparisonRowValue).valueOf():String(this.isObject(targetRowValue)?Object.values(targetRowValue)[0]:targetRowValue).localeCompare(String(this.isObject(comparisonRowValue)?Object.values(comparisonRowValue)[0]:comparisonRowValue),void 0,{numeric:!0,sensitivity:"base"})},this.getSortFunction=()=>{switch(this.sortedColumnOrder){case"ascending":return(a,b)=>this.getComparison(a,b);case"descending":return(a,b)=>this.getComparison(b,a);default:return}},this.sortRows=column=>{const sortButton=this.el.shadowRoot.querySelector(`#sort-button-${column}`),sortOrders=this.sortOptions.sortOrders;if(column!==this.sortedColumn){if(this.sortedColumn){this.el.shadowRoot.querySelector(`#sort-button-${this.sortedColumn}`).setAttribute("aria-label",this.getSortButtonLabel(column))}this.sortedColumn=column,this.sortedColumnOrder="unsorted"}let nextSortOrderIndex=sortOrders.indexOf(this.sortedColumnOrder)+1;nextSortOrderIndex>sortOrders.length-1&&(nextSortOrderIndex=0),this.sortedColumnOrder=sortOrders[nextSortOrderIndex],sortButton.setAttribute("aria-label",this.getSortButtonLabel(column))},this.updateScrollOffset=()=>{this.scrollOffset=this.el.shadowRoot.querySelector(".table-row-container").scrollTop},this.fromRow=0,this.previousRowsPerPage=void 0,this.rowsPerPage=void 0,this.scrollable=!1,this.scrollOffset=0,this.selectedRow=void 0,this.sortedColumn=void 0,this.sortedColumnOrder=void 0,this.toRow=void 0,this.caption=void 0,this.columns=void 0,this.data=void 0,this.density="default",this.embedded=!1,this.globalRowHeight=40,this.hideColumnHeaders=!1,this.loading=!1,this.loadingOptions=void 0,this.minimumLoadingDisplayDuration=1e3,this.paginationOptions={itemsPerPage:[{label:"10",value:"10"},{label:"25",value:"25"},{label:"50",value:"50"}],rangeLabelType:"page",type:"simple",itemsPerPageControl:!0,goToPageControl:!0,alignment:"right"},this.showPagination=!1,this.sortable=!1,this.sortOptions={sortOrders:["unsorted","ascending","descending"],defaultColumn:""},this.stickyColumnHeaders=!1,this.stickyRowHeaders=!1,this.updating=!1,this.updatingOptions=void 0,this.variableRowHeight=void 0}componentWillLoad(){var _a;this.rowsPerPage=Number(this.paginationOptions.itemsPerPage[0].value),this.previousRowsPerPage=this.rowsPerPage,this.toRow=this.rowsPerPage,this.sortedColumn=this.sortOptions.defaultColumn,this.sortedColumnOrder=this.sortOptions.sortOrders[0],this.loadingOptions=Object.assign(Object.assign({},this.loadingOptions),{showBackground:(null===(_a=this.data)||void 0===_a?void 0:_a.length)>0})}componentDidLoad(){const tableElement=this.el.shadowRoot.querySelector("table"),tableContainer=this.el.shadowRoot.querySelector(".table-container");((null==tableElement?void 0:tableElement.clientHeight)>(null==tableContainer?void 0:tableContainer.clientHeight)||(null==tableElement?void 0:tableElement.clientWidth)>(null==tableContainer?void 0:tableContainer.clientWidth))&&(this.scrollable=!0),this.loading&&(this.startLoadingTimer(),this.showLoadingIndicator())}handleItemsPerPageChange(ev){this.previousRowsPerPage=this.rowsPerPage,this.rowsPerPage=ev.detail.value}handlePageChange(ev){this.fromRow=(ev.detail.value-1)*this.rowsPerPage,this.toRow=this.fromRow+this.rowsPerPage;const tableRowsContainer=this.el.shadowRoot.querySelector(".table-row-container");this.previousRowsPerPage===this.rowsPerPage?tableRowsContainer.scrollTop=0:this.previousRowsPerPage<this.rowsPerPage?(tableRowsContainer.scrollTop=this.scrollOffset,this.previousRowsPerPage=this.rowsPerPage):this.previousRowsPerPage=this.rowsPerPage}handleDensityChange(ev){this.density=ev.detail.value}clickListener(ev){ev.target!==this.el&&(this.selectedRow=void 0)}loadingHandler(newValue){newValue&&this.startLoadingTimer(),this.loading&&setTimeout((()=>{this.showLoadingIndicator()}),500)}dataHandler(newData){this.loadingOptions=Object.assign(Object.assign({},this.loadingOptions),{showBackground:(null==newData?void 0:newData.length)>0}),this.loading&&(this.hasLoadedForOneSecond?this.loading=!1:setTimeout((()=>this.loading=!1),this.minimumLoadingDisplayDuration-(Date.now()-this.timerStarted))),this.updating&&(this.updating=!1)}rowHeightChangeHandler(){this.icRowHeightChange.emit()}async resetRowHeights(){this.globalRowHeight=40,this.variableRowHeight=null}showLoadingIndicator(){this.loadingIndicator.classList.add("show")}render(){const{caption,createColumnHeaders,createRows,createUpdatingIndicator,data,hideColumnHeaders,loading,loadingOptions,paginationOptions,scrollable,scrollOffset,showPagination,sortable,sortedColumnOrder,sortedColumn,stickyColumnHeaders,updateScrollOffset,updating}=this;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"table-container"},(0,_helpers_8df79303_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"title-bar")&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"title-bar"}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"table-row-container":!0,scrollable},tabIndex:scrollable?0:null,onScroll:updateScrollOffset},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("table",null,(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("caption",{class:"table-caption"},caption),!hideColumnHeaders&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("thead",{class:{"column-header-sticky":stickyColumnHeaders,"column-header-overlay":stickyColumnHeaders&&0!==scrollOffset}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr",null,createColumnHeaders())),updating&&!loading&&(hideColumnHeaders?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("thead",null,createUpdatingIndicator()):createUpdatingIndicator()),(null==data?void 0:data.length)>0&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("tbody",null,createRows())),!(null==data?void 0:data.length)&&!loading&&((0,_helpers_8df79303_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"empty-state")?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"empty-state"}):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-empty-state",{aligned:"center",heading:"No Data",class:"loading-empty"}))),loading&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-loading-indicator",{appearance:null==loadingOptions?void 0:loadingOptions.appearance,class:{"loading-empty":loading,loading:!0,"show-background":loadingOptions.showBackground},description:loadingOptions.description||"Loading table data",label:loadingOptions.label||"Loading...",labelDuration:null==loadingOptions?void 0:loadingOptions.labelDuration,max:null==loadingOptions?void 0:loadingOptions.max,min:null==loadingOptions?void 0:loadingOptions.min,progress:null==loadingOptions?void 0:loadingOptions.progress,ref:el=>this.loadingIndicator=el}),showPagination&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"pagination-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-pagination-bar",{totalItems:data.length,type:paginationOptions.type,rangeLabelType:paginationOptions.rangeLabelType,showItemsPerPageControl:paginationOptions.itemsPerPageControl,showGoToPageControl:paginationOptions.goToPageControl,itemsPerPageOptions:paginationOptions.itemsPerPage,alignment:paginationOptions.alignment})),sortable&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"screen-reader-sort-text","aria-live":"polite"},"unsorted"!==sortedColumnOrder&&sortedColumn?`${sortedColumn} sorted ${sortedColumnOrder}`:"table unsorted"))}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{loading:["loadingHandler"],data:["dataHandler"],globalRowHeight:["rowHeightChangeHandler"],variableRowHeight:["rowHeightChangeHandler"]}}};DataTable.style=':host{position:relative;display:block;height:100%;max-height:100%}.table-container{position:relative;height:calc(100% - var(--ic-space-xxxs))}ic-loading-indicator{position:sticky;top:20px}.table-row-container{position:relative;height:100%;overflow:auto;transition:var(--ic-easing-transition-fast);overflow-anchor:none}:host([show-pagination="true"]) .table-row-container{height:calc(100% - 3.5625rem)}table{table-layout:fixed;border-spacing:0;width:100%}.table-row-container:focus{outline:none;box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast);z-index:1}:host([embedded="true"]) .table-row-container{border:var(--ic-border-light)}.column-header-sticky{position:sticky;top:0;z-index:1}.column-header-overlay{position:sticky;top:0;z-index:1;box-shadow:0 0.375rem var(--ic-space-xs) calc(var(--ic-space-xxs * -1))\n    rgb(0 0 0 / 20%)}.row-header-sticky{position:sticky;left:0}.column-header,.table-row{box-sizing:border-box}.table-row-selected{background-color:var(--ic-table-row-selected) !important}.sort-button{margin-left:auto}.sort-button:hover{background-color:var(--ic-action-dark-bg-hover)}.sort-button:active{background-color:var(--ic-action-dark-bg-active)}.sort-button svg{color:var(--ic-architectural-black)}.sort-button-unsorted svg{color:var(--ic-color-tertiary-text)}.table-density-dense{padding:var(--ic-space-xxs) var(--ic-space-xs) !important}.text-dense{font-size:var(--ic-font-size-label)}.table-density-spacious{padding:0.625rem var(--ic-space-xs) !important}.text-spacious{font-size:1.125rem}.column-header-text{font-weight:var(--ic-font-weight-bold)}.column-header,.row-header{text-align:left;padding:var(--ic-space-xs);background-color:var(--ic-architectural-40);border-right:var(--ic-border-light);border-bottom:var(--ic-border-light)}.column-header:last-child{border-right:none}.scrollable .column-header:last-child{border-right:var(--ic-border-light) !important}:host([embedded="true"]) tr:last-child .table-cell,:host([embedded="true"]) tr:last-child .row-header{border-bottom:none}.column-header-alignment-left,.row-header-alignment-left,.cell-alignment-left{text-align:left !important;justify-content:start !important}.column-header-alignment-right,.row-header-alignment-right,.cell-alignment-right{text-align:right !important;justify-content:end !important}.column-header-alignment-center,.row-header-alignment-center,.cell-alignment-center{text-align:center !important;justify-content:center !important}.table-row:nth-child(even){background-color:var(--ic-architectural-20)}.table-cell{padding:var(--ic-space-xs);border-bottom:solid var(--ic-architectural-100) var(--ic-space-1px)}.data-type-string{text-align:left;vertical-align:top}.data-type-number,.data-type-date{text-align:right;justify-content:end;vertical-align:top}.cell-alignment-top{vertical-align:top}.cell-alignment-middle{vertical-align:middle}.cell-alignment-bottom{vertical-align:bottom}.cell-emphasis-low{color:var(--ic-color-secondary-text)}.cell-emphasis-high{font-weight:var(--ic-font-weight-bold)}.pagination-container{background-color:var(--ic-architectural-40);border-top:var(--ic-border-light)}.screen-reader-sort-text,.table-caption{position:absolute;left:-100rem}.table-cell,.column-header,.row-header{word-wrap:break-word;white-space:pre-wrap}.loading-empty{padding:var(--ic-space-xl) var(--ic-space-xxl);margin-top:var(--ic-space-xl)}.updating-state{padding:0;border-bottom:var(--ic-border-light)}.updating-state-headers{border-bottom:none}.loading{position:absolute;left:calc(50% - 5.9741rem);opacity:0;transition:opacity var(--ic-transition-duration-slow)}.loading.show-background{background-color:var(--ic-architectural-white);border:var(--ic-border-light)}.loading.show{opacity:1}.icon,::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg);margin-right:var(--ic-space-xxs)}.column-header-alignment-right>.icon,.row-header-alignment-right>.icon,.cell-alignment-right>.icon,.column-header-alignment-right>::slotted(svg),.row-header-alignment-right>::slotted(svg),.cell-alignment-right>::slotted(svg){margin-right:auto}.column-header-alignment-center>ic-typography,.row-header-alignment-right>ic-typography,.cell-alignment-center>ic-typography{flex:1}.icon>svg{height:var(--ic-space-lg);width:var(--ic-space-lg);display:inline-block}@media screen and (min-width: 576px){.column-header-inner-container{display:flex;align-items:center}.cell-container{display:flex}}'}}]);