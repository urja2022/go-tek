(this["webpackJsonpbeemz-web"]=this["webpackJsonpbeemz-web"]||[]).push([[46],{1027:function(e,i,s){"use strict";s.r(i);var a=s(9),n=s(12),t=s.n(n),o=s(21),l=s(5),d=s(1),r=s(19),c=s(902),u=s(298),b=s(59),m=s(25),v=s(46),p=s(23),j=s(33),h=s(53),O=s(357),f=s(32),x=s(917),N=s(0);i.default=function(){var e=Object(d.useState)(["places"]),i=Object(l.a)(e,1)[0],s=Object(d.useState)(),n=Object(l.a)(s,2),y=n[0],g=n[1],A=Object(v.a)(),w=Object(m.g)(),L=Object(h.b)().enqueueSnackbar,S=Object(m.f)().state,_=Object(d.useState)(),q=Object(l.a)(_,2),C=q[0],k=q[1],B=Object(d.useState)(),E=Object(l.a)(B,2),F=E[0],T=E[1],W=Object(d.useState)({}),z=Object(l.a)(W,2),I=z[0],D=(z[1],Object(d.useState)()),J=Object(l.a)(D,2),P=J[0],V=J[1],H=Object(d.useState)(),M=Object(l.a)(H,2),G=M[0],K=M[1];Object(d.useEffect)((function(){g(null===S||void 0===S?void 0:S.businessAddressData)}),[S]),Object(d.useEffect)((function(){y&&(U("name",(null===y||void 0===y?void 0:y.businessName)?null===y||void 0===y?void 0:y.businessName:""),U("user_name",(null===y||void 0===y?void 0:y.userName)?null===y||void 0===y?void 0:y.userName:""),U("email",(null===y||void 0===y?void 0:y.email)?null===y||void 0===y?void 0:y.email:""),U("mobile",(null===y||void 0===y?void 0:y.mobile)?null===y||void 0===y?void 0:y.mobile:""),U("businessLocationName",(null===y||void 0===y?void 0:y.businessLocationName)?null===y||void 0===y?void 0:y.businessLocationName:""),U("description",(null===y||void 0===y?void 0:y.description)?null===y||void 0===y?void 0:y.description:""),U("physicalAddress",(null===y||void 0===y?void 0:y.physicalAddress)?null===y||void 0===y?void 0:y.physicalAddress:""),T((null===y||void 0===y?void 0:y.physicalAddress)?null===y||void 0===y?void 0:y.physicalAddress:""))}),[y]);var Q=r.d().shape({name:r.e().min(2,"business name can set of between 2 and 50 characters!").max(50,"business name can set of between 2 and 50 characters!").required("business name is required"),description:r.e().min(2,"user description can set of between 2 and 255 characters!").max(255,"user description can set of between 2 and 255 characters!").required("user description is required"),physicalAddress:r.e().min(2,"physical address can set of between 2 and 255 characters!").max(255,"physical address can set of between 2 and 255 characters!").required("physical address is required"),businessLocationName:r.e().min(2,"business location name can set of between 2 and 255 characters!").max(255,"business location name can set of between 2 and 255 characters!").required("business location name is required"),email:r.e().email("email must be a valid email address").required("email is required"),mobile:r.e().min(11,"enter valid mobile number").max(14,"enter valid mobile number").required("mobile is required")}),X=Object(b.e)({initialValues:{name:(null===y||void 0===y?void 0:y.businessName)?null===y||void 0===y?void 0:y.businessName:"",user_name:(null===y||void 0===y?void 0:y.userName)?null===y||void 0===y?void 0:y.userName:"",email:(null===y||void 0===y?void 0:y.email)?null===y||void 0===y?void 0:y.email:"",mobile:(null===y||void 0===y?void 0:y.mobile)?null===y||void 0===y?void 0:y.mobile:"",businessLocationName:(null===y||void 0===y?void 0:y.businessLocationName)?null===y||void 0===y?void 0:y.businessLocationName:"",description:(null===y||void 0===y?void 0:y.description)?null===y||void 0===y?void 0:y.description:"",physicalAddress:(null===y||void 0===y?void 0:y.physicalAddress)?null===y||void 0===y?void 0:y.physicalAddress:""},validationSchema:Q,onSubmit:function(){var e=Object(o.a)(t.a.mark((function e(i,s){var a,n,o,l;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.resetForm,s.setFieldError,o=s.setSubmitting,l={id:null===y||void 0===y?void 0:y._id,businessId:null===y||void 0===y?void 0:y.businessId,userId:null===y||void 0===y?void 0:y.userId,description:i.description,businessName:i.name,physicalAddress:i.physicalAddress,longitude:G||(null===y||void 0===y||null===(a=y.location)||void 0===a?void 0:a.coordinates[0]),latitude:P||(null===y||void 0===y||null===(n=y.location)||void 0===n?void 0:n.coordinates[1]),email:i.email,mobile:i.mobile?i.mobile.includes("+")?i.mobile:"+"+i.mobile:null===y||void 0===y?void 0:y.mobile,businessLocationName:i.businessLocationName},e.next=4,Y(l);case 4:o(!1);case 5:case"end":return e.stop()}}),e)})));return function(i,s){return e.apply(this,arguments)}}()}),Y=Object(j.useMutation)(function(){var e=Object(o.a)(t.a.mark((function e(i){return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.patch(p.b.updateBusinessAddress,JSON.stringify(i));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}(),{onSuccess:function(e){e.data;L("business address update successfully",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}),w(f.c.general.users)},onError:function(e){var i,s,a,n,t=e.response.data.errors;(null===(i=e.response)||void 0===i||null===(s=i.data)||void 0===s?void 0:s.message)&&L(null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message,{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3});Object.keys(t).forEach((function(e){ee("description"===e?"description":"address.name"===e?"address":"secondary"===e?"secondaryNumber":"alternative"===e?"alternativeNumber":"name"===e?"user_name":e,t[e])}))}}).mutateAsync,Z=X.errors,R=X.touched,U=X.setFieldValue,$=X.handleSubmit,ee=X.setFieldError,ie=X.getFieldProps;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(b.d,{value:X,children:Object(N.jsx)(b.c,{autoComplete:"off",noValidate:!0,onSubmit:$,children:Object(N.jsxs)("div",{className:"container-fluid",children:[Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col",children:[Object(N.jsx)("div",{className:"user_edit_header",children:Object(N.jsx)("h4",{className:"app_text_14_semibold mb-0",children:"update business address"})}),Object(N.jsx)("div",{className:"d-flex mt-4",children:Object(N.jsx)(c.a,Object(a.a)(Object(a.a)({label:"name",varient:"outlined",fullWidth:!0,autoComplete:"off"},ie("name")),{},{error:Boolean(R.name&&Z.name),helperText:R.name&&Z.name}))}),Object(N.jsxs)("div",{className:"d-flex row mt-4",children:[Object(N.jsx)("div",{className:"col",children:Object(N.jsx)(b.a,{customeName:"mobile",name:"mobile",label:"mobile number",errors:Z.mobile,component:O.a,data:(null===y||void 0===y?void 0:y.mobile)?null===y||void 0===y?void 0:y.mobile:""})}),Object(N.jsx)("div",{className:"col",children:Object(N.jsx)(c.a,Object(a.a)(Object(a.a)({label:"email",type:"email",autoComplete:"off",fullWidth:!0,variant:"outlined"},ie("email")),{},{error:Boolean(R.email&&Z.email),helperText:R.email&&Z.email}))})]}),Object(N.jsx)("div",{className:"d-flex row mt-4",children:Object(N.jsx)("div",{className:"col",children:Object(N.jsx)(c.a,Object(a.a)(Object(a.a)({label:"location name",type:"text",autoComplete:"off",fullWidth:!0,variant:"outlined"},ie("businessLocationName")),{},{error:Boolean(R.businessLocationName&&Z.businessLocationName),helperText:R.businessLocationName&&Z.businessLocationName}))})}),Object(N.jsx)("div",{className:"d-flex mt-4",children:Object(N.jsx)(c.a,Object(a.a)(Object(a.a)({label:"description",varient:"outlined",fullWidth:!0,autoComplete:"off"},ie("description")),{},{error:Boolean(R.description&&Z.description),helperText:R.description&&Z.description}))}),Object(N.jsx)("div",{className:"d-flex mt-4",children:Object(N.jsx)(x.d,{googleMapsApiKey:"AIzaSyCI-T5kfFDaBGWiLZPAJXzbQa9v7miTYuE",libraries:i,children:Object(N.jsx)(x.a,{className:"w-100",onLoad:function(e){k(e)},onPlaceChanged:function(){if(null!==C){var e=C.getPlace();I.lat=e.geometry.location.lat(),I.lng=e.geometry.location.lng(),I.address=e.vicinity,U("physicalAddress",e.vicinity),T(e.vicinity),K(I.lng),V(I.lat)}},children:Object(N.jsx)(c.a,Object(a.a)(Object(a.a)({fullWidth:!0,value:F,onChange:function(e){T(e.target.value)},variant:"outlined",label:"physical address"},ie("physicalAddress")),{},{error:Boolean(R.physicalAddress&&Z.physicalAddress),helperText:R.physicalAddress&&Z.physicalAddress}))})})})]})}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{className:"col",children:Object(N.jsx)("div",{className:"col-md-8 m-auto",children:Object(N.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",className:"my-3 text-lowercase text-white app_bg_primary app_text_16_semibold app_btn_lg",children:"update business address"})})})]})})})})}}}]);
//# sourceMappingURL=46.0436fe5b.chunk.js.map