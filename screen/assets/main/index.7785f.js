System.register("chunks:///_virtual/main.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,o,r,i,c;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.game,i=t.director,c=t.Component}],execute:function(){var s;e._RF.push({},"2a7f7vlTRpIJatABIIlzDF+","main",void 0);var a=o.ccclass;o.property,t("Main",a("Main")(s=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){r.addPersistRootNode(this.node)},o.onclick=function(t,n){i.loadScene(n)},e}(c))||s);e._RF.pop()}}}));

System.register("chunks:///_virtual/SystemControl.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(r){"use strict";var e,n,o,t,i,s,a,l,c,p,u;return{setters:[function(r){e=r.applyDecoratedDescriptor,n=r.inheritsLoose,o=r.initializerDefineProperty,t=r.assertThisInitialized},function(r){i=r.cclegacy,s=r._decorator,a=r.Label,l=r.sys,c=r.game,p=r.Game,u=r.Component}],execute:function(){var b,f,y,g,m;i._RF.push({},"a60cavOoAdGh4s8M0Hki488","SystemControl",void 0);var h=s.ccclass,v=s.property;r("SystemControl",(b=h("SystemControl"),f=v(a),b((m=e((g=function(r){function e(){for(var e,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=r.call.apply(r,[this].concat(i))||this,o(t(e),"lbl",m,t(e)),e}n(e,r);var i=e.prototype;return i.start=function(){this.browserInfo()},i.browserInfo=function(){var r="";for(var e in r+="isMobile : "+l.isMobile+"\r\n",r+="language : "+l.language+"\r\n",r+="browserType : "+l.browserType+"\r\n",r+="browserVersion : "+l.browserVersion+"\r\n",r+="os : "+l.os+"\r\n",r+="osVersion : "+l.osVersion+"\r\n",r+="platform : "+l.platform+"\r\n",r+="Using "+(c.renderType===p.RENDER_TYPE_WEBGL?"WEBGL":"CANVAS")+" renderer.\r\n",r+="capabilities : \r\n",l.capabilities)r+=e+":"+l.capabilities[e]+"\r\n";this.lbl.string=r},e}(u)).prototype,"lbl",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=g))||y));i._RF.pop()}}}));

System.register("chunks:///_virtual/ScreenControl.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,n,o,r,l,c,a;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,c=e.Label,a=e.Component}],execute:function(){var u,d,s,h,p;r._RF.push({},"ff1cfUcJbBJjLfySwqY/dem","ScreenControl",void 0);var f=l.ccclass,w=l.property;e("ScreenControl",(u=f("ScreenControl"),d=w(c),u((p=t((h=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,n(o(t),"lbl",p,o(t)),t}return i(t,e),t.prototype.start=function(){var e=window.screen,t=e.width*window.devicePixelRatio,i=e.height*window.devicePixelRatio,n=window.devicePixelRatio.toFixed(3),o="PixelWidth:"+Math.floor(t)+"\nPixelHeight:"+Math.floor(i)+"\nPixelRatio:"+n+"\nw/h:"+(t/i).toFixed(3),r=document.documentElement.clientWidth,l=document.documentElement.clientHeight;o+="\nclientWidth:"+r+"\nclientHeight:"+l+"\nclientWidth/clientHeight:"+(r/l).toFixed(3),this.lbl.string=o},t}(a)).prototype,"lbl",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),s=h))||s));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./main.ts","./SystemControl.ts","./ScreenControl.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

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