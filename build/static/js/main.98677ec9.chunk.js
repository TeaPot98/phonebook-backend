(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){"use strict";t.r(n);var o=t(2),c=t(17),r=t.n(c),a=t(8),u=t(3),i=t(4),s=t.n(i),l="/api/persons",d=function(){return s.a.get(l).then((function(e){return e.data}))},b=function(e){return s.a.post(l,e).then((function(e){return e.data}))},f=function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},j=function(e,n){return s.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},h=t(0),m=function(e){var n=e.notification;if(null===n)return null;var t={color:"error"===n.type?"red":"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return Object(h.jsx)("div",{style:t,children:n.message})},O=function(e){var n=e.value,t=e.onChange;return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{value:n,onChange:t})]})},g=function(e){var n=e.addNumber,t=e.newName,o=e.newNumber,c=e.handleNameChange,r=e.handleNumberChange;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:t,onChange:c})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:o,onChange:r})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var n=e.numbersToShow,t=e.deleteNumber;return Object(h.jsx)("ul",{children:n.map((function(e){return Object(h.jsxs)("li",{children:[e.name," ",e.number,Object(h.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.id)}))})},p=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),i=Object(u.a)(r,2),s=i[0],l=i[1],p=Object(o.useState)(""),x=Object(u.a)(p,2),w=x[0],N=x[1],C=Object(o.useState)(""),y=Object(u.a)(C,2),S=y[0],k=y[1],T=Object(o.useState)(null),B=Object(u.a)(T,2),D=B[0],E=B[1];Object(o.useEffect)((function(){d().then((function(e){c(e)}))}),[]);var I=""===S?t:t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(m,{notification:D}),Object(h.jsx)(O,{value:S,onChange:function(e){k(e.target.value),console.log(e.target.value)}}),Object(h.jsx)("h3",{children:"Add a new"}),Object(h.jsx)(g,{addNumber:function(e){if(e.preventDefault(),console.log("button clicked !"),t.some((function(e){return e.name===s}))&&window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one ?"))){var n=t.find((function(e){return e.name===s})),o=Object(a.a)(Object(a.a)({},n),{},{number:w});j(n.id,o).then((function(e){c(t.map((function(n){return n.id!==e.id?n:e}))),l(""),N(""),E({message:"Updated ".concat(e.name),type:"success"}),setTimeout((function(){E(null)}),4e3)}))}else{b({name:s,number:w}).then((function(e){c(t.concat(e)),l(""),N(""),E({message:"Updated ".concat(e.name),type:"success"}),setTimeout((function(){E(null)}),4e3)})).catch((function(e){return console.log(e)}))}},newName:s,newNumber:w,handleNameChange:function(e){l(e.target.value),console.log(e.target.value)},handleNumberChange:function(e){N(e.target.value),console.log(e.target.value)}}),Object(h.jsx)("h3",{children:"Numbers"}),Object(h.jsx)(v,{numbersToShow:I,deleteNumber:function(e){window.confirm("Delete ".concat(t.find((function(n){return n.id===e})).name," ?"))&&f(e).then((function(n){console.log(n),c(t.filter((function(n){return n.id!==e})))})).catch((function(n){console.log(n),E({message:"Information of ".concat(t.find((function(n){return n.id===e})).name," has already been removed from server"),type:"error"}),setTimeout((function(){E(null)}),4e3)}))}})]})};r.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.98677ec9.chunk.js.map