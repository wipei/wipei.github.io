(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{141:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o(3)),s=o(204);o(205),t.default=n.default.component("contact",{template:'\n    <div id="contact" class="contact-container">\n      <h1 class="main-title-big contact-title light-blue m-bottom-2">{{ $t(\'footer.letsTalk\') }}</h1>\n      <span class="contact-subtitle text-small m-bottom-3">{{ $t(\'footer.leaveYourMail\') }}</span>\n      <form class="form" @submit.prevent="saveEmail()" novalidate>\n        <div class="form-group m-bottom-3">\n          <input type="email" class="email-input" placeholder="Ej: nombre@email.com" v-model="email" />\n          <span v-if="success" class="success m-top-1 text-center">{{ $t(\'footer.emailSuccess\') }}</span>\n          <span v-if="error" class="error m-top-1 text-center">{{ $t(\'footer.emailError\') }}</span>\n        </div>\n        <button type="submit" class="submit-button"></button>\n      </form>\n      <h2 class="telephone purple bolder">{{ $t(\'footer.phone\') }}</h2>\n    </div>\n  ',data:function(){return{email:"",success:!1,error:!1}},methods:{saveEmail:function(){var e=this;this.error=!1,this.success=!1,(0,s.registerEmail)(this.email).then(function(t){t.ok?(e.success=!0,e.email=""):e.error=!0})}}})},204:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerEmail=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(o(66));t.registerEmail=function(e){return n.default.post("/connect",{email:e})}},205:function(e,t,o){},66:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(67);t.default=(0,n.create)({baseURL:"https://api.wipei.com.ar"})}}]);