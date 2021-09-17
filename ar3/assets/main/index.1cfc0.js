System.register("chunks:///_virtual/AR_Track.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, EventHandler, find, view, v3, Component, sys, UITransform;

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
        type: ''
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

System.register("chunks:///_virtual/Utils.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, v2;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      v2 = module.v2;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4dd65b6/4FOAKmPVfHHN/zr", "Utils", undefined);

      var Utils = exports('Utils', /*#__PURE__*/function () {
        function Utils() {} //数字开头填充0


        Utils.padStart = function padStart(num, n) {
          var len = num.toString().length;

          while (len < n) {
            num = "0" + num;
            len++;
          }

          return num;
        } //固定种子重复随机算法 
        ;

        Utils.getRandomBySeedRe = function getRandomBySeedRe(seed, num, minN, maxN) {
          var seededRandom = function seededRandom(max, min) {
            max = max || 1;
            min = min || 0;
            seed = (seed * 9301 + 49297) % 233280;
            var rnd = seed / 233280.0;
            return Math.floor(min + rnd * (max - min));
          };

          var list = [];

          while (list.length < num) {
            list.push(seededRandom(maxN, minN));
          }

          return list;
        }; //固定种子不重复随机算法 


        Utils.getRandomBySeed = function getRandomBySeed(seed, num, minN, maxN) {
          var seededRandom = function seededRandom(max, min) {
            max = max || 1;
            min = min || 0;
            seed = (seed * 9301 + 49297) % 233280;
            var rnd = seed / 233280.0;
            return Math.floor(min + rnd * (max - min));
          };

          var list = new Set();

          while (list.size < num) {
            list.add(seededRandom(maxN, minN));
          }

          return new Array(list);
        }; //带权重随机


        Utils.randomWithWeight = function randomWithWeight(weightList) {
          if (weightList.length == 1) {
            return 0;
          }

          var total = 0;
          weightList.forEach(function (i) {
            total += i;
          });
          var r = Utils.random(1, total);
          var i = 0;
          var temp = 0;

          while (temp < total) {
            temp += weightList[i];

            if (r <= temp) {
              return i;
            }

            ++i;
          }

          return weightList.length - 1;
        } //正态分布随机  -1-1 68%  -2-2 95% -3-3 99%  other 0.2%
        ;

        Utils.random_Box_Muller = function random_Box_Muller() {
          //Math.sqrt(-2 * Math.log(Math.random())) * Math.sin(2 * Math.PI * Math.random());
          var ran = Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random());
          return ran;
        } //获取是一年的第几周
        ;

        Utils.getWeekOfYear = function getWeekOfYear() {
          var today = new Date();
          var firstDay = new Date(today.getFullYear(), 0, 1);
          var dayOfWeek = firstDay.getDay();
          var spendDay = 1;

          if (dayOfWeek != 0) {
            spendDay = 7 - dayOfWeek + 1;
          }

          firstDay = new Date(today.getFullYear(), 0, 1 + spendDay);
          var d = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000);
          var result = Math.ceil(d / 7);
          return result + 1;
        }; //金币转化为 10,000P


        Utils.covertMoney = function covertMoney(s) {
          var value = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'B', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn', 'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zz'];
          s = Utils.formatMoney(s, 0);
          var m = (s.match(/,/g) || []).length;
          var n = s.indexOf(','); //-1

          if (m >= 0 && n >= 0) {
            return s.slice(0, n + 4) + value[m - 1];
          } else {
            return s;
          }
        };

        Utils.random = function random(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        } //返回当前到秒的时间戳
        ;

        Utils.getTime = function getTime() {
          return Math.floor(new Date().getTime() / 1000);
        } //返回当前天数时间戳  
        ;

        Utils.getDay = function getDay() {
          return Math.floor(Math.floor(new Date().getTime() / 1000) / 86400);
        } // 获取当前日期
        ;

        Utils.getDate = function getDate() {
          return new Date().toLocaleDateString();
        } //返回00：00形式
        ;

        Utils.getTimeFormate = function getTimeFormate(t) {
          var a = Math.floor(t / 3600);
          var b = Math.floor(t % 3600 / 60);
          var c = Math.floor(t % 60);
          return !!a ? Utils.padStart(a, 2) + ":" + Utils.padStart(b, 2) + ":" + Utils.padStart(c, 2) : Utils.padStart(b, 2) + ":" + Utils.padStart(c, 2);
        } //http
        ;

        Utils.http = function http(url, data) {
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest(); // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                if (!!xhr.response) {
                  console.log(xhr.response);

                  try {
                    var response = JSON.parse(xhr.response);

                    if (response.status == 1) {
                      resolve(response);
                    } else {
                      reject('参数错误');
                    }
                  } catch (e) {
                    console.error('json解析错误');
                    reject(e);
                  }
                } else {
                  reject('url' + url + '空消息');
                }
              }
            };

            xhr.ontimeout = function () {
              reject('超时');
            };

            xhr.onerror = function () {
              reject('连接失败');
            };

            xhr.open("post", url);
            xhr.setRequestHeader('Accept', 'appliaction/json');
            xhr.send(data);
          });
        } //h5获取参数
        ;

        Utils.getQueryString = function getQueryString(name) {
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则

          if (r != null) return unescape(r[2]);
          return null;
        } //h5修改参数
        ;

        Utils.setQueryString = function setQueryString(name, replaceName) {
          if (Utils.getQueryString(name) != null) {
            var url = window.location.href.toString();
            url = url.replace(eval('/(' + name + '=)([^&]*)/gi'), replaceName);
            window.history.replaceState({}, null, url);
            return;
          }
        } //获取两点角度
        ;

        Utils.getAngle = function getAngle(p1, p2) {
          return Math.atan((p2.y - p1.y) / (p2.x - p1.x));
        } //两点距离
        ;

        Utils.getDistance = function getDistance(p1, p2) {
          return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
        } //通过角度获取弧度
        ;

        Utils.angleToRadian = function angleToRadian(angle) {
          return angle * Math.PI / 180;
        } //通过原点x,y 半径 角度 求圆上点坐标
        ;

        Utils.getCirclePoint = function getCirclePoint(center, radius, degree) {
          var x = center.x + radius * Math.cos(-degree * Math.PI / 180);
          var y = center.y + radius * Math.sin(-degree * Math.PI / 180);
          return v2(x, y);
        } //显示当前节点树
        ;

        Utils.tree = function tree(node) {
          var style = "color: " + (node.parent === null || node.activeInHierarchy ? 'green' : 'grey') + ";";

          if (node.children.length > 0) {
            console.groupCollapsed("%c" + node.name, style);
            node.children.forEach(function (child) {
              return Utils.tree(child);
            });
            console.groupEnd();
          } else {
            console.log("%c" + node.name, style);
          }
        } //彩色log
        ;

        Utils.colorLog = function colorLog(msg, color) {
          if (color === void 0) {
            color = '#6666ff';
          }

          console.log("%c\u25C6%c" + msg, "color:#009999;font-weight:bold", "color:" + color + ";font-weight:bold;font-size:20px");
        };

        return Utils;
      }());

      _defineProperty(Utils, "formatMoney", function (s, type) {
        if (/[^0-9\.]/.test(s)) return "0.00";
        if (s == null || s == "null" || s == "") return "0.00";
        s = s.toString().replace(/^(\d*)$/, "$1.");
        s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
        s = s.replace(".", ",");
        var re = /(\d)(\d{3},)/;

        while (re.test(s)) {
          s = s.replace(re, "$1,$2");
        }

        s = s.replace(/,(\d\d)$/, ".$1");

        if (type == 0) {
          var a = s.split(".");

          if (a[1] == "00") {
            s = a[0];
          }
        }

        return s;
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AR_Recognition.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _asyncToGenerator, cclegacy, _decorator, EventHandler, CCString, CCBoolean, director, Component, view, sys, UITransform, Utils;

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
    }, function (module) {
      Utils = module.Utils;
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
            var winSize, landscape, constraints, stream, videoElement;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    winSize = view.getCanvasSize();
                    landscape = Utils.getQueryString('l') == '1';
                    constraints = {
                      'video': {
                        facingMode: "environment",
                        width: landscape ? winSize.height : winSize.width,
                        height: landscape ? winSize.width : winSize.height
                      },
                      'audio': false
                    };
                    _context3.next = 6;
                    return navigator.mediaDevices.getUserMedia(constraints);

                  case 6:
                    stream = _context3.sent;
                    console.log('www');
                    videoElement = document.querySelector('video');
                    videoElement.srcObject = stream;
                    _context3.next = 12;
                    return videoElement.play();

                  case 12:
                    this._video = videoElement;
                    this.initARToolkit();
                    _context3.next = 19;
                    break;

                  case 16:
                    _context3.prev = 16;
                    _context3.t0 = _context3["catch"](0);
                    console.error('Error opening video camera.', _context3.t0);

                  case 19:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 16]]);
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
                      console.log('param_onload   ' + _this2._video.videoWidth, _this2._video.videoHeight);
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

System.register("chunks:///_virtual/main", ['./AR_Track.ts', './Utils.ts', './AR_Recognition.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null],
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