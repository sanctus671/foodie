(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{nI0H:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_spinner",(function(){return f}));var n=r("rePB"),s=r("1OyB"),i=r("vuIU"),a=r("A36C"),o=r("Zgba"),c=r("74mu"),l=r("h3R7"),f=function(){function e(t){Object(s.a)(this,e),Object(a.o)(this,t),this.paused=!1}return Object(i.a)(e,[{key:"getName",value:function(){var e=this.name||o.c.get("spinner"),t=Object(o.b)(this);return e||("ios"===t?"lines":"circular")}},{key:"render",value:function(){var e,t=Object(o.b)(this),r=this.getName(),s=l.a[r]||l.a.lines,i="number"==typeof this.duration&&this.duration>10?this.duration:s.dur,f=[];if(void 0!==s.circles)for(var u=0;u<s.circles;u++)f.push(p(s,i,u,s.circles));else if(void 0!==s.lines)for(var k=0;k<s.lines;k++)f.push(m(s,i,k,s.lines));return Object(a.j)(a.c,{class:Object(c.a)(this.color,(e={},Object(n.a)(e,t,!0),Object(n.a)(e,"spinner-".concat(r),!0),Object(n.a)(e,"spinner-paused",!!this.paused||o.c.getBoolean("_testing")),e)),role:"progressbar",style:s.elmDuration?{animationDuration:i+"ms"}:{}},f)}}]),e}(),p=function(e,t,r,n){var s=e.fn(t,r,n);return s.style["animation-duration"]=t+"ms",Object(a.j)("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},Object(a.j)("circle",{transform:s.transform||"translate(32,32)",cx:s.cx,cy:s.cy,r:s.r,style:e.elmDuration?{animationDuration:t+"ms"}:{}}))},m=function(e,t,r,n){var s=e.fn(t,r,n);return s.style["animation-duration"]=t+"ms",Object(a.j)("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},Object(a.j)("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))};f.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"}}]);