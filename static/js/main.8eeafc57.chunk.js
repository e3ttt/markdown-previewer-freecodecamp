(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{17:function(e,n,t){},18:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var i=t(1),r=t(0),a=t.n(r),o=t(3),c=t.n(o),s=(t(17),t(18),t(11)),d=t(2),l="ADD_TEXT",u="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png)\n",h=function(){var e=Object(r.useState)(u),n=Object(s.a)(e,2),t=n[0],a=n[1],o=Object(d.b)();return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Editor"}),Object(i.jsx)("textarea",{id:"editor",value:t,onChange:function(e){a(e.target.value),o(function(e){return{type:l,text:e}}(e.target.value))}})]})},b=t(9),j=t.n(b),f=function(){var e=Object(d.c)((function(e){return e}));return j.a.setOptions({breaks:!0}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{id:"preview-title",children:"Previewer"}),Object(i.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:j()(e)}})]})};var v=function(){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)("div",{className:"editor-container",children:Object(i.jsx)(h,{})}),Object(i.jsx)("div",{className:"previewer-container",children:Object(i.jsx)(f,{})})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),i(e),r(e),a(e),o(e)}))},w=t(4),g=Object(w.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return n.text;default:return e}}));c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(d.a,{store:g,children:Object(i.jsx)(v,{})})}),document.getElementById("root")),m()}},[[25,1,2]]]);
//# sourceMappingURL=main.8eeafc57.chunk.js.map