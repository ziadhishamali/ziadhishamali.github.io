(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/DSC_0287.235d713b.jpg"},24:function(e,a,t){e.exports=t(38)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),i=t.n(l),o=(t(29),t(21)),c=t(10),s=(t(30),t(5)),m=t(6),u=t(8),p=t(7),d=t(9),h=(t(31),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={header:"Undergraduate Software Engineer",name:"ZIAD HISHAM ALI"},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"section parallax bg1"},r.a.createElement("p",{className:"header"},this.state.header),r.a.createElement("p",{className:"name"},this.state.name))}}]),a}(n.Component)),g=(t(32),t(20)),b=t.n(g),f=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={aboutMe:"I'm an undergraduate at Computer and Sytems Engineering Department, Faculty of Engineering, Alexandria University and expected to graduate in 2021. I'm passionate for technology and everything that comes with it. Currently I'm more focused on full stack web development and machine learning. My hobbies are a lot I like football, cycling, running, reading books and of course making new awesome web-applications"},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"section-static static"},r.a.createElement("h1",{className:"header margin-top blue-text medium-text margin-bottom"},"About Me",r.a.createElement("span",{className:"orange-text"},".")),r.a.createElement("div",{className:"section-row justify margin-bottom"},r.a.createElement("img",{className:"myImage",src:b.a,alt:"shit"}),r.a.createElement("p",{className:"aboutme align-left"},this.state.aboutMe)))}}]),a}(n.Component),v=function(e){for(var a=e.level,t=[],n=1;n<=a;n++)t.push(r.a.createElement("div",{key:n,className:"orange-circle"}));for(var l=a+1;l<=10;l++)t.push(r.a.createElement("div",{key:l,className:"white-circle"}));return r.a.createElement("div",{className:"container-wrapper"},t)},E=function(e){var a=e.skill,t=a.length?a.map(function(e){return r.a.createElement("div",{key:e.id,className:"container-wrapper align no-margin no-padding margin-left-2"},r.a.createElement("span",{className:"header white-text small-text berlin bold"},e.name),r.a.createElement(v,{level:e.level}))}):r.a.createElement("span",null);return r.a.createElement("div",{className:"container-wrapper no-border"},t)},k=function(e){var a=e.skills,t=a.length?a.map(function(e){return r.a.createElement("div",{key:e.id,className:"skills-container no-background no-border"},r.a.createElement("h1",{className:"header black-text small-text margin-left"},e.title),r.a.createElement(E,{skill:e.all}))}):r.a.createElement("p",null,"Loading skills ...");return r.a.createElement("div",{className:"skills-container box-shadow margin-top margin-bottom"},r.a.createElement("h1",{className:"header white-text medium-text berlin margin-left"},"SKILLS",r.a.createElement("span",{className:"orange-text"},".")),t)},w=(t(33),function(e){var a=e.portfolio,t=a.length?a.map(function(e){return r.a.createElement("a",{href:e.url,key:e.id,className:"margin-left margin-right margin-bottom"},r.a.createElement("span",{style:{display:"block"}},r.a.createElement("div",{className:"portfolio-container box-hover white-background box-shadow"},r.a.createElement("h1",{className:"header black-text align-center small-text margin-left margin-right"},e.title),r.a.createElement("img",{className:"portfolio-image",src:e.imageUrl,alt:e.title}))))}):r.a.createElement("p",null,"Loading Portfolio ...");return r.a.createElement("div",{className:"container-wrapper no-background no-border"},t)}),y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={portfolio:[{id:1,title:"My Personal Website",imageUrl:"https://i.ibb.co/4PFgdrz/personal-home-page-crop.jpg",url:"https://ziadhishamali.github.io"},{id:2,title:"To-do App",imageUrl:"https://i.ibb.co/7K3Fhgz/todoapp-home-page-crop.png",url:"https://ziadhishamali.github.io/todoapp"},{id:3,title:"Book a Book",imageUrl:"https://i.ibb.co/0D1bmkT/home-page-crop.png",url:"https://ziadhishamali.github.io/bookabook"},{id:4,title:"Paint",imageUrl:"https://i.ibb.co/Wx86Vvw/paint-home-page-crop.png",url:"https://github.com/ziadhishamali/paint"}]},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"portfolio-container justify align box-shadow margin-top-2"},r.a.createElement("h1",{className:"header white-text medium-text berlin margin-left"},"PORTFOLIO",r.a.createElement("span",{className:"orange-text"},".")),r.a.createElement(w,{portfolio:this.state.portfolio}))}}]),a}(n.Component),N=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={skills:[{id:1,title:"Programming Languages",all:[{id:1,name:"Java",level:8},{id:2,name:"JavaScript",level:7},{id:3,name:"C,C++",level:7},{id:4,name:"Python",level:6},{id:5,name:"Ruby",level:4}]},{id:2,title:"Web Development",all:[{id:6,name:"JavaScript",level:7},{id:7,name:"React.js",level:7},{id:8,name:"Node.js",level:5},{id:9,name:"Django",level:5},{id:10,name:"Express.js",level:4}]}]},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"section justify align auto-height parallax bg2"},r.a.createElement(y,null),r.a.createElement(k,{skills:this.state.skills}))}}]),a}(n.Component);var j=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App wrapper"},r.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(f,null),r.a.createElement(N,null))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.7226a046.chunk.js.map