(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactAutocomplete"] = factory(require("react"), require("react-dom"));
	else
		root["ReactAutocomplete"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(5);
	var React = __webpack_require__(7);
	var ReactDOM = __webpack_require__(8);
	var classnames = __webpack_require__(1);

	var Autocomplete = function (_React$Component) {
	  _inherits(Autocomplete, _React$Component);

	  function Autocomplete(props) {
	    _classCallCheck(this, Autocomplete);

	    var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

	    _initialiseProps.call(_this);

	    var searchTerm = props.searchTerm ? props.searchTerm : props.value ? props.value.title : '';

	    _this.state = {
	      results: [],
	      showResults: false,
	      showResultsInProgress: false,
	      searchTerm: searchTerm,
	      focusedValue: null
	    };
	    return _this;
	  }

	  _createClass(Autocomplete, [{
	    key: 'render',
	    value: function render() {
	      var className = classnames(this.props.className, 'react-autocomplete-Autocomplete', this.state.showResults ? 'react-autocomplete-Autocomplete--resultsShown' : undefined);
	      var style = {
	        position: 'relative',
	        outline: 'none'
	      };
	      return React.createElement(
	        'div',
	        {
	          tabIndex: '1',
	          className: className,
	          onFocus: this.onFocus,
	          onBlur: this.onBlur,
	          style: style },
	        React.createElement('input', {
	          ref: 'search',
	          className: 'react-autocomplete-Autocomplete__search',
	          style: { width: '100%' },
	          onClick: this.showAllResults,
	          onChange: this.onQueryChange,
	          onFocus: this.onSearchInputFocus,
	          onBlur: this.onQueryBlur,
	          onKeyDown: this.onQueryKeyDown,
	          value: this.state.searchTerm
	        }),
	        React.createElement(Results, {
	          className: 'react-autocomplete-Autocomplete__results',
	          onSelect: this.onValueChange,
	          onFocus: this.onValueFocus,
	          results: this.state.results,
	          focusedValue: this.state.focusedValue,
	          show: this.state.showResults,
	          renderer: this.props.resultRenderer,
	          label: this.props.label,
	          resultIdentifier: this.props.resultIdentifier
	        })
	      );
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var searchTerm = nextProps.searchTerm ? nextProps.searchTerm : nextProps.value ? nextProps.value.title : '';
	      this.setState({ searchTerm: searchTerm });
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.blurTimer = null;
	    }

	    /**
	      * Show results for a search term value.
	      *
	      * This method doesn't update search term value itself.
	      *
	      * @param {Search} searchTerm
	      */

	  }]);

	  return Autocomplete;
	}(React.Component);

	Autocomplete.displayName = 'Autocomplete';
	Autocomplete.propTypes = {
	  options: PropTypes.any,
	  search: PropTypes.func,
	  resultRenderer: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
	  value: PropTypes.object,
	  onChange: PropTypes.func,
	  onError: PropTypes.func,
	  onFocus: PropTypes.func
	};
	Autocomplete.defaultProps = { search: searchArray };

	var _initialiseProps = function _initialiseProps() {
	  var _this4 = this;

	  this.getResultIdentifier = function (result) {
	    if (_this4.props.resultIdentifier === undefined) {
	      return result.id;
	    } else {
	      return result[_this4.props.resultIdentifier];
	    }
	  };

	  this.showResults = function (searchTerm) {
	    _this4.setState({ showResultsInProgress: true });
	    _this4.props.search(_this4.props.options, searchTerm.trim(), _this4.onSearchComplete);
	  };

	  this.showAllResults = function () {
	    if (!_this4.state.showResultsInProgress && !_this4.state.showResults) {
	      _this4.showResults('');
	    }
	  };

	  this.onValueChange = function (value) {
	    var state = {
	      value: value,
	      showResults: false
	    };

	    if (value) {
	      state.searchTerm = value.title;
	    }

	    _this4.setState(state);

	    if (_this4.props.onChange) {
	      _this4.props.onChange(value);
	    }
	  };

	  this.onSearchComplete = function (err, results) {
	    if (err) {
	      if (_this4.props.onError) {
	        _this4.props.onError(err);
	      } else {
	        throw err;
	      }
	    }

	    _this4.setState({
	      showResultsInProgress: false,
	      showResults: true,
	      results: results
	    });
	  };

	  this.onValueFocus = function (value) {
	    _this4.setState({ focusedValue: value });
	  };

	  this.onQueryChange = function (e) {
	    var searchTerm = e.target.value;
	    _this4.setState({
	      searchTerm: searchTerm,
	      focusedValue: null
	    });
	    _this4.showResults(searchTerm);
	  };

	  this.onFocus = function () {
	    if (_this4.blurTimer) {
	      clearTimeout(_this4.blurTimer);
	      _this4.blurTimer = null;
	    }
	    _this4.refs.search.focus();
	  };

	  this.onSearchInputFocus = function () {
	    if (_this4.props.onFocus) {
	      _this4.props.onFocus();
	    }

	    _this4.showAllResults();
	  };

	  this.onBlur = function () {
	    // wrap in setTimeout so we can catch a click on results
	    _this4.blurTimer = setTimeout(function () {
	      _this4.setState({ showResults: false });
	    }, 100);
	  };

	  this.onQueryKeyDown = function (e) {

	    if (e.key === 'Enter') {
	      e.preventDefault();
	      if (_this4.state.focusedValue) {
	        _this4.onValueChange(_this4.state.focusedValue);
	      }
	    } else if (e.key === 'ArrowUp' && _this4.state.showResults) {
	      e.preventDefault();
	      var prevIdx = Math.max(_this4.focusedValueIndex() - 1, 0);
	      _this4.setState({
	        focusedValue: _this4.state.results[prevIdx]
	      });
	    } else if (e.key === 'ArrowDown') {
	      e.preventDefault();
	      if (_this4.state.showResults) {
	        var nextIdx = Math.min(_this4.focusedValueIndex() + (_this4.state.showResults ? 1 : 0), _this4.state.results.length - 1);
	        _this4.setState({
	          showResults: true,
	          focusedValue: _this4.state.results[nextIdx]
	        });
	      } else {
	        _this4.showAllResults();
	      }
	    }
	  };

	  this.focusedValueIndex = function () {
	    if (!_this4.state.focusedValue) {
	      return -1;
	    }
	    for (var i = 0, len = _this4.state.results.length; i < len; i++) {
	      if (_this4.getResultIdentifier(_this4.state.results[i]) === _this4.getResultIdentifier(_this4.state.focusedValue)) {
	        return i;
	      }
	    }
	    return -1;
	  };
	};

	var Results = function (_React$Component2) {
	  _inherits(Results, _React$Component2);

	  function Results() {
	    var _ref;

	    var _temp, _this2, _ret;

	    _classCallCheck(this, Results);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Results.__proto__ || Object.getPrototypeOf(Results)).call.apply(_ref, [this].concat(args))), _this2), _this2.getResultIdentifier = function (result) {
	      if (_this2.props.resultIdentifier === undefined) {
	        if (!result.id) {
	          throw Error("id property not found on result. You must specify a resultIdentifier and pass as props to autocomplete component");
	        }
	        return result.id;
	      } else {
	        return result[_this2.props.resultIdentifier];
	      }
	    }, _this2.renderResult = function (result) {
	      var focused = _this2.props.focusedValue && _this2.getResultIdentifier(_this2.props.focusedValue) === _this2.getResultIdentifier(result);
	      var Renderer = _this2.props.renderer || Result;
	      return React.createElement(Renderer, {
	        ref: focused ? "focused" : undefined,
	        key: _this2.getResultIdentifier(result),
	        result: result,
	        focused: focused,
	        onMouseEnter: _this2.onMouseEnterResult,
	        onClick: _this2.props.onSelect,
	        label: _this2.props.label });
	    }, _this2.scrollToFocused = function () {
	      var focused = _this2.refs && _this2.refs.focused;
	      if (focused) {
	        var containerNode = ReactDOM.findDOMNode(_this2);
	        var scroll = containerNode.scrollTop;
	        var height = containerNode.offsetHeight;

	        var node = ReactDOM.findDOMNode(focused);
	        var top = node.offsetTop;
	        var bottom = top + node.offsetHeight;

	        // we update ignoreFocus to true if we change the scroll position so
	        // the mouseover event triggered because of that won't have an
	        // effect
	        if (top < scroll) {
	          _this2.ignoreFocus = true;
	          containerNode.scrollTop = top;
	        } else if (bottom - scroll > height) {
	          _this2.ignoreFocus = true;
	          containerNode.scrollTop = bottom - height;
	        }
	      }
	    }, _this2.onMouseEnterResult = function (e, result) {
	      // check if we need to prevent the next onFocus event because it was
	      // probably caused by a mouseover due to scroll position change
	      if (_this2.ignoreFocus) {
	        _this2.ignoreFocus = false;
	      } else {
	        // we need to make sure focused node is visible
	        // for some reason mouse events fire on visible nodes due to
	        // box-shadow
	        var containerNode = ReactDOM.findDOMNode(_this2);
	        var scroll = containerNode.scrollTop;
	        var height = containerNode.offsetHeight;

	        var node = e.target;
	        var top = node.offsetTop;
	        var bottom = top + node.offsetHeight;

	        if (bottom > scroll && top < scroll + height) {
	          _this2.props.onFocus(result);
	        }
	      }
	    }, _temp), _possibleConstructorReturn(_this2, _ret);
	  }

	  _createClass(Results, [{
	    key: 'render',
	    value: function render() {
	      var style = {
	        display: this.props.show ? 'block' : 'none',
	        position: 'absolute',
	        listStyleType: 'none'
	      };
	      var className = this.props.className;


	      return React.createElement(
	        'ul',
	        { style: style, className: className + " react-autocomplete-Results" },
	        this.props.results.map(this.renderResult)
	      );
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.scrollToFocused();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.scrollToFocused();
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.ignoreFocus = false;
	    }
	  }]);

	  return Results;
	}(React.Component);

	var Result = function (_React$Component3) {
	  _inherits(Result, _React$Component3);

	  function Result() {
	    var _ref2;

	    var _temp2, _this3, _ret2;

	    _classCallCheck(this, Result);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = Result.__proto__ || Object.getPrototypeOf(Result)).call.apply(_ref2, [this].concat(args))), _this3), _this3.getLabel = function (result) {
	      if (typeof _this3.props.label === 'function') {
	        return _this3.props.label(result);
	      } else if (typeof _this3.props.label === 'string') {
	        return result[_this3.props.label];
	      }
	    }, _this3.onClick = function () {
	      _this3.props.onClick(_this3.props.result);
	    }, _this3.onMouseEnter = function (e) {
	      if (_this3.props.onMouseEnter) {
	        _this3.props.onMouseEnter(e, _this3.props.result);
	      }
	    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
	  }

	  _createClass(Result, [{
	    key: 'render',
	    value: function render() {
	      var className = classnames({
	        'react-autocomplete-Result': true,
	        'react-autocomplete-Result--active': this.props.focused
	      });

	      return React.createElement(
	        'li',
	        {
	          style: { listStyleType: 'none' },
	          className: className,
	          onClick: this.onClick,
	          onMouseEnter: this.onMouseEnter },
	        React.createElement(
	          'a',
	          null,
	          this.getLabel(this.props.result)
	        )
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return nextProps.result.id !== this.props.result.id || nextProps.focused !== this.props.focused;
	    }
	  }]);

	  return Result;
	}(React.Component);

	/**
	* Search options using specified search term treating options as an array
	* of candidates.
	*
	* @param {Array.<Object>} options
	* @param {String} searchTerm
	* @param {Callback} cb
	*/


	Result.defaultProps = {
	  label: function label(result) {
	    return result.title;
	  }
	};
	function searchArray(options, searchTerm, cb) {
	  if (!options) {
	    return cb(null, []);
	  }

	  searchTerm = new RegExp(searchTerm, 'i');

	  var results = [];

	  for (var i = 0, len = options.length; i < len; i++) {
	    if (searchTerm.exec(options[i].title)) {
	      results.push(options[i]);
	    }
	  }

	  cb(null, results);
	}

	module.exports = Autocomplete;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(2);
	var invariant = __webpack_require__(3);
	var ReactPropTypesSecret = __webpack_require__(6);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(4)();
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })
/******/ ])
});
;