(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(n,e,t){n.exports=t.p+"static/media/Background.120cee48.jpg"},19:function(n,e,t){n.exports=t(26)},26:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(13),o=t.n(i),c=t(3),l=t(4),u=t(6),s=t(5),m=t(1),f=t(2),b=t(8),h=t(7);function p(){var n=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    color: ",";\n    font-size: 35px;\n    font-weight: bold;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: 150px;\n"]);return p=function(){return n},n}function d(){var n=Object(m.a)(["\n    text-decoration: none;\n    color: ",";\n    &:link,\n    &:visited {\n        text-decoration: none;\n        color: inherited;\n    }\n    margin-right: 20px;\n    margin-left: 20px;\n"]);return d=function(){return n},n}function g(){var n=Object(m.a)(["\n    position: relative;\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-right: 130px;\n    margin-left: 20px;\n"]);return g=function(){return n},n}function v(){var n=Object(m.a)(["\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    font-size: 15px;\n    height: 100%;\n    width: 100%;\n"]);return v=function(){return n},n}var j=f.b.div(v()),O=f.b.div(g()),w=f.b.a(d(),(function(n){return n.color?n.color:h["general-colors"].white})),y=f.b.p(p(),h["general-colors"].blue),x=function(n){Object(u.a)(t,n);var e=Object(s.a)(t);function t(n){var a;return Object(c.a)(this,t),(a=e.call(this,n)).state={my_name:"MANDU SHI ._",typing_name:"",name_index:0,time_elapsed:50},a.start_fps=(new Date).getTime(),a.animate_name=a.animate_name.bind(Object(b.a)(a)),a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.animate_name()}},{key:"animate_name",value:function(){var n=(new Date).getTime();n-this.start_fps>=this.state.time_elapsed&&(this.state.typing_name!==this.state.my_name?this.setState({typing_name:this.state.typing_name+this.state.my_name[this.state.name_index],name_index:(this.state.name_index+1)%this.state.my_name.length}):this.setState({typing_name:this.state.my_name.substr(0,this.state.my_name.length-3),name_index:this.state.my_name.length-3,time_elapsed:300}),this.start_fps=n),requestAnimationFrame(this.animate_name)}},{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(y,null,this.state.typing_name),r.a.createElement(O,null,r.a.createElement(w,{href:"https://github.com/KingCollege"},"GITHUB"),r.a.createElement(w,{href:"https://www.linkedin.com/in/mandu-shi-87a90b1a6/"},"LINKEDIN")))}}]),t}(r.a.Component);function _(){var n=Object(m.a)(["\n    background: transparent;\n    -webkit-transition: background-color 500ms linear;\n    -ms-transition: background-color 500ms linear;\n    transition: background-color 500ms linear;\n\n    padding: 10px;\n    padding-left: 25px;\n    padding-right: 25px;\n    border: 2px solid white;\n    color: ",";\n    border-radius: 15px;\n    font-weight: bold;\n    &:active {\n        outline: none;\n    }\n\n    &:hover {\n        background: white;\n        color: black;\n    }\n\n    &:focus {\n        outline: 0;\n    }\n"]);return _=function(){return n},n}function k(){var n=Object(m.a)(["\n    color: ",";\n    font-size: 1rem;\n"]);return k=function(){return n},n}function E(){var n=Object(m.a)(["\n    position: relative;\n    color: ",";\n    font-size: 2rem;\n    font-weight: bold;\n"]);return E=function(){return n},n}function C(){var n=Object(m.a)(["\n    height: auto;\n    width: 700px;\n    margin: auto;\n"]);return C=function(){return n},n}function I(){var n=Object(m.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n"]);return I=function(){return n},n}var N=f.b.div(I()),z=f.b.div(C()),D=f.b.p(E(),h["general-colors"].white),S=f.b.p(k(),h["general-colors"].white),T=f.b.button(_(),h["general-colors"].blue),M=function(n){Object(u.a)(t,n);var e=Object(s.a)(t);function t(n){return Object(c.a)(this,t),e.call(this,n)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(z,null,r.a.createElement(D,null,"Welcome"),r.a.createElement(S,null,"...I am a recent graduate with a Computer Science degree. I am passionate about anything related to programming and problem solving. To learn more about me please visit my GitHub page, LinkedIn or have a look at some of projects ._")),r.a.createElement(T,null,"DOWNLOAD CV"))}}]),t}(r.a.Component),B=t(17),F=t.n(B);function W(){var n=Object(m.a)(["\n    width: 100%;\n"]);return W=function(){return n},n}function A(){var n=Object(m.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -3;\n"]);return A=function(){return n},n}function H(){var n=Object(m.a)(["\n    position: relative;\n    display: grid;\n    grid-template-rows: 80px 1fr;\n    width: 100%;\n    height: 100%;\n"]);return H=function(){return n},n}function J(){var n=Object(m.a)(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n"]);return J=function(){return n},n}function L(){var n=Object(m.a)(["\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n"]);return L=function(){return n},n}var U=f.b.div(L()),G=f.b.div(J()),K=f.b.div(H()),q=f.b.div(A()),R=f.b.img(W()),V=function(n){Object(u.a)(t,n);var e=Object(s.a)(t);function t(n){return Object(c.a)(this,t),e.call(this,n)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(U,null,r.a.createElement(q,null,r.a.createElement(R,{src:F.a})),r.a.createElement(K,null,r.a.createElement(x,null),r.a.createElement(M,null)),r.a.createElement(G,null,this.props.children))}}]),t}(r.a.Component),$=t(18);function P(){var n=Object(m.a)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0.2;\n    z-index: -2;\n"]);return P=function(){return n},n}var Q=f.b.canvas(P());r.a.Component;function X(){var n=Object(m.a)(['\n    body {\n        margin: 0;\n        font-family: "Nirmala UI", "Times New Roman", Times, serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, \'Courier New\', monospace;\n    }\n']);return X=function(){return n},n}var Y=Object(f.a)(X()),Z=function(n){Object(u.a)(t,n);var e=Object(s.a)(t);function t(n){return Object(c.a)(this,t),e.call(this,n)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null),r.a.createElement(V,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},7:function(n){n.exports=JSON.parse('{"title-container":{"background":"#ffffff","opacity":50},"general-colors":{"orange":"#F36161","grey":"#777777","black":"#454647","white":"#ffffff","blue":"#6197F3"}}')}},[[19,1,2]]]);
//# sourceMappingURL=main.4f7c6953.chunk.js.map