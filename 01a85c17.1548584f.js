(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{125:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(11),s=a(133),l=a(9),o=Object(r.createContext)({collectLink:function(){}}),i=a(123),m=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,u,h=e.isNavLink,f=e.to,d=e.href,p=e.activeClassName,b=e.isActive,E=e["data-noBrokenLinkCheck"],g=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),v=Object(i.b)().withBaseUrl,k=Object(r.useContext)(o),y=f||d,O=Object(s.a)(y),w=null==y?void 0:y.replace("pathname://",""),N=void 0!==w?function(e){return e.startsWith("/")}(a=w)?v(a):a:void 0,j=Object(r.useRef)(!1),L=h?c.e:c.c,C=l.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&O&&window.docusaurus.prefetch(N),function(){C&&u&&u.disconnect()}}),[N,C,O]);var T=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,S=!N||!O||T;return N&&O&&!T&&!E&&k.collectLink(N),S?n.a.createElement("a",Object.assign({href:N},y&&!O&&{target:"_blank",rel:"noopener noreferrer"},g)):n.a.createElement(L,Object.assign({},g,{onMouseEnter:function(){j.current||(window.docusaurus.preload(N),j.current=!0)},innerRef:function(e){var t,a;C&&e&&O&&(t=e,a=function(){window.docusaurus.prefetch(N)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:N||""},h&&{isActive:b,activeClassName:p}))}},129:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(123),s=a(122),l=a(53),o=a.n(l);t.a=function(){return n.a.createElement("div",{className:o.a.footerContent},n.a.createElement("div",null,n.a.createElement("img",{src:Object(c.a)("img/logo-white.png"),alt:"EOS CR LOGO"})),n.a.createElement("div",null,n.a.createElement("div",{className:o.a.contactusLinkWrapper},n.a.createElement("a",{className:o.a.contactUsLink,href:Object(c.a)("/contact-us")},"CONTACT US")),n.a.createElement("h2",null,"FOLLOW US"),n.a.createElement("div",{className:o.a.socialCol},n.a.createElement("div",null,n.a.createElement("a",{href:"https://twitter.com/EOSCostaRica",target:"_blank",className:Object(s.a)(o.a.companySocial,o.a.companyLocation)},"Twitter"),n.a.createElement("a",{href:"https://www.facebook.com/costaricaeos",target:"_blank",className:Object(s.a)(o.a.companySocial,o.a.companyLocation)},"Facebook"),n.a.createElement("a",{href:"https://www.linkedin.com/company/eoscostarica/",target:"_blank",className:Object(s.a)(o.a.companySocial,o.a.companyLocation)},"LinkedIn")),n.a.createElement("div",null,n.a.createElement("a",{href:"https://medium.com/@eoscostarica",target:"_blank",className:Object(s.a)(o.a.companySocial,o.a.companyLocation)},"Medium"),n.a.createElement("a",{href:"https://t.me/eoscr",target:"_blank",className:Object(s.a)(o.a.companySocial,o.a.companyLocation)},"Telegram"),n.a.createElement("a",{href:"https://www.instagram.com/eoscostarica/",target:"_blank",className:Object(s.a)(o.a.companySocial,o.a.companyLocation)},"Instagram")))),n.a.createElement("div",null,n.a.createElement("span",{className:o.a.companyLocation},"Edificio Trifami, 5th floor San Jos\xe9,"," ",n.a.createElement("strong",null,n.a.createElement("i",null,"Costa Rica")))))}},130:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(123),s=a(126),l=a(122),o=function(){return n.a.createElement("svg",{viewBox:"0 0 100 80",width:"40",height:"30"},n.a.createElement("rect",{fill:"#5484B3",width:"100",height:"15"}),n.a.createElement("rect",{fill:"#5484B3",y:"30",width:"100",height:"15"}),n.a.createElement("rect",{fill:"#5484B3",y:"60",width:"100",height:"15"}))},i=a(53),m=a.n(i),u=[{strokeDasharray:"47 400",strokeDashoffset:-110,height:40,width:63,path:"/",label:"Home"},{strokeDasharray:"70 400",strokeDashoffset:-128,height:40,width:83,path:"/services/",label:"Services"},{strokeDasharray:"80 400",strokeDashoffset:-138,height:40,width:93,path:"/industries/",label:"Industries"},{strokeDasharray:"50 400",strokeDashoffset:-118,height:40,width:68,path:"/about/",label:"About"},{strokeDasharray:"66 400",strokeDashoffset:-126,height:40,width:80,path:"/projects/",label:"Projects"},{strokeDasharray:"27 400",strokeDashoffset:-85,height:40,width:40,path:"/block-producer/",label:"Bp"},{strokeDasharray:"40 400",strokeDashoffset:-98,height:40,width:53,path:"/blog/",label:"Blog"}],h=function(e){var t,a=e.isOpen,r=e.setIsOpen;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:m.a.menuButton,onClick:function(){return r(!0)}},n.a.createElement(o,null)),n.a.createElement("div",{className:Object(l.a)(m.a.sidebar,(t={},t[m.a.active]=a,t)),onClick:function(){return r(!1)}},n.a.createElement("div",{className:m.a.menuSideBar,onClick:function(e){return e.stopPropagation()}},n.a.createElement("div",{className:m.a.imgBox},n.a.createElement("img",{src:Object(c.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"})),n.a.createElement("ul",null,u.map((function(e){return n.a.createElement("li",{key:e.label},n.a.createElement("a",{href:Object(c.a)(e.path)},e.label))}))))))};t.a=function(){var e=Object(r.useRef)(0),t=Object(r.useRef)(0),a=Object(r.useState)(""),l=a[0],o=a[1],i=Object(s.useMediaQuery)({query:"(max-width: 1024px)"}),f=Object(r.useState)(!1),d=f[0],p=f[1],b=function(){if(!window.matchMedia("(max-width: 1024px)").matches)if(document.body.scrollTop>50||document.documentElement.scrollTop>50){var a="scale(0.4, 0.4)";e.current.style.WebkitTransform=a,e.current.style.MozTransform=a,e.current.style.OTransform=a,e.current.style.transform=a,t.current.style.height="75px",t.current.style.backgroundColor="rgba(255, 255, 255, 0.95)"}else{var r="scale(1, 1)";e.current.style.WebkitTransform=r,e.current.style.MozTransform=r,e.current.style.OTransform=r,e.current.style.transform=r,t.current.style.height="150px",t.current.style.background="none"}};return Object(r.useLayoutEffect)((function(){var a=window.location.pathname;if("/blog/"===a){var r="scale(0.4, 0.4)";e.current.style.WebkitTransform=r,e.current.style.MozTransform=r,e.current.style.OTransform=r,e.current.style.transform=r,t.current.style.height="75px",t.current.style.background="rgba(255, 255, 255, 0.95)",t.current.style.paddingLeft="0px"}else window.addEventListener("scroll",b),t.current.style.background="none";return o(a),function(){return window.removeEventListener("scroll",b)}}),[]),n.a.createElement("div",{className:m.a.menuWrapper},n.a.createElement("div",{className:m.a.customMenu,ref:t},i&&n.a.createElement(h,{isOpen:d,setIsOpen:p}),n.a.createElement("div",{className:m.a.boxLeft},n.a.createElement("img",{ref:e,src:Object(c.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"})),!i&&n.a.createElement("div",{className:m.a.language},n.a.createElement("a",{href:"https://es.eoscostarica.io/",target:"_blank"},"Espa\xf1ol"),n.a.createElement("span",null," / "),n.a.createElement("strong",null,n.a.createElement("a",null,"English"))),n.a.createElement("div",{className:m.a.boxRight},n.a.createElement("ul",null,u.map((function(e){return n.a.createElement("li",{key:e.label},n.a.createElement("a",{href:Object(c.a)(e.path)},n.a.createElement("div",{className:m.a.svgWrapper},n.a.createElement("svg",{height:e.height,width:e.width},n.a.createElement("text",{x:"10",y:"25",fill:"#000000"},e.label),n.a.createElement("rect",{className:m.a.shape,strokeDasharray:e.strokeDasharray,height:e.height,width:e.width,strokeDashoffset:e.strokeDashoffset,strokeWidth:l===e.path?12:0})))))})),n.a.createElement("li",null)))))}},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(0),n=a.n(r),c=a(122),s=a(125),l=a(57),o=a.n(l);function i(e){var t=e.sidebar;return 0===t.items.length?null:n.a.createElement("div",{className:Object(c.a)(o.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:o.a.sidebarItemTitle},t.title),n.a.createElement("ul",{className:o.a.sidebarItemList},t.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:o.a.sidebarItem},n.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:o.a.sidebarItemLink,activeClassName:o.a.sidebarItemLinkActive},e.title))}))))}},66:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(127),s=a(125),l=a(134);t.default=function(e){var t=e.tags,a=e.sidebar,r={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);r[t]=r[t]||[],r[t].push(e)}));var o=Object.entries(r).sort((function(e,t){var a=e[0],r=t[0];return a===r?0:a>r?1:-1})).map((function(e){var a=e[0],r=e[1];return n.a.createElement("div",{key:a},n.a.createElement("h3",null,a),r.map((function(e){return n.a.createElement(s.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.a.createElement("hr",null))})).filter((function(e){return null!=e}));return n.a.createElement(c.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(l.a,{sidebar:a})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,"Tags"),n.a.createElement("div",{className:"margin-vert--lg"},o)))))}}}]);