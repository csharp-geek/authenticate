(function(){"use strict";var n={1056:function(n,o,e){var t=e(9242),r=e(1020),i=e(3396);function a(n,o,e,t,r,a){const s=(0,i.up)("RouterView");return(0,i.wg)(),(0,i.j4)(s)}var s=e(2483);e(7139);var l=e(89);var c={name:"App",components:{RouterView:s.MA}};const u=(0,l.Z)(c,[["render",a],["__scopeId","data-v-615e2809"]]);var p=u,d=e(6070),f=e(9885),g=(e(7658),e.p+"assets/img/google.05b95c70.png"),v=e(5361),h=e(672),m=e(4870),y=e(7071);const _=n=>((0,i.dD)("data-v-7881e6de"),n=n(),(0,i.Cn)(),n),b={class:"container no-select",id:"container"},w={class:"form-container sign-in-container"},k={class:"form",xaction:"#"},O=_((()=>(0,i._)("h1",null,"GDroid Sign In",-1))),C={class:"social-container no-select"},I=_((()=>(0,i._)("span",null,"or use your account",-1))),j=_((()=>(0,i._)("input",{type:"email",placeholder:"Email"},null,-1))),S=_((()=>(0,i._)("input",{type:"password",placeholder:"Password"},null,-1))),A=_((()=>(0,i._)("div",{class:"overlay-panel overlay-left"},[(0,i._)("h1",null,"Welcome Back!"),(0,i._)("p",null,"To keep connected with us please login with your personal info"),(0,i._)("button",{class:"ghost",id:"signIn"},"Sign In")],-1))),P=_((()=>(0,i._)("img",{src:g,class:"google-logo no-select"},null,-1))),T=_((()=>(0,i._)("h2",null,"GDroid Ecosystem",-1))),Z=_((()=>(0,i._)("h3",null,"Hello, Friend!",-1))),x=_((()=>(0,i._)("p",null,"Enter your personal details and start journey with us",-1))),D=_((()=>(0,i._)("div",{class:"no-select",style:{"padding-top":"2rem"}},[(0,i._)("h4",null,"GDroid Ecosystem Central Authentication"),(0,i._)("h6",null,"Copyright © 2020-29 Async Consultancy Pty Ltd")],-1)));var G={__name:"HomeView",setup(n){const{toClipboard:o}=(0,y.Z)(),e=(0,s.yj)(),t=(0,m.iH)(""),r=async n=>{console.log("response",n);var r=e.query.information,i=r?v.lW.from(r,"base64").toString("ascii"):null,a=(0,d.KQ)(n.credential),s=JSON.stringify(a),l=v.lW.from(s).toString("base64");t.value=l;try{await o(l),console.log("Copied to clipboard")}catch(u){console.error(u)}if(console.log("callback","query",e.query,"informationBase64String",r,"responseCredentials",a),i){var c=i+"?information="+r+"&authentication="+l;console.log("callback","redirectUrl",i,"redirectInformation",s,"redirectInformationBase64String",l,"redirectFullUrl",c),/^(?:[a-z]+:)?\/\//i.test(i)?window.location=c:U.push(c)}},a=()=>{const n=Math.floor((new Date).getTime()/1e3%4),o="Use Google sign-in...";switch(n){case 0:h.Am.info(o);break;case 1:h.Am.error(o);break;case 2:h.Am.warn(o);break;case 3:h.Am.success(o);break}};return(n,o)=>{const e=(0,i.up)("GoogleLogin");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",b,[(0,i._)("div",w,[(0,i._)("div",k,[O,(0,i._)("div",C,[(0,i.Wm)(e,{callback:r,prompt:""})]),I,j,S,(0,i._)("a",{onClick:a,href:"#"},"Forgot your password?"),(0,i._)("button",{onClick:a},"Sign In")])]),(0,i._)("div",{class:"overlay-container"},[(0,i._)("div",{class:"overlay"},[A,(0,i._)("div",{class:"overlay-panel overlay-right"},[P,T,Z,x,(0,i._)("button",{onClick:a,class:"ghost no-select",id:"signUp"},"Sign Up")])])])]),D],64)}}};const q=(0,l.Z)(G,[["__scopeId","data-v-7881e6de"]]);var B=q;const E="/authenticate",H=(0,s.p7)({history:(0,s.PO)(E),base:E,routes:[{path:"/",name:"home",component:B,params:!0,props:n=>({query:n.query})}]});console.log("production"),console.log(E,H);var U=H;const W=(0,t.ri)(p);W.use(d.ZP,{clientId:"144479104452-gj57u9nnb48em1ii4p4vhdvi07rvn7i7.apps.googleusercontent.com"}),W.use(f.ZP,{clientId:"144479104452-gj57u9nnb48em1ii4p4vhdvi07rvn7i7.apps.googleusercontent.com"}),W.use(h.ZP,{autoClose:500,position:h.Am.POSITION.BOTTOM_RIGHT}),W.use(U),W.use(y.Z),W.use((0,r.WB)()),W.mount("#app")}},o={};function e(t){var r=o[t];if(void 0!==r)return r.exports;var i=o[t]={exports:{}};return n[t].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(o,t,r,i){if(!t){var a=1/0;for(u=0;u<n.length;u++){t=n[u][0],r=n[u][1],i=n[u][2];for(var s=!0,l=0;l<t.length;l++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](t[l])}))?t.splice(l--,1):(s=!1,i<a&&(a=i));if(s){n.splice(u--,1);var c=r();void 0!==c&&(o=c)}}return o}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[t,r,i]}}(),function(){e.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(o,{a:o}),o}}(),function(){e.d=function(n,o){for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){e.p="/authenticate/"}(),function(){var n={143:0};e.O.j=function(o){return 0===n[o]};var o=function(o,t){var r,i,a=t[0],s=t[1],l=t[2],c=0;if(a.some((function(o){return 0!==n[o]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(l)var u=l(e)}for(o&&o(t);c<a.length;c++)i=a[c],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(u)},t=self["webpackChunkgdroid_auth"]=self["webpackChunkgdroid_auth"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(1056)}));t=e.O(t)})();
//# sourceMappingURL=app.a9437a49.js.map