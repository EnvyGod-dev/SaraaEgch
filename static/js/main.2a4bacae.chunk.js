(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/img-card (1).90e104ca.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-card (3).27237b69.jpg"},,function(e,t,a){e.exports=a.p+"static/media/img-card (2).c71e03ba.jpg"},,,,,function(e,t,a){e.exports=a.p+"static/media/img-card (4).aaa800ff.jpg"},,,,function(e,t,a){e.exports=a.p+"static/media/aylaluud.9e90e274.jpg"},function(e,t,a){e.exports=a.p+"static/media/sum.8c199539.jpg"},function(e,t,a){e.exports=a.p+"static/media/camp.aaa800ff.jpg"},function(e,t,a){e.exports=a.p+"static/media/mountain.27237b69.jpg"},function(e,t,a){e.exports=a.p+"static/media/an.d7f46182.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-card (5).74a3598f.jpg"},,function(e,t,a){e.exports=a(47)},,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),l=a.n(c),i=a(4),o=a(5),s=a(7),m=a(6),u=a(8),d=(a(10),a(31)),h=a(9),p=a(3),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(h.a)(Object(h.a)(a))),a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.t,{color:"faded",dark:!0,expand:"md",fixed:"top",className:"navDark"},r.a.createElement(p.p,null,r.a.createElement(p.u,{href:"#about"},"ishitour Tourism"),r.a.createElement(p.v,{onClick:this.toggle}),r.a.createElement(p.o,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(p.q,{className:"ml-auto",navbar:!0},r.a.createElement(p.r,null,r.a.createElement(p.s,{href:"#about"},"\u0411\u0438\u0434\u043d\u0438\u0439 \u0442\u0443\u0445\u0430\u0439")),r.a.createElement(p.r,null,r.a.createElement(p.s,{href:"#packageBody"},"\u0411\u0430\u0433\u0446")),r.a.createElement(p.r,null,r.a.createElement(p.s,{href:"#servicesBody"},"\u04ae\u0439\u0447\u0438\u043b\u0433\u044d\u044d")),r.a.createElement(p.r,null,r.a.createElement(p.s,{href:"#contactBody"},"\u0411\u0438\u0434\u044d\u043d\u0442\u044d\u0439 \u0445\u043e\u043b\u0431\u043e\u0433\u0434\u043e\u0445")))))))}}]),t}(r.a.Component),f=function(){return r.a.createElement("div",null,r.a.createElement("main",{className:"cover-page",id:"hero"},r.a.createElement("section",{className:"wrapped-page"},r.a.createElement("div",{className:"item-center"},r.a.createElement("h1",null,"ishitour"),r.a.createElement("h3",null,"\u0416\u0443\u0443\u043b\u0447\u0438\u043d | \u0410\u044f\u043b\u0430\u043b | \u0422\u0430\u043d\u0438\u043d \u043c\u044d\u0434\u044d\u0445\u04af\u0439"),r.a.createElement(p.b,{outline:!0,color:"warning",href:"#about"},"\u0426\u0430\u0430\u0448 \u04af\u0437\u044d\u0445")))))},g=a(25),v=a.n(g),b=a(26),y=a.n(b),j=a(27),k=a.n(j),x=a(28),O=a.n(x),w=a(29),N=a.n(w),C=[{src:y.a,altText:"",caption:"\u0428\u0430\u0448\u043d\u044b \u0430\u044f\u043b\u0430\u043b"},{src:N.a,altText:"",caption:"\u0410\u043d\u0433\u0438\u0439\u043d \u0430\u044f\u043b\u0430\u043b"},{src:k.a,altText:"",caption:"\u041a\u0430\u043c\u043f"},{src:v.a,altText:"",caption:"\u0410\u044f\u043b\u0430\u043b"},{src:O.a,altText:"",caption:"\u0423\u0443\u043b\u0438\u0439\u043d \u0430\u044f\u043b\u0430\u043b"}],L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(h.a)(Object(h.a)(a))),a.previous=a.previous.bind(Object(h.a)(Object(h.a)(a))),a.goToIndex=a.goToIndex.bind(Object(h.a)(Object(h.a)(a))),a.onExiting=a.onExiting.bind(Object(h.a)(Object(h.a)(a))),a.onExited=a.onExited.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===C.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?C.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=C.map(function(t){return r.a.createElement(p.m,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},r.a.createElement("img",{src:t.src,alt:t.altText,className:"img-carousel"}),r.a.createElement(p.j,{captionText:t.altText,captionHeader:t.caption}))});return r.a.createElement(p.i,{activeIndex:t,next:this.next,previous:this.previous},r.a.createElement(p.l,{items:C,activeIndex:t,onClickHandler:this.goToIndex}),a,r.a.createElement(p.k,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(p.k,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(n.Component);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var T=r.a.createElement("circle",{cx:12,cy:8,r:7}),B=r.a.createElement("polyline",{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}),I=function(e){return r.a.createElement("svg",W({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-award"},e),T,B)};a.p;function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var M=r.a.createElement("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),S=function(e){return r.a.createElement("svg",P({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-shield"},e),M)};a.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var q=r.a.createElement("circle",{cx:12,cy:12,r:10}),A=r.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}),H=function(e){return r.a.createElement("svg",z({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-compass"},e),q,A)};a.p;function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var D=r.a.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}),J=function(e){return r.a.createElement("svg",V({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-heart"},e),D)},Q=(a.p,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"about"},r.a.createElement(L,null),r.a.createElement("div",{className:"subComponent",id:"aboutBody"},r.a.createElement(p.p,null,r.a.createElement("header",{className:"headerTitle text-center"},r.a.createElement("h1",null,"\u0411\u0438\u0434\u043d\u0438\u0439 \u0430\u044f\u043b\u0430\u043b"),r.a.createElement("p",null,"\u041c\u043e\u043d\u0433\u043e\u043b \u043e\u0440\u043d\u044b \u04af\u0437\u044d\u0441\u0433\u044d\u043b\u044d\u043d\u0442 \u0431\u0430\u0439\u0433\u0430\u043b\u0438\u0439\u0433 \u0436\u0443\u0443\u043b\u0447\u0438\u0434\u0430\u0434 \u0445\u04af\u0440\u0433\u044d\u043d\u044d")),r.a.createElement("section",{className:"svg-group text-center subComponent"},r.a.createElement(p.w,null,r.a.createElement(p.n,{lg:"3",md:"6",sm:"6"},r.a.createElement("div",{className:"svg-card"},r.a.createElement(I,{width:"48",height:"48",strokeWidth:"1"}),r.a.createElement("p",null,"Lorem"))),r.a.createElement(p.n,{lg:"3",md:"6",sm:"6"},r.a.createElement("div",{className:"svg-card"},r.a.createElement(S,{width:"48",height:"48",strokeWidth:"1"}),r.a.createElement("p",null,"Lorem"))),r.a.createElement(p.n,{lg:"3",md:"6",sm:"6"},r.a.createElement("div",{className:"svg-card"},r.a.createElement(J,{width:"48",height:"48",strokeWidth:"1"}),r.a.createElement("p",null,"\u0421\u0430\u0439\u043d \u043d\u0430\u0439\u0434\u0432\u0430\u0440\u0442\u0430\u0439 \u0430\u044f\u043b\u0430\u043b\u044b\u043d \u0430\u0433\u0435\u043d\u0442"))),r.a.createElement(p.n,{lg:"3",md:"6",sm:"6"},r.a.createElement("div",{className:"svg-card"},r.a.createElement(H,{width:"48",height:"48",strokeWidth:"1"}),r.a.createElement("p",null,"lorem"))))))))}}]),t}(n.Component)),R=function(e){var t=e.tourcard,a=t.img,n=t.alt,c=t.title,l=t.subtitle;return r.a.createElement(p.c,null,r.a.createElement(p.f,{top:!0,width:"100%",src:a,alt:n}),r.a.createElement(p.d,null,r.a.createElement(p.b,{outline:!0,color:"secondary",className:"float-right",href:"tour"},"\u0426\u0430\u0430\u0448 \u04af\u0437\u044d\u0445"),r.a.createElement(p.h,null,c),r.a.createElement(p.g,null,l)))},U=a(13),$=a.n(U),F=a(16),G=a.n(F),K=a(14),X=a.n(K),Y=[{id:1,category:["\u0428\u0430\u0448\u043d\u044b \u0430\u044f\u043b\u0430\u043b"],img:$.a,alt:"",title:"\u0428\u0430\u0448\u043d\u044b \u0430\u044f\u043b\u0430\u043b",subtitle:""},{id:2,category:["\u0410\u043d\u0433\u0438\u0439\u043d \u0430\u044f\u043b\u0430\u043b"],img:G.a,alt:"",title:"\u0410\u043d\u0433\u0438\u0439\u043d \u0430\u044f\u043b\u0430\u043b",subtitle:""},{id:3,category:["\u041d\u043e\u043c\u0430\u0434\u0438\u043a \u0430\u044f\u043b\u0430\u043b,"],img:X.a,alt:"",title:"\u041d\u043e\u043c\u0430\u0434\u0438\u043a \u0430\u044f\u043b\u0430\u043b",subtitle:""}],Z=["\u0411\u04af\u0433\u0434","\u0428\u0430\u0448\u043d\u044b \u0430\u044f\u043b\u0430\u043b","\u041d\u043e\u043c\u0430\u0434\u0438\u043a \u0430\u044f\u043b\u0430\u043b","\u0410\u043d\u0433\u0438\u0439\u043d \u0430\u044f\u043b\u0430\u043b"],_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={cards:[],category:"\u0411\u04af\u0433\u0434"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({cards:Y})}},{key:"render",value:function(){var e=this,t=this.state,a=t.cards,n=t.category;return r.a.createElement("div",{className:"subComponent-lg",id:"packageBody"},r.a.createElement(p.p,null,r.a.createElement("header",{className:"headerTitle text-center"},r.a.createElement("h1",null,"\u0410\u044f\u043b\u0430\u043b\u044b\u043d \u0431\u0430\u0433\u0446"),r.a.createElement("p",null,"\u0422\u0430\u0432 \u0442\u0443\u0445\u0442\u0430\u0439 \u0430\u044f\u043b\u0430\u0445 \u043e\u0440\u0447\u0438\u043d")),r.a.createElement("section",{className:"packageBody text-center"},Z.map(function(t,a){return r.a.createElement(p.a,{key:a,href:"",color:t===n?"dark":"light",onClick:function(){return e.setState({category:t})}},t)}),r.a.createElement(p.w,{className:"text-left"},r.a.createElement(p.e,null,"\u0411\u04af\u0433\u0434"!==n?a.map(function(e){return e.category.map(function(t){return t===n?r.a.createElement(R,{key:e.id,tourcard:e}):null})}):a.map(function(e){return r.a.createElement(R,{key:e.id,tourcard:e})}))))))}}]),t}(n.Component);function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var te=r.a.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),ae=r.a.createElement("polyline",{points:"17 6 23 6 23 12"}),ne=function(e){return r.a.createElement("svg",ee({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-trending-up"},e),te,ae)};a.p;function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var ce=r.a.createElement("path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}),le=r.a.createElement("line",{x1:4,y1:22,x2:4,y2:15}),ie=function(e){return r.a.createElement("svg",re({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-flag"},e),ce,le)};a.p;function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var se=r.a.createElement("rect",{x:2,y:3,width:20,height:14,rx:2,ry:2}),me=r.a.createElement("line",{x1:8,y1:21,x2:16,y2:21}),ue=r.a.createElement("line",{x1:12,y1:17,x2:12,y2:21}),de=function(e){return r.a.createElement("svg",oe({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-monitor"},e),se,me,ue)};a.p;function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var pe=r.a.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),Ee=r.a.createElement("circle",{cx:12,cy:10,r:3}),fe=function(e){return r.a.createElement("svg",he({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-map-pin"},e),pe,Ee)},ge=(a.p,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapped-services"},r.a.createElement("div",{className:"subComponent",id:"servicesBody"},r.a.createElement(p.p,null,r.a.createElement("section",{className:"svg-group text-center"},r.a.createElement(p.w,null,r.a.createElement(p.n,{lg:"3",md:"6",sm:"6"},r.a.createElement("div",{className:"svg-card-2"},r.a.createElement(ne,{width:"50",height:"55",strokeWidth:"1"}),r.a.createElement("p",null,"\u0428\u0438\u043b\u0434\u044d\u0433 \u0430\u044f\u043b\u043b\u044b\u0433 \u0441\u0443\u0440\u0442\u0430\u043b\u0447\u043b\u0430\u0445"))),r.a.createElement(p.n,{lg:"3",md:"6",sm:"6"},r.a.createElement("div",{className:"svg-card-2"},r.a.createElement(de,{width:"55",height:"55",strokeWidth:"1"}),r.a.createElement("p",null,"\u0416\u0443\u0443\u043b\u0447\u043d\u044b \u0446\u044d\u0433\u0438\u0439\u0433 \u0445\u0430\u0440\u0443\u0443\u043b\u0430\u0445"))),r.a.createElement(p.n,{lg:"3",md:"6",sm:"6"},r.a.createElement("div",{className:"svg-card-2"},r.a.createElement(ie,{width:"55",height:"55",strokeWidth:"1"}),r.a.createElement("p",null,"\u0428\u0438\u043b\u0434\u044d\u0433 \u0430\u044f\u043b\u043b\u044b\u043d \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0443\u0443\u0434"))),r.a.createElement(p.n,{lg:"3",md:"6",sm:"6"},r.a.createElement("div",{className:"svg-card-2"},r.a.createElement(fe,{width:"55",height:"55",strokeWidth:"1"}),r.a.createElement("p",null,"\u0410\u044f\u043b\u0430\u043b \u0436\u0443\u0443\u043b\u0447\u043b\u0430\u043b\u044b\u043d \u0445\u04e9\u0442\u04e9\u0447"))))))))}}]),t}(n.Component));function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var be=r.a.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}),ye=function(e){return r.a.createElement("svg",ve({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-phone"},e),be)};a.p;function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var ke=r.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),xe=r.a.createElement("polyline",{points:"22,6 12,13 2,6"}),Oe=function(e){return r.a.createElement("svg",je({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-mail"},e),ke,xe)},we=(a.p,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"subComponent-lg",id:"contactBody"},r.a.createElement(p.p,null,r.a.createElement("header",{className:"headerTitle text-center"},r.a.createElement("h1",null,"\u0431\u0438\u0434\u044d\u043d\u0442\u044d\u0439 \u0445\u043e\u043b\u0431\u043e\u0433\u0434\u043e\u0445"),r.a.createElement("p",null,"\u042d\u043d\u0434 \u0434\u0430\u0440\u0436 \u0445\u043e\u043b\u0431\u043e\u0433\u0434\u043e\u043d\u043e \u0443\u0443")),r.a.createElement("section",{className:"svg-group text-center"},r.a.createElement(p.w,null,r.a.createElement(p.n,{lg:"4",md:"4"},r.a.createElement("div",{className:"svg-card-3"},r.a.createElement(ye,{width:"50",height:"55",strokeWidth:"1"}),r.a.createElement("p",null,"91117376"))),r.a.createElement(p.n,{lg:"4",md:"4"},r.a.createElement("div",{className:"svg-card-3"},r.a.createElement(fe,{width:"55",height:"55",strokeWidth:"1"}),r.a.createElement("p",null,"\u0423\u043b\u0430\u0430\u043d\u0431\u0430\u0430\u0442\u0430\u0440 \u0445\u043e\u0442, \u041c\u043e\u043d\u0433\u043e\u043b \u0443\u043b\u0441"))),r.a.createElement(p.n,{lg:"4",md:"4"},r.a.createElement("div",{className:"svg-card-3"},r.a.createElement(Oe,{width:"55",height:"55",strokeWidth:"1"}),r.a.createElement("p",null,"ishitour2021@gmail.com"))))),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("section",{className:"msg text-center"},r.a.createElement("form",{action:""},r.a.createElement(p.w,null,r.a.createElement(p.n,{sm:"6"},r.a.createElement("input",{type:"text",name:"Name",id:"reviewer-name",placeholder:"\u0422\u0430\u043d\u044b \u043d\u044d\u0440",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"Email",id:"reviewer-email",placeholder:"\u0422\u0430\u043d\u044b \u0438-\u043c\u044d\u0439\u043b \u0445\u0430\u044f\u0433",required:!0})),r.a.createElement(p.n,null,r.a.createElement("textarea",{name:"Message",id:"reviewer-message",rows:"4",placeholder:"\u0421\u044d\u0442\u0433\u044d\u0433\u0434\u044d\u043b"}),r.a.createElement(p.b,{outline:!0,color:"light",className:"float-left"},"\u0418\u043b\u0433\u044d\u044d\u0445")))))))}}]),t}(n.Component)),Ne=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"subComponent-lg",id:"footerBody"},r.a.createElement(p.p,null,r.a.createElement("header",{className:"headerTitle text-center"},r.a.createElement("p",null,r.a.createElement("b",null,"\u0421\u043e\u0448\u0438\u0430\u043b \u0445\u0430\u044f\u0433\u0443\u0443\u0434"))),r.a.createElement("footer",{className:"svg-group text-center"},r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("p",null,"copyright 2021 | ishitour Tourism Mongolia"))))}}]),t}(n.Component),Ce=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"home"},r.a.createElement(f,null),r.a.createElement(Q,null),r.a.createElement(_,null),r.a.createElement(ge,null),r.a.createElement(we,null),r.a.createElement(Ne,null))}}]),t}(n.Component),Le=a(21),We=a.n(Le),Te=a(30),Be=a.n(Te),Ie=function(){return r.a.createElement("div",{className:"subComponent"},r.a.createElement(p.p,null,r.a.createElement("section",{className:"tour-cover item-center"},r.a.createElement("img",{src:$.a,alt:""}),r.a.createElement("h1",null,"\u0428\u0430\u0448\u043d\u044b \u0430\u044f\u043b\u0430\u043b")),r.a.createElement("section",{className:"tour-info"},r.a.createElement(p.w,null,r.a.createElement(p.n,{sm:"8"},r.a.createElement("div",{className:"tour-desc"},r.a.createElement("p",null),r.a.createElement("p",null,"lorem"))),r.a.createElement(p.n,{sm:"4"},r.a.createElement("div",{className:"tour-gallery"},r.a.createElement("a",{href:$.a},r.a.createElement("img",{src:$.a,alt:""})),r.a.createElement("a",{href:G.a},r.a.createElement("img",{src:Be.a,alt:""})),r.a.createElement("a",{href:X.a},r.a.createElement("img",{src:X.a,alt:""})),r.a.createElement("a",{href:We.a},r.a.createElement("img",{src:We.a,alt:""}))))))),r.a.createElement("section",{className:"reviews"},r.a.createElement(p.p,null,r.a.createElement("section",{className:"tour-msg text-center"},r.a.createElement("h1",null,"\u0428\u04af\u04af\u043c\u0436, \u0441\u0430\u043d\u0430\u043b"),r.a.createElement("p",null,"\u0411\u0438\u0434 \u0442\u0430\u043d\u0430\u0430\u0441 \u044f\u043c\u0430\u0440 \u043d\u044d\u0433 \u0437\u04af\u0439\u043b \u0441\u043e\u043d\u0441\u043e\u0445\u043e\u0434 \u0442\u0430\u0430\u0442\u0430\u0439 \u0431\u0430\u0439\u043d\u0430."),r.a.createElement("form",{action:""},r.a.createElement(p.w,null,r.a.createElement(p.n,{sm:"6"},r.a.createElement("input",{type:"text",name:"Name",id:"reviewer-name",placeholder:"\u0422\u0430\u043d\u044b \u043d\u044d\u0440",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"Email",id:"reviewer-email",placeholder:"\u0422\u0430\u043d\u044b \u0438-\u043c\u044d\u0439\u043b \u0445\u0430\u044f\u0433",required:!0})),r.a.createElement(p.n,null,r.a.createElement("textarea",{name:"Message",id:"reviewer-message",rows:"4",placeholder:"\u0422\u0430\u043d\u044b \u0441\u044d\u0442\u0433\u044d\u0433\u0434\u044d\u043b"}))),r.a.createElement(p.b,{outline:!0,color:"secondary",className:"float-right"},"\u0418\u043b\u0433\u044d\u044d\u0445"))))))},Pe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(d.a,null,r.a.createElement(Ce,{path:"/"}),r.a.createElement(Ie,{path:"tour"})))}}]),t}(n.Component),Me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Se(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(43),a(45);l.a.render(r.a.createElement(Pe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/tourism-app-react",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/tourism-app-react","/service-worker.js");Me?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Se(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Se(e)})}}()}],[[32,2,1]]]);
//# sourceMappingURL=main.2a4bacae.chunk.js.map