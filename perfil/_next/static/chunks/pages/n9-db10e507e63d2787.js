(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{2112:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(4297);let a=(0,n.Z)("ArrowUpRight",[["line",{x1:"7",y1:"17",x2:"17",y2:"7",key:"16hgw2"}],["polyline",{points:"7 7 17 7 17 17",key:"blehsp"}]])},3982:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/n9",function(){return r(8185)}])},3531:function(e,t,r){"use strict";r.d(t,{P9:function(){return A},WG:function(){return u}});var n=r(5893),a=r(1664),i=r.n(a),s=r(4241),l=r(6010),o=r(2112);function c(e){let{icon:t,outline:r,...a}=e;return(0,n.jsx)(i(),{className:"p-1 -m-1 group",...a,children:r?(0,n.jsx)(t,{className:"w-6 h-6 stroke-[1.5px] transition text-zinc-600 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-outline-300 outline-zinc-600 group-hover:outline-zinc-600 dark:outline-zinc-400 dark:group-hover:text-zinc-300"}):(0,n.jsx)(t,{className:"w-6 h-6 transition fill-zinc-600 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"})})}function u(e){let{}=e;return(0,n.jsx)("div",{className:"flex items-center justify-start gap-6 mt-6",children:s.X.map((e,t)=>(0,n.jsxs)("div",{className:"relative group",children:[(0,n.jsx)("div",{className:"transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100",children:(0,n.jsx)("div",{className:"relative flex items-center group",children:(0,n.jsx)(o.Z,{className:"absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"})})}),(0,n.jsx)(c,{href:e.href,rel:"noopener noreferrer",target:"_blank","aria-label":e.label,className:"transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0",icon:e.icon,outline:e.outline})]},t))})}function d(e){let{className:t,href:r,children:a,icon:s,outline:c}=e;return(0,n.jsx)("li",{className:(0,l.Z)(t,"flex"),children:(0,n.jsx)(i(),{href:r,rel:"noopener noreferrer",target:"_blank",className:"",children:(0,n.jsxs)("div",{className:"relative group",children:[(0,n.jsxs)("div",{className:"absolute z-10 flex items-center justify-center w-full h-full transition-all translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",children:[(0,n.jsx)("p",{className:"font-semibold cursor-pointer text-zinc-700 dark:text-white",children:a}),(0,n.jsx)("div",{className:"relative flex items-center group",children:(0,n.jsx)(o.Z,{className:"absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"})})]}),(0,n.jsxs)("div",{className:"flex text-sm font-medium transition-all group text-zinc-600 dark:text-zinc-400 group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0",children:[c?(0,n.jsx)(s,{className:"w-6 h-6 stroke-[1.5px] transition text-zinc-600 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-outline-300 outline-zinc-600 group-hover:outline-zinc-600 dark:outline-zinc-400 dark:group-hover:text-zinc-300"}):(0,n.jsx)(s,{className:"flex-none w-6 h-6 transition fill-zinc-600 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"}),(0,n.jsx)("span",{className:"ml-4 group-hover:text-zinc-600 dark:group-hover:text-zinc-300",children:a})]})]})})})}function A(e){let{}=e;return(0,n.jsx)("div",{className:"lg:pl-28 ",children:(0,n.jsx)("ul",{role:"list",className:"grid grid-cols-2",children:s.X.map((e,t)=>(0,n.jsx)(d,{href:e.href,icon:e.icon,className:"mt-4",outline:e.outline,children:e.label},t))})})}},8185:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return es}});var n,a,i,s=r(5893),l=r(9008),o=r.n(l),c=r(6792),u=r(1782),d=r(827),A=r(956),p=r(7294),x=r(5675),m=r.n(x),g=r(2351),f=r(9946),h=r(2984),b=r(1363),v=r(4575),y=r(6723),j=r(3784),z=r(4157),w=r(3855),E=r(6045);function k({onFocus:e}){let[t,r]=(0,p.useState)(!0);return t?p.createElement(E._,{as:"button",type:"button",features:E.A.Focusable,onFocus:t=>{t.preventDefault();let n,a=50;n=requestAnimationFrame(function t(){if(a--<=0){n&&cancelAnimationFrame(n);return}if(e()){r(!1),cancelAnimationFrame(n);return}n=requestAnimationFrame(t)})}}):null}var N=r(3781),O=r(1021),I=r(5466);let P=p.createContext(null);function T({children:e}){let t=p.useRef({groups:new Map,get(e,t){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let a=null!=(r=n.get(t))?r:0;return n.set(t,a+1),[Array.from(n.keys()).indexOf(t),function(){let e=n.get(t);e>1?n.set(t,e-1):n.delete(t)}]}});return p.createElement(P.Provider,{value:t},e)}function C(e){let t=p.useContext(P);if(!t)throw Error("You must wrap your component in a <StableCollection>");let r=function(){var e,t,r;let n=null!=(r=null==(t=null==(e=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?r:null;if(!n)return Symbol();let a=[],i=n;for(;i;)a.push(i.index),i=i.return;return"$."+a.join(".")}(),[n,a]=t.current.get(e,r);return p.useEffect(()=>a,[]),n}var R=((n=R||{})[n.Forwards=0]="Forwards",n[n.Backwards=1]="Backwards",n),D=((a=D||{})[a.Less=-1]="Less",a[a.Equal=0]="Equal",a[a.Greater=1]="Greater",a),M=((i=M||{})[i.SetSelectedIndex=0]="SetSelectedIndex",i[i.RegisterTab=1]="RegisterTab",i[i.UnregisterTab=2]="UnregisterTab",i[i.RegisterPanel=3]="RegisterPanel",i[i.UnregisterPanel=4]="UnregisterPanel",i);let _={0(e,t){var r;let n=(0,v.z2)(e.tabs,e=>e.current),a=(0,v.z2)(e.panels,e=>e.current),i=n.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),s={...e,tabs:n,panels:a};if(t.index<0||t.index>n.length-1){let r=(0,h.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,h.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===i.length?s:{...s,selectedIndex:(0,h.E)(r,{0:()=>n.indexOf(i[0]),1:()=>n.indexOf(i[i.length-1])})}}let l=n.slice(0,t.index),o=[...n.slice(t.index),...l].find(e=>i.includes(e));if(!o)return s;let c=null!=(r=n.indexOf(o))?r:e.selectedIndex;return -1===c&&(c=e.selectedIndex),{...s,selectedIndex:c}},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=(0,v.z2)([...e.tabs,t.tab],e=>e.current),i=null!=(r=a.indexOf(n))?r:e.selectedIndex;return -1===i&&(i=e.selectedIndex),{...e,tabs:a,selectedIndex:i}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,v.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},S=(0,p.createContext)(null);function B(e){let t=(0,p.useContext)(S);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,B),t}return t}S.displayName="TabsDataContext";let L=(0,p.createContext)(null);function F(e){let t=(0,p.useContext)(L);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,F),t}return t}function U(e,t){return(0,h.E)(t.type,_,e,t)}L.displayName="TabsActionsContext";let q=p.Fragment,G=g.AN.RenderStrategy|g.AN.Static,H=Object.assign((0,g.yV)(function(e,t){var r,n;let a=(0,f.M)(),{id:i=`headlessui-tabs-tab-${a}`,...s}=e,{orientation:l,activation:o,selectedIndex:c,tabs:u,panels:d}=B("Tab"),A=F("Tab"),x=B("Tab"),m=(0,p.useRef)(null),w=(0,j.T)(m,t);(0,y.e)(()=>A.registerTab(m),[A,m]);let E=C("tabs"),k=u.indexOf(m);-1===k&&(k=E);let P=k===c,T=(0,N.z)(e=>{var t;let r=e();if(r===v.fE.Success&&"auto"===o){let e=null==(t=(0,I.r)(m))?void 0:t.activeElement,r=x.tabs.findIndex(t=>t.current===e);-1!==r&&A.change(r)}return r}),R=(0,N.z)(e=>{let t=u.map(e=>e.current).filter(Boolean);if(e.key===b.R.Space||e.key===b.R.Enter){e.preventDefault(),e.stopPropagation(),A.change(k);return}switch(e.key){case b.R.Home:case b.R.PageUp:return e.preventDefault(),e.stopPropagation(),T(()=>(0,v.jA)(t,v.TO.First));case b.R.End:case b.R.PageDown:return e.preventDefault(),e.stopPropagation(),T(()=>(0,v.jA)(t,v.TO.Last))}if(T(()=>(0,h.E)(l,{vertical:()=>e.key===b.R.ArrowUp?(0,v.jA)(t,v.TO.Previous|v.TO.WrapAround):e.key===b.R.ArrowDown?(0,v.jA)(t,v.TO.Next|v.TO.WrapAround):v.fE.Error,horizontal:()=>e.key===b.R.ArrowLeft?(0,v.jA)(t,v.TO.Previous|v.TO.WrapAround):e.key===b.R.ArrowRight?(0,v.jA)(t,v.TO.Next|v.TO.WrapAround):v.fE.Error}))===v.fE.Success)return e.preventDefault()}),D=(0,p.useRef)(!1),M=(0,N.z)(()=>{var e;D.current||(D.current=!0,null==(e=m.current)||e.focus(),A.change(k),(0,O.Y)(()=>{D.current=!1}))}),_=(0,N.z)(e=>{e.preventDefault()}),S=(0,p.useMemo)(()=>({selected:P}),[P]),L={ref:w,onKeyDown:R,onMouseDown:_,onClick:M,id:i,role:"tab",type:(0,z.f)(e,m),"aria-controls":null==(n=null==(r=d[k])?void 0:r.current)?void 0:n.id,"aria-selected":P,tabIndex:P?0:-1};return(0,g.sY)({ourProps:L,theirProps:s,slot:S,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,g.yV)(function(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:a=!1,onChange:i,selectedIndex:s=null,...l}=e,o=n?"vertical":"horizontal",c=a?"manual":"auto",u=null!==s,d=(0,j.T)(t),[A,x]=(0,p.useReducer)(U,{selectedIndex:null!=s?s:r,tabs:[],panels:[]}),m=(0,p.useMemo)(()=>({selectedIndex:A.selectedIndex}),[A.selectedIndex]),f=(0,w.E)(i||(()=>{})),h=(0,w.E)(A.tabs),b=(0,p.useMemo)(()=>({orientation:o,activation:c,...A}),[o,c,A]),z=(0,N.z)(e=>(x({type:1,tab:e}),()=>x({type:2,tab:e}))),E=(0,N.z)(e=>(x({type:3,panel:e}),()=>x({type:4,panel:e}))),O=(0,N.z)(e=>{I.current!==e&&f.current(e),u||x({type:0,index:e})}),I=(0,w.E)(u?e.selectedIndex:A.selectedIndex),P=(0,p.useMemo)(()=>({registerTab:z,registerPanel:E,change:O}),[]);return(0,y.e)(()=>{x({type:0,index:null!=s?s:r})},[s]),(0,y.e)(()=>{if(void 0===I.current||A.tabs.length<=0)return;let e=(0,v.z2)(A.tabs,e=>e.current);e.some((e,t)=>A.tabs[t]!==e)&&O(e.indexOf(A.tabs[I.current]))}),p.createElement(T,null,p.createElement(L.Provider,{value:P},p.createElement(S.Provider,{value:b},b.tabs.length<=0&&p.createElement(k,{onFocus:()=>{var e,t;for(let r of h.current)if((null==(e=r.current)?void 0:e.tabIndex)===0)return null==(t=r.current)||t.focus(),!0;return!1}}),(0,g.sY)({ourProps:{ref:d},theirProps:l,slot:m,defaultTag:q,name:"Tabs"}))))}),List:(0,g.yV)(function(e,t){let{orientation:r,selectedIndex:n}=B("Tab.List"),a=(0,j.T)(t);return(0,g.sY)({ourProps:{ref:a,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,g.yV)(function(e,t){let{selectedIndex:r}=B("Tab.Panels"),n=(0,j.T)(t),a=(0,p.useMemo)(()=>({selectedIndex:r}),[r]);return(0,g.sY)({ourProps:{ref:n},theirProps:e,slot:a,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,g.yV)(function(e,t){var r,n,a,i;let s=(0,f.M)(),{id:l=`headlessui-tabs-panel-${s}`,tabIndex:o=0,...c}=e,{selectedIndex:u,tabs:d,panels:A}=B("Tab.Panel"),x=F("Tab.Panel"),m=(0,p.useRef)(null),h=(0,j.T)(m,t);(0,y.e)(()=>x.registerPanel(m),[x,m]);let b=C("panels"),v=A.indexOf(m);-1===v&&(v=b);let z=v===u,w=(0,p.useMemo)(()=>({selected:z}),[z]),k={ref:h,id:l,role:"tabpanel","aria-labelledby":null==(n=null==(r=d[v])?void 0:r.current)?void 0:n.id,tabIndex:z?o:-1};return z||null!=(a=c.unmount)&&!a||null!=(i=c.static)&&i?(0,g.sY)({ourProps:k,theirProps:c,slot:w,defaultTag:"div",features:G,visible:z,name:"Tabs.Panel"}):p.createElement(E._,{as:"span",...k})})});var Q=r(1526),W=r(4933),Z=r(4297);let Y=(0,Z.Z)("Dog",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]),K=(0,Z.Z)("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",y1:"3",x2:"9",y2:"18",key:"3zqglt"}],["line",{x1:"15",y1:"6",x2:"15",y2:"21",key:"1c9xoo"}]]),J=[{name:"Yo",image:{src:"/_next/static/media/portrait.952c91c5.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEVMaXFfvMdANjSmnp1xlp2ft8dqp658r7YAv+AAweF6tMIFvNphsb6ipqe3o52mg4EAy+cAv+K5mpcAQ1EAq8i3lY5Wsb+hlZRGQUEgi5yyr65zZWNDlqNisL4tgY6trKyBfHxUeoAAw96bqas2c32olpMKu9Y5k6k1qL1NZGeZmpoBQGngAAAAI3RSTlMA/l392gr9/nKoG8jIoDT3/Ez7hJr7g5yY98v3/mX8l9X8/vfc2PQAAAAJcEhZcwAACxMAAAsTAQCanBgAAABGSURBVHicBcGFAcAgAAOw4jJ3N2D6/4FLAOgoTlIAxjl1coHicrnMbo3WK0fKx6DzjMyNqtG/qzymUIHyIbBvp4Cwy7hZ/JaYBHPrcaK4AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},icon:(0,s.jsx)(W.Z,{})},{name:"Aren",image:{src:"/_next/static/media/vfx.d2b7ccce.jpg",height:512,width:512,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAACAQMFAAAAAAAAAAAAAAAAAQIREiJBUWGBof/EABUBAQEAAAAAAAAAAAAAAAAAAAEE/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oADAMBAAIRAxEAPwCUqShGis5xT2169YAK5BbP/9k=",blurWidth:8,blurHeight:8},icon:(0,s.jsx)(Y,{})},{name:"Lugar",image:{src:"/_next/static/media/art.c51821ef.jpg",height:512,width:512,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAAP/EAB8QAAAFBAMAAAAAAAAAAAAAAAABAgMEBRESIUFhgf/EABUBAQEAAAAAAAAAAAAAAAAAAAIF/8QAGREAAQUAAAAAAAAAAAAAAAAAAAECESEi/9oADAMBAAIRAxEAPwBUK9IZW9lOcOGhjFLJHxbSe/NgABRZUYmT/9k=",blurWidth:8,blurHeight:8},icon:(0,s.jsx)(K,{})}];function V(){let[e,t]=(0,p.useState)(0),[r,n]=(0,p.useState)(null),a=function(e,t,r){var n=this,a=(0,p.useRef)(null),i=(0,p.useRef)(0),s=(0,p.useRef)(null),l=(0,p.useRef)([]),o=(0,p.useRef)(),c=(0,p.useRef)(),u=(0,p.useRef)(e),d=(0,p.useRef)(!0);(0,p.useEffect)(function(){u.current=e},[e]);var A=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var x=!!(r=r||{}).leading,m=!("trailing"in r)||!!r.trailing,g="maxWait"in r,f=g?Math.max(+r.maxWait||0,t):null;return(0,p.useEffect)(function(){return d.current=!0,function(){d.current=!1}},[]),(0,p.useMemo)(function(){var e=function(e){var t=l.current,r=o.current;return l.current=o.current=null,i.current=e,c.current=u.current.apply(r,t)},r=function(e,t){A&&cancelAnimationFrame(s.current),s.current=A?requestAnimationFrame(e):setTimeout(e,t)},p=function(e){if(!d.current)return!1;var r=e-a.current;return!a.current||r>=t||r<0||g&&e-i.current>=f},h=function(t){return s.current=null,m&&l.current?e(t):(l.current=o.current=null,c.current)},b=function e(){var n=Date.now();if(p(n))return h(n);if(d.current){var s=t-(n-a.current);r(e,g?Math.min(s,f-(n-i.current)):s)}},v=function(){var u=Date.now(),A=p(u);if(l.current=[].slice.call(arguments),o.current=n,a.current=u,A){if(!s.current&&d.current)return i.current=a.current,r(b,t),x?e(a.current):c.current;if(g)return r(b,t),e(a.current)}return s.current||r(b,t),c.current};return v.cancel=function(){s.current&&(A?cancelAnimationFrame(s.current):clearTimeout(s.current)),i.current=0,l.current=a.current=o.current=s.current=null},v.isPending=function(){return!!s.current},v.flush=function(){return s.current?h(Date.now()):c.current},v},[x,g,t,f,m,A])}(e=>{t(e)},100,{leading:!0});return(0,s.jsxs)(H.Group,{className:"relative overflow-hidden group",as:"div",selectedIndex:e,onChange:a,children:[(0,s.jsx)(H.List,{className:"absolute left-0 right-0 flex flex-row items-center justify-between w-40 px-3 py-2 mx-auto text-sm font-medium transition border rounded-full md:translate-y-20 md:group-hover:-translate-y-4 lef-0 bottom-2 border-zinc-900/10 bg-white/50 text-zinc-700 backdrop-blur-sm hover:text-zinc-900 dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-400 dark:backdrop-blur dark:hover:text-white ring-1 ring-zinc-100/70 dark:ring-zinc-900/70",children:J.map((t,a)=>(0,s.jsxs)("div",{className:"relative ",onMouseEnter:()=>n(a),onMouseLeave:()=>n(null),children:[(0,s.jsx)(Q.M,{children:r===a&&(0,s.jsx)(c.E.span,{className:"absolute inset-0 transition-colors bg-zinc-500/30 dark:bg-zinc-900/30 rounded-2xl ",layoutId:"hoverBackground",initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.15,delay:.2}}})}),a===e&&(0,s.jsx)(c.E.div,{layoutId:"activeBackground",className:"absolute inset-0 bg-zinc-100 ring-zinc-300 dark:bg-zinc-900/90 dark:ring-zinc-800 ring-1",initial:{borderRadius:16}}),(0,s.jsxs)(H,{className:"relative z-10 p-8 px-2 py-1 rounded-full focus:outline-none",children:[t.icon,(0,s.jsx)("div",{className:"sr-only",children:t.name})]})]},a))}),(0,s.jsx)(H.Panels,{children:J.map((e,t)=>(0,s.jsx)(H.Panel,{children:(0,s.jsx)(m(),{src:e.image,alt:e.name,sizes:"(min-width: 1024px) 32rem, 20rem",placeholder:"blur",className:"object-cover aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800"})},t))})]})}let $=[{id:1,author:"Nijima",title:"Kenichi",body:"Suponer lo peor y hacer lo mejor, es el m\xe9todo de un verdadero estratega."},{id:2,author:"Uzumaki",title:"Filosof\xeda de vida",body:"No vivas con falsedades ni miedos, porque terminar\xe1s odi\xe1ndote a ti mismo."},{id:3,author:"Shiroe",title:"Log Horizon",body:"Si no puedes hacer algo no lo hagas, conc\xe9ntrate en lo que puedas hacer."},{id:4,author:"Marco",title:"Mirai Nikki",body:"Si este es el peor d\xeda de tu vida, entonces debes saber que ma\xf1ana ser\xe1 mejor."},{id:5,author:"Shuichi",title:"Yu Yu Hakusho",body:"Conf\xeda en tus impulsos, y ni siquiera tus propios pensamientos podr\xe1n traicionarte."},{id:6,author:"Gintoki",title:"Gintama",body:"Recuerda, en nuestra vida nosotros no somos lectores, sino escritores."}];var X=r(6010);function ee(e){let{title:t,body:r,author:n,className:a,...i}=e;return(0,s.jsxs)(c.E.figure,{className:(0,X.Z)("rounded-3xl border border-zinc-900/10 bg-white/10  p-6 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20 dark:backdrop-blur",a),...i,...d.LL,children:[(0,s.jsx)("blockquote",{className:"text-zinc-900 dark:text-zinc-100",children:(0,s.jsx)("p",{className:"text-sm font-semibold leading-6 before:content-['“'] after:content-['”']",children:r})}),(0,s.jsxs)("figcaption",{className:"mt-3 text-sm text-zinc-600 dark:text-zinc-400",children:[n," - ",t]})]})}function et(e,t){let r=[];for(let n=0;n<e.length;n++){let a=n%t;r[a]||(r[a]=[]),r[a].push(e[n])}return r}function er(e){let{className:t,reviews:r,reviewClassName:n=()=>{},msPerPixel:a=0}=e;return(0,s.jsx)("div",{className:(0,X.Z)("space-y-8 py-4",t),children:r.map((e,t)=>(0,s.jsx)(ee,{"aria-hidden":t>=r.length,className:n(t%r.length),...e},t))})}function en(){let e=(0,p.useRef)(),t=et($,3);return t=[t[0],t[1],et(t[2],2)],(0,s.jsxs)("div",{ref:e,className:"relative grid items-start grid-cols-1 gap-8 overflow-hidden sm:mt-10 md:grid-cols-2 lg:grid-cols-3",children:[(0,s.jsx)(er,{reviews:[...t[0],...t[2].flat(),...t[1]],reviewClassName:e=>(0,X.Z)(e>=t[0].length+t[2][0].length&&"md:hidden",e>=t[0].length&&"lg:hidden"),msPerPixel:10}),(0,s.jsx)(er,{reviews:[...t[1],...t[2][1]],className:"hidden md:block",reviewClassName:e=>e>=t[1].length&&"lg:hidden",msPerPixel:15}),(0,s.jsx)(er,{reviews:t[2].flat(),className:"hidden lg:block",msPerPixel:10})]})}function ea(){return(0,s.jsxs)("section",{id:"reviews","aria-labelledby":"reviews-title",className:"pt-20 pb-16 sm:pt-32 sm:pb-24",children:[(0,s.jsx)("h2",{id:"reviews-title",className:"text-3xl font-medium tracking-tight text-zinc-900 dark:text-white",children:"Lemas"}),(0,s.jsx)(en,{})]})}var ei=r(3531);function es(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:"N9+"}),(0,s.jsx)("meta",{name:"description",content:"Hola, escribo c\xf3digo. Principalmente escribo C, C++ y C#. Dise\xf1ador y programador de videojuegos."}),(0,s.jsx)("meta",{name:"keywords",content:"videojuegos, desarrollador, murcia, espa\xf1a, dise\xf1ador, csharp, portfolio, cpp, ninpl, nineplus"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:"N9+"}),(0,s.jsx)("meta",{property:"og:description",content:"Hola, escribo c\xf3digo. Principalmente escribo C, C++ y C#. Dise\xf1ador y programador de videojuegos."}),(0,s.jsx)("meta",{property:"og:image",content:"https://ninpl.com/perfil/api/og?title=NinePlus - Dise\xf1ador y desarrollador de videojuegos"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:domain",content:"ninpl.com"}),(0,s.jsx)("meta",{property:"twitter:url",content:"https://ninpl.com"}),(0,s.jsx)("meta",{name:"twitter:title",content:"N9+"}),(0,s.jsx)("meta",{name:"twitter:description",content:"Hola, escribo c\xf3digo. Principalmente escribo C, C++ y C#. Dise\xf1ador y programador de videojuegos."}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://ninpl.com/perfil/api/og?title=NinePlus - Dise\xf1ador y desarrollador de videojuegos"})]}),(0,s.jsxs)(A.W,{className:"mt-16 sm:mt-32",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12",children:[(0,s.jsx)(c.E.div,{className:"lg:pl-20",variants:d.LG,children:(0,s.jsx)("div",{className:"max-w-xs px-2.5 lg:max-w-none",children:(0,s.jsx)(V,{})})}),(0,s.jsxs)("div",{className:"lg:order-first lg:row-span-2",children:[(0,s.jsx)(c.E.h1,{className:"text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl",variants:d.LG,children:(0,s.jsxs)(u.Z,{children:[" ","NinePlus - Dise\xf1ador y desarrollador de videojuegos."]})}),(0,s.jsxs)(c.E.div,{className:"mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400",variants:d.LG,children:[(0,s.jsx)("p",{children:"Hola, escribo c\xf3digo. Principalmente escribo C, C++ y C#. Dise\xf1ador y programador de videojuegos. Estoy aqu\xed para escribir sobre el c\xf3digo que escribo. A veces es simple, a veces es complejo y, a veces, simplemente es est\xfapido, pero si la gente dice que quiere leer cosas est\xfapidas, que as\xed sea."}),(0,s.jsx)("p",{children:"Una vida llena de errores no solo es m\xe1s honorable, sino que es m\xe1s sabia que una vida gastada sin hacer nada. Por ello me gusta cometer errores y aprender de ellos como si de un camino de aprendizaje se tratara."}),(0,s.jsx)("p",{children:"Me gusta la tecnolog\xeda relacionada con redes, leer libros/novelas de alta fantas\xeda, programaci\xf3n gr\xe1fica, los animes de aventura y fantas\xeda, los videojuegos, sobre todo RPG y t\xe1cticos, el whisky escoces y los deportes de escalada."}),(0,s.jsx)("p",{children:"Mi lema es: el trabajo duro supera al talento cuando el talento no trabaja duro."})]})]}),(0,s.jsx)(ei.P9,{})]}),(0,s.jsx)(ea,{})]})]})}},9008:function(e,t,r){e.exports=r(5443)},1782:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(7294),a="__wrap_b",i="__wrap_o",s="undefined"==typeof window?n.useEffect:n.useLayoutEffect,l=(e,t,r)=>{let n=(r=r||document.querySelector(`[data-br="${e}"]`)).parentElement,a=e=>r.style.maxWidth=e+"px";r.style.maxWidth="";let i=n.clientWidth,s=n.clientHeight,l=i/2-.25,o=i+.5,c;if(i){for(;l+1<o;)a(c=Math.round((l+o)/2)),n.clientHeight===s?o=c:l=c;a(o*t+i*(1-t))}r.__wrap_o||(r.__wrap_o=new ResizeObserver(()=>{self.__wrap_b(0,+r.dataset.brr,r)})).observe(n)},o=l.toString(),c=(e,t="")=>n.createElement("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:(e?"":`self.${a}=${o};`)+t}}),u=n.createContext(!1),d=({as:e="span",ratio:t=1,children:r,...o})=>{let d=n.useId(),A=n.useRef(),p=n.useContext(u);return s(()=>{A.current&&(self[a]=l)(0,t,A.current)},[r,t]),s(()=>()=>{if(!A.current)return;let e=A.current[i];e&&(e.disconnect(),delete A.current[i])},[]),n.createElement(n.Fragment,null,n.createElement(e,{...o,"data-br":d,"data-brr":t,ref:A,style:{display:"inline-block",verticalAlign:"top",textDecoration:"inherit"},suppressHydrationWarning:!0},r),c(p,`self.${a}("${d}",${t})`))}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3982)}),_N_E=e.O()}]);