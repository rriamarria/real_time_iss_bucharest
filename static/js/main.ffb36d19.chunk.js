(this.webpackJsonpreal_time_iss_bucharest=this.webpackJsonpreal_time_iss_bucharest||[]).push([[0],{116:function(e,t,a){e.exports=a(249)},121:function(e,t,a){},131:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},228:function(e,t,a){e.exports=a.p+"static/media/picture 1.864a5684.jpg"},229:function(e,t,a){e.exports=a.p+"static/media/picture 2.d6721184.jpg"},230:function(e,t,a){e.exports=a.p+"static/media/picture 3.d4babe2f.jpg"},231:function(e,t,a){e.exports=a.p+"static/media/picture 4.ca3a07c7.jpg"},232:function(e,t,a){e.exports=a.p+"static/media/picture 5.76656d2f.jpg"},233:function(e,t,a){e.exports=a.p+"static/media/picture 6.7a348b20.jpg"},234:function(e,t,a){e.exports=a.p+"static/media/picture 7.6e2b63ea.jpg"},235:function(e,t,a){e.exports=a.p+"static/media/picture_8.f9dc1bcf.jpg"},236:function(e,t,a){e.exports=a.p+"static/media/0701890_orig.84393bfc.jpg"},249:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),i=(a(121),a(9)),o=a(10),s=a(12),m=a(11),u=a(13),d=a(109),p=a(257),E=a(256),h=a(23),v=(a(131),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"small-logo"},l.a.createElement("div",{class:"element2 nn-1"}),l.a.createElement("div",{class:"element2 nn-2"}),l.a.createElement("div",{class:"element2 nn-3"}),l.a.createElement("div",{class:"element2 nn-4"}),l.a.createElement("div",{class:"element2 nn-5"}),l.a.createElement("div",{class:"element2 nn-6"}),l.a.createElement("div",{class:"element2 nn-7"}),l.a.createElement("div",{class:"element2 nn-8"}),l.a.createElement("div",{class:"element2 nn-9"}),l.a.createElement("div",{class:"element2 nn-10"}),l.a.createElement("div",{class:"element2 nn-11"}),l.a.createElement("div",{class:"element2 nn-12"}),l.a.createElement("div",{class:"element2 nn-13"}),l.a.createElement("div",{class:"element2 nn-14"}),l.a.createElement("div",{class:"element2 nn-15"}),l.a.createElement("div",{class:"element2 nn-16"}),l.a.createElement("div",{class:"element2 nn-17"}),l.a.createElement("div",{class:"element2 nn-18"}))}}]),t}(n.Component)),f=function(e){return l.a.createElement("div",null,l.a.createElement(p.a,{bg:"dark",variant:"dark",className:"headerContainer"},l.a.createElement("span",null,l.a.createElement(v,null)),l.a.createElement(E.a,Object(d.a)({className:"mr-auto"},"className","navbarHeader"),l.a.createElement(E.a.Link,{href:"#"},l.a.createElement(h.Link,{activeClass:"inactive",to:"welcome",spy:!0,smooth:!0,offset:0,duration:500},"Home")),l.a.createElement(E.a.Link,{href:"#"},l.a.createElement(h.Link,{activeClass:"inactive",to:"mapSection",spy:!0,smooth:!0,offset:0,duration:500},"Map")),l.a.createElement(E.a.Link,{href:"#"},l.a.createElement(h.Link,{activeClass:"inactive",to:"newsSection",spy:!0,smooth:!0,offset:0,duration:500},"About ISS")),l.a.createElement(E.a.Link,{href:"#"},l.a.createElement(h.Link,{activeClass:"inactive",to:"Carousel",spy:!0,smooth:!0,offset:-200,duration:500},"Carousel")),l.a.createElement(E.a.Link,{href:"#"},l.a.createElement(h.Link,{activeClass:"inactive",to:"newsletter",spy:!0,smooth:!0,offset:0,duration:500},"Contact")))))},b=a(46),g=a.n(b),k=a(52),y=(a(62),a(38),{width:"80%",height:"80%",margin:"0 auto"}),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).getCoordinates=function(){a.timer=setInterval((function(){console.log("new coordinates at "+(new Date).toLocaleTimeString()),g.a.get("http://api.open-notify.org/iss-now.json").then((function(e){a.setState({longitude:e.data.iss_position.longitude,latitude:e.data.iss_position.latitude})}))}),2e3)},a.state={longitude:"",latitude:"",welcomeBtnClicked:a.props.welcomeBtn},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.welcomeBtn&&!this.state.welcomeBtnClicked&&(this.getCoordinates(),this.setState({welcomeBtnClicked:!0})),l.a.createElement("div",{className:"map_container map p-3 mb-2 bg-dark text-white ",id:this.props.id},l.a.createElement("div",{className:"coordinates"},l.a.createElement("h1",{className:"display-4"},"ISS real-time position"),l.a.createElement("div",{className:"btn-container"},l.a.createElement("div",{className:"coordinates-info"},l.a.createElement("p",null,"long: ",this.state.longitude),l.a.createElement("p",null,"lat: ",this.state.latitude)))),l.a.createElement("div",{className:"justTheMap p-3 mb-2 bg-dark text-white",style:{height:"100vh",width:"800px"}},l.a.createElement(k.Map,{google:this.props.google,zoom:5,style:y,center:{lat:this.state.latitude,lng:this.state.longitude}},l.a.createElement(k.Marker,{title:"Bucharest",name:"Bucharest",position:{lat:this.state.latitude,lng:this.state.longitude}}))),l.a.createElement("hr",null))}}]),t}(l.a.Component),O=Object(k.GoogleApiWrapper)({apiKey:"AIzaSyBuqivjlUHx_1CzHXli6ft9xLWrI-dOGwo"})(w),N=(a(165),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"logo"},l.a.createElement("div",{class:"element n-1"}),l.a.createElement("div",{class:"element n-2"}),l.a.createElement("div",{class:"element n-3"}),l.a.createElement("div",{class:"element n-4"}),l.a.createElement("div",{class:"element n-5"}),l.a.createElement("div",{class:"element n-6"}),l.a.createElement("div",{class:"element n-7"}),l.a.createElement("div",{class:"element n-8"}),l.a.createElement("div",{class:"element n-9"}),l.a.createElement("div",{class:"element n-10"}),l.a.createElement("div",{class:"element n-11"}),l.a.createElement("div",{class:"element n-12"}),l.a.createElement("div",{class:"element n-13"}),l.a.createElement("div",{class:"element n-14"}),l.a.createElement("div",{class:"element n-15"}),l.a.createElement("div",{class:"element n-16"}),l.a.createElement("div",{class:"element n-17"}),l.a.createElement("div",{class:"element n-18"}))}}]),t}(n.Component)),j=(a(166),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"launchTracking",value:function(){console.log("btn clicked boi"),this.props.launchTracking(!0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"welcome container-fluid row align-items-center p-3 mb-2 bg-light text-dark",id:this.props.id},l.a.createElement("div",{className:"container welcome-main"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-5"},l.a.createElement("div",{className:"logo"},l.a.createElement(N,null))),l.a.createElement("div",{className:"col-7"},l.a.createElement("div",{className:"row"},l.a.createElement("h1",{className:"display-3"},"Real-time ISS tracker"),l.a.createElement("h2",{className:"lead"},"The International Space Station is a space station in low Earth orbit, at approximately 400 km from the ground.",l.a.createElement("br",null),"At 28 800 km/h it only takes 90 minutes for the weightless laboratory to make a complete circuit of Earth."),l.a.createElement(h.Link,{activeClass:"inactive",to:"mapSection",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement("button",{className:"welcome-call-to-action col-4 btn btn-dark",onClick:this.launchTracking.bind(this)},"Track ISS")))))))}}]),t}(n.Component)),C=a(258),x=function(e){return l.a.createElement("div",null,l.a.createElement(C.a,{bg:"dark",text:"white",style:{width:"18rem"},className:"newsBox"},l.a.createElement(C.a.Header,{className:"newsBoxTitle"},e.title),l.a.createElement(C.a.Body,{className:"newsBoxContainer"},l.a.createElement(C.a.Text,{className:"newsBoxText"},e.text))))},S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={persons:[],latitude:"",longitude:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://api.open-notify.org/astros.json").then((function(t){console.log(t),e.setState({persons:t.data.people})}))}},{key:"render",value:function(){return l.a.createElement(x,{title:"People that are in space now",text:l.a.createElement("ul",{className:"peopleThatAreInSpace"},this.state.persons.map((function(e){return l.a.createElement("li",null,e.name)})))})}}]),t}(l.a.Component),I=a(55),B=function(e){return l.a.createElement("div",Object.assign({css:{overflow:"hidden",marginLeft:-2,marginRight:-2}},e))},T=function(e){return l.a.createElement("div",Object.assign({css:{backgroundColor:"#eee",boxSizing:"border-box",float:"left",margin:2,overflow:"hidden",paddingBottom:"16%",position:"relative",width:"calc(25% - ".concat(4,"px)"),":hover":{opacity:.9}}},e))},L=[{src:a(228)},{src:a(229)},{src:a(230)},{src:a(231)},{src:a(232)},{src:a(233)},{src:a(234)},{src:a(235)}],M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={modalIsOpen:!1,selectedIndex:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggleModal",value:function(e){this.setState({modalIsOpen:!this.state.modalIsOpen,selectedIndex:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.modalIsOpen,n=t.selectedIndex;return l.a.createElement("div",{id:this.props.id},l.a.createElement(I.b,null,a?l.a.createElement(I.a,{onClose:function(){return e.toggleModal(0)}},l.a.createElement(I.c,{views:L,currentIndex:n})):null),l.a.createElement("div",{className:"wrapperCarousel"},l.a.createElement(B,{className:"containerCarousel"},L.map((function(t,a){var n=t.src;return l.a.createElement(T,{onClick:function(){return e.toggleModal(a)},className:"imageCarousel"},l.a.createElement("img",{className:"imageCarousel",alt:"asdad",src:n,css:{cursor:"pointer",position:"absolute",maxWidth:"100%"}}))})))))}}]),t}(l.a.Component),A=a(255),_=a(251),F=a(113),W=a(252),H=function(e){return l.a.createElement(A.a.Group,{as:_.a},l.a.createElement(F.a,{sm:{span:10,offset:2}},l.a.createElement(W.a,{type:e.type,variant:e.bootstrapBtnTheme,block:!0},e.text)))},R=a(253),D=a(254),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleCheck",value:function(){console.log("checked"),this.props.callBack(!0)}},{key:"render",value:function(){return l.a.createElement(R.a,{className:"bg-dark text-light form-container",id:this.props.id,fluid:!0},l.a.createElement(_.a,{className:"align-items-center rowThatWorks"},l.a.createElement(F.a,{xs:6,md:{span:6,offset:0}},l.a.createElement(D.a,{className:"form-img img-fluid",src:a(236)})),l.a.createElement(F.a,{xs:6,md:{span:5,offset:0}},l.a.createElement("h1",{className:"annoying-title display-5"},"My trip to ISS"),l.a.createElement(A.a,{className:"actualForm"},l.a.createElement(A.a.Group,{as:_.a,controlId:"formHorizontalFullName"},l.a.createElement(A.a.Label,{column:!0,sm:2},"Full Name"),l.a.createElement(F.a,{sm:10},l.a.createElement(A.a.Control,{type:"text",placeholder:"Full name"}))),l.a.createElement(A.a.Group,{as:_.a,controlId:"formHorizontalEmail"},l.a.createElement(A.a.Label,{column:!0,sm:2},"Email"),l.a.createElement(F.a,{sm:10},l.a.createElement(A.a.Control,{type:"email",placeholder:"Email"}))),l.a.createElement(A.a.Group,{as:_.a,controlId:"formHorizontalCheck"},l.a.createElement(F.a,{sm:{span:4,offset:2}},l.a.createElement(A.a.Check,{label:"Remember me"})),l.a.createElement(F.a,{sm:{span:4,offset:2}},l.a.createElement(A.a.Check,{label:"I want to win a trip to ISS",onClick:this.handleCheck.bind(this)}))),l.a.createElement(H,{text:"Sign up",bootstrapBtnTheme:"light",type:"submit"})))))}}]),t}(n.Component),G=a(41),U=a(115),q=a(51),J=a(48),P=a(49),Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={show:a.props.show,name:"",team:"",country:"",valueUpdated:!1,visibility:"hidden"},a.toggle=a.toggle.bind(Object(G.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"showCancelBtn",value:function(){var e=this;console.log("method triggered"),setTimeout((function(){console.log("Set timeout"),e.setState((function(){return{visibility:"visible"}}))}),1e4)}},{key:"toggle",value:function(){this.setState({show:!this.state.show}),console.log("clicked"),console.log(this.state.show)}},{key:"alertThisShouldWork",value:function(){alert("You won!")}},{key:"submitHandler",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return this.props.show&&!this.state.valueUpdated&&(this.setState({show:this.props.show,valueUpdated:!0}),this.showCancelBtn()),l.a.createElement("div",null,l.a.createElement(U.a,{className:"bg-dark",show:this.state.show,keyboard:!0,onEscapeKeyDown:function(){console.log("ESCAPE"),e.toggle()}},l.a.createElement("form",{className:"needs-validation",onSubmit:this.submitHandler},l.a.createElement(q.a,{className:"modalHeader"},"PLEASE ENTER YOUR CREDIT CARD INFORMATION TO ++VALIDATE YOUR TRIP TO ISS++ THANK YOU"),l.a.createElement(J.a,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-7"},l.a.createElement("label",null,"Owner"),l.a.createElement("input",{type:"text",className:"form-control",required:!0})),l.a.createElement("div",{className:"form-group col-md-5"},l.a.createElement("label",null,"CVV"),l.a.createElement("input",{type:"number",className:"form-control",required:!0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement("label",null,"Card Number"),l.a.createElement("input",{type:"number",className:"form-control",required:!0}))),l.a.createElement("div",{className:"from-group"},l.a.createElement("div",{className:"form-group col-md-7"},l.a.createElement("label",null,"Expiration Date"),l.a.createElement("select",{className:"col-md-7",required:!0},l.a.createElement("option",{value:"01"},"January"),l.a.createElement("option",{value:"02"},"February "),l.a.createElement("option",{value:"03"},"March"),l.a.createElement("option",{value:"04"},"April"),l.a.createElement("option",{value:"05"},"May"),l.a.createElement("option",{value:"06"},"June"),l.a.createElement("option",{value:"07"},"July"),l.a.createElement("option",{value:"08"},"August"),l.a.createElement("option",{value:"09"},"September"),l.a.createElement("option",{value:"10"},"October"),l.a.createElement("option",{value:"11"},"November"),l.a.createElement("option",{value:"12"},"December")),l.a.createElement("select",{className:"col-md-5",required:!0},l.a.createElement("option",{value:"19"}," 2019"),l.a.createElement("option",{value:"20"}," 2020"),l.a.createElement("option",{value:"21"}," 2021"),l.a.createElement("option",{value:"22"}," 2022"),l.a.createElement("option",{value:"23"}," 2023"),l.a.createElement("option",{value:"24"}," 2024"))))),l.a.createElement(P.a,null,l.a.createElement("button",{color:"danger",className:"btn btn-danger cancelBtn",style:{visibility:this.state.visibility}},"No I don't want to visit ISS"),l.a.createElement("button",{type:"button",color:"primary",className:"btn btn-primary",onClick:function(){e.toggle()}},"Confirm your trip")))))}}]),t}(l.a.Component),K=function(){return l.a.createElement("section",{id:"footer",style:{position:"relative",width:"100%",height:"100px",background:"#f8f9fa"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black"},l.a.createElement("p",{style:{fontSize:"27px"}},l.a.createElement("u",null,l.a.createElement("a",{className:"link",href:"https://github.com/WildCodeSchool/real_time_iss_bucharest/",style:{textDecoration:"none"}},l.a.createElement("span",{style:{color:"#000761"}},"A"),l.a.createElement("span",{style:{color:"#44008B"}},"W"),l.a.createElement("span",{style:{color:"#4B666B"}},"E"),l.a.createElement("span",{style:{color:"#1E2852"}},"S"),l.a.createElement("span",{style:{color:"#182141"}},"O"),l.a.createElement("span",{style:{color:"#44008B"}},"M"),l.a.createElement("span",{style:{color:"#115268"}},"E"),l.a.createElement("span",{style:{color:"black",fontSize:"25px"}},"   Team")))," "),l.a.createElement("p",{className:"h6"},"\xa9 All right Reserved",l.a.createElement("a",{className:"text-green ml-2",href:"https://www.wildcodeschool.com/en-GB",target:"_blank"},"WildCodeSchool \xa9 2019"))))))},V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).checkBoxThatOpensModalFunction=function(e){a.setState({btnFromWelcomeSectionClicked:e})},a.checkBoxThatOpensModalFunction=function(e){a.setState({checkBoxThatOpensModal:e})},a.state={btnFromWelcomeSectionClicked:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"launchTracking",value:function(e){console.log("called: "+e),this.setState({btnFromWelcomeSectionClicked:e,checkBoxThatOpensModal:!1})}},{key:"dataFn",value:function(e){console.log("called: "+e),this.setState({checkBoxThatOpensModal:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,{image:"https://via.placeholder.com/70x60"}),l.a.createElement(j,{launchTracking:this.launchTracking.bind(this),id:"welcome"}),l.a.createElement("div",null,l.a.createElement(O,{id:"mapSection",className:"map map_component",welcomeBtn:this.state.btnFromWelcomeSectionClicked})),l.a.createElement("section",{className:"newsSection",id:"newsSection"},l.a.createElement(x,{title:"Lorem Ipsum",subtitle:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. "}),l.a.createElement(S,null),l.a.createElement(x,{title:"Lorem Ipsum",subtitle:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. "}),l.a.createElement(x,{title:"Lorem Ipsum",subtitle:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. "}),l.a.createElement(x,{title:"Lorem Ipsum",subtitle:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. "}),l.a.createElement(x,{title:"Lorem Ipsum",subtitle:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. "})),l.a.createElement(M,{id:"Carousel"}),l.a.createElement(z,{callBack:this.dataFn.bind(this),id:"newsletter"}),l.a.createElement(Y,{show:this.state.checkBoxThatOpensModal}),l.a.createElement(K,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.ffb36d19.chunk.js.map