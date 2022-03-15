System.register("chunks:///_virtual/TrackHands.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,r,a,o,i;return{setters:[function(e){t=e.inheritsLoose,n=e.asyncToGenerator,r=e.createForOfIteratorHelperLoose},function(e){a=e.cclegacy,o=e._decorator,i=e.Component}],execute:function(){var c;a._RF.push({},"171d5O97PZLnqck1Y0q7vah","TrackHands",void 0);var s=o.ccclass;o.property,e("TrackHands",s("TrackHands")(c=function(e){function a(){return e.apply(this,arguments)||this}return t(a,e),a.prototype.start=function(){document.getElementsByClassName("cocosVideo")[0];var e=document.querySelector("#GameCanvas"),t=e.getContext("2d");var a=new Hands;a.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),a.onResults((function(n){if(t.save(),t.clearRect(0,0,e.width,e.height),t.drawImage(n.image,0,0,e.width,e.height),n.multiHandLandmarks)for(var a,o=r(n.multiHandLandmarks);!(a=o()).done;){var i=a.value;drawConnectors(t,i,HAND_CONNECTIONS,{color:"#00FF00",lineWidth:5}),drawLandmarks(t,i,{color:"#FF0000",lineWidth:2})}t.restore()})),void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(n,r){t.call(navigator,e,n,r)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(e){var t=document.querySelector("video");"srcObject"in t?t.srcObject=e:t.src=window.URL.createObjectURL(e),t.onloadedmetadata=function(e){t.play()},this.schdule(n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.send({image:t});case 2:case"end":return e.stop()}}),e)}))),.2)})).catch((function(e){console.log(e.name+": "+e.message)}))},a}(i))||c);a._RF.pop()}}}));

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