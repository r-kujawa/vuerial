'use strict';

var vue = require('vue');

function onClickAway ({ event, element, handler }) {
    const isClickAway = !(
        event.target === element
        || element.contains(event.target)
    );

    return isClickAway ? handler(event, element) : null;
}

const clickAwayables = new Map();

function beforeMount(element, { value: handler }) {
    const eventHandler = (event) => onClickAway({ element, event, handler});

    document.addEventListener(
        'click',
        eventHandler,
        true
    );

    clickAwayables.set(
        element,
        eventHandler
    );
}

function unmounted(element) {
    const eventHandler = clickAwayables.get(element);

    document.removeEventListener(
        'click',
        eventHandler
    );

    clickAwayables.delete(element);
}

var clickAway = {
    beforeMount,
    unmounted
};

var script$8 = {
    name: 'VuerialButton',
    props: {
        type: {
            type: String,
            default: 'button'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: Boolean,
    },
    computed: {
        isDisabled() {
            return this.disabled || this.loading;
        },
    },
};

const _hoisted_1$7 = ["type", "disabled"];
const _hoisted_2$7 = /*#__PURE__*/vue.createElementVNode("div", { class: "vuerial-button-style" }, null, -1 /* HOISTED */);
const _hoisted_3$4 = {
  key: 0,
  class: "vuerial-button-spinner"
};
const _hoisted_4 = /*#__PURE__*/vue.createElementVNode("i", { class: "fas fa-spinner" }, null, -1 /* HOISTED */);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = { class: "vuerial-button-text" };

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", {
    type: $props.type,
    class: "vuerial-button",
    disabled: $options.isDisabled
  }, [
    _hoisted_2$7,
    ($props.loading)
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$4, _hoisted_5))
      : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("span", _hoisted_6, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ], 8 /* PROPS */, _hoisted_1$7))
}

script$8.render = render$8;
script$8.__file = "src/js/components/ui/VuerialButton.vue";

var script$7 = {
    name: 'VuerialMenu',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    emits: ['itemClick', 'itemMouseover'],
};

const _hoisted_1$6 = { class: "vuerial-menu" };
const _hoisted_2$6 = ["onMouseover", "onClick"];

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$6, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item) => {
      return (vue.openBlock(), vue.createElementBlock("li", {
        key: item.text,
        class: vue.normalizeClass(["vuerial-menu-item", [item.class]])
      }, [
        vue.createElementVNode("a", vue.mergeProps(item.props, {
          onMouseover: $event => (_ctx.$emit('itemMouseover', item)),
          onClick: $event => (_ctx.$emit('itemClick', item))
        }), vue.toDisplayString(item.text), 17 /* TEXT, FULL_PROPS */, _hoisted_2$6)
      ], 2 /* CLASS */))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$7.render = render$7;
script$7.__file = "src/js/components/ui/VuerialMenu.vue";

var script$6 = {
    name: 'VuerialControl',
    props: {
        label: String,
        name: String,
        error: String,
    },
    computed: {
        hasError() {
            return !!this.error;
        }
    }
};

const _hoisted_1$5 = ["for"];
const _hoisted_2$5 = {
  key: 1,
  class: "help"
};

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["vuerial-control", { 'has-error': $options.hasError }])
  }, [
    ($props.label)
      ? (vue.openBlock(), vue.createElementBlock("label", {
          key: 0,
          class: "vuerial-control-label",
          for: $props.name
        }, vue.toDisplayString($props.label), 9 /* TEXT, PROPS */, _hoisted_1$5))
      : vue.createCommentVNode("v-if", true),
    vue.renderSlot(_ctx.$slots, "default"),
    ($options.hasError)
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$5, vue.toDisplayString($props.error), 1 /* TEXT */))
      : vue.renderSlot(_ctx.$slots, "help", { key: 2 })
  ], 2 /* CLASS */))
}

script$6.render = render$6;
script$6.__file = "src/js/components/form/VuerialControl.vue";

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal || freeSelf || Function('return this')();

var _root = root$1;

var root = _root;

/** Built-in value references. */
var Symbol$3 = root.Symbol;

