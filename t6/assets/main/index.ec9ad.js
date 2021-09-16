System.register("chunks:///_virtual/AR_Track.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, EventHandler, CCString, find, view, v3, Component, sys, UITransform;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventHandler = module.EventHandler;
      CCString = module.CCString;
      find = module.find;
      view = module.view;
      v3 = module.v3;
      Component = module.Component;
      sys = module.sys;
      UITransform = module.UITransform;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "151e4xX2mVIzY92wSayhycM", "AR_Track", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AR_Track = exports('AR_Track', (_dec = ccclass('AR_Track'), _dec2 = property({
        displayName: 'marker Event',
        type: [EventHandler]
      }), _dec3 = property({
        displayName: 'marker Path',
        type: [CCString]
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AR_Track, _Component);

        function AR_Track() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "markerCallBack", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "marker", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_arCtrl", null);

          _defineProperty(_assertThisInitialized(_this), "_video", null);

          return _this;
        }

        var _proto = AR_Track.prototype;

        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var rate, winSize, visibleSize, details, cameras;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    rate = 1 / view.getDevicePixelRatio();
                    /* ******打印一些参数细节，方便调试****** */

                    winSize = view.getCanvasSize();
                    visibleSize = view.getVisibleSize();
                    details = "%cwinSize : {width : " + winSize.width + ", height : " + winSize.height + "}  \n";
                    details += "visibleSize : {width : " + visibleSize.width + ", height : " + visibleSize.height + "}  \n";
                    details += "PixelRatio : " + rate + "\n";
                    details += "ismobile: " + sys.isMobile + "\n";
                    details += "browserDetails :" + globalThis.adapter.browserDetails.browser + "     " + globalThis.adapter.browserDetails.version;
                    console.log(details, "color:#6666ff;font-weight:bold;font-size:14px");
                    /* ***************结束***************** */

                    this.getComponent(UITransform).setContentSize(visibleSize);
                    _context.next = 12;
                    return this.getConnectedDevices('videoinput');

                  case 12:
                    cameras = _context.sent;

                    if (cameras && cameras.length > 0) {
                      this.playVideoFromCamera();
                    }

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function start() {
            return _start.apply(this, arguments);
          }

          return start;
        }() //获取摄像头设备
        ;

        _proto.getConnectedDevices = /*#__PURE__*/function () {
          var _getConnectedDevices = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(type) {
            var devices, array;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return navigator.mediaDevices.enumerateDevices();

                  case 2:
                    devices = _context2.sent;
                    array = devices.filter(function (device) {
                      return device.kind === type;
                    });
                    return _context2.abrupt("return", array);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function getConnectedDevices(_x) {
            return _getConnectedDevices.apply(this, arguments);
          }

          return getConnectedDevices;
        }() //将摄像头转为视频stream
        ;

        _proto.playVideoFromCamera = /*#__PURE__*/function () {
          var _playVideoFromCamera = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var winSize, constraints, stream, videoElement;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    winSize = view.getCanvasSize();
                    constraints = {
                      'video': {
                        facingMode: "environment",
                        width: sys.isMobile ? winSize.height : winSize.width,
                        height: sys.isMobile ? winSize.width : winSize.height
                      },
                      'audio': false
                    };
                    _context3.next = 5;
                    return navigator.mediaDevices.getUserMedia(constraints);

                  case 5:
                    stream = _context3.sent;
                    videoElement = document.querySelector('video');
                    videoElement.srcObject = stream;
                    _context3.next = 10;
                    return videoElement.play();

                  case 10:
                    this._video = videoElement;
                    this.initARToolkit();
                    _context3.next = 17;
                    break;

                  case 14:
                    _context3.prev = 14;
                    _context3.t0 = _context3["catch"](0);
                    console.error('Error opening video camera.', _context3.t0);

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 14]]);
          }));

          function playVideoFromCamera() {
            return _playVideoFromCamera.apply(this, arguments);
          }

          return playVideoFromCamera;
        }();

        _proto.initARToolkit = /*#__PURE__*/function () {
          var _initARToolkit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var param;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    param = new globalThis.ARCameraParam();

                    param.onload = function () {
                      _this2._arCtrl = new globalThis.ARController(_this2._video.videoWidth, _this2._video.videoHeight, param);

                      _this2._arCtrl.setPatternDetectionMode(globalThis.artoolkit.AR_TEMPLATE_MATCHING_COLOR_AND_MATRIX);

                      _this2._arCtrl.addEventListener('getMarker', _this2.getmark.bind(_this2), true);

                      _this2._arCtrl.loadMarker(_this2.marker, function (makerId) {
                        console.log('loaded marker', makerId);
                      });

                      _this2.schedule(function () {
                        _this2._arCtrl.process(_this2._video);
                      });
                    };

                    param.src = 'camera_para.dat';

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function initARToolkit() {
            return _initARToolkit.apply(this, arguments);
          }

          return initARToolkit;
        }();

        _proto.getmark = function getmark(event) {
          if (event.data.type > -1) // console.log(`扫描到：  type:${event.data.type}   pattId:${event.data.marker.idPatt}   cfPatt:${event.data.marker.cfPatt}`);
            if (event.data.type === globalThis.artoolkit.PATTERN_MARKER && event.data.marker.cfPatt > 0.6) {
              //识别图片
              // console.log('识别到类型：gartoolkit.PATTERN_MARKER', event.data);
              EventHandler.emitEvents(this.markerCallBack, {
                id: event.data.marker.idPatt,
                pos: this.getTrackPos(event.data.marker.pos)
              });
              var star = find('Canvas/star'); // let markerMat = new Mat4();
              // Mat4.fromArray(markerMat, event.data.matrix);
              // let quat = new Quat();
              // markerMat.getRotation(quat);
              // let ve = v3();
              // quat.getEulerAngles(ve)
              // console.log(ve);

              star.position = this.getTrackPos(event.data.marker.pos); // star.angle = -ve.y;
              // star.setRotation(quat);
            } // if (event.data.type === globalThis.artoolkit.BARCODE_MARKER) {
          //     //识别黑白标记
          //     console.log('识别到类型：gartoolkit.BARCODE_MARKER');
          //     // this.unscheduleAllCallbacks();
          // }
        };

        _proto.getTrackPos = function getTrackPos(pos) {
          var visibleSize = view.getVisibleSize();
          var rate = visibleSize.width / view.getCanvasSize().width;
          return v3(pos[0] * rate - visibleSize.width / 2, visibleSize.height - pos[1] * rate - visibleSize.height / 2, 0);
        };

        return AR_Track;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "markerCallBack", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "marker", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AR_Recognition.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, EventHandler, CCString, CCBoolean, director, Component, view, sys, UITransform;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventHandler = module.EventHandler;
      CCString = module.CCString;
      CCBoolean = module.CCBoolean;
      director = module.director;
      Component = module.Component;
      view = module.view;
      sys = module.sys;
      UITransform = module.UITransform;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "af567r4CB5NVosAQyNFM6sC", "AR_Recognition", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AR_Recognition = exports('AR_Recognition', (_dec = ccclass('AR_Recognition'), _dec2 = property({
        displayName: 'marker Event',
        type: [EventHandler]
      }), _dec3 = property({
        displayName: 'marker Path',
        type: [CCString]
      }), _dec4 = property(CCBoolean), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AR_Recognition, _Component);

        function AR_Recognition() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "markerCallBack", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "markers", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "once", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_arCtrl", null);

          _defineProperty(_assertThisInitialized(_this), "_video", null);

          return _this;
        }

        var _proto = AR_Recognition.prototype;

        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var rate, winSize, visibleSize, details, cameras;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    rate = 1 / view.getDevicePixelRatio();
                    /* ******打印一些参数细节，方便调试****** */

                    winSize = view.getCanvasSize();
                    visibleSize = view.getVisibleSize();
                    details = "%cwinSize : {width : " + winSize.width + ", height : " + winSize.height + "}  \n";
                    details += "visibleSize : {width : " + visibleSize.width + ", height : " + visibleSize.height + "}  \n";
                    details += "PixelRatio : " + rate + "\n";
                    details += "ismobile: " + sys.isMobile + "\n";
                    details += "browserDetails :" + globalThis.adapter.browserDetails.browser + "     " + globalThis.adapter.browserDetails.version;
                    console.log(details, "color:#6666ff;font-weight:bold;font-size:14px");
                    /* ***************结束***************** */

                    this.getComponent(UITransform).setContentSize(visibleSize);
                    _context.next = 12;
                    return this.getConnectedDevices('videoinput');

                  case 12:
                    cameras = _context.sent;

                    if (cameras && cameras.length > 0) {
                      this.playVideoFromCamera();
                    }

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function start() {
            return _start.apply(this, arguments);
          }

          return start;
        }() //获取摄像头设备
        ;

        _proto.getConnectedDevices = /*#__PURE__*/function () {
          var _getConnectedDevices = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(type) {
            var devices, array;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return navigator.mediaDevices.enumerateDevices();

                  case 2:
                    devices = _context2.sent;
                    array = devices.filter(function (device) {
                      return device.kind === type;
                    });
                    return _context2.abrupt("return", array);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function getConnectedDevices(_x) {
            return _getConnectedDevices.apply(this, arguments);
          }

          return getConnectedDevices;
        }() //将摄像头转为视频stream
        ;

        _proto.playVideoFromCamera = /*#__PURE__*/function () {
          var _playVideoFromCamera = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var winSize, constraints, stream, videoElement;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    winSize = view.getCanvasSize();
                    sys.isMobile = false;
                    constraints = {
                      'video': {
                        facingMode: "environment",
                        width: sys.isMobile ? winSize.height : winSize.width,
                        height: sys.isMobile ? winSize.width : winSize.height
                      },
                      'audio': false
                    };
                    _context3.next = 6;
                    return navigator.mediaDevices.getUserMedia(constraints);

                  case 6:
                    stream = _context3.sent;
                    videoElement = document.querySelector('video');
                    videoElement.srcObject = stream;
                    _context3.next = 11;
                    return videoElement.play();

                  case 11:
                    this._video = videoElement;
                    this.initARToolkit();
                    _context3.next = 18;
                    break;

                  case 15:
                    _context3.prev = 15;
                    _context3.t0 = _context3["catch"](0);
                    console.error('Error opening video camera.', _context3.t0);

                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 15]]);
          }));

          function playVideoFromCamera() {
            return _playVideoFromCamera.apply(this, arguments);
          }

          return playVideoFromCamera;
        }();

        _proto.initARToolkit = /*#__PURE__*/function () {
          var _initARToolkit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var param;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    param = new globalThis.ARCameraParam();

                    param.onload = function () {
                      _this2._arCtrl = new globalThis.ARController(_this2._video.videoWidth, _this2._video.videoHeight, param);

                      _this2._arCtrl.setPatternDetectionMode(globalThis.artoolkit.AR_TEMPLATE_MATCHING_COLOR_AND_MATRIX);

                      _this2._arCtrl.addEventListener('getMarker', _this2.getmark.bind(_this2), true);

                      for (var i in _this2.markers) {
                        _this2._arCtrl.loadMarker(_this2.markers[i], function (makerId) {
                          console.log('loaded marker', makerId);
                        });
                      }

                      _this2.schedule(function () {
                        _this2._arCtrl.process(_this2._video);
                      }, 0.5);
                    };

                    param.src = 'camera_para.dat';

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function initARToolkit() {
            return _initARToolkit.apply(this, arguments);
          }

          return initARToolkit;
        }();

        _proto.getmark = function getmark(event) {
          if (event.data.type > -1) console.log("\u626B\u63CF\u5230\uFF1A  type:" + event.data.type + "   pattId:" + event.data.marker.idPatt + "   cfPatt:" + event.data.marker.cfPatt);

          if (event.data.type === globalThis.artoolkit.PATTERN_MARKER && event.data.marker.cfPatt > 0.6) {
            //识别图片
            console.log('识别到类型：gartoolkit.PATTERN_MARKER');
            EventHandler.emitEvents(this.markerCallBack, {
              id: event.data.marker.idPatt
            });
            if (this.once) this.unscheduleAllCallbacks();
            director.loadScene('game');
          } // if (event.data.type === globalThis.artoolkit.BARCODE_MARKER) {
          //     //识别黑白标记
          //     console.log('识别到类型：gartoolkit.BARCODE_MARKER');
          //     // this.unscheduleAllCallbacks();
          // }

        };

        return AR_Recognition;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "markerCallBack", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "markers", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "once", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./AR_Track.ts', './AR_Recognition.ts'], function () {
  'use strict';

  return {
    setters: [null, null],
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