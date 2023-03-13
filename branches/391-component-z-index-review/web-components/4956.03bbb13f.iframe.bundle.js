/*! For license information please see 4956.03bbb13f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4956],{"./dist/esm/chevron-icon-98c98242.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>chevronIcon});var chevronIcon='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"./dist/esm/ic-navigation-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_navigation_group:()=>NavigationGroup});__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./dist/esm/helpers-db370ed6.js"),_chevron_icon_98c98242_js__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./dist/esm/chevron-icon-98c98242.js");__webpack_require__("./dist/esm/types-dd515332.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var NavigationGroup=function(){function NavigationGroup(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,NavigationGroup),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.r)(this,hostRef),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS=50,this.sideNavExpandHandler=function(){setTimeout((function(){return _this.setInitialGroupedLinksWrapperHeight()}),_this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS)},this.topNavResizedHandler=function(ev){var newSize=ev.detail.size;newSize!==_this.deviceSize&&(_this.deviceSize=newSize,_this.inTopNavSideMenu=newSize<=_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_27__.D.L)},this.setGroupedNavItemTabIndex=function(tabIndexValue){_this.el.querySelectorAll("ic-navigation-item").forEach((function(navigationItem){var navItem=navigationItem.shadowRoot.querySelector("a")||navigationItem.querySelector("a");navItem&&navItem.setAttribute("tabindex",tabIndexValue)}))},this.toggleGroupedLinkWrapperHeight=function(wrapper,expanded){wrapper&&(expanded?(wrapper.setAttribute("style","--navigation-child-items-height: "+_this.getNavigationChildItemsHeight()),_this.setGroupedNavItemTabIndex("0")):(wrapper.setAttribute("style","--navigation-child-items-height: 0"),_this.setGroupedNavItemTabIndex("-1")))},this.toggleExpanded=function(){_this.expanded=!_this.expanded;var linkWrapper=_this.el.shadowRoot.querySelector(".grouped-links-wrapper");_this.toggleGroupedLinkWrapperHeight(linkWrapper,_this.expanded)},this.handleClick=function(ev){"top"===_this.navigationType&&ev.detail?_this.toggleDropdown():_this.toggleExpanded()},this.handleBlur=function(ev){var target=ev.relatedTarget;_this.el.contains(target)||_this.hideDropdown()},this.handleTopNavKeydown=function(ev){_this.inTopNavSideMenu||"Escape"!==ev.key?" "!==ev.key&&"Enter"!==ev.key||_this.toggleDropdown():(_this.hideDropdown(),_this.el.blur())},this.handleKeydown=function(ev){if("Enter"===ev.key||"Space"===ev.key)switch(_this.navigationType){case"top":_this.handleTopNavKeydown(ev);break;case"side":_this.toggleExpanded(),ev.preventDefault();break;default:_this.toggleExpanded()}},this.handleMouseLeave=function(ev){var target=ev.relatedTarget;_this.el.contains(target)||target===_this.dropdown||document.activeElement===_this.el||_this.el.contains(document.activeElement)||_this.hideDropdown()},this.triggerShowDropdown=function(){_this.showDropdown()},this.renderDropdownGroupedLinks=function(){var _class,_class2;return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.h)("div",{class:(_class={},_class["navigation-group-dropdown"]=!_this.inTopNavSideMenu,_class["navigation-group-dropdown-side-menu"]=_this.inTopNavSideMenu,_class.selected=_this.dropdownOpen&&!_this.inTopNavSideMenu,_class),onMouseLeave:_this.inTopNavSideMenu?null:_this.handleMouseLeave,ref:function ref(el){return _this.dropdown=el}},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.h)("nav",{class:(_class2={},_class2["navigation-group-dropdown-items"]=!_this.inTopNavSideMenu,_class2)},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.h)("ul",null,(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.h)("slot",null))))},this.renderGroupedLinks=function(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.h)("ul",{class:"grouped-links-wrapper"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.h)("slot",null))},this.getNavigationChildItemsHeight=function(){var navigationItemLength=_this.el.querySelectorAll("ic-navigation-item").length||0,navigationItem=_this.el.querySelector("ic-navigation-item")||null;return"side"===_this.navigationType&&navigationItemLength&&navigationItem?parseInt(getComputedStyle(navigationItem).height)*navigationItemLength+"px":"auto"},this.setInitialGroupedLinksWrapperHeight=function(){var linkWrapper=_this.el.shadowRoot.querySelector(".grouped-links-wrapper");linkWrapper&&_this.expanded&&linkWrapper.setAttribute("style","--navigation-child-items-height: "+_this.getNavigationChildItemsHeight())},this.renderNavigationItems=function(){return _this.dropdownOpen||_this.inTopNavSideMenu&&!_this.expandable?_this.renderDropdownGroupedLinks():"top"!==_this.navigationType?_this.renderGroupedLinks():null},this.label=void 0,this.expandable=!1,this.dropdownOpen=!1,this.inTopNavSideMenu=!1,this.deviceSize=_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_27__.D.XL,this.focusStyle=(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_27__.k)(),this.navigationType=void 0,this.parentEl=void 0,this.expanded=!0}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(NavigationGroup,[{key:"childBlurHandler",value:function childBlurHandler(){this.hideDropdown()}},{key:"navItemClickHandler",value:function navItemClickHandler(){this.hideDropdown()}},{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.focusStyle=theme.mode}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.groupEl&&this.groupEl.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"toggleDropdown",value:function toggleDropdown(){this.dropdownOpen=!this.dropdownOpen}},{key:"showDropdown",value:function showDropdown(){this.dropdownOpen||this.toggleDropdown()}},{key:"hideDropdown",value:function hideDropdown(){this.dropdownOpen&&this.toggleDropdown()}},{key:"componentWillLoad",value:function componentWillLoad(){this.deviceSize=(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_27__.g)();var navParentDetails=(0,_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_27__.p)(this.el);this.navigationType=navParentDetails.navType,this.parentEl=navParentDetails.parent,this.deviceSize<=_helpers_db370ed6_js__WEBPACK_IMPORTED_MODULE_27__.D.L&&"top"===this.navigationType&&(this.inTopNavSideMenu=!0),"side"===this.navigationType?this.parentEl.addEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&this.parentEl.addEventListener("topNavResized",this.topNavResizedHandler)}},{key:"componentDidLoad",value:function componentDidLoad(){var _this2=this;setTimeout((function(){return _this2.setInitialGroupedLinksWrapperHeight()}),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS)}},{key:"disconnectedCallback",value:function disconnectedCallback(){"side"===this.navigationType?this.parentEl.removeEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&this.parentEl.removeEventListener("topNavResized",this.topNavResizedHandler)}},{key:"render",value:function render(){var _class3,_class4,_this3=this,label=this.label,dropdownOpen=this.dropdownOpen,inTopNavSideMenu=this.inTopNavSideMenu,expandable=this.expandable,NavigationGroupElement=!inTopNavSideMenu||expandable?"button":"div";return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.H,{class:(_class3={},_class3["in-side-menu"]=inTopNavSideMenu,_class3.expanded=this.expanded,_class3.collapsed=!this.expanded,_class3["navigation-group-side-nav"]="side"===this.navigationType,_class3),role:"listitem"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.h)(NavigationGroupElement,{tabindex:inTopNavSideMenu&&!expandable?"-1":"0",onMouseOver:inTopNavSideMenu||"top"!==this.navigationType?null:this.triggerShowDropdown,onMouseLeave:"top"===this.navigationType&&this.handleMouseLeave,onBlur:this.handleBlur,onClick:expandable?this.handleClick:null,onKeyDown:this.handleKeydown,class:(_class4={},_class4["navigation-group"]=!0,_class4[this.focusStyle]=!inTopNavSideMenu,_class4["navigation-group-side-menu"]=inTopNavSideMenu&&!expandable,_class4["navigation-group-side-menu-collapsed"]=inTopNavSideMenu&&expandable&&!dropdownOpen,_class4["navigation-group-side-menu-expanded"]=inTopNavSideMenu&&expandable&&dropdownOpen,_class4.selected=dropdownOpen&&!inTopNavSideMenu,_class4),ref:function ref(el){return _this3.groupEl=el},"aria-expanded":dropdownOpen||this.expanded?"true":"false","aria-haspopup":inTopNavSideMenu||"top"!==this.navigationType?"false":"true"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.h)("ic-typography",{variant:"side"===this.navigationType?"caption":"label"},label),"side"===this.navigationType&&expandable&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.h)("div",{class:{"chevron-toggle-icon-wrapper":!0,"chevron-toggle-icon-closed":this.expanded},innerHTML:_chevron_icon_98c98242_js__WEBPACK_IMPORTED_MODULE_29__.c})),this.renderNavigationItems())}},{key:"el",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_26__.g)(this)}}]),NavigationGroup}();NavigationGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(.in-side-menu){border-bottom:0.063rem solid var(--ic-architectural-200);padding:var(--ic-space-md) 0}:host .navigation-group{height:100%;width:-moz-fit-content;width:fit-content;color:var(--ic-theme-text);display:flex;align-items:center;justify-content:center;padding:0 var(--ic-space-md);transition:var(--ic-easing-transition-slow);position:relative;background:none;border:none}:host(.in-side-menu) .navigation-group{height:2.5rem;width:100%;text-align:left}:host(.in-side-menu) .navigation-group .ic-typography-label{width:11.875rem}:host(.in-side-menu) .navigation-group-side-menu{color:var(--ic-action-default);justify-content:flex-start;padding:0 var(--ic-space-md) 0 var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-collapsed,:host(.in-side-menu) .navigation-group-side-menu-expanded{color:var(--ic-action-default);justify-content:flex-start;padding-left:var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-expanded{margin-bottom:var(--ic-space-xs)}:host(.in-side-menu) .navigation-group-side-menu-collapsed::after,:host(.in-side-menu) .navigation-group-side-menu-expanded::after{border-style:solid;border-width:0.125em 0.125em 0 0;content:"";display:inline-block;height:0.45em;left:0.75em;position:relative;top:-0.1em;transform:rotate(135deg);vertical-align:top;width:0.45em}:host(.in-side-menu) .navigation-group-side-menu-expanded::after{top:0.15em;transform:rotate(-45deg)}:host .navigation-group:hover,:host .navigation-group:active,:host .selected{background-color:var(--ic-architectural-20);color:var(--ic-color-primary-text);outline:none;cursor:pointer}:host(:not(.in-side-menu)) .navigation-group:focus{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline);z-index:var(--ic-z-index-navigation-item);transition:box-shadow var(--ic-easing-transition-fast)}:host(.in-side-menu) .navigation-group-side-menu:hover,:host(.in-side-menu) .navigation-group-side-menu:active,:host(.in-side-menu) .navigation-group-side-menu:focus{background-color:var(--ic-architectural-20);color:var(--ic-action-default);cursor:auto;box-shadow:none;outline:none}:host(.in-side-menu) .navigation-group-side-menu:focus{outline:var(--ic-hc-focus-outline)}:host(.in-side-menu) .navigation-group-side-menu-expanded:hover:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:hover:not(:focus){background-color:var(--ic-action-dark-bg-hover);color:var(--ic-action-default);cursor:pointer}:host(.in-side-menu) .navigation-group-side-menu-expanded:active:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:active:not(:focus){background-color:var(--ic-action-dark-bg-active);color:var(--ic-action-default)}:host(.in-side-menu) .navigation-group-side-menu-expanded:focus,:host(.in-side-menu) .navigation-group-side-menu-collapsed:focus{color:var(--ic-action-default);box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline)}:host .navigation-group-dropdown{background-color:var(--ic-architectural-20);border-bottom:0.063rem solid var(--ic-architectural-300);position:absolute;left:0;right:0;padding:var(--ic-space-xs) var(--ic-space-md);box-shadow:0 0.375rem 0.5rem -0.375rem rgba(0 0 0 / 20%);z-index:calc(var(--ic-z-index-navigation-item) - 1)}:host .navigation-group-dropdown-items-list{list-style:none;display:flex;flex-flow:column wrap;align-content:flex-start;padding-left:var(--ic-space-md);max-height:16.5rem}:host .chevron-toggle-icon-wrapper{display:flex;align-items:center}:host .chevron-toggle-icon-wrapper svg{transform:rotate(90deg);height:var(--ic-space-lg);width:var(--ic-space-lg)}:host .chevron-toggle-icon-closed svg{transform:rotate(-90deg)}:host(.expanded) .grouped-links-wrapper{height:var(--navigation-child-items-height, auto);transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.collapsed) .grouped-links-wrapper{height:var(--navigation-child-items-height, 0);transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.navigation-group-side-nav) .navigation-group{height:var(--navigation-group-height);width:var(--navigation-group-width);justify-content:var(--navigation-group-justify-content);padding-right:var(--navigation-group-expand-toggle-padding)}:host(.navigation-group-side-nav) .navigation-group:hover,:host(.navigation-group-side-nav) .navigation-group:active,:host(.navigation-group-side-nav) .selected{background-color:var(--navigation-group-hover);color:var(--navigation-group-text-hover)}:host(.navigation-group-side-nav) .navigation-group:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background:none}:host(.navigation-group-side-nav) .ic-typography-caption{position:var(--navigation-group-title-position);left:var(--navigation-group-title-position-left);white-space:nowrap}.menu-visibility-visible{visibility:visible}.menu-visibility-hidden{visibility:hidden}'}}]);