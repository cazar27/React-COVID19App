(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{348:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(1),o=n.n(c),r=n(18),i=n.n(r),l=n(55),s=n(42),d=n(44),u=n(21),j={backgroundColor:"#ffffff",color:"#1d1d1d",secondaryColor:"#000000a8",colorTextPrimary:"#000000de"},m={backgroundColor:"#212854",color:"#FAFAFA",secondaryColor:"#cfcfcf",colorTextPrimary:"#f3f3f3de"},b=n(40);function h(){var e=Object(s.a)(["\n  html, body {\n    height: 100%;\n  }\n\n  a.link {\n    color: #909090;\n  }\n\n  a.link:active , a.link:hover,   {\n    color: #020075;\n  }\n\n  a.activeLink {\n    color: #3f51b5;\n  }\n  \n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n\n  text[id*='tickLabels'] tspan {\n    font-size: 11px!important;\n  }\n"]);return h=function(){return e},e}var f=Object(b.b)(h());var x=n(399);n(241);function O(){var e=Object(s.a)(['\n  font-size: 1rem;\n  font-family: "Roboto", "Helvetica", "Arial", sans-serif;\n  font-weight: 400;\n  line-height: 1.43;\n  color: ',";\n  margin: 5px 0;\n"]);return O=function(){return e},e}function v(){var e=Object(s.a)(["\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 5px 0;\n"]);return v=function(){return e},e}function p(){var e=Object(s.a)(["\n  color: ",";\n  text-align: left;\n  padding: 10px 0;\n"]);return p=function(){return e},e}var g=b.c.div(p(),(function(e){return e.theme.color})),y=b.c.span(v()),k=b.c.span(O(),(function(e){return e.theme.secondaryColor})),C=function(e){var t=e.number,n=e.title;e.color;return Object(a.jsxs)(g,{children:[Object(a.jsx)(k,{children:n}),Object(a.jsx)(y,{children:t})]})},N={color:"#f44336"},w={color:"#f44336"},E={color:"#f44336"},S=function(e){var t=e.death,n=e.confirmed,c=e.recovered;e.last_date;return Object(a.jsxs)(x.a,{my:4,children:[Object(a.jsx)(C,{title:"Fallecidos: ",number:t,color:N}),Object(a.jsx)(C,{title:"Positivos: ",number:n,color:w}),Object(a.jsx)(C,{title:"Recuperados:",number:c,color:E})]})},F=n(391),I=n(393),W=n(149),T=n.n(W),z=n(207),B=function(e){var t=Object(c.useState)(!0),n=Object(l.a)(t,2),a=n[0],o=n[1],r=Object(c.useState)(null),i=Object(l.a)(r,2),s=i[0],d=i[1];return Object(c.useEffect)((function(){function t(){return(t=Object(z.a)(T.a.mark((function t(){var n,a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,d(a),o(!1),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{data:s,loading:a}},L=n(400),M=n(405),P=n(406),R=n(410),A=n(397),D=n(402),H=function(e){var t="#f44336",n="#8bc34a",c="#ffc107",o={deaths:[],confirmed:[],recovered:[]},r=70;return["03/20","04/20","05/20","06/20","07/20","08/20","09/20","10/20","11/20","12/20"].forEach((function(t){o.deaths.push({x:t,y:parseInt(e.data.ts[r].d)}),o.confirmed.push({x:t,y:parseInt(e.data.ts[r].c)}),o.recovered.push({x:t,y:parseInt(e.data.ts[r].r)}),r+=30}),o,r),Object(a.jsx)("div",{children:Object(a.jsxs)(L.a,{domainPadding:{x:0,y:20},width:480,height:420,theme:M.a.material,containerComponent:Object(a.jsx)(P.a,{labels:function(e){var t=e.datum;return"".concat(t.y)},labelComponent:Object(a.jsx)(R.a,{cornerRadius:2,flyoutStyle:{fill:"white"}})}),children:[Object(a.jsx)(A.a,{data:o.deaths,style:{data:{stroke:t,strokeWidth:function(e){return e.active?3:1}},labels:{fill:t}}}),Object(a.jsx)(A.a,{data:o.recovered,style:{data:{stroke:n,strokeWidth:function(e){return e.active?3:1}},labels:{fill:n}}}),Object(a.jsx)(A.a,{data:o.confirmed,style:{data:{stroke:c,strokeWidth:function(e){return e.active?3:1}},labels:{fill:c}}}),Object(a.jsx)(D.a,{x:125,y:395,centerTitle:!0,orientation:"horizontal",gutter:20,data:[{name:"Fallecidos",symbol:{fill:t}},{name:"Recuperados",symbol:{fill:n}},{name:"Positivos",symbol:{fill:c}}]})]})})},U=function(){var e=B("https://enrichman.github.io/covid19/world/full.json"),t=e.data;return e.loading?Object(a.jsx)(F.a,{maxWidth:"sm",children:"Cargando los datos actualizados"}):Object(a.jsxs)(F.a,{maxWidth:"sm",children:[Object(a.jsx)(x.a,{my:2,children:Object(a.jsx)(I.a,{variant:"h4",component:"h1",gutterBottom:!0,children:"Informaci\xf3n actualizada del COVID19 en todo el mundo"})}),Object(a.jsx)(H,{data:t}),Object(a.jsx)(S,{death:t.deaths,confirmed:t.confirmed,recovered:t.recovered})]})},V=function(){var e=B("https://enrichman.github.io/covid19/world/spain/data.json"),t=e.data,n=e.loading;return console.log(t),n?Object(a.jsx)(F.a,{maxWidth:"sm",children:"Cargando los datos actualizados"}):Object(a.jsxs)(F.a,{maxWidth:"sm",children:[Object(a.jsx)(x.a,{my:2,children:Object(a.jsx)(I.a,{variant:"h4",component:"h1",gutterBottom:!0,children:"Informaci\xf3n actualizada del COVID19 en Espa\xf1a"})}),Object(a.jsx)(S,{death:t.deaths,confirmed:t.confirmed,recovered:t.recovered})]})},_=n(220),J=n(394),q=n(395),G=n(353),K=n(396);function Q(){var e=Object(s.a)(["\n  display: block;\n  font-weight: bold;\n"]);return Q=function(){return e},e}function X(){var e=Object(s.a)(["\n  margin-bottom: 15px;\n"]);return X=function(){return e},e}var Y=Object(J.a)((function(e){return{root:{"& > *":{margin:e.spacing(0),width:"100%"}},button:{marginTop:e.spacing(1),width:"100%"},submitMsg:{opacity:0}}})),Z=b.c.div(X()),$=b.c.label(Q()),ee={fullname:"",email:"",message:"",image:""};function te(e){var t={};return e.fullname||(t.fullname="El nombre es obligatorio"),e.email||(t.email="El email es obligatorio"),t}var ne=function(){var e=Y(),t=Object(c.useState)(null),n=Object(l.a)(t,2),o=n[0],r=n[1];function i(e){r(URL.createObjectURL(e.target.files[0]))}return Object(a.jsxs)(F.a,{maxWidth:"sm",children:[Object(a.jsx)("h1",{children:" Formulario de contacto"}),Object(a.jsx)(_.a,{initialValues:ee,validate:te,onSubmit:function(e){console.log(e)},children:function(t){var n=t.values,c=t.errors,r=t.touched,l=t.handleChange,s=t.handleSubmit;return Object(a.jsxs)("form",{className:e.root,onSubmit:s,id:"formContact",children:[Object(a.jsx)(q.a,{label:"Nombre completo:",name:"fullname",type:"text",value:n.fullname,onChange:l}),c.fullname&&r.fullname&&Object(a.jsx)(G.a,{color:"error.dark",children:c.fullname}),Object(a.jsx)(q.a,{label:"Email",name:"email",type:"text",value:n.email,onChange:l}),c.fullname&&r.fullname&&Object(a.jsx)(G.a,{color:"error.dark",children:c.email}),Object(a.jsx)(q.a,{label:"Mensaje:",name:"message",value:n.message,onChange:l}),Object(a.jsxs)(Z,{children:[Object(a.jsx)($,{children:"Tu foto:"}),Object(a.jsx)("input",{label:"",type:"file",onChange:i}),o&&Object(a.jsx)("img",{width:"50%",src:o,alt:"Profile icon"})]}),Object(a.jsx)(K.a,{className:e.button,type:"submit",value:"Enviar",variant:"contained",color:"primary",children:"Enviar"})]})}}),Object(a.jsx)("p",{className:e.submitMsg,children:"El formulario fue enviado"})]})},ae=n(403),ce=n(407),oe=n(352),re=n(358),ie=n(354),le=Object(J.a)((function(e){return{formControl:{margin:e.spacing(0),minWidth:"100%"},selectEmpty:{marginTop:e.spacing(2)},button:{marginTop:e.spacing(2)}}})),se=function(e){var t=e.countries,n=le(),o=Object(c.useState)(""),r=Object(l.a)(o,2),i=r[0],s=r[1],d=Object(u.f)(),j=t.map((function(e){return Object(a.jsx)(ce.a,{value:e.id,children:e.name},e.id)}));if(t)return Object(a.jsxs)(oe.a,{className:n.formControl,children:[Object(a.jsx)(re.a,{id:"select-countries",children:"Elige un pais:"}),Object(a.jsx)(ie.a,{className:"form-control",onChange:function(e){s(e.target.value),d.push("/country/"+e.target.value)},value:i,labelId:"select-countries",id:"select-countries",children:j})]})},de=Object(J.a)((function(e){return{root:{"& > *":{marginRight:e.spacing(1)}}}}));function ue(e){e.target.parentNode.childNodes.forEach((function(e){"A"===e.tagName&&(e.className="link")})),e.target.className="activeLink"}var je=function(e){var t=e.onClickChangeThemeButton,n=(e.currentTheme,de()),c=B("https://enrichman.github.io/covid19/world/full.json"),o=c.data;return c.loading?Object(a.jsx)(F.a,{maxWidth:"sm",children:Object(a.jsxs)("nav",{className:n.root,children:[Object(a.jsx)(d.b,{onClick:ue,className:"activeLink",label:"Home",to:"/",children:"Mundial"}),Object(a.jsx)(d.b,{onClick:ue,className:"link",to:"country/spain",children:"Espa\xf1a"}),Object(a.jsx)(d.b,{onClick:ue,className:"link",to:"/contact",children:"Contactar"}),Object(a.jsx)(ae.a,{label:"change theme",color:"primary",onClick:t}),Object(a.jsx)("span",{children:"change theme"})]})}):Object(a.jsxs)(F.a,{maxWidth:"sm",children:[Object(a.jsxs)("nav",{className:n.root,children:[Object(a.jsx)(d.b,{onClick:ue,className:"activeLink",label:"Home",to:"/",children:"Mundial"}),Object(a.jsx)(d.b,{onClick:ue,className:"link",to:"country/spain",children:"Espa\xf1a"}),Object(a.jsx)(d.b,{onClick:ue,className:"link",to:"/contact",children:"Contactar"}),Object(a.jsx)(ae.a,{color:"primary",onClick:t})]}),Object(a.jsx)(se,{countries:o.countries})]})},me=function(){var e=Object(u.g)().country_id;null==e&&(e="spain");var t=B("https://enrichman.github.io/covid19/world/"+e+"/data.json"),n=t.data;return t.loading?Object(a.jsx)(F.a,{maxWidth:"sm",children:" Seleccione un pais valido"}):Object(a.jsxs)(F.a,{maxWidth:"sm",children:[Object(a.jsxs)(x.a,{my:2,children:[Object(a.jsx)(I.a,{variant:"h4",component:"h1",gutterBottom:!0,children:"Informaci\xf3n actualizada del COVID19"}),Object(a.jsxs)(I.a,{variant:"h6",component:"h2",gutterBottom:!0,children:["En ",e]})]}),Object(a.jsx)(H,{data:n}),Object(a.jsx)(S,{death:n.deaths,confirmed:n.confirmed,recovered:n.recovered})]})};function be(){var e=Object(s.a)(["\n  background-color: ",";\n  color:  ",";\n  min-height: 100vh;\n"]);return be=function(){return e},e}var he=b.c.div(be(),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.color}));function fe(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],r=n?m:j;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{}),Object(a.jsx)(b.a,{theme:r,children:Object(a.jsx)(he,{theme:r,children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(je,{onClickChangeThemeButton:function(){o((function(e){return!e}))},theme:r}),Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:U}),Object(a.jsx)(u.a,{exact:!0,path:"country/spain",component:V}),Object(a.jsx)(u.a,{exact:!0,path:"/contact",component:ne}),Object(a.jsx)(u.a,{path:"/country/:country_id",component:me})]})]})})})]})}var xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,411)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(fe,{})}),document.getElementById("root")),xe()}},[[348,1,2]]]);
//# sourceMappingURL=main.2f5bf4f4.chunk.js.map