"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[275],{7603:function(t,e,n){n.d(e,{bb:function(){return i},Pg:function(){return p},tx:function(){return f},Wf:function(){return l},yo:function(){return d}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u);s().defaults.baseURL="https://api.themoviedb.org/",s().defaults.headers.post["Content-Type"]="application/json; charset=utf-8";var o="96dea35b5a4d6ccb61b77721fd102ef9",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("3/trending/movie/day?api_key=".concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/3/search/movie?api_key=".concat(o,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/3/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},275:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(5861),a=n(885),c=n(7757),u=n.n(c),s=n(6871),o=n(2791),i=n(7603),p=n(6373),f=n(6030),l="Cast_photo__lvFLf",d="Cast_castList__ARoWn",h="Cast_castItem__-Jcfe",v=n(184),m=function(){var t=(0,s.UO)().movieId,e=(0,o.useState)([]),n=(0,a.Z)(e,2),c=n[0],m=n[1],g=(0,o.useState)(!1),_=(0,a.Z)(g,2),x=_[0],b=_[1];return(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,i.yo)(t);case 4:n=e.sent,m(n.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,v.jsxs)("section",{children:[x&&(0,v.jsx)(p.Z1,{color:"red",outerCircleColor:"blue",middleCircleColor:"red",innerCircleColor:"grey"}),(0,v.jsx)("ul",{className:d,children:c.length>0&&c.map((function(t){var e=t.original_name,n=t.character,r=t.profile_path,a=t.id;return(0,v.jsxs)("li",{className:h,children:[(0,v.jsx)("img",{className:l,src:r?"https://image.tmdb.org/t/p/w500".concat(r):f,alt:e}),(0,v.jsxs)("p",{children:["Name: ",e]}),(0,v.jsxs)("p",{children:["Character: ",n]})]},a)}))}),0===c.length&&(0,v.jsx)("p",{children:" Cast not found =("})]})}},6030:function(t,e,n){t.exports=n.p+"static/media/no-image.ae12979f6099185ebba0.jpg"}}]);
//# sourceMappingURL=275.77c2d6bf.chunk.js.map