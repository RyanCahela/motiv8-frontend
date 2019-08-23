(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){e.exports=n(229)},120:function(e,t,n){},125:function(e,t){},127:function(e,t){},164:function(e,t){},165:function(e,t){},229:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(110),s=n.n(o),u=(n(120),n(113)),c=n(8),i=n(9),l=n(11),m=n(10),d=n(12),p=[{body:"Playfair Display, serif",author:"Source Sans Pro, sans-serif"},{body:"Abril Fatface, cursive",author:"Poppins, sans-serif"},{body:"Ruda, sans-serif",author:"Roboto Slab, serif"},{body:"Cormorant Garamond, serif",author:"Fira Sans, sans-serif"},{body:"PT Sans, sans-serif",author:"Playfair Display, serif"}],h=n(59),g=n.n(h),f={createIterator:function(e){return this.createIteratorObj(e)},createIteratorObj:g.a.mark(function e(t){var n,a,r,o,s,u;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,a=!1,r=void 0,e.prev=3,o=t[Symbol.iterator]();case 5:if(n=(s=o.next()).done){e.next=12;break}return u=s.value,e.next=9,u;case 9:n=!0,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),a=!0,r=e.t0;case 18:e.prev=18,e.prev=19,n||null==o.return||o.return();case 21:if(e.prev=21,!a){e.next=24;break}throw r;case 24:return e.finish(21);case 25:return e.finish(18);case 26:case"end":return e.stop()}},e,null,[[3,14,18,26],[19,,21,25]])})},v={getTokenByKey:function(e){return window.localStorage.getItem(e)},setToken:function(e,t){window.localStorage.setItem(e,t)},updateToken:function(e,t){window.localStorage.setItem(e,t)},removeTokenByKey:function(e){window.localStorage.removeItem(e)}},b=n(60),k=n.n(b),E=n(24),I=r.a.createContext(),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).randomizeQuote=function(){n.setState({currentQuoteSaved:!1}),n.state.keepBackground||n.iterateBackgroundUrl(n.backgroundUrlItObj.next()),n.state.keepFonts||n.iterateFontPairing(n.fontPairItObj.next()),n.state.keepQuote||n.iterateQuote(n.quoteItObj.next())},n.undoRandomizeQuote=function(){n.state.keepBackground||n.setState(function(e){return{currentQuoteBgImageUrl:e.prevQuoteBgImageUrl,prevQuoteBgImageUrl:e.currentQuoteBgImageUrl}}),n.state.keepFonts||n.setState(function(e){return{fontPair:e.previousFontPair,prevFontPair:e.fontPair}}),n.state.keepQuote||n.setState(function(e){return{currentQuote:e.prevQuote,prevQuote:e.currentQuote}})},n.saveQuote=function(e,t){if(0!==e){var a={backgroundImageUrl:n.state.currentQuoteBgImageUrl,quoteId:n.state.currentQuote.id,bodyFont:n.state.currentQuoteFontPair.body,authorFont:n.state.currentQuoteFontPair.author,userId:e};fetch("".concat(E.API_BASE_URL,"/savedQuotes"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(v.getTokenByKey("motiv8-jwt"))},body:JSON.stringify(a)}).then(function(a){a.ok&&(t(e),n.setState({currentQuoteSaved:!0}))})}},n.handleCheckboxCheck=function(e){switch(e.target.id){case"keep-quote-checkbox":n.setState(function(e){return{keepQuote:!e.keepQuote}});break;case"keep-fonts-checkbox":n.setState(function(e){return{keepFonts:!e.keepFonts}});break;case"keep-background-checkbox":n.setState(function(e){return{keepBackground:!e.keepBackground}})}},n.editFavoritesItem=function(e,t){console.log("edit quote",e),n.setState({currentQuote:e,currentQuoteBgImageUrl:e.background_image_url,keepBackground:!1,keepFonts:!1,keepQuote:!1},function(){t.push("/quotes")})},n.createAccount=function(e,t,a){e.preventDefault();var r={username:t.username,password:t.password};fetch("".concat(E.API_BASE_URL,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(function(e){if(e.ok)return e.json()}).then(function(e){n.loginUser(null,r).then(function(){a.setState({loading:!1})})})},n.loginUser=function(e,t){e&&e.preventDefault();var a={username:t.username,password:t.password};return fetch("".concat(E.API_BASE_URL,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){if(e.error)console.log("error",e.error);else{var t=k.a.decode(e.authToken);v.setToken("motiv8-jwt",e.authToken),console.log(t),n.setState({userIsLoggedIn:!0,username:t.sub,userId:t.userId,savedQuotes:e.savedQuotes,menuIsOpen:!1})}})},n.logoutUser=function(){v.removeTokenByKey("motiv8-jwt"),n.setState({userIsLoggedIn:!1,userId:0,username:"",savedQuotes:[],menuIsOpen:!1})},n.getUpdatedSavedQuotes=function(e){fetch("".concat(E.API_BASE_URL,"/savedQuotes/").concat(e),{headers:{Authorization:"Bearer ".concat(v.getTokenByKey("motiv8-jwt"))}}).then(function(e){return e.json()}).then(function(e){n.setState({savedQuotes:e})})},n.deleteFavoritesItem=function(e){var t={savedQuoteId:e};fetch("".concat(E.API_BASE_URL,"/savedQuotes/"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(v.getTokenByKey("motiv8-jwt"))},body:JSON.stringify(t)}).then(function(t){t.ok&&n.setState(function(t){return{savedQuotes:t.savedQuotes.filter(function(t){return t.id!==e&&t})}})})},n.toggleMenuIsOpen=function(){n.setState(function(e){return{menuIsOpen:!e.menuIsOpen}})},n.state={quotes:[],quoteBackgroundImageUrls:[],quoteFontPairings:Object(u.a)(p),currentQuote:{},currentQuoteBgImageUrl:"",currentQuoteFontPair:{},currentQuoteSaved:!1,prevQuote:{},prevQuoteBgImageUrl:"",prevQuoteFontPair:{},quoteHistory:[],keepQuoteBackground:!1,keepQuoteFonts:!1,keepQuoteQuote:!1,userIsLoggedIn:!1,username:"",userId:0,savedQuotes:[],menuIsOpen:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.initializeApp();var e=k.a.decode(v.getTokenByKey("motiv8-jwt"),{complete:!0});if(e){var t=e.header,n=e.payload;console.log("header",t),console.log("payload",n),this.setState({userIsLoggedIn:!0,userId:n.userId,username:n.sub})}}},{key:"initializeApp",value:function(){var e=this,t=this.getBackgroundImages(30),n=this.getQuotes(30);Promise.all([n,t]).then(function(t){e.fontPairItObj=f.createIterator(e.state.quoteFontPairings),e.randomizeQuote()}).catch(function(e){return console.log(e)})}},{key:"getBackgroundImages",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30;return fetch("https://api.unsplash.com/photos/random?count=".concat(t),{headers:{Authorization:"Client-ID ".concat("637ad8107185907a6e559449be25e4c6fb9429f66f500149003592bbf8bf49ce")}}).then(function(e){return e.json()}).then(function(t){return new Promise(function(n){e.setState({quoteBackgroundImageUrls:t},function(){e.backgroundUrlItObj=f.createIterator(e.state.quoteBackgroundImageUrls),n("backgroundUrlItObj Created")})})})}},{key:"getQuotes",value:function(){var e=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];return fetch("".concat(E.API_BASE_URL,"/quotes")).then(function(e){return e.json()}).then(function(t){return new Promise(function(n){e.setState({quotes:t},function(){e.quoteItObj=f.createIterator(e.state.quotes),n("quoteItObj Created")})})})}},{key:"iterateBackgroundUrl",value:function(e){var t=e.value;e.done?this.getBackgroundImages(30):this.setState(function(e){return{currentQuoteBgImageUrl:t.urls.regular,prevQuoteBgImageUrl:e.currentQuoteBgImageUrl}})}},{key:"iterateFontPairing",value:function(e){var t=e.value;e.done?(this.fontPairItObj=f.createIterator(this.state.quoteFontPairings),this.iterateFontPairing(this.fontPairItObj.next())):this.setState(function(e){return{currentQuoteFontPair:t,prevQuoteFontPair:e.fontPair}})}},{key:"iterateQuote",value:function(e){var t=e.value;e.done?this.getQuotes(30):this.setState(function(e){return{currentQuote:t,prevQuote:e.currentQuote}})}},{key:"render",value:function(){var e={state:this.state,methods:{handleCheckboxCheck:this.handleCheckboxCheck,randomizeQuote:this.randomizeQuote,undoRandomizeQuote:this.undoRandomizeQuote,saveQuote:this.saveQuote,editFavoritesItem:this.editFavoritesItem,createAccount:this.createAccount,loginUser:this.loginUser,logoutUser:this.logoutUser,getUpdatedSavedQuotes:this.getUpdatedSavedQuotes,deleteFavoritesItem:this.deleteFavoritesItem,toggleMenuIsOpen:this.toggleMenuIsOpen}};return r.a.createElement(I.Provider,{value:e},this.props.children)}}]),t}(r.a.Component),y=n(23),Q=n(21),O=n(44),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",errorMessage:""},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleTextInput",value:function(e){switch(e.target.id){case"username-input":this.setState({username:e.target.value});break;case"password-input":this.setState({password:e.target.value});break;default:console.error("onChange id not found in login form")}}},{key:"handleSubmit",value:function(e,t){this.state.username&&this.state.password||this.setState({errorMessage:"Please fill enter a username and password."}),t.loginUser(e,this.state)}},{key:"render",value:function(){var e=this;return r.a.createElement(I.Consumer,null,function(t){var n=t.methods;return r.a.createElement("div",null,r.a.createElement("div",{className:"demo-credentials"},r.a.createElement("h5",null,"Demo Credentials"),r.a.createElement("div",null,"Login: Demo"),r.a.createElement("div",null,"Pass: Demo123")),r.a.createElement("form",{className:"input-form",onSubmit:function(t){return e.handleSubmit(t,n)}},r.a.createElement("label",{className:"input-form__label",htmlFor:"username-input"},"Username"),r.a.createElement("input",{id:"username-input",type:"text",onChange:function(t){return e.handleTextInput(t)},required:!0}),r.a.createElement("label",{className:"input-form__label",htmlFor:"password-input"},"Password"),r.a.createElement("input",{id:"password-input",type:"password",onChange:function(t){return e.handleTextInput(t)},required:!0}),e.state.errorMessage?r.a.createElement("div",{className:"error-message"},e.state.errorMessage):"",r.a.createElement("input",{className:"input-form__submit",type:"submit",value:"Sign In"})))})}}]),t}(a.Component);function S(){return r.a.createElement("svg",{width:"200px",height:"200px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"lds-rolling",style:{shapeRendering:"auto",animationPlayState:"running",animationDelay:"0s",background:"none"}},r.a.createElement("circle",{cx:"50",cy:"50",fill:"none","ng-attr-stroke":"{{config.color}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-r":"{{config.radius}}","ng-attr-stroke-dasharray":"{{config.dasharray}}",stroke:"#348ac7","stroke-width":"10",r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138",style:{animationPlayState:"running",animationDelay:"0s"},transform:"rotate(245.472 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite",style:{animationPlayState:"running",animationDelay:"0s"}})))}var w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",passwordConfirm:"",errorMessage:"",loading:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleTextInput",value:function(e){switch(e.target.id){case"create-username-input":this.setState({username:e.target.value});break;case"create-password-input":this.setState({password:e.target.value});break;case"create-password-confirm-input":this.setState({passwordConfirm:e.target.value});break;default:console.error("onChange id not found in create account form")}}},{key:"handleSubmit",value:function(e,t){var n=this;e.preventDefault();var a=this.state;a.password===a.passwordConfirm?this.setState({loading:!0},function(){t.createAccount(e,n.state,n)}):this.setState({errorMessage:"Passwords Must Match"})}},{key:"render",value:function(){var e=this;return r.a.createElement(I.Consumer,null,function(t){var n=t.methods;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"create-account-form",onSubmit:function(t){e.handleSubmit(t,n)}},e.state.loading?r.a.createElement(S,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"create-account-form__label",htmlFor:"username-input"},"Username"),r.a.createElement("input",{id:"create-username-input",type:"text",onChange:function(t){return e.handleTextInput(t)},required:!0}),r.a.createElement("label",{className:"create-account-form__label",htmlFor:"password-input"},"Password"),r.a.createElement("input",{id:"create-password-input",type:"password",onChange:function(t){return e.handleTextInput(t)},required:!0}),r.a.createElement("label",{className:"create-account-form__label",htmlFor:"password-confirm-input"},"Confirm Password"),r.a.createElement("input",{id:"create-password-confirm-input",type:"password",onChange:function(t){return e.handleTextInput(t)},required:!0})),e.state.errorMessage?r.a.createElement("div",{className:"error-message"},e.state.errorMessage):"",r.a.createElement("input",{className:"create-account-form__submit",type:"submit",value:"Create Account"})))})}}]),t}(a.Component),N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).setInCreateAccountMode=function(e){n.setState({inCreateAccountMode:e})},n.state={inCreateAccountMode:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"account-access-forms"},r.a.createElement("button",{className:"account-access-forms__button ".concat(this.state.inCreateAccountMode?"":"highlight"),onClick:function(){return e.setInCreateAccountMode(!1)}},"Sign In"),r.a.createElement("button",{className:"account-access-forms__button ".concat(this.state.inCreateAccountMode?"highlight":""),onClick:function(){return e.setInCreateAccountMode(!0)}},"Create Account"),r.a.createElement("div",{className:"account-access-forms__selected-form"},this.state.inCreateAccountMode?r.a.createElement(w,{setInCreateAccountMode:this.setInCreateAccountMode}):r.a.createElement(C,null)))}}]),t}(r.a.Component);function j(e){return r.a.createElement(I.Consumer,null,function(e){var t=e.state,n=e.methods;return r.a.createElement("ul",{className:"user-menu"},r.a.createElement(y.b,{className:"user-menu__list-item__link",to:"/user/".concat(t.username),onClick:function(){return n.toggleMenuIsOpen()}},r.a.createElement("li",{className:"user-menu__list-item"},"Profile")),r.a.createElement(y.b,{className:"user-menu__list-item__link",to:"/quotes",onClick:function(){return n.toggleMenuIsOpen()}},r.a.createElement("li",{className:"user-menu__list-item"},"Quote Generator")),r.a.createElement(y.b,{className:"user-menu__list-item__link",to:"/quotes",onClick:function(){return n.logoutUser()}},r.a.createElement("li",{className:"user-menu__list-item"},"Log Out")))})}var q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={menuIsOpen:!1,userIsLoggedIn:!0},n.toggleMenuIsOpen=n.toggleMenuIsOpen.bind(Object(O.a)(n)),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"toggleMenuIsOpen",value:function(){this.setState(function(e){return{menuIsOpen:!e.menuIsOpen}})}},{key:"render",value:function(){return r.a.createElement(I.Consumer,null,function(e){var t=e.state,n=e.methods;return r.a.createElement("div",{className:"menu-container"},r.a.createElement("header",{className:"menu"},r.a.createElement("button",{className:"menu__button",onClick:n.toggleMenuIsOpen},r.a.createElement("span",null,t.menuIsOpen?"Close":"Menu")),r.a.createElement("div",{className:"menu__greeting"},t.userIsLoggedIn?"Welcome ".concat(t.username):""),t.menuIsOpen?t.userIsLoggedIn?r.a.createElement(j,null):r.a.createElement(N,null):""))})}}]),t}(r.a.Component),P=n(114);function x(){var e=Object(a.useState)({quote:"\u201cDo not fear the winds of adversity. Remember, a kite \n    rises against the wind rather than with it.\u201d",author:"Unknown"}),t=Object(P.a)(e,2),n=t[0];t[1];return r.a.createElement("div",{className:"landing-page__splash"},r.a.createElement("h1",{className:"landing-page__header"},"Motiv8"),r.a.createElement("div",{className:"splash-animation"},r.a.createElement("div",{className:"splash-quote"},n.quote),r.a.createElement("div",{className:"splash-quote-author"},n.author)))}function F(e){var t=e.history;return r.a.createElement("div",{className:"landing-page-container"},r.a.createElement(x,null),r.a.createElement("main",{className:"landing-page__main-content"},r.a.createElement("div",{className:"landing-page__copy"},r.a.createElement("h3",null,"Motiv8 is a random quote generator."),r.a.createElement("ul",{className:"landing-page__list"},r.a.createElement("li",{className:"landing-page__list-item"},r.a.createElement("i",{class:"fas fa-palette landing-page__icon"}),r.a.createElement("span",{className:"landing-page__list-copy"},"Create unique quote, font, and background image pairings.")),r.a.createElement("li",{className:"landing-page__list-item"},r.a.createElement("i",{class:"fas fa-user-circle landing-page__icon"}),r.a.createElement("span",{className:"landing-page__list-copy"},"Create an account and save your favorite combos."))))),r.a.createElement("button",{className:"btn get-started-button",onClick:function(){return t.push("/quotes")}},"Get Started"))}var U=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(I.Consumer,null,function(e){var t=e.state,n={backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:"url(".concat(t.currentQuoteBgImageUrl,")")},a={fontFamily:t.currentQuoteFontPair.body},o={fontFamily:t.currentQuoteFontPair.author};return r.a.createElement("div",{className:"quote-display",style:n},r.a.createElement("div",{className:"quote-backdrop"},r.a.createElement("div",{className:"quote-body",style:a},t.currentQuote.quote),r.a.createElement("div",{className:"quote-author",style:o},t.currentQuote.author)))})}}]),t}(r.a.Component),B=n(25),A=n(26);function M(){return r.a.createElement(I.Consumer,null,function(e){var t=e.methods,n=e.state,a=n.keepBackground,o=n.keepFonts,s=n.keepQuote;return r.a.createElement("div",{className:"quote-controls-container"},r.a.createElement("h5",{className:"quote-controls-heading"},"Randomize Options"),r.a.createElement("div",{className:"quote-controls"},r.a.createElement("input",{onChange:function(e){return t.handleCheckboxCheck(e)},type:"checkbox",id:"keep-quote-checkbox"}),r.a.createElement("label",{className:"quote-controls__label",htmlFor:"keep-quote-checkbox"},r.a.createElement("div",null,s?r.a.createElement(B.a,{icon:A.a,size:"lg"}):r.a.createElement(B.a,{icon:A.b,size:"lg"})),r.a.createElement("span",{className:"quote-controls__label__text"},"Keep Quote")),r.a.createElement("input",{onChange:function(e){return t.handleCheckboxCheck(e)},type:"checkbox",id:"keep-fonts-checkbox"}),r.a.createElement("label",{className:"quote-controls__label",htmlFor:"keep-fonts-checkbox"},r.a.createElement("div",null,o?r.a.createElement(B.a,{icon:A.a,size:"lg"}):r.a.createElement(B.a,{icon:A.b,size:"lg"})),r.a.createElement("span",{className:"quote-controls__label__text"},"Keep Fonts")),r.a.createElement("input",{onChange:function(e){return t.handleCheckboxCheck(e)},type:"checkbox",id:"keep-background-checkbox"}),r.a.createElement("label",{className:"quote-controls__label",htmlFor:"keep-background-checkbox"},r.a.createElement("div",null,a?r.a.createElement(B.a,{icon:A.a,size:"lg"}):r.a.createElement(B.a,{icon:A.b,size:"lg"})),r.a.createElement("span",{className:"quote-controls__label__text"},"Keep Background"))))})}function T(){return r.a.createElement(I.Consumer,null,function(e){var t=e.methods,n=e.state,a=n.currentQuoteSaved,o=n.userIsLoggedIn,s=n.prevQuote,u=n.userId,c=t.getUpdatedSavedQuotes;return r.a.createElement("div",{className:"quote-nav-container"},r.a.createElement("button",{className:"quote-nav__button randomize-button",onClick:function(){return t.randomizeQuote()}},"Randomize"),r.a.createElement("button",{disabled:!s.quote&&"disabled",className:"quote-nav__button undo-button ".concat(s.quote?"":"button-disabled"),onClick:function(){return t.undoRandomizeQuote()}},"Undo"),r.a.createElement("button",{disabled:!o&&"disabled",className:"quote-nav__button save-button \n                ".concat(a?"save-success":"","\n                ").concat(o?"":"button-disabled"),onClick:function(){return t.saveQuote(u,c)}},"Save",o?"":r.a.createElement("div",{className:"save-button__instructions"},"Log in to save quotes")))})}function z(){return r.a.createElement("div",{className:"container"},r.a.createElement(M,null),r.a.createElement(U,null),r.a.createElement(T,null))}function R(e){return r.a.createElement(I.Consumer,null,function(t){var n=t.methods,a={fontFamily:e.quote.bodyfont},o={fontFamily:e.quote.authorfont};return r.a.createElement("li",{className:"favorites-list-item"},r.a.createElement("div",null,r.a.createElement("p",{style:a},e.quote.quote),r.a.createElement("p",{style:o},e.quote.author),r.a.createElement("button",{className:"favorites-list-item__button",onClick:function(){return n.deleteFavoritesItem(e.savedQuoteId)}},"Delete")),r.a.createElement("img",{className:"favorites-list-item-img",alt:"",src:e.quote.background_image_url}))})}function L(e){var t=e.history;return r.a.createElement(I.Consumer,null,function(e){var n=e.state;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"favorites-list-heading"},"Favorites"),r.a.createElement("ul",{className:"favorites-list"},n.savedQuotes.map(function(e){return r.a.createElement(R,{key:e.id,quote:e,history:t,savedQuoteId:e.id})})))})}var D=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUpdatedSavedQuotes(this.props.userId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(L,{history:this.props.history}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(_,null,r.a.createElement(function(e){return r.a.createElement(y.a,null,r.a.createElement(q,null),r.a.createElement(Q.c,null,r.a.createElement(Q.a,{path:"/",exact:!0,component:F}),r.a.createElement(Q.a,{path:"/quotes",component:z}),r.a.createElement(I.Consumer,null,function(e){var t=e.state,n=e.methods;return r.a.createElement(Q.a,{path:"/user/:username",render:function(e){return r.a.createElement(D,Object.assign({},e,{getUpdatedSavedQuotes:n.getUpdatedSavedQuotes,userId:t.userId}))}})})))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,t,n){e.exports={PORT:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_KEY:"637ad8107185907a6e559449be25e4c6fb9429f66f500149003592bbf8bf49ce",REACT_APP_API_BASE_URL:"https://motiv8-api.herokuapp.com/api"}).PORT||8080,API_BASE_URL:"https://motiv8-api.herokuapp.com/api"}}},[[115,1,2]]]);
//# sourceMappingURL=main.cba68333.chunk.js.map