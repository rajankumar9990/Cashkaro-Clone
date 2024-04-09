(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405,2235],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1438)}])},8628:function(e,t,r){var i=r(3454);r(1479);var n=r(7294),s=n&&"object"==typeof n&&"default"in n?n:{default:n};function o(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=void 0!==i&&i.env&&!0,u=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,n=t.optimizeForSpeed,s=void 0===n?a:n;c(u(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",c("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(c(u(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed){var r=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];c(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},r.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},r.cssRules=function(){var e=this;return this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&c(u(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return r?n.insertBefore(i,r):n.appendChild(i),i},o(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&o(e,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},h={};function p(e,t){if(!t)return"jsx-"+e;var r=String(t),i=e+r;return h[i]||(h[i]="jsx-"+d(e+"-"+r)),h[i]}function f(e,t){var r=e+t;return h[r]||(h[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[r]}var m=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,i=void 0===r?null:r,n=t.optimizeForSpeed,s=void 0!==n&&n;this._sheet=i||new l({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),i&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),i=r.styleId,n=r.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var s=n.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=s,this._instancesCounts[i]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var i=this._fromServer&&this._fromServer[r];i?(i.parentNode.removeChild(i),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],i=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,i=e.id;if(r){var n=p(i,r);return{styleId:n,rules:Array.isArray(t)?t.map(function(e){return f(n,e)}):[f(n,t)]}}return{styleId:p(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),_=n.createContext(null);_.displayName="StyleSheetContext";var S=s.default.useInsertionEffect||s.default.useLayoutEffect,b=new m;function v(e){var t=b||n.useContext(_);return t&&S(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}v.dynamic=function(e){return e.map(function(e){return p(e[0],e[1])}).join(" ")},t.style=v},2235:function(e,t,r){"use strict";e.exports=r(8628).style},1438:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return h},default:function(){return p}});var i=r(5893),n=r(7294),s=r(8404),o=r(2235),a=r.n(o),u=()=>(0,i.jsx)(a(),{id:"340aeb8fbd59e95c",children:".UserStaticBanner{margin-top:5px;margin-bottom:5px;position:relative;float:left;width:100%;height:250px;overflow:hidden}.UserStaticBanner .s_banner,.UserStaticBanner .s_banner_d{width:100%;height:250px}.UserStaticBanner .slick-slider{padding-bottom:0}.UserStaticBanner .slick-slide{padding:0 5px}.UserStaticBanner .slick-next,.UserStaticBanner .slick-prev{background:#fff;height:44px;width:33px;top:-webkit-calc(50% - 22px);top:-moz-calc(50% - 22px);top:calc(50% - 22px);display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.22);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.22);box-shadow:0 2px 5px 0 rgba(0,0,0,.22)}.UserStaticBanner .slick-next{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px;-webkit-border-bottom-left-radius:3px;-moz-border-radius-bottomleft:3px;border-bottom-left-radius:3px;right:9px}.UserStaticBanner .slick-prev{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px;-webkit-border-bottom-right-radius:3px;-moz-border-radius-bottomright:3px;border-bottom-right-radius:3px;left:9px}.UserStaticBanner .slick-prev:before{width:14px;padding-left:0}.UserStaticBanner .s_banner_d{position:absolute;overflow:hidden}.UserStaticBanner .s_banner_d img{position:absolute;left:50%;-ms-transform:translatex(-50%);transform:translatex(-50%);-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-o-transform:translatex(-50%);display:block}@media screen and (max-width:1024px){.UserStaticBanner,.UserStaticBanner .s_banner,.UserStaticBanner .s_banner_d{height:194px}.UserStaticBanner .slick-next,.UserStaticBanner .slick-prev{display:none}.UserStaticBanner .slick-dots{display:block;width:100%;padding:0;list-style:none;position:absolute;bottom:7px;text-align:center}.UserStaticBanner .slick-dots li{width:6px;height:6px;margin:0 2px}.UserStaticBanner .slick-dots li button{text-indent:-9999px;display:block;width:6px;height:6px;cursor:pointer;border:0;outline:0;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#fff;padding:0}.UserStaticBanner .slick-dots li.slick-active button{outline:0;background:#f07431}}@media screen and (max-width:1024px){.UserStaticBanner{margin-top:0;margin-bottom:0}.UserStaticBanner .slick-slide{padding:0}}"});r(5389),r(5889);var l=r(8429),c=r(1287),d=r(9418),h=!0,p=e=>{let{isAppInBoxEnabled:t,setIsAppInBoxEnabled:r}=(0,d.kh)();return(0,n.useEffect)(()=>{(0,c.xb)(e.isShowAppInbox)||t===e.isShowAppInbox||r(e.isShowAppInbox)},[e.isShowAppInbox]),(0,n.useEffect)(()=>{let e=document.querySelectorAll(".ck-clicker");e&&e.forEach(e=>{e.addEventListener("click",function(e){(0,l.h)(e)})})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{}),(0,i.jsx)(u,{}),(0,i.jsx)(l.Z,{pageProps:e})]})}},1479:function(){},5889:function(){},5389:function(){}},function(e){e.O(0,[4111,9774,2888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);