var _Symbol = Symbol$3;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$1;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;

var Symbol$2 = _Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$1 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$1;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$1;

var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol$1;

var Symbol = _Symbol,
    arrayMap = _arrayMap,
    isArray = isArray_1,
    isSymbol = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString$1) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var toString = toString_1;

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

var uniqueId_1 = uniqueId;

var script$5 = {
    name: 'VuerialInput',
    props: {
        name: String,
        label: String,
        modelValue: [String, Number],
        type: {
            type: String,
            default: 'text'
        },
        autocomplete: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isUnderlined: {
            type: Boolean,
            default: false,
        },
        inputAttributes: {
            type: Object,
            default: () => ({}),
        },
        inputEvents: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            id: uniqueId_1(`${this.name}_`)
        }
    },
    computed: {
        input: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        },
        hasPrefix() {
            return !!this.$slots['prefix'];
        },
        hasSuffix() {
            return !!this.$slots['suffix'];
        }
    },
    methods: {
        focusInput() {
            this.$refs.input.focus();
        },
    },
};

const _hoisted_1$4 = /*#__PURE__*/vue.createElementVNode("div", { class: "vuerial-input-style" }, null, -1 /* HOISTED */);
const _hoisted_2$4 = ["type", "id", "name", "disabled", "readonly", "autocomplete"];
const _hoisted_3$3 = ["for"];

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["vuerial-input", [{ 'is-readonly': $props.readonly || $props.disabled, 'has-prefix': $options.hasPrefix, 'has-suffix': $options.hasSuffix, 'is-underlined': $props.isUnderlined }]])
  }, [
    _hoisted_1$4,
    vue.withDirectives(vue.createElementVNode("input", vue.mergeProps({
      ref: "input",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.input) = $event)),
      type: $props.type,
      id: $data.id,
      name: $props.name,
      placeholder: " ",
      disabled: $props.disabled,
      readonly: $props.readonly,
      autocomplete: $props.autocomplete ? 'on' : 'off',
      onKeydown: _cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers(() => {}, ["prevent"]), ["up","down"]))
    }, $props.inputAttributes, vue.toHandlers($props.inputEvents)), null, 16 /* FULL_PROPS */, _hoisted_2$4), [
      [vue.vModelDynamic, $options.input]
    ]),
    vue.createElementVNode("label", { for: $data.id }, vue.toDisplayString($props.label), 9 /* TEXT, PROPS */, _hoisted_3$3),
    ($options.hasPrefix)
      ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "prefix",
          onClick: _cache[2] || (_cache[2] = (...args) => ($options.focusInput && $options.focusInput(...args)))
        }, [
          vue.renderSlot(_ctx.$slots, "prefix")
        ]))
      : vue.createCommentVNode("v-if", true),
    ($options.hasSuffix)
      ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: "suffix",
          onClick: _cache[3] || (_cache[3] = (...args) => ($options.focusInput && $options.focusInput(...args)))
        }, [
          vue.renderSlot(_ctx.$slots, "suffix")
        ]))
      : vue.createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$5.render = render$5;
script$5.__file = "src/js/components/form/VuerialInput.vue";

var script$4 = {
    name: 'VuerialTextarea',
    props: {
        name: String,
        label: String,
        modelValue: [String, Number],
        rows: [String, Number],
        cols: [String, Number],
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isUnderlined: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            id: uniqueId_1(`${this.name}_`)
        }
    },
    computed: {
        input: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        },
    }
};

const _hoisted_1$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "vuerial-textarea-style" }, null, -1 /* HOISTED */);
const _hoisted_2$3 = ["id", "name", "rows", "cols", "disabled", "readonly"];
const _hoisted_3$2 = ["for"];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["vuerial-textarea", [{ 'is-readonly': $props.readonly || $props.disabled, 'is-underlined': $props.isUnderlined }]])
  }, [
    _hoisted_1$3,
    vue.withDirectives(vue.createElementVNode("textarea", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.input) = $event)),
      id: $data.id,
      name: $props.name,
      placeholder: " ",
      rows: $props.rows,
      cols: $props.cols,
      disabled: $props.disabled,
      readonly: $props.readonly
    }, null, 8 /* PROPS */, _hoisted_2$3), [
      [vue.vModelText, $options.input]
    ]),
    vue.createElementVNode("label", { for: $data.id }, vue.toDisplayString($props.label), 9 /* TEXT, PROPS */, _hoisted_3$2)
  ], 2 /* CLASS */))
}

