(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/DSC_0287.235d713b.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/location.d9d208a8.svg"},29:function(e,t,a){e.exports=a.p+"static/media/at.c4748264.svg"},30:function(e,t,a){e.exports=a.p+"static/media/phone.4e0c281b.svg"},36:function(e,t,a){e.exports=a.p+"static/media/facebook.f4c2b29b.svg"},37:function(e,t,a){e.exports=a.p+"static/media/linkedin.0b000652.svg"},38:function(e,t,a){e.exports=a.p+"static/media/github.fa344108.svg"},39:function(e,t,a){e.exports=a.p+"static/media/instagram.f8af51e6.svg"},40:function(e,t,a){e.exports=a(69)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(26),r=a.n(s),c=(a(45),a(1)),l=a(2),o=a(4),m=a(3),u=a(5),d=a(33),p=a(10),f=(a(46),a(47),a(48),a(27)),g=a.n(f),h=a(28),v=a.n(h),b=a(29),E=a.n(b),y=a(30),w=a.n(y),N=function(){return i.a.createElement("div",{className:"bio-info margin-top"},i.a.createElement("div",{className:"section-row justify align"},i.a.createElement("img",{src:v.a,alt:"location"}),i.a.createElement("span",{className:"fugazOne"},"Alexandria, Egypt.")),i.a.createElement("div",{className:"section-row justify align margin-top--"},i.a.createElement("img",{src:E.a,alt:"at"}),i.a.createElement("span",{className:"fugazOne"},"ziadhesham97@gmail.com")),i.a.createElement("div",{className:"section-row justify align margin-top--"},i.a.createElement("img",{src:w.a,alt:"phone"}),i.a.createElement("span",{className:"fugazOne"},"00201113478944")))},k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={header:"Undergraduate Software Engineer",name:"ZIAD HISHAM ALI",aboutMe:"I'm an undergraduate at Computer and Sytems Engineering Department, Faculty of Engineering, Alexandria University and expected to graduate in 2021. I'm passionate for technology and everything that comes with it. Currently I'm more focused on full stack web development and machine learning. My hobbies are a lot I like football, cycling, running, reading books and of course making new awesome web-applications"},a.hireMe=function(e){e.preventDefault(),console.log("hire me clicked"),document.getElementById("contact-area").classList.toggle("moveContactLeft")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"bio-section box-shadow-2"},i.a.createElement("div",{className:"section-row margin-bottom"},i.a.createElement("img",{className:"myImage",src:g.a,alt:"shit"}),i.a.createElement("div",{className:"section-column align justify margin-left-- margin-right--"},i.a.createElement("span",{className:"header blue-text"},this.state.header),i.a.createElement("span",{className:"name blue-text"},this.state.name,i.a.createElement("span",{className:"orange-text"},".")))),i.a.createElement("div",{className:"trans-background bio"},i.a.createElement("h1",{className:"white-text medium-text fugazOne"},"Bio",i.a.createElement("span",{className:"orange-text"},".")),i.a.createElement("div",{className:"aboutme white-text righteous"},this.state.aboutMe,i.a.createElement("span",{className:"orange-text"},"."))),i.a.createElement(N,null),i.a.createElement("button",{className:"submit-button margin-top box-shadow",onClick:function(t){return e.hireMe(t)}},"HIRE ME"))}}]),t}(n.Component),x=(a(49),a(24),a(31)),j=(a(50),a(15)),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={firstName:"",lastName:"",emailAddress:"",message:""},a.changeText=function(e){a.setState(Object(j.a)({},e.target.id,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("form",{className:"contact-form justify align margin-bottom",onSubmit:function(t){return e.props.submit(t,e.state)}},i.a.createElement("div",null,i.a.createElement("input",{type:"text",id:"firstName",className:"text-input name-input margin-top",placeholder:"first name",onChange:function(t){return e.changeText(t)},value:this.state.firstName}),i.a.createElement("input",{type:"text",id:"lastName",className:"text-input name-input margin-top margin-left",placeholder:"last name",onChange:function(t){return e.changeText(t)},value:this.state.lastName})),i.a.createElement("input",{type:"text",id:"emailAddress",className:"text-input email-input margin-top--",placeholder:"email address",onChange:function(t){return e.changeText(t)},value:this.state.emailAddress}),i.a.createElement("textarea",{id:"message",className:"text-input message-input margin-top--",placeholder:"message",onChange:function(t){return e.changeText(t)},value:this.state.message}),i.a.createElement("input",{type:"submit",className:"submit-button button-orange margin-top",value:"SUBMIT"}))}}]),t}(n.Component),S=a(32),C=a.n(S),I=(a(53),a(57),C.a.initializeApp({apiKey:"AIzaSyBwyAoEVIquWO9KBnRk1HSRTrJL6BbSvfg",authDomain:"ziadhisham-personal-website.firebaseapp.com",databaseURL:"https://ziadhisham-personal-website.firebaseio.com",projectId:"ziadhisham-personal-website",storageBucket:"ziadhisham-personal-website.appspot.com",messagingSenderId:"538224524649",appId:"1:538224524649:web:6fdaedcf815feb78"})),L=I.firestore(),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={},a.submit=function(e,t){for(var a in e.preventDefault(),t)if(""===t[a]||void 0===t[a])return document.getElementById("contact-area").classList.toggle("moveContactLeft"),document.getElementById("fail-area").classList.toggle("moveSuccessDown"),void setTimeout(function(){document.getElementById("fail-area").classList.toggle("moveSuccessDown")},4e3);document.getElementById("contact-area").classList.toggle("moveContactLeft"),document.getElementById("sending-area").classList.toggle("moveSuccessDown"),I.database().ref("messages").push().set(Object(x.a)({},t)).then(function(){document.getElementById("sending-area").classList.toggle("moveSuccessDown"),document.getElementById("successfull-area").classList.toggle("moveSuccessDown"),setTimeout(function(){document.getElementById("successfull-area").classList.toggle("moveSuccessDown")},4e3)}).catch(function(e){document.getElementById("sending-area").classList.toggle("moveSuccessDown"),document.getElementById("fail-area").classList.toggle("moveSuccessDown"),setTimeout(function(){document.getElementById("fail-area").classList.toggle("moveSuccessDown")},4e3)})},a.closeContact=function(e){e.preventDefault(),document.getElementById("contact-area").classList.toggle("moveContactLeft")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"contact-area justify align box-shadow-2",id:"contact-area"},i.a.createElement("button",{className:"close submit-button",onClick:function(t){return e.closeContact(t)}},"X"),i.a.createElement("h1",{className:"header white-text no-justify medium-text fugazOne"},"Contact",i.a.createElement("span",{className:"orange-text"},".")),i.a.createElement(O,{submit:this.submit}))}}]),t}(n.Component),B=(a(20),function(){return i.a.createElement("div",{id:"successfull-area",className:"successfull-area"},i.a.createElement("h2",{className:""},"Thank You !!"),i.a.createElement("h3",{className:""},"An email was sent successfully and We will contact you very soon"))}),D=function(){return i.a.createElement("div",{id:"fail-area",className:"fail-area"},i.a.createElement("h2",{className:""},"Ooops !!"),i.a.createElement("h3",{className:""},"An Error occured while sending the email please try again later"))},z=function(){return i.a.createElement("div",{id:"sending-area",className:"sending-area"},i.a.createElement("h2",{className:""},"Sending an email ..."))},M=(a(61),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).showUniversity=function(){var e=a.state.education;return Object.keys(e).map(function(t,a){var n="";return""===e[t]||"status"===t?"":("finish"===t&&(n=(new Date).getFullYear().toString()<e[t]?"Expected to graduate in ":"Graduated in "),"gpa"===t&&(n="GPA: "),i.a.createElement("span",{key:a},n+e[t]))})},a.showExperiences=function(){return a.state.experiences.map(function(e,t){var a="",n=Object.keys(e).map(function(t,n){return"company"===t?(a=e[t],""):"title"===t?i.a.createElement("span",null,e[t]+" at "+a):"start"===t?(a=e[t],""):"end"===t?i.a.createElement("span",null,a+" - "+e[t]):i.a.createElement("span",null,e[t])});return i.a.createElement("div",{className:"margin-bottom"},n)})},a.state={education:{university:"Computer and Systems Engineering Department, Alexandria University",year:"3rd year",finish:"2021",status:"undergraduate",gpa:"3.44"},experiences:[{company:"Curawella",title:"Web development intern",start:"Oct, 2019",end:"present",description:"Responsible for designing, building and maintaining Curawella websites and web applications using React.js and Firebase with RESTful APIs, while insuring the reusability of the components and their performance."},{company:"ACM Alexandria Chapter",title:"Head of Planning Committee",start:"Oct, 2018",end:"Oct, 2019",description:""}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"information-section"},i.a.createElement("div",{className:"education box-shadow-2"},i.a.createElement("span",null,"Education"),this.showUniversity()),i.a.createElement("div",{className:"experiences box-shadow-2"},i.a.createElement("span",null,"Experiences"),this.showExperiences()))}}]),t}(n.Component)),T=a(13),U=(a(62),function(e){for(var t=e.level,a=[],n=1;n<=t;n++)a.push(i.a.createElement("div",{key:n,className:"violet-circle"}));for(var s=t+1;s<=10;s++)a.push(i.a.createElement("div",{key:s,className:"white-circle"}));return i.a.createElement("div",{className:"container-wrapper"},a)}),R=function(e){var t=e.skill,a=e.show,n=(e.hideSkill,t.length?t.map(function(e,t){return i.a.createElement("div",{key:t+1,className:"container-wrapper each-skill no-margin no-padding margin-left-2"},i.a.createElement("span",{className:"skill-name"},e.name),i.a.createElement(U,{level:e.level}))}):i.a.createElement("span",null));return t.length&&a?i.a.createElement("div",{className:"container-wrapper no-border"},n):""},P=function(){return i.a.createElement("div",{className:"loader-container"},i.a.createElement("div",{className:"loader"}))},H=(a(63),function(e){var t=e.skills,a=e.hideSkill,n=t.length?t.map(function(e,t){return i.a.createElement("div",{key:e.id,className:"skills-container-2 no-background no-border"},i.a.createElement("h1",{className:"black-text small-text bold white-box cursor margin-top-- no-padding",onClick:function(){a(t)}},e.title),i.a.createElement(R,{skill:e.all,show:e.show}))}):i.a.createElement(P,null);return i.a.createElement("div",{className:"skills-container"},i.a.createElement("h1",{className:"header"},"Skills"),i.a.createElement("div",{className:"scrollable"},n))}),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).hideSkill=function(e){for(var t=Object(T.a)(a.state.skills),n=[],i=0;i<t.length;i++)i===e&&(t[i].show?t[i].show=!1:t[i].show=!0),n.push(t[i]);a.setState({skills:n})},a.state={skills:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;L.collection("Skills").orderBy("priority","asc").onSnapshot(function(t){var a=[];t.forEach(function(e){var t={};t.id=e.id,t.title=e.data().title,t.all=e.data().list,t.show=e.data().show,a.push(t)}),e.setState({skills:a})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"skill-section box-shadow-2"},i.a.createElement(H,{skills:this.state.skills,hideSkill:this.hideSkill}))}}]),t}(n.Component),F=function(e){var t=e.portfolio,a=t.length?t.map(function(e,t){var a="row";return t%2===0&&(a="row-reverse"),0===t&&(a+=" first"),i.a.createElement("a",{href:e.url,key:e.id,className:""},i.a.createElement("span",{style:{display:"block"}},i.a.createElement("div",{className:"portfolio-container-2 "+a},i.a.createElement("div",{className:"portfolio-info"},i.a.createElement("span",{className:"portfolio-title"},e.title),i.a.createElement("span",{className:"portfolio-description"},e.description)),i.a.createElement("img",{className:"portfolio-image box-hover box-shadow-2",src:e.imageUrl,alt:e.title}))))}):i.a.createElement(P,null);return i.a.createElement("div",{className:"scrollable portfolio-wrapper"},a)},J=(a(64),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={portfolio:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;L.collection("Projects").orderBy("priority","asc").onSnapshot(function(t){var a=[];t.forEach(function(e){var t={};t.id=e.id,t.title=e.data().title,t.imageUrl=e.data().imageUrl,t.url=e.data().url,t.description=e.data().description,a.push(t)}),e.setState({portfolio:a})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"portfolio-section"},i.a.createElement("div",{className:"wave-background"}),i.a.createElement(F,{portfolio:this.state.portfolio}))}}]),t}(n.Component)),G=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return i.a.createElement("div",{className:"App wrapper"},i.a.createElement("div",{className:"home-wrapper"},i.a.createElement(k,null)),i.a.createElement("div",{className:"information-wrapper"},i.a.createElement(M,null),i.a.createElement(W,null),i.a.createElement(J,null)),i.a.createElement(z,null),i.a.createElement(B,null),i.a.createElement(D,null),i.a.createElement(A,null))}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={visibility:[],contact:!1,btnName:"up"},a.showLabel=function(e){var t=Object(T.a)(a.state.visibility);t[e]=!0,a.setState({visibility:t})},a.removeLabel=function(e){var t=Object(T.a)(a.state.visibility);t[e]=!1,a.setState({visibility:t})},a.getLabel=function(e){if(a.state.visibility[e])return console.log("visible"),i.a.createElement("span",{className:"small-text black-text light-font link-name"},a.props.links[e].name)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.props.links;t++)e.push(!1)}},{key:"render",value:function(){var e=this,t=this.props.links.map(function(t,a){return i.a.createElement("a",{key:a,className:"margin-left-- margin-right-- flex-column justify align",href:t.url},i.a.createElement("img",{className:"social-link",src:t.imageURL,alt:t.name,onPointerOver:function(){return e.showLabel(a)},onPointerLeave:function(){return e.removeLabel(a)}}))});return i.a.createElement("div",{className:"social flex-column justify align",id:"social"},i.a.createElement("div",{className:"social-background box-shadow-3 flex-row"},t))}}]),t}(n.Component),Y=a(36),q=a.n(Y),V=a(37),X=a.n(V),Z=a(38),$=a.n(Z),_=a(39),Q=a.n(_);n.Component;r.a.render(i.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.af16398e.chunk.js.map