(this["webpackJsonphongik-schedule"]=this["webpackJsonphongik-schedule"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/alarm.7e9e64ed.mp3"},35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},42:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n,r,l,c,i,o,m,s,u,d,f,b=a(0),p=a.n(b),E=a(14),g=a.n(E),h=a(4),v=(a(40),a(41),a(42),a(8)),j=a(20),y=a(26),O=a.n(y),x=a(9),w=a(12),S=a(68),k=a(69),N=a(70),z=a(66),C=Object(h.b)("schedule")(Object(h.c)((function(e){var t=e.schedule,a=e.data,n=e.toggleEdit,r=a.name,l=Object(b.useState)(a.name),c=Object(v.a)(l,2),i=c[0],o=c[1],m=Object(b.useState)(a.link),s=Object(v.a)(m,2),u=s[0],d=s[1];return p.a.createElement("div",null,p.a.createElement(S.a,{size:"sm",className:"m-0"},p.a.createElement(k.a,{type:"text",className:"",placeholder:"\uacfc\ubaa9\uba85",value:i,onChange:function(e){return o(e.target.value)}}),p.a.createElement(k.a,{type:"text",className:"",placeholder:"Webex \ub9c1\ud06c",value:u,onChange:function(e){return d(e.target.value)}}),p.a.createElement(S.a.Append,null,p.a.createElement(N.a,{className:"",onClick:function(e){t.edit(r,i,u)&&n()},variant:"outline-secondary"},"\ud655\uc778"))))}))),I=function(e){var t=e.data,a=e.toggleSelect;return p.a.createElement("div",{className:"d-flex justify-content-between"},p.a.createElement("span",{className:"align-self-center font-weight-bold ml-1"},t.name),"\xa0\xa0\xa0",p.a.createElement(N.a,{size:"sm",variant:"primary",onClick:function(e){return a()}},"\uc120\ud0dd \uc644\ub8cc"))},T=Object(j.b)(Object(h.b)("schedule")(Object(h.c)((function(e){var t=e.schedule,a=e.data,n=Object(b.useState)(!1),r=Object(v.a)(n,2),l=r[0],c=r[1],i=Object(b.useState)(!1),o=Object(v.a)(i,2),m=o[0],s=o[1],u=function(e){console.log(1),s(!m),t.selected=m?null:[a.name,"select"]},d=function(e){console.log(1),c(!l),console.log(2),t.selected=l?null:[a.name,"edit"]};return p.a.createElement("form",null,p.a.createElement("fieldset",{disabled:t.selected&&t.selected[0]!==a.name},p.a.createElement("div",{className:"m-0 mb-2 pl-2 pr-2 pb-1 pt-1 border border-primary rounded"},l?p.a.createElement(C,{data:a,toggleEdit:function(e){return d()}}):m?p.a.createElement(I,{data:a,toggleSelect:function(e){return u()}}):p.a.createElement("div",{className:"d-flex justify-content-between"},p.a.createElement("span",{className:"align-self-center font-weight-bold ml-1"},a.name),"\xa0\xa0\xa0",p.a.createElement("div",null,p.a.createElement(z.a,{size:"sm"},p.a.createElement(N.a,{style:{width:"26px"},variant:"outline-primary",onClick:function(e){return u()}},"\xa0"),p.a.createElement(x.a,{style:{fontSize:"14px",top:"9px",left:"9px",zIndex:-1},className:"text-primary position-absolute",icon:w.c}),p.a.createElement(N.a,{style:{width:"26px"},variant:"outline-primary",onClick:function(e){return d()}},"\xa0"),p.a.createElement(x.a,{size:"xs",style:{fontSize:"14px",top:"9px",left:"31px",zIndex:-1},className:"text-primary position-absolute",icon:w.d}),p.a.createElement(N.a,{style:{width:"26px"},variant:"outline-primary rounded-right",onClick:function(e){return function(e){e.preventDefault(),t.remove(a.name)}(e)}},"\xa0"),p.a.createElement(x.a,{size:"xs",style:{fontSize:"14px",top:"9px",left:"58px",zIndex:-1},className:"text-primary position-absolute",icon:w.f})),"\xa0 \xa0",p.a.createElement(N.a,{size:"sm",variant:"primary font-weight-bold",onClick:function(e){return window.open(a.link,"_blank")}},"\xa0GO\xa0"))))))})))),L=Object(j.a)((function(e){var t=e.items;return p.a.createElement("div",{className:"mt-2 mb-3"},t.map((function(e,t){return p.a.createElement(T,{key:"item-".concat(e.name),index:t,value:e.name,data:e})})))})),_=Object(h.b)("schedule")(Object(h.c)((function(e){var t=e.schedule;return p.a.createElement("div",{className:"noselect"},p.a.createElement(L,{items:t.subjectStore.toJS(),onSortEnd:function(e){var a=e.oldIndex,n=e.newIndex;t.subjectStore=O()(t.subjectStore,a,n)}}))}))),J=Object(h.b)("schedule")(Object(h.c)((function(e){var t=e.schedule,a=Object(b.useState)(""),n=Object(v.a)(a,2),r=n[0],l=n[1],c=Object(b.useState)(""),i=Object(v.a)(c,2),o=i[0],m=i[1];return p.a.createElement(p.a.Fragment,null,p.a.createElement(S.a,null,p.a.createElement(k.a,{type:"text",className:"",placeholder:"\uacfc\ubaa9\uba85",value:r,onChange:function(e){return l(e.target.value)}}),p.a.createElement(k.a,{type:"text",className:"",placeholder:"Webex \ub9c1\ud06c",value:o,onChange:function(e){return m(e.target.value)}}),p.a.createElement(S.a.Append,null,p.a.createElement(N.a,{className:"",onClick:function(e){t.add(r,o)&&(l(""),m(""))},variant:"outline-secondary"},"\ucd94\uac00"))))}))),D=a(28),F=a.n(D),H=a(29),A=a.n(H),G=a(19),W=a(30),M=a.n(W),R=Object(h.b)("schedule")(Object(h.c)((function(e){var t=e.schedule,a=Object(b.useState)(!t.alarm),n=Object(v.a)(a,2),r=n[0],l=n[1],c=p.a.createElement(p.a.Fragment,null),i=null,o=Object(b.useRef)(null),m=Object(b.useState)([p.a.createElement(p.a.Fragment,null),p.a.createElement(N.a,{className:"font-weight-bold",size:"",variant:"primary",disabled:!0},"\xa0GO\xa0")]),s=Object(v.a)(m,2),u=s[0],d=s[1],f=Object(b.useState)(p.a.createElement(p.a.Fragment,null)),E=Object(v.a)(f,2),g=E[0],h=E[1],j=function(){o.current.audioEl.current.pause(),o.current.audioEl.current.load(),h(p.a.createElement(p.a.Fragment,null))};return c=t.alarm?p.a.createElement(N.a,{style:{width:"30px"},className:"bg-primary pr-0 pl-0",size:"sm",onClick:function(){t.alarm=!1,j()}},p.a.createElement(x.a,{icon:G.a})):p.a.createElement(N.a,{style:{width:"30px"},className:"bg-secondary pr-0 pl-0",size:"sm",onClick:function(){return t.alarm=!0}},p.a.createElement(x.a,{icon:G.b})),Object(b.useEffect)((function(){o.current.audioEl.current.loop=!0;var e=setInterval((function(){var e=new Date;e.setTime(e.getTime()+6e5);var a=t.getTime().find((function(t){return t[0]===e.getDay()&&t[1]===e.getHours()-8}));if(a){var n=t.subjectStore.find((function(e){return e.name===a[2]}));d([p.a.createElement("span",{className:"font-weight-bold align-self-center mr-2",style:{fontSize:"large"}}," ",n.name," "),p.a.createElement(N.a,{className:"font-weight-bold",size:"",variant:"primary",onClick:function(e){j(),window.open(n.link,"_blank")}},"\xa0GO\xa0")])}else d([p.a.createElement("span",{className:"font-weight-bold align-self-center mr-2",style:{fontSize:"large"}}," \uacf5\uac15\uc785\ub2c8\ub2e4 "),p.a.createElement(N.a,{className:"font-weight-bold",size:"",variant:"primary",disabled:!0},"\xa0GO\xa0")]);e.setTime(e.getTime()-42e4);var r=e.getHours(),l=t.getTime().find((function(t){return t[0]===e.getDay()&&t[1]===r-8}));t.alarm&&(l&&i&&i!=r&&(o.current.audioEl.current.play(),h(p.a.createElement(N.a,{className:"mr-1",size:"",variant:"danger",onClick:function(){return j()}},p.a.createElement(x.a,{icon:w.a})))),i=r)}),1e3);return function(){clearInterval(e)}}),[]),p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{id:"dimScreen",className:"noselect",onClick:function(){return l(!0)},hidden:r},p.a.createElement("h4",{id:"floatingText",className:"font-weight-bold"},"\uc54c\ub78c \uc815\uc0c1 \uc791\ub3d9\uc744 \uc704\ud574 ",p.a.createElement("br",null),"\ud654\uba74\uc744 \ud074\ub9ad\ud574 \uc8fc\uc138\uc694")),p.a.createElement(A.a,{src:M.a,ref:o}),p.a.createElement("div",{className:"mb-2 d-flex mt-1 mr-1 justify-content-between noselect"},p.a.createElement("span",{className:"align-self-center text-primary flex-grow-1 ml-1 font-weight-bold",style:{fontSize:"20px"}},p.a.createElement("span",{className:"border border-primary rounded pr-1 pl-1 mr-1"},"HI"),"SCHEDULE"),p.a.createElement("span",{className:"mr-3"},p.a.createElement(N.a,{className:"ml-1",variant:"outline-primary",size:"sm",onClick:function(){return window.open("http://www.hongik.ac.kr/","_blank")}},p.a.createElement(x.a,{icon:w.g}),"\xa0\ud64d"),p.a.createElement(N.a,{className:"ml-1",variant:"outline-primary",size:"sm",onClick:function(){return window.open("https://cn.hongik.ac.kr/","_blank")}},p.a.createElement(x.a,{icon:w.e}),"\xa0\ud074"),p.a.createElement(N.a,{className:"ml-1",variant:"outline-primary",size:"sm",onClick:function(){return window.open("https://everytime.kr/","_blank")}},p.a.createElement(x.a,{icon:w.b}),"\xa0\uc5d0")),p.a.createElement("span",{className:"text-primary align-self-center mr-1",style:{fontSize:"11px"}},"57\ubd84 \uc54c\ub78c"),p.a.createElement("div",null,c)),p.a.createElement("div",{className:"noselect border border-primary rounded p-2 d-flex mt-3 mb-4 justify-content-between"},p.a.createElement(F.a,{className:"flex-grow-1 ml-1 align-self-center",style:{fontSize:"large"},format:"MM-DD HH:mm:ss",ticking:!0}),u[0],g,u[1]))}))),V=a(67),B=Object(h.b)("schedule")(Object(h.c)((function(e){for(var t=e.schedule,a=e.index,n=e.timeList,r=[],l=function(e){t.selected&&"select"===t.selected[1]&&t.toggleTime(t.selected[0],[e.target.getAttribute("col"),e.target.getAttribute("row")])},c=function(e){var t=n.find((function(t){return t[0]==e&&t[1]==a}));t?r.push(p.a.createElement("td",{key:e,style:{backgroundColor:"#d7eaff"},row:a,col:e,onClick:function(e){return l(e)}},t[2])):r.push(p.a.createElement("td",{key:e,row:a,col:e,onClick:function(e){return l(e)}}))},i=1;i<7;i++)c(i);return p.a.createElement("tr",null,p.a.createElement("td",null,a),r)}))),U=Object(h.b)("schedule")(Object(h.c)((function(e){var t=e.schedule.getTime();return p.a.createElement(V.a,{bordered:!0,className:"noselect text-center"},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null),p.a.createElement("th",null,"\uc6d4"),p.a.createElement("th",null,"\ud654"),p.a.createElement("th",null,"\uc218"),p.a.createElement("th",null,"\ubaa9"),p.a.createElement("th",null,"\uae08"),p.a.createElement("th",null,"\ud1a0"))),p.a.createElement("tbody",null,p.a.createElement(B,{timeList:t,index:1}),p.a.createElement(B,{timeList:t,index:2}),p.a.createElement(B,{timeList:t,index:3}),p.a.createElement(B,{timeList:t,index:4}),p.a.createElement(B,{timeList:t,index:5}),p.a.createElement(B,{timeList:t,index:6}),p.a.createElement(B,{timeList:t,index:7}),p.a.createElement(B,{timeList:t,index:8}),p.a.createElement(B,{timeList:t,index:9}),p.a.createElement(B,{timeList:t,index:10}),p.a.createElement(B,{timeList:t,index:11}),p.a.createElement(B,{timeList:t,index:12})))}))),$=a(31),q=a(10),K=a(32),P=a(33),Q=a(11),X=(a(63),a(2));var Y=new(n=function(){function e(){Object(K.a)(this,e),Object(q.a)(this,"load",r,this),Object(q.a)(this,"selected",l,this),Object(q.a)(this,"subjectStore",c,this),Object(q.a)(this,"alarm",i,this),Object(q.a)(this,"add",o,this),Object(q.a)(this,"remove",m,this),Object(q.a)(this,"edit",s,this),Object(q.a)(this,"addTime",u,this),Object(q.a)(this,"removeTime",d,this),Object(q.a)(this,"toggleTime",f,this),localStorage.getItem("alarm")&&(this.alarm=JSON.parse(localStorage.getItem("alarm"))),localStorage.getItem("data")&&(this.subjectStore=JSON.parse(localStorage.getItem("data")))}return Object(P.a)(e,[{key:"_checkValid",value:function(e,t,a){return e.length<1?(alert("\uacfc\ubaa9\uba85\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),!1):-1==this.subjectStore.findIndex((function(t){return t.name===e}))||a&&a===e?(n=t,!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(n)||(alert("\uc62c\ubc14\ub978 URL\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),!1)):(alert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uacfc\ubaa9\uba85\uc785\ub2c8\ub2e4."),!1);var n}},{key:"getTime",value:function(){var e,t=[],a=Object($.a)(this.subjectStore);try{var n=function(){var a=e.value;t=t.concat(a.time.map((function(e){return[e[0],e[1],a.name]})))};for(a.s();!(e=a.n()).done;)n()}catch(r){a.e(r)}finally{a.f()}return t}}]),e}(),r=Object(Q.a)(n.prototype,"load",[X.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=Object(Q.a)(n.prototype,"selected",[X.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=Object(Q.a)(n.prototype,"subjectStore",[X.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=Object(Q.a)(n.prototype,"alarm",[X.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),o=Object(Q.a)(n.prototype,"add",[X.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){return t=t.trim(),a=a.trim(),!!e._checkValid(t,a)&&(e.subjectStore.push({name:t,link:a,time:[]}),!0)}}}),m=Object(Q.a)(n.prototype,"remove",[X.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){if(!confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))return!1;e.subjectStore.splice(e.subjectStore.findIndex((function(e){return e.name===t})),1)}}}),s=Object(Q.a)(n.prototype,"edit",[X.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a,n){if(!e._checkValid(a,n,t))return!1;var r=e.subjectStore.findIndex((function(e){return e.name===t}));return e.subjectStore[r].name=a,e.subjectStore[r].link=n,!0}}}),u=Object(Q.a)(n.prototype,"addTime",[X.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){if(-1===e.getTime().findIndex((function(e){return e[0]===a[0]&&e[1]===a[1]}))){var n=e.subjectStore.findIndex((function(e){return e.name===t}));e.subjectStore[n].time.push(a)}}}}),d=Object(Q.a)(n.prototype,"removeTime",[X.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){var n=e.subjectStore.findIndex((function(e){return e.name===t})),r=e.subjectStore[n].time.findIndex((function(e){return e[0]===a[0]&&e[1]===a[1]}));return-1!=r&&(e.subjectStore[n].time.splice(r,1),!0)}}}),f=Object(Q.a)(n.prototype,"toggleTime",[X.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){a=[Number(a[0]),Number(a[1])],e.removeTime(t,a)||e.addTime(t,a)}}}),n);Object(X.g)((function(){localStorage.setItem("data",JSON.stringify(Y.subjectStore.toJS())),localStorage.setItem("alarm",JSON.stringify(Y.alarm))}));var Z=Y;a(64);var ee=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"App noselect",class:"container border border-primary pt-2 pb-3 pl-3 pr-3"},p.a.createElement(R,null),p.a.createElement(_,null),p.a.createElement(U,null),p.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.render(p.a.createElement(p.a.StrictMode,null,p.a.createElement(h.a,{schedule:Z},p.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.7d80b84b.chunk.js.map