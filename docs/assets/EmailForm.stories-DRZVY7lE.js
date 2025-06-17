import{r as f}from"./index-C3JiJ1qr.js";var _={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=f,E=Symbol.for("react.element"),h=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,S=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function x(t,e,n){var r,o={},l=null,u=null;n!==void 0&&(l=""+n),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)v.call(e,r)&&!g.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:E,type:t,key:l,ref:u,props:o,_owner:S.current}}m.Fragment=h;m.jsx=x;m.jsxs=x;_.exports=m;var a=_.exports;const i=()=>{const[t,e]=f.useState({name:"",email:""}),n=o=>{e({...t,[o.target.name]:o.target.value})},r=o=>{o.preventDefault(),alert(JSON.stringify(t))};return a.jsxs("form",{onSubmit:r,children:[a.jsx("input",{name:"name",value:t.name,onChange:n,placeholder:"Name"}),a.jsx("input",{name:"email",value:t.email,onChange:n,placeholder:"Email"}),a.jsx("button",{type:"submit",children:"Submit"})]})};i.__docgenInfo={description:"",methods:[],displayName:"EmailForm"};const O={title:"Components/EmailForm",component:i},s=()=>a.jsx(i,{});s.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,c,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"() => <EmailForm />",...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["Default"];export{s as Default,b as __namedExportsOrder,O as default};
