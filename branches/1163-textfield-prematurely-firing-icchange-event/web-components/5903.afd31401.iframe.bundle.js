/*! For license information please see 5903.afd31401.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[5903],{"./dist/esm/ic-text-field.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_text_field:()=>TextField});__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js");var _index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./dist/esm/index-813020f1.js"),_types_b2398b37_js__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./dist/esm/types-b2398b37.js"),_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./dist/esm/helpers-24f6e762.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var inputIds=0,TextField=function(){function TextField(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TextField),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.r)(this,hostRef),this.getValidationText=(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"getValidationText",7),this.icBlur=(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icBlur",7),this.icChange=(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icChange",7),this.icFocus=(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icFocus",7),this.icInput=(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icInput",7),this.icKeydown=(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icKeydown",7),this.inheritedAttributes={},this.showLeftIcon=this.hasLeftIconSlot(),this.getMaxLengthExceeded=function(value){_this.numChars=value.length,"number"===_this.type&&(value&&Number(value)<Number(_this.min)?_this.minValueUnattained=!0:_this.minValueUnattained=!1,Number(value)>Number(_this.max)?_this.maxValueExceeded=!0:_this.maxValueExceeded=!1),_this.maxLength>0&&(value.length>_this.maxLength?_this.maxLengthExceeded=!0:_this.maxLengthExceeded=!1)},this.onInput=function(ev){_this.value=ev.target.value,_this.icInput.emit({value:_this.value})},this.onBlur=function(ev){var value=ev.target.value;_this.icBlur.emit({value})},this.onFocus=function(ev){var value=ev.target.value;_this.icFocus.emit({value})},this.isTextArea=function(){return _this.rows>1},this.getInlineValidationText=function(){_this.getValidationText.emit({value:_this.validationText})},this.hasStatus=function(status){return""!==status&&!_this.disabled},this.showStatusText=function(status){return _this.hasStatus(status)&&!(status==_types_b2398b37_js__WEBPACK_IMPORTED_MODULE_31__.a.Success&&_this.validationInline)&&!_this.validationInlineInternal},this.handleFormReset=function(){_this.value=_this.initialValue},this.numChars=0,this.maxLengthExceeded=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1,this.ariaActiveDescendant=void 0,this.ariaAutocomplete=void 0,this.ariaExpanded=void 0,this.ariaOwns=void 0,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autoFocus=!1,this.disabled=!1,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.hiddenInput=!0,this.inputId="ic-text-field-input-"+inputIds++,this.inputmode="text",this.label=void 0,this.max=void 0,this.maxLength=0,this.min=void 0,this.name=this.inputId,this.placeholder="",this.readonly=!1,this.required=!1,this.resize=!1,this.role=void 0,this.rows=1,this.size="default",this.small=!1,this.spellcheck=!1,this.truncateValue=void 0,this.type="text",this.validationInline=!1,this.validationInlineInternal=!1,this.validationStatus="",this.validationText="",this.debounce=0,this.value="",this.initialValue=this.value}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TextField,[{key:"debounceChanged",value:function debounceChanged(){this.icChange=(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.M)(this.icChange,this.debounce)}},{key:"watchValueHandler",value:function watchValueHandler(newValue){this.inputEl&&this.inputEl.value!==newValue&&(this.inputEl.value=newValue),this.getMaxLengthExceeded(newValue),this.icChange.emit({value:newValue})}},{key:"connectedCallback",value:function connectedCallback(){this.debounceChanged()}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.m)(this.el,this.handleFormReset)}},{key:"componentWillLoad",value:function componentWillLoad(){this.value!==this.initialValue&&this.watchValueHandler(this.value),this.getMaxLengthExceeded(this.value),this.inheritedAttributes=(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.w)(this.el,[].concat(_toConsumableArray(_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.x),["title"])),this.readonly&&(this.maxLengthExceeded=!1,this.maxValueExceeded=!1,this.minValueUnattained=!1),(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.l)(this.el,this.handleFormReset),(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.j)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.a)([{prop:this.label,propName:"label"}],"Text Field"),this.validationInlineInternal&&this.getInlineValidationText()}},{key:"handleKeyDown",value:function handleKeyDown(ev){this.icKeydown.emit({event:ev})}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.inputEl&&this.inputEl.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"hasLeftIconSlot",value:function hasLeftIconSlot(){return null!==this.el.querySelector('[slot="icon"]')}},{key:"render",value:function render(){var _class,_class2,_class3,_class4,_class5,_this2=this,inputId=this.inputId,name=this.name,label=this.label,required=this.required,size=this.size,placeholder=this.placeholder,helperText=this.helperText,rows=this.rows,resize=this.resize,disabled=this.disabled,value=this.value,min=this.min,max=this.max,maxLength=this.maxLength,numChars=this.numChars,readonly=this.readonly,maxLengthExceeded=this.maxLengthExceeded,minValueUnattained=this.minValueUnattained,maxValueExceeded=this.maxValueExceeded,validationStatus=this.validationStatus,validationText=this.validationText,validationInline=this.validationInline,validationInlineInternal=this.validationInlineInternal,spellcheck=this.spellcheck,inputmode=this.inputmode,fullWidth=this.fullWidth,truncateValue=this.truncateValue,hiddenInput=this.hiddenInput,disabledMode=!!readonly||disabled,placeholderText=disabled?"":placeholder,currentStatus=maxLengthExceeded||maxValueExceeded||minValueUnattained?_types_b2398b37_js__WEBPACK_IMPORTED_MODULE_31__.a.Error:validationStatus,currentValidationText=maxLengthExceeded?"Maximum length exceeded":maxValueExceeded?"Maximum value of "+max+" exceeded":minValueUnattained?"Minimum value of "+min+" not met":validationText,maxNumChars=readonly?0:maxLength,messageAriaLive=maxLengthExceeded||maxValueExceeded||minValueUnattained||0===maxLength&&currentStatus===_types_b2398b37_js__WEBPACK_IMPORTED_MODULE_31__.a.Error?"assertive":"polite",showStatusText=this.showStatusText(currentStatus),multiline=this.isTextArea(),hiddenCharCountDescId=maxLength>0?inputId+"-charcount-desc":"",describedBy=(hiddenCharCountDescId+" "+(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.q)(inputId,""!==helperText,showStatusText)).trim();this.showLeftIcon&&!readonly&&disabledMode&&(this.showLeftIcon=!1);var invalid=currentStatus===_types_b2398b37_js__WEBPACK_IMPORTED_MODULE_31__.a.Error?"true":"false",disabledText=disabledMode&&!readonly;return hiddenInput&&(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.n)(!0,this.el,name,value,disabledMode),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)(_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.H,{class:(_class={},_class.fullwidth=fullWidth,_class)},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-input-container",{readonly,disabled:disabledMode},!this.hideLabel&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-input-label",{for:inputId,label,helperText,required,disabled:disabledText,readonly}),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-input-component-container",{size,validationStatus:currentStatus,multiLine:multiline,disabled:disabledMode,readonly,validationInline,fullWidth},this.showLeftIcon&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("span",{class:(_class2={},_class2.readonly=readonly,_class2["has-value"]=value.length>0,_class2),slot:"left-icon"},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",{name:"icon"})),!multiline&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("input",Object.assign({id:inputId,name,ref:function ref(el){return _this2.inputEl=el},type:this.type,min,max,value,class:(_class3={},_class3["no-left-pad"]=!this.showLeftIcon&&readonly,_class3.readonly=readonly,_class3["truncate-value"]=truncateValue,_class3),placeholder:placeholderText,required,disabled:disabledMode,readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,"aria-activedescendant":this.ariaActiveDescendant,"aria-expanded":this.ariaExpanded,"aria-owns":this.ariaOwns,autocomplete:this.autocomplete,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck,inputmode,role:this.role},this.inheritedAttributes)),multiline&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("textarea",Object.assign({id:inputId,class:(_class4={},_class4["no-resize"]=!1===resize||readonly,_class4["no-left-pad"]=!this.showLeftIcon&&readonly,_class4.readonly=readonly,_class4),name,ref:function ref(el){return _this2.inputEl=el},value,rows,required,disabled:disabledMode,placeholder:placeholderText,readonly,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,autocapitalize:this.autocapitalize,autoFocus:this.autoFocus,spellcheck,inputmode},this.inheritedAttributes)),(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.i)(this.el,"clear-button")&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",{name:"clear-button"}),(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.i)(this.el,"search-submit-button")&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",{name:"search-submit-button"})),(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.i)(this.el,"menu")&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",{name:"menu"}),(!(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.G)(validationStatus)||!(0,_helpers_24f6e762_js__WEBPACK_IMPORTED_MODULE_32__.G)(validationText)||maxNumChars>0||maxValueExceeded||minValueUnattained)&&!validationInlineInternal&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-input-validation",{status:!1===this.hasStatus(currentStatus)||currentStatus===_types_b2398b37_js__WEBPACK_IMPORTED_MODULE_31__.a.Success&&validationInline||validationInlineInternal?"":currentStatus,message:showStatusText?currentValidationText:"",ariaLiveMode:messageAriaLive,for:inputId,fullWidth},!readonly&&maxNumChars>0&&(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("div",{slot:"validation-message-adornment"},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-typography",{variant:"caption",class:(_class5={},_class5.maxlengthtext=!0,_class5.error=maxLengthExceeded,_class5.disabled=disabledText,_class5)},(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("span",{"aria-live":"polite",id:inputId+"-charcount",class:"charcount"},numChars,"/",maxNumChars),(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.h)("span",{hidden:!0,id:hiddenCharCountDescId},"Field can contain a maximum of ",maxNumChars," characters."))))))}},{key:"el",get:function get(){return(0,_index_813020f1_js__WEBPACK_IMPORTED_MODULE_30__.g)(this)}}],[{key:"watchers",get:function get(){return{debounce:["debounceChanged"],value:["watchValueHandler"]}}}]),TextField}();TextField.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(.fullwidth){width:100%}::-moz-placeholder{color:var(--ic-color-tertiary-text);opacity:1}::placeholder{color:var(--ic-color-tertiary-text);opacity:1}input,textarea{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs)}textarea{min-height:var(--ic-space-lg);resize:vertical;padding-top:0.375rem}input:focus,textarea:focus{border:0;outline:0}input:disabled,textarea:disabled{color:var(--ic-architectural-200)}input.readonly,textarea.readonly{color:var(--ic-color-primary-text)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"]{-moz-appearance:textfield}textarea.no-resize{resize:none}.maxlengthtext{color:var(--ic-color-secondary-text)}.no-left-pad{padding-left:0}::slotted([slot="icon"]){fill:var(--ic-color-tertiary-text)}.has-value ::slotted([slot="icon"]){fill:var(--ic-color-primary-text)}.charcount{margin-right:calc(-1 * var(--ic-space-xxxs))}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}input[type="search"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (forced-colors: active){input.readonly,textarea.readonly{color:canvastext}.has-value ::slotted([slot="icon"]){fill:currentcolor}}'}}]);