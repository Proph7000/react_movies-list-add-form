(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(6),n=i.n(a),c=(i(18),i(12)),s=i(7),r=i(8),l=i(13),o=i(11),d=i(1),m=(i(19),i(20),i(21),i(0)),j=function(e){var t=e.movie;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"card-image",children:Object(m.jsx)("figure",{className:"image is-4by3",children:Object(m.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(m.jsxs)("div",{className:"card-content",children:[Object(m.jsxs)("div",{className:"media",children:[Object(m.jsx)("div",{className:"media-left",children:Object(m.jsx)("figure",{className:"image is-48x48",children:Object(m.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(m.jsx)("div",{className:"media-content",children:Object(m.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(m.jsxs)("div",{className:"content",children:[t.description,Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},b=function(e){var t=e.movies;return Object(m.jsx)("ul",{className:"movies",children:t.map((function(e){return Object(m.jsx)("li",{className:"card","data-cy":"movie-card",children:Object(m.jsx)(j,{movie:e})},e.imdbId)}))})},u=i(2),h=i(9),O=i.n(h);var g=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.required,s=void 0!==c&&c,r=e.onChange,l=void 0===r?function(){}:r,o=Object(d.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),j=Object(u.a)(o,1)[0],b=Object(d.useState)(!1),h=Object(u.a)(b,2),g=h[0],v=h[1],p=g&&s&&!i;return Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",htmlFor:j,children:n}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{id:j,"data-cy":"movie-".concat(t),className:O()("input",{"is-danger":p}),type:"text",placeholder:"Enter ".concat(n),value:i,onChange:function(e){return l(e.target.value)},onBlur:function(){return v(!0)}})}),p&&Object(m.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")})]})},v=(i(23),function(){return Object(m.jsxs)("div",{className:"notification error",children:[Object(m.jsx)("h2",{className:"notification__title",children:"Error!"}),Object(m.jsx)("p",{children:"Please, enter valid URL."})]})}),p=(i(24),/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/),f=function(e){var t=e.onAdd,i=Object(d.useState)(0),a=Object(u.a)(i,2),n=a[0],c=a[1],s=Object(d.useState)(""),r=Object(u.a)(s,2),l=r[0],o=r[1],j=Object(d.useState)(""),b=Object(u.a)(j,2),h=b[0],O=b[1],f=Object(d.useState)(""),x=Object(u.a)(f,2),w=x[0],M=x[1],N=Object(d.useState)(""),y=Object(u.a)(N,2),U=y[0],T=y[1],_=Object(d.useState)(""),I=Object(u.a)(_,2),B=I[0],S=I[1],k=Object(d.useState)(!1),A=Object(u.a)(k,2),z=A[0],D=A[1],C=!0;function F(e){e.preventDefault(),p.test(w)||p.test(U)||(D(!0),setTimeout(D,5e3,!1),C=!1),C&&(c((function(e){return e+1})),o(""),O(""),M(""),T(""),S(""),t(l,h,w,U,B))}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{className:"NewMovie",onSubmit:function(e){return F(e)},children:[Object(m.jsx)("h2",{className:"title",children:"Add a movie"}),Object(m.jsx)(g,{name:"title",label:"Title",value:l,onChange:function(e){return o(e)},required:!0}),Object(m.jsx)(g,{name:"description",label:"Description",value:h,onChange:function(e){return O(e)}}),Object(m.jsx)(g,{name:"imgUrl",label:"Image URL",value:w,onChange:function(e){return M(e)},required:!0}),Object(m.jsx)(g,{name:"imdbUrl",label:"Imdb URL",value:U,onChange:function(e){return T(e)},required:!0}),Object(m.jsx)(g,{name:"imdbId",label:"Imdb ID",value:B,onChange:function(e){return S(e)},required:!0}),Object(m.jsx)("div",{className:"field is-grouped",children:Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!(l&&w&&U&&B),children:"Add"})})})]},n),z&&Object(m.jsx)(v,{})]})},x=i(10),w=function(e){Object(l.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(s.a)(this,i);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:x},e.addMovie=function(t,i,a,n,s){e.setState((function(e){var r={title:t,description:i,imgUrl:a,imdbUrl:n,imdbId:s};return{movies:[].concat(Object(c.a)(e.movies),[r])}}))},e}return Object(r.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"page",children:[Object(m.jsx)("div",{className:"page-content",children:Object(m.jsx)(b,{movies:this.state.movies})}),Object(m.jsx)("div",{className:"sidebar",children:Object(m.jsx)(f,{onAdd:this.addMovie})})]})}}]),i}(d.Component);n.a.render(Object(m.jsx)(w,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.4eccba1a.chunk.js.map