script$4.render = render$4;
script$4.__file = "src/js/components/form/VuerialTextarea.vue";

var script$3 = {
    name: 'VuerialCheckbox',
    props: {
        name: String,
        text: {
            type: String,
            required: true
        },
        modelValue: Boolean,
        disabled: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'current'
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            id: uniqueId_1(`${this.name}_`)
        }
    },
    computed: {
        checked: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
};

const _hoisted_1$2 = ["id", "name", "disabled"];
const _hoisted_2$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "vuerial-checkbox-style" }, [
  /*#__PURE__*/vue.createElementVNode("i", { class: "fas fa-check" })
], -1 /* HOISTED */);
const _hoisted_3$1 = ["for"];

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["vuerial-checkbox", { 'is-disabled': $props.disabled }])
  }, [
    vue.withDirectives(vue.createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.checked) = $event)),
      type: "checkbox",
      id: $data.id,
      name: $props.name,
      disabled: $props.disabled
    }, null, 8 /* PROPS */, _hoisted_1$2), [
      [vue.vModelCheckbox, $options.checked]
    ]),
    _hoisted_2$2,
    vue.createElementVNode("label", { for: $data.id }, vue.toDisplayString($props.text), 9 /* TEXT, PROPS */, _hoisted_3$1)
  ], 2 /* CLASS */))
}

script$3.render = render$3;
script$3.__file = "src/js/components/form/VuerialCheckbox.vue";

var script$2 = {
    name: 'VuerialRadio',
    props: {
        name: String,
        text: {
            type: String,
            required: true,
        },
        value: {
            type: [String, Number, Boolean],
            required: true,
        },
        modelValue: [String, Number, Boolean],
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            id: uniqueId_1(`${this.name}_`)
        }
    },
    computed: {
        selected: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
};

const _hoisted_1$1 = ["value", "id", "name", "disabled"];
const _hoisted_2$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "vuerial-radio-style" }, [
  /*#__PURE__*/vue.createElementVNode("i", { class: "fas fa-circle" })
], -1 /* HOISTED */);
const _hoisted_3 = ["for"];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["vuerial-radio", { 'is-disabled': $props.disabled }])
  }, [
    vue.withDirectives(vue.createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.selected) = $event)),
      type: "radio",
      value: $props.value,
      id: $data.id,
      name: $props.name,
      disabled: $props.disabled
    }, null, 8 /* PROPS */, _hoisted_1$1), [
      [vue.vModelRadio, $options.selected]
    ]),
    _hoisted_2$1,
    vue.createElementVNode("label", { for: $data.id }, vue.toDisplayString($props.text), 9 /* TEXT, PROPS */, _hoisted_3)
  ], 2 /* CLASS */))
}

script$2.render = render$2;
script$2.__file = "src/js/components/form/VuerialRadio.vue";

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

