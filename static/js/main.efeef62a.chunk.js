(this["webpackJsonpstandard-setter-frontend"]=this["webpackJsonpstandard-setter-frontend"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(0),n=s(1),r=s(8),i=s.n(r);s(15),s(16);var l=function(e){for(var t=e.titles.length,s=1,a=[],c=0;c<t;c++){for(var n=e.labels[c].length,r=[],i=0;i<n;i++)r.push(s),s++;a.push(r)}return[a,s-1]},u=s(9);var b=function(e,t){for(var s=Object(u.a)(t.labels).slice(0),a=[],c=[],n=0,r=0;r<s.length;r++){for(var i=0;i<s[r].length;i++)c.push(e[n]),n++;a.push(c),c=[]}return a},o=s(3);function m(e){var t=e.borderWidth,s=e.bgColour,a=e.navButtonLabel;return Object(c.jsx)("div",{className:"mt1 mr2 mb2 buttonDimensions ba b--purple shadow-4 ".concat(t," ").concat(s),children:Object(c.jsx)("div",{className:"",children:Object(c.jsx)("div",{className:"ma2 dark-gray",children:a})})})}function j(e){var t,s,a=e.navButtonLabel,n=e.itemNumber,r=e.itemNavNumber,i=e.setItemNavNumber,l=e.scoreMappedToNav,u=e.displayNumberOutOfRange;return t=r===n?"bw1":"",s=""===l?"white":"bg-moon-gray",Object(c.jsxs)(c.Fragment,{children:[!u&&Object(c.jsx)("div",{onClick:function(e){e.preventDefault(),i(n)},className:"grow pointer",children:Object(c.jsx)(m,{borderWidth:t,bgColour:s,navButtonLabel:a})}),u&&Object(c.jsx)("div",{className:"o-50",children:Object(c.jsx)(m,{borderWidth:t,bgColour:s,navButtonLabel:a})})]})}function d(e){for(var t=e.labels,s=e.itemNumbers,a=e.labels.length,n=[],r=e.itemNavNumber,i=e.setItemNavNumber,l=e.scoresMappedToNav,u=e.displayNumberOutOfRange,b=0;b<a;b++)n.push(Object(c.jsx)(j,{navButtonLabel:t[b],itemNumber:s[b],itemNavNumber:r,setItemNavNumber:i,scoreMappedToNav:l[b],displayNumberOutOfRange:u},s[b]));return Object(c.jsx)("div",{className:"flex flex-row flex-wrap",children:n})}function O(e){var t=e.title,s=e.displayNumberOutOfRange;return Object(c.jsxs)(c.Fragment,{children:[!s&&Object(c.jsx)("div",{className:"f4 purple mt1 b",children:t}),s&&Object(c.jsx)("div",{className:"f4 purple mt1 b o-50",children:t})]})}function p(e){var t=e.title,s=e.labels,a=e.itemNumbers,n=e.itemNavNumber,r=e.setItemNavNumber,i=e.scoresMappedToNav,l=e.displayNumberOutOfRange;return Object(c.jsxs)("div",{className:"mt3 mb3 ml1 flex flex-column",children:[Object(c.jsx)(O,{title:t,displayNumberOutOfRange:l}),Object(c.jsx)(d,{labels:s,itemNumbers:a,itemNavNumber:n,setItemNavNumber:r,scoresMappedToNav:i,displayNumberOutOfRange:l})]})}var x=function(e){for(var t=[],s=e.titlesAndLabels,a=e.itemNumbers,n=e.itemNavNumber,r=e.setItemNavNumber,i=e.scoresMappedToNav,l=e.displayNumberOutOfRange,u=0;u<s.titles.length;u++)t.push(Object(c.jsx)(p,{title:s.titles[u],labels:s.labels[u],itemNumbers:a[u],itemNavNumber:n,setItemNavNumber:r,scoresMappedToNav:i[u],displayNumberOutOfRange:l},s.titles[u]));return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"navBarSide br b--purple bw1 shadow-4 ml3",children:t})})},f=s.p+"static/media/logo.0d889039.svg";function h(e){var t=e.text,s=e.action,a=e.extraStyle;return Object(c.jsx)("div",{onClick:s,className:"flex-grow pl3 pr3 pt2 pb2 flex items-center b--purple bw1 "+a,children:Object(c.jsx)("div",{className:"f5 link dib dim purple pointer",children:t})})}var N=function(e){var t=e.showAboutModal,s=e.showInstructionsModal,a=e.signOut;return Object(c.jsxs)("nav",{className:"flex justify-between items-center h3 b--purple bb navbar bw5",children:[Object(c.jsxs)("div",{className:"ml4 flex items-end",children:[Object(c.jsx)("a",{href:"https://www.acer.org/au",target:"_blank",children:Object(c.jsx)("img",{src:f,className:"mt2"})}),Object(c.jsx)("div",{className:"f3 purple ml3 mb1",children:"Swift"})]}),Object(c.jsxs)("div",{className:"flex flex-row mr2",children:[Object(c.jsx)(h,{action:t,text:"About standard setting",extraStyle:"br"}),Object(c.jsx)(h,{action:s,text:"Instructions",extraStyle:"br"}),Object(c.jsx)(h,{action:a,text:"Sign out"})]})]})};var v=function(e){var t=e.imgSource;return Object(c.jsx)("div",{className:"flex justify-center mt4 image",children:Object(c.jsx)("img",{src:t,width:"auto",height:"auto"})})};var g=function(e){return Object(c.jsx)("a",{className:"f5 no-underline purple inline-flex items-center pa3 ba border-box b--purple",children:e.children})};var w=function(e){var t=e.inputFieldRef,s=e.inputFieldValue,a=e.setInputFieldValue,r=e.displayNumberOutOfRange,i=e.setItemNavNumber;return Object(n.useRef)((function(){t.addEventListener("onclick",(function(){console.log("ok?")}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"flex flex-row items-center ba b--purple bg-purple pa2 pl3 pr3 justify-center",children:[Object(c.jsx)("label",{className:"white f4 db mt1 mb1 mr3 ",children:"Score:"}),Object(c.jsx)("input",{className:"inputField f4 input-reset ba pa2 mt1 mb1 w3 h2 tc bg-white",type:"text",value:s,onChange:function(e){a(e.target.value)},onKeyPress:function(e){r||"Enter"!==e.key||i((function(e){return e+1}))},ref:t})]})})};function y(e){return Object(c.jsx)("svg",{className:"w1",viewBox:"0 0 32 32",children:Object(c.jsx)("path",{stroke:"none",fill:"#5E2CA5",d:"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"})})}function k(e){return Object(c.jsx)("svg",{className:"w1",viewBox:"0 0 32 32",children:Object(c.jsx)("path",{stroke:"none",fill:"#5E2CA5",d:"M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"})})}function S(e){return Object(c.jsxs)(g,{children:[Object(c.jsx)(y,{}),Object(c.jsx)("span",{className:"pl1 b",children:"Previous"})]})}function I(e){return Object(c.jsxs)(g,{children:[Object(c.jsx)("span",{className:"pr1 b",children:"Next"}),Object(c.jsx)(k,{})]})}var C=function(e){var t=e.itemNavNumber,s=e.setItemNavNumber,a=e.maxItemNavNumber,n=e.maxScores,r=e.inputFieldRef,i=e.inputFieldValue,l=e.setInputFieldValue,u=e.displayNumberOutOfRange,b=n[t-1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"pa3 flex flex-row justify-between items-center",children:[t>1&&u&&Object(c.jsx)("div",{className:"o-50",children:Object(c.jsx)(S,{})}),t>1&&!u&&Object(c.jsx)("div",{className:"pointer grow",onClick:function(e){e.preventDefault(),s((function(e){return e-1}))},children:Object(c.jsx)(S,{})}),1===t&&Object(c.jsx)("div",{style:{width:"121px"}}),Object(c.jsx)("div",{children:Object(c.jsx)(w,{inputFieldValue:i,setInputFieldValue:l,inputFieldRef:r,displayNumberOutOfRange:u,setItemNavNumber:s})}),t!==a&&!u&&Object(c.jsx)("div",{className:"grow flex justify-center pointer grow",onClick:function(e){e.preventDefault(),s((function(e){return e+1}))},style:{width:"116px"},children:Object(c.jsx)(I,{})}),t!==a&&u&&Object(c.jsx)("div",{className:"o-50 flex justify-center",style:{width:"116px"},children:Object(c.jsx)(I,{})}),t===a&&Object(c.jsx)("div",{className:"ba mt1 br2 b--purple shadow-1 bw1 b bg-white flex justify-center grow pointer",style:{width:"116px",height:"55px"},children:Object(c.jsx)("div",{className:"h2 pa3 f5 purple",children:"Submit"})})]}),u&&Object(c.jsxs)("div",{className:"ml2 tc dark-red f6",children:["Please enter a score between 0 and ",b,"."]})]})};var F=function(e){var t,s=e.itemNavNumber,a=e.inputFieldValue,n=e.setInputFieldValue,r=e.setScores,i=e.maxScores,l=e.displayNumberOutOfRange,u=e.setDisplayNumberOutOfRange,b=e.inputFieldRef,m=e.displayFinalSubmitButton,j=e.numberOfScoresComplete,d=e.maxItemNavNumber,O=e.scores,p=e.titlesAndLabels,f=e.itemNumbers,h=e.setItemNavNumber,g=e.scoresMappedToNav,w=e.showAboutModal,y=e.showInstructionsModal,k=e.signOut;return e.completionButtonClick,Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsx)(N,{showAboutModal:w,showInstructionsModal:y,signOut:k})}),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"flex justify-between",children:[Object(c.jsx)(x,{titlesAndLabels:p,itemNumbers:f,itemNavNumber:s,setItemNavNumber:h,scoresMappedToNav:g,displayNumberOutOfRange:l}),Object(c.jsxs)("div",{className:"flex flex-column imageAndNavButtons",children:[Object(c.jsx)(v,{imgSource:"".concat("/frontend","/images/page").concat(s.toString(),".png")}),Object(c.jsx)("div",{className:"ml4 mr4 items-center mt4",children:Object(c.jsx)(C,(t={itemNavNumber:s,numberOfScoresComplete:j,setItemNavNumber:h,maxItemNavNumber:d,inputFieldValue:a,setInputFieldValue:n},Object(o.a)(t,"itemNavNumber",s),Object(o.a)(t,"maxItemNavNumber",d),Object(o.a)(t,"setItemNavNumber",h),Object(o.a)(t,"scores",O),Object(o.a)(t,"setScores",r),Object(o.a)(t,"maxScores",i),Object(o.a)(t,"displayNumberOutOfRange",l),Object(o.a)(t,"setDisplayNumberOutOfRange",u),Object(o.a)(t,"inputFieldRef",b),Object(o.a)(t,"displayFinalSubmitButton",m),t))})]})]})})]})};var M=function(e){var t=e.Width;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"loginContainer mt5",children:Object(c.jsx)("div",{className:"bg-white ba b--purple shadow-4",style:{width:t},children:Object(c.jsx)("div",{className:"flex justify-center",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"flex flex-row items-end mt5",children:[Object(c.jsx)("img",{src:f}),Object(c.jsx)("div",{className:"f3 purple ml3",children:"Swift"})]}),e.children]})})})})})};var R=function(e){var t=e.buttonText;return Object(c.jsx)("button",{className:"pointer grow bg-purple ba white pa1 pl3 pr3 b--purple",children:t})};var T=function(e){var t=e.clickLogin;return Object(c.jsxs)(M,{Width:"350px",children:[Object(c.jsxs)("div",{className:"flex flex-column w5 mt5",children:[Object(c.jsx)("label",{className:"purple",children:"Session Name"}),Object(c.jsx)("input",{className:"f5"})]}),Object(c.jsxs)("div",{className:"flex flex-column w5 mt4",children:[Object(c.jsx)("label",{className:"purple",children:"Examiner Code"}),Object(c.jsx)("input",{className:"f5"})]}),Object(c.jsxs)("div",{className:"flex flex-column mt4 w5 mb5",children:[Object(c.jsx)("label",{className:"purple",children:"Password (just click sign in for now)"}),Object(c.jsx)("input",{className:"f5",type:"password"})]}),Object(c.jsx)("div",{className:"flex flex-row-reverse mb5",onClick:t,children:Object(c.jsx)(R,{buttonText:"Sign in"})})]})};var L=function(e){var t=e.clickOk,s=e.modalTitle;return Object(c.jsxs)("div",{className:"ba b--purple pa4 br4 bg-white modal selectedBox shadow-4",children:[Object(c.jsx)("p",{className:"purple b f4 mb4",children:s}),Object(c.jsx)("div",{className:"ml2 dark-gray mb4",children:e.children}),Object(c.jsx)("div",{className:"flex flex-row-reverse",onClick:t,children:Object(c.jsx)(R,{buttonText:"ok"})})]})};var A=function(e){var t=e.clickOk,s=e.modalTitle;return Object(c.jsxs)(L,{modalTitle:s,clickOk:t,children:[Object(c.jsx)("p",{children:"Consider the assessment item shown and the maximum mark and use this to determine a score for the minimally competent candidate."}),Object(c.jsx)("p",{children:"Switch between items with the previous and next buttons, or the buttons to the left. You may sign out and return, your progress is automatically saved."}),Object(c.jsx)("p",{children:"A submission button will appear when you have filled in all your scores. You may not change your scores after final submission."})]})};var B=function(e){var t=e.clickOk,s=e.modalTitle;return Object(c.jsxs)(L,{modalTitle:s,clickOk:t,children:[Object(c.jsx)("p",{children:"Standard setting is the process of emperically determining a cutscore."}),Object(c.jsx)("p",{children:"Cutscores are important for high-stakes assessment, and used to determine which candidates are competent."}),Object(c.jsx)("p",{children:"You are ensuring this assessment is defensible by completing this standard setting task."})]})};var V=function(e){var t=e.clickOk,s=e.clickFinalSubmit;return Object(c.jsxs)("div",{className:"ba b--purple pa4 br3 bg-white modal selectedBox shadow-4",children:[Object(c.jsx)("p",{className:"purple b f4 mb4",children:"Submit scores"}),Object(c.jsxs)("div",{className:"dark-gray mb4",children:[Object(c.jsx)("p",{children:"Are you sure you would like to submit your scores?"}),Object(c.jsx)("p",{children:"Once you submit them you cannot change them."})]}),Object(c.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(c.jsx)("div",{onClick:t,children:Object(c.jsx)(R,{buttonText:"Cancel"})}),Object(c.jsx)("div",{onClick:s,children:Object(c.jsx)(R,{buttonText:"Submit"})})]})]})};for(var E=function(e){return Object(c.jsx)(M,{Width:"500px",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"purple mt5",children:"Thank you for completing this standard setting task."}),Object(c.jsx)("p",{className:"purple",children:"Your scores have been saved."}),Object(c.jsx)("p",{className:"purple mb5",children:"Your College and ACER will be in touch about next steps."})]})})},D=1;D<=60;D++){(new Image).src="".concat("/frontend","/images/page").concat(D.toString(),".png")}for(var W={titles:["Medium Case 1","Medium Case 2","Medium Case 3","Medium Case 4","Medium Case 5","Medium Case 6"],labels:[[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]]},Y=[],P=0;P<60;P++)Y.push(Math.round(9*Math.random()+1));console.log(Y);var z=Y.slice(),J=l(W),K=Object(a.a)(J,2),_=K[0],q=K[1];function G(){var e=Object(n.useState)(1),t=Object(a.a)(e,2),s=t[0],r=t[1],i=Object(n.useState)(Array(q).fill("")),l=Object(a.a)(i,2),u=l[0],o=l[1],m=Object(n.useState)(""),j=Object(a.a)(m,2),d=j[0],O=j[1],p=Object(n.useState)(b(u,W)),x=Object(a.a)(p,2),f=x[0],h=x[1],N=Object(n.useState)(!1),v=Object(a.a)(N,2),g=v[0],w=v[1],y=Object(n.useState)(!1),k=Object(a.a)(y,2),S=k[0],I=k[1],C=Object(n.useState)(0),M=Object(a.a)(C,2),R=M[0],L=M[1],D=Object(n.useState)(!0),Y=Object(a.a)(D,2),P=Y[0],J=Y[1],K=Object(n.useState)(!1),G=Object(a.a)(K,2),H=G[0],Q=G[1],U=Object(n.useState)(!1),X=Object(a.a)(U,2),Z=X[0],$=X[1],ee=Object(n.useState)(!1),te=Object(a.a)(ee,2),se=te[0],ae=te[1],ce=Object(n.useState)(!1),ne=Object(a.a)(ce,2),re=ne[0],ie=ne[1],le=Object(n.useState)(!1),ue=Object(a.a)(le,2),be=ue[0],oe=ue[1],me=Object(n.useRef)(null);function je(){Q(!0),ie(!1),oe(!1),ae(!1),J(!1),$(!1)}return Object(n.useEffect)((function(){if(isNaN(d)||Number(d)<0||Number(d)>z[s-1])w(!0);else{w(!1);var e=u.slice();e[s-1]=d,o(e),h(b(e,W)),-1===e.indexOf("")?I(!0):I(!1),L(e.filter((function(e){return""!==e})).length),o(e),setTimeout((function(){console.log(e)}),1)}}),[d]),Object(n.useEffect)((function(){O(u[s-1])}),[s]),Object(c.jsxs)(c.Fragment,{children:[P&&Object(c.jsx)(T,{clickLogin:function(){Q(!0),ie(!0),oe(!1),ae(!1),J(!1),$(!1)}}),H&&Object(c.jsx)(F,{completionButtonClick:function(){Q(!0),ie(!1),oe(!1),ae(!0),J(!1),$(!1)},showAboutModal:function(){Q(!0),ie(!1),oe(!0),ae(!1),J(!1),$(!1)},showInstructionsModal:function(){Q(!0),ie(!0),oe(!1),ae(!1),J(!1),$(!1)},signOut:function(){Q(!1),ie(!1),oe(!1),ae(!1),J(!0),$(!1)},setRenderInstructionsModal:ie,itemNavNumber:s,inputFieldValue:d,setInputFieldValue:O,maxItemNavNumber:q,setItemNavNumber:r,scores:u,setScores:o,maxScores:z,displayNumberOutOfRange:g,setDisplayNumberOutOfRange:w,inputFieldRef:me,displayFinalSubmitButton:S,numberOfScoresComplete:R,titlesAndLabels:W,itemNumbers:_,scoresMappedToNav:f}),re&&Object(c.jsx)(A,{modalTitle:"Instructions",clickOk:je}),be&&Object(c.jsx)(B,{modalTitle:"About standard setting",clickOk:je}),se&&Object(c.jsx)(V,{clickOk:je,clickFinalSubmit:function(){Q(!1),ie(!1),oe(!1),ae(!1),J(!1),$(!0)}}),Z&&Object(c.jsx)(E,{})]})}i.a.render(Object(c.jsx)(G,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.efeef62a.chunk.js.map