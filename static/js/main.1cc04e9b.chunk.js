(window["webpackJsonpprogramming-tests-app"]=window["webpackJsonpprogramming-tests-app"]||[]).push([[0],{35:function(e,t,n){e.exports=n(68)},64:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),c=n(14),l=n(0),u=n.n(l),o=n(10),s=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(34),m=n.n(i),d=n(6),f=n.n(d);var p=n(17),E=n.n(p),h=n(18),v=n.n(h);function w(e){return u.a.createElement(E.a,{bg:"light",expand:"lg"},u.a.createElement(E.a.Brand,{href:"#",onClick:e.renderTests},"\u0422\u0435\u0441\u0442\u044b \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e"),u.a.createElement(v.a,{className:"mr-auto"},u.a.createElement(v.a.Link,{href:"#",onClick:e.renderTests},"C# / .NET")))}var x=n(19),k=n.n(x),g=(n(64),["\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445","\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438","\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438","\u0423\u0441\u043b\u043e\u0432\u0438\u044f"]);function y(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then(function(e){return e.text()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function T(e){return q.apply(this,arguments)}function q(){return(q=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("tests/test"+t+".json").then(function(e){return e.json()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var B=0,C=0,I=0;function j(e){var t=e.question.answers.map(function(e,t){return u.a.createElement("div",null,u.a.createElement("input",{type:"radio",name:"answer",id:"answer"+t,value:t}),u.a.createElement("label",{for:"answer"+t},u.a.createElement("code",null,e)))});I=e.question.correct;var n=e.question.question+e.code;return u.a.createElement("form",null,u.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}),t,u.a.createElement("hr",null),u.a.createElement(m.a,{onClick:function(){return N(e.testIndex)}},"\u0414\u0430\u043b\u0435\u0435"))}function N(e){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark(function e(t){var n,a,c,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(B>0)){e.next=7;break}if(void 0!=(n=Array.from(document.getElementsByName("answer")).find(function(e){return e.checked}))){e.next=4;break}return e.abrupt("return");case 4:n.value==I&&C++,n.checked=!1;case 7:return e.next=9,T(t);case 9:if(a=e.sent,!(B<a.questions.length)){e.next=21;break}if(c="",void 0==a.questions[B].questionCode){e.next=16;break}return e.next=15,y(a.questions[B].questionCode);case 15:c=e.sent;case 16:l=j({code:c,question:a.questions[B],testIndex:t}),s.a.render(u.a.createElement("div",null,u.a.createElement(w,{renderTests:J}),u.a.createElement(f.a,null,u.a.createElement(f.a.Body,null,u.a.createElement(f.a.Title,null,a.title),u.a.createElement("hr",null),u.a.createElement(f.a.Text,null,l)))),document.getElementById("root")),B++,e.next=22;break;case 21:s.a.render(u.a.createElement("div",null,u.a.createElement(w,{renderTests:J}),u.a.createElement(f.a,null,u.a.createElement(f.a.Body,null,u.a.createElement(f.a.Title,null,a.title),u.a.createElement("hr",null),u.a.createElement(f.a.Text,null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: ",C," / ",a.questions.length)))),document.getElementById("root"));case 22:case"end":return e.stop()}},e)}))).apply(this,arguments)}function J(){var e=function(e){B=0,C=0;var t=e.map(function(e,t){return u.a.createElement(k.a.Item,{action:!0,onClick:function(){return N(t)}},e)});return u.a.createElement("div",null,u.a.createElement(w,{renderTests:J}),u.a.createElement(f.a,null,u.a.createElement(f.a.Body,null,u.a.createElement(f.a.Title,null,"\u0422\u0435\u0441\u0442\u044b \u043f\u043e C# / .NET"),u.a.createElement(f.a.Text,null,u.a.createElement(k.a,null,t)))))}(g);s.a.render(e,document.getElementById("root"))}J(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.1cc04e9b.chunk.js.map