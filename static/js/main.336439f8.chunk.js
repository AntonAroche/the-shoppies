(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n.n(i),o=n(8),r=n.n(o),c=(n(35),n(18)),l=n(9),h=n(10),m=n(12),d=n(11),u=n(17),j=n.n(u),b=n(27),v=n(13),p=(n(37),n(28)),f=n.n(p),O=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={searchTerm:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({searchTerm:t.target.value});case 2:return e.next=4,f.a.get("".concat("http://www.omdbapi.com/?apikey=8b01dc14&","s=").concat(this.state.searchTerm,"&type=movie"));case 4:n=e.sent,this.props.refreshMovies(n,this.state.searchTerm);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"form-group has-search container w-50 SearchBar",children:[Object(a.jsx)("label",{htmlFor:"searchTerm",children:"Movie title"}),Object(a.jsx)("span",{className:"fa fa-search form-control-feedback"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"searchTerm",name:"searchTerm",placeholder:"Search",value:this.state.searchTerm,onChange:this.handleChange})]})}}]),n}(i.Component),x=(n(56),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).handleNomination=function(){e.props.nominateMovie(e.props.id)},e.handleRemove=function(){e.props.removeNomination(e.props.id)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.year,i=e.nominated,s=e.isNomination,o=e.imgSrc;return Object(a.jsx)("div",{className:"Movie",children:Object(a.jsxs)("li",{className:"MovieRow",children:[Object(a.jsx)("img",{src:o,alt:"",className:"MoviePoster"}),Object(a.jsxs)("div",{className:"MovieInfo",children:[Object(a.jsx)("span",{children:t}),Object(a.jsx)("span",{children:n})]}),s?Object(a.jsx)("button",{disabled:i,onClick:this.handleRemove,children:"Remove"}):Object(a.jsx)("button",{disabled:i,onClick:this.handleNomination,children:"Nominate"})]})})}}]),n}(i.Component)),N=(n(57),n(66)),g=n(67),M=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={searchTerm:"",movies:[],nominations:[],showModal:!1},e.refreshMovies=function(t,n){var a=t.data;e.setState({movies:"False"!==a.Response?a.Search:[],searchTerm:n})},e.nominateMovie=function(t){var n=e.state.movies.filter((function(e){return e.imdbID===t}));e.setState((function(e){return{nominations:[].concat(Object(c.a)(e.nominations),Object(c.a)(n))}}),(function(){5===e.state.nominations.length&&(console.log("yes"),e.setState({showModal:!0}))}))},e.removeNomination=function(t){e.setState((function(e){return{nominations:e.nominations.filter((function(e){return e.imdbID!==t}))}}))},e.handleSubmitModal=function(){e.setState((function(e){return{showModal:!1,nominations:[]}}))},e.handleCloseModal=function(){e.setState((function(e){return{showModal:!1}}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state.movies.map((function(t){var n=e.state.nominations.some((function(e){return e.imdbID===t.imdbID})),i=5===e.state.nominations.length;return Object(a.jsx)(x,{id:t.imdbID,name:t.Title,year:t.Year,imgSrc:t.Poster,nominated:n||i,isNomination:!1,nominateMovie:e.nominateMovie},t.imdbID)})),n=this.state.nominations.map((function(t){return Object(a.jsx)(x,{id:t.imdbID,name:t.Title,year:t.Year,imgSrc:t.Poster,isNomination:!0,removeNomination:e.removeNomination},t.imdbID)}));return Object(a.jsxs)("div",{className:"TheShoppies",children:[Object(a.jsx)("header",{className:"App-header",children:"The Shoppies"}),Object(a.jsx)(O,{refreshMovies:this.refreshMovies}),Object(a.jsxs)("div",{className:"list-container",children:[Object(a.jsxs)("div",{className:"movie-list",children:[Object(a.jsx)("h5",{className:"movie-list-title",children:0===this.state.movies.length?"Results":'Results for "'.concat(this.state.searchTerm,'"')}),Object(a.jsx)("ul",{className:"list-group",children:t})]}),Object(a.jsxs)("div",{className:"movie-list",children:[Object(a.jsx)("h5",{className:"movie-list-title",children:"Nominations"}),Object(a.jsx)("ul",{className:"list-group",children:n})]})]}),Object(a.jsxs)(N.a,{show:this.state.showModal,onHide:this.handleCloseModal,animation:!1,children:[Object(a.jsx)(N.a.Header,{children:Object(a.jsx)(N.a.Title,{children:"You're ready to submit this year's 5 nominations!"})}),Object(a.jsxs)(N.a.Footer,{children:[Object(a.jsx)(g.a,{variant:"primary",onClick:this.handleSubmitModal,children:"Submit to the academy"}),Object(a.jsx)(g.a,{variant:"secondary",onClick:this.handleCloseModal,children:"I want to change my nominations"})]})]})]})}}]),n}(i.Component);n(61);var y=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(M,{})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};n(62);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),S()}},[[63,1,2]]]);
//# sourceMappingURL=main.336439f8.chunk.js.map