(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){e.exports=n(228)},119:function(e,t,n){},124:function(e,t){},126:function(e,t){},163:function(e,t){},164:function(e,t){},228:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(110),u=n.n(r),c=(n(119),n(113)),s=n(8),i=n(9),l=n(11),m=n(10),d=n(12),p=[{body:"Playfair Display, serif",author:"Source Sans Pro, sans-serif"},{body:"Abril Fatface, cursive",author:"Poppins, sans-serif"},{body:"Ruda, sans-serif",author:"Roboto Slab, serif"},{body:"Cormorant Garamond, serif",author:"Fira Sans, sans-serif"},{body:"PT Sans, sans-serif",author:"Playfair Display, serif"}],h=n(59),f=n.n(h),g={createIterator:function(e){return this.createIteratorObj(e)},createIteratorObj:f.a.mark(function e(t){var n,a,o,r,u,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,a=!1,o=void 0,e.prev=3,r=t[Symbol.iterator]();case 5:if(n=(u=r.next()).done){e.next=12;break}return c=u.value,e.next=9,c;case 9:n=!0,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),a=!0,o=e.t0;case 18:e.prev=18,e.prev=19,n||null==r.return||r.return();case 21:if(e.prev=21,!a){e.next=24;break}throw o;case 24:return e.finish(21);case 25:return e.finish(18);case 26:case"end":return e.stop()}},e,null,[[3,14,18,26],[19,,21,25]])})},v={getTokenByKey:function(e){return window.localStorage.getItem(e)},setToken:function(e,t){window.localStorage.setItem(e,t)},updateToken:function(e,t){window.localStorage.setItem(e,t)},removeTokenByKey:function(e){window.localStorage.removeItem(e)}},b=n(60),k=n.n(b),E=n(24),I=o.a.createContext(),_=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).randomizeQuote=function(){n.setState({currentQuoteSaved:!1}),n.state.keepBackground||n.iterateBackgroundUrl(n.backgroundUrlItObj.next()),n.state.keepFonts||n.iterateFontPairing(n.fontPairItObj.next()),n.state.keepQuote||n.iterateQuote(n.quoteItObj.next())},n.undoRandomizeQuote=function(){n.state.keepBackground||n.setState(function(e){return{currentQuoteBgImageUrl:e.prevQuoteBgImageUrl,prevQuoteBgImageUrl:e.currentQuoteBgImageUrl}}),n.state.keepFonts||n.setState(function(e){return{fontPair:e.previousFontPair,prevFontPair:e.fontPair}}),n.state.keepQuote||n.setState(function(e){return{currentQuote:e.prevQuote,prevQuote:e.currentQuote}})},n.saveQuote=function(e,t){if(0!==e){var a={backgroundImageUrl:n.state.currentQuoteBgImageUrl,quoteId:n.state.currentQuote.id,bodyFont:n.state.currentQuoteFontPair.body,authorFont:n.state.currentQuoteFontPair.author,userId:e};fetch("".concat(E.API_BASE_URL,"/savedQuotes"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(v.getTokenByKey("motiv8-jwt"))},body:JSON.stringify(a)}).then(function(a){a.ok&&(t(e),n.setState({currentQuoteSaved:!0}))})}},n.handleCheckboxCheck=function(e){switch(e.target.id){case"keep-quote-checkbox":n.setState(function(e){return{keepQuote:!e.keepQuote}});break;case"keep-fonts-checkbox":n.setState(function(e){return{keepFonts:!e.keepFonts}});break;case"keep-background-checkbox":n.setState(function(e){return{keepBackground:!e.keepBackground}})}},n.editFavoritesItem=function(e,t){console.log("edit quote",e),n.setState({currentQuote:e,currentQuoteBgImageUrl:e.background_image_url,keepBackground:!1,keepFonts:!1,keepQuote:!1},function(){t.push("/quotes")})},n.createAccount=function(e,t){e.preventDefault();var a={username:t.username,password:t.password};fetch("".concat(E.API_BASE_URL,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){if(e.ok)return e.json()}).then(function(e){n.loginUser(null,a)})},n.loginUser=function(e,t){e&&e.preventDefault();var a={username:t.username,password:t.password};fetch("".concat(E.API_BASE_URL,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){if(e.error)console.log("error",e.error);else{var t=k.a.decode(e.authToken);v.setToken("motiv8-jwt",e.authToken),console.log(t),n.setState({userIsLoggedIn:!0,username:t.sub,userId:t.userId,savedQuotes:e.savedQuotes,menuIsOpen:!1})}})},n.logoutUser=function(){v.removeTokenByKey("motiv8-jwt"),n.setState({userIsLoggedIn:!1,userId:0,username:"",savedQuotes:[],menuIsOpen:!1})},n.getUpdatedSavedQuotes=function(e){fetch("".concat(E.API_BASE_URL,"/savedQuotes/").concat(e),{headers:{Authorization:"Bearer ".concat(v.getTokenByKey("motiv8-jwt"))}}).then(function(e){return e.json()}).then(function(e){n.setState({savedQuotes:e})})},n.deleteFavoritesItem=function(e){var t={savedQuoteId:e};fetch("".concat(E.API_BASE_URL,"/savedQuotes/"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(v.getTokenByKey("motiv8-jwt"))},body:JSON.stringify(t)}).then(function(t){t.ok&&n.setState(function(t){return{savedQuotes:t.savedQuotes.filter(function(t){return t.id!==e&&t})}})})},n.toggleMenuIsOpen=function(){n.setState(function(e){return{menuIsOpen:!e.menuIsOpen}})},n.state={quotes:[],quoteBackgroundImageUrls:[],quoteFontPairings:Object(c.a)(p),currentQuote:{},currentQuoteBgImageUrl:"",currentQuoteFontPair:{},currentQuoteSaved:!1,prevQuote:{},prevQuoteBgImageUrl:"",prevQuoteFontPair:{},quoteHistory:[],keepQuoteBackground:!1,keepQuoteFonts:!1,keepQuoteQuote:!1,userIsLoggedIn:!1,username:"",userId:0,savedQuotes:[],menuIsOpen:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.initializeApp();var e=k.a.decode(v.getTokenByKey("motiv8-jwt"),{complete:!0});if(e){var t=e.header,n=e.payload;console.log("header",t),console.log("payload",n),this.setState({userIsLoggedIn:!0,userId:n.userId,username:n.sub})}}},{key:"initializeApp",value:function(){var e=this,t=this.getBackgroundImages(30),n=this.getQuotes(30);Promise.all([n,t]).then(function(t){e.fontPairItObj=g.createIterator(e.state.quoteFontPairings),e.randomizeQuote()}).catch(function(e){return console.log(e)})}},{key:"getBackgroundImages",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30;return fetch("https://api.unsplash.com/photos/random?count=".concat(t),{headers:{Authorization:"Client-ID ".concat("637ad8107185907a6e559449be25e4c6fb9429f66f500149003592bbf8bf49ce")}}).then(function(e){return e.json()}).then(function(t){return new Promise(function(n){e.setState({quoteBackgroundImageUrls:t},function(){e.backgroundUrlItObj=g.createIterator(e.state.quoteBackgroundImageUrls),n("backgroundUrlItObj Created")})})})}},{key:"getQuotes",value:function(){var e=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];return fetch("".concat(E.API_BASE_URL,"/quotes")).then(function(e){return e.json()}).then(function(t){return new Promise(function(n){e.setState({quotes:t},function(){e.quoteItObj=g.createIterator(e.state.quotes),n("quoteItObj Created")})})})}},{key:"iterateBackgroundUrl",value:function(e){var t=e.value;e.done?this.getBackgroundImages(30):this.setState(function(e){return{currentQuoteBgImageUrl:t.urls.regular,prevQuoteBgImageUrl:e.currentQuoteBgImageUrl}})}},{key:"iterateFontPairing",value:function(e){var t=e.value;e.done?(this.fontPairItObj=g.createIterator(this.state.quoteFontPairings),this.iterateFontPairing(this.fontPairItObj.next())):this.setState(function(e){return{currentQuoteFontPair:t,prevQuoteFontPair:e.fontPair}})}},{key:"iterateQuote",value:function(e){var t=e.value;e.done?this.getQuotes(30):this.setState(function(e){return{currentQuote:t,prevQuote:e.currentQuote}})}},{key:"render",value:function(){var e={state:this.state,methods:{handleCheckboxCheck:this.handleCheckboxCheck,randomizeQuote:this.randomizeQuote,undoRandomizeQuote:this.undoRandomizeQuote,saveQuote:this.saveQuote,editFavoritesItem:this.editFavoritesItem,createAccount:this.createAccount,loginUser:this.loginUser,logoutUser:this.logoutUser,getUpdatedSavedQuotes:this.getUpdatedSavedQuotes,deleteFavoritesItem:this.deleteFavoritesItem,toggleMenuIsOpen:this.toggleMenuIsOpen}};return o.a.createElement(I.Provider,{value:e},this.props.children)}}]),t}(o.a.Component),y=n(21),Q=n(22),O=n(44),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:""},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleTextInput",value:function(e){switch(e.target.id){case"username-input":this.setState({username:e.target.value});break;case"password-input":this.setState({password:e.target.value});break;default:console.error("onChange id not found in login form")}}},{key:"render",value:function(){var e=this;return o.a.createElement(I.Consumer,null,function(t){var n=t.methods;return o.a.createElement("div",null,o.a.createElement("form",{className:"input-form",onSubmit:function(t){return n.loginUser(t,e.state)}},o.a.createElement("label",{className:"input-form__label",htmlFor:"username-input"},"Username"),o.a.createElement("input",{id:"username-input",type:"text",onChange:function(t){return e.handleTextInput(t)}}),o.a.createElement("label",{className:"input-form__label",htmlFor:"password-input"},"Password"),o.a.createElement("input",{id:"password-input",type:"password",onChange:function(t){return e.handleTextInput(t)}}),o.a.createElement("input",{className:"input-form__submit",type:"submit",value:"Sign In"})))})}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",passwordConfirm:""},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleTextInput",value:function(e){switch(e.target.id){case"create-username-input":this.setState({username:e.target.value});break;case"create-password-input":this.setState({password:e.target.value});break;case"create-password-confirm-input":this.setState({passwordConfirm:e.target.value});break;default:console.error("onChange id not found in create account form")}}},{key:"render",value:function(){var e=this;return o.a.createElement(I.Consumer,null,function(t){var n=t.methods;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:"create-account-form",onSubmit:function(t){n.createAccount(t,e.state),e.props.setInCreateAccountMode(!1)}},o.a.createElement("label",{className:"create-account-form__label",htmlFor:"username-input"},"Username"),o.a.createElement("input",{id:"create-username-input",type:"text",onChange:function(t){return e.handleTextInput(t)}}),o.a.createElement("label",{className:"create-account-form__label",htmlFor:"password-input"},"Password"),o.a.createElement("input",{id:"create-password-input",type:"password",onChange:function(t){return e.handleTextInput(t)}}),o.a.createElement("label",{className:"create-account-form__label",htmlFor:"password-confirm-input"},"Confirm Password"),o.a.createElement("input",{id:"create-password-confirm-input",type:"password",onChange:function(t){return e.handleTextInput(t)}}),o.a.createElement("input",{className:"create-account-form__submit",type:"submit",value:"Create Account"})))})}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).setInCreateAccountMode=function(e){n.setState({inCreateAccountMode:e})},n.state={inCreateAccountMode:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"account-access-forms"},o.a.createElement("button",{className:"account-access-forms__button ".concat(this.state.inCreateAccountMode?"":"highlight"),onClick:function(){return e.setInCreateAccountMode(!1)}},"Sign In"),o.a.createElement("button",{className:"account-access-forms__button ".concat(this.state.inCreateAccountMode?"highlight":""),onClick:function(){return e.setInCreateAccountMode(!0)}},"Create Account"),o.a.createElement("div",{className:"account-access-forms__selected-form"},this.state.inCreateAccountMode?o.a.createElement(S,{setInCreateAccountMode:this.setInCreateAccountMode}):o.a.createElement(C,null)))}}]),t}(o.a.Component);function w(e){return o.a.createElement(I.Consumer,null,function(e){var t=e.state,n=e.methods;return o.a.createElement("ul",{className:"user-menu"},o.a.createElement(y.c,{className:"user-menu__list-item__link",to:"/user/".concat(t.username),onClick:function(){return n.toggleMenuIsOpen()}},o.a.createElement("li",{className:"user-menu__list-item"},"Profile")),o.a.createElement(y.c,{className:"user-menu__list-item__link",to:"/quotes",onClick:function(){return n.toggleMenuIsOpen()}},o.a.createElement("li",{className:"user-menu__list-item"},"Quote Generator")),o.a.createElement(y.c,{className:"user-menu__list-item__link",to:"/quotes",onClick:function(){return n.logoutUser()}},o.a.createElement("li",{className:"user-menu__list-item"},"Log Out")))})}var N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={menuIsOpen:!1,userIsLoggedIn:!0},n.toggleMenuIsOpen=n.toggleMenuIsOpen.bind(Object(O.a)(n)),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"toggleMenuIsOpen",value:function(){this.setState(function(e){return{menuIsOpen:!e.menuIsOpen}})}},{key:"render",value:function(){return o.a.createElement(I.Consumer,null,function(e){var t=e.state,n=e.methods;return o.a.createElement("div",{className:"menu-container"},o.a.createElement("header",{className:"menu"},o.a.createElement("button",{className:"menu__button",onClick:n.toggleMenuIsOpen},o.a.createElement("span",null,t.menuIsOpen?"X":"Menu")),o.a.createElement("div",{className:"menu__greeting"},t.userIsLoggedIn?"Welcome ".concat(t.username):""),t.menuIsOpen?t.userIsLoggedIn?o.a.createElement(w,null):o.a.createElement(j,null):""))})}}]),t}(o.a.Component);function q(){return o.a.createElement("div",{className:"container landing-page-container"},o.a.createElement("h1",{className:"landing-page__header"},"Welcome to Motiv8"),o.a.createElement("main",null,o.a.createElement("h2",{className:"landing-page__subheader"},"Customize your inspiration"),o.a.createElement("div",null,"Motiv8 is a random quote generator.",o.a.createElement("ul",null,o.a.createElement("li",null,"Users can create unique quote, font, and background image pairings."),o.a.createElement("li",null,"If a user chooses to create an account they will have the ability to save their favorite quotes to their profile."))),o.a.createElement(y.b,{to:"/quotes"},o.a.createElement("button",{className:"get-started-button"},"Get Started!"))))}var P=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(I.Consumer,null,function(e){var t=e.state,n={backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:"url(".concat(t.currentQuoteBgImageUrl,")")},a={fontFamily:t.currentQuoteFontPair.body},r={fontFamily:t.currentQuoteFontPair.author};return o.a.createElement("div",{className:"quote-display",style:n},o.a.createElement("div",{className:"quote-backdrop"},o.a.createElement("div",{className:"quote-body",style:a},t.currentQuote.quote),o.a.createElement("div",{className:"quote-author",style:r},t.currentQuote.author)))})}}]),t}(o.a.Component),U=n(25),F=n(26);function B(){return o.a.createElement(I.Consumer,null,function(e){var t=e.methods,n=e.state,a=n.keepBackground,r=n.keepFonts,u=n.keepQuote;return o.a.createElement("div",{className:"quote-controls-container"},o.a.createElement("h5",{className:"quote-controls-heading"},"Randomize Options"),o.a.createElement("div",{className:"quote-controls"},o.a.createElement("input",{onChange:function(e){return t.handleCheckboxCheck(e)},type:"checkbox",id:"keep-quote-checkbox"}),o.a.createElement("label",{className:"quote-controls__label",htmlFor:"keep-quote-checkbox"},o.a.createElement("div",null,u?o.a.createElement(U.a,{icon:F.a,size:"lg"}):o.a.createElement(U.a,{icon:F.b,size:"lg"})),o.a.createElement("span",{className:"quote-controls__label__text"},"Keep Quote")),o.a.createElement("input",{onChange:function(e){return t.handleCheckboxCheck(e)},type:"checkbox",id:"keep-fonts-checkbox"}),o.a.createElement("label",{className:"quote-controls__label",htmlFor:"keep-fonts-checkbox"},o.a.createElement("div",null,r?o.a.createElement(U.a,{icon:F.a,size:"lg"}):o.a.createElement(U.a,{icon:F.b,size:"lg"})),o.a.createElement("span",{className:"quote-controls__label__text"},"Keep Fonts")),o.a.createElement("input",{onChange:function(e){return t.handleCheckboxCheck(e)},type:"checkbox",id:"keep-background-checkbox"}),o.a.createElement("label",{className:"quote-controls__label",htmlFor:"keep-background-checkbox"},o.a.createElement("div",null,a?o.a.createElement(U.a,{icon:F.a,size:"lg"}):o.a.createElement(U.a,{icon:F.b,size:"lg"})),o.a.createElement("span",{className:"quote-controls__label__text"},"Keep Background"))))})}function x(){return o.a.createElement(I.Consumer,null,function(e){var t=e.methods,n=e.state,a=n.currentQuoteSaved,r=n.userIsLoggedIn,u=n.prevQuote,c=n.userId,s=t.getUpdatedSavedQuotes;return o.a.createElement("div",{className:"quote-nav-container"},o.a.createElement("button",{className:"quote-nav__button randomize-button",onClick:function(){return t.randomizeQuote()}},"Randomize"),o.a.createElement("button",{disabled:!u.quote&&"disabled",className:"quote-nav__button undo-button ".concat(u.quote?"":"button-disabled"),onClick:function(){return t.undoRandomizeQuote()}},"Undo"),o.a.createElement("button",{disabled:!r&&"disabled",className:"quote-nav__button save-button \n                ".concat(a?"save-success":"","\n                ").concat(r?"":"button-disabled"),onClick:function(){return t.saveQuote(c,s)}},"Save",r?"":o.a.createElement("div",{className:"save-button__instructions"},"Log in to save quotes")))})}function A(){return o.a.createElement("div",{className:"container"},o.a.createElement(B,null),o.a.createElement(P,null),o.a.createElement(x,null))}function T(e){return o.a.createElement(I.Consumer,null,function(t){var n=t.methods,a={fontFamily:e.quote.bodyfont},r={fontFamily:e.quote.authorfont};return o.a.createElement("li",{className:"favorites-list-item"},o.a.createElement("div",null,o.a.createElement("p",{style:a},e.quote.quote),o.a.createElement("p",{style:r},e.quote.author),o.a.createElement("button",{className:"favorites-list-item__button",onClick:function(){return n.deleteFavoritesItem(e.savedQuoteId)}},"Delete")),o.a.createElement("img",{className:"favorites-list-item-img",alt:"",src:e.quote.background_image_url}))})}function z(e){var t=e.history;return o.a.createElement(I.Consumer,null,function(e){var n=e.state;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",{className:"favorites-list-heading"},"Favorites"),o.a.createElement("ul",{className:"favorites-list"},n.savedQuotes.map(function(e){return o.a.createElement(T,{key:e.id,quote:e,history:t,savedQuoteId:e.id})})))})}var M=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUpdatedSavedQuotes(this.props.userId)}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(z,{history:this.props.history}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(_,null,o.a.createElement(function(e){return o.a.createElement(y.a,null,o.a.createElement(N,null),o.a.createElement(Q.c,null,o.a.createElement(Q.a,{path:"/",exact:!0,component:q}),o.a.createElement(Q.a,{path:"/quotes",component:A}),o.a.createElement(I.Consumer,null,function(e){var t=e.state,n=e.methods;return o.a.createElement(Q.a,{path:"/user/:username",render:function(e){return o.a.createElement(M,Object.assign({},e,{getUpdatedSavedQuotes:n.getUpdatedSavedQuotes,userId:t.userId}))}})})))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,t,n){e.exports={PORT:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_KEY:"637ad8107185907a6e559449be25e4c6fb9429f66f500149003592bbf8bf49ce",REACT_APP_API_BASE_URL:"https://motiv8-api.herokuapp.com/api"}).PORT||8080,API_BASE_URL:"https://motiv8-api.herokuapp.com/api"}}},[[114,1,2]]]);
//# sourceMappingURL=main.010d1eb6.chunk.js.map