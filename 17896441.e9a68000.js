(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{111:function(e,t,a){"use strict";var n=a(0),r=a.n(n);var l=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],i=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,c=!1,o=document.getElementsByClassName(e);r<o.length&&!c;){var s=o[r],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),s.classList.add(t),i(s),c=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=a(54),c=a.n(i),o="table-of-contents__link";function s(e){var t=e.headings,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(s,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return l(o,"table-of-contents__link--active",100),r.a.createElement("div",{className:c.a.tableOfContents},r.a.createElement(s,{headings:t}))}},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(106),i=a(99),c=a(95),o=a(97);var s=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},m=a(107),u=a(118);var d=function(){var e=Object(i.a)().siteConfig.title,t=Object(m.useActivePlugin)({failfast:!0}).pluginId,a=function(e){void 0===e&&(e="default");var t=Object(m.useDocsData)(e),a=Object(u.b)(),r=a[0],l=a[1],i=r[e].preferredVersionName;return{preferredVersion:i?t.versions.find((function(e){return e.name===i})):null,savePreferredVersionName:Object(n.useCallback)((function(t){l.savePreferredVersion(e,t)}),[l])}}(t).savePreferredVersionName,l=Object(m.useActiveVersion)(t),c=Object(m.useDocVersionSuggestions)(t),s=c.latestDocSuggestion,d=c.latestVersionSuggestion;if(!d)return r.a.createElement(r.a.Fragment,null);var v,f=null!=s?s:(v=d).docs.find((function(e){return e.id===v.mainDocId}));return r.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===l.name?r.a.createElement("div",null,"This is unreleased documentation for ",e," ",r.a.createElement("strong",null,l.label)," version."):r.a.createElement("div",null,"This is documentation for ",e," ",r.a.createElement("strong",null,l.label),", which is no longer actively maintained."),r.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",r.a.createElement("strong",null,r.a.createElement(o.a,{to:f.path,onClick:function(){return a(d.name)}},"latest version"))," ","(",d.label,")."))},v=a(111),f=a(94),g=a(59),E=a.n(g);t.default=function(e){var t,a=Object(i.a)().siteConfig,n=a.url,o=a.title,u=a.titleDelimiter,g=e.content,p=g.metadata,b=p.description,h=p.title,N=p.permalink,O=p.editUrl,w=p.lastUpdatedAt,_=p.lastUpdatedBy,j=g.frontMatter,k=j.image,y=j.keywords,C=j.hide_title,L=j.hide_table_of_contents,x=Object(m.useActivePlugin)({failfast:!0}).pluginId,I=Object(m.useVersions)(x),A=Object(m.useActiveVersion)(x),V=I.length>1,B=h?h+" "+u+" "+o:o,S=Object(c.a)(k,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("title",null,B),r.a.createElement("meta",{property:"og:title",content:B}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),y&&y.length&&r.a.createElement("meta",{name:"keywords",content:y.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:S}),k&&r.a.createElement("meta",{property:"twitter:image",content:S}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h}),N&&r.a.createElement("meta",{property:"og:url",content:n+N}),N&&r.a.createElement("link",{rel:"canonical",href:n+N})),r.a.createElement("div",{className:Object(f.a)("container padding-vert--lg",E.a.docItemWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:Object(f.a)("col",(t={},t[E.a.docItemCol]=!L,t))},r.a.createElement(d,null),r.a.createElement("div",{className:E.a.docItemContainer},r.a.createElement("article",null,V&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",A.label)),!C&&r.a.createElement("header",null,r.a.createElement("h1",{className:E.a.docTitle},h)),r.a.createElement("div",{className:"markdown"},r.a.createElement(g,null))),(O||w||_)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},O&&r.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(w||_)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",w&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("time",{dateTime:new Date(1e3*w).toISOString(),className:E.a.docLastUpdatedAt},new Date(1e3*w).toLocaleDateString()),_&&" "),_&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,_)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(s,{metadata:p})))),!L&&g.rightToc&&r.a.createElement("div",{className:"col col--3"},r.a.createElement(v.a,{headings:g.rightToc})))))}},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(13),i=a(105),c=a(10),o=Object(n.createContext)({collectLink:function(){}}),s=a(95),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,u,d=e.isNavLink,v=e.to,f=e.href,g=e.activeClassName,E=e.isActive,p=e["data-noBrokenLinkCheck"],b=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),h=Object(s.b)().withBaseUrl,N=Object(n.useContext)(o),O=v||f,w=Object(i.a)(O),_=null==O?void 0:O.replace("pathname://",""),j=void 0!==_?function(e){return e.startsWith("/")}(a=_)?h(a):a:void 0,k=Object(n.useRef)(!1),y=d?l.e:l.c,C=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!C&&w&&window.docusaurus.prefetch(j),function(){C&&u&&u.disconnect()}}),[j,C,w]);var L=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,x=!j||!w||L;return j&&w&&!L&&!p&&N.collectLink(j),x?r.a.createElement("a",Object.assign({href:j},O&&!w&&{target:"_blank",rel:"noopener noreferrer"},b)):r.a.createElement(y,Object.assign({},b,{onMouseEnter:function(){k.current||(window.docusaurus.preload(j),k.current=!0)},innerRef:function(e){var t,a;C&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(j)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:j||""},d&&{isActive:E,activeClassName:g}))}}}]);