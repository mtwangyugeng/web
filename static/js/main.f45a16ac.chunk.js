(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],Array(18).concat([function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(7),o=n.n(i),c=n(13),a=n.n(c),r=(n(18),n.p,n(19),n(4));var s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),c(e),a(e)}))},A=n(0),l=n(3),d=n(1),j=n(2),h=(n(21),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(A.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={currstring:0,content:"",da:!1},e.tick=null,e.handletick=function(){e.state.da?""===e.state.content?e.setState({da:!1,currstring:(e.state.currstring+1)%e.props.strings.length}):e.setState({content:e.state.content.slice(0,-1)}):e.state.content===e.props.strings[e.state.currstring]?(clearInterval(e.tick),setTimeout((function(){e.tick=setInterval(e.handletick,125)}),2e3),e.setState({da:!0})):e.setState({content:e.state.content+e.props.strings[e.state.currstring][e.state.content.length]})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:this.state.content+"_"})}},{key:"componentDidMount",value:function(){this.tick=setInterval(this.handletick,125)}}]),n}(o.a.Component)),u=(n(22),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(A.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).golink=function(e){return function(){return window.open(e)}},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"Connection-linkedin Connection-icons",onClick:this.golink(this.props.linkedin)}),Object(r.jsx)("div",{className:"Connection-github Connection-icons",onClick:this.golink(this.props.github)}),Object(r.jsx)("div",{className:"Connection-email Connection-icons",onClick:this.golink("mailto:"+this.props.email)})]})}}]),n}(o.a.Component)),g=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(A.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).moveDown=function(){window.scrollTo({top:window.innerHeight,left:0,behavior:"smooth"})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"LandingScene-main",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"LandingScene-intro",children:Object(r.jsx)(h,{strings:["Hi, I am Yu Geng.","You can call me Simon.","Let's work together."]})}),Object(r.jsx)("div",{className:"LandingScene-connect",children:Object(r.jsx)("div",{className:"LandingScene-connect-inner",children:Object(r.jsx)(u,{linkedin:"https://www.linkedin.com/in/yu-geng-simon-wang/",github:"https://github.com/mtwangyugeng",email:"mtwangyugeng@gmail.com"})})})]}),Object(r.jsx)("div",{className:"LandingScene-downbutton-container",children:Object(r.jsx)("div",{className:"LandingScene-downbutton",onClick:this.moveDown})})]})}}]),n}(o.a.Component),w=n(6),b=(n(23),n(10)),O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)("canvas",{id:"Flame-c",ref:function(t){return e.mount=t}})}},{key:"componentDidMount",value:function(){var e=this.mount,t=new w.z({antialias:!0,canvas:e});t.outputEncoding=w.A;var n=new w.u;n.background=(new w.f).setHSL(.51,.4,.01),n.fog=new w.i(n.background,3500,15e3);var i=new w.q(40,window.innerWidth/window.innerHeight,1,15e3);i.position.set(0,0,250),i.up.set(0,0,1),i.lookAt(0,0,0);var o=new w.p;n.add(o);var c=new w.v,a=c.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/lensflare/lensflare0.png"),r=c.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/lensflare/lensflare3.png");!function(e,t,n){var i=new w.r(16777215,1.5,2e3);i.color.setHSL(e,t,n),o.add(i);var c=new b.a;console.log("ccc",c),c.addElement(new b.b(a,700,0,i.color)),c.addElement(new b.b(r,60,.6)),c.addElement(new b.b(r,70,.7)),c.addElement(new b.b(r,120,.9)),c.addElement(new b.b(r,70,1)),i.add(c)}(.55,.9,.5);var s=new w.p;s.position.z=20,n.add(s);var A=new w.p;s.add(A);var l=new w.d(10,5),d=new w.n({emissive:16776960,side:w.h}),j=new w.p;A.add(j);var h=new w.l(l,d);h.position.x=10,j.rotation.set(Math.PI/2,0,0),j.add(h);var u=new w.p;A.add(u);var g=new w.l(l,d);g.position.x=10,u.rotation.set(Math.PI/2,0,0),u.add(g);var O=new w.d(5,5),m=new w.l(O,d);m.position.x=6,m.position.y=-10;var f=new w.l(O,d);f.position.x=6,f.position.y=-10,u.add(m),j.add(f);var v=new w.x,p=0,C=!0;var B={x:0,y:0};window.addEventListener("mousemove",(function(e){e.preventDefault(),B.x=e.clientX/window.innerWidth*2-1,B.y=-e.clientY/window.innerHeight*2+1;var t=new w.x(B.x,B.y,.5);t.unproject(i);var n=t.sub(i.position).normalize(),c=-i.position.z/n.z,a=i.position.clone().add(n.multiplyScalar(c));o.position.copy(a)})),requestAnimationFrame((function e(c){if(function(e){var t=e.domElement,n=t.clientWidth,i=t.clientHeight,o=t.width!==n||t.height!==i;return o&&e.setSize(n,i,!1),o}(t)){var a=t.domElement;i.aspect=a.clientWidth/a.clientHeight,i.updateProjectionMatrix()}o.getWorldPosition(v),s.lookAt(v),console.log(A.position.x,v.x),s.position.x+=(o.position.x+13-s.position.x)/60,s.position.y+=(o.position.y+13-s.position.y)/60,C?p+=.05:p-=.05,j.rotation.set(Math.PI/2,-p,0),u.rotation.set(Math.PI/2,p,0),p>=1&&(C=!1),p<=0&&(C=!0),t.render(n,i),requestAnimationFrame(e)}))}}]),n}(o.a.Component),m=(n(25),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"ProjectScene-main"})}}]),n}(o.a.Component)),f=(n(26),n(27),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"Namecard-main",children:[Object(r.jsx)("img",{className:"Namecard-profilepic",alt:"Profile pic",src:this.props.profilepic}),Object(r.jsxs)("div",{className:"Namecard-rightcol",children:[Object(r.jsx)("h2",{children:this.props.name}),Object(r.jsx)("p",{children:this.props.location}),Object(r.jsx)("div",{className:"Namecard-bio",children:this.props.bio})]})]})}}]),n}(o.a.Component)),v=n.p+"static/media/self.3bbcf681.png",p=(n(28),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(A.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).pos=o.a.createRef(),e.state={show:!1},e.handlevisible=function(){!e.show&&e.pos.current.offsetTop+e.pos.current.offsetHeight<window.scrollY+window.innerHeight&&e.pos.current.offsetTop+e.pos.current.offsetHeight>window.scrollY?e.setState({show:!0}):e.setState({show:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{ref:this.pos,className:"SceneTitle-title",children:this.props.title}),Object(r.jsx)("div",{className:"SceneTitle-underline "+(this.state.show?"SceneTitle-underline-show":"")})]})}},{key:"componentDidMount",value:function(){this.handlevisible(),window.addEventListener("scroll",this.handlevisible)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handlevisible)}}]),n}(o.a.Component)),C=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"AboutScene-main",children:[Object(r.jsx)(p,{title:"About"}),Object(r.jsx)("div",{style:{width:"100vmin",height:"33vmin",fontSize:"2vmin",margin:"auto"},children:Object(r.jsx)(f,{profilepic:v,name:"Yu Geng Wang (Simon)",location:"Toronto, ON, CA",bio:"I'm a University of Toronto Scarborough 2019\r graduate majoring mathmatical analysis and\r software Engineering. My other passions\r include video games, Front-end design,\r nature sight-seeing, and social science.\r "})})]})}}]),n}(o.a.Component),B=(n(29),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(A.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).pos=o.a.createRef(),e.state={show:""},e.handlevisible=function(){!e.show&&e.pos.current.offsetTop+e.pos.current.offsetHeight/2<window.scrollY+window.innerHeight&&e.pos.current.offsetTop+e.pos.current.offsetHeight>window.scrollY?e.setState({show:"ContactInfo-show"}):e.setState({show:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{ref:this.pos,className:"ContactInfo-main "+this.state.show,style:{animationDelay:this.props.delay},children:[Object(r.jsx)("div",{className:"ContactInfo-icon-container",children:Object(r.jsx)("img",{className:"ContactInfo-icon",src:this.props.icon,height:"100%"})}),Object(r.jsx)("div",{className:"ContactInfo-title",children:this.props.title}),Object(r.jsx)("div",{className:"ContactInfo-description",children:this.props.description})]})}},{key:"componentDidMount",value:function(){this.handlevisible(),window.addEventListener("scroll",this.handlevisible)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handlevisible)}}]),n}(o.a.Component)),x=(n(30),n.p+"static/media/linkedin.7d912377.png"),I=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"ContactScene-main",children:[Object(r.jsx)("div",{style:{color:"white"},children:Object(r.jsx)(p,{title:"Contact Me"})}),Object(r.jsxs)("div",{style:{width:"100vmin",margin:"auto",display:"flex",justifyContent:"center",marginTop:"2vmin"},children:[Object(r.jsx)(B,{delay:"0s",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAADwCAMAAADvotLkAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAQIAQv++fz2Aw3yBwUK+PD/W3OwAABYNJREFUeAHt3deWqzAPhuHPljtN93+zf8kasktWHLPHgBj0nk956NVA0zRN0zRN0zRN0zRN07Q+kTFWSKMxOKIpFJZVXDJ2jcbCEosJ+zUVllo02CeaWXIL9ihHlp2jHdCepRe7s4cVfSc2Rb5CM7q28DUa0THDF8kP6FfkqxTQrYmv04BeOb5OCzo18IUq6NTIVyqjTzNfKYs+Fb5SM/rElyqiS5mvFbpkVK1qVata1apWtapVrWpVq1rVqlY1VK1qVata1apWtapVrWpVR2et9VytWLu4+EPUJaQMAMhz0+32PIZycXUcBzyagucP+TABqzxeVl1Wcl48N+VDxlfDUq6odgaPKMUXnPstz38UE+Gr5K6mDsM6y35TOWetMXjJGLv80vsw4CvjrqR2+cscVomz04B6w2RXZDB1t0R1MX+a5zGjNbPEP6YbkPwl1JYAABTWDfPGhnH+fR0BLfLVMePR6OvkajRGZm9p/Q+KcPVCz5dEXCL8ezn456oCmkWrHR7ZdUP8nSiVdSICRbLaAMAQiyX0KLmS8SgJVjsAMDGhW8YlPCpy1QZATuhaMgCAJFYdsWNFqjphx6xQdcGekZeptti1IFNN2LUsUh2wc06i2mDnkkB1we55eeoRuxfkqQfsXhannnFARZo64YBGaWrCAQ3C1DMOKcpSJxzSKEtNOKRBlHrGQUVJ6oSDWiSpBxxUFqSOOCwvR21xWEGO2uCwkhi1x4eGZK01hGrGWpsGfIjEqGdUM8/b0u9NZH3jYHxRinpEJQr8zL8jGd88OtsiRZ3bxwhLDStrrLInKeqmbW6FnbfsCEmI2m2ZM57wUtm0Jywy1HbTvxgadkae8L4gQz1tWgl9y8wb8b5RhprwttAwkfLGlcaIUPuNO1fbcrSFSiLUDu9rOaaxW0/iogS13ah2LWqD980S1GkPdcb7rAS12Xg2vLQgUMlIUG8dBi81/P6CSlmAuqDS2LKh8ltHmhSgdhsPml3LTj2jVjlfHTaeF5qGi9wO1dz5aotaVBomkt04WvByvjptGm09UsOB64R69ny1wQa2I+AT239CI8lXg54kbxs+L+EGfMqcr8bnhtE57+ZEqJSC89HZDFxfvUt0SzVOV7tbq1VtB/RrMnipSFTnMqJTg5vxmpOoRuIyoUNkOdJl1EjMznzf7Fe0ePXKbnZXzCtakLp+m2LyzFwSfeOFxbeH7YM/W81z9XtePhhsjlKsnsRGPl3Ny4cTwrJkbGkdeKKY+g2Vc9Wc8KbseIUbNEUrmb0l2Xf3ODWcQPp5/CQ31vFaGPCmkYWoK2xMjn/lltEQXiMzhsjP/DJc4ckrDnjt7cgn0c32fyWT7P8KLvIfzal6hUKQmh3hfVQ6fTsvRxalrl7tCp2+wzN6eW+xzUOfbz5NlT2CJPWapR4jj/gMvDYEse/aezt0+BJnpIpZlnptnr7/JU6HP6Lk5I+N40MiPAvf/HjekObLjHlVgjW5enOm4bAnGzuXC45lVxz/Y67oGJWqVrWqVa1qVata1apWdbdUrWpVq1rVqla1qlWtalWrWtWqzrdUg0/OxzPUhU/OxBPUM5/cSPF4deKTc0A4XE18drSFjZ+yiE8AwtFqwycXAGA8WA3H51b2Hyte4oFK3sBGtyyf24hHkz9UjXj6vutR9oeq6WQ2tbPRsVz4zKb2/wP4MXM7tP8f6BotfF4FzWx0zhQ+rdzMRvdS5JMam995wQ5l6/iMYvObJNipwZwQWtn4wdlbqpFuqUa6pRrJ31GN7O+oRo53VIPiHdWgcEc1EG6pxnhLNdIt1cj+jmrkckc1KN5RDZrvqAbCLdUYb6lGuqUa2d9RjVzuqAbFO6pBM+OOLdA0TdM0TdM0TdM0TdO0b/ZfegfWFMciUSwAAAAASUVORK5CYII=",title:"Add me on Discord",description:"My user name is Simon (Lockhan)#3157"}),Object(r.jsx)(B,{delay:"0.1s",icon:"data:image/png;base64,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",title:"Send an email to me",description:Object(r.jsx)("a",{href:"mailto:mtwangyugeng@gmail.com",style:{color:"lightblue"},children:"mtwangyugeng@gmail.com"})}),Object(r.jsx)(B,{delay:"0.2s",icon:x,title:"Connect with me on LinkedIn",description:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/yu-geng-simon-wang/",style:{color:"lightblue"},target:"_blank",children:"Go to my LinkedIn profile"})})]})]})}}]),n}(o.a.Component),G=(n(31),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"FooterScene-main",children:Object(r.jsx)("div",{style:{color:"grey",margin:"auto",fontSize:"1.6vmin"},children:"Code: Yu Geng Wang \u2022 Design: Yu Geng Wang \u2022 \xa9 Copyright 2021"})})}}]),n}(o.a.Component));a.a.render(Object(r.jsxs)(o.a.StrictMode,{children:[Object(r.jsx)(O,{}),Object(r.jsx)(g,{}),Object(r.jsx)(C,{}),Object(r.jsx)(m,{}),Object(r.jsx)(I,{}),Object(r.jsx)(G,{})]}),document.getElementById("root")),s()}]),[[32,1,2]]]);
//# sourceMappingURL=main.f45a16ac.chunk.js.map