(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{3219:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(4297);let o=(0,r.Z)("ArrowLeft",[["line",{x1:"19",y1:"12",x2:"5",y2:"12",key:"17g05t"}],["polyline",{points:"12 19 5 12 12 5",key:"1ksm0z"}]])},4343:function(e,t,n){e.exports=n(4533)},4533:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRouter=function(){return r.useContext(o.RouterContext)};var r=n(7294),o=n(3462);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(5443)},1151:function(e,t,n){"use strict";n.d(t,{ah:function(){return i}});var r=n(7294);let o=r.createContext({});function i(e){let t=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}},6385:function(e,t,n){"use strict";let r,o;n.d(t,{v:function(){return M}});var i=n(3234),l=n(6681),s=n(7294),f=n(5487);let c=new WeakMap;function u({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=c.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function a(e){e.forEach(u)}let d=new Set;var h=n(3967),g=n(3038);let p=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),y=()=>({time:0,x:p(),y:p()}),m={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function v(e,t,n,r){let o=n[t],{length:i,position:l}=m[t],s=o.current,f=n.time;o.current=e["scroll"+l],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,h.Y)(0,o.scrollLength,o.current);let c=r-f;o.velocity=c>50?0:(0,g.R)(o.current-s,c)}let w={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},x={start:0,center:.5,end:1};function E(e,t,n=0){let r=0;if(void 0!==x[e]&&(e=x[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let _=[0,0];var b=n(4606),L=n(533);let W={x:0,y:0},H=new WeakMap,S=new WeakMap,B=new WeakMap,O=e=>e===document.documentElement?window:e;var k=n(8868);function z(e,t){(0,f.K)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let A=()=>({scrollX:(0,i.B)(0),scrollY:(0,i.B)(0),scrollXProgress:(0,i.B)(0),scrollYProgress:(0,i.B)(0)});function M({container:e,target:t,layoutEffect:n=!0,...i}={}){let f=(0,l.h)(A),u=n?k.L:s.useEffect;return u(()=>(z("target",t),z("container",e),function(e,{container:t=document.documentElement,...n}={}){let i=B.get(t);i||(i=new Set,B.set(t,i));let l=y(),s=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{var o;v(e,"x",o=n,t),v(e,"y",o,t),o.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=w.All}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){let{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(o,e):W,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let u=!t[i].interpolate,a=r.length;for(let e=0;e<a;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:_,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,x[e]?e:"0"]),E(o[0],n,r)-E(o[1],t)}(r[e],c[l],f[l],s[i]);u||n===t[i].interpolatorOffsets[e]||(u=!0),t[i].offset[e]=n}u&&(t[i].interpolate=(0,b.s)(t[i].offset,(0,L.Y)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:()=>t(n)}}(t,e,l,n);if(i.add(s),!H.has(t)){let e=()=>{let e=performance.now();for(let e of i)e.measure();for(let t of i)t.update(e);for(let e of i)e.notify()};H.set(t,e);let n=O(t);window.addEventListener("resize",e,{passive:!0}),t!==document.documentElement&&S.set(t,"function"==typeof t?(d.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{d.delete(t),!d.size&&o&&(o=void 0)}):function(e,t){var n,o,i;r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(a));let l=("string"==typeof(n=e)?o?(null!==(i=o[n])&&void 0!==i||(o[n]=document.querySelectorAll(n)),n=o[n]):n=document.querySelectorAll(n):n instanceof Element&&(n=[n]),Array.from(n||[]));return l.forEach(e=>{let n=c.get(e);n||(n=new Set,c.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{l.forEach(e=>{let n=c.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,e)),n.addEventListener("scroll",e,{passive:!0})}let f=H.get(t),u=requestAnimationFrame(f);return()=>{var e;cancelAnimationFrame(u);let n=B.get(t);if(!n||(n.delete(s),n.size))return;let r=H.get(t);H.delete(t),r&&(O(t).removeEventListener("scroll",r),null===(e=S.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(({x:e,y:t})=>{f.scrollX.set(e.current),f.scrollXProgress.set(e.progress),f.scrollY.set(t.current),f.scrollYProgress.set(t.progress)},{...i,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[]),f}},3520:function(e,t,n){"use strict";n.d(t,{q:function(){return u}});var r=n(7294),o=n(406),i=n(3234),l=n(6014),s=n(6681),f=n(2848),c=n(8868);function u(e,t={}){let{isStatic:n}=(0,r.useContext)(l._),u=(0,r.useRef)(null),a=function(e){let t=(0,s.h)(()=>(0,i.B)(e)),{isStatic:n}=(0,r.useContext)(l._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}((0,o.i)(e)?e.get():e),d=()=>{u.current&&u.current.stop()};return(0,r.useInsertionEffect)(()=>a.attach((e,r)=>n?r(e):(d(),u.current=(0,f.y0)({keyframes:[a.get(),e],velocity:a.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:r}),a.get()),d),[JSON.stringify(t)]),(0,c.L)(()=>{if((0,o.i)(e))return e.on("change",e=>a.set(parseFloat(e)))},[a]),a}},1782:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o="__wrap_b",i="__wrap_o",l="undefined"==typeof window?r.useEffect:r.useLayoutEffect,s=(e,t,n)=>{let r=(n=n||document.querySelector(`[data-br="${e}"]`)).parentElement,o=e=>n.style.maxWidth=e+"px";n.style.maxWidth="";let i=r.clientWidth,l=r.clientHeight,s=i/2-.25,f=i+.5,c;if(i){for(;s+1<f;)o(c=Math.round((s+f)/2)),r.clientHeight===l?f=c:s=c;o(f*t+i*(1-t))}n.__wrap_o||(n.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0,+n.dataset.brr,n)})).observe(r)},f=s.toString(),c=(e,t="")=>r.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:(e?"":`self.${o}=${f};`)+t}}),u=r.createContext(!1),a=({as:e="span",ratio:t=1,children:n,...f})=>{let a=r.useId(),d=r.useRef(),h=r.useContext(u);return l(()=>{d.current&&(self[o]=s)(0,t,d.current)},[n,t]),l(()=>()=>{if(!d.current)return;let e=d.current[i];e&&(e.disconnect(),delete d.current[i])},[]),r.createElement(r.Fragment,null,r.createElement(e,{...f,"data-br":a,"data-brr":t,ref:d,style:{display:"inline-block",verticalAlign:"top",textDecoration:"inherit"},suppressHydrationWarning:!0},n),c(h,`self.${o}("${a}",${t})`))}}}]);