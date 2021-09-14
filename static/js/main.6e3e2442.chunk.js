(this["webpackJsonpword-search-react"]=this["webpackJsonpword-search-react"]||[]).push([[0],{35:function(e,t,r){},36:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(16),o=r.n(s),c=(r(35),r(12)),l=r(13),h=r(8),i=r(15),d=r(14),u=(r(36),r(6)),j=r(1),b=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).state={letters:n.props.letters,colors:n.props.colors},n}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=Object(j.jsx)("div",{class:"Puzzle",children:Object(j.jsx)("table",{class:"Puzzle-Grid",children:this.props.letters.map((function(t,r){return Object(j.jsx)("tr",{children:t.map((function(t,n){return Object(j.jsx)("th",{class:"Letter",style:{backgroundColor:e.props.colors[r][n]},children:t})}))})}))})});return Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.a.Header,{children:"Puzzle Grid"}),Object(j.jsxs)(u.a.Body,{children:[Object(j.jsx)(u.a.Text,{children:"Here's the word search puzzle! Press the start search button to watch the computer find a word in this puzzle."}),Object(j.jsx)(j.Fragment,{children:t})]})]})}}]),r}(n.Component),p=r(22),f=r.n(p),g=r(27),v=r(21),S=r.p+"static/media/default.666b0f8e.txt",O=r.p+"static/media/coding-languages.0ae5ec2a.txt",x=r.p+"static/media/famous-artists.d41f5289.txt",m=r.p+"static/media/famous-books.07461011.txt",y=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).handleSelectedProblemChange=n.handleSelectedProblemChange.bind(Object(h.a)(n)),n}return Object(l.a)(r,[{key:"handleSelectedProblemChange",value:function(){var e=Object(g.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTextFrom(t.target.value);case 2:r=e.sent,r=this.parseTextToProblem(r),this.props.onSelectedProblemChange(r);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTextFrom",value:function(){var e=Object(g.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.text()})).catch((function(e){return console.log(e)}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseTextToProblem",value:function(e){var t=e.split("\n"),r=[],n=0;do{var a=t[n].trim().split("");r.push(a),n++}while(!/^\s*$/.test(t[n]));n++;var s=[];do{var o=t[n].trim();s.push(o),n++}while(t[n]&&t[n].trim());var c={};return c.letters=r,c.words=s,c}},{key:"render",value:function(){return Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.a.Header,{children:"Problem Controls"}),Object(j.jsxs)(u.a.Body,{children:[Object(j.jsx)(u.a.Title,{children:"Problem Selector"}),Object(j.jsx)(u.a.Text,{children:"Use the select menu below to change the problem. Right now there are only 4 problems to choose from. But soon you'll be able to create your own!"}),Object(j.jsxs)(v.a.Select,{"aria-label":"Problem Selector",onChange:this.handleSelectedProblemChange,children:[Object(j.jsx)("option",{value:S,children:"Default"}),Object(j.jsx)("option",{value:O,children:"Coding Languages"}),Object(j.jsx)("option",{value:x,children:"Famous Artists"}),Object(j.jsx)("option",{value:m,children:"Famous Books"})]})]})]})}}]),r}(n.Component),w=r(25),C=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).handleStartSearch=n.handleStartSearch.bind(Object(h.a)(n)),n.handleSpeedChange=n.handleSpeedChange.bind(Object(h.a)(n)),n.handleSelectedWordChange=n.handleSelectedWordChange.bind(Object(h.a)(n)),n.state={speed:n.props.speed,words:n.props.words,selectedWord:n.props.selectedWord},n}return Object(l.a)(r,[{key:"handleStartSearch",value:function(){this.props.onStartSearch()}},{key:"handleSpeedChange",value:function(e){this.props.onSpeedChange(e.target.value)}},{key:"handleSelectedWordChange",value:function(e){this.props.onSelectedWordChange(e.target.value)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(u.a,{children:[Object(j.jsx)(u.a.Header,{children:"Search Controls"}),Object(j.jsxs)(u.a.Body,{children:[Object(j.jsx)(u.a.Title,{children:"Word Selector"}),Object(j.jsx)(u.a.Text,{children:"Use the select menu below to pick which word to search the puzzle for."}),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v.a.Select,{"aria-label":"Word Selector",onChange:this.handleSelectedWordChange,children:this.props.words.map((function(t){return Object(j.jsx)("option",{value:t,selected:t===e.props.selectedWord,children:t})}))})}),Object(j.jsx)(u.a.Title,{className:"mt-3",children:"Speed"}),Object(j.jsx)(u.a.Text,{children:"Pick how fast the computer should be. Move the slider all the way to the right to solve the problem instantly."}),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v.a.Range,{defaultValue:this.state.speed,min:0,max:500,step:5,onChange:this.handleSpeedChange})}),Object(j.jsx)(u.a.Title,{children:"Start Search"}),Object(j.jsx)(u.a.Text,{children:"Watch how the computer solves the puzzle!"}),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(w.a,{variant:"primary",onClick:this.handleStartSearch,children:"Start Search"})})]})]})}}]),r}(n.Component);function k(e,t,r,n,a,s,o){for(var c=JSON.parse(JSON.stringify(o[0])),l=r;l>=r-n+1;l--){var h=T.stringCoordsToGridCoords(e,t,l,a,s),i=h[0],d=h[1];c[i][d]="grey"}return o.push(c),o}function P(e,t,r,n,a,s,o){var c=JSON.parse(JSON.stringify(o[o.length-1])),l=T.stringCoordsToGridCoords(e,t,r,a,s),h=l[0],i=l[1];return c[h][i]=n,o.push(c),o}var A=function(e,t,r,n,a,s,o){var c=e.length,l=t.length;if(l>c)return[-1,r];var h=function(e){for(var t={},r=e.length-1;r>=0;r--){var n=e.charAt(r);void 0===t[n]&&(t[n]=r.toString())}return t}(t),i=l-1,d=l-1;r=k(n,a,i,l,s,o,r);do{var u=e.charAt(i);if(u==t.charAt(d)){if(r=P(n,a,i,"green",s,o,r),0==d)return[i,r];i--,d--}else{r=P(n,a,i,"red",s,o,r);var j=-1;void 0!==h[u]&&(r=P(n,a,i,"orange",s,o,r),j=parseInt(h[u])),i=i+l-Math.min(d,1+j),d=l-1,i>c-1||(r=k(n,a,i,l,s,o,r))}}while(!(i>c-1));return[-1,r]};function W(e){return e.split("").reverse().join("")}var T={find:function(e,t){var r=Array(1);r[0]=Array(e.length);for(var n=0;n<r[0].length;n++){r[0][n]=Array(e[n].length);for(var a=0;a<e[n].length;a++)r[0][n][a]=""}for(var s=e[0].length,o=function(e){for(var t=e[0].length,r=new Array(t),n=0;n<t;n++){r[n]="";for(var a=0;a<t;a++)r[n]+=e[a][n]}return r}(e),c=function(e){for(var t=e[0].length,r=new Array(t),n=0;n<t;n++){r[n]="";for(var a=0;a<t;a++)r[n]+=e[n][a]}return r}(e),l=function(e){for(var t=e[0].length,r=new Array(2*t-1),n=0;n<t;n++){r[n]="";for(var a=0;a<=n;a++)r[n]+=e[n-a][a]}for(var s=1;s<t;s++){r[t+s-1]="";for(var o=t-1;o>=s;o--)r[t-1+s]+=e[o][s+(t-1)-o]}return r}(e),h=function(e){for(var t=e[0].length,r=new Array(2*t-1),n=t-1;n>=0;n--){var a=t-1-n;r[a]="";for(var s=0;s<=a;s++)r[a]+=e[s][n+s]}for(var o=1;o<t;o++){var c=t-1+o;r[c]="";for(var l=0;l<=t-1-o;l++)r[c]+=e[o+l][l]}return r}(e),i=new Array(o.length),d=new Array(c.length),u=new Array(l.length),j=new Array(h.length),b=0;b<o.length;b++)i[b]=W(o[b]),d[b]=W(c[b]);for(var p=0;p<l.length;p++)u[p]=W(l[p]),j[p]=W(h[p]);var f=new Array(8);f[0]=o,f[1]=h,f[2]=c,f[3]=l,f[4]=i,f[5]=j,f[6]=d,f[7]=u;var g=0,v=0,S=0;e:for(g=0;g<=f.length;g++){if(8==g){g=-1;break e}var O=f[g];for(S=0;S<O.length;S++){var x=A(O[S],t,r,g,S,f,s);if(v=x[0],r=x[1],-1!=v)break e}}return r},stringCoordsToGridCoords:function(e,t,r,n,a){var s=-1,o=-1;return 0==e?(s=r,o=t):1==e?t<a?(s=r,o=a-1-t+r):(s=t-a+1+r,o=r):2==e?(s=t,o=r):3==e?t<a?(s=t-r,o=r):(s=a-1-r,o=t-a+1+r):4==e?(s=a-1-r,o=t):5==e?(r=n[e][t].length-r-1,t<a?(s=r,o=a-1-t+r):(s=t-a+1+r,o=r)):6==e?(s=t,o=a-1-r):7==e&&(r=n[e][t].length-r-1,t<a?(s=t-r,o=r):(s=a-1-r,o=t-a+1+r)),[s,o]}},z=r(23),F=r(30),H=r(18),B=r(28),N=(r(41),function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).handleHide=n.handleHide.bind(Object(h.a)(n)),n.handleShow=n.handleShow.bind(Object(h.a)(n)),n.handleStartSearch=n.handleStartSearch.bind(Object(h.a)(n)),n.handleStopSearch=n.handleStopSearch.bind(Object(h.a)(n)),n.handleSpeedChange=n.handleSpeedChange.bind(Object(h.a)(n)),n.handleSelectedWordChange=n.handleSelectedWordChange.bind(Object(h.a)(n)),n.handleSelectedProblemChange=n.handleSelectedProblemChange.bind(Object(h.a)(n)),n.state={words:[],letters:[[]],colors:[[]],speed:400,selectedWord:"",searching:!1,shouldShow:!1},n.animator,n}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this.state;e.words=["Purdue","Eudrup","Hey","Yeh","Zop","Poz","Don","Nod","Mnd","Dnm","Aor","Roa"],e.letters=[["D","R","L","B","V","W","R"],["P","E","E","K","P","E","E"],["O","U","D","K","P","S","L"],["U","A","R","O","A","T","I"],["L","E","Z","D","N","M","O"],["Y","D","N","I","U","E","B"],["I","O","P","H","H","E","Y"]],e.colors=Array(e.letters.length);for(var t=0;t<e.colors.length;t++){e.colors[t]=Array(e.letters[t].length);for(var r=0;r<e.letters[t].length;r++)e.colors[t][r]=""}e.selectedWord=e.words[0],this.setState(e)}},{key:"handleHide",value:function(){var e=this.state;e.shouldShow=!1,this.setState(e)}},{key:"handleShow",value:function(){var e=this.state;e.shouldShow=!0,this.setState(e)}},{key:"handleStartSearch",value:function(){var e=this,t=this.state.selectedWord.toUpperCase().split(" ").join(""),r=T.find(this.state.letters,t);if(500==this.state.speed){var n=this.state;n.colors=r[r.length-1],this.setState(n)}else for(var a=function(t){e.animator=setTimeout((function(){var n=e.state;n.colors=r[t],e.setState(n)}),(500-e.state.speed)*t)},s=0;s<r.length;s++)a(s)}},{key:"handleStopSearch",value:function(){clearTimeout(this.animator);for(var e=this.state,t=Array(e.letters.length),r=0;r<e.letters.length;r++){t[r]=Array(e.letters[r].length);for(var n=0;n<e.letters[r].length;n++)t[r][n]=""}e.colors=t,this.setState(e)}},{key:"handleSpeedChange",value:function(e){var t=this.state;t.speed=e,this.setState(t)}},{key:"handleSelectedWordChange",value:function(e){var t=this.state;t.selectedWord=e,this.setState(t)}},{key:"handleSelectedProblemChange",value:function(e){var t=this.state;t.letters=e.letters,t.words=e.words,t.selectedWord=t.words[0];for(var r=Array(t.letters.length),n=0;n<t.letters.length;n++){r[n]=Array(t.letters[n].length);for(var a=0;a<t.letters[n].length;a++)r[n][a]=""}t.colors=r,this.setState(t)}},{key:"render",value:function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(w.a,{onClick:this.handleShow,children:"Run Word Search React App"}),Object(j.jsxs)(z.a,{size:"lg",show:this.state.shouldShow,onHide:this.handleHide,children:[Object(j.jsx)(z.a.Header,{closeButton:!0,children:Object(j.jsx)(z.a.Title,{children:"Word Search React App"})}),Object(j.jsx)(z.a.Body,{children:Object(j.jsxs)(F.a,{children:[Object(j.jsx)(B.a,{className:"justify-content-center mb-3",children:Object(j.jsx)(H.a,{children:Object(j.jsx)(y,{onSelectedProblemChange:this.handleSelectedProblemChange})})}),Object(j.jsxs)(B.a,{className:"justify-content-center",children:[Object(j.jsx)(H.a,{children:Object(j.jsx)(C,{words:this.state.words,speed:this.state.speed,selectedWord:this.state.selectedWord,onSelectedWordChange:this.handleSelectedWordChange,onSpeedChange:this.handleSpeedChange,onStartSearch:this.handleStartSearch})}),Object(j.jsx)(H.a,{children:Object(j.jsx)(b,{letters:this.state.letters,colors:this.state.colors})})]})]})})]})]})}}]),r}(n.Component)),D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,44)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),D()}},[[42,1,2]]]);
//# sourceMappingURL=main.6e3e2442.chunk.js.map