(this["webpackJsonphongik-schedule"]=this["webpackJsonphongik-schedule"]||[]).push([[0],{28:function(e,t,n){e.exports=n(57)},33:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),l=n(4),o=(n(33),n(34),n(35),n(8)),u=n(16),m=n(22),s=n.n(m),d=n(60),b=n(61),f=n(62),h=n(58),E=Object(l.b)("schedule")(Object(l.c)((function(e){var t=e.schedule,n=e.data,c=e.toggleEdit,i=n.name,l=Object(a.useState)(n.name),u=Object(o.a)(l,2),m=u[0],s=u[1],h=Object(a.useState)(n.link),E=Object(o.a)(h,2),g=E[0],v=E[1];return r.a.createElement("div",null,r.a.createElement(d.a,{size:"sm",className:"m-0"},r.a.createElement(b.a,{type:"text",className:"",placeholder:"\uacfc\ubaa9\uba85",value:m,onChange:function(e){return s(e.target.value)}}),r.a.createElement(b.a,{type:"text",className:"",placeholder:"Webex \ub9c1\ud06c",value:g,onChange:function(e){return v(e.target.value)}}),r.a.createElement(d.a.Append,null,r.a.createElement(f.a,{className:"",onClick:function(e){t.edit(i,m,g)&&c()},variant:"outline-secondary"},"\ud655\uc778"))))}))),g=function(e){var t=e.data,n=e.toggleSelect;return r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("span",{className:"align-self-center font-weight-bold ml-1"},t.name),"\xa0\xa0\xa0",r.a.createElement(f.a,{size:"sm",variant:"primary",onClick:function(e){return n()}},"\uc120\ud0dd \uc644\ub8cc"))},v=Object(u.b)(Object(l.b)("schedule")(Object(l.c)((function(e){var t=e.schedule,n=e.data,c=Object(a.useState)(!1),i=Object(o.a)(c,2),l=i[0],u=i[1],m=Object(a.useState)(!1),s=Object(o.a)(m,2),d=s[0],b=s[1],v=function(){u(!l),t.selected=l?null:[n.name,"edit"]},j=function(e){b(!d),t.selected=d?null:[n.name,"select"]};return r.a.createElement("form",null,r.a.createElement("fieldset",{disabled:t.selected&&t.selected[0]!==n.name},r.a.createElement("div",{className:"m-0 mb-2 pl-2 pr-2 pb-1 pt-1 border border-primary rounded"},l?r.a.createElement(E,{data:n,toggleEdit:function(e){return v()}}):d?r.a.createElement(g,{data:n,toggleSelect:function(e){return j()}}):r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("span",{className:"align-self-center font-weight-bold ml-1"},n.name),"\xa0\xa0\xa0",r.a.createElement("div",null,r.a.createElement(h.a,{size:"sm"},r.a.createElement(f.a,{variant:"border border-primary",onClick:function(e){return j()}},"\uc120\ud0dd"),r.a.createElement(f.a,{variant:"border border-primary",onClick:function(e){return v()}},"\uc218\uc815"),r.a.createElement(f.a,{variant:"border border-primary",onClick:function(e){return function(e){e.preventDefault(),t.remove(n.name)}(e)}},"X")),"\xa0 \xa0",r.a.createElement(f.a,{size:"sm",variant:"primary font-weight-bold",onClick:function(e){return window.open(n.link,"_blank")}},"\xa0GO\xa0"))))))})))),j=Object(u.a)((function(e){var t=e.items;return r.a.createElement("div",{className:"mt-2 mb-3"},t.map((function(e,t){return r.a.createElement(v,{key:"item-".concat(e.name),index:t,value:e.name,data:e})})))})),p=Object(l.b)("schedule")(Object(l.c)((function(e){var t=e.schedule;return r.a.createElement("div",{className:"noselect"},r.a.createElement(j,{items:t.subjectStore.toJS(),onSortEnd:function(e){var n=e.oldIndex,a=e.newIndex;t.subjectStore=s()(t.subjectStore,n,a)}}))}))),O=Object(l.b)("schedule")(Object(l.c)((function(e){var t=e.schedule,n=Object(a.useState)(""),c=Object(o.a)(n,2),i=c[0],l=c[1],u=Object(a.useState)(""),m=Object(o.a)(u,2),s=m[0],h=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(b.a,{type:"text",className:"",placeholder:"\uacfc\ubaa9\uba85",value:i,onChange:function(e){return l(e.target.value)}}),r.a.createElement(b.a,{type:"text",className:"",placeholder:"Webex \ub9c1\ud06c",value:s,onChange:function(e){return h(e.target.value)}}),r.a.createElement(d.a.Append,null,r.a.createElement(f.a,{className:"",onClick:function(e){t.add(i,s)&&(l(""),h(""))},variant:"outline-secondary"},"\ucd94\uac00"))))}))),y=n(24),S=n.n(y),w=Object(l.b)("schedule")(Object(l.c)((function(e){var t=e.schedule,n=new Date;n.setTime(n.getTime()+6e5);var c=n.getDay(),i=n.getHours(),l=Object(a.useState)(r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{size:"",variant:"primary",disabled:!0},"\xa0GO\xa0"))),u=Object(o.a)(l,2),m=u[0],s=u[1];return Object(a.useEffect)((function(){var e=setInterval((function(){var e=t.getTime().find((function(e){return e[0]===c&&e[1]===i-8}));if(e){var n=t.subjectStore.find((function(t){return t.name===e[2]}));s(r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"font-weight-bold align-self-center mr-2",style:{fontSize:"large"}}," ",n.name," "),r.a.createElement(f.a,{size:"",variant:"primary",onClick:function(e){return window.open(n.link,"_blank")}},"\xa0GO\xa0")))}else s(r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"font-weight-bold align-self-center mr-2",style:{fontSize:"large"}}," \uacf5\uac15\uc785\ub2c8\ub2e4 "),r.a.createElement(f.a,{size:"",variant:"primary",disabled:!0},"\xa0GO\xa0")))}),1e3);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{className:"noselect border border-primary rounded mb-3 p-2 d-flex justify-content-between"},r.a.createElement(S.a,{className:"flex-grow-1 ml-1 align-self-center",style:{fontSize:"large"},format:"MM-DD HH:mm:ss",ticking:!0}),m)}))),x=n(59),k=Object(l.b)("schedule")(Object(l.c)((function(e){for(var t=e.schedule,n=e.index,a=e.timeList,c=[],i=function(e){t.selected&&"select"===t.selected[1]&&t.toggleTime(t.selected[0],[e.target.getAttribute("col"),e.target.getAttribute("row")])},l=function(e){var t=a.find((function(t){return t[0]==e&&t[1]==n}));t?c.push(r.a.createElement("td",{style:{backgroundColor:"#d7eaff"},row:n,col:e,onClick:function(e){return i(e)}},t[2])):c.push(r.a.createElement("td",{row:n,col:e,onClick:function(e){return i(e)}}))},o=1;o<7;o++)l(o);return r.a.createElement("tr",null,r.a.createElement("td",null,n),c)}))),z=Object(l.b)("schedule")(Object(l.c)((function(e){var t=e.schedule.getTime();return r.a.createElement(x.a,{bordered:!0,className:"noselect text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"\uc6d4"),r.a.createElement("th",null,"\ud654"),r.a.createElement("th",null,"\uc218"),r.a.createElement("th",null,"\ubaa9"),r.a.createElement("th",null,"\uae08"),r.a.createElement("th",null,"\ud1a0"))),r.a.createElement("tbody",null,r.a.createElement(k,{timeList:t,index:1}),r.a.createElement(k,{timeList:t,index:2}),r.a.createElement(k,{timeList:t,index:3}),r.a.createElement(k,{timeList:t,index:4}),r.a.createElement(k,{timeList:t,index:5}),r.a.createElement(k,{timeList:t,index:6}),r.a.createElement(k,{timeList:t,index:7}),r.a.createElement(k,{timeList:t,index:8}),r.a.createElement(k,{timeList:t,index:9}),r.a.createElement(k,{timeList:t,index:10}),r.a.createElement(k,{timeList:t,index:11}),r.a.createElement(k,{timeList:t,index:12})))})));n(55);var N=function(){return r.a.createElement("div",{className:"App noselect",class:"container border border-primary p-3"},r.a.createElement(w,null),r.a.createElement(p,null),r.a.createElement(z,null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C,I,T,L,_,J,A,D,F,G,W=n(25),H=n(9),M=n(15),V=n(26),B=n(10),R=(n(56),n(2));var $=new(C=function(){function e(){Object(M.a)(this,e),Object(H.a)(this,"load",I,this),Object(H.a)(this,"selected",T,this),Object(H.a)(this,"subjectStore",L,this),Object(H.a)(this,"add",_,this),Object(H.a)(this,"remove",J,this),Object(H.a)(this,"edit",A,this),Object(H.a)(this,"addTime",D,this),Object(H.a)(this,"removeTime",F,this),Object(H.a)(this,"toggleTime",G,this),localStorage.getItem("data")&&(this.subjectStore=JSON.parse(localStorage.getItem("data")))}return Object(V.a)(e,[{key:"_checkValid",value:function(e,t,n){return e.length<1?(alert("\uacfc\ubaa9\uba85\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),!1):-1==this.subjectStore.findIndex((function(t){return t.name===e}))||n&&n===e?(a=t,!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(a)||(alert("\uc62c\ubc14\ub978 URL\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),!1)):(alert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uacfc\ubaa9\uba85\uc785\ub2c8\ub2e4."),!1);var a}},{key:"getTime",value:function(){var e,t=[],n=Object(W.a)(this.subjectStore);try{var a=function(){var n=e.value;t=t.concat(n.time.map((function(e){return[e[0],e[1],n.name]})))};for(n.s();!(e=n.n()).done;)a()}catch(r){n.e(r)}finally{n.f()}return t}}]),e}(),I=Object(B.a)(C.prototype,"load",[R.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),T=Object(B.a)(C.prototype,"selected",[R.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=Object(B.a)(C.prototype,"subjectStore",[R.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),_=Object(B.a)(C.prototype,"add",[R.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){return t=t.trim(),n=n.trim(),!!e._checkValid(t,n)&&(e.subjectStore.push({name:t,link:n,time:[]}),!0)}}}),J=Object(B.a)(C.prototype,"remove",[R.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){if(!confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))return!1;e.subjectStore.splice(e.subjectStore.findIndex((function(e){return e.name===t})),1)}}}),A=Object(B.a)(C.prototype,"edit",[R.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n,a){if(!e._checkValid(n,a,t))return!1;var r=e.subjectStore.findIndex((function(e){return e.name===t}));return e.subjectStore[r].name=n,e.subjectStore[r].link=a,!0}}}),D=Object(B.a)(C.prototype,"addTime",[R.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){if(-1===e.getTime().findIndex((function(e){return e[0]===n[0]&&e[1]===n[1]}))){var a=e.subjectStore.findIndex((function(e){return e.name===t}));e.subjectStore[a].time.push(n)}}}}),F=Object(B.a)(C.prototype,"removeTime",[R.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){var a=e.subjectStore.findIndex((function(e){return e.name===t})),r=e.subjectStore[a].time.findIndex((function(e){return e[0]===n[0]&&e[1]===n[1]}));return-1!=r&&(e.subjectStore[a].time.splice(r,1),!0)}}}),G=Object(B.a)(C.prototype,"toggleTime",[R.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){n=[Number(n[0]),Number(n[1])],e.removeTime(t,n)||e.addTime(t,n)}}}),C);Object(R.g)((function(){localStorage.setItem("data",JSON.stringify($.subjectStore.toJS()))}));var U=$;i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{schedule:U},r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.56e02c88.chunk.js.map