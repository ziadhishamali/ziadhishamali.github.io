(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/DSC_0287.235d713b.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/facebook.f4c2b29b.svg"},33:function(e,t,a){e.exports=a.p+"static/media/linkedin.0b000652.svg"},34:function(e,t,a){e.exports=a.p+"static/media/github.fa344108.svg"},35:function(e,t,a){e.exports=a.p+"static/media/instagram.f8af51e6.svg"},36:function(e,t,a){e.exports=a.p+"static/media/ziad.244d1f4e.svg"},37:function(e,t,a){e.exports=a(64)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),s=a.n(r),l=(a(42),a(1)),c=a(2),o=a(4),m=a(3),u=a(5),d=a(29),h=a(10),g=(a(43),a(44),a(45),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={header:"Undergraduate Software Engineer",name:"ZIAD HISHAM ALI"},a.hireMe=function(e){e.preventDefault(),console.log("hire me clicked"),document.getElementById("contact-area").classList.toggle("moveContactLeft")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"home section parallax bg1"},i.a.createElement("span",{className:"header forte"},this.state.header),i.a.createElement("span",{className:"name"},this.state.name,i.a.createElement("span",{className:"orange-text"},".")),i.a.createElement("button",{className:"submit-button margin-top-- box-shadow",onClick:function(t){return e.hireMe(t)}},"HIRE ME"))}}]),t}(n.Component)),p=(a(46),a(26)),f=a.n(p),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={aboutMe:"I'm an undergraduate at Computer and Sytems Engineering Department, Faculty of Engineering, Alexandria University and expected to graduate in 2021. I'm passionate for technology and everything that comes with it. Currently I'm more focused on full stack web development and machine learning. My hobbies are a lot I like football, cycling, running, reading books and of course making new awesome web-applications"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"section-static static"},i.a.createElement("h1",{className:"header margin-top blue-text medium-text margin-bottom"},"ABOUT ME",i.a.createElement("span",{className:"orange-text"},".")),i.a.createElement("div",{className:"about-section section-row justify align margin-bottom"},i.a.createElement("img",{className:"myImage",src:f.a,alt:"shit"}),i.a.createElement("div",{className:"aboutme"},this.state.aboutMe)))}}]),t}(n.Component),v=a(13),E=function(e){for(var t=e.level,a=[],n=1;n<=t;n++)a.push(i.a.createElement("div",{key:n,className:"blue-circle"}));for(var r=t+1;r<=10;r++)a.push(i.a.createElement("div",{key:r,className:"white-circle"}));return i.a.createElement("div",{className:"container-wrapper"},a)},y=function(e){var t=e.skill,a=e.show,n=(e.hideSkill,t.length?t.map(function(e,t){return i.a.createElement("div",{key:t+1,className:"container-wrapper align no-margin no-padding margin-left-2"},i.a.createElement("span",{className:"header white-text small-text berlin bold"},e.name),i.a.createElement(E,{level:e.level}))}):i.a.createElement("span",null));return t.length&&a?i.a.createElement("div",{className:"container-wrapper justify align no-border margin-bottom-2"},n):i.a.createElement("div",{className:"container-wrapper justiy align no-border"})},w=function(){return i.a.createElement("div",{className:"loader-container"},i.a.createElement("div",{className:"loader"}))},k=(a(47),function(e){var t=e.skills,a=e.hideSkill,n=t.length?t.map(function(e,t){return i.a.createElement("div",{key:e.id,className:"skills-container-2 justify align no-background no-border"},i.a.createElement("h1",{className:"header black-text small-text bold white-box cursor margin-top--",onClick:function(){a(t)}},e.title),i.a.createElement(y,{skill:e.all,show:e.show}))}):i.a.createElement(w,null);return i.a.createElement("div",{className:"skills-container box-shadow"},i.a.createElement("h1",{className:"header white-text medium-text berlin"},"SKILLS",i.a.createElement("span",{className:"orange-text"},".")),i.a.createElement("div",{className:"scrollable"},n))}),N=(a(48),function(e){var t=e.portfolio,a=t.length?t.map(function(e){return i.a.createElement("a",{href:e.url,key:e.id,className:"margin-left margin-right margin-bottom margin-top--"},i.a.createElement("span",{style:{display:"block"}},i.a.createElement("div",{className:"portfolio-container-2 box-hover white-background box-shadow"},i.a.createElement("h1",{className:"header black-text align-center small-text margin-left margin-right"},e.title),i.a.createElement("img",{className:"portfolio-image",src:e.imageUrl,alt:e.title}))))}):i.a.createElement(w,null);return i.a.createElement("div",{className:"container-wrapper no-padding justify align margin-bottom-- no-background no-border"},a)}),j=a(27),x=a.n(j),O=(a(51),a(55),x.a.initializeApp({apiKey:"AIzaSyBwyAoEVIquWO9KBnRk1HSRTrJL6BbSvfg",authDomain:"ziadhisham-personal-website.firebaseapp.com",databaseURL:"https://ziadhisham-personal-website.firebaseio.com",projectId:"ziadhisham-personal-website",storageBucket:"ziadhisham-personal-website.appspot.com",messagingSenderId:"538224524649",appId:"1:538224524649:web:6fdaedcf815feb78"})),S=O.firestore(),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={portfolio:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.collection("Projects").orderBy("priority","asc").onSnapshot(function(t){var a=[];t.forEach(function(e){var t={};t.id=e.id,t.title=e.data().title,t.imageUrl=e.data().imageUrl,t.url=e.data().url,a.push(t)}),e.setState({portfolio:a})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"portfolio-container box-shadow"},i.a.createElement("h1",{className:"header white-text medium-text berlin margin-left"},"PORTFOLIO",i.a.createElement("span",{className:"orange-text"},".")),i.a.createElement("div",{className:"scrollable"},i.a.createElement(N,{portfolio:this.state.portfolio})))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).hideSkill=function(e){for(var t=Object(v.a)(a.state.skills),n=[],i=0;i<t.length;i++)i===e&&(t[i].show?t[i].show=!1:t[i].show=!0),n.push(t[i]);a.setState({skills:n})},a.state={skills:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.collection("Skills").orderBy("priority","asc").onSnapshot(function(t){var a=[];t.forEach(function(e){var t={};t.id=e.id,t.title=e.data().title,t.all=e.data().list,t.show=e.data().show,a.push(t)}),e.setState({skills:a})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"section justify align auto-height parallax bg2"},i.a.createElement("div",{className:"flex-row justify align margin-top-2 margin-bottom"},i.a.createElement(k,{skills:this.state.skills,hideSkill:this.hideSkill}),i.a.createElement(L,null)),i.a.createElement("a",{className:"copyrighted-badge margin-bottom",title:"Copyrighted.com Registered & Protected",target:"_blank",rel:"noopener noreferrer",href:"https://www.copyrighted.com/website/uVTS3cfpHqXhVSl0"},i.a.createElement("img",{alt:"Copyrighted.com Registered & Protected",border:"0",width:"125",height:"25",srcSet:"https://static.copyrighted.com/badges/125x25/03_1_2x.png 2x",src:"https://static.copyrighted.com/badges/125x25/03_1.png"})),i.a.createElement("script",{src:"https://static.copyrighted.com/badges/helper.js"}))}}]),t}(n.Component),C=a(28),B=(a(59),a(15)),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={firstName:"",lastName:"",emailAddress:"",message:""},a.changeText=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{className:"contact-form justify align margin-bottom",onSubmit:function(t){return e.props.submit(t,e.state)}},i.a.createElement("div",null,i.a.createElement("input",{type:"text",id:"firstName",className:"text-input name-input margin-top",placeholder:"first name",onChange:function(t){return e.changeText(t)},value:this.state.firstName}),i.a.createElement("input",{type:"text",id:"lastName",className:"text-input name-input margin-top margin-left",placeholder:"last name",onChange:function(t){return e.changeText(t)},value:this.state.lastName})),i.a.createElement("input",{type:"text",id:"emailAddress",className:"text-input email-input margin-top--",placeholder:"email address",onChange:function(t){return e.changeText(t)},value:this.state.emailAddress}),i.a.createElement("textarea",{id:"message",className:"text-input message-input margin-top--",placeholder:"message",onChange:function(t){return e.changeText(t)},value:this.state.message}),i.a.createElement("input",{type:"submit",className:"submit-button button-orange margin-top",value:"SUBMIT"}))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={},a.submit=function(e,t){e.preventDefault(),document.getElementById("contact-area").classList.toggle("moveContactLeft"),document.getElementById("sending-area").classList.toggle("moveSuccessDown"),O.database().ref("messages").push().set(Object(C.a)({},t)).then(function(){document.getElementById("sending-area").classList.toggle("moveSuccessDown"),document.getElementById("successfull-area").classList.toggle("moveSuccessDown"),setTimeout(function(){document.getElementById("successfull-area").classList.toggle("moveSuccessDown")},4e3)}).catch(function(e){document.getElementById("sending-area").classList.toggle("moveSuccessDown"),document.getElementById("fail-area").classList.toggle("moveSuccessDown"),setTimeout(function(){document.getElementById("fail-area").classList.toggle("moveSuccessDown")},4e3)})},a.closeContact=function(e){e.preventDefault(),document.getElementById("contact-area").classList.toggle("moveContactLeft")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"contact-area justify align box-shadow-2",id:"contact-area"},i.a.createElement("button",{className:"close submit-button",onClick:function(t){return e.closeContact(t)}},"X"),i.a.createElement("h1",{className:"header white-text no-justify medium-text berlin"},"Contact",i.a.createElement("span",{className:"orange-text"},".")),i.a.createElement(A,{submit:this.submit}))}}]),t}(n.Component),U=(a(20),function(){return i.a.createElement("div",{id:"successfull-area",className:"successfull-area"},i.a.createElement("h2",{className:""},"Thank You !!"),i.a.createElement("h3",{className:""},"An email was sent successfully and We will contact you very soon"))}),z=function(){return i.a.createElement("div",{id:"fail-area",className:"fail-area"},i.a.createElement("h2",{className:""},"Ooops !!"),i.a.createElement("h3",{className:""},"An Error occured while sending the email please try again later"))},R=function(){return i.a.createElement("div",{id:"sending-area",className:"sending-area"},i.a.createElement("h2",{className:""},"Sending an email ..."))},T=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return i.a.createElement("div",{className:"App wrapper"},i.a.createElement(g,null),i.a.createElement(b,null),i.a.createElement(I,null),i.a.createElement(R,null),i.a.createElement(U,null),i.a.createElement(z,null),i.a.createElement(D,null))}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={visibility:[],contact:!1,btnName:"up"},a.showLabel=function(e){var t=Object(v.a)(a.state.visibility);t[e]=!0,a.setState({visibility:t})},a.removeLabel=function(e){var t=Object(v.a)(a.state.visibility);t[e]=!1,a.setState({visibility:t})},a.getLabel=function(e){if(a.state.visibility[e])return console.log("visible"),i.a.createElement("span",{className:"small-text black-text light-font link-name"},a.props.links[e].name)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.props.links;t++)e.push(!1)}},{key:"render",value:function(){var e=this,t=this.props.links.map(function(t,a){return i.a.createElement("a",{key:a,className:"margin-left-- margin-right-- flex-column justify align",href:t.url},i.a.createElement("img",{className:"social-link",src:t.imageURL,alt:t.name,onPointerOver:function(){return e.showLabel(a)},onPointerLeave:function(){return e.removeLabel(a)}}))});return i.a.createElement("div",{className:"social flex-column justify align",id:"social"},i.a.createElement("div",{className:"social-background box-shadow-3 flex-row"},t))}}]),t}(n.Component),P=a(32),H=a.n(P),_=a(33),W=a.n(_),J=a(34),K=a.n(J),V=a(35),q=a.n(V),F=a(36),X=a.n(F),Y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={links:[{name:"ziad",url:"https://ziadhishamali.github.io",imageURL:X.a},{name:"facebook",url:"https://facebook.com/ziad.hisham.ali",imageURL:H.a},{name:"linkedIn",url:"https://linkedin.com/in/ziadhishamali",imageURL:W.a},{name:"github",url:"https://github.com/ziadhishamali",imageURL:K.a},{name:"instagram",url:"https://instagram.com/ziad.hisham.ali",imageURL:q.a}]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(M,{links:this.state.links}))}}]),t}(n.Component);s.a.render(i.a.createElement(T,null),document.getElementById("root")),s.a.render(i.a.createElement(Y,null),document.getElementById("social-links-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.5f2866a0.chunk.js.map