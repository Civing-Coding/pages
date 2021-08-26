System.register("chunks:///_virtual/CameraHelper.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,t,n,a,o;return{setters:[function(e){r=e.inheritsLoose,t=e.asyncToGenerator},function(e){n=e.cclegacy,a=e._decorator,o=e.Component}],execute:function(){var i;n._RF.push({},"af567r4CB5NVosAQyNFM6sC","CameraHelper",void 0);var c=a.ccclass;a.property,e("CameraHelper",c("CameraHelper")(i=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var a=n.prototype;return a.start=function(){var e=t(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getConnectedDevices("videoinput");case 2:(r=e.sent)&&r.length>0&&this.playVideoFromCamera();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),a.getConnectedDevices=function(){var e=t(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:return t=e.sent,n=t.filter((function(e){return e.kind===r})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),a.playVideoFromCamera=function(){var e=t(regeneratorRuntime.mark((function e(){var r,t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={video:{facingMode:"environment"},audio:!1},e.next=4,navigator.mediaDevices.getUserMedia(r);case 4:t=e.sent,(n=document.querySelector("video")).srcObject=t,n.play(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error opening video camera.",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),n}(o))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./CameraHelper.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

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