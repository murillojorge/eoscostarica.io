(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{115:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n(146),c=(n(122),n(137)),l=(n(123),n(366));t.default=function(){var e=Object(o.k)();return r.a.createElement(c.a,null,r.a.createElement(i.Parallax,{strength:800},r.a.createElement(i.Background,{className:"bgParallax"},r.a.createElement(l.a,{className:"imgParallax"})),r.a.createElement(l.a,{className:"containerSec"},r.a.createElement(l.a,{className:"sectionHero"},r.a.createElement(l.a,{className:"titleBox"},r.a.createElement("h1",null,"Page under construction")),r.a.createElement("p",null,"We're still working on this page. Contact us and we'll let you know when we're ready."),r.a.createElement(l.a,{className:"buttonBox"},r.a.createElement("button",{className:"buttonPrimary",onClick:function(){return e.push("/contact-us/")}},"Contact us"))))))}},139:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(122),i=n(123),c=n(355),l=n(171),s=n(357),u=n(366),f=n(361),m=n(367),g=n(358),p=n(140),d=n.n(p),b=n(360),h=n(363),y=n(2),v=[{dropDown:!1,path:"/",label:"Home",target:"_self"},{dropDown:!0,path:"/",label:"About us",target:"_self",markerSize:"70px",subPaths:[{path:"/services/",label:"Services",target:"_self"},{path:"/the-company/",label:"The company",target:"_self"},{path:"/projects/",label:"Projects",target:"_self"},{path:"/block-producer/",label:"Block producer",target:"_self"}]},{dropDown:!1,path:"/industries/",label:"Industries",target:"_self"},{dropDown:!1,path:"https://guide.eoscostarica.io/",label:"Learning",target:"_blank"},{dropDown:!1,path:"/blog/",label:"Blog",target:"_self"},{dropDown:!1,path:"/contact-us/",label:"Contact",target:"_self"}];t.a=function(){var e,t,n=Object(l.a)(),p=Object(c.a)(n.breakpoints.down("sm")),w=Object(a.useState)(!1),E=w[0],O=w[1],S=Object(y.l)(),_=Object(a.useState)(),k=_[0],j=_[1],N=Object(a.useState)(""),P=N[0],I=N[1],x=Object(s.a)({disableHysteresis:!0});Object(a.useEffect)((function(){j("/blog/"===S.pathname.substring(0,6))}),[S]);var D=x;Object(a.useLayoutEffect)((function(){var e=window.location.pathname;I(e)}),[]);var R=function(){O(!E)},M=function(e){var t=!1;return e.map((function(e){P===e.path&&(t=!0)})),t};return r.a.createElement(u.a,{className:k?Object(o.a)("navBar","navBarScroll"):Object(o.a)("navBar",(e={},e.navBarScroll=D,e))},r.a.createElement(u.a,{className:"menuWrapper"},p&&r.a.createElement(r.a.Fragment,null,(D||k)&&r.a.createElement(u.a,{className:"imgLogoBoxMobile"},r.a.createElement("img",{className:"imgLogoScroll",src:Object(i.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"})),r.a.createElement(u.a,{className:"btnDrawer"},r.a.createElement(g.a,{onClick:R},r.a.createElement(d.a,{fontSize:"large"}))),r.a.createElement(m.a,{anchor:"right",open:E,onClose:R},r.a.createElement(u.a,{className:"drawerContent"},r.a.createElement(b.a,null,v.map((function(e){return r.a.createElement(u.a,{key:e.label},e.dropDown&&r.a.createElement(r.a.Fragment,null,e.subPaths.map((function(e){return r.a.createElement(f.a,{href:Object(i.a)(e.path),target:e.target,key:e.label,style:{textDecoration:"none"}},r.a.createElement(h.a,{button:!0},r.a.createElement("span",{className:"linkItem"},e.label)))}))),!e.dropDown&&r.a.createElement(f.a,{href:Object(i.a)(e.path),target:e.target,style:{textDecoration:"none"}},r.a.createElement(h.a,{button:!0},r.a.createElement("span",{className:"linkItem"},e.label))))})))))),!p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"boxLeft"},r.a.createElement(u.a,{className:"imgLogoBox"},r.a.createElement("img",{className:k?"imgLogoScroll":Object(o.a)("imgLogo",(t={},t.imgLogoScroll=D,t)),src:Object(i.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"}))),r.a.createElement(u.a,{className:"boxRight"},r.a.createElement(u.a,{className:"boxMenuItems",id:"boxMenuItems"},v.map((function(e){var t,n,a;return r.a.createElement(u.a,{key:e.label},!e.dropDown&&r.a.createElement(f.a,{href:Object(i.a)(e.path),target:e.target,key:e.label,style:{textDecoration:"none"}},r.a.createElement(u.a,{className:"menuItem"},r.a.createElement("h5",{className:Object(o.a)("link",(t={},t.linkActive=P===e.path,t))},e.label))),e.dropDown&&r.a.createElement(u.a,{className:"menuItem"},r.a.createElement("h5",{className:Object(o.a)("link",(n={},n.linkActive=M(e.subPaths),n))},e.label),r.a.createElement(u.a,{className:Object(o.a)("dropDownMenu",(a={},a.dropDownMenuActive=M(e.subPaths),a)),style:{width:e.markerSize}},e.subPaths.map((function(e){var t;return r.a.createElement(f.a,{href:Object(i.a)(e.path),target:e.target,key:e.label,style:{textDecoration:"none"}},r.a.createElement(u.a,null,r.a.createElement("h5",{className:Object(o.a)("menuItemDrop",(t={},t.menuItemDropActive=P===e.path,t))},e.label)))})))))})))))))}},141:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(123),i=n(366),c=n(361),l=n(364),s=n(362);t.a=function(){return r.a.createElement(i.a,{className:"footer"},r.a.createElement(i.a,{className:"footerContent"},r.a.createElement(l.a,{container:!0,spacing:5},r.a.createElement(l.a,{item:!0,xs:12,md:3},r.a.createElement(i.a,{className:"footerLogoBox"},r.a.createElement("img",{src:Object(o.a)("img/logo-white.png"),alt:"EOS CR LOGO",className:"footerLogo"}))),r.a.createElement(l.a,{item:!0,xs:12,md:2}),r.a.createElement(l.a,{item:!0,xs:12,md:4},r.a.createElement(i.a,{className:"boxTitle"},r.a.createElement("h3",{className:"h3Footer"},"FOLLOW US")),r.a.createElement(i.a,null,r.a.createElement(l.a,{container:!0},r.a.createElement(l.a,{item:!0,xs:12,md:6},r.a.createElement(s.a,{className:"body1Footer"},r.a.createElement(c.a,{className:"linkFooter",href:"https://twitter.com/EOSCostaRica",target:"_blank",style:{color:"white"}},"Twitter")),r.a.createElement(s.a,{className:"body1Footer"},r.a.createElement(c.a,{className:"linkFooter",href:"https://www.facebook.com/costaricaeos",target:"_blank",style:{color:"white"}},"Facebook")),r.a.createElement(s.a,{className:"body1Footer"},r.a.createElement(c.a,{className:"linkFooter",href:"https://www.linkedin.com/company/eoscostarica/",target:"_blank",style:{color:"white"}},"LinkedIn"))),r.a.createElement(l.a,{item:!0,xs:12,md:6},r.a.createElement(s.a,{className:"body1Footer"},r.a.createElement(c.a,{className:"linkFooter",href:"https://medium.com/@eoscostarica",target:"_blank",style:{color:"white"}},"Medium")),r.a.createElement(s.a,{className:"body1Footer"},r.a.createElement(c.a,{className:"linkFooter",href:"https://t.me/eoscr",target:"_blank",style:{color:"white"}},"Telegram")),r.a.createElement(s.a,{className:"body1Footer"},r.a.createElement(c.a,{className:"linkFooter",href:"https://www.instagram.com/eoscostarica/",target:"_blank",style:{color:"white"}},"Instagram")))))),r.a.createElement(l.a,{item:!0,xs:12,md:3},r.a.createElement(s.a,{className:"body1Footer"},"Edificio Trifami, 5th floor"),r.a.createElement(s.a,{className:"body1Footer"},"San Jos\xe9, ",r.a.createElement("strong",null,r.a.createElement("i",null,"Costa Rica")))))))}},146:function(e,t,n){var a;"undefined"!=typeof self&&self,a=function(e){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var f=u(n(0)),m=function(e){o(n,e);var t=c(n);function n(){return r(this,n),t.apply(this,arguments)}return n}(f.default.Component);t.Parallax=m;var g=function(e){o(n,e);var t=c(n);function n(){return r(this,n),t.apply(this,arguments)}return n}(f.default.Component);t.Background=g},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(e){if(!e)return 0;var t=window,n=document,a=n.documentElement,r=n.getElementsByTagName("body")[0];return t.innerHeight||a.clientHeight||r.clientHeight},t.isScrolledIntoView=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0;if(!a)return!1;var r=e.getBoundingClientRect().top-n,o=e.getBoundingClientRect().bottom+n;return r<=t.getWindowHeight(a)&&o>=0},t.getNodeHeight=function(e,n){return e?n&&"clientHeight"in n?n.clientHeight:t.getWindowHeight(e):0},t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var r=a(n(4));t.Parallax=r.default;var o=a(n(7));t.Background=o.default},function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=l(n(0)),u=n(1),f=n(5),m=n(2),g=l(n(6)),p={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(n,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}(n);function n(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(a=t.call(this,e)).onWindowResize=function(){a.parentHeight=m.getNodeHeight(a.canUseDOM,a.parent),a.updatePosition()},a.onWindowLoad=function(){a.updatePosition()},a.onScroll=function(){if(a.canUseDOM){var e=Date.now();e-a.timestamp>=10&&m.isScrolledIntoView(a.node,100,a.canUseDOM)&&(window.requestAnimationFrame(a.updatePosition),a.timestamp=e)}},a.onContentMount=function(e){a.content=e},a.updatePosition=function(){if(a.content){var e=!1;a.contentHeight=a.content.getBoundingClientRect().height,a.contentWidth=a.node.getBoundingClientRect().width,a.img&&a.img.naturalWidth/a.img.naturalHeight<a.contentWidth/a.getImageHeight()&&(e=!0);var t=f.getRelativePosition(a.node,a.canUseDOM),n=!!a.img,r=a.bg&&a.state.splitChildren.bgChildren.length>0;n&&a.setImagePosition(t,e),r&&a.setBackgroundPosition(t),n||r||a.setState({percentage:t})}},a.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:p,bgStyle:Object.assign(Object.assign({},p),e.bgStyle),percentage:0,splitChildren:f.getSplitChildren(e)},a.canUseDOM=m.canUseDOM(),a.node=null,a.content=null,a.bgImageLoaded=!1,a.bgImageRef=void 0,a.parent=e.parent,a.parentHeight=m.getNodeHeight(a.canUseDOM,a.parent),a.timestamp=Date.now(),a.isDynamicBlur=f.getHasDynamicBlur(e.blur),a}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(n,[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,n=t.bgImage,a=t.bgImageSrcSet,r=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,a,r):this.updatePosition()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.parent,a=t.bgImage,r=t.bgImageSrcSet,o=t.bgImageSizes,i=this.state.bgImage;e.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=m.getNodeHeight(this.canUseDOM,this.parent),i!==a&&this.loadImage(a,r,o)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,a=t.strength;if(!0!==n){var r=this.state.bgStyle,o="translate3d(-50%, ".concat((a<0?a:0)-a*e,"px, 0)");this.setState({bgStyle:Object.assign(Object.assign({},r),{WebkitTransform:o,transform:o}),percentage:e})}}},{key:"setImagePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,a=n.disabled,r=n.strength,o=n.blur,i=t?"auto":"".concat(this.getImageHeight(),"px"),c=t?"".concat(this.contentWidth,"px"):"auto";if(!0!==a){var l=this.state.imgStyle,s=r<0,u=(s?r:0)-r*e,m="translate3d(-50%, ".concat(u,"px, 0)"),g="none";o&&(g="blur(".concat(f.getBlurValue(this.isDynamicBlur,o,e),"px)")),this.setState({imgStyle:Object.assign(Object.assign({},l),{height:i,width:c,WebkitTransform:m,transform:m,WebkitFilter:g,filter:g}),percentage:e})}}},{key:"getImageHeight",value:function(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function(e,t,n){var a=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(){a.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},(function(){return a.updatePosition()}))},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.style,r=t.bgClassName,o=t.contentClassName,i=t.bgImageAlt,c=t.renderLayer,l=t.bgImageStyle,u=this.state,f=u.bgImage,m=u.bgImageSrcSet,p=u.bgImageSizes,d=u.percentage,b=u.imgStyle,h=u.bgStyle,y=u.splitChildren;return s.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},a),ref:function(t){e.node=t}},f?s.default.createElement("img",{className:r,src:f,srcSet:m,sizes:p,ref:function(t){e.img=t},alt:i,style:Object.assign(Object.assign({},b),l)}):null,c?c(-(d-1)):null,y.bgChildren.length>0?s.default.createElement("div",{className:"react-parallax-background-children",ref:function(t){e.bg=t},style:h},y.bgChildren):null,s.default.createElement(g.default,{onMount:this.onContentMount,className:o},y.children))}}],[{key:"getDerivedStateFromProps",value:function(e){return{splitChildren:f.getSplitChildren(e)}}}]),n}(u.Parallax);d.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=d},function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var r=n(0),o=n(2);t.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},t.getRelativePosition=function(e,n){if(!n)return 0;var a=e.getBoundingClientRect(),r=a.top,i=a.height,c=o.getNodeHeight(n),l=i>c?i:c,s=Math.round(r>l?l:r);return t.getPercentage(0,l,s)},t.getSplitChildren=function(e){var t=[],n=r.Children.toArray(e.children);return n.forEach((function(e,a){var r=e;r.type&&r.type.isParallaxBackground&&(t=t.concat(n.splice(a,1)))})),{bgChildren:t,children:n}},t.getHasDynamicBlur=function(e){return"object"===a(e)&&void 0!==e.min&&void 0!==e.max},t.getBlurValue=function(e,t,n){return e?t.min+(1-n)*t.max:t},t.setBlur=function(e,t){e.style.webkitFilter="blur(".concat(t,"px)"),e.style.filter="blur(".concat(t,"px)")}},function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0));t.default=function(e){var t=e.children,n=e.onMount,a=e.className;return r.default.createElement("div",{ref:function(e){return n(e)},className:a||"react-parallax-content",style:{position:"relative"}},t)}},function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=s(n(0)),f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}(n);function n(){return r(this,n),t.apply(this,arguments)}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children;return u.default.createElement("div",{className:"react-parallax-background ".concat(t)},n)}}]),n}(n(1).Background);f.defaultProps={className:""},f.isParallaxBackground=!0,t.default=f}])},e.exports=a(n(0))}}]);