(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{4194:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Projects/Joheesu",function(){return t(9088)}])},5502:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var i=t(5893),n=t(1163);function r(){let e=(0,n.useRouter)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("button",{onClick:()=>{e.back(),setTimeout(()=>{let e=document.getElementById("project-section");e&&e.scrollIntoView({behavior:"smooth"})},10)},children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",children:(0,i.jsx)("g",{id:"_01_align_center","data-name":"01 align center",children:(0,i.jsx)("path",{d:"M24,13l0-2-21.445.031L6.877,6.707,5.463,5.293.877,9.879a3,3,0,0,0,0,4.242l4.586,4.586,1.414-1.414L2.615,13.031Z"})})})})})}},5284:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var i=t(5893),n=t(2483),r=t.n(n),c=t(7294),o=t(1163);function l(){let e=(0,o.useRouter)(),[s,t]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let e=()=>{window.scrollY>=window.innerHeight?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),(0,i.jsxs)("div",{className:"".concat(r().buttons," ").concat(s?r().show:""),children:[(0,i.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:"top"}),(0,i.jsx)("button",{onClick:()=>{e.back(),setTimeout(()=>{let e=document.getElementById("project-section");e&&e.scrollIntoView({behavior:"smooth"})},10)},children:"back"})]})}},9088:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return d}});var i=t(5893),n=t(1632),r=t.n(n);t(1163);var c=t(1664),o=t.n(c);t(7294);var l=t(615),a=t(5502),j=t(5284);function d(){let e=l[0];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.Z,{}),(0,i.jsxs)("div",{className:r().container,children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)("h1",{children:e.title}),(0,i.jsxs)("div",{className:r().urls,children:[(0,i.jsx)(o(),{href:"https://hsphotography.site/",children:"Visit Site"}),(0,i.jsx)(o(),{href:"https://github.com/minji105/joheesu-port",children:"Github"})]}),(0,i.jsxs)("section",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:r().info,children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:"Type"}),(0,i.jsxs)("p",{children:[e.type," project"]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:"Date"}),(0,i.jsx)("p",{children:e.date})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:"Role"}),(0,i.jsx)("p",{children:e.role})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:"Skill"}),(0,i.jsx)("p",{children:e.stack})]})]})}),(0,i.jsxs)("p",{children:["사진작가 조희수의 개인 사이트입니다. 반응형으로 제작하였습니다.",(0,i.jsx)("br",{}),"메인, 프로젝트 목록, 프로젝트 상세, 연락처 총 4개의 페이지로 구성되어있습니다.",(0,i.jsx)("br",{}),"성능 최적화를 위해 레이아웃 이동 최소화, 이미지 최적화, JS 및 CSS 파일 축소 등을 진행하였으며 그 결과 메인 페이지는 성능이 71에서 91로, 목록 페이지는 57에서 97로 올랐습니다(lighthouse)."]})]}),(0,i.jsx)("img",{src:e.main,alt:"main"})]}),(0,i.jsxs)("div",{className:r().imgContainer,children:[(0,i.jsxs)("section",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:"메인 페이지"}),"gsap을 이용하여 스크롤 시 이미지 전환 효과를 넣었습니다.",(0,i.jsx)("br",{}),"클릭하면 해당 프로젝트 페이지로 이동합니다."]}),(0,i.jsx)("img",{src:"/images/joheesu/main.gif",alt:""})]}),(0,i.jsxs)("section",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:"목록 페이지"}),"카테고리를 클릭하면 해당 카테고리 목록으로 필터링됩니다.",(0,i.jsx)("br",{}),"상세 페이지에서는 목록 형식이나 슬라이더 형식으로 이미지를 볼 수 있고, 모바일에서는 화살표 버튼 대신 스와이핑해서 좌우로 넘길 수 있도록 하였습니다. (react-swipeable)"]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"/images/joheesu/pc-list.png",alt:""}),(0,i.jsx)("img",{src:"/images/joheesu/list.gif",alt:""})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:"상세 페이지"}),"그리드 형식이나 슬라이더 형식으로 이미지를 볼 수 있습니다.",(0,i.jsx)("br",{}),"모바일에서는 슬라이더를 화살표 버튼 대신 스와이핑해서 좌우로 넘길 수 있도록 하였습니다. (react-swipeable)"]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"/images/joheesu/pc-detail.png",alt:""}),(0,i.jsx)("img",{src:"/images/joheesu/pc-detail2.png",alt:""})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("h4",{children:"연락처 페이지"})}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"/images/joheesu/pc-contact.png",alt:""})})]}),(0,i.jsxs)("section",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:"모바일"}),"모바일에서는 스와이프가 적용되는 페이지에 알림이 나타납니다.",(0,i.jsx)("br",{}),"스토리지 키를 사용하여 사이트 접속 후 최초 1회만 나타나도록 하였습니다."]}),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:r().mobile,children:[(0,i.jsx)("img",{src:"/images/joheesu/mb-main-alert.jpg",alt:""}),(0,i.jsx)("img",{src:"/images/joheesu/mb-list.png",alt:""}),(0,i.jsx)("img",{src:"/images/joheesu/mb-detail.png",alt:""}),(0,i.jsx)("img",{src:"/images/joheesu/mb-detail-alert.jpg",alt:""}),(0,i.jsx)("img",{src:"/images/joheesu/mb-contact.png",alt:""})]})})]})]})]})]})}},2483:function(e){e.exports={buttons:"Buttons_buttons__u43Bg",show:"Buttons_show__kuk7r"}},1632:function(e){e.exports={container:"Project_container__ikKyf",urls:"Project_urls__4NpW8",info:"Project_info__RWHV6",imgContainer:"Project_imgContainer__TG06P",mobile:"Project_mobile__0w6wF"}},1163:function(e,s,t){e.exports=t(3079)},615:function(e){"use strict";e.exports=JSON.parse('[{"title":"Photographer Portfolio","category":"Web","type":"Personal","date":"2023.08","stack":"React.js, SCSS, GSAP","role":"Design, Development","url":"/Projects/Joheesu","main":"/images/joheesu/gif.gif"},{"title":"MyPT","category":"Web","type":"Team","date":"2022.11 ~ 2023.04","stack":"React.js, SCSS, Node.js, Express.js, MongoDB","role":"Frontend, Backend","url":"/Projects/MyPT","main":"/images/myPT/gif.gif"},{"title":"Cyworld","category":"Web","type":"Pesonal","date":"2024.08","stack":"React.js, Next.js, Node.js Express.js, MongoDB, SCSS","role":"Full Stack","url":"/Projects/Cyworld","main":"/images/cyworld/main.png"},{"title":"Hotel Metaverse","category":"VR/AR","type":"Team","date":"2023.09 ~ 2023.12","stack":"Aptero, HTML, CSS, JS, Node.js, MongoDB","role":"Full Stack","url":"/Projects/HotelMetaverse","main":"/images/HotelMetaverse/gif.gif"},{"title":"Hand Tracking","category":"VR/AR","type":"Personal","date":"2022.12","stack":"Unity, C#, Python","role":"Development","url":"/Projects/HandTracking","main":"/images/HandTracking/gif.gif"}]')}},function(e){e.O(0,[664,888,774,179],function(){return e(e.s=4194)}),_N_E=e.O()}]);