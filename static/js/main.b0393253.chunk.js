(this["webpackJsonphongik-schedule"]=this["webpackJsonphongik-schedule"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/alarm.7e9e64ed.mp3"},35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},42:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),i=a(4),o=(a(40),a(41),a(42),a(8)),m=a(20),s=a(26),u=a.n(s),d=a(9),f=a(12),b=a(68),p=a(69),E=a(70),g=a(66),h=Object(i.b)("schedule")(Object(i.c)((function(e){var t=e.schedule,a=e.data,l=e.toggleEdit,c=a.name,i=Object(n.useState)(a.name),m=Object(o.a)(i,2),s=m[0],u=m[1],d=Object(n.useState)(a.link),f=Object(o.a)(d,2),g=f[0],h=f[1];return r.a.createElement("div",null,r.a.createElement(b.a,{size:"sm",className:"m-0"},r.a.createElement(p.a,{type:"text",className:"",placeholder:"\uacfc\ubaa9\uba85",value:s,onChange:function(e){return u(e.target.value)}}),r.a.createElement(p.a,{type:"text",className:"",placeholder:"Webex \ub9c1\ud06c",value:g,onChange:function(e){return h(e.target.value)}}),r.a.createElement(b.a.Append,null,r.a.createElement(E.a,{className:"",onClick:function(e){t.edit(c,s,g)&&l()},variant:"outline-secondary"},"\ud655\uc778"))))}))),v=function(e){var t=e.data,a=e.toggleSelect;return r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("span",{className:"align-self-center font-weight-bold ml-1"},t.name),"\xa0\xa0\xa0",r.a.createElement(E.a,{size:"sm",variant:"primary",onClick:function(e){return a()}},"\uc120\ud0dd \uc644\ub8cc"))},j=Object(m.b)(Object(i.b)("schedule")(Object(i.c)((function(e){var t=e.schedule,a=e.data,l=Object(n.useState)(!1),c=Object(o.a)(l,2),i=c[0],m=c[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),b=u[0],p=u[1],j=function(e){console.log(1),p(!b),t.selected=b?null:[a.name,"select"]},y=function(e){console.log(1),m(!i),console.log(2),t.selected=i?null:[a.name,"edit"]};return r.a.createElement("form",null,r.a.createElement("fieldset",{disabled:t.selected&&t.selected[0]!==a.name},r.a.createElement("div",{className:"m-0 mb-2 pl-2 pr-2 pb-1 pt-1 border border-primary rounded"},i?r.a.createElement(h,{data:a,toggleEdit:function(e){return y()}}):b?r.a.createElement(v,{data:a,toggleSelect:function(e){return j()}}):r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("span",{className:"align-self-center font-weight-bold ml-1"},a.name),"\xa0\xa0\xa0",r.a.createElement("div",null,r.a.createElement(g.a,{size:"sm"},r.a.createElement(E.a,{style:{width:"26px"},variant:"outline-primary",onClick:function(e){return j()}},"\xa0"),r.a.createElement(d.a,{style:{fontSize:"14px",top:"9px",left:"9px"},className:"text-primary position-absolute",icon:f.c}),r.a.createElement(E.a,{style:{width:"26px"},variant:"outline-primary",onClick:function(e){return y()}},"\xa0"),r.a.createElement(d.a,{size:"xs",style:{fontSize:"14px",top:"9px",left:"31px"},className:"text-primary position-absolute",icon:f.d}),r.a.createElement(E.a,{style:{width:"26px"},variant:"outline-primary rounded-right",onClick:function(e){return function(e){e.preventDefault(),t.remove(a.name)}(e)}},"\xa0"),r.a.createElement(d.a,{size:"xs",style:{fontSize:"14px",top:"9px",left:"58px"},className:"text-primary position-absolute",icon:f.f})),"\xa0 \xa0",r.a.createElement(E.a,{size:"sm",variant:"primary font-weight-bold",onClick:function(e){return window.open(a.link,"_blank")}},"\xa0GO\xa0"))))))})))),y=Object(m.a)((function(e){var t=e.items;return r.a.createElement("div",{className:"mt-2 mb-3"},t.map((function(e,t){return r.a.createElement(j,{key:"item-".concat(e.name),index:t,value:e.name,data:e})})))})),O=Object(i.b)("schedule")(Object(i.c)((function(e){var t=e.schedule;return r.a.createElement("div",{className:"noselect"},r.a.createElement(y,{items:t.subjectStore.toJS(),onSortEnd:function(e){var a=e.oldIndex,n=e.newIndex;t.subjectStore=u()(t.subjectStore,a,n)}}))}))),x=Object(i.b)("schedule")(Object(i.c)((function(e){var t=e.schedule,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],i=l[1],m=Object(n.useState)(""),s=Object(o.a)(m,2),u=s[0],d=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(p.a,{type:"text",className:"",placeholder:"\uacfc\ubaa9\uba85",value:c,onChange:function(e){return i(e.target.value)}}),r.a.createElement(p.a,{type:"text",className:"",placeholder:"Webex \ub9c1\ud06c",value:u,onChange:function(e){return d(e.target.value)}}),r.a.createElement(b.a.Append,null,r.a.createElement(E.a,{className:"",onClick:function(e){t.add(c,u)&&(i(""),d(""))},variant:"outline-secondary"},"\ucd94\uac00"))))}))),w=a(28),S=a.n(w),k=a(29),N=a.n(k),z=a(19),C=a(30),I=a.n(C),T=Object(i.b)("schedule")(Object(i.c)((function(e){var t=e.schedule,a=Object(n.useState)(!t.alarm),l=Object(o.a)(a,2),c=l[0],i=l[1],m=r.a.createElement(r.a.Fragment,null),s=null,u=Object(n.useRef)(null),b=Object(n.useState)([r.a.createElement(r.a.Fragment,null),r.a.createElement(E.a,{className:"font-weight-bold",size:"",variant:"primary",disabled:!0},"\xa0GO\xa0")]),p=Object(o.a)(b,2),g=p[0],h=p[1],v=Object(n.useState)(r.a.createElement(r.a.Fragment,null)),j=Object(o.a)(v,2),y=j[0],O=j[1],x=function(){u.current.audioEl.current.pause(),u.current.audioEl.current.load(),O(r.a.createElement(r.a.Fragment,null))};return m=t.alarm?r.a.createElement(E.a,{style:{width:"30px"},className:"bg-primary pr-0 pl-0",size:"sm",onClick:function(){t.alarm=!1,x()}},r.a.createElement(d.a,{icon:z.a})):r.a.createElement(E.a,{style:{width:"30px"},className:"bg-secondary pr-0 pl-0",size:"sm",onClick:function(){return t.alarm=!0}},r.a.createElement(d.a,{icon:z.b})),Object(n.useEffect)((function(){u.current.audioEl.current.loop=!0;var e=setInterval((function(){var e=new Date;e.setTime(e.getTime()+6e5);var a=t.getTime().find((function(t){return t[0]===e.getDay()&&t[1]===e.getHours()-8}));if(a){var n=t.subjectStore.find((function(e){return e.name===a[2]}));h([r.a.createElement("span",{className:"font-weight-bold align-self-center mr-2",style:{fontSize:"large"}}," ",n.name," "),r.a.createElement(E.a,{className:"font-weight-bold",size:"",variant:"primary",onClick:function(e){x(),window.open(n.link,"_blank")}},"\xa0GO\xa0")])}else h([r.a.createElement("span",{className:"font-weight-bold align-self-center mr-2",style:{fontSize:"large"}}," \uacf5\uac15\uc785\ub2c8\ub2e4 "),r.a.createElement(E.a,{className:"font-weight-bold",size:"",variant:"primary",disabled:!0},"\xa0GO\xa0")]);e.setTime(e.getTime()-42e4);var l=e.getHours(),c=t.getTime().find((function(t){return t[0]===e.getDay()&&t[1]===l-8}));t.alarm&&(c&&s&&s!=l&&(u.current.audioEl.current.play(),O(r.a.createElement(E.a,{className:"mr-1",size:"",variant:"danger",onClick:function(){return x()}},r.a.createElement(d.a,{icon:f.a})))),s=l)}),1e3);return function(){clearInterval(e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"dimScreen",className:"noselect",onClick:function(){return i(!0)},hidden:c},r.a.createElement("h4",{id:"floatingText",className:"font-weight-bold"},"\uc54c\ub78c \uc815\uc0c1 \uc791\ub3d9\uc744 \uc704\ud574 ",r.a.createElement("br",null),"\ud654\uba74\uc744 \ud074\ub9ad\ud574 \uc8fc\uc138\uc694")),r.a.createElement(N.a,{src:I.a,ref:u}),r.a.createElement("div",{className:"mb-2 d-flex mt-1 mr-1 justify-content-between noselect"},r.a.createElement("span",{className:"align-self-center text-primary flex-grow-1 ml-1 font-weight-bold",style:{fontSize:"20px"}},r.a.createElement("span",{className:"border border-primary rounded pr-1 pl-1 mr-1"},"HI"),"SCHEDULE"),r.a.createElement("span",{className:"mr-3"},r.a.createElement(E.a,{className:"ml-1",variant:"outline-primary",size:"sm",onClick:function(){return window.open("http://www.hongik.ac.kr/","_blank")}},r.a.createElement(d.a,{icon:f.g}),"\xa0\ud64d"),r.a.createElement(E.a,{className:"ml-1",variant:"outline-primary",size:"sm",onClick:function(){return window.open("https://cn.hongik.ac.kr/","_blank")}},r.a.createElement(d.a,{icon:f.e}),"\xa0\ud074"),r.a.createElement(E.a,{className:"ml-1",variant:"outline-primary",size:"sm",onClick:function(){return window.open("https://everytime.kr/","_blank")}},r.a.createElement(d.a,{icon:f.b}),"\xa0\uc5d0")),r.a.createElement("span",{className:"text-primary align-self-center mr-1",style:{fontSize:"11px"}},"57\ubd84 \uc54c\ub78c"),r.a.createElement("div",null,m)),r.a.createElement("div",{className:"noselect border border-primary rounded p-2 d-flex mt-3 mb-4 justify-content-between"},r.a.createElement(S.a,{className:"flex-grow-1 ml-1 align-self-center",style:{fontSize:"large"},format:"MM-DD HH:mm:ss",ticking:!0}),g[0],y,g[1]))}))),L=a(67),_=Object(i.b)("schedule")(Object(i.c)((function(e){for(var t=e.schedule,a=e.index,n=e.timeList,l=[],c=function(e){t.selected&&"select"===t.selected[1]&&t.toggleTime(t.selected[0],[e.target.getAttribute("col"),e.target.getAttribute("row")])},i=function(e){var t=n.find((function(t){return t[0]==e&&t[1]==a}));t?l.push(r.a.createElement("td",{key:e,style:{backgroundColor:"#d7eaff"},row:a,col:e,onClick:function(e){return c(e)}},t[2])):l.push(r.a.createElement("td",{key:e,row:a,col:e,onClick:function(e){return c(e)}}))},o=1;o<7;o++)i(o);return r.a.createElement("tr",null,r.a.createElement("td",null,a),l)}))),J=Object(i.b)("schedule")(Object(i.c)((function(e){var t=e.schedule.getTime();return r.a.createElement(L.a,{bordered:!0,className:"noselect text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"\uc6d4"),r.a.createElement("th",null,"\ud654"),r.a.createElement("th",null,"\uc218"),r.a.createElement("th",null,"\ubaa9"),r.a.createElement("th",null,"\uae08"),r.a.createElement("th",null,"\ud1a0"))),r.a.createElement("tbody",null,r.a.createElement(_,{timeList:t,index:1}),r.a.createElement(_,{timeList:t,index:2}),r.a.createElement(_,{timeList:t,index:3}),r.a.createElement(_,{timeList:t,index:4}),r.a.createElement(_,{timeList:t,index:5}),r.a.createElement(_,{timeList:t,index:6}),r.a.createElement(_,{timeList:t,index:7}),r.a.createElement(_,{timeList:t,index:8}),r.a.createElement(_,{timeList:t,index:9}),r.a.createElement(_,{timeList:t,index:10}),r.a.createElement(_,{timeList:t,index:11}),r.a.createElement(_,{timeList:t,index:12})))})));a(63);var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App noselect",class:"container border border-primary pt-2 pb-3 pl-3 pr-3"},r.a.createElement(T,null),r.a.createElement(O,null),r.a.createElement(J,null),r.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F,H,A,G,W,M,R,V,B,U,$,q=a(31),K=a(10),P=a(32),Q=a(33),X=a(11),Y=(a(64),a(2));var Z=new(F=function(){function e(){Object(P.a)(this,e),Object(K.a)(this,"load",H,this),Object(K.a)(this,"selected",A,this),Object(K.a)(this,"subjectStore",G,this),Object(K.a)(this,"alarm",W,this),Object(K.a)(this,"add",M,this),Object(K.a)(this,"remove",R,this),Object(K.a)(this,"edit",V,this),Object(K.a)(this,"addTime",B,this),Object(K.a)(this,"removeTime",U,this),Object(K.a)(this,"toggleTime",$,this),localStorage.getItem("alarm")&&(this.alarm=JSON.parse(localStorage.getItem("alarm"))),localStorage.getItem("data")&&(this.subjectStore=JSON.parse(localStorage.getItem("data")))}return Object(Q.a)(e,[{key:"_checkValid",value:function(e,t,a){return e.length<1?(alert("\uacfc\ubaa9\uba85\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),!1):-1==this.subjectStore.findIndex((function(t){return t.name===e}))||a&&a===e?(n=t,!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(n)||(alert("\uc62c\ubc14\ub978 URL\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),!1)):(alert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uacfc\ubaa9\uba85\uc785\ub2c8\ub2e4."),!1);var n}},{key:"getTime",value:function(){var e,t=[],a=Object(q.a)(this.subjectStore);try{var n=function(){var a=e.value;t=t.concat(a.time.map((function(e){return[e[0],e[1],a.name]})))};for(a.s();!(e=a.n()).done;)n()}catch(r){a.e(r)}finally{a.f()}return t}}]),e}(),H=Object(X.a)(F.prototype,"load",[Y.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),A=Object(X.a)(F.prototype,"selected",[Y.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=Object(X.a)(F.prototype,"subjectStore",[Y.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),W=Object(X.a)(F.prototype,"alarm",[Y.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),M=Object(X.a)(F.prototype,"add",[Y.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){return t=t.trim(),a=a.trim(),!!e._checkValid(t,a)&&(e.subjectStore.push({name:t,link:a,time:[]}),!0)}}}),R=Object(X.a)(F.prototype,"remove",[Y.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){if(!confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))return!1;e.subjectStore.splice(e.subjectStore.findIndex((function(e){return e.name===t})),1)}}}),V=Object(X.a)(F.prototype,"edit",[Y.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a,n){if(!e._checkValid(a,n,t))return!1;var r=e.subjectStore.findIndex((function(e){return e.name===t}));return e.subjectStore[r].name=a,e.subjectStore[r].link=n,!0}}}),B=Object(X.a)(F.prototype,"addTime",[Y.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){if(-1===e.getTime().findIndex((function(e){return e[0]===a[0]&&e[1]===a[1]}))){var n=e.subjectStore.findIndex((function(e){return e.name===t}));e.subjectStore[n].time.push(a)}}}}),U=Object(X.a)(F.prototype,"removeTime",[Y.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){var n=e.subjectStore.findIndex((function(e){return e.name===t})),r=e.subjectStore[n].time.findIndex((function(e){return e[0]===a[0]&&e[1]===a[1]}));return-1!=r&&(e.subjectStore[n].time.splice(r,1),!0)}}}),$=Object(X.a)(F.prototype,"toggleTime",[Y.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){a=[Number(a[0]),Number(a[1])],e.removeTime(t,a)||e.addTime(t,a)}}}),F);Object(Y.g)((function(){localStorage.setItem("data",JSON.stringify(Z.subjectStore.toJS())),localStorage.setItem("alarm",JSON.stringify(Z.alarm))}));var ee=Z;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{schedule:ee},r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.b0393253.chunk.js.map