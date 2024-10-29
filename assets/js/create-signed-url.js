(()=>{"use strict";var e={};function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);const r=window.wp.element,a=window.wp.apiFetch;var l=e.n(a);const o=window.wp.i18n,i=window.wp.components;function u(e){var n=e.templates,t=e.onSelect;return(0,r.createElement)(r.Fragment,null,n&&(0,r.createElement)(i.Flex,{wrap:!0,align:"top",id:"bannerbear-create-signed-url__select-template"},n.map((function(e){return(0,r.createElement)(i.FlexItem,{className:"bannerbear-template-wrapper",key:e.uid},(0,r.createElement)(i.Card,{elevation:1},(0,r.createElement)(i.CardMedia,null,(0,r.createElement)("img",{src:e.preview_url?e.preview_url:bannerbearCreateSignedUrl.placeholder,alt:e.name,className:"bannerbear-template-preview"})),(0,r.createElement)(i.CardFooter,null,(0,r.createElement)("h4",null,e.name),(0,r.createElement)(i.Button,{variant:"secondary",onClick:function(){return t(e.uid,e.name)}},(0,o.__)("Use Template","bannerbear")))))}))),(!n||0===n.length)&&(0,r.createElement)("p",null,(0,o.__)("No templates found.","bannerbear")))}function c(e){var n=e.onChange,a=t((0,r.useState)(""),2),l=a[0],u=a[1],c=t((0,r.useState)(!1),2),s=c[0],m=c[1],p=t((0,r.useState)(null),2),b=p[0],d=p[1],f=t((0,r.useState)(!0),2),h=f[0],w=f[1],g=function(){m(!0),d(null),window.fetch("https://api.bannerbear.com/v2/templates/",{headers:{Authorization:"Bearer "+l}}).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(e.message);return e})).then((function(e){n(l,e),m(!1)})).catch((function(e){console.log(e),e.message?d(e.message):d((0,o.__)("Something went wrong.","wp-bannerbear")),m(!1)}))},_=function(e){var n;e.preventDefault(),l&&(n=g,m(!0),d(null),w(!0),window.fetch("https://api.bannerbear.com/v2/account/",{headers:{Authorization:"Bearer "+l}}).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(e.message);return e})).then((function(e){!e.paid_plan_name||e.paid_plan_name.includes("Automate")?w(!1):(w(!0),n()),m(!1)})).catch((function(e){e.message?d(e.message):d((0,o.__)("Something went wrong.","wp-bannerbear")),m(!1)})))};return(0,r.createElement)(r.Fragment,null,(0,r.createElement)("form",{onSubmit:_,className:"bannerbear-api-key-form"},b&&(0,r.createElement)(i.Notice,{status:"error",isDismissible:!0,onRemove:function(){return d(null)}},b),!h&&(0,r.createElement)(i.Notice,{status:"warning",isDismissible:!1},(0,r.createElement)("p",null,"Your Bannerbear plan is ",(0,r.createElement)("b",null,"Automate")," which does not include the Signed URLs feature."),(0,r.createElement)("p",null,(0,r.createElement)("a",{href:"https://www.bannerbear.com/pricing/",target:"_blank"},(0,o.__)("View Bannerbear Plans","bannerbear"))),(0,r.createElement)("p",null,(0,r.createElement)("a",{variant:"secondary",href:"https://app.bannerbear.com/account",target:"_blank"},(0,o.__)("Upgrade Bannerbear Plan","bannerbear")))),(0,r.createElement)(i.Flex,{wrap:!0,align:"top"},(0,r.createElement)(i.FlexBlock,null,(0,r.createElement)(i.TextControl,{label:(0,o.__)("API Key","bannerbear"),hideLabelFromVision:!0,value:l,onChange:u,onFocus:function(){w(!0)},placeholder:(0,o.__)("Enter your API key","bannerbear"),disabled:s})),(0,r.createElement)(i.FlexItem,null,(0,r.createElement)(i.Button,{variant:"primary",onClick:_,disabled:!l||s,isPressed:s},!s&&(0,o.__)("Continue","bannerbear"),s&&(0,o.__)("Saving...","bannerbear"),s&&(0,r.createElement)(i.Spinner,null))))),(0,r.createElement)("p",{className:"description"},(0,o.__)("Enter your Bannerbear API key to get started.","bannerbear")))}const s=window.wp.domReady;function m(){var e=t((0,r.useState)(null),2),n=e[0],a=e[1],s=t((0,r.useState)(null),2),m=s[0],p=s[1],b=t((0,r.useState)(null),2),d=b[0],f=b[1],h=t((0,r.useState)(!1),2),w=h[0],g=h[1],_=t((0,r.useState)(!1),2),E=_[0],y=_[1];return(0,r.useEffect)((function(){jQuery(".post-type-bannerbear_url #wpbody-content .page-title-action").on("click",(function(e){e.preventDefault(),y(!0)}))}),[]),(0,r.createElement)(r.Fragment,null,E&&(0,r.createElement)(i.Modal,{onRequestClose:function(){return y(!1)},title:(0,o.__)("Create BannerBear Signed URL","bannerbear"),isFullScreen:!1},w&&(0,r.createElement)(i.Spinner,null),!w&&(0,r.createElement)(r.Fragment,null,d&&(0,r.createElement)(i.Notice,{status:"error",isDismissible:!0,onRemove:function(){return f(null)}},d),!n&&(0,r.createElement)(c,{onChange:function(e,n){a(e),p(n)}}),n&&(0,r.createElement)(u,{templates:m,onSelect:function(e,t){g(!0),f(null),l()({path:"/bannerbear/v1/signed-url",method:"POST",data:{api_key:n,template_id:e,template_name:t}}).then((function(e){return window.location.href=e.edit_url,e})).catch((function(e){e.message?f(e.message):f((0,o.__)("An error occurred while saving.","bannerbear")),g(!1)}))}}))))}e.n(s)()((function(){(0,r.render)((0,r.createElement)(m,null),document.getElementById("bannerbear-create-signed-url__app"))}))})();