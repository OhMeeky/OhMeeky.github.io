(this.webpackJsonpchill=this.webpackJsonpchill||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(19),i=n.n(r),a=(n(27),n(12)),j=n(9),o=n(4),l=n(2),u=n(0);var b=function(e){var t,n,s=e.isLoggedIn,c=e.setIsLoggedIn,r=e.username;return s?(n=Object(u.jsx)(o.b,{to:"/",className:"homeLinkLogIn",onClick:function(){c(!1),alert("You logged out successfully")},children:"Logout"}),t=Object(u.jsx)(o.b,{to:"/Post",className:"homeLinkHome",children:"Insert-Post"})):(n=Object(u.jsx)(o.b,{to:"/logIn",className:"homeLinkLogIn",children:"LogIn"}),t=Object(u.jsx)(o.b,{to:"/",className:"homeLinkHome",onClick:function(){return alert("You need to login to post something")},children:"Insert-Post"})),Object(u.jsx)("div",{children:Object(u.jsxs)("header",{className:"Header",children:[Object(u.jsx)("h1",{className:"homeTopStr",children:"title"}),Object(u.jsx)(o.b,{to:"/",className:"homeLinkPost",children:"Home"}),n,t,Object(u.jsx)(o.b,{to:"/usersettings",className:"homeLinkUsername",children:r})]})})};var d=function(e){var t=e.text,n=e.desc,s=(e.post,e.handleDelete,e.inputTextLoginUsername),c=Object(l.g)(),r=((7*Math.random()).toString(),t.replace(/ /g,"-")),i="".concat(r);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(o.b,{to:"".concat(c.url).concat(i),className:"post",children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("h5",{children:n}),Object(u.jsxs)("h5",{className:"Author",children:["Author: ",s," "]})]})})})})};var x=function(e){var t=e.post,n=e.setPost,s=e.handleDelete,c=e.filter,r=e.inputTextLoginUsername;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:t.filter((function(e){return e.text.includes(c)||""===c})).map((function(e){return Object(u.jsx)(d,{inputTextLoginUsername:r,setPost:n,post:e,text:e.text,desc:e.desc,handleDelete:s},e.id)}))})})};var h=function(e){var t=e.text,n=e.desc;return Object(u.jsxs)("div",{className:"viewPostContainer",children:[Object(u.jsxs)("h2",{children:["Title: ",t]}),Object(u.jsxs)("h3",{children:["Desc: ",n]})]})};var O=function(e){var t=e.post;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)(h,{text:e.text,desc:e.desc},e.id)}))})})},p=n(22),m=function(e){var t=e.setInputText,n=e.post,s=e.setPost,c=e.inputText,r=e.inputTextDesc,i=e.setInputTextDesc;var a=Object(l.f)();return Object(u.jsx)("div",{className:"postContainer",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s([].concat(Object(p.a)(n),[{text:c,desc:r,id:7*Math.random()}])),t(""),i(""),a.push("/")},className:"postForm",children:[Object(u.jsx)("input",{className:"inputField",type:"text",value:c,onChange:function(e){t(e.target.value)},placeholder:"Title",required:!0})," ",Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"inputField",type:"text",value:r,onChange:function(e){i(e.target.value)},placeholder:"Desc",required:!0})," ",Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"postBtn",children:Object(u.jsx)("i",{children:"Submit"})})]})})};var g=function(e){var t=e.filter,n=e.setFilter;return Object(u.jsx)("div",{className:"post-filter",children:Object(u.jsx)("input",{type:"text",onChange:function(e){n(e.target.value)},value:t,placeholder:"Search.."})})};var v=function(e){var t=e.username;return Object(u.jsx)("div",{children:Object(u.jsxs)("h3",{children:["Nome: ",t," "]})})};var f=function(e){var t=e.setIsLoggedIn,n=e.setInputTextLoginUsername,s=e.inputTextLoginUsername,c=Object(l.f)();return Object(u.jsx)("div",{className:"logInContainer",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(!0),c.push("/")},children:[Object(u.jsx)("input",{type:"text",placeholder:"Nome",value:s,onChange:function(e){n(e.target.value)},required:!0})," ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"password",placeholder:"Password",required:!0})," ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{children:"Submit"})]})})};n(34);var L=function(){var e,t=Object(s.useState)(""),n=Object(j.a)(t,2),c=n[0],r=n[1],i=Object(s.useState)(""),d=Object(j.a)(i,2),h=d[0],p=d[1],L=Object(s.useState)([]),I=Object(j.a)(L,2),N=I[0],T=I[1],S=Object(s.useState)(!1),D=Object(j.a)(S,2),P=D[0],C=D[1],k=Object(s.useState)(""),F=Object(j.a)(k,2),U=F[0],y=F[1],w=Object(s.useState)(""),q=Object(j.a)(w,2),A=q[0],H=q[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{isLoggedIn:P,setIsLoggedIn:C,username:A}),Object(u.jsx)(o.a,{children:Object(u.jsx)("div",{className:"App-Router",children:Object(u.jsxs)(l.c,{children:[Object(u.jsxs)(l.a,{exact:!0,path:"/",children:[Object(u.jsx)(g,{filter:U,setFilter:y}),Object(u.jsx)(x,(e={inputTextLoginUsername:A,text:h,filter:U},Object(a.a)(e,"text",h),Object(a.a)(e,"post",N),Object(a.a)(e,"setPost",T),Object(a.a)(e,"handleDelete",(function(e){var t=N.filter((function(t){return t.id!==e}));T(t)})),e)),"   "]}),Object(u.jsx)(l.a,{path:"/post",children:Object(u.jsx)(m,{post:N,setPost:T,inputText:h,setInputText:p,inputTextDesc:c,setInputTextDesc:r})}),Object(u.jsx)(l.a,{path:"/login",children:Object(u.jsx)(f,{isLoggedIn:P,setIsLoggedIn:C,inputTextLoginUsername:A,setInputTextLoginUsername:H})}),Object(u.jsx)(l.a,{path:"/usersettings",children:Object(u.jsx)(v,{username:A})}),Object(u.jsx)(l.a,{path:"/:post",children:Object(u.jsx)(O,{post:N})})]})})})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(L,{})})}),document.getElementById("root")),I()}},[[35,1,2]]]);
//# sourceMappingURL=main.942580cf.chunk.js.map