"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,a,o,i,c,u,s=e(885),p=e(2791),d=e(6871),h=e(273),l=e(168),f=e(6031),v=f.ZP.ul(r||(r=(0,l.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: 30px;\n  margin-right: 30px;\n"]))),m=f.ZP.li(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n"]))),g=f.ZP.h3(o||(o=(0,l.Z)(["\n  color: #ffa900;\n  margin-top: 0;\n  margin-bottom: 10px;\n"]))),q=f.ZP.p(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: bold;\n  color: #090c4f;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),x=f.ZP.div(c||(c=(0,l.Z)(["\n  width: 160px;\n  height: 230px;\n  margin-bottom: 10px;\n"]))),b=f.ZP.img(u||(u=(0,l.Z)(["\n  display: block;\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n"]))),E=e(184),y=function(){var t=(0,d.UO)().movieId,n=(0,p.useState)([]),e=(0,s.Z)(n,2),r=e[0],a=e[1];return(0,p.useEffect)((function(){(0,h.Gc)(t).then(a)}),[t]),(0,E.jsx)(v,{children:r.map((function(t){var n=t.id,e=t.photo,r=t.name,a=t.character;return(0,E.jsxs)(m,{children:[(0,E.jsx)(x,{children:(0,E.jsx)(b,{src:e,alt:r,width:"100%"})}),(0,E.jsx)(g,{children:r}),(0,E.jsxs)(q,{children:["Character: ",a]})]},n)}))})}},273:function(t,n,e){e.d(n,{Gc:function(){return m},HI:function(){return v},Hg:function(){return h},jr:function(){return g},on:function(){return l}});var r=e(5861),a=e(7757),o=e.n(a),i=e(4569),c=e.n(i),u=e(7972),s=e(113),p="9a3eb7a069130cbd83fc81cc8deda116",d="https://api.themoviedb.org/3",h=function(){var t=(0,r.Z)(o().mark((function t(){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("".concat(d,"/trending/movie/day?api_key=").concat(p));case 2:return n=t.sent,e=[],n.data.results.map((function(t){var n=t.poster_path?f(t.poster_path):s;return e.push({title:t.title,id:t.id,photo:n})})),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:p,query:n}),t.next=3,c().get("".concat(d,"/search/movie?").concat(e));case 3:return r=t.sent,a=[],r.data.results.map((function(t){var n=t.poster_path?f(t.poster_path):s;return a.push({title:t.title,id:t.id,photo:n})})),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(t){return"".concat("https://image.tmdb.org/t/p","/w500/").concat(t)},v=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:p}),t.next=3,c().get("".concat(d,"/movie/").concat(n,"?").concat(e));case 3:return r=t.sent,a=r.data,t.abrupt("return",{id:a.id,title:a.title,image:f(a.poster_path),year:new Date(a.release_date).getFullYear(),genres:a.genres.map((function(t){return t.name})).join(", "),vote:a.vote_average,votes:a.vote_count,popularity:a.popularity,originalTitle:a.original_title,about:a.overview});case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("".concat(d,"/movie/").concat(n,"/credits?api_key=").concat(p));case 2:return e=t.sent,r=[],e.data.cast.map((function(t){var n=t.profile_path?f(t.profile_path):u;return r.push({name:t.name,character:t.character,id:t.id,photo:n})})),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("".concat(d,"/movie/").concat(n,"/reviews?api_key=").concat(p));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},7972:function(t){t.exports="data:image/png;base64,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"},113:function(t,n,e){t.exports=e.p+"static/media/noFilm.696459799fad09731709.jpg"}}]);
//# sourceMappingURL=387.cfb4ddd7.chunk.js.map