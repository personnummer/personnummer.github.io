(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,r,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7327)}])},7327:(e,r,a)=>{"use strict";a.r(r),a.d(r,{__N_SSG:()=>b,default:()=>j});var s=a(4848),n=a(6540);let l=e=>{let{border:r=!0,children:a,className:n,title:l=""}=e;return(0,s.jsxs)("div",{className:"mt-5 ".concat(n),children:[l&&(0,s.jsx)("h2",{className:"text-lg md:text-xl text-gray-700 mb-2 ".concat(r?"border-b border-gray":""),id:l.toLowerCase().replace(/ /g,"-"),children:l}),a]})},t=e=>{var r;return(0,s.jsx)(l,{...e,children:(0,s.jsx)("div",{className:"overflow-auto lg:overflow-visible",children:(0,s.jsxs)("table",{className:"lg:table-fixed w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Package"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Version"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Specification"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Status"}),(0,s.jsx)("th",{className:"px-4 py-2 lowercase",children:"Maintainer"})]})}),(0,s.jsx)("tbody",{children:null===(r=e.pkgs)||void 0===r?void 0:r.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:e.repo,children:e.name})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:e.repo,children:(0,s.jsx)("img",{src:"https://img.shields.io/github/v/release/personnummer/".concat(e.repo.split("/").pop(),"?style=flat-square"),alt:"GitHub release (latest by date)"})})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:"https://github.com/personnummer/meta/#package-specification-v".concat(e.spec.replace(/(\d).0/,"$1").replace(".","")),children:(0,s.jsx)("img",{src:"https://img.shields.io/static/v1?label=spec&message=".concat(e.spec,"&color=blue&style=flat-square"),alt:"Specification version"})})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:"".concat(e.repo,"/actions"),children:(0,s.jsx)("img",{src:"https://img.shields.io/github/actions/workflow/status/".concat(e.repo.split("/").slice(-2).join("/"),"/").concat(e.workflow,"?branch=").concat(e.branch,"&style=flat-square"),alt:"GitHub Workflow Status"})})}),(0,s.jsx)("td",{className:"border px-4 py-2",children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",rel:"noopener noreferrer",href:"https://github.com/".concat(e.maintainer.slice(1)),children:e.maintainer})})]},e.repo))})]})})})};var i=a(5537);let o=JSON.parse('{"rh":{"uG":"3.2.1"}}'),c={allowCoordinationNumber:!0,allowInterimNumber:!0},d=e=>{let r={age:0,long:"n/a",short:"n/a",sex:"n/a",con:!1,interim:!1,valid:i.A.valid(e,c)};if("string"!=typeof e)return r;try{let a=i.A.parse(e,c);r.valid&&(r.age=a.getAge(),r.long=a.format(!0),r.short=a.format(),r.sex=a.isMale()?"male":"female",r.con=a.isCoordinationNumber(),r.interim=a.isInterimNumber())}catch(e){r.sex="n/a"}return r},m=e=>{let[r,a]=(0,n.useState)(""),t=d(r);return(0,s.jsxs)(l,{...e,children:[(0,s.jsx)("p",{className:"pt-3",children:"input"}),(0,s.jsx)("input",{type:"text",placeholder:"YYMMDDXXXX",onChange:e=>a(e.target.value),className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}),(0,s.jsx)("p",{className:"pt-3",children:"result"}),(0,s.jsx)("table",{className:"table-fixed w-full",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"valid"}),(0,s.jsx)("td",{className:"border px-4 py-2 ".concat(t.valid?"text-green-500":"text-red-500"),children:t.valid?"yes":"no"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"short format"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:t.short})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"long format"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:t.long})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"age"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:t.age})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"sex"}),(0,s.jsx)("td",{className:"border px-4 py-2",children:t.sex})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"coordination number"}),(0,s.jsx)("td",{className:"border px-4 py-2 ".concat(t.con?"text-green-500":"text-red-500"),children:t.con?"yes":"no"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border px-4 py-2",children:"interim number"}),(0,s.jsx)("td",{className:"border px-4 py-2 ".concat(t.interim?"text-green-500":"text-red-500"),children:t.interim?"yes":"no"})]})]})}),(0,s.jsxs)("p",{className:"mt-3 italic",children:["using javascript version"," ",o.rh.uG.replace("^","")]})]})};var h=a(3969),p=a(194);let x=(e,r,a)=>(0,h.A)(new Date(e,r,a)),u=e=>{let r=new Date,[a,t]=(0,n.useState)(r.getFullYear()),[o,c]=(0,n.useState)(r.getMonth()+1),[d,m]=(0,n.useState)(r.getDate()),[h,u]=(0,n.useState)(""),g=(e,r,a)=>{u(x(e,r-1,a))};return(0,n.useEffect)(()=>{g(a,o,d)},[a,o,d]),(0,s.jsx)(l,{...e,children:(0,s.jsxs)("div",{className:"flex flex-wrap -mx-3 mb-2 pt-3",children:[(0,s.jsxs)("div",{className:"w-full md:w-5/6",children:[(0,s.jsxs)("div",{className:"flex flex-wrap",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[(0,s.jsx)("label",{className:"block tracking-wide mb-2",htmlFor:"g-year",children:"year"}),(0,s.jsx)("input",{id:"g-year",name:"g-year",type:"number",min:"1",defaultValue:a,onChange:e=>{t(Number(e.target.value)),g(Number(e.target.value),o,d)},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),(0,s.jsxs)("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[(0,s.jsx)("label",{className:"block tracking-wide mb-2",htmlFor:"g-month",children:"month"}),(0,s.jsx)("input",{id:"g-month",name:"g-month",type:"number",min:"1",max:"12",defaultValue:o,onChange:e=>{c(Number(e.target.value)),g(a,Number(e.target.value),d)},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]}),(0,s.jsxs)("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[(0,s.jsx)("label",{className:"block tracking-wide mb-2",htmlFor:"g-day",children:"day"}),(0,s.jsx)("input",{id:"g-day",name:"g-day",type:"number",min:"1",max:"31",defaultValue:d,onChange:e=>{m(Number(e.target.value)),g(a,o,Number(e.target.value))},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]})]}),(0,s.jsxs)("div",{className:"px-3 mb-6 md:mb-0 md:mt-3",children:[(0,s.jsx)("p",{className:"block tracking-wide mb-2",children:"result"}),(0,s.jsx)("input",{type:"tel",readOnly:!0,value:i.A.valid(h)?h:"not valid",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})]})]}),(0,s.jsx)("div",{className:"px-3",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"block tracking-wide mb-2",children:"qr code"}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(p.Ay,{size:100,value:i.A.valid(h)?h:"not valid"})})]})})]})})},g=[{name:"Personnummer",image:"https://avatars.githubusercontent.com/u/32910698?s=200&v=4",link:"https://personnummer.dev/"},{name:"Organisationsnummer",image:"https://avatars.githubusercontent.com/u/96255764?s=200&v=4",link:"https://organisationsnummer.dev/"}].sort((e,r)=>e.name.localeCompare(r.name));var b=!0;let j=e=>{let{pkgs:r=[]}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l,{title:"Validate swedish personal identity numbers",children:[(0,s.jsxs)("p",{className:"pt-3",children:["Personnummer is a"," ",(0,s.jsx)("a",{href:"https://github.com/personnummer",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"small open-source project"})," ","created to validate, format and determine sex and age from swedish personal identity numbers. Support the project by becoming a backer or sponsor at"," ",(0,s.jsx)("a",{href:"https://opencollective.com/sweidproject",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"OpenCollective"}),"."]}),(0,s.jsxs)("p",{className:"pt-5 text-center",children:[(0,s.jsx)("span",{className:"text-gray-500 pr-1",children:"available in:"}),r.map((e,a)=>(0,s.jsxs)("span",{children:[a+1===r.length&&(0,s.jsx)("span",{className:"text-gray-500 pr-1",children:"and for"}),(0,s.jsxs)("a",{className:"inline-block text-blue-500 cursor-pointer hover:underline",rel:"noopener noreferrer",target:"_blank",href:e.repo,children:[e.name,a+1===r.length&&"."]}),(0,s.jsx)("span",{className:"pr-1",children:a>=r.length-2?"":","})]},a))]})]}),(0,s.jsxs)(l,{title:"Features",children:[(0,s.jsxs)("ul",{className:"list-decimal ml-4",children:[(0,s.jsx)("li",{children:"validation"}),(0,s.jsx)("li",{children:"formatting"}),(0,s.jsx)("li",{children:"determine age"}),(0,s.jsx)("li",{children:"determine sex"}),(0,s.jsx)("li",{children:"determine if coordination number"}),(0,s.jsx)("li",{children:"determine if interim number"})]}),(0,s.jsxs)("p",{className:"pt-3",children:["All features might not be implemented in all languages. Full specification can be found"," ",(0,s.jsx)("a",{className:"inline-block text-blue-500 cursor-pointer hover:underline",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/personnummer/meta/blob/master/README.md#package-specification-v3",children:"here"}),"."]})]}),(0,s.jsx)(m,{title:"Try"}),(0,s.jsx)(u,{title:"Generate personal identity numbers"}),(0,s.jsx)(t,{title:"Implementations",pkgs:r}),(0,s.jsxs)("p",{className:"pt-3",children:["Some implementations may be a"," ",(0,s.jsx)("span",{className:"rounded bg-gray-300 px-1",children:"work in progress"})," if you find a bug, please open an issue in the specific implementation repository."]}),(0,s.jsxs)("p",{className:"pt-3",children:["If an implementation for your favorite language is missing, feel free to port it over from one of the existing versions. There are still plenty of languages to contribute to:"," ",(0,s.jsx)("a",{target:"_blank",href:"https://www.r-project.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"R"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://programming-nu.github.io/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Nu"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://groovy-lang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Groovy"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://julialang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Julia"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://racket-lang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Racket"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://fsharp.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"F#"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://clojure.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Clojure"}),","," ",(0,s.jsx)("a",{target:"_blank",href:"https://www.erlang.org/",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Erlang"}),"."]}),(0,s.jsxs)(l,{title:"Who is using Personnummer",children:[(0,s.jsx)("div",{className:"mt-5 flex gap-2",children:g.filter(e=>e.link&&e.name&&e.image).map((e,r)=>(0,s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("img",{src:e.image,alt:e.name,title:e.name,width:e.width?e.width:100,height:e.height?e.height:100,className:"rounded-md border border-gray-200 border-solid"})},r))}),(0,s.jsx)("div",{className:"mt-5",children:(0,s.jsxs)("p",{children:["Add your logo"," ",(0,s.jsx)("a",{href:"https://github.com/personnummer/personnummer.github.io/blob/develop/src/data/users.ts",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"here"}),"."]})})]}),(0,s.jsx)(l,{title:"License",className:"mb-20",children:(0,s.jsxs)("p",{children:["All personnummer packages are released under the"," ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://opensource.org/licenses/MIT",className:"text-blue-500 hover:underline",children:"MIT license"}),"."]})})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[186,636,593,792],()=>r(2022)),_N_E=e.O()}]);