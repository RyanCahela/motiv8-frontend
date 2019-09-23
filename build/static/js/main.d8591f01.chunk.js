(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){e.exports=n(229)},120:function(e,t,n){},125:function(e,t){},127:function(e,t){},164:function(e,t){},165:function(e,t){},20:function(e,t,n){e.exports={PORT:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_KEY:"637ad8107185907a6e559449be25e4c6fb9429f66f500149003592bbf8bf49ce",REACT_APP_API_BASE_URL:"https://motiv8-api.herokuapp.com/api"}).PORT||8080,API_BASE_URL:"https://motiv8-api.herokuapp.com/api"}},229:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(110),s=n.n(o),u=(n(120),n(113)),c=n(8),i=n(9),l=n(11),m=n(10),d=n(29),p=n(12),h=[{body:"Playfair Display, serif",author:"Source Sans Pro, sans-serif"},{body:"Abril Fatface, cursive",author:"Poppins, sans-serif"},{body:"Ruda, sans-serif",author:"Roboto Slab, serif"},{body:"Cormorant Garamond, serif",author:"Fira Sans, sans-serif"},{body:"PT Sans, sans-serif",author:"Playfair Display, serif"}],f=n(60),g=n.n(f),v=g.a.mark(b);function b(e){var t,n,a,r,o,s;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:t=!0,n=!1,a=void 0,u.prev=3,r=e[Symbol.iterator]();case 5:if(t=(o=r.next()).done){u.next=12;break}return s=o.value,u.next=9,s;case 9:t=!0,u.next=5;break;case 12:u.next=18;break;case 14:u.prev=14,u.t0=u.catch(3),n=!0,a=u.t0;case 18:u.prev=18,u.prev=19,t||null==r.return||r.return();case 21:if(u.prev=21,!n){u.next=24;break}throw a;case 24:return u.finish(21);case 25:return u.finish(18);case 26:case"end":return u.stop()}},v,null,[[3,14,18,26],[19,,21,25]])}function k(e){return b(e)}var E={getTokenByKey:function(e){return window.localStorage.getItem(e)},setToken:function(e,t){window.localStorage.setItem(e,t)},updateToken:function(e,t){window.localStorage.setItem(e,t)},removeTokenByKey:function(e){window.localStorage.removeItem(e)}},y=n(20);function I(e){return e.json()}var _={getBackgroundImages:function(e){return fetch("".concat(y.API_BASE_URL,"/backgroundImages/").concat(e))},getSavedQuotesByUsername:function(e){return fetch("".concat(y.API_BASE_URL,"/savedQuotes/").concat(e),{headers:{Authorization:"Bearer ".concat(E.getTokenByKey("motiv8-jwt"))}})},getQuotes:function(){return fetch("".concat(y.API_BASE_URL,"/quotes"))},postSaveQuote:function(e){return fetch("".concat(y.API_BASE_URL,"/savedQuotes"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getTokenByKey("motiv8-jwt"))},body:JSON.stringify(e)})},postNewUser:function(e){return fetch("".concat(y.API_BASE_URL,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},postUserLogin:function(e){return fetch("".concat(y.API_BASE_URL,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},deleteSavedQuoteById:function(e){return fetch("".concat(y.API_BASE_URL,"/savedQuotes/"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.getTokenByKey("motiv8-jwt"))},body:JSON.stringify({savedQuoteId:e})})},convertResToJson:function(e){return e.json()}},S=n(38),w=n.n(S);function Q(e){if(e.error)throw e.error;return e}function O(e){if(e.error)throw e.error;return E.setToken("motiv8-jwt",e.authToken)}function C(){var e=w.a.decode(E.getTokenByKey("motiv8-jwt"));return _.getSavedQuotesByUsername(e.sub)}function N(e){var t=this,n=w.a.decode(E.getTokenByKey("motiv8-jwt"));return new Promise(function(a){t.setState({userIsLoggedIn:!0,username:n.sub,userId:n.userId,savedQuotes:e,menuIsOpen:!1},a)})}function q(){E.removeTokenByKey("motiv8-jwt"),this.setState({userIsLoggedIn:!1,userId:0,username:"",savedQuotes:[],menuIsOpen:!1})}var j=r.a.createContext(),P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).randomizeQuote=function(){var e=n.state,t=e.currentQuote,a=e.currentQuoteBgImageUrl,r=e.currentQuoteFontPair,o=e.keepBackground,s=e.keepFonts,u=e.keepQuote;n.setState({currentQuoteSaved:!1});var c={quote:t,quoteBgImageUrl:a,quoteFontPair:r};n.pushToHistory(c).then(function(){o||n.iterateBackgroundUrl(n.backgroundUrlIterator),s||n.iterateFontPairing(n.fontIterator),u||n.iterateQuote(n.quoteIterator)})},n.undoRandomizeQuote=function(){var e=n.state.quoteHistory.pop();n.setCurrentQuote(e)},n.saveQuote=function(e,t){if(0!==e){var a={backgroundImageUrl:n.state.currentQuoteBgImageUrl,quoteId:n.state.currentQuote.id,bodyFont:n.state.currentQuoteFontPair.body,authorFont:n.state.currentQuoteFontPair.author,userId:e};_.postSaveQuote(a).then(function(a){a.ok&&(t(e),n.setState({currentQuoteSaved:!0}))})}},n.handleCheckboxCheck=function(e){switch(e.target.id){case"keep-quote-checkbox":n.setState(function(e){return{keepQuote:!e.keepQuote}});break;case"keep-fonts-checkbox":n.setState(function(e){return{keepFonts:!e.keepFonts}});break;case"keep-background-checkbox":n.setState(function(e){return{keepBackground:!e.keepBackground}})}},n.editFavoritesItem=function(e,t){n.setState({currentQuote:e,currentQuoteBgImageUrl:e.background_image_url,keepBackground:!1,keepFonts:!1,keepQuote:!1},function(){t.push("/quotes")})},n.loginUser=function(e){return _.postUserLogin(e).then(I).then(O.bind(Object(d.a)(n))).then(C).then(I).then(N.bind(Object(d.a)(n)))},n.logoutUser=function(){return q.call(Object(d.a)(n))},n.getUpdatedSavedQuotes=function(e){_.getSavedQuotesByUsername(e).then(I).then(n.setUpdatedSavedQuotes)},n.deleteFavoritesItem=function(e){_.deleteSavedQuoteById(e).then(function(t){console.log("delete res",t),204===t.status&&n.setState(function(t){var n=t.savedQuotes.filter(function(t){return!(t.id===e)});return console.log("newSavedQuotes",n),{savedQuotes:n}})}).catch(function(e){return console.error(e)})},n.toggleMenuIsOpen=function(){n.setState(function(e){return{menuIsOpen:!e.menuIsOpen}})},n.setBackgroundUrlIterator=function(e){return new Promise(function(t){n.backgroundUrlIterator=e,t()})},n.setQuoteIterator=function(e){return new Promise(function(t){n.quoteIterator=e,t()})},n.setFontIterator=function(e){return new Promise(function(t){n.fontIterator=e,t(n.fontIterator)})},n.setUpdatedSavedQuotes=function(e){return new Promise(function(t){n.setState({savedQuotes:e},t)})},n.setCurrentQuote=function(e){n.setState({currentQuote:e.quote,currentQuoteBgImageUrl:e.quoteBgImageUrl,currentQuoteFontPair:e.quoteFontPair})},n.pushToHistory=function(e){return new Promise(function(t){n.setState(function(t){var n=t.quoteHistory;return n.push(e),{quoteHistory:n}},t)})},n.iterateFontPairing=function(e){var t=e.next(),a=t.value;if(t.done){var r=k(n.state.quoteFontPairings);n.setFontIterator(r).then(n.iterateFontPairing)}else n.setState({currentQuoteFontPair:a})},n.iterateQuote=function(e){var t=e.next(),a=t.value;t.done?n.getQuotes(30):n.setState({currentQuote:a})},n.state={quoteIterator:{},backgroundUrlIterator:{},fontIterator:{},quoteFontPairings:Object(u.a)(h),currentQuote:{},currentQuoteBgImageUrl:"",currentQuoteFontPair:{},currentQuoteSaved:!1,quoteHistory:[],keepQuoteBackground:!1,keepQuoteFonts:!1,keepQuoteQuote:!1,userIsLoggedIn:!1,username:"",userId:0,savedQuotes:[]},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.initializeApp();var e=w.a.decode(E.getTokenByKey("motiv8-jwt"),{complete:!0});if(e){var t=e.payload;this.setState({userIsLoggedIn:!0,userId:t.userId,username:t.sub})}}},{key:"initializeApp",value:function(){var e=this,t=this.getBackgroundImages(30),n=this.getQuotes(30),a=this.getFonts();Promise.all([n,t,a]).then(function(){return e.randomizeQuote()}).catch(function(e){return console.error(e)})}},{key:"getBackgroundImages",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30;return _.getBackgroundImages(e).then(I).then(k).then(this.setBackgroundUrlIterator)}},{key:"getQuotes",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return _.getQuotes().then(I).then(k).then(this.setQuoteIterator)}},{key:"getFonts",value:function(){var e=k(this.state.quoteFontPairings);return this.setFontIterator(e)}},{key:"iterateBackgroundUrl",value:function(e){var t=e.next(),n=t.value;t.done?this.getBackgroundImages(30):this.setState({currentQuoteBgImageUrl:n.urls.regular})}},{key:"render",value:function(){var e={GlobalState:this.state,GlobalMethods:{handleCheckboxCheck:this.handleCheckboxCheck,randomizeQuote:this.randomizeQuote,undoRandomizeQuote:this.undoRandomizeQuote,saveQuote:this.saveQuote,createAccount:this.createAccount,loginUser:this.loginUser,logoutUser:this.logoutUser,getUpdatedSavedQuotes:this.getUpdatedSavedQuotes,deleteFavoritesItem:this.deleteFavoritesItem,toggleMenuIsOpen:this.toggleMenuIsOpen}};return r.a.createElement(j.Provider,{value:e},this.props.children)}}]),t}(r.a.Component),U=n(30),B=n(22),M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).setErrorMessage=function(e){n.setState({errorMessage:e})},n.state={username:"",password:"",errorMessage:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.setErrorMessage("")}},{key:"handleTextInput",value:function(e){switch(e.target.id){case"username-input":this.setState({username:e.target.value});break;case"password-input":this.setState({password:e.target.value});break;default:console.error("onChange id not found in login form")}}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.context.GlobalMethods,a=this.state,r=a.username,o=a.password;r&&o?n.loginUser({username:this.state.username.toLowerCase(),password:this.state.password}).then(function(){return t.props.history.push("/quotes")}).then(function(){return t.props.setMenuIsOpen(!1)}).catch(function(e){t.setErrorMessage(e)}):this.setErrorMessage("Please fill enter a username and password.")}},{key:"render",value:function(){var e=this,t=this.state.errorMessage;return r.a.createElement("div",null,r.a.createElement("div",{className:"demo-credentials"},r.a.createElement("h5",null,"Demo Credentials"),r.a.createElement("div",null,"Login: Demo"),r.a.createElement("div",null,"Pass: Demo123")),t?r.a.createElement("div",{className:"error-message"},t):"",r.a.createElement("form",{className:"input-form",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{className:"input-form__label",htmlFor:"username-input"},"Username"),r.a.createElement("input",{id:"username-input",type:"text",onChange:function(t){return e.handleTextInput(t)},required:!0}),r.a.createElement("label",{className:"input-form__label",htmlFor:"password-input"},"Password"),r.a.createElement("input",{id:"password-input",type:"password",onChange:function(t){return e.handleTextInput(t)},required:!0}),r.a.createElement("input",{className:"input-form__submit",type:"submit",value:"Sign In"})))}}]),t}(a.Component);function F(){return r.a.createElement("svg",{width:"200px",height:"200px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"lds-rolling",style:{shapeRendering:"auto",animationPlayState:"running",animationDelay:"0s",background:"none"}},r.a.createElement("circle",{cx:"50",cy:"50",fill:"none","ng-attr-stroke":"{{config.color}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-r":"{{config.radius}}","ng-attr-stroke-dasharray":"{{config.dasharray}}",stroke:"#348ac7","stroke-width":"10",r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138",style:{animationPlayState:"running",animationDelay:"0s"},transform:"rotate(245.472 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite",style:{animationPlayState:"running",animationDelay:"0s"}})))}M.contextType=j;var x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).setCreateAccountError=function(e){n.setState({errorMessage:e},function(){n.setIsLoading(!1)})},n.state={username:"",password:"",passwordConfirm:"",errorMessage:"",isLoading:!1},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleTextInput",value:function(e){switch(e.target.id){case"create-username-input":this.setState({username:e.target.value});break;case"create-password-input":this.setState({password:e.target.value});break;case"create-password-confirm-input":this.setState({passwordConfirm:e.target.value});break;default:console.error("onChange id not found in create account form")}}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state,a=n.password,r=n.passwordConfirm;a===r?this.setState({loading:!0},function(){var e={username:t.state.username.toLowerCase(),password:t.state.password},n=t.context.GlobalMethods;(function(e){return _.postNewUser(e)})(e).then(I).then(Q).then(function(e){var t=e.username;return n.loginUser({username:t,password:a})}).then(function(){return t.props.setMenuIsOpen(!1)}).then(function(){return t.props.history.push("/quotes")}).then(function(){return t.setIsLoading(!1)}).catch(t.setCreateAccountError)}):this.setState({errorMessage:"Passwords Must Match"})}},{key:"setIsLoading",value:function(e){this.setState({isLoading:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.errorMessage,a=t.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"create-account-form",onSubmit:function(t){e.handleSubmit(t)}},a?r.a.createElement(F,null):r.a.createElement(r.a.Fragment,null,n?r.a.createElement("div",{className:"error-message"},n):"",r.a.createElement("label",{className:"create-account-form__label",htmlFor:"username-input"},"Username"),r.a.createElement("input",{id:"create-username-input",type:"text",onChange:function(t){return e.handleTextInput(t)},required:!0}),r.a.createElement("label",{className:"create-account-form__label",htmlFor:"password-input"},"Password"),r.a.createElement("input",{id:"create-password-input",type:"password",onChange:function(t){return e.handleTextInput(t)},required:!0}),r.a.createElement("label",{className:"create-account-form__label",htmlFor:"password-confirm-input"},"Confirm Password"),r.a.createElement("input",{id:"create-password-confirm-input",type:"password",onChange:function(t){return e.handleTextInput(t)},required:!0})),r.a.createElement("input",{className:"create-account-form__submit",type:"submit",value:"Create Account"})))}}]),t}(a.Component);x.contextType=j;var A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).setInCreateAccountMode=function(e){n.setState({inCreateAccountMode:e})},n.state={inCreateAccountMode:!1},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"account-access-forms"},r.a.createElement("button",{className:"account-access-forms__button ".concat(this.state.inCreateAccountMode?"":"highlight"),onClick:function(){return e.setInCreateAccountMode(!1)}},"Sign In"),r.a.createElement("button",{className:"account-access-forms__button ".concat(this.state.inCreateAccountMode?"highlight":""),onClick:function(){return e.setInCreateAccountMode(!0)}},"Create Account"),r.a.createElement("div",{className:"account-access-forms__selected-form"},this.state.inCreateAccountMode?r.a.createElement(x,Object.assign({setInCreateAccountMode:this.setInCreateAccountMode},this.props)):r.a.createElement(M,Object.assign({},this.props,{setMenuIsOpen:this.props.setMenuIsOpen}))))}}]),t}(r.a.Component);function T(e){return r.a.createElement(j.Consumer,null,function(t){var n=t.GlobalState,a=t.GlobalMethods;return r.a.createElement("ul",{className:"user-menu"},r.a.createElement(U.b,{className:"user-menu__list-item__link",to:"/user/".concat(n.username),onClick:function(){return e.setMenuIsOpen(!1)}},r.a.createElement("li",{className:"user-menu__list-item"},"Profile")),r.a.createElement(U.b,{className:"user-menu__list-item__link",to:"/quotes",onClick:function(){return e.setMenuIsOpen(!1)}},r.a.createElement("li",{className:"user-menu__list-item"},"Quote Generator")),r.a.createElement(U.b,{className:"user-menu__list-item__link",to:"/",onClick:function(){a.logoutUser(),e.setMenuIsOpen(!1)}},r.a.createElement("li",{className:"user-menu__list-item"},"Log Out")))})}T.contextType=j;var L=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).setMenuIsOpen=function(e){n.setState(function(t){return{menuIsOpen:e}})},n.state={menuIsOpen:!1,userIsLoggedIn:!0},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"capitalizeFirstLetter",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1,e.length)}},{key:"render",value:function(){var e=this;return r.a.createElement(j.Consumer,null,function(t){var n=t.GlobalState,a=e.state.menuIsOpen;return r.a.createElement("div",{className:"menu-container"},r.a.createElement("header",{className:"menu"},r.a.createElement("button",{className:"menu__button",onClick:function(){return e.setMenuIsOpen(!a)}},r.a.createElement("span",null,a?"Close":"Menu")),r.a.createElement("div",{className:"menu__greeting"},n.userIsLoggedIn?"Welcome ".concat(e.capitalizeFirstLetter(n.username)):""),a?n.userIsLoggedIn?r.a.createElement(T,Object.assign({},e.props,{setMenuIsOpen:e.setMenuIsOpen})):r.a.createElement(A,Object.assign({},e.props,{setMenuIsOpen:e.setMenuIsOpen})):""))})}}]),t}(r.a.Component),z=n(114);function R(){var e=Object(a.useState)({quote:"\u201cDo not fear the winds of adversity. Remember, a kite \n    rises against the wind rather than with it.\u201d",author:"Unknown"}),t=Object(z.a)(e,2),n=t[0];t[1];return r.a.createElement("div",{className:"landing-page__splash"},r.a.createElement("h1",{className:"landing-page__header"},"Motiv8"),r.a.createElement("div",{className:"splash-animation"},r.a.createElement("div",{className:"splash-quote"},n.quote),r.a.createElement("div",{className:"splash-quote-author"},n.author)))}function G(e){var t=e.history;return r.a.createElement("div",{className:"landing-page-container"},r.a.createElement(R,null),r.a.createElement("main",{className:"landing-page__main-content"},r.a.createElement("div",{className:"landing-page__copy"},r.a.createElement("h3",null,"Motiv8 is a random quote generator."),r.a.createElement("ul",{className:"landing-page__list"},r.a.createElement("li",{className:"landing-page__list-item"},r.a.createElement("i",{className:"fas fa-palette landing-page__icon"}),r.a.createElement("span",{className:"landing-page__list-copy"},"Create unique quote, font, and background image pairings.")),r.a.createElement("li",{className:"landing-page__list-item"},r.a.createElement("i",{className:"fas fa-user-circle landing-page__icon"}),r.a.createElement("span",{className:"landing-page__list-copy"},"Create an account and save your favorite combos."))))),r.a.createElement("button",{className:"btn get-started-button",onClick:function(){return t.push("/quotes")}},"Get Started"))}var D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.Consumer,null,function(e){var t=e.GlobalState,n=t.currentQuote,a=t.currentQuoteBgImageUrl,o=t.currentQuoteFontPair,s={backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:"url(".concat(a,")")},u={fontFamily:o.body},c={fontFamily:o.author};return r.a.createElement("div",{className:"quote-display",style:s},n.hasOwnProperty("quote")?r.a.createElement("div",{className:"quote-backdrop"},r.a.createElement("div",{className:"quote-body",style:u},n.quote),r.a.createElement("div",{className:"quote-author",style:c},n.author)):r.a.createElement(F,null))})}}]),t}(r.a.Component),K=n(24),H=n(25);function J(){return r.a.createElement(j.Consumer,null,function(e){var t=e.GlobalState,n=e.GlobalMethods,a=t.keepBackground,o=t.keepFonts,s=t.keepQuote,u=n.handleCheckboxCheck;return r.a.createElement("div",{className:"quote-controls-container"},r.a.createElement("h5",{className:"quote-controls-heading"},"Randomize Options"),r.a.createElement("div",{className:"quote-controls"},r.a.createElement("input",{onChange:function(e){return u(e)},type:"checkbox",id:"keep-quote-checkbox"}),r.a.createElement("label",{className:"quote-controls__label",htmlFor:"keep-quote-checkbox"},r.a.createElement("div",null,s?r.a.createElement(K.a,{icon:H.a,size:"lg"}):r.a.createElement(K.a,{icon:H.b,size:"lg"})),r.a.createElement("span",{className:"quote-controls__label__text"},"Keep Quote")),r.a.createElement("input",{onChange:function(e){return u(e)},type:"checkbox",id:"keep-fonts-checkbox"}),r.a.createElement("label",{className:"quote-controls__label",htmlFor:"keep-fonts-checkbox"},r.a.createElement("div",null,o?r.a.createElement(K.a,{icon:H.a,size:"lg"}):r.a.createElement(K.a,{icon:H.b,size:"lg"})),r.a.createElement("span",{className:"quote-controls__label__text"},"Keep Fonts")),r.a.createElement("input",{onChange:function(e){return u(e)},type:"checkbox",id:"keep-background-checkbox"}),r.a.createElement("label",{className:"quote-controls__label",htmlFor:"keep-background-checkbox"},r.a.createElement("div",null,a?r.a.createElement(K.a,{icon:H.a,size:"lg"}):r.a.createElement(K.a,{icon:H.b,size:"lg"})),r.a.createElement("span",{className:"quote-controls__label__text"},"Keep Background"))))})}function W(){function e(e){return e.length>1}return r.a.createElement(j.Consumer,null,function(t){var n=t.GlobalState,a=t.GlobalMethods,o=n.currentQuoteSaved,s=n.userIsLoggedIn,u=n.quoteHistory,c=n.userId,i=a.getUpdatedSavedQuotes,l=a.randomizeQuote,m=a.saveQuote,d=a.undoRandomizeQuote;return r.a.createElement("div",{className:"quote-nav-container"},r.a.createElement("button",{className:"quote-nav__button randomize-button",onClick:function(){return l()}},"Randomize"),r.a.createElement("button",{disabled:!e(u)&&"disabled",className:"quote-nav__button undo-button ".concat(e(u)?"":"button-disabled"),onClick:function(){return d()}},"Undo"),r.a.createElement("button",{disabled:!s&&"disabled",className:"quote-nav__button save-button \n                ".concat(o?"save-success":"","\n                ").concat(s?"":"button-disabled"),onClick:function(){return m(c,i)}},"Save",s?"":r.a.createElement("div",{className:"save-button__instructions"},"Log in to save quotes")))})}function Y(){return r.a.createElement("div",{className:"container"},r.a.createElement(J,null),r.a.createElement(D,null),r.a.createElement(W,null))}function V(e){return r.a.createElement(j.Consumer,null,function(t){var n=t.GlobalMethods.deleteFavoritesItem,a={fontFamily:e.quote.bodyfont},o={fontFamily:e.quote.authorfont};return r.a.createElement("li",{className:"favorites-list-item"},r.a.createElement("div",null,r.a.createElement("p",{style:a},e.quote.quote),r.a.createElement("p",{style:o},e.quote.author),r.a.createElement("button",{className:"favorites-list-item__button",onClick:function(){return n(e.savedQuoteId)}},"Delete")),r.a.createElement("img",{className:"favorites-list-item-img",alt:"",src:e.quote.background_image_url}))})}function $(e){var t=e.history;return r.a.createElement(j.Consumer,null,function(e){var n=e.GlobalState;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"favorites-list-heading"},"Favorites"),r.a.createElement("ul",{className:"favorites-list"},n.savedQuotes.map(function(e){return r.a.createElement(V,{key:e.id,quote:e,history:t,savedQuoteId:e.id})})))})}var X=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).history=e.history,n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUpdatedSavedQuotes("Demo")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement($,{history:this.props.history}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(P,null,r.a.createElement(function(e){return r.a.createElement(U.a,null,r.a.createElement(B.a,{path:"/",component:L}),r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"/",exact:!0,component:G}),r.a.createElement(B.a,{path:"/quotes",component:Y}),r.a.createElement(j.Consumer,null,function(e){var t=e.GlobalState,n=e.GlobalMethods.getUpdatedSavedQuotes,a=t.userId;return r.a.createElement(B.a,{path:"/user/:username",render:function(e){return r.a.createElement(X,Object.assign({},e,{getUpdatedSavedQuotes:n,userId:a}))}})})))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[115,1,2]]]);
//# sourceMappingURL=main.d8591f01.chunk.js.map