var script$1 = {
    name: 'VuerialInputMenu',
    props: {
        name: String,
        label: String,
        modelValue: [String, Number],
        readonly: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        options: {
            type: Array,
            required: true,
        },
        isUnderlined: {
            type: Boolean,
            default: false,
        },
        inputAttributes: {
            type: Object,
            default: () => ({}),
        },
        inputEvents: {
            type: Object,
            default: () => ({}),
        },
    },
    emits: ['update:modelValue'],
    beforeMount () {
        window.addEventListener('scroll', this.updateSpaceDirection);
    },
    mounted () {
        this.updateSpaceDirection();
    },
    beforeUnmount () {
        window.removeEventListener('scroll', this.updateSpaceDirection);
    },
    data () {
        return {
            showMenu: false,
            space: {
                direction: 'down',
                distance: 0,
            },
            currentIndex: -1,
            currentValue: this.modelValue ?? '',
        }
     },
     computed: {
        value: {
            get() {
                return this.currentValue;
            },
            set(value) {
                if (this.modelValue.startsWith(value)) {
                    this.currentIndex = -1;
                    this.currentValue = value;
                } else {
                    this.currentIndex = this.items.findIndex(item => item.text.toLowerCase().startsWith(value.toLowerCase()));
                    this.currentValue = this.items[this.currentIndex]?.text ?? value;
                }

                if (this.currentValue !== value || this.currentValue !== this.modelValue) {
                    this.$emit('update:modelValue', value);
                }
            }
        },
        items() {
            let items = this.options.map(option => isObject_1(option) ? { ...option } : { text: toString_1(option), value: option });

            if (this.currentIndex < items.length && this.currentIndex >= 0) {
                items[this.currentIndex].class = 'vuerial-input-menu-item-current';
            }

            return items;
        }
    },
    watch: {
        // TODO: this.currentIndex is not being updated if the source of the change comes from the parent.
        modelValue(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (this.showMenu) {
                    this.$nextTick(() => {
                        this.$refs.inputMenu.querySelector('input').setSelectionRange(this.modelValue.length, this.currentValue.length);
                    });
                } else {
                    this.currentValue = newValue;
                }
            }
        },
        currentIndex(value) {
            if (value >= 0) {
                let scrolled = this.$refs.inputMenu.querySelector('ul.material-menu').scrollTop;

                if (scrolled > this.currentIndex * 32) {
                    this.$refs.inputMenu.querySelector('ul.material-menu').scrollTop = (this.currentIndex) * 32;
                } else if (scrolled + this.space.distance < (this.currentIndex + 1) * 32) {
                    this.$refs.inputMenu.querySelector('ul.material-menu').scrollTop = ((this.currentIndex + 1) * 32) - this.space.distance;
                }
            }
        }
    },
    methods: {
        setValue(item) {
            this.value = item.text;
        },
        updateSpaceDirection() {
            let offset = this.$refs.inputMenu.getBoundingClientRect();
            let up = offset.top - 16;
            let down = window.innerHeight - offset.bottom - 24;

            if (up > down) {
                this.space.direction = 'up';
                this.space.distance = up;
            } else {
                this.space.direction = 'down';
                this.space.distance = down;
            }
        },
        unfocus() {
            this.showMenu = false;

            this.$nextTick(() => {
                this.$refs.inputMenu.querySelector('input')?.blur();
            });
        },
        moveUp() {
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            } else {
                this.currentIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex -1;
            }
        },
        moveDown() {
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            } else {
                this.currentIndex = this.currentIndex >= this.items.length - 1 ? 0 : this.currentIndex + 1;
            }
        },
        onIntentionalBlur() {
            this.currentValue = this.modelValue;

            this.unfocus();
        },
        onClickItem(item) {
            this.setValue(item);

            this.unfocus();
        },
        onEnterDown() {
            if (this.currentIndex >= 0) {
                this.setValue(this.items[this.currentIndex]);
            }

            this.unfocus();
        },
    },
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_input = vue.resolveComponent("v-input");
  const _component_v_menu = vue.resolveComponent("v-menu");
  const _directive_click_away = vue.resolveDirective("click-away");

  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    ref: "inputMenu",
    class: "vuerial-input-menu",
    onFocusin: _cache[1] || (_cache[1] = $event => ($data.showMenu = true))
  }, [
    vue.createVNode(_component_v_input, {
      modelValue: $options.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.value) = $event)),
      name: $props.name,
      label: $props.label,
      readonly: $props.readonly,
      disabled: $props.disabled,
      "is-underlined": "isUnderlined",
      "input-attributes": $props.inputAttributes,
      "input-events": $props.inputEvents,
      onKeydown: [
        vue.withKeys($options.moveUp, ["up"]),
        vue.withKeys($options.moveDown, ["down"]),
        vue.withKeys(vue.withModifiers($options.onEnterDown, ["stop"]), ["enter"]),
        vue.withKeys($options.onIntentionalBlur, ["tab"])
      ]
    }, {
      suffix: vue.withCtx(() => [
        ($options.items.length)
          ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: vue.normalizeClass(["fas transition-transform duration-500", [$data.space.direction === 'up' ? 'fa-caret-up' : 'fa-caret-down', {'transform -rotate-180': $data.showMenu}]])
            }, null, 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue", "name", "label", "readonly", "disabled", "input-attributes", "input-events", "onKeydown"]),
    vue.withDirectives(vue.createElementVNode("div", {
      class: vue.normalizeClass(["vuerial-input-menu-container", {'menu-up': $data.space.direction === 'up'}])
    }, [
      vue.createVNode(_component_v_menu, {
        items: $options.items,
        style: vue.normalizeStyle({maxHeight: $data.space.distance + 'px'}),
        onItemClick: $options.onClickItem
      }, null, 8 /* PROPS */, ["items", "style", "onItemClick"])
    ], 2 /* CLASS */), [
      [vue.vShow, $data.showMenu && $options.items.length]
    ])
  ], 32 /* HYDRATE_EVENTS */)), [
    [_directive_click_away, $options.onIntentionalBlur]
  ])
}

