(this["webpackJsonpreact-firebase"]=this["webpackJsonpreact-firebase"]||[]).push([[0],{69:function(e,t,a){},70:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(14),i=a.n(s),o=(a(69),a.p,a(70),a(29)),d=a(16),r=a(30),l=a(28),j=a(22),b=a(110),m=a(111),u=a(26),O=(a(74),u.a.initializeApp({apiKey:"AIzaSyBpFit--I6w-5HdiiHurU5qMy9KQgDR8PM",authDomain:"fir-dummyproject-f6a02.firebaseapp.com",databaseURL:"https://fir-dummyproject-f6a02.firebaseio.com",projectId:"fir-dummyproject-f6a02",storageBucket:"fir-dummyproject-f6a02.appspot.com",messagingSenderId:"659673299074",appId:"1:659673299074:web:30bad08e9d57d59a389c9b"})),x=O.firestore(),f=u.a.auth(),h=(new u.a.auth.GoogleAuthProvider,u.a.storage(),u.a.database(),u.a.functions(),u.a.messaging,x),p=a(4);var g=function(){var e=Object(c.useState)({email:"",name:"",pwd:"",cpwd:""}),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],O=i[1],x=Object(d.f)(),g=function(e){var t=e.target,c=t.name,s=t.value;n(Object(l.a)(Object(l.a)({},a),{},Object(r.a)({},c,s)))};return Object(c.useEffect)((function(){}),[a]),Object(p.jsxs)("div",{style:{margin:"5% 25% 5% 20%",padding:"5%",border:"5px solid black"},children:[Object(p.jsx)("h3",{children:"SignUp"}),Object(p.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),O(""),a.pwd===a.cpwd&&a.email&&a.name&&a.pwd&&a.cpwd?f.createUserWithEmailAndPassword(a.email,a.pwd).then((function(e){h.collection("users").doc(f.currentUser.uid).set({email:a.email,name:a.name}),alert("Sign Up successfull"),x.push("/login")})).catch((function(){O("Password is not match")})):O("**Enter all fields")},children:[Object(p.jsx)(b.a,{type:"text",name:"email",className:"textfield",id:"standard-basic",label:"Email",onChange:g}),Object(p.jsx)("br",{}),Object(p.jsx)(b.a,{type:"text",name:"name",className:"textfield",id:"standard-basic",label:"Name",onChange:g}),Object(p.jsx)("br",{}),Object(p.jsx)(b.a,{type:"password",name:"pwd",className:"textfield",id:"standard-basic",label:"Password",onChange:g}),Object(p.jsx)("br",{}),Object(p.jsx)(b.a,{type:"password",name:"cpwd",className:"textfield",id:"standard-basic",label:"Confirm Password",onChange:g}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(o.b,{to:"/login",children:" Already a user? Login "}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(m.a,{type:"submit",className:"loginbutton1",color:"default",variant:"contained",children:"Register"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"text-danger",children:u})," "]}),";"]})};var v=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)({email:"",pwd:""}),i=Object(j.a)(s,2),O=i[0],x=i[1],f=Object(d.f)(),h=function(e){var t=e.target,a=t.name,c=t.value;x(Object(l.a)(Object(l.a)({},O),{},Object(r.a)({},a,c)))};return Object(c.useEffect)((function(){console.log("inputFields",O)})),Object(p.jsxs)("div",{style:{margin:"5% 25% 5% 25%",padding:"5%",border:"5px solid black"},children:[Object(p.jsx)("h3",{children:"Login"}),Object(p.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),n(""),O.email&&O.pwd?u.a.auth().signInWithEmailAndPassword(O.email,O.pwd).then((function(){alert("Login Successfull"),f.push("/home")})).catch((function(){n("email or password incorrect!.")})):n("**Enter all fields")},children:[Object(p.jsx)(b.a,{type:"text",name:"email",className:"textfield",id:"standard-basic",label:"Email",onChange:h}),Object(p.jsx)("br",{}),Object(p.jsx)(b.a,{type:"password",name:"pwd",className:"textfield",id:"standard-basic",label:"Password",onChange:h}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(o.b,{to:"/",children:" New User? SignUp "}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(m.a,{type:"submit",className:"loginbutton1",color:"default",variant:"contained",children:"Login"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"text-danger",children:a})," "]})," "]})};var w=function(){var e=Object(d.f)(),t=Object(c.useState)([]),a=Object(j.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){O.auth().onAuthStateChanged((function(e){h.collection("users").doc(e.uid).collection("Food Item").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}))}),[]),Object(c.useEffect)((function(){console.log("Food List",n)}),[n]),Object(p.jsxs)("div",{style:{margin:"5% 0% 0% 0% "},children:[Object(p.jsxs)(m.a,{type:"submit",className:"loginbutton1",variant:"contained",color:"primary",onClick:function(){e.push("/addFood")},children:[" ","Add Food Item"]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{style:{margin:"1% 0% 3% 0%"},children:"Food List"}),Object(p.jsx)("div",{children:Object(p.jsxs)("table",{className:"table",children:[Object(p.jsxs)("thead",{children:[Object(p.jsx)("th",{children:"ID"}),Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Price"}),Object(p.jsx)("th",{children:"Image"})]}),Object(p.jsx)("tbody",{children:n.map((function(e){return Object(p.jsxs)("tr",{id:e.id,children:[Object(p.jsx)("td",{children:e.data.FoodID}),Object(p.jsx)("td",{children:e.data.FoodName}),Object(p.jsx)("td",{children:e.data.FoodPrice}),Object(p.jsx)("td",{children:Object(p.jsx)("img",{src:e.data.FoodImage,alt:"No Image",width:"100px",height:"100px"})})]})}))})]})})]})};var y=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),o=i[0],u=i[1],x=Object(c.useState)({id:"",fname:"",price:""}),f=Object(j.a)(x,2),g=f[0],v=f[1],w=Object(d.f)(),y=function(e){var t=e.target,a=t.name,c=t.value;v(Object(l.a)(Object(l.a)({},g),{},Object(r.a)({},a,c)))};return Object(c.useEffect)((function(){console.log("Input Value",a)}),[a]),Object(p.jsxs)("div",{children:[Object(p.jsx)(m.a,{variant:"contained",color:"primary",style:{marginTop:"50px",marginBottom:"50px"},onClick:function(){w.push("/home")},children:"Go Back"}),Object(p.jsxs)("div",{style:{margin:"0% 25% 5% 20%",padding:"5%",border:"5px solid black"},children:[Object(p.jsx)("h3",{children:"Add Food Item"}),Object(p.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){u(""),e.preventDefault(),g.id&&g.price&&g.fname&&a?O.auth().onAuthStateChanged((function(e){h.collection("users").doc(e.uid).collection("Food Item").doc(g.id).set({FoodID:g.id,FoodName:g.fname,FoodPrice:g.price,FoodImage:a}).then((function(){u("Items Added"),console.log("Items Added")}))})):u("**Enter all fields")},children:[Object(p.jsx)(b.a,{type:"number",name:"id",className:"textfield",id:"standard-basic",label:"Food ID",onChange:y}),Object(p.jsx)("br",{}),Object(p.jsx)(b.a,{type:"text",name:"fname",className:"textfield",id:"standard-basic",label:"Food Name",onChange:y}),Object(p.jsx)("br",{}),Object(p.jsx)(b.a,{type:"number",name:"price",className:"textfield",id:"standard-basic",label:"Price",onChange:y}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),a?Object(p.jsx)("img",{src:a,alt:"no image",width:"5%",height:"5%"}):null,Object(p.jsx)(b.a,{style:{width:"35%"},type:"file",name:"image",onChange:function(e){var t;if(e.dataTransfer?(t=e.dataTransfer.files,console.log("Files",t)):e.target&&(t=e.target.files,console.log("Files",t)),"undefined"!==t[0]){var a=new FileReader;a.onload=function(){n(a.result)},a.readAsDataURL(t[0])}}}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(m.a,{type:"submit",className:"loginbutton1",color:"default",variant:"contained",children:"Add Food Item"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"text-danger",children:o})]})]})]})};var F=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(o.a,{children:Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/",component:g}),Object(p.jsx)(d.a,{exact:!0,path:"/login",component:v}),Object(p.jsx)(d.a,{exact:!0,path:"/home",component:w}),Object(p.jsx)(d.a,{exact:!0,path:"/addFood",component:y})]})})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,113)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),N()}},[[80,1,2]]]);
//# sourceMappingURL=main.96504c17.chunk.js.map