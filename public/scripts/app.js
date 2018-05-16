'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndecisionApp = require('./components/IndecisionApp');

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ReactDOM.render(<IndecisionApp options={['You Know it','Please no']} />,document.getElementById('app'));
_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, { options: [] }), document.getElementById('app'));

var OldSyntax = function () {
    function OldSyntax() {
        _classCallCheck(this, OldSyntax);

        this.name = "Raymond";
    }

    _createClass(OldSyntax, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return 'Hello ' + this.name;
        }
    }]);

    return OldSyntax;
}();

var newSyntax = function newSyntax() {
    _classCallCheck(this, newSyntax);
};

var oldSyntax = new OldSyntax();

console.log("Greeting calling method from class obejct " + oldSyntax.getGreeting());

var myGreet = oldSyntax.getGreeting();

console.log(myGreet);
