System.register("chunks:///_virtual/CameraTool.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "127c0F2htxM7aDv5v0JIbjM", "CameraTool", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CameraTool = exports('CameraTool', (_dec = ccclass('CameraTool'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraTool, _Component);

        function CameraTool() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = CameraTool.prototype;

        _proto.start = function start() {
          var video = document.querySelector('video');
          var constraints = {
            audio: false,
            video: true
          };

          function handleSuccess(stream) {
            var videoTracks = stream.getVideoTracks();
            console.log('Using video device: ' + videoTracks[0].label);
            video.srcObject = stream;
          }

          function handleError(error) {
            console.log('getUserMedia error: ' + error.name, error);
          }

          navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess)["catch"](handleError);
        };

        return CameraTool;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./CameraTool.ts'], function () {
  'use strict';

  return {
    setters: [null],
    execute: function () {}
  };
});

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