(this["webpackJsonpding-blog"]=this["webpackJsonpding-blog"]||[]).push([[0],{31:function(n,t,e){},46:function(n,t,e){"use strict";e.r(t);var c,r,i,a,o,s,j,u,d=e(0),b=e.n(d),x=e(21),l=e.n(x),p=(e(31),e(4)),O=e(2),g=e(3),f=e(8),h=e(5),m="token",v=function(n){localStorage.setItem(m,n)},y=function(){return localStorage.getItem(m)},S=Object(d.createContext)(null),w=Object(d.createContext)(!1),C=e.p+"static/media/0613.9e26be73.jpg",L=e(1),k=g.a.div(c||(c=Object(O.a)([""]))),z=g.a.div(r||(r=Object(O.a)(["\n  height: 630px;\n  background-image: url(",");\n  position: relative;\n  top: -110px;\n"])),C),I=g.a.div(i||(i=Object(O.a)(["\n  height: 70px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  background: transparent;\n  padding: 10px;\n\n  &.navbarActive {\n    background: white;\n    transition: 2s all;\n  }\n"]))),P=g.a.div(a||(a=Object(O.a)(["\n  display: flex;\n  align-items: center;\n"]))),D=g.a.h1(o||(o=Object(O.a)(["\n  color: #625b57;\n  margin-right: 10px;\n"]))),E=g.a.div(s||(s=Object(O.a)(["\n  margin-top: 8px;\n  display: flex;\n"]))),A=Object(g.a)(f.b)(j||(j=Object(O.a)(["\n  display: flex;\n  font-size: 20px;\n  padding: 0px 8px;\n  padding-bottom: 2px;\n  cursor: pointer;\n  color: gray;\n  text-decoration: none;\n\n  & + & {\n    margin-left: 8px;\n  }\n\n  ","\n"])),(function(n){return n.$active&&"\n  font-weight: bold;\n  color: #625b57;\n  "}));function T(){var n=Object(d.useContext)(S),t=n.user,e=n.setUser,c=Object(d.useState)(!1),r=Object(p.a)(c,2),i=r[0],a=r[1],o=Object(h.g)().pathname,s=Object(h.f)(),j=function(){window.scrollY>=150?a(!0):a(!1)};Object(d.useEffect)((function(){j(),window.addEventListener("scroll",j)}),[]);return Object(L.jsxs)(k,{children:[Object(L.jsx)(z,{}),Object(L.jsxs)(I,{className:i?"navbarActive":"navbar",children:[Object(L.jsxs)(P,{children:[Object(L.jsx)(D,{children:"Mice Parade"}),Object(L.jsxs)(E,{children:[Object(L.jsx)(A,{to:"/",$active:"/"===o,children:"Home"}),Object(L.jsx)(A,{to:"/about",$active:"/about"===o,children:"About"}),t&&Object(L.jsx)(A,{to:"/new-post",$active:"/new-post"===o,children:"New Post"})]})]}),Object(L.jsx)("div",{children:Object(L.jsxs)(E,{children:[Object(L.jsx)(A,{to:"/register",$active:"/register"===o,children:"Sign Up"}),!t&&Object(L.jsx)(A,{to:"/login",$active:"/login"===o,children:"Login"}),t&&Object(L.jsx)(A,{to:"/",onClick:function(){localStorage.removeItem(m),e(null),"/"!==o&&s.push("/")},children:"Logout"})]})})]})]})}var U=g.a.div(u||(u=Object(O.a)(["\n  background: gray;\n  font-size: 12px;\n  text-align: center;\n  padding-top: 20px;\n  margin-top: 40px;\n  color: white;\n  height: 50px;\n"])));function N(){return Object(L.jsx)(U,{children:"COPYRIGHT \xa9 2021 Ding ALL RIGHTS RESERVED."})}var $,_,J="https://student-json-api.lidemy.me",M=function(n){return fetch("".concat(J,"/posts?_sort=createdAt&_order=desc&_page=").concat(n,"&_limit=").concat(5)).then((function(n){return n.json()}))},B=function(){var n=y();return fetch("".concat(J,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},F=Object(g.a)(f.b)($||($=Object(O.a)(["\n  background: white;\n  padding: 8px 10px;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n  text-decoration: none;\n  color: gray;\n\n  &:hover {\n    border: 1px solid gray;\n  }\n"]))),R=g.a.div(_||(_=Object(O.a)(["\n  margin: 20px auto;\n"])));function H(n){var t=n.value,e=n.page;return Object(L.jsx)(F,{to:"/".concat(e),children:t})}function G(n){n.value;var t=Object(d.useState)([]),e=Object(p.a)(t,2),c=e[0],r=e[1];return Object(d.useEffect)((function(){fetch("".concat(J,"/posts?_sort=createdAt&_order=desc")).then((function(n){return n.json()})).then((function(n){for(var t=n.length,e=Math.ceil(t/5),c=[],i=1;i<=e;i++)c.push(i);r((function(n){return c}))}))}),[]),Object(L.jsx)(R,{children:c.map((function(n){return Object(L.jsx)(H,{value:n,page:n},n)}))})}var Y,V,q,K=e(18),Q=e(26),W=e.n(Q),X=g.a.div(Y||(Y=Object(O.a)(["\n  background: rgba(255, 255, 255, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Z=g.a.div(V||(V=Object(O.a)(["\n  width: 300px;\n  height: 300px;\n  position: relative;\n  margin: 0 auto;\n  margin-top: 100px;\n"]))),nn=Object(K.css)(q||(q=Object(O.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])));function tn(){return Object(L.jsx)(X,{children:Object(L.jsx)(Z,{children:Object(L.jsx)(W.a,{color:"gray",css:nn,size:60})})})}var en,cn,rn,an,on,sn,jn,un=e.p+"static/media/bear.a5987557.png",dn=g.a.div(en||(en=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-item: center;\n  margin-top: 40px;\n"]))),bn=g.a.div(cn||(cn=Object(O.a)([""]))),xn=g.a.div(rn||(rn=Object(O.a)(["\n  width: 60%;\n  height: 150px;\n  margin: 10px auto;\n  border-bottom: 1px solid silver;\n  padding: 20px 10px;\n  display: flex;\n  align-item: center;\n  justify-content: flex-start;\n"]))),ln=g.a.div(an||(an=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 30px;\n"]))),pn=Object(g.a)(f.b)(on||(on=Object(O.a)(["\n  font-size: 32px;\n  color: gray;\n  text-decoration: none;\n"]))),On=g.a.div(sn||(sn=Object(O.a)(["\n  margin-top: 10px;\n  font-size: 14px;\n  color: gray;\n"]))),gn=g.a.img(jn||(jn=Object(O.a)([""])));function fn(n){var t=n.post;return Object(L.jsxs)(xn,{children:[Object(L.jsx)(gn,{src:un}),Object(L.jsxs)(ln,{children:[Object(L.jsx)(pn,{to:"/post/".concat(t.id),children:t.title}),Object(L.jsx)(On,{children:new Date(t.createdAt).toLocaleDateString()})]})]})}function hn(){var n=Object(d.useState)([]),t=Object(p.a)(n,2),e=t[0],c=t[1],r=Object(d.useContext)(w),i=r.isLoading,a=r.setIsLoading,o=Object(h.h)().page;return Object(d.useEffect)((function(){a((function(n){return!0})),o||M(1).then((function(n){a((function(n){return!1})),c(n)})),M(o).then((function(n){a((function(n){return!1})),c(n)}))}),[o,a]),Object(L.jsxs)(dn,{children:[i&&Object(L.jsx)(tn,{}),Object(L.jsx)(bn,{children:e.map((function(n){return Object(L.jsx)(fn,{post:n},n.id)}))}),Object(L.jsx)(G,{})]})}var mn,vn,yn,Sn,wn=e.p+"static/media/logo.dcafc79c.png",Cn=g.a.div(mn||(mn=Object(O.a)(["\n  width: 100%;\n  height: 400px;\n  margin: 10px auto;\n  padding: 20px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Ln=g.a.img(vn||(vn=Object(O.a)(["\n  height: 20px;\n"]))),kn=g.a.div(yn||(yn=Object(O.a)(["\n  color: #808080;\n  text-align: center;\n  font-weight: bold;\n"])));function zn(){return Object(L.jsxs)(Cn,{children:[Object(L.jsx)(Ln,{src:wn}),Object(L.jsxs)(kn,{children:[Object(L.jsx)("h3",{children:"Mice Parade"}),Object(L.jsx)("p",{children:"\u807d\u8457 Mice Parade \u4e2d\u9577\u51fa\u7684\u90e8\u843d\u683c"}),Object(L.jsx)("p",{})]})]})}function In(){return Object(L.jsx)(Cn,{children:Object(L.jsx)(zn,{})})}var Pn,Dn,En,An,Tn,Un,Nn,$n,_n,Jn,Mn,Bn,Fn,Rn,Hn=g.a.button(Sn||(Sn=Object(O.a)(["\n  color: white;\n  font-size: 20px;\n  background: gray;\n  border: none;\n  border-radius: 5px;\n  padding: 8px 16px;\n  cursor: pointer;\n"]))),Gn=g.a.div(Pn||(Pn=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n"]))),Yn=g.a.form(Dn||(Dn=Object(O.a)(["\n  border: 2px solid lightgrey;\n  border-radius: 5px;\n  padding: 80px 60px;\n  margin: 15px auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Vn=g.a.div(En||(En=Object(O.a)(["\n  color: gray;\n  font-size: 26px;\n  text-align: center;\n  margin-bottom: 20px;\n"]))),qn=g.a.div(An||(An=Object(O.a)(["\n  margin: 10px 0;\n  color: gray;\n"]))),Kn=g.a.input(Tn||(Tn=Object(O.a)(["\n  margin-left: 10px;\n  padding: 5px;\n  border: 1px solid gray;\n  border-radius: 3px;\n"]))),Qn=Object(g.a)(Hn)(Un||(Un=Object(O.a)(["\n  margin-top: 20px;\n"]))),Wn=g.a.div(Nn||(Nn=Object(O.a)(["\n  color: red;\n  font-size: 14px;\n  text-align: center;\n  margin-top: 20px;\n"])));function Xn(){var n=Object(d.useContext)(S).setUser,t=Object(d.useContext)(w),e=t.isLoading,c=t.setIsLoading,r=Object(d.useState)(""),i=Object(p.a)(r,2),a=i[0],o=i[1],s=Object(d.useState)(""),j=Object(p.a)(s,2),u=j[0],b=j[1],x=Object(d.useState)(""),l=Object(p.a)(x,2),O=l[0],g=l[1],f=Object(d.useState)(""),m=Object(p.a)(f,2),y=m[0],C=m[1],k=Object(h.f)();return Object(L.jsxs)(Gn,{children:[e&&Object(L.jsx)(tn,{}),Object(L.jsx)(Vn,{children:"Sign Up"}),Object(L.jsxs)(Yn,{onSubmit:function(t){t.preventDefault(),c((function(n){return!0})),C((function(n){return null})),function(n,t,e){return fetch("".concat(J,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:e})}).then((function(n){return n.json()}))}(u,a,O).then((function(t){if(c((function(n){return!1})),0===t.ok)return C((function(n){return t.message}));v(t.token),B().then((function(t){if(1!==t.ok)return C((function(n){return t.message}));n(t.data),k.push("/")}))}))},children:[Object(L.jsxs)(qn,{children:["username:",Object(L.jsx)(Kn,{type:"text",value:a,onChange:function(n){return o((function(t){return n.target.value}))}})]}),Object(L.jsxs)(qn,{children:["nickname:",Object(L.jsx)(Kn,{type:"text",value:u,onChange:function(n){return b((function(t){return n.target.value}))}})]}),Object(L.jsxs)(qn,{children:["password:",Object(L.jsx)(Kn,{type:"password",value:O,onChange:function(n){return g((function(t){return n.target.value}))}})]}),Object(L.jsx)(Qn,{children:"SignUp"}),y&&Object(L.jsx)(Wn,{children:y})]})]})}var Zn,nt,tt,et,ct,rt,it,at=g.a.div($n||($n=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n"]))),ot=g.a.form(_n||(_n=Object(O.a)(["\n  border: 2px solid lightgrey;\n  border-radius: 5px;\n  padding: 80px 60px;\n  margin: 15px auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),st=g.a.div(Jn||(Jn=Object(O.a)(["\n  color: gray;\n  font-size: 26px;\n  text-align: center;\n  margin-bottom: 20px;\n"]))),jt=g.a.div(Mn||(Mn=Object(O.a)(["\n  margin: 10px 0;\n  color: gray;\n"]))),ut=g.a.input(Bn||(Bn=Object(O.a)(["\n  margin-left: 10px;\n  padding: 5px;\n  border: 1px solid gray;\n  border-radius: 3px;\n"]))),dt=Object(g.a)(Hn)(Fn||(Fn=Object(O.a)(["\n  margin-top: 20px;\n"]))),bt=g.a.div(Rn||(Rn=Object(O.a)(["\n  color: red;\n  font-size: 14px;\n  text-align: center;\n  margin-top: 20px;\n"])));function xt(){var n=Object(d.useContext)(S).setUser,t=Object(d.useContext)(w),e=t.isLoading,c=t.setIsLoading,r=Object(d.useState)(""),i=Object(p.a)(r,2),a=i[0],o=i[1],s=Object(d.useState)(""),j=Object(p.a)(s,2),u=j[0],b=j[1],x=Object(d.useState)(""),l=Object(p.a)(x,2),O=l[0],g=l[1],f=Object(h.f)();return Object(L.jsxs)(at,{children:[e&&Object(L.jsx)(tn,{}),Object(L.jsx)(st,{children:"Login"}),Object(L.jsxs)(ot,{onSubmit:function(t){t.preventDefault(),e||(g((function(n){return null})),c((function(n){return!0})),function(n,t){return fetch("".concat(J,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(a,u).then((function(t){if(c((function(n){return!1})),0===t.ok)return g((function(n){return t.message}));v(t.token),B().then((function(t){if(1!==t.ok)return g((function(n){return t.message}));n(t.data),f.push("/")})).catch((function(n){return g((function(t){return n.toString()}))}))})).catch((function(n){return c((function(n){return!1})),g((function(t){return n.toString()}))})))},children:[Object(L.jsxs)(jt,{children:["username:",Object(L.jsx)(ut,{type:"text",value:a,onChange:function(n){return o((function(t){return n.target.value}))}})]}),Object(L.jsxs)(jt,{children:["password:",Object(L.jsx)(ut,{type:"password",value:u,onChange:function(n){return b((function(t){return n.target.value}))}})]}),Object(L.jsx)(dt,{children:"Login"}),O&&Object(L.jsx)(bt,{children:O})]})]})}var lt,pt,Ot,gt,ft,ht,mt,vt,yt=g.a.div(Zn||(Zn=Object(O.a)(["\n  width: 100%;\n  margin: 10px auto;\n  padding: 20px 10px;\n  display: flex;\n"]))),St=g.a.div(nt||(nt=Object(O.a)(["\n  width: 60%;\n  margin: 30px auto;\n  padding: 20px 10px;\n  display: flex;\n  flex-direction: column;\n"]))),wt=g.a.div(tt||(tt=Object(O.a)(["\n  display: flex;\n  align-item: center;\n  justify-content: space-between;\n"]))),Ct=g.a.div(et||(et=Object(O.a)(["\n  font-size: 30px;\n  color: gray;\n  padding: 10px;\n  margin: 10px 0px;\n"]))),Lt=g.a.div(ct||(ct=Object(O.a)(["\n  font-size: 14px;\n  color: gray;\n  padding: 10px;\n  margin: 20px 0px 10px 0px;\n"]))),kt=g.a.div(rt||(rt=Object(O.a)(["\n  font-size: 16px;\n  color: gray;\n  padding: 10px;\n  margin: 10px 0px;\n  white-space: pre-wrap;\n"]))),zt=g.a.img(it||(it=Object(O.a)(["\n  height: 460px;\n"])));function It(){var n=Object(d.useState)([]),t=Object(p.a)(n,2),e=t[0],c=t[1],r=Object(d.useContext)(w),i=r.isLoading,a=r.setIsLoading,o=Object(h.h)().id,s=Object(h.f)();return Object(d.useEffect)((function(){a((function(n){return!0})),function(n){return fetch("".concat(J,"/posts?id=").concat(n)).then((function(n){return n.json()}))}(o).then((function(n){if(a((function(n){return!1})),n.length<=0)return s.push("/");n.length>0&&c(n[0])}))}),[o,s,a]),Object(L.jsxs)(yt,{children:[i&&Object(L.jsx)(tn,{}),Object(L.jsx)(zt,{src:un,className:"img"}),Object(L.jsxs)(St,{children:[Object(L.jsxs)(wt,{children:[Object(L.jsx)(Ct,{children:e.title}),Object(L.jsx)(Lt,{children:new Date(e.createdAt).toLocaleDateString()})]}),Object(L.jsx)(kt,{children:e.body})]})]})}var Pt,Dt=g.a.div(lt||(lt=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Et=g.a.form(pt||(pt=Object(O.a)(["\n  margin: 0px auto;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n"]))),At=g.a.div(Ot||(Ot=Object(O.a)(["\n  margin: 10px 0;\n  color: gray;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),Tt=g.a.input(gt||(gt=Object(O.a)(["\n  width: 100vh;\n  border: 2px solid lightgrey;\n  padding: 5px;\n  border-radius: 5px;\n  margin-left: 10px;\n  outline: none;\n"]))),Ut=g.a.div(ft||(ft=Object(O.a)(["\n  margin-top: 30px;\n  color: gray;\n  width: 110vh;\n  display: flex;\n  flex-direction: column;\n"]))),Nt=g.a.textarea(ht||(ht=Object(O.a)(["\n  border: 2px solid lightgrey;\n  border-radius: 5px;\n  margin-top: 10px;\n  outline: none;\n"]))),$t=Object(g.a)(Hn)(mt||(mt=Object(O.a)(["\n  margin-top: 20px;\n"]))),_t=g.a.div(vt||(vt=Object(O.a)(["\n  color: red;\n  font-size: 14px;\n  text-align: center;\n  margin-top: 20px;\n"])));function Jt(){var n=Object(d.useContext)(S).user,t=Object(d.useContext)(w),e=t.isLoading,c=t.setIsLoading,r=Object(d.useState)(""),i=Object(p.a)(r,2),a=i[0],o=i[1],s=Object(d.useState)(""),j=Object(p.a)(s,2),u=j[0],b=j[1],x=Object(d.useState)(""),l=Object(p.a)(x,2),O=l[0],g=l[1],f=Object(h.f)();return n||f.push("/"),Object(L.jsxs)(Dt,{children:[e&&Object(L.jsx)(tn,{}),Object(L.jsxs)(Et,{onSubmit:function(n){c((function(n){return!0})),n.preventDefault(),g(""),function(n,t){var e=y();return fetch("".concat(J,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))}(a,u).then((function(n){if(c((function(n){return!1})),0===n.ok)return g((function(t){return n.message}));f.push("/")}))},children:[Object(L.jsxs)(At,{children:["Title:",Object(L.jsx)(Tt,{type:"text",value:a,onChange:function(n){return o((function(t){return n.target.value}))}})]}),Object(L.jsxs)(Ut,{children:["Content:",Object(L.jsx)(Nt,{rows:"30",cols:"30",type:"text",value:u,onChange:function(n){return b((function(t){return n.target.value}))}})]}),Object(L.jsx)($t,{children:"Submit"}),O&&Object(L.jsx)(_t,{children:O})]})]})}var Mt=g.a.div(Pt||(Pt=Object(O.a)(["\n  padding-top: 110px;\n"])));var Bt=function(){var n=Object(d.useState)(null),t=Object(p.a)(n,2),e=t[0],c=t[1],r=Object(d.useState)(!1),i=Object(p.a)(r,2),a=i[0],o=i[1],s=y();return Object(d.useEffect)((function(){if(!s)return o((function(n){return!1}));B().then((function(n){1===n.ok&&c(n.data)}))}),[s]),Object(L.jsx)(S.Provider,{value:{user:e,setUser:c},children:Object(L.jsx)(w.Provider,{value:{isLoading:a,setIsLoading:o},children:Object(L.jsx)(Mt,{children:Object(L.jsxs)(f.a,{children:[Object(L.jsx)(T,{}),Object(L.jsxs)(h.c,{children:[Object(L.jsx)(h.a,{exact:!0,path:"/",children:Object(L.jsx)(hn,{})}),Object(L.jsx)(h.a,{path:"/about",children:Object(L.jsx)(In,{})}),Object(L.jsx)(h.a,{path:"/login",children:Object(L.jsx)(xt,{})}),Object(L.jsx)(h.a,{path:"/register",children:Object(L.jsx)(Xn,{})}),Object(L.jsx)(h.a,{path:"/post/:id",children:Object(L.jsx)(It,{})}),Object(L.jsx)(h.a,{path:"/new-post",children:Object(L.jsx)(Jt,{})}),Object(L.jsx)(h.a,{path:"/:page",children:Object(L.jsx)(hn,{})})]}),Object(L.jsx)(N,{})]})})})})},Ft=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,47)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;e(n),c(n),r(n),i(n),a(n)}))};l.a.render(Object(L.jsx)(b.a.StrictMode,{children:Object(L.jsx)(Bt,{})}),document.getElementById("root")),Ft()}},[[46,1,2]]]);
//# sourceMappingURL=main.28810561.chunk.js.map