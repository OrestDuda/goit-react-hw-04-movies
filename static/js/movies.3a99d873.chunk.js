(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{52:function(t,e,n){"use strict";var a=n(57),c=n.n(a),i="cd745b1c38819d91d823e4d3c6c216e8",r="https://api.themoviedb.org/3/",u={getTrending:function(){return c.a.get("".concat(r,"trending/all/day?api_key=").concat(i)).then((function(t){return t.data.results}))},getSearch:function(t){return c.a.get("".concat(r,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(t){return t.data.results}))},getMovieById:function(t){return c.a.get("".concat(r,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US")).then((function(t){return t.data}))},getCastById:function(t){return c.a.get("".concat(r,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US")).then((function(t){return t.data.cast}))},getReviewsById:function(t){return c.a.get("".concat(r,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(t){return t.data.results}))}};e.a=u},58:function(t,e,n){"use strict";var a=n(9),c=n(59),i=n.n(c),r=n(3);e.a=function(t){var e=t.list,n=t.historyLocation;return Object(r.jsx)("ul",{className:i.a.list,children:e.map((function(t){return t.title?Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:{pathname:"/movies/".concat(t.id),state:{from:n}},children:t.title})},t.id):null}))})}},59:function(t,e,n){t.exports={list:"MovieList_list__3aC43"}},89:function(t,e,n){"use strict";n.r(e);var a=n(53),c=n(54),i=n(56),r=n(55),u=n(0),s=n(52),o=n(58),l=n(3),h=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={input:"",search:[]},t.handleChange=function(e){t.setState({input:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),s.a.getSearch(t.state.input).then((function(e){t.setState({search:e,input:" "})}))},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(l.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.input}),Object(l.jsx)("button",{type:"submit",children:"Search"})]}),this.state.search?Object(l.jsx)(o.a,{list:this.state.search}):null]})}}]),n}(u.Component);e.default=h}}]);
//# sourceMappingURL=movies.3a99d873.chunk.js.map