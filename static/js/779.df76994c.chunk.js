"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{9779:function(n,t,e){e.r(t),e.d(t,{default:function(){return V}});var r,a,o,i,c,s,u,p=e(885),d=e(2791),h=e(273),l=e(6871),f=e(8494),v=e(168),x=e(6031),q=x.ZP.div(r||(r=(0,v.Z)(["\n  margin-left: 30px;\n  margin-right: 30px;\n  margin-bottom: 20px;\n  padding: 10px;\n  box-shadow: 0 0 10px #0a04573b;\n"]))),m=x.ZP.ul(a||(a=(0,v.Z)(["\n  list-style: none;\n  padding: 10px;\n"]))),b=x.ZP.li(o||(o=(0,v.Z)(["\n  border-radius: 10px;\n  padding: 35px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  box-shadow: 0 0 5px grey;\n"]))),g=x.ZP.h3(i||(i=(0,v.Z)(["\n  color: #97450c;\n"]))),E=x.ZP.p(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),y=x.ZP.span(s||(s=(0,v.Z)(["\n  font-weight: bold;\n  color: orangered;\n"]))),j=x.ZP.i(u||(u=(0,v.Z)(["\n  padding: 10px;\n  font-size: 30px;\n  color: #97450c;\n"]))),A=e(184),V=function(){var n=(0,d.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,l.UO)().movieId;return(0,d.useEffect)((function(){(0,h.jr)(a).then(r)}),[a]),(0,A.jsx)(q,{children:(null===e||void 0===e?void 0:e.length)>0?(0,A.jsx)(m,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,A.jsxs)(b,{className:"item",children:[(0,A.jsxs)(g,{children:["Author: ",(0,A.jsx)(y,{children:e})]}),(0,A.jsxs)(E,{children:[" ",r]})]},t)}))}):(0,A.jsxs)(j,{children:[(0,A.jsx)(f.aVd,{}),"We don`t have any reviews for this movie."]})})}},273:function(n,t,e){e.d(t,{Gc:function(){return x},HI:function(){return v},Hg:function(){return h},jr:function(){return q},on:function(){return l}});var r=e(5861),a=e(7757),o=e.n(a),i=e(4569),c=e.n(i),s=e(7972),u=e(113),p="9a3eb7a069130cbd83fc81cc8deda116",d="https://api.themoviedb.org/3",h=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(d,"/trending/movie/day?api_key=").concat(p));case 2:return t=n.sent,e=[],t.data.results.map((function(n){var t=n.poster_path?f(n.poster_path):u;return e.push({title:n.title,id:n.id,photo:t})})),n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:p,query:t}),n.next=3,c().get("".concat(d,"/search/movie?").concat(e));case 3:return r=n.sent,a=[],r.data.results.map((function(n){var t=n.poster_path?f(n.poster_path):u;return a.push({title:n.title,id:n.id,photo:t})})),n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(n){return"".concat("https://image.tmdb.org/t/p","/w500/").concat(n)},v=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:p}),n.next=3,c().get("".concat(d,"/movie/").concat(t,"?").concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",{id:a.id,title:a.title,image:f(a.poster_path),year:new Date(a.release_date).getFullYear(),genres:a.genres.map((function(n){return n.name})).join(", "),vote:a.vote_average,votes:a.vote_count,popularity:a.popularity,originalTitle:a.original_title,about:a.overview});case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(d,"/movie/").concat(t,"/credits?api_key=").concat(p));case 2:return e=n.sent,r=[],e.data.cast.map((function(n){var t=n.profile_path?f(n.profile_path):s;return r.push({name:n.name,character:n.character,id:n.id,photo:t})})),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),q=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(d,"/movie/").concat(t,"/reviews?api_key=").concat(p));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7972:function(n){n.exports="data:image/png;base64,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"},113:function(n,t,e){n.exports=e.p+"static/media/noFilm.696459799fad09731709.jpg"}}]);
//# sourceMappingURL=779.df76994c.chunk.js.map