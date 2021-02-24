(this["webpackJsonpmsk-coders"]=this["webpackJsonpmsk-coders"]||[]).push([[0],{196:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(14),o=r.n(c),s=r(16),i=r(20),l=r(22),p=r(235),d=r(234),j=r(261),u=r(38),b=r(232),O=r(233),g=r(2);function h(){return Object(g.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ","MSK Coders ",(new Date).getFullYear(),"."]})}var x=Object(b.a)((function(e){return{root:{textAlign:"center"},submit:Object(l.a)({margin:e.spacing(3,0,2),height:60,width:400},e.breakpoints.down("sm"),{width:"100%"})}}));function f(){var e=x();return Object(g.jsxs)(O.a,{container:!0,component:"main",className:e.root,children:[Object(g.jsx)(d.a,{}),Object(g.jsx)("img",{style:{width:200},src:"/images/favicon.png"}),Object(g.jsx)(u.a,{component:"h1",variant:"h5",children:"MSK Coders"}),Object(g.jsx)(s.b,{to:"/auth",children:Object(g.jsx)(p.a,{variant:"contained",color:"primary",className:e.submit,children:Object(g.jsx)(u.a,{children:"Sign In with Github"})})}),Object(g.jsx)(j.a,{mt:5,children:Object(g.jsx)(h,{})})]})}var v=r(8),m=r(13),S=r(15),y=r(236),E=r(237),w=r(238),D=r(267),k=r(79),I=r.n(k),T=r(78),N=r.n(T),L=Object(b.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1,marginLeft:10},navIcon:{backgroundColor:e.palette.grey[300],marginRight:10,height:40,width:40}}})),P=r(260),C=r(265),_=r(263),A="error",R="info",U="success";function F(e){return Object(g.jsx)(_.a,Object(v.a)({elevation:6,variant:"filled"},e))}var W=Object(b.a)((function(e){return{root:{zIndex:1e6,width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function G(e){var t=e.duration,r=void 0===t?3e3:t,a=e.message,c=void 0===a?"No message to show":a,o=e.type,s=void 0===o?R:o,i=e.verticalPosition,l=void 0===i?"bottom":i,p=e.horizontalPosition,d=void 0===p?"center":p,j=e.handleCloseAlert,b=W(),O=Object(n.useState)(!0),h=Object(m.a)(O,2),x=h[0],f=h[1],v=function(e,t){"clickaway"!==t&&(f(!1),j())};return Object(g.jsx)("div",{className:b.root,children:Object(g.jsx)(C.a,{open:x,autoHideDuration:r,onClose:v,anchorOrigin:{vertical:l,horizontal:d},children:Object(g.jsx)(F,{onClose:v,severity:s,children:Object(g.jsx)(u.a,{children:c})})})})}r(163),r(100),r(164),r(103),r(166),r(167),r(168),r(169),r(104),r(170),r(171);var V={Text:{mode:"",extension:".txt",color:{primary:"rgb(57%, 57%, 57%)",secondary:"rgb(95.6%, 95.6%, 95.6%)"}},JSON:{mode:{name:"javascript",jsonld:!0},extension:".json",color:{primary:"black",secondary:"rgb(95.6%, 95.6%, 95.6%)"}},Haml:{mode:"haml",extension:".haml",color:{primary:"rgb(87%, 75.5%, 0%)",secondary:"rgb(99.5%, 98.2%, 89.7%)"}},Markdown:{mode:"markdown",extension:".md",color:{primary:"black",secondary:"rgb(95.6%, 95.6%, 95.6%)"}},JavaScript:{mode:"javascript",extension:".js",color:{primary:"rgb(76.5%, 69.5%, 0%)",secondary:"rgb(100%, 98.3%, 84.7%)"}},CSS:{mode:"css",extension:".css",color:{primary:"blue",secondary:"rgb(88.1%, 91.4%, 99.9%)"}},HTML:{mode:"htmlembedded",extension:".html",color:{primary:"rgb(91.3%, 31.7%, 0%)",secondary:"rgb(98.4%, 85.8%, 79.1%)"}},C:{mode:"cmake",extension:".c",color:{primary:"rgb(17.9%, 0%, 83.5%)",secondary:"rgb(89.1%, 86.2%, 99.9%)"}},Python:{mode:"python",extension:".py",color:{primary:"rgb(0.6%, 47.1%, 87.4%)",secondary:"rgb(84.6%, 91.1%, 96.8%)"}},R:{mode:"r",extension:".r",color:{primary:"rgb(0.9%, 34.7%, 81.6%)",secondary:"rgb(84.6%, 91.1%, 96.8%)"}},Go:{mode:"go",extension:".go",color:{primary:"rgb(0.9%, 65%, 81.6%)",secondary:"rgb(84.7%, 96.2%, 99.1%)"}},Java:{mode:"javascript",extension:".java",color:{primary:"rgb(86.2%, 8.2%, 0.6%)",secondary:"rgb(99.1%, 87.1%, 85.9%)"}},"C++":{mode:"cmake",extension:".cpp",color:{primary:"rgb(17.9%, 0%, 83.5%)",secondary:"rgb(89.1%, 86.2%, 99.9%)"}},"C#":{mode:"cmake",extension:".cs",color:{primary:"purple",secondary:"rgb(93.7%, 85.9%, 99.1%)"}},Ruby:{mode:"ruby",extension:".rb",color:{primary:"rgb(100%, 0%, 0%)",secondary:"rgb(99.1%, 87.1%, 85.9%)"}}},B=r(17),z=r.n(B),M=r(31),J="IDLE",K="SUCCESS",H="FAILED",X="IN_PROGRESS",q=function(e){var t=Object(n.useState)({data:null,error:null,status:J}),r=Object(m.a)(t,2),a=r[0],c=r[1];return Object(v.a)(Object(v.a)({},a),{},{inProgress:a.status===X,exec:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];Object(M.a)(z.a.mark((function t(){var n;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({data:null,error:null,status:X}),t.prev=1,t.next=4,e.apply(void 0,r);case 4:n=t.sent,c({data:n.data,error:null,status:K}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),c({data:null,error:t.t0,status:H});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},reset:function(){c({data:null,error:null,status:J})}})},Y=r(27),Q=r.n(Y),Z=r(23),$=r.n(Z),ee=window.location.href.includes("localhost")?"http://localhost:7001/#":"https://mskcoders.com/#",te=window.location.href.includes("localhost")?"http://localhost:9999":"https://msk-coders-backend.herokuapp.com",re=r(125),ne=r(271),ae=r(80),ce=r(266),oe=r(249),se=r(242),ie=r(243),le=r(241),pe=r(244),de=r(268),je=r(262),ue=r(248),be=r(270),Oe=Object(b.a)((function(e){return{root:{},dialogRoot:{},dialogTitle:{color:"white",paddingTop:5,paddingBottom:5},formRoot:{},codeMirror:{height:448,border:"1px solid gray",marginTop:10}}}));function ge(e){var t=e.isUser,r=void 0!==t&&t,n=e.snippetId,a=void 0===n?null:n,c=e.open,o=e.setOpen,s=e.cursor,i=e.setCursor,l=e.language,d=e.setLanguage,b=e.title,O=e.setTitle,h=e.description,x=e.setDescription,f=e.content,v=e.setContent,m=e.handleCreateSnippet,S=e.handleUpdateSnippet,y=Oe(),E=function(){o(!1),a||(O("My snippet"),x(""),v(""))};return Object(g.jsx)("div",{className:y.root,children:Object(g.jsxs)(ce.a,{fullWidth:!0,maxWidth:"lg",className:y.dialogRoot,open:c,onClose:E,children:[Object(g.jsx)(le.a,{className:y.dialogTitle,style:{backgroundColor:V[l].color.primary},children:a?b:"Create a ".concat(l," snippet")}),Object(g.jsx)(se.a,{children:Object(g.jsxs)(ie.a,{id:"alert-dialog-description",children:[Object(g.jsx)("br",{}),Object(g.jsxs)(j.a,{children:[Object(g.jsxs)(pe.a,{style:{marginRight:30},children:[Object(g.jsx)(de.a,{children:"Language"}),Object(g.jsx)(je.a,{disabled:a,value:l,onChange:function(e){d(e.target.value)},children:Object.keys(V).map((function(e){return Object(g.jsx)(ue.a,{value:e,children:e},e)}))})]}),Object(g.jsx)(pe.a,{style:{width:"50%"},children:Object(g.jsx)(be.a,{disabled:a,required:!0,label:"Title",defaultValue:b,onChange:function(e){O(e.target.value)}})})]}),Object(g.jsx)("br",{}),Object(g.jsx)(j.a,{children:Object(g.jsx)(pe.a,{style:{width:"100%"},children:Object(g.jsx)(be.a,{disabled:!r,label:"Description",defaultValue:h,onChange:function(e){x(e.target.value)}})})}),Object(g.jsx)("br",{}),Object(g.jsx)(de.a,{children:"Type / paste / drag & drop the snippet file below"}),Object(g.jsx)(j.a,{className:y.codeMirror,children:Object(g.jsx)(ae.UnControlled,{cursor:s,defaultValue:f,value:f,autofocus:!0,onChange:function(e,t,r){i(e.doc.getCursor()),v(r)},options:{mode:V[l].mode,lineNumbers:!0}})})]})}),Object(g.jsxs)(oe.a,{children:[Object(g.jsx)(p.a,{variant:"outlined",onClick:E,children:Object(g.jsx)(u.a,{children:"Close"})}),Object(g.jsx)("div",{style:{flex:1}}),a&&r&&Object(g.jsx)(p.a,{variant:"contained",style:{backgroundColor:V[l].color.primary,color:"white"},onClick:function(){S({snippetId:a,language:l,title:b,description:h,content:f})},children:Object(g.jsx)(u.a,{children:"Update"})}),!a&&r&&Object(g.jsx)(p.a,{variant:"contained",style:{backgroundColor:V[l].color.primary,color:"white"},onClick:m,children:Object(g.jsx)(u.a,{children:"Create"})})]})]})})}var he=Object(l.a)({LOAD_PROFILE:"LOAD_PROFILE",LOAD_SNIPPETS:"LOAD_SNIPPETS",UNLOAD_SNIPPETS:"UNLOAD_SNIPPETS",LOAD_FOLLOWING_DEVELOPERS:"LOAD_FOLLOWING_DEVELOPERS",LOAD_FOLLOWERS_DEVELOPERS:"LOAD_FOLLOWERS_DEVELOPERS",UNLOAD_FOLLOWERS_DEVELOPERS:"UNLOAD_FOLLOWERS_DEVELOPERS",UNLOAD_FOLLOWING_DEVELOPERS:"UNLOAD_FOLLOWING_DEVELOPERS",UNLOAD_DEVELOPER:"UNLOAD_DEVELOPER",CREATE_SNIPPET:"CREATE_SNIPPET",SELECT_SNIPPET:"SELECT_SNIPPET",UPDATE_SNIPPET:"UPDATE_SNIPPET",DELETE_SNIPPET:"DELETE_SNIPPET"},"DELETE_SNIPPET","DELETE_SNIPPET"),xe=Object(b.a)((function(e){return{root:{textAlign:"center",padding:10,marginTop:50,marginBottom:30},languageChip:{textAlign:"left",minWidth:100,margin:5,color:"white"}}}));function fe(e){var t=e.defaultLanguage,r=void 0===t?"JavaScript":t,c=e.alertCallback,o=xe(),s=Object(S.b)(),i=Object(S.c)((function(e){return{user:e.profile.user}})).user,p=a.a.useState(!1),d=Object(m.a)(p,2),b=d[0],O=d[1],h=a.a.useState(r),x=Object(m.a)(h,2),f=x[0],y=x[1],E=a.a.useState("My snippet"),w=Object(m.a)(E,2),D=w[0],k=w[1],I=a.a.useState(""),T=Object(m.a)(I,2),N=T[0],L=T[1],P=a.a.useState(""),C=Object(m.a)(P,2),_=C[0],A=C[1],R=a.a.useState({ch:0,line:0}),F=Object(m.a)(R,2),W=F[0],G=F[1],B=function(){var e=q(function(){var e=Object(M.a)(z.a.mark((function e(t){var r,n,a,c,o,s,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.language,n=t.title,a=t.description,c=t.content,o=t.secret,s=void 0!==o&&o,i="".concat(n).concat(V[r].extension),e.abrupt("return",Q.a.post(te+"/createSnippet",{description:a,files:Object(l.a)({},i,{content:c}),public:!s},{params:{accessToken:$.a.get("access_token")},headers:{Accept:"application/json"}}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=e.exec,r=e.inProgress,n=e.error;return{createSnippetTrigger:t,isCreateSnippetInProgress:r,createSnippetStatus:e.status,createSnippetData:e.data,createSnippetError:n}}(),J=B.createSnippetTrigger,H=B.createSnippetStatus,X=B.createSnippetData;console.log(i),Object(n.useEffect)((function(){H===K&&(s({type:he.CREATE_SNIPPET,value:{snippet:Object(v.a)(Object(v.a)({},X),{},{author:{login:i.login,avatarUrl:i.avatar_url}})}}),c({message:"Snippet created",type:U}))}),[H]);return Object(g.jsxs)(re.a,{className:o.root,children:[Object(g.jsx)(u.a,{variant:"h5",children:"Create a snippet"}),Object(g.jsx)("br",{}),Object(g.jsx)(j.a,{className:o.language,children:Object.keys(V).map((function(e){return Object(g.jsx)(ne.a,{onClick:function(){return function(e){var t=e.languageKey;console.log(t),y(t),O(!0)}({languageKey:e})},className:o.languageChip,style:{backgroundColor:V[e].color.primary},label:Object(g.jsx)(u.a,{children:e})},e)}))}),Object(g.jsx)("br",{}),Object(g.jsx)(ge,{isUser:!0,open:b,setOpen:O,cursor:W,setCursor:G,language:f,setLanguage:y,title:D,setTitle:k,description:N,setDescription:L,content:_,setContent:A,handleCreateSnippet:function(){J({language:f,title:D,description:N,content:_}),O(!1),k("My snippet"),L(""),A("")}})]})}var ve=r(247),me=r(198),Se=r(251),ye=r(252),Ee=r(253),we=[{title:"5 essential tips before your next zoom interview",description:"",image:"https://manojsatishkumar.com/images/blogs/zoom-interview-tips.jpg",url:"https://manojsatishkumar.com/blog/zoom-interview-tips.html"},{title:"5 Effective ways to get a linkedin job referral",description:"",image:"https://manojsatishkumar.com/images/blogs/linkedin-job-referral.jpg",url:"https://manojsatishkumar.com/blog/linkedin-job-referral.html"}],De=r(250),ke=Object(b.a)((function(e){return{root:{textAlign:"center"},listItem:{padding:0,marginBottom:15},listRoot:{},avatar:{},media:{height:0,paddingTop:"56.25%"},cardRoot:{},cardContent:{padding:"5px !important"}}}));function Ie(){var e=ke();return Object(g.jsx)("div",{className:e.root,children:Object(g.jsxs)(ve.a,{className:e.listRoot,component:"nav",children:[Object(g.jsx)(u.a,{variant:"subtitle1",children:"Articles"}),we.map((function(t,r){return Object(g.jsx)(De.a,{target:"_blank",href:t.url,children:Object(g.jsx)(me.a,{className:e.listItem,button:!0,children:Object(g.jsxs)(Se.a,{className:e.cardRoot,children:[Object(g.jsx)(ye.a,{className:e.media,image:t.image,title:t.title}),Object(g.jsxs)(Ee.a,{className:e.cardContent,children:[Object(g.jsx)(u.a,{variant:"sybtitle2",children:t.title}),Object(g.jsx)(u.a,{variant:"caption",color:"textSecondary",children:t.description})]})]})})},t.title+r)}))]})})}var Te=Object(b.a)((function(e){return{root:{marginTop:50,textAlign:"center"},paperRoot:{padding:20,width:"100%"},avatar:{width:"50%",borderRadius:"50%"},InfoItem:{"&:hover":{backgroundColor:e.palette.grey[200]}}}}));function Ne(e){var t=e.developerId,r=Te(),a=Object(n.useState)(null),c=Object(m.a)(a,2),o=c[0],i=c[1],l=Object(S.c)((function(e){return{user:e.profile.user}})).user,p=function(){var e=q(function(){var e=Object(M.a)(z.a.mark((function e(t){var r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.developerId,e.abrupt("return",Q.a.get(te+"/developer/"+r,{params:{accessToken:$.a.get("access_token")},headers:{Accept:"application/json"}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=e.exec,r=e.inProgress,n=e.error;return{getDeveloperTrigger:t,isGetDeveloperInProgress:r,getDeveloperStatus:e.status,getDeveloperData:e.data,getDeveloperError:n}}(),d=p.getDeveloperTrigger,j=p.getDeveloperStatus,b=p.getDeveloperData;return Object(n.useEffect)((function(){l.login===t?i(l):d({developerId:t})}),[t]),Object(n.useEffect)((function(){j===K&&i(b)}),[j]),Object(g.jsx)("div",{className:r.root,children:o&&Object(g.jsxs)(re.a,{className:r.paperRoot,children:[Object(g.jsx)("img",{alt:o.name,src:o.avatar_url,className:r.avatar}),Object(g.jsx)(u.a,{variant:"subtitle1",children:Object(g.jsx)("strong",{children:o.name})}),o.bio&&Object(g.jsx)(u.a,{variant:"body2",children:o.bio}),Object(g.jsx)("br",{}),Object(g.jsx)(s.b,{to:"/developer/"+t+"/followers",style:{textDecoration:"none",color:"black"},children:Object(g.jsxs)(u.a,{className:r.InfoItem,variant:"body1",children:[Object(g.jsx)("strong",{children:o.followers})," followers"]})}),Object(g.jsx)(s.b,{to:"/developer/"+t+"/following",style:{textDecoration:"none",color:"black"},children:Object(g.jsxs)(u.a,{className:r.InfoItem,variant:"body1",children:[Object(g.jsx)("strong",{children:o.following})," following"]})}),Object(g.jsx)("br",{}),o.company&&Object(g.jsxs)(u.a,{variant:"subTitle2",children:["Works at ",Object(g.jsx)("strong",{children:o.company})]})]})})}var Le=r(254),Pe=r(255),Ce=Object(b.a)((function(e){return{root:{textAlign:"left"},paperRoot:{width:"100%"},menuListRoot:{padding:0}}}));function _e(e){var t=e.developerId,r=e.page,n=Ce(),a=Object(S.c)((function(e){return{userId:e.profile.user.login}})).userId;return Object(g.jsx)("div",{className:n.root,children:Object(g.jsx)(re.a,{className:n.paperRoot,children:Object(g.jsxs)(ve.a,{className:n.menuListRoot,component:"nav",children:[a===t&&Object(g.jsx)(s.b,{to:"/developer/"+t,style:{textDecoration:"none",color:"black"},children:Object(g.jsxs)(me.a,{style:{backgroundColor:"root"===r&&"lightgray"},button:!0,children:[Object(g.jsx)(Le.a,{children:Object(g.jsx)(N.a,{})}),Object(g.jsx)(Pe.a,{primary:"Feed"})]})}),Object(g.jsx)(s.b,{to:"/developer/"+t+"/snippets",style:{textDecoration:"none",color:"black"},children:Object(g.jsxs)(me.a,{style:{backgroundColor:"snippets"===r&&"lightgray"},button:!0,children:[Object(g.jsx)(Le.a,{children:Object(g.jsx)(I.a,{})}),Object(g.jsx)(Pe.a,{primary:"Snippets"})]})})]})})})}var Ae=r(5),Re=r(118),Ue=r(256),Fe=r(119),We=r.n(Fe),Ge=r(258),Ve=r(123),Be=r.n(Ve),ze=r(122),Me=r.n(ze),Je=r(121),Ke=r.n(Je),He=r(257),Xe=r(272);function qe(e){var t=e.dialogOpen,r=void 0!==t&&t,n=e.setDialogOpen,a=e.rightButtontext,c=e.rightButtonColor,o=void 0===c?"rgb(0%, 37.2%, 76.1%)":c,s=e.leftButtonText,i=e.onRightButtonClick,l=e.onLeftButtonClick,d=e.titleText,j=e.bodyText;return Object(g.jsx)("div",{children:Object(g.jsxs)(ce.a,{open:r,onClose:function(){n(!1)},children:[Object(g.jsx)(le.a,{children:Object(g.jsx)(u.a,{variant:"h6",children:d})}),Object(g.jsx)(se.a,{children:Object(g.jsx)(ie.a,{children:Object(g.jsx)(u.a,{variant:"body1",children:j})})}),Object(g.jsxs)(oe.a,{children:[Object(g.jsx)(p.a,{onClick:l,color:"default",children:Object(g.jsx)(u.a,{children:s})}),Object(g.jsx)(p.a,{variant:"contained",onClick:i,style:{backgroundColor:o,color:"white"},autoFocus:!0,children:Object(g.jsx)(u.a,{children:a})})]})]})})}var Ye=Object(Ae.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(Xe.a),Qe=Object(b.a)((function(e){var t;return t={root:{width:"100%",marginTop:20,textAlign:"left",userSelect:"none"},snippetCard:{},snippetHeader:{backgroundColor:e.palette.grey[100]},snippetContent:{height:360},snippetFileContent:{fontSize:14,height:300,wordWrap:"break-word",overflow:"hidden",textOverflow:"ellipsis"},language:{textAlign:"center",marginBottom:-12},languageChip:{minWidth:100,border:"1px solid lightgray",color:"white"},title:{textOverflow:"ellipsis",overflow:"hidden"},description:{marginBottom:12,textOverflow:"ellipsis",overflow:"hidden"}},Object(l.a)(t,"snippetContent",{}),Object(l.a)(t,"snippetActionIcon",{}),Object(l.a)(t,"deleteActionIcon",{}),t}));function Ze(e){var t=e.content,r=e.snippetId,c=e.language,o=e.title,i=e.description,d=e.rawUrl,b=e.isUser,h=e.createdAt,x=(e.updatedAt,e.author),f=(e.secret,e.developerId),y=Qe(),E=Object(S.b)(),k=Object(n.useState)(t),I=Object(m.a)(k,2),T=I[0],N=I[1],L=Object(n.useState)({}),P=Object(m.a)(L,2),C=P[0],_=P[1],U=Object(n.useState)(!1),F=Object(m.a)(U,2),W=F[0],B=F[1],J=Object(n.useState)(!1),H=Object(m.a)(J,2),X=H[0],Y=H[1],Z=a.a.useState(c),ee=Object(m.a)(Z,2),re=ee[0],ce=ee[1],oe=a.a.useState(o),se=Object(m.a)(oe,2),ie=se[0],le=se[1],pe=a.a.useState(i),de=Object(m.a)(pe,2),je=de[0],ue=de[1],be=a.a.useState(t),Oe=Object(m.a)(be,2),xe=Oe[0],fe=Oe[1],ve=a.a.useState({ch:0,line:0}),me=Object(m.a)(ve,2),ye=me[0],we=me[1],De=Object(n.useState)(!1),ke=Object(m.a)(De,2),Ie=ke[0],Te=ke[1],Ne=function(){var e=q(function(){var e=Object(M.a)(z.a.mark((function e(t){var r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.snippetId,e.abrupt("return",Q.a.delete("".concat(te,"/deleteSnippet/").concat(r),{params:{accessToken:$.a.get("access_token")},headers:{Accept:"application/json"}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=e.exec,r=e.inProgress,n=e.error;return{deleteSnippetTrigger:t,isDeleteSnippetInProgress:r,deleteSnippetStatus:e.status,deleteSnippetError:n}}(),Le=Ne.deleteSnippetTrigger,Pe=Ne.deleteSnippetStatus,Ce=function(){var e=q(function(){var e=Object(M.a)(z.a.mark((function e(t){var r,n,a,c,o,s,i,p;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.snippetId,n=t.language,a=t.title,c=t.description,o=t.content,s=t.secret,i=void 0!==s&&s,p="".concat(a).concat(V[n].extension),e.abrupt("return",Q.a.patch("".concat(te,"/updateSnippet/").concat(r),{description:c,files:Object(l.a)({},p,{content:o}),public:!i},{params:{accessToken:$.a.get("access_token")},headers:{Accept:"application/json"}}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=e.exec,r=e.inProgress,n=e.error;return{updateSnippetTrigger:t,isUpdateSnippetInProgress:r,updateSnippetStatus:e.status,updateSnippetData:e.data,updateSnippetError:n}}(),_e=Ce.updateSnippetTrigger,Ae=Ce.updateSnippetStatus,Fe=function(){var e=q(function(){var e=Object(M.a)(z.a.mark((function e(t){var r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.rawUrl,e.abrupt("return",Q.a.get(te+"/loadSnippet",{params:{accessToken:$.a.get("access_token"),rawUrl:r},headers:{Accept:"application/json"}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=e.exec,r=e.inProgress,n=e.error,a=e.status,c=e.data;return"object"===typeof c&&(c=JSON.stringify(c,void 0,2)),{loadSnippetTrigger:t,isLoadSnippetInProgress:r,loadSnippetStatus:a,loadSnippetData:c,loadSnippetError:n}}(),Ve=Fe.loadSnippetTrigger,ze=Fe.loadSnippetStatus,Je=Fe.loadSnippetData;return Object(n.useEffect)((function(){t?N(t):Ve({rawUrl:d})}),[t]),Object(n.useEffect)((function(){ze===K&&(N(Je),fe(Je))}),[ze]),Object(n.useEffect)((function(){Ae===K&&(_({message:"Snippet updated",type:R}),function(e){var t=e.snippetId,r=e.description,n=e.content;E({type:he.UPDATE_SNIPPET,value:{snippetId:t,description:r,content:n}})}({snippetId:r,description:je,content:xe}))}),[Ae]),Object(n.useEffect)((function(){Pe===K&&(_({message:"Snippet deleted",type:A}),B(!0),function(e){var t=e.snippetId;E({type:he.DELETE_SNIPPET,value:{snippetId:t}})}({snippetId:r}))}),[Pe]),Object(g.jsxs)(O.a,{className:y.root,children:[Object(g.jsx)(j.a,{className:y.language,children:Object(g.jsx)(ne.a,{className:y.languageChip,style:{backgroundColor:V[c].color.primary},size:"small",label:c||"Unknown Language"})}),Object(g.jsxs)(Se.a,{className:y.snippetCard,style:{border:"1px solid ".concat(V[c].color.primary)},variant:"outlined",children:[x&&Object(g.jsx)(Ue.a,{className:y.snippetHeader,style:{backgroundColor:V[c].color.secondary},avatar:Object(g.jsx)(s.b,{to:"/developer/"+x.login+"/snippets",children:Object(g.jsx)(D.a,{src:x.avatarUrl,className:y.avatar})}),title:Object(g.jsx)(s.b,{style:{textDecoration:"none",color:"black"},to:"/developer/"+x.login+"/snippets",children:x.login}),subheader:We()(h).fromNow()||"a while ago"}),Object(g.jsxs)(Ee.a,{className:y.snippetContent,children:[Object(g.jsx)(Ye,{title:Object(g.jsx)(a.a.Fragment,{children:o}),children:Object(g.jsx)(j.a,{className:y.title,children:Object(g.jsx)(u.a,{noWrap:!0,variant:"body1",children:o})})}),Object(g.jsx)(Ye,{title:Object(g.jsx)(a.a.Fragment,{children:i}),children:Object(g.jsx)(j.a,{className:y.description,children:Object(g.jsx)(u.a,{noWrap:!0,variant:"caption",color:"textSecondary",children:i||"No description added"})})}),Object(g.jsx)(He.a,{}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:y.snippetFileContent,children:Object(g.jsx)(ae.Controlled,{value:T,options:{lineWrapping:!0,mode:V[c].mode||"javascript"}})})]}),Object(g.jsx)(He.a,{}),Object(g.jsxs)(Ge.a,{children:[Object(g.jsx)(p.a,{onClick:function(){return Y(!0)},variant:"outlined",size:"small",children:"Open"}),Object(g.jsx)(Ye,{placement:"top",title:Object(g.jsx)(a.a.Fragment,{children:Object(g.jsx)(u.a,{children:"Open in a new tab"})}),children:Object(g.jsx)(w.a,{target:"_blank",href:d,size:"small","aria-label":"Open in new tab",children:Object(g.jsx)(Ke.a,{style:{backgroundColor:"white"},className:y.DeleteActionIcon})})}),Object(g.jsx)(Ye,{placement:"top",title:Object(g.jsx)(a.a.Fragment,{children:Object(g.jsx)(u.a,{children:"Copy link to clipboard"})}),children:Object(g.jsx)(Re.CopyToClipboard,{text:d,onCopy:function(){_({message:"Copied to clipboard!",type:R}),B(!0)},children:Object(g.jsx)(w.a,{size:"small","aria-label":"copy link",children:Object(g.jsx)(Me.a,{className:y.snippetActionIcon})})})}),Object(g.jsx)("div",{style:{flex:1}}),b&&f===x.login&&Object(g.jsx)(Ye,{placement:"top",title:Object(g.jsx)(a.a.Fragment,{children:Object(g.jsx)(u.a,{children:"Delete snippet"})}),children:Object(g.jsx)(w.a,{size:"small",onClick:function(){Te(!0)},"aria-label":"delete",children:Object(g.jsx)(Be.a,{className:y.deleteActionIcon})})})]})]}),X&&Object(g.jsx)(ge,{isUser:b,snippetId:r,open:X,setOpen:Y,cursor:ye,setCursor:we,language:re,setLanguage:ce,title:ie,setTitle:le,description:je,setDescription:ue,content:xe,setContent:fe,handleUpdateSnippet:function(e){var t=e.snippetId,r=e.language,n=e.title,a=e.description,c=e.content;_e({snippetId:t,language:r,title:n,description:a,content:c}),Y(!1)}}),Ie&&Object(g.jsx)(qe,{dialogOpen:Ie,setDialogOpen:Te,rightButtontext:"Delete",leftButtonText:"Close",onRightButtonClick:function(){return function(e){Te(!1),Le({snippetId:e})}(r)},rightButtonColor:"red",onLeftButtonClick:function(){Te(!1)},titleText:"Delete snippet",bodyText:"Deleted snippets can never be recovered again. Are you sure you want to lose your work ?"}),W&&Object(g.jsx)(G,Object(v.a)({handleCloseAlert:function(){Y(!1),B(!1)}},C))]})}var $e=Object(b.a)((function(e){return{root:{marginTop:50,textAlign:"center"},wrapper:{display:"inline-block",backgroundColor:e.palette.grey[300],padding:50,borderRadius:50,width:"90%"}}}));function et(e){var t=e.primaryText,r=e.secondaryText,n=e.description,a=$e();return Object(g.jsx)(j.a,{className:a.root,children:Object(g.jsxs)(j.a,{className:a.wrapper,children:[Object(g.jsx)(u.a,{variant:"h4",children:t}),Object(g.jsx)("br",{}),Object(g.jsx)(u.a,{variant:"h6",children:r}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(u.a,{variant:"body1",children:n})]})})}var tt=r(82),rt=r.n(tt),nt=r(259),at=Object(b.a)((function(e){return{root:{marginTop:40}}}));function ct(e){var t=e.developerId,r=e.isUser,a=e.feed,c=void 0!==a&&a,o=at(),s=Object(S.b)(),i=Object(n.useState)(1),l=Object(m.a)(i,2),p=l[0],d=l[1],u=Object(n.useState)(!1),b=Object(m.a)(u,2),O=b[0],h=b[1],x=Object(S.c)((function(e){return{snippets:e.snippets,userId:e.profile.user.login}})),f=x.snippets,y=x.userId,E=function(){var e=q(function(){var e=Object(M.a)(z.a.mark((function e(t){var r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.page,e.abrupt("return",Q.a.get(te+"/snippets",{params:{accessToken:$.a.get("access_token"),page:r},headers:{Accept:"application/json"}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=e.exec,r=e.inProgress,n=e.error;return{getSnippetsTrigger:t,isGetSnippetsInProgress:r,getSnippetsStatus:e.status,getSnippetsData:e.data,getSnippetsError:n}}(),w=E.getSnippetsTrigger,D=E.getSnippetsStatus,k=E.getSnippetsData,I=E.isGetSnippetsInProgress,T=function(){var e=q(function(){var e=Object(M.a)(z.a.mark((function e(t){var r,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.developerId,n=t.page,e.abrupt("return",Q.a.get(te+"/developerSnippets/"+r,{params:{developerId:r,page:n},headers:{Accept:"application/json"}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=e.exec,r=e.inProgress,n=e.error;return{getDeveloperSnippetsTrigger:t,isGetDeveloperSnippetsInProgress:r,getDeveloperSnippetsStatus:e.status,getDeveloperSnippetsData:e.data,getDeveloperSnippetsError:n}}(),N=T.getDeveloperSnippetsTrigger,L=T.getDeveloperSnippetsStatus,P=T.getDeveloperSnippetsData,C=function(){var e=q(function(){var e=Object(M.a)(z.a.mark((function e(t){var r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.page,e.abrupt("return",Q.a.get(te+"/feed",{params:{page:r},headers:{Accept:"application/json"}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=e.exec,r=e.inProgress,n=e.error;return{getSnippetsFeedTrigger:t,isGetSnippetsFeedProgress:r,getSnippetsFeedStatus:e.status,getSnippetsFeedData:e.data,getSnippetsFeedError:n}}(),_=C.getSnippetsFeedTrigger,A=C.getSnippetsFeedStatus,R=C.getSnippetsFeedData;return Object(n.useEffect)((function(){c?_({page:p}):y===t?w({page:p}):N({developerId:t,page:p})}),[p,t]),Object(n.useEffect)((function(){A===K&&(R.length&&!O?Array.isArray(R)&&s({type:he.LOAD_SNIPPETS,value:R}):h(!0))}),[A]),Object(n.useEffect)((function(){D===K&&(k.length&&!O?Array.isArray(k)&&s({type:he.LOAD_SNIPPETS,value:k}):h(!0))}),[D]),Object(n.useEffect)((function(){L===K&&(P.length&&!O?Array.isArray(P)&&s({type:he.LOAD_SNIPPETS,value:P}):h(!0))}),[L]),Object(g.jsxs)(j.a,{className:o.root,children:[f.length>0&&Object(g.jsxs)(j.a,{className:o.snippetsArea,children:[f.map((function(e,n){return Object(g.jsx)(j.a,{children:Object(g.jsx)(Ze,Object(v.a)({developerId:t,isUser:r},e))},e.snippetId+n)})),!O&&Object(g.jsx)("div",{children:Object(g.jsx)(rt.a,{onChange:function(e){!function(e){!I&&e&&d(p+1)}(e)},children:Object(g.jsxs)(j.a,{children:[Object(g.jsx)("br",{}),Object(g.jsx)(nt.a,{}),Object(g.jsx)("br",{})]})})})]}),!O&&0===f.length&&Object(g.jsxs)(j.a,{children:[Object(g.jsx)("br",{}),Object(g.jsx)(nt.a,{}),Object(g.jsx)("br",{})]}),O&&0===f.length&&Object(g.jsx)(et,{primaryText:"No snippets",secondaryText:"Either developer has not created code snippets or you might have exceeded your quota.",description:"Retry loading this page after an hour"})]})}var ot=Object(Ae.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid black",marginTop:-20}}}))(Xe.a),st=Object(b.a)((function(e){return{root:{marginTop:50},leftPaneGrid:Object(l.a)({},e.breakpoints.down("sm"),{display:"none"}),developersArea:{marginTop:20,textAlign:"center"},developerCard:{textAlign:"center",display:"inline-block",margin:10},developerAvatar:{border:"1px solid gray",borderRadius:"50%",width:100,height:100}}}));var it=function(e){var t=e.developerId,r=e.type,c=void 0===r?"following":r,o=st(),i=Object(S.b)(),p=function(){var e=q(function(){var e=Object(M.a)(z.a.mark((function e(t){var r,n,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.developerId,n=t.type,a=t.page,e.abrupt("return",Q.a.get(te+"/developers/"+r+"/followType/"+n,{params:{accessToken:$.a.get("access_token"),page:a},headers:{Accept:"application/json"}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=e.exec,r=e.inProgress,n=e.error;return{getDevelopersTrigger:t,isGetDevelopersInProgress:r,getDevelopersStatus:e.status,getDevelopersData:e.data,getDevelopersError:n}}(),d=p.getDevelopersTrigger,b=p.getDevelopersStatus,h=p.getDevelopersData,x=Object(n.useState)(1),f=Object(m.a)(x,2),v=f[0],y=f[1],E=Object(n.useState)(!1),w=Object(m.a)(E,2),D=w[0],k=w[1],I=Object(S.c)((function(e){return{developers:e.developers[c]}})).developers;return Object(n.useEffect)((function(){d({developerId:t,type:c,page:v})}),[v,t]),Object(n.useEffect)((function(){var e;b===K&&(h.length&&!D?("following"===c?e=he.LOAD_FOLLOWING_DEVELOPERS:"followers"===c&&(e=he.LOAD_FOLLOWERS_DEVELOPERS),i({type:e,value:Object(l.a)({},c,h)})):k(!0))}),[b]),Object(g.jsxs)(O.a,{className:o.root,children:[Object(g.jsx)(j.a,{className:o.developerArea,children:I.length>0&&Object(g.jsxs)(j.a,{className:o.developersArea,children:[Object(g.jsx)(u.a,{variant:"h5",children:Object(g.jsx)("strong",{children:c})}),I.map((function(e){return Object(g.jsx)(ot,{placement:"bottom",title:Object(g.jsx)(a.a.Fragment,{children:Object(g.jsx)(u.a,{children:e.login})}),children:Object(g.jsx)(j.a,{className:o.developerCard,children:Object(g.jsx)(s.b,{to:"/developer/"+e.login+"/snippets",children:Object(g.jsx)("img",{className:o.developerAvatar,alt:e.name,src:e.avatar_url})})})},t+e.id)})),!D&&Object(g.jsx)("div",{children:Object(g.jsx)(rt.a,{onChange:function(e){!function(e){e&&y(v+1)}(e)},children:Object(g.jsxs)(j.a,{children:[Object(g.jsx)("br",{}),Object(g.jsx)(nt.a,{}),Object(g.jsx)("br",{})]})})})]})}),D&&!I.length&&Object(g.jsx)(et,{primaryText:"No developers"})]})},lt=Object(b.a)((function(e){return{root:{marginTop:50,textAlign:"center"},leftPaneGrid:Object(l.a)({},e.breakpoints.down("sm"),{display:"none"}),rightPaneGrid:Object(l.a)({},e.breakpoints.down("sm"),{display:"none"}),centerArea:{},snippetsArea:{}}}));var pt,dt=(pt=function(e){var t=e.page,r=void 0===t?"root":t,a=Object(i.g)().developerId,c=lt(),o=Object(S.b)(),s=Object(S.c)((function(e){return{userId:e.profile.user.login}})).userId,l=Object(n.useState)(!1),p=Object(m.a)(l,2),d=p[0],b=p[1],h=Object(n.useState)(!1),x=Object(m.a)(h,2),f=x[0],y=x[1],E=Object(n.useState)({}),w=Object(m.a)(E,2),D=w[0],k=w[1];return Object(n.useEffect)((function(){return b(!1),setTimeout((function(){b(!0)}),100),function(){o({type:he.UNLOAD_DEVELOPER})}}),[a]),Object(g.jsx)(O.a,{className:c.root,children:Object(g.jsx)(O.a,{fixed:!0,children:d&&Object(g.jsxs)(P.a,{container:!0,xs:12,spacing:3,children:[Object(g.jsxs)(P.a,{className:c.leftPaneGrid,item:!0,xs:12,sm:12,md:3,children:[Object(g.jsx)(Ne,{developerId:a}),Object(g.jsx)("br",{}),Object(g.jsx)(_e,{page:r,developerId:a})]}),Object(g.jsxs)(P.a,{className:c.centerArea,item:!0,xs:12,sm:12,md:7,children:[("snippets"===r||"root"===r)&&s===a&&Object(g.jsx)(fe,{alertCallback:function(e){k(e),y(!0)}}),("snippets"===r||"root"===r)&&Object(g.jsx)(ct,{isUser:s===a,developerId:a,feed:"root"===r}),("followers"===r||"following"===r)&&Object(g.jsx)(it,{developerId:a,type:r})]}),f&&Object(g.jsx)(G,Object(v.a)({handleCloseAlert:function(){y(!1)}},D)),Object(g.jsx)(P.a,{className:c.rightPaneGrid,item:!0,xs:12,sm:12,md:2,children:Object(g.jsxs)(j.a,{style:{marginTop:40},children:[Object(g.jsx)(Ie,{}),Object(g.jsxs)(u.a,{style:{textAlign:"center"},variant:"caption",color:"textSecondary",children:["Copyright \xa9 ","MSK Coders ",(new Date).getFullYear()]})]})})]})})})},function(e){var t=e.page,r=L(),n=Object(S.c)((function(e){return{user:e.profile.user}})).user;return Object(g.jsxs)("div",{className:r.root,children:[Object(g.jsx)(d.a,{}),Object(g.jsxs)("div",{className:r.content,children:[Object(g.jsx)(y.a,{color:"default",position:"fixed",children:Object(g.jsxs)(E.a,{style:{paddingLeft:10,paddingRight:10},position:"static",variant:"dense",children:[Object(g.jsx)(s.b,{to:"/developer/"+n.login,style:{textDecoration:"none",color:"black"},children:Object(g.jsx)("img",{alt:"MSK Snippets Icon",style:{height:40,width:40},src:"/images/favicon.png"})}),Object(g.jsx)(u.a,{variant:"h5",className:r.title,children:"Coders"}),Object(g.jsx)(s.b,{to:"/developer/"+n.login,style:{textDecoration:"none",color:"black"},children:Object(g.jsx)(w.a,{style:{color:"root"===t&&"rgb(0.9%, 34.7%, 81.6%)"},className:r.navIcon,children:Object(g.jsx)(N.a,{})})}),Object(g.jsx)(s.b,{to:"/developer/"+n.login+"/snippets",style:{textDecoration:"none",color:"black"},children:Object(g.jsx)(w.a,{style:{color:"snippets"===t&&"rgb(0.9%, 34.7%, 81.6%)"},className:r.navIcon,children:Object(g.jsx)(I.a,{})})}),Object(g.jsx)(s.b,{to:"/developer/"+n.login,children:Object(g.jsx)(D.a,{alt:n.name,src:n.avatar_url})})]})}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",flex:1},children:Object(g.jsx)(pt,Object(v.a)({},e))})]})]})}),jt=r(83),ut=function(e){var t=e.component,r=Object(jt.a)(e,["component"]);return Object(g.jsx)(i.b,Object(v.a)(Object(v.a)({},r),{},{render:function(e){return $.a.get("access_token")?Object(g.jsx)(t,Object(v.a)({},e)):Object(g.jsx)(i.a,{to:"/auth"})}}))},bt=function(e){var t=e.component,r=Object(jt.a)(e,["component"]),n=Object(S.c)((function(e){return{user:e.profile.user,accessToken:e.profile.accessToken}})),a=n.user,c=n.accessToken;return Object(g.jsx)("div",{children:Object(g.jsx)(i.b,Object(v.a)(Object(v.a)({},r),{},{render:function(e){return a&&c?Object(g.jsx)(i.a,{to:"/developer/"+a.login}):Object(g.jsx)(t,Object(v.a)({},e))}}))})},Ot=window.location.href.includes("localhost")?"c1b558a01ef21678f544":"6b638b4b09e34b61d883";function gt(){var e=Object(S.b)(),t=Object(n.useState)(null),r=Object(m.a)(t,2),a=r[0],c=r[1],o=Object(S.c)((function(e){return{user:e.profile.user}})).user,s=window.location.search,i=new URLSearchParams(s).get("code");return Object(n.useEffect)((function(){i?Q.a.get("".concat(te,"/authenticate/").concat(i)).then((function(e){var t,r=e.data.token;r?c(r):(t=e.data.error,console.log("Failed to authenticate-",t))})).catch((function(e){console.log("failed",e)})):window.location.href="https://github.com/login/oauth/authorize?client_id=".concat(Ot,"&scope=gist")}),[i]),Object(n.useEffect)((function(){a&&Q.a.get("".concat(te,"/user"),{params:{accessToken:a},headers:{Accept:"application/json"}}).then((function(t){!function(t){var r=t.userAccessToken,n=t.user;e({type:he.LOAD_PROFILE,value:{accessToken:r,user:n}}),window.location.href=ee+"/developer/"+n.login}({userAccessToken:a,user:t.data})})).catch((function(e){}))}),[a]),Object(n.useEffect)((function(){a&&o&&(window.location.href=ee+"/developer/"+o.login)}),[a,o]),Object(g.jsx)("div",{})}var ht=function(){return Object(g.jsx)(s.a,{children:Object(g.jsxs)(i.d,{children:[Object(g.jsx)(bt,{exact:!0,path:"/",component:f}),Object(g.jsx)(bt,{path:"/auth",component:gt}),Object(g.jsx)(ut,{exact:!0,path:"/developer/:developerId",component:function(){return Object(g.jsx)(dt,{page:"root"})}}),Object(g.jsx)(ut,{exact:!0,path:"/developer/:developerId/snippets",component:function(){return Object(g.jsx)(dt,{page:"snippets"})}}),Object(g.jsx)(ut,{exact:!0,path:"/developer/:developerId/following",component:function(){return Object(g.jsx)(dt,{page:"following"})}}),Object(g.jsx)(ut,{exact:!0,path:"/developer/:developerId/followers",component:function(){return Object(g.jsx)(dt,{page:"followers"})}})]})})},xt=r(77),ft=r(51),vt={snippets:[],developers:{following:[],followers:[]},profile:{accessToken:$.a.get("access_token")||null,user:$.a.get("user")?JSON.parse($.a.get("user")):null}};var mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.LOAD_FOLLOWING_DEVELOPERS:var r=t.value.following;return Object(v.a)(Object(v.a)({},e),{},{developers:Object(v.a)(Object(v.a)({},e.developers),{},{following:[].concat(Object(ft.a)(e.developers.following),Object(ft.a)(r))})});case he.LOAD_FOLLOWERS_DEVELOPERS:var n=t.value.followers;return Object(v.a)(Object(v.a)({},e),{},{developers:Object(v.a)(Object(v.a)({},e.developers),{},{followers:[].concat(Object(ft.a)(e.developers.followers),Object(ft.a)(n))})});case he.UNLOAD_FOLLOWING_DEVELOPERS:return Object(v.a)(Object(v.a)({},e),{},{developers:Object(v.a)(Object(v.a)({},e.developers),{},{following:vt.developers.following})});case he.UNLOAD_FOLLOWERS_DEVELOPERS:return Object(v.a)(Object(v.a)({},e),{},{developers:Object(v.a)(Object(v.a)({},e.developers),{},{followers:vt.developers.followers})});case he.UNLOAD_DEVELOPER:return Object(v.a)(Object(v.a)({},e),{},{developers:vt.developers,snippets:vt.snippets});case he.LOAD_PROFILE:var a=t.value,c=a.accessToken,o=a.user;return $.a.set("access_token",c),$.a.set("user",o),Object(v.a)(Object(v.a)({},e),{},{profile:t.value});case he.UNLOAD_SNIPPETS:return Object(v.a)(Object(v.a)({},e),{},{snippets:vt.snippets});case he.LOAD_SNIPPETS:var s=t.value,i=s.filter((function(e){var t=Object.keys(e.files)[0];if(Object.keys(V).includes(e.files[t].language))return e})),l=i.map((function(e){var t=Object.keys(e.files)[0],r=e.files[t].filename,n=e.files[t].language;return{snippetId:e.id,secret:!e.public,language:n,title:r.substring(0,r.length-V[n].extension.length),description:e.description,rawUrl:e.files[t].raw_url,commentsUrl:e.comments_url,content:null,createdAt:e.created_at,updatedAt:e.updated_at,author:{login:e.owner.login,avatarUrl:e.owner.avatar_url}}})),p=Object(v.a)(Object(v.a)({},e),{},{snippets:[].concat(Object(ft.a)(e.snippets),Object(ft.a)(l))});return p;case he.CREATE_SNIPPET:var d=t.value.snippet,j=Object.keys(d.files)[0],u=d.files[j].filename,b=d.files[j].language,O={snippetId:d.id,language:b,title:u.substring(0,u.length-V[b].extension.length),description:d.description,rawUrl:d.files[j].raw_url,content:null,author:d.author};return console.log(O),Object(v.a)(Object(v.a)({},e),{},{snippets:[O].concat(Object(ft.a)(e.snippets))});case he.UPDATE_SNIPPET:var g=t.value,h=g.description,x=g.content,f=g.snippetId,m=e.snippets.map((function(e){return e.snippetId==f?Object(v.a)(Object(v.a)({},e),{},{description:h,content:x}):e}));return Object(v.a)(Object(v.a)({},e),{},{snippets:m});case he.DELETE_SNIPPET:var S=e.snippets.filter((function(e){return e.snippetId!=t.value.snippetId}));return Object(v.a)(Object(v.a)({},e),{},{snippets:S});default:return e}},St=Object(xt.b)(mt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),yt=function(){return Object(g.jsx)(S.a,{store:St,children:Object(g.jsx)(ht,{})})};o.a.render(Object(g.jsx)(yt,{}),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.86705a6d.chunk.js.map