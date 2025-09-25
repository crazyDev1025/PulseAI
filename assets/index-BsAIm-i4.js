(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var Ao =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function _i(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function oS(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Zy = { exports: {} },
  Nl = {},
  ev = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var po = Symbol.for("react.element"),
  aS = Symbol.for("react.portal"),
  lS = Symbol.for("react.fragment"),
  uS = Symbol.for("react.strict_mode"),
  cS = Symbol.for("react.profiler"),
  dS = Symbol.for("react.provider"),
  fS = Symbol.for("react.context"),
  hS = Symbol.for("react.forward_ref"),
  pS = Symbol.for("react.suspense"),
  mS = Symbol.for("react.memo"),
  gS = Symbol.for("react.lazy"),
  pp = Symbol.iterator;
function yS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pp && e[pp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nv = Object.assign,
  rv = {};
function Oi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rv),
    (this.updater = n || tv);
}
Oi.prototype.isReactComponent = {};
Oi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Oi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function iv() {}
iv.prototype = Oi.prototype;
function gf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rv),
    (this.updater = n || tv);
}
var yf = (gf.prototype = new iv());
yf.constructor = gf;
nv(yf, Oi.prototype);
yf.isPureReactComponent = !0;
var mp = Array.isArray,
  sv = Object.prototype.hasOwnProperty,
  vf = { current: null },
  ov = { key: !0, ref: !0, __self: !0, __source: !0 };
function av(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      sv.call(t, r) && !ov.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: po,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: vf.current,
  };
}
function vS(e, t) {
  return {
    $$typeof: po,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === po;
}
function xS(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var gp = /\/+/g;
function yu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? xS("" + e.key)
    : t.toString(36);
}
function sa(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case po:
          case aS:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + yu(o, 0) : r),
      mp(i)
        ? ((n = ""),
          e != null && (n = e.replace(gp, "$&/") + "/"),
          sa(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (xf(i) &&
            (i = vS(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(gp, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), mp(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + yu(s, a);
      o += sa(s, t, n, l, i);
    }
  else if (((l = yS(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + yu(s, a++)), (o += sa(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ro(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    sa(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function wS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ge = { current: null },
  oa = { transition: null },
  bS = {
    ReactCurrentDispatcher: Ge,
    ReactCurrentBatchConfig: oa,
    ReactCurrentOwner: vf,
  };
function lv() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
  map: Ro,
  forEach: function (e, t, n) {
    Ro(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ro(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ro(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = Oi;
Y.Fragment = lS;
Y.Profiler = cS;
Y.PureComponent = gf;
Y.StrictMode = uS;
Y.Suspense = pS;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bS;
Y.act = lv;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = nv({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = vf.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      sv.call(t, l) &&
        !ov.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: po, type: e.type, key: i, ref: s, props: r, _owner: o };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: fS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dS, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = av;
Y.createFactory = function (e) {
  var t = av.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: hS, render: e };
};
Y.isValidElement = xf;
Y.lazy = function (e) {
  return { $$typeof: gS, _payload: { _status: -1, _result: e }, _init: wS };
};
Y.memo = function (e, t) {
  return { $$typeof: mS, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = oa.transition;
  oa.transition = {};
  try {
    e();
  } finally {
    oa.transition = t;
  }
};
Y.unstable_act = lv;
Y.useCallback = function (e, t) {
  return Ge.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return Ge.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return Ge.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return Ge.current.useEffect(e, t);
};
Y.useId = function () {
  return Ge.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return Ge.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return Ge.current.useRef(e);
};
Y.useState = function (e) {
  return Ge.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return Ge.current.useTransition();
};
Y.version = "18.3.1";
ev.exports = Y;
var b = ev.exports;
const ri = _i(b);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var SS = b,
  jS = Symbol.for("react.element"),
  TS = Symbol.for("react.fragment"),
  PS = Object.prototype.hasOwnProperty,
  CS = SS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kS = { key: !0, ref: !0, __self: !0, __source: !0 };
function uv(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) PS.call(t, r) && !kS.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: jS,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: CS.current,
  };
}
Nl.Fragment = TS;
Nl.jsx = uv;
Nl.jsxs = uv;
Zy.exports = Nl;
var u = Zy.exports,
  cv = { exports: {} },
  mt = {},
  dv = { exports: {} },
  fv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, F) {
    var $ = A.length;
    A.push(F);
    e: for (; 0 < $; ) {
      var Z = ($ - 1) >>> 1,
        ue = A[Z];
      if (0 < i(ue, F)) (A[Z] = F), (A[$] = ue), ($ = Z);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var F = A[0],
      $ = A.pop();
    if ($ !== F) {
      A[0] = $;
      e: for (var Z = 0, ue = A.length, Ye = ue >>> 1; Z < Ye; ) {
        var z = 2 * (Z + 1) - 1,
          Te = A[z],
          lt = z + 1,
          Dr = A[lt];
        if (0 > i(Te, $))
          lt < ue && 0 > i(Dr, Te)
            ? ((A[Z] = Dr), (A[lt] = $), (Z = lt))
            : ((A[Z] = Te), (A[z] = $), (Z = z));
        else if (lt < ue && 0 > i(Dr, $)) (A[Z] = Dr), (A[lt] = $), (Z = lt);
        else break e;
      }
    }
    return F;
  }
  function i(A, F) {
    var $ = A.sortIndex - F.sortIndex;
    return $ !== 0 ? $ : A.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    y = !1,
    v = !1,
    x = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(A) {
    for (var F = n(c); F !== null; ) {
      if (F.callback === null) r(c);
      else if (F.startTime <= A)
        r(c), (F.sortIndex = F.expirationTime), t(l, F);
      else break;
      F = n(c);
    }
  }
  function S(A) {
    if (((x = !1), g(A), !v))
      if (n(l) !== null) (v = !0), le(j);
      else {
        var F = n(c);
        F !== null && J(S, F.startTime - A);
      }
  }
  function j(A, F) {
    (v = !1), x && ((x = !1), p(N), (N = -1)), (y = !0);
    var $ = h;
    try {
      for (
        g(F), f = n(l);
        f !== null && (!(f.expirationTime > F) || (A && !L()));

      ) {
        var Z = f.callback;
        if (typeof Z == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var ue = Z(f.expirationTime <= F);
          (F = e.unstable_now()),
            typeof ue == "function" ? (f.callback = ue) : f === n(l) && r(l),
            g(F);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Ye = !0;
      else {
        var z = n(c);
        z !== null && J(S, z.startTime - F), (Ye = !1);
      }
      return Ye;
    } finally {
      (f = null), (h = $), (y = !1);
    }
  }
  var T = !1,
    k = null,
    N = -1,
    P = 5,
    E = -1;
  function L() {
    return !(e.unstable_now() - E < P);
  }
  function D() {
    if (k !== null) {
      var A = e.unstable_now();
      E = A;
      var F = !0;
      try {
        F = k(!0, A);
      } finally {
        F ? I() : ((T = !1), (k = null));
      }
    } else T = !1;
  }
  var I;
  if (typeof m == "function")
    I = function () {
      m(D);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      at = B.port2;
    (B.port1.onmessage = D),
      (I = function () {
        at.postMessage(null);
      });
  } else
    I = function () {
      w(D, 0);
    };
  function le(A) {
    (k = A), T || ((T = !0), I());
  }
  function J(A, F) {
    N = w(function () {
      A(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), le(j));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (A) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = h;
      }
      var $ = h;
      h = F;
      try {
        return A();
      } finally {
        h = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, F) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var $ = h;
      h = A;
      try {
        return F();
      } finally {
        h = $;
      }
    }),
    (e.unstable_scheduleCallback = function (A, F, $) {
      var Z = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? Z + $ : Z))
          : ($ = Z),
        A)
      ) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return (
        (ue = $ + ue),
        (A = {
          id: d++,
          callback: F,
          priorityLevel: A,
          startTime: $,
          expirationTime: ue,
          sortIndex: -1,
        }),
        $ > Z
          ? ((A.sortIndex = $),
            t(c, A),
            n(l) === null &&
              A === n(c) &&
              (x ? (p(N), (N = -1)) : (x = !0), J(S, $ - Z)))
          : ((A.sortIndex = ue), t(l, A), v || y || ((v = !0), le(j))),
        A
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (A) {
      var F = h;
      return function () {
        var $ = h;
        h = F;
        try {
          return A.apply(this, arguments);
        } finally {
          h = $;
        }
      };
    });
})(fv);
dv.exports = fv;
var ES = dv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var NS = b,
  pt = ES;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var hv = new Set(),
  _s = {};
function Nr(e, t) {
  mi(e, t), mi(e + "Capture", t);
}
function mi(e, t) {
  for (_s[e] = t, e = 0; e < t.length; e++) hv.add(t[e]);
}
var hn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Tc = Object.prototype.hasOwnProperty,
  _S =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yp = {},
  vp = {};
function OS(e) {
  return Tc.call(vp, e)
    ? !0
    : Tc.call(yp, e)
    ? !1
    : _S.test(e)
    ? (vp[e] = !0)
    : ((yp[e] = !0), !1);
}
function AS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function RS(e, t, n, r) {
  if (t === null || typeof t > "u" || AS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ke(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wf = /[\-:]([a-z])/g;
function bf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wf, bf);
    Re[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wf, bf);
    Re[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(wf, bf);
  Re[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Sf(e, t, n, r) {
  var i = Re.hasOwnProperty(t) ? Re[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (RS(t, n, i, r) && (n = null),
    r || i === null
      ? OS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var bn = NS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Lo = Symbol.for("react.element"),
  Br = Symbol.for("react.portal"),
  Vr = Symbol.for("react.fragment"),
  jf = Symbol.for("react.strict_mode"),
  Pc = Symbol.for("react.profiler"),
  pv = Symbol.for("react.provider"),
  mv = Symbol.for("react.context"),
  Tf = Symbol.for("react.forward_ref"),
  Cc = Symbol.for("react.suspense"),
  kc = Symbol.for("react.suspense_list"),
  Pf = Symbol.for("react.memo"),
  En = Symbol.for("react.lazy"),
  gv = Symbol.for("react.offscreen"),
  xp = Symbol.iterator;
function Ui(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xp && e[xp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ge = Object.assign,
  vu;
function ss(e) {
  if (vu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      vu = (t && t[1]) || "";
    }
  return (
    `
` +
    vu +
    e
  );
}
var xu = !1;
function wu(e, t) {
  if (!e || xu) return "";
  xu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (xu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ss(e) : "";
}
function LS(e) {
  switch (e.tag) {
    case 5:
      return ss(e.type);
    case 16:
      return ss("Lazy");
    case 13:
      return ss("Suspense");
    case 19:
      return ss("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = wu(e.type, !1)), e;
    case 11:
      return (e = wu(e.type.render, !1)), e;
    case 1:
      return (e = wu(e.type, !0)), e;
    default:
      return "";
  }
}
function Ec(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vr:
      return "Fragment";
    case Br:
      return "Portal";
    case Pc:
      return "Profiler";
    case jf:
      return "StrictMode";
    case Cc:
      return "Suspense";
    case kc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case mv:
        return (e.displayName || "Context") + ".Consumer";
      case pv:
        return (e._context.displayName || "Context") + ".Provider";
      case Tf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Pf:
        return (
          (t = e.displayName || null), t !== null ? t : Ec(e.type) || "Memo"
        );
      case En:
        (t = e._payload), (e = e._init);
        try {
          return Ec(e(t));
        } catch {}
    }
  return null;
}
function MS(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ec(t);
    case 8:
      return t === jf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Gn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function yv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function DS(e) {
  var t = yv(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Mo(e) {
  e._valueTracker || (e._valueTracker = DS(e));
}
function vv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = yv(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Oa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Nc(e, t) {
  var n = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Gn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xv(e, t) {
  (t = t.checked), t != null && Sf(e, "checked", t, !1);
}
function _c(e, t) {
  xv(e, t);
  var n = Gn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Oc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Oc(e, t.type, Gn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function bp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Oc(e, t, n) {
  (t !== "number" || Oa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var os = Array.isArray;
function ii(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ac(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Sp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (os(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Gn(n) };
}
function wv(e, t) {
  var n = Gn(t.value),
    r = Gn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function jp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Rc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? bv(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Do,
  Sv = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Do = Do || document.createElement("div"),
          Do.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Do.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Os(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ds = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  IS = ["Webkit", "ms", "Moz", "O"];
Object.keys(ds).forEach(function (e) {
  IS.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ds[t] = ds[e]);
  });
});
function jv(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ds.hasOwnProperty(e) && ds[e])
    ? ("" + t).trim()
    : t + "px";
}
function Tv(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = jv(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var FS = ge(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Lc(e, t) {
  if (t) {
    if (FS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Mc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Dc = null;
function Cf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ic = null,
  si = null,
  oi = null;
function Tp(e) {
  if ((e = yo(e))) {
    if (typeof Ic != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Ll(t)), Ic(e.stateNode, e.type, t));
  }
}
function Pv(e) {
  si ? (oi ? oi.push(e) : (oi = [e])) : (si = e);
}
function Cv() {
  if (si) {
    var e = si,
      t = oi;
    if (((oi = si = null), Tp(e), t)) for (e = 0; e < t.length; e++) Tp(t[e]);
  }
}
function kv(e, t) {
  return e(t);
}
function Ev() {}
var bu = !1;
function Nv(e, t, n) {
  if (bu) return e(t, n);
  bu = !0;
  try {
    return kv(e, t, n);
  } finally {
    (bu = !1), (si !== null || oi !== null) && (Ev(), Cv());
  }
}
function As(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ll(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Fc = !1;
if (hn)
  try {
    var Hi = {};
    Object.defineProperty(Hi, "passive", {
      get: function () {
        Fc = !0;
      },
    }),
      window.addEventListener("test", Hi, Hi),
      window.removeEventListener("test", Hi, Hi);
  } catch {
    Fc = !1;
  }
function zS(e, t, n, r, i, s, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var fs = !1,
  Aa = null,
  Ra = !1,
  zc = null,
  BS = {
    onError: function (e) {
      (fs = !0), (Aa = e);
    },
  };
function VS(e, t, n, r, i, s, o, a, l) {
  (fs = !1), (Aa = null), zS.apply(BS, arguments);
}
function $S(e, t, n, r, i, s, o, a, l) {
  if ((VS.apply(this, arguments), fs)) {
    if (fs) {
      var c = Aa;
      (fs = !1), (Aa = null);
    } else throw Error(_(198));
    Ra || ((Ra = !0), (zc = c));
  }
}
function _r(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _v(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Pp(e) {
  if (_r(e) !== e) throw Error(_(188));
}
function US(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _r(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Pp(i), e;
        if (s === r) return Pp(i), t;
        s = s.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Ov(e) {
  return (e = US(e)), e !== null ? Av(e) : null;
}
function Av(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Av(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rv = pt.unstable_scheduleCallback,
  Cp = pt.unstable_cancelCallback,
  HS = pt.unstable_shouldYield,
  WS = pt.unstable_requestPaint,
  Se = pt.unstable_now,
  qS = pt.unstable_getCurrentPriorityLevel,
  kf = pt.unstable_ImmediatePriority,
  Lv = pt.unstable_UserBlockingPriority,
  La = pt.unstable_NormalPriority,
  GS = pt.unstable_LowPriority,
  Mv = pt.unstable_IdlePriority,
  _l = null,
  Kt = null;
function KS(e) {
  if (Kt && typeof Kt.onCommitFiberRoot == "function")
    try {
      Kt.onCommitFiberRoot(_l, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var It = Math.clz32 ? Math.clz32 : XS,
  YS = Math.log,
  QS = Math.LN2;
function XS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((YS(e) / QS) | 0)) | 0;
}
var Io = 64,
  Fo = 4194304;
function as(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ma(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = as(a)) : ((s &= o), s !== 0 && (r = as(s)));
  } else (o = n & ~i), o !== 0 ? (r = as(o)) : s !== 0 && (r = as(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - It(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function JS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ZS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - It(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = JS(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function Bc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Dv() {
  var e = Io;
  return (Io <<= 1), !(Io & 4194240) && (Io = 64), e;
}
function Su(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - It(t)),
    (e[t] = n);
}
function e2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - It(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Ef(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - It(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ee = 0;
function Iv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fv,
  Nf,
  zv,
  Bv,
  Vv,
  Vc = !1,
  zo = [],
  Fn = null,
  zn = null,
  Bn = null,
  Rs = new Map(),
  Ls = new Map(),
  On = [],
  t2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function kp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Fn = null;
      break;
    case "dragenter":
    case "dragleave":
      zn = null;
      break;
    case "mouseover":
    case "mouseout":
      Bn = null;
      break;
    case "pointerover":
    case "pointerout":
      Rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ls.delete(t.pointerId);
  }
}
function Wi(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = yo(t)), t !== null && Nf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function n2(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Fn = Wi(Fn, e, t, n, r, i)), !0;
    case "dragenter":
      return (zn = Wi(zn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Bn = Wi(Bn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Rs.set(s, Wi(Rs.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Ls.set(s, Wi(Ls.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function $v(e) {
  var t = lr(e.target);
  if (t !== null) {
    var n = _r(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _v(n)), t !== null)) {
          (e.blockedOn = t),
            Vv(e.priority, function () {
              zv(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function aa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $c(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Dc = r), n.target.dispatchEvent(r), (Dc = null);
    } else return (t = yo(n)), t !== null && Nf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ep(e, t, n) {
  aa(e) && n.delete(t);
}
function r2() {
  (Vc = !1),
    Fn !== null && aa(Fn) && (Fn = null),
    zn !== null && aa(zn) && (zn = null),
    Bn !== null && aa(Bn) && (Bn = null),
    Rs.forEach(Ep),
    Ls.forEach(Ep);
}
function qi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Vc ||
      ((Vc = !0),
      pt.unstable_scheduleCallback(pt.unstable_NormalPriority, r2)));
}
function Ms(e) {
  function t(i) {
    return qi(i, e);
  }
  if (0 < zo.length) {
    qi(zo[0], e);
    for (var n = 1; n < zo.length; n++) {
      var r = zo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Fn !== null && qi(Fn, e),
      zn !== null && qi(zn, e),
      Bn !== null && qi(Bn, e),
      Rs.forEach(t),
      Ls.forEach(t),
      n = 0;
    n < On.length;
    n++
  )
    (r = On[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < On.length && ((n = On[0]), n.blockedOn === null); )
    $v(n), n.blockedOn === null && On.shift();
}
var ai = bn.ReactCurrentBatchConfig,
  Da = !0;
function i2(e, t, n, r) {
  var i = ee,
    s = ai.transition;
  ai.transition = null;
  try {
    (ee = 1), _f(e, t, n, r);
  } finally {
    (ee = i), (ai.transition = s);
  }
}
function s2(e, t, n, r) {
  var i = ee,
    s = ai.transition;
  ai.transition = null;
  try {
    (ee = 4), _f(e, t, n, r);
  } finally {
    (ee = i), (ai.transition = s);
  }
}
function _f(e, t, n, r) {
  if (Da) {
    var i = $c(e, t, n, r);
    if (i === null) Au(e, t, r, Ia, n), kp(e, r);
    else if (n2(i, e, t, n, r)) r.stopPropagation();
    else if ((kp(e, r), t & 4 && -1 < t2.indexOf(e))) {
      for (; i !== null; ) {
        var s = yo(i);
        if (
          (s !== null && Fv(s),
          (s = $c(e, t, n, r)),
          s === null && Au(e, t, r, Ia, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Au(e, t, r, null, n);
  }
}
var Ia = null;
function $c(e, t, n, r) {
  if (((Ia = null), (e = Cf(r)), (e = lr(e)), e !== null))
    if (((t = _r(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _v(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ia = e), null;
}
function Uv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (qS()) {
        case kf:
          return 1;
        case Lv:
          return 4;
        case La:
        case GS:
          return 16;
        case Mv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ln = null,
  Of = null,
  la = null;
function Hv() {
  if (la) return la;
  var e,
    t = Of,
    n = t.length,
    r,
    i = "value" in Ln ? Ln.value : Ln.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (la = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ua(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bo() {
  return !0;
}
function Np() {
  return !1;
}
function gt(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Bo
        : Np),
      (this.isPropagationStopped = Np),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Bo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bo));
      },
      persist: function () {},
      isPersistent: Bo,
    }),
    t
  );
}
var Ai = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Af = gt(Ai),
  go = ge({}, Ai, { view: 0, detail: 0 }),
  o2 = gt(go),
  ju,
  Tu,
  Gi,
  Ol = ge({}, go, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Rf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Gi &&
            (Gi && e.type === "mousemove"
              ? ((ju = e.screenX - Gi.screenX), (Tu = e.screenY - Gi.screenY))
              : (Tu = ju = 0),
            (Gi = e)),
          ju);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tu;
    },
  }),
  _p = gt(Ol),
  a2 = ge({}, Ol, { dataTransfer: 0 }),
  l2 = gt(a2),
  u2 = ge({}, go, { relatedTarget: 0 }),
  Pu = gt(u2),
  c2 = ge({}, Ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  d2 = gt(c2),
  f2 = ge({}, Ai, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  h2 = gt(f2),
  p2 = ge({}, Ai, { data: 0 }),
  Op = gt(p2),
  m2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  g2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  y2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function v2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = y2[e]) ? !!t[e] : !1;
}
function Rf() {
  return v2;
}
var x2 = ge({}, go, {
    key: function (e) {
      if (e.key) {
        var t = m2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ua(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? g2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rf,
    charCode: function (e) {
      return e.type === "keypress" ? ua(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ua(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  w2 = gt(x2),
  b2 = ge({}, Ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ap = gt(b2),
  S2 = ge({}, go, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rf,
  }),
  j2 = gt(S2),
  T2 = ge({}, Ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  P2 = gt(T2),
  C2 = ge({}, Ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  k2 = gt(C2),
  E2 = [9, 13, 27, 32],
  Lf = hn && "CompositionEvent" in window,
  hs = null;
hn && "documentMode" in document && (hs = document.documentMode);
var N2 = hn && "TextEvent" in window && !hs,
  Wv = hn && (!Lf || (hs && 8 < hs && 11 >= hs)),
  Rp = " ",
  Lp = !1;
function qv(e, t) {
  switch (e) {
    case "keyup":
      return E2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Gv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $r = !1;
function _2(e, t) {
  switch (e) {
    case "compositionend":
      return Gv(t);
    case "keypress":
      return t.which !== 32 ? null : ((Lp = !0), Rp);
    case "textInput":
      return (e = t.data), e === Rp && Lp ? null : e;
    default:
      return null;
  }
}
function O2(e, t) {
  if ($r)
    return e === "compositionend" || (!Lf && qv(e, t))
      ? ((e = Hv()), (la = Of = Ln = null), ($r = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Wv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var A2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Mp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!A2[e.type] : t === "textarea";
}
function Kv(e, t, n, r) {
  Pv(r),
    (t = Fa(t, "onChange")),
    0 < t.length &&
      ((n = new Af("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ps = null,
  Ds = null;
function R2(e) {
  s0(e, 0);
}
function Al(e) {
  var t = Wr(e);
  if (vv(t)) return e;
}
function L2(e, t) {
  if (e === "change") return t;
}
var Yv = !1;
if (hn) {
  var Cu;
  if (hn) {
    var ku = "oninput" in document;
    if (!ku) {
      var Dp = document.createElement("div");
      Dp.setAttribute("oninput", "return;"),
        (ku = typeof Dp.oninput == "function");
    }
    Cu = ku;
  } else Cu = !1;
  Yv = Cu && (!document.documentMode || 9 < document.documentMode);
}
function Ip() {
  ps && (ps.detachEvent("onpropertychange", Qv), (Ds = ps = null));
}
function Qv(e) {
  if (e.propertyName === "value" && Al(Ds)) {
    var t = [];
    Kv(t, Ds, e, Cf(e)), Nv(R2, t);
  }
}
function M2(e, t, n) {
  e === "focusin"
    ? (Ip(), (ps = t), (Ds = n), ps.attachEvent("onpropertychange", Qv))
    : e === "focusout" && Ip();
}
function D2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Al(Ds);
}
function I2(e, t) {
  if (e === "click") return Al(t);
}
function F2(e, t) {
  if (e === "input" || e === "change") return Al(t);
}
function z2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var zt = typeof Object.is == "function" ? Object.is : z2;
function Is(e, t) {
  if (zt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Tc.call(t, i) || !zt(e[i], t[i])) return !1;
  }
  return !0;
}
function Fp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zp(e, t) {
  var n = Fp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Fp(n);
  }
}
function Xv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jv() {
  for (var e = window, t = Oa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Oa(e.document);
  }
  return t;
}
function Mf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function B2(e) {
  var t = Jv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Mf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = zp(n, s));
        var o = zp(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var V2 = hn && "documentMode" in document && 11 >= document.documentMode,
  Ur = null,
  Uc = null,
  ms = null,
  Hc = !1;
function Bp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hc ||
    Ur == null ||
    Ur !== Oa(r) ||
    ((r = Ur),
    "selectionStart" in r && Mf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ms && Is(ms, r)) ||
      ((ms = r),
      (r = Fa(Uc, "onSelect")),
      0 < r.length &&
        ((t = new Af("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ur))));
}
function Vo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Hr = {
    animationend: Vo("Animation", "AnimationEnd"),
    animationiteration: Vo("Animation", "AnimationIteration"),
    animationstart: Vo("Animation", "AnimationStart"),
    transitionend: Vo("Transition", "TransitionEnd"),
  },
  Eu = {},
  Zv = {};
hn &&
  ((Zv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Hr.animationend.animation,
    delete Hr.animationiteration.animation,
    delete Hr.animationstart.animation),
  "TransitionEvent" in window || delete Hr.transitionend.transition);
function Rl(e) {
  if (Eu[e]) return Eu[e];
  if (!Hr[e]) return e;
  var t = Hr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zv) return (Eu[e] = t[n]);
  return e;
}
var e0 = Rl("animationend"),
  t0 = Rl("animationiteration"),
  n0 = Rl("animationstart"),
  r0 = Rl("transitionend"),
  i0 = new Map(),
  Vp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Xn(e, t) {
  i0.set(e, t), Nr(t, [e]);
}
for (var Nu = 0; Nu < Vp.length; Nu++) {
  var _u = Vp[Nu],
    $2 = _u.toLowerCase(),
    U2 = _u[0].toUpperCase() + _u.slice(1);
  Xn($2, "on" + U2);
}
Xn(e0, "onAnimationEnd");
Xn(t0, "onAnimationIteration");
Xn(n0, "onAnimationStart");
Xn("dblclick", "onDoubleClick");
Xn("focusin", "onFocus");
Xn("focusout", "onBlur");
Xn(r0, "onTransitionEnd");
mi("onMouseEnter", ["mouseout", "mouseover"]);
mi("onMouseLeave", ["mouseout", "mouseover"]);
mi("onPointerEnter", ["pointerout", "pointerover"]);
mi("onPointerLeave", ["pointerout", "pointerover"]);
Nr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Nr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Nr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Nr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ls =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  H2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));
function $p(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $S(r, t, void 0, e), (e.currentTarget = null);
}
function s0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          $p(i, a, c), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          $p(i, a, c), (s = l);
        }
    }
  }
  if (Ra) throw ((e = zc), (Ra = !1), (zc = null), e);
}
function ne(e, t) {
  var n = t[Yc];
  n === void 0 && (n = t[Yc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (o0(t, e, 2, !1), n.add(r));
}
function Ou(e, t, n) {
  var r = 0;
  t && (r |= 4), o0(n, e, r, t);
}
var $o = "_reactListening" + Math.random().toString(36).slice(2);
function Fs(e) {
  if (!e[$o]) {
    (e[$o] = !0),
      hv.forEach(function (n) {
        n !== "selectionchange" && (H2.has(n) || Ou(n, !1, e), Ou(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$o] || ((t[$o] = !0), Ou("selectionchange", !1, t));
  }
}
function o0(e, t, n, r) {
  switch (Uv(t)) {
    case 1:
      var i = i2;
      break;
    case 4:
      i = s2;
      break;
    default:
      i = _f;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Fc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Au(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = lr(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Nv(function () {
    var c = s,
      d = Cf(n),
      f = [];
    e: {
      var h = i0.get(e);
      if (h !== void 0) {
        var y = Af,
          v = e;
        switch (e) {
          case "keypress":
            if (ua(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = w2;
            break;
          case "focusin":
            (v = "focus"), (y = Pu);
            break;
          case "focusout":
            (v = "blur"), (y = Pu);
            break;
          case "beforeblur":
          case "afterblur":
            y = Pu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = _p;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = l2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = j2;
            break;
          case e0:
          case t0:
          case n0:
            y = d2;
            break;
          case r0:
            y = P2;
            break;
          case "scroll":
            y = o2;
            break;
          case "wheel":
            y = k2;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = h2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ap;
        }
        var x = (t & 4) !== 0,
          w = !x && e === "scroll",
          p = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var m = c, g; m !== null; ) {
          g = m;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              p !== null && ((S = As(m, p)), S != null && x.push(zs(m, S, g)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < x.length &&
          ((h = new y(h, v, null, n, d)), f.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Dc &&
            (v = n.relatedTarget || n.fromElement) &&
            (lr(v) || v[pn]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = c),
              (v = v ? lr(v) : null),
              v !== null &&
                ((w = _r(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = c)),
          y !== v)
        ) {
          if (
            ((x = _p),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Ap),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (w = y == null ? h : Wr(y)),
            (g = v == null ? h : Wr(v)),
            (h = new x(S, m + "leave", y, n, d)),
            (h.target = w),
            (h.relatedTarget = g),
            (S = null),
            lr(d) === c &&
              ((x = new x(p, m + "enter", v, n, d)),
              (x.target = g),
              (x.relatedTarget = w),
              (S = x)),
            (w = S),
            y && v)
          )
            t: {
              for (x = y, p = v, m = 0, g = x; g; g = Ir(g)) m++;
              for (g = 0, S = p; S; S = Ir(S)) g++;
              for (; 0 < m - g; ) (x = Ir(x)), m--;
              for (; 0 < g - m; ) (p = Ir(p)), g--;
              for (; m--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t;
                (x = Ir(x)), (p = Ir(p));
              }
              x = null;
            }
          else x = null;
          y !== null && Up(f, h, y, x, !1),
            v !== null && w !== null && Up(f, w, v, x, !0);
        }
      }
      e: {
        if (
          ((h = c ? Wr(c) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var j = L2;
        else if (Mp(h))
          if (Yv) j = F2;
          else {
            j = D2;
            var T = M2;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (j = I2);
        if (j && (j = j(e, c))) {
          Kv(f, j, n, d);
          break e;
        }
        T && T(e, h, c),
          e === "focusout" &&
            (T = h._wrapperState) &&
            T.controlled &&
            h.type === "number" &&
            Oc(h, "number", h.value);
      }
      switch (((T = c ? Wr(c) : window), e)) {
        case "focusin":
          (Mp(T) || T.contentEditable === "true") &&
            ((Ur = T), (Uc = c), (ms = null));
          break;
        case "focusout":
          ms = Uc = Ur = null;
          break;
        case "mousedown":
          Hc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Hc = !1), Bp(f, n, d);
          break;
        case "selectionchange":
          if (V2) break;
        case "keydown":
        case "keyup":
          Bp(f, n, d);
      }
      var k;
      if (Lf)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        $r
          ? qv(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Wv &&
          n.locale !== "ko" &&
          ($r || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && $r && (k = Hv())
            : ((Ln = d),
              (Of = "value" in Ln ? Ln.value : Ln.textContent),
              ($r = !0))),
        (T = Fa(c, N)),
        0 < T.length &&
          ((N = new Op(N, e, null, n, d)),
          f.push({ event: N, listeners: T }),
          k ? (N.data = k) : ((k = Gv(n)), k !== null && (N.data = k)))),
        (k = N2 ? _2(e, n) : O2(e, n)) &&
          ((c = Fa(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Op("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = k)));
    }
    s0(f, t);
  });
}
function zs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = As(e, n)),
      s != null && r.unshift(zs(e, s, i)),
      (s = As(e, t)),
      s != null && r.push(zs(e, s, i))),
      (e = e.return);
  }
  return r;
}
function Ir(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Up(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = As(n, s)), l != null && o.unshift(zs(n, l, a)))
        : i || ((l = As(n, s)), l != null && o.push(zs(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var W2 = /\r\n?/g,
  q2 = /\u0000|\uFFFD/g;
function Hp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      W2,
      `
`
    )
    .replace(q2, "");
}
function Uo(e, t, n) {
  if (((t = Hp(t)), Hp(e) !== t && n)) throw Error(_(425));
}
function za() {}
var Wc = null,
  qc = null;
function Gc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Kc = typeof setTimeout == "function" ? setTimeout : void 0,
  G2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wp = typeof Promise == "function" ? Promise : void 0,
  K2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wp < "u"
      ? function (e) {
          return Wp.resolve(null).then(e).catch(Y2);
        }
      : Kc;
function Y2(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ru(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ms(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ms(t);
}
function Vn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ri = Math.random().toString(36).slice(2),
  Gt = "__reactFiber$" + Ri,
  Bs = "__reactProps$" + Ri,
  pn = "__reactContainer$" + Ri,
  Yc = "__reactEvents$" + Ri,
  Q2 = "__reactListeners$" + Ri,
  X2 = "__reactHandles$" + Ri;
function lr(e) {
  var t = e[Gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[pn] || n[Gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qp(e); e !== null; ) {
          if ((n = e[Gt])) return n;
          e = qp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function yo(e) {
  return (
    (e = e[Gt] || e[pn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Ll(e) {
  return e[Bs] || null;
}
var Qc = [],
  qr = -1;
function Jn(e) {
  return { current: e };
}
function re(e) {
  0 > qr || ((e.current = Qc[qr]), (Qc[qr] = null), qr--);
}
function te(e, t) {
  qr++, (Qc[qr] = e.current), (e.current = t);
}
var Kn = {},
  Ve = Jn(Kn),
  rt = Jn(!1),
  br = Kn;
function gi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function it(e) {
  return (e = e.childContextTypes), e != null;
}
function Ba() {
  re(rt), re(Ve);
}
function Gp(e, t, n) {
  if (Ve.current !== Kn) throw Error(_(168));
  te(Ve, t), te(rt, n);
}
function a0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(_(108, MS(e) || "Unknown", i));
  return ge({}, n, r);
}
function Va(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kn),
    (br = Ve.current),
    te(Ve, e),
    te(rt, rt.current),
    !0
  );
}
function Kp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = a0(e, t, br)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(rt),
      re(Ve),
      te(Ve, e))
    : re(rt),
    te(rt, n);
}
var ln = null,
  Ml = !1,
  Lu = !1;
function l0(e) {
  ln === null ? (ln = [e]) : ln.push(e);
}
function J2(e) {
  (Ml = !0), l0(e);
}
function Zn() {
  if (!Lu && ln !== null) {
    Lu = !0;
    var e = 0,
      t = ee;
    try {
      var n = ln;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ln = null), (Ml = !1);
    } catch (i) {
      throw (ln !== null && (ln = ln.slice(e + 1)), Rv(kf, Zn), i);
    } finally {
      (ee = t), (Lu = !1);
    }
  }
  return null;
}
var Gr = [],
  Kr = 0,
  $a = null,
  Ua = 0,
  xt = [],
  wt = 0,
  Sr = null,
  un = 1,
  cn = "";
function ir(e, t) {
  (Gr[Kr++] = Ua), (Gr[Kr++] = $a), ($a = e), (Ua = t);
}
function u0(e, t, n) {
  (xt[wt++] = un), (xt[wt++] = cn), (xt[wt++] = Sr), (Sr = e);
  var r = un;
  e = cn;
  var i = 32 - It(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - It(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (un = (1 << (32 - It(t) + i)) | (n << i) | r),
      (cn = s + e);
  } else (un = (1 << s) | (n << i) | r), (cn = e);
}
function Df(e) {
  e.return !== null && (ir(e, 1), u0(e, 1, 0));
}
function If(e) {
  for (; e === $a; )
    ($a = Gr[--Kr]), (Gr[Kr] = null), (Ua = Gr[--Kr]), (Gr[Kr] = null);
  for (; e === Sr; )
    (Sr = xt[--wt]),
      (xt[wt] = null),
      (cn = xt[--wt]),
      (xt[wt] = null),
      (un = xt[--wt]),
      (xt[wt] = null);
}
var ft = null,
  ct = null,
  ae = !1,
  Rt = null;
function c0(e, t) {
  var n = Tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ft = e), (ct = Vn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Sr !== null ? { id: un, overflow: cn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Xc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jc(e) {
  if (ae) {
    var t = ct;
    if (t) {
      var n = t;
      if (!Yp(e, t)) {
        if (Xc(e)) throw Error(_(418));
        t = Vn(n.nextSibling);
        var r = ft;
        t && Yp(e, t)
          ? c0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (ft = e));
      }
    } else {
      if (Xc(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (ft = e);
    }
  }
}
function Qp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ft = e;
}
function Ho(e) {
  if (e !== ft) return !1;
  if (!ae) return Qp(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Gc(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (Xc(e)) throw (d0(), Error(_(418)));
    for (; t; ) c0(e, t), (t = Vn(t.nextSibling));
  }
  if ((Qp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ct = Vn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else ct = ft ? Vn(e.stateNode.nextSibling) : null;
  return !0;
}
function d0() {
  for (var e = ct; e; ) e = Vn(e.nextSibling);
}
function yi() {
  (ct = ft = null), (ae = !1);
}
function Ff(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
var Z2 = bn.ReactCurrentBatchConfig;
function Ki(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Wo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Xp(e) {
  var t = e._init;
  return t(e._payload);
}
function f0(e) {
  function t(p, m) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [m]), (p.flags |= 16)) : g.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function i(p, m) {
    return (p = Wn(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, m, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < m ? ((p.flags |= 2), m) : g)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, m, g, S) {
    return m === null || m.tag !== 6
      ? ((m = Vu(g, p.mode, S)), (m.return = p), m)
      : ((m = i(m, g)), (m.return = p), m);
  }
  function l(p, m, g, S) {
    var j = g.type;
    return j === Vr
      ? d(p, m, g.props.children, S, g.key)
      : m !== null &&
        (m.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === En &&
            Xp(j) === m.type))
      ? ((S = i(m, g.props)), (S.ref = Ki(p, m, g)), (S.return = p), S)
      : ((S = ga(g.type, g.key, g.props, null, p.mode, S)),
        (S.ref = Ki(p, m, g)),
        (S.return = p),
        S);
  }
  function c(p, m, g, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== g.containerInfo ||
      m.stateNode.implementation !== g.implementation
      ? ((m = $u(g, p.mode, S)), (m.return = p), m)
      : ((m = i(m, g.children || [])), (m.return = p), m);
  }
  function d(p, m, g, S, j) {
    return m === null || m.tag !== 7
      ? ((m = gr(g, p.mode, S, j)), (m.return = p), m)
      : ((m = i(m, g)), (m.return = p), m);
  }
  function f(p, m, g) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Vu("" + m, p.mode, g)), (m.return = p), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Lo:
          return (
            (g = ga(m.type, m.key, m.props, null, p.mode, g)),
            (g.ref = Ki(p, null, m)),
            (g.return = p),
            g
          );
        case Br:
          return (m = $u(m, p.mode, g)), (m.return = p), m;
        case En:
          var S = m._init;
          return f(p, S(m._payload), g);
      }
      if (os(m) || Ui(m))
        return (m = gr(m, p.mode, g, null)), (m.return = p), m;
      Wo(p, m);
    }
    return null;
  }
  function h(p, m, g, S) {
    var j = m !== null ? m.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return j !== null ? null : a(p, m, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Lo:
          return g.key === j ? l(p, m, g, S) : null;
        case Br:
          return g.key === j ? c(p, m, g, S) : null;
        case En:
          return (j = g._init), h(p, m, j(g._payload), S);
      }
      if (os(g) || Ui(g)) return j !== null ? null : d(p, m, g, S, null);
      Wo(p, g);
    }
    return null;
  }
  function y(p, m, g, S, j) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(g) || null), a(m, p, "" + S, j);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Lo:
          return (p = p.get(S.key === null ? g : S.key) || null), l(m, p, S, j);
        case Br:
          return (p = p.get(S.key === null ? g : S.key) || null), c(m, p, S, j);
        case En:
          var T = S._init;
          return y(p, m, g, T(S._payload), j);
      }
      if (os(S) || Ui(S)) return (p = p.get(g) || null), d(m, p, S, j, null);
      Wo(m, S);
    }
    return null;
  }
  function v(p, m, g, S) {
    for (
      var j = null, T = null, k = m, N = (m = 0), P = null;
      k !== null && N < g.length;
      N++
    ) {
      k.index > N ? ((P = k), (k = null)) : (P = k.sibling);
      var E = h(p, k, g[N], S);
      if (E === null) {
        k === null && (k = P);
        break;
      }
      e && k && E.alternate === null && t(p, k),
        (m = s(E, m, N)),
        T === null ? (j = E) : (T.sibling = E),
        (T = E),
        (k = P);
    }
    if (N === g.length) return n(p, k), ae && ir(p, N), j;
    if (k === null) {
      for (; N < g.length; N++)
        (k = f(p, g[N], S)),
          k !== null &&
            ((m = s(k, m, N)), T === null ? (j = k) : (T.sibling = k), (T = k));
      return ae && ir(p, N), j;
    }
    for (k = r(p, k); N < g.length; N++)
      (P = y(k, p, N, g[N], S)),
        P !== null &&
          (e && P.alternate !== null && k.delete(P.key === null ? N : P.key),
          (m = s(P, m, N)),
          T === null ? (j = P) : (T.sibling = P),
          (T = P));
    return (
      e &&
        k.forEach(function (L) {
          return t(p, L);
        }),
      ae && ir(p, N),
      j
    );
  }
  function x(p, m, g, S) {
    var j = Ui(g);
    if (typeof j != "function") throw Error(_(150));
    if (((g = j.call(g)), g == null)) throw Error(_(151));
    for (
      var T = (j = null), k = m, N = (m = 0), P = null, E = g.next();
      k !== null && !E.done;
      N++, E = g.next()
    ) {
      k.index > N ? ((P = k), (k = null)) : (P = k.sibling);
      var L = h(p, k, E.value, S);
      if (L === null) {
        k === null && (k = P);
        break;
      }
      e && k && L.alternate === null && t(p, k),
        (m = s(L, m, N)),
        T === null ? (j = L) : (T.sibling = L),
        (T = L),
        (k = P);
    }
    if (E.done) return n(p, k), ae && ir(p, N), j;
    if (k === null) {
      for (; !E.done; N++, E = g.next())
        (E = f(p, E.value, S)),
          E !== null &&
            ((m = s(E, m, N)), T === null ? (j = E) : (T.sibling = E), (T = E));
      return ae && ir(p, N), j;
    }
    for (k = r(p, k); !E.done; N++, E = g.next())
      (E = y(k, p, N, E.value, S)),
        E !== null &&
          (e && E.alternate !== null && k.delete(E.key === null ? N : E.key),
          (m = s(E, m, N)),
          T === null ? (j = E) : (T.sibling = E),
          (T = E));
    return (
      e &&
        k.forEach(function (D) {
          return t(p, D);
        }),
      ae && ir(p, N),
      j
    );
  }
  function w(p, m, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Vr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Lo:
          e: {
            for (var j = g.key, T = m; T !== null; ) {
              if (T.key === j) {
                if (((j = g.type), j === Vr)) {
                  if (T.tag === 7) {
                    n(p, T.sibling),
                      (m = i(T, g.props.children)),
                      (m.return = p),
                      (p = m);
                    break e;
                  }
                } else if (
                  T.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === En &&
                    Xp(j) === T.type)
                ) {
                  n(p, T.sibling),
                    (m = i(T, g.props)),
                    (m.ref = Ki(p, T, g)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                n(p, T);
                break;
              } else t(p, T);
              T = T.sibling;
            }
            g.type === Vr
              ? ((m = gr(g.props.children, p.mode, S, g.key)),
                (m.return = p),
                (p = m))
              : ((S = ga(g.type, g.key, g.props, null, p.mode, S)),
                (S.ref = Ki(p, m, g)),
                (S.return = p),
                (p = S));
          }
          return o(p);
        case Br:
          e: {
            for (T = g.key; m !== null; ) {
              if (m.key === T)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === g.containerInfo &&
                  m.stateNode.implementation === g.implementation
                ) {
                  n(p, m.sibling),
                    (m = i(m, g.children || [])),
                    (m.return = p),
                    (p = m);
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = $u(g, p.mode, S)), (m.return = p), (p = m);
          }
          return o(p);
        case En:
          return (T = g._init), w(p, m, T(g._payload), S);
      }
      if (os(g)) return v(p, m, g, S);
      if (Ui(g)) return x(p, m, g, S);
      Wo(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = i(m, g)), (m.return = p), (p = m))
          : (n(p, m), (m = Vu(g, p.mode, S)), (m.return = p), (p = m)),
        o(p))
      : n(p, m);
  }
  return w;
}
var vi = f0(!0),
  h0 = f0(!1),
  Ha = Jn(null),
  Wa = null,
  Yr = null,
  zf = null;
function Bf() {
  zf = Yr = Wa = null;
}
function Vf(e) {
  var t = Ha.current;
  re(Ha), (e._currentValue = t);
}
function Zc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function li(e, t) {
  (Wa = e),
    (zf = Yr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (tt = !0), (e.firstContext = null));
}
function kt(e) {
  var t = e._currentValue;
  if (zf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yr === null)) {
      if (Wa === null) throw Error(_(308));
      (Yr = e), (Wa.dependencies = { lanes: 0, firstContext: e });
    } else Yr = Yr.next = e;
  return t;
}
var ur = null;
function $f(e) {
  ur === null ? (ur = [e]) : ur.push(e);
}
function p0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), $f(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    mn(e, r)
  );
}
function mn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Nn = !1;
function Uf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function m0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function dn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $n(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      mn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), $f(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    mn(e, n)
  );
}
function ca(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ef(e, n);
  }
}
function Jp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function qa(e, t, n, r) {
  var i = e.updateQueue;
  Nn = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), o === null ? (s = c) : (o.next = c), (o = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (d = c = l = null), (a = s);
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((h = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(y, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (h = typeof v == "function" ? v.call(y, f, h) : v),
                h == null)
              )
                break e;
              f = ge({}, f, h);
              break e;
            case 2:
              Nn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = y), (l = f)) : (d = d.next = y),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Tr |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function Zp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(_(191, i));
        i.call(r);
      }
    }
}
var vo = {},
  Yt = Jn(vo),
  Vs = Jn(vo),
  $s = Jn(vo);
function cr(e) {
  if (e === vo) throw Error(_(174));
  return e;
}
function Hf(e, t) {
  switch ((te($s, t), te(Vs, e), te(Yt, vo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Rc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Rc(t, e));
  }
  re(Yt), te(Yt, t);
}
function xi() {
  re(Yt), re(Vs), re($s);
}
function g0(e) {
  cr($s.current);
  var t = cr(Yt.current),
    n = Rc(t, e.type);
  t !== n && (te(Vs, e), te(Yt, n));
}
function Wf(e) {
  Vs.current === e && (re(Yt), re(Vs));
}
var de = Jn(0);
function Ga(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Mu = [];
function qf() {
  for (var e = 0; e < Mu.length; e++)
    Mu[e]._workInProgressVersionPrimary = null;
  Mu.length = 0;
}
var da = bn.ReactCurrentDispatcher,
  Du = bn.ReactCurrentBatchConfig,
  jr = 0,
  he = null,
  Pe = null,
  ke = null,
  Ka = !1,
  gs = !1,
  Us = 0,
  ej = 0;
function Le() {
  throw Error(_(321));
}
function Gf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!zt(e[n], t[n])) return !1;
  return !0;
}
function Kf(e, t, n, r, i, s) {
  if (
    ((jr = s),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (da.current = e === null || e.memoizedState === null ? ij : sj),
    (e = n(r, i)),
    gs)
  ) {
    s = 0;
    do {
      if (((gs = !1), (Us = 0), 25 <= s)) throw Error(_(301));
      (s += 1),
        (ke = Pe = null),
        (t.updateQueue = null),
        (da.current = oj),
        (e = n(r, i));
    } while (gs);
  }
  if (
    ((da.current = Ya),
    (t = Pe !== null && Pe.next !== null),
    (jr = 0),
    (ke = Pe = he = null),
    (Ka = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Yf() {
  var e = Us !== 0;
  return (Us = 0), e;
}
function Wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (he.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function Et() {
  if (Pe === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = ke === null ? he.memoizedState : ke.next;
  if (t !== null) (ke = t), (Pe = e);
  else {
    if (e === null) throw Error(_(310));
    (Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      ke === null ? (he.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function Hs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Iu(e) {
  var t = Et(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = Pe,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      c = s;
    do {
      var d = c.lane;
      if ((jr & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (he.lanes |= d),
          (Tr |= d);
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? (o = r) : (l.next = a),
      zt(r, t.memoizedState) || (tt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (he.lanes |= s), (Tr |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fu(e) {
  var t = Et(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    zt(s, t.memoizedState) || (tt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function y0() {}
function v0(e, t) {
  var n = he,
    r = Et(),
    i = t(),
    s = !zt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (tt = !0)),
    (r = r.queue),
    Qf(b0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ws(9, w0.bind(null, n, r, i, t), void 0, null),
      Ee === null)
    )
      throw Error(_(349));
    jr & 30 || x0(n, t, i);
  }
  return i;
}
function x0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function w0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), S0(t) && j0(e);
}
function b0(e, t, n) {
  return n(function () {
    S0(t) && j0(e);
  });
}
function S0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zt(e, n);
  } catch {
    return !0;
  }
}
function j0(e) {
  var t = mn(e, 1);
  t !== null && Ft(t, e, 1, -1);
}
function em(e) {
  var t = Wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rj.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function Ws(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function T0() {
  return Et().memoizedState;
}
function fa(e, t, n, r) {
  var i = Wt();
  (he.flags |= e),
    (i.memoizedState = Ws(1 | t, n, void 0, r === void 0 ? null : r));
}
function Dl(e, t, n, r) {
  var i = Et();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Pe !== null) {
    var o = Pe.memoizedState;
    if (((s = o.destroy), r !== null && Gf(r, o.deps))) {
      i.memoizedState = Ws(t, n, s, r);
      return;
    }
  }
  (he.flags |= e), (i.memoizedState = Ws(1 | t, n, s, r));
}
function tm(e, t) {
  return fa(8390656, 8, e, t);
}
function Qf(e, t) {
  return Dl(2048, 8, e, t);
}
function P0(e, t) {
  return Dl(4, 2, e, t);
}
function C0(e, t) {
  return Dl(4, 4, e, t);
}
function k0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function E0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Dl(4, 4, k0.bind(null, t, e), n)
  );
}
function Xf() {}
function N0(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _0(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function O0(e, t, n) {
  return jr & 21
    ? (zt(n, t) || ((n = Dv()), (he.lanes |= n), (Tr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = n));
}
function tj(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Du.transition;
  Du.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (Du.transition = r);
  }
}
function A0() {
  return Et().memoizedState;
}
function nj(e, t, n) {
  var r = Hn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    R0(e))
  )
    L0(t, n);
  else if (((n = p0(e, t, n, r)), n !== null)) {
    var i = qe();
    Ft(n, e, r, i), M0(n, t, r);
  }
}
function rj(e, t, n) {
  var r = Hn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (R0(e)) L0(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), zt(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), $f(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = p0(e, t, i, r)),
      n !== null && ((i = qe()), Ft(n, e, r, i), M0(n, t, r));
  }
}
function R0(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function L0(e, t) {
  gs = Ka = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function M0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ef(e, n);
  }
}
var Ya = {
    readContext: kt,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  ij = {
    readContext: kt,
    useCallback: function (e, t) {
      return (Wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: kt,
    useEffect: tm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fa(4194308, 4, k0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = nj.bind(null, he, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: em,
    useDebugValue: Xf,
    useDeferredValue: function (e) {
      return (Wt().memoizedState = e);
    },
    useTransition: function () {
      var e = em(!1),
        t = e[0];
      return (e = tj.bind(null, e[1])), (Wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        i = Wt();
      if (ae) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(_(349));
        jr & 30 || x0(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        tm(b0.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ws(9, w0.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Wt(),
        t = Ee.identifierPrefix;
      if (ae) {
        var n = cn,
          r = un;
        (n = (r & ~(1 << (32 - It(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Us++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ej++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sj = {
    readContext: kt,
    useCallback: N0,
    useContext: kt,
    useEffect: Qf,
    useImperativeHandle: E0,
    useInsertionEffect: P0,
    useLayoutEffect: C0,
    useMemo: _0,
    useReducer: Iu,
    useRef: T0,
    useState: function () {
      return Iu(Hs);
    },
    useDebugValue: Xf,
    useDeferredValue: function (e) {
      var t = Et();
      return O0(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Iu(Hs)[0],
        t = Et().memoizedState;
      return [e, t];
    },
    useMutableSource: y0,
    useSyncExternalStore: v0,
    useId: A0,
    unstable_isNewReconciler: !1,
  },
  oj = {
    readContext: kt,
    useCallback: N0,
    useContext: kt,
    useEffect: Qf,
    useImperativeHandle: E0,
    useInsertionEffect: P0,
    useLayoutEffect: C0,
    useMemo: _0,
    useReducer: Fu,
    useRef: T0,
    useState: function () {
      return Fu(Hs);
    },
    useDebugValue: Xf,
    useDeferredValue: function (e) {
      var t = Et();
      return Pe === null ? (t.memoizedState = e) : O0(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Fu(Hs)[0],
        t = Et().memoizedState;
      return [e, t];
    },
    useMutableSource: y0,
    useSyncExternalStore: v0,
    useId: A0,
    unstable_isNewReconciler: !1,
  };
function Ot(e, t) {
  if (e && e.defaultProps) {
    (t = ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ed(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Il = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _r(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      i = Hn(e),
      s = dn(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = $n(e, s, i)),
      t !== null && (Ft(t, e, i, r), ca(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      i = Hn(e),
      s = dn(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = $n(e, s, i)),
      t !== null && (Ft(t, e, i, r), ca(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = qe(),
      r = Hn(e),
      i = dn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = $n(e, i, r)),
      t !== null && (Ft(t, e, r, n), ca(t, e, r));
  },
};
function nm(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Is(n, r) || !Is(i, s)
      : !0
  );
}
function D0(e, t, n) {
  var r = !1,
    i = Kn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = kt(s))
      : ((i = it(t) ? br : Ve.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? gi(e, i) : Kn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Il),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function rm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Il.enqueueReplaceState(t, t.state, null);
}
function td(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Uf(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = kt(s))
    : ((s = it(t) ? br : Ve.current), (i.context = gi(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (ed(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Il.enqueueReplaceState(i, i.state, null),
      qa(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function wi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += LS(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function zu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function nd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var aj = typeof WeakMap == "function" ? WeakMap : Map;
function I0(e, t, n) {
  (n = dn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Xa || ((Xa = !0), (fd = r)), nd(e, t);
    }),
    n
  );
}
function F0(e, t, n) {
  (n = dn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        nd(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        nd(e, t),
          typeof r != "function" &&
            (Un === null ? (Un = new Set([this])) : Un.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function im(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new aj();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = bj.bind(null, e, t, n)), t.then(e, e));
}
function sm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function om(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = dn(-1, 1)), (t.tag = 2), $n(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var lj = bn.ReactCurrentOwner,
  tt = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? h0(t, null, n, r) : vi(t, e.child, n, r);
}
function am(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    li(t, i),
    (r = Kf(e, t, n, r, s, i)),
    (n = Yf()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gn(e, t, i))
      : (ae && n && Df(t), (t.flags |= 1), Ue(e, t, r, i), t.child)
  );
}
function lm(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !sh(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), z0(e, t, s, r, i))
      : ((e = ga(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Is), n(o, r) && e.ref === t.ref)
    )
      return gn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Wn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function z0(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Is(s, r) && e.ref === t.ref)
      if (((tt = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (tt = !0);
      else return (t.lanes = e.lanes), gn(e, t, i);
  }
  return rd(e, t, n, r, i);
}
function B0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Xr, ut),
        (ut |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(Xr, ut),
          (ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        te(Xr, ut),
        (ut |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Xr, ut),
      (ut |= r);
  return Ue(e, t, i, n), t.child;
}
function V0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function rd(e, t, n, r, i) {
  var s = it(n) ? br : Ve.current;
  return (
    (s = gi(t, s)),
    li(t, i),
    (n = Kf(e, t, n, r, s, i)),
    (r = Yf()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gn(e, t, i))
      : (ae && r && Df(t), (t.flags |= 1), Ue(e, t, n, i), t.child)
  );
}
function um(e, t, n, r, i) {
  if (it(n)) {
    var s = !0;
    Va(t);
  } else s = !1;
  if ((li(t, i), t.stateNode === null))
    ha(e, t), D0(t, n, r), td(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = kt(c))
      : ((c = it(n) ? br : Ve.current), (c = gi(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && rm(t, o, r, c)),
      (Nn = !1);
    var h = t.memoizedState;
    (o.state = h),
      qa(t, r, o, i),
      (l = t.memoizedState),
      a !== r || h !== l || rt.current || Nn
        ? (typeof d == "function" && (ed(t, n, d, r), (l = t.memoizedState)),
          (a = Nn || nm(t, n, a, r, h, l, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      m0(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Ot(t.type, a)),
      (o.props = c),
      (f = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = kt(l))
        : ((l = it(n) ? br : Ve.current), (l = gi(t, l)));
    var y = n.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || h !== l) && rm(t, o, r, l)),
      (Nn = !1),
      (h = t.memoizedState),
      (o.state = h),
      qa(t, r, o, i);
    var v = t.memoizedState;
    a !== f || h !== v || rt.current || Nn
      ? (typeof y == "function" && (ed(t, n, y, r), (v = t.memoizedState)),
        (c = Nn || nm(t, n, c, r, h, v, l) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return id(e, t, n, r, s, i);
}
function id(e, t, n, r, i, s) {
  V0(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Kp(t, n, !1), gn(e, t, s);
  (r = t.stateNode), (lj.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = vi(t, e.child, null, s)), (t.child = vi(t, null, a, s)))
      : Ue(e, t, a, s),
    (t.memoizedState = r.state),
    i && Kp(t, n, !0),
    t.child
  );
}
function $0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gp(e, t.context, !1),
    Hf(e, t.containerInfo);
}
function cm(e, t, n, r, i) {
  return yi(), Ff(i), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var sd = { dehydrated: null, treeContext: null, retryLane: 0 };
function od(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function U0(e, t, n) {
  var r = t.pendingProps,
    i = de.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    te(de, i & 1),
    e === null)
  )
    return (
      Jc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Bl(o, r, 0, null)),
              (e = gr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = od(n)),
              (t.memoizedState = sd),
              e)
            : Jf(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return uj(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Wn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Wn(a, s)) : ((s = gr(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? od(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = sd),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Wn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Jf(e, t) {
  return (
    (t = Bl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function qo(e, t, n, r) {
  return (
    r !== null && Ff(r),
    vi(t, e.child, null, n),
    (e = Jf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function uj(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = zu(Error(_(422)))), qo(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Bl({ mode: "visible", children: r.children }, i, 0, null)),
        (s = gr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && vi(t, e.child, null, o),
        (t.child.memoizedState = od(o)),
        (t.memoizedState = sd),
        s);
  if (!(t.mode & 1)) return qo(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(_(419))), (r = zu(s, r, void 0)), qo(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), tt || a)) {
    if (((r = Ee), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), mn(e, i), Ft(r, e, i, -1));
    }
    return ih(), (r = zu(Error(_(421)))), qo(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sj.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (ct = Vn(i.nextSibling)),
      (ft = t),
      (ae = !0),
      (Rt = null),
      e !== null &&
        ((xt[wt++] = un),
        (xt[wt++] = cn),
        (xt[wt++] = Sr),
        (un = e.id),
        (cn = e.overflow),
        (Sr = t)),
      (t = Jf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function dm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zc(e.return, t, n);
}
function Bu(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function H0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ue(e, t, r.children, n), (r = de.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && dm(e, n, t);
        else if (e.tag === 19) dm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((te(de, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ga(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Bu(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ga(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Bu(t, !0, n, null, s);
        break;
      case "together":
        Bu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ha(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Wn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Wn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cj(e, t, n) {
  switch (t.tag) {
    case 3:
      $0(t), yi();
      break;
    case 5:
      g0(t);
      break;
    case 1:
      it(t.type) && Va(t);
      break;
    case 4:
      Hf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      te(Ha, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(de, de.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? U0(e, t, n)
          : (te(de, de.current & 1),
            (e = gn(e, t, n)),
            e !== null ? e.sibling : null);
      te(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return H0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        te(de, de.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), B0(e, t, n);
  }
  return gn(e, t, n);
}
var W0, ad, q0, G0;
W0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ad = function () {};
q0 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), cr(Yt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Nc(e, i)), (r = Nc(e, r)), (s = []);
        break;
      case "select":
        (i = ge({}, i, { value: void 0 })),
          (r = ge({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Ac(e, i)), (r = Ac(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = za);
    }
    Lc(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (_s.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (_s.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && ne("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
G0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Yi(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function dj(e, t, n) {
  var r = t.pendingProps;
  switch ((If(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Me(t), null;
    case 1:
      return it(t.type) && Ba(), Me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        xi(),
        re(rt),
        re(Ve),
        qf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ho(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Rt !== null && (md(Rt), (Rt = null)))),
        ad(e, t),
        Me(t),
        null
      );
    case 5:
      Wf(t);
      var i = cr($s.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        q0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Me(t), null;
        }
        if (((e = cr(Yt.current)), Ho(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Gt] = t), (r[Bs] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ls.length; i++) ne(ls[i], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne("error", r), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              wp(r, s), ne("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ne("invalid", r);
              break;
            case "textarea":
              Sp(r, s), ne("invalid", r);
          }
          Lc(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Uo(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Uo(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : _s.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ne("scroll", r);
            }
          switch (n) {
            case "input":
              Mo(r), bp(r, s, !0);
              break;
            case "textarea":
              Mo(r), jp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = za);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = bv(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Gt] = t),
            (e[Bs] = r),
            W0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Mc(n, r)), n)) {
              case "dialog":
                ne("cancel", e), ne("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ls.length; i++) ne(ls[i], e);
                i = r;
                break;
              case "source":
                ne("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ne("error", e), ne("load", e), (i = r);
                break;
              case "details":
                ne("toggle", e), (i = r);
                break;
              case "input":
                wp(e, r), (i = Nc(e, r)), ne("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ge({}, r, { value: void 0 })),
                  ne("invalid", e);
                break;
              case "textarea":
                Sp(e, r), (i = Ac(e, r)), ne("invalid", e);
                break;
              default:
                i = r;
            }
            Lc(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Tv(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Sv(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Os(e, l)
                    : typeof l == "number" && Os(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (_s.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && ne("scroll", e)
                      : l != null && Sf(e, s, l, o));
              }
            switch (n) {
              case "input":
                Mo(e), bp(e, r, !1);
                break;
              case "textarea":
                Mo(e), jp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? ii(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      ii(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = za);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) G0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = cr($s.current)), cr(Yt.current), Ho(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Gt] = t),
            (s = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                Uo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Uo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Gt] = t),
            (t.stateNode = r);
      }
      return Me(t), null;
    case 13:
      if (
        (re(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && ct !== null && t.mode & 1 && !(t.flags & 128))
          d0(), yi(), (t.flags |= 98560), (s = !1);
        else if (((s = Ho(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(_(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(_(317));
            s[Gt] = t;
          } else
            yi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Me(t), (s = !1);
        } else Rt !== null && (md(Rt), (Rt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || de.current & 1 ? Ce === 0 && (Ce = 3) : ih())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return (
        xi(), ad(e, t), e === null && Fs(t.stateNode.containerInfo), Me(t), null
      );
    case 10:
      return Vf(t.type._context), Me(t), null;
    case 17:
      return it(t.type) && Ba(), Me(t), null;
    case 19:
      if ((re(de), (s = t.memoizedState), s === null)) return Me(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Yi(s, !1);
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ga(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Yi(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(de, (de.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Se() > bi &&
            ((t.flags |= 128), (r = !0), Yi(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ga(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Yi(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ae)
            )
              return Me(t), null;
          } else
            2 * Se() - s.renderingStartTime > bi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Yi(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Se()),
          (t.sibling = null),
          (n = de.current),
          te(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        rh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ut & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function fj(e, t) {
  switch ((If(t), t.tag)) {
    case 1:
      return (
        it(t.type) && Ba(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        xi(),
        re(rt),
        re(Ve),
        qf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Wf(t), null;
    case 13:
      if (
        (re(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        yi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(de), null;
    case 4:
      return xi(), null;
    case 10:
      return Vf(t.type._context), null;
    case 22:
    case 23:
      return rh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Go = !1,
  Fe = !1,
  hj = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Qr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function ld(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var fm = !1;
function pj(e, t) {
  if (((Wc = Da), (e = Jv()), Mf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (h = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === i && (a = o),
                h === s && ++d === r && (l = o),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qc = { focusedElem: e, selectionRange: n }, Da = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    w = v.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ot(t.type, x),
                      w
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (S) {
          ve(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (v = fm), (fm = !1), v;
}
function ys(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && ld(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Fl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ud(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function K0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), K0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Gt], delete t[Bs], delete t[Yc], delete t[Q2], delete t[X2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Y0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Y0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function cd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = za));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cd(e, t, n), e = e.sibling; e !== null; ) cd(e, t, n), (e = e.sibling);
}
function dd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (dd(e, t, n), e = e.sibling; e !== null; ) dd(e, t, n), (e = e.sibling);
}
var _e = null,
  At = !1;
function Sn(e, t, n) {
  for (n = n.child; n !== null; ) Q0(e, t, n), (n = n.sibling);
}
function Q0(e, t, n) {
  if (Kt && typeof Kt.onCommitFiberUnmount == "function")
    try {
      Kt.onCommitFiberUnmount(_l, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || Qr(n, t);
    case 6:
      var r = _e,
        i = At;
      (_e = null),
        Sn(e, t, n),
        (_e = r),
        (At = i),
        _e !== null &&
          (At
            ? ((e = _e),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null &&
        (At
          ? ((e = _e),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ru(e.parentNode, n)
              : e.nodeType === 1 && Ru(e, n),
            Ms(e))
          : Ru(_e, n.stateNode));
      break;
    case 4:
      (r = _e),
        (i = At),
        (_e = n.stateNode.containerInfo),
        (At = !0),
        Sn(e, t, n),
        (_e = r),
        (At = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && ld(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Sn(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (Qr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ve(n, t, a);
        }
      Sn(e, t, n);
      break;
    case 21:
      Sn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), Sn(e, t, n), (Fe = r))
        : Sn(e, t, n);
      break;
    default:
      Sn(e, t, n);
  }
}
function pm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hj()),
      t.forEach(function (r) {
        var i = jj.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Nt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (_e = a.stateNode), (At = !1);
              break e;
            case 3:
              (_e = a.stateNode.containerInfo), (At = !0);
              break e;
            case 4:
              (_e = a.stateNode.containerInfo), (At = !0);
              break e;
          }
          a = a.return;
        }
        if (_e === null) throw Error(_(160));
        Q0(s, o, i), (_e = null), (At = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        ve(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) X0(t, e), (t = t.sibling);
}
function X0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Nt(t, e), $t(e), r & 4)) {
        try {
          ys(3, e, e.return), Fl(3, e);
        } catch (x) {
          ve(e, e.return, x);
        }
        try {
          ys(5, e, e.return);
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      break;
    case 1:
      Nt(t, e), $t(e), r & 512 && n !== null && Qr(n, n.return);
      break;
    case 5:
      if (
        (Nt(t, e),
        $t(e),
        r & 512 && n !== null && Qr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Os(i, "");
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && xv(i, s),
              Mc(a, o);
            var c = Mc(a, s);
            for (o = 0; o < l.length; o += 2) {
              var d = l[o],
                f = l[o + 1];
              d === "style"
                ? Tv(i, f)
                : d === "dangerouslySetInnerHTML"
                ? Sv(i, f)
                : d === "children"
                ? Os(i, f)
                : Sf(i, d, f, c);
            }
            switch (a) {
              case "input":
                _c(i, s);
                break;
              case "textarea":
                wv(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? ii(i, !!s.multiple, y, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ii(i, !!s.multiple, s.defaultValue, !0)
                      : ii(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Bs] = s;
          } catch (x) {
            ve(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Nt(t, e), $t(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          ve(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Nt(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ms(t.containerInfo);
        } catch (x) {
          ve(e, e.return, x);
        }
      break;
    case 4:
      Nt(t, e), $t(e);
      break;
    case 13:
      Nt(t, e),
        $t(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (th = Se())),
        r & 4 && pm(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (c = Fe) || d), Nt(t, e), (Fe = c)) : Nt(t, e),
        $t(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (M = e, d = e.child; d !== null; ) {
            for (f = M = d; M !== null; ) {
              switch (((h = M), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ys(4, h, h.return);
                  break;
                case 1:
                  Qr(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      ve(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Qr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    gm(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (M = y)) : gm(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = jv("display", o)));
              } catch (x) {
                ve(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (x) {
                ve(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Nt(t, e), $t(e), r & 4 && pm(e);
      break;
    case 21:
      break;
    default:
      Nt(t, e), $t(e);
  }
}
function $t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Y0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Os(i, ""), (r.flags &= -33));
          var s = hm(e);
          dd(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = hm(e);
          cd(e, a, o);
          break;
        default:
          throw Error(_(161));
      }
    } catch (l) {
      ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mj(e, t, n) {
  (M = e), J0(e);
}
function J0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Go;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Fe;
        a = Go;
        var c = Fe;
        if (((Go = o), (Fe = l) && !c))
          for (M = i; M !== null; )
            (o = M),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ym(i)
                : l !== null
                ? ((l.return = o), (M = l))
                : ym(i);
        for (; s !== null; ) (M = s), J0(s), (s = s.sibling);
        (M = i), (Go = a), (Fe = c);
      }
      mm(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (M = s)) : mm(e);
  }
}
function mm(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || Fl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ot(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Zp(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zp(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Ms(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Fe || (t.flags & 512 && ud(t));
      } catch (h) {
        ve(t, t.return, h);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function gm(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function ym(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fl(4, t);
          } catch (l) {
            ve(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ve(t, i, l);
            }
          }
          var s = t.return;
          try {
            ud(t);
          } catch (l) {
            ve(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ud(t);
          } catch (l) {
            ve(t, o, l);
          }
      }
    } catch (l) {
      ve(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var gj = Math.ceil,
  Qa = bn.ReactCurrentDispatcher,
  Zf = bn.ReactCurrentOwner,
  Pt = bn.ReactCurrentBatchConfig,
  X = 0,
  Ee = null,
  je = null,
  Ae = 0,
  ut = 0,
  Xr = Jn(0),
  Ce = 0,
  qs = null,
  Tr = 0,
  zl = 0,
  eh = 0,
  vs = null,
  et = null,
  th = 0,
  bi = 1 / 0,
  on = null,
  Xa = !1,
  fd = null,
  Un = null,
  Ko = !1,
  Mn = null,
  Ja = 0,
  xs = 0,
  hd = null,
  pa = -1,
  ma = 0;
function qe() {
  return X & 6 ? Se() : pa !== -1 ? pa : (pa = Se());
}
function Hn(e) {
  return e.mode & 1
    ? X & 2 && Ae !== 0
      ? Ae & -Ae
      : Z2.transition !== null
      ? (ma === 0 && (ma = Dv()), ma)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Uv(e.type))),
        e)
    : 1;
}
function Ft(e, t, n, r) {
  if (50 < xs) throw ((xs = 0), (hd = null), Error(_(185)));
  mo(e, n, r),
    (!(X & 2) || e !== Ee) &&
      (e === Ee && (!(X & 2) && (zl |= n), Ce === 4 && An(e, Ae)),
      st(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((bi = Se() + 500), Ml && Zn()));
}
function st(e, t) {
  var n = e.callbackNode;
  ZS(e, t);
  var r = Ma(e, e === Ee ? Ae : 0);
  if (r === 0)
    n !== null && Cp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cp(n), t === 1))
      e.tag === 0 ? J2(vm.bind(null, e)) : l0(vm.bind(null, e)),
        K2(function () {
          !(X & 6) && Zn();
        }),
        (n = null);
    else {
      switch (Iv(r)) {
        case 1:
          n = kf;
          break;
        case 4:
          n = Lv;
          break;
        case 16:
          n = La;
          break;
        case 536870912:
          n = Mv;
          break;
        default:
          n = La;
      }
      n = ox(n, Z0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Z0(e, t) {
  if (((pa = -1), (ma = 0), X & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (ui() && e.callbackNode !== n) return null;
  var r = Ma(e, e === Ee ? Ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Za(e, r);
  else {
    t = r;
    var i = X;
    X |= 2;
    var s = tx();
    (Ee !== e || Ae !== t) && ((on = null), (bi = Se() + 500), mr(e, t));
    do
      try {
        xj();
        break;
      } catch (a) {
        ex(e, a);
      }
    while (!0);
    Bf(),
      (Qa.current = s),
      (X = i),
      je !== null ? (t = 0) : ((Ee = null), (Ae = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Bc(e)), i !== 0 && ((r = i), (t = pd(e, i)))), t === 1)
    )
      throw ((n = qs), mr(e, 0), An(e, r), st(e, Se()), n);
    if (t === 6) An(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !yj(i) &&
          ((t = Za(e, r)),
          t === 2 && ((s = Bc(e)), s !== 0 && ((r = s), (t = pd(e, s)))),
          t === 1))
      )
        throw ((n = qs), mr(e, 0), An(e, r), st(e, Se()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          sr(e, et, on);
          break;
        case 3:
          if (
            (An(e, r), (r & 130023424) === r && ((t = th + 500 - Se()), 10 < t))
          ) {
            if (Ma(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              qe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Kc(sr.bind(null, e, et, on), t);
            break;
          }
          sr(e, et, on);
          break;
        case 4:
          if ((An(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - It(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * gj(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Kc(sr.bind(null, e, et, on), r);
            break;
          }
          sr(e, et, on);
          break;
        case 5:
          sr(e, et, on);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return st(e, Se()), e.callbackNode === n ? Z0.bind(null, e) : null;
}
function pd(e, t) {
  var n = vs;
  return (
    e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256),
    (e = Za(e, t)),
    e !== 2 && ((t = et), (et = n), t !== null && md(t)),
    e
  );
}
function md(e) {
  et === null ? (et = e) : et.push.apply(et, e);
}
function yj(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!zt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function An(e, t) {
  for (
    t &= ~eh,
      t &= ~zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - It(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function vm(e) {
  if (X & 6) throw Error(_(327));
  ui();
  var t = Ma(e, 0);
  if (!(t & 1)) return st(e, Se()), null;
  var n = Za(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bc(e);
    r !== 0 && ((t = r), (n = pd(e, r)));
  }
  if (n === 1) throw ((n = qs), mr(e, 0), An(e, t), st(e, Se()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sr(e, et, on),
    st(e, Se()),
    null
  );
}
function nh(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((bi = Se() + 500), Ml && Zn());
  }
}
function Pr(e) {
  Mn !== null && Mn.tag === 0 && !(X & 6) && ui();
  var t = X;
  X |= 1;
  var n = Pt.transition,
    r = ee;
  try {
    if (((Pt.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (Pt.transition = n), (X = t), !(X & 6) && Zn();
  }
}
function rh() {
  (ut = Xr.current), re(Xr);
}
function mr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), G2(n)), je !== null))
    for (n = je.return; n !== null; ) {
      var r = n;
      switch ((If(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ba();
          break;
        case 3:
          xi(), re(rt), re(Ve), qf();
          break;
        case 5:
          Wf(r);
          break;
        case 4:
          xi();
          break;
        case 13:
          re(de);
          break;
        case 19:
          re(de);
          break;
        case 10:
          Vf(r.type._context);
          break;
        case 22:
        case 23:
          rh();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (je = e = Wn(e.current, null)),
    (Ae = ut = t),
    (Ce = 0),
    (qs = null),
    (eh = zl = Tr = 0),
    (et = vs = null),
    ur !== null)
  ) {
    for (t = 0; t < ur.length; t++)
      if (((n = ur[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    ur = null;
  }
  return e;
}
function ex(e, t) {
  do {
    var n = je;
    try {
      if ((Bf(), (da.current = Ya), Ka)) {
        for (var r = he.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ka = !1;
      }
      if (
        ((jr = 0),
        (ke = Pe = he = null),
        (gs = !1),
        (Us = 0),
        (Zf.current = null),
        n === null || n.return === null)
      ) {
        (Ce = 1), (qs = t), (je = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Ae),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = sm(o);
          if (y !== null) {
            (y.flags &= -257),
              om(y, o, a, s, t),
              y.mode & 1 && im(s, c, t),
              (t = y),
              (l = c);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              im(s, c, t), ih();
              break e;
            }
            l = Error(_(426));
          }
        } else if (ae && a.mode & 1) {
          var w = sm(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              om(w, o, a, s, t),
              Ff(wi(l, a));
            break e;
          }
        }
        (s = l = wi(l, a)),
          Ce !== 4 && (Ce = 2),
          vs === null ? (vs = [s]) : vs.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = I0(s, l, t);
              Jp(s, p);
              break e;
            case 1:
              a = l;
              var m = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Un === null || !Un.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = F0(s, a, t);
                Jp(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      rx(n);
    } catch (j) {
      (t = j), je === n && n !== null && (je = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function tx() {
  var e = Qa.current;
  return (Qa.current = Ya), e === null ? Ya : e;
}
function ih() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    Ee === null || (!(Tr & 268435455) && !(zl & 268435455)) || An(Ee, Ae);
}
function Za(e, t) {
  var n = X;
  X |= 2;
  var r = tx();
  (Ee !== e || Ae !== t) && ((on = null), mr(e, t));
  do
    try {
      vj();
      break;
    } catch (i) {
      ex(e, i);
    }
  while (!0);
  if ((Bf(), (X = n), (Qa.current = r), je !== null)) throw Error(_(261));
  return (Ee = null), (Ae = 0), Ce;
}
function vj() {
  for (; je !== null; ) nx(je);
}
function xj() {
  for (; je !== null && !HS(); ) nx(je);
}
function nx(e) {
  var t = sx(e.alternate, e, ut);
  (e.memoizedProps = e.pendingProps),
    t === null ? rx(e) : (je = t),
    (Zf.current = null);
}
function rx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = fj(n, t)), n !== null)) {
        (n.flags &= 32767), (je = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (je = null);
        return;
      }
    } else if (((n = dj(n, t, ut)), n !== null)) {
      je = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      je = t;
      return;
    }
    je = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function sr(e, t, n) {
  var r = ee,
    i = Pt.transition;
  try {
    (Pt.transition = null), (ee = 1), wj(e, t, n, r);
  } finally {
    (Pt.transition = i), (ee = r);
  }
  return null;
}
function wj(e, t, n, r) {
  do ui();
  while (Mn !== null);
  if (X & 6) throw Error(_(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (e2(e, s),
    e === Ee && ((je = Ee = null), (Ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ko ||
      ((Ko = !0),
      ox(La, function () {
        return ui(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Pt.transition), (Pt.transition = null);
    var o = ee;
    ee = 1;
    var a = X;
    (X |= 4),
      (Zf.current = null),
      pj(e, n),
      X0(n, e),
      B2(qc),
      (Da = !!Wc),
      (qc = Wc = null),
      (e.current = n),
      mj(n),
      WS(),
      (X = a),
      (ee = o),
      (Pt.transition = s);
  } else e.current = n;
  if (
    (Ko && ((Ko = !1), (Mn = e), (Ja = i)),
    (s = e.pendingLanes),
    s === 0 && (Un = null),
    KS(n.stateNode),
    st(e, Se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Xa) throw ((Xa = !1), (e = fd), (fd = null), e);
  return (
    Ja & 1 && e.tag !== 0 && ui(),
    (s = e.pendingLanes),
    s & 1 ? (e === hd ? xs++ : ((xs = 0), (hd = e))) : (xs = 0),
    Zn(),
    null
  );
}
function ui() {
  if (Mn !== null) {
    var e = Iv(Ja),
      t = Pt.transition,
      n = ee;
    try {
      if (((Pt.transition = null), (ee = 16 > e ? 16 : e), Mn === null))
        var r = !1;
      else {
        if (((e = Mn), (Mn = null), (Ja = 0), X & 6)) throw Error(_(331));
        var i = X;
        for (X |= 4, M = e.current; M !== null; ) {
          var s = M,
            o = s.child;
          if (M.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (M = c; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ys(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (M = f);
                  else
                    for (; M !== null; ) {
                      d = M;
                      var h = d.sibling,
                        y = d.return;
                      if ((K0(d), d === c)) {
                        M = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (M = h);
                        break;
                      }
                      M = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var w = x.sibling;
                    (x.sibling = null), (x = w);
                  } while (x !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (M = o);
          else
            e: for (; M !== null; ) {
              if (((s = M), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ys(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (M = p);
                break e;
              }
              M = s.return;
            }
        }
        var m = e.current;
        for (M = m; M !== null; ) {
          o = M;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (M = g);
          else
            e: for (o = m; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fl(9, a);
                  }
                } catch (j) {
                  ve(a, a.return, j);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (M = S);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((X = i), Zn(), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        )
          try {
            Kt.onPostCommitFiberRoot(_l, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (Pt.transition = t);
    }
  }
  return !1;
}
function xm(e, t, n) {
  (t = wi(n, t)),
    (t = I0(e, t, 1)),
    (e = $n(e, t, 1)),
    (t = qe()),
    e !== null && (mo(e, 1, t), st(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) xm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Un === null || !Un.has(r)))
        ) {
          (e = wi(n, e)),
            (e = F0(t, e, 1)),
            (t = $n(t, e, 1)),
            (e = qe()),
            t !== null && (mo(t, 1, e), st(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function bj(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (Ae & n) === n &&
      (Ce === 4 || (Ce === 3 && (Ae & 130023424) === Ae && 500 > Se() - th)
        ? mr(e, 0)
        : (eh |= n)),
    st(e, t);
}
function ix(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fo), (Fo <<= 1), !(Fo & 130023424) && (Fo = 4194304))
      : (t = 1));
  var n = qe();
  (e = mn(e, t)), e !== null && (mo(e, t, n), st(e, n));
}
function Sj(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ix(e, n);
}
function jj(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), ix(e, n);
}
var sx;
sx = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || rt.current) tt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (tt = !1), cj(e, t, n);
      tt = !!(e.flags & 131072);
    }
  else (tt = !1), ae && t.flags & 1048576 && u0(t, Ua, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ha(e, t), (e = t.pendingProps);
      var i = gi(t, Ve.current);
      li(t, n), (i = Kf(null, t, r, e, i, n));
      var s = Yf();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            it(r) ? ((s = !0), Va(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Uf(t),
            (i.updater = Il),
            (t.stateNode = i),
            (i._reactInternals = t),
            td(t, r, e, n),
            (t = id(null, t, r, !0, s, n)))
          : ((t.tag = 0), ae && s && Df(t), Ue(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ha(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Pj(r)),
          (e = Ot(r, e)),
          i)
        ) {
          case 0:
            t = rd(null, t, r, e, n);
            break e;
          case 1:
            t = um(null, t, r, e, n);
            break e;
          case 11:
            t = am(null, t, r, e, n);
            break e;
          case 14:
            t = lm(null, t, r, Ot(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ot(r, i)),
        rd(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ot(r, i)),
        um(e, t, r, i, n)
      );
    case 3:
      e: {
        if (($0(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          m0(e, t),
          qa(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = wi(Error(_(423)), t)), (t = cm(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = wi(Error(_(424)), t)), (t = cm(e, t, r, n, i));
            break e;
          } else
            for (
              ct = Vn(t.stateNode.containerInfo.firstChild),
                ft = t,
                ae = !0,
                Rt = null,
                n = h0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((yi(), r === i)) {
            t = gn(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        g0(t),
        e === null && Jc(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Gc(r, i) ? (o = null) : s !== null && Gc(r, s) && (t.flags |= 32),
        V0(e, t),
        Ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Jc(t), null;
    case 13:
      return U0(e, t, n);
    case 4:
      return (
        Hf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vi(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ot(r, i)),
        am(e, t, r, i, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          te(Ha, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (zt(s.value, o)) {
            if (s.children === i.children && !rt.current) {
              t = gn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = dn(-1, n & -n)), (l.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (c.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Zc(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(_(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Zc(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ue(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        li(t, n),
        (i = kt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ot(r, t.pendingProps)),
        (i = Ot(r.type, i)),
        lm(e, t, r, i, n)
      );
    case 15:
      return z0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ot(r, i)),
        ha(e, t),
        (t.tag = 1),
        it(r) ? ((e = !0), Va(t)) : (e = !1),
        li(t, n),
        D0(t, r, i),
        td(t, r, i, n),
        id(null, t, r, !0, e, n)
      );
    case 19:
      return H0(e, t, n);
    case 22:
      return B0(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function ox(e, t) {
  return Rv(e, t);
}
function Tj(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Tt(e, t, n, r) {
  return new Tj(e, t, n, r);
}
function sh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Pj(e) {
  if (typeof e == "function") return sh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Tf)) return 11;
    if (e === Pf) return 14;
  }
  return 2;
}
function Wn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Tt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ga(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) sh(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Vr:
        return gr(n.children, i, s, t);
      case jf:
        (o = 8), (i |= 8);
        break;
      case Pc:
        return (
          (e = Tt(12, n, t, i | 2)), (e.elementType = Pc), (e.lanes = s), e
        );
      case Cc:
        return (e = Tt(13, n, t, i)), (e.elementType = Cc), (e.lanes = s), e;
      case kc:
        return (e = Tt(19, n, t, i)), (e.elementType = kc), (e.lanes = s), e;
      case gv:
        return Bl(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case pv:
              o = 10;
              break e;
            case mv:
              o = 9;
              break e;
            case Tf:
              o = 11;
              break e;
            case Pf:
              o = 14;
              break e;
            case En:
              (o = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Tt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function gr(e, t, n, r) {
  return (e = Tt(7, e, r, t)), (e.lanes = n), e;
}
function Bl(e, t, n, r) {
  return (
    (e = Tt(22, e, r, t)),
    (e.elementType = gv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Vu(e, t, n) {
  return (e = Tt(6, e, null, t)), (e.lanes = n), e;
}
function $u(e, t, n) {
  return (
    (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cj(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Su(0)),
    (this.expirationTimes = Su(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Su(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function oh(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new Cj(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Tt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Uf(s),
    e
  );
}
function kj(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Br,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ax(e) {
  if (!e) return Kn;
  e = e._reactInternals;
  e: {
    if (_r(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (it(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (it(n)) return a0(e, n, t);
  }
  return t;
}
function lx(e, t, n, r, i, s, o, a, l) {
  return (
    (e = oh(n, r, !0, e, i, s, o, a, l)),
    (e.context = ax(null)),
    (n = e.current),
    (r = qe()),
    (i = Hn(n)),
    (s = dn(r, i)),
    (s.callback = t ?? null),
    $n(n, s, i),
    (e.current.lanes = i),
    mo(e, i, r),
    st(e, r),
    e
  );
}
function Vl(e, t, n, r) {
  var i = t.current,
    s = qe(),
    o = Hn(i);
  return (
    (n = ax(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dn(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $n(i, t, o)),
    e !== null && (Ft(e, i, o, s), ca(e, i, o)),
    o
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ah(e, t) {
  wm(e, t), (e = e.alternate) && wm(e, t);
}
function Ej() {
  return null;
}
var ux =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function lh(e) {
  this._internalRoot = e;
}
$l.prototype.render = lh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Vl(e, t, null, null);
};
$l.prototype.unmount = lh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pr(function () {
      Vl(null, e, null, null);
    }),
      (t[pn] = null);
  }
};
function $l(e) {
  this._internalRoot = e;
}
$l.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < On.length && t !== 0 && t < On[n].priority; n++);
    On.splice(n, 0, e), n === 0 && $v(e);
  }
};
function uh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function bm() {}
function Nj(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = el(o);
        s.call(c);
      };
    }
    var o = lx(t, r, e, 0, null, !1, !1, "", bm);
    return (
      (e._reactRootContainer = o),
      (e[pn] = o.current),
      Fs(e.nodeType === 8 ? e.parentNode : e),
      Pr(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = el(l);
      a.call(c);
    };
  }
  var l = oh(e, 0, !1, null, null, !1, !1, "", bm);
  return (
    (e._reactRootContainer = l),
    (e[pn] = l.current),
    Fs(e.nodeType === 8 ? e.parentNode : e),
    Pr(function () {
      Vl(t, l, n, r);
    }),
    l
  );
}
function Hl(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = el(o);
        a.call(l);
      };
    }
    Vl(t, o, e, i);
  } else o = Nj(n, t, e, i, r);
  return el(o);
}
Fv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = as(t.pendingLanes);
        n !== 0 &&
          (Ef(t, n | 1), st(t, Se()), !(X & 6) && ((bi = Se() + 500), Zn()));
      }
      break;
    case 13:
      Pr(function () {
        var r = mn(e, 1);
        if (r !== null) {
          var i = qe();
          Ft(r, e, 1, i);
        }
      }),
        ah(e, 1);
  }
};
Nf = function (e) {
  if (e.tag === 13) {
    var t = mn(e, 134217728);
    if (t !== null) {
      var n = qe();
      Ft(t, e, 134217728, n);
    }
    ah(e, 134217728);
  }
};
zv = function (e) {
  if (e.tag === 13) {
    var t = Hn(e),
      n = mn(e, t);
    if (n !== null) {
      var r = qe();
      Ft(n, e, t, r);
    }
    ah(e, t);
  }
};
Bv = function () {
  return ee;
};
Vv = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
Ic = function (e, t, n) {
  switch (t) {
    case "input":
      if ((_c(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ll(r);
            if (!i) throw Error(_(90));
            vv(r), _c(r, i);
          }
        }
      }
      break;
    case "textarea":
      wv(e, n);
      break;
    case "select":
      (t = n.value), t != null && ii(e, !!n.multiple, t, !1);
  }
};
kv = nh;
Ev = Pr;
var _j = { usingClientEntryPoint: !1, Events: [yo, Wr, Ll, Pv, Cv, nh] },
  Qi = {
    findFiberByHostInstance: lr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Oj = {
    bundleType: Qi.bundleType,
    version: Qi.version,
    rendererPackageName: Qi.rendererPackageName,
    rendererConfig: Qi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ov(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qi.findFiberByHostInstance || Ej,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yo.isDisabled && Yo.supportsFiber)
    try {
      (_l = Yo.inject(Oj)), (Kt = Yo);
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _j;
mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!uh(t)) throw Error(_(200));
  return kj(e, t, null, n);
};
mt.createRoot = function (e, t) {
  if (!uh(e)) throw Error(_(299));
  var n = !1,
    r = "",
    i = ux;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = oh(e, 1, !1, null, null, n, !1, r, i)),
    (e[pn] = t.current),
    Fs(e.nodeType === 8 ? e.parentNode : e),
    new lh(t)
  );
};
mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = Ov(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
  return Pr(e);
};
mt.hydrate = function (e, t, n) {
  if (!Ul(t)) throw Error(_(200));
  return Hl(null, e, t, !0, n);
};
mt.hydrateRoot = function (e, t, n) {
  if (!uh(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = ux;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = lx(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[pn] = t.current),
    Fs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new $l(t);
};
mt.render = function (e, t, n) {
  if (!Ul(t)) throw Error(_(200));
  return Hl(null, e, t, !1, n);
};
mt.unmountComponentAtNode = function (e) {
  if (!Ul(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Pr(function () {
        Hl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[pn] = null);
        });
      }),
      !0)
    : !1;
};
mt.unstable_batchedUpdates = nh;
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ul(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Hl(e, t, n, !1, r);
};
mt.version = "18.3.1-next-f1338f8080-20240426";
function cx() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cx);
    } catch (e) {
      console.error(e);
    }
}
cx(), (cv.exports = mt);
var dx = cv.exports,
  fx,
  Sm = dx;
(fx = Sm.createRoot), Sm.hydrateRoot;
let Aj = { data: "" },
  Rj = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || Aj,
  Lj = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Mj = /\/\*[^]*?\*\/|  +/g,
  jm = /\n+/g,
  Rn = (e, t) => {
    let n = "",
      r = "",
      i = "";
    for (let s in e) {
      let o = e[s];
      s[0] == "@"
        ? s[1] == "i"
          ? (n = s + " " + o + ";")
          : (r +=
              s[1] == "f"
                ? Rn(o, s)
                : s + "{" + Rn(o, s[1] == "k" ? "" : t) + "}")
        : typeof o == "object"
        ? (r += Rn(
            o,
            t
              ? t.replace(/([^,])+/g, (a) =>
                  s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (l) =>
                    /&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l
                  )
                )
              : s
          ))
        : o != null &&
          ((s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (i += Rn.p ? Rn.p(s, o) : s + ":" + o + ";"));
    }
    return n + (t && i ? t + "{" + i + "}" : i) + r;
  },
  rn = {},
  hx = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + hx(e[n]);
      return t;
    }
    return e;
  },
  Dj = (e, t, n, r, i) => {
    let s = hx(e),
      o =
        rn[s] ||
        (rn[s] = ((l) => {
          let c = 0,
            d = 11;
          for (; c < l.length; ) d = (101 * d + l.charCodeAt(c++)) >>> 0;
          return "go" + d;
        })(s));
    if (!rn[o]) {
      let l =
        s !== e
          ? e
          : ((c) => {
              let d,
                f,
                h = [{}];
              for (; (d = Lj.exec(c.replace(Mj, ""))); )
                d[4]
                  ? h.shift()
                  : d[3]
                  ? ((f = d[3].replace(jm, " ").trim()),
                    h.unshift((h[0][f] = h[0][f] || {})))
                  : (h[0][d[1]] = d[2].replace(jm, " ").trim());
              return h[0];
            })(e);
      rn[o] = Rn(i ? { ["@keyframes " + o]: l } : l, n ? "" : "." + o);
    }
    let a = n && rn.g ? rn.g : null;
    return (
      n && (rn.g = rn[o]),
      ((l, c, d, f) => {
        f
          ? (c.data = c.data.replace(f, l))
          : c.data.indexOf(l) === -1 && (c.data = d ? l + c.data : c.data + l);
      })(rn[o], t, r, a),
      o
    );
  },
  Ij = (e, t, n) =>
    e.reduce((r, i, s) => {
      let o = t[s];
      if (o && o.call) {
        let a = o(n),
          l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
        o = l
          ? "." + l
          : a && typeof a == "object"
          ? a.props
            ? ""
            : Rn(a, "")
          : a === !1
          ? ""
          : a;
      }
      return r + i + (o ?? "");
    }, "");
function Wl(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return Dj(
    n.unshift
      ? n.raw
        ? Ij(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
      : n,
    Rj(t.target),
    t.g,
    t.o,
    t.k
  );
}
let px, gd, yd;
Wl.bind({ g: 1 });
let yn = Wl.bind({ k: 1 });
function Fj(e, t, n, r) {
  (Rn.p = t), (px = e), (gd = n), (yd = r);
}
function er(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function i(s, o) {
      let a = Object.assign({}, s),
        l = a.className || i.className;
      (n.p = Object.assign({ theme: gd && gd() }, a)),
        (n.o = / *go\d+/.test(l)),
        (a.className = Wl.apply(n, r) + (l ? " " + l : ""));
      let c = e;
      return (
        e[0] && ((c = a.as || e), delete a.as), yd && c[0] && yd(a), px(c, a)
      );
    }
    return i;
  };
}
var zj = (e) => typeof e == "function",
  tl = (e, t) => (zj(e) ? e(t) : e),
  Bj = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  mx = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  Vj = 20,
  gx = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Vj) };
      case 1:
        return {
          ...e,
          toasts: e.toasts.map((s) =>
            s.id === t.toast.id ? { ...s, ...t.toast } : s
          ),
        };
      case 2:
        let { toast: n } = t;
        return gx(e, {
          type: e.toasts.find((s) => s.id === n.id) ? 1 : 0,
          toast: n,
        });
      case 3:
        let { toastId: r } = t;
        return {
          ...e,
          toasts: e.toasts.map((s) =>
            s.id === r || r === void 0
              ? { ...s, dismissed: !0, visible: !1 }
              : s
          ),
        };
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((s) => s.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let i = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((s) => ({
            ...s,
            pauseDuration: s.pauseDuration + i,
          })),
        };
    }
  },
  ya = [],
  dr = { toasts: [], pausedAt: void 0 },
  Or = (e) => {
    (dr = gx(dr, e)),
      ya.forEach((t) => {
        t(dr);
      });
  },
  $j = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Uj = (e = {}) => {
    let [t, n] = b.useState(dr),
      r = b.useRef(dr);
    b.useEffect(
      () => (
        r.current !== dr && n(dr),
        ya.push(n),
        () => {
          let s = ya.indexOf(n);
          s > -1 && ya.splice(s, 1);
        }
      ),
      []
    );
    let i = t.toasts.map((s) => {
      var o, a, l;
      return {
        ...e,
        ...e[s.type],
        ...s,
        removeDelay:
          s.removeDelay ||
          ((o = e[s.type]) == null ? void 0 : o.removeDelay) ||
          (e == null ? void 0 : e.removeDelay),
        duration:
          s.duration ||
          ((a = e[s.type]) == null ? void 0 : a.duration) ||
          (e == null ? void 0 : e.duration) ||
          $j[s.type],
        style: {
          ...e.style,
          ...((l = e[s.type]) == null ? void 0 : l.style),
          ...s.style,
        },
      };
    });
    return { ...t, toasts: i };
  },
  Hj = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Bj(),
  }),
  xo = (e) => (t, n) => {
    let r = Hj(t, e, n);
    return Or({ type: 2, toast: r }), r.id;
  },
  He = (e, t) => xo("blank")(e, t);
He.error = xo("error");
He.success = xo("success");
He.loading = xo("loading");
He.custom = xo("custom");
He.dismiss = (e) => {
  Or({ type: 3, toastId: e });
};
He.remove = (e) => Or({ type: 4, toastId: e });
He.promise = (e, t, n) => {
  let r = He.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    typeof e == "function" && (e = e()),
    e
      .then((i) => {
        let s = t.success ? tl(t.success, i) : void 0;
        return (
          s
            ? He.success(s, {
                id: r,
                ...n,
                ...(n == null ? void 0 : n.success),
              })
            : He.dismiss(r),
          i
        );
      })
      .catch((i) => {
        let s = t.error ? tl(t.error, i) : void 0;
        s
          ? He.error(s, { id: r, ...n, ...(n == null ? void 0 : n.error) })
          : He.dismiss(r);
      }),
    e
  );
};
var Wj = (e, t) => {
    Or({ type: 1, toast: { id: e, height: t } });
  },
  qj = () => {
    Or({ type: 5, time: Date.now() });
  },
  ws = new Map(),
  Gj = 1e3,
  Kj = (e, t = Gj) => {
    if (ws.has(e)) return;
    let n = setTimeout(() => {
      ws.delete(e), Or({ type: 4, toastId: e });
    }, t);
    ws.set(e, n);
  },
  Yj = (e) => {
    let { toasts: t, pausedAt: n } = Uj(e);
    b.useEffect(() => {
      if (n) return;
      let s = Date.now(),
        o = t.map((a) => {
          if (a.duration === 1 / 0) return;
          let l = (a.duration || 0) + a.pauseDuration - (s - a.createdAt);
          if (l < 0) {
            a.visible && He.dismiss(a.id);
            return;
          }
          return setTimeout(() => He.dismiss(a.id), l);
        });
      return () => {
        o.forEach((a) => a && clearTimeout(a));
      };
    }, [t, n]);
    let r = b.useCallback(() => {
        n && Or({ type: 6, time: Date.now() });
      }, [n]),
      i = b.useCallback(
        (s, o) => {
          let {
              reverseOrder: a = !1,
              gutter: l = 8,
              defaultPosition: c,
            } = o || {},
            d = t.filter(
              (y) => (y.position || c) === (s.position || c) && y.height
            ),
            f = d.findIndex((y) => y.id === s.id),
            h = d.filter((y, v) => v < f && y.visible).length;
          return d
            .filter((y) => y.visible)
            .slice(...(a ? [h + 1] : [0, h]))
            .reduce((y, v) => y + (v.height || 0) + l, 0);
        },
        [t]
      );
    return (
      b.useEffect(() => {
        t.forEach((s) => {
          if (s.dismissed) Kj(s.id, s.removeDelay);
          else {
            let o = ws.get(s.id);
            o && (clearTimeout(o), ws.delete(s.id));
          }
        });
      }, [t]),
      {
        toasts: t,
        handlers: {
          updateHeight: Wj,
          startPause: qj,
          endPause: r,
          calculateOffset: i,
        },
      }
    );
  },
  Qj = yn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Xj = yn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Jj = yn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Zj = er("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Qj} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Xj} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Jj} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  eT = yn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  tT = er("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${eT} 1s linear infinite;
`,
  nT = yn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  rT = yn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  iT = er("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${nT} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${rT} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  sT = er("div")`
  position: absolute;
`,
  oT = er("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  aT = yn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  lT = er("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${aT} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  uT = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? b.createElement(lT, null, t)
        : t
      : n === "blank"
      ? null
      : b.createElement(
          oT,
          null,
          b.createElement(tT, { ...r }),
          n !== "loading" &&
            b.createElement(
              sT,
              null,
              n === "error"
                ? b.createElement(Zj, { ...r })
                : b.createElement(iT, { ...r })
            )
        );
  },
  cT = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  dT = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  fT = "0%{opacity:0;} 100%{opacity:1;}",
  hT = "0%{opacity:1;} 100%{opacity:0;}",
  pT = er("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  mT = er("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  gT = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, i] = mx() ? [fT, hT] : [cT(n), dT(n)];
    return {
      animation: t
        ? `${yn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${yn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  yT = b.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? gT(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      s = b.createElement(uT, { toast: e }),
      o = b.createElement(mT, { ...e.ariaProps }, tl(e.message, e));
    return b.createElement(
      pT,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: s, message: o })
        : b.createElement(b.Fragment, null, s, o)
    );
  });
Fj(b.createElement);
var vT = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: i,
  }) => {
    let s = b.useCallback(
      (o) => {
        if (o) {
          let a = () => {
            let l = o.getBoundingClientRect().height;
            r(e, l);
          };
          a(),
            new MutationObserver(a).observe(o, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return b.createElement("div", { ref: s, className: t, style: n }, i);
  },
  xT = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      i = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: mx() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...i,
    };
  },
  wT = Wl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Qo = 16,
  bT = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: i,
    containerStyle: s,
    containerClassName: o,
  }) => {
    let { toasts: a, handlers: l } = Yj(n);
    return b.createElement(
      "div",
      {
        id: "_rht_toaster",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Qo,
          left: Qo,
          right: Qo,
          bottom: Qo,
          pointerEvents: "none",
          ...s,
        },
        className: o,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause,
      },
      a.map((c) => {
        let d = c.position || t,
          f = l.calculateOffset(c, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          h = xT(d, f);
        return b.createElement(
          vT,
          {
            id: c.id,
            key: c.id,
            onHeightUpdate: l.updateHeight,
            className: c.visible ? wT : "",
            style: h,
          },
          c.type === "custom"
            ? tl(c.message, c)
            : i
            ? i(c)
            : b.createElement(yT, { toast: c, position: d })
        );
      })
    );
  },
  Ne = He,
  ch = {};
Object.defineProperty(ch, "__esModule", { value: !0 });
ch.parse = ET;
ch.serialize = NT;
const ST = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
  jT = /^[\u0021-\u003A\u003C-\u007E]*$/,
  TT =
    /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  PT = /^[\u0020-\u003A\u003D-\u007E]*$/,
  CT = Object.prototype.toString,
  kT = (() => {
    const e = function () {};
    return (e.prototype = Object.create(null)), e;
  })();
function ET(e, t) {
  const n = new kT(),
    r = e.length;
  if (r < 2) return n;
  const i = (t == null ? void 0 : t.decode) || _T;
  let s = 0;
  do {
    const o = e.indexOf("=", s);
    if (o === -1) break;
    const a = e.indexOf(";", s),
      l = a === -1 ? r : a;
    if (o > l) {
      s = e.lastIndexOf(";", o - 1) + 1;
      continue;
    }
    const c = Tm(e, s, o),
      d = Pm(e, o, c),
      f = e.slice(c, d);
    if (n[f] === void 0) {
      let h = Tm(e, o + 1, l),
        y = Pm(e, l, h);
      const v = i(e.slice(h, y));
      n[f] = v;
    }
    s = l + 1;
  } while (s < r);
  return n;
}
function Tm(e, t, n) {
  do {
    const r = e.charCodeAt(t);
    if (r !== 32 && r !== 9) return t;
  } while (++t < n);
  return n;
}
function Pm(e, t, n) {
  for (; t > n; ) {
    const r = e.charCodeAt(--t);
    if (r !== 32 && r !== 9) return t + 1;
  }
  return n;
}
function NT(e, t, n) {
  const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
  if (!ST.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
  const i = r(t);
  if (!jT.test(i)) throw new TypeError(`argument val is invalid: ${t}`);
  let s = e + "=" + i;
  if (!n) return s;
  if (n.maxAge !== void 0) {
    if (!Number.isInteger(n.maxAge))
      throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
    s += "; Max-Age=" + n.maxAge;
  }
  if (n.domain) {
    if (!TT.test(n.domain))
      throw new TypeError(`option domain is invalid: ${n.domain}`);
    s += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!PT.test(n.path))
      throw new TypeError(`option path is invalid: ${n.path}`);
    s += "; Path=" + n.path;
  }
  if (n.expires) {
    if (!OT(n.expires) || !Number.isFinite(n.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${n.expires}`);
    s += "; Expires=" + n.expires.toUTCString();
  }
  if (
    (n.httpOnly && (s += "; HttpOnly"),
    n.secure && (s += "; Secure"),
    n.partitioned && (s += "; Partitioned"),
    n.priority)
  )
    switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
      case "low":
        s += "; Priority=Low";
        break;
      case "medium":
        s += "; Priority=Medium";
        break;
      case "high":
        s += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${n.priority}`);
    }
  if (n.sameSite)
    switch (
      typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite
    ) {
      case !0:
      case "strict":
        s += "; SameSite=Strict";
        break;
      case "lax":
        s += "; SameSite=Lax";
        break;
      case "none":
        s += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
    }
  return s;
}
function _T(e) {
  if (e.indexOf("%") === -1) return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function OT(e) {
  return CT.call(e) === "[object Date]";
}
/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Cm = "popstate";
function AT(e = {}) {
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return vd(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Gs(i);
  }
  return LT(t, n, null, e);
}
function pe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Zt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function RT() {
  return Math.random().toString(36).substring(2, 10);
}
function km(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function vd(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Li(t) : t),
    state: n,
    key: (t && t.key) || r || RT(),
  };
}
function Gs({ pathname: e = "/", search: t = "", hash: n = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function Li(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function LT(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = "POP",
    l = null,
    c = d();
  c == null && ((c = 0), o.replaceState({ ...o.state, idx: c }, ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = "POP";
    let w = d(),
      p = w == null ? null : w - c;
    (c = w), l && l({ action: a, location: x.location, delta: p });
  }
  function h(w, p) {
    a = "PUSH";
    let m = vd(x.location, w, p);
    c = d() + 1;
    let g = km(m, c),
      S = x.createHref(m);
    try {
      o.pushState(g, "", S);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      i.location.assign(S);
    }
    s && l && l({ action: a, location: x.location, delta: 1 });
  }
  function y(w, p) {
    a = "REPLACE";
    let m = vd(x.location, w, p);
    c = d();
    let g = km(m, c),
      S = x.createHref(m);
    o.replaceState(g, "", S),
      s && l && l({ action: a, location: x.location, delta: 0 });
  }
  function v(w) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      m = typeof w == "string" ? w : Gs(w);
    return (
      (m = m.replace(/ $/, "%20")),
      pe(
        p,
        `No window.location.(origin|href) available to create URL for href: ${m}`
      ),
      new URL(m, p)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Cm, f),
        (l = w),
        () => {
          i.removeEventListener(Cm, f), (l = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: v,
    encodeLocation(w) {
      let p = v(w);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: y,
    go(w) {
      return o.go(w);
    },
  };
  return x;
}
function yx(e, t, n = "/") {
  return MT(e, t, n, !1);
}
function MT(e, t, n, r) {
  let i = typeof t == "string" ? Li(t) : t,
    s = vn(i.pathname || "/", n);
  if (s == null) return null;
  let o = vx(e);
  DT(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let c = GT(s);
    a = WT(o[l], c, r);
  }
  return a;
}
function vx(e, t = [], n = [], r = "") {
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (pe(
        l.relativePath.startsWith(r),
        `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let c = fn([r, l.relativePath]),
      d = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (pe(
        s.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${c}".`
      ),
      vx(s.children, t, d, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: UT(c, s.index), routesMeta: d });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of xx(s.path)) i(s, o, l);
    }),
    t
  );
}
function xx(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = xx(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function DT(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : HT(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var IT = /^:[\w-]+$/,
  FT = 3,
  zT = 2,
  BT = 1,
  VT = 10,
  $T = -2,
  Em = (e) => e === "*";
function UT(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Em) && (r += $T),
    t && (r += zT),
    n
      .filter((i) => !Em(i))
      .reduce((i, s) => i + (IT.test(s) ? FT : s === "" ? BT : VT), r)
  );
}
function HT(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function WT(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      c = a === r.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      f = nl(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        d
      ),
      h = l.route;
    if (
      (!f &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (f = nl(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      o.push({
        params: i,
        pathname: fn([s, f.pathname]),
        pathnameBase: XT(fn([s, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (s = fn([s, f.pathnameBase]));
  }
  return o;
}
function nl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = qT(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((c, { paramName: d, isOptional: f }, h) => {
      if (d === "*") {
        let v = a[h] || "";
        o = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[h];
      return (
        f && !y ? (c[d] = void 0) : (c[d] = (y || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function qT(e, t = !1, n = !0) {
  Zt(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function GT(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Zt(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function vn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function KT(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Li(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : YT(n, t)) : t,
    search: JT(r),
    hash: ZT(i),
  };
}
function YT(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Uu(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function QT(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function wx(e) {
  let t = QT(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function bx(e, t, n, r = !1) {
  let i;
  typeof e == "string"
    ? (i = Li(e))
    : ((i = { ...e }),
      pe(
        !i.pathname || !i.pathname.includes("?"),
        Uu("?", "pathname", "search", i)
      ),
      pe(
        !i.pathname || !i.pathname.includes("#"),
        Uu("#", "pathname", "hash", i)
      ),
      pe(!i.search || !i.search.includes("#"), Uu("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      i.pathname = h.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = KT(i, a),
    c = o && o !== "/" && o.endsWith("/"),
    d = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l;
}
var fn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  XT = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  JT = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ZT = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function eP(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var Sx = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Sx);
var tP = ["GET", ...Sx];
new Set(tP);
var Mi = b.createContext(null);
Mi.displayName = "DataRouter";
var ql = b.createContext(null);
ql.displayName = "DataRouterState";
var jx = b.createContext({ isTransitioning: !1 });
jx.displayName = "ViewTransition";
var nP = b.createContext(new Map());
nP.displayName = "Fetchers";
var rP = b.createContext(null);
rP.displayName = "Await";
var tn = b.createContext(null);
tn.displayName = "Navigation";
var wo = b.createContext(null);
wo.displayName = "Location";
var nn = b.createContext({ outlet: null, matches: [], isDataRoute: !1 });
nn.displayName = "Route";
var dh = b.createContext(null);
dh.displayName = "RouteError";
function iP(e, { relative: t } = {}) {
  pe(
    bo(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: n, navigator: r } = b.useContext(tn),
    { hash: i, pathname: s, search: o } = So(e, { relative: t }),
    a = s;
  return (
    n !== "/" && (a = s === "/" ? n : fn([n, s])),
    r.createHref({ pathname: a, search: o, hash: i })
  );
}
function bo() {
  return b.useContext(wo) != null;
}
function Ar() {
  return (
    pe(
      bo(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    b.useContext(wo).location
  );
}
var Tx =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Px(e) {
  b.useContext(tn).static || b.useLayoutEffect(e);
}
function Gl() {
  let { isDataRoute: e } = b.useContext(nn);
  return e ? vP() : sP();
}
function sP() {
  pe(
    bo(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = b.useContext(Mi),
    { basename: t, navigator: n } = b.useContext(tn),
    { matches: r } = b.useContext(nn),
    { pathname: i } = Ar(),
    s = JSON.stringify(wx(r)),
    o = b.useRef(!1);
  return (
    Px(() => {
      o.current = !0;
    }),
    b.useCallback(
      (l, c = {}) => {
        if ((Zt(o.current, Tx), !o.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let d = bx(l, JSON.parse(s), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : fn([t, d.pathname])),
          (c.replace ? n.replace : n.push)(d, c.state, c);
      },
      [t, n, s, i, e]
    )
  );
}
b.createContext(null);
function oP() {
  let { matches: e } = b.useContext(nn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function So(e, { relative: t } = {}) {
  let { matches: n } = b.useContext(nn),
    { pathname: r } = Ar(),
    i = JSON.stringify(wx(n));
  return b.useMemo(() => bx(e, JSON.parse(i), r, t === "path"), [e, i, r, t]);
}
function aP(e, t) {
  return Cx(e, t);
}
function Cx(e, t, n, r) {
  var m;
  pe(
    bo(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: i, static: s } = b.useContext(tn),
    { matches: o } = b.useContext(nn),
    a = o[o.length - 1],
    l = a ? a.params : {},
    c = a ? a.pathname : "/",
    d = a ? a.pathnameBase : "/",
    f = a && a.route;
  {
    let g = (f && f.path) || "";
    kx(
      c,
      !f || g.endsWith("*") || g.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${
        g === "/" ? "*" : `${g}/*`
      }">.`
    );
  }
  let h = Ar(),
    y;
  if (t) {
    let g = typeof t == "string" ? Li(t) : t;
    pe(
      d === "/" || ((m = g.pathname) == null ? void 0 : m.startsWith(d)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${g.pathname}" was given in the \`location\` prop.`
    ),
      (y = g);
  } else y = h;
  let v = y.pathname || "/",
    x = v;
  if (d !== "/") {
    let g = d.replace(/^\//, "").split("/");
    x = "/" + v.replace(/^\//, "").split("/").slice(g.length).join("/");
  }
  let w =
    !s && n && n.matches && n.matches.length > 0
      ? n.matches
      : yx(e, { pathname: x });
  Zt(
    f || w != null,
    `No routes matched location "${y.pathname}${y.search}${y.hash}" `
  ),
    Zt(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let p = fP(
    w &&
      w.map((g) =>
        Object.assign({}, g, {
          params: Object.assign({}, l, g.params),
          pathname: fn([
            d,
            i.encodeLocation
              ? i.encodeLocation(g.pathname).pathname
              : g.pathname,
          ]),
          pathnameBase:
            g.pathnameBase === "/"
              ? d
              : fn([
                  d,
                  i.encodeLocation
                    ? i.encodeLocation(g.pathnameBase).pathname
                    : g.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
  return t && p
    ? b.createElement(
        wo.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...y,
            },
            navigationType: "POP",
          },
        },
        p
      )
    : p;
}
function lP() {
  let e = yP(),
    t = eP(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    i = { padding: "0.5rem", backgroundColor: r },
    s = { padding: "2px 4px", backgroundColor: r },
    o = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (o = b.createElement(
      b.Fragment,
      null,
      b.createElement("p", null, "💿 Hey developer 👋"),
      b.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        b.createElement("code", { style: s }, "ErrorBoundary"),
        " or",
        " ",
        b.createElement("code", { style: s }, "errorElement"),
        " prop on your route."
      )
    )),
    b.createElement(
      b.Fragment,
      null,
      b.createElement("h2", null, "Unexpected Application Error!"),
      b.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? b.createElement("pre", { style: i }, n) : null,
      o
    )
  );
}
var uP = b.createElement(lP, null),
  cP = class extends b.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? b.createElement(
            nn.Provider,
            { value: this.props.routeContext },
            b.createElement(dh.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function dP({ routeContext: e, match: t, children: n }) {
  let r = b.useContext(Mi);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    b.createElement(nn.Provider, { value: e }, n)
  );
}
function fP(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let i = e,
    s = n == null ? void 0 : n.errors;
  if (s != null) {
    let l = i.findIndex(
      (c) => c.route.id && (s == null ? void 0 : s[c.route.id]) !== void 0
    );
    pe(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        s
      ).join(",")}`
    ),
      (i = i.slice(0, Math.min(i.length, l + 1)));
  }
  let o = !1,
    a = -1;
  if (n)
    for (let l = 0; l < i.length; l++) {
      let c = i[l];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (a = l),
        c.route.id)
      ) {
        let { loaderData: d, errors: f } = n,
          h =
            c.route.loader &&
            !d.hasOwnProperty(c.route.id) &&
            (!f || f[c.route.id] === void 0);
        if (c.route.lazy || h) {
          (o = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((l, c, d) => {
    let f,
      h = !1,
      y = null,
      v = null;
    n &&
      ((f = s && c.route.id ? s[c.route.id] : void 0),
      (y = c.route.errorElement || uP),
      o &&
        (a < 0 && d === 0
          ? (kx(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (h = !0),
            (v = null))
          : a === d &&
            ((h = !0), (v = c.route.hydrateFallbackElement || null))));
    let x = t.concat(i.slice(0, d + 1)),
      w = () => {
        let p;
        return (
          f
            ? (p = y)
            : h
            ? (p = v)
            : c.route.Component
            ? (p = b.createElement(c.route.Component, null))
            : c.route.element
            ? (p = c.route.element)
            : (p = l),
          b.createElement(dP, {
            match: c,
            routeContext: { outlet: l, matches: x, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || d === 0)
      ? b.createElement(cP, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: f,
          children: w(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : w();
  }, null);
}
function fh(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hP(e) {
  let t = b.useContext(Mi);
  return pe(t, fh(e)), t;
}
function pP(e) {
  let t = b.useContext(ql);
  return pe(t, fh(e)), t;
}
function mP(e) {
  let t = b.useContext(nn);
  return pe(t, fh(e)), t;
}
function hh(e) {
  let t = mP(e),
    n = t.matches[t.matches.length - 1];
  return (
    pe(
      n.route.id,
      `${e} can only be used on routes that contain a unique "id"`
    ),
    n.route.id
  );
}
function gP() {
  return hh("useRouteId");
}
function yP() {
  var r;
  let e = b.useContext(dh),
    t = pP("useRouteError"),
    n = hh("useRouteError");
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function vP() {
  let { router: e } = hP("useNavigate"),
    t = hh("useNavigate"),
    n = b.useRef(!1);
  return (
    Px(() => {
      n.current = !0;
    }),
    b.useCallback(
      async (i, s = {}) => {
        Zt(n.current, Tx),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : await e.navigate(i, { fromRouteId: t, ...s }));
      },
      [e, t]
    )
  );
}
var Nm = {};
function kx(e, t, n) {
  !t && !Nm[e] && ((Nm[e] = !0), Zt(!1, n));
}
b.memo(xP);
function xP({ routes: e, future: t, state: n }) {
  return Cx(e, void 0, n, t);
}
function Ht(e) {
  pe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function wP({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: i,
  static: s = !1,
}) {
  pe(
    !bo(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let o = e.replace(/^\/*/, "/"),
    a = b.useMemo(
      () => ({ basename: o, navigator: i, static: s, future: {} }),
      [o, i, s]
    );
  typeof n == "string" && (n = Li(n));
  let {
      pathname: l = "/",
      search: c = "",
      hash: d = "",
      state: f = null,
      key: h = "default",
    } = n,
    y = b.useMemo(() => {
      let v = vn(l, o);
      return v == null
        ? null
        : {
            location: { pathname: v, search: c, hash: d, state: f, key: h },
            navigationType: r,
          };
    }, [o, l, c, d, f, h, r]);
  return (
    Zt(
      y != null,
      `<Router basename="${o}"> is not able to match the URL "${l}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    y == null
      ? null
      : b.createElement(
          tn.Provider,
          { value: a },
          b.createElement(wo.Provider, { children: t, value: y })
        )
  );
}
function bP({ children: e, location: t }) {
  return aP(xd(e), t);
}
function xd(e, t = []) {
  let n = [];
  return (
    b.Children.forEach(e, (r, i) => {
      if (!b.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === b.Fragment) {
        n.push.apply(n, xd(r.props.children, s));
        return;
      }
      pe(
        r.type === Ht,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        pe(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = xd(r.props.children, s)), n.push(o);
    }),
    n
  );
}
var va = "get",
  xa = "application/x-www-form-urlencoded";
function Kl(e) {
  return e != null && typeof e.tagName == "string";
}
function SP(e) {
  return Kl(e) && e.tagName.toLowerCase() === "button";
}
function jP(e) {
  return Kl(e) && e.tagName.toLowerCase() === "form";
}
function TP(e) {
  return Kl(e) && e.tagName.toLowerCase() === "input";
}
function PP(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function CP(e, t) {
  return e.button === 0 && (!t || t === "_self") && !PP(e);
}
var Xo = null;
function kP() {
  if (Xo === null)
    try {
      new FormData(document.createElement("form"), 0), (Xo = !1);
    } catch {
      Xo = !0;
    }
  return Xo;
}
var EP = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Hu(e) {
  return e != null && !EP.has(e)
    ? (Zt(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xa}"`
      ),
      null)
    : e;
}
function NP(e, t) {
  let n, r, i, s, o;
  if (jP(e)) {
    let a = e.getAttribute("action");
    (r = a ? vn(a, t) : null),
      (n = e.getAttribute("method") || va),
      (i = Hu(e.getAttribute("enctype")) || xa),
      (s = new FormData(e));
  } else if (SP(e) || (TP(e) && (e.type === "submit" || e.type === "image"))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || a.getAttribute("action");
    if (
      ((r = l ? vn(l, t) : null),
      (n = e.getAttribute("formmethod") || a.getAttribute("method") || va),
      (i =
        Hu(e.getAttribute("formenctype")) ||
        Hu(a.getAttribute("enctype")) ||
        xa),
      (s = new FormData(a, e)),
      !kP())
    ) {
      let { name: c, type: d, value: f } = e;
      if (d === "image") {
        let h = c ? `${c}.` : "";
        s.append(`${h}x`, "0"), s.append(`${h}y`, "0");
      } else c && s.append(c, f);
    }
  } else {
    if (Kl(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = va), (r = null), (i = xa), (o = e);
  }
  return (
    s && i === "text/plain" && ((o = s), (s = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: s, body: o }
  );
}
function ph(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function _P(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function OP(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function AP(e, t, n) {
  let r = await Promise.all(
    e.map(async (i) => {
      let s = t.routes[i.route.id];
      if (s) {
        let o = await _P(s, n);
        return o.links ? o.links() : [];
      }
      return [];
    })
  );
  return DP(
    r
      .flat(1)
      .filter(OP)
      .filter((i) => i.rel === "stylesheet" || i.rel === "preload")
      .map((i) =>
        i.rel === "stylesheet"
          ? { ...i, rel: "prefetch", as: "style" }
          : { ...i, rel: "prefetch" }
      )
  );
}
function _m(e, t, n, r, i, s) {
  let o = (l, c) => (n[c] ? l.route.id !== n[c].route.id : !0),
    a = (l, c) => {
      var d;
      return (
        n[c].pathname !== l.pathname ||
        (((d = n[c].route.path) == null ? void 0 : d.endsWith("*")) &&
          n[c].params["*"] !== l.params["*"])
      );
    };
  return s === "assets"
    ? t.filter((l, c) => o(l, c) || a(l, c))
    : s === "data"
    ? t.filter((l, c) => {
        var f;
        let d = r.routes[l.route.id];
        if (!d || !d.hasLoader) return !1;
        if (o(l, c) || a(l, c)) return !0;
        if (l.route.shouldRevalidate) {
          let h = l.route.shouldRevalidate({
            currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
            currentParams: ((f = n[0]) == null ? void 0 : f.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: l.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof h == "boolean") return h;
        }
        return !0;
      })
    : [];
}
function RP(e, t, { includeHydrateFallback: n } = {}) {
  return LP(
    e
      .map((r) => {
        let i = t.routes[r.route.id];
        if (!i) return [];
        let s = [i.module];
        return (
          i.clientActionModule && (s = s.concat(i.clientActionModule)),
          i.clientLoaderModule && (s = s.concat(i.clientLoaderModule)),
          n &&
            i.hydrateFallbackModule &&
            (s = s.concat(i.hydrateFallbackModule)),
          i.imports && (s = s.concat(i.imports)),
          s
        );
      })
      .flat(1)
  );
}
function LP(e) {
  return [...new Set(e)];
}
function MP(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function DP(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, i) => {
      let s = JSON.stringify(MP(i));
      return n.has(s) || (n.add(s), r.push({ key: s, link: i })), r;
    }, [])
  );
}
function IP(e, t) {
  let n =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    n.pathname === "/"
      ? (n.pathname = "_root.data")
      : t && vn(n.pathname, t) === "/"
      ? (n.pathname = `${t.replace(/\/$/, "")}/_root.data`)
      : (n.pathname = `${n.pathname.replace(/\/$/, "")}.data`),
    n
  );
}
function Ex() {
  let e = b.useContext(Mi);
  return (
    ph(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function FP() {
  let e = b.useContext(ql);
  return (
    ph(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var mh = b.createContext(void 0);
mh.displayName = "FrameworkContext";
function Nx() {
  let e = b.useContext(mh);
  return (
    ph(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function zP(e, t) {
  let n = b.useContext(mh),
    [r, i] = b.useState(!1),
    [s, o] = b.useState(!1),
    {
      onFocus: a,
      onBlur: l,
      onMouseEnter: c,
      onMouseLeave: d,
      onTouchStart: f,
    } = t,
    h = b.useRef(null);
  b.useEffect(() => {
    if ((e === "render" && o(!0), e === "viewport")) {
      let x = (p) => {
          p.forEach((m) => {
            o(m.isIntersecting);
          });
        },
        w = new IntersectionObserver(x, { threshold: 0.5 });
      return (
        h.current && w.observe(h.current),
        () => {
          w.disconnect();
        }
      );
    }
  }, [e]),
    b.useEffect(() => {
      if (r) {
        let x = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(x);
        };
      }
    }, [r]);
  let y = () => {
      i(!0);
    },
    v = () => {
      i(!1), o(!1);
    };
  return n
    ? e !== "intent"
      ? [s, h, {}]
      : [
          s,
          h,
          {
            onFocus: Xi(a, y),
            onBlur: Xi(l, v),
            onMouseEnter: Xi(c, y),
            onMouseLeave: Xi(d, v),
            onTouchStart: Xi(f, y),
          },
        ]
    : [!1, h, {}];
}
function Xi(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function BP({ page: e, ...t }) {
  let { router: n } = Ex(),
    r = b.useMemo(() => yx(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? b.createElement($P, { page: e, matches: r, ...t }) : null;
}
function VP(e) {
  let { manifest: t, routeModules: n } = Nx(),
    [r, i] = b.useState([]);
  return (
    b.useEffect(() => {
      let s = !1;
      return (
        AP(e, t, n).then((o) => {
          s || i(o);
        }),
        () => {
          s = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function $P({ page: e, matches: t, ...n }) {
  let r = Ar(),
    { manifest: i, routeModules: s } = Nx(),
    { basename: o } = Ex(),
    { loaderData: a, matches: l } = FP(),
    c = b.useMemo(() => _m(e, t, l, i, r, "data"), [e, t, l, i, r]),
    d = b.useMemo(() => _m(e, t, l, i, r, "assets"), [e, t, l, i, r]),
    f = b.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let v = new Set(),
        x = !1;
      if (
        (t.forEach((p) => {
          var g;
          let m = i.routes[p.route.id];
          !m ||
            !m.hasLoader ||
            ((!c.some((S) => S.route.id === p.route.id) &&
              p.route.id in a &&
              (g = s[p.route.id]) != null &&
              g.shouldRevalidate) ||
            m.hasClientLoader
              ? (x = !0)
              : v.add(p.route.id));
        }),
        v.size === 0)
      )
        return [];
      let w = IP(e, o);
      return (
        x &&
          v.size > 0 &&
          w.searchParams.set(
            "_routes",
            t
              .filter((p) => v.has(p.route.id))
              .map((p) => p.route.id)
              .join(",")
          ),
        [w.pathname + w.search]
      );
    }, [o, a, r, i, c, t, e, s]),
    h = b.useMemo(() => RP(d, i), [d, i]),
    y = VP(d);
  return b.createElement(
    b.Fragment,
    null,
    f.map((v) =>
      b.createElement("link", {
        key: v,
        rel: "prefetch",
        as: "fetch",
        href: v,
        ...n,
      })
    ),
    h.map((v) =>
      b.createElement("link", { key: v, rel: "modulepreload", href: v, ...n })
    ),
    y.map(({ key: v, link: x }) => b.createElement("link", { key: v, ...x }))
  );
}
function UP(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var _x =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  _x && (window.__reactRouterVersion = "7.3.0");
} catch {}
function HP({ basename: e, children: t, window: n }) {
  let r = b.useRef();
  r.current == null && (r.current = AT({ window: n, v5Compat: !0 }));
  let i = r.current,
    [s, o] = b.useState({ action: i.action, location: i.location }),
    a = b.useCallback(
      (l) => {
        b.startTransition(() => o(l));
      },
      [o]
    );
  return (
    b.useLayoutEffect(() => i.listen(a), [i, a]),
    b.createElement(wP, {
      basename: e,
      children: t,
      location: s.location,
      navigationType: s.action,
      navigator: i,
    })
  );
}
var Ox = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ax = b.forwardRef(function (
    {
      onClick: t,
      discover: n = "render",
      prefetch: r = "none",
      relative: i,
      reloadDocument: s,
      replace: o,
      state: a,
      target: l,
      to: c,
      preventScrollReset: d,
      viewTransition: f,
      ...h
    },
    y
  ) {
    let { basename: v } = b.useContext(tn),
      x = typeof c == "string" && Ox.test(c),
      w,
      p = !1;
    if (typeof c == "string" && x && ((w = c), _x))
      try {
        let P = new URL(window.location.href),
          E = c.startsWith("//") ? new URL(P.protocol + c) : new URL(c),
          L = vn(E.pathname, v);
        E.origin === P.origin && L != null
          ? (c = L + E.search + E.hash)
          : (p = !0);
      } catch {
        Zt(
          !1,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let m = iP(c, { relative: i }),
      [g, S, j] = zP(r, h),
      T = KP(c, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: i,
        viewTransition: f,
      });
    function k(P) {
      t && t(P), P.defaultPrevented || T(P);
    }
    let N = b.createElement("a", {
      ...h,
      ...j,
      href: w || m,
      onClick: p || s ? t : k,
      ref: UP(y, S),
      target: l,
      "data-discover": !x && n === "render" ? "true" : void 0,
    });
    return g && !x
      ? b.createElement(b.Fragment, null, N, b.createElement(BP, { page: m }))
      : N;
  });
Ax.displayName = "Link";
var WP = b.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: i = !1,
    style: s,
    to: o,
    viewTransition: a,
    children: l,
    ...c
  },
  d
) {
  let f = So(o, { relative: c.relative }),
    h = Ar(),
    y = b.useContext(ql),
    { navigator: v, basename: x } = b.useContext(tn),
    w = y != null && ZP(f) && a === !0,
    p = v.encodeLocation ? v.encodeLocation(f).pathname : f.pathname,
    m = h.pathname,
    g =
      y && y.navigation && y.navigation.location
        ? y.navigation.location.pathname
        : null;
  n ||
    ((m = m.toLowerCase()),
    (g = g ? g.toLowerCase() : null),
    (p = p.toLowerCase())),
    g && x && (g = vn(g, x) || g);
  const S = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
  let j = m === p || (!i && m.startsWith(p) && m.charAt(S) === "/"),
    T =
      g != null &&
      (g === p || (!i && g.startsWith(p) && g.charAt(p.length) === "/")),
    k = { isActive: j, isPending: T, isTransitioning: w },
    N = j ? t : void 0,
    P;
  typeof r == "function"
    ? (P = r(k))
    : (P = [
        r,
        j ? "active" : null,
        T ? "pending" : null,
        w ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let E = typeof s == "function" ? s(k) : s;
  return b.createElement(
    Ax,
    {
      ...c,
      "aria-current": N,
      className: P,
      ref: d,
      style: E,
      to: o,
      viewTransition: a,
    },
    typeof l == "function" ? l(k) : l
  );
});
WP.displayName = "NavLink";
var qP = b.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: s,
      method: o = va,
      action: a,
      onSubmit: l,
      relative: c,
      preventScrollReset: d,
      viewTransition: f,
      ...h
    },
    y
  ) => {
    let v = XP(),
      x = JP(a, { relative: c }),
      w = o.toLowerCase() === "get" ? "get" : "post",
      p = typeof a == "string" && Ox.test(a),
      m = (g) => {
        if ((l && l(g), g.defaultPrevented)) return;
        g.preventDefault();
        let S = g.nativeEvent.submitter,
          j = (S == null ? void 0 : S.getAttribute("formmethod")) || o;
        v(S || g.currentTarget, {
          fetcherKey: t,
          method: j,
          navigate: n,
          replace: i,
          state: s,
          relative: c,
          preventScrollReset: d,
          viewTransition: f,
        });
      };
    return b.createElement("form", {
      ref: y,
      method: w,
      action: x,
      onSubmit: r ? l : m,
      ...h,
      "data-discover": !p && e === "render" ? "true" : void 0,
    });
  }
);
qP.displayName = "Form";
function GP(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rx(e) {
  let t = b.useContext(Mi);
  return pe(t, GP(e)), t;
}
function KP(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: i,
    relative: s,
    viewTransition: o,
  } = {}
) {
  let a = Gl(),
    l = Ar(),
    c = So(e, { relative: s });
  return b.useCallback(
    (d) => {
      if (CP(d, t)) {
        d.preventDefault();
        let f = n !== void 0 ? n : Gs(l) === Gs(c);
        a(e, {
          replace: f,
          state: r,
          preventScrollReset: i,
          relative: s,
          viewTransition: o,
        });
      }
    },
    [l, a, c, n, r, t, e, i, s, o]
  );
}
var YP = 0,
  QP = () => `__${String(++YP)}__`;
function XP() {
  let { router: e } = Rx("useSubmit"),
    { basename: t } = b.useContext(tn),
    n = gP();
  return b.useCallback(
    async (r, i = {}) => {
      let { action: s, method: o, encType: a, formData: l, body: c } = NP(r, t);
      if (i.navigate === !1) {
        let d = i.fetcherKey || QP();
        await e.fetch(d, n, i.action || s, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: c,
          formMethod: i.method || o,
          formEncType: i.encType || a,
          flushSync: i.flushSync,
        });
      } else
        await e.navigate(i.action || s, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: c,
          formMethod: i.method || o,
          formEncType: i.encType || a,
          replace: i.replace,
          state: i.state,
          fromRouteId: n,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition,
        });
    },
    [e, t, n]
  );
}
function JP(e, { relative: t } = {}) {
  let { basename: n } = b.useContext(tn),
    r = b.useContext(nn);
  pe(r, "useFormAction must be used inside a RouteContext");
  let [i] = r.matches.slice(-1),
    s = { ...So(e || ".", { relative: t }) },
    o = Ar();
  if (e == null) {
    s.search = o.search;
    let a = new URLSearchParams(s.search),
      l = a.getAll("index");
    if (l.some((d) => d === "")) {
      a.delete("index"),
        l.filter((f) => f).forEach((f) => a.append("index", f));
      let d = a.toString();
      s.search = d ? `?${d}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      i.route.index &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (s.pathname = s.pathname === "/" ? n : fn([n, s.pathname])),
    Gs(s)
  );
}
function ZP(e, t = {}) {
  let n = b.useContext(jx);
  pe(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = Rx("useViewTransitionState"),
    i = So(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let s = vn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = vn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return nl(i.pathname, o) != null || nl(i.pathname, s) != null;
}
new TextEncoder();
const eC = () => (
    b.useEffect(() => {
      if (
        ([
          { rel: "preload", href: "/logo.svg", as: "image" },
          {
            rel: "preload",
            href: "/fonts/ClashDisplayVariable.ttf",
            as: "font",
            crossOrigin: "anonymous",
          },
          {
            rel: "preload",
            href: "/fonts/Satosh.otf",
            as: "font",
            crossOrigin: "anonymous",
          },
        ].forEach((r) => {
          const i = document.createElement("link");
          Object.assign(i, r), document.head.appendChild(i);
        }),
        ["/pulsescout", "/pulsegen", "/blogs", "/contactus"].forEach((r) => {
          const i = document.createElement("link");
          (i.rel = "prefetch"), (i.href = r), document.head.appendChild(i);
        }),
        document.querySelectorAll("img").forEach((r) => {
          r.loading || (r.loading = "lazy"),
            r.decoding || (r.decoding = "async");
        }),
        "IntersectionObserver" in window)
      ) {
        const r = new IntersectionObserver((i, s) => {
          i.forEach((o) => {
            if (o.isIntersecting) {
              const a = o.target;
              a.dataset.src &&
                ((a.src = a.dataset.src),
                a.removeAttribute("data-src"),
                s.unobserve(a));
            }
          });
        });
        document.querySelectorAll("img[data-src]").forEach((i) => {
          r.observe(i);
        });
      }
      return () => {
        document
          .querySelectorAll('link[rel="preload"], link[rel="prefetch"]')
          .forEach((r) => {
            (r.href.includes("/fonts/") || r.href.includes("/logo.svg")) &&
              r.remove();
          });
      };
    }, []),
    null
  ),
  bt = (e) => {
    const t = document.getElementById(e);
    t && t.scrollIntoView({ behavior: "smooth", block: "start" });
  },
  Rr = () => {
    const e = () => {
        const n = `${window.location.origin}/blogs`;
        window.open(n, "_blank");
      },
      t = () => {
        window.open("https://t.me/PulseAI_network", "_blank");
      };
    return u.jsx("div", {
      className: "h-1/2 w-full text-white py-10 border-t-2 border-[#144E40]",
      children: u.jsxs("div", {
        className: "max-w-[1440px] mx-auto px-5 md:px-10",
        children: [
          u.jsxs("div", {
            className:
              "flex flex-col lg:flex-row flex-wrap justify-center items-center lg:justify-between lg:items-start gap-10 lg:gap-0 text-center lg:text-left pl-0 lg:pl-20",
            children: [
              u.jsxs("div", {
                className:
                  "flex flex-col items-center lg:items-start space-y-4",
                children: [
                  u.jsx("img", {
                    src: "/logotxt.png",
                    className: "w-[120px] h-auto",
                    alt: "path pulse logo",
                  }),
                  u.jsx("p", {
                    className: "text-[12px] md:text-[14px]",
                    children: "Let's Build Smarter Cities Together",
                  }),
                  u.jsx("div", {
                    className: "flex lg:gap-x-[24px] gap-x-[13px] mt-[24px]",
                    children: [
                      {
                        src: "/Twitter.svg",
                        link: "https://twitter.com/pathpulse_ai",
                      },
                      {
                        src: "/Telegram.svg",
                        link: "https://t.me/PulseAI_network",
                      },
                      {
                        src: "/dextools.png",
                        link: "https://www.dextools.io/app/en/ether/pair-explorer/0x8297201ee09f1f7d608123317ecc4785942d1932",
                      },
                      {
                        src: "/dexscreener.png",
                        link: "https://dexscreener.com/ethereum/0x8297201ee09f1f7d608123317ecc4785942d1932",
                      },
                    ].map((n, r) =>
                      u.jsx(
                        "img",
                        {
                          src: n.src,
                          alt: "social icon",
                          onClick: () => window.open(n.link, "_blank"),
                          className:
                            "w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] cursor-pointer",
                        },
                        r
                      )
                    ),
                  }),
                ],
              }),
              u.jsx("div", {
                className: "flex flex-col space-y-4",
                children: u.jsxs("div", {
                  className:
                    "grid grid-cols-2 gap-x-4 gap-y-3 text-[12px] text-center md:text-[14px]",
                  children: [
                    u.jsx("p", {
                      onClick: () => bt("solutions"),
                      className:
                        "cursor-pointer hover:text-white text-footerColor",
                      children: "Solutions",
                    }),
                    u.jsx("p", {
                      onClick: () => bt("roadmap"),
                      className:
                        "cursor-pointer hover:text-white text-footerColor",
                      children: "Roadmap",
                    }),
                    u.jsx("p", {
                      onClick: () => bt("partners"),
                      className:
                        "cursor-pointer hover:text-white text-footerColor",
                      children: "Partners",
                    }),
                    u.jsx("p", {
                      onClick: () => bt("coin"),
                      className:
                        "cursor-pointer hover:text-white text-footerColor",
                      children: "$PULSE",
                    }),
                    u.jsx("p", {
                      onClick: () => bt("home"),
                      className:
                        "cursor-pointer hover:text-white text-footerColor",
                      children: "Home",
                    }),
                    u.jsx("p", {
                      onClick: () => bt("tech"),
                      className:
                        "cursor-pointer hover:text-white text-footerColor",
                      children: "Tech",
                    }),
                  ],
                }),
              }),
              u.jsxs("div", {
                className: "flex flex-col gap-6",
                children: [
                  u.jsx("p", {
                    className:
                      "font-clash text-[20px] md:text-[28px] lg:text-[32px] text-center lg:text-left",
                    style: {
                      background:
                        "linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                    children: "Get in touch with us!",
                  }),
                  u.jsxs("div", {
                    className:
                      "relative flex flex-row items-center sm:justify-between h-14 w-[250px] sm:w-[370px] rounded-full overflow-hidden outline outline-1 outline-offset-[-1px] outline-[#679F8E] p-2 gap-2 sm:gap-0",
                    children: [
                      u.jsx("button", {
                        className:
                          "flex items-center justify-center ml-3 lg:ml-0 text-sm sm:text-lg text-[#8FA59B] bg-transparent transition sm:pl-6",
                        children: "Let's Talk",
                      }),
                      u.jsx("button", {
                        onClick: t,
                        className:
                          "px-4 sm:px-6 py-4 flex justify-center items-center sm:py-3 h-full absolute right-0 font-clash text-sm sm:text-lg rounded-full w-[140px] sm:w-[200px] border-t border-l border-b border-l-[#679F8E] border-b-[#679F8E] border-t-[#679F8E] text-white bg-gradient-to-r from-[#0F2A23] via-[#43C2A000] to-[#0A382F66]",
                        children: "Join Community",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className:
              "flex justify-center text-white/80 text-sm font-normal leading-snug mt-20",
            children: "© 2025 Pulse AI PVT LTD.",
          }),
        ],
      }),
    });
  },
  Lr = () => {
    Gl();
    const e = () => {
        window.open("/pulsescout", "_blank");
      },
      t = () => {
        window.open("/pulsegen", "_blank");
      },
      n = () => {
        window.open("/contactus", "_blank");
      },
      r = () => {
        window.open(`${window.location.origin}/blogs`, "_blank");
      },
      i = () => {
        window.open(`${window.location.origin}/`, "_blank");
      };
    return u.jsxs("div", {
      className:
        "fixed flex border-b-[1px] justify-between border-neutral-600 py-[17px] px-[20px] backdrop:blur-xl bg-[#081716] z-50 w-screen h-[70px]",
      children: [
        u.jsx("img", {
          src: "/header.svg",
          alt: "Overlay",
          className:
            "absolute top-20 left-[46%] -translate-x-1/2 -translate-y-1/2 -z-10 w-[1070px] h-40",
        }),
        u.jsx("div", {
          onClick: i,
          className:
            "justify-center items-center mt-1 cursor-pointer flex w-[175px] h-10",
          children: u.jsx("img", {
            src: "/logotxt.png",
            alt: "pathpulse logo",
          }),
        }),
        u.jsx("div", {
          className: "flex items-center ml-44",
          children: u.jsx("div", {
            className:
              "border-[1px] bg-transparent backdrop-blur-3xl border-[#0D342C] shadow-[0px_4.033934116363525px_4.033934116363525px_0px_rgba(0,0,0,0.25)] rounded-full",
            children: u.jsxs("div", {
              className:
                " flex rounded-[32.27px] px-3.5 py-3 gap-x-[14px] bg-opacity-30",
              children: [
                u.jsx("button", {
                  className:
                    "text-sm font-clash text-white cursor-pointer hover:underline hover:text-[#63B7A2]",
                  onClick: () => bt("home"),
                  children: "Home",
                }),
                u.jsx("button", {
                  className:
                    "text-sm font-clash text-white cursor-pointer hover:underline hover:text-[#63B7A2]",
                  onClick: () => bt("solutions"),
                  children: "Solutions",
                }),
                u.jsx("button", {
                  className:
                    "text-sm font-clash text-white cursor-pointer hover:underline hover:text-[#63B7A2]",
                  onClick: () => bt("partners"),
                  children: "Partners",
                }),
                u.jsx("button", {
                  className:
                    "text-sm font-clash text-white cursor-pointer hover:underline hover:text-[#63B7A2]",
                  onClick: () => bt("tech"),
                  children: "Tech",
                }),
                u.jsx("button", {
                  className:
                    "text-sm font-clash text-white cursor-pointer hover:underline hover:text-[#63B7A2]",
                  onClick: () => bt("roadmap"),
                  children: "Roadmap",
                }),
                u.jsx("button", {
                  className:
                    "text-sm font-clash text-white cursor-pointer hover:underline hover:text-[#63B7A2]",
                  onClick: () => bt("coin"),
                  children: "$PULSE",
                }),
              ],
            }),
          }),
        }),
        u.jsxs("div", {
          className: "flex gap-5",
          children: [
            u.jsxs("button", {
              className:
                "relative flex justify-center items-center gap-2 rounded-[10px] cursor-pointer border-[1.4px] border-[#48BF86] shadow-[0px_2px_2px_0px_#000,0px_0px_16px_12px_rgba(136,228,188,0.15)] px-1.5 text-emerald-200 bg-[#082A1E] overflow-hidden",
              onClick: t,
              children: [
                u.jsx("span", {
                  children: u.jsx("img", {
                    src: "/gen2.svg",
                    alt: "",
                    className: "flex justify-center items-center w-5 h-6",
                  }),
                }),
                u.jsx("span", {
                  className:
                    "text-[#B1E9C9] text-center mt-[2px] font-fauna text-sm",
                  children: "PulseGen",
                }),
              ],
            }),
            u.jsxs("button", {
              className:
                "relative flex justify-center items-center gap-2 rounded-[10px] cursor-pointer border-[1.4px] border-[#48BF86] shadow-[0px_2px_2px_0px_#000,0px_0px_16px_12px_rgba(136,228,188,0.15)] px-1.5 text-emerald-200 bg-[#082A1E] overflow-hidden",
              onClick: e,
              children: [
                u.jsx("span", {
                  children: u.jsx("img", {
                    src: "/Scoutlogo.svg",
                    alt: "",
                    className: "w-5 h-5",
                  }),
                }),
                u.jsx("span", {
                  className:
                    "text-[#B1E9C9] text-center mt-[2px] font-fauna text-sm",
                  children: "Pulse Scout",
                }),
              ],
            }),
            u.jsxs("div", {
              onClick: () => window.open("https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x8297201ee09f1f7d608123317ecc4785942d1932", "_blank"),
              className:
                "px-2.5 py-1.5 bg-[conic-gradient(from_195deg_at_50.00%_50.00%,_rgba(0,_0,_0,_0)_173deg,_#093728_281deg,_rgba(9,_55,_40,_0.40)_360deg)] cursor-pointer rounded-full border-t border-l border-r border-t-teal-700 border-l-teal-700 border-r-teal-700 inline-flex justify-center items-center gap-2",
              children: [
                u.jsx("img", {
                  src: "/IconStar.svg",
                  className: "w-[20px] h-[20px]",
                  alt: "star icon",
                }),
                u.jsx("p", {
                  className: "text-sm  font-clash text-white",
                  children: "Buy Now",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Mr = () => {
    const e = Gl(),
      [t, n] = b.useState(!1),
      r = () => {
        const c = `${window.location.origin}/blogs`;
        window.open(c, "_blank");
      },
      i = () => {
        e("/pulsescout");
      },
      s = () => {
        e("/pulsegen");
      },
      o = () => {
        n(!t);
      },
      a = () => {
        n(!1);
      };
    b.useEffect(
      () => (
        t
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [t]
    );
    const l = (c) => {
      const d = document.getElementById(c);
      d && (d.scrollIntoView({ behavior: "smooth" }), a());
    };
    return u.jsxs("div", {
      className:
        "fixed z-50 bg-[#081716]/90 backdrop-blur-xl w-screen border-b border-b-white/20",
      children: [
        u.jsx("div", {
          className: "w-full",
          children: u.jsxs("div", {
            className:
              "px-[16px] border-b border-customBorder flex justify-between items-center py-[15px] md:px-[24px]",
            children: [
              u.jsx("img", {
                src: "/LogoMobileView.svg",
                alt: "logo",
                className: "w-auto h-auto",
              }),
              u.jsx("div", {
                onClick: o,
                className: "cursor-pointer",
                children: u.jsx("img", {
                  src: "/sidebar.svg",
                  alt: "sidebar",
                  className: "w-auto h-auto",
                }),
              }),
            ],
          }),
        }),
        u.jsx("div", {
          className: `fixed top-0 right-0 h-screen w-screen z-50 transform transition-transform duration-300 ease-in-out bg-[#081716] overflow-y-auto ${
            t ? "translate-x-0" : "translate-x-full"
          }`,
          children: u.jsxs("div", {
            className: "flex flex-col h-full",
            children: [
              u.jsxs("div", {
                className:
                  "flex justify-between items-center mb-4 p-6 border-b border-b-white/20",
                children: [
                  u.jsx("img", {
                    src: "/LogoMobileView.svg",
                    alt: "logo",
                    className: "w-auto h-auto",
                  }),
                  u.jsx("button", {
                    onClick: a,
                    children: u.jsx("img", {
                      src: "/close.svg",
                      alt: "close",
                      className: "w-4 h-4",
                    }),
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "flex flex-col gap-4  pl-10 items-start",
                children: [
                  [
                    { name: "Home", id: "home" },
                    { name: "Solutions", id: "solutions" },
                    { name: "Partners", id: "partners" },
                    { name: "Tech", id: "tech" },
                    { name: "Roadmap", id: "roadmap" },
                    { name: "$PULSE", id: "coin" },
                  ].map((c) =>
                    u.jsx(
                      "button",
                      {
                        className:
                          "text-lg font-clash text-white cursor-pointer hover:underline hover:text-[#63B7A2]",
                        onClick: () => l(c.id),
                        children: c.name,
                      },
                      c.id
                    )
                  ),
                ],
              }),
              u.jsxs("div", {
                className: "flex flex-col w-64 px-9 mt-10 gap-5",
                children: [
                  u.jsxs("button", {
                    className:
                      "px-4 h-9 py-2.5 flex justify-center items-center gap-2 rounded-md cursor-pointer border-[1.4px] border-[#48BF86] shadow-[0px_2px_2px_0px_#000,0px_0px_16px_12px_rgba(136,228,188,0.15)] text-emerald-200 bg-[#082A1E] overflow-hidden",
                    onClick: s,
                    children: [
                      u.jsx("span", {
                        children: u.jsx("img", {
                          src: "/gen.svg",
                          alt: "",
                          className: "flex justify-center items-center w-5 h-5",
                        }),
                      }),
                      u.jsx("span", {
                        className:
                          "text-[#B1E9C9] text-center mt-[2px] font-fauna text-sm",
                        children: "PulseGen",
                      }),
                    ],
                  }),
                  u.jsxs("button", {
                    className:
                      "px-4 h-9 py-2.5 flex justify-center items-center gap-2 rounded-md cursor-pointer border-[1.4px] border-[#48BF86] shadow-[0px_2px_2px_0px_#000,0px_0px_16px_12px_rgba(136,228,188,0.15)] text-emerald-200 bg-[#082A1E] overflow-hidden",
                    onClick: i,
                    children: [
                      u.jsx("span", {
                        children: u.jsx("img", {
                          src: "/Scoutlogo.svg",
                          alt: "",
                          className: "w-5 h-5",
                        }),
                      }),
                      u.jsx("span", {
                        className:
                          "text-[#B1E9C9] text-center mt-[2px] font-fauna text-sm",
                        children: "Pulse Scout",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    onClick: () => window.open("https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x8297201ee09f1f7d608123317ecc4785942d1932", "_blank"),
                    className:
                      "px-5 py-2.5 h-9 bg-[conic-gradient(from_195deg_at_50.00%_50.00%,_rgba(0,_0,_0,_0)_173deg,_#093728_281deg,_rgba(9,_55,_40,_0.40)_360deg)] rounded-md border border-teal-700 inline-flex justify-center items-center gap-4 cursor-pointer",
                    children: [
                      u.jsx("img", {
                        src: "/IconStar.svg",
                        className: "w-[20px] h-[20px]",
                        alt: "star icon",
                      }),
                      u.jsx("p", {
                        className: "text-lg font-clash text-white",
                        children: "Buy Now",
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx("div", {
                className: "flex gap-x-[60px] mt-12 pl-10",
                children: [
                  {
                    src: "/Twitter.svg",
                    link: "https://twitter.com/pathpulse_ai",
                  },
                  {
                    src: "/Linkedin.svg",
                    link: "https://www.linkedin.com/company/pathpulse-ai/",
                  },
                  {
                    src: "/Medium.svg",
                    link: "https://medium.com/@pathpulse.ai",
                  },
                  {
                    src: "/Youtube.svg",
                    link: "https://www.youtube.com/@PathPulse_ai",
                  },
                ].map((c, d) =>
                  u.jsx(
                    "img",
                    {
                      src: c.src,
                      alt: "social icon",
                      onClick: () => window.open(c.link, "_blank"),
                      className: "w-7 h-7 cursor-pointer",
                    },
                    d
                  )
                ),
              }),
              u.jsx("div", {
                className:
                  "pl-10 opacity-80 text-center justify-center items-center text-white text-[10px] font-normal font-clash leading-snug my-10 pb-10",
                children: "© 2024 PathPulse.ai",
              }),
            ],
          }),
        }),
        t &&
          u.jsx("div", {
            className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40",
            onClick: a,
          }),
      ],
    });
  };
var Lx = { exports: {} },
  tC = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  nC = tC,
  rC = nC;
function Mx() {}
function Dx() {}
Dx.resetWarningCache = Mx;
var iC = function () {
  function e(r, i, s, o, a, l) {
    if (l !== rC) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Dx,
    resetWarningCache: Mx,
  };
  return (n.PropTypes = n), n;
};
Lx.exports = iC();
var sC = Lx.exports;
const ie = _i(sC);
function oC(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var Ix = b,
  aC = oC(Ix);
function Om(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function lC(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var uC = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function cC(e, t, n) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function."
    );
  function r(i) {
    return i.displayName || i.name || "Component";
  }
  return function (s) {
    if (typeof s != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var o = [],
      a;
    function l() {
      (a = e(
        o.map(function (d) {
          return d.props;
        })
      )),
        c.canUseDOM ? t(a) : n && (a = n(a));
    }
    var c = (function (d) {
      lC(f, d);
      function f() {
        return d.apply(this, arguments) || this;
      }
      (f.peek = function () {
        return a;
      }),
        (f.rewind = function () {
          if (f.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state."
            );
          var v = a;
          return (a = void 0), (o = []), v;
        });
      var h = f.prototype;
      return (
        (h.UNSAFE_componentWillMount = function () {
          o.push(this), l();
        }),
        (h.componentDidUpdate = function () {
          l();
        }),
        (h.componentWillUnmount = function () {
          var v = o.indexOf(this);
          o.splice(v, 1), l();
        }),
        (h.render = function () {
          return aC.createElement(s, this.props);
        }),
        f
      );
    })(Ix.PureComponent);
    return (
      Om(c, "displayName", "SideEffect(" + r(s) + ")"),
      Om(c, "canUseDOM", uC),
      c
    );
  };
}
var dC = cC;
const fC = _i(dC);
var hC = typeof Element < "u",
  pC = typeof Map == "function",
  mC = typeof Set == "function",
  gC = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function wa(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!wa(e[r], t[r])) return !1;
      return !0;
    }
    var s;
    if (pC && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!wa(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (mC && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (gC && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
    if (hC && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") &&
          e.$$typeof
        ) &&
        !wa(e[i[r]], t[i[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var yC = function (t, n) {
  try {
    return wa(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const vC = _i(yC);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Am = Object.getOwnPropertySymbols,
  xC = Object.prototype.hasOwnProperty,
  wC = Object.prototype.propertyIsEnumerable;
function bC(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function SC() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (s) {
      return t[s];
    });
    if (r.join("") !== "0123456789") return !1;
    var i = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (s) {
        i[s] = s;
      }),
      Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var jC = SC()
  ? Object.assign
  : function (e, t) {
      for (var n, r = bC(e), i, s = 1; s < arguments.length; s++) {
        n = Object(arguments[s]);
        for (var o in n) xC.call(n, o) && (r[o] = n[o]);
        if (Am) {
          i = Am(n);
          for (var a = 0; a < i.length; a++)
            wC.call(n, i[a]) && (r[i[a]] = n[i[a]]);
        }
      }
      return r;
    };
const TC = _i(jC);
var yr = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  H = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(H).map(function (e) {
  return H[e];
});
var se = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  rl = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  Ks = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  PC = Object.keys(rl).reduce(function (e, t) {
    return (e[rl[t]] = t), e;
  }, {}),
  CC = [H.NOSCRIPT, H.SCRIPT, H.STYLE],
  Mt = "data-react-helmet",
  kC =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  EC = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  NC = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Je =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  _C = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  Rm = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
    return n;
  },
  OC = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  },
  wd = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  AC = function (t) {
    var n = ci(t, H.TITLE),
      r = ci(t, Ks.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var i = ci(t, Ks.DEFAULT_TITLE);
    return n || i || void 0;
  },
  RC = function (t) {
    return ci(t, Ks.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  Wu = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < "u";
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, i) {
        return Je({}, r, i);
      }, {});
  },
  LC = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[H.BASE] < "u";
      })
      .map(function (r) {
        return r[H.BASE];
      })
      .reverse()
      .reduce(function (r, i) {
        if (!r.length)
          for (var s = Object.keys(i), o = 0; o < s.length; o++) {
            var a = s[o],
              l = a.toLowerCase();
            if (t.indexOf(l) !== -1 && i[l]) return r.concat(i);
          }
        return r;
      }, []);
  },
  Ji = function (t, n, r) {
    var i = {};
    return r
      .filter(function (s) {
        return Array.isArray(s[t])
          ? !0
          : (typeof s[t] < "u" &&
              FC(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  kC(s[t]) +
                  '"'
              ),
            !1);
      })
      .map(function (s) {
        return s[t];
      })
      .reverse()
      .reduce(function (s, o) {
        var a = {};
        o.filter(function (h) {
          for (var y = void 0, v = Object.keys(h), x = 0; x < v.length; x++) {
            var w = v[x],
              p = w.toLowerCase();
            n.indexOf(p) !== -1 &&
              !(y === se.REL && h[y].toLowerCase() === "canonical") &&
              !(p === se.REL && h[p].toLowerCase() === "stylesheet") &&
              (y = p),
              n.indexOf(w) !== -1 &&
                (w === se.INNER_HTML ||
                  w === se.CSS_TEXT ||
                  w === se.ITEM_PROP) &&
                (y = w);
          }
          if (!y || !h[y]) return !1;
          var m = h[y].toLowerCase();
          return (
            i[y] || (i[y] = {}),
            a[y] || (a[y] = {}),
            i[y][m] ? !1 : ((a[y][m] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (h) {
            return s.push(h);
          });
        for (var l = Object.keys(a), c = 0; c < l.length; c++) {
          var d = l[c],
            f = TC({}, i[d], a[d]);
          i[d] = f;
        }
        return s;
      }, [])
      .reverse();
  },
  ci = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var i = t[r];
      if (i.hasOwnProperty(n)) return i[n];
    }
    return null;
  },
  MC = function (t) {
    return {
      baseTag: LC([se.HREF, se.TARGET], t),
      bodyAttributes: Wu(yr.BODY, t),
      defer: ci(t, Ks.DEFER),
      encode: ci(t, Ks.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: Wu(yr.HTML, t),
      linkTags: Ji(H.LINK, [se.REL, se.HREF], t),
      metaTags: Ji(
        H.META,
        [se.NAME, se.CHARSET, se.HTTPEQUIV, se.PROPERTY, se.ITEM_PROP],
        t
      ),
      noscriptTags: Ji(H.NOSCRIPT, [se.INNER_HTML], t),
      onChangeClientState: RC(t),
      scriptTags: Ji(H.SCRIPT, [se.SRC, se.INNER_HTML], t),
      styleTags: Ji(H.STYLE, [se.CSS_TEXT], t),
      title: AC(t),
      titleAttributes: Wu(yr.TITLE, t),
    };
  },
  bd = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            bd(t);
          }, 0);
    };
  })(),
  Lm = function (t) {
    return clearTimeout(t);
  },
  DC =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        bd
      : global.requestAnimationFrame || bd,
  IC =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        Lm
      : global.cancelAnimationFrame || Lm,
  FC = function (t) {
    return console && typeof console.warn == "function" && console.warn(t);
  },
  Zi = null,
  zC = function (t) {
    Zi && IC(Zi),
      t.defer
        ? (Zi = DC(function () {
            Mm(t, function () {
              Zi = null;
            });
          }))
        : (Mm(t), (Zi = null));
  },
  Mm = function (t, n) {
    var r = t.baseTag,
      i = t.bodyAttributes,
      s = t.htmlAttributes,
      o = t.linkTags,
      a = t.metaTags,
      l = t.noscriptTags,
      c = t.onChangeClientState,
      d = t.scriptTags,
      f = t.styleTags,
      h = t.title,
      y = t.titleAttributes;
    Sd(H.BODY, i), Sd(H.HTML, s), BC(h, y);
    var v = {
        baseTag: Fr(H.BASE, r),
        linkTags: Fr(H.LINK, o),
        metaTags: Fr(H.META, a),
        noscriptTags: Fr(H.NOSCRIPT, l),
        scriptTags: Fr(H.SCRIPT, d),
        styleTags: Fr(H.STYLE, f),
      },
      x = {},
      w = {};
    Object.keys(v).forEach(function (p) {
      var m = v[p],
        g = m.newTags,
        S = m.oldTags;
      g.length && (x[p] = g), S.length && (w[p] = v[p].oldTags);
    }),
      n && n(),
      c(t, x, w);
  },
  Fx = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  BC = function (t, n) {
    typeof t < "u" && document.title !== t && (document.title = Fx(t)),
      Sd(H.TITLE, n);
  },
  Sd = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var i = r.getAttribute(Mt),
          s = i ? i.split(",") : [],
          o = [].concat(s),
          a = Object.keys(n),
          l = 0;
        l < a.length;
        l++
      ) {
        var c = a[l],
          d = n[c] || "";
        r.getAttribute(c) !== d && r.setAttribute(c, d),
          s.indexOf(c) === -1 && s.push(c);
        var f = o.indexOf(c);
        f !== -1 && o.splice(f, 1);
      }
      for (var h = o.length - 1; h >= 0; h--) r.removeAttribute(o[h]);
      s.length === o.length
        ? r.removeAttribute(Mt)
        : r.getAttribute(Mt) !== a.join(",") && r.setAttribute(Mt, a.join(","));
    }
  },
  Fr = function (t, n) {
    var r = document.head || document.querySelector(H.HEAD),
      i = r.querySelectorAll(t + "[" + Mt + "]"),
      s = Array.prototype.slice.call(i),
      o = [],
      a = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (l) {
          var c = document.createElement(t);
          for (var d in l)
            if (l.hasOwnProperty(d))
              if (d === se.INNER_HTML) c.innerHTML = l.innerHTML;
              else if (d === se.CSS_TEXT)
                c.styleSheet
                  ? (c.styleSheet.cssText = l.cssText)
                  : c.appendChild(document.createTextNode(l.cssText));
              else {
                var f = typeof l[d] > "u" ? "" : l[d];
                c.setAttribute(d, f);
              }
          c.setAttribute(Mt, "true"),
            s.some(function (h, y) {
              return (a = y), c.isEqualNode(h);
            })
              ? s.splice(a, 1)
              : o.push(c);
        }),
      s.forEach(function (l) {
        return l.parentNode.removeChild(l);
      }),
      o.forEach(function (l) {
        return r.appendChild(l);
      }),
      { oldTags: s, newTags: o }
    );
  },
  zx = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var i = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
      return n ? n + " " + i : i;
    }, "");
  },
  VC = function (t, n, r, i) {
    var s = zx(r),
      o = Fx(n);
    return s
      ? "<" + t + " " + Mt + '="true" ' + s + ">" + wd(o, i) + "</" + t + ">"
      : "<" + t + " " + Mt + '="true">' + wd(o, i) + "</" + t + ">";
  },
  $C = function (t, n, r) {
    return n.reduce(function (i, s) {
      var o = Object.keys(s)
          .filter(function (c) {
            return !(c === se.INNER_HTML || c === se.CSS_TEXT);
          })
          .reduce(function (c, d) {
            var f = typeof s[d] > "u" ? d : d + '="' + wd(s[d], r) + '"';
            return c ? c + " " + f : f;
          }, ""),
        a = s.innerHTML || s.cssText || "",
        l = CC.indexOf(t) === -1;
      return (
        i +
        "<" +
        t +
        " " +
        Mt +
        '="true" ' +
        o +
        (l ? "/>" : ">" + a + "</" + t + ">")
      );
    }, "");
  },
  Bx = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, i) {
      return (r[rl[i] || i] = t[i]), r;
    }, n);
  },
  UC = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, i) {
      return (r[PC[i] || i] = t[i]), r;
    }, n);
  },
  HC = function (t, n, r) {
    var i,
      s = ((i = { key: n }), (i[Mt] = !0), i),
      o = Bx(r, s);
    return [ri.createElement(H.TITLE, o, n)];
  },
  WC = function (t, n) {
    return n.map(function (r, i) {
      var s,
        o = ((s = { key: i }), (s[Mt] = !0), s);
      return (
        Object.keys(r).forEach(function (a) {
          var l = rl[a] || a;
          if (l === se.INNER_HTML || l === se.CSS_TEXT) {
            var c = r.innerHTML || r.cssText;
            o.dangerouslySetInnerHTML = { __html: c };
          } else o[l] = r[a];
        }),
        ri.createElement(t, o)
      );
    });
  },
  sn = function (t, n, r) {
    switch (t) {
      case H.TITLE:
        return {
          toComponent: function () {
            return HC(t, n.title, n.titleAttributes);
          },
          toString: function () {
            return VC(t, n.title, n.titleAttributes, r);
          },
        };
      case yr.BODY:
      case yr.HTML:
        return {
          toComponent: function () {
            return Bx(n);
          },
          toString: function () {
            return zx(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return WC(t, n);
          },
          toString: function () {
            return $C(t, n, r);
          },
        };
    }
  },
  Vx = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      i = t.encode,
      s = t.htmlAttributes,
      o = t.linkTags,
      a = t.metaTags,
      l = t.noscriptTags,
      c = t.scriptTags,
      d = t.styleTags,
      f = t.title,
      h = f === void 0 ? "" : f,
      y = t.titleAttributes;
    return {
      base: sn(H.BASE, n, i),
      bodyAttributes: sn(yr.BODY, r, i),
      htmlAttributes: sn(yr.HTML, s, i),
      link: sn(H.LINK, o, i),
      meta: sn(H.META, a, i),
      noscript: sn(H.NOSCRIPT, l, i),
      script: sn(H.SCRIPT, c, i),
      style: sn(H.STYLE, d, i),
      title: sn(H.TITLE, { title: h, titleAttributes: y }, i),
    };
  },
  qC = function (t) {
    var n, r;
    return (
      (r = n =
        (function (i) {
          _C(s, i);
          function s() {
            return EC(this, s), OC(this, i.apply(this, arguments));
          }
          return (
            (s.prototype.shouldComponentUpdate = function (a) {
              return !vC(this.props, a);
            }),
            (s.prototype.mapNestedChildrenToProps = function (a, l) {
              if (!l) return null;
              switch (a.type) {
                case H.SCRIPT:
                case H.NOSCRIPT:
                  return { innerHTML: l };
                case H.STYLE:
                  return { cssText: l };
              }
              throw new Error(
                "<" +
                  a.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information."
              );
            }),
            (s.prototype.flattenArrayTypeChildren = function (a) {
              var l,
                c = a.child,
                d = a.arrayTypeChildren,
                f = a.newChildProps,
                h = a.nestedChildren;
              return Je(
                {},
                d,
                ((l = {}),
                (l[c.type] = [].concat(d[c.type] || [], [
                  Je({}, f, this.mapNestedChildrenToProps(c, h)),
                ])),
                l)
              );
            }),
            (s.prototype.mapObjectTypeChildren = function (a) {
              var l,
                c,
                d = a.child,
                f = a.newProps,
                h = a.newChildProps,
                y = a.nestedChildren;
              switch (d.type) {
                case H.TITLE:
                  return Je(
                    {},
                    f,
                    ((l = {}),
                    (l[d.type] = y),
                    (l.titleAttributes = Je({}, h)),
                    l)
                  );
                case H.BODY:
                  return Je({}, f, { bodyAttributes: Je({}, h) });
                case H.HTML:
                  return Je({}, f, { htmlAttributes: Je({}, h) });
              }
              return Je({}, f, ((c = {}), (c[d.type] = Je({}, h)), c));
            }),
            (s.prototype.mapArrayTypeChildrenToProps = function (a, l) {
              var c = Je({}, l);
              return (
                Object.keys(a).forEach(function (d) {
                  var f;
                  c = Je({}, c, ((f = {}), (f[d] = a[d]), f));
                }),
                c
              );
            }),
            (s.prototype.warnOnInvalidChildren = function (a, l) {
              return !0;
            }),
            (s.prototype.mapChildrenToProps = function (a, l) {
              var c = this,
                d = {};
              return (
                ri.Children.forEach(a, function (f) {
                  if (!(!f || !f.props)) {
                    var h = f.props,
                      y = h.children,
                      v = Rm(h, ["children"]),
                      x = UC(v);
                    switch ((c.warnOnInvalidChildren(f, y), f.type)) {
                      case H.LINK:
                      case H.META:
                      case H.NOSCRIPT:
                      case H.SCRIPT:
                      case H.STYLE:
                        d = c.flattenArrayTypeChildren({
                          child: f,
                          arrayTypeChildren: d,
                          newChildProps: x,
                          nestedChildren: y,
                        });
                        break;
                      default:
                        l = c.mapObjectTypeChildren({
                          child: f,
                          newProps: l,
                          newChildProps: x,
                          nestedChildren: y,
                        });
                        break;
                    }
                  }
                }),
                (l = this.mapArrayTypeChildrenToProps(d, l)),
                l
              );
            }),
            (s.prototype.render = function () {
              var a = this.props,
                l = a.children,
                c = Rm(a, ["children"]),
                d = Je({}, c);
              return (
                l && (d = this.mapChildrenToProps(l, d)), ri.createElement(t, d)
              );
            }),
            NC(s, null, [
              {
                key: "canUseDOM",
                set: function (a) {
                  t.canUseDOM = a;
                },
              },
            ]),
            s
          );
        })(ri.Component)),
      (n.propTypes = {
        base: ie.object,
        bodyAttributes: ie.object,
        children: ie.oneOfType([ie.arrayOf(ie.node), ie.node]),
        defaultTitle: ie.string,
        defer: ie.bool,
        encodeSpecialCharacters: ie.bool,
        htmlAttributes: ie.object,
        link: ie.arrayOf(ie.object),
        meta: ie.arrayOf(ie.object),
        noscript: ie.arrayOf(ie.object),
        onChangeClientState: ie.func,
        script: ie.arrayOf(ie.object),
        style: ie.arrayOf(ie.object),
        title: ie.string,
        titleAttributes: ie.object,
        titleTemplate: ie.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var i = t.rewind();
        return (
          i ||
            (i = Vx({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          i
        );
      }),
      r
    );
  },
  GC = function () {
    return null;
  },
  KC = fC(MC, zC, Vx)(GC),
  Ys = qC(KC);
Ys.renderStatic = Ys.rewind;
const Di = ({
    title: e,
    description: t,
    keywords: n,
    image: r,
    url: i,
    type: s = "website",
    noindex: o = !1,
  }) => {
    const a = "PathPulse.ai",
      l = e ? `${e} | ${a}` : a,
      c =
        "Transform urban navigation with PathPulse.ai's real-time AI insights. Reduce traffic congestion, discover smarter routes, and enhance city living with precision mapping technology.",
      d = "https://pathpulse.ai/og-image.jpg",
      f = "https://pathpulse.ai";
    return u.jsxs(Ys, {
      children: [
        u.jsx("title", { children: l }),
        u.jsx("meta", { name: "title", content: l }),
        u.jsx("meta", { name: "description", content: t || c }),
        n && u.jsx("meta", { name: "keywords", content: n }),
        u.jsx("meta", {
          name: "robots",
          content: o ? "noindex, nofollow" : "index, follow",
        }),
        u.jsx("link", { rel: "canonical", href: i || f }),
        u.jsx("meta", { property: "og:type", content: s }),
        u.jsx("meta", { property: "og:url", content: i || f }),
        u.jsx("meta", { property: "og:title", content: l }),
        u.jsx("meta", { property: "og:description", content: t || c }),
        u.jsx("meta", { property: "og:image", content: r || d }),
        u.jsx("meta", { property: "og:site_name", content: a }),
        u.jsx("meta", { property: "og:locale", content: "en_US" }),
        u.jsx("meta", {
          property: "twitter:card",
          content: "summary_large_image",
        }),
        u.jsx("meta", { property: "twitter:url", content: i || f }),
        u.jsx("meta", { property: "twitter:title", content: l }),
        u.jsx("meta", { property: "twitter:description", content: t || c }),
        u.jsx("meta", { property: "twitter:image", content: r || d }),
      ],
    });
  },
  YC = () =>
    u.jsxs(u.Fragment, {
      children: [
        u.jsx(Di, {
          title: "Page Not Found - 404 Error",
          description:
            "The page you're looking for doesn't exist. Return to PathPulse.ai homepage.",
          keywords: "404, page not found, error",
          url: "https://pathpulse.ai/404",
          noindex: !0,
        }),
        u.jsxs("div", {
          className: "bg-primary min-h-screen",
          children: [
            u.jsx("div", {
              className: "hidden lg:block",
              children: u.jsx(Lr, {}),
            }),
            u.jsx("div", {
              className: "block lg:hidden",
              children: u.jsx(Mr, {}),
            }),
            u.jsx("div", {
              className: "flex items-center justify-center min-h-[80vh] px-4",
              children: u.jsxs("div", {
                className: "text-center max-w-2xl mx-auto",
                children: [
                  u.jsx("div", {
                    className: "mb-8",
                    children: u.jsx("h1", {
                      className:
                        "text-8xl md:text-9xl font-clash font-bold bg-gradient-to-r from-[#02C394] to-[#00A884] bg-clip-text text-transparent",
                      children: "404",
                    }),
                  }),
                  u.jsxs("div", {
                    className: "mb-8",
                    children: [
                      u.jsx("h2", {
                        className:
                          "text-3xl md:text-4xl font-clash text-white mb-4",
                        children: "Oops! Page Not Found",
                      }),
                      u.jsx("p", {
                        className: "text-lg text-gray-400 font-satoshi mb-6",
                        children:
                          "The page you're looking for seems to have wandered off into the digital wilderness.",
                      }),
                      u.jsx("p", {
                        className: "text-base text-gray-500 font-satoshi",
                        children:
                          "Don't worry, even the best navigation systems sometimes need recalibration.",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row gap-4 justify-center items-center",
                    children: [
                      u.jsx("button", {
                        onClick: () => window.history.back(),
                        className:
                          "px-8 py-3 bg-[rgba(2,195,148,0.1)] border border-[#02C39433] text-[#02C394] rounded-xl font-clash font-medium transition-all duration-300 hover:bg-[rgba(2,195,148,0.2)] hover:border-[#02C394] hover:shadow-lg",
                        children: "← Go Back",
                      }),
                      u.jsx("a", {
                        href: "/",
                        className:
                          "px-8 py-3 bg-[#02C394] text-black rounded-xl font-clash font-medium transition-all duration-300 hover:bg-[#02A884] hover:shadow-lg",
                        children: "Go Home",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            u.jsx(Rr, {}),
          ],
        }),
      ],
    });
var $x = {},
  Ux = {},
  Yl = {},
  Hx = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = {
    animating: !1,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: !1,
    edgeDragged: !1,
    initialized: !1,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: !1,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: !1,
    swiping: !1,
    touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0,
  };
  e.default = t;
})(Hx);
var QC = "Expected a function",
  Dm = NaN,
  XC = "[object Symbol]",
  JC = /^\s+|\s+$/g,
  ZC = /^[-+]0x[0-9a-f]+$/i,
  ek = /^0b[01]+$/i,
  tk = /^0o[0-7]+$/i,
  nk = parseInt,
  rk = typeof Ao == "object" && Ao && Ao.Object === Object && Ao,
  ik = typeof self == "object" && self && self.Object === Object && self,
  sk = rk || ik || Function("return this")(),
  ok = Object.prototype,
  ak = ok.toString,
  lk = Math.max,
  uk = Math.min,
  qu = function () {
    return sk.Date.now();
  };
function ck(e, t, n) {
  var r,
    i,
    s,
    o,
    a,
    l,
    c = 0,
    d = !1,
    f = !1,
    h = !0;
  if (typeof e != "function") throw new TypeError(QC);
  (t = Im(t) || 0),
    jd(n) &&
      ((d = !!n.leading),
      (f = "maxWait" in n),
      (s = f ? lk(Im(n.maxWait) || 0, t) : s),
      (h = "trailing" in n ? !!n.trailing : h));
  function y(T) {
    var k = r,
      N = i;
    return (r = i = void 0), (c = T), (o = e.apply(N, k)), o;
  }
  function v(T) {
    return (c = T), (a = setTimeout(p, t)), d ? y(T) : o;
  }
  function x(T) {
    var k = T - l,
      N = T - c,
      P = t - k;
    return f ? uk(P, s - N) : P;
  }
  function w(T) {
    var k = T - l,
      N = T - c;
    return l === void 0 || k >= t || k < 0 || (f && N >= s);
  }
  function p() {
    var T = qu();
    if (w(T)) return m(T);
    a = setTimeout(p, x(T));
  }
  function m(T) {
    return (a = void 0), h && r ? y(T) : ((r = i = void 0), o);
  }
  function g() {
    a !== void 0 && clearTimeout(a), (c = 0), (r = l = i = a = void 0);
  }
  function S() {
    return a === void 0 ? o : m(qu());
  }
  function j() {
    var T = qu(),
      k = w(T);
    if (((r = arguments), (i = this), (l = T), k)) {
      if (a === void 0) return v(l);
      if (f) return (a = setTimeout(p, t)), y(l);
    }
    return a === void 0 && (a = setTimeout(p, t)), o;
  }
  return (j.cancel = g), (j.flush = S), j;
}
function jd(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function dk(e) {
  return !!e && typeof e == "object";
}
function fk(e) {
  return typeof e == "symbol" || (dk(e) && ak.call(e) == XC);
}
function Im(e) {
  if (typeof e == "number") return e;
  if (fk(e)) return Dm;
  if (jd(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = jd(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(JC, "");
  var n = ek.test(e);
  return n || tk.test(e) ? nk(e.slice(2), n ? 2 : 8) : ZC.test(e) ? Dm : +e;
}
var hk = ck,
  Wx = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var s = "", o = 0; o < arguments.length; o++) {
        var a = arguments[o];
        a && (s = i(s, r(a)));
      }
      return s;
    }
    function r(s) {
      if (typeof s == "string" || typeof s == "number") return s;
      if (typeof s != "object") return "";
      if (Array.isArray(s)) return n.apply(null, s);
      if (
        s.toString !== Object.prototype.toString &&
        !s.toString.toString().includes("[native code]")
      )
        return s.toString();
      var o = "";
      for (var a in s) t.call(s, a) && s[a] && (o = i(o, a));
      return o;
    }
    function i(s, o) {
      return o ? (s ? s + " " + o : s + o) : s;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Wx);
var Ql = Wx.exports,
  R = {},
  gh = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(b);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function (s) {
      return t.default.createElement("ul", { style: { display: "block" } }, s);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function (s) {
      return t.default.createElement("button", null, s + 1);
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0,
    asNavFor: null,
  };
  e.default = r;
})(gh);
Object.defineProperty(R, "__esModule", { value: !0 });
R.checkSpecKeys =
  R.checkNavigable =
  R.changeSlide =
  R.canUseDOM =
  R.canGoNext =
    void 0;
R.clamp = Gx;
R.extractObject = void 0;
R.filterSettings = Ek;
R.validSettings =
  R.swipeStart =
  R.swipeMove =
  R.swipeEnd =
  R.slidesOnRight =
  R.slidesOnLeft =
  R.slideHandler =
  R.siblingDirection =
  R.safePreventDefault =
  R.lazyStartIndex =
  R.lazySlidesOnRight =
  R.lazySlidesOnLeft =
  R.lazyEndIndex =
  R.keyHandler =
  R.initializedState =
  R.getWidth =
  R.getTrackLeft =
  R.getTrackCSS =
  R.getTrackAnimateCSS =
  R.getTotalSlides =
  R.getSwipeDirection =
  R.getSlideCount =
  R.getRequiredLazySlides =
  R.getPreClones =
  R.getPostClones =
  R.getOnDemandLazySlides =
  R.getNavigableIndexes =
  R.getHeight =
    void 0;
var pk = qx(b),
  mk = qx(gh);
function qx(e) {
  return e && e.__esModule ? e : { default: e };
}
function Qs(e) {
  "@babel/helpers - typeof";
  return (
    (Qs =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qs(e)
  );
}
function Fm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fm(Object(n), !0).forEach(function (r) {
          gk(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Fm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function gk(e, t, n) {
  return (
    (t = yk(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yk(e) {
  var t = vk(e, "string");
  return Qs(t) == "symbol" ? t : String(t);
}
function vk(e, t) {
  if (Qs(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Qs(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gx(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
var di = (R.safePreventDefault = function (t) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(t._reactName) || t.preventDefault();
  }),
  Kx = (R.getOnDemandLazySlides = function (t) {
    for (var n = [], r = Yx(t), i = Qx(t), s = r; s < i; s++)
      t.lazyLoadedList.indexOf(s) < 0 && n.push(s);
    return n;
  });
R.getRequiredLazySlides = function (t) {
  for (var n = [], r = Yx(t), i = Qx(t), s = r; s < i; s++) n.push(s);
  return n;
};
var Yx = (R.lazyStartIndex = function (t) {
    return t.currentSlide - xk(t);
  }),
  Qx = (R.lazyEndIndex = function (t) {
    return t.currentSlide + wk(t);
  }),
  xk = (R.lazySlidesOnLeft = function (t) {
    return t.centerMode
      ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : 0;
  }),
  wk = (R.lazySlidesOnRight = function (t) {
    return t.centerMode
      ? Math.floor((t.slidesToShow - 1) / 2) +
          1 +
          (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : t.slidesToShow;
  }),
  Td = (R.getWidth = function (t) {
    return (t && t.offsetWidth) || 0;
  }),
  Xx = (R.getHeight = function (t) {
    return (t && t.offsetHeight) || 0;
  }),
  Jx = (R.getSwipeDirection = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r,
      i,
      s,
      o;
    return (
      (r = t.startX - t.curX),
      (i = t.startY - t.curY),
      (s = Math.atan2(i, r)),
      (o = Math.round((s * 180) / Math.PI)),
      o < 0 && (o = 360 - Math.abs(o)),
      (o <= 45 && o >= 0) || (o <= 360 && o >= 315)
        ? "left"
        : o >= 135 && o <= 225
        ? "right"
        : n === !0
        ? o >= 35 && o <= 135
          ? "up"
          : "down"
        : "vertical"
    );
  }),
  Zx = (R.canGoNext = function (t) {
    var n = !0;
    return (
      t.infinite ||
        (((t.centerMode && t.currentSlide >= t.slideCount - 1) ||
          t.slideCount <= t.slidesToShow ||
          t.currentSlide >= t.slideCount - t.slidesToShow) &&
          (n = !1)),
      n
    );
  });
R.extractObject = function (t, n) {
  var r = {};
  return (
    n.forEach(function (i) {
      return (r[i] = t[i]);
    }),
    r
  );
};
R.initializedState = function (t) {
  var n = pk.default.Children.count(t.children),
    r = t.listRef,
    i = Math.ceil(Td(r)),
    s = t.trackRef && t.trackRef.node,
    o = Math.ceil(Td(s)),
    a;
  if (t.vertical) a = i;
  else {
    var l = t.centerMode && parseInt(t.centerPadding) * 2;
    typeof t.centerPadding == "string" &&
      t.centerPadding.slice(-1) === "%" &&
      (l *= i / 100),
      (a = Math.ceil((i - l) / t.slidesToShow));
  }
  var c = r && Xx(r.querySelector('[data-index="0"]')),
    d = c * t.slidesToShow,
    f = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
  t.rtl && t.currentSlide === void 0 && (f = n - 1 - t.initialSlide);
  var h = t.lazyLoadedList || [],
    y = Kx(oe(oe({}, t), {}, { currentSlide: f, lazyLoadedList: h }));
  h = h.concat(y);
  var v = {
    slideCount: n,
    slideWidth: a,
    listWidth: i,
    trackWidth: o,
    currentSlide: f,
    slideHeight: c,
    listHeight: d,
    lazyLoadedList: h,
  };
  return t.autoplaying === null && t.autoplay && (v.autoplaying = "playing"), v;
};
R.slideHandler = function (t) {
  var n = t.waitForAnimate,
    r = t.animating,
    i = t.fade,
    s = t.infinite,
    o = t.index,
    a = t.slideCount,
    l = t.lazyLoad,
    c = t.currentSlide,
    d = t.centerMode,
    f = t.slidesToScroll,
    h = t.slidesToShow,
    y = t.useCSS,
    v = t.lazyLoadedList;
  if (n && r) return {};
  var x = o,
    w,
    p,
    m,
    g = {},
    S = {},
    j = s ? o : Gx(o, 0, a - 1);
  if (i) {
    if (!s && (o < 0 || o >= a)) return {};
    o < 0 ? (x = o + a) : o >= a && (x = o - a),
      l && v.indexOf(x) < 0 && (v = v.concat(x)),
      (g = {
        animating: !0,
        currentSlide: x,
        lazyLoadedList: v,
        targetSlide: x,
      }),
      (S = { animating: !1, targetSlide: x });
  } else
    (w = x),
      x < 0
        ? ((w = x + a), s ? a % f !== 0 && (w = a - (a % f)) : (w = 0))
        : !Zx(t) && x > c
        ? (x = w = c)
        : d && x >= a
        ? ((x = s ? a : a - 1), (w = s ? 0 : a - 1))
        : x >= a && ((w = x - a), s ? a % f !== 0 && (w = 0) : (w = a - h)),
      !s && x + h >= a && (w = a - h),
      (p = sl(oe(oe({}, t), {}, { slideIndex: x }))),
      (m = sl(oe(oe({}, t), {}, { slideIndex: w }))),
      s || (p === m && (x = w), (p = m)),
      l && (v = v.concat(Kx(oe(oe({}, t), {}, { currentSlide: x })))),
      y
        ? ((g = {
            animating: !0,
            currentSlide: w,
            trackStyle: ew(oe(oe({}, t), {}, { left: p })),
            lazyLoadedList: v,
            targetSlide: j,
          }),
          (S = {
            animating: !1,
            currentSlide: w,
            trackStyle: il(oe(oe({}, t), {}, { left: m })),
            swipeLeft: null,
            targetSlide: j,
          }))
        : (g = {
            currentSlide: w,
            trackStyle: il(oe(oe({}, t), {}, { left: m })),
            lazyLoadedList: v,
            targetSlide: j,
          });
  return { state: g, nextState: S };
};
R.changeSlide = function (t, n) {
  var r,
    i,
    s,
    o,
    a,
    l = t.slidesToScroll,
    c = t.slidesToShow,
    d = t.slideCount,
    f = t.currentSlide,
    h = t.targetSlide,
    y = t.lazyLoad,
    v = t.infinite;
  if (((o = d % l !== 0), (r = o ? 0 : (d - f) % l), n.message === "previous"))
    (s = r === 0 ? l : c - r),
      (a = f - s),
      y && !v && ((i = f - s), (a = i === -1 ? d - 1 : i)),
      v || (a = h - l);
  else if (n.message === "next")
    (s = r === 0 ? l : r),
      (a = f + s),
      y && !v && (a = ((f + l) % d) + r),
      v || (a = h + l);
  else if (n.message === "dots") a = n.index * n.slidesToScroll;
  else if (n.message === "children") {
    if (((a = n.index), v)) {
      var x = Tk(oe(oe({}, t), {}, { targetSlide: a }));
      a > n.currentSlide && x === "left"
        ? (a = a - d)
        : a < n.currentSlide && x === "right" && (a = a + d);
    }
  } else n.message === "index" && (a = Number(n.index));
  return a;
};
R.keyHandler = function (t, n, r) {
  return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n
    ? ""
    : t.keyCode === 37
    ? r
      ? "next"
      : "previous"
    : t.keyCode === 39
    ? r
      ? "previous"
      : "next"
    : "";
};
R.swipeStart = function (t, n, r) {
  return (
    t.target.tagName === "IMG" && di(t),
    !n || (!r && t.type.indexOf("mouse") !== -1)
      ? ""
      : {
          dragging: !0,
          touchObject: {
            startX: t.touches ? t.touches[0].pageX : t.clientX,
            startY: t.touches ? t.touches[0].pageY : t.clientY,
            curX: t.touches ? t.touches[0].pageX : t.clientX,
            curY: t.touches ? t.touches[0].pageY : t.clientY,
          },
        }
  );
};
R.swipeMove = function (t, n) {
  var r = n.scrolling,
    i = n.animating,
    s = n.vertical,
    o = n.swipeToSlide,
    a = n.verticalSwiping,
    l = n.rtl,
    c = n.currentSlide,
    d = n.edgeFriction,
    f = n.edgeDragged,
    h = n.onEdge,
    y = n.swiped,
    v = n.swiping,
    x = n.slideCount,
    w = n.slidesToScroll,
    p = n.infinite,
    m = n.touchObject,
    g = n.swipeEvent,
    S = n.listHeight,
    j = n.listWidth;
  if (!r) {
    if (i) return di(t);
    s && o && a && di(t);
    var T,
      k = {},
      N = sl(n);
    (m.curX = t.touches ? t.touches[0].pageX : t.clientX),
      (m.curY = t.touches ? t.touches[0].pageY : t.clientY),
      (m.swipeLength = Math.round(Math.sqrt(Math.pow(m.curX - m.startX, 2))));
    var P = Math.round(Math.sqrt(Math.pow(m.curY - m.startY, 2)));
    if (!a && !v && P > 10) return { scrolling: !0 };
    a && (m.swipeLength = P);
    var E = (l ? -1 : 1) * (m.curX > m.startX ? 1 : -1);
    a && (E = m.curY > m.startY ? 1 : -1);
    var L = Math.ceil(x / w),
      D = Jx(n.touchObject, a),
      I = m.swipeLength;
    return (
      p ||
        (((c === 0 && (D === "right" || D === "down")) ||
          (c + 1 >= L && (D === "left" || D === "up")) ||
          (!Zx(n) && (D === "left" || D === "up"))) &&
          ((I = m.swipeLength * d),
          f === !1 && h && (h(D), (k.edgeDragged = !0)))),
      !y && g && (g(D), (k.swiped = !0)),
      s ? (T = N + I * (S / j) * E) : l ? (T = N - I * E) : (T = N + I * E),
      a && (T = N + I * E),
      (k = oe(
        oe({}, k),
        {},
        {
          touchObject: m,
          swipeLeft: T,
          trackStyle: il(oe(oe({}, n), {}, { left: T })),
        }
      )),
      Math.abs(m.curX - m.startX) < Math.abs(m.curY - m.startY) * 0.8 ||
        (m.swipeLength > 10 && ((k.swiping = !0), di(t))),
      k
    );
  }
};
R.swipeEnd = function (t, n) {
  var r = n.dragging,
    i = n.swipe,
    s = n.touchObject,
    o = n.listWidth,
    a = n.touchThreshold,
    l = n.verticalSwiping,
    c = n.listHeight,
    d = n.swipeToSlide,
    f = n.scrolling,
    h = n.onSwipe,
    y = n.targetSlide,
    v = n.currentSlide,
    x = n.infinite;
  if (!r) return i && di(t), {};
  var w = l ? c / a : o / a,
    p = Jx(s, l),
    m = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {},
    };
  if (f || !s.swipeLength) return m;
  if (s.swipeLength > w) {
    di(t), h && h(p);
    var g,
      S,
      j = x ? v : y;
    switch (p) {
      case "left":
      case "up":
        (S = j + Bm(n)), (g = d ? zm(n, S) : S), (m.currentDirection = 0);
        break;
      case "right":
      case "down":
        (S = j - Bm(n)), (g = d ? zm(n, S) : S), (m.currentDirection = 1);
        break;
      default:
        g = j;
    }
    m.triggerSlideHandler = g;
  } else {
    var T = sl(n);
    m.trackStyle = ew(oe(oe({}, n), {}, { left: T }));
  }
  return m;
};
var bk = (R.getNavigableIndexes = function (t) {
    for (
      var n = t.infinite ? t.slideCount * 2 : t.slideCount,
        r = t.infinite ? t.slidesToShow * -1 : 0,
        i = t.infinite ? t.slidesToShow * -1 : 0,
        s = [];
      r < n;

    )
      s.push(r),
        (r = i + t.slidesToScroll),
        (i += Math.min(t.slidesToScroll, t.slidesToShow));
    return s;
  }),
  zm = (R.checkNavigable = function (t, n) {
    var r = bk(t),
      i = 0;
    if (n > r[r.length - 1]) n = r[r.length - 1];
    else
      for (var s in r) {
        if (n < r[s]) {
          n = i;
          break;
        }
        i = r[s];
      }
    return n;
  }),
  Bm = (R.getSlideCount = function (t) {
    var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
      var r,
        i = t.listRef,
        s = (i.querySelectorAll && i.querySelectorAll(".slick-slide")) || [];
      if (
        (Array.from(s).every(function (l) {
          if (t.vertical) {
            if (l.offsetTop + Xx(l) / 2 > t.swipeLeft * -1) return (r = l), !1;
          } else if (l.offsetLeft - n + Td(l) / 2 > t.swipeLeft * -1) return (r = l), !1;
          return !0;
        }),
        !r)
      )
        return 0;
      var o = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
        a = Math.abs(r.dataset.index - o) || 1;
      return a;
    } else return t.slidesToScroll;
  }),
  yh = (R.checkSpecKeys = function (t, n) {
    return n.reduce(function (r, i) {
      return r && t.hasOwnProperty(i);
    }, !0)
      ? null
      : console.error("Keys Missing:", t);
  }),
  il = (R.getTrackCSS = function (t) {
    yh(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
    ]);
    var n,
      r,
      i = t.slideCount + 2 * t.slidesToShow;
    t.vertical ? (r = i * t.slideHeight) : (n = jk(t) * t.slideWidth);
    var s = { opacity: 1, transition: "", WebkitTransition: "" };
    if (t.useTransform) {
      var o = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        a = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        l = t.vertical
          ? "translateY(" + t.left + "px)"
          : "translateX(" + t.left + "px)";
      s = oe(
        oe({}, s),
        {},
        { WebkitTransform: o, transform: a, msTransform: l }
      );
    } else t.vertical ? (s.top = t.left) : (s.left = t.left);
    return (
      t.fade && (s = { opacity: 1 }),
      n && (s.width = n),
      r && (s.height = r),
      window &&
        !window.addEventListener &&
        window.attachEvent &&
        (t.vertical
          ? (s.marginTop = t.left + "px")
          : (s.marginLeft = t.left + "px")),
      s
    );
  }),
  ew = (R.getTrackAnimateCSS = function (t) {
    yh(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
      "speed",
      "cssEase",
    ]);
    var n = il(t);
    return (
      t.useTransform
        ? ((n.WebkitTransition =
            "-webkit-transform " + t.speed + "ms " + t.cssEase),
          (n.transition = "transform " + t.speed + "ms " + t.cssEase))
        : t.vertical
        ? (n.transition = "top " + t.speed + "ms " + t.cssEase)
        : (n.transition = "left " + t.speed + "ms " + t.cssEase),
      n
    );
  }),
  sl = (R.getTrackLeft = function (t) {
    if (t.unslick) return 0;
    yh(t, [
      "slideIndex",
      "trackRef",
      "infinite",
      "centerMode",
      "slideCount",
      "slidesToShow",
      "slidesToScroll",
      "slideWidth",
      "listWidth",
      "variableWidth",
      "slideHeight",
    ]);
    var n = t.slideIndex,
      r = t.trackRef,
      i = t.infinite,
      s = t.centerMode,
      o = t.slideCount,
      a = t.slidesToShow,
      l = t.slidesToScroll,
      c = t.slideWidth,
      d = t.listWidth,
      f = t.variableWidth,
      h = t.slideHeight,
      y = t.fade,
      v = t.vertical,
      x = 0,
      w,
      p,
      m = 0;
    if (y || t.slideCount === 1) return 0;
    var g = 0;
    if (
      (i
        ? ((g = -ba(t)),
          o % l !== 0 && n + l > o && (g = -(n > o ? a - (n - o) : o % l)),
          s && (g += parseInt(a / 2)))
        : (o % l !== 0 && n + l > o && (g = a - (o % l)),
          s && (g = parseInt(a / 2))),
      (x = g * c),
      (m = g * h),
      v ? (w = n * h * -1 + m) : (w = n * c * -1 + x),
      f === !0)
    ) {
      var S,
        j = r && r.node;
      if (
        ((S = n + ba(t)),
        (p = j && j.childNodes[S]),
        (w = p ? p.offsetLeft * -1 : 0),
        s === !0)
      ) {
        (S = i ? n + ba(t) : n), (p = j && j.children[S]), (w = 0);
        for (var T = 0; T < S; T++)
          w -= j && j.children[T] && j.children[T].offsetWidth;
        (w -= parseInt(t.centerPadding)), (w += p && (d - p.offsetWidth) / 2);
      }
    }
    return w;
  }),
  ba = (R.getPreClones = function (t) {
    return t.unslick || !t.infinite
      ? 0
      : t.variableWidth
      ? t.slideCount
      : t.slidesToShow + (t.centerMode ? 1 : 0);
  }),
  Sk = (R.getPostClones = function (t) {
    return t.unslick || !t.infinite ? 0 : t.slideCount;
  }),
  jk = (R.getTotalSlides = function (t) {
    return t.slideCount === 1 ? 1 : ba(t) + t.slideCount + Sk(t);
  }),
  Tk = (R.siblingDirection = function (t) {
    return t.targetSlide > t.currentSlide
      ? t.targetSlide > t.currentSlide + Pk(t)
        ? "left"
        : "right"
      : t.targetSlide < t.currentSlide - Ck(t)
      ? "right"
      : "left";
  }),
  Pk = (R.slidesOnRight = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      s = t.centerPadding;
    if (r) {
      var o = (n - 1) / 2 + 1;
      return parseInt(s) > 0 && (o += 1), i && n % 2 === 0 && (o += 1), o;
    }
    return i ? 0 : n - 1;
  }),
  Ck = (R.slidesOnLeft = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      s = t.centerPadding;
    if (r) {
      var o = (n - 1) / 2 + 1;
      return parseInt(s) > 0 && (o += 1), !i && n % 2 === 0 && (o += 1), o;
    }
    return i ? n - 1 : 0;
  });
R.canUseDOM = function () {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
};
var kk = (R.validSettings = Object.keys(mk.default));
function Ek(e) {
  return kk.reduce(function (t, n) {
    return e.hasOwnProperty(n) && (t[n] = e[n]), t;
  }, {});
}
var Xl = {};
Object.defineProperty(Xl, "__esModule", { value: !0 });
Xl.Track = void 0;
var _n = tw(b),
  Gu = tw(Ql),
  Ku = R;
function tw(e) {
  return e && e.__esModule ? e : { default: e };
}
function Si(e) {
  "@babel/helpers - typeof";
  return (
    (Si =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Si(e)
  );
}
function Pd() {
  return (
    (Pd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pd.apply(this, arguments)
  );
}
function Nk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _k(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, rw(r.key), r);
  }
}
function Ok(e, t, n) {
  return (
    t && _k(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Ak(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Cd(e, t);
}
function Cd(e, t) {
  return (
    (Cd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Cd(e, t)
  );
}
function Rk(e) {
  var t = nw();
  return function () {
    var r = ol(e),
      i;
    if (t) {
      var s = ol(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else i = r.apply(this, arguments);
    return Lk(this, i);
  };
}
function Lk(e, t) {
  if (t && (Si(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return kd(e);
}
function kd(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function nw() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (nw = function () {
    return !!e;
  })();
}
function ol(e) {
  return (
    (ol = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    ol(e)
  );
}
function Vm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vm(Object(n), !0).forEach(function (r) {
          Ed(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Vm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ed(e, t, n) {
  return (
    (t = rw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function rw(e) {
  var t = Mk(e, "string");
  return Si(t) == "symbol" ? t : String(t);
}
function Mk(e, t) {
  if (Si(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Si(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yu = function (t) {
    var n, r, i, s, o;
    t.rtl ? (o = t.slideCount - 1 - t.index) : (o = t.index),
      (i = o < 0 || o >= t.slideCount),
      t.centerMode
        ? ((s = Math.floor(t.slidesToShow / 2)),
          (r = (o - t.currentSlide) % t.slideCount === 0),
          o > t.currentSlide - s - 1 && o <= t.currentSlide + s && (n = !0))
        : (n = t.currentSlide <= o && o < t.currentSlide + t.slidesToShow);
    var a;
    t.targetSlide < 0
      ? (a = t.targetSlide + t.slideCount)
      : t.targetSlide >= t.slideCount
      ? (a = t.targetSlide - t.slideCount)
      : (a = t.targetSlide);
    var l = o === a;
    return {
      "slick-slide": !0,
      "slick-active": n,
      "slick-center": r,
      "slick-cloned": i,
      "slick-current": l,
    };
  },
  Dk = function (t) {
    var n = {};
    return (
      (t.variableWidth === void 0 || t.variableWidth === !1) &&
        (n.width = t.slideWidth),
      t.fade &&
        ((n.position = "relative"),
        t.vertical
          ? (n.top = -t.index * parseInt(t.slideHeight))
          : (n.left = -t.index * parseInt(t.slideWidth)),
        (n.opacity = t.currentSlide === t.index ? 1 : 0),
        (n.zIndex = t.currentSlide === t.index ? 999 : 998),
        t.useCSS &&
          (n.transition =
            "opacity " +
            t.speed +
            "ms " +
            t.cssEase +
            ", visibility " +
            t.speed +
            "ms " +
            t.cssEase)),
      n
    );
  },
  Qu = function (t, n) {
    return t.key || n;
  },
  Ik = function (t) {
    var n,
      r = [],
      i = [],
      s = [],
      o = _n.default.Children.count(t.children),
      a = (0, Ku.lazyStartIndex)(t),
      l = (0, Ku.lazyEndIndex)(t);
    return (
      _n.default.Children.forEach(t.children, function (c, d) {
        var f,
          h = {
            message: "children",
            index: d,
            slidesToScroll: t.slidesToScroll,
            currentSlide: t.currentSlide,
          };
        !t.lazyLoad || (t.lazyLoad && t.lazyLoadedList.indexOf(d) >= 0)
          ? (f = c)
          : (f = _n.default.createElement("div", null));
        var y = Dk(Qe(Qe({}, t), {}, { index: d })),
          v = f.props.className || "",
          x = Yu(Qe(Qe({}, t), {}, { index: d }));
        if (
          (r.push(
            _n.default.cloneElement(f, {
              key: "original" + Qu(f, d),
              "data-index": d,
              className: (0, Gu.default)(x, v),
              tabIndex: "-1",
              "aria-hidden": !x["slick-active"],
              style: Qe(Qe({ outline: "none" }, f.props.style || {}), y),
              onClick: function (m) {
                f.props && f.props.onClick && f.props.onClick(m),
                  t.focusOnSelect && t.focusOnSelect(h);
              },
            })
          ),
          t.infinite && t.fade === !1)
        ) {
          var w = o - d;
          w <= (0, Ku.getPreClones)(t) &&
            ((n = -w),
            n >= a && (f = c),
            (x = Yu(Qe(Qe({}, t), {}, { index: n }))),
            i.push(
              _n.default.cloneElement(f, {
                key: "precloned" + Qu(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, Gu.default)(x, v),
                "aria-hidden": !x["slick-active"],
                style: Qe(Qe({}, f.props.style || {}), y),
                onClick: function (m) {
                  f.props && f.props.onClick && f.props.onClick(m),
                    t.focusOnSelect && t.focusOnSelect(h);
                },
              })
            )),
            (n = o + d),
            n < l && (f = c),
            (x = Yu(Qe(Qe({}, t), {}, { index: n }))),
            s.push(
              _n.default.cloneElement(f, {
                key: "postcloned" + Qu(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, Gu.default)(x, v),
                "aria-hidden": !x["slick-active"],
                style: Qe(Qe({}, f.props.style || {}), y),
                onClick: function (m) {
                  f.props && f.props.onClick && f.props.onClick(m),
                    t.focusOnSelect && t.focusOnSelect(h);
                },
              })
            );
        }
      }),
      t.rtl ? i.concat(r, s).reverse() : i.concat(r, s)
    );
  };
Xl.Track = (function (e) {
  Ak(n, e);
  var t = Rk(n);
  function n() {
    var r;
    Nk(this, n);
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return (
      (r = t.call.apply(t, [this].concat(s))),
      Ed(kd(r), "node", null),
      Ed(kd(r), "handleRef", function (a) {
        r.node = a;
      }),
      r
    );
  }
  return (
    Ok(n, [
      {
        key: "render",
        value: function () {
          var i = Ik(this.props),
            s = this.props,
            o = s.onMouseEnter,
            a = s.onMouseOver,
            l = s.onMouseLeave,
            c = { onMouseEnter: o, onMouseOver: a, onMouseLeave: l };
          return _n.default.createElement(
            "div",
            Pd(
              {
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle,
              },
              c
            ),
            i
          );
        },
      },
    ]),
    n
  );
})(_n.default.PureComponent);
var Jl = {};
function ji(e) {
  "@babel/helpers - typeof";
  return (
    (ji =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ji(e)
  );
}
Object.defineProperty(Jl, "__esModule", { value: !0 });
Jl.Dots = void 0;
var Jo = iw(b),
  Fk = iw(Ql),
  $m = R;
function iw(e) {
  return e && e.__esModule ? e : { default: e };
}
function Um(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function zk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Um(Object(n), !0).forEach(function (r) {
          Bk(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Um(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Bk(e, t, n) {
  return (
    (t = sw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Vk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $k(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, sw(r.key), r);
  }
}
function Uk(e, t, n) {
  return (
    t && $k(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function sw(e) {
  var t = Hk(e, "string");
  return ji(t) == "symbol" ? t : String(t);
}
function Hk(e, t) {
  if (ji(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ji(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Nd(e, t);
}
function Nd(e, t) {
  return (
    (Nd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Nd(e, t)
  );
}
function qk(e) {
  var t = ow();
  return function () {
    var r = al(e),
      i;
    if (t) {
      var s = al(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else i = r.apply(this, arguments);
    return Gk(this, i);
  };
}
function Gk(e, t) {
  if (t && (ji(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Kk(e);
}
function Kk(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ow() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (ow = function () {
    return !!e;
  })();
}
function al(e) {
  return (
    (al = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    al(e)
  );
}
var Yk = function (t) {
  var n;
  return (
    t.infinite
      ? (n = Math.ceil(t.slideCount / t.slidesToScroll))
      : (n = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1),
    n
  );
};
Jl.Dots = (function (e) {
  Wk(n, e);
  var t = qk(n);
  function n() {
    return Vk(this, n), t.apply(this, arguments);
  }
  return (
    Uk(n, [
      {
        key: "clickHandler",
        value: function (i, s) {
          s.preventDefault(), this.props.clickHandler(i);
        },
      },
      {
        key: "render",
        value: function () {
          for (
            var i = this.props,
              s = i.onMouseEnter,
              o = i.onMouseOver,
              a = i.onMouseLeave,
              l = i.infinite,
              c = i.slidesToScroll,
              d = i.slidesToShow,
              f = i.slideCount,
              h = i.currentSlide,
              y = Yk({
                slideCount: f,
                slidesToScroll: c,
                slidesToShow: d,
                infinite: l,
              }),
              v = { onMouseEnter: s, onMouseOver: o, onMouseLeave: a },
              x = [],
              w = 0;
            w < y;
            w++
          ) {
            var p = (w + 1) * c - 1,
              m = l ? p : (0, $m.clamp)(p, 0, f - 1),
              g = m - (c - 1),
              S = l ? g : (0, $m.clamp)(g, 0, f - 1),
              j = (0, Fk.default)({
                "slick-active": l ? h >= S && h <= m : h === S,
              }),
              T = {
                message: "dots",
                index: w,
                slidesToScroll: c,
                currentSlide: h,
              },
              k = this.clickHandler.bind(this, T);
            x = x.concat(
              Jo.default.createElement(
                "li",
                { key: w, className: j },
                Jo.default.cloneElement(this.props.customPaging(w), {
                  onClick: k,
                })
              )
            );
          }
          return Jo.default.cloneElement(
            this.props.appendDots(x),
            zk({ className: this.props.dotsClass }, v)
          );
        },
      },
    ]),
    n
  );
})(Jo.default.PureComponent);
var Ti = {};
function Pi(e) {
  "@babel/helpers - typeof";
  return (
    (Pi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pi(e)
  );
}
Object.defineProperty(Ti, "__esModule", { value: !0 });
Ti.PrevArrow = Ti.NextArrow = void 0;
var fi = lw(b),
  aw = lw(Ql),
  Qk = R;
function lw(e) {
  return e && e.__esModule ? e : { default: e };
}
function ll() {
  return (
    (ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ll.apply(this, arguments)
  );
}
function Hm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hm(Object(n), !0).forEach(function (r) {
          Xk(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Hm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Xk(e, t, n) {
  return (
    (t = dw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function uw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jk(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, dw(r.key), r);
  }
}
function cw(e, t, n) {
  return (
    t && Jk(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function dw(e) {
  var t = Zk(e, "string");
  return Pi(t) == "symbol" ? t : String(t);
}
function Zk(e, t) {
  if (Pi(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Pi(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && _d(e, t);
}
function _d(e, t) {
  return (
    (_d = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    _d(e, t)
  );
}
function hw(e) {
  var t = pw();
  return function () {
    var r = cl(e),
      i;
    if (t) {
      var s = cl(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else i = r.apply(this, arguments);
    return eE(this, i);
  };
}
function eE(e, t) {
  if (t && (Pi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return tE(e);
}
function tE(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function pw() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (pw = function () {
    return !!e;
  })();
}
function cl(e) {
  return (
    (cl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    cl(e)
  );
}
Ti.PrevArrow = (function (e) {
  fw(n, e);
  var t = hw(n);
  function n() {
    return uw(this, n), t.apply(this, arguments);
  }
  return (
    cw(n, [
      {
        key: "clickHandler",
        value: function (i, s) {
          s && s.preventDefault(), this.props.clickHandler(i, s);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-prev": !0 },
            s = this.clickHandler.bind(this, { message: "previous" });
          !this.props.infinite &&
            (this.props.currentSlide === 0 ||
              this.props.slideCount <= this.props.slidesToShow) &&
            ((i["slick-disabled"] = !0), (s = null));
          var o = {
              key: "0",
              "data-role": "none",
              className: (0, aw.default)(i),
              style: { display: "block" },
              onClick: s,
            },
            a = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            l;
          return (
            this.props.prevArrow
              ? (l = fi.default.cloneElement(
                  this.props.prevArrow,
                  ul(ul({}, o), a)
                ))
              : (l = fi.default.createElement(
                  "button",
                  ll({ key: "0", type: "button" }, o),
                  " ",
                  "Previous"
                )),
            l
          );
        },
      },
    ]),
    n
  );
})(fi.default.PureComponent);
Ti.NextArrow = (function (e) {
  fw(n, e);
  var t = hw(n);
  function n() {
    return uw(this, n), t.apply(this, arguments);
  }
  return (
    cw(n, [
      {
        key: "clickHandler",
        value: function (i, s) {
          s && s.preventDefault(), this.props.clickHandler(i, s);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-next": !0 },
            s = this.clickHandler.bind(this, { message: "next" });
          (0, Qk.canGoNext)(this.props) ||
            ((i["slick-disabled"] = !0), (s = null));
          var o = {
              key: "1",
              "data-role": "none",
              className: (0, aw.default)(i),
              style: { display: "block" },
              onClick: s,
            },
            a = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            l;
          return (
            this.props.nextArrow
              ? (l = fi.default.cloneElement(
                  this.props.nextArrow,
                  ul(ul({}, o), a)
                ))
              : (l = fi.default.createElement(
                  "button",
                  ll({ key: "1", type: "button" }, o),
                  " ",
                  "Next"
                )),
            l
          );
        },
      },
    ]),
    n
  );
})(fi.default.PureComponent);
var mw = (function () {
    if (typeof Map < "u") return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (i, s) {
          return i[0] === n ? ((r = s), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            i = this.__entries__[r];
          return i && i[1];
        }),
        (t.prototype.set = function (n, r) {
          var i = e(this.__entries__, n);
          ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            i = e(r, n);
          ~i && r.splice(i, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var i = 0, s = this.__entries__; i < s.length; i++) {
            var o = s[i];
            n.call(r, o[1], o[0]);
          }
        }),
        t
      );
    })();
  })(),
  Od =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  dl = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  nE = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(dl)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  rE = 2;
function iE(e, t) {
  var n = !1,
    r = !1,
    i = 0;
  function s() {
    n && ((n = !1), e()), r && a();
  }
  function o() {
    nE(s);
  }
  function a() {
    var l = Date.now();
    if (n) {
      if (l - i < rE) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(o, t);
    i = l;
  }
  return a;
}
var sE = 20,
  oE = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  aE = typeof MutationObserver < "u",
  lE = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = iE(this.refresh.bind(this), sE));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !Od ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          aE
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !Od ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? "" : n,
          i = oE.some(function (s) {
            return !!~r.indexOf(s);
          });
        i && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  gw = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  Ci = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || dl;
  },
  yw = Zl(0, 0, 0, 0);
function fl(e) {
  return parseFloat(e) || 0;
}
function Wm(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, i) {
    var s = e["border-" + i + "-width"];
    return r + fl(s);
  }, 0);
}
function uE(e) {
  for (
    var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t;
    r < i.length;
    r++
  ) {
    var s = i[r],
      o = e["padding-" + s];
    n[s] = fl(o);
  }
  return n;
}
function cE(e) {
  var t = e.getBBox();
  return Zl(0, 0, t.width, t.height);
}
function dE(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return yw;
  var r = Ci(e).getComputedStyle(e),
    i = uE(r),
    s = i.left + i.right,
    o = i.top + i.bottom,
    a = fl(r.width),
    l = fl(r.height);
  if (
    (r.boxSizing === "border-box" &&
      (Math.round(a + s) !== t && (a -= Wm(r, "left", "right") + s),
      Math.round(l + o) !== n && (l -= Wm(r, "top", "bottom") + o)),
    !hE(e))
  ) {
    var c = Math.round(a + s) - t,
      d = Math.round(l + o) - n;
    Math.abs(c) !== 1 && (a -= c), Math.abs(d) !== 1 && (l -= d);
  }
  return Zl(i.left, i.top, a, l);
}
var fE = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
        return e instanceof Ci(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof Ci(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function hE(e) {
  return e === Ci(e).document.documentElement;
}
function pE(e) {
  return Od ? (fE(e) ? cE(e) : dE(e)) : yw;
}
function mE(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    i = e.height,
    s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    o = Object.create(s.prototype);
  return (
    gw(o, {
      x: t,
      y: n,
      width: r,
      height: i,
      top: n,
      right: t + r,
      bottom: i + n,
      left: t,
    }),
    o
  );
}
function Zl(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var gE = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = Zl(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = pE(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  yE = (function () {
    function e(t, n) {
      var r = mE(n);
      gw(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  vE = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new mw()),
        typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof Ci(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new gE(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof Ci(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new yE(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  vw = typeof WeakMap < "u" ? new WeakMap() : new mw(),
  xw = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = lE.getInstance(),
        r = new vE(t, n, this);
      vw.set(this, r);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  xw.prototype[e] = function () {
    var t;
    return (t = vw.get(this))[e].apply(t, arguments);
  };
});
var xE = (function () {
  return typeof dl.ResizeObserver < "u" ? dl.ResizeObserver : xw;
})();
const wE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xE },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  bE = oS(wE);
Object.defineProperty(Yl, "__esModule", { value: !0 });
Yl.InnerSlider = void 0;
var $e = jo(b),
  SE = jo(Hx),
  jE = jo(hk),
  TE = jo(Ql),
  ce = R,
  PE = Xl,
  CE = Jl,
  qm = Ti,
  kE = jo(bE);
function jo(e) {
  return e && e.__esModule ? e : { default: e };
}
function Cr(e) {
  "@babel/helpers - typeof";
  return (
    (Cr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Cr(e)
  );
}
function hl() {
  return (
    (hl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hl.apply(this, arguments)
  );
}
function EE(e, t) {
  if (e == null) return {};
  var n = NE(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function NE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Gm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gm(Object(n), !0).forEach(function (r) {
          K(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Gm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function _E(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function OE(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, bw(r.key), r);
  }
}
function AE(e, t, n) {
  return (
    t && OE(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function RE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ad(e, t);
}
function Ad(e, t) {
  return (
    (Ad = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Ad(e, t)
  );
}
function LE(e) {
  var t = ww();
  return function () {
    var r = pl(e),
      i;
    if (t) {
      var s = pl(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else i = r.apply(this, arguments);
    return ME(this, i);
  };
}
function ME(e, t) {
  if (t && (Cr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return G(e);
}
function G(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ww() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (ww = function () {
    return !!e;
  })();
}
function pl(e) {
  return (
    (pl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    pl(e)
  );
}
function K(e, t, n) {
  return (
    (t = bw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function bw(e) {
  var t = DE(e, "string");
  return Cr(t) == "symbol" ? t : String(t);
}
function DE(e, t) {
  if (Cr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Cr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
Yl.InnerSlider = (function (e) {
  RE(n, e);
  var t = LE(n);
  function n(r) {
    var i;
    _E(this, n),
      (i = t.call(this, r)),
      K(G(i), "listRefHandler", function (o) {
        return (i.list = o);
      }),
      K(G(i), "trackRefHandler", function (o) {
        return (i.track = o);
      }),
      K(G(i), "adaptHeight", function () {
        if (i.props.adaptiveHeight && i.list) {
          var o = i.list.querySelector(
            '[data-index="'.concat(i.state.currentSlide, '"]')
          );
          i.list.style.height = (0, ce.getHeight)(o) + "px";
        }
      }),
      K(G(i), "componentDidMount", function () {
        if ((i.props.onInit && i.props.onInit(), i.props.lazyLoad)) {
          var o = (0, ce.getOnDemandLazySlides)(V(V({}, i.props), i.state));
          o.length > 0 &&
            (i.setState(function (l) {
              return { lazyLoadedList: l.lazyLoadedList.concat(o) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(o));
        }
        var a = V({ listRef: i.list, trackRef: i.track }, i.props);
        i.updateState(a, !0, function () {
          i.adaptHeight(), i.props.autoplay && i.autoPlay("update");
        }),
          i.props.lazyLoad === "progressive" &&
            (i.lazyLoadTimer = setInterval(i.progressiveLazyLoad, 1e3)),
          (i.ro = new kE.default(function () {
            i.state.animating
              ? (i.onWindowResized(!1),
                i.callbackTimers.push(
                  setTimeout(function () {
                    return i.onWindowResized();
                  }, i.props.speed)
                ))
              : i.onWindowResized();
          })),
          i.ro.observe(i.list),
          document.querySelectorAll &&
            Array.prototype.forEach.call(
              document.querySelectorAll(".slick-slide"),
              function (l) {
                (l.onfocus = i.props.pauseOnFocus ? i.onSlideFocus : null),
                  (l.onblur = i.props.pauseOnFocus ? i.onSlideBlur : null);
              }
            ),
          window.addEventListener
            ? window.addEventListener("resize", i.onWindowResized)
            : window.attachEvent("onresize", i.onWindowResized);
      }),
      K(G(i), "componentWillUnmount", function () {
        i.animationEndCallback && clearTimeout(i.animationEndCallback),
          i.lazyLoadTimer && clearInterval(i.lazyLoadTimer),
          i.callbackTimers.length &&
            (i.callbackTimers.forEach(function (o) {
              return clearTimeout(o);
            }),
            (i.callbackTimers = [])),
          window.addEventListener
            ? window.removeEventListener("resize", i.onWindowResized)
            : window.detachEvent("onresize", i.onWindowResized),
          i.autoplayTimer && clearInterval(i.autoplayTimer),
          i.ro.disconnect();
      }),
      K(G(i), "componentDidUpdate", function (o) {
        if (
          (i.checkImagesLoad(),
          i.props.onReInit && i.props.onReInit(),
          i.props.lazyLoad)
        ) {
          var a = (0, ce.getOnDemandLazySlides)(V(V({}, i.props), i.state));
          a.length > 0 &&
            (i.setState(function (d) {
              return { lazyLoadedList: d.lazyLoadedList.concat(a) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(a));
        }
        i.adaptHeight();
        var l = V(V({ listRef: i.list, trackRef: i.track }, i.props), i.state),
          c = i.didPropsChange(o);
        c &&
          i.updateState(l, c, function () {
            i.state.currentSlide >=
              $e.default.Children.count(i.props.children) &&
              i.changeSlide({
                message: "index",
                index:
                  $e.default.Children.count(i.props.children) -
                  i.props.slidesToShow,
                currentSlide: i.state.currentSlide,
              }),
              i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          });
      }),
      K(G(i), "onWindowResized", function (o) {
        i.debouncedResize && i.debouncedResize.cancel(),
          (i.debouncedResize = (0, jE.default)(function () {
            return i.resizeWindow(o);
          }, 50)),
          i.debouncedResize();
      }),
      K(G(i), "resizeWindow", function () {
        var o =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
          a = !!(i.track && i.track.node);
        if (a) {
          var l = V(
            V({ listRef: i.list, trackRef: i.track }, i.props),
            i.state
          );
          i.updateState(l, o, function () {
            i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          }),
            i.setState({ animating: !1 }),
            clearTimeout(i.animationEndCallback),
            delete i.animationEndCallback;
        }
      }),
      K(G(i), "updateState", function (o, a, l) {
        var c = (0, ce.initializedState)(o);
        o = V(V(V({}, o), c), {}, { slideIndex: c.currentSlide });
        var d = (0, ce.getTrackLeft)(o);
        o = V(V({}, o), {}, { left: d });
        var f = (0, ce.getTrackCSS)(o);
        (a ||
          $e.default.Children.count(i.props.children) !==
            $e.default.Children.count(o.children)) &&
          (c.trackStyle = f),
          i.setState(c, l);
      }),
      K(G(i), "ssrInit", function () {
        if (i.props.variableWidth) {
          var o = 0,
            a = 0,
            l = [],
            c = (0, ce.getPreClones)(
              V(
                V(V({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            ),
            d = (0, ce.getPostClones)(
              V(
                V(V({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            );
          i.props.children.forEach(function (k) {
            l.push(k.props.style.width), (o += k.props.style.width);
          });
          for (var f = 0; f < c; f++)
            (a += l[l.length - 1 - f]), (o += l[l.length - 1 - f]);
          for (var h = 0; h < d; h++) o += l[h];
          for (var y = 0; y < i.state.currentSlide; y++) a += l[y];
          var v = { width: o + "px", left: -a + "px" };
          if (i.props.centerMode) {
            var x = "".concat(l[i.state.currentSlide], "px");
            v.left = "calc("
              .concat(v.left, " + (100% - ")
              .concat(x, ") / 2 ) ");
          }
          return { trackStyle: v };
        }
        var w = $e.default.Children.count(i.props.children),
          p = V(V(V({}, i.props), i.state), {}, { slideCount: w }),
          m = (0, ce.getPreClones)(p) + (0, ce.getPostClones)(p) + w,
          g = (100 / i.props.slidesToShow) * m,
          S = 100 / m,
          j = (-S * ((0, ce.getPreClones)(p) + i.state.currentSlide) * g) / 100;
        i.props.centerMode && (j += (100 - (S * g) / 100) / 2);
        var T = { width: g + "%", left: j + "%" };
        return { slideWidth: S + "%", trackStyle: T };
      }),
      K(G(i), "checkImagesLoad", function () {
        var o =
            (i.list &&
              i.list.querySelectorAll &&
              i.list.querySelectorAll(".slick-slide img")) ||
            [],
          a = o.length,
          l = 0;
        Array.prototype.forEach.call(o, function (c) {
          var d = function () {
            return ++l && l >= a && i.onWindowResized();
          };
          if (!c.onclick)
            c.onclick = function () {
              return c.parentNode.focus();
            };
          else {
            var f = c.onclick;
            c.onclick = function (h) {
              f(h), c.parentNode.focus();
            };
          }
          c.onload ||
            (i.props.lazyLoad
              ? (c.onload = function () {
                  i.adaptHeight(),
                    i.callbackTimers.push(
                      setTimeout(i.onWindowResized, i.props.speed)
                    );
                })
              : ((c.onload = d),
                (c.onerror = function () {
                  d(), i.props.onLazyLoadError && i.props.onLazyLoadError();
                })));
        });
      }),
      K(G(i), "progressiveLazyLoad", function () {
        for (
          var o = [], a = V(V({}, i.props), i.state), l = i.state.currentSlide;
          l < i.state.slideCount + (0, ce.getPostClones)(a);
          l++
        )
          if (i.state.lazyLoadedList.indexOf(l) < 0) {
            o.push(l);
            break;
          }
        for (
          var c = i.state.currentSlide - 1;
          c >= -(0, ce.getPreClones)(a);
          c--
        )
          if (i.state.lazyLoadedList.indexOf(c) < 0) {
            o.push(c);
            break;
          }
        o.length > 0
          ? (i.setState(function (d) {
              return { lazyLoadedList: d.lazyLoadedList.concat(o) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(o))
          : i.lazyLoadTimer &&
            (clearInterval(i.lazyLoadTimer), delete i.lazyLoadTimer);
      }),
      K(G(i), "slideHandler", function (o) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          l = i.props,
          c = l.asNavFor,
          d = l.beforeChange,
          f = l.onLazyLoad,
          h = l.speed,
          y = l.afterChange,
          v = i.state.currentSlide,
          x = (0, ce.slideHandler)(
            V(
              V(V({ index: o }, i.props), i.state),
              {},
              { trackRef: i.track, useCSS: i.props.useCSS && !a }
            )
          ),
          w = x.state,
          p = x.nextState;
        if (w) {
          d && d(v, w.currentSlide);
          var m = w.lazyLoadedList.filter(function (g) {
            return i.state.lazyLoadedList.indexOf(g) < 0;
          });
          f && m.length > 0 && f(m),
            !i.props.waitForAnimate &&
              i.animationEndCallback &&
              (clearTimeout(i.animationEndCallback),
              y && y(v),
              delete i.animationEndCallback),
            i.setState(w, function () {
              c &&
                i.asNavForIndex !== o &&
                ((i.asNavForIndex = o), c.innerSlider.slideHandler(o)),
                p &&
                  (i.animationEndCallback = setTimeout(function () {
                    var g = p.animating,
                      S = EE(p, ["animating"]);
                    i.setState(S, function () {
                      i.callbackTimers.push(
                        setTimeout(function () {
                          return i.setState({ animating: g });
                        }, 10)
                      ),
                        y && y(w.currentSlide),
                        delete i.animationEndCallback;
                    });
                  }, h));
            });
        }
      }),
      K(G(i), "changeSlide", function (o) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          l = V(V({}, i.props), i.state),
          c = (0, ce.changeSlide)(l, o);
        if (
          !(c !== 0 && !c) &&
          (a === !0 ? i.slideHandler(c, a) : i.slideHandler(c),
          i.props.autoplay && i.autoPlay("update"),
          i.props.focusOnSelect)
        ) {
          var d = i.list.querySelectorAll(".slick-current");
          d[0] && d[0].focus();
        }
      }),
      K(G(i), "clickHandler", function (o) {
        i.clickable === !1 && (o.stopPropagation(), o.preventDefault()),
          (i.clickable = !0);
      }),
      K(G(i), "keyHandler", function (o) {
        var a = (0, ce.keyHandler)(o, i.props.accessibility, i.props.rtl);
        a !== "" && i.changeSlide({ message: a });
      }),
      K(G(i), "selectHandler", function (o) {
        i.changeSlide(o);
      }),
      K(G(i), "disableBodyScroll", function () {
        var o = function (l) {
          (l = l || window.event),
            l.preventDefault && l.preventDefault(),
            (l.returnValue = !1);
        };
        window.ontouchmove = o;
      }),
      K(G(i), "enableBodyScroll", function () {
        window.ontouchmove = null;
      }),
      K(G(i), "swipeStart", function (o) {
        i.props.verticalSwiping && i.disableBodyScroll();
        var a = (0, ce.swipeStart)(o, i.props.swipe, i.props.draggable);
        a !== "" && i.setState(a);
      }),
      K(G(i), "swipeMove", function (o) {
        var a = (0, ce.swipeMove)(
          o,
          V(
            V(V({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        a && (a.swiping && (i.clickable = !1), i.setState(a));
      }),
      K(G(i), "swipeEnd", function (o) {
        var a = (0, ce.swipeEnd)(
          o,
          V(
            V(V({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        if (a) {
          var l = a.triggerSlideHandler;
          delete a.triggerSlideHandler,
            i.setState(a),
            l !== void 0 &&
              (i.slideHandler(l),
              i.props.verticalSwiping && i.enableBodyScroll());
        }
      }),
      K(G(i), "touchEnd", function (o) {
        i.swipeEnd(o), (i.clickable = !0);
      }),
      K(G(i), "slickPrev", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "previous" });
          }, 0)
        );
      }),
      K(G(i), "slickNext", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "next" });
          }, 0)
        );
      }),
      K(G(i), "slickGoTo", function (o) {
        var a =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (((o = Number(o)), isNaN(o))) return "";
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide(
              {
                message: "index",
                index: o,
                currentSlide: i.state.currentSlide,
              },
              a
            );
          }, 0)
        );
      }),
      K(G(i), "play", function () {
        var o;
        if (i.props.rtl) o = i.state.currentSlide - i.props.slidesToScroll;
        else if ((0, ce.canGoNext)(V(V({}, i.props), i.state)))
          o = i.state.currentSlide + i.props.slidesToScroll;
        else return !1;
        i.slideHandler(o);
      }),
      K(G(i), "autoPlay", function (o) {
        i.autoplayTimer && clearInterval(i.autoplayTimer);
        var a = i.state.autoplaying;
        if (o === "update") {
          if (a === "hovered" || a === "focused" || a === "paused") return;
        } else if (o === "leave") {
          if (a === "paused" || a === "focused") return;
        } else if (o === "blur" && (a === "paused" || a === "hovered")) return;
        (i.autoplayTimer = setInterval(i.play, i.props.autoplaySpeed + 50)),
          i.setState({ autoplaying: "playing" });
      }),
      K(G(i), "pause", function (o) {
        i.autoplayTimer &&
          (clearInterval(i.autoplayTimer), (i.autoplayTimer = null));
        var a = i.state.autoplaying;
        o === "paused"
          ? i.setState({ autoplaying: "paused" })
          : o === "focused"
          ? (a === "hovered" || a === "playing") &&
            i.setState({ autoplaying: "focused" })
          : a === "playing" && i.setState({ autoplaying: "hovered" });
      }),
      K(G(i), "onDotsOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      K(G(i), "onDotsLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      K(G(i), "onTrackOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      K(G(i), "onTrackLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      K(G(i), "onSlideFocus", function () {
        return i.props.autoplay && i.pause("focused");
      }),
      K(G(i), "onSlideBlur", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "focused" &&
          i.autoPlay("blur")
        );
      }),
      K(G(i), "render", function () {
        var o = (0, TE.default)("slick-slider", i.props.className, {
            "slick-vertical": i.props.vertical,
            "slick-initialized": !0,
          }),
          a = V(V({}, i.props), i.state),
          l = (0, ce.extractObject)(a, [
            "fade",
            "cssEase",
            "speed",
            "infinite",
            "centerMode",
            "focusOnSelect",
            "currentSlide",
            "lazyLoad",
            "lazyLoadedList",
            "rtl",
            "slideWidth",
            "slideHeight",
            "listHeight",
            "vertical",
            "slidesToShow",
            "slidesToScroll",
            "slideCount",
            "trackStyle",
            "variableWidth",
            "unslick",
            "centerPadding",
            "targetSlide",
            "useCSS",
          ]),
          c = i.props.pauseOnHover;
        l = V(
          V({}, l),
          {},
          {
            onMouseEnter: c ? i.onTrackOver : null,
            onMouseLeave: c ? i.onTrackLeave : null,
            onMouseOver: c ? i.onTrackOver : null,
            focusOnSelect:
              i.props.focusOnSelect && i.clickable ? i.selectHandler : null,
          }
        );
        var d;
        if (i.props.dots === !0 && i.state.slideCount >= i.props.slidesToShow) {
          var f = (0, ce.extractObject)(a, [
              "dotsClass",
              "slideCount",
              "slidesToShow",
              "currentSlide",
              "slidesToScroll",
              "clickHandler",
              "children",
              "customPaging",
              "infinite",
              "appendDots",
            ]),
            h = i.props.pauseOnDotsHover;
          (f = V(
            V({}, f),
            {},
            {
              clickHandler: i.changeSlide,
              onMouseEnter: h ? i.onDotsLeave : null,
              onMouseOver: h ? i.onDotsOver : null,
              onMouseLeave: h ? i.onDotsLeave : null,
            }
          )),
            (d = $e.default.createElement(CE.Dots, f));
        }
        var y,
          v,
          x = (0, ce.extractObject)(a, [
            "infinite",
            "centerMode",
            "currentSlide",
            "slideCount",
            "slidesToShow",
            "prevArrow",
            "nextArrow",
          ]);
        (x.clickHandler = i.changeSlide),
          i.props.arrows &&
            ((y = $e.default.createElement(qm.PrevArrow, x)),
            (v = $e.default.createElement(qm.NextArrow, x)));
        var w = null;
        i.props.vertical && (w = { height: i.state.listHeight });
        var p = null;
        i.props.vertical === !1
          ? i.props.centerMode === !0 &&
            (p = { padding: "0px " + i.props.centerPadding })
          : i.props.centerMode === !0 &&
            (p = { padding: i.props.centerPadding + " 0px" });
        var m = V(V({}, w), p),
          g = i.props.touchMove,
          S = {
            className: "slick-list",
            style: m,
            onClick: i.clickHandler,
            onMouseDown: g ? i.swipeStart : null,
            onMouseMove: i.state.dragging && g ? i.swipeMove : null,
            onMouseUp: g ? i.swipeEnd : null,
            onMouseLeave: i.state.dragging && g ? i.swipeEnd : null,
            onTouchStart: g ? i.swipeStart : null,
            onTouchMove: i.state.dragging && g ? i.swipeMove : null,
            onTouchEnd: g ? i.touchEnd : null,
            onTouchCancel: i.state.dragging && g ? i.swipeEnd : null,
            onKeyDown: i.props.accessibility ? i.keyHandler : null,
          },
          j = { className: o, dir: "ltr", style: i.props.style };
        return (
          i.props.unslick &&
            ((S = { className: "slick-list" }), (j = { className: o })),
          $e.default.createElement(
            "div",
            j,
            i.props.unslick ? "" : y,
            $e.default.createElement(
              "div",
              hl({ ref: i.listRefHandler }, S),
              $e.default.createElement(
                PE.Track,
                hl({ ref: i.trackRefHandler }, l),
                i.props.children
              )
            ),
            i.props.unslick ? "" : v,
            i.props.unslick ? "" : d
          )
        );
      }),
      (i.list = null),
      (i.track = null),
      (i.state = V(
        V({}, SE.default),
        {},
        {
          currentSlide: i.props.initialSlide,
          targetSlide: i.props.initialSlide ? i.props.initialSlide : 0,
          slideCount: $e.default.Children.count(i.props.children),
        }
      )),
      (i.callbackTimers = []),
      (i.clickable = !0),
      (i.debouncedResize = null);
    var s = i.ssrInit();
    return (i.state = V(V({}, i.state), s)), i;
  }
  return (
    AE(n, [
      {
        key: "didPropsChange",
        value: function (i) {
          for (
            var s = !1, o = 0, a = Object.keys(this.props);
            o < a.length;
            o++
          ) {
            var l = a[o];
            if (!i.hasOwnProperty(l)) {
              s = !0;
              break;
            }
            if (
              !(
                Cr(i[l]) === "object" ||
                typeof i[l] == "function" ||
                isNaN(i[l])
              ) &&
              i[l] !== this.props[l]
            ) {
              s = !0;
              break;
            }
          }
          return (
            s ||
            $e.default.Children.count(this.props.children) !==
              $e.default.Children.count(i.children)
          );
        },
      },
    ]),
    n
  );
})($e.default.Component);
var IE = function (e) {
    return e
      .replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      })
      .toLowerCase();
  },
  FE = IE,
  zE = FE,
  BE = function (e) {
    var t = /[height|width]$/;
    return t.test(e);
  },
  Km = function (e) {
    var t = "",
      n = Object.keys(e);
    return (
      n.forEach(function (r, i) {
        var s = e[r];
        (r = zE(r)),
          BE(r) && typeof s == "number" && (s = s + "px"),
          s === !0
            ? (t += r)
            : s === !1
            ? (t += "not " + r)
            : (t += "(" + r + ": " + s + ")"),
          i < n.length - 1 && (t += " and ");
      }),
      t
    );
  },
  VE = function (e) {
    var t = "";
    return typeof e == "string"
      ? e
      : e instanceof Array
      ? (e.forEach(function (n, r) {
          (t += Km(n)), r < e.length - 1 && (t += ", ");
        }),
        t)
      : Km(e);
  },
  $E = VE,
  Xu,
  Ym;
function UE() {
  if (Ym) return Xu;
  Ym = 1;
  function e(t) {
    (this.options = t), !t.deferSetup && this.setup();
  }
  return (
    (e.prototype = {
      constructor: e,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (t) {
        return this.options === t || this.options.match === t;
      },
    }),
    (Xu = e),
    Xu
  );
}
var Ju, Qm;
function Sw() {
  if (Qm) return Ju;
  Qm = 1;
  function e(r, i) {
    var s = 0,
      o = r.length,
      a;
    for (s; s < o && ((a = i(r[s], s)), a !== !1); s++);
  }
  function t(r) {
    return Object.prototype.toString.apply(r) === "[object Array]";
  }
  function n(r) {
    return typeof r == "function";
  }
  return (Ju = { isFunction: n, isArray: t, each: e }), Ju;
}
var Zu, Xm;
function HE() {
  if (Xm) return Zu;
  Xm = 1;
  var e = UE(),
    t = Sw().each;
  function n(r, i) {
    (this.query = r),
      (this.isUnconditional = i),
      (this.handlers = []),
      (this.mql = window.matchMedia(r));
    var s = this;
    (this.listener = function (o) {
      (s.mql = o.currentTarget || o), s.assess();
    }),
      this.mql.addListener(this.listener);
  }
  return (
    (n.prototype = {
      constuctor: n,
      addHandler: function (r) {
        var i = new e(r);
        this.handlers.push(i), this.matches() && i.on();
      },
      removeHandler: function (r) {
        var i = this.handlers;
        t(i, function (s, o) {
          if (s.equals(r)) return s.destroy(), !i.splice(o, 1);
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        t(this.handlers, function (r) {
          r.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var r = this.matches() ? "on" : "off";
        t(this.handlers, function (i) {
          i[r]();
        });
      },
    }),
    (Zu = n),
    Zu
  );
}
var ec, Jm;
function WE() {
  if (Jm) return ec;
  Jm = 1;
  var e = HE(),
    t = Sw(),
    n = t.each,
    r = t.isFunction,
    i = t.isArray;
  function s() {
    if (!window.matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia("only all").matches);
  }
  return (
    (s.prototype = {
      constructor: s,
      register: function (o, a, l) {
        var c = this.queries,
          d = l && this.browserIsIncapable;
        return (
          c[o] || (c[o] = new e(o, d)),
          r(a) && (a = { match: a }),
          i(a) || (a = [a]),
          n(a, function (f) {
            r(f) && (f = { match: f }), c[o].addHandler(f);
          }),
          this
        );
      },
      unregister: function (o, a) {
        var l = this.queries[o];
        return (
          l && (a ? l.removeHandler(a) : (l.clear(), delete this.queries[o])),
          this
        );
      },
    }),
    (ec = s),
    ec
  );
}
var tc, Zm;
function qE() {
  if (Zm) return tc;
  Zm = 1;
  var e = WE();
  return (tc = new e()), tc;
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = o(b),
    n = Yl,
    r = o($E),
    i = o(gh),
    s = R;
  function o(P) {
    return P && P.__esModule ? P : { default: P };
  }
  function a(P) {
    "@babel/helpers - typeof";
    return (
      (a =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (E) {
              return typeof E;
            }
          : function (E) {
              return E &&
                typeof Symbol == "function" &&
                E.constructor === Symbol &&
                E !== Symbol.prototype
                ? "symbol"
                : typeof E;
            }),
      a(P)
    );
  }
  function l() {
    return (
      (l = Object.assign
        ? Object.assign.bind()
        : function (P) {
            for (var E = 1; E < arguments.length; E++) {
              var L = arguments[E];
              for (var D in L)
                Object.prototype.hasOwnProperty.call(L, D) && (P[D] = L[D]);
            }
            return P;
          }),
      l.apply(this, arguments)
    );
  }
  function c(P, E) {
    var L = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      var D = Object.getOwnPropertySymbols(P);
      E &&
        (D = D.filter(function (I) {
          return Object.getOwnPropertyDescriptor(P, I).enumerable;
        })),
        L.push.apply(L, D);
    }
    return L;
  }
  function d(P) {
    for (var E = 1; E < arguments.length; E++) {
      var L = arguments[E] != null ? arguments[E] : {};
      E % 2
        ? c(Object(L), !0).forEach(function (D) {
            j(P, D, L[D]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(L))
        : c(Object(L)).forEach(function (D) {
            Object.defineProperty(P, D, Object.getOwnPropertyDescriptor(L, D));
          });
    }
    return P;
  }
  function f(P, E) {
    if (!(P instanceof E))
      throw new TypeError("Cannot call a class as a function");
  }
  function h(P, E) {
    for (var L = 0; L < E.length; L++) {
      var D = E[L];
      (D.enumerable = D.enumerable || !1),
        (D.configurable = !0),
        "value" in D && (D.writable = !0),
        Object.defineProperty(P, T(D.key), D);
    }
  }
  function y(P, E, L) {
    return (
      E && h(P.prototype, E),
      Object.defineProperty(P, "prototype", { writable: !1 }),
      P
    );
  }
  function v(P, E) {
    if (typeof E != "function" && E !== null)
      throw new TypeError("Super expression must either be null or a function");
    (P.prototype = Object.create(E && E.prototype, {
      constructor: { value: P, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(P, "prototype", { writable: !1 }),
      E && x(P, E);
  }
  function x(P, E) {
    return (
      (x = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (D, I) {
            return (D.__proto__ = I), D;
          }),
      x(P, E)
    );
  }
  function w(P) {
    var E = g();
    return function () {
      var D = S(P),
        I;
      if (E) {
        var B = S(this).constructor;
        I = Reflect.construct(D, arguments, B);
      } else I = D.apply(this, arguments);
      return p(this, I);
    };
  }
  function p(P, E) {
    if (E && (a(E) === "object" || typeof E == "function")) return E;
    if (E !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return m(P);
  }
  function m(P) {
    if (P === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return P;
  }
  function g() {
    try {
      var P = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch {}
    return (g = function () {
      return !!P;
    })();
  }
  function S(P) {
    return (
      (S = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (L) {
            return L.__proto__ || Object.getPrototypeOf(L);
          }),
      S(P)
    );
  }
  function j(P, E, L) {
    return (
      (E = T(E)),
      E in P
        ? Object.defineProperty(P, E, {
            value: L,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (P[E] = L),
      P
    );
  }
  function T(P) {
    var E = k(P, "string");
    return a(E) == "symbol" ? E : String(E);
  }
  function k(P, E) {
    if (a(P) != "object" || !P) return P;
    var L = P[Symbol.toPrimitive];
    if (L !== void 0) {
      var D = L.call(P, E || "default");
      if (a(D) != "object") return D;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (E === "string" ? String : Number)(P);
  }
  var N = (0, s.canUseDOM)() && qE();
  e.default = (function (P) {
    v(L, P);
    var E = w(L);
    function L(D) {
      var I;
      return (
        f(this, L),
        (I = E.call(this, D)),
        j(m(I), "innerSliderRefHandler", function (B) {
          return (I.innerSlider = B);
        }),
        j(m(I), "slickPrev", function () {
          return I.innerSlider.slickPrev();
        }),
        j(m(I), "slickNext", function () {
          return I.innerSlider.slickNext();
        }),
        j(m(I), "slickGoTo", function (B) {
          var at =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return I.innerSlider.slickGoTo(B, at);
        }),
        j(m(I), "slickPause", function () {
          return I.innerSlider.pause("paused");
        }),
        j(m(I), "slickPlay", function () {
          return I.innerSlider.autoPlay("play");
        }),
        (I.state = { breakpoint: null }),
        (I._responsiveMediaHandlers = []),
        I
      );
    }
    return (
      y(L, [
        {
          key: "media",
          value: function (I, B) {
            N.register(I, B),
              this._responsiveMediaHandlers.push({ query: I, handler: B });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var I = this;
            if (this.props.responsive) {
              var B = this.props.responsive.map(function (le) {
                return le.breakpoint;
              });
              B.sort(function (le, J) {
                return le - J;
              }),
                B.forEach(function (le, J) {
                  var A;
                  J === 0
                    ? (A = (0, r.default)({ minWidth: 0, maxWidth: le }))
                    : (A = (0, r.default)({
                        minWidth: B[J - 1] + 1,
                        maxWidth: le,
                      })),
                    (0, s.canUseDOM)() &&
                      I.media(A, function () {
                        I.setState({ breakpoint: le });
                      });
                });
              var at = (0, r.default)({ minWidth: B.slice(-1)[0] });
              (0, s.canUseDOM)() &&
                this.media(at, function () {
                  I.setState({ breakpoint: null });
                });
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this._responsiveMediaHandlers.forEach(function (I) {
              N.unregister(I.query, I.handler);
            });
          },
        },
        {
          key: "render",
          value: function () {
            var I = this,
              B,
              at;
            this.state.breakpoint
              ? ((at = this.props.responsive.filter(function (Te) {
                  return Te.breakpoint === I.state.breakpoint;
                })),
                (B =
                  at[0].settings === "unslick"
                    ? "unslick"
                    : d(d(d({}, i.default), this.props), at[0].settings)))
              : (B = d(d({}, i.default), this.props)),
              B.centerMode && (B.slidesToScroll > 1, (B.slidesToScroll = 1)),
              B.fade &&
                (B.slidesToShow > 1,
                B.slidesToScroll > 1,
                (B.slidesToShow = 1),
                (B.slidesToScroll = 1));
            var le = t.default.Children.toArray(this.props.children);
            (le = le.filter(function (Te) {
              return typeof Te == "string" ? !!Te.trim() : !!Te;
            })),
              B.variableWidth &&
                (B.rows > 1 || B.slidesPerRow > 1) &&
                (console.warn(
                  "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                ),
                (B.variableWidth = !1));
            for (
              var J = [], A = null, F = 0;
              F < le.length;
              F += B.rows * B.slidesPerRow
            ) {
              for (
                var $ = [], Z = F;
                Z < F + B.rows * B.slidesPerRow;
                Z += B.slidesPerRow
              ) {
                for (
                  var ue = [], Ye = Z;
                  Ye < Z + B.slidesPerRow &&
                  (B.variableWidth &&
                    le[Ye].props.style &&
                    (A = le[Ye].props.style.width),
                  !(Ye >= le.length));
                  Ye += 1
                )
                  ue.push(
                    t.default.cloneElement(le[Ye], {
                      key: 100 * F + 10 * Z + Ye,
                      tabIndex: -1,
                      style: {
                        width: "".concat(100 / B.slidesPerRow, "%"),
                        display: "inline-block",
                      },
                    })
                  );
                $.push(t.default.createElement("div", { key: 10 * F + Z }, ue));
              }
              B.variableWidth
                ? J.push(
                    t.default.createElement(
                      "div",
                      { key: F, style: { width: A } },
                      $
                    )
                  )
                : J.push(t.default.createElement("div", { key: F }, $));
            }
            if (B === "unslick") {
              var z = "regular slider " + (this.props.className || "");
              return t.default.createElement("div", { className: z }, le);
            } else
              J.length <= B.slidesToShow && !B.infinite && (B.unslick = !0);
            return t.default.createElement(
              n.InnerSlider,
              l(
                { style: this.props.style, ref: this.innerSliderRefHandler },
                (0, s.filterSettings)(B)
              ),
              J
            );
          },
        },
      ]),
      L
    );
  })(t.default.Component);
})(Ux);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(Ux);
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.default = t.default;
})($x);
const jw = _i($x),
  GE = () => {
    const e = [
        {
          title:
            "Crowdsourced Road Intelligence: The Future of Infrastructure Reporting",
          date: "Jul 15, 2025",
          readingTime: "6 min",
          image: "/blog16.jpg",
          link: "https://medium.com/@pathpulse.ai/crowdsourced-road-intelligence-the-future-of-infrastructure-reporting-e69f8146c246",
        },
        {
          title: "The World is Changing: How Your Drive is Mapping the Future",
          date: "June 26, 2025",
          readingTime: "4 min",
          image: "/blog15.jpg",
          link: "https://medium.com/@pathpulse.ai/the-world-is-changing-how-your-drive-is-mapping-the-future-2337b9dca879",
        },
        {
          title:
            "Millimaps: The Invisible Intelligence Layer That’s Redefining Urban Navigation",
          date: "June 7, 2025",
          readingTime: "4 min",
          image: "/blog14.jpg",
          link: "https://medium.com/@pathpulse.ai/millimaps-the-invisible-intelligence-layer-thats-redefining-urban-navigation-81decf026086",
        },
        {
          title: "How Poor Road Intelligence is Costing Businesses Millions",
          date: "April 06, 2025",
          readingTime: "3 min",
          image: "/blog13.jpg",
          link: "https://medium.com/@pathpulse.ai/how-poor-road-intelligence-is-costing-businesses-millions-3db38275d221",
        },
        {
          title:
            "The Future of Smart Cities with PathPulse.ai Leading the Charge",
          date: "Mar 21, 2025",
          readingTime: "4 min",
          image: "/blog12.jpg",
          link: "https://medium.com/@pathpulse.ai/depin-and-ai-04320a4361b6",
        },
        {
          title:
            "How AI and Machine Learning Are Reshaping Data Accuracy in a Noisy World",
          date: "Mar 4, 2025",
          readingTime: "3 min",
          image: "/blogs.jpg",
          link: "https://medium.com/@pathpulse.ai/how-ai-and-machine-learning-are-reshaping-data-accuracy-in-a-noisy-world-5a0b8034b9ae",
        },
        {
          title: "Limitations & Challenges of GPS Technology",
          date: "Feb 24, 2025",
          readingTime: "4 mins",
          image: "/blog9.png",
          link: "https://medium.com/@pathpulse.ai/limitations-challenges-of-gps-technology-872b5ec66a0b",
        },
        {
          title: "Why the Future of Cities Lies in Real-Time Insights",
          date: "Feb 18, 2025",
          readingTime: "5 mins",
          image: "/blog8.png",
          link: "https://medium.com/@pathpulse.ai/why-the-future-of-cities-lies-in-real-time-insights-dfe35351b879",
        },
        {
          title:
            "PathPulse.ai — Bridging the Gap Between Data Science and Navigation",
          date: "Feb 7, 2025",
          readingTime: "4 mins",
          image: "/blog7.jpg",
          link: "https://medium.com/@pathpulse.ai/pathpulse-ai-bridging-the-gap-between-data-science-and-navigation-421b8f498f64",
        },
        {
          title: "How AI Helps Us Go Beyond Traditional Navigation",
          date: "Jan 30, 2025",
          readingTime: "4 mins",
          image: "/blog6.jpeg",
          link: "https://medium.com/@pathpulse.ai/how-ai-helps-us-go-beyond-traditional-navigation-b1a4cbae5c01",
        },
        {
          title:
            "How Human Choices Fuel a Silent Pandemic? And How Can PathPulse.ai Break the Cycle?",
          date: "Jan 25, 2025",
          readingTime: "5 mins",
          image: "/blog10.png",
          link: "https://medium.com/@pathpulse.ai/can-ai-rewrite-the-future-of-road-safety-141495065f92",
        },
        {
          title: "Exploring the Unique Features of the PathPulse Ecosystem",
          date: "Jan 16, 2025",
          readingTime: "6 mins",
          image: "/blog5.jpeg",
          link: "https://medium.com/@pathpulse.ai/exploring-the-unique-features-of-the-pathpulse-ecosystem-65ad6e8e33f6",
        },
        {
          title:
            "PathPulse.ai: How Dash Cameras and AI are Shaping the Future of Navigation",
          date: "Dec 11, 2024",
          readingTime: "4 mins",
          image: "/blog1.jpg",
          link: "https://medium.com/@pathpulse.ai/pathpulse-ai-how-dash-cameras-and-ai-are-shaping-the-future-of-navigation-52ebaf3b528f",
        },
        {
          title:
            "The AI Revolution in Navigation: Inside PulseNet’s Technology",
          date: "Nov 29, 2024",
          readingTime: "6 min",
          image: "/blog4.jpg",
          link: "https://medium.com/@pathpulse.ai/the-ai-revolution-in-navigation-inside-pulsenets-technology-ee0ec4e695da",
        },
        {
          title:
            "The Future of Maps: Revolutionizing Navigation with PathPulse.ai",
          date: "Nov 18, 2024",
          readingTime: "6 mins",
          image: "/blog2.jpg",
          link: "https://medium.com/@pathpulse.ai/the-future-of-maps-revolutionizing-navigation-with-pathpulse-ai-e3a5f45c131a",
        },
        {
          title: "Modern Navigation Apps: A Growing Heap of Unsolved Problems?",
          date: "Nov 8, 2024",
          readingTime: "8 min",
          image: "/blog3.jpg",
          link: "https://medium.com/@pathpulse.ai/modern-navigation-apps-a-growing-heap-of-unsolved-problems-98afbc810ad1",
        },
      ],
      t = b.useRef(null),
      [n, r] = b.useState(0),
      [i, s] = b.useState(3);
    b.useEffect(() => {
      const c = () => {
        window.innerWidth < 640 ? s(1) : window.innerWidth < 1024 ? s(2) : s(3);
      };
      return (
        c(),
        window.addEventListener("resize", c),
        () => window.removeEventListener("resize", c)
      );
    }, []);
    const o = {
        centerMode: !0,
        infinite: !0,
        centerPadding: "0",
        slidesToShow: i,
        speed: 500,
        focusOnSelect: !0,
        autoplay: !1,
        autoplaySpeed: 2e3,
        beforeChange: (c, d) => r(d),
      },
      a = () => {
        t.current.slickPrev();
      },
      l = () => {
        t.current.slickNext();
      };
    return u.jsx(u.Fragment, {
      children: u.jsx("section", {
        className:
          "max-w-screen overflow-hidden pb-20 lg:pb-0 h-full bg-primary text-white relative",
        children: ""
      }),
    });
  },
  jn = [
    { name: "Decubate", logo: "/decubate.svg" },
    { name: "eesee", logo: "/eesee.svg" },
    { name: "GT Protocol", logo: "/gtprotocol.svg" },
    { name: "Fabwelt", logo: "/fabwelt.svg" },
    { name: "EMC", logo: "/edgematrix.svg" },
    { name: "Self Chain", logo: "/selfchain.svg" },
  ],
  Tn = [
    { name: "Altcoin Buzz", logo: "/altcoin.svg" },
    { name: "Unilend Finance", logo: "/unilend.svg" },
    { name: "Expand", logo: "/expand.svg" },
    { name: "Rei Net", logo: "/reinet.svg" },
    { name: "Polkastarter", logo: "/polkastarterr.svg" },
  ],
  KE = () =>
    u.jsxs("section", {
      id: "partners",
      className: "h-full text-white py-16 relative overflow-hidden",
      children: [
        u.jsxs("div", {
          className: "relative z-10 text-center",
          children: [
            u.jsx("h2", {
              className: "text-3xl sm:text-6xl font-clashSemiBold mb-10",
              children: "Trusted by Leading Brands",
            }),
            u.jsxs("p", {
              className:
                "text-white/70 font-clash mx-auto mb-12 text-sm sm:text-xl",
              children: [
                "We believe brands are the cultural connection between ",
                u.jsx("br", {}),
                "companies and their customers.",
              ],
            }),
            u.jsxs("div", {
              className:
                "overflow-hidden mt-10 flex flex-col items-center lg:space-y-20",
              children: [
                u.jsx("div", {
                  className: "flex animate-scroll-ltr space-x-16",
                  children: [
                    ...jn,
                    ...jn,
                    ...jn,
                    ...jn,
                    ...jn,
                    ...jn,
                    ...jn,
                    ...jn,
                  ].map((e, t) =>
                    u.jsx(
                      "div",
                      {
                        className: "flex-shrink-0 ",
                        children: u.jsx("img", {
                          src: e.logo,
                          alt: e.name,
                          className:
                            "flex justify-center items-center h-[100px] w-[140px] sm:h-full sm:w-full ",
                        }),
                      },
                      `ltr-${t}`
                    )
                  ),
                }),
                u.jsx("div", {
                  className: "flex animate-scroll-rtl space-x-16",
                  children: [
                    ...Tn,
                    ...Tn,
                    ...Tn,
                    ...Tn,
                    ...Tn,
                    ...Tn,
                    ...Tn,
                    ...Tn,
                  ].map((e, t) =>
                    u.jsx(
                      "div",
                      {
                        className: "flex-shrink-0",
                        children: u.jsx("img", {
                          src: e.logo,
                          alt: e.name,
                          className:
                            "flex justify-center items-center h-[100px] w-[140px] sm:h-full sm:w-full",
                        }),
                      },
                      `rtl-${t}`
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "absolute -bottom-1 w-1/2 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-[#081716] to-transparent pointer-events-none",
        }),
        u.jsx("style", {
          jsx: !0,
          children: `
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          } 
          100% {
            transform: translateX(-33.3333%);
          }
        }

        @keyframes scroll-ltr {
          0% {
            transform: translateX(-33.3333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 25s linear infinite;
        }

        .animate-scroll-ltr {
          animation: scroll-ltr 25s linear infinite;
        }

        .animate-scroll-rtl:hover,
        .animate-scroll-ltr:hover {
          animation-play-state: play;
        }
      `,
        }),
      ],
    });
var vh = Po(),
  W = (e) => To(e, vh),
  xh = Po();
W.write = (e) => To(e, xh);
var eu = Po();
W.onStart = (e) => To(e, eu);
var wh = Po();
W.onFrame = (e) => To(e, wh);
var bh = Po();
W.onFinish = (e) => To(e, bh);
var hi = [];
W.setTimeout = (e, t) => {
  const n = W.now() + t,
    r = () => {
      const s = hi.findIndex((o) => o.cancel == r);
      ~s && hi.splice(s, 1), (In -= ~s ? 1 : 0);
    },
    i = { time: n, handler: e, cancel: r };
  return hi.splice(Tw(n), 0, i), (In += 1), Pw(), i;
};
var Tw = (e) => ~(~hi.findIndex((t) => t.time > e) || ~hi.length);
W.cancel = (e) => {
  eu.delete(e), wh.delete(e), bh.delete(e), vh.delete(e), xh.delete(e);
};
W.sync = (e) => {
  (Rd = !0), W.batchedUpdates(e), (Rd = !1);
};
W.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...i) {
    (t = i), W.onStart(n);
  }
  return (
    (r.handler = e),
    (r.cancel = () => {
      eu.delete(n), (t = null);
    }),
    r
  );
};
var Sh = typeof window < "u" ? window.requestAnimationFrame : () => {};
W.use = (e) => (Sh = e);
W.now = typeof performance < "u" ? () => performance.now() : Date.now;
W.batchedUpdates = (e) => e();
W.catch = console.error;
W.frameLoop = "always";
W.advance = () => {
  W.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : kw();
};
var Dn = -1,
  In = 0,
  Rd = !1;
function To(e, t) {
  Rd ? (t.delete(e), e(0)) : (t.add(e), Pw());
}
function Pw() {
  Dn < 0 && ((Dn = 0), W.frameLoop !== "demand" && Sh(Cw));
}
function YE() {
  Dn = -1;
}
function Cw() {
  ~Dn && (Sh(Cw), W.batchedUpdates(kw));
}
function kw() {
  const e = Dn;
  Dn = W.now();
  const t = Tw(Dn);
  if ((t && (Ew(hi.splice(0, t), (n) => n.handler()), (In -= t)), !In)) {
    YE();
    return;
  }
  eu.flush(),
    vh.flush(e ? Math.min(64, Dn - e) : 16.667),
    wh.flush(),
    xh.flush(),
    bh.flush();
}
function Po() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (In += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (In -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (In -= t.size),
        Ew(t, (r) => r(n) && e.add(r)),
        (In += e.size),
        (t = e));
    },
  };
}
function Ew(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      W.catch(r);
    }
  });
}
var QE = Object.defineProperty,
  XE = (e, t) => {
    for (var n in t) QE(e, n, { get: t[n], enumerable: !0 });
  },
  Bt = {};
XE(Bt, {
  assign: () => ZE,
  colors: () => qn,
  createStringInterpolator: () => Th,
  skipAnimation: () => _w,
  to: () => Nw,
  willAdvance: () => Ph,
});
function Ld() {}
var JE = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  O = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function an(e, t) {
  if (O.arr(e)) {
    if (!O.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var Q = (e, t) => e.forEach(t);
function en(e, t, n) {
  if (O.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var dt = (e) => (O.und(e) ? [] : O.arr(e) ? e : [e]);
function bs(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), Q(n, t);
  }
}
var us = (e, ...t) => bs(e, (n) => n(...t)),
  jh = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  Th,
  Nw,
  qn = null,
  _w = !1,
  Ph = Ld,
  ZE = (e) => {
    e.to && (Nw = e.to),
      e.now && (W.now = e.now),
      e.colors !== void 0 && (qn = e.colors),
      e.skipAnimation != null && (_w = e.skipAnimation),
      e.createStringInterpolator && (Th = e.createStringInterpolator),
      e.requestAnimationFrame && W.use(e.requestAnimationFrame),
      e.batchedUpdates && (W.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (Ph = e.willAdvance),
      e.frameLoop && (W.frameLoop = e.frameLoop);
  },
  Ss = new Set(),
  jt = [],
  nc = [],
  ml = 0,
  tu = {
    get idle() {
      return !Ss.size && !jt.length;
    },
    start(e) {
      ml > e.priority ? (Ss.add(e), W.onStart(eN)) : (Ow(e), W(Md));
    },
    advance: Md,
    sort(e) {
      if (ml) W.onFrame(() => tu.sort(e));
      else {
        const t = jt.indexOf(e);
        ~t && (jt.splice(t, 1), Aw(e));
      }
    },
    clear() {
      (jt = []), Ss.clear();
    },
  };
function eN() {
  Ss.forEach(Ow), Ss.clear(), W(Md);
}
function Ow(e) {
  jt.includes(e) || Aw(e);
}
function Aw(e) {
  jt.splice(
    tN(jt, (t) => t.priority > e.priority),
    0,
    e
  );
}
function Md(e) {
  const t = nc;
  for (let n = 0; n < jt.length; n++) {
    const r = jt[n];
    (ml = r.priority), r.idle || (Ph(r), r.advance(e), r.idle || t.push(r));
  }
  return (ml = 0), (nc = jt), (nc.length = 0), (jt = t), jt.length > 0;
}
function tN(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var nN = (e, t, n) => Math.min(Math.max(n, e), t),
  rN = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  Dt = "[-+]?\\d*\\.?\\d+",
  gl = Dt + "%";
function nu(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var iN = new RegExp("rgb" + nu(Dt, Dt, Dt)),
  sN = new RegExp("rgba" + nu(Dt, Dt, Dt, Dt)),
  oN = new RegExp("hsl" + nu(Dt, gl, gl)),
  aN = new RegExp("hsla" + nu(Dt, gl, gl, Dt)),
  lN = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  uN = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  cN = /^#([0-9a-fA-F]{6})$/,
  dN = /^#([0-9a-fA-F]{8})$/;
function fN(e) {
  let t;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = cN.exec(e))
    ? parseInt(t[1] + "ff", 16) >>> 0
    : qn && qn[e] !== void 0
    ? qn[e]
    : (t = iN.exec(e))
    ? ((zr(t[1]) << 24) | (zr(t[2]) << 16) | (zr(t[3]) << 8) | 255) >>> 0
    : (t = sN.exec(e))
    ? ((zr(t[1]) << 24) | (zr(t[2]) << 16) | (zr(t[3]) << 8) | ng(t[4])) >>> 0
    : (t = lN.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
    : (t = dN.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = uN.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = oN.exec(e))
    ? (eg(tg(t[1]), Zo(t[2]), Zo(t[3])) | 255) >>> 0
    : (t = aN.exec(e))
    ? (eg(tg(t[1]), Zo(t[2]), Zo(t[3])) | ng(t[4])) >>> 0
    : null;
}
function rc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function eg(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    i = 2 * n - r,
    s = rc(i, r, e + 1 / 3),
    o = rc(i, r, e),
    a = rc(i, r, e - 1 / 3);
  return (
    (Math.round(s * 255) << 24) |
    (Math.round(o * 255) << 16) |
    (Math.round(a * 255) << 8)
  );
}
function zr(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function tg(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function ng(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Zo(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function rg(e) {
  let t = fN(e);
  if (t === null) return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    i = (t & 65280) >>> 8,
    s = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${s})`;
}
var Xs = (e, t, n) => {
  if (O.fun(e)) return e;
  if (O.arr(e)) return Xs({ range: e, output: t, extrapolate: n });
  if (O.str(e.output[0])) return Th(e);
  const r = e,
    i = r.output,
    s = r.range || [0, 1],
    o = r.extrapolateLeft || r.extrapolate || "extend",
    a = r.extrapolateRight || r.extrapolate || "extend",
    l = r.easing || ((c) => c);
  return (c) => {
    const d = pN(c, s);
    return hN(c, s[d], s[d + 1], i[d], i[d + 1], l, o, a, r.map);
  };
};
function hN(e, t, n, r, i, s, o, a, l) {
  let c = l ? l(e) : e;
  if (c < t) {
    if (o === "identity") return c;
    o === "clamp" && (c = t);
  }
  if (c > n) {
    if (a === "identity") return c;
    a === "clamp" && (c = n);
  }
  return r === i
    ? r
    : t === n
    ? e <= t
      ? r
      : i
    : (t === -1 / 0
        ? (c = -c)
        : n === 1 / 0
        ? (c = c - t)
        : (c = (c - t) / (n - t)),
      (c = s(c)),
      r === -1 / 0
        ? (c = -c)
        : i === 1 / 0
        ? (c = c + r)
        : (c = c * (i - r) + r),
      c);
}
function pN(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var mN =
    (e, t = "end") =>
    (n) => {
      n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
      const r = n * e,
        i = t === "end" ? Math.floor(r) : Math.ceil(r);
      return nN(0, 1, i / e);
    },
  yl = 1.70158,
  ea = yl * 1.525,
  ig = yl + 1,
  sg = (2 * Math.PI) / 3,
  og = (2 * Math.PI) / 4.5,
  ta = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  gN = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => ig * e * e * e - yl * e * e,
    easeOutBack: (e) => 1 + ig * Math.pow(e - 1, 3) + yl * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((ea + 1) * 2 * e - ea)) / 2
        : (Math.pow(2 * e - 2, 2) * ((ea + 1) * (e * 2 - 2) + ea) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * sg),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * sg) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * og)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * og)) / 2 +
          1,
    easeInBounce: (e) => 1 - ta(1 - e),
    easeOutBounce: ta,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - ta(1 - 2 * e)) / 2 : (1 + ta(2 * e - 1)) / 2,
    steps: mN,
  },
  Js = Symbol.for("FluidValue.get"),
  ki = Symbol.for("FluidValue.observers"),
  St = (e) => !!(e && e[Js]),
  Ze = (e) => (e && e[Js] ? e[Js]() : e),
  ag = (e) => e[ki] || null;
function yN(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Zs(e, t) {
  const n = e[ki];
  n &&
    n.forEach((r) => {
      yN(r, t);
    });
}
var Rw = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error("Unknown getter");
      vN(this, e);
    }
  },
  vN = (e, t) => Lw(e, Js, t);
function Ii(e, t) {
  if (e[Js]) {
    let n = e[ki];
    n || Lw(e, ki, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function eo(e, t) {
  const n = e[ki];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : (e[ki] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var Lw = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Sa = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  xN =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  lg = new RegExp(`(${Sa.source})(%|[a-z]+)`, "i"),
  wN = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  ru = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  Mw = (e) => {
    const [t, n] = bN(e);
    if (!t || jh()) return e;
    const r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    if (r) return r.trim();
    if (n && n.startsWith("--")) {
      const i = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(n);
      return i || e;
    } else {
      if (n && ru.test(n)) return Mw(n);
      if (n) return n;
    }
    return e;
  },
  bN = (e) => {
    const t = ru.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
  },
  ic,
  SN = (e, t, n, r, i) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
  Dw = (e) => {
    ic ||
      (ic = qn
        ? new RegExp(`(${Object.keys(qn).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    const t = e.output.map((s) =>
        Ze(s).replace(ru, Mw).replace(xN, rg).replace(ic, rg)
      ),
      n = t.map((s) => s.match(Sa).map(Number)),
      i = n[0]
        .map((s, o) =>
          n.map((a) => {
            if (!(o in a))
              throw Error('The arity of each "output" value must be equal');
            return a[o];
          })
        )
        .map((s) => Xs({ ...e, output: s }));
    return (s) => {
      var l;
      const o =
        !lg.test(t[0]) &&
        ((l = t.find((c) => lg.test(c))) == null ? void 0 : l.replace(Sa, ""));
      let a = 0;
      return t[0].replace(Sa, () => `${i[a++](s)}${o || ""}`).replace(wN, SN);
    };
  },
  Ch = "react-spring: ",
  Iw = (e) => {
    const t = e;
    let n = !1;
    if (typeof t != "function")
      throw new TypeError(`${Ch}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  jN = Iw(console.warn);
function TN() {
  jN(`${Ch}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var PN = Iw(console.warn);
function CN() {
  PN(
    `${Ch}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function iu(e) {
  return (
    O.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!jh() && ru.test(e)) || e in (qn || {}))
  );
}
var kh = jh() ? b.useEffect : b.useLayoutEffect,
  kN = () => {
    const e = b.useRef(!1);
    return (
      kh(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function Fw() {
  const e = b.useState()[1],
    t = kN();
  return () => {
    t.current && e(Math.random());
  };
}
var zw = (e) => b.useEffect(e, EN),
  EN = [];
function ug(e) {
  const t = b.useRef(void 0);
  return (
    b.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
var to = Symbol.for("Animated:node"),
  NN = (e) => !!e && e[to] === e,
  qt = (e) => e && e[to],
  Eh = (e, t) => JE(e, to, t),
  su = (e) => e && e[to] && e[to].getPayload(),
  Bw = class {
    constructor() {
      Eh(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  ou = class Vw extends Bw {
    constructor(t) {
      super(),
        (this._value = t),
        (this.done = !0),
        (this.durationProgress = 0),
        O.num(this._value) && (this.lastPosition = this._value);
    }
    static create(t) {
      return new Vw(t);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(t, n) {
      return (
        O.num(t) &&
          ((this.lastPosition = t),
          n &&
            ((t = Math.round(t / n) * n),
            this.done && (this.lastPosition = t))),
        this._value === t ? !1 : ((this._value = t), !0)
      );
    }
    reset() {
      const { done: t } = this;
      (this.done = !1),
        O.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          t && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  vl = class $w extends ou {
    constructor(t) {
      super(0),
        (this._string = null),
        (this._toString = Xs({ output: [t, t] }));
    }
    static create(t) {
      return new $w(t);
    }
    getValue() {
      const t = this._string;
      return t ?? (this._string = this._toString(this._value));
    }
    setValue(t) {
      if (O.str(t)) {
        if (t == this._string) return !1;
        (this._string = t), (this._value = 1);
      } else if (super.setValue(t)) this._string = null;
      else return !1;
      return !0;
    }
    reset(t) {
      t && (this._toString = Xs({ output: [this.getValue(), t] })),
        (this._value = 0),
        super.reset();
    }
  },
  xl = { dependencies: null },
  au = class extends Bw {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      const t = {};
      return (
        en(this.source, (n, r) => {
          NN(n)
            ? (t[r] = n.getValue(e))
            : St(n)
            ? (t[r] = Ze(n))
            : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && Q(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        const t = new Set();
        return en(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      xl.dependencies && St(e) && xl.dependencies.add(e);
      const t = su(e);
      t && Q(t, (n) => this.add(n));
    }
  },
  _N = class Uw extends au {
    constructor(t) {
      super(t);
    }
    static create(t) {
      return new Uw(t);
    }
    getValue() {
      return this.source.map((t) => t.getValue());
    }
    setValue(t) {
      const n = this.getPayload();
      return t.length == n.length
        ? n.map((r, i) => r.setValue(t[i])).some(Boolean)
        : (super.setValue(t.map(ON)), !0);
    }
  };
function ON(e) {
  return (iu(e) ? vl : ou).create(e);
}
function Dd(e) {
  const t = qt(e);
  return t ? t.constructor : O.arr(e) ? _N : iu(e) ? vl : ou;
}
var cg = (e, t) => {
    const n = !O.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return b.forwardRef((r, i) => {
      const s = b.useRef(null),
        o =
          n &&
          b.useCallback(
            (v) => {
              s.current = LN(i, v);
            },
            [i]
          ),
        [a, l] = RN(r, t),
        c = Fw(),
        d = () => {
          const v = s.current;
          if (n && !v) return;
          (v ? t.applyAnimatedValues(v, a.getValue(!0)) : !1) === !1 && c();
        },
        f = new AN(d, l),
        h = b.useRef(void 0);
      kh(
        () => (
          (h.current = f),
          Q(l, (v) => Ii(v, f)),
          () => {
            h.current &&
              (Q(h.current.deps, (v) => eo(v, h.current)),
              W.cancel(h.current.update));
          }
        )
      ),
        b.useEffect(d, []),
        zw(() => () => {
          const v = h.current;
          Q(v.deps, (x) => eo(x, v));
        });
      const y = t.getComponentProps(a.getValue());
      return b.createElement(e, { ...y, ref: o });
    });
  },
  AN = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == "change" && W.write(this.update);
    }
  };
function RN(e, t) {
  const n = new Set();
  return (
    (xl.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new au(e)),
    (xl.dependencies = null),
    [e, n]
  );
}
function LN(e, t) {
  return e && (O.fun(e) ? e(t) : (e.current = t)), t;
}
var dg = Symbol.for("AnimatedComponent"),
  MN = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (i) => new au(i),
      getComponentProps: r = (i) => i,
    } = {}
  ) => {
    const i = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      s = (o) => {
        const a = fg(o) || "Anonymous";
        return (
          O.str(o)
            ? (o = s[o] || (s[o] = cg(o, i)))
            : (o = o[dg] || (o[dg] = cg(o, i))),
          (o.displayName = `Animated(${a})`),
          o
        );
      };
    return (
      en(e, (o, a) => {
        O.arr(e) && (a = fg(o)), (s[a] = s(o));
      }),
      { animated: s }
    );
  },
  fg = (e) =>
    O.str(e)
      ? e
      : e && O.str(e.displayName)
      ? e.displayName
      : (O.fun(e) && e.name) || null;
function ar(e, ...t) {
  return O.fun(e) ? e(...t) : e;
}
var js = (e, t) =>
    e === !0 || !!(t && e && (O.fun(e) ? e(t) : dt(e).includes(t))),
  Hw = (e, t) => (O.obj(e) ? t && e[t] : e),
  Ww = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  DN = (e) => e,
  Nh = (e, t = DN) => {
    let n = IN;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    const r = {};
    for (const i of n) {
      const s = t(e[i], i);
      O.und(s) || (r[i] = s);
    }
    return r;
  },
  IN = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  FN = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function zN(e) {
  const t = {};
  let n = 0;
  if (
    (en(e, (r, i) => {
      FN[i] || ((t[i] = r), n++);
    }),
    n)
  )
    return t;
}
function qw(e) {
  const t = zN(e);
  if (t) {
    const n = { to: t };
    return en(e, (r, i) => i in t || (n[i] = r)), n;
  }
  return { ...e };
}
function no(e) {
  return (
    (e = Ze(e)),
    O.arr(e)
      ? e.map(no)
      : iu(e)
      ? Bt.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function BN(e) {
  for (const t in e) return !0;
  return !1;
}
function Id(e) {
  return O.fun(e) || (O.arr(e) && O.obj(e[0]));
}
function VN(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function $N(e, t) {
  var n;
  t &&
    e.ref !== t &&
    ((n = e.ref) == null || n.delete(e), t.add(e), (e.ref = t));
}
var _h = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  Fd = { ..._h.default, mass: 1, damping: 1, easing: gN.linear, clamp: !1 },
  UN = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, Fd);
    }
  };
function HN(e, t, n) {
  n && ((n = { ...n }), hg(n, t), (t = { ...n, ...t })),
    hg(e, t),
    Object.assign(e, t);
  for (const o in Fd) e[o] == null && (e[o] = Fd[o]);
  let { frequency: r, damping: i } = e;
  const { mass: s } = e;
  return (
    O.und(r) ||
      (r < 0.01 && (r = 0.01),
      i < 0 && (i = 0),
      (e.tension = Math.pow((2 * Math.PI) / r, 2) * s),
      (e.friction = (4 * Math.PI * i * s) / r)),
    e
  );
}
function hg(e, t) {
  if (!O.und(t.decay)) e.duration = void 0;
  else {
    const n = !O.und(t.tension) || !O.und(t.friction);
    (n || !O.und(t.frequency) || !O.und(t.damping) || !O.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var pg = [],
  WN = class {
    constructor() {
      (this.changed = !1),
        (this.values = pg),
        (this.toValues = null),
        (this.fromValues = pg),
        (this.config = new UN()),
        (this.immediate = !1);
    }
  };
function Gw(e, { key: t, props: n, defaultProps: r, state: i, actions: s }) {
  return new Promise((o, a) => {
    let l,
      c,
      d = js(n.cancel ?? (r == null ? void 0 : r.cancel), t);
    if (d) y();
    else {
      O.und(n.pause) || (i.paused = js(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = i.paused || js(v, t)),
        (l = ar(n.delay || 0, t)),
        v ? (i.resumeQueue.add(h), s.pause()) : (s.resume(), h());
    }
    function f() {
      i.resumeQueue.add(h),
        i.timeouts.delete(c),
        c.cancel(),
        (l = c.time - W.now());
    }
    function h() {
      l > 0 && !Bt.skipAnimation
        ? ((i.delayed = !0),
          (c = W.setTimeout(y, l)),
          i.pauseQueue.add(f),
          i.timeouts.add(c))
        : y();
    }
    function y() {
      i.delayed && (i.delayed = !1),
        i.pauseQueue.delete(f),
        i.timeouts.delete(c),
        e <= (i.cancelId || 0) && (d = !0);
      try {
        s.start({ ...n, callId: e, cancel: d }, o);
      } catch (v) {
        a(v);
      }
    }
  });
}
var Oh = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((n) => n.cancelled)
      ? pi(e.get())
      : t.every((n) => n.noop)
      ? Kw(e.get())
      : Lt(
          e.get(),
          t.every((n) => n.finished)
        ),
  Kw = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  Lt = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  pi = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Yw(e, t, n, r) {
  const { callId: i, parentId: s, onRest: o } = t,
    { asyncTo: a, promise: l } = n;
  return !s && e === a && !t.reset
    ? l
    : (n.promise = (async () => {
        (n.asyncId = i), (n.asyncTo = e);
        const c = Nh(t, (w, p) => (p === "onRest" ? void 0 : w));
        let d, f;
        const h = new Promise((w, p) => ((d = w), (f = p))),
          y = (w) => {
            const p =
              (i <= (n.cancelId || 0) && pi(r)) ||
              (i !== n.asyncId && Lt(r, !1));
            if (p) throw ((w.result = p), f(w), w);
          },
          v = (w, p) => {
            const m = new mg(),
              g = new gg();
            return (async () => {
              if (Bt.skipAnimation)
                throw (ro(n), (g.result = Lt(r, !1)), f(g), g);
              y(m);
              const S = O.obj(w) ? { ...w } : { ...p, to: w };
              (S.parentId = i),
                en(c, (T, k) => {
                  O.und(S[k]) && (S[k] = T);
                });
              const j = await r.start(S);
              return (
                y(m),
                n.paused &&
                  (await new Promise((T) => {
                    n.resumeQueue.add(T);
                  })),
                j
              );
            })();
          };
        let x;
        if (Bt.skipAnimation) return ro(n), Lt(r, !1);
        try {
          let w;
          O.arr(e)
            ? (w = (async (p) => {
                for (const m of p) await v(m);
              })(e))
            : (w = Promise.resolve(e(v, r.stop.bind(r)))),
            await Promise.all([w.then(d), h]),
            (x = Lt(r.get(), !0, !1));
        } catch (w) {
          if (w instanceof mg) x = w.result;
          else if (w instanceof gg) x = w.result;
          else throw w;
        } finally {
          i == n.asyncId &&
            ((n.asyncId = s),
            (n.asyncTo = s ? a : void 0),
            (n.promise = s ? l : void 0));
        }
        return (
          O.fun(o) &&
            W.batchedUpdates(() => {
              o(x, r, r.item);
            }),
          x
        );
      })());
}
function ro(e, t) {
  bs(e.timeouts, (n) => n.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var mg = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
      );
    }
  },
  gg = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
    }
  },
  zd = (e) => e instanceof Ah,
  qN = 1,
  Ah = class extends Rw {
    constructor() {
      super(...arguments), (this.id = qN++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      const e = qt(this);
      return e && e.getValue();
    }
    to(...e) {
      return Bt.to(this, e);
    }
    interpolate(...e) {
      return TN(), Bt.to(this, e);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e) {
      e == 1 && this._attach();
    }
    observerRemoved(e) {
      e == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(e, t = !1) {
      Zs(this, { type: "change", parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || tu.sort(this),
        Zs(this, { type: "priority", parent: this, priority: e });
    }
  },
  kr = Symbol.for("SpringPhase"),
  Qw = 1,
  Bd = 2,
  Vd = 4,
  sc = (e) => (e[kr] & Qw) > 0,
  Pn = (e) => (e[kr] & Bd) > 0,
  es = (e) => (e[kr] & Vd) > 0,
  yg = (e, t) => (t ? (e[kr] |= Bd | Qw) : (e[kr] &= ~Bd)),
  vg = (e, t) => (t ? (e[kr] |= Vd) : (e[kr] &= ~Vd)),
  GN = class extends Ah {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new WN()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !O.und(e) || !O.und(t))
      ) {
        const n = O.obj(e) ? { ...e } : { ...t, from: e };
        O.und(n.default) && (n.default = !0), this.start(n);
      }
    }
    get idle() {
      return !(Pn(this) || this._state.asyncTo) || es(this);
    }
    get goal() {
      return Ze(this.animation.to);
    }
    get velocity() {
      const e = qt(this);
      return e instanceof ou
        ? e.lastVelocity || 0
        : e.getPayload().map((t) => t.lastVelocity || 0);
    }
    get hasAnimated() {
      return sc(this);
    }
    get isAnimating() {
      return Pn(this);
    }
    get isPaused() {
      return es(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e) {
      let t = !0,
        n = !1;
      const r = this.animation;
      let { toValues: i } = r;
      const { config: s } = r,
        o = su(r.to);
      !o && St(r.to) && (i = dt(Ze(r.to))),
        r.values.forEach((c, d) => {
          if (c.done) return;
          const f = c.constructor == vl ? 1 : o ? o[d].lastPosition : i[d];
          let h = r.immediate,
            y = f;
          if (!h) {
            if (((y = c.lastPosition), s.tension <= 0)) {
              c.done = !0;
              return;
            }
            let v = (c.elapsedTime += e);
            const x = r.fromValues[d],
              w =
                c.v0 != null
                  ? c.v0
                  : (c.v0 = O.arr(s.velocity) ? s.velocity[d] : s.velocity);
            let p;
            const m =
              s.precision ||
              (x == f ? 0.005 : Math.min(1, Math.abs(f - x) * 0.001));
            if (O.und(s.duration))
              if (s.decay) {
                const g = s.decay === !0 ? 0.998 : s.decay,
                  S = Math.exp(-(1 - g) * v);
                (y = x + (w / (1 - g)) * (1 - S)),
                  (h = Math.abs(c.lastPosition - y) <= m),
                  (p = w * S);
              } else {
                p = c.lastVelocity == null ? w : c.lastVelocity;
                const g = s.restVelocity || m / 10,
                  S = s.clamp ? 0 : s.bounce,
                  j = !O.und(S),
                  T = x == f ? c.v0 > 0 : x < f;
                let k,
                  N = !1;
                const P = 1,
                  E = Math.ceil(e / P);
                for (
                  let L = 0;
                  L < E &&
                  ((k = Math.abs(p) > g),
                  !(!k && ((h = Math.abs(f - y) <= m), h)));
                  ++L
                ) {
                  j &&
                    ((N = y == f || y > f == T), N && ((p = -p * S), (y = f)));
                  const D = -s.tension * 1e-6 * (y - f),
                    I = -s.friction * 0.001 * p,
                    B = (D + I) / s.mass;
                  (p = p + B * P), (y = y + p * P);
                }
              }
            else {
              let g = 1;
              s.duration > 0 &&
                (this._memoizedDuration !== s.duration &&
                  ((this._memoizedDuration = s.duration),
                  c.durationProgress > 0 &&
                    ((c.elapsedTime = s.duration * c.durationProgress),
                    (v = c.elapsedTime += e))),
                (g = (s.progress || 0) + v / this._memoizedDuration),
                (g = g > 1 ? 1 : g < 0 ? 0 : g),
                (c.durationProgress = g)),
                (y = x + s.easing(g) * (f - x)),
                (p = (y - c.lastPosition) / e),
                (h = g == 1);
            }
            (c.lastVelocity = p),
              Number.isNaN(y) &&
                (console.warn("Got NaN while animating:", this), (h = !0));
          }
          o && !o[d].done && (h = !1),
            h ? (c.done = !0) : (t = !1),
            c.setValue(y, s.round) && (n = !0);
        });
      const a = qt(this),
        l = a.getValue();
      if (t) {
        const c = Ze(r.to);
        (l !== c || n) && !s.decay
          ? (a.setValue(c), this._onChange(c))
          : n && s.decay && this._onChange(l),
          this._stop();
      } else n && this._onChange(l);
    }
    set(e) {
      return (
        W.batchedUpdates(() => {
          this._stop(), this._focus(e), this._set(e);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (Pn(this)) {
        const { to: e, config: t } = this.animation;
        W.batchedUpdates(() => {
          this._onStart(), t.decay || this._set(e, !1), this._stop();
        });
      }
      return this;
    }
    update(e) {
      return (this.queue || (this.queue = [])).push(e), this;
    }
    start(e, t) {
      let n;
      return (
        O.und(e)
          ? ((n = this.queue || []), (this.queue = []))
          : (n = [O.obj(e) ? e : { ...t, to: e }]),
        Promise.all(n.map((r) => this._update(r))).then((r) => Oh(this, r))
      );
    }
    stop(e) {
      const { to: t } = this.animation;
      return (
        this._focus(this.get()),
        ro(this._state, e && this._lastCallId),
        W.batchedUpdates(() => this._stop(t, e)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(e) {
      e.type == "change"
        ? this._start()
        : e.type == "priority" && (this.priority = e.priority + 1);
    }
    _prepareNode(e) {
      const t = this.key || "";
      let { to: n, from: r } = e;
      (n = O.obj(n) ? n[t] : n),
        (n == null || Id(n)) && (n = void 0),
        (r = O.obj(r) ? r[t] : r),
        r == null && (r = void 0);
      const i = { to: n, from: r };
      return (
        sc(this) ||
          (e.reverse && ([n, r] = [r, n]),
          (r = Ze(r)),
          O.und(r) ? qt(this) || this._set(n) : this._set(r)),
        i
      );
    }
    _update({ ...e }, t) {
      const { key: n, defaultProps: r } = this;
      e.default &&
        Object.assign(
          r,
          Nh(e, (o, a) => (/^on/.test(a) ? Hw(o, n) : o))
        ),
        wg(this, e, "onProps"),
        ns(this, "onProps", e, this);
      const i = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
        );
      const s = this._state;
      return Gw(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: r,
        state: s,
        actions: {
          pause: () => {
            es(this) ||
              (vg(this, !0),
              us(s.pauseQueue),
              ns(this, "onPause", Lt(this, ts(this, this.animation.to)), this));
          },
          resume: () => {
            es(this) &&
              (vg(this, !1),
              Pn(this) && this._resume(),
              us(s.resumeQueue),
              ns(
                this,
                "onResume",
                Lt(this, ts(this, this.animation.to)),
                this
              ));
          },
          start: this._merge.bind(this, i),
        },
      }).then((o) => {
        if (e.loop && o.finished && !(t && o.noop)) {
          const a = Xw(e);
          if (a) return this._update(a, !0);
        }
        return o;
      });
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(pi(this));
      const r = !O.und(e.to),
        i = !O.und(e.from);
      if (r || i)
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(pi(this));
      const { key: s, defaultProps: o, animation: a } = this,
        { to: l, from: c } = a;
      let { to: d = l, from: f = c } = e;
      i && !r && (!t.default || O.und(d)) && (d = f),
        t.reverse && ([d, f] = [f, d]);
      const h = !an(f, c);
      h && (a.from = f), (f = Ze(f));
      const y = !an(d, l);
      y && this._focus(d);
      const v = Id(t.to),
        { config: x } = a,
        { decay: w, velocity: p } = x;
      (r || i) && (x.velocity = 0),
        t.config &&
          !v &&
          HN(
            x,
            ar(t.config, s),
            t.config !== o.config ? ar(o.config, s) : void 0
          );
      let m = qt(this);
      if (!m || O.und(d)) return n(Lt(this, !0));
      const g = O.und(t.reset) ? i && !t.default : !O.und(f) && js(t.reset, s),
        S = g ? f : this.get(),
        j = no(d),
        T = O.num(j) || O.arr(j) || iu(j),
        k = !v && (!T || js(o.immediate || t.immediate, s));
      if (y) {
        const L = Dd(d);
        if (L !== m.constructor)
          if (k) m = this._set(j);
          else
            throw Error(
              `Cannot animate between ${m.constructor.name} and ${L.name}, as the "to" prop suggests`
            );
      }
      const N = m.constructor;
      let P = St(d),
        E = !1;
      if (!P) {
        const L = g || (!sc(this) && h);
        (y || L) && ((E = an(no(S), j)), (P = !E)),
          ((!an(a.immediate, k) && !k) ||
            !an(x.decay, w) ||
            !an(x.velocity, p)) &&
            (P = !0);
      }
      if (
        (E && Pn(this) && (a.changed && !g ? (P = !0) : P || this._stop(l)),
        !v &&
          ((P || St(l)) &&
            ((a.values = m.getPayload()),
            (a.toValues = St(d) ? null : N == vl ? [1] : dt(j))),
          a.immediate != k && ((a.immediate = k), !k && !g && this._set(l)),
          P))
      ) {
        const { onRest: L } = a;
        Q(YN, (I) => wg(this, t, I));
        const D = Lt(this, ts(this, l));
        us(this._pendingCalls, D),
          this._pendingCalls.add(n),
          a.changed &&
            W.batchedUpdates(() => {
              var I;
              (a.changed = !g),
                L == null || L(D, this),
                g
                  ? ar(o.onRest, D)
                  : (I = a.onStart) == null || I.call(a, D, this);
            });
      }
      g && this._set(S),
        v
          ? n(Yw(t.to, t, this._state, this))
          : P
          ? this._start()
          : Pn(this) && !y
          ? this._pendingCalls.add(n)
          : n(Kw(S));
    }
    _focus(e) {
      const t = this.animation;
      e !== t.to &&
        (ag(this) && this._detach(), (t.to = e), ag(this) && this._attach());
    }
    _attach() {
      let e = 0;
      const { to: t } = this.animation;
      St(t) && (Ii(t, this), zd(t) && (e = t.priority + 1)),
        (this.priority = e);
    }
    _detach() {
      const { to: e } = this.animation;
      St(e) && eo(e, this);
    }
    _set(e, t = !0) {
      const n = Ze(e);
      if (!O.und(n)) {
        const r = qt(this);
        if (!r || !an(n, r.getValue())) {
          const i = Dd(n);
          !r || r.constructor != i ? Eh(this, i.create(n)) : r.setValue(n),
            r &&
              W.batchedUpdates(() => {
                this._onChange(n, t);
              });
        }
      }
      return qt(this);
    }
    _onStart() {
      const e = this.animation;
      e.changed ||
        ((e.changed = !0), ns(this, "onStart", Lt(this, ts(this, e.to)), this));
    }
    _onChange(e, t) {
      t || (this._onStart(), ar(this.animation.onChange, e, this)),
        ar(this.defaultProps.onChange, e, this),
        super._onChange(e, t);
    }
    _start() {
      const e = this.animation;
      qt(this).reset(Ze(e.to)),
        e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)),
        Pn(this) || (yg(this, !0), es(this) || this._resume());
    }
    _resume() {
      Bt.skipAnimation ? this.finish() : tu.start(this);
    }
    _stop(e, t) {
      if (Pn(this)) {
        yg(this, !1);
        const n = this.animation;
        Q(n.values, (i) => {
          i.done = !0;
        }),
          n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
          Zs(this, { type: "idle", parent: this });
        const r = t ? pi(this.get()) : Lt(this.get(), ts(this, e ?? n.to));
        us(this._pendingCalls, r),
          n.changed && ((n.changed = !1), ns(this, "onRest", r, this));
      }
    }
  };
function ts(e, t) {
  const n = no(t),
    r = no(e.get());
  return an(r, n);
}
function Xw(e, t = e.loop, n = e.to) {
  const r = ar(t);
  if (r) {
    const i = r !== !0 && qw(r),
      s = (i || e).reverse,
      o = !i || i.reset;
    return io({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !s || Id(n) ? n : void 0,
      from: o ? e.from : void 0,
      reset: o,
      ...i,
    });
  }
}
function io(e) {
  const { to: t, from: n } = (e = qw(e)),
    r = new Set();
  return (
    O.obj(t) && xg(t, r),
    O.obj(n) && xg(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function KN(e) {
  const t = io(e);
  return O.und(t.default) && (t.default = Nh(t)), t;
}
function xg(e, t) {
  en(e, (n, r) => n != null && t.add(r));
}
var YN = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function wg(e, t, n) {
  e.animation[n] = t[n] !== Ww(t, n) ? Hw(t[n], e.key) : void 0;
}
function ns(e, t, ...n) {
  var r, i, s, o;
  (i = (r = e.animation)[t]) == null || i.call(r, ...n),
    (o = (s = e.defaultProps)[t]) == null || o.call(s, ...n);
}
var QN = ["onStart", "onChange", "onRest"],
  XN = 1,
  JN = class {
    constructor(e, t) {
      (this.id = XN++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      const e = {};
      return this.each((t, n) => (e[n] = t.get())), e;
    }
    set(e) {
      for (const t in e) {
        const n = e[t];
        O.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(io(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = dt(e).map(io)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (n1(this, t), $d(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        const n = this.springs;
        Q(dt(t), (r) => n[r].stop(!!e));
      } else ro(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
      return this;
    }
    pause(e) {
      if (O.und(e)) this.start({ pause: !0 });
      else {
        const t = this.springs;
        Q(dt(e), (n) => t[n].pause());
      }
      return this;
    }
    resume(e) {
      if (O.und(e)) this.start({ pause: !1 });
      else {
        const t = this.springs;
        Q(dt(e), (n) => t[n].resume());
      }
      return this;
    }
    each(e) {
      en(this.springs, e);
    }
    _onFrame() {
      const { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        i = this._changed.size > 0;
      ((r && !this._started) || (i && !this._started)) &&
        ((this._started = !0),
        bs(e, ([a, l]) => {
          (l.value = this.get()), a(l, this, this._item);
        }));
      const s = !r && this._started,
        o = i || (s && n.size) ? this.get() : null;
      i &&
        t.size &&
        bs(t, ([a, l]) => {
          (l.value = o), a(l, this, this._item);
        }),
        s &&
          ((this._started = !1),
          bs(n, ([a, l]) => {
            (l.value = o), a(l, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == "change")
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      W.onFrame(this._onFrame);
    }
  };
function $d(e, t) {
  return Promise.all(t.map((n) => Jw(e, n))).then((n) => Oh(e, n));
}
async function Jw(e, t, n) {
  const { keys: r, to: i, from: s, loop: o, onRest: a, onResolve: l } = t,
    c = O.obj(t.default) && t.default;
  o && (t.loop = !1), i === !1 && (t.to = null), s === !1 && (t.from = null);
  const d = O.arr(i) || O.fun(i) ? i : void 0;
  d
    ? ((t.to = void 0), (t.onRest = void 0), c && (c.onRest = void 0))
    : Q(QN, (x) => {
        const w = t[x];
        if (O.fun(w)) {
          const p = e._events[x];
          (t[x] = ({ finished: m, cancelled: g }) => {
            const S = p.get(w);
            S
              ? (m || (S.finished = !1), g && (S.cancelled = !0))
              : p.set(w, {
                  value: null,
                  finished: m || !1,
                  cancelled: g || !1,
                });
          }),
            c && (c[x] = t[x]);
        }
      });
  const f = e._state;
  t.pause === !f.paused
    ? ((f.paused = t.pause), us(t.pause ? f.pauseQueue : f.resumeQueue))
    : f.paused && (t.pause = !0);
  const h = (r || Object.keys(e.springs)).map((x) => e.springs[x].start(t)),
    y = t.cancel === !0 || Ww(t, "cancel") === !0;
  (d || (y && f.asyncId)) &&
    h.push(
      Gw(++e._lastAsyncId, {
        props: t,
        state: f,
        actions: {
          pause: Ld,
          resume: Ld,
          start(x, w) {
            y
              ? (ro(f, e._lastAsyncId), w(pi(e)))
              : ((x.onRest = a), w(Yw(d, x, f, e)));
          },
        },
      })
    ),
    f.paused &&
      (await new Promise((x) => {
        f.resumeQueue.add(x);
      }));
  const v = Oh(e, await Promise.all(h));
  if (o && v.finished && !(n && v.noop)) {
    const x = Xw(t, o, i);
    if (x) return n1(e, [x]), Jw(e, x, !0);
  }
  return l && W.batchedUpdates(() => l(v, e, e.item)), v;
}
function bg(e, t) {
  const n = { ...e.springs };
  return (
    t &&
      Q(dt(t), (r) => {
        O.und(r.keys) && (r = io(r)),
          O.obj(r.to) || (r = { ...r, to: void 0 }),
          t1(n, r, (i) => e1(i));
      }),
    Zw(e, n),
    n
  );
}
function Zw(e, t) {
  en(t, (n, r) => {
    e.springs[r] || ((e.springs[r] = n), Ii(n, e));
  });
}
function e1(e, t) {
  const n = new GN();
  return (n.key = e), t && Ii(n, t), n;
}
function t1(e, t, n) {
  t.keys &&
    Q(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function n1(e, t) {
  Q(t, (n) => {
    t1(e.springs, n, (r) => e1(r, e));
  });
}
var ZN = b.createContext({ pause: !1, immediate: !1 }),
  e3 = () => {
    const e = [],
      t = function (r) {
        CN();
        const i = [];
        return (
          Q(e, (s, o) => {
            if (O.und(r)) i.push(s.start());
            else {
              const a = n(r, s, o);
              a && i.push(s.start(a));
            }
          }),
          i
        );
      };
    (t.current = e),
      (t.add = function (r) {
        e.includes(r) || e.push(r);
      }),
      (t.delete = function (r) {
        const i = e.indexOf(r);
        ~i && e.splice(i, 1);
      }),
      (t.pause = function () {
        return Q(e, (r) => r.pause(...arguments)), this;
      }),
      (t.resume = function () {
        return Q(e, (r) => r.resume(...arguments)), this;
      }),
      (t.set = function (r) {
        Q(e, (i, s) => {
          const o = O.fun(r) ? r(s, i) : r;
          o && i.set(o);
        });
      }),
      (t.start = function (r) {
        const i = [];
        return (
          Q(e, (s, o) => {
            if (O.und(r)) i.push(s.start());
            else {
              const a = this._getProps(r, s, o);
              a && i.push(s.start(a));
            }
          }),
          i
        );
      }),
      (t.stop = function () {
        return Q(e, (r) => r.stop(...arguments)), this;
      }),
      (t.update = function (r) {
        return Q(e, (i, s) => i.update(this._getProps(r, i, s))), this;
      });
    const n = function (r, i, s) {
      return O.fun(r) ? r(s, i) : r;
    };
    return (t._getProps = n), t;
  };
function r1(e, t, n) {
  const r = O.fun(t) && t;
  r && !n && (n = []);
  const i = b.useMemo(() => (r || arguments.length == 3 ? e3() : void 0), []),
    s = b.useRef(0),
    o = Fw(),
    a = b.useMemo(
      () => ({
        ctrls: [],
        queue: [],
        flush(p, m) {
          const g = bg(p, m);
          return s.current > 0 &&
            !a.queue.length &&
            !Object.keys(g).some((j) => !p.springs[j])
            ? $d(p, m)
            : new Promise((j) => {
                Zw(p, g),
                  a.queue.push(() => {
                    j($d(p, m));
                  }),
                  o();
              });
        },
      }),
      []
    ),
    l = b.useRef([...a.ctrls]),
    c = b.useRef([]),
    d = ug(e) || 0;
  b.useMemo(() => {
    Q(l.current.slice(e, d), (p) => {
      VN(p, i), p.stop(!0);
    }),
      (l.current.length = e),
      f(d, e);
  }, [e]),
    b.useMemo(() => {
      f(0, Math.min(d, e));
    }, n);
  function f(p, m) {
    for (let g = p; g < m; g++) {
      const S = l.current[g] || (l.current[g] = new JN(null, a.flush)),
        j = r ? r(g, S) : t[g];
      j && (c.current[g] = KN(j));
    }
  }
  const h = l.current.map((p, m) => bg(p, c.current[m])),
    y = b.useContext(ZN),
    v = ug(y),
    x = y !== v && BN(y);
  kh(() => {
    s.current++, (a.ctrls = l.current);
    const { queue: p } = a;
    p.length && ((a.queue = []), Q(p, (m) => m())),
      Q(l.current, (m, g) => {
        i == null || i.add(m), x && m.start({ default: y });
        const S = c.current[g];
        S && ($N(m, S.ref), m.ref ? m.queue.push(S) : m.start(S));
      });
  }),
    zw(() => () => {
      Q(a.ctrls, (p) => p.stop(!0));
    });
  const w = h.map((p) => ({ ...p }));
  return i ? [w, i] : w;
}
var t3 = class extends Ah {
  constructor(e, t) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = Xs(...t));
    const n = this._get(),
      r = Dd(n);
    Eh(this, r.create(n));
  }
  advance(e) {
    const t = this._get(),
      n = this.get();
    an(t, n) || (qt(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && Sg(this._active) && oc(this);
  }
  _get() {
    const e = O.arr(this.source) ? this.source.map(Ze) : dt(Ze(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !Sg(this._active) &&
      ((this.idle = !1),
      Q(su(this), (e) => {
        e.done = !1;
      }),
      Bt.skipAnimation
        ? (W.batchedUpdates(() => this.advance()), oc(this))
        : tu.start(this));
  }
  _attach() {
    let e = 1;
    Q(dt(this.source), (t) => {
      St(t) && Ii(t, this),
        zd(t) &&
          (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    Q(dt(this.source), (e) => {
      St(e) && eo(e, this);
    }),
      this._active.clear(),
      oc(this);
  }
  eventObserved(e) {
    e.type == "change"
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == "idle"
      ? this._active.delete(e.parent)
      : e.type == "priority" &&
        (this.priority = dt(this.source).reduce(
          (t, n) => Math.max(t, (zd(n) ? n.priority : 0) + 1),
          0
        ));
  }
};
function n3(e) {
  return e.idle !== !1;
}
function Sg(e) {
  return !e.size || Array.from(e).every(n3);
}
function oc(e) {
  e.idle ||
    ((e.idle = !0),
    Q(su(e), (t) => {
      t.done = !0;
    }),
    Zs(e, { type: "idle", parent: e }));
}
Bt.assign({ createStringInterpolator: Dw, to: (e, t) => new t3(e, t) });
var i1 = /^--/;
function r3(e, t) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : typeof t == "number" &&
      t !== 0 &&
      !i1.test(e) &&
      !(Ts.hasOwnProperty(e) && Ts[e])
    ? t + "px"
    : ("" + t).trim();
}
var jg = {};
function i3(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const n =
      e.nodeName === "filter" ||
      (e.parentNode && e.parentNode.nodeName === "filter"),
    {
      className: r,
      style: i,
      children: s,
      scrollTop: o,
      scrollLeft: a,
      viewBox: l,
      ...c
    } = t,
    d = Object.values(c),
    f = Object.keys(c).map((h) =>
      n || e.hasAttribute(h)
        ? h
        : jg[h] || (jg[h] = h.replace(/([A-Z])/g, (y) => "-" + y.toLowerCase()))
    );
  s !== void 0 && (e.textContent = s);
  for (const h in i)
    if (i.hasOwnProperty(h)) {
      const y = r3(h, i[h]);
      i1.test(h) ? e.style.setProperty(h, y) : (e.style[h] = y);
    }
  f.forEach((h, y) => {
    e.setAttribute(h, d[y]);
  }),
    r !== void 0 && (e.className = r),
    o !== void 0 && (e.scrollTop = o),
    a !== void 0 && (e.scrollLeft = a),
    l !== void 0 && e.setAttribute("viewBox", l);
}
var Ts = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  s3 = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  o3 = ["Webkit", "Ms", "Moz", "O"];
Ts = Object.keys(Ts).reduce(
  (e, t) => (o3.forEach((n) => (e[s3(n, t)] = e[t])), e),
  Ts
);
var a3 = /^(matrix|translate|scale|rotate|skew)/,
  l3 = /^(translate)/,
  u3 = /^(rotate|skew)/,
  ac = (e, t) => (O.num(e) && e !== 0 ? e + t : e),
  ja = (e, t) =>
    O.arr(e)
      ? e.every((n) => ja(n, t))
      : O.num(e)
      ? e === t
      : parseFloat(e) === t,
  c3 = class extends au {
    constructor({ x: e, y: t, z: n, ...r }) {
      const i = [],
        s = [];
      (e || t || n) &&
        (i.push([e || 0, t || 0, n || 0]),
        s.push((o) => [
          `translate3d(${o.map((a) => ac(a, "px")).join(",")})`,
          ja(o, 0),
        ])),
        en(r, (o, a) => {
          if (a === "transform")
            i.push([o || ""]), s.push((l) => [l, l === ""]);
          else if (a3.test(a)) {
            if ((delete r[a], O.und(o))) return;
            const l = l3.test(a) ? "px" : u3.test(a) ? "deg" : "";
            i.push(dt(o)),
              s.push(
                a === "rotate3d"
                  ? ([c, d, f, h]) => [
                      `rotate3d(${c},${d},${f},${ac(h, l)})`,
                      ja(h, 0),
                    ]
                  : (c) => [
                      `${a}(${c.map((d) => ac(d, l)).join(",")})`,
                      ja(c, a.startsWith("scale") ? 1 : 0),
                    ]
              );
          }
        }),
        i.length && (r.transform = new d3(i, s)),
        super(r);
    }
  },
  d3 = class extends Rw {
    constructor(e, t) {
      super(), (this.inputs = e), (this.transforms = t), (this._value = null);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let e = "",
        t = !0;
      return (
        Q(this.inputs, (n, r) => {
          const i = Ze(n[0]),
            [s, o] = this.transforms[r](O.arr(i) ? i : n.map(Ze));
          (e += " " + s), (t = t && o);
        }),
        t ? "none" : e
      );
    }
    observerAdded(e) {
      e == 1 && Q(this.inputs, (t) => Q(t, (n) => St(n) && Ii(n, this)));
    }
    observerRemoved(e) {
      e == 0 && Q(this.inputs, (t) => Q(t, (n) => St(n) && eo(n, this)));
    }
    eventObserved(e) {
      e.type == "change" && (this._value = null), Zs(this, e);
    }
  },
  f3 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
Bt.assign({
  batchedUpdates: dx.unstable_batchedUpdates,
  createStringInterpolator: Dw,
  colors: rN,
});
var h3 = MN(f3, {
    applyAnimatedValues: i3,
    createAnimatedStyle: (e) => new c3(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }),
  s1 = h3.animated;
const Xe = [
    {
      src: "https://res.cloudinary.com/df1awd7vz/image/upload/v1748593223/card1_ovvm2h.svg",
      title: "PulseGen - Our Native LLM",
      desc: "A smart native LLM that watches roads and contextually understands to give helpful insights for your drive.",
      link: "https://docs.pulseainetwork.org",
    },
    {
      src: "https://res.cloudinary.com/df1awd7vz/image/upload/v1748593223/card2_wl6ict.svg",
      title: "PulseScout",
      desc: "User-friendly platform for real-time metadata collection and rewards for contributors.",
      link: "https://docs.pulseainetwork.org",
    },
    {
      src: "https://res.cloudinary.com/df1awd7vz/image/upload/v1748593223/card3_tem4ye.svg",
      title: "PulseNet - In-House Object Detection Architecture",
      desc: "World-class accuracy with just under 1 billion parameters, making it the leanest, most efficient system on the planet.",
      link: "https://docs.pulseainetwork.org",
    },
    {
      src: "https://res.cloudinary.com/df1awd7vz/image/upload/v1748593222/card10_irvrmh.svg",
      title: "P-AXON - AI-Powered DePin for Smarter Mobility",
      desc: "Decentralised physical infrastructure networks, optimised with real-time AI insights.",
      link: "https://docs.pulseainetwork.org",
    },
  ],
  Tg = (e, t, n) => {
    const r = Math.floor(n / 2);
    let i = (e - t + n) % n;
    return i > r && (i -= n), i;
  },
  p3 = ({ isVisible: e }) => {
    const [t, n] = b.useState(0),
      [r, i] = b.useState(!1),
      s = b.useRef(null);
    b.useEffect(() => {
      if (e && !r) {
        const c = setTimeout(() => {
          i(!0);
        }, 500);
        return () => clearTimeout(c);
      }
    }, [e, r]),
      b.useEffect(() => {
        if (!r) return;
        const c = window.innerWidth <= 768,
          f = setInterval(() => {
            n((h) => (h + 1) % Xe.length);
          }, 7e3);
        return () => clearInterval(f);
      }, [r]);
    const o = r1(
        Xe.length,
        Xe.map((c, d) => {
          const f = Tg(d, t, Xe.length),
            h = f === -1 ? -400 : f === 1 ? 400 : 0,
            y = r ? (f === 2 || f === -2 ? 50 : 0) : 200,
            v = f === 0 ? 1 : Math.abs(f) === 1 ? 0.8 : 0.7,
            x = r ? (Math.abs(f) > 2 ? 0 : 1) : 0,
            w = f === 0 ? 3 : Math.abs(f) === 1 ? 2 : 1;
          return {
            transform: `translate(${h}px, ${y}px) scale(${v})`,
            opacity: x,
            config: _h.gentle,
            zIndex: w,
            delay: r ? 0 : d * 200,
          };
        })
      ),
      a = () => {
        n((c) => (c - 1 + Xe.length) % Xe.length);
      },
      l = () => {
        n((c) => (c + 1) % Xe.length);
      };
    return u.jsxs("section", {
      ref: s,
      id: "solutions",
      className:
        "relative w-full min-h-screen text-white flex flex-col items-center justify-start space-y-10 overflow-hidden px-4 md:px-10",
      children: [
        u.jsx("img", {
          src: "/Left Hero.svg",
          alt: "",
          className: "absolute blur-lg left-0 top-1/2 -translate-y-1/2 -z-10",
        }),
        u.jsx("img", {
          src: "/Right Hero.svg",
          alt: "",
          className: "absolute right-0 blur-lg top-1/2 -translate-y-1/2 -z-10",
        }),
        u.jsx("img", {
          src: "/Hero Bg.svg",
          alt: "",
          className: "absolute -bottom-[270px] left-0 w-full -z-10",
        }),
        u.jsx("div", {
          className:
            "absolute -bottom-12 bg-primary blur-lg h-16 w-screen -z-10",
        }),
        u.jsx("div", {
          className: "relative z-10 text-center w-full max-w-4xl",
          children: u.jsxs("h2", {
            className: "text-4xl md:text-6xl font-clashSemiBold capitalize",
            children: [
              u.jsx("span", {
                className: "text-emerald-500",
                children: "Reinventing",
              }),
              u.jsx("span", { className: "text-white", children: " Urban" }),
              u.jsx("span", {
                className: "text-white",
                children: " Intelligence",
              }),
            ],
          }),
        }),
        u.jsxs("p", {
          className:
            "text-center font-clash text-sm md:text-base text-gray-300 max-w-xl",
          children: [
            "We merge big data, AI, and mobility to build cities that Move Faster, Smarter ",
            u.jsx("br", { className: "hidden md:block" }),
            " and Better.",
          ],
        }),
        u.jsxs("div", {
          className: "flex flex-col items-center gap-2",
          children: [
            u.jsx("span", {
              className:
                "text-emerald-500 font-clashSemiBold text-xl md:text-4xl",
              children: "What are we building ?",
            }),
            u.jsx("a", {
              href: "https://www.dextools.io/app/en/ether/pair-explorer/0x8297201ee09f1f7d608123317ecc4785942d1932",
              target: "_blank",
              rel: "noopener noreferrer",
              children: u.jsxs("button", {
                className:
                  "pl-3 pr-4 py-2 bg-green-300 rounded-lg flex items-center gap-2 mt-10",
                children: [
                  u.jsx("span", {
                    className:
                      "text-stone-900 text-sm md:text-base font-medium",
                    children: "0x8297201ee09f1f7d608123317ecc4785942d1932",
                  }),
                  u.jsx("img", {
                    src: "/Button Icon.svg",
                    alt: "arrowicon",
                    className: "w-8 h-8",
                  }),
                ],
              }),
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "relative w-full max-w-6xl h-[360px] flex items-center justify-center mt-10 overflow-hidden",
          children: o.map((c, d) => {
            const f = Tg(d, t, Xe.length),
              h = f === 0 ? 3 : Math.abs(f) === 1 ? 2 : 1;
            return u.jsx(
              "a",
              {
                href: Xe[d].link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "absolute",
                style: { zIndex: h, pointerEvents: f === 0 ? "auto" : "none" },
                children: u.jsxs(s1.div, {
                  style: c,
                  className:
                    "w-[250px] sm:w-[280px] md:w-[420px] h-[300px] md:h-[350px] rounded-2xl overflow-hidden cursor-pointer shadow-lg",
                  children: [
                    u.jsx("img", {
                      src: Xe[d].src,
                      alt: Xe[d].title,
                      className: "absolute inset-0 w-full h-full object-cover",
                    }),
                    u.jsxs("div", {
                      className:
                        "relative z-10 flex flex-col justify-end h-full text-left text-white p-4 md:p-5 pb-8 bg-gradient-to-t from-black via-black/60 to-transparent",
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-sm md:text-2xl font-clashSemiBold mb-1",
                          children: Xe[d].title,
                        }),
                        u.jsx("p", {
                          className:
                            "text-xs md:text-base font-clash text-gray-300",
                          children: Xe[d].desc,
                        }),
                      ],
                    }),
                  ],
                }),
              },
              d
            );
          }),
        }),
        u.jsxs("div", {
          className:
            "w-screen h-full flex justify-center items-center gap-4 mt-4",
          children: [
            u.jsx("button", {
              onClick: a,
              className:
                "bg-transparent backdrop-blur-sm p-2 md:p-3 rounded-full text-[#40E080] text-base md:text-xl lg:text-2xl",
              children: "←",
            }),
            u.jsxs("div", {
              className:
                "text-[#40E080] text-sm sm:text-lg md:text-2xl bg-transparent px-10 py-1",
              children: [t + 1, " / ", Xe.length],
            }),
            u.jsx("button", {
              onClick: l,
              className:
                "bg-transparent backdrop-blur-sm p-2 md:p-3 rounded-full text-[#40E080] text-base md:text-xl lg:text-2xl",
              children: "→",
            }),
          ],
        }),
      ],
    });
  },
  m3 = () =>
    u.jsxs("div", {
      className:
        "relative w-full h-full text-white px-4 md:px-20 py-10 md:py-20 rounded-2xl flex flex-col lg:flex-row items-center overflow-hidden",
      children: [
        u.jsx("img", {
          src: "/comingsoon.svg",
          alt: "background",
          className:
            "absolute inset-0 w-full h-full rounded-2xl px-4 z-0 hidden lg:block",
        }),
        u.jsx("img", {
          src: "/coming soon mobile.svg",
          alt: "background",
          className:
            "absolute inset-0 w-full px-3 h-full rounded-3xl object-cover z-0 lg:hidden",
        }),
        u.jsxs("div", {
          className:
            "relative z-10 space-y-4 text-center lg:text-left w-full 2xl:ml-40",
          children: [
            u.jsx("div", {
              className:
                "p-1 sm:p-3 md:p-[5px] bg-teal-400/20 rounded-[40px] inline-flex justify-center items-center w-fit mx-auto lg:mx-0",
              children: u.jsx("div", {
                className:
                  "px-3 py-1.5 sm:px-4 sm:py-2 md:px-2.5 md:py-[5px] rounded-3xl outline outline-1 outline-offset-[-1px] outline-emerald-300 flex justify-center items-center gap-2.5",
                children: u.jsx("div", {
                  className:
                    "text-white text-[10px] sm:text-base md:text-base font-normal",
                  children: "Just Around the Corner",
                }),
              }),
            }),
            u.jsx("div", {
              className:
                "text-3xl sm:text-5xl lg:text-6xl bg-gradient-to-b from-white to-[#83DBC9] bg-clip-text text-transparent font-clashSemiBold mb-20",
              children: "Coming Soon",
            }),
            u.jsx("p", {
              className:
                "text-4xl sm:text-3xl md:text-4xl lg:text-7xl font-michroma text-center sm:text-start bg-gradient-to-r from-[#015D47] via-[#02C394] to-[#015D47] bg-clip-text text-transparent",
              children: "P-AXON",
            }),
            u.jsxs("p", {
              className:
                "text-[10px] sm:text-base font-clash text-gray-300 mt-2",
              children: [
                "It is a compact intelligence system that analyses ",
                u.jsx("br", {}),
                " collected data in real-time.",
              ],
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "relative z-10 w-72 lg:w-full max-w-[700px] mx-auto lg:mx-0 2xl:mr-40 rounded-xl border border-teal-600 overflow-hidden mt-4",
          children: u.jsx("video", {
            className: "w-full lg:h-96  h-40 object-cover",
            src: "https://res.cloudinary.com/df1awd7vz/video/upload/v1748592926/telematics_wilbyd.mp4",
            autoPlay: !0,
            loop: !0,
            muted: !0,
            controls: !1,
            playsInline: !0,
            preload: "auto",
          }),
        }),
      ],
    }),
  g3 = () => {
    const e = () => {
      window.open("https://t.me/PulseAI_network", "_blank"),
        window.open("https://x.com/PulseAI_network", "_blank");
    };
    return u.jsxs("section", {
      id: "home",
      className:
        "relative flex flex-col items-center justify-center text-white h-full",
      children: [
        u.jsxs("video", {
          autoPlay: !0,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: "w-full h-[60vh] sm:h-[70vh] md:h-screen object-cover",
          children: [
            u.jsx("source", {
              src: "https://res.cloudinary.com/df1awd7vz/video/upload/v1748592916/hero_ji0vbv.mp4",
              type: "video/mp4",
            }),
            "Your browser does not support the video tag.",
          ],
        }),
        u.jsxs("div", {
          className:
            "absolute inset-0 flex flex-col items-center justify-center text-center px-4 glow-text",
          children: [
            u.jsx("h1", {
              className:
                "text-3xl sm:text-5xl md:text-8xl font-clash drop-shadow-lg",
              children: "Rerouting The Future",
            }),
            u.jsx("p", {
              className: "mt-4 lg:mt-8  text-lg sm:text-5xl font-clash",
              children: "Real-Time Data & Community Insights to",
            }),
            u.jsx("p", {
              className: "text-lg sm:text-5xl font-clashSemiBold",
              children: "Enhance Your Maps",
            }),
            u.jsx("button", {
              onClick: () => window.open("https://app.pulseainetwork.org", "_blank"),
              className:
                "mt-6 px-6 py-1 border border-[#02C39433] shadow-[inset_0px_0px_6px_3px_rgba(2,195,148,0.25)] bg-[rgba(2,195,148,0.40)] font-clash font-medium text-white text-lg rounded-xl transition duration-300 glow-button",
              children: "Get Started",
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "absolute -bottom-1 w-full h-20 sm:h-24 md:h-12 bg-gradient-to-t from-[#081716] to-transparent pointer-events-none",
        }),
      ],
    });
  },
  be = ({ children: e, className: t = "", onVisible: n }) => {
    const r = b.useRef(),
      [i, s] = b.useState(!1);
    return (
      b.useEffect(() => {
        const o = new IntersectionObserver(
          ([a]) => {
            a.isIntersecting && (s(!0), n == null || n(), o.disconnect());
          },
          { threshold: 0.1 }
        );
        return r.current && o.observe(r.current), () => o.disconnect();
      }, []),
      u.jsx("div", {
        ref: r,
        className: `h-full transition-opacity duration-1000 ease-in-out ${
          i ? "opacity-100" : "opacity-0"
        } ${t}`,
        children: e,
      })
    );
  },
  nr = [
    "Loading system components...",
    "Establishing neural networks...",
    "Calibrating quantum processors...",
    "Syncing temporal matrices...",
    "Initializing holographic display...",
    "Loading complete. Welcome to the PathPulse.",
  ],
  y3 = () => {
    const [e, t] = b.useState(0),
      [n, r] = b.useState("INITIALIZING"),
      [i, s] = b.useState(nr[0]),
      o = b.useRef(null);
    return (
      b.useEffect(() => {
        (() => {
          const l = o.current;
          if (l)
            for (let c = 0; c < 50; c++) {
              const d = document.createElement("div");
              (d.className = "particle"),
                (d.style.left = `${Math.random() * 100}%`),
                (d.style.animationDelay = `${Math.random() * 6}s`),
                (d.style.animationDuration = `${Math.random() * 3 + 3}s`),
                l.appendChild(d);
            }
        })();
      }, []),
      b.useEffect(() => {
        const a = () => {
          t((l) => {
            const c = l + Math.random() * 2.5 + 0.8;
            return c < 100 ? c : 100;
          });
        };
        if (e < 100) {
          const l = setTimeout(a, 120 + Math.random() * 80);
          return () => clearTimeout(l);
        }
      }, [e]),
      b.useEffect(() => {
        e < 15
          ? s(nr[0])
          : e < 30
          ? s(nr[1])
          : e < 50
          ? s(nr[2])
          : e < 70
          ? s(nr[3])
          : e < 90
          ? s(nr[4])
          : s(nr[5]),
          e >= 100
            ? r("COMPLETE")
            : e > 80
            ? r("FINALIZING")
            : e > 60
            ? r("PROCESSING")
            : e > 30
            ? r("LOADING")
            : r("INITIALIZING");
      }, [e]),
      b.useEffect(() => {
        const a = (l) => {
          const c = document.querySelector(".core"),
            d = (l.clientX / window.innerWidth - 0.5) * 20,
            f = (l.clientY / window.innerHeight - 0.5) * 20;
          c &&
            (c.style.transform = `translate(-50%, -50%) translate(${d}px, ${f}px)`);
        };
        return (
          document.addEventListener("mousemove", a),
          () => document.removeEventListener("mousemove", a)
        );
      }, []),
      b.useEffect(() => {
        const a = document.querySelector("video");
        a &&
          ((a.muted = !0),
          a.play().catch(() => {
            console.error(
              "Video playback failed. Ensure the video is accessible and properly formatted."
            );
          }));
      }, []),
      u.jsxs("div", {
        className:
          "flex flex-col items-center justify-center w-screen h-screen relative overflow-hidden bg-[#050F0A]",
        children: [
          u.jsx("div", { className: "bg-grid" }),
          u.jsx("div", { className: "particles", ref: o }),
          u.jsxs("div", {
            className: "loader-container",
            children: [
              u.jsx("div", {
                className: "flex flex-col items-center justify-center",
                children: u.jsxs("video", {
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  controls: !1,
                  className: "w-[40%] h-[40%]",
                  children: [
                    u.jsx("source", {
                      src: "https://res.cloudinary.com/df1awd7vz/video/upload/v1748592913/loader_kpf8so.mp4",
                      type: "video/mp4",
                    }),
                    "Your browser does not support the video tag.",
                  ],
                }),
              }),
              u.jsx("div", {
                className: "loading-text glitch font-clash",
                "data-text": n,
                children: n,
              }),
              u.jsx("div", {
                className: "progress-bar",
                children: u.jsx("div", {
                  className: "progress-fill",
                  style: { width: `${e}%` },
                }),
              }),
              u.jsxs("div", {
                className: "percentage",
                children: [Math.floor(e), "%"],
              }),
              u.jsx("div", {
                className: "status-text font-clash",
                children: i,
              }),
            ],
          }),
        ],
      })
    );
  },
  v3 = () =>
    u.jsxs("section", {
      id: "coin",
      className:
        "relative flex flex-col items-center justify-center pt-10 lg:pt-0",
      children: [
        u.jsx("div", {
          className:
            "absolute top-14 lg:top-10 px-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan-100 font-clash",
          children: "$PULSE Point Utility",
        }),
        u.jsxs("div", {
          className:
            "absolute top-24 lg:top-28 px-4 text-white opacity-80 text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-light font-clash",
          children: [
            "PathPulse's ecosystem offers robust Points utilities ",
            u.jsx("br", { className: "hidden sm:block" }),
            "designed to drive demand, offer real-world rewards, and ",
            u.jsx("br", { className: "hidden sm:block" }),
            "create passive income opportunities.",
          ],
        }),
        u.jsxs("div", {
          className: "relative w-full",
          children: [
            u.jsxs("video", {
              autoPlay: !0,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: "w-full h-[60vh] sm:h-[70vh] md:h-screen object-cover",
              children: [
                u.jsx("source", {
                  src: "https://res.cloudinary.com/df1awd7vz/video/upload/v1750053705/pulsecoin_pfwfwx.mp4",
                  type: "video/mp4",
                }),
                "Your browser does not support the video tag.",
              ],
            }),
            u.jsx("div", {
              className:
                "absolute top-0 w-full h-20 sm:h-24 md:h-32 bg-gradient-to-b from-[#081716] to-transparent pointer-events-none",
            }),
            u.jsx("div", {
              className:
                "absolute -bottom-2 w-full h-20 sm:h-24 md:h-32 bg-gradient-to-t from-[#081716] to-transparent pointer-events-none",
            }),
          ],
        }),
      ],
    }),
  x3 = ({ percent: e }) => {
    const [t, n] = b.useState(30),
      [r, i] = b.useState(2);
    b.useEffect(() => {
      const l = () => {
        const c = window.innerWidth < 768;
        n(c ? 15.2 : 30), i(c ? 1 : 2);
      };
      return (
        l(),
        window.addEventListener("resize", l),
        () => window.removeEventListener("resize", l)
      );
    }, []);
    const s = t - r * 0.5,
      o = 2 * Math.PI * s,
      a = o - (e / 100) * o;
    return u.jsxs("svg", {
      height: t * 2,
      width: t * 2,
      className:
        "absolute left-[9px] top-1 lg:top-[10px] lg:left-[18px] rotate-[-90deg]",
      children: [
        u.jsx("defs", {
          children: u.jsxs("linearGradient", {
            id: "progressGradient",
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "100%",
            children: [
              u.jsx("stop", { offset: "0%", stopColor: "#02C39400" }),
              u.jsx("stop", { offset: "50%", stopColor: "#90EEE5C2" }),
              u.jsx("stop", { offset: "100%", stopColor: "#BDFCFE" }),
            ],
          }),
        }),
        u.jsx("circle", {
          stroke: "#ffffff22",
          fill: "transparent",
          strokeWidth: r,
          r: s,
          cx: t,
          cy: t,
        }),
        u.jsx("circle", {
          stroke: "url(#progressGradient)",
          fill: "transparent",
          strokeWidth: r,
          strokeLinecap: "round",
          strokeDasharray: o,
          strokeDashoffset: a,
          r: s,
          cx: t,
          cy: t,
          style: { transition: "stroke-dashoffset 0.3s ease" },
        }),
      ],
    });
  },
  o1 = b.createContext({});
function w3(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Rh = typeof window < "u",
  b3 = Rh ? b.useLayoutEffect : b.useEffect,
  Lh = b.createContext(null);
function Mh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Dh(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const xn = (e, t, n) => (n > t ? t : n < e ? e : n);
let wl = () => {};
const wn = {},
  a1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function l1(e) {
  return typeof e == "object" && e !== null;
}
const u1 = (e) => /^0[^.\s]+$/u.test(e);
function Ih(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ct = (e) => e,
  S3 = (e, t) => (n) => t(e(n)),
  Co = (...e) => e.reduce(S3),
  so = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class Fh {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Mh(this.subscriptions, t), () => Dh(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Qt = (e) => e * 1e3,
  Xt = (e) => e / 1e3;
function c1(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const d1 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  j3 = 1e-7,
  T3 = 12;
function P3(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = d1(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > j3 && ++a < T3);
  return o;
}
function ko(e, t, n, r) {
  if (e === t && n === r) return Ct;
  const i = (s) => P3(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : d1(i(s), t, r));
}
const f1 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  h1 = (e) => (t) => 1 - e(1 - t),
  p1 = ko(0.33, 1.53, 0.69, 0.99),
  zh = h1(p1),
  m1 = f1(zh),
  g1 = (e) =>
    (e *= 2) < 1 ? 0.5 * zh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Bh = (e) => 1 - Math.sin(Math.acos(e)),
  y1 = h1(Bh),
  v1 = f1(Bh),
  C3 = ko(0.42, 0, 1, 1),
  k3 = ko(0, 0, 0.58, 1),
  x1 = ko(0.42, 0, 0.58, 1),
  E3 = (e) => Array.isArray(e) && typeof e[0] != "number",
  w1 = (e) => Array.isArray(e) && typeof e[0] == "number",
  Pg = {
    linear: Ct,
    easeIn: C3,
    easeInOut: x1,
    easeOut: k3,
    circIn: Bh,
    circInOut: v1,
    circOut: y1,
    backIn: zh,
    backInOut: m1,
    backOut: p1,
    anticipate: g1,
  },
  N3 = (e) => typeof e == "string",
  Cg = (e) => {
    if (w1(e)) {
      wl(e.length === 4);
      const [t, n, r, i] = e;
      return ko(t, n, r, i);
    } else if (N3(e)) return wl(Pg[e] !== void 0), Pg[e];
    return e;
  },
  na = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  kg = { value: null, addProjectionMetrics: null };
function _3(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    s = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function c(f) {
    o.has(f) && (d.schedule(f), e()), l++, f(a);
  }
  const d = {
    schedule: (f, h = !1, y = !1) => {
      const x = y && i ? n : r;
      return h && o.add(f), x.has(f) || x.add(f), f;
    },
    cancel: (f) => {
      r.delete(f), o.delete(f);
    },
    process: (f) => {
      if (((a = f), i)) {
        s = !0;
        return;
      }
      (i = !0),
        ([n, r] = [r, n]),
        n.forEach(c),
        t && kg.value && kg.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        s && ((s = !1), d.process(f));
    },
  };
  return d;
}
const O3 = 40;
function b1(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = na.reduce((g, S) => ((g[S] = _3(s, t ? S : void 0)), g), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: c,
      preUpdate: d,
      update: f,
      preRender: h,
      render: y,
      postRender: v,
    } = o,
    x = () => {
      const g = wn.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        wn.useManualTiming ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, O3), 1)),
        (i.timestamp = g),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        y.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(x));
    },
    w = () => {
      (n = !0), (r = !0), i.isProcessing || e(x);
    };
  return {
    schedule: na.reduce((g, S) => {
      const j = o[S];
      return (g[S] = (T, k = !1, N = !1) => (n || w(), j.schedule(T, k, N))), g;
    }, {}),
    cancel: (g) => {
      for (let S = 0; S < na.length; S++) o[na[S]].cancel(g);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: me,
  cancel: Yn,
  state: Oe,
  steps: lc,
} = b1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ct, !0);
let Ta;
function A3() {
  Ta = void 0;
}
const nt = {
    now: () => (
      Ta === void 0 &&
        nt.set(
          Oe.isProcessing || wn.useManualTiming
            ? Oe.timestamp
            : performance.now()
        ),
      Ta
    ),
    set: (e) => {
      (Ta = e), queueMicrotask(A3);
    },
  },
  S1 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Vh = S1("--"),
  R3 = S1("var(--"),
  $h = (e) => (R3(e) ? L3.test(e.split("/*")[0].trim()) : !1),
  L3 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Fi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  oo = { ...Fi, transform: (e) => xn(0, 1, e) },
  ra = { ...Fi, default: 1 },
  Ps = (e) => Math.round(e * 1e5) / 1e5,
  Uh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function M3(e) {
  return e == null;
}
const D3 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Hh = (e, t) => (n) =>
    !!(
      (typeof n == "string" && D3.test(n) && n.startsWith(e)) ||
      (t && !M3(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  j1 = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(Uh);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  I3 = (e) => xn(0, 255, e),
  uc = { ...Fi, transform: (e) => Math.round(I3(e)) },
  fr = {
    test: Hh("rgb", "red"),
    parse: j1("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      uc.transform(e) +
      ", " +
      uc.transform(t) +
      ", " +
      uc.transform(n) +
      ", " +
      Ps(oo.transform(r)) +
      ")",
  };
function F3(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Ud = { test: Hh("#"), parse: F3, transform: fr.transform },
  Eo = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  kn = Eo("deg"),
  Jt = Eo("%"),
  U = Eo("px"),
  z3 = Eo("vh"),
  B3 = Eo("vw"),
  Eg = {
    ...Jt,
    parse: (e) => Jt.parse(e) / 100,
    transform: (e) => Jt.transform(e * 100),
  },
  Jr = {
    test: Hh("hsl", "hue"),
    parse: j1("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Jt.transform(Ps(t)) +
      ", " +
      Jt.transform(Ps(n)) +
      ", " +
      Ps(oo.transform(r)) +
      ")",
  },
  Ie = {
    test: (e) => fr.test(e) || Ud.test(e) || Jr.test(e),
    parse: (e) =>
      fr.test(e) ? fr.parse(e) : Jr.test(e) ? Jr.parse(e) : Ud.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? fr.transform(e)
        : Jr.transform(e),
  },
  V3 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function $3(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Uh)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(V3)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const T1 = "number",
  P1 = "color",
  U3 = "var",
  H3 = "var(",
  Ng = "${}",
  W3 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ao(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      W3,
      (l) => (
        Ie.test(l)
          ? (r.color.push(s), i.push(P1), n.push(Ie.parse(l)))
          : l.startsWith(H3)
          ? (r.var.push(s), i.push(U3), n.push(l))
          : (r.number.push(s), i.push(T1), n.push(parseFloat(l))),
        ++s,
        Ng
      )
    )
    .split(Ng);
  return { values: n, split: a, indexes: r, types: i };
}
function C1(e) {
  return ao(e).values;
}
function k1(e) {
  const { split: t, types: n } = ao(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === T1
          ? (s += Ps(i[o]))
          : a === P1
          ? (s += Ie.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const q3 = (e) => (typeof e == "number" ? 0 : e);
function G3(e) {
  const t = C1(e);
  return k1(e)(t.map(q3));
}
const Qn = {
  test: $3,
  parse: C1,
  createTransformer: k1,
  getAnimatableNone: G3,
};
function cc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function K3({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = cc(l, a, e + 1 / 3)), (s = cc(l, a, e)), (o = cc(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function bl(e, t) {
  return (n) => (n > 0 ? t : e);
}
const fe = (e, t, n) => e + (t - e) * n,
  dc = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Y3 = [Ud, fr, Jr],
  Q3 = (e) => Y3.find((t) => t.test(e));
function _g(e) {
  const t = Q3(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Jr && (n = K3(n)), n;
}
const Og = (e, t) => {
    const n = _g(e),
      r = _g(t);
    if (!n || !r) return bl(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = dc(n.red, r.red, s)),
      (i.green = dc(n.green, r.green, s)),
      (i.blue = dc(n.blue, r.blue, s)),
      (i.alpha = fe(n.alpha, r.alpha, s)),
      fr.transform(i)
    );
  },
  Hd = new Set(["none", "hidden"]);
function X3(e, t) {
  return Hd.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function J3(e, t) {
  return (n) => fe(e, t, n);
}
function Wh(e) {
  return typeof e == "number"
    ? J3
    : typeof e == "string"
    ? $h(e)
      ? bl
      : Ie.test(e)
      ? Og
      : t_
    : Array.isArray(e)
    ? E1
    : typeof e == "object"
    ? Ie.test(e)
      ? Og
      : Z3
    : bl;
}
function E1(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Wh(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function Z3(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Wh(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function e_(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      o = e.indexes[s][r[s]],
      a = e.values[o] ?? 0;
    (n[i] = a), r[s]++;
  }
  return n;
}
const t_ = (e, t) => {
  const n = Qn.createTransformer(t),
    r = ao(e),
    i = ao(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Hd.has(e) && !i.values.length) || (Hd.has(t) && !r.values.length)
      ? X3(e, t)
      : Co(E1(e_(r, i), i.values), n)
    : bl(e, t);
};
function N1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? fe(e, t, n)
    : Wh(e)(e, t);
}
const n_ = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => me.update(t, n),
      stop: () => Yn(t),
      now: () => (Oe.isProcessing ? Oe.timestamp : nt.now()),
    };
  },
  _1 = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(s / (i - 1)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Sl = 2e4;
function qh(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Sl; ) (t += n), (r = e.next(t));
  return t >= Sl ? 1 / 0 : t;
}
function r_(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(qh(r), Sl);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / t,
    duration: Xt(i),
  };
}
const i_ = 5;
function O1(e, t, n) {
  const r = Math.max(t - i_, 0);
  return c1(n - e(r), t - r);
}
const ye = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  fc = 0.001;
function s_({
  duration: e = ye.duration,
  bounce: t = ye.bounce,
  velocity: n = ye.velocity,
  mass: r = ye.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = xn(ye.minDamping, ye.maxDamping, o)),
    (e = xn(ye.minDuration, ye.maxDuration, Xt(e))),
    o < 1
      ? ((i = (c) => {
          const d = c * o,
            f = d * e,
            h = d - n,
            y = Wd(c, o),
            v = Math.exp(-f);
          return fc - (h / y) * v;
        }),
        (s = (c) => {
          const f = c * o * e,
            h = f * n + n,
            y = Math.pow(o, 2) * Math.pow(c, 2) * e,
            v = Math.exp(-f),
            x = Wd(Math.pow(c, 2), o);
          return ((-i(c) + fc > 0 ? -1 : 1) * ((h - y) * v)) / x;
        }))
      : ((i = (c) => {
          const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -fc + d * f;
        }),
        (s = (c) => {
          const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return d * f;
        }));
  const a = 5 / e,
    l = a_(i, s, a);
  if (((e = Qt(e)), isNaN(l)))
    return { stiffness: ye.stiffness, damping: ye.damping, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const o_ = 12;
function a_(e, t, n) {
  let r = n;
  for (let i = 1; i < o_; i++) r = r - e(r) / t(r);
  return r;
}
function Wd(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const l_ = ["duration", "bounce"],
  u_ = ["stiffness", "damping", "mass"];
function Ag(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function c_(e) {
  let t = {
    velocity: ye.velocity,
    stiffness: ye.stiffness,
    damping: ye.damping,
    mass: ye.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Ag(e, u_) && Ag(e, l_))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * xn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: ye.mass, stiffness: i, damping: s };
    } else {
      const n = s_(e);
      (t = { ...t, ...n, mass: ye.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function jl(e = ye.visualDuration, t = ye.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: c,
      mass: d,
      duration: f,
      velocity: h,
      isResolvedFromDuration: y,
    } = c_({ ...n, velocity: -Xt(n.velocity || 0) }),
    v = h || 0,
    x = c / (2 * Math.sqrt(l * d)),
    w = o - s,
    p = Xt(Math.sqrt(l / d)),
    m = Math.abs(w) < 5;
  r || (r = m ? ye.restSpeed.granular : ye.restSpeed.default),
    i || (i = m ? ye.restDelta.granular : ye.restDelta.default);
  let g;
  if (x < 1) {
    const j = Wd(p, x);
    g = (T) => {
      const k = Math.exp(-x * p * T);
      return (
        o - k * (((v + x * p * w) / j) * Math.sin(j * T) + w * Math.cos(j * T))
      );
    };
  } else if (x === 1) g = (j) => o - Math.exp(-p * j) * (w + (v + p * w) * j);
  else {
    const j = p * Math.sqrt(x * x - 1);
    g = (T) => {
      const k = Math.exp(-x * p * T),
        N = Math.min(j * T, 300);
      return (
        o - (k * ((v + x * p * w) * Math.sinh(N) + j * w * Math.cosh(N))) / j
      );
    };
  }
  const S = {
    calculatedDuration: (y && f) || null,
    next: (j) => {
      const T = g(j);
      if (y) a.done = j >= f;
      else {
        let k = j === 0 ? v : 0;
        x < 1 && (k = j === 0 ? Qt(v) : O1(g, j, T));
        const N = Math.abs(k) <= r,
          P = Math.abs(o - T) <= i;
        a.done = N && P;
      }
      return (a.value = a.done ? o : T), a;
    },
    toString: () => {
      const j = Math.min(qh(S), Sl),
        T = _1((k) => S.next(j * k).value, j, 30);
      return j + "ms " + T;
    },
    toTransition: () => {},
  };
  return S;
}
jl.applyToOptions = (e) => {
  const t = r_(e, 100, jl);
  return (
    (e.ease = t.ease), (e.duration = Qt(t.duration)), (e.type = "keyframes"), e
  );
};
function qd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    y = (N) => (a !== void 0 && N < a) || (l !== void 0 && N > l),
    v = (N) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - N) < Math.abs(l - N)
        ? a
        : l;
  let x = n * t;
  const w = f + x,
    p = o === void 0 ? w : o(w);
  p !== w && (x = p - f);
  const m = (N) => -x * Math.exp(-N / r),
    g = (N) => p + m(N),
    S = (N) => {
      const P = m(N),
        E = g(N);
      (h.done = Math.abs(P) <= c), (h.value = h.done ? p : E);
    };
  let j, T;
  const k = (N) => {
    y(h.value) &&
      ((j = N),
      (T = jl({
        keyframes: [h.value, v(h.value)],
        velocity: O1(g, N, h.value),
        damping: i,
        stiffness: s,
        restDelta: c,
        restSpeed: d,
      })));
  };
  return (
    k(0),
    {
      calculatedDuration: null,
      next: (N) => {
        let P = !1;
        return (
          !T && j === void 0 && ((P = !0), S(N), k(N)),
          j !== void 0 && N >= j ? T.next(N - j) : (!P && S(N), h)
        );
      },
    }
  );
}
function d_(e, t, n) {
  const r = [],
    i = n || wn.mix || N1,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ct : t;
      a = Co(l, a);
    }
    r.push(a);
  }
  return r;
}
function f_(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((wl(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = d_(t, r, i),
    l = a.length,
    c = (d) => {
      if (o && d < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(d < e[f + 1]); f++);
      const h = so(e[f], e[f + 1], d);
      return a[f](h);
    };
  return n ? (d) => c(xn(e[0], e[s - 1], d)) : c;
}
function h_(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = so(0, t, r);
    e.push(fe(n, 1, i));
  }
}
function p_(e) {
  const t = [0];
  return h_(t, e.length - 1), t;
}
function m_(e, t) {
  return e.map((n) => n * t);
}
function g_(e, t) {
  return e.map(() => t || x1).splice(0, e.length - 1);
}
function Cs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = E3(r) ? r.map(Cg) : Cg(r),
    s = { done: !1, value: t[0] },
    o = m_(n && n.length === t.length ? n : p_(t), e),
    a = f_(o, t, { ease: Array.isArray(i) ? i : g_(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const y_ = (e) => e !== null;
function Gh(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const s = e.filter(y_),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
const v_ = { decay: qd, inertia: qd, tween: Cs, keyframes: Cs, spring: jl };
function A1(e) {
  typeof e.type == "string" && (e.type = v_[e.type]);
}
class Kh {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const x_ = (e) => e / 100;
class Yh extends Kh {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = (n = !0) => {
        var r, i;
        if (n) {
          const { motionValue: s } = this.options;
          s && s.updatedAt !== nt.now() && this.tick(nt.now());
        }
        (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    A1(t);
    const {
      type: n = Cs,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Cs;
    l !== Cs &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = Co(x_, N1(a[0], a[1]))), (a = [0, 100]));
    const c = l({ ...t, keyframes: a });
    s === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      c.calculatedDuration === null && (c.calculatedDuration = qh(c));
    const { calculatedDuration: d } = c;
    (this.calculatedDuration = d),
      (this.resolvedDuration = d + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = c);
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: s,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: c = 0,
      keyframes: d,
      repeat: f,
      repeatType: h,
      repeatDelay: y,
      type: v,
      onUpdate: x,
      finalKeyframe: w,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t);
    const p = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
      m = this.playbackSpeed >= 0 ? p < 0 : p > i;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i);
    let g = this.currentTime,
      S = r;
    if (f) {
      const N = Math.min(this.currentTime, i) / a;
      let P = Math.floor(N),
        E = N % 1;
      !E && N >= 1 && (E = 1),
        E === 1 && P--,
        (P = Math.min(P, f + 1)),
        !!(P % 2) &&
          (h === "reverse"
            ? ((E = 1 - E), y && (E -= y / a))
            : h === "mirror" && (S = o)),
        (g = xn(0, 1, E) * a);
    }
    const j = m ? { done: !1, value: d[0] } : S.next(g);
    s && (j.value = s(j.value));
    let { done: T } = j;
    !m &&
      l !== null &&
      (T =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const k =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      k && v !== qd && (j.value = Gh(d, this.options, w, this.speed)),
      x && x(j.value),
      k && this.finish(),
      j
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return Xt(this.calculatedDuration);
  }
  get time() {
    return Xt(this.currentTime);
  }
  set time(t) {
    var n;
    (t = Qt(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(nt.now());
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Xt(this.currentTime));
  }
  play() {
    var i, s;
    if (this.isStopped) return;
    const { driver: t = n_, startTime: n } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))),
      (s = (i = this.options).onPlay) == null || s.call(i);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(nt.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var t, n;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function w_(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const hr = (e) => (e * 180) / Math.PI,
  Gd = (e) => {
    const t = hr(Math.atan2(e[1], e[0]));
    return Kd(t);
  },
  b_ = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Gd,
    rotateZ: Gd,
    skewX: (e) => hr(Math.atan(e[1])),
    skewY: (e) => hr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Kd = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Rg = Gd,
  Lg = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Mg = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  S_ = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Lg,
    scaleY: Mg,
    scale: (e) => (Lg(e) + Mg(e)) / 2,
    rotateX: (e) => Kd(hr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Kd(hr(Math.atan2(-e[2], e[0]))),
    rotateZ: Rg,
    rotate: Rg,
    skewX: (e) => hr(Math.atan(e[4])),
    skewY: (e) => hr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Yd(e) {
  return e.includes("scale") ? 1 : 0;
}
function Qd(e, t) {
  if (!e || e === "none") return Yd(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) (r = S_), (i = n);
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = b_), (i = a);
  }
  if (!i) return Yd(t);
  const s = r[t],
    o = i[1].split(",").map(T_);
  return typeof s == "function" ? s(o) : o[s];
}
const j_ = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Qd(n, t);
};
function T_(e) {
  return parseFloat(e.trim());
}
const zi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Bi = new Set(zi),
  Dg = (e) => e === Fi || e === U,
  P_ = new Set(["x", "y", "z"]),
  C_ = zi.filter((e) => !P_.has(e));
function k_(e) {
  const t = [];
  return (
    C_.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const vr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Qd(t, "x"),
  y: (e, { transform: t }) => Qd(t, "y"),
};
vr.translateX = vr.x;
vr.translateY = vr.y;
const xr = new Set();
let Xd = !1,
  Jd = !1,
  Zd = !1;
function R1() {
  if (Jd) {
    const e = Array.from(xr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = k_(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) == null || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Jd = !1), (Xd = !1), xr.forEach((e) => e.complete(Zd)), xr.clear();
}
function L1() {
  xr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Jd = !0);
  });
}
function E_() {
  (Zd = !0), L1(), R1(), (Zd = !1);
}
class Qh {
  constructor(t, n, r, i, s, o = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (xr.add(this),
          Xd || ((Xd = !0), me.read(L1), me.resolveKeyframes(R1)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const s = i == null ? void 0 : i.get(),
        o = t[t.length - 1];
      if (s !== void 0) t[0] = s;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]);
    }
    w_(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      xr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (xr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const N_ = (e) => e.startsWith("--");
function __(e, t, n) {
  N_(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const O_ = Ih(() => window.ScrollTimeline !== void 0),
  A_ = {};
function R_(e, t) {
  const n = Ih(e);
  return () => A_[t] ?? n();
}
const M1 = R_(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  cs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ig = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: cs([0, 0.65, 0.55, 1]),
    circOut: cs([0.55, 0, 1, 0.45]),
    backIn: cs([0.31, 0.01, 0.66, -0.59]),
    backOut: cs([0.33, 1.53, 0.69, 0.99]),
  };
function D1(e, t) {
  if (e)
    return typeof e == "function"
      ? M1()
        ? _1(e, t)
        : "ease-out"
      : w1(e)
      ? cs(e)
      : Array.isArray(e)
      ? e.map((n) => D1(n, t) || Ig.easeOut)
      : Ig[e];
}
function L_(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  c = void 0
) {
  const d = { [t]: n };
  l && (d.offset = l);
  const f = D1(a, i);
  Array.isArray(f) && (d.easing = f);
  const h = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return c && (h.pseudoElement = c), e.animate(d, h);
}
function I1(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function M_({ type: e, ...t }) {
  return I1(e) && M1()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class D_ extends Kh {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: s,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    (this.isPseudoElement = !!s),
      (this.allowFlatten = o),
      (this.options = t),
      wl(typeof t.type != "string");
    const c = M_(t);
    (this.animation = L_(n, r, i, c, s)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const d = Gh(i, this.options, a, this.speed);
          this.updateMotionValue ? this.updateMotionValue(d) : __(n, r, d),
            this.animation.cancel();
        }
        l == null || l(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement ||
      (n = (t = this.animation).commitStyles) == null ||
      n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return Xt(Number(t));
  }
  get time() {
    return Xt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    (this.finishedTime = null), (this.animation.currentTime = Qt(t));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && O_() ? ((this.animation.timeline = t), Ct) : n(this)
    );
  }
}
const F1 = { anticipate: g1, backInOut: m1, circInOut: v1 };
function I_(e) {
  return e in F1;
}
function F_(e) {
  typeof e.ease == "string" && I_(e.ease) && (e.ease = F1[e.ease]);
}
const Fg = 10;
class z_ extends D_ {
  constructor(t) {
    F_(t),
      A1(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: s,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Yh({ ...o, autoplay: !1 }),
      l = Qt(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - Fg).value, a.sample(l).value, Fg), a.stop();
  }
}
const zg = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Qn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function B_(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function V_(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = zg(i, t),
    a = zg(s, t);
  return !o || !a ? !1 : B_(e) || ((n === "spring" || I1(n)) && r);
}
function z1(e) {
  return l1(e) && "offsetHeight" in e;
}
const $_ = new Set(["opacity", "clipPath", "filter", "transform"]),
  U_ = Ih(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function H_(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: s,
    type: o,
  } = e;
  if (!z1((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current))
    return !1;
  const { onUpdate: a, transformTemplate: l } = t.owner.getProps();
  return (
    U_() &&
    n &&
    $_.has(n) &&
    (n !== "transform" || !l) &&
    !a &&
    !r &&
    i !== "mirror" &&
    s !== 0 &&
    o !== "inertia"
  );
}
const W_ = 40;
class q_ extends Kh {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: c,
    element: d,
    ...f
  }) {
    var v;
    super(),
      (this.stop = () => {
        var x, w;
        this._animation &&
          (this._animation.stop(),
          (x = this.stopTimeline) == null || x.call(this)),
          (w = this.keyframeResolver) == null || w.cancel();
      }),
      (this.createdAt = nt.now());
    const h = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        name: l,
        motionValue: c,
        element: d,
        ...f,
      },
      y = (d == null ? void 0 : d.KeyframeResolver) || Qh;
    (this.keyframeResolver = new y(
      a,
      (x, w, p) => this.onKeyframesResolved(x, w, h, !p),
      l,
      c,
      d
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const {
      name: s,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: c,
      onUpdate: d,
    } = r;
    (this.resolvedAt = nt.now()),
      V_(t, s, o, a) ||
        ((wn.instantAnimations || !l) && (d == null || d(Gh(t, r, n))),
        (t[0] = t[t.length - 1]),
        (r.duration = 0),
        (r.repeat = 0));
    const h = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > W_
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      y =
        !c && H_(h)
          ? new z_({ ...h, element: h.motionValue.owner.current })
          : new Yh(h);
    y.finished.then(() => this.notifyFinished()).catch(Ct),
      this.pendingTimeline &&
        ((this.stopTimeline = y.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = y);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), E_()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel();
  }
}
const G_ = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function K_(e) {
  const t = G_.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function B1(e, t, n = 1) {
  const [r, i] = K_(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return a1(o) ? parseFloat(o) : o;
  }
  return $h(i) ? B1(i, t, n + 1) : i;
}
function Xh(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const V1 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...zi,
  ]),
  Y_ = { test: (e) => e === "auto", parse: (e) => e },
  $1 = (e) => (t) => t.test(e),
  U1 = [Fi, U, Jt, kn, B3, z3, Y_],
  Bg = (e) => U1.find($1(e));
function Q_(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || u1(e)
    : !0;
}
const X_ = new Set(["brightness", "contrast", "saturate", "opacity"]);
function J_(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Uh) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = X_.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const Z_ = /\b([a-z-]*)\(.*?\)/gu,
  ef = {
    ...Qn,
    getAnimatableNone: (e) => {
      const t = e.match(Z_);
      return t ? t.map(J_).join(" ") : e;
    },
  },
  Vg = { ...Fi, transform: Math.round },
  e4 = {
    rotate: kn,
    rotateX: kn,
    rotateY: kn,
    rotateZ: kn,
    scale: ra,
    scaleX: ra,
    scaleY: ra,
    scaleZ: ra,
    skew: kn,
    skewX: kn,
    skewY: kn,
    distance: U,
    translateX: U,
    translateY: U,
    translateZ: U,
    x: U,
    y: U,
    z: U,
    perspective: U,
    transformPerspective: U,
    opacity: oo,
    originX: Eg,
    originY: Eg,
    originZ: U,
  },
  Jh = {
    borderWidth: U,
    borderTopWidth: U,
    borderRightWidth: U,
    borderBottomWidth: U,
    borderLeftWidth: U,
    borderRadius: U,
    radius: U,
    borderTopLeftRadius: U,
    borderTopRightRadius: U,
    borderBottomRightRadius: U,
    borderBottomLeftRadius: U,
    width: U,
    maxWidth: U,
    height: U,
    maxHeight: U,
    top: U,
    right: U,
    bottom: U,
    left: U,
    padding: U,
    paddingTop: U,
    paddingRight: U,
    paddingBottom: U,
    paddingLeft: U,
    margin: U,
    marginTop: U,
    marginRight: U,
    marginBottom: U,
    marginLeft: U,
    backgroundPositionX: U,
    backgroundPositionY: U,
    ...e4,
    zIndex: Vg,
    fillOpacity: oo,
    strokeOpacity: oo,
    numOctaves: Vg,
  },
  t4 = {
    ...Jh,
    color: Ie,
    backgroundColor: Ie,
    outlineColor: Ie,
    fill: Ie,
    stroke: Ie,
    borderColor: Ie,
    borderTopColor: Ie,
    borderRightColor: Ie,
    borderBottomColor: Ie,
    borderLeftColor: Ie,
    filter: ef,
    WebkitFilter: ef,
  },
  H1 = (e) => t4[e];
function W1(e, t) {
  let n = H1(e);
  return (
    n !== ef && (n = Qn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const n4 = new Set(["auto", "none", "0"]);
function r4(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !n4.has(s) && ao(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = W1(n, i);
}
class i4 extends Qh {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), $h(c))) {
        const d = B1(c, n.current);
        d !== void 0 && (t[l] = d),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !V1.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = Bg(i),
      a = Bg(s);
    if (o !== a)
      if (Dg(o) && Dg(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else vr[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || Q_(t[i])) && r.push(i);
    r.length && r4(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = vr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = r.length - 1,
      o = r[s];
    (r[s] = vr[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, c]) => {
          t.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function s4(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const $g = 30,
  o4 = (e) => !isNaN(parseFloat(e));
class a4 {
  constructor(t, n = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        var o, a;
        const s = nt.now();
        if (
          (this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((o = this.events.change) == null || o.notify(this.current),
            this.dependents))
        )
          for (const l of this.dependents) l.dirty();
        i &&
          ((a = this.events.renderRequest) == null || a.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = nt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = o4(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Fh());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            me.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = nt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > $g
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, $g);
    return c1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ei(e, t) {
  return new a4(e, t);
}
const q1 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  { schedule: Zh, cancel: eL } = b1(queueMicrotask, !1),
  _t = { x: !1, y: !1 };
function G1() {
  return _t.x || _t.y;
}
function l4(e) {
  return e === "x" || e === "y"
    ? _t[e]
      ? null
      : ((_t[e] = !0),
        () => {
          _t[e] = !1;
        })
    : _t.x || _t.y
    ? null
    : ((_t.x = _t.y = !0),
      () => {
        _t.x = _t.y = !1;
      });
}
function K1(e, t) {
  const n = s4(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Ug(e) {
  return !(e.pointerType === "touch" || G1());
}
function u4(e, t, n = {}) {
  const [r, i, s] = K1(e, n),
    o = (a) => {
      if (!Ug(a)) return;
      const { target: l } = a,
        c = t(l, a);
      if (typeof c != "function" || !l) return;
      const d = (f) => {
        Ug(f) && (c(f), l.removeEventListener("pointerleave", d));
      };
      l.addEventListener("pointerleave", d, i);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const Y1 = (e, t) => (t ? (e === t ? !0 : Y1(e, t.parentElement)) : !1),
  ep = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  c4 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function d4(e) {
  return c4.has(e.tagName) || e.tabIndex !== -1;
}
const Pa = new WeakSet();
function Hg(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function hc(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const f4 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Hg(() => {
    if (Pa.has(n)) return;
    hc(n, "down");
    const i = Hg(() => {
        hc(n, "up");
      }),
      s = () => hc(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Wg(e) {
  return ep(e) && !G1();
}
function h4(e, t, n = {}) {
  const [r, i, s] = K1(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!Wg(a)) return;
      Pa.add(l);
      const c = t(l, a),
        d = (y, v) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            Pa.has(l) && Pa.delete(l),
            Wg(y) && typeof c == "function" && c(y, { success: v });
        },
        f = (y) => {
          d(
            y,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              Y1(l, y.target)
          );
        },
        h = (y) => {
          d(y, !1);
        };
      window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i);
    };
  return (
    r.forEach((a) => {
      (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        z1(a) &&
          (a.addEventListener("focus", (c) => f4(c, i)),
          !d4(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
    }),
    s
  );
}
function Q1(e) {
  return l1(e) && "ownerSVGElement" in e;
}
function p4(e) {
  return Q1(e) && e.tagName === "svg";
}
const Be = (e) => !!(e && e.getVelocity),
  m4 = [...U1, Ie, Qn],
  g4 = (e) => m4.find($1(e)),
  X1 = b.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function y4(e = !0) {
  const t = b.useContext(Lh);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = b.useId();
  b.useEffect(() => {
    if (e) return i(s);
  }, [e]);
  const o = b.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const J1 = b.createContext({ strict: !1 }),
  qg = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ni = {};
for (const e in qg) Ni[e] = { isEnabled: (t) => qg[e].some((n) => !!t[n]) };
function v4(e) {
  for (const t in e) Ni[t] = { ...Ni[t], ...e[t] };
}
const x4 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Tl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    x4.has(e)
  );
}
let Z1 = (e) => !Tl(e);
function w4(e) {
  e && (Z1 = (t) => (t.startsWith("on") ? !Tl(t) : e(t)));
}
try {
  w4(require("@emotion/is-prop-valid").default);
} catch {}
function b4(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Z1(i) ||
        (n === !0 && Tl(i)) ||
        (!t && !Tl(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function S4(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const lu = b.createContext({});
function uu(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function lo(e) {
  return typeof e == "string" || Array.isArray(e);
}
const tp = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  np = ["initial", ...tp];
function cu(e) {
  return uu(e.animate) || np.some((t) => lo(e[t]));
}
function eb(e) {
  return !!(cu(e) || e.variants);
}
function j4(e, t) {
  if (cu(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || lo(n) ? n : void 0,
      animate: lo(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function T4(e) {
  const { initial: t, animate: n } = j4(e, b.useContext(lu));
  return b.useMemo(() => ({ initial: t, animate: n }), [Gg(t), Gg(n)]);
}
function Gg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const P4 = Symbol.for("motionComponentSymbol");
function Zr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function C4(e, t, n) {
  return b.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Zr(n) && (n.current = r));
    },
    [t]
  );
}
const rp = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  k4 = "framerAppearId",
  tb = "data-" + rp(k4),
  nb = b.createContext({});
function E4(e, t, n, r, i) {
  var x, w;
  const { visualElement: s } = b.useContext(lu),
    o = b.useContext(J1),
    a = b.useContext(Lh),
    l = b.useContext(X1).reducedMotion,
    c = b.useRef(null);
  (r = r || o.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const d = c.current,
    f = b.useContext(nb);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    N4(c.current, n, i, f);
  const h = b.useRef(!1);
  b.useInsertionEffect(() => {
    d && h.current && d.update(n, a);
  });
  const y = n[tb],
    v = b.useRef(
      !!y &&
        !((x = window.MotionHandoffIsComplete) != null && x.call(window, y)) &&
        ((w = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : w.call(window, y))
    );
  return (
    b3(() => {
      d &&
        ((h.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        Zh.render(d.render),
        v.current && d.animationState && d.animationState.animateChanges());
    }),
    b.useEffect(() => {
      d &&
        (!v.current && d.animationState && d.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) == null ||
              p.call(window, y);
          }),
          (v.current = !1)));
    }),
    d
  );
}
function N4(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
    layoutCrossfade: d,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : rb(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Zr(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function rb(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : rb(e.parent);
}
function _4({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && v4(e);
  function s(a, l) {
    let c;
    const d = { ...b.useContext(X1), ...a, layoutId: O4(a) },
      { isStatic: f } = d,
      h = T4(a),
      y = r(a, f);
    if (!f && Rh) {
      A4();
      const v = R4(d);
      (c = v.MeasureLayout),
        (h.visualElement = E4(i, y, d, t, v.ProjectionNode));
    }
    return u.jsxs(lu.Provider, {
      value: h,
      children: [
        c && h.visualElement
          ? u.jsx(c, { visualElement: h.visualElement, ...d })
          : null,
        n(i, a, C4(y, h.visualElement, l), y, f, h.visualElement),
      ],
    });
  }
  s.displayName = `motion.${
    typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`
  }`;
  const o = b.forwardRef(s);
  return (o[P4] = i), o;
}
function O4({ layoutId: e }) {
  const t = b.useContext(o1).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function A4(e, t) {
  b.useContext(J1).strict;
}
function R4(e) {
  const { drag: t, layout: n } = Ni;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const uo = {};
function L4(e) {
  for (const t in e) (uo[t] = e[t]), Vh(t) && (uo[t].isCSSVariable = !0);
}
function ib(e, { layout: t, layoutId: n }) {
  return (
    Bi.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!uo[e] || e === "opacity"))
  );
}
const M4 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  D4 = zi.length;
function I4(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < D4; s++) {
    const o = zi[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const c = q1(a, Jh[o]);
      if (!l) {
        i = !1;
        const d = M4[o] || o;
        r += `${d}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function ip(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (Bi.has(l)) {
      o = !0;
      continue;
    } else if (Vh(l)) {
      i[l] = c;
      continue;
    } else {
      const d = q1(c, Jh[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = d)) : (r[l] = d);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = I4(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: d = 0 } = s;
    r.transformOrigin = `${l} ${c} ${d}`;
  }
}
const sp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function sb(e, t, n) {
  for (const r in t) !Be(t[r]) && !ib(r, n) && (e[r] = t[r]);
}
function F4({ transformTemplate: e }, t) {
  return b.useMemo(() => {
    const n = sp();
    return ip(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function z4(e, t) {
  const n = e.style || {},
    r = {};
  return sb(r, n, e), Object.assign(r, F4(e, t)), r;
}
function B4(e, t) {
  const n = {},
    r = z4(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const V4 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  $4 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function U4(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? V4 : $4;
  e[s.offset] = U.transform(-r);
  const o = U.transform(t),
    a = U.transform(n);
  e[s.array] = `${o} ${a}`;
}
function ob(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...a
  },
  l,
  c,
  d
) {
  if ((ip(e, a, c), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: h } = e;
  f.transform && ((h.transform = f.transform), delete f.transform),
    (h.transform || f.transformOrigin) &&
      ((h.transformOrigin = f.transformOrigin ?? "50% 50%"),
      delete f.transformOrigin),
    h.transform &&
      ((h.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box"),
      delete f.transformBox),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && U4(f, i, s, o, !1);
}
const ab = () => ({ ...sp(), attrs: {} }),
  lb = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function H4(e, t, n, r) {
  const i = b.useMemo(() => {
    const s = ab();
    return (
      ob(s, t, lb(r), e.transformTemplate, e.style),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    sb(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
const W4 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function op(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(W4.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function q4(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (op(n) ? H4 : B4)(r, s, o, n),
      c = b4(r, typeof n == "string", e),
      d = n !== b.Fragment ? { ...c, ...l, ref: i } : {},
      { children: f } = r,
      h = b.useMemo(() => (Be(f) ? f.get() : f), [f]);
    return b.createElement(n, { ...d, children: h });
  };
}
function Kg(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function ap(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Kg(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Kg(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function Ca(e) {
  return Be(e) ? e.get() : e;
}
function G4({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: K4(n, r, i, e), renderState: t() };
}
const ub = (e) => (t, n) => {
  const r = b.useContext(lu),
    i = b.useContext(Lh),
    s = () => G4(e, t, r, i);
  return n ? s() : w3(s);
};
function K4(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = Ca(s[h]);
  let { initial: o, animate: a } = e;
  const l = cu(e),
    c = eb(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const f = d ? a : o;
  if (f && typeof f != "boolean" && !uu(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let y = 0; y < h.length; y++) {
      const v = ap(e, h[y]);
      if (v) {
        const { transitionEnd: x, transition: w, ...p } = v;
        for (const m in p) {
          let g = p[m];
          if (Array.isArray(g)) {
            const S = d ? g.length - 1 : 0;
            g = g[S];
          }
          g !== null && (i[m] = g);
        }
        for (const m in x) i[m] = x[m];
      }
    }
  }
  return i;
}
function lp(e, t, n) {
  var s;
  const { style: r } = e,
    i = {};
  for (const o in r)
    (Be(r[o]) ||
      (t.style && Be(t.style[o])) ||
      ib(o, e) ||
      ((s = n == null ? void 0 : n.getValue(o)) == null
        ? void 0
        : s.liveStyle) !== void 0) &&
      (i[o] = r[o]);
  return i;
}
const Y4 = {
  useVisualState: ub({
    scrapeMotionValuesFromProps: lp,
    createRenderState: sp,
  }),
};
function cb(e, t, n) {
  const r = lp(e, t, n);
  for (const i in e)
    if (Be(e[i]) || Be(t[i])) {
      const s =
        zi.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
const Q4 = {
  useVisualState: ub({
    scrapeMotionValuesFromProps: cb,
    createRenderState: ab,
  }),
};
function X4(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(op(r) ? Q4 : Y4),
      preloadedFeatures: e,
      useRender: q4(i),
      createVisualElement: t,
      Component: r,
    };
    return _4(o);
  };
}
function co(e, t, n) {
  const r = e.getProps();
  return ap(r, t, n !== void 0 ? n : r.custom, e);
}
const tf = (e) => Array.isArray(e);
function J4(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ei(n));
}
function Z4(e) {
  return tf(e) ? e[e.length - 1] || 0 : e;
}
function eO(e, t) {
  const n = co(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = Z4(s[o]);
    J4(e, o, a);
  }
}
function tO(e) {
  return !!(Be(e) && e.add);
}
function nf(e, t) {
  const n = e.getValue("willChange");
  if (tO(n)) return n.add(t);
  if (!n && wn.WillChange) {
    const r = new wn.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function db(e) {
  return e.props[tb];
}
const nO = (e) => e !== null;
function rO(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(nO),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const iO = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  sO = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  oO = { type: "keyframes", duration: 0.8 },
  aO = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  lO = (e, { keyframes: t }) =>
    t.length > 2
      ? oO
      : Bi.has(e)
      ? e.startsWith("scale")
        ? sO(t[1])
        : iO
      : aO;
function uO({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...d
}) {
  return !!Object.keys(d).length;
}
const up =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = Xh(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - Qt(l);
    const d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (h) => {
        t.set(h), a.onUpdate && a.onUpdate(h);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    uO(a) || Object.assign(d, lO(e, d)),
      d.duration && (d.duration = Qt(d.duration)),
      d.repeatDelay && (d.repeatDelay = Qt(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (f = !0)),
      (wn.instantAnimations || wn.skipAnimations) &&
        ((f = !0), (d.duration = 0), (d.delay = 0)),
      (d.allowFlatten = !a.type && !a.ease),
      f && !s && t.get() !== void 0)
    ) {
      const h = rO(d.keyframes, a);
      if (h !== void 0) {
        me.update(() => {
          d.onUpdate(h), d.onComplete();
        });
        return;
      }
    }
    return a.isSync ? new Yh(d) : new q_(d);
  };
function cO({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function fb(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s = e.getDefaultTransition(), transitionEnd: o, ...a } = t;
  r && (s = r);
  const l = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in a) {
    const f = e.getValue(d, e.latestValues[d] ?? null),
      h = a[d];
    if (h === void 0 || (c && cO(c, d))) continue;
    const y = { delay: n, ...Xh(s || {}, d) },
      v = f.get();
    if (
      v !== void 0 &&
      !f.isAnimating &&
      !Array.isArray(h) &&
      h === v &&
      !y.velocity
    )
      continue;
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const p = db(e);
      if (p) {
        const m = window.MotionHandoffAnimation(p, d, me);
        m !== null && ((y.startTime = m), (x = !0));
      }
    }
    nf(e, d),
      f.start(
        up(d, f, h, e.shouldReduceMotion && V1.has(d) ? { type: !1 } : y, e, x)
      );
    const w = f.animation;
    w && l.push(w);
  }
  return (
    o &&
      Promise.all(l).then(() => {
        me.update(() => {
          o && eO(e, o);
        });
      }),
    l
  );
}
function rf(e, t, n = {}) {
  var l;
  const r = co(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(fb(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = i;
            return dO(e, t, d + c, f, h, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [c, d] = a === "beforeChildren" ? [s, o] : [o, s];
    return c().then(() => d());
  } else return Promise.all([s(), o(n.delay)]);
}
function dO(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(fO)
      .forEach((c, d) => {
        c.notify("AnimationStart", t),
          o.push(
            rf(c, t, { ...s, delay: n + l(d) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function fO(e, t) {
  return e.sortNodePosition(t);
}
function hO(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => rf(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = rf(e, t, n);
  else {
    const i = typeof t == "function" ? co(e, t, n.custom) : t;
    r = Promise.all(fb(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function hb(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const pO = np.length;
function pb(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? pb(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < pO; n++) {
    const r = np[n],
      i = e.props[r];
    (lo(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const mO = [...tp].reverse(),
  gO = tp.length;
function yO(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => hO(e, n, r)));
}
function vO(e) {
  let t = yO(e),
    n = Yg(),
    r = !0;
  const i = (l) => (c, d) => {
    var h;
    const f = co(
      e,
      d,
      l === "exit"
        ? (h = e.presenceContext) == null
          ? void 0
          : h.custom
        : void 0
    );
    if (f) {
      const { transition: y, transitionEnd: v, ...x } = f;
      c = { ...c, ...x, ...v };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: c } = e,
      d = pb(e.parent) || {},
      f = [],
      h = new Set();
    let y = {},
      v = 1 / 0;
    for (let w = 0; w < gO; w++) {
      const p = mO[w],
        m = n[p],
        g = c[p] !== void 0 ? c[p] : d[p],
        S = lo(g),
        j = p === l ? m.isActive : null;
      j === !1 && (v = w);
      let T = g === d[p] && g !== c[p] && S;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (m.protectedKeys = { ...y }),
        (!m.isActive && j === null) ||
          (!g && !m.prevProp) ||
          uu(g) ||
          typeof g == "boolean")
      )
        continue;
      const k = xO(m.prevProp, g);
      let N = k || (p === l && m.isActive && !T && S) || (w > v && S),
        P = !1;
      const E = Array.isArray(g) ? g : [g];
      let L = E.reduce(i(p), {});
      j === !1 && (L = {});
      const { prevResolvedValues: D = {} } = m,
        I = { ...D, ...L },
        B = (J) => {
          (N = !0),
            h.has(J) && ((P = !0), h.delete(J)),
            (m.needsAnimating[J] = !0);
          const A = e.getValue(J);
          A && (A.liveStyle = !1);
        };
      for (const J in I) {
        const A = L[J],
          F = D[J];
        if (y.hasOwnProperty(J)) continue;
        let $ = !1;
        tf(A) && tf(F) ? ($ = !hb(A, F)) : ($ = A !== F),
          $
            ? A != null
              ? B(J)
              : h.add(J)
            : A !== void 0 && h.has(J)
            ? B(J)
            : (m.protectedKeys[J] = !0);
      }
      (m.prevProp = g),
        (m.prevResolvedValues = L),
        m.isActive && (y = { ...y, ...L }),
        r && e.blockInitialAnimation && (N = !1),
        N &&
          (!(T && k) || P) &&
          f.push(...E.map((J) => ({ animation: J, options: { type: p } })));
    }
    if (h.size) {
      const w = {};
      if (typeof c.initial != "boolean") {
        const p = co(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        p && p.transition && (w.transition = p.transition);
      }
      h.forEach((p) => {
        const m = e.getBaseTarget(p),
          g = e.getValue(p);
        g && (g.liveStyle = !0), (w[p] = m ?? null);
      }),
        f.push({ animation: w });
    }
    let x = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var f;
    if (n[l].isActive === c) return Promise.resolve();
    (f = e.variantChildren) == null ||
      f.forEach((h) => {
        var y;
        return (y = h.animationState) == null ? void 0 : y.setActive(l, c);
      }),
      (n[l].isActive = c);
    const d = o(l);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = Yg()), (r = !0);
    },
  };
}
function xO(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !hb(t, e) : !1;
}
function rr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Yg() {
  return {
    animate: rr(!0),
    whileInView: rr(),
    whileHover: rr(),
    whileTap: rr(),
    whileDrag: rr(),
    whileFocus: rr(),
    exit: rr(),
  };
}
class tr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class wO extends tr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = vO(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    uu(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let bO = 0;
class SO extends tr {
  constructor() {
    super(...arguments), (this.id = bO++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const jO = { animation: { Feature: wO }, exit: { Feature: SO } };
function fo(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function No(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const TO = (e) => (t) => ep(t) && e(t, No(t));
function ks(e, t, n, r) {
  return fo(e, t, TO(n), r);
}
function mb({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function PO({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function CO(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
const gb = 1e-4,
  kO = 1 - gb,
  EO = 1 + gb,
  yb = 0.01,
  NO = 0 - yb,
  _O = 0 + yb;
function We(e) {
  return e.max - e.min;
}
function OO(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Qg(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = fe(t.min, t.max, e.origin)),
    (e.scale = We(n) / We(t)),
    (e.translate = fe(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= kO && e.scale <= EO) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= NO && e.translate <= _O) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Es(e, t, n, r) {
  Qg(e.x, t.x, n.x, r ? r.originX : void 0),
    Qg(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Xg(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + We(t));
}
function AO(e, t, n) {
  Xg(e.x, t.x, n.x), Xg(e.y, t.y, n.y);
}
function Jg(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + We(t));
}
function Ns(e, t, n) {
  Jg(e.x, t.x, n.x), Jg(e.y, t.y, n.y);
}
const Zg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ei = () => ({ x: Zg(), y: Zg() }),
  ey = () => ({ min: 0, max: 0 }),
  we = () => ({ x: ey(), y: ey() });
function vt(e) {
  return [e("x"), e("y")];
}
function pc(e) {
  return e === void 0 || e === 1;
}
function sf({ scale: e, scaleX: t, scaleY: n }) {
  return !pc(e) || !pc(t) || !pc(n);
}
function or(e) {
  return (
    sf(e) ||
    vb(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function vb(e) {
  return ty(e.x) || ty(e.y);
}
function ty(e) {
  return e && e !== "0%";
}
function Pl(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function ny(e, t, n, r, i) {
  return i !== void 0 && (e = Pl(e, i, r)), Pl(e, n, r) + t;
}
function of(e, t = 0, n = 1, r, i) {
  (e.min = ny(e.min, t, n, r, i)), (e.max = ny(e.max, t, n, r, i));
}
function xb(e, { x: t, y: n }) {
  of(e.x, t.translate, t.scale, t.originPoint),
    of(e.y, n.translate, n.scale, n.originPoint);
}
const ry = 0.999999999999,
  iy = 1.0000000000001;
function RO(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        ni(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), xb(e, o)),
      r && or(s.latestValues) && ni(e, s.latestValues));
  }
  t.x < iy && t.x > ry && (t.x = 1), t.y < iy && t.y > ry && (t.y = 1);
}
function ti(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function sy(e, t, n, r, i = 0.5) {
  const s = fe(e.min, e.max, i);
  of(e, t, n, s, r);
}
function ni(e, t) {
  sy(e.x, t.x, t.scaleX, t.scale, t.originX),
    sy(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function wb(e, t) {
  return mb(CO(e.getBoundingClientRect(), t));
}
function LO(e, t, n) {
  const r = wb(e, n),
    { scroll: i } = t;
  return i && (ti(r.x, i.offset.x), ti(r.y, i.offset.y)), r;
}
const bb = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  oy = (e, t) => Math.abs(e - t);
function MO(e, t) {
  const n = oy(e.x, t.x),
    r = oy(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Sb {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = gc(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          y = MO(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !y) return;
        const { point: v } = f,
          { timestamp: x } = Oe;
        this.history.push({ ...v, timestamp: x });
        const { onStart: w, onMove: p } = this.handlers;
        h ||
          (w && w(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, h) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = mc(h, this.transformPagePoint)),
          me.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: y, onSessionEnd: v, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = gc(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : mc(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(f, w), v && v(f, w);
      }),
      !ep(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = No(t),
      a = mc(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = Oe;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, gc(a, this.history)),
      (this.removeListeners = Co(
        ks(this.contextWindow, "pointermove", this.handlePointerMove),
        ks(this.contextWindow, "pointerup", this.handlePointerUp),
        ks(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Yn(this.updatePoint);
  }
}
function mc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ay(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function gc({ point: e }, t) {
  return {
    point: e,
    delta: ay(e, jb(t)),
    offset: ay(e, DO(t)),
    velocity: IO(t, 0.1),
  };
}
function DO(e) {
  return e[0];
}
function jb(e) {
  return e[e.length - 1];
}
function IO(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = jb(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Qt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = Xt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function FO(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? fe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function ly(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function zO(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: ly(e.x, n, i), y: ly(e.y, t, r) };
}
function uy(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function BO(e, t) {
  return { x: uy(e.x, t.x), y: uy(e.y, t.y) };
}
function VO(e, t) {
  let n = 0.5;
  const r = We(e),
    i = We(t);
  return (
    i > r
      ? (n = so(t.min, t.max - r, e.min))
      : r > i && (n = so(e.min, e.max - i, t.min)),
    xn(0, 1, n)
  );
}
function $O(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const af = 0.35;
function UO(e = af) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = af),
    { x: cy(e, "left", "right"), y: cy(e, "top", "bottom") }
  );
}
function cy(e, t, n) {
  return { min: dy(e, t), max: dy(e, n) };
}
function dy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const HO = new WeakMap();
class WO {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = we()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(No(d).point);
      },
      s = (d, f) => {
        const { drag: h, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          h &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = l4(h)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          vt((w) => {
            let p = this.getAxisMotionValue(w).get() || 0;
            if (Jt.test(p)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const g = m.layout.layoutBox[w];
                g && (p = We(g) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[w] = p;
          }),
          v && me.postRender(() => v(d, f)),
          nf(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (d, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: x,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: w } = f;
        if (y && this.currentDirection === null) {
          (this.currentDirection = qO(w)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, w),
          this.updateAxis("y", f.point, w),
          this.visualElement.render(),
          x && x(d, f);
      },
      a = (d, f) => this.stop(d, f),
      l = () =>
        vt((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) == null
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Sb(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: bb(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && me.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !ia(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = FO(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (s = this.visualElement.projection) == null
          ? void 0
          : s.layout,
      i = this.constraints;
    t && Zr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = zO(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = UO(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        vt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = $O(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Zr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = LO(r, i.root, this.visualElement.getTransformPagePoint());
    let o = BO(i.layout.layoutBox, s);
    if (n) {
      const a = n(PO(o));
      (this.hasMutatedConstraints = !!a), a && (o = mb(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = vt((d) => {
        if (!ia(d, n, this.currentDirection)) return;
        let f = (l && l[d]) || {};
        o && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(d, v);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      nf(this.visualElement, t), r.start(up(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    vt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    vt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    vt((n) => {
      const { drag: r } = this.getProps();
      if (!ia(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - fe(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Zr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    vt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = VO({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      vt((o) => {
        if (!ia(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(fe(l, c, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    HO.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ks(t, "pointerdown", (l) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Zr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      me.read(r);
    const o = fo(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (vt((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += l[d].translate),
                f.set(f.get() + l[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = af,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function ia(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function qO(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class GO extends tr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ct),
      (this.removeListeners = Ct),
      (this.controls = new WO(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ct);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const fy = (e) => (t, n) => {
  e && me.postRender(() => e(t, n));
};
class KO extends tr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ct);
  }
  onPointerDown(t) {
    this.session = new Sb(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: bb(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: fy(t),
      onStart: fy(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && me.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ks(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ka = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function hy(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const rs = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (U.test(e)) e = parseFloat(e);
        else return e;
      const n = hy(e, t.target.x),
        r = hy(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  YO = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Qn.parse(e);
      if (i.length > 5) return r;
      const s = Qn.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const c = fe(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
      );
    },
  };
class QO extends b.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    L4(XO),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ka.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              me.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Zh.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Tb(e) {
  const [t, n] = y4(),
    r = b.useContext(o1);
  return u.jsx(QO, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: b.useContext(nb),
    isPresent: t,
    safeToRemove: n,
  });
}
const XO = {
  borderRadius: {
    ...rs,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: rs,
  borderTopRightRadius: rs,
  borderBottomLeftRadius: rs,
  borderBottomRightRadius: rs,
  boxShadow: YO,
};
function JO(e, t, n) {
  const r = Be(e) ? e : Ei(e);
  return r.start(up("", r, t, n)), r.animation;
}
const ZO = (e, t) => e.depth - t.depth;
class eA {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Mh(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Dh(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(ZO),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function tA(e, t) {
  const n = nt.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Yn(r), e(s - t));
    };
  return me.setup(r, !0), () => Yn(r);
}
const Pb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  nA = Pb.length,
  py = (e) => (typeof e == "string" ? parseFloat(e) : e),
  my = (e) => typeof e == "number" || U.test(e);
function rA(e, t, n, r, i, s) {
  i
    ? ((e.opacity = fe(0, n.opacity ?? 1, iA(r))),
      (e.opacityExit = fe(t.opacity ?? 1, 0, sA(r))))
    : s && (e.opacity = fe(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < nA; o++) {
    const a = `border${Pb[o]}Radius`;
    let l = gy(t, a),
      c = gy(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || my(l) === my(c)
        ? ((e[a] = Math.max(fe(py(l), py(c), r), 0)),
          (Jt.test(c) || Jt.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r));
}
function gy(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const iA = Cb(0, 0.5, y1),
  sA = Cb(0.5, 0.95, Ct);
function Cb(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(so(e, t, r)));
}
function yy(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function yt(e, t) {
  yy(e.x, t.x), yy(e.y, t.y);
}
function vy(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function xy(e, t, n, r, i) {
  return (
    (e -= t), (e = Pl(e, 1 / n, r)), i !== void 0 && (e = Pl(e, 1 / i, r)), e
  );
}
function oA(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (Jt.test(t) &&
      ((t = parseFloat(t)), (t = fe(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = fe(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = xy(e.min, t, n, a, i)),
    (e.max = xy(e.max, t, n, a, i));
}
function wy(e, t, [n, r, i], s, o) {
  oA(e, t[n], t[r], t[i], t.scale, s, o);
}
const aA = ["x", "scaleX", "originX"],
  lA = ["y", "scaleY", "originY"];
function by(e, t, n, r) {
  wy(e.x, t, aA, n ? n.x : void 0, r ? r.x : void 0),
    wy(e.y, t, lA, n ? n.y : void 0, r ? r.y : void 0);
}
function Sy(e) {
  return e.translate === 0 && e.scale === 1;
}
function kb(e) {
  return Sy(e.x) && Sy(e.y);
}
function jy(e, t) {
  return e.min === t.min && e.max === t.max;
}
function uA(e, t) {
  return jy(e.x, t.x) && jy(e.y, t.y);
}
function Ty(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Eb(e, t) {
  return Ty(e.x, t.x) && Ty(e.y, t.y);
}
function Py(e) {
  return We(e.x) / We(e.y);
}
function Cy(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class cA {
  constructor() {
    this.members = [];
  }
  add(t) {
    Mh(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Dh(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function dA(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: d,
      rotateX: f,
      rotateY: h,
      skewX: y,
      skewY: v,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const yc = ["", "X", "Y", "Z"],
  fA = { visibility: "hidden" },
  hA = 1e3;
let pA = 0;
function vc(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Nb(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = db(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", me, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Nb(r);
}
function _b({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = pA++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(yA),
            this.nodes.forEach(SA),
            this.nodes.forEach(jA),
            this.nodes.forEach(vA);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new eA());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Fh()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      (this.isSVG = Q1(o) && !p4(o)), (this.instance = o);
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = tA(f, 250)),
            ka.hasAnimatedSinceResize &&
              ((ka.hasAnimatedSinceResize = !1), this.nodes.forEach(Ey));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: h,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || EA,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: w } =
                  c.getProps(),
                p = !this.targetLayout || !Eb(this.targetLayout, y),
                m = !f && h;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                m ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, m);
                const g = { ...Xh(v, "layout"), onPlay: x, onComplete: w };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((g.delay = 0), (g.type = !1)),
                  this.startAnimation(g);
              } else
                f || Ey(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Yn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(TA),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Nb(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ky);
        return;
      }
      this.isUpdating || this.nodes.forEach(wA),
        (this.isUpdating = !1),
        this.nodes.forEach(bA),
        this.nodes.forEach(mA),
        this.nodes.forEach(gA),
        this.clearAllSnapshots();
      const a = nt.now();
      (Oe.delta = xn(0, 1e3 / 60, a - Oe.timestamp)),
        (Oe.timestamp = a),
        (Oe.isProcessing = !0),
        lc.update.process(Oe),
        lc.preRender.process(Oe),
        lc.render.process(Oe),
        (Oe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Zh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(xA), this.sharedNodes.forEach(PA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        me.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      me.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !We(this.snapshot.measuredBox.x) &&
          !We(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = we()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !kb(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || or(this.latestValues) || d) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        NA(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: o } = this.options;
      if (!o) return we();
      const a = o.measureViewportBox();
      if (
        !(
          ((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(_A)
        )
      ) {
        const { scroll: d } = this.root;
        d && (ti(a.x, d.offset.x), ti(a.y, d.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = we();
      if ((yt(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c],
          { scroll: f, options: h } = d;
        d !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && yt(a, o), ti(a.x, f.offset.x), ti(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = we();
      yt(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        !a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          ni(l, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          or(d.latestValues) && ni(l, d.latestValues);
      }
      return or(this.latestValues) && ni(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = we();
      yt(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !or(c.latestValues)) continue;
        sf(c.latestValues) && c.updateSnapshot();
        const d = we(),
          f = c.measurePageBox();
        yt(d, f),
          by(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d);
      }
      return or(this.latestValues) && by(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Oe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var h;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Oe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = we()),
              (this.relativeTargetOrigin = we()),
              Ns(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              yt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = we()), (this.targetWithTransforms = we())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              AO(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : yt(this.target, this.layout.layoutBox),
              xb(this.target, this.targetDelta))
            : yt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const y = this.getClosestProjectingParent();
          y &&
          !!y.resumingFrom == !!this.resumingFrom &&
          !y.options.layoutScroll &&
          y.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = we()),
              (this.relativeTargetOrigin = we()),
              Ns(this.relativeTargetOrigin, this.target, y.target),
              yt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          sf(this.parent.latestValues) ||
          vb(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var v;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Oe.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      yt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      RO(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = we()));
      const { target: y } = o;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (vy(this.prevProjectionDelta.x, this.projectionDelta.x),
          vy(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Es(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== h ||
          !Cy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Cy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ei()),
        (this.projectionDelta = ei()),
        (this.projectionDeltaWithTransform = ei());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        d = { ...this.latestValues },
        f = ei();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = we(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = y !== v,
        w = this.getStack(),
        p = !w || w.members.length <= 1,
        m = !!(x && !p && this.options.crossfade === !0 && !this.path.some(kA));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (S) => {
        const j = S / 1e3;
        Ny(f.x, o.x, j),
          Ny(f.y, o.y, j),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ns(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            CA(this.relativeTarget, this.relativeTargetOrigin, h, j),
            g && uA(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = we()),
            yt(g, this.relativeTarget)),
          x &&
            ((this.animationValues = d), rA(d, c, this.latestValues, j, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = j);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      var a, l, c;
      this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(!1),
        (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || c.stop(!1),
        this.pendingAnimation &&
          (Yn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = me.update(() => {
          (ka.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Ei(0)),
            (this.currentAnimation = JO(this.motionValue, [0, 1e3], {
              ...o,
              isSync: !0,
              onUpdate: (d) => {
                this.mixTargetDelta(d), o.onUpdate && o.onUpdate(d);
              },
              onStop: () => {},
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(hA),
        this.currentAnimation.stop(!1)),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: d,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          Ob(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || we();
          const f = We(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + f);
          const h = We(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + h);
        }
        yt(a, l),
          ni(a, d),
          Es(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new cA()),
        this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && vc("z", o, c, this.animationValues);
      for (let d = 0; d < yc.length; d++)
        vc(`rotate${yc[d]}`, o, c, this.animationValues),
          vc(`skew${yc[d]}`, o, c, this.animationValues);
      o.render();
      for (const d in c)
        o.setStaticValue(d, c[d]),
          this.animationValues && (this.animationValues[d] = c[d]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return fA;
      const a = { visibility: "" },
        l = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (a.opacity = ""),
          (a.pointerEvents = Ca(o == null ? void 0 : o.pointerEvents) || ""),
          (a.transform = l ? l(this.latestValues, "") : "none"),
          a
        );
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = Ca(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !or(this.latestValues) &&
            ((y.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const d = c.animationValues || c.latestValues;
      this.applyTransformsToTarget(),
        (a.transform = dA(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        l && (a.transform = l(d, a.transform));
      const { x: f, y: h } = this.projectionDelta;
      (a.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
        c.animationValues
          ? (a.opacity =
              c === this
                ? d.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (a.opacity =
              c === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const y in uo) {
        if (d[y] === void 0) continue;
        const { correct: v, applyTo: x, isCSSVariable: w } = uo[y],
          p = a.transform === "none" ? d[y] : v(d[y], c);
        if (x) {
          const m = x.length;
          for (let g = 0; g < m; g++) a[x[g]] = p;
        } else
          w ? (this.options.visualElement.renderState.vars[y] = p) : (a[y] = p);
      }
      return (
        this.options.layoutId &&
          (a.pointerEvents =
            c === this
              ? Ca(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        a
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop(!1);
      }),
        this.root.nodes.forEach(ky),
        this.root.sharedNodes.clear();
    }
  };
}
function mA(e) {
  e.updateLayout();
}
function gA(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = t.source !== e.layout.source;
    s === "size"
      ? vt((f) => {
          const h = o ? t.measuredBox[f] : t.layoutBox[f],
            y = We(h);
          (h.min = r[f].min), (h.max = h.min + y);
        })
      : Ob(s, t.layoutBox, r) &&
        vt((f) => {
          const h = o ? t.measuredBox[f] : t.layoutBox[f],
            y = We(r[f]);
          (h.max = h.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + y));
        });
    const a = ei();
    Es(a, r, t.layoutBox);
    const l = ei();
    o ? Es(l, e.applyTransform(i, !0), t.measuredBox) : Es(l, r, t.layoutBox);
    const c = !kb(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: y } = f;
        if (h && y) {
          const v = we();
          Ns(v, t.layoutBox, h.layoutBox);
          const x = we();
          Ns(x, r, y.layoutBox),
            Eb(v, x) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function yA(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function vA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function xA(e) {
  e.clearSnapshot();
}
function ky(e) {
  e.clearMeasurements();
}
function wA(e) {
  e.isLayoutDirty = !1;
}
function bA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Ey(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function SA(e) {
  e.resolveTargetDelta();
}
function jA(e) {
  e.calcProjection();
}
function TA(e) {
  e.resetSkewAndRotation();
}
function PA(e) {
  e.removeLeadSnapshot();
}
function Ny(e, t, n) {
  (e.translate = fe(t.translate, 0, n)),
    (e.scale = fe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function _y(e, t, n, r) {
  (e.min = fe(t.min, n.min, r)), (e.max = fe(t.max, n.max, r));
}
function CA(e, t, n, r) {
  _y(e.x, t.x, n.x, r), _y(e.y, t.y, n.y, r);
}
function kA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const EA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Oy = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Ay = Oy("applewebkit/") && !Oy("chrome/") ? Math.round : Ct;
function Ry(e) {
  (e.min = Ay(e.min)), (e.max = Ay(e.max));
}
function NA(e) {
  Ry(e.x), Ry(e.y);
}
function Ob(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !OO(Py(t), Py(n), 0.2))
  );
}
function _A(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const OA = _b({
    attachResizeListener: (e, t) => fo(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  xc = { current: void 0 },
  Ab = _b({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!xc.current) {
        const e = new OA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (xc.current = e);
      }
      return xc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  AA = {
    pan: { Feature: KO },
    drag: { Feature: GO, ProjectionNode: Ab, MeasureLayout: Tb },
  };
function Ly(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && me.postRender(() => s(t, No(t)));
}
class RA extends tr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = u4(
        t,
        (n, r) => (Ly(this.node, r, "Start"), (i) => Ly(this.node, i, "End"))
      ));
  }
  unmount() {}
}
class LA extends tr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Co(
      fo(this.node.current, "focus", () => this.onFocus()),
      fo(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function My(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && me.postRender(() => s(t, No(t)));
}
class MA extends tr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = h4(
        t,
        (n, r) => (
          My(this.node, r, "Start"),
          (i, { success: s }) => My(this.node, i, s ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const lf = new WeakMap(),
  wc = new WeakMap(),
  DA = (e) => {
    const t = lf.get(e.target);
    t && t(e);
  },
  IA = (e) => {
    e.forEach(DA);
  };
function FA({ root: e, ...t }) {
  const n = e || document;
  wc.has(n) || wc.set(n, {});
  const r = wc.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(IA, { root: e, ...t })), r[i];
}
function zA(e, t, n) {
  const r = FA(t);
  return (
    lf.set(e, n),
    r.observe(e),
    () => {
      lf.delete(e), r.unobserve(e);
    }
  );
}
const BA = { some: 0, all: 1 };
class VA extends tr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : BA[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = c ? d : f;
        h && h(l);
      };
    return zA(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some($A(t, n)) && this.startObserver();
  }
  unmount() {}
}
function $A({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const UA = {
    inView: { Feature: VA },
    tap: { Feature: MA },
    focus: { Feature: LA },
    hover: { Feature: RA },
  },
  HA = { layout: { ProjectionNode: Ab, MeasureLayout: Tb } },
  uf = { current: null },
  Rb = { current: !1 };
function WA() {
  if (((Rb.current = !0), !!Rh))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (uf.current = e.matches);
      e.addListener(t), t();
    } else uf.current = !1;
}
const qA = new WeakMap();
function GA(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (Be(i)) e.addValue(r, i);
    else if (Be(s)) e.addValue(r, Ei(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Ei(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Dy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class KA {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Qh),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = nt.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), me.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = cu(n)),
      (this.isVariantNode = eb(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in f) {
      const y = f[h];
      l[h] !== void 0 && Be(y) && y.set(l[h], !1);
    }
  }
  mount(t) {
    (this.current = t),
      qA.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Rb.current || WA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : uf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Yn(this.notifyUpdate),
      Yn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Bi.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && me.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ni) {
      const n = Ni[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : we();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Dy.length; r++) {
      const i = Dy[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = GA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ei(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
        (typeof r == "string" && (a1(r) || u1(r))
          ? (r = parseFloat(r))
          : !g4(r) && Qn.test(n) && (r = W1(t, n)),
        this.setBaseTarget(t, Be(r) ? r.get() : r)),
      Be(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = ap(
        this.props,
        n,
        (s = this.presenceContext) == null ? void 0 : s.custom
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Be(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Fh()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Lb extends KA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = i4);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Be(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Mb(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
function YA(e) {
  return window.getComputedStyle(e);
}
class QA extends Lb {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Mb);
  }
  readValueFromInstance(t, n) {
    var r;
    if (Bi.has(n))
      return (r = this.projection) != null && r.isProjecting ? Yd(n) : j_(t, n);
    {
      const i = YA(t),
        s = (Vh(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return wb(t, n);
  }
  build(t, n, r) {
    ip(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return lp(t, n, r);
  }
}
const Db = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function XA(e, t, n, r) {
  Mb(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Db.has(i) ? i : rp(i), t.attrs[i]);
}
class JA extends Lb {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = we);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Bi.has(n)) {
      const r = H1(n);
      return (r && r.default) || 0;
    }
    return (n = Db.has(n) ? n : rp(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return cb(t, n, r);
  }
  build(t, n, r) {
    ob(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    XA(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = lb(t.tagName)), super.mount(t);
  }
}
const ZA = (e, t) =>
    op(e) ? new JA(t) : new QA(t, { allowProjection: e !== b.Fragment }),
  eR = X4({ ...jO, ...UA, ...AA, ...HA }, ZA),
  Cl = S4(eR),
  Iy = ({ onFinish: e }) => (
    b.useEffect(() => {
      const t = setTimeout(() => {
        e();
      }, 1e3);
      return () => clearTimeout(t);
    }, [e]),
    u.jsx(Cl.div, {
      initial: { x: "-150%", y: "-150%" },
      animate: { x: "150%", y: "150%" },
      transition: { duration: 2, ease: "easeInOut" },
      className:
        "absolute top-0 left-0 w-full h-full overflow-hidden z-10 pointer-events-none",
      children: u.jsx("div", {
        className: "absolute top-0 left-0 w-full h-full",
        style: {
          background:
            "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          width: "100%",
          height: "100%",
          transform: "skewX(-20deg)",
        },
      }),
    })
  ),
  tR = ({ isVisible: e, fadeIn: t }) => {
    const [n, r] = b.useState(0),
      [i, s] = b.useState(!1),
      [o, a] = b.useState(!1),
      l = t
        ? {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 40 },
            transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
          }
        : { initial: { opacity: 0, y: 40 }, animate: { opacity: 0, y: 40 } };
    return (
      b.useEffect(() => {
        if (!e) return;
        let c = 0;
        const d = 96,
          f = 1500,
          h = 15,
          y = f / h,
          v = d / y,
          x = setInterval(() => {
            (c += v), c >= d && ((c = d), clearInterval(x)), r(Math.round(c));
          }, h);
        return () => clearInterval(x);
      }, [e]),
      b.useEffect(() => {
        if (e && t) {
          const c = setTimeout(() => s(!0), 800),
            d = setTimeout(() => a(!0), 2e3);
          return () => {
            clearTimeout(c), clearTimeout(d);
          };
        }
      }, [e, t]),
      u.jsx("section", {
        className: "text-white h-full relative",
        children: u.jsxs("div", {
          className: "relative h-full",
          children: [
            u.jsx("div", {
              className: "absolute inset-0 -z-10",
              children: u.jsx("img", {
                src: "/stars.svg",
                alt: "stars background",
                className: "w-full h-full object-cover",
              }),
            }),
            u.jsxs("div", {
              className:
                "relative z-20 w-screen mx-auto px-4 lg:px-20 flex flex-col items-center",
              children: [
                u.jsxs("div", {
                  className: "w-full",
                  children: [
                    u.jsx("h2", {
                      className:
                        "text-4xl sm:text-5xl lg:text-6xl text-center bg-gradient-to-b from-white to-[#83DBC9] bg-clip-text text-transparent font-clashSemiBold mt-10 lg:mt-8 mb-4",
                      children: "Pulse Scout App",
                    }),
                    u.jsx("p", {
                      className:
                        "text-transparent bg-clip-text bg-gradient-to-b from-white to-[#02C394] text-center text-lg lg:text-2xl italic",
                      children: "Simple Streams. Real impact. Smarter cities.",
                    }),
                    u.jsxs("p", {
                      className:
                        "mt-4 text-center text-lg lg:text-base font-clash",
                      children: [
                        "Simply stream dashcam footage (1080p or higher) through our app to earn rewards while helping build better ",
                        u.jsx("br", {}),
                        "maps and smarter cities. Lightweight, low-power and powered by AI.",
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className:
                    "relative w-full lg:w-[750px] h-[400px] lg:h-[700px]",
                  children: [
                    u.jsx("img", {
                      src: "/circle.svg",
                      alt: "glowing circle",
                      className:
                        "mt-4 lg:w-[720px] lg:h-[600px] absolute lg:flex justify-center -z-20 hidden",
                    }),
                    u.jsx("img", {
                      src: "/circlemobile.svg",
                      alt: "glowing circle",
                      className:
                        "w-full h-full absolute bottom-0 lg:-left-20 lg:-bottom-0 -z-20 block lg:hidden",
                    }),
                    u.jsxs("div", {
                      className:
                        "flex justify-center -mt-1 lg:mt-20 ml-4 lg:ml-10",
                      children: [
                        u.jsx("img", {
                          src: "/1-iPhone 14 Pro.svg",
                          alt: "mobile",
                          className:
                            "lg:w-80 lg:h-[500px] w-36 h-full -z-10 absolute",
                        }),
                        u.jsx("video", {
                          className:
                            "absolute w-[135px] h-[280px] lg:w-[235px] lg:h-[487px] rounded-[18px] lg:rounded-[34px] z-10 object-fill overflow-hidden mt-[60px] lg:mt-1.5",
                          src: "https://res.cloudinary.com/df1awd7vz/video/upload/v1748592909/pulse_scout_video_comp_gouawj.mp4",
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          controls: !1,
                          playsInline: !0,
                          preload: "auto",
                        }),
                        u.jsx("img", {
                          src: "/camera.svg",
                          alt: "camera",
                          className:
                            "absolute z-20 mt-16 lg:mt-2 ml-2 w-[40px] lg:w-[90px] lg:h-[35px]",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className:
                        "flex ml-[280px] mt-32 lg:ml-[550px] lg:mt-20 absolute z-30",
                      children: [
                        u.jsx(x3, { percent: n }),
                        u.jsx("img", {
                          src: "/buuble.svg",
                          alt: "bubble",
                          className: "w-12 h-12 lg:w-24 lg:h-24",
                        }),
                        u.jsxs("div", {
                          className:
                            "absolute text-white text-[10px] lg:text-base font-clash mt-3 lg:mt-7 ml-3 lg:ml-7",
                          children: [n, "%+"],
                        }),
                      ],
                    }),
                    u.jsx("img", {
                      src: "/line.svg",
                      alt: "line",
                      className:
                        "w-20 ml-72 lg:ml-[500px] lg:w-80 h-10 absolute z-50 mt-[150px] lg:mt-36",
                    }),
                    u.jsxs("div", {
                      className: "flex flex-row lg:space-x-28 mr-0 lg:mr-24",
                      children: [
                        u.jsxs(Cl.div, {
                          ...l,
                          className:
                            "relative overflow-hidden bg-gradient-to-bl from-black/70 to-[#1E1E1E]/70 rounded-xl p-2 lg:p-4 w-16 h-20 lg:w-32 lg:h-full mx-auto space-y-1 backdrop-blur-md mt-20 ml-12 lg:ml-[140px]",
                          children: [
                            i && u.jsx(Iy, { onFinish: () => s(!1) }),
                            u.jsx("img", {
                              src: "/clock.svg",
                              alt: "Clock Icon",
                              className: "w-4 h-4 lg:w-8 lg:h-8",
                            }),
                            u.jsx("div", {
                              className:
                                "text-white text-[8px] lg:text-base font-medium font-clash",
                              children: "Processing Time",
                            }),
                            u.jsx("p", {
                              className:
                                "text-[#02C394] text-[9px] lg:text-base font-clash mt-2",
                              children: "0.7 Sec",
                            }),
                          ],
                        }),
                        u.jsxs(Cl.div, {
                          ...l,
                          transition: { ...l.transition, delay: 0.8 },
                          className:
                            "relative overflow-hidden bg-gradient-to-bl from-black/70 to-[#1E1E1E]/70 rounded-xl p-2 lg:p-4 w-16 h-20 lg:w-32 lg:h-full mx-auto space-y-1 backdrop-blur-md mr-8 mt-60 lg:mt-80",
                          children: [
                            o && u.jsx(Iy, { onFinish: () => a(!1) }),
                            u.jsx("img", {
                              src: "/flash.svg",
                              alt: "Flash Icon",
                              className: "w-4 h-4 lg:w-8 lg:h-8",
                            }),
                            u.jsx("div", {
                              className:
                                "text-white text-[8px] lg:text-base font-medium font-clash",
                              children: "Real-time Insights",
                            }),
                            u.jsx("p", {
                              className:
                                "text-[#02C394] text-[9px] lg:text-base font-clash mt-2",
                              children: "25+",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  nR = ({ isVisible: e }) => {
    const [t, n] = b.useState(0);
    return (
      b.useEffect(() => {
        if (!e) return;
        let r = 0;
        const i = 96,
          s = 1500,
          o = 15,
          a = Math.ceil((i * o) / s),
          l = setInterval(() => {
            (r += a), r >= i && ((r = i), clearInterval(l)), n(r);
          }, o);
        return () => clearInterval(l);
      }, [e]),
      u.jsxs("section", {
        id: "tech",
        className: " text-white h-full relative",
        children: [
          u.jsxs("div", {
            className:
              "h-full px-4 sm:px-6 md:px-12 lg:px-20 py-6 sm:py-16 w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-start items-start",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsx("h1", {
                    className:
                      "text-4xl sm:text-5xl md:text-6xl font-clashSemiBold text-center sm:text-left bg-gradient-to-b from-white to-[#88B3AA] bg-clip-text text-transparent leading-tight mt-0 sm:-mt-2 mb-0 sm:mb-0",
                    children: "Real-Time Urban Insights",
                  }),
                  u.jsxs("div", {
                    className: "hidden sm:flex sm:flex-col ",
                    children: [
                      u.jsx("p", {
                        className:
                          "mt-6 text-xl sm:text-2xl bg-gradient-to-b from-white to-[#88B3AA] bg-clip-text text-transparent font-clash",
                        children: "You Drive. We learn! You Earn!",
                      }),
                      u.jsxs("p", {
                        className:
                          "text-base bg-gradient-to-b from-white to-[#88B3AA] bg-clip-text text-transparent font-clash mt-4",
                        children: [
                          "We gather footage via crowdsourcing using our proprietary ",
                          u.jsx("br", { className: "" }),
                          " tech, PulseNet, and share the insights with stakeholders.",
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "flex flex-row space-x-[80px] ml-4 items-center",
                        children: [
                          u.jsx("ul", {
                            className: "mt-4 list-disc",
                            children: [
                              "City operations",
                              "Public transportation",
                              "Navigation",
                            ].map((r, i) =>
                              u.jsx(
                                "li",
                                {
                                  className:
                                    "text-[#70FFCD] text-lg font-clash capitalize",
                                  children: r,
                                },
                                i
                              )
                            ),
                          }),
                          u.jsx("ul", {
                            className: "mt-4 list-disc",
                            children: [
                              "Urban planning",
                              "Geospatial",
                              "And much more",
                            ].map((r, i) =>
                              u.jsx(
                                "li",
                                {
                                  className:
                                    "text-[#70FFCD] text-lg font-clash capitalize",
                                  children: r,
                                },
                                i
                              )
                            ),
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className:
                          "px-5 py-2.5 w-[150px] mt-4 bg-[conic-gradient(from_195deg_at_50.00%_50.00%,_rgba(0,_0,_0,_0)_173deg,_rgba(52.93,_129.62,_115.56,_0.30)_281deg,_rgba(46.75,_140.25,_127.78,_0.12)_360deg)] rounded-xl outline outline-[0.86px] outline-offset-[-0.86px] outline-white/10 inline-flex justify-center items-center gap-1.5",
                        children: u.jsx("a", {
                          href: "https://docs.pulseainetwork.org",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-center justify-start text-neutral-100 text-lg font-medium font-clash capitalize block",
                          children: "Learn More",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "relative mb-60 sm:mb-0 rounded-3xl h-[250px] sm:h-[300px] md:h-[400px] border border-teal-600",
                children: [
                  u.jsxs("video", {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    className: "object-cover w-full h-full rounded-3xl",
                    children: [
                      u.jsx("source", {
                        src: "https://res.cloudinary.com/df1awd7vz/video/upload/v1748592914/pulsescout1_sd71w6.mp4",
                        type: "video/mp4",
                      }),
                      "Your browser does not support the video tag.",
                    ],
                  }),
                  u.jsxs("div", {
                    className: "block sm:hidden",
                    children: [
                      u.jsx("p", {
                        className:
                          "mt-6 text-xl sm:text-xl md:text-2xl text-center sm:text-start bg-gradient-to-b from-white to-[#83DBC9] bg-clip-text text-transparent font-clash",
                        children: "You Drive. We learn! You Earn!",
                      }),
                      u.jsx("p", {
                        className:
                          "text-base bg-gradient-to-b from-white to-[#88B3AA] bg-clip-text text-center text-transparent font-clash mt-4",
                        children:
                          "We gather footage via crowdsourcing using our proprietary tech, PulseNet, and share the insights with stakeholders.",
                      }),
                      u.jsxs("div", {
                        className:
                          "flex flex-row space-x-[40px] ml-4 justify-center items-center",
                        children: [
                          u.jsx("ul", {
                            className: "mt-4 list-disc",
                            children: [
                              "City operations",
                              "Public transportation",
                              "Navigation",
                            ].map((r, i) =>
                              u.jsx(
                                "li",
                                {
                                  className:
                                    "text-[#70FFCD] text-[13px] font-clash capitalize",
                                  children: r,
                                },
                                i
                              )
                            ),
                          }),
                          u.jsx("ul", {
                            className: "mt-4 list-disc",
                            children: [
                              "Urban planning",
                              "Geospatial",
                              "And much more",
                            ].map((r, i) =>
                              u.jsx(
                                "li",
                                {
                                  className:
                                    "text-[#70FFCD] text-[13px] font-clash capitalize",
                                  children: r,
                                },
                                i
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className:
                      "absolute -z-10 pointer-events-none -bottom-20 sm:-bottom-28 right-0",
                    children: u.jsx("div", {
                      className:
                        "w-[250px] sm:w-[320px] md:w-[400px] h-40 sm:h-64 md:h-80 origin-top-left rotate-[-14.64deg] bg-gradient-to-bl from-cyan-400/80 via-green-300/80 to-green-500/80 blur-[108.7px]",
                    }),
                  }),
                  u.jsx("div", {
                    className:
                      "px-2 py-1 mx-auto  w-[100px] mt-4 bg-[conic-gradient(from_195deg_at_50.00%_50.00%,_rgba(0,_0,_0,_0)_173deg,_rgba(52.93,_129.62,_115.56,_0.30)_281deg,_rgba(46.75,_140.25,_127.78,_0.12)_360deg)] rounded-xl outline outline-[0.86px] outline-offset-[-0.86px] outline-white/10 flex justify-center items-center gap-1.5 lg:hidden",
                    children: u.jsx("a", {
                      href: "https://docs.pulseainetwork.org",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-center justify-center items-center text-neutral-100 text-sm font-medium font-clash capitalize block",
                      children: "Learn More",
                    }),
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className:
              "w-screen h-20 lg:h-56 bg-[#081B18] blur-[50px] absolute -bottom-20 lg:-bottom-[160px] z-20",
          }),
        ],
      })
    );
  },
  rR = ({ isVisible: e }) => {
    const t = [
        {
          image: "/PHASE ONE.svg",
          quarter: "(Q3, 2025)",
          points: ["PoC and Pilot with Clients", "Frontend Data App"],
        },
        {
          image: "/PHASE TWO.svg",
          quarter: "(Q4, 2025)",
          points: [
            "Data API for Clients",
            "App Deployment",
            "PoC with Government",
          ],
        },
        {
          image: "/PHASE THREE.svg",
          quarter: "(Q1, 2026)",
          points: [
            "OEM Partnerships",
            "Hardware & Production Scaling",
            "Dashboard Development",
          ],
        },
        {
          image: "/PHASE FOUR.svg",
          quarter: "(Q2, 2026)",
          points: ["PulseGen Dev (LLM)", "Client APIs"],
        },
        {
          image: "/PHASE FIVE.svg",
          quarter: "(Q3, 2026)",
          points: [
            "New Form of Data Compression",
            "4D Gaussian Splatting (Street View)",
            "Image Upscaler",
          ],
        },
      ],
      n = b.useRef(null),
      [r, i] = b.useState(0),
      [s, o] = b.useState(3);
    b.useEffect(() => {
      const l = () => {
        window.innerWidth < 640 ? o(1) : window.innerWidth < 1024 ? o(2) : o(3);
      };
      return (
        l(),
        window.addEventListener("resize", l),
        () => window.removeEventListener("resize", l)
      );
    }, []);
    const a = {
      centerMode: !0,
      infinite: !0,
      centerPadding: "0",
      slidesToShow: s,
      speed: 500,
      focusOnSelect: !0,
      autoplay: e,
      autoplaySpeed: 1e3,
      beforeChange: (l, c) => i(c),
      dots: !0,
      appendDots: (l) =>
        u.jsx("div", {
          className: "",
          children: u.jsx("ul", {
            className: "flex justify-center space-x-3",
            children: l,
          }),
        }),
      customPaging: (l) =>
        u.jsx("div", {
          className: `w-5 h-2 rounded-full ${
            l === r ? "bg-[#02C394]" : "bg-gray-400"
          }`,
        }),
    };
    return u.jsx("section", {
      id: "roadmap",
      className:
        "max-w-screen overflow-x-hidden h-full bg-primary text-white relative",
      children: u.jsx("div", {
        children: u.jsxs("div", {
          className: "text-white px-4 py-8 relative",
          children: [
            u.jsx("div", {
              className: "text-center mb-8",
              children: u.jsx("h1", {
                style: {
                  background:
                    "linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
                className: "text-3xl sm:text-6xl font-clashSemiBold mb-20",
                children: "Roadmap",
              }),
            }),
            u.jsx("div", {
              className: `transform transition-all duration-1000 ease-out ${
                e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`,
              children: u.jsx(jw, {
                ref: n,
                ...a,
                arrows: !1,
                children: t.map((l, c) =>
                  u.jsx(
                    "div",
                    {
                      className: "flex justify-center items-center",
                      children: u.jsx("div", {
                        className:
                          "card rounded-2xl flex flex-col justify-center transition-transform duration-300 text-white space-x-10 lg:space-x-40",
                        children: u.jsxs("div", {
                          className:
                            "rounded-2xl flex flex-col items-center justify-start",
                          children: [
                            u.jsx("div", {
                              className:
                                "flex justify-center items-center rounded-[30px]",
                              children: u.jsx("img", {
                                src: l.image,
                                className:
                                  "rounded-t-2xl w-full h-full object-cover",
                                alt: `Phase ${c + 1}`,
                              }),
                            }),
                            u.jsxs("div", {
                              className: "p-[24px] rounded-b-2xl",
                              children: [
                                u.jsx("h1", {
                                  className:
                                    "font-clash text-cyan-100 text-[22px] sm:text-4xl font-medium text-center leading-cap",
                                  children: ` ${l.quarter}`,
                                }),
                                u.jsx("ul", {
                                  className:
                                    "mt-4 font-clash font-normal flex flex-col justify-center items-center text-[14px] sm:text-xl list-disc list-inside",
                                  children: l.points.map((d, f) =>
                                    u.jsx("li", { children: d }, f)
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    },
                    c
                  )
                ),
              }),
            }),
          ],
        }),
      }),
    });
  },
  iR = [
    { img: "/card9.svg", title: "Coupons, Giftcards & Vouchers" },
    { img: "/card4.svg", title: "Contribute Data & Earn" },
    { img: "/card7.svg", title: "Loyalty & Referral Program" },
    { img: "/card6.svg", title: "Buy Back & Burn" },
    { img: "/card5.svg", title: "Driver Rewards" },
    { img: "/card8.svg", title: "Premium Features" },
  ];
function sR() {
  return u.jsxs("div", {
    className: "relative flex items-center justify-center px-4 pb-10 ",
    children: [
      u.jsx("div", {
        className:
          "relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-screen-xl px-2 sm:px-6 lg:px-10",
        children: iR.map((e, t) =>
          u.jsxs(
            "div",
            {
              className:
                "relative rounded-[24px] p-4 sm:p-6 flex flex-col items-center gap-4 transition-transform hover:scale-[1.02]",
              children: [
                u.jsx("div", {
                  className:
                    "w-52 h-32 absolute bottom-0 -rotate-2 bg-gradient-to-bl from-cyan-400/30 via-green-300/30 to-green-500/30 blur-[81.68px] -z-10",
                }),
                u.jsx("img", {
                  src: e.img,
                  alt: e.title,
                  className:
                    "w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40  rounded-[24px] object-cover",
                }),
                u.jsx("p", {
                  className:
                    "text-white text-center text-sm sm:text-sm md:text-lg lg:text-xl font-clash font-300 font-light max-w-[190px]",
                  children: e.title,
                }),
              ],
            },
            t
          )
        ),
      }),
      u.jsx("div", {
        className: "absolute inset-0 z-0 blur-3xl h-screen w-screen",
      }),
    ],
  });
}
const Fy = ({ type: e = "organization" }) => {
    const t = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PathPulse.ai",
        url: "https://pathpulse.ai",
        logo: "https://pathpulse.ai/logo.svg",
        description:
          "Transform urban navigation with PathPulse.ai's real-time AI insights. Reduce traffic congestion, discover smarter routes, and enhance city living with precision mapping technology.",
        foundingDate: "2024",
        sameAs: [
          "https://twitter.com/pathpulse",
          "https://linkedin.com/company/pathpulse",
          "https://medium.com/@pathpulse.ai",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contact@pathpulse.ai",
        },
        address: { "@type": "PostalAddress", addressCountry: "IN" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Navigation Solutions",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "PulseScout - AI Navigation",
                description:
                  "Advanced AI-powered urban navigation system with real-time traffic insights",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "PulseGen - AI Content Generation",
                description:
                  "Revolutionary AI content generation platform with blockchain technology",
              },
            },
          ],
        },
      },
      n = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "PathPulse.ai",
        url: "https://pathpulse.ai",
        description:
          "Revolutionizing urban navigation with AI-powered city insights",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://pathpulse.ai/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      r = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://pathpulse.ai",
          },
        ],
      },
      i = () => {
        switch (e) {
          case "organization":
            return t;
          case "website":
            return n;
          case "breadcrumb":
            return r;
          default:
            return t;
        }
      };
    return u.jsx(Ys, {
      children: u.jsx("script", {
        type: "application/ld+json",
        children: JSON.stringify(i()),
      }),
    });
  },
  oR = () => {
    const [e, t] = b.useState(null),
      n = b.useRef(),
      r = (s) => {
        window.innerWidth < 768 && t(e === s ? null : s);
      },
      i = [
        {
          name: "Umair M",
          title: "CEO & Co-Founder",
          image: "/umair.svg",
          linkedin: "https://www.linkedin.com/in/umair-mukadam-pathpulse-ai",
          description:
            "Incubated Alterverse with Binance Labs Managed $8M+ in investments",
        },
        {
          name: "Ibrahim Momin",
          title: "CTO/Co-Founder",
          image: "/ibrahim.svg",
          linkedin: "https://www.linkedin.com/in/ibrahim-momin-48072b226",
          description:
            "A computer vision expert with 6+ years focused solely on computer vision the core of our product",
        },
        {
          name: "Ritika Khar",
          title: "Chief PR Officer",
          image: "/ritika.svg",
          linkedin: "https://www.linkedin.com/in/ritika-khar-355727173/",
          description:
            "With expertise across media houses, marketing agencies, and driving community engagement.",
        },
        {
          name: "Naved Khan",
          title: "COO",
          image: "/naved.svg",
          linkedin: "https://www.linkedin.com/in/naved-khan-9b4476153",
          description: "4+ yrs in blockchain and Web3 development.",
        },
      ];
    return u.jsxs("section", {
      id: "team",
      className:
        "h-full text-white pt-20 py-4 px-4 md:px-16 text-center relative",
      children: ""
    });
  },
  aR = () => {
    const [e, t] = b.useState(!0),
      [n, r] = b.useState(!1),
      [i, s] = b.useState(!1),
      [o, a] = b.useState(!1),
      [l, c] = b.useState(!1);
    return (
      b.useEffect(() => {
        if (localStorage.getItem("loaderShown")) t(!1);
        else {
          t(!0);
          const f = setTimeout(() => {
            t(!1), localStorage.setItem("loaderShown", "true");
          }, 1e4);
          return () => clearTimeout(f);
        }
      }, []),
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(Di, {
            title:
              "Revolutionizing Urban Navigation with AI-Powered City Insights",
            description:
              "Transform urban navigation with PathPulse.ai's real-time AI insights. Reduce traffic congestion, discover smarter routes, and enhance city living with precision mapping technology.",
            keywords:
              "urban navigation, AI navigation, smart city, traffic optimization, real-time mapping, city insights, PathPulse, blockchain navigation, crypto navigation",
            url: "https://pathpulse.ai/",
          }),
          u.jsx(Fy, { type: "organization" }),
          u.jsx(Fy, { type: "website" }),
          u.jsxs("div", {
            className: "bg-primary relative overflow-hidden",
            children: [
              e &&
                u.jsx("div", {
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center bg-primary",
                  children: u.jsx(y3, {}),
                }),
              u.jsx("div", {
                className: `relative z-10 ${
                  e ? "opacity-0" : "opacity-100"
                } transition-opacity duration-500`,
                children: u.jsxs("div", {
                  className: "relative min-h-screen",
                  children: [
                    u.jsx("div", {
                      className: "lg:block hidden w-full",
                      children: u.jsx(Lr, {}),
                    }),
                    u.jsx("div", {
                      className: "lg:hidden w-full",
                      children: u.jsx(Mr, {}),
                    }),
                    u.jsx(be, { children: u.jsx(g3, {}) }),
                    u.jsx(be, {
                      className: "relative",
                      onVisible: () => r(!0),
                      children: u.jsx(p3, { isVisible: n }),
                    }),
                    u.jsx(be, { children: u.jsx(KE, {}) }),
                    u.jsx(be, {
                      className: "relative",
                      onVisible: () => r(!0),
                      children: u.jsx(nR, { isVisible: n }),
                    }),
                    u.jsx(be, {
                      onVisible: () => {
                        s(!0), a(!0);
                      },
                      children: u.jsx(tR, { isVisible: i, fadeIn: o }),
                    }),
                    u.jsx(be, {
                      onVisible: () => c(!0),
                      children: u.jsx(rR, { isVisible: l }),
                    }),
                    u.jsx(be, { children: u.jsx(v3, {}) }),
                    u.jsx(be, { children: u.jsx(sR, {}) }),
                    u.jsx(be, { children: u.jsx(m3, {}) }),
                    u.jsx(be, { children: u.jsx(oR, {}) }),
                    u.jsx(be, { children: u.jsx(GE, {}) }),
                    u.jsx("div", {
                      className: "flex flex-col items-center justify-between",
                      children: u.jsx(Rr, {}),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  lR = () => {
    const e = [
      {
        title:
          "Civic Safety Through Shared Data: Real-time Network That Protects Everyone",
        date: "Sept 10, 2025",
        readingTime: "5 min",
        image: "/blog19.webp",
        link: "https://medium.com/@pathpulse.ai/civic-safety-through-shared-data-real-time-network-that-protects-everyone-4b9adf5a6b50",
      },
      {
        title: "What Happens When Cities Listen to Drivers?",
        date: "Aug 31, 2025",
        readingTime: "4 min",
        image: "/blog17.jpg",
        link: "https://medium.com/@pathpulse.ai/what-happens-when-cities-listen-to-drivers-b2bcf3dd1fce",
      },
      {
        title:
          "How Everyday People Are Powering the Next Infrastructure Revolution",
        date: "Jul 23, 2025",
        readingTime: "8 min",
        image: "/blog18.webp",
        link: "https://medium.com/@pathpulse.ai/how-everyday-people-are-powering-the-next-infrastructure-revolution-9439e6a51b45",
      },
      {
        title:
          "Crowdsourced Road Intelligence: The Future of Infrastructure Reporting",
        date: "Jul 15, 2025",
        readingTime: "6 min",
        image: "/blog16.jpg",
        link: "https://medium.com/@pathpulse.ai/crowdsourced-road-intelligence-the-future-of-infrastructure-reporting-e69f8146c246",
      },
      {
        title: "The World is Changing: How Your Drive is Mapping the Future",
        date: "June 26, 2025",
        readingTime: "4 min",
        image: "/blog15.jpg",
        link: "https://medium.com/@pathpulse.ai/the-world-is-changing-how-your-drive-is-mapping-the-future-2337b9dca879",
      },
      {
        title:
          "Millimaps: The Invisible Intelligence Layer That’s Redefining Urban Navigation",
        date: "June 7, 2025",
        readingTime: "4 min",
        image: "/blog14.jpg",
        link: "https://medium.com/@pathpulse.ai/millimaps-the-invisible-intelligence-layer-thats-redefining-urban-navigation-81decf026086",
      },
      {
        title: "How Poor Road Intelligence is Costing Businesses Millions",
        date: "April 06, 2025",
        readingTime: "3 min",
        image: "/blog13.jpg",
        link: "https://medium.com/@pathpulse.ai/how-poor-road-intelligence-is-costing-businesses-millions-3db38275d221",
      },
      {
        title:
          "The Future of Smart Cities with PathPulse.ai Leading the Charge",
        date: "Mar 21, 2025",
        readingTime: "4 min",
        image: "/blog12.jpg",
        link: "https://medium.com/@pathpulse.ai/depin-and-ai-04320a4361b6",
      },
      {
        title:
          "How AI and Machine Learning Are Reshaping Data Accuracy in a Noisy World",
        date: "Mar 4, 2025",
        readingTime: "3 min",
        image: "/blogs.jpg",
        link: "https://medium.com/@pathpulse.ai/how-ai-and-machine-learning-are-reshaping-data-accuracy-in-a-noisy-world-5a0b8034b9ae",
      },
      {
        title: "Limitations & Challenges of GPS Technology",
        date: "Feb 24, 2025",
        readingTime: "4 mins",
        image: "/blog9.png",
        link: "https://medium.com/@pathpulse.ai/limitations-challenges-of-gps-technology-872b5ec66a0b",
      },
      {
        title: "Why the Future of Cities Lies in Real-Time Insights",
        date: "Feb 18, 2025",
        readingTime: "5 mins",
        image: "/blog8.png",
        link: "https://medium.com/@pathpulse.ai/why-the-future-of-cities-lies-in-real-time-insights-dfe35351b879",
      },
      {
        title:
          "PathPulse.ai — Bridging the Gap Between Data Science and Navigation",
        date: "Feb 7, 2025",
        readingTime: "4 mins",
        image: "/blog7.jpg",
        link: "https://medium.com/@pathpulse.ai/pathpulse-ai-bridging-the-gap-between-data-science-and-navigation-421b8f498f64",
      },
      {
        title: "How AI Helps Us Go Beyond Traditional Navigation",
        date: "Jan 30, 2025",
        readingTime: "4 mins",
        image: "/blog6.jpeg",
        link: "https://medium.com/@pathpulse.ai/how-ai-helps-us-go-beyond-traditional-navigation-b1a4cbae5c01",
      },
      {
        title:
          "How Human Choices Fuel a Silent Pandemic? And How Can PathPulse.ai Break the Cycle?",
        date: "Jan 25, 2025",
        readingTime: "5 mins",
        image: "/blog10.png",
        link: "https://medium.com/@pathpulse.ai/can-ai-rewrite-the-future-of-road-safety-141495065f92",
      },
      {
        title: "Exploring the Unique Features of the PathPulse Ecosystem",
        date: "Jan 16, 2025",
        readingTime: "6 mins",
        image: "/blog5.jpeg",
        link: "https://medium.com/@pathpulse.ai/exploring-the-unique-features-of-the-pathpulse-ecosystem-65ad6e8e33f6",
      },
      {
        title:
          "PathPulse.ai: How Dash Cameras and AI are Shaping the Future of Navigation",
        date: "Dec 11, 2024",
        readingTime: "4 mins",
        image: "/blog1.jpg",
        link: "https://medium.com/@pathpulse.ai/pathpulse-ai-how-dash-cameras-and-ai-are-shaping-the-future-of-navigation-52ebaf3b528f",
      },
      {
        title: "The AI Revolution in Navigation: Inside PulseNet’s Technology",
        date: "Nov 29, 2024",
        readingTime: "6 min",
        image: "/blog4.jpg",
        link: "https://medium.com/@pathpulse.ai/the-ai-revolution-in-navigation-inside-pulsenets-technology-ee0ec4e695da",
      },
      {
        title:
          "The Future of Maps: Revolutionizing Navigation with PathPulse.ai",
        date: "Nov 18, 2024",
        readingTime: "6 mins",
        image: "/blog2.jpg",
        link: "https://medium.com/@pathpulse.ai/the-future-of-maps-revolutionizing-navigation-with-pathpulse-ai-e3a5f45c131a",
      },
      {
        title: "Modern Navigation Apps: A Growing Heap of Unsolved Problems?",
        date: "Nov 8, 2024",
        readingTime: "8 min",
        image: "/blog3.jpg",
        link: "https://medium.com/@pathpulse.ai/modern-navigation-apps-a-growing-heap-of-unsolved-problems-98afbc810ad1",
      },
    ];
    return u.jsx(u.Fragment, {
      children: u.jsxs("section", {
        className:
          "max-w-screen overflow-x-hidden min-h-screen bg-primary text-white relative",
        children: [
          u.jsx("div", {
            className: "lg:block hidden w-full",
            children: u.jsx(Lr, {}),
          }),
          u.jsx("div", {
            className: "block sm:hidden w-full",
            children: u.jsx(Mr, {}),
          }),
          u.jsx("div", {
            className: "mt-10 sm:px-8 md:px-16 lg:px-[180px]",
            children: u.jsxs("div", {
              className: "text-white px-4 py-8 relative",
              children: [
                u.jsx("div", {
                  className: "text-center mb-8",
                  children: u.jsx("h1", {
                    style: {
                      background:
                        "linear-gradient(180deg, #FFF 2.39%, #83DBC9 91.52%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                    className:
                      "text-3xl sm:text-[80px] font-clash sm:leading-[100px] font-bold shine-text",
                    children: "Let’s Find The Latest Article & Blogs Today",
                  }),
                }),
                u.jsx("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                  children: e.map((t, n) =>
                    u.jsx(
                      "a",
                      {
                        href: t.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block",
                        children: u.jsxs("div", {
                          className: "",
                          children: [
                            u.jsx("div", {
                              className: "h-auto w-auto rounded-lg bg-gray-700",
                              children: t.image
                                ? u.jsx("img", {
                                    src: t.image,
                                    alt: t.title,
                                    className:
                                      "w-full rounded-lg h-full object-cover",
                                  })
                                : u.jsx("div", {
                                    className:
                                      "w-full h-full flex items-center justify-center text-gray-400",
                                    children: "No Image",
                                  }),
                            }),
                            u.jsxs("div", {
                              className: "p-4 py-10 font-sans",
                              children: [
                                u.jsx("p", {
                                  className: "text-base text-white",
                                  children: t.date,
                                }),
                                u.jsx("h3", {
                                  className: "text-xl mt-2",
                                  children: t.title,
                                }),
                                u.jsx("div", {
                                  className: "flex items-center mt-[24px]",
                                  children: u.jsxs("p", {
                                    className: "text-sm text-gray-400",
                                    children: [
                                      "Reading Time: About ",
                                      t.readingTime,
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      n
                    )
                  ),
                }),
              ],
            }),
          }),
          u.jsx("div", { className: "mt-10", children: u.jsx(Rr, {}) }),
        ],
      }),
    });
  },
  uR = ({ onClose: e }) => {
    const [t, n] = b.useState(""),
      r = async (i) => {
        i.preventDefault(), n("Sending...");
        const s = new FormData(i.target);
        s.append("access_key", "7e7df96e-7e73-4172-86a8-16125a81ec50");
        const a = await (
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: s,
          })
        ).json();
        a.success
          ? (Ne.success("Form submitted successfully!"),
            n("Form Submitted Successfully"),
            i.target.reset())
          : (console.error("Error", a),
            Ne.error(a.message || "Something went wrong."),
            n(a.message || "Something went wrong."));
      };
    return u.jsx("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      children: u.jsx(be, {
        className: "flex justify-center items-center",
        children: u.jsxs("div", {
          className:
            "w-full max-w-5xl p-6 md:p-10 rounded-[20px] border border-zinc-700 relative shadow-xl custom-blur",
          children: [
            u.jsx("button", {
              onClick: e,
              className:
                "absolute -top-1 right-4 text-white text-2xl lg:text-5xl",
              children: "×",
            }),
            u.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-8 text-white",
              children: [
                u.jsxs("div", {
                  className: "flex flex-col gap-2 lg:gap-6",
                  children: [
                    u.jsxs("h2", {
                      className: "text-xl lg:text-6xl font-clashSemiBold",
                      children: [
                        u.jsx("span", {
                          className: "text-white",
                          children: "Get in ",
                        }),
                        u.jsx("span", {
                          className:
                            "bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] via-[#02C394] to-[#35826E]",
                          children: "touch",
                        }),
                      ],
                    }),
                    u.jsx("p", {
                      className: "text-sm lg:text-xl text-neutral-400",
                      children:
                        "Reach out, and Let's Build Smarter Cities Together!",
                    }),
                    u.jsxs("div", {
                      className: "flex items-center gap-4 text-neutral-300",
                      children: [
                        u.jsx("img", {
                          src: "/mail.svg",
                          className: "w-4 h-4 lg:w-9 lg:h-9",
                        }),
                        u.jsx("p", {
                          className: "text-sm lg:text-lg",
                          children: "contact@pathpulse.ai",
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("form", {
                  onSubmit: r,
                  className: "flex flex-col gap-4 w-full",
                  children: [
                    u.jsx("input", {
                      type: "hidden",
                      name: "access_key",
                      value: "d2e61b51-04c5-4506-9f8c-3324eedeec1b",
                    }),
                    u.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                      children: [
                        u.jsx("input", {
                          name: "first_name",
                          placeholder: "First Name",
                          required: !0,
                          className:
                            "w-full bg-white/5 border border-white/20 p-3 rounded text-white placeholder:text-sm sm:placeholder:text-base",
                        }),
                        u.jsx("input", {
                          name: "last_name",
                          placeholder: "Last Name",
                          required: !0,
                          className:
                            "w-full bg-white/5 border border-white/20 p-3 rounded text-white placeholder:text-sm sm:placeholder:text-base",
                        }),
                      ],
                    }),
                    u.jsx("input", {
                      name: "email",
                      type: "email",
                      placeholder: "Email Address",
                      required: !0,
                      className:
                        "w-full bg-white/5 border border-white/20 p-3 rounded text-white placeholder:text-sm sm:placeholder:text-base",
                    }),
                    u.jsx("textarea", {
                      name: "message",
                      placeholder: "Please Enter Your Query...",
                      required: !0,
                      className:
                        "w-full bg-white/5 border border-white/20 p-3 rounded text-white h-20 lg:h-28 resize-none placeholder:text-sm sm:placeholder:text-base",
                    }),
                    u.jsx("button", {
                      type: "submit",
                      className:
                        "bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-2 sm:py-3 rounded text-sm sm:text-base font-medium",
                      children: "Send",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  cR = ({ onClose: e }) => {
    const [t, n] = b.useState(""),
      r = () => {
        window.open("https://t.me/PulseAI_network", "_blank");
      },
      i = async (s) => {
        s.preventDefault(), n("Sending...");
        const o = new FormData(s.target);
        o.append("access_key", "7e7df96e-7e73-4172-86a8-16125a81ec50");
        const l = await (
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: o,
          })
        ).json();
        l.success
          ? (Ne.success("Form submitted successfully!"),
            n("Form Submitted Successfully"),
            s.target.reset())
          : (console.error("Error", l),
            Ne.error(l.message || "Something went wrong."),
            n(l.message || "Something went wrong."));
      };
    return u.jsx("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      children: u.jsx(be, {
        className: "flex justify-center items-center",
        children: u.jsxs("div", {
          className:
            "w-full max-w-5xl p-6 md:p-14 rounded-[20px] border border-zinc-700 relative shadow-xl custom-blur",
          children: [
            u.jsx("button", {
              onClick: e,
              className:
                "absolute top-1 right-4 text-white text-2xl lg:text-5xl",
              children: "×",
            }),
            u.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-8 text-white",
              children: [
                u.jsxs("div", {
                  className: "flex flex-col gap-2 lg:gap-6",
                  children: [
                    u.jsxs("h2", {
                      className: "text-xl lg:text-6xl font-clashSemiBold",
                      children: [
                        u.jsx("span", {
                          className: "text-white",
                          children: "Get in ",
                        }),
                        u.jsx("span", {
                          className:
                            "bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] via-[#02C394] to-[#35826E]",
                          children: "touch",
                        }),
                      ],
                    }),
                    u.jsx("p", {
                      className: "text-sm lg:text-xl text-neutral-400",
                      children:
                        "Reach out, and Let's Build Smarter Cities Together!",
                    }),
                    u.jsxs("div", {
                      className: "flex items-center gap-4 text-neutral-300",
                      children: [
                        u.jsx("img", {
                          src: "/mail.svg",
                          className: "w-4 h-4 lg:w-9 lg:h-9",
                        }),
                        u.jsx("p", {
                          className: "text-sm lg:text-lg",
                          children: "contact@pathpulse.ai",
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("form", {
                  onSubmit: i,
                  className: "flex flex-col gap-4 w-full",
                  children: [
                    u.jsx("input", {
                      type: "hidden",
                      name: "access_key",
                      value: "d2e61b51-04c5-4506-9f8c-3324eedeec1b",
                    }),
                    u.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                      children: [
                        u.jsx("input", {
                          name: "first_name",
                          placeholder: "First Name",
                          required: !0,
                          className:
                            "w-full bg-white/5 border border-white/20 p-3 rounded text-white placeholder:text-sm sm:placeholder:text-base",
                        }),
                        u.jsx("input", {
                          name: "last_name",
                          placeholder: "Last Name",
                          required: !0,
                          className:
                            "w-full bg-white/5 border border-white/20 p-3 rounded text-white placeholder:text-sm sm:placeholder:text-base",
                        }),
                      ],
                    }),
                    u.jsx("input", {
                      name: "email",
                      type: "email",
                      placeholder: "Email Address",
                      required: !0,
                      className:
                        "w-full bg-white/5 border border-white/20 p-3 rounded text-white placeholder:text-sm sm:placeholder:text-base",
                    }),
                    u.jsx("textarea", {
                      name: "message",
                      placeholder: "Please Enter Your Query...",
                      required: !0,
                      className:
                        "w-full bg-white/5 border border-white/20 p-3 rounded text-white h-20 lg:h-28 resize-none placeholder:text-sm sm:placeholder:text-base",
                    }),
                    u.jsx("button", {
                      type: "submit",
                      className:
                        "hover:bg-gradient-to-r from-emerald-500 to-emerald-700 border border-emerald-500 text-white py-2 sm:py-3 rounded text-xs lg:text-base font-medium",
                      children: "Send",
                    }),
                    u.jsxs("button", {
                      onClick: r,
                      type: "button",
                      className:
                        "group bg-gradient-to-r from-[#14C087] to-[#077752] text-white text-xs lg:text-base py-2 rounded flex items-center justify-center gap-2 transition",
                      children: [
                        u.jsx("span", { children: "Book a Quick Call" }),
                        u.jsx("img", {
                          src: "/rocket2.svg",
                          alt: "",
                          className:
                            "block group-hover:hidden transition duration-400",
                        }),
                        u.jsx("img", {
                          src: "/rocket.svg",
                          alt: "",
                          className:
                            "hidden group-hover:block transition duration-400",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  dR = ({ setIsPopupActive: e }) => {
    const [t, n] = b.useState(!1),
      [r, i] = b.useState(!1),
      s = () => {
        n(!1);
      };
    return (
      b.useEffect(() => {
        const o = t || r;
        return (
          (document.body.style.overflow = o ? "hidden" : "auto"),
          () => {
            document.body.style.overflow = "auto";
          }
        );
      }, [t, r]),
      b.useEffect(() => {
        e(t || r);
      }, [t, r, e]),
      u.jsxs("div", {
        className: "min-h-screen text-white relative overflow-hidden",
        children: [
          u.jsx("div", {
            className:
              "absolute inset-0 bg-[url('/map.svg')] bg-cover bg-center z-0",
          }),
          !t &&
            !r &&
            u.jsxs("div", {
              className:
                "relative z-10 flex flex-col items-center justify-center px-4 py-0 lg:py-20",
              children: [
                u.jsx("h1", {
                  className:
                    "text-xl md:text-6xl font-clashSemiBold pt-20 lg:pt-28 text-center mb-16 bg-gradient-to-r from-gray-300 to-white text-transparent bg-clip-text",
                  children: "CONTACT US",
                }),
                u.jsxs("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl",
                  children: [
                    u.jsx("div", {
                      onClick: () => n(!0),
                      className:
                        "cursor-pointer bg-gradient-to-br from-neutral-900/10 via-gray-900/25 to-gray-950/50 p-10 rounded-[30px] shadow-xl border border-zinc-700/50 hover:scale-105 transition-transform duration-300",
                      children: u.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [
                          u.jsx("div", {
                            className:
                              "bg-gradient-to-b from-emerald-700/0 via-emerald-700 to-neutral-900/0 rounded-full shadow-[inset_0px_9.4px_18.8px_0px_rgba(15,23,30,0.40)] border-2 border-emerald-800",
                            children: u.jsx("img", {
                              src: "/individuals.svg",
                              alt: "",
                              className: "h-10 w-10 lg:h-20 lg:w-20 p-1 lg:p-4",
                            }),
                          }),
                          u.jsx("h3", {
                            className:
                              "text-xl lg:text-6xl font-clashSemiBold text-center mt-3",
                            children: "For Individuals",
                          }),
                        ],
                      }),
                    }),
                    u.jsx("div", {
                      onClick: () => i(!0),
                      className:
                        "bg-gradient-to-br from-neutral-900/10 via-gray-900/25 to-gray-950/50 p-10 rounded-[30px] border border-zinc-700/50 backdrop-blur-[20px]",
                      children: u.jsxs("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [
                          u.jsx("div", {
                            className:
                              "bg-gradient-to-b from-emerald-700/0 via-emerald-700 to-neutral-900/0 rounded-full shadow-[inset_0px_9.4px_18.8px_0px_rgba(15,23,30,0.40)] border-2 border-emerald-800",
                            children: u.jsx("img", {
                              src: "/collab.svg",
                              alt: "",
                              className: "h-10 w-10 lg:h-20 lg:w-20 p-1 lg:p-4",
                            }),
                          }),
                          u.jsx("h3", {
                            className:
                              "text-xl lg:text-6xl font-clashSemiBold text-center mt-3",
                            children: "For Collaboration",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          t && u.jsx(uR, { onClose: s }),
          r && u.jsx(cR, { onClose: () => i(!1) }),
        ],
      })
    );
  },
  fR = () => {
    const [e, t] = b.useState(!1);
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(Di, {
          title: "Contact Us - Get in Touch with PathPulse.ai",
          description:
            "Connect with PathPulse.ai for partnerships, support, or inquiries about our AI-powered navigation solutions. We're here to help transform your urban mobility experience.",
          keywords:
            "contact PathPulse, support, partnerships, AI navigation support, urban mobility contact",
          url: "https://pathpulse.ai/contactus",
        }),
        u.jsxs("div", {
          className: "bg-[#070707] text-white max-w-screen overflow-hidden",
          children: [
            u.jsx("div", {
              className: "hidden sm:block",
              children: u.jsx(Lr, {}),
            }),
            u.jsx("div", { className: "sm:hidden", children: u.jsx(Mr, {}) }),
            u.jsx(be, { children: u.jsx(dR, { setIsPopupActive: t }) }),
            !e &&
              u.jsx("div", {
                className: "relative z-10",
                children: u.jsx(Rr, {}),
              }),
          ],
        }),
      ],
    });
  };
function Ib(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: hR } = Object.prototype,
  { getPrototypeOf: cp } = Object,
  du = ((e) => (t) => {
    const n = hR.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Vt = (e) => ((e = e.toLowerCase()), (t) => du(t) === e),
  fu = (e) => (t) => typeof t === e,
  { isArray: Vi } = Array,
  ho = fu("undefined");
function pR(e) {
  return (
    e !== null &&
    !ho(e) &&
    e.constructor !== null &&
    !ho(e.constructor) &&
    ht(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Fb = Vt("ArrayBuffer");
function mR(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Fb(e.buffer)),
    t
  );
}
const gR = fu("string"),
  ht = fu("function"),
  zb = fu("number"),
  hu = (e) => e !== null && typeof e == "object",
  yR = (e) => e === !0 || e === !1,
  Ea = (e) => {
    if (du(e) !== "object") return !1;
    const t = cp(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  vR = Vt("Date"),
  xR = Vt("File"),
  wR = Vt("Blob"),
  bR = Vt("FileList"),
  SR = (e) => hu(e) && ht(e.pipe),
  jR = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ht(e.append) &&
          ((t = du(e)) === "formdata" ||
            (t === "object" &&
              ht(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  TR = Vt("URLSearchParams"),
  [PR, CR, kR, ER] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Vt
  ),
  NR = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _o(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Vi(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let a;
    for (r = 0; r < o; r++) (a = s[r]), t.call(null, e[a], a, e);
  }
}
function Bb(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const pr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Vb = (e) => !ho(e) && e !== pr;
function cf() {
  const { caseless: e } = (Vb(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && Bb(t, i)) || i;
      Ea(t[s]) && Ea(r)
        ? (t[s] = cf(t[s], r))
        : Ea(r)
        ? (t[s] = cf({}, r))
        : Vi(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && _o(arguments[r], n);
  return t;
}
const _R = (e, t, n, { allOwnKeys: r } = {}) => (
    _o(
      t,
      (i, s) => {
        n && ht(i) ? (e[s] = Ib(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  OR = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  AR = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  RR = (e, t, n, r) => {
    let i, s, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (o = i[s]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && cp(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  LR = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  MR = (e) => {
    if (!e) return null;
    if (Vi(e)) return e;
    let t = e.length;
    if (!zb(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  DR = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && cp(Uint8Array)),
  IR = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  FR = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  zR = Vt("HTMLFormElement"),
  BR = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  zy = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  VR = Vt("RegExp"),
  $b = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    _o(n, (i, s) => {
      let o;
      (o = t(i, s, e)) !== !1 && (r[s] = o || i);
    }),
      Object.defineProperties(e, r);
  },
  $R = (e) => {
    $b(e, (t, n) => {
      if (ht(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ht(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  UR = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return Vi(e) ? r(e) : r(String(e).split(t)), n;
  },
  HR = () => {},
  WR = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function qR(e) {
  return !!(
    e &&
    ht(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const GR = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (hu(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const s = Vi(r) ? [] : {};
            return (
              _o(r, (o, a) => {
                const l = n(o, i + 1);
                !ho(l) && (s[a] = l);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  KR = Vt("AsyncFunction"),
  YR = (e) => e && (hu(e) || ht(e)) && ht(e.then) && ht(e.catch),
  Ub = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          pr.addEventListener(
            "message",
            ({ source: i, data: s }) => {
              i === pr && s === n && r.length && r.shift()();
            },
            !1
          ),
          (i) => {
            r.push(i), pr.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    ht(pr.postMessage)
  ),
  QR =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(pr)
      : (typeof process < "u" && process.nextTick) || Ub,
  C = {
    isArray: Vi,
    isArrayBuffer: Fb,
    isBuffer: pR,
    isFormData: jR,
    isArrayBufferView: mR,
    isString: gR,
    isNumber: zb,
    isBoolean: yR,
    isObject: hu,
    isPlainObject: Ea,
    isReadableStream: PR,
    isRequest: CR,
    isResponse: kR,
    isHeaders: ER,
    isUndefined: ho,
    isDate: vR,
    isFile: xR,
    isBlob: wR,
    isRegExp: VR,
    isFunction: ht,
    isStream: SR,
    isURLSearchParams: TR,
    isTypedArray: DR,
    isFileList: bR,
    forEach: _o,
    merge: cf,
    extend: _R,
    trim: NR,
    stripBOM: OR,
    inherits: AR,
    toFlatObject: RR,
    kindOf: du,
    kindOfTest: Vt,
    endsWith: LR,
    toArray: MR,
    forEachEntry: IR,
    matchAll: FR,
    isHTMLForm: zR,
    hasOwnProperty: zy,
    hasOwnProp: zy,
    reduceDescriptors: $b,
    freezeMethods: $R,
    toObjectSet: UR,
    toCamelCase: BR,
    noop: HR,
    toFiniteNumber: WR,
    findKey: Bb,
    global: pr,
    isContextDefined: Vb,
    isSpecCompliantForm: qR,
    toJSONObject: GR,
    isAsyncFn: KR,
    isThenable: YR,
    setImmediate: Ub,
    asap: QR,
  };
function q(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
C.inherits(q, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Hb = q.prototype,
  Wb = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Wb[e] = { value: e };
});
Object.defineProperties(q, Wb);
Object.defineProperty(Hb, "isAxiosError", { value: !0 });
q.from = (e, t, n, r, i, s) => {
  const o = Object.create(Hb);
  return (
    C.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    q.call(o, e.message, t, n, r, i),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const XR = null;
function df(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function qb(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function By(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = qb(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function JR(e) {
  return C.isArray(e) && !e.some(df);
}
const ZR = C.toFlatObject(C, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function pu(e, t, n) {
  if (!C.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = C.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, w) {
        return !C.isUndefined(w[x]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || d,
    s = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(t);
  if (!C.isFunction(i)) throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null) return "";
    if (C.isDate(v)) return v.toISOString();
    if (!l && C.isBlob(v))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(v) || C.isTypedArray(v)
      ? l && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function d(v, x, w) {
    let p = v;
    if (v && !w && typeof v == "object") {
      if (C.endsWith(x, "{}"))
        (x = r ? x : x.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (C.isArray(v) && JR(v)) ||
        ((C.isFileList(v) || C.endsWith(x, "[]")) && (p = C.toArray(v)))
      )
        return (
          (x = qb(x)),
          p.forEach(function (g, S) {
            !(C.isUndefined(g) || g === null) &&
              t.append(
                o === !0 ? By([x], S, s) : o === null ? x : x + "[]",
                c(g)
              );
          }),
          !1
        );
    }
    return df(v) ? !0 : (t.append(By(w, x, s), c(v)), !1);
  }
  const f = [],
    h = Object.assign(ZR, {
      defaultVisitor: d,
      convertValue: c,
      isVisitable: df,
    });
  function y(v, x) {
    if (!C.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      f.push(v),
        C.forEach(v, function (p, m) {
          (!(C.isUndefined(p) || p === null) &&
            i.call(t, p, C.isString(m) ? m.trim() : m, x, h)) === !0 &&
            y(p, x ? x.concat(m) : [m]);
        }),
        f.pop();
    }
  }
  if (!C.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function Vy(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function dp(e, t) {
  (this._pairs = []), e && pu(e, this, t);
}
const Gb = dp.prototype;
Gb.append = function (t, n) {
  this._pairs.push([t, n]);
};
Gb.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Vy);
      }
    : Vy;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function e5(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Kb(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || e5;
  C.isFunction(n) && (n = { serialize: n });
  const i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(t, n))
      : (s = C.isURLSearchParams(t) ? t.toString() : new dp(t, n).toString(r)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class $y {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    C.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Yb = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  t5 = typeof URLSearchParams < "u" ? URLSearchParams : dp,
  n5 = typeof FormData < "u" ? FormData : null,
  r5 = typeof Blob < "u" ? Blob : null,
  i5 = {
    isBrowser: !0,
    classes: { URLSearchParams: t5, FormData: n5, Blob: r5 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  fp = typeof window < "u" && typeof document < "u",
  ff = (typeof navigator == "object" && navigator) || void 0,
  s5 =
    fp &&
    (!ff || ["ReactNative", "NativeScript", "NS"].indexOf(ff.product) < 0),
  o5 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  a5 = (fp && window.location.href) || "http://localhost",
  l5 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: fp,
        hasStandardBrowserEnv: s5,
        hasStandardBrowserWebWorkerEnv: o5,
        navigator: ff,
        origin: a5,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ze = { ...l5, ...i5 };
function u5(e, t) {
  return pu(
    e,
    new ze.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return ze.isNode && C.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function c5(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function d5(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function Qb(e) {
  function t(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = s >= n.length;
    return (
      (o = !o && C.isArray(i) ? i.length : o),
      l
        ? (C.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
        : ((!i[o] || !C.isObject(i[o])) && (i[o] = []),
          t(n, r, i[o], s) && C.isArray(i[o]) && (i[o] = d5(i[o])),
          !a)
    );
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return (
      C.forEachEntry(e, (r, i) => {
        t(c5(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function f5(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Oo = {
  transitional: Yb,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = C.isObject(t);
      if ((s && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
        return i ? JSON.stringify(Qb(t)) : t;
      if (
        C.isArrayBuffer(t) ||
        C.isBuffer(t) ||
        C.isStream(t) ||
        C.isFile(t) ||
        C.isBlob(t) ||
        C.isReadableStream(t)
      )
        return t;
      if (C.isArrayBufferView(t)) return t.buffer;
      if (C.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return u5(t, this.formSerializer).toString();
        if ((a = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return pu(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), f5(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Oo.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (C.isResponse(t) || C.isReadableStream(t)) return t;
      if (t && C.isString(t) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? q.from(a, q.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ze.classes.FormData, Blob: ze.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Oo.headers[e] = {};
});
const h5 = C.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  p5 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (t[n] && h5[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Uy = Symbol("internals");
function is(e) {
  return e && String(e).trim().toLowerCase();
}
function Na(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(Na) : String(e);
}
function m5(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const g5 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function bc(e, t, n, r, i) {
  if (C.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!C.isString(t))) {
    if (C.isString(r)) return t.indexOf(r) !== -1;
    if (C.isRegExp(r)) return r.test(t);
  }
}
function y5(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function v5(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, o) {
        return this[r].call(this, t, i, s, o);
      },
      configurable: !0,
    });
  });
}
class ot {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(a, l, c) {
      const d = is(l);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = C.findKey(i, d);
      (!f || i[f] === void 0 || c === !0 || (c === void 0 && i[f] !== !1)) &&
        (i[f || l] = Na(a));
    }
    const o = (a, l) => C.forEach(a, (c, d) => s(c, d, l));
    if (C.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (C.isString(t) && (t = t.trim()) && !g5(t)) o(p5(t), n);
    else if (C.isHeaders(t)) for (const [a, l] of t.entries()) s(l, a, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = is(t)), t)) {
      const r = C.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return m5(i);
        if (C.isFunction(n)) return n.call(this, i, r);
        if (C.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = is(t)), t)) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || bc(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = is(o)), o)) {
        const a = C.findKey(r, o);
        a && (!n || bc(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return C.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || bc(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      C.forEach(this, (i, s) => {
        const o = C.findKey(r, s);
        if (o) {
          (n[o] = Na(i)), delete n[s];
          return;
        }
        const a = t ? y5(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = Na(i)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      C.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && C.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Uy] = this[Uy] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const a = is(o);
      r[a] || (v5(i, o), (r[a] = !0));
    }
    return C.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
ot.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
C.reduceDescriptors(ot.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
C.freezeMethods(ot);
function Sc(e, t) {
  const n = this || Oo,
    r = t || n,
    i = ot.from(r.headers);
  let s = r.data;
  return (
    C.forEach(e, function (a) {
      s = a.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function Xb(e) {
  return !!(e && e.__CANCEL__);
}
function $i(e, t, n) {
  q.call(this, e ?? "canceled", q.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
C.inherits($i, q, { __CANCEL__: !0 });
function Jb(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new q(
          "Request failed with status code " + n.status,
          [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function x5(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function w5(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const c = Date.now(),
        d = r[s];
      o || (o = c), (n[i] = l), (r[i] = c);
      let f = s,
        h = 0;
      for (; f !== i; ) (h += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), c - o < t)) return;
      const y = d && c - d;
      return y ? Math.round((h * 1e3) / y) : void 0;
    }
  );
}
function b5(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    s;
  const o = (c, d = Date.now()) => {
    (n = d), (i = null), s && (clearTimeout(s), (s = null)), e.apply(null, c);
  };
  return [
    (...c) => {
      const d = Date.now(),
        f = d - n;
      f >= r
        ? o(c, d)
        : ((i = c),
          s ||
            (s = setTimeout(() => {
              (s = null), o(i);
            }, r - f)));
    },
    () => i && o(i),
  ];
}
const kl = (e, t, n = 3) => {
    let r = 0;
    const i = w5(50, 250);
    return b5((s) => {
      const o = s.loaded,
        a = s.lengthComputable ? s.total : void 0,
        l = o - r,
        c = i(l),
        d = o <= a;
      r = o;
      const f = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: l,
        rate: c || void 0,
        estimated: c && a && d ? (a - o) / c : void 0,
        event: s,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  Hy = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Wy =
    (e) =>
    (...t) =>
      C.asap(() => e(...t)),
  S5 = ze.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, ze.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(ze.origin),
        ze.navigator && /(msie|trident)/i.test(ze.navigator.userAgent)
      )
    : () => !0,
  j5 = ze.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, s) {
          const o = [e + "=" + encodeURIComponent(t)];
          C.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            C.isString(r) && o.push("path=" + r),
            C.isString(i) && o.push("domain=" + i),
            s === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function T5(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function P5(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Zb(e, t, n) {
  let r = !T5(t);
  return (e && r) || n == !1 ? P5(e, t) : t;
}
const qy = (e) => (e instanceof ot ? { ...e } : e);
function Er(e, t) {
  t = t || {};
  const n = {};
  function r(c, d, f, h) {
    return C.isPlainObject(c) && C.isPlainObject(d)
      ? C.merge.call({ caseless: h }, c, d)
      : C.isPlainObject(d)
      ? C.merge({}, d)
      : C.isArray(d)
      ? d.slice()
      : d;
  }
  function i(c, d, f, h) {
    if (C.isUndefined(d)) {
      if (!C.isUndefined(c)) return r(void 0, c, f, h);
    } else return r(c, d, f, h);
  }
  function s(c, d) {
    if (!C.isUndefined(d)) return r(void 0, d);
  }
  function o(c, d) {
    if (C.isUndefined(d)) {
      if (!C.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, d);
  }
  function a(c, d, f) {
    if (f in t) return r(c, d);
    if (f in e) return r(void 0, c);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, d, f) => i(qy(c), qy(d), f, !0),
  };
  return (
    C.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = l[d] || i,
        h = f(e[d], t[d], d);
      (C.isUndefined(h) && f !== a) || (n[d] = h);
    }),
    n
  );
}
const eS = (e) => {
    const t = Er({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: s,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = ot.from(o)),
      (t.url = Kb(Zb(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (C.isFormData(n)) {
      if (ze.hasStandardBrowserEnv || ze.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((l = o.getContentType()) !== !1) {
        const [c, ...d] = l
          ? l
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        o.setContentType([c || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      ze.hasStandardBrowserEnv &&
      (r && C.isFunction(r) && (r = r(t)), r || (r !== !1 && S5(t.url)))
    ) {
      const c = i && s && j5.read(s);
      c && o.set(i, c);
    }
    return t;
  },
  C5 = typeof XMLHttpRequest < "u",
  k5 =
    C5 &&
    function (e) {
      return new Promise(function (n, r) {
        const i = eS(e);
        let s = i.data;
        const o = ot.from(i.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = i,
          d,
          f,
          h,
          y,
          v;
        function x() {
          y && y(),
            v && v(),
            i.cancelToken && i.cancelToken.unsubscribe(d),
            i.signal && i.signal.removeEventListener("abort", d);
        }
        let w = new XMLHttpRequest();
        w.open(i.method.toUpperCase(), i.url, !0), (w.timeout = i.timeout);
        function p() {
          if (!w) return;
          const g = ot.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            j = {
              data:
                !a || a === "text" || a === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: g,
              config: e,
              request: w,
            };
          Jb(
            function (k) {
              n(k), x();
            },
            function (k) {
              r(k), x();
            },
            j
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = p)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p);
            }),
          (w.onabort = function () {
            w &&
              (r(new q("Request aborted", q.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function () {
            r(new q("Network Error", q.ERR_NETWORK, e, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let S = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const j = i.transitional || Yb;
            i.timeoutErrorMessage && (S = i.timeoutErrorMessage),
              r(
                new q(
                  S,
                  j.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null);
          }),
          s === void 0 && o.setContentType(null),
          "setRequestHeader" in w &&
            C.forEach(o.toJSON(), function (S, j) {
              w.setRequestHeader(j, S);
            }),
          C.isUndefined(i.withCredentials) ||
            (w.withCredentials = !!i.withCredentials),
          a && a !== "json" && (w.responseType = i.responseType),
          c && (([h, v] = kl(c, !0)), w.addEventListener("progress", h)),
          l &&
            w.upload &&
            (([f, y] = kl(l)),
            w.upload.addEventListener("progress", f),
            w.upload.addEventListener("loadend", y)),
          (i.cancelToken || i.signal) &&
            ((d = (g) => {
              w &&
                (r(!g || g.type ? new $i(null, e, w) : g),
                w.abort(),
                (w = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(d),
            i.signal &&
              (i.signal.aborted ? d() : i.signal.addEventListener("abort", d)));
        const m = x5(i.url);
        if (m && ze.protocols.indexOf(m) === -1) {
          r(new q("Unsupported protocol " + m + ":", q.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(s || null);
      });
    },
  E5 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        i;
      const s = function (c) {
        if (!i) {
          (i = !0), a();
          const d = c instanceof Error ? c : this.reason;
          r.abort(
            d instanceof q ? d : new $i(d instanceof Error ? d.message : d)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), s(new q(`timeout ${t} of ms exceeded`, q.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((c) => {
            c.unsubscribe
              ? c.unsubscribe(s)
              : c.removeEventListener("abort", s);
          }),
          (e = null));
      };
      e.forEach((c) => c.addEventListener("abort", s));
      const { signal: l } = r;
      return (l.unsubscribe = () => C.asap(a)), l;
    }
  },
  N5 = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  _5 = async function* (e, t) {
    for await (const n of O5(e)) yield* N5(n, t);
  },
  O5 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Gy = (e, t, n, r) => {
    const i = _5(e, t);
    let s = 0,
      o,
      a = (l) => {
        o || ((o = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: c, value: d } = await i.next();
            if (c) {
              a(), l.close();
              return;
            }
            let f = d.byteLength;
            if (n) {
              let h = (s += f);
              n(h);
            }
            l.enqueue(new Uint8Array(d));
          } catch (c) {
            throw (a(c), c);
          }
        },
        cancel(l) {
          return a(l), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  mu =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  tS = mu && typeof ReadableStream == "function",
  A5 =
    mu &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  nS = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  R5 =
    tS &&
    nS(() => {
      let e = !1;
      const t = new Request(ze.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Ky = 64 * 1024,
  hf = tS && nS(() => C.isReadableStream(new Response("").body)),
  El = { stream: hf && ((e) => e.body) };
mu &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !El[t] &&
        (El[t] = C.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new q(
                `Response type '${t}' is not supported`,
                q.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const L5 = async (e) => {
    if (e == null) return 0;
    if (C.isBlob(e)) return e.size;
    if (C.isSpecCompliantForm(e))
      return (
        await new Request(ze.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (C.isArrayBufferView(e) || C.isArrayBuffer(e)) return e.byteLength;
    if ((C.isURLSearchParams(e) && (e = e + ""), C.isString(e)))
      return (await A5(e)).byteLength;
  },
  M5 = async (e, t) => {
    const n = C.toFiniteNumber(e.getContentLength());
    return n ?? L5(t);
  },
  D5 =
    mu &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: c,
        headers: d,
        withCredentials: f = "same-origin",
        fetchOptions: h,
      } = eS(e);
      c = c ? (c + "").toLowerCase() : "text";
      let y = E5([i, s && s.toAbortSignal()], o),
        v;
      const x =
        y &&
        y.unsubscribe &&
        (() => {
          y.unsubscribe();
        });
      let w;
      try {
        if (
          l &&
          R5 &&
          n !== "get" &&
          n !== "head" &&
          (w = await M5(d, r)) !== 0
        ) {
          let j = new Request(t, { method: "POST", body: r, duplex: "half" }),
            T;
          if (
            (C.isFormData(r) &&
              (T = j.headers.get("content-type")) &&
              d.setContentType(T),
            j.body)
          ) {
            const [k, N] = Hy(w, kl(Wy(l)));
            r = Gy(j.body, Ky, k, N);
          }
        }
        C.isString(f) || (f = f ? "include" : "omit");
        const p = "credentials" in Request.prototype;
        v = new Request(t, {
          ...h,
          signal: y,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: p ? f : void 0,
        });
        let m = await fetch(v);
        const g = hf && (c === "stream" || c === "response");
        if (hf && (a || (g && x))) {
          const j = {};
          ["status", "statusText", "headers"].forEach((P) => {
            j[P] = m[P];
          });
          const T = C.toFiniteNumber(m.headers.get("content-length")),
            [k, N] = (a && Hy(T, kl(Wy(a), !0))) || [];
          m = new Response(
            Gy(m.body, Ky, k, () => {
              N && N(), x && x();
            }),
            j
          );
        }
        c = c || "text";
        let S = await El[C.findKey(El, c) || "text"](m, e);
        return (
          !g && x && x(),
          await new Promise((j, T) => {
            Jb(j, T, {
              data: S,
              headers: ot.from(m.headers),
              status: m.status,
              statusText: m.statusText,
              config: e,
              request: v,
            });
          })
        );
      } catch (p) {
        throw (
          (x && x(),
          p && p.name === "TypeError" && /fetch/i.test(p.message)
            ? Object.assign(new q("Network Error", q.ERR_NETWORK, e, v), {
                cause: p.cause || p,
              })
            : q.from(p, p && p.code, e, v))
        );
      }
    }),
  pf = { http: XR, xhr: k5, fetch: D5 };
C.forEach(pf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Yy = (e) => `- ${e}`,
  I5 = (e) => C.isFunction(e) || e === null || e === !1,
  rS = {
    getAdapter: (e) => {
      e = C.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let o;
        if (
          ((r = n),
          !I5(n) && ((r = pf[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new q(`Unknown adapter '${o}'`);
        if (r) break;
        i[o || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? s.length > 1
            ? `since :
` +
              s.map(Yy).join(`
`)
            : " " + Yy(s[0])
          : "as no adapter specified";
        throw new q(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: pf,
  };
function jc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new $i(null, e);
}
function Qy(e) {
  return (
    jc(e),
    (e.headers = ot.from(e.headers)),
    (e.data = Sc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    rS
      .getAdapter(e.adapter || Oo.adapter)(e)
      .then(
        function (r) {
          return (
            jc(e),
            (r.data = Sc.call(e, e.transformResponse, r)),
            (r.headers = ot.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Xb(r) ||
              (jc(e),
              r &&
                r.response &&
                ((r.response.data = Sc.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = ot.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const iS = "1.8.2",
  gu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    gu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Xy = {};
gu.transitional = function (t, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      iS +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, a) => {
    if (t === !1)
      throw new q(
        i(o, " has been removed" + (n ? " in " + n : "")),
        q.ERR_DEPRECATED
      );
    return (
      n &&
        !Xy[o] &&
        ((Xy[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, o, a) : !0
    );
  };
};
gu.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function F5(e, t, n) {
  if (typeof e != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = t[s];
    if (o) {
      const a = e[s],
        l = a === void 0 || o(a, s, e);
      if (l !== !0)
        throw new q("option " + s + " must be " + l, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new q("Unknown option " + s, q.ERR_BAD_OPTION);
  }
}
const _a = { assertOptions: F5, validators: gu },
  Ut = _a.validators;
class wr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new $y(), response: new $y() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(i)
          : (i = new Error());
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Er(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      _a.assertOptions(
        r,
        {
          silentJSONParsing: Ut.transitional(Ut.boolean),
          forcedJSONParsing: Ut.transitional(Ut.boolean),
          clarifyTimeoutError: Ut.transitional(Ut.boolean),
        },
        !1
      ),
      i != null &&
        (C.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : _a.assertOptions(
              i,
              { encode: Ut.function, serialize: Ut.function },
              !0
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      _a.assertOptions(
        n,
        {
          baseUrl: Ut.spelling("baseURL"),
          withXsrfToken: Ut.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = s && C.merge(s.common, s[n.method]);
    s &&
      C.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete s[v];
        }
      ),
      (n.headers = ot.concat(o, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == "function" && x.runWhen(n) === !1) ||
        ((l = l && x.synchronous), a.unshift(x.fulfilled, x.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (x) {
      c.push(x.fulfilled, x.rejected);
    });
    let d,
      f = 0,
      h;
    if (!l) {
      const v = [Qy.bind(this), void 0];
      for (
        v.unshift.apply(v, a),
          v.push.apply(v, c),
          h = v.length,
          d = Promise.resolve(n);
        f < h;

      )
        d = d.then(v[f++], v[f++]);
      return d;
    }
    h = a.length;
    let y = n;
    for (f = 0; f < h; ) {
      const v = a[f++],
        x = a[f++];
      try {
        y = v(y);
      } catch (w) {
        x.call(this, w);
        break;
      }
    }
    try {
      d = Qy.call(this, y);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, h = c.length; f < h; ) d = d.then(c[f++], c[f++]);
    return d;
  }
  getUri(t) {
    t = Er(this.defaults, t);
    const n = Zb(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Kb(n, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function (t) {
  wr.prototype[t] = function (n, r) {
    return this.request(
      Er(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
C.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, o, a) {
      return this.request(
        Er(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (wr.prototype[t] = n()), (wr.prototype[t + "Form"] = n(!0));
});
class hp {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, a) {
        r.reason || ((r.reason = new $i(s, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new hp(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function z5(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function B5(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const mf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(mf).forEach(([e, t]) => {
  mf[t] = e;
});
function sS(e) {
  const t = new wr(e),
    n = Ib(wr.prototype.request, t);
  return (
    C.extend(n, wr.prototype, t, { allOwnKeys: !0 }),
    C.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return sS(Er(e, i));
    }),
    n
  );
}
const xe = sS(Oo);
xe.Axios = wr;
xe.CanceledError = $i;
xe.CancelToken = hp;
xe.isCancel = Xb;
xe.VERSION = iS;
xe.toFormData = pu;
xe.AxiosError = q;
xe.Cancel = xe.CanceledError;
xe.all = function (t) {
  return Promise.all(t);
};
xe.spread = z5;
xe.isAxiosError = B5;
xe.mergeConfig = Er;
xe.AxiosHeaders = ot;
xe.formToJSON = (e) => Qb(C.isHTMLForm(e) ? new FormData(e) : e);
xe.getAdapter = rS.getAdapter;
xe.HttpStatusCode = mf;
xe.default = xe;
const V5 = () => {
    const e = Gl(),
      [t, n] = b.useState(1),
      [r, i] = b.useState(""),
      [s] = b.useState("+91"),
      [o, a] = b.useState(""),
      [l, c] = b.useState(""),
      [d, f] = b.useState(""),
      [h, y] = b.useState([]),
      [v, x] = b.useState(""),
      [w, p] = b.useState(!1),
      [m, g] = b.useState(0),
      [S, j] = b.useState(!1),
      [T, k] = b.useState(!1),
      [N, P] = b.useState(!1),
      [E, L] = b.useState(!1),
      [D, I] = b.useState(null),
      [B, at] = b.useState(!0),
      le = [
        "I am no longer using my account",
        "I don't understand how to use",
        "I no longer need the service",
        "Privacy concerns",
        "Others",
      ],
      J = (z) => {
        const Te = new Date(z),
          lt = new Date(),
          Dr = Math.ceil(
            (Te.getTime() + 90 * 24 * 60 * 60 * 1e3 - lt.getTime()) /
              (1e3 * 60 * 60 * 24)
          );
        return Math.max(0, Dr);
      };
    b.useEffect(() => {
      if (m > 0) {
        const z = setTimeout(() => g(m - 1), 1e3);
        return () => clearTimeout(z);
      }
    }, [m]);
    const A = async () => {
        if (!r || r.length < 10) {
          Ne.error("Please enter a valid phone number");
          return;
        }
        p(!0);
        try {
          const z = await xe.post(
            "https://staging-server.pathpulse.ai/api/auth/whatsapp/send-otp",
            {
              phone_number: `${s}${r}`,
              country_short_name: s === "+91" ? "IN" : "US",
              type: "whatsapp",
            }
          );
          z.data.sessionId
            ? (c(z.data.sessionId),
              n(2),
              g(60),
              Ne.success("OTP sent successfully to your WhatsApp"),
              z.data.warning &&
                z.data.warning.action === "reactivation_available" &&
                (I(z.data.warning), L(!0)))
            : Ne.error(z.data.message || "Failed to send OTP");
        } catch (z) {
          z.response
            ? Ne.error(z.response.data.message || "Failed to send OTP")
            : Ne.error("Failed to send OTP. Please try again.");
        } finally {
          p(!1);
        }
      },
      F = async () => {
        if (!o || o.length !== 6) {
          Ne.error("Please enter a valid 6-digit OTP");
          return;
        }
        p(!0);
        try {
          const z = await xe.post(
            "https://staging-server.pathpulse.ai/api/auth/whatsapp/verify-otp",
            { sessionId: l, otp: o }
          );
          z.data.action === "login" && z.data.token
            ? (f(z.data.token),
              n(3),
              Ne.success("Phone number verified successfully"))
            : z.data.action === "signup_required"
            ? P(!0)
            : Ne.error(z.data.message || "Invalid OTP");
        } catch (z) {
          z.response
            ? Ne.error(z.response.data.message || "Invalid OTP")
            : Ne.error("Failed to verify OTP. Please try again.");
        } finally {
          p(!1);
        }
      },
      $ = (z) => {
        y((Te) => (Te.includes(z) ? Te.filter((lt) => lt !== z) : [...Te, z]));
      },
      Z = async () => {
        if (h.length === 0) {
          Ne.error("Please select at least one reason for deletion");
          return;
        }
        j(!0);
      },
      ue = async () => {
        p(!0);
        try {
          const z =
              h.includes("Others") && v
                ? [...h.filter((lt) => lt !== "Others"), v]
                : h,
            Te = await xe.delete(
              "https://staging-server.pathpulse.ai/api/auth/profile/delete",
              {
                data: { reason: z.join(", ") },
                headers: { Authorization: `Bearer ${d}` },
              }
            );
          Te.data.message === "Account deleted successfully" ||
          Te.data.message === "Account successfully soft deleted"
            ? (localStorage.clear(), sessionStorage.clear(), k(!0))
            : Ne.error(Te.data.message || "Failed to delete account");
        } catch {
          Ne.error("Failed to delete account. Please try again.");
        } finally {
          p(!1), j(!1);
        }
      },
      Ye = () => {
        m === 0 && A();
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsxs(Ys, {
          children: [
            u.jsx("title", { children: "Delete Account - PathPulse" }),
            u.jsx("meta", { name: "robots", content: "index, follow" }),
            u.jsx("meta", {
              name: "description",
              content:
                "Delete your PathPulse account. Secure account deletion process with 90-day recovery period.",
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "min-h-screen bg-primary flex items-center justify-center p-4",
          children: u.jsxs("div", {
            className: "w-full max-w-2xl animate-fade-in",
            children: [
              u.jsxs("div", {
                className: "text-center mb-8",
                children: [
                  u.jsx("h1", {
                    className: "text-3xl font-clash text-white mb-2",
                    children: "Delete Account",
                  }),
                  u.jsxs("p", {
                    className: "text-gray-400 font-satoshi",
                    children: [
                      t === 1 &&
                        "Enter your phone number to verify your account",
                      t === 2 && "Enter the OTP sent to your WhatsApp",
                      t === 3 && "Tell us why you're leaving",
                    ],
                  }),
                ],
              }),
              B &&
                t === 1 &&
                u.jsxs("div", {
                  className:
                    "bg-[rgba(2,195,148,0.10)] border border-[#02C39433] backdrop-blur-sm rounded-xl p-6 mb-6",
                  children: [
                    u.jsxs("div", {
                      className: "flex justify-between items-start mb-4",
                      children: [
                        u.jsx("h2", {
                          className: "text-xl font-clash text-white",
                          children: "Account Deletion Information",
                        }),
                        u.jsx("button", {
                          onClick: () => at(!1),
                          className:
                            "text-gray-400 hover:text-white transition-colors",
                          children: "✕",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        u.jsxs("div", {
                          className:
                            "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-4",
                          children: [
                            u.jsx("h3", {
                              className:
                                "text-[#02C394] font-clash font-medium mb-2",
                              children: "How to Delete Your Account",
                            }),
                            u.jsxs("div", {
                              className:
                                "space-y-2 text-sm text-gray-300 font-satoshi",
                              children: [
                                u.jsxs("p", {
                                  children: [
                                    "• ",
                                    u.jsx("strong", { children: "Step 1:" }),
                                    " Enter your registered phone number",
                                  ],
                                }),
                                u.jsxs("p", {
                                  children: [
                                    "• ",
                                    u.jsx("strong", { children: "Step 2:" }),
                                    " Verify your identity with OTP",
                                  ],
                                }),
                                u.jsxs("p", {
                                  children: [
                                    "• ",
                                    u.jsx("strong", { children: "Step 3:" }),
                                    " Select reason and confirm deletion",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className:
                            "bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] rounded-lg p-4",
                          children: [
                            u.jsx("h3", {
                              className:
                                "text-red-300 font-clash font-medium mb-2",
                              children: "Deletion Timeline",
                            }),
                            u.jsxs("div", {
                              className:
                                "space-y-2 text-sm text-red-200 font-satoshi",
                              children: [
                                u.jsxs("p", {
                                  children: [
                                    "• ",
                                    u.jsx("strong", { children: "Immediate:" }),
                                    " Account becomes inactive upon deletion request",
                                  ],
                                }),
                                u.jsxs("p", {
                                  children: [
                                    "• ",
                                    u.jsx("strong", { children: "90 Days:" }),
                                    " Account and all data permanently deleted",
                                  ],
                                }),
                                u.jsxs("p", {
                                  children: [
                                    "• ",
                                    u.jsx("strong", { children: "Recovery:" }),
                                    " You can reactivate within 90 days via mobile app",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className:
                            "bg-[rgba(255,193,7,0.1)] border border-[rgba(255,193,7,0.3)] rounded-lg p-4",
                          children: [
                            u.jsx("h3", {
                              className:
                                "text-[#FFC107] font-clash font-medium mb-2",
                              children: "What Gets Deleted",
                            }),
                            u.jsxs("div", {
                              className:
                                "space-y-2 text-sm text-[#FFC107] font-satoshi",
                              children: [
                                u.jsx("p", {
                                  children:
                                    "• Personal information and profile data",
                                }),
                                u.jsx("p", {
                                  children: "• Usage history and preferences",
                                }),
                                u.jsx("p", {
                                  children:
                                    "• All associated content and files",
                                }),
                                u.jsx("p", {
                                  children: "• Account credentials and access",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className:
                            "bg-[rgba(2,195,148,0.1)] border border-[#02C39433] rounded-lg p-4",
                          children: [
                            u.jsx("h3", {
                              className:
                                "text-[#02C394] font-clash font-medium mb-2",
                              children: "Alternative Deletion Methods",
                            }),
                            u.jsxs("div", {
                              className:
                                "space-y-2 text-sm text-gray-300 font-satoshi",
                              children: [
                                u.jsxs("p", {
                                  children: [
                                    "• ",
                                    u.jsx("strong", { children: "Email:" }),
                                    " Send deletion request to ",
                                    u.jsx("a", {
                                      href: "mailto:contact@pathpulse.ai",
                                      className:
                                        "text-[#02C394] hover:underline",
                                      children: "contact@pathpulse.ai",
                                    }),
                                  ],
                                }),
                                u.jsxs("p", {
                                  children: [
                                    "• ",
                                    u.jsx("strong", {
                                      children: "Mobile App:",
                                    }),
                                    " Use the delete account option in the app",
                                  ],
                                }),
                                u.jsxs("p", {
                                  children: [
                                    "• ",
                                    u.jsx("strong", {
                                      children: "Privacy Policy:",
                                    }),
                                    " ",
                                    u.jsx("a", {
                                      href: "/privacyandpolicy-app/",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "text-[#02C394] hover:underline",
                                      children: "View detailed information",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsx("div", {
                          className:
                            "bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] rounded-lg p-4",
                          children: u.jsxs("p", {
                            className: "text-sm text-red-300 font-satoshi",
                            children: [
                              u.jsx("strong", { children: "Important:" }),
                              " This action is irreversible after 90 days. All your data will be permanently deleted and cannot be recovered.",
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              u.jsx("div", {
                className: "flex justify-center mb-8",
                children: u.jsx("div", {
                  className: "flex space-x-2",
                  children: [1, 2, 3].map((z) =>
                    u.jsx(
                      "div",
                      {
                        className: `w-3 h-3 rounded-full ${
                          t >= z ? "bg-[#02C394]" : "bg-gray-600"
                        }`,
                      },
                      z
                    )
                  ),
                }),
              }),
              t === 1 &&
                u.jsxs("div", {
                  className:
                    "bg-[rgba(2,195,148,0.10)] border border-[#02C39433] backdrop-blur-sm rounded-xl p-6",
                  children: [
                    !B &&
                      u.jsx("button", {
                        onClick: () => at(!0),
                        className:
                          "w-full mb-4 px-4 py-2 bg-[rgba(2,195,148,0.1)] border border-[#02C39433] text-[#02C394] rounded-lg font-satoshi text-sm hover:bg-[rgba(2,195,148,0.2)] transition-all duration-300",
                        children: "📋 Show Account Deletion Information",
                      }),
                    u.jsxs("div", {
                      className: "mb-4",
                      children: [
                        u.jsx("label", {
                          className: "block text-white font-clash mb-2",
                          children: "Phone Number",
                        }),
                        u.jsxs("div", {
                          className: "flex",
                          children: [
                            u.jsx("div", {
                              className:
                                "bg-[#081716] border border-[#02C39433] text-white px-3 py-2 rounded-l-lg font-clash flex items-center",
                              children: "🇮🇳 +91",
                            }),
                            u.jsx("input", {
                              type: "tel",
                              value: r,
                              onChange: (z) =>
                                i(z.target.value.replace(/\D/g, "")),
                              placeholder: "Enter phone number",
                              className:
                                "flex-1 bg-[#081716] border border-l-0 border-[#02C39433] text-white px-3 py-2 rounded-r-lg font-clash placeholder-gray-500 focus:outline-none",
                              maxLength: 10,
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsx("button", {
                      onClick: A,
                      disabled: w || !r,
                      className:
                        "w-full px-6 py-3 bg-[#02C394] text-white rounded-xl font-clash font-medium transition-all duration-300 hover:bg-[#02A884] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                      children: w ? "Sending..." : "Send OTP",
                    }),
                  ],
                }),
              t === 2 &&
                u.jsxs("div", {
                  className:
                    "bg-[rgba(2,195,148,0.10)] border border-[#02C39433] backdrop-blur-sm rounded-xl p-6",
                  children: [
                    u.jsxs("div", {
                      className: "mb-6",
                      children: [
                        u.jsx("label", {
                          className: "block text-white font-clash mb-2",
                          children: "Enter OTP",
                        }),
                        u.jsx("input", {
                          type: "text",
                          value: o,
                          onChange: (z) => a(z.target.value.replace(/\D/g, "")),
                          placeholder: "Enter 6-digit OTP",
                          className:
                            "w-full bg-[#081716] border border-[#02C39433] text-white px-3 py-2 rounded-lg font-clash placeholder-gray-500 text-center text-2xl tracking-widest focus:outline-none",
                          maxLength: 6,
                          autoFocus: !0,
                        }),
                      ],
                    }),
                    u.jsx("button", {
                      onClick: F,
                      disabled: w || o.length !== 6,
                      className:
                        "w-full px-6 py-3 bg-[#02C394] text-white rounded-xl font-clash font-medium transition-all duration-300 hover:bg-[#02A884] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mb-4",
                      children: w ? "Verifying..." : "Verify OTP",
                    }),
                    u.jsxs("div", {
                      className: "flex justify-between items-center",
                      children: [
                        u.jsx("button", {
                          onClick: Ye,
                          disabled: m > 0,
                          className:
                            "text-sm text-[#02C394] hover:text-[#02A884] disabled:opacity-50 disabled:cursor-not-allowed font-satoshi",
                          children: m > 0 ? `Resend in ${m}s` : "Resend OTP",
                        }),
                        u.jsx("button", {
                          onClick: () => n(1),
                          className:
                            "text-sm text-gray-400 hover:text-white font-satoshi",
                          children: "Change Number",
                        }),
                      ],
                    }),
                  ],
                }),
              t === 3 &&
                u.jsxs("div", {
                  className:
                    "bg-[rgba(2,195,148,0.10)] border border-[#02C39433] backdrop-blur-sm rounded-xl p-6",
                  children: [
                    u.jsx("h3", {
                      className: "text-white font-clash mb-2",
                      children: "Why are you leaving?",
                    }),
                    u.jsx("p", {
                      className: "text-gray-400 font-satoshi mb-4",
                      children:
                        "We're sorry to see you go. Please tell us why you're deleting your account.",
                    }),
                    u.jsx("div", {
                      className:
                        "bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] rounded-lg p-4 mb-6",
                      children: u.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          u.jsx("p", {
                            className:
                              "text-sm text-red-300 font-satoshi font-medium",
                            children: "⚠️ Important Deletion Information:",
                          }),
                          u.jsxs("ul", {
                            className:
                              "text-sm text-red-200 font-satoshi space-y-1 ml-4",
                            children: [
                              u.jsxs("li", {
                                children: [
                                  "• Your account becomes ",
                                  u.jsx("strong", {
                                    children: "inactive immediately",
                                  }),
                                  " upon deletion request",
                                ],
                              }),
                              u.jsxs("li", {
                                children: [
                                  "• Account and all data will be ",
                                  u.jsx("strong", {
                                    children:
                                      "permanently deleted after 90 days",
                                  }),
                                ],
                              }),
                              u.jsxs("li", {
                                children: [
                                  "• You can ",
                                  u.jsx("strong", {
                                    children: "reactivate within 90 days",
                                  }),
                                  " via the mobile app",
                                ],
                              }),
                              u.jsxs("li", {
                                children: [
                                  "• This action is ",
                                  u.jsx("strong", {
                                    children: "irreversible after 90 days",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsx("div", {
                            className:
                              "mt-3 pt-3 border-t border-[rgba(239,68,68,0.3)]",
                            children: u.jsx("a", {
                              href: "/privacyandpolicy-app/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "text-[#02C394] hover:text-[#02A884] underline font-medium text-sm",
                              children:
                                "📄 View Privacy Policy for detailed information",
                            }),
                          }),
                        ],
                      }),
                    }),
                    u.jsx("div", {
                      className: "space-y-3 mb-6",
                      children: le.map((z) =>
                        u.jsxs(
                          "label",
                          {
                            onClick: () => $(z),
                            className:
                              "flex items-center cursor-pointer p-3 rounded-lg hover:bg-[rgba(2,195,148,0.08)] transition-all duration-200 border border-transparent hover:border-[#02C39433]",
                            children: [
                              u.jsx("div", {
                                className: "relative w-5 h-5 flex-shrink-0",
                                children: h.includes(z)
                                  ? u.jsxs(u.Fragment, {
                                      children: [
                                        u.jsx("img", {
                                          src: "/reason-selector-bg.svg",
                                          alt: "selected",
                                          className: "w-5 h-5",
                                        }),
                                        u.jsx("img", {
                                          src: "/reason-selector-tick.svg",
                                          alt: "tick",
                                          className:
                                            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4",
                                        }),
                                      ],
                                    })
                                  : u.jsx("img", {
                                      src: "/reason-selector-empty-ring.svg",
                                      alt: "unselected",
                                      className: "w-5 h-5",
                                    }),
                              }),
                              u.jsx("span", {
                                className:
                                  "ml-3 text-white font-satoshi text-sm",
                                children: z,
                              }),
                            ],
                          },
                          z
                        )
                      ),
                    }),
                    h.includes("Others") &&
                      u.jsxs("div", {
                        className: "mb-6",
                        children: [
                          u.jsx("label", {
                            className:
                              "block text-white font-clash mb-2 text-sm",
                            children: "Please specify",
                          }),
                          u.jsx("textarea", {
                            value: v,
                            onChange: (z) => x(z.target.value),
                            placeholder:
                              "Tell us more about your reason for leaving...",
                            className:
                              "w-full bg-[#081716] border border-[#02C39433] text-white px-4 py-3 rounded-lg font-satoshi placeholder-gray-500 resize-none focus:border-[#02C394] focus:ring-1 focus:ring-[#02C394] transition-all duration-200",
                            rows: 3,
                          }),
                        ],
                      }),
                    u.jsx("button", {
                      onClick: Z,
                      disabled: h.length === 0,
                      className:
                        "w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-clash font-medium transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]",
                      children: "Delete Account",
                    }),
                  ],
                }),
              t > 1 &&
                t < 3 &&
                u.jsx("button", {
                  onClick: () => n(t - 1),
                  className:
                    "w-full mt-4 px-6 py-2 text-white border border-gray-600 rounded-xl font-clash font-medium transition-all duration-300 hover:bg-gray-800",
                  children: "Back",
                }),
              t === 1 &&
                u.jsx("div", {
                  className: "mt-8 text-center",
                  children: u.jsxs("div", {
                    className:
                      "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4",
                    children: [
                      u.jsx("p", {
                        className: "text-sm text-gray-400 font-satoshi mb-2",
                        children: "Need help with account deletion?",
                      }),
                      u.jsxs("div", {
                        className:
                          "flex flex-col sm:flex-row gap-2 justify-center items-center text-sm",
                        children: [
                          u.jsx("a", {
                            href: "mailto:contact@pathpulse.ai",
                            className:
                              "text-[#02C394] hover:text-[#02A884] font-satoshi hover:underline",
                            children: "📧 Email: contact@pathpulse.ai",
                          }),
                          u.jsx("span", {
                            className: "text-gray-600 hidden sm:inline",
                            children: "|",
                          }),
                          u.jsx("a", {
                            href: "/privacyandpolicy-app/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "text-[#02C394] hover:text-[#02A884] font-satoshi hover:underline",
                            children: "📄 Privacy Policy",
                          }),
                          u.jsx("span", {
                            className: "text-gray-600 hidden sm:inline",
                            children: "|",
                          }),
                          u.jsx("a", {
                            href: "/",
                            className:
                              "text-[#02C394] hover:text-[#02A884] font-satoshi hover:underline",
                            children: "🏠 Back to Home",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              S &&
                u.jsx("div", {
                  className:
                    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                  children: u.jsxs("div", {
                    className:
                      "bg-[#081716] border border-[#02C39433] rounded-xl p-6 max-w-md w-full",
                    children: [
                      u.jsx("h3", {
                        className: "text-xl font-clash text-white mb-4",
                        children: "Confirm Deletion",
                      }),
                      u.jsx("p", {
                        className: "text-gray-400 font-satoshi mb-6",
                        children:
                          "This action cannot be undone. All your data will be permanently deleted after 90 days.",
                      }),
                      u.jsxs("div", {
                        className: "flex space-x-3",
                        children: [
                          u.jsx("button", {
                            onClick: () => j(!1),
                            className:
                              "flex-1 px-4 py-2 text-white border border-gray-600 rounded-lg font-clash font-medium transition-all duration-300 hover:bg-gray-800",
                            children: "Cancel",
                          }),
                          u.jsx("button", {
                            onClick: ue,
                            disabled: w,
                            className:
                              "flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-clash font-medium transition-all duration-300 hover:bg-red-700 disabled:opacity-50",
                            children: w ? "Deleting..." : "Delete",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              T &&
                u.jsx("div", {
                  className:
                    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                  children: u.jsxs("div", {
                    className:
                      "bg-[#081716] border border-[#02C39433] rounded-xl p-6 max-w-md w-full text-center",
                    children: [
                      u.jsxs("div", {
                        className: "mb-4",
                        children: [
                          u.jsx("h3", {
                            className: "text-2xl font-clash text-white mb-4",
                            children: "Account Deleted Successfully",
                          }),
                          u.jsx("p", {
                            className:
                              "text-sm text-green-300 font-satoshi mb-3",
                            children:
                              "Your account will be permanently removed within 90 days.",
                          }),
                          u.jsx("p", {
                            className: "text-gray-400 font-satoshi text-sm",
                            children:
                              "During this period, your account will be inactive.",
                          }),
                        ],
                      }),
                      u.jsx("button", {
                        onClick: () => {
                          k(!1), e("/");
                        },
                        className:
                          "w-full px-6 py-3 bg-[#02C394] text-white rounded-xl font-clash font-medium transition-all duration-300 hover:bg-[#02A884] hover:shadow-lg mt-3",
                        children: "OK",
                      }),
                    ],
                  }),
                }),
              N &&
                u.jsx("div", {
                  className:
                    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                  children: u.jsxs("div", {
                    className:
                      "bg-[#081716] border border-[#02C39433] rounded-xl p-6 max-w-md w-full",
                    children: [
                      u.jsx("h3", {
                        className: "text-xl font-clash text-white mb-4",
                        children: "Account Not Found",
                      }),
                      u.jsx("p", {
                        className: "text-gray-400 font-satoshi mb-6",
                        children:
                          "This phone number is not registered. You need to sign up first to delete your account.",
                      }),
                      u.jsx("button", {
                        onClick: () => {
                          P(!1), e("/");
                        },
                        className:
                          "w-full px-4 py-2 bg-[#02C394] text-white rounded-lg font-clash font-medium transition-all duration-300 hover:bg-[#02A884] hover:shadow-lg",
                        children: "Go to Home",
                      }),
                    ],
                  }),
                }),
              E &&
                D &&
                u.jsx("div", {
                  className:
                    "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                  onClick: () => {
                    L(!1), I(null), n(1), i(""), a(""), c("");
                  },
                  children: u.jsxs("div", {
                    className:
                      "bg-[#081716] border border-[#02C39433] backdrop-blur-sm rounded-xl p-6 max-w-md w-full shadow-[0px_4.033934116363525px_4.033934116363525px_0px_rgba(0,0,0,0.25)]",
                    onClick: (z) => z.stopPropagation(),
                    children: [
                      u.jsxs("div", {
                        className: "text-center mb-6",
                        children: [
                          u.jsx("h3", {
                            className: "text-xl font-clash text-white mb-2",
                            children: "Account Reactivation",
                          }),
                          u.jsx("p", {
                            className: "text-gray-400 font-satoshi text-sm",
                            children: "Your account was previously deleted",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "space-y-4 mb-6",
                        children: [
                          u.jsxs("div", {
                            className:
                              "bg-[rgba(2,195,148,0.10)] border border-[#02C39433] backdrop-blur-sm rounded-xl p-4 text-center",
                            children: [
                              u.jsx("p", {
                                className:
                                  "text-xs text-[#02C394] font-satoshi mb-1 uppercase tracking-wide",
                                children: "Time remaining",
                              }),
                              u.jsxs("p", {
                                className:
                                  "text-2xl text-[#02C394] font-clash font-bold",
                                children: [J(D.deleted_at), " days"],
                              }),
                              u.jsx("p", {
                                className:
                                  "text-xs text-gray-400 font-satoshi mt-1",
                                children: "until permanent deletion",
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className:
                              "bg-[rgba(2,195,148,0.10)] border border-[#02C39433] backdrop-blur-sm rounded-xl p-4",
                            children: [
                              u.jsx("p", {
                                className:
                                  "text-sm text-[#02C394] font-satoshi font-medium mb-1",
                                children: "How to reactivate",
                              }),
                              u.jsx("p", {
                                className: "text-sm text-white font-satoshi",
                                children:
                                  "Please login through the mobile app to restore your account.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "flex space-x-3",
                        children: u.jsx("button", {
                          onClick: () => {
                            L(!1), I(null), n(1), i(""), a(""), c("");
                          },
                          className:
                            "flex-1 px-6 py-3 bg-[#02C394] text-white rounded-xl font-clash font-medium transition-all duration-300 hover:bg-[#02A884] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                          children: "Cancel",
                        }),
                      }),
                    ],
                  }),
                }),
            ],
          }),
        }),
      ],
    });
  },
  $5 = () =>
    u.jsxs(u.Fragment, {
      children: [
        u.jsx(Di, {
          title: "Privacy Policy - PathPulse.ai",
          description:
            "Learn about PathPulse.ai's privacy policy and how we protect your data. Understand our data collection, usage, and protection practices for our AI navigation services.",
          keywords:
            "privacy policy, data protection, PathPulse privacy, user data, GDPR compliance",
          url: "https://pathpulse.ai/privacyandpolicy-app",
          noindex: !0,
        }),
        u.jsx("div", {
          className: "bg-primary relative overflow-hidden text-white",
          children: u.jsxs("div", {
            className: "relative min-h-screen",
            children: [
              u.jsx("div", {
                className: "lg:block hidden w-full",
                children: u.jsx(Lr, {}),
              }),
              u.jsx("div", {
                className: "lg:hidden w-full",
                children: u.jsx(Mr, {}),
              }),
              u.jsxs("div", {
                className: "container mx-auto px-4 py-8 text-base",
                children: [
                  u.jsx("h1", {
                    className: "text-4xl font-bold mb-2 mt-20",
                    children: "Privacy Policy — PathPulse",
                  }),
                  u.jsx("p", {
                    className: "text-gray-400 mb-6",
                    children: "Last Updated: 19-08-2025",
                  }),
                  u.jsx("p", {
                    className: "mb-4",
                    children:
                      "PathPulse Inc. (“Company”, “we”, “us”, or “our”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, share, and protect your information when you use the PathPulse mobile application (“App”).",
                  }),
                  u.jsx("p", {
                    className: "mb-4",
                    children:
                      "By using the App, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use immediately.",
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "1. Data Controller",
                  }),
                  u.jsx("p", {
                    className: "mb-2",
                    children:
                      "PathPulse Inc. is the data controller of your personal information.",
                  }),
                  u.jsxs("p", {
                    className: "mb-2",
                    children: [
                      u.jsx("strong", { children: "Contact:" }),
                      " ",
                      u.jsx("a", {
                        href: "mailto:privacy@pathpulse.ai",
                        className: "underline hover:text-gray-300",
                        children: "privacy@pathpulse.ai",
                      }),
                    ],
                  }),
                  u.jsx("p", {
                    children:
                      "If you are located in the UK or EU, we have appointed a data protection representative (see Section 13).",
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "2. Information We Collect",
                  }),
                  u.jsx("p", {
                    className: "mb-4",
                    children:
                      "We may collect the following categories of data:",
                  }),
                  u.jsx("h3", {
                    className: "text-2xl font-semibold mb-2 mt-4",
                    children: "2.1 Account & Identity Data",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children:
                          "Mobile number (for WhatsApp OTP verification)",
                      }),
                      u.jsx("li", {
                        children: "Profile details (if voluntarily provided)",
                      }),
                    ],
                  }),
                  u.jsx("h3", {
                    className: "text-2xl font-semibold mb-2 mt-4",
                    children: "2.2 Recording & Travel Data",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children:
                          "Video recordings from dashcams or mobile devices",
                      }),
                      u.jsx("li", {
                        children: "Location data (GPS, route, speed)",
                      }),
                      u.jsx("li", {
                        children:
                          "Device sensor data (accelerometer, gyroscope)",
                      }),
                    ],
                  }),
                  u.jsx("h3", {
                    className: "text-2xl font-semibold mb-2 mt-4",
                    children: "2.3 Technical Data",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children: "Device make, model, OS version",
                      }),
                      u.jsx("li", { children: "IP address" }),
                      u.jsx("li", {
                        children: "App usage logs, crash reports",
                      }),
                    ],
                  }),
                  u.jsx("h3", {
                    className: "text-2xl font-semibold mb-2 mt-4",
                    children: "2.4 Communication Data",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", { children: "Messages sent to support" }),
                      u.jsx("li", { children: "Consent preferences" }),
                    ],
                  }),
                  u.jsx("h3", {
                    className: "text-2xl font-semibold mb-2 mt-4",
                    children: "2.5 Cookies & Tracking",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children:
                          "Cookies and SDKs for analytics, crash monitoring, and fraud prevention",
                      }),
                      u.jsx("li", {
                        children: "Device identifiers for usage statistics",
                      }),
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "3. How We Use Your Data & Legal Basis",
                  }),
                  u.jsx("p", {
                    className: "mb-4",
                    children:
                      "We process your data for the following purposes, under GDPR lawful bases:",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", {
                            children: "Account creation & login",
                          }),
                          " → Contractual necessity",
                        ],
                      }),
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", {
                            children: "AI analysis of recordings",
                          }),
                          " → Legitimate interest & Consent",
                        ],
                      }),
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", {
                            children:
                              "Sharing anonymized data with third parties",
                          }),
                          " → Legitimate interest & Consent",
                        ],
                      }),
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", {
                            children:
                              "Fraud detection & anti-cheating monitoring",
                          }),
                          " (e.g., GPS spoofing prevention, account misuse detection) → Legitimate interest",
                        ],
                      }),
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", {
                            children: "Marketing communications",
                          }),
                          " (where applicable) → Consent (opt-in)",
                        ],
                      }),
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", {
                            children: "Compliance with legal obligations",
                          }),
                          " → Legal obligation",
                        ],
                      }),
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "4. Privacy for Bystanders",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children:
                          "PathPulse uses AI-based anonymization (e.g., blurring faces, license plates) to reduce capture of identifiable information of bystanders.",
                      }),
                      u.jsx("li", {
                        children:
                          "We will not sell or share raw unblurred imagery.",
                      }),
                      u.jsx("li", {
                        children:
                          "Individuals may request removal or additional blurring of sensitive data (see Section 12).",
                      }),
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "5. User Privacy Controls",
                  }),
                  u.jsx("p", { className: "mb-2", children: "You can:" }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children:
                          "Pause or stop data collection at any time by stopping recording or logging out.",
                      }),
                      u.jsx("li", {
                        children: "Request deletion of your data/account.",
                      }),
                      u.jsx("li", {
                        children:
                          "Request “privacy zones” (e.g., around home or workplace) where data will not be collected.",
                      }),
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "6. Data Sharing",
                  }),
                  u.jsx("p", {
                    className: "mb-2",
                    children: "We may share data with:",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children:
                          "Third-party service providers (storage, analytics, fraud prevention)",
                      }),
                      u.jsx("li", {
                        children:
                          "Government agencies, research bodies, and private partners (only anonymized/aggregated datasets)",
                      }),
                      u.jsx("li", {
                        children:
                          "Business transfers (merger, acquisition, restructuring — your data may transfer to the new entity under this same policy)",
                      }),
                    ],
                  }),
                  u.jsx("p", { children: "We do not sell personal data." }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "7. Data Retention",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", { children: "Personal data" }),
                          " → retained as long as necessary for services/legal obligations.",
                        ],
                      }),
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", {
                            children: "After account deletion",
                          }),
                          " → your personal data will be deleted within 90 days, unless retention is required by law.",
                        ],
                      }),
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", { children: "Anonymized datasets" }),
                          " → may be stored indefinitely.",
                        ],
                      }),
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "8. Data Security",
                  }),
                  u.jsx("p", {
                    className: "mb-2",
                    children:
                      "We apply technical and organizational safeguards:",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children:
                          "End-to-end encryption for sensitive transfers",
                      }),
                      u.jsx("li", { children: "Access controls for staff" }),
                      u.jsx("li", {
                        children: "Fraud monitoring & anti-cheating systems",
                      }),
                      u.jsx("li", { children: "Regular security audits" }),
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "9. Marketing Communications",
                  }),
                  u.jsx("p", {
                    className: "mb-2",
                    children:
                      "We may send marketing/newsletters only with your opt-in consent (or where permitted by law).",
                  }),
                  u.jsx("p", {
                    children:
                      "You can unsubscribe anytime via email link or account settings.",
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "10. International Transfers",
                  }),
                  u.jsx("p", {
                    className: "mb-2",
                    children:
                      "Your data may be processed outside your country. We ensure protection through:",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children:
                          "Standard Contractual Clauses (SCCs) for EU/UK users",
                      }),
                      u.jsx("li", {
                        children: "Equivalent safeguards where applicable",
                      }),
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "11. Device & App Disclaimer",
                  }),
                  u.jsx("p", {
                    className: "mb-2",
                    children: "We are not responsible for:",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children:
                          "Device battery drain, overheating, storage depletion",
                      }),
                      u.jsx("li", {
                        children: "Software or hardware malfunctions",
                      }),
                      u.jsx("li", {
                        children: "Performance issues caused by the App",
                      }),
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "12. Your Rights",
                  }),
                  u.jsx("p", {
                    className: "mb-2",
                    children:
                      "Depending on your jurisdiction (GDPR, CCPA, etc.), you may:",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children: "Access, correct, or delete your data",
                      }),
                      u.jsx("li", {
                        children: "Restrict or object to processing",
                      }),
                      u.jsx("li", { children: "Request data portability" }),
                      u.jsx("li", {
                        children:
                          "Withdraw consent (where processing is consent-based)",
                      }),
                      u.jsx("li", {
                        children:
                          "Lodge a complaint with your supervisory authority",
                      }),
                    ],
                  }),
                  u.jsxs("p", {
                    children: [
                      "Contact us at ",
                      u.jsx("a", {
                        href: "mailto:privacy@pathpulse.ai",
                        className: "underline hover:text-gray-300",
                        children: "privacy@pathpulse.ai",
                      }),
                      " to exercise rights.",
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "13. EU & UK Representatives",
                  }),
                  u.jsx("p", {
                    className: "mb-2",
                    children: "For EU/UK users:",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", { children: "UK Representative:" }),
                          " [To appoint, e.g., VeraSafe UK]",
                        ],
                      }),
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", { children: "EU Representative:" }),
                          " [To appoint, e.g., VeraSafe Ireland]",
                        ],
                      }),
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "14. Complaints",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", { children: "EU/EEA:" }),
                          " You may complain to your national Data Protection Authority → ",
                          u.jsx("a", {
                            href: "https://edpb.europa.eu/about-edpb/about-edpb/members_en",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "underline hover:text-gray-300",
                            children: "List",
                          }),
                          ".",
                        ],
                      }),
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", { children: "UK:" }),
                          " Information Commissioner’s Office (ICO) → ",
                          u.jsx("a", {
                            href: "https://ico.org.uk",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "underline hover:text-gray-300",
                            children: "https://ico.org.uk",
                          }),
                          ".",
                        ],
                      }),
                      u.jsxs("li", {
                        children: [
                          u.jsx("strong", { children: "US/California:" }),
                          " You may exercise your rights under CCPA by contacting us directly.",
                        ],
                      }),
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "15. Children’s Privacy",
                  }),
                  u.jsx("p", {
                    children:
                      "The App is not intended for users under 18. We do not knowingly collect data from minors.",
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "16. Changes to This Policy",
                  }),
                  u.jsxs("ul", {
                    className: "list-disc ml-6 mb-4",
                    children: [
                      u.jsx("li", {
                        children:
                          "We may update this Privacy Policy from time to time.",
                      }),
                      u.jsx("li", {
                        children:
                          "Updates will be posted in-app & on our website.",
                      }),
                      u.jsx("li", {
                        children:
                          "Continued use of the App = acceptance of updates.",
                      }),
                    ],
                  }),
                  u.jsx("h2", {
                    className: "text-3xl font-bold mb-3 mt-6",
                    children: "17. Contact",
                  }),
                  u.jsx("p", {
                    children: u.jsx("a", {
                      href: "mailto:privacy@pathpulse.ai",
                      className: "underline hover:text-gray-300",
                      children: "privacy@pathpulse.ai",
                    }),
                  }),
                ],
              }),
              u.jsx(Rr, {}),
            ],
          }),
        }),
      ],
    }),
  Cn = [
    { number: 1, title: "Processes collected data points (from PulseNet)" },
    { number: 2, title: "Figures out the precise problem" },
    { number: 3, title: "Provides the most optimal solution" },
  ],
  Jy = (e, t, n) => {
    const r = Math.floor(n / 2);
    let i = (e - t + n) % n;
    return i > r && (i -= n), i;
  },
  U5 = () => {
    const [e, t] = b.useState(0),
      [n, r] = b.useState(!1);
    b.useEffect(() => {
      r(!0);
      const s = setInterval(() => {
        t((o) => (o + 1) % Cn.length);
      }, 5e3);
      return () => clearInterval(s);
    }, []);
    const i = r1(
      Cn.length,
      Cn.map((s, o) => {
        const a = Jy(o, e, Cn.length),
          l = a * 350,
          c = n ? (Math.abs(a) === 2 ? 40 : 0) : 200,
          d = a === 0 ? 1.1 : Math.abs(a) === 1 ? 0.85 : 0.7,
          f = n ? (Math.abs(a) > 2 ? 0 : a === 0 ? 1 : 0.6) : 0,
          h = a === 0 ? 3 : Math.abs(a) === 1 ? 2 : 1;
        return {
          transform: `translate(${l}px, ${c}px) scale(${d})`,
          opacity: f,
          config: _h.gentle,
          zIndex: h,
          delay: n ? 0 : o * 200,
        };
      })
    );
    return u.jsxs("section", {
      className: " text-white lg:pt-28 py-16 px-4 lg:px-20",
      children: [
        u.jsxs("div", {
          className: "text-center mb-12",
          children: [
            u.jsx("p", {
              className:
                "text-emerald-400 text-sm lg:text-3xl font-clash font-medium leading-relaxed",
              children:
                "PulseGen is a smart LLM that watches road data and understands what's happening — not just spotting objects, but knowing what they mean for your drive.",
            }),
            u.jsx("h2", {
              className:
                "text-3xl lg:text-7xl bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent font-clashSemiBold mt-6",
              children: "WHAT IS PULSEGEN ?",
            }),
            u.jsx("p", {
              className: "text-zinc-200 text-base lg:text-2xl mt-10",
              children: "A powerful AI brain processes",
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "relative w-full h-[340px] lg:flex items-center justify-center mt-10 overflow-hidden hidden",
          children: i.map((s, o) => {
            const a = Jy(o, e, Cn.length),
              l = a === 0 ? 3 : Math.abs(a) === 1 ? 2 : 1;
            return u.jsxs(
              s1.div,
              {
                style: {
                  ...s,
                  zIndex: l,
                  position: "absolute",
                  pointerEvents: a === 0 ? "auto" : "none",
                },
                className: `w-[220px] sm:w-[260px] md:w-[300px] h-[240px] md:h-[270px] rounded-2xl text-white shadow-lg flex flex-col justify-center items-center p-6 text-center
                    ${Math.abs(a) === 1 ? "backdrop-blur-3xl" : ""}
                    ${
                      Math.abs(a) === 1
                        ? " blur-[4px] opacity-0 pointer-events-none"
                        : ""
                    }
                  `,
                children: [
                  u.jsx("div", {
                    className:
                      "w-24 h-24 md:w-28 md:h-28 text-4xl md:text-5xl font-clashSemiBold bg-gradient-to-b from-[#0A7857] via-[#0A7857] to-[#0A171B] rounded-full flex items-center justify-center border border-emerald-800 mb-4",
                    children: Cn[o].number,
                  }),
                  u.jsx("h3", {
                    className: "text-xl md:text-2xl font-clashSemiBold",
                    children: Cn[o].title,
                  }),
                ],
              },
              o
            );
          }),
        }),
        u.jsx("div", {
          className: "flex flex-col items-center lg:hidden gap-10",
          children: Cn.map((s) =>
            u.jsxs(
              "div",
              {
                className:
                  "relative flex flex-col items-center justify-center text-center",
                children: [
                  u.jsx("div", {
                    className:
                      "w-16 h-16 rounded-full bg-gradient-to-b from-[#0A7857] via-[#0A7857] to-[#0A171B] shadow-[inset_0px_5.096928596496582px_10.193857192993164px_0px_rgba(15,23,30,0.40)] px-2 py-2 border-1 border-emerald-800 flex items-center justify-center text-5xl font-clashSemiBold z-10",
                    children: u.jsx("p", {
                      className:
                        "bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent text-center",
                      children: s.number,
                    }),
                  }),
                  u.jsx("div", {
                    className:
                      "mt-[-20px] flex justify-center items-center w-60 h-20 bg-transparent rounded-2xl border-2 border-zinc-700/100 z-0",
                    children: s.title,
                  }),
                ],
              },
              s.number
            )
          ),
        }),
      ],
    });
  },
  De = [
    {
      id: 1,
      label: "Feature 01",
      title: "Smarter Alerts",
      desc: "PulseGen doesn’t just spot hazards—it explains them. Know why that slowdown or detour matters, not just that it exists.",
      icons: [
        "/icon1.svg",
        "/icon2.svg",
        "/icon3.svg",
        "/icon4.svg",
        "/icon5.svg",
      ],
    },
    {
      id: 2,
      label: "Feature 02",
      title: "Faster Reactions",
      desc: "Roads change fast—PulseGen adapts. Instant updates mean you’re always ahead of traffic, weather, and surprises.",
      image: "/feature2.svg",
    },
    {
      id: 3,
      label: "Feature 03",
      title: "Always Learning",
      desc: "Every mile makes PulseGen sharper. It evolves with real-world driving to give you smarter routes over time.",
      image: "/mesh.svg",
    },
  ],
  H5 = () =>
    u.jsxs("section", {
      className: " text-white px-6 py-20 lg:px-20 font-sans",
      children: [
        u.jsxs("div", {
          className: "text-center mb-16",
          children: [
            u.jsxs("h2", {
              className: "text-4xl lg:text-7xl font-clashSemiBold mb-4",
              children: [
                "Why Choose ",
                u.jsx("span", {
                  className: "text-white/80",
                  children: "PulseGen?",
                }),
              ],
            }),
            u.jsx("p", {
              className: "text-[#B1B4B6] text-sm lg:text-lg",
              children:
                "Fast solutions, sharp results and  delivered effortlessly",
            }),
          ],
        }),
        u.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8",
          children: [
            u.jsxs("div", {
              className:
                "bg-gradient-to-b from-[#081719]/10 via-[#071A20]/25 rounded-xl p-6 relative overflow-hidden border border-white/10",
              children: [
                u.jsx("p", {
                  className:
                    "text-[10px] lg:text-sm flex justify-center font-clashSemiBold px-2 py-1 bg-gradient-to-b from-[#1B2428] via-[#2B363C] to-[#1B2428] w-[70px] lg:w-[100px] [text-shadow:_1px_1px_11px_rgb(255_255_255_/_0.25)] rounded-full text-gray-400 mb-2",
                  children: De[0].label,
                }),
                u.jsx("h3", {
                  className: "text-lg lg:text-3xl font-clashSemiBold mb-3",
                  children: De[0].title,
                }),
                u.jsx("p", {
                  className: "text-sm lg:text-lg text-[#B1B4B6] mb-6",
                  children: De[0].desc,
                }),
                u.jsxs("div", {
                  className: "relative w-full h-[120px] lg:h-full mx-auto",
                  children: [
                    u.jsx("div", {
                      className:
                        "w-full h-[600px] bg-gradient-to-b from-[#08191F] to-gray-[#08191F]/0 rounded-full shadow-[0px_0px_64px_4px_rgba(0,0,0,0.24)] absolute",
                    }),
                    u.jsx("img", {
                      src: De[0].icons[4],
                      alt: "icon5",
                      className:
                        "absolute w-20 h-20 lg:w-40 lg:h-40 -bottom-20 lg:bottom-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10",
                    }),
                    u.jsx("img", {
                      src: De[0].icons[0],
                      alt: "icon1",
                      className:
                        "absolute w-14 h-14 lg:w-20 lg:h-20 -right-6 lg:right-[-4%] top-20 lg:top-40",
                    }),
                    u.jsx("img", {
                      src: De[0].icons[1],
                      alt: "icon2",
                      className:
                        "absolute w-20 h-20 lg:w-28 lg:h-28 -top-5 left-12 lg:left-[16%] lg:top-[-2%]",
                    }),
                    u.jsx("img", {
                      src: De[0].icons[2],
                      alt: "icon3",
                      className:
                        "absolute w-14 h-14 lg:w-20 lg:h-20 -left-6 lg:left-[-4%] top-20 lg:top-40",
                    }),
                    u.jsx("img", {
                      src: De[0].icons[3],
                      alt: "icon4",
                      className:
                        "absolute w-20 h-20 lg:w-28 lg:h-28 right-[16%] -top-5 lg:top-[-2%]",
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "bg-gradient-to-b from-[#081719]/10 via-[#071A20]/25 to-[#030D12]/50 rounded-3xl relative overflow-hidden border border-white/10",
              children: [
                u.jsxs("div", {
                  className: "p-6 relative z-10",
                  children: [
                    u.jsx("p", {
                      className:
                        "text-[10px] lg:text-sm flex justify-center font-clashSemiBold px-2 py-1 bg-gradient-to-b from-[#1B2428] via-[#2B363C] to-[#1B2428] w-[70px] lg:w-[100px] [text-shadow:_1px_1px_11px_rgb(255_255_255_/_0.25)] rounded-full text-gray-400 mb-2",
                      children: De[1].label,
                    }),
                    u.jsx("h3", {
                      className: "text-lg lg:text-3xl font-clashSemiBold mb-3",
                      children: De[1].title,
                    }),
                    u.jsx("p", {
                      className: "text-sm lg:text-lg text-[#B1B4B6] mb-6",
                      children: De[1].desc,
                    }),
                  ],
                }),
                u.jsx("div", {
                  className:
                    "absolute top-40 w-full h-full bg-[#0B1B20] blur-xl rounded-t-full z-0",
                }),
                u.jsx("div", {
                  className: "relative flex items-center justify-center",
                  children: u.jsx("img", {
                    src: De[1].image,
                    alt: "reaction-icon",
                    className: "relative z-20 w-full h-full",
                  }),
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "col-span-1 md:col-span-2 bg-gradient-to-b from-[#081719]/10 via-[#071A20]/25 to-[#030D12]/50 rounded-xl relative overflow-hidden border border-white/10 mt-4 flex flex-col lg:flex-row items-start lg:items-center justify-between",
              children: [
                u.jsxs("div", {
                  className: "p-6",
                  children: [
                    u.jsx("p", {
                      className:
                        "text-[10px] lg:text-sm flex justify-center font-clashSemiBold px-2 py-1 bg-gradient-to-b from-[#1B2428] via-[#2B363C] to-[#1B2428] w-[80px] lg:w-[100px] [text-shadow:_1px_1px_11px_rgb(255_255_255_/_0.25)] rounded-full text-gray-400 mb-2",
                      children: De[2].label,
                    }),
                    u.jsx("h3", {
                      className: "text-lg lg:text-3xl font-clashSemiBold mb-3",
                      children: De[2].title,
                    }),
                    u.jsx("p", {
                      className: "text-sm lg:text-lg text-[#B1B4B6] mb-6",
                      children: De[2].desc,
                    }),
                  ],
                }),
                u.jsx("div", {
                  className: "ml-14 lg:ml-0 mt-6 md:mt-0",
                  children: u.jsx("img", {
                    src: De[2].image,
                    alt: "mesh",
                    className: "w-72 md:w-full h-full",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  W5 = () =>
    u.jsxs("section", {
      id: "home",
      className:
        "relative w-screen flex flex-col text-white h-[75%] lg:h-screen pt-36 lg:pt-0",
      children: [
        u.jsx("div", {
          className: "absolute -top-10 lg:top-0 left-0 w-full h-full z-0",
          children: u.jsxs("video", {
            poster: "/thumbnail.jpeg",
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className:
              "w-screen h-[60vh] sm:h-[70vh] md:h-screen lg:object-cover mt-0 lg:mt-10",
            children: [
              u.jsx("source", {
                src: "/videos/pulsegen.mp4",
                type: "video/mp4",
              }),
              "Your browser does not support the video tag.",
            ],
          }),
        }),
        u.jsx("div", {
          className:
            "relative z-10 flex justify-center items-center w-full h-full mt-4 lg:mt-28 px-2 lg:px-20",
          children: u.jsxs("div", {
            className: "grid grid-cols-2 gap-x-16 gap-y-3 lg:gap-y-40 w-full",
            children: [
              u.jsxs("div", {
                className:
                  "flex flex-col justify-start items-center mr-0 lg:mr-20 relative",
                children: [
                  u.jsxs("div", {
                    className: "mt-0 lg:mt-1.5 mr-8 lg:mr-40 z-20",
                    children: [
                      u.jsx("span", {
                        className:
                          "text-emerald-500 text-[10px] lg:text-3xl font-normal",
                        children: "25",
                      }),
                      u.jsxs("span", {
                        className:
                          "bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent text-[10px] lg:text-3xl font-normal",
                        children: [
                          "+ REAL TIME",
                          u.jsx("br", {}),
                          "DATA POINTS",
                        ],
                      }),
                    ],
                  }),
                  u.jsx("img", {
                    src: "/greenline.svg",
                    alt: "underline",
                    className: "w-28 lg:w-96 mt-7 lg:mt-10 absolute z-10",
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "flex flex-col justify-start items-center ml-0 lg:ml-40 relative",
                children: [
                  u.jsx("div", {
                    className: "ml-10 lg:ml-40 z-20",
                    children: u.jsxs("span", {
                      className:
                        "bg-gradient-to-b from-white to-white/50 bg-clip-text uppercase text-transparent text-[10px] lg:text-4xl font-normal",
                      children: ["Step Into the", u.jsx("br", {}), "Future"],
                    }),
                  }),
                  u.jsx("img", {
                    src: "/leftgreen.svg",
                    alt: "underline",
                    className: "w-28 lg:w-96 mt-7 lg:mt-10 absolute z-10",
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "flex flex-col justify-start items-center mr-0 lg:mr-20 relative",
                children: [
                  u.jsx("div", {
                    className: "mt-0 lg:mt-2 mr-8 lg:mr-32 z-20",
                    children: u.jsxs("span", {
                      className:
                        "bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent text-[10px] lg:text-3xl font-normal",
                      children: ["CHECKOUT OUR", u.jsx("br", {}), "WHITEPAPER"],
                    }),
                  }),
                  u.jsx("a", {
                    href: "https://docs.pulseainetwork.org",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "z-30 relative -mt-12 ml-20 lg:-mt-28 lg:ml-[301px]",
                    children: u.jsx("button", {
                      className: "relative z-30",
                      children: u.jsx("img", {
                        src: "/whitepaper.svg",
                        alt: "Download Whitepaper",
                        className: "w-7 h-7 lg:w-20 lg:h-20",
                      }),
                    }),
                  }),
                  u.jsx("img", {
                    src: "/greenline.svg",
                    alt: "underline",
                    className: "w-28 lg:w-96 mt-7 lg:mt-10 absolute z-10",
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "flex flex-col justify-start items-center ml-0 lg:ml-40 relative",
                children: [
                  u.jsx("div", {
                    className: "ml-8 lg:ml-28 z-20",
                    children: u.jsxs("span", {
                      className:
                        "bg-gradient-to-b from-white to-white/50 bg-clip-text uppercase text-transparent text-left text-[10px] lg:text-4xl font-normal",
                      children: ["Live road", u.jsx("br", {}), "conditions"],
                    }),
                  }),
                  u.jsx("img", {
                    src: "/leftgreen.svg",
                    alt: "underline",
                    className: "w-28 lg:w-96 mt-7 lg:mt-10 absolute z-10",
                  }),
                ],
              }),
            ],
          }),
        }),
        u.jsx("div", {
          className:
            "w-screen h-4 lg:h-52 bg-[#070707] blur-[50px] absolute bottom-2 lg:-bottom-[120px] z-0",
        }),
      ],
    }),
  q5 = () =>
    u.jsxs("section", {
      className: "text-white py-4 lg:py-20 px-6 lg:px-20",
      children: [
        u.jsxs("div", {
          className: "text-center mb-10 lg:mb-20",
          children: [
            u.jsx("h2", {
              className: "text-3xl lg:text-7xl font-clashSemiBold mb-4",
              children: "HOW IT WORKS",
            }),
            u.jsx("p", {
              className:
                "text-base lg:text-2xl max-w-2xl mx-auto text-neutral-400",
              children:
                "Raw road video is just noise—PulseGen transforms it into real-time, actionable insights. Our AI-powered system works in three steps:",
            }),
          ],
        }),
        u.jsxs("div", {
          className: "relative flex flex-col items-center h-full",
          children: [
            u.jsxs("div", {
              className:
                "sticky top-[60px] lg:top-[80px] z-10 w-full lg:w-[80%] h-60 border border-neutral-800 bg-gradient-to-b from-[#070707] to-[#041015] rounded-3xl p-6 lg:p-10 shadow-md mt-10 mb-[90px]",
              children: [
                u.jsx("div", {
                  className: "mb-4",
                  children: u.jsx("span", {
                    className:
                      "inline-block px-4 py-1 bg-gradient-to-b from-[#1B2428] via-[#2B363C] to-[#1B2428] text-sm lg:text-xl font-semibold text-white rounded-full",
                    children: "1. Capture",
                  }),
                }),
                u.jsx("h3", {
                  className: "text-xl lg:text-3xl font-clashSemiBold mb-3",
                  children: "Capture with Pulse Scout",
                }),
                u.jsx("p", {
                  className:
                    "text-[#B1B4B6] text-xs lg:text-lg leading-relaxed max-w-[250px] lg:max-w-[600px]",
                  children:
                    "Pulse Scout, our mobile app, records live video from your smartphone or dashcam, capturing real-world road conditions in real time.          ",
                }),
                u.jsx("img", {
                  src: "/step1.svg",
                  alt: "Capture",
                  className:
                    "absolute bottom-0 right-0 w-24 h-24 lg:w-56 lg:h-56 opacity-80 pointer-events-none",
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "sticky top-[80px] lg:top-[100px] z-20 w-full lg:w-[80%] h-60 border border-neutral-800 bg-gradient-to-b from-[#070707] to-[#041015] rounded-3xl p-6 lg:p-10 shadow-md mb-[40px]",
              children: [
                u.jsx("div", {
                  className: "mb-4",
                  children: u.jsx("span", {
                    className:
                      "inline-block px-4 py-1 bg-gradient-to-b from-[#1B2428] via-[#2B363C] to-[#1B2428] text-sm lg:text-xl font-semibold text-white rounded-full",
                    children: "2. Process",
                  }),
                }),
                u.jsx("h3", {
                  className: "text-xl lg:text-3xl font-clashSemiBold mb-3",
                  children: "Process with PulseNet",
                }),
                u.jsx("p", {
                  className:
                    "text-[#B1B4B6] text-xs lg:text-lg leading-relaxed max-w-[250px] lg:max-w-[600px]",
                  children:
                    "PulseNet structures raw video into analyzable data points, breaking down footage into high-quality frames for AI interpretation.          ",
                }),
                u.jsx("img", {
                  src: "/step2.svg",
                  alt: "Process",
                  className:
                    "absolute bottom-0 right-0 w-24 h-24 lg:w-56 lg:h-56 opacity-80 pointer-events-none",
                }),
              ],
            }),
            u.jsxs("div", {
              className:
                "sticky top-[100px] lg:top-[80px] z-30 w-full lg:w-[80%] h-[280px] lg:h-60 border border-neutral-800 bg-gradient-to-b from-[#070707] to-[#041015] rounded-3xl p-6 lg:p-10 shadow-md",
              children: [
                u.jsx("div", {
                  className: "mb-4",
                  children: u.jsx("span", {
                    className:
                      "inline-block px-4 py-1 bg-gradient-to-b from-[#1B2428] via-[#2B363C] to-[#1B2428] text-sm lg:text-xl font-semibold text-white rounded-full",
                    children: "3. Analyze",
                  }),
                }),
                u.jsx("h3", {
                  className: "text-xl lg:text-3xl font-clashSemiBold mb-3",
                  children: "Analyze with PulseGen",
                }),
                u.jsxs("div", {
                  className:
                    "text-[#B1B4B6] text-xs lg:text-lg leading-relaxed max-w-[250px] lg:max-w-[600px]",
                  children: [
                    u.jsx("p", {
                      children: "PulseGen takes processed data and:",
                    }),
                    u.jsxs("ul", {
                      className:
                        "list-none flex flex-col mt-2 text-xs lg:text-sm text-neutral-300 space-y-1",
                      children: [
                        u.jsx("li", {
                          children:
                            "1. - Determines the root cause (severity, location, frequency)",
                        }),
                        u.jsx("li", {
                          children:
                            "2. Delivers the optimal solution (maintenance prioritization, traffic rerouting, hazard alerts)",
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx("img", {
                  src: "/step3.svg",
                  alt: "Analyze",
                  className:
                    "absolute bottom-0 right-0 w-24 h-24 lg:w-56 lg:h-56 opacity-80 pointer-events-none",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  G5 = () =>
    u.jsxs(u.Fragment, {
      children: [
        u.jsx(Di, {
          title:
            "PulseGen - AI-Powered Content Generation & Blockchain Innovation",
          description:
            "Experience PulseGen's revolutionary AI content generation platform. Create, innovate, and transform digital content with cutting-edge blockchain technology and artificial intelligence.",
          keywords:
            "PulseGen, AI content generation, blockchain innovation, digital content, artificial intelligence, content creation, blockchain technology",
          url: "https://pathpulse.ai/pulsegen",
        }),
        u.jsxs("div", {
          className: "bg-[#070707] overflow-x-clip",
          children: [
            u.jsx("div", {
              className: "hidden lg:block",
              children: u.jsx(Lr, {}),
            }),
            u.jsx("div", {
              className: "block lg:hidden",
              children: u.jsx(Mr, {}),
            }),
            u.jsx(be, { children: u.jsx(W5, {}) }),
            u.jsx(be, { children: u.jsx(U5, {}) }),
            u.jsx(be, { children: u.jsx(q5, {}) }),
            u.jsxs("div", {
              children: [u.jsx(be, { children: u.jsx(H5, {}) }), u.jsx(Rr, {})],
            }),
          ],
        }),
      ],
    }),
  K5 = () => {
    const e = [
      {
        title: "Real-Time Streaming",
        desc: "Stream dashcam footage instantly with minimal delay, enabling fast and accurate data collection.",
        number: "01",
      },
      {
        title: "Earn Rewards",
        desc: "Contribute footage and earn points or incentives for every mile you drive.",
        number: "02",
      },
      {
        title: "Quick Onboarding",
        desc: "Get started in minutes — no complex setup or training required.",
        number: "03",
      },
      {
        title: "No Dashcam Required",
        desc: "Use your smartphone's camera — no need for expensive or specialized dashcam hardware.",
        number: "04",
      },
      {
        title: "Simple and Intuitive UI",
        desc: "Designed for ease of use, with a clean interface that anyone can navigate effortlessly.",
        number: "05",
      },
    ];
    return u.jsxs("section", {
      className: "text-white px-6 py-20 lg:px-28",
      children: [
        u.jsxs("div", {
          className: "text-center mb-16",
          children: [
            u.jsx("h2", {
              className:
                "text-3xl lg:text-7xl font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent mb-4",
              children: "WHY CHOOSE PULSE SCOUT?",
            }),
            u.jsx("p", {
              className: "text-gray-300 max-w-3xl mx-auto text-sm lg:text-lg",
              children:
                "Pulse Scout is built to be fast, simple, and rewarding. With real-time streaming, easy setup, and no need for extra hardware, it fits right into your drive — and pays off every mile.",
            }),
          ],
        }),
        u.jsx("div", {
          className: "relative flex flex-col items-center",
          children: e.map((t, n) =>
            u.jsx(
              "div",
              {
                className: `sticky top-[154px] w-full h-full max-w-4xl mb-[60px] z-[${
                  10 + n
                }]`,
                children: u.jsxs("div", {
                  className:
                    "w-full border border-zinc-700/50 rounded-xl bg-gradient-to-br from-[#081719] via-[#071A20] to-[#030D12] shadow-xl",
                  children: [
                    u.jsxs("div", {
                      className: "mb-4 p-6 lg:p-8",
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-2xl lg:text-3xl bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent font-bold mb-2",
                          children: t.title,
                        }),
                        u.jsx("p", {
                          className: "text-gray-400 text-sm lg:text-lg",
                          children: t.desc,
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className:
                        "text-5xl lg:text-7xl text-transparent -mb-3 bg-clip-text font-bold bg-gradient-to-b from-emerald-500 to-emerald-500/0 text-right",
                      children: t.number,
                    }),
                  ],
                }),
              },
              n
            )
          ),
        }),
      ],
    });
  },
  Y5 = () => {
    const e = [
      { title: "Beats", value: "200", Image: "/beat.svg" },
      { title: "Time", value: "18:35", subtitle: "Hours" },
      { title: "Distance", value: "100.47", subtitle: "Kilometers" },
    ];
    return u.jsxs("div", {
      className: "text-white font-clash",
      children: [
        u.jsxs("section", {
          className:
            "text-center relative min-h-full lg:min-h-screen flex items-center",
          children: [
            u.jsxs("video", {
              autoPlay: !0,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className:
                "w-screen h-full lg:h-screen object-contain lg:object-cover mt-12 lg:mt-16",
              children: [
                u.jsx("source", {
                  src: "/videos/pulsescout.mp4",
                  type: "video/mp4",
                }),
                "Your browser does not support the video tag.",
              ],
            }),
            u.jsx("div", {
              className:
                "absolute -bottom-0 w-full h-20 sm:h-24 md:h-32 bg-gradient-to-t from-[#081716] to-transparent pointer-events-none",
            }),
          ],
        }),
        u.jsx("section", {
          className: "pt-32 lg:pt-40 pb-0 relative",
          children: u.jsxs("div", {
            className:
              "max-w-6xl mx-auto relative z-20 flex flex-col lg:flex-row items-center gap-0 lg:gap-12",
            children: [
              u.jsx("div", {
                className: "absolute -top-28 w-full text-center",
                children: u.jsx("h2", {
                  className:
                    "text-4xl md:text-7xl font-clashSemiBold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent",
                  children: "WHAT IS PULSE SCOUT?",
                }),
              }),
              u.jsx("div", {
                className:
                  " flex flex-row lg:flex-col items-center gap-4 text-left",
                children: e.map((t, n) =>
                  u.jsxs(
                    "div",
                    {
                      className:
                        "z-20 relative bg-gradient-to-l from-neutral-900 via-neutral-950 to-zinc-950 p-2 lg:p-8 rounded-lg lg:rounded-3xl border border-[#1C3023] h-24 w-24 lg:h-36 lg:w-48",
                      children: [
                        u.jsx("p", {
                          className:
                            "text-[10px] lg:text-xs font-clashSemiBold text-gray-400",
                          children: t.title,
                        }),
                        u.jsx("h3", {
                          className: "text-lg lg:text-4xl font-clashSemiBold",
                          children: t.value,
                        }),
                        t.Image &&
                          u.jsx("img", {
                            src: t.Image,
                            alt: "",
                            className: "w-5 h-5 mb-1 ",
                          }),
                        t.subtitle &&
                          u.jsx("h3", {
                            className:
                              "text-xs text-[#01F2CF] font-clashSemiBold",
                            children: t.subtitle,
                          }),
                      ],
                    },
                    n
                  )
                ),
              }),
              u.jsxs("div", {
                className:
                  "z-10 relative w-[600px] h-[400px] lg:h-[700px] flex justify-center items-center",
                children: [
                  u.jsx("img", {
                    src: "/circle2.svg",
                    alt: "Decorative Circle",
                    className:
                      "absolute z-0 w-[400px] lg:w-[700px] ml-0 lg:-ml-[20px] mt-11 lg:mt-20 pointer-events-none max-w-[800px]",
                  }),
                  u.jsx("img", {
                    src: "/1-iPhone 14 Pro.svg",
                    alt: "Pulse Scout App Preview",
                    className: "lg:w-80 lg:h-[600px] w-36 h-full absolute z-20",
                  }),
                  u.jsx("video", {
                    className:
                      "absolute w-[135px] h-[280px] lg:w-[245px] lg:h-[520px] rounded-[18px] lg:rounded-[34px] z-20 object-fill overflow-hidden",
                    src: "https://res.cloudinary.com/df1awd7vz/video/upload/v1748592909/pulse_scout_video_comp_gouawj.mp4",
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    controls: !1,
                    playsInline: !0,
                    preload: "auto",
                  }),
                ],
              }),
              u.jsx("div", {
                className:
                  "z-20 max-w-full lg:max-w-lg text-center lg:text-left ml-0 lg:ml-20 mb-10 lg:mb-14 px-6",
                children: u.jsxs("p", {
                  className:
                    "text-gray-300 text-sm lg:text-2xl leading-relaxed",
                  children: [
                    "Introducing Pulse Scout, developed by PathPulse.ai. This purpose-built mobile application effortlessly empowers drivers like you to contribute to safer, more efficient roads.",
                    u.jsx("br", {}),
                    u.jsx("br", {}),
                    "Simply stream dashcam footage (1080p or higher) through our app to earn rewards while helping build better maps and smarter cities. Lightweight, low-power and powered by AI.",
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Q5 = () => {
    const e = [
      { value: "---", label: "Video (Hrs)" },
      { value: "---", label: "Data Points" },
      { value: "---", label: "Distance Mapped" },
      { value: "---", label: "Images Captured" },
    ];
    return u.jsx("section", {
      className: "relative text-white pt-0 py-0 lg:py-20 px-4 overflow-hidden",
      children: u.jsxs("div", {
        className: "relative z-10 max-w-7xl mx-auto text-center",
        children: [
          u.jsxs("h2", {
            className:
              "text-4xl sm:text-4xl md:text-7xl font-light leading-tight bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent",
            children: [
              "Designed ",
              u.jsx("br", {}),
              u.jsx("span", { children: "for " }),
              u.jsx("span", {
                className: "font-normal",
                children: "Convenience",
              }),
              ",",
              " ",
              u.jsx("span", {
                className: "font-clashSemiBold",
                children: "Built on Trust.",
              }),
            ],
          }),
          u.jsx("div", {
            className:
              "mt-16 flex flex-col md:flex-row items-center justify-center md:gap-10 gap-12 flex-wrap",
            children: e.map((t, n) =>
              u.jsxs(
                ri.Fragment,
                {
                  children: [
                    u.jsxs("div", {
                      className:
                        "flex flex-col items-center justify-center text-center min-w-[120px]",
                      children: [
                        u.jsx("p", {
                          className:
                            "text-5xl sm:text-6xl font-clashSemiBold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent",
                          children: t.value,
                        }),
                        u.jsx("div", {
                          className:
                            "mt-2 bg-gradient-to-b from-emerald-500 to-emerald-500/0 shadow-[inset_0px_2.95px_8.85px_1.47px_rgba(0,0,0,0.25)] shadow-[inset_0px_-2.21px_1.47px_0px_rgba(255,255,255,0.25)] [text-shadow:_1px_1px_12px_rgb(255_255_255_/_0.25)] text-white text-sm sm:text-base font-semibold px-4 py-1 rounded-full",
                          children: t.label,
                        }),
                      ],
                    }),
                    n < e.length - 1 &&
                      u.jsx("div", {
                        className:
                          "hidden md:block w-0 h-28 opacity-40 outline outline-1 outline-offset-[-0.5px] outline-lime-50",
                      }),
                  ],
                },
                n
              )
            ),
          }),
        ],
      }),
    });
  },
  X5 = () =>
    u.jsxs(u.Fragment, {
      children: [
        u.jsx(Di, {
          title:
            "PulseScout - AI-Powered Urban Navigation & Traffic Intelligence",
          description:
            "Discover PulseScout's advanced AI navigation system. Get real-time traffic insights, optimize routes, and transform your urban mobility experience with cutting-edge technology.",
          keywords:
            "PulseScout, AI navigation, traffic intelligence, urban mobility, real-time routing, smart navigation, traffic optimization",
          url: "https://pathpulse.ai/pulsescout",
        }),
        u.jsxs("div", {
          className: "bg-primary text-white max-w-screen overflow-x-clip",
          children: [
            u.jsx("div", {
              className: "hidden sm:block",
              children: u.jsx(Lr, {}),
            }),
            u.jsx("div", { className: "sm:hidden", children: u.jsx(Mr, {}) }),
            u.jsx(be, { children: u.jsx(Y5, {}) }),
            u.jsxs("div", {
              className: "relative",
              children: [
                u.jsx("img", {
                  src: "/World map - web.svg",
                  alt: "Background Overlay",
                  className:
                    "absolute -top-32 w-full h-[120vh] object-cover z-0 pointer-events-none select-none",
                }),
                u.jsxs("div", {
                  className: "relative z-10",
                  children: [
                    u.jsx(be, { children: u.jsx(Q5, {}) }),
                    u.jsx(be, { children: u.jsx(K5, {}) }),
                  ],
                }),
              ],
            }),
            u.jsx("div", {
              className: "relative z-10",
              children: u.jsx(Rr, {}),
            }),
          ],
        }),
      ],
    }),
  J5 = () => {
    const { code: e } = oP(),
      [t, n] = b.useState(3),
      [r, i] = b.useState(!1);
    return (
      b.useEffect(() => {
        if (!e) return;
        (() => {
          const a = `intent://referral/${e}#Intent;scheme=pulsescout;package=com.nxved.pulsescout.nativeapp;S.referrer=utm_source%3Dreferral%26utm_content%3D${e};end`,
            l = document.createElement("iframe");
          (l.style.display = "none"),
            (l.src = a),
            document.body.appendChild(l),
            setTimeout(() => {
              window.location.href = `pulsescout://referral/${e}`;
            }, 100),
            i(!0);
        })();
        const o = setInterval(() => {
          n(
            (a) => (
              a <= 1 &&
                (clearInterval(o),
                (window.location.href = `https://play.google.com/store/apps/details?id=com.nxved.pulsescout.nativeapp&referrer=utm_source%3Dreferral%26utm_content%3D${e}`)),
              a - 1
            )
          );
        }, 1e3);
        return () => clearInterval(o);
      }, [e]),
      u.jsxs("div", {
        className:
          "min-h-screen bg-black flex flex-col items-center justify-center p-4",
        children: [
          u.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-green-900/20",
          }),
          u.jsxs("div", {
            className: "relative z-10 max-w-md w-full text-center",
            children: [
              u.jsxs("div", {
                className: "mb-8",
                children: [
                  u.jsx("img", {
                    src: "/pulsescoutoverlay.svg",
                    alt: "PulseScout",
                    className: "h-20 mx-auto mb-4",
                  }),
                  u.jsx("h1", {
                    className: "text-3xl font-bold text-white mb-2",
                    children: "Opening PulseScout...",
                  }),
                ],
              }),
              u.jsx("div", {
                className: "mb-8",
                children: u.jsx("div", {
                  className: "loader-container",
                  children: u.jsx("div", { className: "loader" }),
                }),
              }),
              u.jsxs("div", {
                className:
                  "bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6",
                children: [
                  u.jsx("p", {
                    className: "text-green-400 text-sm mb-2",
                    children: "Referral Code Detected",
                  }),
                  u.jsx("p", {
                    className: "text-white text-2xl font-mono font-bold",
                    children: e,
                  }),
                ],
              }),
              u.jsx("div", {
                className: "space-y-4",
                children: r
                  ? u.jsxs(u.Fragment, {
                      children: [
                        u.jsx("p", {
                          className: "text-gray-300",
                          children:
                            t > 0
                              ? `If the app doesn't open, redirecting to Play Store in ${t}...`
                              : "Redirecting to Play Store...",
                        }),
                        u.jsx("div", {
                          className: "mt-6",
                          children: u.jsxs("a", {
                            href: `https://play.google.com/store/apps/details?id=com.nxved.pulsescout.nativeapp&referrer=utm_source%3Dreferral%26utm_content%3D${e}`,
                            className:
                              "inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors",
                            children: [
                              u.jsx("svg", {
                                className: "w-5 h-5 mr-2",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: u.jsx("path", {
                                  d: "M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z",
                                }),
                              }),
                              "Download from Play Store",
                            ],
                          }),
                        }),
                        u.jsxs("p", {
                          className: "text-gray-500 text-sm mt-4",
                          children: [
                            "Your referral code ",
                            u.jsx("span", {
                              className: "text-green-400 font-mono",
                              children: e,
                            }),
                            " will be automatically applied",
                          ],
                        }),
                      ],
                    })
                  : u.jsx("p", {
                      className: "text-gray-300",
                      children: "Attempting to open PulseScout app...",
                    }),
              }),
              u.jsx("div", {
                className: "mt-8 p-4 bg-gray-900/50 rounded-lg",
                children: u.jsx("p", {
                  className: "text-gray-400 text-sm",
                  children:
                    "📱 PulseScout is currently available for Android devices. iOS version coming soon!",
                }),
              }),
            ],
          }),
          u.jsx("style", {
            jsx: !0,
            children: `
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
        }
        
        .loader {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(34, 197, 94, 0.2);
          border-top-color: #22c55e;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `,
          }),
        ],
      })
    );
  };
function Z5() {
  return u.jsxs(HP, {
    children: [
      u.jsx(eC, {}),
      u.jsx(bT, { position: "top-center" }),
      u.jsxs(bP, {
        children: [
          u.jsx(Ht, { path: "/", element: u.jsx(aR, {}) }),
          u.jsx(Ht, { path: "/pulsescout", element: u.jsx(X5, {}) }),
          u.jsx(Ht, { path: "/pulsegen", element: u.jsx(G5, {}) }),
          u.jsx(Ht, { path: "/contactus", element: u.jsx(fR, {}) }),
          u.jsx(Ht, { path: "/privacyandpolicy-app", element: u.jsx($5, {}) }),
          u.jsx(Ht, {
            path: "/pulsescout/delete-user",
            element: u.jsx(V5, {}),
          }),
          u.jsx(Ht, { path: "/ref/:code", element: u.jsx(J5, {}) }),
          u.jsx(Ht, { path: "*", element: u.jsx(YC, {}) }),
        ],
      }),
    ],
  });
}
fx(document.getElementById("root")).render(
  u.jsx(b.StrictMode, { children: u.jsx(Z5, {}) })
);
