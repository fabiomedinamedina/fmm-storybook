import{j as A}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const t=({label:s,size:x="normal",color:h,allCaps:F=!1,fontColor:_="",backgroundColor:S="transparent"})=>A.jsx("span",{className:`${x} ${h}`,style:{color:_,backgroundColor:S},children:F?s.toUpperCase():s});try{t.displayName="MyLabel",t.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Put the text capitalize all",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Put the class to change the color",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:{value:""},description:"Color the text",name:"fontColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"transparent"},description:"Backgroun color label",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}const V={title:"UI/labels/MyLabel",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic Label",size:"normal"}},a={args:{label:"AllCaps Label",size:"normal",allCaps:!0}},r={args:{label:"Secondary Label",size:"h2",color:"text-tertiary"}},o={args:{label:"Custom Color Label",size:"normal",fontColor:"#A8C69F"}},l={args:{label:"Custom Color Label",size:"normal",fontColor:"#FFF",backgroundColor:"#A8C69F"}};var n,c,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label',
    size: 'normal'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps Label',
    size: 'normal',
    allCaps: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,C,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    size: 'h2',
    color: 'text-tertiary'
  }
}`,...(b=(C=r.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    size: 'normal',
    fontColor: '#A8C69F'
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var L,z,v;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    size: 'normal',
    fontColor: '#FFF',
    backgroundColor: '#A8C69F'
  }
}`,...(v=(z=l.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};const M=["Basic","AllCaps","Secondary","CustomColor","CustomBackground"];export{a as AllCaps,e as Basic,l as CustomBackground,o as CustomColor,r as Secondary,M as __namedExportsOrder,V as default};
//# sourceMappingURL=MyLabel.stories-c2adc33b.js.map
