(this.webpackJsonpcinema=this.webpackJsonpcinema||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},111:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(36),s=c.n(r),o=(c(68),c(3)),i=(c(69),c(70),c(1)),u=function(e){var t=e.checked,c=e.setChecked,n=e.movieWaitLeft,a=e.movieWaitRight;return Object(i.jsx)("div",{style:t?{}:{pointerEvents:"none"},class:"curtain",onClick:function(){return c(!t)},children:Object(i.jsxs)("div",{class:"curtain__wrapper",children:[Object(i.jsx)("input",{type:"checkbox",checked:t}),Object(i.jsx)("div",{class:"curtain__panel curtain__panel--left",style:n?{transform:n,backgroundImage:'url("curtain-581826_1280.webp")'}:{backgroundImage:'url("curtain-581826_1280.webp")'}}),Object(i.jsx)("div",{class:"curtain__panel curtain__panel--right",style:a?{transform:a,backgroundImage:'url("curtain-581826_1280.webp")'}:{backgroundImage:'url("curtain-581826_1280.webp")'}})]})})},l=(c(72),function(){return Object(i.jsx)("div",{className:"footer",children:Object(i.jsxs)("span",{children:["Made with \u2764\ufe0f by ",Object(i.jsx)("b",{children:"Aziz Jlassi"})," & ",Object(i.jsx)("b",{children:"Wael Oueslati"})]})})}),j=(c(73),c(7)),b=c(4),d=c(15),p=c(24),O=c.n(p),f=c(40),h="USER_REGISTER",m="USER_REGISTER_SUCCESS",v="USER_REGISTER_FAILED",g="USER_LOGIN",x="USER_LOGIN_SUCCESS",y="USER_LOGIN_FAILED",k="GET_PROFILE",S="GET_PROFILE_SUCCESS",E="GET_PROFILE_FAILED",N="LOGOUT",w=c(19),I=c.n(w),C=function(e){var t=e.SignIn,c=(e.checked,e.setChecked),a=Object(b.g)(),r=Object(n.useState)(""),s=Object(o.a)(r,2),u=s[0],p=s[1],k=Object(n.useState)(""),S=Object(o.a)(k,2),E=S[0],N=S[1],w=Object(n.useState)(""),C=Object(o.a)(w,2),R=C[0],_=C[1],M=Object(n.useState)(""),T=Object(o.a)(M,2),U=T[0],L=T[1],A=Object(n.useState)(!1),D=Object(o.a)(A,2),W=D[0],F=D[1],G=Object(j.b)(),P=(Object(j.c)((function(e){return e.userReducer.loading})),Object(j.c)((function(e){return e.userReducer.isAuth}))),V=function(e){var t,n={email:u,password:U};e.preventDefault(),c(!0),G((t=n,function(){var e=Object(f.a)(O.a.mark((function e(c){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:g}),e.prev=1,e.next=4,I.a.post("https://famegmc.herokuapp.com/user/login",t);case 4:return n=e.sent,localStorage.setItem("token",n.data.token),c({type:x,payload:n.data}),e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(1),c({type:y});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())).then((function(e){e?setTimeout((function(){p(""),L(""),a.push("/"),c(!1)}),3e3):setTimeout((function(){F(!0),c(!1)}),3e3)}))},z=function(e){var t={fullName:E,email:u,phone:R,password:U};e.preventDefault(),G(function(e){return function(){var t=Object(f.a)(O.a.mark((function t(c){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:h}),t.prev=1,t.next=4,I.a.post("https://famegmc.herokuapp.com/user/register",e);case 4:return n=t.sent,console.log(n),c({type:m,payload:n.data}),t.abrupt("return",n.data);case 10:t.prev=10,t.t0=t.catch(1),c({type:v,payload:t.t0.response.data}),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}(t)).then((function(e){"User added successfully"===e.msg&&a.push("/login")})),N(""),p(""),_(""),L("")};return Object(n.useEffect)((function(){P&&(c(!0),setTimeout((function(){a.push("/"),c(!1)}),3e3))}),[P]),Object(i.jsxs)("div",{className:"login_wrapper",style:{backgroundImage:'url("popcorn.png")'},children:[t?Object(i.jsxs)("form",{children:[Object(i.jsx)("h2",{style:{color:"white"},children:"Sign in to join"}),Object(i.jsx)("input",{value:u,onChange:function(e){return p(e.target.value)},type:"text",placeholder:"Email",style:W?{border:"2px solid red"}:{}}),Object(i.jsx)("input",{value:U,onChange:function(e){return L(e.target.value)},type:"password",placeholder:"Password",style:W?{border:"2px solid red"}:{}}),Object(i.jsx)("button",{onClick:function(e){return V(e)},children:"Sign in"}),Object(i.jsxs)("span",{children:["Don't have an account ?"," ",Object(i.jsx)(d.b,{to:"/register",children:Object(i.jsx)("span",{style:{fontWeight:"bold",cursor:"pointer"},children:"Sign up here"})})]})]}):Object(i.jsxs)("form",{children:[Object(i.jsx)("h2",{style:{color:"white"},children:"Sign up to join"}),Object(i.jsx)("input",{value:E,onChange:function(e){return N(e.target.value)},type:"text",placeholder:"Full Name"}),Object(i.jsx)("input",{value:u,onChange:function(e){return p(e.target.value)},type:"text",placeholder:"Email"}),Object(i.jsx)("input",{value:U,onChange:function(e){return L(e.target.value)},type:"password",placeholder:"Password"}),Object(i.jsx)("input",{value:R,onChange:function(e){return _(e.target.value)},type:"number",placeholder:"Phone"}),Object(i.jsx)("button",{onClick:function(e){return z(e)},children:"Sign up"}),Object(i.jsxs)("span",{children:["Already have an account ?"," ",Object(i.jsx)(d.b,{to:"/login",children:Object(i.jsx)("span",{style:{fontWeight:"bold",cursor:"pointer"},children:"Sign in here"})})]})]}),Object(i.jsx)(l,{})]})},R=(c(100),c(101),c(37)),_=c(38),M=function(e){var t=e.movie,c=e.setMovie,a=e.video,r=(e.title,e.logo),s=e.videoSource,u=e.backgroundUrl,l=e.scale,j=e.voted,b=e.setVoted,d=e.movieId,p=e.votes,O=(e.voteMovie,e.user),f=e.getVotes,h=Object(n.useState)(""),m=Object(o.a)(h,2),v=m[0],g=m[1];Object(n.useEffect)((function(){g(t?"movie shadow":j?"movie votedByUser":"movie")}),[t,j]);var x="";return Object(i.jsxs)("div",{style:t?{transform:l,zIndex:999,backgroundImage:"url('".concat(u,"')")}:{transform:"scale(1)",backgroundImage:"url('titanic.jpg')"},className:v,children:[Object(i.jsx)("video",{className:t?"show":"hide",ref:a,controls:!1,src:s}),Object(i.jsx)("img",{src:r,className:"movieLogo"}),t?Object(i.jsx)("div",{className:"closeWrapper",children:Object(i.jsx)("button",{onClick:function(){return clearTimeout(x),void c(!1)},children:"X"})}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"voters",children:[Object(i.jsx)("span",{children:p}),Object(i.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/561/561163.png"})]}),Object(i.jsxs)("div",{className:"playBtn",children:[Object(i.jsx)("button",{onClick:function(){c(!0)},children:"Watch trailer"}),Object(i.jsx)(R.a,{onClick:function(){b(d),I.a.post("https://famegmc.herokuapp.com/vote",{email:O.email,movieNum:d}).then((function(e){f(),console.log(e.data)})).catch((function(e){return console.log(e)}))},className:"voteBtn",icon:_.a,color:j?"black":"rgb(155, 2, 2)"})]})]})]})},T=(c(104),function(e){var t=e.user,c=Object(j.b)();Object(b.g)();return Object(i.jsxs)("div",{className:"Header uperIndex",children:[Object(i.jsxs)("div",{className:"left",children:[Object(i.jsx)("span",{children:"My movies"}),Object(i.jsx)(d.b,{to:"/movie",children:Object(i.jsx)("span",{children:"Watch"})}),Object(i.jsx)("span",{children:"Contact Us"})]}),Object(i.jsxs)("div",{className:"right",children:[Object(i.jsx)(d.b,{to:"/login",onClick:function(){return c((function(e){e({type:N});try{localStorage.removeItem("token")}catch(t){console.log(t)}}))},children:Object(i.jsx)("span",{children:"Logout"})}),Object(i.jsxs)("span",{className:"profilImg",children:[t&&t.fullName,Object(i.jsx)("img",{src:"https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg"})]})]})]})}),U=function(){var e=Object(b.g)(),t=Object(j.c)((function(e){return e.userReducer.user})),c=Object(n.useState)("00:00:00"),a=Object(o.a)(c,2),r=a[0],s=a[1];Object(n.useEffect)((function(){setInterval((function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()+1),t.setHours(14),t.setMinutes(59),t.setSeconds(0),t.setMilliseconds(0);var c=t.getTime()-e.getTime(),n=(Math.floor(c%1e3/100),Math.floor(c/1e3%60)),a=Math.floor(c/6e4%60),r=Math.floor(c/36e5%24);s("".concat(r<10?"0".concat(r):r,":").concat(a<10?"0".concat(a):a,":").concat(n<10?"0".concat(n):n))}),1e3)}));var u=Object(n.useState)(0),d=Object(o.a)(u,2),p=d[0],O=d[1],f=Object(n.useState)([]),h=Object(o.a)(f,2),m=h[0],v=h[1],g=function(){t&&I.a.get("https://famegmc.herokuapp.com/votes/".concat(t.email)).then((function(e){v(e.data.votesCounter),p!=e.data.voted&&O(e.data.voted)})).catch((function(e){return console.log(e)}))};Object(n.useEffect)((function(){g();var e=setInterval((function(){g()}),1e4);return function(){clearInterval(e)}}),[]),Object(n.useEffect)((function(){"00:13:00"===r&&e.push("/waiting")}),[r]);var x=Object(n.useState)(!1),y=Object(o.a)(x,2),k=y[0],S=y[1],E=Object(n.useState)(!1),N=Object(o.a)(E,2),w=N[0],C=N[1],R=Object(n.useState)(!1),_=Object(o.a)(R,2),U=_[0],L=_[1],A=Object(n.useRef)(),D=Object(n.useRef)(),W=Object(n.useRef)();return Object(n.useEffect)((function(){k?A.current.play():(A.current.pause(),A.current.currentTime=0),w?D.current.play():(D.current.pause(),D.current.currentTime=0),U?W.current.play():(W.current.pause(),W.current.currentTime=0)}),[k,w,U]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(T,{user:t}),Object(i.jsxs)("div",{className:"movieWrapper",children:[Object(i.jsxs)("span",{style:{textAlign:"center"},className:"moviesTitles bold",children:["Next movie starts in ",Object(i.jsx)("br",{})," ",r]}),Object(i.jsx)("span",{className:"moviesTitles",children:"Vote down below"}),Object(i.jsxs)("div",{className:"moviesList",children:[Object(i.jsx)(M,{video:A,movie:k,setMovie:S,title:"Fast and furious",videoSource:"video.mp4",backgroundUrl:"titanic.jpg",scale:"scale(1.5) translate(80%, 0px) translateY(-45px)",logo:"titanicLogo.png",voted:1===p,setVoted:O,movieId:1,votes:m[0],user:t,getVotes:g}),Object(i.jsx)(M,{video:D,movie:w,setMovie:C,title:"titanic",videoSource:"titanicTR.mp4",backgroundUrl:"titanic.jpg",scale:"scale(1.5) translateY(-45px)",logo:"titanicLogo.png",voted:2===p,setVoted:O,movieId:2,votes:m[1],user:t,getVotes:g}),Object(i.jsx)(M,{video:W,movie:U,setMovie:L,title:"After",videoSource:"video.mp4",backgroundUrl:"titanic.jpg",scale:"scale(1.5) translate(-80%, 0px) translateY(-45px)",logo:"titanicLogo.png",voted:3===p,setVoted:O,movieId:3,votes:m[2],user:t,getVotes:g})]})]}),Object(i.jsx)(l,{})]})},L=(c(105),function(){var e=Object(b.g)(),t=Object(j.c)((function(e){return e.userReducer.user})),c=Object(n.useState)("00:00:00"),a=Object(o.a)(c,2),r=a[0],s=a[1];Object(n.useEffect)((function(){setInterval((function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()+1),t.setHours(14),t.setMinutes(59),t.setSeconds(0),t.setMilliseconds(0);var c=t.getTime()-e.getTime(),n=(Math.floor(c%1e3/100),Math.floor(c/1e3%60)),a=Math.floor(c/6e4%60),r=Math.floor(c/36e5%24);s("".concat(r<10?"0".concat(r):r,":").concat(a<10?"0".concat(a):a,":").concat(n<10?"0".concat(n):n))}),1e3)})),Object(n.useEffect)((function(){"00:12:00"===r&&e.push("/movie")}),[r]);var u=Object(n.useRef)(),l=Object(n.useState)([]),d=Object(o.a)(l,2),p=d[0],O=d[1],f=function(){I.a.get("https://famegmc.herokuapp.com/user/usersImages").then((function(e){return O(e.data)})).catch((function(e){return console.log(e)}))};Object(n.useEffect)((function(){f();var e=setInterval((function(){f()}),1e4);return function(){clearInterval(e)}}),[]);var h=Object(n.useState)("Update profil picture"),m=Object(o.a)(h,2),v=m[0],g=m[1];return Object(i.jsx)("div",{className:"MoviePlayer",children:Object(i.jsxs)("div",{style:{backgroundImage:"url('titanic.jpg')"},className:"movieWaitWrapper",children:[Object(i.jsx)("img",{src:"titanicLogo.png",className:"logoMovieWait"}),Object(i.jsxs)("span",{className:"moviesTitles bold",children:["Movie starts in ",r]}),Object(i.jsx)("input",{style:{display:"none"},ref:u,onChange:function(e){return function(e){e.preventDefault();var c=new FormData,n=e.target.files;c.append("userEmail",t.email),c.append("file",n[0]),console.log(t.email),n&&n.length>0&&(g("uploading..."),I()({method:"post",url:"https://famegmc.herokuapp.com/user/update-image",data:c,headers:{Authorization:localStorage.getItem("token")}}).then((function(e){g("Update profil picture"),f(),console.log(e)})).catch((function(e){console.log(e)})))}(e)},type:"file",name:"file"}),Object(i.jsx)("button",{className:"updatePdp",style:{zIndex:9},onClick:function(){u.current.click()},children:v}),Object(i.jsx)("div",{className:"peoples",children:p&&p.filter((function(e){return""!=e.photo})).slice(0,5).map((function(e,t){return Object(i.jsx)("div",{className:"people",children:Object(i.jsx)("img",{src:e.photo})},t)}))})]})})}),A=c(8),D=c(63),W=["component"],F=function(e){var t=e.component,c=Object(D.a)(e,W),n=Object(j.c)((function(e){return e.userReducer.isAuth}));return console.log(n),n?Object(i.jsx)("div",{children:Object(i.jsx)(b.b,Object(A.a)({component:t},c))}):Object(i.jsx)(b.a,{to:"/login"})},G=(c(106),c(62)),P=c(56),V=c.n(P),z=function(e){var t=e.user,c=e.socket,a=Object(n.useState)(""),r=Object(o.a)(a,2),s=r[0],u=r[1],l=Object(n.useState)([]),j=Object(o.a)(l,2),b=j[0],d=j[1],p=Object(n.useState)(!1),O=Object(o.a)(p,2),f=O[0],h=O[1],m=Object(n.useState)("public"),v=Object(o.a)(m,2),g=v[0];v[1];Object(n.useEffect)((function(){if(console.log(t.fullName),console.log(g),""!==t.fullName&&""!==g){var e=t.fullName;c.emit("joinRoom",{username:e,roomname:g})}else alert("username and roomname are must !"),window.location.reload()}),[]),Object(n.useEffect)((function(){c.on("message",(function(e){d((function(t){return[].concat(Object(G.a)(t),[e])}))}))}),[]);var x=function(e){"Enter"===e.key&&""!=s&&(c.emit("chat",s),u(""))},y=Object(n.useRef)();return Object(i.jsx)("div",{className:"chat chatOverlay",children:Object(i.jsxs)("div",{className:"chatWrapper",children:[Object(i.jsx)("div",{className:"messages",children:b.map((function(e,t){return Object(i.jsxs)("div",{className:"message",children:[Object(i.jsxs)("b",{style:{color:e.color},children:[e.username," : "]}),Object(i.jsx)("span",{children:e.text})]},t)})).reverse()}),Object(i.jsxs)("div",{className:"chatBox",children:[Object(i.jsx)("input",{type:"text",value:s,onChange:function(e){return u(e.target.value)},placeholder:"Type message",onKeyPress:function(e){return x(e)},ref:y}),f?Object(i.jsx)(V.a,{onEmojiClick:function(e,t){u(s+t.emoji),h(!1),y.current.focus()},pickerStyle:{width:"280px",bottom:"60px",right:"20px",position:"fixed"}}):"",Object(i.jsx)(R.a,{onClick:function(){return h(!f)},className:"sendBtn",icon:_.b,color:"white"})]})]})})},B=function(e){var t=e.user,c=e.roomname,a=e.socket,r=e.setMovieStarted;Object(n.useEffect)((function(){console.log("play"),s.current.play(),s.current.muted=!1}),[]),Object(n.useEffect)((function(){return r(!0),function(){r(!1)}}),[]);var s=Object(n.useRef)();return Object(i.jsxs)("div",{className:"Player",children:[Object(i.jsx)("video",{ref:s,src:"https://famegmc.herokuapp.com/video",controls:""}),Object(i.jsx)("div",{style:{position:"fixed",bottom:0,right:0},children:t&&Object(i.jsx)(z,{user:t,roomname:c,socket:a})})]})},H=c(61).a.connect("https://famegmc.herokuapp.com/");var J=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.userReducer.isAuth})),c=Object(j.c)((function(e){return e.userReducer.user})),a=Object(n.useState)("public"),r=Object(o.a)(a,2),s=r[0],l=(r[1],Object(n.useState)(!1)),d=Object(o.a)(l,2),p=d[0],h=d[1];Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(O.a.mark((function e(t){var c,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:k}),c={headers:{Authorization:localStorage.getItem("token")}},e.prev=2,e.next=5,I.a.get("https://famegmc.herokuapp.com/user/currentuser",c);case 5:n=e.sent,t({type:S,payload:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:E,payload:e.t0.response.data});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}())}),[t]);var m=Object(n.useState)(!0),v=Object(o.a)(m,2),g=v[0],x=v[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("img",{style:g?{width:"358px",top:"50%"}:p?{width:"100px",top:"8%",left:"6%"}:{width:"150px",top:"10%"},className:"logo",src:"fame.png",onClick:function(){return x(!g)}}),Object(i.jsx)(u,{checked:g,setChecked:x}),Object(i.jsxs)(b.d,{children:[Object(i.jsx)(F,{exact:!0,path:"/",render:function(){return Object(i.jsx)(U,{})}}),Object(i.jsx)(b.b,{path:"/login",render:function(){return Object(i.jsx)(C,{checked:g,setChecked:x,SignIn:!0})}}),Object(i.jsx)(b.b,{path:"/register",render:function(){return Object(i.jsx)(C,{checked:g,setChecked:x,SignIn:!1})}}),Object(i.jsx)(b.b,{path:"/movie",render:function(){return Object(i.jsx)(B,{setMovieStarted:h,user:c,roomname:s,socket:H})}}),Object(i.jsx)(b.b,{path:"/waiting",render:function(){return Object(i.jsx)(L,{})}})]})]})},Y=(c.p,c.p,c(29)),K={loading:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case h:case g:case k:return Object(A.a)(Object(A.a)({},e),{},{loading:!0});case m:return Object(A.a)(Object(A.a)({},e),{},{loading:!1,msg:n});case v:case y:case E:return Object(A.a)(Object(A.a)({},e),{},{loading:!1,errors:n});case x:return Object(A.a)(Object(A.a)({},e),{},{loading:!1,token:n,isAuth:!0});case S:return Object(A.a)(Object(A.a)({},e),{},{loading:!1,user:n,isAuth:!0});case N:return Object(A.a)(Object(A.a)({},e),{},{isAuth:!1});default:return e}},q=Object(Y.b)({userReducer:X}),Q=[c(60).a],Z=Object(Y.d)(q,Object(Y.c)(Y.a.apply(void 0,Q)));s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(d.a,{children:Object(i.jsx)(j.a,{store:Z,children:Object(i.jsx)(J,{})})})}),document.getElementById("root"))},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){}},[[111,1,2]]]);
//# sourceMappingURL=main.c92900db.chunk.js.map