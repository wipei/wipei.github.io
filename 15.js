(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(n(3)),o=n(12);t.default=s.default.component("register-complete-tab",{template:'\n    <div class="back-grey">\n      <div class="tab-container justify-start p-top-15">\n        <h1 class="text-big blue bolder">{{ $t(\'register.youAreRegistered\') }}</h1>\n        <h4 class="text-big light-blue bold m-bottom-4">{{ $t(\'register.verifyEmail\') }}</h4>\n        <button type="button" class="button-rose-full" @click="selectTab('+o.selectionTab+")\">{{ $t('register.goBack') }}</button>\n      </div>\n    </div>\n  ",props:{selectTab:{type:Function,required:!0}}})}}]);