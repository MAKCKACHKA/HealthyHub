import{u as d,a as l,j as s,c as u}from"./index-62431355.js";import{I as p}from"./pageIllustrations-e2c1fd72.js";import{d as m,I as c,a,E as r,P as h,e as x,f as g,A as S,T as j,b as I,S as v,F as w,c as f}from"./SignInPage.styled-ad59d8d3.js";const F=()=>{const o=d(),e=l({initialValues:{email:"",password:""},validationSchema:x,onSubmit:({email:i,password:n},t)=>{o(u({email:i,password:n})),t.resetForm()}});return s.jsxs(m,{onSubmit:e.handleSubmit,children:[s.jsxs(c,{children:[s.jsx(a,{name:"email",type:"text",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email,valid:e.errors,touched:e.touched}),e.errors.email&&e.touched.email&&s.jsx(r,{id:"email",children:e.errors.email}),s.jsx(a,{name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password,valid:e.errors,touched:e.touched}),e.errors.password&&e.touched.password&&s.jsx(r,{id:"password",children:e.errors.password})]}),s.jsx(h,{text:"Sign In"})]})};function k(){return s.jsxs(g,{children:[s.jsx(S,{pageIllustrations:p}),s.jsxs(j,{children:[s.jsxs("div",{children:[s.jsx(I,{titleText:"Sign in"}),s.jsx(v,{description:"You need to login to use the service"}),s.jsx(F,{}),s.jsx(w,{to:"/forgot-password",children:"Forgot your password?"})]}),s.jsx(f,{descriptionText:"If you don't have an account yet",linkText:"Sign up",to:"/signup"})]})]})}export{k as default};
