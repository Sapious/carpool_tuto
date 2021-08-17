(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(23),s=n.n(c),o=(n(47),n(0)),i=function(){return Object(o.jsx)("div",{children:"landing"})},l=n(8),d=function(e){return!Object(l.h)("/dashboard")&&Object(o.jsx)("div",{children:" footer"})},u=n(11),p=n(7),b=Object(p.b)((function(e){return{auth:e.authState}}),{})((function(e){var t=e.auth;return!Object(l.h)("/dashboard")&&Object(o.jsx)("header",{children:Object(o.jsxs)("nav",{className:"flex justify-start items-center gap-8 py-12 px-8",children:[Object(o.jsx)("div",{className:"text-2xl text-black font-bold",children:"CarPool"}),Object(o.jsxs)("div",{className:"flex justify-between items-center gap-4 ",children:[Object(o.jsx)("div",{className:"capitalize",children:"blog"}),Object(o.jsx)("div",{className:"capitalize",children:"pricing"}),Object(o.jsx)("div",{className:"capitalize",children:"FAQ"}),Object(o.jsx)("div",{className:"capitalize",children:"How It Works"})]}),t.isAuthenticated?Object(o.jsx)("div",{className:"ml-auto flex justify-between items-center gap-4",children:Object(o.jsx)(u.b,{to:"/dashboard",className:"bg-black text-white px-6 py-4 capitalize hover:bg-gray-900",children:"Dashboard"})}):Object(o.jsxs)("div",{className:"ml-auto flex justify-between items-center gap-4",children:[Object(o.jsx)(u.b,{to:"/login",children:"Sign in"}),Object(o.jsx)(u.b,{to:"/register",className:"bg-black text-white px-6 py-4 capitalize hover:bg-gray-900",children:"Get started"})]})]})})})),j=n(3),x=n.n(j),h=n(6),m=n(18),f=n(2),y=n(16),O="LOGIN_SUCCESS",g="REGISTER_SUCCESS",v="AUTH_ERROR",w="USER_LOADING",N="USER_LOADED",k="LOGOUT",C="GET_FILTERED_JOURNEYS",D="GET_JOURNEY",S="CREATE_JOURNEY",E="JOURNEY_ERROR",R="GET_OWN_JOURNEY",_="CANCEL_JOURNEY",T="SPINNER_LOADING",A="SPINNER_LOADED",J="GET_OWN_JOURNEY_DEMANDS",P="JOURNEY_DEMANDS_ERROR",F="CREATE_JOURNEY_DEMAND",q="CONFIRM_JOURNEY_DEMAND",I="CANCEL_JOURNEY_DEMAND",L=n(10),U=n.n(L),z=function(e){e?(U.a.defaults.headers.common.access_token=e,localStorage.setItem("token",e)):(delete U.a.defaults.headers.common.access_token,localStorage.removeItem("token"))},Y=function(){return Object(o.jsx)(a.Fragment,{children:Object(o.jsx)("div",{className:"w-full h-full top-0 left-0 absolute block bg-secondary opacity-100 z-50",children:Object(o.jsx)("span",{className:"opacity-100 block relative w-0 h-0 ",style:{top:"calc( 50% - ( 80px / 2) )",left:"calc( 50% - ( 80px / 2) )"},children:Object(o.jsx)("i",{className:"fas fa-circle-notch fa-spin fa-5x text-primary-shade"})})})})},H={login:function(e){return function(){var t=Object(h.a)(x.a.mark((function t(n){var a,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:T}),a={headers:{"Content-Type":"application/json"}},t.prev=2,t.next=5,U.a.post("/api/auth/login",e,a);case 5:r=t.sent,n({type:O,payload:r.data}),r.data.token&&z(r.data.token),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),n({type:v,payload:t.t0});case 13:n({type:A});case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}},M=Object(p.b)((function(e){return{auth:e.authState,spinner:e.spinnerState}}),H)((function(e){var t=e.login,n=e.auth,r=e.spinner,c=Object(l.g)(),s=Object(a.useState)({email:"",password:""}),i=Object(y.a)(s,2),d=i[0],u=i[1],p=function(e){u(Object(f.a)(Object(f.a)({},d),{},Object(m.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(h.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t(d);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.isAuthenticated&&c.push("/dashboard"),r.loading?Object(o.jsx)(Y,{}):Object(o.jsx)("div",{class:"flex items-center justify-center",children:Object(o.jsx)("div",{class:"w-full max-w-md",children:Object(o.jsxs)("form",{onSubmit:function(e){return b(e)},class:"bg-secondary-tint shadow-lg rounded px-12 pt-6 pb-8 mb-4",children:[Object(o.jsx)("div",{class:"text-dark text-2xl flex justify-center border-b-2 py-2 mb-4",children:"Carpool Login"}),Object(o.jsxs)("div",{class:"mb-4",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"username",children:"Email"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"email",type:"email",required:!0,placeholder:"Email",value:d.email,onChange:function(e){return p(e)}})]}),Object(o.jsxs)("div",{class:"mb-6",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"password",children:"Password"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark mb-3 leading-tight focus:outline-none focus:shadow-outline",type:"password",placeholder:"Password",name:"password",required:!0,value:d.password,onChange:function(e){return p(e)}})]}),Object(o.jsx)("button",{class:"px-4 py-2 rounded text-secondary-tint inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade",type:"submit",children:"Login"})]})})})})),G={register:function(e){return function(){var t=Object(h.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:T}),a={headers:{"Content-Type":"application/json"}},t.prev=2,t.next=5,U.a.post("/api/auth/register",e,a);case 5:t.sent,n({type:g}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:v,payload:t.t0});case 12:n({type:A});case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}},$=Object(p.b)((function(e){return{auth:e.authState,spinner:e.spinnerState}}),G)((function(e){var t=e.register,n=e.auth,r=e.spinner,c=Object(l.g)(),s=Object(a.useState)({firstName:"",lastName:"",city:"",street:"",zipCode:"",phoneNumber:"",identityNumber:"",email:"",password:"",confirmPassword:""}),i=Object(y.a)(s,2),d=i[0],u=i[1],p=function(e){u(Object(f.a)(Object(f.a)({},d),{},Object(m.a)({},e.target.name,e.target.value))),console.log(d)},b=function(){var e=Object(h.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),d.password!==d.confirmPassword){e.next=7;break}return e.next=4,t(d);case 4:c.push("/login"),e.next=8;break;case 7:console.log("password don't match ");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.isAuthenticated&&c.push("/"),r.loading?Object(o.jsx)(Y,{}):Object(o.jsx)("div",{class:"flex items-center justify-center",children:Object(o.jsx)("div",{class:"w-full max-w-md",children:Object(o.jsxs)("form",{onSubmit:function(e){return b(e)},class:"bg-secondary-tint shadow-lg rounded px-12 pt-6 pb-8 mb-4",children:[Object(o.jsx)("div",{class:"text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4",children:"Carpool Login"}),Object(o.jsxs)("div",{className:"flex justify-between items-center w-full gap-4",children:[Object(o.jsxs)("div",{class:"mb-4 w-1/2",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"firstName",children:"First Name"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"firstName",type:"text",required:!0,placeholder:"First Name",onChange:function(e){return p(e)},value:d.firstName})]}),Object(o.jsxs)("div",{class:"mb-4 w-1/2",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"lastName",children:"Last Name"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"lastName",type:"text",required:!0,placeholder:"Last Name",onChange:function(e){return p(e)},value:d.lastName})]})]}),Object(o.jsxs)("div",{className:"flex justify-between items-center w-full gap-4",children:[Object(o.jsxs)("div",{class:"mb-4 w-1/2",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"identityNumber",children:"Identity Number"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"identityNumber",type:"number",min:0,required:!0,placeholder:"Identity Number",onChange:function(e){return p(e)},value:d.identityNumber})]}),Object(o.jsxs)("div",{class:"mb-4 w-1/2",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"phoneNumber",children:"Phone Number"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"phoneNumber",type:"number",min:0,required:!0,placeholder:"Phone Number",onChange:function(e){return p(e)},value:d.phoneNumber})]})]}),Object(o.jsxs)("div",{className:"flex justify-between items-center w-full gap-4",children:[Object(o.jsxs)("div",{class:"mb-4 w-1/3",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"city",children:"City"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"city",type:"text",required:!0,placeholder:"City",onChange:function(e){return p(e)},value:d.city})]}),Object(o.jsxs)("div",{class:"mb-4 w-1/3",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"street",children:"Street"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"street",type:"text",required:!0,placeholder:"Street",onChange:function(e){return p(e)},value:d.street})]}),Object(o.jsxs)("div",{class:"mb-4 w-1/3",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"zipCode",children:"Zip Code"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"zipCode",type:"number",min:0,required:!0,placeholder:"Zip Code",onChange:function(e){return p(e)},value:d.zipCode})]})]}),Object(o.jsxs)("div",{class:"mb-4",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"email",children:"Email"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"email",type:"email",required:!0,placeholder:"Email",onChange:function(e){return p(e)},value:d.email})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"password",children:"Password"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark mb-3 leading-tight focus:outline-none focus:shadow-outline",type:"password",placeholder:"Password",name:"password",required:!0,onChange:function(e){return p(e)},value:d.password})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"confirmPassword",children:"Confirm Password"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark mb-3 leading-tight focus:outline-none focus:shadow-outline",type:"password",placeholder:"Confirm Password",name:"confirmPassword",required:!0,onChange:function(e){return p(e)},value:d.confirmPassword})]}),Object(o.jsx)("button",{class:"px-4 py-2 rounded text-secondary-tint inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade",type:"submit",children:"Register"})]})})})})),W=n(20),B=n(40),Z={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null,error:{}},Q=n(26),V={journeys:[],journey:null,loading:!0,error:{}},K={loading:!1},X={journeyDemands:[],journeyDemand:null,loading:!0,error:{}},ee=Object(W.combineReducers)({authState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case w:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case N:return Object(f.a)(Object(f.a)({},e),{},{isAuthenticated:!0,loading:!1,user:a});case O:return localStorage.setItem("token",a.token),Object(f.a)(Object(f.a)(Object(f.a)({},e),a),{},{isAuthenticated:!0,loading:!1});case g:return Object(f.a)(Object(f.a)({},e),{},{loading:!1});case v:case k:return localStorage.removeItem("token"),{token:null,isAuthenticated:!1,loading:!1,user:null,error:a};default:return e}},journeyState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case C:case R:return Object(f.a)(Object(f.a)({},e),{},{journeys:a,loading:!1});case _:return Object(f.a)(Object(f.a)({},e),{},{loading:!1});case S:return Object(f.a)(Object(f.a)({},e),{},{journeys:[].concat(Object(Q.a)(e.journeys),[a]),loading:!1});case D:return Object(f.a)(Object(f.a)({},e),{},{journey:a,loading:!1});case E:return Object(f.a)(Object(f.a)({},e),{},{error:a});default:return e}},spinnerState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case T:return{loading:!0};case A:return{loading:!1};default:return e}},journeyDemandState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case J:return Object(f.a)(Object(f.a)({},e),{},{journeyDemands:a,loading:!1});case P:return Object(f.a)(Object(f.a)({},e),{},{error:a});case F:case q:case I:return Object(f.a)(Object(f.a)({},e),{},{journeyDemand:a,loading:!1});default:return e}}}),te=n(41),ne=[B.a],ae=Object(W.createStore)(ee,{},Object(te.composeWithDevTools)(W.applyMiddleware.apply(void 0,ne))),re=function(){return Object(o.jsxs)("div",{className:"w-1/6 bg-primary flex justify-start items-center flex-col p-6",children:[Object(o.jsx)("div",{className:"text-secondary-tint text-3xl mb-32",children:"Logo"}),Object(o.jsxs)("div",{className:"flex flex-col items-between justify-start w-full gap-2",children:[Object(o.jsxs)(u.c,{activeClassName:"bg-primary-shade",to:"/dashboard",exact:!0,className:"flex items-center justify-start gap-2 py-3 px-6 rounded-full hover:bg-primary-shade w-full cursor-pointer",children:[Object(o.jsx)("i",{class:"fas fa-home text-secondary-tint text-xl"}),Object(o.jsx)("div",{className:"text-xl text-secondary-tint",children:"Home"})]}),Object(o.jsxs)(u.c,{activeClassName:"bg-primary-shade",exact:!0,to:"/dashboard/demands",className:"flex items-center justify-start gap-2 py-3 px-6 rounded-full hover:bg-primary-shade w-full cursor-pointer",children:[Object(o.jsx)("i",{class:"fas fa-home text-secondary-tint text-xl"}),Object(o.jsx)("div",{className:"text-xl text-secondary-tint",children:"Demands"})]}),Object(o.jsxs)(u.c,{activeClassName:"bg-primary-shade",to:"/dashboard/journeys",exact:!0,className:"flex items-center justify-start gap-2 py-3 px-6 rounded-full hover:bg-primary-shade w-full cursor-pointer",children:[Object(o.jsx)("i",{class:"fas fa-home text-secondary-tint text-xl"}),Object(o.jsx)("div",{className:"text-xl text-secondary-tint",children:"Journeys"})]})]})]})},ce=n(77),se={logout:function(){return function(e){e({type:k})}}},oe=Object(p.b)((function(e){return{auth:e.authState}}),se)((function(e){var t=e.logout,n=e.auth,r=Object(a.useState)(!1),c=Object(y.a)(r,2),s=c[0],i=c[1],l=Object(a.useRef)(null);return Object(ce.a)(l,(function(e){e.path.find((function(e){return"drop-btn-toggle"===e.id}))||i(!1)})),Object(o.jsxs)("div",{className:"p-6 flex justify-between gap-4 items-center",children:[Object(o.jsx)("div",{className:"text-dark text-xl font-bold",children:"Home"}),Object(o.jsxs)("div",{id:"drop-btn-toggle",onClick:function(e){return i(!s)},className:" relative flex items-center justify-between gap-2 rounded border border-secondary-shade shadow-sm py-2 px-3",children:[Object(o.jsxs)("div",{className:"rounded-full w-6 h-6 bg-primary-tint flex justify-center items-center text-sm font-semibold text-secondary-tint uppercase",children:[n.user.firstName[0],n.user.lastName[0]]}),Object(o.jsxs)("div",{className:"text-dark",children:[n.user.firstName," ",n.user.lastName]}),Object(o.jsx)("i",{className:"fas fa-chevron-down text-dark"})]}),s&&Object(o.jsxs)("div",{ref:l,style:{width:"151.92px",top:"4.2rem"},className:"absolute bg-red-500 shadow-md z-20 right-6  rounded-sm",children:[Object(o.jsx)("div",{className:"p-2 bg-secondary-tint hover:bg-secondary text-dark cursor-pointer font-medium",children:"Settings"}),Object(o.jsx)("div",{onClick:function(e){return t()},className:"p-2 bg-secondary-tint hover:bg-secondary text-dark cursor-pointer font-medium",children:"Logout"})]})]})})),ie=function(e){var t=e.title,n=e.placeholder,a=e.description,r=e.inputType,c=void 0===r?"text":r,s=e.icon,i=e.onChangeHandler,l=e.name,d=e.isRequired,u=void 0!==d&&d;return Object(o.jsxs)("div",{className:"border border-secondary bg-secondary-shade bg-opacity-10 rounded-lg p-4",children:[Object(o.jsxs)("div",{className:"flex justify-start items-center gap-2",children:[Object(o.jsx)("i",{className:"".concat(s," text-secondary-shade")}),Object(o.jsx)("div",{className:"text-secondary-shade uppercase",children:t})]}),Object(o.jsx)("input",{name:l,onChange:function(e){return i({key:e.target.name,value:e.target.value})},type:c,min:0,className:"text-xl text-dark font-bold capitalize appearance-none focus:outline-none bg-transparent w-full",placeholder:n,required:u}),Object(o.jsx)("div",{className:"text-dark font-light",children:a})]})},le={getFilteredJourneys:function(e){return function(){var t=Object(h.a)(x.a.mark((function t(n){var a,r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r in n({type:T}),a="",e)a+="".concat(r,"=").concat(e[r],"&");return t.prev=3,t.next=6,U.a.get("/api/journeys?".concat(a));case 6:c=t.sent,n({type:C,payload:c.data.journeys}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),n({type:E,payload:t.t0});case 13:n({type:A});case 14:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}()},createJourneyDemand:function(e){return function(){var t=Object(h.a)(x.a.mark((function t(n){var a,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:T}),a={headers:{"Content-Type":"application/json"}},t.prev=2,t.next=5,U.a.post("/api/journey_demands",e,a);case 5:r=t.sent,n({type:F,payload:r.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:P,payload:t.t0});case 12:n({type:A});case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}},de=Object(p.b)((function(e){return{journeyState:e.journeyState}}),le)((function(e){var t=e.getFilteredJourneys,n=e.journeyState,r=e.createJourneyDemand,c=Object(a.useState)({destinationFrom:"",destinationTo:"",date:"",placeNumber:"",minPrice:"",maxPrice:""}),s=Object(y.a)(c,2),i=s[0],l=s[1],d=function(e){l(Object(f.a)(Object(f.a)({},i),{},Object(m.a)({},e.key,e.value)))};return Object(a.useEffect)((function(){t({date:"".concat((new Date).getFullYear(),"-").concat((new Date).getMonth()+1,"-").concat((new Date).getDate())})}),[]),Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)("div",{className:"w-full rounded-2xl shadow-lg border border-secondary p-10 justify-items-stretch",children:Object(o.jsxs)("form",{className:"grid grid-cols-8 gap-4",children:[Object(o.jsx)("div",{className:"col-span-3",children:Object(o.jsx)(ie,{name:"destinationFrom",onChangeHandler:function(e){return d(e)},title:"from",placeholder:"destination",icon:"fas fa-map-marker-alt",isRequired:!0})}),Object(o.jsx)("div",{className:"col-span-3",children:Object(o.jsx)(ie,{name:"destinationTo",onChangeHandler:function(e){return d(e)},title:"to",placeholder:"destination",icon:"fas fa-map-marker-alt",isRequired:!0})}),Object(o.jsx)("div",{className:"col-span-2",children:Object(o.jsx)(ie,{name:"placeNumber",onChangeHandler:function(e){return d(e)},title:"places",placeholder:"person",inputType:"number",icon:"fas fa-male"})}),Object(o.jsx)("div",{className:"col-span-2",children:Object(o.jsx)(ie,{name:"date",onChangeHandler:function(e){return d(e)},title:"Departure",placeholder:Date.now(),inputType:"date",icon:"fas fa-calendar-alt",isRequire:!0})}),Object(o.jsx)("div",{className:"col-span-2",children:Object(o.jsx)(ie,{name:"minPrice",onChangeHandler:function(e){return d(e)},title:"min price",placeholder:"$$$$",inputType:"number",icon:"fas fa-dollar-sign"})}),Object(o.jsx)("div",{className:"col-span-2",children:Object(o.jsx)(ie,{name:"maxPrice",onChangeHandler:function(e){return d(e)},title:"max price",placeholder:"$$$$",inputType:"number",icon:"fas fa-dollar-sign"})}),Object(o.jsx)("div",{className:"col-span-2",children:Object(o.jsx)("button",{onClick:function(e){return function(e){console.log(i),e.preventDefault(),t(i)}(e)},class:"px-4 py-2 h-full w-full rounded text-4xl font-bold text-secondary-tint inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade",type:"button",children:"Search"})})]})}),n.journeys&&n.journeys.map((function(e){return Object(o.jsx)("div",{className:"grid grid-cols-1 gap-4 my-8",children:Object(o.jsxs)("div",{className:"w-full rounded-2xl shadow-lg border border-secondary p-4 flex items-center justify-between gap-6",children:[Object(o.jsxs)("div",{className:"text-dark text-2xl font-semibold capitalize",children:[e.driver.firstName," ",e.driver.lastName]}),Object(o.jsxs)("div",{className:"flex justify-center items-center gap-10",children:[Object(o.jsx)("div",{className:"text-dark text-2xl font-semibold uppercase",children:e.destinationFrom}),Object(o.jsxs)("div",{className:"relative flex justify-between items-center gap-0.5",children:[Object(Q.a)(new Array(30)).map((function(e){return Object(o.jsx)("span",{className:"rounded-full h-0.5 w-1 bg-dark"})})),Object(o.jsx)("i",{style:{left:"calc(50% - 16px)"},class:"fas fa-map absolute text-dark text-3xl"})]}),Object(o.jsx)("div",{className:"text-dark text-2xl font-semibold uppercase",children:e.destinationTo})]}),Object(o.jsx)("button",{class:"px-3 py-2 rounded-full font-bold text-dark inline-block shadow-lg bg-secondary-shade hover:bg-opacity-80 focus:bg-opacity-80",type:"button",children:"View Details"}),Object(o.jsxs)("div",{className:"text-dark text-2xl font-semibold",children:[e.price," TND"]}),Object(o.jsx)("button",{onClick:function(t){return r({journey:e._id,driver:e.driver._id})},class:"px-8 py-2 rounded text-xl font-bold text-secondary-tint inline-block bg-primary hover:bg-primary-shade focus:bg-primary-shade",type:"button",children:"Book"})]})})}))]})})),ue=n(27),pe=["component","auth"],be=Object(p.b)((function(e){return{auth:e.authState}}))((function(e){var t=e.component,n=e.auth,a=n.loading,r=n.isAuthenticated,c=n.user,s=Object(ue.a)(e,pe);return Object(o.jsx)(l.b,Object(f.a)(Object(f.a)({},s),{},{render:function(e){return a?Object(o.jsx)(Y,{}):r?c.isDriver?Object(o.jsx)(t,Object(f.a)({},e)):Object(o.jsx)(l.a,{to:"/dashboard"}):Object(o.jsx)(l.a,{to:"/login"})}}))})),je={getOwnJourneyDemands:function(){return function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:T}),e.prev=1,e.next=4,U.a.get("/api/journey_demands/me");case 4:n=e.sent,t({type:J,payload:n.data.journeyDemands}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:P,payload:e.t0});case 11:t({type:A});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},confirmDemand:function(e){return function(){var t=Object(h.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:T}),t.prev=1,t.next=4,U.a.get("/api/journey_demands/".concat(e,"/confirm"));case 4:a=t.sent,n({type:q,payload:a.data.journeyDemand}),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:n({type:A});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},cancelDemand:function(e){return function(){var t=Object(h.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:T}),t.next=3,U.a.get("/api/journey_demands/".concat(e,"/cancel"));case 3:a=t.sent,n({type:I,payload:a.data.journeyDemand}),n({type:A});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},xe=Object(p.b)((function(e){return{journeyDemand:e.journeyDemandState,spinner:e.spinnerState,auth:e.authState}}),je)((function(e){var t=e.journeyDemand,n=e.getOwnJourneyDemands,r=e.spinner,c=e.confirmDemand,s=e.cancelDemand,i=e.auth;return Object(a.useEffect)((function(){n()}),[]),r.loading?Object(o.jsx)(Y,{}):Object(o.jsx)(a.Fragment,{children:Object(o.jsxs)("table",{className:"min-w-max w-full table-auto border-collapse",children:[Object(o.jsx)("thead",{className:"rounded-md",children:Object(o.jsxs)("tr",{className:"bg-secondary-shade text-dark uppercase text-sm",children:[Object(o.jsx)("th",{className:"py-3 px-6 text-center rounded-l-2xl",children:"Driver"}),Object(o.jsx)("th",{className:"py-3 px-6 text-center",children:"Passenger"}),Object(o.jsx)("th",{className:"py-3 px-6 text-center",children:"State"}),i.user.isDriver&&Object(o.jsx)("th",{className:"py-3 px-6 text-center rounded-r-2xl",children:"Actions"})]})}),Object(o.jsx)("tbody",{className:"space-y-3",children:t.journeyDemands&&t.journeyDemands.map((function(e){var t,r,l,d;return Object(o.jsxs)("tr",{className:"bg-secondary text-dark uppercase text-sm",children:[Object(o.jsxs)("td",{className:"py-3 px-6 text-center capitalize rounded-l-2xl",children:[null===(t=e.driver)||void 0===t?void 0:t.firstName,null===(r=e.driver)||void 0===r?void 0:r.lastName]}),Object(o.jsxs)("td",{className:"py-3 px-6 text-center capitalize",children:[null===(l=e.passenger)||void 0===l?void 0:l.firstName,null===(d=e.passenger)||void 0===d?void 0:d.lastName]}),Object(o.jsx)("td",{className:"py-3 px-6 text-center",children:null===e||void 0===e?void 0:e.state}),i.user.isDriver&&Object(o.jsx)("td",{className:"py-3 px-6 text-center rounded-r-2xl flex justify-start items-center gap-2",children:"canceled"!==e.state&&"confirmed"!==e.state&&Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)("button",{onClick:function(){var t=Object(h.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e._id);case 2:n();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),type:"button",className:"py-1 px-2 rounded text-white inline-block bg-danger hover:bg-danger-shade focus:bg-danger-shade",children:Object(o.jsx)("i",{class:"fas fa-times"})}),Object(o.jsx)("button",{onClick:function(){var t=Object(h.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(e._id);case 2:n();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),type:"button",className:"py-1 px-2 rounded text-white inline-block bg-success hover:bg-success-shade focus:bg-success-shade",children:Object(o.jsx)("i",{class:"fas fa-check"})})]})})]})}))})]})})})),he={createJourney:function(e){return function(){var t=Object(h.a)(x.a.mark((function t(n){var a,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:T}),a={headers:{"Content-Type":"application/json"}},t.prev=2,t.next=5,U.a.post("/api/journeys",e,a);case 5:r=t.sent,n({type:S,payload:r.data.journey}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:E,payload:t.t0});case 12:n({type:A});case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}},me=Object(p.b)((function(e){return{}}),he)((function(e){var t=e.closeModal,n=e.createJourney,r=Object(a.useState)({destinationFrom:"",destinationTo:"",date:"",placeNumber:"",description:"",price:""}),c=Object(y.a)(r,2),s=c[0],i=c[1],l=function(e){i(Object(f.a)(Object(f.a)({},s),{},Object(m.a)({},e.target.name,e.target.value))),console.log(s)},d=Object(a.useRef)(null);Object(ce.a)(d,(function(){t(!1)}));var u=function(){var e=Object(h.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,n(s);case 3:t(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"bg-secondary-shade w-full h-full fixed top-0 left-0 bg-opacity-60",children:Object(o.jsxs)("div",{ref:d,className:"float-right relative bg-white w-1/3 py-4 px-6 h-screen shadow-md flex flex-col",children:[Object(o.jsxs)("div",{className:"flex items-center justify-between text-lg",children:[Object(o.jsx)("div",{className:"text-dark font-semibold text-lg",children:"Create new journey"}),Object(o.jsx)("i",{onClick:function(e){return t(!1)},className:"fas fa-times text-dark text-lg cursor-pointer"})]}),Object(o.jsxs)("form",{className:"overflow-y-auto mt-8",children:[Object(o.jsxs)("div",{className:"flex justify-between items-center gap-4 w-full",children:[Object(o.jsxs)("div",{class:"mb-4 w-1/2",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"destinationFrom",children:"Destination From"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"destinationFrom",type:"text",required:!0,placeholder:"Destination From",value:s.destinationFrom,onChange:function(e){return l(e)}})]}),Object(o.jsxs)("div",{class:"mb-4 w-1/2",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"destinationTo",children:"Destination To"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"destinationTo",type:"text",required:!0,placeholder:"Destination To",value:s.destinationTo,onChange:function(e){return l(e)}})]})]}),Object(o.jsxs)("div",{class:"mb-4",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"date",children:"Date"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"date",type:"datetime-local",required:!0,placeholder:"Date",value:s.date,onChange:function(e){return l(e)}})]}),Object(o.jsxs)("div",{class:"mb-4",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"price",children:"Price (TND)"}),Object(o.jsx)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"price",type:"number",required:!0,placeholder:"Price",value:s.price,onChange:function(e){return l(e)}})]}),Object(o.jsxs)("div",{class:"mb-4",children:[Object(o.jsx)("label",{class:"block text-dark text-sm font-normal mb-2",for:"description",children:"Description"}),Object(o.jsx)("textarea",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline",name:"description",type:"text",required:!0,placeholder:"Description",value:s.description,onChange:function(e){return l(e)}})]})]}),Object(o.jsxs)("div",{className:"flex justify-end items-center gap-4 pt-4",children:[Object(o.jsx)("button",{onClick:function(e){return t(!1)},class:"px-4 py-2 rounded text-dark inline-block shadow-lg bg-secondary hover:bg-secondary-shade focus:bg-secondary-shade",type:"button",children:"Cancel"}),Object(o.jsx)("button",{onClick:function(e){return u(e)},class:"px-4 py-2 rounded text-secondary-tint inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade",type:"button",children:"Create"})]})]})})})),fe=n(76),ye=n(75),Oe={getOwnJourneys:function(){return function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:T}),e.prev=1,e.next=4,U.a.get("/api/journeys/me");case 4:n=e.sent,t({type:R,payload:n.data.journeys}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:E,payload:e.t0});case 11:t({type:A});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},cancelJourney:function(e){return function(){var t=Object(h.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:T}),t.prev=1,t.next=4,U.a.get("/api/journeys/".concat(e,"/cancel"));case 4:a=t.sent,n({type:_,payload:a.data.journey}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:E,payload:t.t0});case 11:n({type:A});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},ge=Object(p.b)((function(e){return{journeyState:e.journeyState,spinner:e.spinnerState}}),Oe)((function(e){var t=e.journeyState,n=e.getOwnJourneys,r=e.cancelJourney,c=e.spinner,s=Object(a.useState)(!1),i=Object(y.a)(s,2),l=i[0],d=i[1];return Object(a.useEffect)((function(){n()}),[]),c.loading?Object(o.jsx)(Y,{}):Object(o.jsxs)(a.Fragment,{children:[l&&Object(o.jsx)(me,{closeModal:function(e){d(!1)}}),Object(o.jsx)("div",{className:"mb-12",children:Object(o.jsx)("button",{onClick:function(e){return d(!0)},class:"px-4 py-2 rounded text-secondary-tint inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade",type:"submit",children:"Create Journey"})}),Object(o.jsxs)("table",{className:"min-w-max w-full table-auto border-collapse",children:[Object(o.jsx)("thead",{className:"rounded-md",children:Object(o.jsxs)("tr",{className:"bg-secondary-shade text-dark uppercase text-sm",children:[Object(o.jsx)("th",{className:"py-3 px-6 text-left rounded-l-2xl",children:".No"}),Object(o.jsx)("th",{className:"py-3 px-6 text-center",children:"From"}),Object(o.jsx)("th",{className:"py-3 px-6 text-center",children:"To"}),Object(o.jsx)("th",{className:"py-3 px-6 text-center",children:"Date"}),Object(o.jsx)("th",{className:"py-3 px-6 text-center",children:"Status"}),Object(o.jsx)("th",{className:"py-3 px-6 text-center rounded-r-2xl",children:"Actions"})]})}),Object(o.jsx)("tbody",{className:"space-y-3",children:t.journeys&&t.journeys.map((function(e){return Object(o.jsxs)("tr",{className:"bg-secondary text-dark uppercase text-sm",children:[Object(o.jsx)("td",{className:"py-3 px-6 text-left rounded-l-2xl",children:e.reference}),Object(o.jsx)("td",{className:"py-3 px-6 text-center",children:e.destinationFrom}),Object(o.jsx)("td",{className:"py-3 px-6 text-center",children:e.destinationTo}),Object(o.jsx)("td",{className:"py-3 px-6 text-center",children:Object(fe.a)(Object(ye.a)(e.date),"PPPP")}),Object(o.jsx)("td",{className:"py-3 px-6 text-center",children:e.state}),Object(o.jsxs)("td",{className:"py-3 px-6 text-center rounded-r-2xl flex justify-start items-center gap-2",children:["canceled"!==e.state&&Object(o.jsx)("button",{onClick:function(){var t=Object(h.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(e._id);case 2:return t.next=4,n();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),type:"button",className:"py-1 px-2 rounded text-white inline-block bg-danger hover:bg-danger-shade focus:bg-danger-shade",children:Object(o.jsx)("i",{class:"fas fa-times"})}),Object(o.jsx)("button",{type:"button",className:"py-1 px-2 rounded text-white inline-block bg-primary hover:bg-primary-shade focus:bg-primary-shade",children:Object(o.jsx)("i",{class:"fas fa-tv"})})]})]})}))})]})]})})),ve=function(){return Object(o.jsx)(a.Fragment,{children:Object(o.jsxs)("div",{className:"flex h-screen",children:[Object(o.jsx)(re,{}),Object(o.jsxs)("div",{className:"w-5/6",children:[Object(o.jsx)(oe,{}),Object(o.jsx)(l.d,{children:Object(o.jsxs)("div",{style:{height:"calc(100vh - 90px)"},className:"bg-secondary-tint p-6",children:[Object(o.jsx)(l.b,{exact:!0,path:"/dashboard",component:de}),Object(o.jsx)(l.b,{exact:!0,path:"/dashboard/demands",component:xe}),Object(o.jsx)(be,{exact:!0,path:"/dashboard/journeys",component:ge})]})})]})]})})},we=["component","auth"],Ne=Object(p.b)((function(e){return{auth:e.authState}}))((function(e){var t=e.component,n=e.auth,a=n.loading,r=n.isAuthenticated,c=Object(ue.a)(e,we);return Object(o.jsx)(l.b,Object(f.a)(Object(f.a)({},c),{},{render:function(e){return a?Object(o.jsx)(Y,{}):r?Object(o.jsx)(t,Object(f.a)({},e)):Object(o.jsx)(l.a,{to:"/login"})}}))}));var ke=function(){return Object(a.useEffect)((function(){localStorage.token&&z(localStorage.token),ae.dispatch(function(){var e=Object(h.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:T}),t({type:w}),localStorage.token&&z(localStorage.token),e.prev=3,e.next=6,U.a.get("/api/auth/authcheck");case 6:n=e.sent,t({type:N,payload:n.data.user}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:v,payload:e.t0});case 13:t({type:A});case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()),window.addEventListener("storage",(function(){localStorage.token||ae.dispatch({type:k})}))}),[]),Object(o.jsx)(p.a,{store:ae,children:Object(o.jsxs)(u.a,{children:[Object(o.jsx)(b,{}),Object(o.jsxs)(l.d,{children:[Object(o.jsx)(l.b,{exact:!0,path:"/",component:i}),Object(o.jsx)(l.b,{exact:!0,path:"/login",component:M}),Object(o.jsx)(l.b,{exact:!0,path:"/register",component:$}),Object(o.jsx)(Ne,{component:ve})]}),Object(o.jsx)(d,{})]})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(ke,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.a1d61d81.chunk.js.map