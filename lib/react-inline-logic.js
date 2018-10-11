'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var If = exports.If = function If(_ref) {
    var condition = _ref.condition,
        children = _ref.children;
    return children = !condition ? '' : children;
};

var Else = exports.Else = function Else(_ref2) {
    var condition = _ref2.condition,
        children = _ref2.children;
    return children = condition ? '' : children;
};

var For = exports.For = function For(_ref3) {
    var list = _ref3.list,
        onLoop = _ref3.onLoop,
        _ref3$onLoopComplete = _ref3.onLoopComplete,
        onLoopComplete = _ref3$onLoopComplete === undefined ? function () {} : _ref3$onLoopComplete,
        _ref3$onLoopBreakIf = _ref3.onLoopBreakIf,
        onLoopBreakIf = _ref3$onLoopBreakIf === undefined ? function () {
        return false;
    } : _ref3$onLoopBreakIf,
        _ref3$onLoopContinueI = _ref3.onLoopContinueIf,
        onLoopContinueIf = _ref3$onLoopContinueI === undefined ? function () {
        return false;
    } : _ref3$onLoopContinueI,
        _ref3$r = _ref3.r,
        r = _ref3$r === undefined ? [] : _ref3$r,
        _ref3$index = _ref3.index,
        index = _ref3$index === undefined ? -1 : _ref3$index,
        hasLoop = _ref3.hasLoop;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            index++;
            hasLoop = true;
            if (onLoopBreakIf(i, index)) break;
            if (onLoopContinueIf(i, index)) continue;
            r.push(onLoop(i, index));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (hasLoop) {
        onLoopComplete(r, index);
    }
    return r;
};

//alias cases
var IfNot = exports.IfNot = Else;
var Repeat = exports.Repeat = For;
var Loop = exports.Loop = For;
var IsTrue = exports.IsTrue = If;
var IsFalse = exports.IsFalse = Else;