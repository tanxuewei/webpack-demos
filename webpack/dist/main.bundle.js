!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=2)}([function(t,n,r){"use strict";(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;n.a=r}).call(this,r(1))},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";r.r(n);var e=(t,n)=>t+n;var o=function(t,n,r){var e=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var u=Array(o);++e<o;)u[e]=t[e+n];return u};var u=function(t,n){return t===n||t!=t&&n!=n},i=r(0),c="object"==typeof self&&self&&self.Object===Object&&self,a=(i.a||c||Function("return this")()).Symbol,f=Object.prototype,l=f.hasOwnProperty,v=f.toString,s=a?a.toStringTag:void 0;var b=function(t){var n=l.call(t,s),r=t[s];try{t[s]=void 0;var e=!0}catch(t){}var o=v.call(t);return e&&(n?t[s]=r:delete t[s]),o},y=Object.prototype.toString;var p=function(t){return y.call(t)},d=a?a.toStringTag:void 0;var j=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?b(t):p(t)};var g=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)};var O=function(t){if(!g(t))return!1;var n=j(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var h=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var m=function(t){return null!=t&&h(t.length)&&!O(t)},S=/^(?:0|[1-9]\d*)$/;var x=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&S.test(t))&&t>-1&&t%1==0&&t<n};var w=function(t,n,r){if(!g(r))return!1;var e=typeof n;return!!("number"==e?m(r)&&x(n,r.length):"string"==e&&n in r)&&u(r[n],t)};var P=function(t){return null!=t&&"object"==typeof t};var M=function(t){return"symbol"==typeof t||P(t)&&"[object Symbol]"==j(t)},_=/^\s+|\s+$/g,F=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,$=/^0o[0-7]+$/i,T=parseInt;var A=function(t){if("number"==typeof t)return t;if(M(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(_,"");var r=N.test(t);return r||$.test(t)?T(t.slice(2),r?2:8):F.test(t)?NaN:+t};var G=function(t){return t?(t=A(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var I=function(t){var n=G(t),r=n%1;return n==n?r?n-r:n:0},U=Math.ceil,k=Math.max;var q=function(t,n,r){n=(r?w(t,n,r):void 0===n)?1:k(I(n),0);var e=null==t?0:t.length;if(!e||n<1)return[];for(var u=0,i=0,c=Array(U(e/n));u<e;)c[i++]=o(t,u,u+=n);return c};const z=e(1,2),B=((t,n)=>t-n)(2,1);console.log(z),console.log(B),console.log(q(["a","b","c"],2)),console.log('this is function "a"')}]);
//# sourceMappingURL=main.bundle.js.map