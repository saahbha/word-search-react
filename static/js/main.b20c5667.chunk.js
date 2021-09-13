(this["webpackJsonpword-search-react"]=this["webpackJsonpword-search-react"]||[]).push([[0],{35:function(e,t,r){},36:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(16),s=r.n(o),c=(r(35),r(12)),l=r(13),h=r(8),i=r(15),d=r(14),u=(r(36),r(6)),j=r(1),b=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).state={letters:n.props.letters,colors:n.props.colors},n}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=Object(j.jsx)("div",{class:"Puzzle",children:Object(j.jsx)("table",{class:"Puzzle-Grid",children:this.props.letters.map((function(t,r){return Object(j.jsx)("tr",{children:t.map((function(t,n){return Object(j.jsx)("th",{class:"Letter",style:{backgroundColor:e.props.colors[r][n]},children:t})}))})}))})});return Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.a.Header,{children:"Puzzle Grid"}),Object(j.jsxs)(u.a.Body,{children:[Object(j.jsx)(u.a.Text,{children:"Here's the word search puzzle! Press the start search button to watch the computer find a word in this puzzle."}),Object(j.jsx)(j.Fragment,{children:t})]})]})}}]),r}(n.Component),p=r(22),f=r.n(p),g=r(27),v=r(21),S=r.p+"static/media/default.666b0f8e.txt",O=r.p+"static/media/coding-languages.0ae5ec2a.txt",x=r.p+"static/media/famous-artists.d41f5289.txt",m=r.p+"static/media/famous-books.07461011.txt",y=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).handleSelectedProblemChange=n.handleSelectedProblemChange.bind(Object(h.a)(n)),n}return Object(l.a)(r,[{key:"handleSelectedProblemChange",value:function(){var e=Object(g.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTextFrom(t.target.value);case 2:r=e.sent,r=this.parseTextToProblem(r),this.props.onSelectedProblemChange(r);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTextFrom",value:function(){var e=Object(g.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.text()})).catch((function(e){return console.log(e)}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseTextToProblem",value:function(e){var t=e.split("\n"),r=[],n=0;do{var a=t[n].trim().split("");r.push(a),n++}while(!/^\s*$/.test(t[n]));n++;var o=[];do{var s=t[n].trim();o.push(s),n++}while(t[n]&&t[n].trim());var c={};return c.letters=r,c.words=o,c}},{key:"render",value:function(){return Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.a.Header,{children:"Problem Controls"}),Object(j.jsxs)(u.a.Body,{children:[Object(j.jsx)(u.a.Title,{children:"Problem Selector"}),Object(j.jsx)(u.a.Text,{children:"Use the select menu below to change the problem. Right now there are only 4 problems to choose from. But soon you'll be able to create your own!"}),Object(j.jsxs)(v.a.Select,{"aria-label":"Problem Selector",onChange:this.handleSelectedProblemChange,children:[Object(j.jsx)("option",{value:S,children:"Default"}),Object(j.jsx)("option",{value:O,children:"Coding Languages"}),Object(j.jsx)("option",{value:x,children:"Famous Artists"}),Object(j.jsx)("option",{value:m,children:"Famous Books"})]})]})]})}}]),r}(n.Component),C=r(25),w=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).handleStartSearch=n.handleStartSearch.bind(Object(h.a)(n)),n.handleSpeedChange=n.handleSpeedChange.bind(Object(h.a)(n)),n.handleSelectedWordChange=n.handleSelectedWordChange.bind(Object(h.a)(n)),n.state={speed:n.props.speed,words:n.props.words,selectedWord:n.props.selectedWord},n}return Object(l.a)(r,[{key:"handleStartSearch",value:function(){this.props.onStartSearch()}},{key:"handleSpeedChange",value:function(e){this.props.onSpeedChange(e.target.value)}},{key:"handleSelectedWordChange",value:function(e){this.props.onSelectedWordChange(e.target.value)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.a.Header,{children:"Search Controls"}),Object(j.jsxs)(u.a.Body,{children:[Object(j.jsx)(u.a.Title,{children:"Word Selector"}),Object(j.jsx)(u.a.Text,{children:"Use the select menu below to pick which word to search the puzzle for."}),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v.a.Select,{"aria-label":"Word Selector",onChange:this.handleSelectedWordChange,children:this.props.words.map((function(t){return Object(j.jsx)("option",{value:t,selected:t===e.props.selectedWord,children:t})}))})}),Object(j.jsx)(u.a.Title,{className:"mt-3",children:"Speed"}),Object(j.jsx)(u.a.Text,{children:"Pick how fast the computer should be."}),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v.a.Range,{defaultValue:this.state.speed,min:0,max:500,step:5,onChange:this.handleSpeedChange})}),Object(j.jsx)(u.a.Title,{children:"Start Search"}),Object(j.jsx)(u.a.Text,{children:"Watch how the computer solves the puzzle!"}),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(C.a,{variant:"primary",onClick:this.handleStartSearch,children:"Start Search"})})]})]})}}]),r}(n.Component);function k(e,t,r,n,a,o,s){for(var c=JSON.parse(JSON.stringify(s[s.length-1])),l=r;l>=r-n+1;l--){var h=z.stringCoordsToGridCoords(e,t,l,a,o),i=h[0],d=h[1];c[i][d]="grey"}return s.push(c),s}function A(e,t,r,n,a,o,s){var c=JSON.parse(JSON.stringify(s[s.length-1])),l=z.stringCoordsToGridCoords(e,t,r,a,o),h=l[0],i=l[1];return c[h][i]=n,s.push(c),s}function P(e,t){for(var r=Array(t),n=0;n<t;n++){r[n]=Array(t);for(var a=0;a<t;a++)r[n][a]=""}return e.push(r),e}var W=function(e,t,r,n,a,o,s){var c=e.length,l=t.length;if(l>c)return[-1,r];var h=function(e){for(var t={},r=e.length-1;r>=0;r--){var n=e.charAt(r);void 0===t[n]&&(t[n]=r.toString())}return t}(t),i=l-1,d=l-1;r=k(n,a,i,l,o,s,r);do{var u=e.charAt(i);if(u==t.charAt(d)){if(r=A(n,a,i,"green",o,s,r),0==d)return[i,r];i--,d--}else{r=A(n,a,i,"red",o,s,r);var j=-1;void 0!==h[u]&&(r=A(n,a,i,"orange",o,s,r),j=parseInt(h[u])),i=i+l-Math.min(d,1+j),d=l-1,r=P(r,s),i>c-1||(r=k(n,a,i,l,o,s,r))}}while(!(i>c-1));return[-1,r]};function T(e){return e.split("").reverse().join("")}var z={find:function(e,t){var r=Array(1);r[0]=Array(e.length);for(var n=0;n<r[0].length;n++){r[0][n]=Array(e[n].length);for(var a=0;a<e[n].length;a++)r[0][n][a]=""}for(var o=e[0].length,s=function(e){for(var t=e[0].length,r=new Array(t),n=0;n<t;n++){r[n]="";for(var a=0;a<t;a++)r[n]+=e[a][n]}return r}(e),c=function(e){for(var t=e[0].length,r=new Array(t),n=0;n<t;n++){r[n]="";for(var a=0;a<t;a++)r[n]+=e[n][a]}return r}(e),l=function(e){for(var t=e[0].length,r=new Array(2*t-1),n=0;n<t;n++){r[n]="";for(var a=0;a<=n;a++)r[n]+=e[n-a][a]}for(var o=1;o<t;o++){r[t+o-1]="";for(var s=t-1;s>=o;s--)r[t-1+o]+=e[s][o+(t-1)-s]}return r}(e),h=function(e){for(var t=e[0].length,r=new Array(2*t-1),n=t-1;n>=0;n--){var a=t-1-n;r[a]="";for(var o=0;o<=a;o++)r[a]+=e[o][n+o]}for(var s=1;s<t;s++){var c=t-1+s;r[c]="";for(var l=0;l<=t-1-s;l++)r[c]+=e[s+l][l]}return r}(e),i=new Array(s.length),d=new Array(c.length),u=new Array(l.length),j=new Array(h.length),b=0;b<s.length;b++)i[b]=T(s[b]),d[b]=T(c[b]);for(var p=0;p<l.length;p++)u[p]=T(l[p]),j[p]=T(h[p]);var f=new Array(8);f[0]=s,f[1]=h,f[2]=c,f[3]=l,f[4]=i,f[5]=j,f[6]=d,f[7]=u;var g=0,v=0,S=0;e:for(g=0;g<=f.length;g++){if(8==g){g=-1;break e}var O=f[g];for(S=0;S<O.length;S++){var x=W(O[S],t,r,g,S,f,o);if(v=x[0],r=x[1],-1!=v)break e}}return r},stringCoordsToGridCoords:function(e,t,r,n,a){var o=-1,s=-1;return 0==e?(o=r,s=t):1==e?t<a?(o=r,s=a-1-t+r):(o=t-a+1+r,s=r):2==e?(o=t,s=r):3==e?t<a?(o=t-r,s=r):(o=a-1-r,s=t-a+1+r):4==e?(o=a-1-r,s=t):5==e?(r=n[e][t].length-r-1,t<a?(o=r,s=a-1-t+r):(o=t-a+1+r,s=r)):6==e?(o=t,s=a-1-r):7==e&&(r=n[e][t].length-r-1,t<a?(o=t-r,s=r):(o=a-1-r,s=t-a+1+r)),[o,s]}},F=r(23),H=r(30),B=r(18),N=r(28),D=(r(41),function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).handleHide=n.handleHide.bind(Object(h.a)(n)),n.handleShow=n.handleShow.bind(Object(h.a)(n)),n.handleStartSearch=n.handleStartSearch.bind(Object(h.a)(n)),n.handleStopSearch=n.handleStopSearch.bind(Object(h.a)(n)),n.handleSpeedChange=n.handleSpeedChange.bind(Object(h.a)(n)),n.handleSelectedWordChange=n.handleSelectedWordChange.bind(Object(h.a)(n)),n.handleSelectedProblemChange=n.handleSelectedProblemChange.bind(Object(h.a)(n)),n.state={words:[],letters:[[]],colors:[[]],speed:400,selectedWord:"",searching:!1,shouldShow:!1},n.animator,n}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this.state;e.words=["Purdue","Eudrup","Hey","Yeh","Zop","Poz","Don","Nod","Mnd","Dnm","Aor","Roa"],e.letters=[["D","R","L","B","V","W","R"],["P","E","E","K","P","E","E"],["O","U","D","K","P","S","L"],["U","A","R","O","A","T","I"],["L","E","Z","D","N","M","O"],["Y","D","N","I","U","E","B"],["I","O","P","H","H","E","Y"]],e.colors=Array(e.letters.length);for(var t=0;t<e.colors.length;t++){e.colors[t]=Array(e.letters[t].length);for(var r=0;r<e.letters[t].length;r++)e.colors[t][r]=""}e.selectedWord=e.words[0],this.setState(e)}},{key:"handleHide",value:function(){var e=this.state;e.shouldShow=!1,this.setState(e)}},{key:"handleShow",value:function(){var e=this.state;e.shouldShow=!0,this.setState(e)}},{key:"handleStartSearch",value:function(){for(var e=this,t=this.state.selectedWord.toUpperCase().split(" ").join(""),r=z.find(this.state.letters,t),n=function(t){e.animator=setTimeout((function(){var n=e.state;n.colors=r[t],e.setState(n)}),(500-e.state.speed)*t)},a=0;a<r.length;a++)n(a)}},{key:"handleStopSearch",value:function(){clearTimeout(this.animator);for(var e=this.state,t=Array(e.letters.length),r=0;r<e.letters.length;r++){t[r]=Array(e.letters[r].length);for(var n=0;n<e.letters[r].length;n++)t[r][n]=""}e.colors=t,this.setState(e)}},{key:"handleSpeedChange",value:function(e){var t=this.state;t.speed=e,this.setState(t)}},{key:"handleSelectedWordChange",value:function(e){var t=this.state;t.selectedWord=e,this.setState(t)}},{key:"handleSelectedProblemChange",value:function(e){var t=this.state;t.letters=e.letters,t.words=e.words,t.selectedWord=t.words[0];for(var r=Array(t.letters.length),n=0;n<t.letters.length;n++){r[n]=Array(t.letters[n].length);for(var a=0;a<t.letters[n].length;a++)r[n][a]=""}t.colors=r,this.setState(t)}},{key:"render",value:function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(C.a,{onClick:this.handleShow,children:"Run Word Search React App"}),Object(j.jsxs)(F.a,{size:"lg",show:this.state.shouldShow,onHide:this.handleHide,children:[Object(j.jsx)(F.a.Header,{closeButton:!0,children:Object(j.jsx)(F.a.Title,{children:"Word Search React App"})}),Object(j.jsx)(F.a.Body,{children:Object(j.jsxs)(H.a,{children:[Object(j.jsx)(N.a,{className:"justify-content-center mb-3",children:Object(j.jsx)(B.a,{children:Object(j.jsx)(y,{onSelectedProblemChange:this.handleSelectedProblemChange})})}),Object(j.jsxs)(N.a,{className:"justify-content-center",children:[Object(j.jsx)(B.a,{children:Object(j.jsx)(w,{words:this.state.words,speed:this.state.speed,selectedWord:this.state.selectedWord,onSelectedWordChange:this.handleSelectedWordChange,onSpeedChange:this.handleSpeedChange,onStartSearch:this.handleStartSearch})}),Object(j.jsx)(B.a,{children:Object(j.jsx)(b,{letters:this.state.letters,colors:this.state.colors})})]})]})})]})]})}}]),r}(n.Component)),E=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,44)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),E()}},[[42,1,2]]]);
//# sourceMappingURL=main.b20c5667.chunk.js.map