(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,o){"use strict";o.r(t);o(50),o(173);var n=o(0),a=o.n(n),i=o(155),r=(o(36),o(450)),s=o(452),l=o(451),c=(o(52),o(174)),p=o.n(c),d=(o(26),o(37),o(164),o(175)),h=o.n(d),m=o(7),u=o.n(m),f=o(409),g=o.n(f),v=o(162),b=function(e,t){var o,n=this;void 0===t&&(t=[]),this.selectLatestVersion=function(e){return e.sort().reverse()[0]},this.fetchNavigation=h()(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetch("/documentation/"+n.version+"/navigation.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),this.fetchManifest=h()(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetch("/documentation/"+n.version+"/manifest.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),this.fetchContent=(i=h()(p.a.mark(function e(t,o){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetch("/documentation/"+n.version+"/"+t+"/"+o+"/content.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),function(e,t){return i.apply(this,arguments)}),this.setVersion=function(e){n.version=e},this.fetch=(a=h()(p.a.mark(function e(t){var o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g()(Object(v.withPrefix)(t));case 2:return o=e.sent,e.abrupt("return",o.data);case 4:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)}),o="latest"===e?this.selectLatestVersion(t):e,this.setVersion(o);var a;var i},x=o(150),y=o(428),w=x.default.div.withConfig({displayName:"ColumnsWrappercomponent__ColumnsWrapper",componentId:"q3z1gb-0"})(["box-sizing:border-box;width:100%;padding:0;display:flex;flex-direction:row;flex-wrap:wrap;"]),k=(o(433),o(79),o(436),o(438),function(e,t){return function(e,o){if(e[t]&&o[t]){var n=e[t].toString().toLowerCase(),a=o[t].toString().toLowerCase();if(n<a)return-1;if(n>a)return 1}return 0}}),N=o(156),E=x.default.div.withConfig({displayName:"ContentWrappercomponent__Wrapper",componentId:"sc-13u7w8e-0"})(["box-sizing:border-box;width:100%;margin:0 0 20px 0;text-align:left;"]),I=x.default.h1.withConfig({displayName:"ContentWrappercomponent__Header",componentId:"sc-13u7w8e-1"})(["font-size:34px;font-weight:600;border-bottom:1px solid #e5e5e5;margin-top:36px;margin-bottom:24px;font-weight:600;line-height:1.25;padding-bottom:0.3em;"]),C=x.default.h1.withConfig({displayName:"ContentWrappercomponent__ContentHeader",componentId:"sc-13u7w8e-2"})(["box-sizing:border-box;width:100%;font-size:40px;font-weight:600;line-height:1.3em;margin:0 0 20px;&:first-letter{text-transform:uppercase;}"]),j=x.default.div.withConfig({displayName:"ContentWrappercomponent__ContentDescription",componentId:"sc-13u7w8e-3"})(["box-sizing:border-box;width:100%;margin:0;"]),M=x.default.a.withConfig({displayName:"ContentWrappercomponent__Anchor",componentId:"sc-13u7w8e-4"})(["display:block;height:0;overflow:none;visibility:hidden;"]),S=function(e){var t,o,n=e.content,i=null;n.docs&&(i=function(e){return e.concat().filter(function(e){return!e.internal||!0!==e.internal})}(i=(t=n.docs).concat().sort(k(t,"order"))));var r=function(e){return e.trim().replace(/ /g,"-").toLowerCase()};return a.a.createElement("div",null,n&&a.a.createElement(E,null,a.a.createElement(C,null,n.displayName),a.a.createElement(j,null,i&&i.map(function(e,t){var n,i=e.type?e.type:e.title,s=r(i)+"-"+r(e.title),l=r(i)+"-"+r(i);return n=o!==l,o=l,a.a.createElement("div",{key:t},n&&l!==s&&a.a.createElement(M,{id:l}),a.a.createElement(I,{id:s},e.title),a.a.createElement(N.a,{html:e.source}))}))))},z=o(439),L=o.n(z);function A(){var e=L()(["\n  animation-delay: -1s;\n"]);return A=function(){return e},e}var T=Object(x.keyframes)(["0%,100%{transform:scale(0.0);}50%{transform:scale(1.0);}"]),_=x.default.div.withConfig({displayName:"LoadingIndicator__Spinner",componentId:"sc-1gveaqh-0"})(["width:75px;height:75px;margin:0 auto;position:relative;"]),D=x.default.div.withConfig({displayName:"LoadingIndicator__DoubleBounce1",componentId:"sc-1gveaqh-1"})(["width:100%;height:100%;border-radius:50%;background-color:#3298ff;opacity:0.6;position:absolute;top:0;left:0;animation:"," 2s infinite ease-in-out;"],T),O=D.extend(A()),P=function(e){var t=e.className;return a.a.createElement(_,{className:t},a.a.createElement(D,null),a.a.createElement(O,null))},W=o(151),U=function(e){if(!e.response)return W.errors.general;var t=e.response.status,o=W.errors[t];return o||e.response.status+" - "+e.response.statusText},F=o(152),Y=x.default.p.withConfig({displayName:"Text",componentId:"sc-8ydno5-0"})(["line-height:1.5;color:",';font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:20px;line-height:1.8;word-wrap:break-word;'],F.a.gray),H=o(190),B=function(e){function t(t){var o;return(o=e.call(this,t)||this).updateContent=function(){var e=h()(p.a.mark(function e(t,n,a){var i,r,s,l;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.props.versions,r=new b(t,i),e.prev=2,e.next=5,r.fetchContent(n,a);case 5:(s=e.sent).docs=o.replaceImagePaths(s.docs,{version:r.version,type:n,id:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),l=e.t0;case 12:o.setState({loading:!1,content:s,error:l});case 13:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t,o,n){return e.apply(this,arguments)}}(),o.replaceImagePaths=function(e,t){var o=t.version,n=t.type,a=t.id;return e.map(function(e){return-1!==e.source.search(/.?\/?assets/g)&&(e.source=e.source.replace(/src="\.?\/?assets/g,'src="/documentation/'+o+"/"+n+"/"+a+"/assets")),e})},o.state={loading:!0,error:void 0},o}u()(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=h()(p.a.mark(function e(){var t,o,n,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.item,o=t.type,n=t.id,a=t.hash,e.next=3,this.updateContent(this.props.version,o,n);case 3:Object(H.goToAnchor)(a);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),o.UNSAFE_componentWillReceiveProps=function(){var e=h()(p.a.mark(function e(t){var o,n,a,i,r,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.version,n=t.item,a=n.type,i=n.id,r=n.hash,s=Object.assign({},this.props.item),a===s.type&&i===s.id&&o===this.props.version){e.next=7;break}return this.setState({loading:!0}),e.next=7,this.updateContent(o,a,i);case 7:r!==s.hash&&Object(H.goToAnchor)(r);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),o.render=function(){if(this.state.loading)return a.a.createElement(P,null);var e=this.state.error;if(e)return a.a.createElement(Y,null,U(e));var t=this.state.content;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Helmet,{title:t.displayName+" - "+W.navigation.documentation}),a.a.createElement(S,Object.assign({content:t},this.props)))},t}(a.a.PureComponent),V=(o(80),o(163),o(444),o(83),o(194),o(195)),Q=760,q=x.default.div.withConfig({displayName:"NavigationListcomponent__Wrapper",componentId:"sc-1ath14s-0"})(["overflow-y:auto;max-height:calc(100vh - 94px);@media (max-width:","px){max-height:calc(100vh - 140px);}"],Q),Z=x.default.div.withConfig({displayName:"NavigationListcomponent__NavigationContainer",componentId:"sc-1ath14s-1"})(["box-sizing:border-box;width:100%;padding:10px 0;text-align:left;"]),G=x.default.div.withConfig({displayName:"NavigationListcomponent__NavigationHeader",componentId:"sc-1ath14s-2"})(["font-size:12px;font-weight:300;text-align:left;color:rgba(63,80,96,0.6);padding:10px 0;text-transform:uppercase;"]),R=x.default.ul.withConfig({displayName:"NavigationListcomponent__Items",componentId:"sc-1ath14s-3"})(["width:auto;margin:0;margin-top:",";margin-bottom:",";margin-left:",";padding:0;max-height:",";overflow-y:",";transition:max-height ease-in-out 0.7s;"],function(e){return e.marginTop?"10px":"0"},function(e){return e.marginTop?"-10px":"0"},function(e){return e.secondary?"10px":"0"},function(e){return(e.show?"9000px":e.showAll&&"auto")||"0"},function(e){return e.show?"auto":"hidden"}),J=x.default.li.withConfig({displayName:"NavigationListcomponent__Item",componentId:"sc-1ath14s-4"})(["display:block;padding:10px 0;"]),X=x.default.div.withConfig({displayName:"NavigationListcomponent__LinkWrapper",componentId:"sc-1ath14s-5"})(["position:relative;"]),K=x.default.a.withConfig({displayName:"NavigationListcomponent__Arrow",componentId:"sc-1ath14s-6"})(['width:16px;height:100%;display:block;position:absolute;z-index:50;cursor:pointer;:before{content:"";display:"block";width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:',";left:2px;top:50%;position:absolute;transform:translateY(-50%);transform:",";}"],function(e){return e.active?"3px solid #167ee6":"3px solid rgba(50,54,58,0.6)"},function(e){return e.activeArrow?"translateY(-50%) rotate(90deg)":"translateY(-50%)"}),$=x.default.a.withConfig({displayName:"NavigationListcomponent__Link",componentId:"sc-1ath14s-7"})(["color:",";font-size:14px;font-weight:",";display:block;padding-left:16px;position:relative;:hover{color:",";cursor:pointer;}"],function(e){return e.active?"#167ee6":"#485766"},function(e){return e.bold?"bold":"normal"},"#167ee6");function ee(e){var t=e.rootId,o=e.parentId,n=e.type,i=e.items,r=e.active,s=e.activeNav,l=o?s.id===t&&s.hash&&-1!==s.hash.indexOf(o):s.id===t;return a.a.createElement(R,{secondary:!0,marginTop:!0,show:l},i&&i.map(function(i,l){var c,p,d;o?(c=o+"-"+i.anchor,p=r.hash&&r.id===t&&r.hash===o+"-"+i.anchor):(d=i.topicType?i.topicType.replace(/ /g,"-").toLowerCase():i.anchor,c=d+"-"+i.anchor,p=r.hash&&r.id===t&&r.hash===c);var h=i&&i.titles&&i.titles.length>0,m=h&&s.id===t&&s.hash&&-1!==s.hash.indexOf(i.anchor);return a.a.createElement(J,{key:o?t+"-"+o+"-"+i.anchor:t+"-"+i.anchor},a.a.createElement(X,null,h&&a.a.createElement(K,{onClick:function(){var o;o={id:t,type:n,hash:c},e.setActiveNav(o)},active:p,activeArrow:m}),a.a.createElement($,{active:p,onClick:function(){var o,a;o={id:t,type:n,hash:c},a={hasSubElements:h},e.callbackParent(o,a)}},i.name)),h&&a.a.createElement(ee,{items:i.titles,type:n,rootId:t,parentId:i.anchor,history:e.history,active:r,activeNav:s,callbackParent:e.callbackParent}))}))}var te=function(e){var t=function(t,o){e.callbackParent(t,o)},o=function(t){e.setActiveNav(t)};return a.a.createElement(q,null,a.a.createElement(Z,null,a.a.createElement(R,{showAll:!0},a.a.createElement(J,{key:e.items.root.id},a.a.createElement(X,null,e.topics&&a.a.createElement(K,{onClick:function(){o({id:e.items.root.id,type:"root",hash:""})},activeArrow:e.items.root.id===e.activeNav.id,active:!e.active.hash&&e.active.id===e.items.root.id}),a.a.createElement($,{active:!e.active.hash&&e.active.id===e.items.root.id,onClick:function(){t({id:e.items.root.id,type:"root",hash:""},{hasSubElements:e.topics&&e.topics.length>0})}},e.items.root.displayName)),e.topics&&a.a.createElement(ee,{items:e.topics.find(function(t){return t.id===e.items.root.id}).sections,type:"root",rootId:e.items.root.id,active:e.active,activeNav:e.activeNav,history:e.history,callbackParent:e.callbackParent,setActiveNav:e.setActiveNav})))),a.a.createElement(V.Separator,null),a.a.createElement(Z,null,a.a.createElement(G,null,"Components"),a.a.createElement(R,{showAll:!0},e.items.components.map(function(n){var i=null;return e.topics&&(i=e.topics.find(function(e){return e.id===n.id})),a.a.createElement(J,{key:n.id},a.a.createElement(X,null,i&&i.sections&&a.a.createElement(K,{onClick:function(){o({id:n.id,type:"components",hash:""})},activeArrow:n.id===e.activeNav.id,active:!e.active.hash&&e.active.id===n.id}),a.a.createElement($,{active:!e.active.hash&&e.active.id===n.id,onClick:function(){return t({id:n.id,type:"components",hash:""},{hasSubElements:i&&i.sections&&i.sections.length>0})}},n.displayName)),i&&i.sections&&a.a.createElement(ee,{items:i.sections,type:"components",rootId:n.id,active:e.active,activeNav:e.activeNav,history:e.history,callbackParent:e.callbackParent,setActiveNav:e.setActiveNav}))}))))},oe=o(445),ne=o.n(oe),ae=x.default.img.withConfig({displayName:"NavigationSidebar__Icon",componentId:"sc-1066yng-0"})(["width:24px;height:24px;position:absolute;left:10px;"]),ie=x.default.button.withConfig({displayName:"NavigationSidebar__ToggleSidebarButton",componentId:"sc-1066yng-1"})(["position:relative;background-color:#fff;outline:none;border-radius:3px;line-height:24px;cursor:pointer;width:100%;border:0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;padding:10px;padding-left:50px;appearance:none;box-shadow:0px 0px 15px 0px rgba(0,0,0,0.25);display:none;margin:0;font-size:18px;@media (max-width:","px){display:block;}"],Q),re=x.default.div.withConfig({displayName:"NavigationSidebar__SidebarWrapper",componentId:"sc-1066yng-2"})(["display:",";background:#fff;@media (max-width:","px){height:calc(100vh - 46px);box-shadow:3px 3px 15px rgba(0,0,0,0.3);padding:0 20px;}"],function(e){return e.visible?"block":"none"},Q),se=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={visible:!0},t.toggleVisibility=function(){t.setState({visible:!t.state.visible})},t.hide=function(){t.setState({visible:!1})},t.resize=function(){var e=window.innerWidth>Q;t.state.visible!==e&&t.setState({visible:e})},t}u()(t,e);var o=t.prototype;return o.componentDidMount=function(){window.addEventListener("resize",this.resize)},o.componentWillUnmount=function(){window.removeEventListener("resize",this.resize)},o.render=function(){var e=!this.state.visible,t=this.state.visible?W.docs.hideNavigation:W.docs.showNavigation;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ie,{visible:e,onClick:this.toggleVisibility},a.a.createElement(ae,{src:ne.a}),t),a.a.createElement(re,{visible:this.state.visible},this.props.topNavComponent,a.a.createElement(te,{items:this.props.items,topics:this.props.topics,active:this.props.active,activeNav:this.props.activeNav,callbackParent:this.props.callbackParent,setActiveNav:this.props.setActiveNav,history:this.props.history})))},t}(a.a.Component),le=x.default.div.withConfig({displayName:"MainPagecomponent__SideWrapper",componentId:"ks9hpm-0"})(["box-sizing:border-box;text-align:left;flex:0 0 280px;flex-shrink:0;margin-right:20px;bottom:0;z-index:1;overflow:auto;transition:transform 0.2s ease-in-out;@media (max-width:","px){flex-basis:100%;margin:30px 0 40px;}"],Q),ce=x.default.div.withConfig({displayName:"MainPagecomponent__CenterSideWrapper",componentId:"ks9hpm-1"})(["box-sizing:border-box;flex:1;flex-basis:400px;overflow:auto;@media (max-width:","px){padding:0 20px;}"],Q);var pe=function(e){function t(t){var o;o=e.call(this,t)||this;var n=t.manifest,i=function(e){return e&&e.root?e.root.id:null}(n);return o.state={active:{id:t.match.params.id||i,type:t.match.params.type||"root",hash:t.location.hash.replace(/#/g,"")},activeNav:{id:t.match.params.id||i,type:t.match.params.type||"root",hash:t.location.hash.replace(/#/g,"")},navigationList:n},o.navSidebar=a.a.createRef(),o}u()(t,e);var o=t.prototype;return o.chooseActive=function(e,t){var o=t.hasSubElements;this.setState({active:e,activeNav:e});var n="/"+this.props.pageName+"/"+this.props.version+"/"+e.type+"/"+e.id;e.hash?(n=n+"#"+e.hash,this.props.history.push(n)):(this.props.history.push(n),Object(H.goToTop)()),window.innerWidth<Q&&!o&&this.navSidebar.current&&this.navSidebar.current.hide()},o.setActiveNav=function(e){JSON.stringify(e)===JSON.stringify(this.state.activeNav)||e.type===this.state.activeNav.type&&e.id===this.state.activeNav.id&&!e.hash?this.collapseNav(e):this.expandNav(e)},o.expandNav=function(e){this.setState({activeNav:e})},o.collapseNav=function(e){var t=e.hash?{id:e.id,type:e.type,hash:""}:{id:"",type:"",hash:""};this.setState({activeNav:t})},o.render=function(){var e=this,t=null;return this.props.topics.loading||this.props.topics.topics&&(t=this.props.topics.topics),console.log("topics","topics"),a.a.createElement(y.StickyContainer,null,a.a.createElement(w,null,a.a.createElement(le,null,a.a.createElement(y.Sticky,null,function(o){var n=o.style;return a.a.createElement("div",{style:n},a.a.createElement(se,{ref:e.navSidebar,topNavComponent:e.props.topNavComponent,items:e.state.navigationList,topics:t,active:e.state.active,activeNav:e.state.activeNav,callbackParent:function(t,o){e.chooseActive(t,o)},setActiveNav:function(t){e.setActiveNav(t)},history:e.props.history}))})),a.a.createElement(ce,null,a.a.createElement(B,{version:this.props.version,versions:this.props.versions,item:this.state.active}))))},t}(a.a.PureComponent),de=x.default.a.withConfig({displayName:"BackToTop__Link",componentId:"v6kxp9-0"})(["color:",";font-size:16px;font-weight:",";display:block;position:relative;text-decoration:none;border-bottom:1px solid #e5e5e5;padding:10px 0;:hover{color:#167ee6;}"],function(e){return e.active?"#167ee6":"#485766"},function(e){return e.bold?"bold":"normal"}),he=x.default.span.withConfig({displayName:"BackToTop__Icon",componentId:"v6kxp9-1"})(["margin-right:5px;"]),me=function(){return a.a.createElement(de,{href:"#"},a.a.createElement(he,null,"↑")," ",W.docs.backToTop)},ue=function(e){function t(t){var o;(o=e.call(this,t)||this).changeVersion=function(){var e=h()(p.a.mark(function e(t){var n,a,i;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.state.version,a=t.target.value,-1===(i=o.props.history.location.pathname).search(n)?o.props.history.push(o.props.pageName+"/"+a+"/"):o.props.history.push(i.replace(n,a)),e.next=6,o.refetchDocs(a);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),console.log(t);var n=t.version||"latest";return o.state={loading:!0,navigation:null,manifest:null,version:n,error:void 0},o}u()(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=h()(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refetchDocs(this.state.version);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),o.refetchDocs=function(){var e=h()(p.a.mark(function e(t){var o,n,a,i;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0,version:t}),o=new b(t,this.props.versions),e.prev=2,e.next=5,o.fetchNavigation();case 5:return a=e.sent,e.next=8,o.fetchManifest();case 8:i=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),n=e.t0;case 14:this.setState({navigation:a,manifest:i,loading:!1,error:n});case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t){return e.apply(this,arguments)}}(),o.render=function(){var e=this.state,t=this.props;return e.loading?null:e.error?a.a.createElement(V.Text,null,U(e.error)):a.a.createElement(a.a.Fragment,null,a.a.createElement(pe,{topics:e.navigation,manifest:e.manifest.spec,docsFetcher:this.docsFetcher,version:e.version,versions:t.versions,location:t.location,history:t.history,match:t.match,pageName:t.pageName,topNavComponent:a.a.createElement(a.a.Fragment,null,a.a.createElement(me,null))}))},t}(a.a.PureComponent),fe=x.default.div.withConfig({displayName:"Docscontainer__Wrapper",componentId:"sc-13x1wbt-0"})(["width:100%;position:relative;margin-top:30px;"]),ge=function(e){var t=e.versions,o=void 0===t?[]:t;if(0===o.length)return null;var n=function(e){return a.a.createElement(ue,Object.assign({versions:o,pageName:"docs"},e))};return a.a.createElement(fe,null,a.a.createElement(r.a,null,a.a.createElement(s.a,null,a.a.createElement(l.a,{exact:!0,path:"/docs/",render:n}),a.a.createElement(l.a,{exact:!0,path:"/docs/:version/",render:n}),a.a.createElement(l.a,{exact:!0,path:"/docs/:version/:type/:id",render:n}))))},ve=o(157);o.d(t,"pageQuery",function(){return be});t.default=function(e){var t=(e.data.allDirectory.edges||[]).map(function(e){return e.node.relativePath}).sort().reverse();return a.a.createElement(ve.a,{pageId:"documentation"},a.a.createElement(i.Helmet,null),a.a.createElement(ge,{versions:t}))};var be="4096873658"},152:function(e,t,o){"use strict";t.a={blue:"#0b74de",lightBlue:"#3298ff",darkBlue:"#044181",violet:"#4d10e1",green:"#00e833",lightGray:"#f2f2f2",gray:"#485766"}},156:function(e,t,o){"use strict";var n=o(0),a=o.n(n),i=o(150),r=o(168),s=o.n(r),l=o(152),c=i.default.div.withConfig({displayName:"MDContent__MarkdownContent",componentId:"sc-1uniay8-0"})(["-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;color:",';font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:20px;line-height:1.8;word-wrap:break-word;.pl-c{color:#6a737d;}.pl-c1,.pl-s .pl-v{color:#005cc5;}.pl-e,.pl-en{color:#6f42c1;}.pl-smi,.pl-s .pl-s1{color:',';}.pl-ent{color:#22863a;}.pl-k{color:#d73a49;}.pl-s,.pl-pds,.pl-s .pl-pse .pl-s1,.pl-sr,.pl-sr .pl-cce,.pl-sr .pl-sre,.pl-sr .pl-sra{color:#032f62;}.pl-v,.pl-smw{color:#e36209;}.pl-bu{color:#b31d28;}.pl-ii{color:#fafbfc;background-color:#b31d28;}.pl-c2{color:#fafbfc;background-color:#d73a49;}.pl-c2::before{content:"^M";}.pl-sr .pl-cce{font-weight:bold;color:#22863a;}.pl-ml{color:#735c0f;}.pl-mh,.pl-mh .pl-en,.pl-ms{font-weight:bold;color:#005cc5;}.pl-mi{font-style:italic;color:',";}.pl-mb{font-weight:bold;color:",';}.pl-md{color:#b31d28;background-color:#ffeef0;}.pl-mi1{color:#22863a;background-color:#f0fff4;}.pl-mc{color:#e36209;background-color:#ffebda;}.pl-mi2{color:#f6f8fa;background-color:#005cc5;}.pl-mdr{font-weight:bold;color:#6f42c1;}.pl-ba{color:#586069;}.pl-sg{color:#959da5;}.pl-corl{text-decoration:underline;color:#032f62;}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;}a{background-color:transparent;}a:active,a:hover{outline-width:0;}strong{font-weight:inherit;}strong{font-weight:bolder;}h1{font-size:2em;margin:0.67em 0;}img{border-style:none;}code,kbd,pre{font-family:monospace,monospace;font-size:1em;}hr{box-sizing:content-box;height:0;overflow:visible;}input{font:inherit;margin:0;}input{overflow:visible;}[type="checkbox"]{box-sizing:border-box;padding:0;}*{box-sizing:border-box;}input{font-family:inherit;font-size:inherit;line-height:inherit;}a{color:',';text-decoration:none;&:hover{text-decoration:underline;}strong{font-weight:600;}}hr{height:0;margin:15px 0;overflow:hidden;background:transparent;border:0;border-bottom:1px solid #dfe2e5;}hr::before{display:table;content:"";}hr::after{display:table;clear:both;content:"";}table{border-spacing:0;border-collapse:collapse;}td,th{padding:0;}h1,h2,h3,h4,h5,h6{font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";color:',';margin-top:0;margin-bottom:0;}h1{font-size:32px;font-weight:600;}h2{font-size:24px;font-weight:600;}h3{font-size:20px;font-weight:600;}h4{font-size:16px;font-weight:600;}h5{font-size:14px;font-weight:600;}h6{font-size:12px;font-weight:600;}p{margin-top:0;margin-bottom:10px;}blockquote{margin:0;}ul{list-style-type:disc;}ul,ol{padding-left:0;margin-top:0;margin-bottom:0;}ol ol,ul ol{list-style-type:lower-roman;}ul ul ol,ul ol ol,ol ul ol,ol ol ol{list-style-type:lower-alpha;}dd{margin-left:0;}code{font-family:"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;font-size:12px;}pre{margin-top:0;margin-bottom:0;font-family:"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;font-size:12px;}.octicon{vertical-align:text-bottom;}.pl-0{padding-left:0 !important;}.pl-1{padding-left:4px !important;}.pl-2{padding-left:8px !important;}.pl-3{padding-left:16px !important;}.pl-4{padding-left:24px !important;}.pl-5{padding-left:32px !important;}.pl-6{padding-left:40px !important;}:before{display:table;content:"";}:after{display:table;clear:both;content:"";}*:first-child{margin-top:0 !important;}*:last-child{margin-bottom:0 !important;}a:not([href]){color:inherit;text-decoration:none;}.anchor{float:left;padding-right:4px;margin-left:-20px;line-height:1;}.anchor:focus{outline:none;}p,blockquote,ul,ol,dl,table,pre{margin-top:0;margin-bottom:16px;}hr{height:0.25em;padding:0;margin:24px 0;background-color:#e1e4e8;border:0;}blockquote{padding:0 1em;color:#6a737d;border-left:0.25em solid #dfe2e5;}blockquote >:first-child{margin-top:0;}blockquote >:last-child{margin-bottom:0;}kbd{display:inline-block;padding:3px 5px;font-size:11px;line-height:10px;color:#444d56;vertical-align:middle;background-color:#fafbfc;border:solid 1px #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5;}h1,h2,h3,h4,h5,h6{margin-top:24px;margin-bottom:16px;font-weight:600;line-height:1.25;}h1 .octicon-link,h2 .octicon-link,h3 .octicon-link,h4 .octicon-link,h5 .octicon-link,h6 .octicon-link{color:#1b1f23;vertical-align:middle;visibility:hidden;}h1:hover .anchor,h2:hover .anchor,h3:hover .anchor,h4:hover .anchor,h5:hover .anchor,h6:hover .anchor{text-decoration:none;}h1:hover .anchor .octicon-link,h2:hover .anchor .octicon-link,h3:hover .anchor .octicon-link,h4:hover .anchor .octicon-link,h5:hover .anchor .octicon-link,h6:hover .anchor .octicon-link{visibility:visible;}h1{padding-bottom:0.3em;font-size:2em;}h2{padding-bottom:0.3em;font-size:1.5em;}h3{font-size:1.25em;}h4{font-size:1em;}h5{font-size:0.875em;}h6{font-size:0.85em;color:#6a737d;}ul,ol{padding-left:2em;}ul ul,ul ol,ol ol,ol ul{margin-top:0;margin-bottom:0;}li{word-wrap:break-all;}li > p{margin-top:16px;}li + li{margin-top:0.25em;}dl{padding:0;}dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:600;}dl dd{padding:0 16px;margin-bottom:16px;}table{display:block;width:100%;overflow:auto;}table th{font-weight:600;}table th,table td{padding:6px 13px;border:1px solid #dfe2e5;}table tr{background-color:#fff;border-top:1px solid #c6cbd1;}table tr:nth-child(2n){background-color:#f6f8fa;}img{max-width:100%;box-sizing:content-box;background-color:#fff;}img[align="right"]{padding-left:20px;}img[align="left"]{padding-right:20px;}code{padding:0.2em 0.4em;margin:0;font-size:85%;background-color:rgba(27,31,35,0.05);border-radius:3px;}pre{word-wrap:normal;}pre > code{padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:transparent;border:0;}.highlight{margin-bottom:16px;}.highlight pre{margin-bottom:0;word-break:normal;}.highlight pre,pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#fafafa;border:1px solid #e5e5e5;border-radius:3px;}pre code{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:transparent;border:0;}.full-commit .btn-outline:not(:disabled):hover{color:#005cc5;border-color:#005cc5;}kbd{display:inline-block;padding:3px 5px;font:11px "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;line-height:10px;color:#444d56;vertical-align:middle;background-color:#fafbfc;border:solid 1px #d1d5da;border-bottom-color:#c6cbd1;border-radius:3px;box-shadow:inset 0 -1px 0 #c6cbd1;}:checked + .radio-label{position:relative;z-index:1;border-color:#0366d6;}.task-list-item{list-style-type:none;}.task-list-item + .task-list-item{margin-top:3px;}.task-list-item input{margin:0 0.2em 0.25em -1.6em;vertical-align:middle;}hr{border-bottom-color:#eee;}.hljs{display:block;overflow-x:auto;padding:0.5em;color:#383a42;background:#fafafa;}.hljs-comment,.hljs-quote{color:#a0a1a7;font-style:italic;}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#a626a4;}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e45649;}.hljs-literal{color:#0184bb;}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta-string{color:#50a14f;}.hljs-built_in,.hljs-class .hljs-title{color:#c18401;}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#986801;}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#4078f2;}.hljs-emphasis{font-style:italic;}.hljs-strong{font-weight:bold;}.hljs-link{text-decoration:underline;}'],l.a.gray,l.a.gray,l.a.gray,l.a.gray,l.a.blue,l.a.gray);t.a=function(e){var t=e.html;return a.a.createElement(c,null,a.a.createElement(s.a,{innerHTML:!0},t))}},157:function(e,t,o){"use strict";var n=o(0),a=o.n(n),i=o(160),r=o(158),s=o(161),l=o(150),c=o(159),p=l.default.main.withConfig({displayName:"DefaultLayout__Wrapper",componentId:"sc-5loqdd-0"})(["width:100%;margin:0 auto;padding:20px;max-width:1200px;@media (max-width:760px){padding:0;}"]);t.a=function(e){var t=e.pageId,o=e.pageName,n=e.children;return a.a.createElement("main",{className:"content-layout",style:{opacity:0,visibility:"hidden"}},a.a.createElement(s.a,{pageId:t,pageName:o}),a.a.createElement(c.a,null),a.a.createElement(i.a,{headerClassName:"blog-header",logoClassName:"sprite-icon--inverse"}),a.a.createElement(p,null,a.a.createElement("div",null,n)),a.a.createElement(r.a,null))}},445:function(e,t){e.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgo8dGl0bGU+ZmlsZS1lbXB0eTwvdGl0bGU+CjxwYXRoIGQ9Ik0yOC42ODEgNy4xNTljLTAuNjk0LTAuOTQ3LTEuNjYyLTIuMDUzLTIuNzI0LTMuMTE2cy0yLjE2OS0yLjAzMC0zLjExNi0yLjcyNGMtMS42MTItMS4xODItMi4zOTMtMS4zMTktMi44NDEtMS4zMTloLTE1LjVjLTEuMzc4IDAtMi41IDEuMTIxLTIuNSAyLjV2MjdjMCAxLjM3OCAxLjEyMiAyLjUgMi41IDIuNWgyM2MxLjM3OCAwIDIuNS0xLjEyMiAyLjUtMi41di0xOS41YzAtMC40NDgtMC4xMzctMS4yMy0xLjMxOS0yLjg0MXpNMjQuNTQzIDUuNDU3YzAuOTU5IDAuOTU5IDEuNzEyIDEuODI1IDIuMjY4IDIuNTQzaC00LjgxMXYtNC44MTFjMC43MTggMC41NTYgMS41ODQgMS4zMDkgMi41NDMgMi4yNjh6TTI4IDI5LjVjMCAwLjI3MS0wLjIyOSAwLjUtMC41IDAuNWgtMjNjLTAuMjcxIDAtMC41LTAuMjI5LTAuNS0wLjV2LTI3YzAtMC4yNzEgMC4yMjktMC41IDAuNS0wLjUgMCAwIDE1LjQ5OS0wIDE1LjUgMHY3YzAgMC41NTIgMC40NDggMSAxIDFoN3YxOS41eiI+PC9wYXRoPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-docs-js-6043077223baf0331b27.js.map