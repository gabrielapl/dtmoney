(this.webpackJsonpdtmoney=this.webpackJsonpdtmoney||[]).push([[0],{103:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e.n(r),c=e(29),i=e.n(c),o=e(35),s=e(6),d=e(16),l=e.n(d),b=e.p+"static/media/income.d58effe2.svg",u=e.p+"static/media/outcome.6eb96d30.svg",j=e.p+"static/media/total.e90c2d1e.svg",h=e(10),m=e.n(h),p=e(64),g=e(36),O=e(17),x=e(51),f=e.n(x).a.create({baseURL:"http://localhost:3000/api"}),v=e(0),y=Object(r.createContext)({});function w(n){var t=n.children,e=Object(r.useState)([]),a=Object(s.a)(e,2),c=a[0],i=a[1];function o(){return(o=Object(O.a)(m.a.mark((function n(t){var e,r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.post("/transactions",Object(g.a)(Object(g.a)({},t),{},{createdAt:new Date}));case 2:e=n.sent,r=e.data.transaction,i([].concat(Object(p.a)(c),[r]));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(r.useEffect)((function(){f.get("/transactions").then((function(n){return i(n.data.transactions)}))}),[]),Object(v.jsx)(y.Provider,{value:{transactions:c,createTransaction:function(n){return o.apply(this,arguments)}},children:t})}function F(){return Object(r.useContext)(y)}var k,C,N=e(3),R=e(4),S=R.b.div(k||(k=Object(N.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n\n  gap: 2rem;\n  margin-top: -10rem;\n\n  div {\n    background-color: var(--shape);\n    padding: 1.5rem 2rem;\n    border-radius: 0.25rem;\n    color: var(--text-title);\n\n  header { \n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n   }\n\n   strong {\n     display: block;\n     margin-top: 1rem;\n     font-size: 2rem;\n     font-weight: 500;\n     line-height: 3rem;\n   }\n\n   &.highlight-background{\n     background: var(--green);\n     color: #FFF;\n   }\n\n  }\n"])));function B(){var n=F().transactions.reduce((function(n,t){return"deposit"==t.type?(n.deposits+=t.amount,n.total+=t.amount):(n.withdraws+=t.amount,n.total-=t.amount),n}),{deposits:0,withdraws:0,total:0});return Object(v.jsxs)(S,{children:[Object(v.jsxs)("div",{children:[Object(v.jsxs)("header",{children:[Object(v.jsx)("p",{children:"Entradas"}),Object(v.jsx)("img",{src:b,alt:"Entradas"})]}),Object(v.jsx)("strong",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.deposits)})]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("header",{children:[Object(v.jsx)("p",{children:"Saidas"}),Object(v.jsx)("img",{src:u,alt:"Saidas"})]}),Object(v.jsxs)("strong",{children:["-",new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.withdraws)]})]}),Object(v.jsxs)("div",{className:"highlight-background",children:[Object(v.jsxs)("header",{children:[Object(v.jsx)("p",{children:"Total"}),Object(v.jsx)("img",{src:j,alt:"Total"})]}),Object(v.jsx)("strong",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.total)})]})]})}var E,D=R.b.div(C||(C=Object(N.a)(["\n  margin-top: 4rem;\n\n  table {\n    width: 100%;\n    border-spacing: 0 0.5rem;\n\n    th {\n      color: var(--text-body);\n      font-weight: 400;\n      padding: 1rem 2rem;\n      text-align: left;\n      line-height: 1.5rem;\n    }\n\n    td {\n      padding: 1rem 2rem;\n      border: 0;\n      background-color: var(--shape);\n      font-weight: 400;\n      color: var(--text-body);\n      border-radius: 0.25rem;\n\n      &:first-child {\n        color: var(--text-title);\n     }\n     \n     &.deposit {\n       color: var(--green);\n     }\n\n     &.withdraw {\n       color: var(--red);\n     }\n     \n    }\n  }\n"])));function T(){var n=F().transactions;return Object(v.jsx)(D,{children:Object(v.jsxs)("table",{children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Titulo"}),Object(v.jsx)("th",{children:"Valor"}),Object(v.jsx)("th",{children:"Categoria"}),Object(v.jsx)("th",{children:"Data"})]})}),Object(v.jsx)("tbody",{children:n.map((function(n){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:n.title}),Object(v.jsx)("td",{className:n.type,children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.amount)}),Object(v.jsx)("td",{children:n.category}),Object(v.jsx)("td",{children:new Intl.DateTimeFormat("pt-BR").format(new Date(n.createdAt))})]},n.id)}))})]})})}var z=R.b.div(E||(E=Object(N.a)(["\n  max-width: 1120px;\n  margin: 0 auto;\n\n  padding: 2.5rem 1rem;\n"])));function A(){return Object(v.jsxs)(z,{children:[Object(v.jsx)(B,{}),Object(v.jsx)(T,{})]})}var I,L,q=e.p+"static/media/logo.614d71d1.svg",J=R.b.header(I||(I=Object(N.a)(["\n  background: var(--blue);\n"]))),M=R.b.div(L||(L=Object(N.a)(["\n  max-width: 1120px;\n  margin: 0 auto;\n\n  padding: 2rem 1rem 10rem;\n  display: flex;\n\n  align-items: center;\n  justify-content: space-between;\n\n\n  button {\n    font-size: 1rem;\n    color: #FFFFFF;\n    background-color: var(--blue-light);\n    border: 0;\n    padding: 0 2rem;\n    border-radius: 0.25rem;\n    height: 3rem;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n\n  }\n"])));function P(n){var t=n.onOpenNewTransactionModal;return Object(v.jsx)(J,{children:Object(v.jsxs)(M,{children:[Object(v.jsx)("img",{src:q,alt:"dt money"}),Object(v.jsx)("button",{type:"button",onClick:t,children:"Nova transa\xe7\xe3o"})]})})}var V,U,G,H,K=e.p+"static/media/close.f62862c6.svg",Q=e(34),W=R.b.form(V||(V=Object(N.a)(['\n  h2 {\n    color: var(--text-title);\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n  }\n  input {\n      width: 100%;\n      padding: 0 1.5rem;\n      height: 4rem;\n      border-radius: 0.25rem;\n\n      border: 1px solid #d7d7d7;\n      background: #e7e9ee;\n       \n      font-weight: 400;\n      font-size: 1rem;\n\n      &::placeholder {\n        color: var(--text-body)\n      }\n\n      & + input {\n        margin-top: 1rem;\n      }\n    }\n    button[type="submit"] {\n      width: 100%;\n      height: 4rem;\n      padding: 0 1.5rem;\n      background: var(--green);\n      color: #FFFFFF;\n      border-radius: 0.25rem;\n      border: 0;\n      font-size: 1rem;\n      margin-top: 1.5rem;\n      font-weight: 600;\n\n      transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n']))),X=R.b.div(U||(U=Object(N.a)(["\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n\n"]))),Y={green:"#33CC95",red:"#E52E4D"},Z=R.b.button(G||(G=Object(N.a)(["\n    height: 4rem;\n    border: 1px solid #d7d7d7;\n    border-radius: 0.25rem;\n    background: ",";\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n    transition: border-color 0.2s;\n\n    &:hover {\n      border-color: ",";\n    \n    }\n    img {\n      width: 20px;\n      height: 20px;\n    }\n    span {\n      display: inline-block;\n      margin-left: 1rem;\n      font-size: 1rem;\n\n      color: var(--text-title);\n    }\n"])),(function(n){return n.isActive?Object(Q.b)(.9,Y[n.activeColor]):"transparent"}),Object(Q.a)(.1,"#d7d7d7"));function $(n){var t=n.isOpen,e=n.onRequestClose,a=F().createTransaction,c=Object(r.useState)(""),i=Object(s.a)(c,2),o=i[0],d=i[1],j=Object(r.useState)(""),h=Object(s.a)(j,2),p=h[0],g=h[1],x=Object(r.useState)(0),f=Object(s.a)(x,2),y=f[0],w=f[1],k=Object(r.useState)(""),C=Object(s.a)(k,2),N=C[0],R=C[1];function S(){return(S=Object(O.a)(m.a.mark((function n(t){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,a({amount:y,category:N,title:p,type:o});case 3:w(0),R(""),g(""),d("deposit"),e();case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(v.jsxs)(l.a,{isOpen:t,onRequestClose:e,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:[Object(v.jsx)("button",{type:"button",onClick:e,className:"react-modal-close",children:Object(v.jsx)("img",{src:K,alt:"fechar modal"})}),Object(v.jsxs)(W,{onSubmit:function(n){return S.apply(this,arguments)},children:[Object(v.jsx)("h2",{children:"Cadastrar Transa\xe7\xe3o "}),Object(v.jsx)("input",{placeholder:"T\xedtulo",value:p,onChange:function(n){return g(n.target.value)}}),Object(v.jsx)("input",{type:"number",placeholder:"Valor",value:y,onChange:function(n){return w(Number(n.target.value))}}),Object(v.jsxs)(X,{children:[Object(v.jsxs)(Z,{type:"button",onClick:function(){return d("deposit")},isActive:"deposit"==o,activeColor:"green",children:[Object(v.jsx)("img",{src:b,alt:"Entrada"}),Object(v.jsx)("span",{children:"Entrada"})]}),Object(v.jsxs)(Z,{type:"button",onClick:function(){return d("withdraw")},isActive:"withdraw"==o,activeColor:"red",children:[Object(v.jsx)("img",{src:u,alt:"Saida"}),Object(v.jsx)("span",{children:"Saida"})]})]}),Object(v.jsx)("input",{placeholder:"Categoria",value:N,onChange:function(n){return R(n.target.value)}}),Object(v.jsx)("button",{type:"submit",children:"Cadastrar"})]})]})}var _=Object(R.a)(H||(H=Object(N.a)(['\n\n  :root {\n      --blue: #5429cc;\n      --blue-light: #6933FF;\n      --green: #33CC95;\n      --red: #E52E4D;\n\n      --shape: #FFFFFF;\n      --background: #F0F2F5;\n\n      --text-title: #363F5F;\n      --text-body: #969CB2;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    @media (max-width: 1080px) {\n      font-size: 93.75%;\n    }\n\n    @media (max-width: 720px) {\n      font-size: 87.5%;\n    }\n\n  }\n\n  body {\n    background: var(--background);\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, textarea, button {\n    font-family: "Poppins", sans-serif;\n    font-weight: 400;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 600;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  [disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n  .react-modal-overlay {\n    background: rgba(0, 0, 0, 0.5);\n\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .react-modal-content {\n    width: 100%;\n    max-width: 576px;\n    background: var(--background);\n    padding: 3rem;\n    position: relative;\n    border-radius: 0.24rem;\n  }\n  .react-modal-close {\n    position: absolute;\n    top: 1.5rem;\n    right: 1.5rem;\n\n    border: 0;\n    background: transparent;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.8);\n    }\n  }\n'])));function nn(){var n=Object(r.useState)(!1),t=Object(s.a)(n,2),e=t[0],a=t[1];return Object(v.jsxs)(w,{children:[Object(v.jsx)(P,{onOpenNewTransactionModal:function(){a(!0)}}),Object(v.jsx)(A,{}),Object(v.jsx)($,{isOpen:e,onRequestClose:function(){a(!1)}}),Object(v.jsx)(_,{})]})}l.a.setAppElement("#root"),Object(o.b)({models:{transaction:o.a},seeds:function(n){n.db.loadData({transactions:[{id:1,title:"Freelance website",type:"deposit",category:"Dev",amount:6e3,createdAt:new Date}]})},routes:function(){var n=this;this.namespace="api",this.get("/transactions",(function(){return n.schema.all("transaction")})),this.post("/transactions",(function(n,t){var e=JSON.parse(t.requestBody);return n.create("transaction",e)}))}}),i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(nn,{})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.35c68c7c.chunk.js.map