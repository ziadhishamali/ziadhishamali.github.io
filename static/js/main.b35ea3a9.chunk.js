(this.webpackJsonpziadhisham=this.webpackJsonpziadhisham||[]).push([[0],Array(22).concat([function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/location.d9d208a8.svg"},function(e,t,a){e.exports=a.p+"static/media/at.46ca15c3.svg"},function(e,t,a){e.exports=a.p+"static/media/phone.953e368f.svg"},function(e,t,a){e.exports=a.p+"static/media/upwork.f6041d5b.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.0b000652.svg"},function(e,t,a){e.exports=a.p+"static/media/github.e4f2d6b0.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.b9f18286.svg"},function(e,t,a){e.exports=a.p+"static/media/facebook.f4c2b29b.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram.f8af51e6.svg"},,,,function(e,t,a){e.exports=a(67)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/DSC_0287.235d713b.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(24),r=a.n(o),l=(a(43),a(3)),s=a(4),c=a(6),m=a(5),u=a(7),f=a(35),d=a(10),p=(a(44),a(25)),h=a.n(p),g=(a(47),a(51),h.a.initializeApp({apiKey:"AIzaSyBwyAoEVIquWO9KBnRk1HSRTrJL6BbSvfg",authDomain:"ziadhisham-personal-website.firebaseapp.com",databaseURL:"https://ziadhisham-personal-website.firebaseio.com",projectId:"ziadhisham-personal-website",storageBucket:"ziadhisham-personal-website.appspot.com",messagingSenderId:"538224524649",appId:"1:538224524649:web:6fdaedcf815feb78"}).firestore()),v=(a(55),a(56),a(26),a(27),a(28),a(29)),b=a.n(v),w=a(30),E=a.n(w),k=a(31),N=a.n(k),y=a(32),j=a.n(y),x=a(33),O=a.n(x),S=a(34),A=a.n(S),C=function(e){return i.a.createElement("div",{className:"social-links-container"},i.a.createElement("a",{className:"social-link-item",href:"https://www.upwork.com/o/profiles/users/~01464ed789075af903/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:b.a,alt:"upwork"})),i.a.createElement("a",{className:"social-link-item",href:"https://www.linkedin.com/in/ziadhishamali/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:E.a,alt:"linkedin"})),i.a.createElement("a",{className:"social-link-item",href:"https://github.com/ziadhishamali",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:N.a,alt:"github"})),i.a.createElement("a",{className:"social-link-item",href:"https://twitter.com/ziadhishamali",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:j.a,alt:"twitter"})),i.a.createElement("a",{className:"social-link-item",href:"https://www.facebook.com/ziadhishamaly",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:O.a,alt:"facebook"})),i.a.createElement("a",{className:"social-link-item",href:"https://www.instagram.com/ziad.hisham.ali/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:A.a,alt:"instagram"})))},I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={resume:"",header:"Undergraduate Software Engineer",name:"ZIAD HISHAM ALI",nameAr:"\u0632\u064a\u0627\u062f \u0647\u0634\u0627\u0645 \u0639\u0644\u064a",aboutMe:"I'm an undergraduate at Computer and Sytems Engineering Department, Faculty of Engineering, Alexandria University and expected to graduate in 2021. I'm passionate for technology and everything that comes with it. Currently I'm more focused on full stack web development and machine learning. My hobbies are a lot I like football, cycling, running, reading books and of course making new awesome web-applications"},a.hireMe=function(e){e.preventDefault(),console.log("hire me clicked"),document.getElementById("contact-area").classList.toggle("moveContactLeft")},a.scrollToPortfolio=function(){window.document.getElementById("portfolio-section").scrollIntoView()},a.downloadResume=function(){},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.collection("Files").doc("resume").onSnapshot((function(t){e.setState({resume:t.data().src})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"bio-section"},i.a.createElement("div",{className:"logo-container"},i.a.createElement("div",{className:"logo-circle"},i.a.createElement("div",null),i.a.createElement("div",null)),i.a.createElement("div",{className:"section-column logo-name align justify"},i.a.createElement("span",{className:"header white-text"},this.state.header),i.a.createElement("span",{className:"name white-text"},this.state.name),i.a.createElement("span",{className:"nameAr white-text"},this.state.nameAr)),i.a.createElement("div",{className:"buttons-container"},i.a.createElement("button",{className:"button-portfolio",onClick:this.scrollToPortfolio},"Portfolio"),i.a.createElement("a",{href:this.state.resume,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("button",{className:"button-portfolio resume",onClick:this.downloadResume},"Download Resume")))),i.a.createElement("div",{className:"section-column bio-container"},i.a.createElement("div",{className:"bio"},i.a.createElement("div",null,'"'),i.a.createElement("div",{className:"aboutme white-text righteous"},this.state.aboutMe,i.a.createElement("span",{className:"orange-text"},".")),i.a.createElement("div",null)),i.a.createElement(C,null)))}}]),t}(n.Component),L=(a(57),a(22),a(58),n.Component,a(13)),z=(a(59),function(e){var t=e.id,a=e.skill,n=e.filter,o=e.show,r=e.changeFilter,l=a.length?a.map((function(e,a){var o=0===n[a]?"":"on";return i.a.createElement("div",{key:a+1,className:"container-wrapper each-skill "+o,onClick:function(){return r(t,a)}},i.a.createElement("img",{src:e.image,alt:"skill"}),i.a.createElement("span",{className:"skill-name"},e.name))})):i.a.createElement("span",null);return a.length&&o?i.a.createElement("div",{className:"container-wrapper no-border"},l):""}),D=function(){return i.a.createElement("div",{className:"loader-container"},i.a.createElement("div",{className:"loader"}))},B=(a(60),function(e){var t=e.skills,a=e.hideSkill,n=t.length?t.map((function(e,t){return i.a.createElement("div",{key:e.id,className:"skills-container-2 no-background no-border"},i.a.createElement("h1",{className:"black-text small-text bold white-box cursor margin-top-- no-padding",onClick:function(){a(t)}},e.title),i.a.createElement(z,{skill:e.all,show:e.show}))})):i.a.createElement(D,null);return i.a.createElement("div",{className:"skills-container"},i.a.createElement("div",{className:"scrollable"},n))}),U=(n.Component,function(e){var t=e.skills,a=e.changeFilter,n=t.length?t.map((function(e,t){return"Programming Languages"!==e.title&&"Web Development"!==e.title&&"Technologies & Tools"!==e.title?"":i.a.createElement("div",{key:e.id,className:"skills-container-2 no-background no-border"},i.a.createElement("span",{className:"skill-title"},e.title),i.a.createElement(z,{id:t,skill:e.all,filter:e.filter,show:e.show,changeFilter:a}))})):i.a.createElement(D,null);return i.a.createElement("div",{className:"filter-container"},n)}),R=function(e){var t=e.tags,a=e.flex,n=t&&t.length?t.map((function(e,t){return i.a.createElement("span",{key:t,className:"tag-name"},e)})):"";return i.a.createElement("div",{className:"tags-container "+a},n)},W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).changeFilter=function(e,t){var n=Object(L.a)(a.state.skills),i=Object(L.a)(a.state.filterList);if(0===n[e].filter[t])n[e].filter[t]=1,i.push(n[e].all[t].name),a.setState({filterList:i});else{n[e].filter[t]=0;var o=i.filter((function(a){return a!==n[e].all[t].name}));a.setState({filterList:o})}a.setState({skills:n})},a.state={portfolio:[],skills:[],services:[],filterList:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.collection("Projects").orderBy("priority","asc").onSnapshot((function(t){var a=[];t.forEach((function(e){var t={};t.id=e.id,t.title=e.data().title,t.imageUrl=e.data().imageUrl,t.url=e.data().url,t.tags=e.data().tags,t.description=e.data().description,a.push(t)})),e.setState({portfolio:a})})),g.collection("Skills").orderBy("priority","asc").onSnapshot((function(t){var a=[];t.forEach((function(e){var t={};t.id=e.id,t.title=e.data().title,t.all=e.data().list,t.filter=e.data().list.map((function(){return 0})),t.show=e.data().show,a.push(t)})),e.setState({skills:a})}))}},{key:"componentDidUpdate",value:function(){console.log("filter list is: ",this.state.filterList)}},{key:"render",value:function(){var e=this.state,t=e.portfolio,a=e.skills,n=e.filterList,o=0,r=t.length?t.map((function(e,t){if(0!==n.length&&!n.some((function(t){return e.tags.indexOf(t)>=0})))return"";var a="row";return o%2===0&&(a="row-reverse"),0===o&&(a+=" first"),o++,i.a.createElement("div",{key:e.id,className:""},i.a.createElement("span",{style:{display:"block"}},i.a.createElement("div",{className:"portfolio-container-2 "+a},i.a.createElement("div",{className:"portfolio-info"},i.a.createElement("span",{className:"portfolio-title"},e.title),i.a.createElement("span",{className:"portfolio-description"},e.description),i.a.createElement(R,{tags:e.tags,flex:a})),i.a.createElement("img",{className:"portfolio-image box-hover box-shadow-2",src:e.imageUrl,alt:e.title,onClick:function(){window.open(e.url)}}))))})):i.a.createElement(D,null);return i.a.createElement("div",{className:"scrollable portfolio-wrapper",id:"portfolio-section"},i.a.createElement(U,{skills:a,changeFilter:this.changeFilter}),r)}}]),t}(n.Component),F=(a(61),function(e){e.services;return i.a.createElement("div",{className:"services-container"})}),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={services:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"portfolio-section"},i.a.createElement(F,{services:this.state.services}),i.a.createElement(W,{portfolio:this.state.portfolio,skills:this.state.skills}))}}]),t}(n.Component),_=(a(62),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,null,i.a.createElement(d.a,{exact:!0,path:"/",render:function(e){return i.a.createElement("div",{className:"App wrapper"},i.a.createElement("div",{className:"home-wrapper"},i.a.createElement(I,null)),i.a.createElement("div",{className:"wave-background-home"}),i.a.createElement(M,null))}}),i.a.createElement(d.a,{path:"/bookabook",component:function(){return window.location.href="https://bookabook.web.app",null}}),i.a.createElement(d.a,{path:"/theroom",component:function(){return window.location.href="https://theroom.web.app",null}}),i.a.createElement(d.a,{path:"/signalflowgraph",component:function(){return window.location.href="https://signalflowgraph.github.io/",null}}))}}]),t}(n.Component)),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");P?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}]),[[38,1,2]]]);
//# sourceMappingURL=main.b35ea3a9.chunk.js.map