script$1.render = render$1;
script$1.__file = "src/js/components/mixed/VuerialInputMenu.vue";

var script = {
    name: 'VuerialInputSelect',
    props: {
        name: String,
        label: String,
        modelValue: [String, Number],
        readonly: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        options: {
            type: Array,
            required: true,
        },
        isUnderlined: {
            type: Boolean,
            default: false,
        },
        inputAttributes: {
            type: Object,
            default: () => ({}),
        },
        inputEvents: {
            type: Object,
            default: () => ({}),
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            fallback: '',
            inputCount: 0,
        }
    },
    computed: {
        value: {
            get() {
                return this.useFallback ? this.fallback : this.items.find(item => item.value === this.modelValue)?.text ?? '';
            },
            set(value) {
                let selectedItem = this.items.find(item => item.text.toLowerCase() === value.toLowerCase());

                if (selectedItem) {
                    this.$emit('update:modelValue', selectedItem.value);
                } else {
                    this.fallback = value;
                    this.inputCount++;

                    this.$emit('update:modelValue', this.items.length ? '' : this.fallback);
                    
                    setTimeout(() => { 
                        this.inputCount--;
                        if (!this.useFallback) {
                            this.fallback = '';
                        }
                    }, 1500);
                }
            },
        },
        items() {
            return this.options.map(option => isObject_1(option) ? { ...option } : { text: toString_1(option), value: option });
        },
        useFallback() {
            return this.inputCount || !this.items.length;
        },
    }
};

const _hoisted_1 = { class: "vuerial-select" };
const _hoisted_2 = ["name", "value"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_input_menu = vue.resolveComponent("v-input-menu");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("input", {
      type: "hidden",
      name: $props.name,
      value: $props.modelValue
    }, null, 8 /* PROPS */, _hoisted_2),
    vue.createVNode(_component_v_input_menu, {
      modelValue: $options.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.value) = $event)),
      options: $options.items,
      label: $props.label,
      readonly: $props.readonly,
      disabled: $props.disabled,
      "is-underlined": "isUnderlined",
      "input-attributes": $props.inputAttributes,
      "input-events": $props.inputEvents
    }, null, 8 /* PROPS */, ["modelValue", "options", "label", "readonly", "disabled", "input-attributes", "input-events"])
  ]))
}

script.render = render;
script.__file = "src/js/components/mixed/VuerialInputSelect.vue";

var components = {
    Button: script$8,
    Menu: script$7,
    Control: script$6,
    Input: script$5,
    Textarea: script$4,
    Checkbox: script$3,
    Radio: script$2,
    InputMenu: script$1,
    InputSelect: script,
};

const defaultOptions = {
	prefix: 'Vuerial',
};

const install = (Vue, options) => {
	if (install.installed) return;
	install.installed = true;

	options = {...defaultOptions, ...options};

	Vue.directive('click-away', clickAway);

	for (const property in components) {
		Vue.component(options.prefix + property, components[property]);
	}
};

const VuerialComponents = {
	install
};

module.exports = VuerialComponents;
