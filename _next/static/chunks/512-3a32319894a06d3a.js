"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{5030:function(e,t,r){r.d(t,{Z:function(){return a}});var n=e=>{let t=Math.floor(9*Math.random());switch(e){case"male":t%2==0&&(t+=1);break;case"female":t%2!=0&&(t+=1)}return t},i=()=>{let e=new Date().getFullYear(),t=new Date(e-100,1,1),r=new Date(e+100,1,1);return new Date(t.getTime()+Math.random()*(r.getTime()-t.getTime()))},s=e=>e<10?`0${e}`:`${e}`,l=e=>""+n(e)+n(e)+n(e),o=e=>{let t=0,r=0;e+="";for(let n=0,i=e.length;n<i;n++)(t=e[n]*(2-n%2))>9&&(t-=9),r+=t;return 10*Math.ceil(r/10)-r},a=(e,t={})=>{let r=0,n=0,a=0;e instanceof Date||(t=e,e=i()),r=e.getFullYear(),n=e.getMonth()+1,a=e.getDate(),t=Object.assign({gender:"",format:"long"},t||{});let h="";(r=`${s(r)}`).length>2&&(h=r.slice(0,2),r=r.slice(2,4));let u=l(t.gender||"");for(;"000"===u;)u=l(t.gender||"");let c=`${r}${s(n)}${s(a)}${u}`,d=`${h}${c}${o(c)}`;if("long"===t.format)return d;let f="+";return new Date().getFullYear()-parseInt(d.slice(0,4),10)<100&&(f="-"),`${d.slice(2,4)}${d.slice(4,6)}${d.slice(6,8)}${f}${d.slice(8)}`}},7013:function(e,t,r){r.d(t,{Z:function(){return h}});var n=class extends Error{constructor(){super("Invalid swedish personal identity number")}},i=(e,t)=>{let r=e.getTime()-t.getTime();return r<0?-1:r>0?1:r},s=(e,t)=>{let r=i(e,t),n=Math.abs(e.getFullYear()-t.getFullYear());e.setFullYear(e.getFullYear()-r*n);let s=i(e,t)===-r,l=r*(n-+s);return 0===l?0:l},l=e=>{let t=0;e+="";for(let r=0,n=e.length;r<n;r++){let n=parseInt(e[r]);(n*=2-r%2)>9&&(n-=9),t+=n}return 10*Math.ceil(t/10)-t},o=(e,t,r)=>{t-=1;let n=new Date(e,t,r);return!(n.getFullYear()!==e||n.getMonth()!==t||n.getDate()!==r)},a=class{constructor(e,t){this._century="",this._fullYear="",this._year="",this._month="",this._day="",this._sep="",this._num="",this._check="",this.parse(e,{allowCoordinationNumber:!0,allowInterimNumber:!1,...t})}get century(){return this._century}get fullYear(){return this._fullYear}get year(){return this._year}get month(){return this._month}get day(){return this._day}get sep(){return this._sep}get num(){return this._num}get check(){return this._check}static parse(e,t){return new a(e,t)}static valid(e,t){try{return a.parse(e,t),!0}catch(e){return!1}}parse(e,t){if(e.length<10||e.length>13)throw new n;let r=/^(\d{2}){0,1}(\d{2})(\d{2})(\d{2})([+-]?)((?!000)\d{3}|[TRSUWXJKLMN]\d{2})(\d)$/.exec(e);if(!r)throw new n;let i=r[1],s=r[2],l=r[3],o=r[4],a=r[5],h=r[6],u=r[7];if(void 0!==i&&i.length)this._century=i,new Date().getFullYear()-parseInt(i+s,10)<100?this._sep="-":this._sep="+";else{let e=new Date,t=0;"+"===a?(this._sep="+",t=e.getFullYear()-100):(this._sep="-",t=e.getFullYear()),this._century=(""+(t-(t-parseInt(s))%100)).substr(0,2)}if(this._year=s,this._fullYear=this._century+s,this._month=l,this._day=o,this._num=h,this._check=u,!this.valid()||!(null==t?void 0:t.allowCoordinationNumber)&&this.isCoordinationNumber()||!(null==t?void 0:t.allowInterimNumber)&&this.isInterimNumber())throw new n}valid(){let e=l(this.year+this.month+this.day+this.num.replace(/[TRSUWXJKLMN]/,"1"))===+this.check&&!!this.check;return e&&o(parseInt(this.century+this.year),+this.month,+this.day)?e:e&&o(parseInt(this.century+this.year),+this.month,+this.day-60)}format(e=!1){return e?`${this.century}${this.year}${this.month}${this.day}${this.num}${this.check}`:`${this.year}${this.month}${this.day}${this.sep}${this.num}${this.check}`}getAge(){let e=this.getDate();return s(new Date(Date.now()),e)}getDate(){let e=+this.day;this.isCoordinationNumber()&&(e-=60);let t=this.century+this.year+"-"+this.month+"-"+(e<10?"0"+e:e);return new Date(t)}isInterimNumber(){return/[TRSUWXJKLMN]/.test(this.num[0])}isCoordinationNumber(){return o(parseInt(this.century+this.year),+this.month,+this.day-60)}isFemale(){return!this.isMale()}isMale(){let e=parseInt(this.num.substr(-1));return e%2==1}},h=a},4059:function(e,t,r){r.d(t,{ZP:function(){return _}});var n,i,s,l=r(7294),o=Object.defineProperty,a=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))u.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>{var r={};for(var n in e)h.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))0>t.indexOf(n)&&u.call(e,n)&&(r[n]=e[n]);return r};(e=>{let t=class{constructor(e,r,n,i){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version value out of range");if(i<-1||i>7)throw RangeError("Mask value out of range");this.size=4*e+17;let l=[];for(let e=0;e<this.size;e++)l.push(!1);for(let e=0;e<this.size;e++)this.modules.push(l.slice()),this.isFunction.push(l.slice());this.drawFunctionPatterns();let o=this.addEccAndInterleave(n);if(this.drawCodewords(o),-1==i){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let r=this.getPenaltyScore();r<e&&(i=t,e=r),this.applyMask(t)}}s(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}static encodeText(r,n){let i=e.QrSegment.makeSegments(r);return t.encodeSegments(i,n)}static encodeBinary(r,n){let i=e.QrSegment.makeBytes(r);return t.encodeSegments([i],n)}static encodeSegments(e,r,i=1,l=40,a=-1,h=!0){let u,c;if(!(t.MIN_VERSION<=i&&i<=l&&l<=t.MAX_VERSION)||a<-1||a>7)throw RangeError("Invalid value");for(u=i;;u++){let n=8*t.getNumDataCodewords(u,r),i=o.getTotalBits(e,u);if(i<=n){c=i;break}if(u>=l)throw RangeError("Data too long")}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])h&&c<=8*t.getNumDataCodewords(u,e)&&(r=e);let d=[];for(let t of e)for(let e of(n(t.mode.modeBits,4,d),n(t.numChars,t.mode.numCharCountBits(u),d),t.getData()))d.push(e);s(d.length==c);let f=8*t.getNumDataCodewords(u,r);s(d.length<=f),n(0,Math.min(4,f-d.length),d),n(0,(8-d.length%8)%8,d),s(d.length%8==0);for(let e=236;d.length<f;e^=253)n(e,8,d);let m=[];for(;8*m.length<d.length;)m.push(0);return d.forEach((e,t)=>m[t>>>3]|=e<<7-(7&t)),new t(u,r,m,a)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let n=0;n<t;n++)0==r&&0==n||0==r&&n==t-1||r==t-1&&0==n||this.drawAlignmentPattern(e[r],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,r=t;for(let e=0;e<10;e++)r=r<<1^(r>>>9)*1335;let n=(t<<10|r)^21522;s(n>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,i(n,e));this.setFunctionModule(8,7,i(n,6)),this.setFunctionModule(8,8,i(n,7)),this.setFunctionModule(7,8,i(n,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,i(n,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,i(n,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,i(n,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;s(t>>>18==0);for(let e=0;e<18;e++){let r=i(t,e),n=this.size-11+e%3,s=Math.floor(e/3);this.setFunctionModule(n,s,r),this.setFunctionModule(s,n,r)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){let i=Math.max(Math.abs(n),Math.abs(r)),s=e+n,l=t+r;0<=s&&s<this.size&&0<=l&&l<this.size&&this.setFunctionModule(s,l,2!=i&&4!=i)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,1!=Math.max(Math.abs(n),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){let r=this.version,n=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,n))throw RangeError("Invalid argument");let i=t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r],l=t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r],o=Math.floor(t.getNumRawDataModules(r)/8),a=i-o%i,h=Math.floor(o/i),u=[],c=t.reedSolomonComputeDivisor(l);for(let r=0,n=0;r<i;r++){let i=e.slice(n,n+h-l+(r<a?0:1));n+=i.length;let s=t.reedSolomonComputeRemainder(i,c);r<a&&i.push(0),u.push(i.concat(s))}let d=[];for(let e=0;e<u[0].length;e++)u.forEach((t,r)=>{(e!=h-l||r>=a)&&d.push(t[e])});return s(d.length==o),d}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let n=0;n<this.size;n++)for(let s=0;s<2;s++){let l=t-s,o=(t+1&2)==0,a=o?this.size-1-n:n;!this.isFunction[a][l]&&r<8*e.length&&(this.modules[a][l]=i(e[r>>>3],7-(7&r)),r++)}}s(r==8*e.length)}applyMask(e){if(e<0||e>7)throw RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let n;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let n=!1,i=0,s=[0,0,0,0,0,0,0];for(let l=0;l<this.size;l++)this.modules[r][l]==n?5==++i?e+=t.PENALTY_N1:i>5&&e++:(this.finderPenaltyAddHistory(i,s),n||(e+=this.finderPenaltyCountPatterns(s)*t.PENALTY_N3),n=this.modules[r][l],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,s)*t.PENALTY_N3}for(let r=0;r<this.size;r++){let n=!1,i=0,s=[0,0,0,0,0,0,0];for(let l=0;l<this.size;l++)this.modules[l][r]==n?5==++i?e+=t.PENALTY_N1:i>5&&e++:(this.finderPenaltyAddHistory(i,s),n||(e+=this.finderPenaltyCountPatterns(s)*t.PENALTY_N3),n=this.modules[l][r],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,s)*t.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let n=0;n<this.size-1;n++){let i=this.modules[r][n];i==this.modules[r][n+1]&&i==this.modules[r+1][n]&&i==this.modules[r+1][n+1]&&(e+=t.PENALTY_N2)}let r=0;for(let e of this.modules)r=e.reduce((e,t)=>e+(t?1:0),r);let n=this.size*this.size,i=Math.ceil(Math.abs(20*r-10*n)/n)-1;return s(0<=i&&i<=9),s(0<=(e+=i*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{let e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),r=[6];for(let n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return s(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let n=1;for(let i=0;i<e;i++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],n),e+1<r.length&&(r[e]^=r[e+1]);n=t.reedSolomonMultiply(n,2)}return r}static reedSolomonComputeRemainder(e,r){let n=r.map(e=>0);for(let i of e){let e=i^n.shift();n.push(0),r.forEach((r,i)=>n[i]^=t.reedSolomonMultiply(r,e))}return n}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^(r>>>7)*285^(t>>>n&1)*e;return s(r>>>8==0),r}finderPenaltyCountPatterns(e){let t=e[1];s(t<=3*this.size);let r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}},r=t;function n(e,t,r){if(t<0||t>31||e>>>t!=0)throw RangeError("Value out of range");for(let n=t-1;n>=0;n--)r.push(e>>>n&1)}function i(e,t){return(e>>>t&1)!=0}function s(e){if(!e)throw Error("Assertion error")}r.MIN_VERSION=1,r.MAX_VERSION=40,r.PENALTY_N1=3,r.PENALTY_N2=3,r.PENALTY_N3=40,r.PENALTY_N4=10,r.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],r.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=r;let l=class{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(e){let t=[];for(let r of e)n(r,8,t);return new l(l.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!l.isNumeric(e))throw RangeError("String contains non-numeric characters");let t=[];for(let r=0;r<e.length;){let i=Math.min(e.length-r,3);n(parseInt(e.substr(r,i),10),3*i+1,t),r+=i}return new l(l.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){let t;if(!l.isAlphanumeric(e))throw RangeError("String contains unencodable characters in alphanumeric mode");let r=[];for(t=0;t+2<=e.length;t+=2){let i=45*l.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));n(i+=l.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),11,r)}return t<e.length&&n(l.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,r),new l(l.Mode.ALPHANUMERIC,e.length,r)}static makeSegments(e){return""==e?[]:l.isNumeric(e)?[l.makeNumeric(e)]:l.isAlphanumeric(e)?[l.makeAlphanumeric(e)]:[l.makeBytes(l.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw RangeError("ECI assignment value out of range");if(e<128)n(e,8,t);else if(e<16384)n(2,2,t),n(e,14,t);else if(e<1e6)n(6,3,t),n(e,21,t);else throw RangeError("ECI assignment value out of range");return new l(l.Mode.ECI,0,t)}static isNumeric(e){return l.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return l.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(let n of e){let e=n.mode.numCharCountBits(t);if(n.numChars>=1<<e)return 1/0;r+=4+e+n.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substr(r+1,2),16)),r+=2);return t}},o=l;o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=o})(s||(s={})),(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}},r=t;r.LOW=new t(0,1),r.MEDIUM=new t(1,0),r.QUARTILE=new t(2,3),r.HIGH=new t(3,2),e.Ecc=r})((n=s||(s={})).QrCode||(n.QrCode={})),(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}},r=t;r.NUMERIC=new t(1,[10,12,14]),r.ALPHANUMERIC=new t(2,[9,11,13]),r.BYTE=new t(4,[8,16,16]),r.KANJI=new t(8,[8,10,12]),r.ECI=new t(7,[0,0,0]),e.Mode=r})((i=s||(s={})).QrSegment||(i.QrSegment={}));var m=s,g={L:m.QrCode.Ecc.LOW,M:m.QrCode.Ecc.MEDIUM,Q:m.QrCode.Ecc.QUARTILE,H:m.QrCode.Ecc.HIGH},E="#FFFFFF",M="#000000";function w(e,t=0){let r=[];return e.forEach(function(e,n){let i=null;e.forEach(function(s,l){if(!s&&null!==i){r.push(`M${i+t} ${n+t}h${l-i}v1H${i+t}z`),i=null;return}if(l===e.length-1){if(!s)return;null===i?r.push(`M${l+t},${n+t} h1v1H${l+t}z`):r.push(`M${i+t},${n+t} h${l+1-i}v1H${i+t}z`);return}s&&null===i&&(i=l)})}),r.join("")}function C(e,t){return e.slice().map((e,r)=>r<t.y||r>=t.y+t.h?e:e.map((e,r)=>(r<t.x||r>=t.x+t.w)&&e))}function y(e,t,r,n){if(null==n)return null;let i=e.length+2*(r?4:0),s=Math.floor(.1*t),l=i/t,o=(n.width||s)*l,a=(n.height||s)*l,h=null==n.x?e.length/2-o/2:n.x*l,u=null==n.y?e.length/2-a/2:n.y*l,c=null;if(n.excavate){let e=Math.floor(h),t=Math.floor(u);c={x:e,y:t,w:Math.ceil(o+h-e),h:Math.ceil(a+u-t)}}return{x:h,y:u,h:a,w:o,excavation:c}}var p=function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}return!0}();function R(e){let{value:t,size:r=128,level:n="L",bgColor:i=E,fgColor:s=M,includeMargin:o=!1,style:a,imageSettings:h}=e,u=f(e,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),c=null==h?void 0:h.src,R=(0,l.useRef)(null),N=(0,l.useRef)(null),[_,A]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(null!=R.current){let e=R.current,l=e.getContext("2d");if(!l)return;let a=m.QrCode.encodeText(t,g[n]).getModules(),u=o?4:0,c=a.length+2*u,d=y(a,r,o,h),f=N.current,E=null!=d&&null!==f&&f.complete&&0!==f.naturalHeight&&0!==f.naturalWidth;E&&null!=d.excavation&&(a=C(a,d.excavation));let M=window.devicePixelRatio||1;e.height=e.width=r*M;let _=r/c*M;l.scale(_,_),l.fillStyle=i,l.fillRect(0,0,c,c),l.fillStyle=s,p?l.fill(new Path2D(w(a,u))):a.forEach(function(e,t){e.forEach(function(e,r){e&&l.fillRect(r+u,t+u,1,1)})}),E&&l.drawImage(f,d.x+u,d.y+u,d.w,d.h)}}),(0,l.useEffect)(()=>{A(!1)},[c]);let I=d({height:r,width:r},a),v=null;return null!=c&&(v=l.createElement("img",{src:c,key:c,style:{display:"none"},onLoad:()=>{A(!0)},ref:N})),l.createElement(l.Fragment,null,l.createElement("canvas",d({style:I,height:r,width:r,ref:R},u)),v)}function N(e){let{value:t,size:r=128,level:n="L",bgColor:i=E,fgColor:s=M,includeMargin:o=!1,imageSettings:a}=e,h=f(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),u=m.QrCode.encodeText(t,g[n]).getModules(),c=o?4:0,p=u.length+2*c,R=y(u,r,o,a),N=null;null!=a&&null!=R&&(null!=R.excavation&&(u=C(u,R.excavation)),N=l.createElement("image",{xlinkHref:a.src,height:R.h,width:R.w,x:R.x+c,y:R.y+c,preserveAspectRatio:"none"}));let _=w(u,c);return l.createElement("svg",d({height:r,width:r,viewBox:`0 0 ${p} ${p}`},h),l.createElement("path",{fill:i,d:`M0,0 h${p}v${p}H0z`,shapeRendering:"crispEdges"}),l.createElement("path",{fill:s,d:_,shapeRendering:"crispEdges"}),N)}var _=e=>{let{renderAs:t}=e,r=f(e,["renderAs"]);return"svg"===t?l.createElement(N,d({},r)):l.createElement(R,d({},r))}}}]);