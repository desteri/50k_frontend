"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoSlider = void 0;
exports.button = button;

require("core-js/modules/es.array.concat.js");

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function button() {
  return 'button';
} // console.log(button());


var Slider = /*#__PURE__*/function () {
  function Slider(width, height, count) {
    _classCallCheck(this, Slider);

    this.width = width;
    this.height = height;
    this.count = count;
  }

  _createClass(Slider, [{
    key: "nextSlide",
    value: function nextSlide() {
      console.log("Переключение вперед");
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      console.log("Переключение назад");
    }
  }, {
    key: "whereAmI",
    value: function whereAmI() {
      console.log("\u0428\u0438\u0440\u0438\u043D\u0430: ".concat(this.width, " \u0412\u044B\u0441\u043E\u0442\u0430: ").concat(this.height, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ").concat(this.count));
    }
  }]);

  return Slider;
}(); // const   newSlide = new Slider(450, 300, 4),
//         someSlide = new Slider(367, 123, 7);
// newSlide.whereAmI();
// someSlide.whereAmI();


var AutoSlider = /*#__PURE__*/function (_Slider) {
  _inherits(AutoSlider, _Slider);

  var _super = _createSuper(AutoSlider);

  function AutoSlider(width, height, count, auto) {
    var _this;

    _classCallCheck(this, AutoSlider);

    _this = _super.call(this, width, height, count);
    _this.auto = auto;
    return _this;
  }

  _createClass(AutoSlider, [{
    key: "play",
    value: function play() {
      // console.log(`Ширина: ${this.width} Высота: ${this.height} Количество: ${this.count}`);
      console.log("\u0410\u0432\u0442\u043E\u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u043D\u0438\u0435: ".concat(this.auto));
    }
  }]);

  return AutoSlider;
}(Slider); // const   newSlide = new AutoSlider(450, 300, 4, true);
//         someSlide = new Slider(367, 123, 7);
// newSlide.play();
// newSlide.whereAmI();


exports.AutoSlider = AutoSlider;