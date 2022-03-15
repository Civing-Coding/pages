System.register("chunks:///_virtual/TrackHands.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,a,n,r;return{setters:[function(e){t=e.inheritsLoose},function(e){a=e.cclegacy,n=e._decorator,r=e.Component}],execute:function(){var i;a._RF.push({},"171d5O97PZLnqck1Y0q7vah","TrackHands",void 0);var o=n.ccclass;n.property,e("TrackHands",o("TrackHands")(i=function(e){function a(){return e.apply(this,arguments)||this}return t(a,e),a.prototype.start=function(){document.getElementsByClassName("cocosVideo")[0],document.querySelector("#GameCanvas").getContext("2d");void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(a,n){t.call(navigator,e,a,n)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(e){var t=document.querySelector("video");"srcObject"in t?t.srcObject=e:t.src=window.URL.createObjectURL(e),t.onloadedmetadata=function(e){t.play()}})).catch((function(e){console.log(e.name+": "+e.message)}))},a}(r))||i);a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./TrackHands.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});