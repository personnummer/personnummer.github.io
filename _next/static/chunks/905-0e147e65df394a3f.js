"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[905],{9653:function(t,e,r){function n(t,e){return t(e={exports:{}},e.exports),e.exports}var o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof r.g&&r.g)||Function("return this")(),a=function(t){try{return!!t()}catch(e){return!0}},s=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,l={f:u&&!c.call({1:2},1)?function(t){var e=u(this,t);return!!e&&e.enumerable}:c},f=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},h={}.toString,d=function(t){return h.call(t).slice(8,-1)},p="".split,g=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?p.call(t,""):Object(t)}:Object,y=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t},m=function(t){return g(y(t))},v=function(t){return"object"===typeof t?null!==t:"function"===typeof t},w=function(t,e){if(!v(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!v(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!v(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!v(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,S=function(t,e){return b.call(t,e)},M=i.document,E=v(M)&&v(M.createElement),O=function(t){return E?M.createElement(t):{}},C=!s&&!a((function(){return 7!=Object.defineProperty(O("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,P={f:s?A:function(t,e){if(t=m(t),e=w(e,!0),C)try{return A(t,e)}catch(r){}if(S(t,e))return f(!l.f.call(t,e),t[e])}},_=/#|\.prototype\./,N=function(t,e){var r=R[I(t)];return r==L||r!=T&&("function"==typeof e?a(e):!!e)},I=N.normalize=function(t){return String(t).replace(_,".").toLowerCase()},R=N.data={},T=N.NATIVE="N",L=N.POLYFILL="P",F=N,j={},k=function(t,e,r){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}},x=function(t){if(!v(t))throw TypeError(String(t)+" is not an object");return t},D=Object.defineProperty,z={f:s?D:function(t,e,r){if(x(t),e=w(e,!0),x(r),C)try{return D(t,e,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},B=s?function(t,e,r){return z.f(t,e,f(1,r))}:function(t,e,r){return t[e]=r,t},H=P.f,Y=function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e},$=function(t,e){var r,n,o,a,s,c,u,l,f=t.target,h=t.global,d=t.stat,p=t.proto,g=h?i:d?i[f]:(i[f]||{}).prototype,y=h?j:j[f]||(j[f]={}),m=y.prototype;for(o in e)r=!F(h?o:f+(d?".":"#")+o,t.forced)&&g&&S(g,o),s=y[o],r&&(c=t.noTargetGet?(l=H(g,o))&&l.value:g[o]),a=r&&c?c:e[o],r&&typeof s===typeof a||(u=t.bind&&r?k(a,i):t.wrap&&r?Y(a):p&&"function"==typeof a?k(Function.call,a):a,(t.sham||a&&a.sham||s&&s.sham)&&B(u,"sham",!0),y[o]=u,p&&(S(j,n=f+"Prototype")||B(j,n,{}),j[n][o]=a,t.real&&m&&!m[o]&&B(m,o,a)))},U="\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",V="["+U+"]",Q=RegExp("^"+V+V+"*"),G=RegExp(V+V+"*$"),W=function(t){return function(e){var r=String(y(e));return 1&t&&(r=r.replace(Q,"")),2&t&&(r=r.replace(G,"")),r}},X={start:W(1),end:W(2),trim:W(3)}.trim,K=i.parseInt,J=/^[+-]?0[Xx]/,Z=8!==K(U+"08")||22!==K(U+"0x16")?function(t,e){var r=X(String(t));return K(r,e>>>0||(J.test(r)?16:10))}:K;$({global:!0,forced:parseInt!=Z},{parseInt:Z});var q,tt,et=j.parseInt,rt=Array.isArray||function(t){return"Array"==d(t)},nt=function(t){return Object(y(t))},ot=Math.ceil,it=Math.floor,at=function(t){return isNaN(t=+t)?0:(t>0?it:ot)(t)},st=Math.min,ct=function(t){return t>0?st(at(t),9007199254740991):0},ut=function(t,e,r){var n=w(e);n in t?z.f(t,n,f(0,r)):t[n]=r},lt="__core-js_shared__",ft=i[lt]||function(t,e){try{B(i,t,e)}catch(r){i[t]=e}return e}(lt,{}),ht=n((function(t){(t.exports=function(t,e){return ft[t]||(ft[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:"pure",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})})),dt=0,pt=Math.random(),gt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++dt+pt).toString(36)},yt=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())})),mt=yt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,vt=ht("wks"),wt=i.Symbol,bt=mt?wt:wt&&wt.withoutSetter||gt,St=function(t){return S(vt,t)||(yt&&S(wt,t)?vt[t]=wt[t]:vt[t]=bt("Symbol."+t)),vt[t]},Mt=St("species"),Et=function(t,e){var r;return rt(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!rt(r.prototype)?v(r)&&null===(r=r[Mt])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},Ot=function(t){return"function"==typeof t?t:void 0},Ct=function(t,e){return arguments.length<2?Ot(j[t])||Ot(i[t]):j[t]&&j[t][e]||i[t]&&i[t][e]},At=Ct("navigator","userAgent")||"",Pt=i.process,_t=Pt&&Pt.versions,Nt=_t&&_t.v8;Nt?tt=(q=Nt.split("."))[0]+q[1]:At&&(!(q=At.match(/Edge\/(\d+)/))||q[1]>=74)&&(q=At.match(/Chrome\/(\d+)/))&&(tt=q[1]);var It=tt&&+tt,Rt=St("species"),Tt=function(t){return It>=51||!a((function(){var e=[];return(e.constructor={})[Rt]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Lt=St("isConcatSpreadable"),Ft=9007199254740991,jt="Maximum allowed index exceeded",kt=It>=51||!a((function(){var t=[];return t[Lt]=!1,t.concat()[0]!==t})),xt=Tt("concat"),Dt=function(t){if(!v(t))return!1;var e=t[Lt];return void 0!==e?!!e:rt(t)};$({target:"Array",proto:!0,forced:!kt||!xt},{concat:function(t){var e,r,n,o,i,a=nt(this),s=Et(a,0),c=0;for(e=-1,n=arguments.length;e<n;e++)if(Dt(i=-1===e?a:arguments[e])){if(c+(o=ct(i.length))>Ft)throw TypeError(jt);for(r=0;r<o;r++,c++)r in i&&ut(s,c,i[r])}else{if(c>=Ft)throw TypeError(jt);ut(s,c++,i)}return s.length=c,s}});var zt=function(t){return j[t+"Prototype"]},Bt=zt("Array").concat,Ht=Array.prototype,Yt=function(t){var e=t.concat;return t===Ht||t instanceof Array&&e===Ht.concat?Bt:e},$t=Math.max,Ut=Math.min,Vt=function(t,e){var r=at(t);return r<0?$t(r+e,0):Ut(r,e)},Qt=Object.defineProperty,Gt={},Wt=function(t){throw t},Xt=Tt("slice"),Kt=function(t,e){if(S(Gt,t))return Gt[t];e||(e={});var r=[][t],n=!!S(e,"ACCESSORS")&&e.ACCESSORS,o=S(e,0)?e[0]:Wt,i=S(e,1)?e[1]:void 0;return Gt[t]=!!r&&!a((function(){if(n&&!s)return!0;var t={length:-1};n?Qt(t,1,{enumerable:!0,get:Wt}):t[1]=1,r.call(t,o,i)}))}("slice",{ACCESSORS:!0,0:0,1:2}),Jt=St("species"),Zt=[].slice,qt=Math.max;$({target:"Array",proto:!0,forced:!Xt||!Kt},{slice:function(t,e){var r,n,o,i=m(this),a=ct(i.length),s=Vt(t,a),c=Vt(void 0===e?a:e,a);if(rt(i)&&("function"!=typeof(r=i.constructor)||r!==Array&&!rt(r.prototype)?v(r)&&null===(r=r[Jt])&&(r=void 0):r=void 0,r===Array||void 0===r))return Zt.call(i,s,c);for(n=new(void 0===r?Array:r)(qt(c-s,0)),o=0;s<c;s++,o++)s in i&&ut(n,o,i[s]);return n.length=o,n}});var te=zt("Array").slice,ee=Array.prototype,re=function(t){var e=t.slice;return t===ee||t instanceof Array&&e===ee.slice?te:e},ne=function(t){return function(e,r,n){var o,i=m(e),a=ct(i.length),s=Vt(n,a);if(t&&r!=r){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((t||s in i)&&i[s]===r)return t||s||0;return!t&&-1}},oe={includes:ne(!0),indexOf:ne(!1)},ie={},ae=oe.indexOf,se=function(t,e){var r,n=m(t),o=0,i=[];for(r in n)!S(ie,r)&&S(n,r)&&i.push(r);for(;e.length>o;)S(n,r=e[o++])&&(~ae(i,r)||i.push(r));return i},ce=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ue=Object.keys||function(t){return se(t,ce)},le={f:Object.getOwnPropertySymbols},fe=Object.assign,he=Object.defineProperty,de=!fe||a((function(){if(s&&1!==fe({b:1},fe(he({},"a",{enumerable:!0,get:function(){he(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=fe({},t)[r]||ue(fe({},e)).join("")!=n}))?function(t,e){for(var r=nt(t),n=arguments.length,o=1,i=le.f,a=l.f;n>o;)for(var c,u=g(arguments[o++]),f=i?ue(u).concat(i(u)):ue(u),h=f.length,d=0;h>d;)c=f[d++],s&&!a.call(u,c)||(r[c]=u[c]);return r}:fe;$({target:"Object",stat:!0,forced:Object.assign!==de},{assign:de});var pe=j.Object.assign,ge=n((function(t){function e(){return t.exports=e=pe||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},e.apply(this,arguments)}t.exports=e})),ye={f:St},me=z.f,ve=function(t){var e=j.Symbol||(j.Symbol={});S(e,t)||me(e,t,{value:ye.f(t)})};ve("iterator");var we=function(t){return function(e,r){var n,o,i=String(y(e)),a=at(r),s=i.length;return a<0||a>=s?t?"":void 0:(n=i.charCodeAt(a))<55296||n>56319||a+1===s||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):n:t?i.slice(a,a+2):o-56320+(n-55296<<10)+65536}},be={codeAt:we(!1),charAt:we(!0)},Se=Function.toString;"function"!=typeof ft.inspectSource&&(ft.inspectSource=function(t){return Se.call(t)});var Me,Ee,Oe,Ce=ft.inspectSource,Ae=i.WeakMap,Pe="function"===typeof Ae&&/native code/.test(Ce(Ae)),_e=ht("keys"),Ne=function(t){return _e[t]||(_e[t]=gt(t))},Ie=i.WeakMap;if(Pe){var Re=new Ie,Te=Re.get,Le=Re.has,Fe=Re.set;Me=function(t,e){return Fe.call(Re,t,e),e},Ee=function(t){return Te.call(Re,t)||{}},Oe=function(t){return Le.call(Re,t)}}else{var je=Ne("state");ie[je]=!0,Me=function(t,e){return B(t,je,e),e},Ee=function(t){return S(t,je)?t[je]:{}},Oe=function(t){return S(t,je)}}var ke,xe,De,ze={set:Me,get:Ee,has:Oe,enforce:function(t){return Oe(t)?Ee(t):Me(t,{})},getterFor:function(t){return function(e){var r;if(!v(e)||(r=Ee(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},Be=!a((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),He=Ne("IE_PROTO"),Ye=Object.prototype,$e=Be?Object.getPrototypeOf:function(t){return t=nt(t),S(t,He)?t[He]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Ye:null},Ue=(St("iterator"),!1);[].keys&&("next"in(De=[].keys())?(xe=$e($e(De)))!==Object.prototype&&(ke=xe):Ue=!0),void 0==ke&&(ke={});var Ve,Qe={IteratorPrototype:ke,BUGGY_SAFARI_ITERATORS:Ue},Ge=s?Object.defineProperties:function(t,e){x(t);for(var r,n=ue(e),o=n.length,i=0;o>i;)z.f(t,r=n[i++],e[r]);return t},We=Ct("document","documentElement"),Xe=Ne("IE_PROTO"),Ke=function(){},Je=function(t){return"<script>"+t+"</"+"script>"},Ze=function(){try{Ve=document.domain&&new ActiveXObject("htmlfile")}catch(e){}Ze=Ve?function(t){t.write(Je("")),t.close();var e=t.parentWindow.Object;return t=null,e}(Ve):function(){var t,e=O("iframe");return e.style.display="none",We.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Je("document.F=Object")),t.close(),t.F}();for(var t=ce.length;t--;)delete Ze.prototype[ce[t]];return Ze()};ie[Xe]=!0;var qe=Object.create||function(t,e){var r;return null!==t?(Ke.prototype=x(t),r=new Ke,Ke.prototype=null,r[Xe]=t):r=Ze(),void 0===e?r:Ge(r,e)},tr={};tr[St("toStringTag")]="z";var er="[object z]"===String(tr),rr=St("toStringTag"),nr="Arguments"==d(function(){return arguments}()),or=er?d:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(r){}}(e=Object(t),rr))?r:nr?d(e):"Object"==(n=d(e))&&"function"==typeof e.callee?"Arguments":n},ir=er?{}.toString:function(){return"[object "+or(this)+"]"},ar=z.f,sr=St("toStringTag"),cr=function(t,e,r,n){if(t){var o=r?t:t.prototype;S(o,sr)||ar(o,sr,{configurable:!0,value:e}),n&&!er&&B(o,"toString",ir)}},ur=Qe.IteratorPrototype,lr=(Object.setPrototypeOf||"__proto__"in{}&&function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(n){}}(),function(t,e,r,n){n&&n.enumerable?t[e]=r:B(t,e,r)}),fr=Qe.IteratorPrototype,hr=Qe.BUGGY_SAFARI_ITERATORS,dr=St("iterator"),pr="keys",gr="values",yr="entries",mr=function(t,e,r,n,o,i,a){!function(t,e,r){var n=e+" Iterator";t.prototype=qe(ur,{next:f(1,r)}),cr(t,n,!1,!0)}(r,e,n);var s,c,u,l=function(t){if(t===o&&y)return y;if(!hr&&t in p)return p[t];switch(t){case pr:case gr:case yr:return function(){return new r(this,t)}}return function(){return new r(this)}},h=e+" Iterator",d=!1,p=t.prototype,g=p[dr]||p["@@iterator"]||o&&p[o],y=!hr&&g||l(o),m="Array"==e&&p.entries||g;if(m&&(s=$e(m.call(new t)),fr!==Object.prototype&&s.next&&cr(s,h,!0,!0)),o==gr&&g&&g.name!==gr&&(d=!0,y=function(){return g.call(this)}),a&&p[dr]!==y&&B(p,dr,y),o)if(c={values:l(gr),keys:i?y:l(pr),entries:l(yr)},a)for(u in c)(hr||d||!(u in p))&&lr(p,u,c[u]);else $({target:e,proto:!0,forced:hr||d},c);return c},vr=be.charAt,wr="String Iterator",br=ze.set,Sr=ze.getterFor(wr);mr(String,"String",(function(t){br(this,{type:wr,string:String(t),index:0})}),(function(){var t,e=Sr(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=vr(r,n),e.index+=t.length,{value:t,done:!1})}));var Mr="Array Iterator",Er=ze.set,Or=ze.getterFor(Mr),Cr=(mr(Array,"Array",(function(t,e){Er(this,{type:Mr,target:m(t),index:0,kind:e})}),(function(){var t=Or(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),St("toStringTag"));for(var Ar in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Pr=i[Ar],_r=Pr&&Pr.prototype;_r&&or(_r)!==Cr&&B(_r,Cr,Ar)}var Nr=ye.f("iterator"),Ir=ce.concat("length","prototype"),Rr={f:Object.getOwnPropertyNames||function(t){return se(t,Ir)}},Tr=Rr.f,Lr={}.toString,Fr="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],jr={f:function(t){return Fr&&"[object Window]"==Lr.call(t)?function(t){try{return Tr(t)}catch(e){return Fr.slice()}}(t):Tr(m(t))}},kr=[].push,xr=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,a=5==t||i;return function(s,c,u,l){for(var f,h,d=nt(s),p=g(d),y=k(c,u,3),m=ct(p.length),v=0,w=l||Et,b=e?w(s,m):r?w(s,0):void 0;m>v;v++)if((a||v in p)&&(h=y(f=p[v],v,d),t))if(e)b[v]=h;else if(h)switch(t){case 3:return!0;case 5:return f;case 6:return v;case 2:kr.call(b,f)}else if(o)return!1;return i?-1:n||o?o:b}},Dr={forEach:xr(0),map:xr(1),filter:xr(2),some:xr(3),every:xr(4),find:xr(5),findIndex:xr(6)}.forEach,zr=Ne("hidden"),Br="Symbol",Hr=St("toPrimitive"),Yr=ze.set,$r=ze.getterFor(Br),Ur=Object.prototype,Vr=i.Symbol,Qr=Ct("JSON","stringify"),Gr=P.f,Wr=z.f,Xr=jr.f,Kr=l.f,Jr=ht("symbols"),Zr=ht("op-symbols"),qr=ht("string-to-symbol-registry"),tn=ht("symbol-to-string-registry"),en=ht("wks"),rn=i.QObject,nn=!rn||!rn.prototype||!rn.prototype.findChild,on=s&&a((function(){return 7!=qe(Wr({},"a",{get:function(){return Wr(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Gr(Ur,e);n&&delete Ur[e],Wr(t,e,r),n&&t!==Ur&&Wr(Ur,e,n)}:Wr,an=function(t,e){var r=Jr[t]=qe(Vr.prototype);return Yr(r,{type:Br,tag:t,description:e}),s||(r.description=e),r},sn=mt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Vr},cn=function(t,e,r){t===Ur&&cn(Zr,e,r),x(t);var n=w(e,!0);return x(r),S(Jr,n)?(r.enumerable?(S(t,zr)&&t[zr][n]&&(t[zr][n]=!1),r=qe(r,{enumerable:f(0,!1)})):(S(t,zr)||Wr(t,zr,f(1,{})),t[zr][n]=!0),on(t,n,r)):Wr(t,n,r)},un=function(t,e){x(t);var r=m(e),n=ue(r).concat(dn(r));return Dr(n,(function(e){s&&!ln.call(r,e)||cn(t,e,r[e])})),t},ln=function(t){var e=w(t,!0),r=Kr.call(this,e);return!(this===Ur&&S(Jr,e)&&!S(Zr,e))&&(!(r||!S(this,e)||!S(Jr,e)||S(this,zr)&&this[zr][e])||r)},fn=function(t,e){var r=m(t),n=w(e,!0);if(r!==Ur||!S(Jr,n)||S(Zr,n)){var o=Gr(r,n);return!o||!S(Jr,n)||S(r,zr)&&r[zr][n]||(o.enumerable=!0),o}},hn=function(t){var e=Xr(m(t)),r=[];return Dr(e,(function(t){S(Jr,t)||S(ie,t)||r.push(t)})),r},dn=function(t){var e=t===Ur,r=Xr(e?Zr:m(t)),n=[];return Dr(r,(function(t){!S(Jr,t)||e&&!S(Ur,t)||n.push(Jr[t])})),n};if(yt||(Vr=function(){if(this instanceof Vr)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=gt(t),r=function(t){this===Ur&&r.call(Zr,t),S(this,zr)&&S(this[zr],e)&&(this[zr][e]=!1),on(this,e,f(1,t))};return s&&nn&&on(Ur,e,{configurable:!0,set:r}),an(e,t)},lr(Vr.prototype,"toString",(function(){return $r(this).tag})),lr(Vr,"withoutSetter",(function(t){return an(gt(t),t)})),l.f=ln,z.f=cn,P.f=fn,Rr.f=jr.f=hn,le.f=dn,ye.f=function(t){return an(St(t),t)},s&&Wr(Vr.prototype,"description",{configurable:!0,get:function(){return $r(this).description}})),$({global:!0,wrap:!0,forced:!yt,sham:!yt},{Symbol:Vr}),Dr(ue(en),(function(t){ve(t)})),$({target:Br,stat:!0,forced:!yt},{for:function(t){var e=String(t);if(S(qr,e))return qr[e];var r=Vr(e);return qr[e]=r,tn[r]=e,r},keyFor:function(t){if(!sn(t))throw TypeError(t+" is not a symbol");if(S(tn,t))return tn[t]},useSetter:function(){nn=!0},useSimple:function(){nn=!1}}),$({target:"Object",stat:!0,forced:!yt,sham:!s},{create:function(t,e){return void 0===e?qe(t):un(qe(t),e)},defineProperty:cn,defineProperties:un,getOwnPropertyDescriptor:fn}),$({target:"Object",stat:!0,forced:!yt},{getOwnPropertyNames:hn,getOwnPropertySymbols:dn}),$({target:"Object",stat:!0,forced:a((function(){le.f(1)}))},{getOwnPropertySymbols:function(t){return le.f(nt(t))}}),Qr){var pn=!yt||a((function(){var t=Vr();return"[null]"!=Qr([t])||"{}"!=Qr({a:t})||"{}"!=Qr(Object(t))}));$({target:"JSON",stat:!0,forced:pn},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(v(e)||void 0!==t)&&!sn(t))return rt(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!sn(e))return e}),o[1]=e,Qr.apply(null,o)}})}Vr.prototype[Hr]||B(Vr.prototype,Hr,Vr.prototype.valueOf),cr(Vr,Br),ie[zr]=!0,ve("asyncIterator"),ve("hasInstance"),ve("isConcatSpreadable"),ve("match"),ve("matchAll"),ve("replace"),ve("search"),ve("species"),ve("split"),ve("toPrimitive"),ve("toStringTag"),ve("unscopables"),cr(Math,"Math",!0),cr(i.JSON,"JSON",!0);var gn=j.Symbol;ve("asyncDispose"),ve("dispose"),ve("observable"),ve("patternMatch"),ve("replaceAll");var yn=gn,mn=n((function(t){function e(r){return t.exports=e="function"===typeof yn&&"symbol"===typeof Nr?function(t){return typeof t}:function(t){return t&&"function"===typeof yn&&t.constructor===yn&&t!==yn.prototype?"symbol":typeof t},e(r)}t.exports=e})),vn=function(t){var e=Math.floor(9*Math.random());switch(t){case"male":e%2===0&&(e+=1);break;case"female":e%2!==0&&(e+=1)}return e},wn=function(){var t=(new Date).getFullYear(),e=new Date(t-100,1,1),r=new Date(t+100,1,1);return new Date(e.getTime()+Math.random()*(r.getTime()-e.getTime()))},bn=function(t){return t<10?"0".concat(t):t},Sn=function(t){for(var e=0,r=0,n=0,o=(t+="").length;n<o;n++)e=t[n],(e*=2-n%2)>9&&(e-=9),r+=e;return 10*Math.ceil(r/10)-r};e.Z=function(t){var e,r,n,o,i,a,s,c,u,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=0,h=0,d=0;if(t instanceof Date?(f=t.getFullYear(),h=t.getMonth()+1,d=t.getDate()):"object"===mn(t)&&(l=t,t=void 0),l=ge({gender:"",format:"long"},l||{}),!t){var p=wn();f=p.getFullYear(),h=p.getMonth()+1,d=p.getDate()}var g="";(f="".concat(bn(f))).length>2&&(g=re(f).call(f,0,2),f=re(f).call(f,2,4));for(var y=vn(l.gender)+""+vn(l.gender)+vn(l.gender);"000"===y;)y=vn(l.gender)+""+vn(l.gender)+vn(l.gender);var m=Yt(e=Yt(r=Yt(n="".concat(f)).call(n,bn(h))).call(r,bn(d))).call(e,y),v=Yt(o=Yt(i="".concat(g)).call(i,m)).call(o,Sn(m));if("long"===l.format)return v;var w="+";return(new Date).getFullYear()-et(re(v).call(v,0,4),10)<100&&(w="-"),Yt(a=Yt(s=Yt(c=Yt(u="".concat(re(v).call(v,2,4))).call(u,re(v).call(v,4,6))).call(c,re(v).call(v,6,8))).call(s,w)).call(a,re(v).call(v,8))}},7013:function(t,e,r){r.d(e,{Z:function(){return s}});var n=class extends Error{constructor(){super("Invalid swedish personal identity number")}},o=(t,e)=>{const r=t.getTime()-e.getTime();return r<0?-1:r>0?1:r},i=(t,e,r)=>{e-=1;const n=new Date(t,e,r);return!(n.getFullYear()!==t||n.getMonth()!==e||n.getDate()!==r)},a=class{constructor(t,e){this._century="",this._fullYear="",this._year="",this._month="",this._day="",this._sep="",this._num="",this._check="",this.parse(t,e)}get century(){return this._century}get fullYear(){return this._fullYear}get year(){return this._year}get month(){return this._month}get day(){return this._day}get sep(){return this._sep}get num(){return this._num}get check(){return this._check}static parse(t,e){return new a(t,e)}static valid(t,e){try{return a.parse(t,e),!0}catch(r){return!1}}parse(t,e){const r=/^(\d{2}){0,1}(\d{2})(\d{2})(\d{2})([+\-]?)((?!000)\d{3})(\d)$/.exec(t);if(!r)throw new n;const o=r[1],i=r[2],a=r[3],s=r[4],c=r[5],u=r[6],l=r[7];if("undefined"!==typeof o&&o.length)this._century=o,(new Date).getFullYear()-parseInt(o+i,10)<100?this._sep="-":this._sep="+";else{const t=new Date;let e=0;"+"===c?(this._sep="+",e=t.getFullYear()-100):(this._sep="-",e=t.getFullYear()),this._century=(""+(e-(e-parseInt(i))%100)).substr(0,2)}if(this._year=i,this._fullYear=this._century+i,this._month=a,this._day=s,this._num=u,this._check=l,!this.valid())throw new n}valid(){const t=(t=>{let e=0;for(let r=0,n=(t+="").length;r<n;r++){let n=parseInt(t[r]);n*=2-r%2,n>9&&(n-=9),e+=n}return 10*Math.ceil(e/10)-e})(this.year+this.month+this.day+this.num)===+this.check&&!!this.check;return t&&i(parseInt(this.century+this.year),+this.month,+this.day)?t:t&&i(parseInt(this.century+this.year),+this.month,+this.day-60)}format(t=!1){return t?`${this.century}${this.year}${this.month}${this.day}${this.num}${this.check}`:`${this.year}${this.month}${this.day}${this.sep}${this.num}${this.check}`}getAge(){let t=+this.day;this.isCoordinationNumber()&&(t-=60);const e=this.century+this.year+"-"+this.month+"-"+(t<10?"0"+t:t);return((t,e)=>{const r=o(t,e),n=Math.abs(t.getFullYear()-e.getFullYear());t.setFullYear(t.getFullYear()-r*n);const i=r*(n-+(o(t,e)===-r));return 0===i?0:i})(new Date(Date.now()),new Date(e))}isCoordinationNumber(){return i(parseInt(this.century+this.year),+this.month,+this.day-60)}isFemale(){return!this.isMale()}isMale(){return parseInt(this.num.substr(-1))%2===1}},s=a},4059:function(t,e,r){r.d(e,{ZP:function(){return S}});var n,o=r(7294),i=Object.defineProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,l=(t,e)=>{for(var r in e||(e={}))s.call(e,r)&&u(t,r,e[r]);if(a)for(var r of a(e))c.call(e,r)&&u(t,r,e[r]);return t},f=(t,e)=>{var r={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&a)for(var n of a(t))e.indexOf(n)<0&&c.call(t,n)&&(r[n]=t[n]);return r};(t=>{const e=class{constructor(t,r,n,o){if(this.version=t,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],t<e.MIN_VERSION||t>e.MAX_VERSION)throw"Version value out of range";if(o<-1||o>7)throw"Mask value out of range";this.size=4*t+17;let a=[];for(let e=0;e<this.size;e++)a.push(!1);for(let e=0;e<this.size;e++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();const s=this.addEccAndInterleave(n);if(this.drawCodewords(s),-1==o){let t=1e9;for(let e=0;e<8;e++){this.applyMask(e),this.drawFormatBits(e);const r=this.getPenaltyScore();r<t&&(o=e,t=r),this.applyMask(e)}}i(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(r,n){const o=t.QrSegment.makeSegments(r);return e.encodeSegments(o,n)}static encodeBinary(r,n){const o=t.QrSegment.makeBytes(r);return e.encodeSegments([o],n)}static encodeSegments(t,r,o=1,a=40,c=-1,u=!0){if(!(e.MIN_VERSION<=o&&o<=a&&a<=e.MAX_VERSION)||c<-1||c>7)throw"Invalid value";let l,f;for(l=o;;l++){const n=8*e.getNumDataCodewords(l,r),o=s.getTotalBits(t,l);if(o<=n){f=o;break}if(l>=a)throw"Data too long"}for(const n of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])u&&f<=8*e.getNumDataCodewords(l,n)&&(r=n);let h=[];for(const e of t){n(e.mode.modeBits,4,h),n(e.numChars,e.mode.numCharCountBits(l),h);for(const t of e.getData())h.push(t)}i(h.length==f);const d=8*e.getNumDataCodewords(l,r);i(h.length<=d),n(0,Math.min(4,d-h.length),h),n(0,(8-h.length%8)%8,h),i(h.length%8==0);for(let e=236;h.length<d;e^=253)n(e,8,h);let p=[];for(;8*p.length<h.length;)p.push(0);return h.forEach(((t,e)=>p[e>>>3]|=t<<7-(7&e))),new e(l,r,p,c)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let r=0;r<e;r++)for(let n=0;n<e;n++)0==r&&0==n||0==r&&n==e-1||r==e-1&&0==n||this.drawAlignmentPattern(t[r],t[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let r=e;for(let o=0;o<10;o++)r=r<<1^1335*(r>>>9);const n=21522^(e<<10|r);i(n>>>15==0);for(let i=0;i<=5;i++)this.setFunctionModule(8,i,o(n,i));this.setFunctionModule(8,7,o(n,6)),this.setFunctionModule(8,8,o(n,7)),this.setFunctionModule(7,8,o(n,8));for(let i=9;i<15;i++)this.setFunctionModule(14-i,8,o(n,i));for(let i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,o(n,i));for(let i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,o(n,i));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let r=0;r<12;r++)t=t<<1^7973*(t>>>11);const e=this.version<<12|t;i(e>>>18==0);for(let r=0;r<18;r++){const t=o(e,r),n=this.size-11+r%3,i=Math.floor(r/3);this.setFunctionModule(n,i,t),this.setFunctionModule(i,n,t)}}drawFinderPattern(t,e){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){const o=Math.max(Math.abs(n),Math.abs(r)),i=t+n,a=e+r;0<=i&&i<this.size&&0<=a&&a<this.size&&this.setFunctionModule(i,a,2!=o&&4!=o)}}drawAlignmentPattern(t,e){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(t+n,e+r,1!=Math.max(Math.abs(n),Math.abs(r)))}setFunctionModule(t,e,r){this.modules[e][t]=r,this.isFunction[e][t]=!0}addEccAndInterleave(t){const r=this.version,n=this.errorCorrectionLevel;if(t.length!=e.getNumDataCodewords(r,n))throw"Invalid argument";const o=e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r],a=e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r],s=Math.floor(e.getNumRawDataModules(r)/8),c=o-s%o,u=Math.floor(s/o);let l=[];const f=e.reedSolomonComputeDivisor(a);for(let i=0,d=0;i<o;i++){let r=t.slice(d,d+u-a+(i<c?0:1));d+=r.length;const n=e.reedSolomonComputeRemainder(r,f);i<c&&r.push(0),l.push(r.concat(n))}let h=[];for(let e=0;e<l[0].length;e++)l.forEach(((t,r)=>{(e!=u-a||r>=c)&&h.push(t[e])}));return i(h.length==s),h}drawCodewords(t){if(t.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw"Invalid argument";let r=0;for(let e=this.size-1;e>=1;e-=2){6==e&&(e=5);for(let n=0;n<this.size;n++)for(let i=0;i<2;i++){const a=e-i,s=0==(e+1&2)?this.size-1-n:n;!this.isFunction[s][a]&&r<8*t.length&&(this.modules[s][a]=o(t[r>>>3],7-(7&r)),r++)}}i(r==8*t.length)}applyMask(t){if(t<0||t>7)throw"Mask value out of range";for(let e=0;e<this.size;e++)for(let r=0;r<this.size;r++){let n;switch(t){case 0:n=(r+e)%2==0;break;case 1:n=e%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+e)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(e/2))%2==0;break;case 5:n=r*e%2+r*e%3==0;break;case 6:n=(r*e%2+r*e%3)%2==0;break;case 7:n=((r+e)%2+r*e%3)%2==0;break;default:throw"Unreachable"}!this.isFunction[e][r]&&n&&(this.modules[e][r]=!this.modules[e][r])}}getPenaltyScore(){let t=0;for(let i=0;i<this.size;i++){let r=!1,n=0,o=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[i][a]==r?(n++,5==n?t+=e.PENALTY_N1:n>5&&t++):(this.finderPenaltyAddHistory(n,o),r||(t+=this.finderPenaltyCountPatterns(o)*e.PENALTY_N3),r=this.modules[i][a],n=1);t+=this.finderPenaltyTerminateAndCount(r,n,o)*e.PENALTY_N3}for(let i=0;i<this.size;i++){let r=!1,n=0,o=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][i]==r?(n++,5==n?t+=e.PENALTY_N1:n>5&&t++):(this.finderPenaltyAddHistory(n,o),r||(t+=this.finderPenaltyCountPatterns(o)*e.PENALTY_N3),r=this.modules[a][i],n=1);t+=this.finderPenaltyTerminateAndCount(r,n,o)*e.PENALTY_N3}for(let i=0;i<this.size-1;i++)for(let r=0;r<this.size-1;r++){const n=this.modules[i][r];n==this.modules[i][r+1]&&n==this.modules[i+1][r]&&n==this.modules[i+1][r+1]&&(t+=e.PENALTY_N2)}let r=0;for(const e of this.modules)r=e.reduce(((t,e)=>t+(e?1:0)),r);const n=this.size*this.size,o=Math.ceil(Math.abs(20*r-10*n)/n)-1;return i(0<=o&&o<=9),t+=o*e.PENALTY_N4,i(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(1==this.version)return[];{const t=Math.floor(this.version/7)+2,e=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*t-2));let r=[6];for(let n=this.size-7;r.length<t;n-=e)r.splice(1,0,n);return r}}static getNumRawDataModules(t){if(t<e.MIN_VERSION||t>e.MAX_VERSION)throw"Version number out of range";let r=(16*t+128)*t+64;if(t>=2){const e=Math.floor(t/7)+2;r-=(25*e-10)*e-55,t>=7&&(r-=36)}return i(208<=r&&r<=29648),r}static getNumDataCodewords(t,r){return Math.floor(e.getNumRawDataModules(t)/8)-e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t]*e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw"Degree out of range";let r=[];for(let e=0;e<t-1;e++)r.push(0);r.push(1);let n=1;for(let o=0;o<t;o++){for(let t=0;t<r.length;t++)r[t]=e.reedSolomonMultiply(r[t],n),t+1<r.length&&(r[t]^=r[t+1]);n=e.reedSolomonMultiply(n,2)}return r}static reedSolomonComputeRemainder(t,r){let n=r.map((t=>0));for(const o of t){const t=o^n.shift();n.push(0),r.forEach(((r,o)=>n[o]^=e.reedSolomonMultiply(r,t)))}return n}static reedSolomonMultiply(t,e){if(t>>>8!=0||e>>>8!=0)throw"Byte out of range";let r=0;for(let n=7;n>=0;n--)r=r<<1^285*(r>>>7),r^=(e>>>n&1)*t;return i(r>>>8==0),r}finderPenaltyCountPatterns(t){const e=t[1];i(e<=3*this.size);const r=e>0&&t[2]==e&&t[3]==3*e&&t[4]==e&&t[5]==e;return(r&&t[0]>=4*e&&t[6]>=e?1:0)+(r&&t[6]>=4*e&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,r){return t&&(this.finderPenaltyAddHistory(e,r),e=0),e+=this.size,this.finderPenaltyAddHistory(e,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(t,e){0==e[0]&&(t+=this.size),e.pop(),e.unshift(t)}};let r=e;function n(t,e,r){if(e<0||e>31||t>>>e!=0)throw"Value out of range";for(let n=e-1;n>=0;n--)r.push(t>>>n&1)}function o(t,e){return 0!=(t>>>e&1)}function i(t){if(!t)throw"Assertion error"}r.MIN_VERSION=1,r.MAX_VERSION=40,r.PENALTY_N1=3,r.PENALTY_N2=3,r.PENALTY_N3=40,r.PENALTY_N4=10,r.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],r.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=r;const a=class{constructor(t,e,r){if(this.mode=t,this.numChars=e,this.bitData=r,e<0)throw"Invalid argument";this.bitData=r.slice()}static makeBytes(t){let e=[];for(const r of t)n(r,8,e);return new a(a.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!a.isNumeric(t))throw"String contains non-numeric characters";let e=[];for(let r=0;r<t.length;){const o=Math.min(t.length-r,3);n(parseInt(t.substr(r,o),10),3*o+1,e),r+=o}return new a(a.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!a.isAlphanumeric(t))throw"String contains unencodable characters in alphanumeric mode";let e,r=[];for(e=0;e+2<=t.length;e+=2){let o=45*a.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e));o+=a.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e+1)),n(o,11,r)}return e<t.length&&n(a.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)),6,r),new a(a.Mode.ALPHANUMERIC,t.length,r)}static makeSegments(t){return""==t?[]:a.isNumeric(t)?[a.makeNumeric(t)]:a.isAlphanumeric(t)?[a.makeAlphanumeric(t)]:[a.makeBytes(a.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw"ECI assignment value out of range";if(t<128)n(t,8,e);else if(t<16384)n(2,2,e),n(t,14,e);else{if(!(t<1e6))throw"ECI assignment value out of range";n(6,3,e),n(t,21,e)}return new a(a.Mode.ECI,0,e)}static isNumeric(t){return a.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return a.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let r=0;for(const n of t){const t=n.mode.numCharCountBits(e);if(n.numChars>=1<<t)return 1/0;r+=4+t+n.bitData.length}return r}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let r=0;r<t.length;r++)"%"!=t.charAt(r)?e.push(t.charCodeAt(r)):(e.push(parseInt(t.substr(r+1,2),16)),r+=2);return e}};let s=a;s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=s})(n||(n={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.ordinal=t,this.formatBits=e}};let r=e;r.LOW=new e(0,1),r.MEDIUM=new e(1,0),r.QUARTILE=new e(2,3),r.HIGH=new e(3,2),t.Ecc=r})(e=t.QrCode||(t.QrCode={}))})(n||(n={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.modeBits=t,this.numBitsCharCount=e}numCharCountBits(t){return this.numBitsCharCount[Math.floor((t+7)/17)]}};let r=e;r.NUMERIC=new e(1,[10,12,14]),r.ALPHANUMERIC=new e(2,[9,11,13]),r.BYTE=new e(4,[8,16,16]),r.KANJI=new e(8,[8,10,12]),r.ECI=new e(7,[0,0,0]),t.Mode=r})(e=t.QrSegment||(t.QrSegment={}))})(n||(n={}));var h=n,d={L:h.QrCode.Ecc.LOW,M:h.QrCode.Ecc.MEDIUM,Q:h.QrCode.Ecc.QUARTILE,H:h.QrCode.Ecc.HIGH},p={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1};function g(t,e=0){const r=[];return t.forEach((function(t,n){let o=null;t.forEach((function(i,a){if(!i&&null!==o)return r.push(`M${o+e} ${n+e}h${a-o}v1H${o+e}z`),void(o=null);if(a!==t.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?r.push(`M${a+e},${n+e} h1v1H${a+e}z`):r.push(`M${o+e},${n+e} h${a+1-o}v1H${o+e}z`)}}))})),r.join("")}function y(t,e){return t.slice().map(((t,r)=>r<e.y||r>=e.y+e.h?t:t.map(((t,r)=>(r<e.x||r>=e.x+e.w)&&t))))}function m(t,e){const{imageSettings:r,size:n,includeMargin:o}=t;if(null==r)return null;const i=o?4:0,a=e.length+2*i,s=Math.floor(.1*n),c=a/n,u=(r.width||s)*c,l=(r.height||s)*c,f=null==r.x?e.length/2-u/2:r.x*c,h=null==r.y?e.length/2-l/2:r.y*c;let d=null;if(r.excavate){let t=Math.floor(f),e=Math.floor(h);d={x:t,y:e,w:Math.ceil(u+f-t),h:Math.ceil(l+h-e)}}return{x:f,y:h,h:l,w:u,excavation:d}}var v=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}();function w(t){const e=(0,o.useRef)(null),r=(0,o.useRef)(null);function n(){const{value:n,size:o,level:i,bgColor:a,fgColor:s,includeMargin:c}=t;if(null!=e.current){const u=e.current,l=u.getContext("2d");if(!l)return;let f=h.QrCode.encodeText(n,d[i]).getModules();const p=c?4:0,w=f.length+2*p,b=m(t,f),S=r.current,M=null!=b&&null!==S&&S.complete&&0!==S.naturalHeight&&0!==S.naturalWidth;M&&null!=b.excavation&&(f=y(f,b.excavation));const E=window.devicePixelRatio||1;u.height=u.width=o*E;const O=o/w*E;l.scale(O,O),l.fillStyle=a,l.fillRect(0,0,w,w),l.fillStyle=s,v?l.fill(new Path2D(g(f,p))):f.forEach((function(t,e){t.forEach((function(t,r){t&&l.fillRect(r+p,e+p,1,1)}))})),M&&l.drawImage(S,b.x+p,b.y+p,b.w,b.h)}}(0,o.useEffect)((()=>{n()}));const i=t,{value:a,size:s,level:c,bgColor:u,fgColor:p,style:w,includeMargin:b,imageSettings:S}=i,M=f(i,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]),E=l({height:s,width:s},w);let O=null,C=null==S?void 0:S.src;return null!=C&&(O=o.createElement("img",{src:C,key:C,style:{display:"none"},onLoad:()=>{n()},ref:r})),o.createElement(o.Fragment,null,o.createElement("canvas",l({style:E,height:s,width:s,ref:e},M)),O)}function b(t){const e=t,{value:r,size:n,level:i,bgColor:a,fgColor:s,includeMargin:c,imageSettings:u}=e,p=f(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let v=h.QrCode.encodeText(r,d[i]).getModules();const w=c?4:0,b=v.length+2*w,S=m(t,v);let M=null;null!=u&&null!=S&&(null!=S.excavation&&(v=y(v,S.excavation)),M=o.createElement("image",{xlinkHref:u.src,height:S.h,width:S.w,x:S.x+w,y:S.y+w,preserveAspectRatio:"none"}));const E=g(v,w);return o.createElement("svg",l({shapeRendering:"crispEdges",height:n,width:n,viewBox:`0 0 ${b} ${b}`},p),o.createElement("path",{fill:a,d:`M0,0 h${b}v${b}H0z`}),o.createElement("path",{fill:s,d:E}),M)}w.defaultProps=p,b.defaultProps=p;var S=t=>{const e=t,{renderAs:r}=e,n=f(e,["renderAs"]),i="svg"===r?b:w;return o.createElement(i,l({},n))};S.defaultProps=l({renderAs:"canvas"},p)}}]);