(this.webpackJsonpziadhisham=this.webpackJsonpziadhisham||[]).push([[0],Array(21).concat([function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/location.d9d208a8.svg"},function(e,t,a){e.exports=a.p+"static/media/at.46ca15c3.svg"},function(e,t,a){e.exports=a.p+"static/media/phone.953e368f.svg"},function(e,t,a){e.exports=a.p+"static/media/upwork.f6041d5b.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.0b000652.svg"},function(e,t,a){e.exports=a.p+"static/media/github.e4f2d6b0.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.b9f18286.svg"},function(e,t,a){e.exports=a.p+"static/media/facebook.f4c2b29b.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram.f8af51e6.svg"},,,,,function(e,t,a){e.exports=a(67)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/DSC_0287.235d713b.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),i=a.n(r),c=(a(43),a(5)),s=a(6),l=a(8),m=a(7),u=a(9),d=a(34),p=a(10),h=(a(44),a(24)),f=a.n(h),v=(a(47),a(51),f.a.initializeApp({apiKey:"AIzaSyBwyAoEVIquWO9KBnRk1HSRTrJL6BbSvfg",authDomain:"ziadhisham-personal-website.firebaseapp.com",databaseURL:"https://ziadhisham-personal-website.firebaseio.com",projectId:"ziadhisham-personal-website",storageBucket:"ziadhisham-personal-website.appspot.com",messagingSenderId:"538224524649",appId:"1:538224524649:web:6fdaedcf815feb78"}).firestore()),b=(a(55),a(56),a(25),a(26),a(27),a(28)),g=a.n(b),E=a(29),w=a.n(E),k=a(30),y=a.n(k),N=a(31),x=a.n(N),j=a(32),O=a.n(j),S=a(33),A=a.n(S),I=function(e){return o.a.createElement("div",{className:"social-links-container"},o.a.createElement("a",{className:"social-link-item",href:"https://www.upwork.com/o/profiles/users/~01464ed789075af903/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:g.a,alt:"upwork"})),o.a.createElement("a",{className:"social-link-item",href:"https://www.linkedin.com/in/ziadhishamali/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:w.a,alt:"linkedin"})),o.a.createElement("a",{className:"social-link-item",href:"https://github.com/ziadhishamali",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:y.a,alt:"github"})),o.a.createElement("a",{className:"social-link-item",href:"https://twitter.com/ziadhishamali",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:x.a,alt:"twitter"})),o.a.createElement("a",{className:"social-link-item",href:"https://www.facebook.com/ziadhishamaly",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:O.a,alt:"facebook"})),o.a.createElement("a",{className:"social-link-item",href:"https://www.instagram.com/ziad.hisham.ali/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:A.a,alt:"instagram"})))},C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={resume:"",header:"Undergraduate Software Engineer",name:"ZIAD HISHAM ALI",nameAr:"\u0632\u064a\u0627\u062f \u0647\u0634\u0627\u0645 \u0639\u0644\u064a",aboutMe:"I'm an undergraduate at Computer and Sytems Engineering Department, Faculty of Engineering, Alexandria University and expected to graduate in 2021. I'm passionate for technology and everything that comes with it. Currently I'm more focused on full stack web development and machine learning. My hobbies are a lot I like football, cycling, running, reading books and of course making new awesome web-applications"},a.hireMe=function(e){e.preventDefault(),console.log("hire me clicked"),document.getElementById("contact-area").classList.toggle("moveContactLeft")},a.scrollToPortfolio=function(){window.document.getElementById("portfolio-section").scrollIntoView()},a.downloadResume=function(){},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.collection("Files").doc("resume").onSnapshot((function(t){e.setState({resume:t.data().src})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"bio-section"},o.a.createElement("div",{className:"logo-container"},o.a.createElement("div",{className:"logo-circle"},o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement("div",{className:"section-column logo-name align justify"},o.a.createElement("span",{className:"header white-text"},this.state.header),o.a.createElement("span",{className:"name white-text"},this.state.name),o.a.createElement("span",{className:"nameAr white-text"},this.state.nameAr)),o.a.createElement("div",{className:"buttons-container"},o.a.createElement("button",{className:"button-portfolio",onClick:this.scrollToPortfolio},"Portfolio"),o.a.createElement("a",{href:this.state.resume,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{className:"button-portfolio resume",onClick:this.downloadResume},"Download Resume")))),o.a.createElement("div",{className:"section-column bio-container"},o.a.createElement("div",{className:"bio"},o.a.createElement("div",null,'"'),o.a.createElement("div",{className:"aboutme white-text righteous"},this.state.aboutMe,o.a.createElement("span",{className:"orange-text"},".")),o.a.createElement("div",null)),o.a.createElement(I,null)))}}]),t}(n.Component),z=(a(57),a(21),a(58),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).showUniversity=function(){var e=a.state.education;return Object.keys(e).map((function(t,a){var n="";return""===e[t]||"status"===t?"":("finish"===t&&(n=(new Date).getFullYear().toString()<e[t]?"Expected to graduate in ":"Graduated in "),"gpa"===t&&(n="GPA: "),o.a.createElement("span",{key:a},n+e[t]))}))},a.showExperiences=function(){return a.state.experiences.map((function(e,t){var a="",n=Object.keys(e).map((function(t,n){return"company"===t?(a=e[t],""):"title"===t?o.a.createElement("span",{key:n},e[t]+" at "+a):"start"===t?(a=e[t],""):"end"===t?o.a.createElement("span",{key:n},a+" - "+e[t]):o.a.createElement("span",{key:n},e[t])}));return o.a.createElement("div",{key:t,className:"margin-bottom"},n)}))},a.state={education:{},experiences:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.collection("Experiences").orderBy("priority","asc").onSnapshot((function(t){var a=[];t.forEach((function(e){var t={};t.company=e.data().company,t.title=e.data().title,t.start=e.data().start,t.end=e.data().end,t.description=e.data().description,a.push(t)})),e.setState({experiences:a})})),v.collection("Education").onSnapshot((function(t){var a={};t.forEach((function(e){a.university=e.data().university,a.year=e.data().year,a.finish=e.data().finish,a.status=e.data().status,a.gpa=e.data().gpa})),e.setState({education:a})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"information-section"},o.a.createElement("div",{className:"education box-shadow-2"},o.a.createElement("span",{className:"header"},"Education",o.a.createElement("span",{className:"orange-text"},".")),this.showUniversity()),o.a.createElement("div",{className:"experiences box-shadow-2"},o.a.createElement("span",{className:"header"},"Experiences",o.a.createElement("span",{className:"orange-text"},".")),o.a.createElement("div",{className:"scrollable"},this.showExperiences())))}}]),t}(n.Component)),B=a(37),D=(a(59),function(e){var t=e.skill,a=e.show,n=(e.hideSkill,t.length?t.map((function(e,t){return o.a.createElement("div",{key:t+1,className:"container-wrapper each-skill no-margin margin-left--"},o.a.createElement("img",{src:e.image,alt:"skill"}),o.a.createElement("span",{className:"skill-name"},e.name))})):o.a.createElement("span",null));return t.length&&a?o.a.createElement("div",{className:"container-wrapper no-border"},n):""}),U=function(){return o.a.createElement("div",{className:"loader-container"},o.a.createElement("div",{className:"loader"}))},M=(a(60),function(e){var t=e.skills,a=e.hideSkill,n=t.length?t.map((function(e,t){return o.a.createElement("div",{key:e.id,className:"skills-container-2 no-background no-border"},o.a.createElement("h1",{className:"black-text small-text bold white-box cursor margin-top-- no-padding",onClick:function(){a(t)}},e.title),o.a.createElement(D,{skill:e.all,show:e.show}))})):o.a.createElement(U,null);return o.a.createElement("div",{className:"skills-container"},o.a.createElement("h1",{className:"header"},"Skills",o.a.createElement("span",{className:"orange-text"},".")),o.a.createElement("div",{className:"scrollable"},n))}),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).hideSkill=function(e){for(var t=Object(B.a)(a.state.skills),n=[],o=0;o<t.length;o++)o===e&&(t[o].show?t[o].show=!1:t[o].show=!0),n.push(t[o]);a.setState({skills:n})},a.state={skills:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.collection("Skills").orderBy("priority","asc").onSnapshot((function(t){var a=[];t.forEach((function(e){var t={};t.id=e.id,t.title=e.data().title,t.all=e.data().list,t.show=e.data().show,a.push(t)})),e.setState({skills:a})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"skill-section box-shadow-2"},o.a.createElement(M,{skills:this.state.skills,hideSkill:this.hideSkill}))}}]),t}(n.Component),W=function(e){var t=e.portfolio,a=t.length?t.map((function(e,t){var a="row";return t%2===0&&(a="row-reverse"),0===t&&(a+=" first"),o.a.createElement("a",{href:e.url,key:e.id,className:""},o.a.createElement("span",{style:{display:"block"}},o.a.createElement("div",{className:"portfolio-container-2 "+a},o.a.createElement("div",{className:"portfolio-info"},o.a.createElement("span",{className:"portfolio-title"},e.title),o.a.createElement("span",{className:"portfolio-description"},e.description)),o.a.createElement("img",{className:"portfolio-image box-hover box-shadow-2",src:e.imageUrl,alt:e.title}))))})):o.a.createElement(U,null);return o.a.createElement("div",{className:"scrollable portfolio-wrapper"},a)},_=(a(61),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={portfolio:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.collection("Projects").orderBy("priority","asc").onSnapshot((function(t){var a=[];t.forEach((function(e){var t={};t.id=e.id,t.title=e.data().title,t.imageUrl=e.data().imageUrl,t.url=e.data().url,t.description=e.data().description,a.push(t)})),e.setState({portfolio:a})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"portfolio-section",id:"portfolio-section"},o.a.createElement("div",{className:"wave-background"}),o.a.createElement(W,{portfolio:this.state.portfolio}))}}]),t}(n.Component)),L=(a(62),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.b,{exact:!0,path:"/",render:function(e){return o.a.createElement("div",{className:"App wrapper"},o.a.createElement("div",{className:"home-wrapper"},o.a.createElement(C,null)),o.a.createElement("div",{className:"wave-background-home"}),o.a.createElement("div",{className:"information-wrapper"},o.a.createElement(z,null),o.a.createElement(R,null),o.a.createElement(_,null)))}}),o.a.createElement(p.b,{path:"/bookabook"},o.a.createElement(p.a,{to:"https://bookabook.web.app"})),o.a.createElement(p.b,{path:"/theroom"},o.a.createElement(p.a,{to:"https://theroom.web.app"})))}}]),t}(n.Component)),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");P?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}]),[[38,1,2]]]);
//# sourceMappingURL=main.df50a770.chunk.js.map