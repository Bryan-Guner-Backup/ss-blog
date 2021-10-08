(function (n) {
  var r = {};
  function o(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: false, exports: {} });
    n[e].call(t.exports, t, t.exports, o);
    t.l = true;
    return t.exports;
  }
  o.m = n;
  o.c = r;
  o.d = function (e, t, n) {
    o.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: n });
  };
  o.r = function (e) {
    "undefined" !== typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    Object.defineProperty(e, "__esModule", { value: true });
  };
  o.t = function (t, e) {
    1 & e && (t = o(t));
    if (8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    o.r(n);
    Object.defineProperty(n, "default", { enumerable: true, value: t });
    if (2 & e && "string" != typeof t)
      for (var r in t)
        o.d(
          n,
          r,
          function (e) {
            return t[e];
          }.bind(null, r)
        );
    return n;
  };
  o.n = function (t) {
    var e =
      t && t.__esModule
        ? function e() {
            return t["default"];
          }
        : function e() {
            return t;
          };
    o.d(e, "a", e);
    return e;
  };
  o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  o.p = "https://assets.squarespace.com/universal/scripts-compressed/";
  return o(
    (o.s = "./src/main/webapp/universal/src/apps/Performance/bootstrap.js")
  );
})({
  "./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js":
    function (e, t) {
      function n(e, t, n) {
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true,
            })
          : (e[t] = n);
        return e;
      }
      e.exports = n;
    },
  "./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
    function (e, t) {
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = n;
    },
  "./common/temp/node_modules/@sqs/praetor/build/module/index.js": function (
    e,
    t,
    n
  ) {
    "use strict";
    n.r(t);
    n.d(t, "StaticPraetorClient", function () {
      return c;
    });
    n.d(t, "Configuration", function () {
      return o;
    });
    n.d(t, "ExperimentType", function () {
      return a;
    });
    var r = "true";
    var i = "default";
    var a;
    (function (e) {
      e["FEATURE_TOGGLE"] = "FEATURE_TOGGLE";
      e["AB_TEST"] = "AB_TEST";
    })((a = a || {}));
    var o = (function () {
      function e(e) {
        var t = this;
        this.experiments = {};
        this.isConfigurationLoaded = Boolean(e.isConfigurationLoaded);
        Array.isArray(e.experimentContextList) &&
          e.experimentContextList.forEach(function (e) {
            null !== e &&
              "object" === typeof e &&
              e.hasOwnProperty("name") &&
              (t.experiments[e.name] = e);
          });
      }
      e.prototype.isValid = function () {
        return this.isConfigurationLoaded;
      };
      e.prototype.getContext = function (e) {
        return this.experiments[e];
      };
      return e;
    })();
    var s = (function () {
      function e(e) {
        this.configuration = new o(e);
      }
      e.prototype.getFeatureToggle = function (e, t) {
        var n = this.getContextValidity(e, a.FEATURE_TOGGLE),
          r = n.context,
          o = n.error;
        if (o || null === r) return { enabled: t, error: o };
        if (r.containsError)
          return {
            enabled: this.isFeatureToggleEnabled(r),
            error:
              "The specified feature has an invalid server-side definition",
          };
        return { enabled: this.isFeatureToggleEnabled(r) };
      };
      e.prototype.getABTestVariant = function (e, t) {
        var n = this.getContextValidity(e, a.AB_TEST),
          r = n.context,
          o = n.error;
        if (o || null === r) return { error: o, segment: i, variant: t };
        if (r.containsError)
          return {
            error:
              "The specified feature has an invalid server-side definition",
            segment: r.segmentName,
            variant: r.variant,
          };
        return { segment: r.segmentName, variant: r.variant };
      };
      e.prototype.getAllExperiments = function () {
        return this.configuration;
      };
      e.prototype.getContextValidity = function (e, t) {
        if (!this.configuration.isValid())
          return {
            context: null,
            error: "The underlying Praetor configuration is not loaded",
          };
        var n = this.configuration.getContext(e);
        if (void 0 === n)
          return {
            context: null,
            error: "The specified feature does not exist",
          };
        if (n.experimentType !== t)
          return {
            context: null,
            error: "The specified feature is not a " + t,
          };
        return { context: n };
      };
      e.prototype.isFeatureToggleEnabled = function (e) {
        return e.variant === r;
      };
      return e;
    })();
    var c = s;
  },
  "./common/temp/node_modules/@sqs/rum-collector/lib/index.js": function (
    e,
    t,
    n
  ) {
    "use strict";
    n.r(t);
    n.d(t, "default", function () {
      return zt;
    });
    n.d(t, "getPerformanceData", function () {
      return tt;
    });
    n.d(t, "getPerformanceMetrics", function () {
      return xn;
    });
    n.d(t, "mark", function () {
      return In;
    });
    n.d(t, "measure", function () {
      return An;
    });
    n.d(t, "getDomainLookup", function () {
      return Ht;
    });
    n.d(t, "getTCPConnection", function () {
      return Vt;
    });
    n.d(t, "getCumulativeLayoutShift", function () {
      return vn;
    });
    n.d(t, "getDecodedBodySize", function () {
      return hn;
    });
    n.d(t, "getDomContentLoadedEventEnd", function () {
      return gn;
    });
    n.d(t, "getDomContentLoadedEventStart", function () {
      return yn;
    });
    n.d(t, "getEncodedBodySize", function () {
      return _n;
    });
    n.d(t, "getFirstContentfulPaint", function () {
      return jn;
    });
    n.d(t, "getFirstInputDelay", function () {
      return wn;
    });
    n.d(t, "getLargestContentfulPaint", function () {
      return bn;
    });
    n.d(t, "getLoadEventEnd", function () {
      return En;
    });
    n.d(t, "getLoadEventStart", function () {
      return Sn;
    });
    n.d(t, "getResponseStart", function () {
      return Tn;
    });
    n.d(t, "getTLSNegotiation", function () {
      return On;
    });
    n.d(t, "getTimeToInteractive", function () {
      return Pn;
    });
    n.d(t, "trackLoadPerformance", function () {
      return qn;
    });
    var o = {};
    n.r(o);
    n.d(o, "getDomainLookup", function () {
      return Ht;
    });
    n.d(o, "getTCPConnection", function () {
      return Vt;
    });
    n.d(o, "getCumulativeLayoutShift", function () {
      return vn;
    });
    n.d(o, "getDecodedBodySize", function () {
      return hn;
    });
    n.d(o, "getDomContentLoadedEventEnd", function () {
      return gn;
    });
    n.d(o, "getDomContentLoadedEventStart", function () {
      return yn;
    });
    n.d(o, "getEncodedBodySize", function () {
      return _n;
    });
    n.d(o, "getFirstContentfulPaint", function () {
      return jn;
    });
    n.d(o, "getFirstInputDelay", function () {
      return wn;
    });
    n.d(o, "getLargestContentfulPaint", function () {
      return bn;
    });
    n.d(o, "getLoadEventEnd", function () {
      return En;
    });
    n.d(o, "getLoadEventStart", function () {
      return Sn;
    });
    n.d(o, "getResponseStart", function () {
      return Tn;
    });
    n.d(o, "getTLSNegotiation", function () {
      return On;
    });
    n.d(o, "getTimeToInteractive", function () {
      return Pn;
    });
    var i = n("./common/temp/node_modules/@sqs/praetor/build/module/index.js");
    var r = function (e, t) {
      r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        };
      return r(e, t);
    };
    function a(e, t) {
      r(e, t);
      function n() {
        this.constructor = e;
      }
      e.prototype =
        null === t ? Object.create(t) : ((n.prototype = t.prototype), new n());
    }
    var p = function () {
      p =
        Object.assign ||
        function e(t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        };
      return p.apply(this, arguments);
    };
    function v(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" === typeof Object.getOwnPropertySymbols)
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    }
    function s(e, t, n, r) {
      var o = arguments.length,
        i =
          o < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r,
        a;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
        i = Reflect.decorate(e, t, n, r);
      else
        for (var s = e.length - 1; s >= 0; s--)
          (a = e[s]) &&
            (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
      return o > 3 && i && Object.defineProperty(t, n, i), i;
    }
    function c(n, r) {
      return function (e, t) {
        r(e, t, n);
      };
    }
    function u(e, t) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata)
        return Reflect.metadata(e, t);
    }
    function l(e, a, n, s) {
      function c(t) {
        return t instanceof n
          ? t
          : new n(function (e) {
              e(t);
            });
      }
      return new (n = n || Promise)(function (t, n) {
        function r(e) {
          try {
            i(s.next(e));
          } catch (e) {
            n(e);
          }
        }
        function o(e) {
          try {
            i(s["throw"](e));
          } catch (e) {
            n(e);
          }
        }
        function i(e) {
          e.done ? t(e.value) : c(e.value).then(r, o);
        }
        i((s = s.apply(e, a || [])).next());
      });
    }
    function d(e, n) {
      var r = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        },
        o,
        i,
        a,
        t;
      return (
        (t = { next: s(0), throw: s(1), return: s(2) }),
        "function" === typeof Symbol &&
          (t[Symbol.iterator] = function () {
            return this;
          }),
        t
      );
      function s(t) {
        return function (e) {
          return c([t, e]);
        };
      }
      function c(t) {
        if (o) throw new TypeError("Generator is already executing.");
        while (r)
          try {
            if (
              ((o = 1),
              i &&
                (a =
                  2 & t[0]
                    ? i["return"]
                    : t[0]
                    ? i["throw"] || ((a = i["return"]) && a.call(i), 0)
                    : i.next) &&
                !(a = a.call(i, t[1])).done)
            )
              return a;
            ((i = 0), a) && (t = [2 & t[0], a.value]);
            switch (t[0]) {
              case 0:
              case 1:
                a = t;
                break;
              case 4:
                r.label++;
                return { value: t[1], done: false };
              case 5:
                r.label++;
                i = t[1];
                t = [0];
                continue;
              case 7:
                t = r.ops.pop();
                r.trys.pop();
                continue;
              default:
                if (
                  !((a = r.trys), (a = a.length > 0 && a[a.length - 1])) &&
                  (6 === t[0] || 2 === t[0])
                ) {
                  r = 0;
                  continue;
                }
                if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                  r.label = t[1];
                  break;
                }
                if (6 === t[0] && r.label < a[1]) {
                  r.label = a[1];
                  a = t;
                  break;
                }
                if (a && r.label < a[2]) {
                  r.label = a[2];
                  r.ops.push(t);
                  break;
                }
                a[2] && r.ops.pop();
                r.trys.pop();
                continue;
            }
            t = n.call(e, r);
          } catch (e) {
            t = [6, e];
            i = 0;
          } finally {
            o = a = 0;
          }
        if (5 & t[0]) throw t[1];
        return { value: t[0] ? t[1] : void 0, done: true };
      }
    }
    var f = Object.create
      ? function (e, t, n, r) {
          void 0 === r && (r = n);
          Object.defineProperty(e, r, {
            enumerable: true,
            get: function () {
              return t[n];
            },
          });
        }
      : function (e, t, n, r) {
          void 0 === r && (r = n);
          e[r] = t[n];
        };
    function m(e, t) {
      for (var n in e)
        "default" === n ||
          Object.prototype.hasOwnProperty.call(t, n) ||
          f(t, e, n);
    }
    function h(e) {
      var t = "function" === typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" === typeof e.length)
        return {
          next: function () {
            e && r >= e.length && (e = void 0);
            return { value: e && e[r++], done: !e };
          },
        };
      throw new TypeError(
        t ? "Object is not iterable." : "Symbol.iterator is not defined."
      );
    }
    function g(e, t) {
      var n = "function" === typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r = n.call(e),
        o,
        i = [],
        a;
      try {
        while ((void 0 === t || t-- > 0) && !(o = r.next()).done)
          i.push(o.value);
      } catch (e) {
        a = { error: e };
      } finally {
        try {
          o && !o.done && (n = r["return"]) && n.call(r);
        } finally {
          if (a) throw a.error;
        }
      }
      return i;
    }
    function y() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(g(arguments[t]));
      return e;
    }
    function _() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      for (var r = Array(e), o = 0, t = 0; t < n; t++)
        for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
          r[o] = i[a];
      return r;
    }
    function j(e) {
      return this instanceof j ? ((this.v = e), this) : new j(e);
    }
    function w(e, t, n) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var o = n.apply(e, t || []),
        i,
        a = [];
      return (
        (i = {}),
        r("next"),
        r("throw"),
        r("return"),
        (i[Symbol.asyncIterator] = function () {
          return this;
        }),
        i
      );
      function r(r) {
        o[r] &&
          (i[r] = function (n) {
            return new Promise(function (e, t) {
              a.push([r, n, e, t]) > 1 || s(r, n);
            });
          });
      }
      function s(e, t) {
        try {
          c(o[e](t));
        } catch (e) {
          d(a[0][3], e);
        }
      }
      function c(e) {
        e.value instanceof j
          ? Promise.resolve(e.value.v).then(u, l)
          : d(a[0][2], e);
      }
      function u(e) {
        s("next", e);
      }
      function l(e) {
        s("throw", e);
      }
      function d(e, t) {
        (e(t), a.shift(), a.length) && s(a[0][0], a[0][1]);
      }
    }
    function b(r) {
      var e, o;
      return (
        (e = {}),
        t("next"),
        t("throw", function (e) {
          throw e;
        }),
        t("return"),
        (e[Symbol.iterator] = function () {
          return this;
        }),
        e
      );
      function t(t, n) {
        e[t] = r[t]
          ? function (e) {
              return (o = !o)
                ? { value: j(r[t](e)), done: "return" === t }
                : n
                ? n(e)
                : e;
            }
          : n;
      }
    }
    function E(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var e = o[Symbol.asyncIterator],
        t;
      return e
        ? e.call(o)
        : ((o = "function" === typeof h ? h(o) : o[Symbol.iterator]()),
          (t = {}),
          n("next"),
          n("throw"),
          n("return"),
          (t[Symbol.asyncIterator] = function () {
            return this;
          }),
          t);
      function n(r) {
        t[r] =
          o[r] &&
          function (n) {
            return new Promise(function (e, t) {
              (n = o[r](n)), i(e, t, n.done, n.value);
            });
          };
      }
      function i(t, e, n, r) {
        Promise.resolve(r).then(function (e) {
          t({ value: e, done: n });
        }, e);
      }
    }
    function S(e, t) {
      Object.defineProperty
        ? Object.defineProperty(e, "raw", { value: t })
        : (e.raw = t);
      return e;
    }
    var T = Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: true, value: t });
        }
      : function (e, t) {
          e["default"] = t;
        };
    function O(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          "default" !== n &&
            Object.prototype.hasOwnProperty.call(e, n) &&
            f(t, e, n);
      T(t, e);
      return t;
    }
    function P(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function x(e, t) {
      if (!t.has(e))
        throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    }
    function C(e, t, n) {
      if (!t.has(e))
        throw new TypeError("attempted to set private field on non-instance");
      t.set(e, n);
      return n;
    }
    var I = n("./common/temp/node_modules/tti-polyfill/tti-polyfill.js");
    var A = "/api/1/performance";
    var k = "/records";
    var R = "/settings";
    var L = "/error";
    var D = "3.1.1";
    var N = function (e) {
      return {
        app: "a",
        data: { __encoding_config__: e, __encoding_key__: "d" },
        event: "e",
        pageLoadId: "pl",
        ts: "t",
      };
    };
    var M = { downlink: "do", effectiveType: "ef", rtt: "rtt", saveData: "sd" };
    var B = {
      devicePixelRatio: "dpr",
      screenHeight: "sh",
      screenWidth: "sw",
      viewportHeight: "vh",
      viewportWidth: "vw",
    };
    var F = { deviceMemory: "dm", hardwareConcurrency: "hc" };
    var q = {
      abTest: "ab",
      analyticsId: "aid",
      connectEnd: "ce",
      connectStart: "c",
      connection: { __encoding_config__: M, __encoding_key__: "con" },
      context: "ctx",
      decodedBodySize: "db",
      deliveryType: "dt",
      display: { __encoding_config__: B, __encoding_key__: "disp" },
      domComplete: "dc",
      domContentLoadedEventEnd: "de",
      domContentLoadedEventStart: "ds",
      domInteractive: "di",
      domLoading: "d",
      domainLookupEnd: "dle",
      domainLookupStart: "dl",
      encodedBodySize: "eb",
      fetchStart: "f",
      firstContentfulPaint: "fcp",
      firstInputDelay: "fid",
      firstInteraction: "fi",
      firstPaint: "fp",
      hardware: { __encoding_config__: F, __encoding_key__: "hdw" },
      hash: "h",
      hostname: "hn",
      loadEventEnd: "le",
      loadEventStart: "l",
      marketingId: "mid",
      memberId: "mem",
      navigationStart: "n",
      navigationType: "nt",
      nextHopProtocol: "nh",
      pathname: "p",
      redirectCount: "rc",
      redirectEnd: "rde",
      redirectStart: "rd",
      requestStart: "r",
      responseEnd: "re",
      responseStart: "rs",
      secureConnectionStart: "s",
      supportLevel: "sl",
      transferSize: "t",
      tti: "tti",
      unloadEventEnd: "ue",
      unloadEventStart: "u",
      version: "v",
      visibilityStateOnDCL: "vs",
    };
    var U = {
      duration: "d",
      endMarkDetail: "e",
      measureDetail: "m",
      name: "n",
      startMarkDetail: "s",
      startTime: "st",
    };
    var z = {
      info: {
        __encoding_config__: {
          img: {
            __encoding_config__: {
              __encoding_config__: {
                assetUrl: "a",
                naturalHeight: "nh",
                naturalWidth: "nw",
                parentHeight: "ph",
                parentWidth: "pw",
                squarespaceSize: "s",
                visibleInSession: "vs",
                visibleOnLoad: "vl",
              },
              __encoding_skip__: true,
            },
            __encoding_key__: "img",
          },
        },
        __encoding_key__: "i",
      },
      timings: "t",
    };
    var H = Object.keys(q);
    var V = Object.keys(U);
    var Y = Object.keys(z);
    var X = "userTiming";
    var G = "mark";
    var K = "measure";
    var W = ["click", "mousedown", "keydown", "touchstart", "pointerdown"];
    var J = "DOMContentLoaded";
    var Q = "load";
    var $ = "sqsImageLoad";
    var Z = [J, Q];
    var ee = "beforeunload";
    var te = "pagehide";
    var ne = "resourcetimingbufferfull";
    var re = ["first-paint", "first-contentful-paint"];
    var oe = [$, ee, Q, ne, te];
    var ie = [Q, ee, te];
    var ae = "rum-";
    var se = "ss_ab";
    var ce = "SS_MID";
    var ue = "SS_ANALYTICS_ID";
    var le = 3e4;
    var de = 3e4;
    var fe = 5e4;
    var me =
      /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i;
    function pe(e) {
      var t = e.timeStamp;
      var n = t > 1e12 ? +new Date() : window.performance.now();
      var r = Math.max(n - t, 0);
      return { firstInputDelay: r, firstInteraction: n };
    }
    function ve() {
      return !!(
        window.performance &&
        window.performance.now &&
        window.addEventListener
      );
    }
    function he() {
      return !!(
        window.PerformanceMeasure &&
        window.PerformanceMark &&
        window.performance &&
        window.performance.mark &&
        window.performance.measure
      );
    }
    function ge() {
      if (!window.hasOwnProperty("PerformanceObserver")) return false;
      try {
        var e = new window.PerformanceObserver(function () {
          return null;
        });
        e.observe({ type: "mark" });
        e.disconnect();
      } catch (e) {
        return false;
      }
      return true;
    }
    function ye() {
      return !!(
        window.performance &&
        window.performance.getEntriesByType &&
        window.PerformanceNavigationTiming
      );
    }
    function _e() {
      return !!(
        window.performance &&
        window.performance.timing &&
        window.PerformanceTiming
      );
    }
    function je() {
      return (
        "function" === typeof window.navigator.sendBeacon &&
        !me.test(window.navigator.userAgent)
      );
    }
    function we() {
      return !!window.PerformancePaintTiming;
    }
    function be() {
      return !!window.LargestContentfulPaint;
    }
    function Ee() {
      return !!window.PerformanceLongTaskTiming;
    }
    function Se(e) {
      var t = {};
      for (var n in e) "function" !== typeof e[n] && (t[n] = e[n]);
      return t;
    }
    var Te = function (e) {
      var n = e.type,
        t = e.buffered,
        r = void 0 === t || t,
        o = e.isReadyFn,
        i =
          void 0 === o
            ? function () {
                return true;
              }
            : o;
      return new Promise(function (t) {
        var e = new PerformanceObserver(function (e) {
          i(e) && t(e);
        });
        e.observe({ type: n, buffered: r });
      });
    };
    function Oe() {
      var e = {};
      if (window.performance) {
        if (ye()) {
          e = Se(window.performance.getEntriesByType("navigation")[0]);
          e.supportLevel = 2;
        } else if (_e()) {
          e = Se(window.performance.timing);
          e.supportLevel = 1;
        }
        if (performance.navigation) {
          e.navigationType = window.performance.navigation.type;
          e.redirectCount = window.performance.navigation.redirectCount;
        }
      }
      return e;
    }
    var Pe = null;
    var xe = function () {
      return l(void 0, void 0, void 0, function () {
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              if (!!Pe) return [3, 4];
              if (!(ye() && ge())) return [3, 2];
              return [4, Ie()];
            case 1:
              Pe = e.sent();
              return [3, 4];
            case 2:
              if (!_e()) return [3, 4];
              return [4, Ae()];
            case 3:
              Pe = e.sent();
              e.label = 4;
            case 4:
              return [2, Pe];
          }
        });
      });
    };
    var Ce = function (n) {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, xe()];
            case 1:
              t = e.sent();
              if (!t || "number" !== typeof t[n]) return [2, null];
              return [2, Math.round(t[n])];
          }
        });
      });
    };
    function Ie() {
      return l(this, void 0, void 0, function () {
        var t, n, r;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              e.trys.push([0, 2, , 3]);
              return [
                4,
                Te({
                  type: "navigation",
                  isReadyFn: function (e) {
                    var t = e.getEntries()[0];
                    return !!(t.duration && t.duration > 0);
                  },
                }),
              ];
            case 1:
              t = e.sent();
              n = t.getEntries()[0];
              return [2, Se(n)];
            case 2:
              r = e.sent();
              return [2, null];
            case 3:
              return [2];
          }
        });
      });
    }
    function Ae() {
      var t = function () {
        var e = Se(window.performance.timing);
        var t = e.navigationStart;
        delete e.navigationStart;
        for (var n in e) e[n] > 0 && (e[n] = e[n] - t);
        return e;
      };
      return new Promise(function (e) {
        "complete" !== document.readyState
          ? window.addEventListener("load", function () {
              setTimeout(function () {
                e(t());
              });
            })
          : e(t());
      });
    }
    function ke(e) {
      var t = new RegExp("(^| )" + e + "=([^;]+)");
      var n = document.cookie.match(t);
      if (n) return n[2];
      return "";
    }
    function Re(e) {
      if (window.localStorage && window.localStorage.getItem)
        return window.localStorage.getItem(e);
      return null;
    }
    var Le;
    (function (e) {
      e["Beacon"] = "beacon";
      e["XHR"] = "xhr";
    })((Le = Le || {}));
    function De() {
      var e = Me();
      var t = Be();
      var n = qe();
      return {
        abTest: Ne(),
        analyticsId: ke(ue),
        connection: e,
        deliveryType: je() ? Le.Beacon : Le.XHR,
        display: t,
        hardware: n,
        hash: window.location.hash || "",
        hostname: window.location.hostname || "",
        marketingId: ke(ce),
        memberId: Fe(),
        pathname: window.location.pathname || "/",
        version: D,
      };
    }
    function Ne() {
      if (!window.atob) return null;
      var e = Re(se);
      if (e)
        try {
          return JSON.parse(window.atob(e));
        } catch (e) {
          return null;
        }
      return null;
    }
    function Me() {
      var e = {};
      var t =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
      if (t) {
        var n = (1e3 * t.downlink).toString();
        e = {
          downlink: parseInt(n, 10),
          effectiveType: t.effectiveType,
          rtt: t.rtt,
          saveData: t.saveData,
        };
      }
      return e;
    }
    function Be() {
      var e = window.devicePixelRatio;
      var t = window.screen,
        n = t.width,
        r = t.height;
      var o = document.documentElement,
        i = o.clientHeight,
        a = o.clientWidth;
      var s = {
        devicePixelRatio: e,
        screenHeight: r,
        screenWidth: n,
        viewportHeight: i,
        viewportWidth: a,
      };
      return s;
    }
    function Fe() {
      try {
        return window.Static.SQUARESPACE_CONTEXT.authenticatedAccount.id;
      } catch (e) {
        return "";
      }
    }
    function qe() {
      return {
        deviceMemory: navigator.deviceMemory,
        hardwareConcurrency: navigator.hardwareConcurrency,
      };
    }
    function Ue(e) {
      var t;
      var n = e.name,
        r = e.startTime;
      if (re.indexOf(n) >= 0) return (t = {}), (t[ze(n)] = r), t;
      return {};
    }
    function ze(e) {
      return e.replace(/-([a-zA-Z])/g, function (e, t) {
        var n = t && t.toUpperCase();
        return n || e;
      });
    }
    function He(d, f) {
      var m = {};
      Object.keys(f).forEach(function (e) {
        var t = f[e];
        var n;
        var r;
        var o = d[e] || d;
        var i = typeof o;
        var a = "string" === i;
        var s = "object" === i || "undefined" === o;
        if (!a && !s) return;
        if (a) {
          n = o;
          r = Ve(t);
        } else {
          var c = o.__encoding_skip__;
          var u = o.__encoding_config__;
          var l = o.__encoding_fn__;
          if (!c && !u && !d) throw new Error("Invalid encoding map");
          n = c ? e : o.__encoding_key__;
          r = u ? He(u, t) : l ? l(t) : t;
        }
        n && (m["" + n] = r);
      });
      return m;
    }
    function Ve(e) {
      if ("boolean" === typeof e) return e ? 1 : 0;
      if (Ye(e)) return e.toString(36);
      return e;
    }
    function Ye(e) {
      return ("number" === typeof e || e instanceof Number) && isFinite(e);
    }
    var Xe;
    var Ge = [];
    function Ke(e, t) {
      if (je() && navigator.sendBeacon(e, t)) return;
      var n = new XMLHttpRequest();
      n.open("POST", e, true);
      n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      n.send(t);
    }
    function We(n) {
      ie.forEach(function (t) {
        window.addEventListener(t, function () {
          try {
            if (t === Q) Xe = window.setTimeout(Qe, de, n);
            else if ("number" === typeof Xe) {
              window.clearTimeout(Xe);
              Xe = void 0;
            }
            Qe(n);
          } catch (e) {
            n(e, t);
          }
        });
      });
    }
    function Je(e) {
      Ge.push(e);
    }
    function Qe(t) {
      try {
        if (Ge.length) {
          var e = [];
          while (Ge.length) {
            var n = Ge.pop();
            var r = JSON.stringify(n);
            if (!(r.length <= fe && n))
              throw new Error(
                "Omitting individual metric because it's over the PER_METRIC_DELIVERY_SIZE (metric is " +
                  r.length +
                  " bytes, delivered from " +
                  window.location.href +
                  ")"
              );
            e.push(n);
          }
          if (e.length) {
            var o = JSON.stringify(e);
            Ke(A + k, o);
          }
        }
      } catch (e) {
        t(e);
      }
    }
    function $e(e) {
      Ke(A + L, e);
    }
    function Ze(e, t) {
      var n = He(e, t);
      if (!n) throw new Error("Data is empty");
      Je(n);
    }
    var et = [];
    function tt() {
      return et;
    }
    function nt(e) {
      et.push(e);
    }
    function rt(e, t, n, r) {
      var o = Object.freeze({
        app: e,
        data: r,
        event: t,
        pageLoadId: n,
        ts: Date.now(),
      });
      nt(o);
      return o;
    }
    var ot;
    (function (e) {
      e["OBSERVE"] = "observe";
      e["GATHER"] = "gather";
      e["BOTH"] = "both";
      e["NONE"] = "";
    })((ot = ot || {}));
    var it = (function () {
      function e() {
        this.requiresContext = false;
        this.context = {};
        this.deliveryBuffer = [];
        this.entryTypes = [e.eventName];
        this.fireOnce = false;
        this.gatherEvents = [];
        this.supportType = ot.NONE;
        this.encodeConfig = N({});
        this.appName = "";
        this.pageLoadId = "";
      }
      e.prototype.getDeliveryBuffer = function () {
        return this.deliveryBuffer;
      };
      e.prototype.getEventName = function () {
        return this.constructor.eventName;
      };
      e.prototype.getEntryTypes = function () {
        return this.entryTypes;
      };
      e.prototype.getGatherEvents = function () {
        return this.gatherEvents;
      };
      e.prototype.getSupportType = function () {
        return this.supportType;
      };
      e.prototype.shouldFireOnce = function () {
        return this.fireOnce;
      };
      e.prototype.observerParse = function (e) {
        this.deliveryBuffer.push(e);
        return true;
      };
      e.prototype.gather = function (e) {
        return e;
      };
      e.prototype.gatherParse = function (e) {
        this.deliveryBuffer.push(e);
        return true;
      };
      e.prototype.deliver = function () {
        while (this.deliveryBuffer.length) {
          var e = this.deliveryBuffer.shift();
          if (e) {
            var t = rt(this.appName, this.getEventName(), this.pageLoadId, e);
            Ze(this.getEncodeConfig(), t);
          }
        }
        this.deliveryBuffer = [];
      };
      e.prototype.getEncodeConfig = function () {
        return this.encodeConfig;
      };
      e.prototype.setApp = function (e) {
        this.appName = e;
        return this;
      };
      e.prototype.setId = function (e) {
        this.pageLoadId = e;
        return this;
      };
      e.eventName = "";
      return e;
    })();
    var at = it;
    var st = (function (n) {
      a(e, n);
      function e() {
        var e;
        var t = n.call(this) || this;
        t.requiresContext = true;
        t.fireOnce = true;
        t.gatherEvents = [Q, ee, te];
        t.entryTypes = ["paint", "longtask"];
        t.supportType = ot.BOTH;
        t.deliveryBuffer = [{}];
        t.encodeConfig = N(q);
        t.visibilityStateOnDCL = "";
        t.metricsCollected = { load: false };
        window.addEventListener("DOMContentLoaded", function () {
          return (t.visibilityStateOnDCL = document.visibilityState || "");
        });
        if (ve()) {
          t.metricsCollected.interaction = false;
          (e = t.gatherEvents).push.apply(e, W);
        }
        ge() && (t.metricsCollected.paint = false);
        t.setupTTI();
        return t;
      }
      e.prototype.gather = function (e) {
        if (e.type === Q) {
          this.metricsCollected.load = true;
          return p(
            p(
              {
                context: this.context,
                visibilityStateOnDCL: this.visibilityStateOnDCL,
              },
              De()
            ),
            Oe()
          );
        }
        if (
          -1 !== W.indexOf(e.type) &&
          false === this.metricsCollected.interaction
        ) {
          this.metricsCollected.interaction = true;
          return pe(e);
        }
        e.type === ee && (this.metricsCollected = {});
        return {};
      };
      e.prototype.gatherParse = function (e) {
        return this.parse(e);
      };
      e.prototype.observerParse = function (e) {
        if ("paint" === e.entryType) {
          this.metricsCollected.paint = true;
          return this.parse(Ue(e));
        }
        "longtask" === e.entryType && window.__tti && window.__tti.e.push(e);
        return false;
      };
      e.prototype.parse = function (n) {
        var t = this;
        this.deliveryBuffer.length &&
          H.reduce(function (e, t) {
            t in n && (e[t] = n[t]);
            return e;
          }, this.deliveryBuffer[0]);
        var e = Object.keys(this.metricsCollected).every(function (e) {
          return t.metricsCollected[e];
        });
        return e;
      };
      e.prototype.setupTTI = function () {
        var t = this;
        if (window.PerformanceLongTaskTiming && window.PerformanceObserver) {
          window.__tti = { e: [] };
          this.metricsCollected.tti = false;
          Object(I["getFirstConsistentlyInteractive"])().then(function (e) {
            t.metricsCollected.tti = true;
            t.parse({ tti: e });
          });
        }
      };
      e.eventName = "page_speed";
      return e;
    })(at);
    var ct = st;
    var ut = n(
      "./common/temp/node_modules/resourcetiming-compression/src/resourcetiming-compression.js"
    );
    var lt = n.n(ut);
    var dt = (function (t) {
      a(e, t);
      function e() {
        var e = t.call(this) || this;
        e.entryTypes = ["resource"];
        e.gatherEvents = oe;
        e.encodeConfig = N(z);
        e.readyToDeliver = false;
        e.dataBuffer = { info: {}, timings: {} };
        e.resourceTimingData = [];
        window.performance &&
        window.performance.getEntriesByType &&
        window.performance.clearResourceTimings &&
        window.PerformanceResourceTiming &&
        window.performance.getEntriesByType("resource")[0] instanceof
          PerformanceResourceTiming
          ? (e.supportType = ot.GATHER)
          : (e.supportType = ot.NONE);
        e.initImageLoaderData();
        return e;
      }
      e.prototype.gather = function (e) {
        if (e.type === $) {
          var t = e.detail.imageData,
            n = void 0 === t ? {} : t;
          this.dataBuffer.info.img = p(
            p({}, this.dataBuffer.info.img),
            this.gatherImageInfo(n)
          );
          return this.dataBuffer;
        }
        e.type === ee && (this.readyToDeliver = true);
        this.resourceTimingData = _(
          this.resourceTimingData,
          this.gatherImageTimingData()
        );
        return this.dataBuffer;
      };
      e.prototype.gatherParse = function () {
        if (this.readyToDeliver) {
          var e = lt.a.compressResourceTiming(
            window,
            this.resourceTimingData,
            [],
            false
          ).restiming;
          this.dataBuffer.timings = e;
          this.deliveryBuffer = [this.dataBuffer];
        }
        return this.readyToDeliver;
      };
      e.prototype.initImageLoaderData = function () {
        var t = this;
        this.dataBuffer.info.img = {};
        if (
          window.ImageLoader &&
          window.ImageLoader.imageInfo &&
          Object.keys(window.ImageLoader.imageInfo).length
        ) {
          var n = window.ImageLoader.imageInfo;
          Object.keys(n).forEach(function (e) {
            t.dataBuffer.info.img = p(
              p({}, t.dataBuffer.info.img),
              t.gatherImageInfo(n[e], true)
            );
          });
        }
      };
      e.prototype.isSquarespaceImage = function (e) {
        var t = e.name,
          n = e.initiatorType;
        var r = document.createElement("a");
        r.href = t;
        var o = r.hostname,
          i = r.pathname;
        return Boolean(
          "img" === n &&
            (o.indexOf("images.squarespace-cdn.com") > -1 ||
              ((o.indexOf("squarespace.com") ||
                o.indexOf("sqsp.net") > -1 ||
                o.indexOf("squarespace.net") > -1) &&
                i.indexOf("static") > -1))
        );
      };
      e.prototype.gatherImageTimingData = function () {
        var e = window.performance
          .getEntriesByType("resource")
          .filter(this.isSquarespaceImage);
        window.performance.clearResourceTimings();
        return e;
      };
      e.prototype.gatherImageInfo = function (e, t) {
        var n;
        void 0 === t && (t = false);
        var r = e.naturalDimensions,
          o = void 0 === r ? {} : r,
          i = e.parentElementDimensions,
          a = void 0 === i ? {} : i,
          s = e.isVisible,
          c = void 0 !== s && s,
          u = e.assetUrl,
          l = e.squarespaceSize,
          d = v(e, [
            "naturalDimensions",
            "parentElementDimensions",
            "isVisible",
            "assetUrl",
            "squarespaceSize",
          ]);
        if (!u || !l) return {};
        var f = u + "?format=" + e.squarespaceSize;
        var m = p({ assetUrl: f, squarespaceSize: l }, d);
        if (o.hasOwnProperty("height") && o.hasOwnProperty("width")) {
          m.naturalHeight = Math.round(o.height);
          m.naturalWidth = Math.round(o.width);
        }
        if (a.hasOwnProperty("height") && a.hasOwnProperty("width")) {
          m.parentHeight = Math.round(a.height);
          m.parentWidth = Math.round(a.width);
        }
        m.visibleInSession = c;
        m.visibleOnLoad = t && c;
        return (n = {}), (n[f] = m), n;
      };
      e.eventName = "resource";
      return e;
    })(at);
    var ft = dt;
    function mt(e) {
      return "string" === typeof e && "rum-" === e.substring(0, 4);
    }
    function pt(e) {
      return "number" === typeof e ? Math.round(e) : e;
    }
    var vt = (function (i) {
      a(e, i);
      function e() {
        var e = i.call(this) || this;
        e.gatherEvents = [X];
        e.encodeConfig = N(U);
        e.supportType = ot.GATHER;
        e.detailCache = {};
        e.measureMarkCache = {};
        if (he()) {
          var t = window.performance.getEntriesByType("measure");
          for (var n = 0, r = t; n < r.length; n++) {
            var o = r[n];
            e.parse(Se(o));
          }
        } else e.supportType = ot.NONE;
        return e;
      }
      e.prototype.gather = function (e) {
        if (e && yt(e.detail) && yt(e.detail.userTimingEntry)) {
          var t = e.detail,
            n = t.userTimingEntry,
            r = t.startMark,
            o = t.endMark,
            i = t.detail;
          if (n.entryType === G) this.addDetail(n.name, i);
          else if (n.entryType === K) {
            this.addMeasure(n.name, r, o);
            return p(p(p({}, Se(n)), this.getDetails(n.name)), {
              measureDetail: i,
            });
          }
        }
        return {};
      };
      e.prototype.gatherParse = function (e) {
        this.parse(e);
        return true;
      };
      e.prototype.parse = function (e) {
        if (!mt(e.name)) return false;
        var t = {};
        for (var n = 0, r = V; n < r.length; n++) {
          var o = r[n];
          e.hasOwnProperty(o) && (t[o] = pt(e[o]));
        }
        this.deliveryBuffer.push(t);
        return true;
      };
      e.prototype.addMeasure = function (e, t, n) {
        this.measureMarkCache[e] = { startMarkName: t, endMarkName: n };
      };
      e.prototype.addDetail = function (e, t) {
        this.detailCache[e] = gt(t);
      };
      e.prototype.getDetails = function (e) {
        var t = {};
        var n = this.measureMarkCache[e];
        if (void 0 !== n) {
          delete this.measureMarkCache[e];
          var r = n.startMarkName,
            o = n.endMarkName;
          if (void 0 !== r && this.detailCache.hasOwnProperty(r)) {
            t.startMarkDetail = this.detailCache[r];
            delete this.detailCache[r];
          }
          if (void 0 !== o && this.detailCache.hasOwnProperty(o)) {
            t.endMarkDetail = this.detailCache[o];
            delete this.detailCache[o];
          }
        }
        return t;
      };
      e.eventName = "user";
      return e;
    })(at);
    var ht = vt;
    function gt(e) {
      if ("object" !== typeof e || null === e) return e;
      var t = {};
      for (var n in e) n in e && (t[n] = e[n]);
      return t;
    }
    function yt(e) {
      return null !== e && "object" === typeof e;
    }
    var _t = (function (t) {
      a(e, t);
      function e() {
        var e = t.call(this) || this;
        e.gatherEvents = [ee, te];
        e.supportType = ot.GATHER;
        e.encodeConfig = N();
        je() || (e.supportType = ot.NONE);
        return e;
      }
      e.prototype.gather = function () {
        if (wt()) return window.YUI.stats.getSerializedDataForReporter();
        return {};
      };
      e.prototype.gatherParse = function (e) {
        this.deliveryBuffer.push(e);
        return true;
      };
      e.eventName = "yui_stats";
      return e;
    })(at);
    var jt = _t;
    function wt() {
      return (
        window.YUI &&
        window.YUI.stats &&
        window.YUI.stats.getSerializedDataForReporter &&
        "function" === typeof window.YUI.stats.getSerializedDataForReporter
      );
    }
    var bt = [ct, ht, ft, jt];
    function Et(n, e, r, o) {
      e.forEach(function (e) {
        Z.indexOf(e) > -1 && Ot()
          ? n({ type: e })
          : window.addEventListener(e, function e(t) {
              try {
                r && window.removeEventListener(t.type, e);
                return n(t);
              } catch (e) {
                o(e, { fireOnce: r, event: t });
              }
            });
      });
    }
    function St(n, r) {
      if (!("PerformanceObserver" in window)) return;
      var o = function (e) {
        e.forEach(function (e) {
          var t = new CustomEvent(Tt(e.entryType), { detail: e.toJSON() });
          window.dispatchEvent(t);
        });
      };
      var t = function (e) {
        var t = e.entryType;
        return n.indexOf(t) > -1;
      };
      var i = function (e) {
        var t = e.entryType;
        return "navigation" === t;
      };
      o(
        performance.getEntries().filter(function (e) {
          return (t(e) && !i(e)) || (Ot() && i(e));
        })
      );
      var e = new window.PerformanceObserver(function (e) {
        var t;
        try {
          t = e.getEntries();
          o(t);
        } catch (e) {
          r(e, t);
        }
      });
      if (n.length > 0)
        try {
          e.observe({ entryTypes: n });
        } catch (e) {}
    }
    function Tt(e) {
      return e + "-observer";
    }
    function Ot() {
      return "complete" === document.readyState;
    }
    var Pt = [];
    var xt;
    var Ct = 2e3;
    function It(e, t, n) {
      void 0 === n && (n = false);
      if (window.requestIdleCallback && !n) {
        Pt.push(e);
        xt =
          xt ||
          window.requestIdleCallback(
            function (e) {
              return At(e, t);
            },
            { timeout: Ct }
          );
      } else e.deliver();
    }
    function At(e, t) {
      try {
        while ((e.timeRemaining() > 0 || e.didTimeout) && Pt.length) {
          var n = Pt.shift();
          n && n.deliver();
        }
        xt = Pt.length
          ? window.requestIdleCallback(
              function (e) {
                return At(e, t);
              },
              { timeout: Ct }
            )
          : void 0;
      } catch (e) {
        t(e);
      }
    }
    var kt = { passive: true, capture: true };
    function Rt(t, e, n) {
      var r = function () {
        try {
          e(t);
          i();
        } catch (e) {
          n(e, t);
        }
      };
      var o = function () {
        try {
          i();
        } catch (e) {
          n(e);
        }
      };
      function i() {
        window.removeEventListener("pointerup", r, kt);
        window.removeEventListener("pointercancel", o, kt);
      }
      window.addEventListener("pointerup", r, kt);
      window.addEventListener("pointercancel", o, kt);
    }
    function Lt(o) {
      return function (e, t) {
        void 0 === t && (t = false);
        var n = o.getABTestVariant(e + "-rollout", t.toString()).variant;
        var r = "true" === n;
        return r;
      };
    }
    function Dt(o, i, a, s) {
      return function (e, t) {
        var n = o(t.eventName + "-plugin");
        if (n) {
          var r = new t().setApp(i).setId(a);
          r.requiresContext && (r.context = s);
          e.push(r);
        }
        return e;
      };
    }
    function Nt(n, r, o) {
      return function (e) {
        var t = e.detail;
        try {
          n.observerParse(t) && It(n, o);
        } catch (e) {
          o(e, {
            observerEventType: r,
            parsedData: n.getDeliveryBuffer(),
            observerData: t,
          });
        }
      };
    }
    function Mt(r, o) {
      function e(e) {
        var t;
        try {
          t = r.gather(e);
          if ("pointerdown" === t.eventType)
            Rt(
              t,
              function (e) {
                return Bt(r, e, o);
              },
              o
            );
          else {
            var n = e.type === ee || e.type === te;
            Bt(r, t, o, n);
          }
        } catch (e) {
          o(e, {
            eventName: r.getEventName(),
            parsedData: r.getDeliveryBuffer(),
            rawData: t,
          });
        }
      }
      return e;
    }
    function Bt(e, t, n, r) {
      void 0 === r && (r = false);
      var o = e.gatherParse(t);
      o && It(e, n, r);
    }
    var Ft = function () {
      return new Promise(function (e, t) {
        var n = new XMLHttpRequest();
        n.onreadystatechange = function () {
          if (n.readyState === XMLHttpRequest.DONE)
            if (200 === n.status)
              try {
                e(JSON.parse(n.response));
              } catch (e) {
                t(e);
              }
            else
              0 !== n.status &&
                t(
                  new Error(
                    "XHR request DONE with unexpected status: " + n.status
                  )
                );
        };
        n.ontimeout = function () {
          t(new Error("Metric settings request timeout"));
        };
        n.open("GET", A + R, true);
        n.timeout = le;
        n.send();
      });
    };
    var qt = function (n, r) {
      return function (e, t) {
        $e("RUMError[" + n + "]: " + e);
        r && r(e, t);
      };
    };
    var Ut = function (e) {
      var t = {
        appName: e.appName || "",
        context: e.context || {},
        enabled: "boolean" !== typeof e.enabled || e.enabled,
      };
      t.captureException = qt(t.appName, e.captureException);
      return t;
    };
    function zt(e) {
      var a = Ut(e);
      var r;
      return Ft()
        .then(function (e) {
          r = e.pageLoadId;
          if (!r) throw new Error("Unable to resolve pageLoadId");
          return new i["StaticPraetorClient"](e);
        })
        .then(function (e) {
          var t = Lt(e);
          if (
            ["rum", a.appName + "-app"].some(function (e) {
              return !t(e);
            })
          )
            return;
          var n = bt.reduce(Dt(t, a.appName, r, a.context), []);
          var i = [];
          n.forEach(function (r) {
            var e = r.getSupportType();
            if (e === ot.OBSERVE || e === ot.BOTH) {
              var t = r.getEntryTypes();
              t.forEach(function (e) {
                var t = Tt(e);
                i.push(e);
                var n = Nt(r, t, a.captureException);
                window.addEventListener(t, n);
              });
            }
            if (e === ot.GATHER || e === ot.BOTH) {
              var n = r.getGatherEvents();
              var o = Mt(r, a.captureException);
              Et(o, n, r.shouldFireOnce(), a.captureException);
            }
          });
          St(i, a.captureException);
          a.enabled && We(a.captureException);
        })
        .catch(function (e) {
          a.captureException(e, { pageLoadId: r, parsedOptions: a });
        });
    }
    var Ht = function () {
      return l(void 0, void 0, void 0, function () {
        var t, n, r, o;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [
                4,
                Promise.all([Ce("domainLookupEnd"), Ce("domainLookupStart")]),
              ];
            case 1:
              (t = e.sent()), (n = t[0]), (r = t[1]);
              if (!(n && r)) return [2, null];
              o = n - r;
              return [2, { domainLookup: o }];
          }
        });
      });
    };
    var Vt = function () {
      return l(void 0, void 0, void 0, function () {
        var t, n, r, o;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, Promise.all([Ce("connectEnd"), Ce("connectStart")])];
            case 1:
              (t = e.sent()), (n = t[0]), (r = t[1]);
              if (!(n && r)) return [2, null];
              o = n - r;
              return [2, { tcpConnection: o }];
          }
        });
      });
    };
    var Yt,
      Xt,
      Gt = function () {
        return ""
          .concat(Date.now(), "-")
          .concat(Math.floor(8999999999999 * Math.random()) + 1e12);
      },
      Kt = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return {
          name: e,
          value: t,
          delta: 0,
          entries: [],
          id: Gt(),
          isFinal: !1,
        };
      },
      Wt = function (e, t) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            var n = new PerformanceObserver(function (e) {
              return e.getEntries().map(t);
            });
            return n.observe({ type: e, buffered: !0 }), n;
          }
        } catch (e) {}
      },
      Jt = !1,
      Qt = !1,
      $t = function (e) {
        Jt = !e.persisted;
      },
      Zt = function () {
        addEventListener("pagehide", $t),
          addEventListener("beforeunload", function () {});
      },
      en = function (n) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        Qt || (Zt(), (Qt = !0)),
          addEventListener(
            "visibilitychange",
            function (e) {
              var t = e.timeStamp;
              "hidden" === document.visibilityState &&
                n({ timeStamp: t, isUnloading: Jt });
            },
            { capture: !0, once: e }
          );
      },
      tn = function (e, t, n, r) {
        var o;
        return function () {
          n && t.isFinal && n.disconnect(),
            t.value >= 0 &&
              (r || t.isFinal || "hidden" === document.visibilityState) &&
              ((t.delta = t.value - (o || 0)),
              (t.delta || t.isFinal || void 0 === o) && (e(t), (o = t.value)));
        };
      },
      nn = function (e) {
        var n,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = Kt("CLS", 0),
          o = function (e) {
            e.hadRecentInput || ((r.value += e.value), r.entries.push(e), n());
          },
          i = Wt("layout-shift", o);
        i &&
          ((n = tn(e, r, i, t)),
          en(function (e) {
            var t = e.isUnloading;
            i.takeRecords().map(o), t && (r.isFinal = !0), n();
          }));
      },
      rn = function () {
        return (
          void 0 === Yt &&
            ((Yt = "hidden" === document.visibilityState ? 0 : 1 / 0),
            en(function (e) {
              var t = e.timeStamp;
              return (Yt = t);
            }, !0)),
          {
            get timeStamp() {
              return Yt;
            },
          }
        );
      },
      on = function (e) {
        var t,
          n = Kt("FCP"),
          r = rn(),
          o = Wt("paint", function (e) {
            "first-contentful-paint" === e.name &&
              e.startTime < r.timeStamp &&
              ((n.value = e.startTime),
              (n.isFinal = !0),
              n.entries.push(e),
              t());
          });
        o && (t = tn(e, n, o));
      },
      an = function (e) {
        var n = Kt("FID"),
          r = rn(),
          t = function (e) {
            e.startTime < r.timeStamp &&
              ((n.value = e.processingStart - e.startTime),
              n.entries.push(e),
              (n.isFinal = !0),
              i());
          },
          o = Wt("first-input", t),
          i = tn(e, n, o);
        o
          ? en(function () {
              o.takeRecords().map(t), o.disconnect();
            }, !0)
          : window.perfMetrics &&
            window.perfMetrics.onFirstInputDelay &&
            window.perfMetrics.onFirstInputDelay(function (e, t) {
              t.timeStamp < r.timeStamp &&
                ((n.value = e),
                (n.isFinal = !0),
                (n.entries = [
                  {
                    entryType: "first-input",
                    name: t.type,
                    target: t.target,
                    cancelable: t.cancelable,
                    startTime: t.timeStamp,
                    processingStart: t.timeStamp + e,
                  },
                ]),
                i());
            });
      },
      sn = function () {
        return (
          (Xt =
            Xt ||
            new Promise(function (t) {
              return ["scroll", "keydown", "pointerdown"].map(function (e) {
                addEventListener(e, t, { once: !0, passive: !0, capture: !0 });
              });
            })),
          Xt
        );
      },
      cn = function (e) {
        var n,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = Kt("LCP"),
          o = rn(),
          i = function (e) {
            var t = e.startTime;
            t < o.timeStamp
              ? ((r.value = t), r.entries.push(e))
              : (r.isFinal = !0),
              n();
          },
          a = Wt("largest-contentful-paint", i);
        if (a) {
          n = tn(e, r, a, t);
          var s = function () {
            r.isFinal || (a.takeRecords().map(i), (r.isFinal = !0), n());
          };
          sn().then(s), en(s, !0);
        }
      },
      un = function (t) {
        var e,
          n = Kt("TTFB");
        (e = function () {
          try {
            var e =
              performance.getEntriesByType("navigation")[0] ||
              (function () {
                var e = performance.timing,
                  t = { entryType: "navigation", startTime: 0 };
                for (var n in e)
                  "navigationStart" !== n &&
                    "toJSON" !== n &&
                    (t[n] = Math.max(e[n] - e.navigationStart, 0));
                return t;
              })();
            (n.value = n.delta = e.responseStart),
              (n.entries = [e]),
              (n.isFinal = !0),
              t(n);
          } catch (e) {}
        }),
          "complete" === document.readyState
            ? setTimeout(e, 0)
            : addEventListener("pageshow", e);
      };
    var ln = function (e) {
      return new Promise(function (t, n) {
        try {
          e(function (e) {
            t(e);
          });
        } catch (e) {
          n(e);
        }
      });
    };
    var dn = function (t, n) {
      void 0 === n && (n = null);
      return new Promise(function (e) {
        setTimeout(function () {
          return e(n);
        }, t);
      });
    };
    var fn = 1e4;
    var mn = function (t) {
      return function () {
        return l(void 0, void 0, void 0, function () {
          return d(this, function (e) {
            return [2, Promise.race([ln(t), dn(fn)])];
          });
        });
      };
    };
    var pn = {
      getCLS: mn(nn),
      getFCP: mn(on),
      getLCP: mn(cn),
      getTTFB: mn(un),
      getFID: mn(an),
    };
    var vn = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, pn.getCLS()];
            case 1:
              t = e.sent();
              return [2, t ? { cumulativeLayoutShift: t.value } : null];
          }
        });
      });
    };
    var hn = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, Ce("decodedBodySize")];
            case 1:
              t = e.sent();
              return [2, t ? { decodedBodySize: t } : null];
          }
        });
      });
    };
    var gn = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, Ce("domContentLoadedEventEnd")];
            case 1:
              t = e.sent();
              return [2, t ? { domContentLoadedEventEnd: t } : null];
          }
        });
      });
    };
    var yn = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, Ce("domContentLoadedEventStart")];
            case 1:
              t = e.sent();
              return [2, t ? { domContentLoadedEventStart: t } : null];
          }
        });
      });
    };
    var _n = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, Ce("encodedBodySize")];
            case 1:
              t = e.sent();
              return [2, t ? { encodedBodySize: t } : null];
          }
        });
      });
    };
    var jn = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, pn.getFCP()];
            case 1:
              t = e.sent();
              return [
                2,
                t ? { firstContentfulPaint: Math.round(t.value) } : null,
              ];
          }
        });
      });
    };
    var wn = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, pn.getFID()];
            case 1:
              t = e.sent();
              return [2, t ? { firstInputDelay: Math.round(t.value) } : null];
          }
        });
      });
    };
    var bn = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, pn.getLCP()];
            case 1:
              t = e.sent();
              return [
                2,
                t ? { largestContentfulPaint: Math.round(t.value) } : null,
              ];
          }
        });
      });
    };
    var En = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, Ce("loadEventEnd")];
            case 1:
              t = e.sent();
              return [2, t ? { loadEventEnd: t } : null];
          }
        });
      });
    };
    var Sn = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, Ce("loadEventStart")];
            case 1:
              t = e.sent();
              return [2, t ? { loadEventStart: t } : null];
          }
        });
      });
    };
    var Tn = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, pn.getTTFB()];
            case 1:
              t = e.sent();
              return [2, t ? { responseStart: Math.round(t.value) } : null];
          }
        });
      });
    };
    var On = function () {
      return l(void 0, void 0, void 0, function () {
        var t, n, r, o;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              return [
                4,
                Promise.all([Ce("connectEnd"), Ce("secureConnectionStart")]),
              ];
            case 1:
              (t = e.sent()), (n = t[0]), (r = t[1]);
              if (!(n && r)) return [2, null];
              o = n - r;
              return [2, { tlsNegotiation: o }];
          }
        });
      });
    };
    var Pn = function () {
      return l(void 0, void 0, void 0, function () {
        var t;
        return d(this, function (e) {
          if (!(Ee() && ge())) return [2, null];
          t = false;
          window.__tti = { e: [] };
          Te({
            type: "longtask",
            buffered: false,
            isReadyFn: function (e) {
              window.__tti.e = window.__tti.e.concat(e.getEntries());
              return t;
            },
          });
          return [
            2,
            Object(I["getFirstConsistentlyInteractive"])().then(function (e) {
              t = true;
              return { timeToInteractive: Math.round(e) };
            }),
          ];
        });
      });
    };
    function xn() {
      return l(this, void 0, void 0, function () {
        var t, n, r;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              t = Object.values(o).map(function (e) {
                return e();
              });
              e.label = 1;
            case 1:
              e.trys.push([1, 3, , 4]);
              return [4, Promise.all(t)];
            case 2:
              n = e.sent().reduce(function (e, t) {
                e = p(p({}, e), t);
                return e;
              }, {});
              return [2, n];
            case 3:
              r = e.sent();
              return [2, {}];
            case 4:
              return [2];
          }
        });
      });
    }
    function Cn(e, t) {
      "function" === typeof window.dispatchEvent &&
        "function" === typeof CustomEvent &&
        window.dispatchEvent(new CustomEvent(e, { detail: t }));
    }
    function In(e, t) {
      try {
        if (!Rn()) return;
        var n = ae + e;
        window.performance.mark(n);
        var r = { userTimingEntry: Ln(n) };
        "object" === typeof t && null !== t && (r.detail = t.detail);
        Cn(X, r);
      } catch (e) {
        $e("RUMError[mark]: " + e);
      }
    }
    function An(e, t) {
      try {
        if (!(Rn() && kn())) return;
        var n = "object" === typeof t && null !== t;
        var r = n && "string" === typeof t.end;
        var o = n && "string" === typeof t.start;
        var i = n && !!t.requireStart;
        var a = ae + e;
        var s = o ? ae + t.start : a;
        var c = r ? ae + t.end : void 0;
        if (i && 0 === window.performance.getEntriesByName(s, "mark").length)
          return;
        Dn(a, s, c);
        var u = Ln(a);
        var l = {
          detail: n ? t.detail : void 0,
          endMark: c,
          startMark: s,
          userTimingEntry: u,
        };
        Cn(X, l);
        return u;
      } catch (e) {
        $e("RUMError[measure]: " + e);
      }
    }
    function kn() {
      return (
        "performance" in window &&
        "getEntries" in window.performance &&
        "getEntriesByType" in window.performance &&
        "getEntriesByName" in window.performance
      );
    }
    function Rn() {
      return "mark" in window.performance && "measure" in window.performance;
    }
    function Ln(e) {
      var t = window.performance.getEntriesByName(e);
      return t[t.length - 1];
    }
    function Dn(t, e, n) {
      try {
        window.performance.measure(t, e, n);
      } catch (e) {
        if (!(e instanceof DOMException)) throw e;
        try {
          window.performance.measure(t, "navigationStart");
        } catch (e) {
          if (!(e instanceof DOMException)) throw e;
          window.performance.measure(t);
        }
      }
    }
    var Nn = n("./common/temp/node_modules/@sqs/track-events/v2.js");
    var Mn = n.n(Nn);
    var Bn = {
      action: "load",
      actor: "user",
      event_owner_team: "web_performance",
      event_source: "web",
      object_type: "website",
    };
    var Fn = function () {
      var e = /^qa\d+.sqsp.net/g;
      var t = /^stage.sqsp.net/g;
      var n = window.location.hostname.substr(
        window.location.hostname.indexOf(".") + 1
      );
      if (t.test(n) || e.test(n)) return Nn["SourceEnvironment"].STAGING;
      if ("localhost" === n) return Nn["SourceEnvironment"].DEV;
      if ("squarespace.net" === n) return Nn["SourceEnvironment"].CORP;
      return Nn["SourceEnvironment"].PROD;
    };
    var qn = function (r) {
      return l(void 0, void 0, void 0, function () {
        var t, n;
        return d(this, function (e) {
          switch (e.label) {
            case 0:
              t = new Mn.a(
                { customSchemaName: "Performance", sourceEnvironment: Fn() },
                Bn
              );
              return [4, xn()];
            case 1:
              n = e.sent();
              t.track(
                p(p({}, r), {
                  cumulative_layout_shift: n.cumulativeLayoutShift,
                  decoded_body_size_bytes: n.decodedBodySize,
                  dom_content_loaded_event_end_ms: n.domContentLoadedEventEnd,
                  dom_content_loaded_event_start_ms:
                    n.domContentLoadedEventStart,
                  domain_lookup_ms: n.domainLookup,
                  encoded_body_size_bytes: n.encodedBodySize,
                  first_contentful_paint_ms: n.firstContentfulPaint,
                  first_input_delay_ms: n.firstInputDelay,
                  largest_contentful_paint_ms: n.largestContentfulPaint,
                  load_event_end_ms: n.loadEventEnd,
                  load_event_start_ms: n.loadEventStart,
                  response_start_ms: n.responseStart,
                  tcp_connection_ms: n.tcpConnection,
                  time_to_interactive_ms: n.timeToInteractive,
                  tls_negotiation_ms: n.tlsNegotiation,
                })
              );
              return [2];
          }
        });
      });
    };
  },
  "./common/temp/node_modules/@sqs/track-events/v2.js": function (e, t, n) {
    e.exports = (function (n) {
      var r = {};
      function o(e) {
        if (r[e]) return r[e].exports;
        var t = (r[e] = { i: e, l: false, exports: {} });
        n[e].call(t.exports, t, t.exports, o);
        t.l = true;
        return t.exports;
      }
      o.m = n;
      o.c = r;
      o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: n });
      };
      o.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        Object.defineProperty(e, "__esModule", { value: true });
      };
      o.t = function (t, e) {
        1 & e && (t = o(t));
        if (8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        o.r(n);
        Object.defineProperty(n, "default", { enumerable: true, value: t });
        if (2 & e && "string" != typeof t)
          for (var r in t)
            o.d(
              n,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
            );
        return n;
      };
      o.n = function (t) {
        var e =
          t && t.__esModule
            ? function e() {
                return t["default"];
              }
            : function e() {
                return t;
              };
        o.d(e, "a", e);
        return e;
      };
      o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
      o.p = "";
      return o((o.s = 10));
    })([
      function (e, t) {
        var s = /^([^=]+)=([^;]*)$/;
        var t = (e.exports = function (i, e) {
          i = i || {};
          "string" === typeof i && (i = { cookie: i });
          void 0 === i.cookie && (i.cookie = "");
          false !== e && (e = true);
          var t = function (e) {
            return e;
          };
          var o = e ? escape : t;
          var a = e ? unescape : t;
          var n = {};
          n.get = function (e) {
            var t = i.cookie.split(/;\s*/);
            for (var n = 0; n < t.length; n++) {
              var r = (t[n] || "").match(s) || [];
              var o = a(r[1] || "");
              if (o === e) return a(r[2] || "");
            }
            return;
          };
          n.set = function (e, t, n) {
            n = n || {};
            var r = o(e) + "=" + o(t);
            n.expires && (r += "; expires=" + n.expires);
            n.path && (r += "; path=" + o(n.path));
            n.domain && (r += "; domain=" + o(n.domain));
            n.secure && (r += "; secure");
            i.cookie = r;
            return r;
          };
          return n;
        });
        if ("undefined" !== typeof document) {
          var n = t(document);
          t.get = n.get;
          t.set = n.set;
        }
      },
      function (e, t, n) {
        "use strict";
        t.decode = t.parse = n(6);
        t.encode = t.stringify = n(7);
      },
      function (e, t, n) {
        var a = n(8);
        var s = n(9);
        function r(e, t, n) {
          var r = (t && n) || 0;
          if ("string" == typeof e) {
            t = "binary" === e ? new Array(16) : null;
            e = null;
          }
          e = e || {};
          var o = e.random || (e.rng || a)();
          o[6] = (15 & o[6]) | 64;
          o[8] = (63 & o[8]) | 128;
          if (t) for (var i = 0; i < 16; ++i) t[r + i] = o[i];
          return t || s(o);
        }
        e.exports = r;
      },
      function (e, t) {
        e.exports = (function (n) {
          var r = {};
          function o(e) {
            if (r[e]) return r[e].exports;
            var t = (r[e] = { i: e, l: false, exports: {} });
            n[e].call(t.exports, t, t.exports, o);
            t.l = true;
            return t.exports;
          }
          o.m = n;
          o.c = r;
          o.d = function (e, t, n) {
            o.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: true, get: n });
          };
          o.r = function (e) {
            "undefined" !== typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
            Object.defineProperty(e, "__esModule", { value: true });
          };
          o.t = function (t, e) {
            1 & e && (t = o(t));
            if (8 & e) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            o.r(n);
            Object.defineProperty(n, "default", { enumerable: true, value: t });
            if (2 & e && "string" != typeof t)
              for (var r in t)
                o.d(
                  n,
                  r,
                  function (e) {
                    return t[e];
                  }.bind(null, r)
                );
            return n;
          };
          o.n = function (t) {
            var e =
              t && t.__esModule
                ? function e() {
                    return t["default"];
                  }
                : function e() {
                    return t;
                  };
            o.d(e, "a", e);
            return e;
          };
          o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          };
          o.p = "";
          return o((o.s = 0));
        })([
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            t.getSessionInfo = m;
            var r = n(1);
            var i = s(r);
            var o = n(4);
            var a = s(o);
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var c = "SS_IS_FIRST_SESSION";
            var u = "SS_HAS_LANDED";
            var l = "SS_SESSION_ID";
            var d = ["squarespace.com", "squarespace.net", "sqsp.net"];
            var f = function e(t, n) {
              var r = void 0;
              d.forEach(function (e) {
                window.location.hostname.indexOf(e) > -1 && (r = e);
              });
              r = r || window.location.hostname;
              a.default.set(t, n, {
                domain: r,
                path: "/",
                secure: window.location.protocol.indexOf("https") > -1,
              });
            };
            function m() {
              if ("undefined" === typeof window) return;
              if (window._sessionInfo) return window._sessionInfo;
              try {
                var e = localStorage.getItem(u);
                var t = sessionStorage.getItem(c);
                var n = null === t;
                var r = null === e || "true" === t;
                var o = a.default.get(l);
                localStorage.setItem(u, "true");
                n &&
                  (r
                    ? sessionStorage.setItem(c, "true")
                    : sessionStorage.setItem(c, "false"));
                if (!o) {
                  o = (0, i.default)();
                  f(l, o);
                }
                window._sessionInfo = {
                  isFirstLanding: n,
                  isFirstSession: r,
                  sessionId: o,
                };
                return window._sessionInfo;
              } catch (e) {
                console.warn("Unable access local/session storage.");
                return { isFirstLanding: false, isFirstSession: false };
              }
            }
          },
          function (e, t, n) {
            var a = n(2);
            var s = n(3);
            function r(e, t, n) {
              var r = (t && n) || 0;
              if ("string" == typeof e) {
                t = "binary" === e ? new Array(16) : null;
                e = null;
              }
              e = e || {};
              var o = e.random || (e.rng || a)();
              o[6] = (15 & o[6]) | 64;
              o[8] = (63 & o[8]) | 128;
              if (t) for (var i = 0; i < 16; ++i) t[r + i] = o[i];
              return t || s(o);
            }
            e.exports = r;
          },
          function (e, t) {
            var n =
              ("undefined" != typeof crypto &&
                crypto.getRandomValues &&
                crypto.getRandomValues.bind(crypto)) ||
              ("undefined" != typeof msCrypto &&
                "function" == typeof window.msCrypto.getRandomValues &&
                msCrypto.getRandomValues.bind(msCrypto));
            if (n) {
              var r = new Uint8Array(16);
              e.exports = function e() {
                n(r);
                return r;
              };
            } else {
              var o = new Array(16);
              e.exports = function e() {
                for (var t = 0, n; t < 16; t++) {
                  0 === (3 & t) && (n = 4294967296 * Math.random());
                  o[t] = (n >>> ((3 & t) << 3)) & 255;
                }
                return o;
              };
            }
          },
          function (e, t) {
            var o = [];
            for (var n = 0; n < 256; ++n)
              o[n] = (n + 256).toString(16).substr(1);
            function r(e, t) {
              var n = t || 0;
              var r = o;
              return [
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
                "-",
                r[e[n++]],
                r[e[n++]],
                "-",
                r[e[n++]],
                r[e[n++]],
                "-",
                r[e[n++]],
                r[e[n++]],
                "-",
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
              ].join("");
            }
            e.exports = r;
          },
          function (e, t) {
            var s = /^([^=]+)=([^;]*)$/;
            var t = (e.exports = function (i, e) {
              i = i || {};
              "string" === typeof i && (i = { cookie: i });
              void 0 === i.cookie && (i.cookie = "");
              false !== e && (e = true);
              var t = function (e) {
                return e;
              };
              var o = e ? escape : t;
              var a = e ? unescape : t;
              var n = {};
              n.get = function (e) {
                var t = i.cookie.split(/;\s*/);
                for (var n = 0; n < t.length; n++) {
                  var r = (t[n] || "").match(s) || [];
                  var o = a(r[1] || "");
                  if (o === e) return a(r[2] || "");
                }
                return;
              };
              n.set = function (e, t, n) {
                n = n || {};
                var r = o(e) + "=" + o(t);
                n.expires && (r += "; expires=" + n.expires);
                n.path && (r += "; path=" + o(n.path));
                n.domain && (r += "; domain=" + o(n.domain));
                n.secure && (r += "; secure");
                i.cookie = r;
                return r;
              };
              return n;
            });
            if ("undefined" !== typeof document) {
              var n = t(document);
              t.get = n.get;
              t.set = n.set;
            }
          },
        ]);
      },
      function (e) {
        e.exports = JSON.parse('{"a":"3.4.8"}');
      },
      function (e, t) {
        e.exports = n(
          "./common/temp/node_modules/core-js/modules/es.promise.js"
        );
      },
      function (e, t, n) {
        "use strict";
        function v(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        e.exports = function (e, t, n, r) {
          t = t || "&";
          n = n || "=";
          var o = {};
          if ("string" !== typeof e || 0 === e.length) return o;
          var i = /\+/g;
          e = e.split(t);
          var a = 1e3;
          r && "number" === typeof r.maxKeys && (a = r.maxKeys);
          var s = e.length;
          a > 0 && s > a && (s = a);
          for (var c = 0; c < s; ++c) {
            var u = e[c].replace(i, "%20"),
              l = u.indexOf(n),
              d,
              f,
              m,
              p;
            if (l >= 0) {
              d = u.substr(0, l);
              f = u.substr(l + 1);
            } else {
              d = u;
              f = "";
            }
            m = decodeURIComponent(d);
            p = decodeURIComponent(f);
            v(o, m)
              ? h(o[m])
                ? o[m].push(p)
                : (o[m] = [o[m], p])
              : (o[m] = p);
          }
          return o;
        };
        var h =
          Array.isArray ||
          function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          };
      },
      function (e, t, n) {
        "use strict";
        var i = function (e) {
          switch (typeof e) {
            case "string":
              return e;
            case "boolean":
              return e ? "true" : "false";
            case "number":
              return isFinite(e) ? e : "";
            default:
              return "";
          }
        };
        e.exports = function (n, r, o, e) {
          r = r || "&";
          o = o || "=";
          null === n && (n = void 0);
          if ("object" === typeof n)
            return s(c(n), function (e) {
              var t = encodeURIComponent(i(e)) + o;
              return a(n[e])
                ? s(n[e], function (e) {
                    return t + encodeURIComponent(i(e));
                  }).join(r)
                : t + encodeURIComponent(i(n[e]));
            }).join(r);
          if (!e) return "";
          return encodeURIComponent(i(e)) + o + encodeURIComponent(i(n));
        };
        var a =
          Array.isArray ||
          function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          };
        function s(e, t) {
          if (e.map) return e.map(t);
          var n = [];
          for (var r = 0; r < e.length; r++) n.push(t(e[r], r));
          return n;
        }
        var c =
          Object.keys ||
          function (e) {
            var t = [];
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t;
          };
      },
      function (e, t) {
        var n =
          ("undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof window.msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto));
        if (n) {
          var r = new Uint8Array(16);
          e.exports = function e() {
            n(r);
            return r;
          };
        } else {
          var o = new Array(16);
          e.exports = function e() {
            for (var t = 0, n; t < 16; t++) {
              0 === (3 & t) && (n = 4294967296 * Math.random());
              o[t] = (n >>> ((3 & t) << 3)) & 255;
            }
            return o;
          };
        }
      },
      function (e, t) {
        var o = [];
        for (var n = 0; n < 256; ++n) o[n] = (n + 256).toString(16).substr(1);
        function r(e, t) {
          var n = t || 0;
          var r = o;
          return [
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            "-",
            r[e[n++]],
            r[e[n++]],
            "-",
            r[e[n++]],
            r[e[n++]],
            "-",
            r[e[n++]],
            r[e[n++]],
            "-",
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
          ].join("");
        }
        e.exports = r;
      },
      function (e, t, n) {
        "use strict";
        n.r(t);
        n.d(t, "ClientConfig", function () {
          return;
        });
        n.d(t, "EventSource", function () {
          return l;
        });
        n.d(t, "SourceEnvironment", function () {
          return u;
        });
        n.d(t, "default", function () {
          return M;
        });
        var r = n(5);
        var o = n(0);
        var g = n.n(o);
        var i = n(1);
        var a = n.n(i);
        var s = n(2);
        var c = n.n(s);
        var u;
        (function (e) {
          e["DEV"] = "dev";
          e["QA"] = "qa";
          e["STAGING"] = "staging";
          e["PROD"] = "prod";
        })((u = u || {}));
        var l;
        (function (e) {
          e["WEB"] = "WEB";
          e["IOS"] = "IOS";
          e["ANDROID"] = "ANDROID";
          e["SERVER"] = "SERVER";
        })((l = l || {}));
        function d(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function f(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || false;
            r.configurable = true;
            "value" in r && (r.writable = true);
            Object.defineProperty(e, r.key, r);
          }
        }
        function m(e, t, n) {
          t && f(e.prototype, t);
          n && f(e, n);
          return e;
        }
        function p(e, t, n) {
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true,
              })
            : (e[t] = n);
          return e;
        }
        var v = (function () {
          function e() {
            d(this, e);
            p(this, "_analyticsId", void 0);
            p(this, "_config", void 0);
            p(this, "_defaultPayload", void 0);
          }
          m(e, [
            {
              key: "track",
              value: function e() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                if (false === this._config.fireEvents) return Promise.resolve();
                var n = this._generatePayload(t);
                if (this._config.validateMode) return this._validateEvent(n);
                if (!this._config.url) return Promise.resolve();
                if (!n) return Promise.reject(new Error("no payload"));
                return this._config.useBeacon
                  ? this._sendBeacon(n)
                  : this._sendXhr(n);
              },
            },
            {
              key: "_getAnalyticsId",
              value: function e() {
                var t = function e(t) {
                  return t && "null" !== t ? t : null;
                };
                var n = t(g.a.get(this._config.storageKey));
                var r = t(this._getLocalStorageItem());
                var o = t(this._analyticsId);
                var i = n || r || o || c()();
                this._setAnalyticsId(i);
                return i;
              },
            },
            {
              key: "_getLocalStorageItem",
              value: function e() {
                var t = false;
                var n = localStorage.getItem(this._config.expirationKey);
                if (n) {
                  var r = new Date();
                  var o = new Date(n);
                  t = r > o;
                }
                if (t) {
                  localStorage.removeItem(this._config.storageKey);
                  localStorage.removeItem(this._config.expirationKey);
                  return null;
                }
                return localStorage.getItem(this._config.storageKey);
              },
            },
            {
              key: "_getNormalizedPathname",
              value: function e() {
                var t = window.location.pathname;
                "/" === t[t.length - 1] && (t = t.substring(0, t.length - 1));
                return t;
              },
            },
            {
              key: "_generatePayload",
              value: function e(t) {
                return t;
              },
            },
            {
              key: "_log",
              value: function e(t) {
                this._config.logging && console.log(t);
              },
            },
            {
              key: "_sendBeacon",
              value: function e(t) {
                var n = { type: "application/x-www-form-urlencoded" };
                var r = new Blob([a.a.stringify(t)], n);
                navigator.sendBeacon(this._config.url, r);
                return Promise.resolve();
              },
            },
            {
              key: "_sendXhr",
              value: function e(t, n) {
                var r = this;
                n = n || this._config.url;
                var o = new XMLHttpRequest();
                var i = JSON.stringify(t);
                var a = new Set([200, 202]);
                return new Promise(function (e, t) {
                  o.open("POST", n, true);
                  o.setRequestHeader("Content-Type", "application/json");
                  o.send(i);
                  o.addEventListener("readystatechange", function () {
                    if (4 !== o.readyState) return;
                    if (a.has(o.status)) e();
                    else {
                      r._warn(
                        "Error tracking event: HTTP Status ".concat(o.status)
                      );
                      t(
                        new Error(
                          "Error tracking event: HTTP Status ".concat(o.status)
                        )
                      );
                    }
                  });
                });
              },
            },
            {
              key: "_setAnalyticsId",
              value: function e(t) {
                this._analyticsId = t;
                var n = this._config.cookie,
                  r = n.path,
                  o = n.secure;
                var i = window.location.hostname;
                this._config.cookie.domains.forEach(function (e) {
                  window.location.hostname.indexOf(e) > -1 && (i = e);
                });
                var a = new Date();
                a.setDate(a.getDate() + this._config.cookie.daysToStore);
                var s = a.toUTCString();
                try {
                  g.a.set(this._config.storageKey, t, {
                    domain: i,
                    expires: s,
                    path: r,
                    secure: o,
                  });
                  var c =
                    document.cookie.indexOf(this._config.storageKey) !==
                    document.cookie.lastIndexOf(this._config.storageKey);
                  if (c) {
                    var u = new Date(0).toUTCString();
                    g.a.set(this._config.storageKey, null, { expires: u });
                  }
                  localStorage.setItem(this._config.storageKey, t);
                  localStorage.setItem(this._config.expirationKey, s);
                } catch (e) {
                  this._warn("Unable to store analyticsId");
                }
              },
            },
            {
              key: "_validateEvent",
              value: function e(t) {
                return Promise.resolve(t);
              },
            },
            {
              key: "_warn",
              value: function e(t) {
                this._config.logging && console.warn(t);
              },
            },
          ]);
          return e;
        })();
        var y = n(3);
        var _ = n(4);
        var h = function e() {
          return {
            devBaseDomainUrl: "https://clanker-events.stage.sqsp.net",
            cookie: {
              daysToStore: 390,
              domains: ["squarespace.com", "squarespace.net", "sqsp.net"],
              path: "/",
              secure: window.location.protocol.indexOf("https") > -1,
            },
            expirationKey: "SS_ANALYTICS_EXPIRATION",
            fireEvents: true,
            logging: false,
            sourceEnvironment: u.DEV,
            storageKey: "SS_ANALYTICS_ID",
            url: "https://clanker-events.stage.sqsp.net/api/v1/clanker/events",
            useBeacon: true,
            validateMode: false,
          };
        };
        function j(e) {
          j =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function e(t) {
                  return typeof t;
                }
              : function e(t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                };
          return j(e);
        }
        function w(e, t) {
          if (null == e) return {};
          var n = b(e, t);
          var r, o;
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (o = 0; o < i.length; o++) {
              r = i[o];
              if (t.indexOf(r) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(e, r)) continue;
              n[r] = e[r];
            }
          }
          return n;
        }
        function b(e, t) {
          if (null == e) return {};
          var n = {};
          var r = Object.keys(e);
          var o, i;
          for (i = 0; i < r.length; i++) {
            o = r[i];
            if (t.indexOf(o) >= 0) continue;
            n[o] = e[o];
          }
          return n;
        }
        function E(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              }));
            n.push.apply(n, r);
          }
          return n;
        }
        function S(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? E(Object(n), true).forEach(function (e) {
                  T(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : E(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function T(e, t, n) {
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true,
              })
            : (e[t] = n);
          return e;
        }
        function O() {
          O =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            };
          return O.apply(this, arguments);
        }
        function P(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function x(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || false;
            r.configurable = true;
            "value" in r && (r.writable = true);
            Object.defineProperty(e, r.key, r);
          }
        }
        function C(e, t, n) {
          t && x(e.prototype, t);
          n && x(e, n);
          return e;
        }
        function I(e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: true, configurable: true },
          });
          t && A(e, t);
        }
        function A(e, t) {
          A =
            Object.setPrototypeOf ||
            function e(t, n) {
              t.__proto__ = n;
              return t;
            };
          return A(e, t);
        }
        function k(r) {
          return function () {
            var e = N(r),
              t;
            if (D()) {
              var n = N(this).constructor;
              t = Reflect.construct(e, arguments, n);
            } else t = e.apply(this, arguments);
            return R(this, t);
          };
        }
        function R(e, t) {
          if (t && ("object" === j(t) || "function" === typeof t)) return t;
          return L(e);
        }
        function L(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function D() {
          if ("undefined" === typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if ("function" === typeof Proxy) return true;
          try {
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }
        function N(e) {
          N = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function e(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              };
          return N(e);
        }
        var M = (function (e) {
          I(i, e);
          var o = k(i);
          function i(e) {
            var t;
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            P(this, i);
            t = o.call(this);
            var r = h();
            t._config = O(r, e);
            t._defaultPayload = n;
            "sendBeacon" in navigator || (t._config.useBeacon = false);
            t._config.url = t._generateUrl();
            return t;
          }
          C(i, [
            {
              key: "_generatePayload",
              value: function e(t) {
                var n = new Date();
                var r = Object(y["getSessionInfo"])();
                var o = S({}, this._defaultPayload, {}, t);
                var i = o.context_website_id,
                  a = o.custom_schema_name,
                  s = o.destination_url,
                  c = o.member_account_id,
                  u = o.object_identifier,
                  l = o.resolved_locale,
                  d = o.website_locale,
                  f = o.member_account_locale,
                  m = w(o, [
                    "context_website_id",
                    "custom_schema_name",
                    "destination_url",
                    "member_account_id",
                    "object_identifier",
                    "resolved_locale",
                    "website_locale",
                    "member_account_locale",
                  ]);
                var p = {
                  analytics_id: this._getAnalyticsId(),
                  browser_language: navigator.language,
                  browser_window_height: window.innerHeight,
                  browser_window_width: window.innerWidth,
                  client_name: "Javascript Pipeline 2.0 Event Tracker Client",
                  client_version: _["a"],
                  marketing_id: g.a.get("SS_MID") || null,
                  page_host: window.location.hostname,
                  page_path: this._getNormalizedPathname(),
                  page_query_params: window.location.search,
                  page_referrer_url: document.referrer,
                  session_id: r.sessionId || null,
                  enduser_user_agent: navigator.userAgent,
                  event_occurrence_timestamp: n.getTime(),
                  browser_locale: navigator.language,
                };
                this._warnOfOverwrittenFields(o, p);
                var v = a || this._config.customSchemaName;
                var h = {
                  eventContent: S({}, m, {}, p, {
                    custom_schema_name: v,
                    source_environment: this._config.sourceEnvironment,
                    context_website_id: i || null,
                    destination_url: s || null,
                    member_account_id: c || null,
                    object_identifier: u || null,
                    resolved_locale:
                      l || document.documentElement.lang || "en-US",
                    website_locale: d || null,
                    member_account_locale: f || null,
                  }),
                  eventSchemaName: v,
                };
                this._config.logging && this._log({ payload: S({}, h) });
                h.eventContent = JSON.stringify(h.eventContent);
                return h;
              },
            },
            {
              key: "_warnOfOverwrittenFields",
              value: function e(t, n) {
                var r = this;
                Object.keys(t).forEach(function (e) {
                  t.hasOwnProperty(e) &&
                    n.hasOwnProperty(e) &&
                    r._warn(
                      "".concat(
                        e,
                        " is auto populated by @sqs/track-events/v2 and was overwritten"
                      )
                    );
                });
              },
            },
            {
              key: "_generateUrl",
              value: function e() {
                var t = this._config,
                  n = t.sourceEnvironment,
                  r = t.devBaseDomainUrl;
                var o = "";
                switch (n) {
                  case u.DEV:
                    o = "".concat(r, "/api/v1/clanker/events");
                    break;
                  case u.QA:
                  case u.STAGING:
                    o =
                      "https://clanker-events.stage.sqsp.net/api/v1/clanker/events";
                    break;
                  case u.PROD:
                    o =
                      "https://clanker-events.squarespace.com/api/v1/clanker/events";
                    break;
                  default:
                    this._warn(
                      "sourceEnvironment needs to be set to one of dev, staging, or prod"
                    );
                    o = "";
                }
                return o;
              },
            },
            {
              key: "spawnTracker",
              value: function e() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                var n = O({}, this._defaultPayload, t);
                return new i(this._config, n);
              },
            },
            {
              key: "_validateEvent",
              value: function e(t) {
                var n = ""
                  .concat(
                    this._config.devBaseDomainUrl,
                    "/api/v1/clanker/validate-event-content/"
                  )
                  .concat(this._config.customSchemaName);
                this._sendXhr(t.eventContent, n);
              },
            },
          ]);
          return i;
        })(v);
      },
    ]);
  },
  "./common/temp/node_modules/core-js/internals/a-function.js": function (
    e,
    t
  ) {
    e.exports = function (e) {
      if ("function" != typeof e)
        throw TypeError(String(e) + " is not a function");
      return e;
    };
  },
  "./common/temp/node_modules/core-js/internals/an-instance.js": function (
    e,
    t
  ) {
    e.exports = function (e, t, n) {
      if (!(e instanceof t))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return e;
    };
  },
  "./common/temp/node_modules/core-js/internals/an-object.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/is-object.js");
    e.exports = function (e) {
      if (!r(e)) throw TypeError(String(e) + " is not an object");
      return e;
    };
  },
  "./common/temp/node_modules/core-js/internals/array-includes.js": function (
    e,
    t,
    n
  ) {
    var c = n(
      "./common/temp/node_modules/core-js/internals/to-indexed-object.js"
    );
    var u = n("./common/temp/node_modules/core-js/internals/to-length.js");
    var l = n(
      "./common/temp/node_modules/core-js/internals/to-absolute-index.js"
    );
    var r = function (s) {
      return function (e, t, n) {
        var r = c(e);
        var o = u(r.length);
        var i = l(n, o);
        var a;
        if (s && t != t)
          while (o > i) {
            a = r[i++];
            if (a != a) return true;
          }
        else
          for (; o > i; i++)
            if ((s || i in r) && r[i] === t) return s || i || 0;
        return !s && -1;
      };
    };
    e.exports = { includes: r(true), indexOf: r(false) };
  },
  "./common/temp/node_modules/core-js/internals/call-with-safe-iteration-closing.js":
    function (e, t, n) {
      var i = n("./common/temp/node_modules/core-js/internals/an-object.js");
      e.exports = function (t, e, n, r) {
        try {
          return r ? e(i(n)[0], n[1]) : e(n);
        } catch (e) {
          var o = t["return"];
          void 0 !== o && i(o.call(t));
          throw e;
        }
      };
    },
  "./common/temp/node_modules/core-js/internals/check-correctness-of-iteration.js":
    function (e, t, n) {
      var r = n(
        "./common/temp/node_modules/core-js/internals/well-known-symbol.js"
      );
      var o = r("iterator");
      var i = false;
      try {
        var a = 0;
        var s = {
          next: function () {
            return { done: !!a++ };
          },
          return: function () {
            i = true;
          },
        };
        s[o] = function () {
          return this;
        };
        Array.from(s, function () {
          throw 2;
        });
      } catch (e) {}
      e.exports = function (e, t) {
        if (!t && !i) return false;
        var n = false;
        try {
          var r = {};
          r[o] = function () {
            return {
              next: function () {
                return { done: (n = true) };
              },
            };
          };
          e(r);
        } catch (e) {}
        return n;
      };
    },
  "./common/temp/node_modules/core-js/internals/classof-raw.js": function (
    e,
    t
  ) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  "./common/temp/node_modules/core-js/internals/classof.js": function (
    e,
    t,
    n
  ) {
    var r = n(
      "./common/temp/node_modules/core-js/internals/to-string-tag-support.js"
    );
    var o = n("./common/temp/node_modules/core-js/internals/classof-raw.js");
    var i = n(
      "./common/temp/node_modules/core-js/internals/well-known-symbol.js"
    );
    var a = i("toStringTag");
    var s =
      "Arguments" ==
      o(
        (function () {
          return arguments;
        })()
      );
    var c = function (e, t) {
      try {
        return e[t];
      } catch (e) {}
    };
    e.exports = r
      ? o
      : function (e) {
          var t, n, r;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" == typeof (n = c((t = Object(e)), a))
            ? n
            : s
            ? o(t)
            : "Object" == (r = o(t)) && "function" == typeof t.callee
            ? "Arguments"
            : r;
        };
  },
  "./common/temp/node_modules/core-js/internals/copy-constructor-properties.js":
    function (e, t, n) {
      var s = n("./common/temp/node_modules/core-js/internals/has.js");
      var c = n("./common/temp/node_modules/core-js/internals/own-keys.js");
      var u = n(
        "./common/temp/node_modules/core-js/internals/object-get-own-property-descriptor.js"
      );
      var l = n(
        "./common/temp/node_modules/core-js/internals/object-define-property.js"
      );
      e.exports = function (e, t) {
        var n = c(t);
        var r = l.f;
        var o = u.f;
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          s(e, a) || r(e, a, o(t, a));
        }
      };
    },
  "./common/temp/node_modules/core-js/internals/create-non-enumerable-property.js":
    function (e, t, n) {
      var r = n("./common/temp/node_modules/core-js/internals/descriptors.js");
      var o = n(
        "./common/temp/node_modules/core-js/internals/object-define-property.js"
      );
      var i = n(
        "./common/temp/node_modules/core-js/internals/create-property-descriptor.js"
      );
      e.exports = r
        ? function (e, t, n) {
            return o.f(e, t, i(1, n));
          }
        : function (e, t, n) {
            e[t] = n;
            return e;
          };
    },
  "./common/temp/node_modules/core-js/internals/create-property-descriptor.js":
    function (e, t) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
  "./common/temp/node_modules/core-js/internals/descriptors.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/fails.js");
    e.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  "./common/temp/node_modules/core-js/internals/document-create-element.js":
    function (e, t, n) {
      var r = n("./common/temp/node_modules/core-js/internals/global.js");
      var o = n("./common/temp/node_modules/core-js/internals/is-object.js");
      var i = r.document;
      var a = o(i) && o(i.createElement);
      e.exports = function (e) {
        return a ? i.createElement(e) : {};
      };
    },
  "./common/temp/node_modules/core-js/internals/engine-is-ios.js": function (
    e,
    t,
    n
  ) {
    var r = n(
      "./common/temp/node_modules/core-js/internals/engine-user-agent.js"
    );
    e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
  },
  "./common/temp/node_modules/core-js/internals/engine-user-agent.js":
    function (e, t, n) {
      var r = n("./common/temp/node_modules/core-js/internals/get-built-in.js");
      e.exports = r("navigator", "userAgent") || "";
    },
  "./common/temp/node_modules/core-js/internals/engine-v8-version.js":
    function (e, t, n) {
      var r = n("./common/temp/node_modules/core-js/internals/global.js");
      var o = n(
        "./common/temp/node_modules/core-js/internals/engine-user-agent.js"
      );
      var i = r.process;
      var a = i && i.versions;
      var s = a && a.v8;
      var c, u;
      if (s) {
        c = s.split(".");
        u = c[0] + c[1];
      } else if (o) {
        c = o.match(/Edge\/(\d+)/);
        if (!c || c[1] >= 74) {
          c = o.match(/Chrome\/(\d+)/);
          c && (u = c[1]);
        }
      }
      e.exports = u && +u;
    },
  "./common/temp/node_modules/core-js/internals/enum-bug-keys.js": function (
    e,
    t
  ) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  "./common/temp/node_modules/core-js/internals/export.js": function (e, t, n) {
    var d = n("./common/temp/node_modules/core-js/internals/global.js");
    var f = n(
      "./common/temp/node_modules/core-js/internals/object-get-own-property-descriptor.js"
    ).f;
    var m = n(
      "./common/temp/node_modules/core-js/internals/create-non-enumerable-property.js"
    );
    var p = n("./common/temp/node_modules/core-js/internals/redefine.js");
    var v = n("./common/temp/node_modules/core-js/internals/set-global.js");
    var h = n(
      "./common/temp/node_modules/core-js/internals/copy-constructor-properties.js"
    );
    var g = n("./common/temp/node_modules/core-js/internals/is-forced.js");
    e.exports = function (e, t) {
      var n = e.target;
      var r = e.global;
      var o = e.stat;
      var i, a, s, c, u, l;
      a = r ? d : o ? d[n] || v(n, {}) : (d[n] || {}).prototype;
      if (a)
        for (s in t) {
          u = t[s];
          if (e.noTargetGet) {
            l = f(a, s);
            c = l && l.value;
          } else c = a[s];
          i = g(r ? s : n + (o ? "." : "#") + s, e.forced);
          if (!i && void 0 !== c) {
            if (typeof u === typeof c) continue;
            h(u, c);
          }
          (e.sham || (c && c.sham)) && m(u, "sham", true);
          p(a, s, u, e);
        }
    };
  },
  "./common/temp/node_modules/core-js/internals/fails.js": function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return true;
      }
    };
  },
  "./common/temp/node_modules/core-js/internals/function-bind-context.js":
    function (e, t, n) {
      var i = n("./common/temp/node_modules/core-js/internals/a-function.js");
      e.exports = function (r, o, e) {
        i(r);
        if (void 0 === o) return r;
        switch (e) {
          case 0:
            return function () {
              return r.call(o);
            };
          case 1:
            return function (e) {
              return r.call(o, e);
            };
          case 2:
            return function (e, t) {
              return r.call(o, e, t);
            };
          case 3:
            return function (e, t, n) {
              return r.call(o, e, t, n);
            };
        }
        return function () {
          return r.apply(o, arguments);
        };
      };
    },
  "./common/temp/node_modules/core-js/internals/get-built-in.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/path.js");
    var o = n("./common/temp/node_modules/core-js/internals/global.js");
    var i = function (e) {
      return "function" == typeof e ? e : void 0;
    };
    e.exports = function (e, t) {
      return arguments.length < 2
        ? i(r[e]) || i(o[e])
        : (r[e] && r[e][t]) || (o[e] && o[e][t]);
    };
  },
  "./common/temp/node_modules/core-js/internals/get-iterator-method.js":
    function (e, t, n) {
      var r = n("./common/temp/node_modules/core-js/internals/classof.js");
      var o = n("./common/temp/node_modules/core-js/internals/iterators.js");
      var i = n(
        "./common/temp/node_modules/core-js/internals/well-known-symbol.js"
      );
      var a = i("iterator");
      e.exports = function (e) {
        if (void 0 != e) return e[a] || e["@@iterator"] || o[r(e)];
      };
    },
  "./common/temp/node_modules/core-js/internals/global.js": function (n, e, t) {
    (function (e) {
      var t = function (e) {
        return e && e.Math == Math && e;
      };
      n.exports =
        t("object" == typeof globalThis && globalThis) ||
        t("object" == typeof window && window) ||
        t("object" == typeof self && self) ||
        t("object" == typeof e && e) ||
        Function("return this")();
    }.call(this, t("./node_modules/webpack/buildin/global.js")));
  },
  "./common/temp/node_modules/core-js/internals/has.js": function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  "./common/temp/node_modules/core-js/internals/hidden-keys.js": function (
    e,
    t
  ) {
    e.exports = {};
  },
  "./common/temp/node_modules/core-js/internals/host-report-errors.js":
    function (e, t, n) {
      var r = n("./common/temp/node_modules/core-js/internals/global.js");
      e.exports = function (e, t) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
      };
    },
  "./common/temp/node_modules/core-js/internals/html.js": function (e, t, n) {
    var r = n("./common/temp/node_modules/core-js/internals/get-built-in.js");
    e.exports = r("document", "documentElement");
  },
  "./common/temp/node_modules/core-js/internals/ie8-dom-define.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/descriptors.js");
    var o = n("./common/temp/node_modules/core-js/internals/fails.js");
    var i = n(
      "./common/temp/node_modules/core-js/internals/document-create-element.js"
    );
    e.exports =
      !r &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  "./common/temp/node_modules/core-js/internals/indexed-object.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/fails.js");
    var o = n("./common/temp/node_modules/core-js/internals/classof-raw.js");
    var i = "".split;
    e.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == o(e) ? i.call(e, "") : Object(e);
        }
      : Object;
  },
  "./common/temp/node_modules/core-js/internals/inspect-source.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/shared-store.js");
    var o = Function.toString;
    "function" != typeof r.inspectSource &&
      (r.inspectSource = function (e) {
        return o.call(e);
      });
    e.exports = r.inspectSource;
  },
  "./common/temp/node_modules/core-js/internals/internal-state.js": function (
    e,
    t,
    n
  ) {
    var r = n(
      "./common/temp/node_modules/core-js/internals/native-weak-map.js"
    );
    var o = n("./common/temp/node_modules/core-js/internals/global.js");
    var i = n("./common/temp/node_modules/core-js/internals/is-object.js");
    var a = n(
      "./common/temp/node_modules/core-js/internals/create-non-enumerable-property.js"
    );
    var s = n("./common/temp/node_modules/core-js/internals/has.js");
    var c = n("./common/temp/node_modules/core-js/internals/shared-key.js");
    var u = n("./common/temp/node_modules/core-js/internals/hidden-keys.js");
    var l = o.WeakMap;
    var d, f, m;
    var p = function (e) {
      return m(e) ? f(e) : d(e, {});
    };
    var v = function (n) {
      return function (e) {
        var t;
        if (!i(e) || (t = f(e)).type !== n)
          throw TypeError("Incompatible receiver, " + n + " required");
        return t;
      };
    };
    if (r) {
      var h = new l();
      var g = h.get;
      var y = h.has;
      var _ = h.set;
      d = function (e, t) {
        _.call(h, e, t);
        return t;
      };
      f = function (e) {
        return g.call(h, e) || {};
      };
      m = function (e) {
        return y.call(h, e);
      };
    } else {
      var j = c("state");
      u[j] = true;
      d = function (e, t) {
        a(e, j, t);
        return t;
      };
      f = function (e) {
        return s(e, j) ? e[j] : {};
      };
      m = function (e) {
        return s(e, j);
      };
    }
    e.exports = { set: d, get: f, has: m, enforce: p, getterFor: v };
  },
  "./common/temp/node_modules/core-js/internals/is-array-iterator-method.js":
    function (e, t, n) {
      var r = n(
        "./common/temp/node_modules/core-js/internals/well-known-symbol.js"
      );
      var o = n("./common/temp/node_modules/core-js/internals/iterators.js");
      var i = r("iterator");
      var a = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (o.Array === e || a[i] === e);
      };
    },
  "./common/temp/node_modules/core-js/internals/is-forced.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/fails.js");
    var o = /#|\.prototype\./;
    var i = function (e, t) {
      var n = s[a(e)];
      return n == u || (n != c && ("function" == typeof t ? r(t) : !!t));
    };
    var a = (i.normalize = function (e) {
      return String(e).replace(o, ".").toLowerCase();
    });
    var s = (i.data = {});
    var c = (i.NATIVE = "N");
    var u = (i.POLYFILL = "P");
    e.exports = i;
  },
  "./common/temp/node_modules/core-js/internals/is-object.js": function (e, t) {
    e.exports = function (e) {
      return "object" === typeof e ? null !== e : "function" === typeof e;
    };
  },
  "./common/temp/node_modules/core-js/internals/is-pure.js": function (e, t) {
    e.exports = false;
  },
  "./common/temp/node_modules/core-js/internals/iterate.js": function (
    e,
    t,
    n
  ) {
    var m = n("./common/temp/node_modules/core-js/internals/an-object.js");
    var p = n(
      "./common/temp/node_modules/core-js/internals/is-array-iterator-method.js"
    );
    var v = n("./common/temp/node_modules/core-js/internals/to-length.js");
    var h = n(
      "./common/temp/node_modules/core-js/internals/function-bind-context.js"
    );
    var g = n(
      "./common/temp/node_modules/core-js/internals/get-iterator-method.js"
    );
    var y = n(
      "./common/temp/node_modules/core-js/internals/call-with-safe-iteration-closing.js"
    );
    var _ = function (e, t) {
      this.stopped = e;
      this.result = t;
    };
    var r = (e.exports = function (e, t, n, r, o) {
      var i = h(t, n, r ? 2 : 1);
      var a, s, c, u, l, d, f;
      if (o) a = e;
      else {
        s = g(e);
        if ("function" != typeof s) throw TypeError("Target is not iterable");
        if (p(s)) {
          for (c = 0, u = v(e.length); u > c; c++) {
            l = r ? i(m((f = e[c]))[0], f[1]) : i(e[c]);
            if (l && l instanceof _) return l;
          }
          return new _(false);
        }
        a = s.call(e);
      }
      d = a.next;
      while (!(f = d.call(a)).done) {
        l = y(a, i, f.value, r);
        if ("object" == typeof l && l && l instanceof _) return l;
      }
      return new _(false);
    });
    r.stop = function (e) {
      return new _(true, e);
    };
  },
  "./common/temp/node_modules/core-js/internals/iterators.js": function (e, t) {
    e.exports = {};
  },
  "./common/temp/node_modules/core-js/internals/microtask.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/global.js");
    var o = n(
      "./common/temp/node_modules/core-js/internals/object-get-own-property-descriptor.js"
    ).f;
    var i = n("./common/temp/node_modules/core-js/internals/classof-raw.js");
    var a = n("./common/temp/node_modules/core-js/internals/task.js").set;
    var s = n("./common/temp/node_modules/core-js/internals/engine-is-ios.js");
    var c = r.MutationObserver || r.WebKitMutationObserver;
    var u = r.process;
    var l = r.Promise;
    var d = "process" == i(u);
    var f = o(r, "queueMicrotask");
    var m = f && f.value;
    var p, v, h, g, y, _, j, w;
    if (!m) {
      p = function () {
        var e, t;
        d && (e = u.domain) && e.exit();
        while (v) {
          t = v.fn;
          v = v.next;
          try {
            t();
          } catch (e) {
            v ? g() : (h = void 0);
            throw e;
          }
        }
        h = void 0;
        e && e.enter();
      };
      if (d)
        g = function () {
          u.nextTick(p);
        };
      else if (c && !s) {
        y = true;
        _ = document.createTextNode("");
        new c(p).observe(_, { characterData: true });
        g = function () {
          _.data = y = !y;
        };
      } else if (l && l.resolve) {
        j = l.resolve(void 0);
        w = j.then;
        g = function () {
          w.call(j, p);
        };
      } else
        g = function () {
          a.call(r, p);
        };
    }
    e.exports =
      m ||
      function (e) {
        var t = { fn: e, next: void 0 };
        h && (h.next = t);
        if (!v) {
          v = t;
          g();
        }
        h = t;
      };
  },
  "./common/temp/node_modules/core-js/internals/native-promise-constructor.js":
    function (e, t, n) {
      var r = n("./common/temp/node_modules/core-js/internals/global.js");
      e.exports = r.Promise;
    },
  "./common/temp/node_modules/core-js/internals/native-symbol.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/fails.js");
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        return !String(Symbol());
      });
  },
  "./common/temp/node_modules/core-js/internals/native-weak-map.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/global.js");
    var o = n("./common/temp/node_modules/core-js/internals/inspect-source.js");
    var i = r.WeakMap;
    e.exports = "function" === typeof i && /native code/.test(o(i));
  },
  "./common/temp/node_modules/core-js/internals/new-promise-capability.js":
    function (e, t, n) {
      "use strict";
      var o = n("./common/temp/node_modules/core-js/internals/a-function.js");
      var r = function (e) {
        var n, r;
        this.promise = new e(function (e, t) {
          if (void 0 !== n || void 0 !== r)
            throw TypeError("Bad Promise constructor");
          n = e;
          r = t;
        });
        this.resolve = o(n);
        this.reject = o(r);
      };
      e.exports.f = function (e) {
        return new r(e);
      };
    },
  "./common/temp/node_modules/core-js/internals/object-define-property.js":
    function (e, t, n) {
      var r = n("./common/temp/node_modules/core-js/internals/descriptors.js");
      var o = n(
        "./common/temp/node_modules/core-js/internals/ie8-dom-define.js"
      );
      var i = n("./common/temp/node_modules/core-js/internals/an-object.js");
      var a = n("./common/temp/node_modules/core-js/internals/to-primitive.js");
      var s = Object.defineProperty;
      t.f = r
        ? s
        : function e(t, n, r) {
            i(t);
            n = a(n, true);
            i(r);
            if (o)
              try {
                return s(t, n, r);
              } catch (e) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported");
            "value" in r && (t[n] = r.value);
            return t;
          };
    },
  "./common/temp/node_modules/core-js/internals/object-get-own-property-descriptor.js":
    function (e, t, n) {
      var r = n("./common/temp/node_modules/core-js/internals/descriptors.js");
      var o = n(
        "./common/temp/node_modules/core-js/internals/object-property-is-enumerable.js"
      );
      var i = n(
        "./common/temp/node_modules/core-js/internals/create-property-descriptor.js"
      );
      var a = n(
        "./common/temp/node_modules/core-js/internals/to-indexed-object.js"
      );
      var s = n("./common/temp/node_modules/core-js/internals/to-primitive.js");
      var c = n("./common/temp/node_modules/core-js/internals/has.js");
      var u = n(
        "./common/temp/node_modules/core-js/internals/ie8-dom-define.js"
      );
      var l = Object.getOwnPropertyDescriptor;
      t.f = r
        ? l
        : function e(t, n) {
            t = a(t);
            n = s(n, true);
            if (u)
              try {
                return l(t, n);
              } catch (e) {}
            if (c(t, n)) return i(!o.f.call(t, n), t[n]);
          };
    },
  "./common/temp/node_modules/core-js/internals/object-get-own-property-names.js":
    function (e, t, n) {
      var r = n(
        "./common/temp/node_modules/core-js/internals/object-keys-internal.js"
      );
      var o = n(
        "./common/temp/node_modules/core-js/internals/enum-bug-keys.js"
      );
      var i = o.concat("length", "prototype");
      t.f =
        Object.getOwnPropertyNames ||
        function e(t) {
          return r(t, i);
        };
    },
  "./common/temp/node_modules/core-js/internals/object-get-own-property-symbols.js":
    function (e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
  "./common/temp/node_modules/core-js/internals/object-keys-internal.js":
    function (e, t, n) {
      var a = n("./common/temp/node_modules/core-js/internals/has.js");
      var s = n(
        "./common/temp/node_modules/core-js/internals/to-indexed-object.js"
      );
      var c = n(
        "./common/temp/node_modules/core-js/internals/array-includes.js"
      ).indexOf;
      var u = n("./common/temp/node_modules/core-js/internals/hidden-keys.js");
      e.exports = function (e, t) {
        var n = s(e);
        var r = 0;
        var o = [];
        var i;
        for (i in n) !a(u, i) && a(n, i) && o.push(i);
        while (t.length > r) a(n, (i = t[r++])) && (~c(o, i) || o.push(i));
        return o;
      };
    },
  "./common/temp/node_modules/core-js/internals/object-property-is-enumerable.js":
    function (e, t, n) {
      "use strict";
      var r = {}.propertyIsEnumerable;
      var o = Object.getOwnPropertyDescriptor;
      var i = o && !r.call({ 1: 2 }, 1);
      t.f = i
        ? function e(t) {
            var n = o(this, t);
            return !!n && n.enumerable;
          }
        : r;
    },
  "./common/temp/node_modules/core-js/internals/own-keys.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/get-built-in.js");
    var o = n(
      "./common/temp/node_modules/core-js/internals/object-get-own-property-names.js"
    );
    var i = n(
      "./common/temp/node_modules/core-js/internals/object-get-own-property-symbols.js"
    );
    var a = n("./common/temp/node_modules/core-js/internals/an-object.js");
    e.exports =
      r("Reflect", "ownKeys") ||
      function e(t) {
        var n = o.f(a(t));
        var r = i.f;
        return r ? n.concat(r(t)) : n;
      };
  },
  "./common/temp/node_modules/core-js/internals/path.js": function (e, t, n) {
    var r = n("./common/temp/node_modules/core-js/internals/global.js");
    e.exports = r;
  },
  "./common/temp/node_modules/core-js/internals/perform.js": function (e, t) {
    e.exports = function (e) {
      try {
        return { error: false, value: e() };
      } catch (e) {
        return { error: true, value: e };
      }
    };
  },
  "./common/temp/node_modules/core-js/internals/promise-resolve.js": function (
    e,
    t,
    n
  ) {
    var o = n("./common/temp/node_modules/core-js/internals/an-object.js");
    var i = n("./common/temp/node_modules/core-js/internals/is-object.js");
    var a = n(
      "./common/temp/node_modules/core-js/internals/new-promise-capability.js"
    );
    e.exports = function (e, t) {
      o(e);
      if (i(t) && t.constructor === e) return t;
      var n = a.f(e);
      var r = n.resolve;
      r(t);
      return n.promise;
    };
  },
  "./common/temp/node_modules/core-js/internals/redefine-all.js": function (
    e,
    t,
    n
  ) {
    var o = n("./common/temp/node_modules/core-js/internals/redefine.js");
    e.exports = function (e, t, n) {
      for (var r in t) o(e, r, t[r], n);
      return e;
    };
  },
  "./common/temp/node_modules/core-js/internals/redefine.js": function (
    e,
    t,
    n
  ) {
    var s = n("./common/temp/node_modules/core-js/internals/global.js");
    var c = n(
      "./common/temp/node_modules/core-js/internals/create-non-enumerable-property.js"
    );
    var u = n("./common/temp/node_modules/core-js/internals/has.js");
    var l = n("./common/temp/node_modules/core-js/internals/set-global.js");
    var r = n("./common/temp/node_modules/core-js/internals/inspect-source.js");
    var o = n("./common/temp/node_modules/core-js/internals/internal-state.js");
    var i = o.get;
    var d = o.enforce;
    var f = String(String).split("String");
    (e.exports = function (e, t, n, r) {
      var o = !!r && !!r.unsafe;
      var i = !!r && !!r.enumerable;
      var a = !!r && !!r.noTargetGet;
      if ("function" == typeof n) {
        "string" != typeof t || u(n, "name") || c(n, "name", t);
        d(n).source = f.join("string" == typeof t ? t : "");
      }
      if (e === s) {
        i ? (e[t] = n) : l(t, n);
        return;
      }
      o ? !a && e[t] && (i = true) : delete e[t];
      i ? (e[t] = n) : c(e, t, n);
    })(Function.prototype, "toString", function e() {
      return ("function" == typeof this && i(this).source) || r(this);
    });
  },
  "./common/temp/node_modules/core-js/internals/require-object-coercible.js":
    function (e, t) {
      e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on " + e);
        return e;
      };
    },
  "./common/temp/node_modules/core-js/internals/set-global.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/global.js");
    var o = n(
      "./common/temp/node_modules/core-js/internals/create-non-enumerable-property.js"
    );
    e.exports = function (t, n) {
      try {
        o(r, t, n);
      } catch (e) {
        r[t] = n;
      }
      return n;
    };
  },
  "./common/temp/node_modules/core-js/internals/set-species.js": function (
    e,
    t,
    n
  ) {
    "use strict";
    var r = n("./common/temp/node_modules/core-js/internals/get-built-in.js");
    var o = n(
      "./common/temp/node_modules/core-js/internals/object-define-property.js"
    );
    var i = n(
      "./common/temp/node_modules/core-js/internals/well-known-symbol.js"
    );
    var a = n("./common/temp/node_modules/core-js/internals/descriptors.js");
    var s = i("species");
    e.exports = function (e) {
      var t = r(e);
      var n = o.f;
      a &&
        t &&
        !t[s] &&
        n(t, s, {
          configurable: true,
          get: function () {
            return this;
          },
        });
    };
  },
  "./common/temp/node_modules/core-js/internals/set-to-string-tag.js":
    function (e, t, n) {
      var r = n(
        "./common/temp/node_modules/core-js/internals/object-define-property.js"
      ).f;
      var o = n("./common/temp/node_modules/core-js/internals/has.js");
      var i = n(
        "./common/temp/node_modules/core-js/internals/well-known-symbol.js"
      );
      var a = i("toStringTag");
      e.exports = function (e, t, n) {
        e &&
          !o((e = n ? e : e.prototype), a) &&
          r(e, a, { configurable: true, value: t });
      };
    },
  "./common/temp/node_modules/core-js/internals/shared-key.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/shared.js");
    var o = n("./common/temp/node_modules/core-js/internals/uid.js");
    var i = r("keys");
    e.exports = function (e) {
      return i[e] || (i[e] = o(e));
    };
  },
  "./common/temp/node_modules/core-js/internals/shared-store.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/global.js");
    var o = n("./common/temp/node_modules/core-js/internals/set-global.js");
    var i = "__core-js_shared__";
    var a = r[i] || o(i, {});
    e.exports = a;
  },
  "./common/temp/node_modules/core-js/internals/shared.js": function (e, t, n) {
    var r = n("./common/temp/node_modules/core-js/internals/is-pure.js");
    var o = n("./common/temp/node_modules/core-js/internals/shared-store.js");
    (e.exports = function (e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: r ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  "./common/temp/node_modules/core-js/internals/species-constructor.js":
    function (e, t, n) {
      var o = n("./common/temp/node_modules/core-js/internals/an-object.js");
      var i = n("./common/temp/node_modules/core-js/internals/a-function.js");
      var r = n(
        "./common/temp/node_modules/core-js/internals/well-known-symbol.js"
      );
      var a = r("species");
      e.exports = function (e, t) {
        var n = o(e).constructor;
        var r;
        return void 0 === n || void 0 == (r = o(n)[a]) ? t : i(r);
      };
    },
  "./common/temp/node_modules/core-js/internals/task.js": function (e, t, n) {
    var r = n("./common/temp/node_modules/core-js/internals/global.js");
    var o = n("./common/temp/node_modules/core-js/internals/fails.js");
    var i = n("./common/temp/node_modules/core-js/internals/classof-raw.js");
    var a = n(
      "./common/temp/node_modules/core-js/internals/function-bind-context.js"
    );
    var s = n("./common/temp/node_modules/core-js/internals/html.js");
    var c = n(
      "./common/temp/node_modules/core-js/internals/document-create-element.js"
    );
    var u = n("./common/temp/node_modules/core-js/internals/engine-is-ios.js");
    var l = r.location;
    var d = r.setImmediate;
    var f = r.clearImmediate;
    var m = r.process;
    var p = r.MessageChannel;
    var v = r.Dispatch;
    var h = 0;
    var g = {};
    var y = "onreadystatechange";
    var _, j, w;
    var b = function (e) {
      if (g.hasOwnProperty(e)) {
        var t = g[e];
        delete g[e];
        t();
      }
    };
    var E = function (e) {
      return function () {
        b(e);
      };
    };
    var S = function (e) {
      b(e.data);
    };
    var T = function (e) {
      r.postMessage(e + "", l.protocol + "//" + l.host);
    };
    if (!d || !f) {
      d = function e(t) {
        var n = [];
        var r = 1;
        while (arguments.length > r) n.push(arguments[r++]);
        g[++h] = function () {
          ("function" == typeof t ? t : Function(t)).apply(void 0, n);
        };
        _(h);
        return h;
      };
      f = function e(t) {
        delete g[t];
      };
      if ("process" == i(m))
        _ = function (e) {
          m.nextTick(E(e));
        };
      else if (v && v.now)
        _ = function (e) {
          v.now(E(e));
        };
      else if (p && !u) {
        j = new p();
        w = j.port2;
        j.port1.onmessage = S;
        _ = a(w.postMessage, w, 1);
      } else if (
        !r.addEventListener ||
        "function" != typeof postMessage ||
        r.importScripts ||
        o(T) ||
        "file:" === l.protocol
      )
        _ =
          y in c("script")
            ? function (e) {
                s.appendChild(c("script"))[y] = function () {
                  s.removeChild(this);
                  b(e);
                };
              }
            : function (e) {
                setTimeout(E(e), 0);
              };
      else {
        _ = T;
        r.addEventListener("message", S, false);
      }
    }
    e.exports = { set: d, clear: f };
  },
  "./common/temp/node_modules/core-js/internals/to-absolute-index.js":
    function (e, t, n) {
      var r = n("./common/temp/node_modules/core-js/internals/to-integer.js");
      var o = Math.max;
      var i = Math.min;
      e.exports = function (e, t) {
        var n = r(e);
        return n < 0 ? o(n + t, 0) : i(n, t);
      };
    },
  "./common/temp/node_modules/core-js/internals/to-indexed-object.js":
    function (e, t, n) {
      var r = n(
        "./common/temp/node_modules/core-js/internals/indexed-object.js"
      );
      var o = n(
        "./common/temp/node_modules/core-js/internals/require-object-coercible.js"
      );
      e.exports = function (e) {
        return r(o(e));
      };
    },
  "./common/temp/node_modules/core-js/internals/to-integer.js": function (
    e,
    t
  ) {
    var n = Math.ceil;
    var r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  "./common/temp/node_modules/core-js/internals/to-length.js": function (
    e,
    t,
    n
  ) {
    var r = n("./common/temp/node_modules/core-js/internals/to-integer.js");
    var o = Math.min;
    e.exports = function (e) {
      return e > 0 ? o(r(e), 9007199254740991) : 0;
    };
  },
  "./common/temp/node_modules/core-js/internals/to-primitive.js": function (
    e,
    t,
    n
  ) {
    var o = n("./common/temp/node_modules/core-js/internals/is-object.js");
    e.exports = function (e, t) {
      if (!o(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !o((r = n.call(e))))
        return r;
      if ("function" == typeof (n = e.valueOf) && !o((r = n.call(e)))) return r;
      if (!t && "function" == typeof (n = e.toString) && !o((r = n.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  "./common/temp/node_modules/core-js/internals/to-string-tag-support.js":
    function (e, t, n) {
      var r = n(
        "./common/temp/node_modules/core-js/internals/well-known-symbol.js"
      );
      var o = r("toStringTag");
      var i = {};
      i[o] = "z";
      e.exports = "[object z]" === String(i);
    },
  "./common/temp/node_modules/core-js/internals/uid.js": function (e, t) {
    var n = 0;
    var r = Math.random();
    e.exports = function (e) {
      return (
        "Symbol(" +
        String(void 0 === e ? "" : e) +
        ")_" +
        (++n + r).toString(36)
      );
    };
  },
  "./common/temp/node_modules/core-js/internals/use-symbol-as-uid.js":
    function (e, t, n) {
      var r = n(
        "./common/temp/node_modules/core-js/internals/native-symbol.js"
      );
      e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
  "./common/temp/node_modules/core-js/internals/well-known-symbol.js":
    function (e, t, n) {
      var r = n("./common/temp/node_modules/core-js/internals/global.js");
      var o = n("./common/temp/node_modules/core-js/internals/shared.js");
      var i = n("./common/temp/node_modules/core-js/internals/has.js");
      var a = n("./common/temp/node_modules/core-js/internals/uid.js");
      var s = n(
        "./common/temp/node_modules/core-js/internals/native-symbol.js"
      );
      var c = n(
        "./common/temp/node_modules/core-js/internals/use-symbol-as-uid.js"
      );
      var u = o("wks");
      var l = r.Symbol;
      var d = c ? l : (l && l.withoutSetter) || a;
      e.exports = function (e) {
        i(u, e) || (s && i(l, e) ? (u[e] = l[e]) : (u[e] = d("Symbol." + e)));
        return u[e];
      };
    },
  "./common/temp/node_modules/core-js/modules/es.promise.js": function (
    e,
    t,
    n
  ) {
    "use strict";
    var r = n("./common/temp/node_modules/core-js/internals/export.js");
    var o = n("./common/temp/node_modules/core-js/internals/is-pure.js");
    var i = n("./common/temp/node_modules/core-js/internals/global.js");
    var a = n("./common/temp/node_modules/core-js/internals/get-built-in.js");
    var s = n(
      "./common/temp/node_modules/core-js/internals/native-promise-constructor.js"
    );
    var c = n("./common/temp/node_modules/core-js/internals/redefine.js");
    var u = n("./common/temp/node_modules/core-js/internals/redefine-all.js");
    var l = n(
      "./common/temp/node_modules/core-js/internals/set-to-string-tag.js"
    );
    var d = n("./common/temp/node_modules/core-js/internals/set-species.js");
    var f = n("./common/temp/node_modules/core-js/internals/is-object.js");
    var m = n("./common/temp/node_modules/core-js/internals/a-function.js");
    var p = n("./common/temp/node_modules/core-js/internals/an-instance.js");
    var v = n("./common/temp/node_modules/core-js/internals/classof-raw.js");
    var h = n("./common/temp/node_modules/core-js/internals/inspect-source.js");
    var g = n("./common/temp/node_modules/core-js/internals/iterate.js");
    var y = n(
      "./common/temp/node_modules/core-js/internals/check-correctness-of-iteration.js"
    );
    var _ = n(
      "./common/temp/node_modules/core-js/internals/species-constructor.js"
    );
    var j = n("./common/temp/node_modules/core-js/internals/task.js").set;
    var w = n("./common/temp/node_modules/core-js/internals/microtask.js");
    var b = n(
      "./common/temp/node_modules/core-js/internals/promise-resolve.js"
    );
    var E = n(
      "./common/temp/node_modules/core-js/internals/host-report-errors.js"
    );
    var S = n(
      "./common/temp/node_modules/core-js/internals/new-promise-capability.js"
    );
    var T = n("./common/temp/node_modules/core-js/internals/perform.js");
    var O = n("./common/temp/node_modules/core-js/internals/internal-state.js");
    var P = n("./common/temp/node_modules/core-js/internals/is-forced.js");
    var x = n(
      "./common/temp/node_modules/core-js/internals/well-known-symbol.js"
    );
    var C = n(
      "./common/temp/node_modules/core-js/internals/engine-v8-version.js"
    );
    var I = x("species");
    var A = "Promise";
    var k = O.get;
    var R = O.set;
    var L = O.getterFor(A);
    var D = s;
    var N = i.TypeError;
    var M = i.document;
    var B = i.process;
    var F = a("fetch");
    var q = S.f;
    var U = q;
    var z = "process" == v(B);
    var H = !!(M && M.createEvent && i.dispatchEvent);
    var V = "unhandledrejection";
    var Y = "rejectionhandled";
    var X = 0;
    var G = 1;
    var K = 2;
    var W = 1;
    var J = 2;
    var Q, $, Z, ee;
    var te = P(A, function () {
      var e = h(D) !== String(D);
      if (!e) {
        if (66 === C) return true;
        if (!z && "function" != typeof PromiseRejectionEvent) return true;
      }
      if (o && !D.prototype["finally"]) return true;
      if (C >= 51 && /native code/.test(D)) return false;
      var t = D.resolve(1);
      var n = function (e) {
        e(
          function () {},
          function () {}
        );
      };
      var r = (t.constructor = {});
      r[I] = n;
      return !(t.then(function () {}) instanceof n);
    });
    var ne =
      te ||
      !y(function (e) {
        D.all(e)["catch"](function () {});
      });
    var re = function (e) {
      var t;
      return !(!f(e) || "function" != typeof (t = e.then)) && t;
    };
    var oe = function (d, f, m) {
      if (f.notified) return;
      f.notified = true;
      var p = f.reactions;
      w(function () {
        var e = f.value;
        var t = f.state == G;
        var n = 0;
        while (p.length > n) {
          var r = p[n++];
          var o = t ? r.ok : r.fail;
          var i = r.resolve;
          var a = r.reject;
          var s = r.domain;
          var c, u, l;
          try {
            if (o) {
              if (!t) {
                f.rejection === J && ce(d, f);
                f.rejection = W;
              }
              if (true === o) c = e;
              else {
                s && s.enter();
                c = o(e);
                if (s) {
                  s.exit();
                  l = true;
                }
              }
              c === r.promise
                ? a(N("Promise-chain cycle"))
                : (u = re(c))
                ? u.call(c, i, a)
                : i(c);
            } else a(e);
          } catch (e) {
            s && !l && s.exit();
            a(e);
          }
        }
        f.reactions = [];
        f.notified = false;
        m && !f.rejection && ae(d, f);
      });
    };
    var ie = function (e, t, n) {
      var r, o;
      if (H) {
        r = M.createEvent("Event");
        r.promise = t;
        r.reason = n;
        r.initEvent(e, false, true);
        i.dispatchEvent(r);
      } else r = { promise: t, reason: n };
      (o = i["on" + e]) ? o(r) : e === V && E("Unhandled promise rejection", n);
    };
    var ae = function (r, o) {
      j.call(i, function () {
        var e = o.value;
        var t = se(o);
        var n;
        if (t) {
          n = T(function () {
            z ? B.emit("unhandledRejection", e, r) : ie(V, r, e);
          });
          o.rejection = z || se(o) ? J : W;
          if (n.error) throw n.value;
        }
      });
    };
    var se = function (e) {
      return e.rejection !== W && !e.parent;
    };
    var ce = function (e, t) {
      j.call(i, function () {
        z ? B.emit("rejectionHandled", e) : ie(Y, e, t.value);
      });
    };
    var ue = function (t, n, r, o) {
      return function (e) {
        t(n, r, e, o);
      };
    };
    var le = function (e, t, n, r) {
      if (t.done) return;
      t.done = true;
      r && (t = r);
      t.value = n;
      t.state = K;
      oe(e, t, true);
    };
    var de = function (n, r, e, t) {
      if (r.done) return;
      r.done = true;
      t && (r = t);
      try {
        if (n === e) throw N("Promise can't be resolved itself");
        var o = re(e);
        if (o)
          w(function () {
            var t = { done: false };
            try {
              o.call(e, ue(de, n, t, r), ue(le, n, t, r));
            } catch (e) {
              le(n, t, e, r);
            }
          });
        else {
          r.value = e;
          r.state = G;
          oe(n, r, false);
        }
      } catch (e) {
        le(n, { done: false }, e, r);
      }
    };
    if (te) {
      D = function e(t) {
        p(this, D, A);
        m(t);
        Q.call(this);
        var n = k(this);
        try {
          t(ue(de, this, n), ue(le, this, n));
        } catch (e) {
          le(this, n, e);
        }
      };
      Q = function e(t) {
        R(this, {
          type: A,
          done: false,
          notified: false,
          parent: false,
          reactions: [],
          rejection: false,
          state: X,
          value: void 0,
        });
      };
      Q.prototype = u(D.prototype, {
        then: function e(t, n) {
          var r = L(this);
          var o = q(_(this, D));
          o.ok = "function" != typeof t || t;
          o.fail = "function" == typeof n && n;
          o.domain = z ? B.domain : void 0;
          r.parent = true;
          r.reactions.push(o);
          r.state != X && oe(this, r, false);
          return o.promise;
        },
        catch: function (e) {
          return this.then(void 0, e);
        },
      });
      $ = function () {
        var e = new Q();
        var t = k(e);
        this.promise = e;
        this.resolve = ue(de, e, t);
        this.reject = ue(le, e, t);
      };
      S.f = q = function (e) {
        return e === D || e === Z ? new $(e) : U(e);
      };
      if (!o && "function" == typeof s) {
        ee = s.prototype.then;
        c(
          s.prototype,
          "then",
          function e(t, n) {
            var r = this;
            return new D(function (e, t) {
              ee.call(r, e, t);
            }).then(t, n);
          },
          { unsafe: true }
        );
        "function" == typeof F &&
          r(
            { global: true, enumerable: true, forced: true },
            {
              fetch: function e(t) {
                return b(D, F.apply(i, arguments));
              },
            }
          );
      }
    }
    r({ global: true, wrap: true, forced: te }, { Promise: D });
    l(D, A, false, true);
    d(A);
    Z = a(A);
    r(
      { target: A, stat: true, forced: te },
      {
        reject: function e(t) {
          var n = q(this);
          n.reject.call(void 0, t);
          return n.promise;
        },
      }
    );
    r(
      { target: A, stat: true, forced: o || te },
      {
        resolve: function e(t) {
          return b(o && this === Z ? D : this, t);
        },
      }
    );
    r(
      { target: A, stat: true, forced: ne },
      {
        all: function e(t) {
          var s = this;
          var n = q(s);
          var c = n.resolve;
          var u = n.reject;
          var r = T(function () {
            var r = m(s.resolve);
            var o = [];
            var i = 0;
            var a = 1;
            g(t, function (e) {
              var t = i++;
              var n = false;
              o.push(void 0);
              a++;
              r.call(s, e).then(function (e) {
                if (n) return;
                n = true;
                o[t] = e;
                --a || c(o);
              }, u);
            });
            --a || c(o);
          });
          r.error && u(r.value);
          return n.promise;
        },
        race: function e(n) {
          var r = this;
          var o = q(r);
          var i = o.reject;
          var t = T(function () {
            var t = m(r.resolve);
            g(n, function (e) {
              t.call(r, e).then(o.resolve, i);
            });
          });
          t.error && i(t.value);
          return o.promise;
        },
      }
    );
  },
  "./common/temp/node_modules/resourcetiming-compression/src/resourcetiming-compression.js":
    function (n, r, e) {
      var o, i;
      (function (p) {
        "use strict";
        var e;
        var t;
        if ("undefined" !== typeof p) {
          e = p;
          t = e.ResourceTimingCompression;
        }
        var g = {};
        g.HOSTNAMES_REVERSED = true;
        g.INITIATOR_TYPES = {
          other: 0,
          img: 1,
          link: 2,
          script: 3,
          css: 4,
          xmlhttprequest: 5,
          html: 6,
          image: 7,
          beacon: 8,
          fetch: 9,
          iframe: "a",
          subdocument: "a",
          body: "b",
          input: "c",
          frame: "a",
          object: "d",
          video: "e",
          audio: "f",
          source: "g",
          track: "h",
          embed: "i",
          eventsource: "j",
          navigation: 6,
        };
        g.DEFAULT_XSS_BREAK_WORDS = [/(h)(ref)/gi, /(s)(rc)/gi, /(a)(ction)/gi];
        g.XSS_BREAK_DELIM = "\n";
        g.DEFAULT_URL_LIMIT = 500;
        g.SPECIAL_DATA_PREFIX = "*";
        g.SPECIAL_DATA_DIMENSION_TYPE = "0";
        g.SPECIAL_DATA_SIZE_TYPE = "1";
        g.SPECIAL_DATA_SCRIPT_TYPE = "2";
        g.SPECIAL_DATA_SCRIPT_ASYNC_ATTR = 1;
        g.SPECIAL_DATA_SCRIPT_DEFER_ATTR = 2;
        g.SPECIAL_DATA_SCRIPT_LOCAT_ATTR = 4;
        g.SPECIAL_DATA_SERVERTIMING_TYPE = "3";
        g.SPECIAL_DATA_LINK_ATTR_TYPE = "4";
        g.SPECIAL_DATA_NAMESPACED_TYPE = "5";
        g.SPECIAL_DATA_SERVICE_WORKER_TYPE = "6";
        g.REL_TYPES = { prefetch: 1, preload: 2, prerender: 3, stylesheet: 4 };
        g.HOSTNAME_REGEX = /^(https?:\/\/)([^\/]+)(.*)/;
        g.trimUrls = [];
        g.xssBreakWords = g.DEFAULT_XSS_BREAK_WORDS;
        g.noConflict = function () {
          e.ResourceTimingCompression = t;
          return g;
        };
        g.roundUpTiming = function (e) {
          "number" !== typeof e && (e = 0);
          return Math.ceil(e || 0);
        };
        g.convertToTrie = function (e) {
          var t = {},
            n,
            r,
            o,
            i,
            a,
            s,
            c,
            u;
          for (n in e) {
            if (!e.hasOwnProperty(n)) continue;
            r = n;
            for (o = 0; o < this.xssBreakWords.length; o++)
              r = r.replace(
                this.xssBreakWords[o],
                "$1" + g.XSS_BREAK_DELIM + "$2"
              );
            i = e[n];
            a = r.split("");
            c = t;
            for (o = 0; o < a.length; o++) {
              s = a[o];
              u = c[s];
              "undefined" === typeof u
                ? (c = c[s] = o === a.length - 1 ? i : {})
                : "string" === typeof u
                ? (c = c[s] = { "|": u })
                : o === a.length - 1
                ? (c[s]["|"] = i)
                : (c = c[s]);
            }
          }
          return t;
        };
        g.optimizeTrie = function (e, t) {
          var n = 0,
            r,
            o,
            i;
          var a = [];
          for (r in e) e.hasOwnProperty(r) && a.push(r);
          for (var s = 0; s < a.length; s++) {
            r = a[s];
            if ("object" === typeof e[r]) {
              o = this.optimizeTrie(e[r], false);
              if (o) {
                delete e[r];
                if (r === g.XSS_BREAK_DELIM) {
                  r = o.name;
                  n++;
                } else r += o.name;
                e[r] = o.value;
              }
            }
            n++;
          }
          if (1 === n) {
            if (t) {
              i = {};
              i[r] = e[r];
              return i;
            }
            return { name: r, value: e[r] };
          }
          if (t) return e;
          return false;
        };
        g.trimTiming = function (e, t) {
          "number" !== typeof e && (e = 0);
          "number" !== typeof t && (t = 0);
          var n = Math.round(e || 0),
            r = Math.round(t || 0);
          return 0 === n ? 0 : n - r;
        };
        g.getNavStartTime = function (e) {
          var t = 0,
            n;
          if (!e) return t;
          try {
            n = e.location && e.location.href;
            "performance" in e &&
              e.performance &&
              e.performance.timing &&
              e.performance.timing.navigationStart &&
              (t = e.performance.timing.navigationStart);
          } catch (e) {}
          return t;
        };
        g.findPerformanceEntriesForFrame = function (e, t, n, r) {
          var o = [],
            i,
            a,
            s,
            c,
            u,
            l,
            d,
            f,
            m,
            p = {},
            v = {},
            h;
          "undefined" === typeof t && (t = true);
          "undefined" === typeof n && (n = 0);
          "undefined" === typeof r && (r = 0);
          if (r > 10) return o;
          try {
            s = this.getNavStartTime(e);
            h = e.document.createElement("a");
            _(h, v, "script");
            _(h, p, "link");
            if (e.frames)
              for (i = 0; i < e.frames.length; i++) {
                c = this.getNavStartTime(e.frames[i]);
                u = 0;
                c > s && (u = n + (c - s));
                o = o.concat(
                  this.findPerformanceEntriesForFrame(
                    e.frames[i],
                    false,
                    u,
                    ++r
                  )
                );
              }
            try {
              f = e.location && e.location.href;
              if (
                !("performance" in e) ||
                !e.performance ||
                !e.performance.getEntriesByType
              )
                return o;
            } catch (e) {
              return o;
            }
            if (t) {
              a = e.performance.getEntriesByType("navigation");
              if (a && 1 === a.length) {
                l = a[0];
                o.push({
                  name: e.location.href,
                  startTime: 0,
                  initiatorType: "html",
                  redirectStart: l.redirectStart,
                  redirectEnd: l.redirectEnd,
                  fetchStart: l.fetchStart,
                  domainLookupStart: l.domainLookupStart,
                  domainLookupEnd: l.domainLookupEnd,
                  connectStart: l.connectStart,
                  secureConnectionStart: l.secureConnectionStart,
                  connectEnd: l.connectEnd,
                  requestStart: l.requestStart,
                  responseStart: l.responseStart,
                  responseEnd: l.responseEnd,
                  serverTiming: l.serverTiming || [],
                });
              } else if (e.performance.timing) {
                d = e.performance.timing;
                0 !== d.navigationStart &&
                  d.responseEnd <= d.navigationStart + 36e5 &&
                  o.push({
                    name: e.location.href,
                    startTime: 0,
                    initiatorType: "html",
                    redirectStart: d.redirectStart
                      ? d.redirectStart - d.navigationStart
                      : 0,
                    redirectEnd: d.redirectEnd
                      ? d.redirectEnd - d.navigationStart
                      : 0,
                    fetchStart: d.fetchStart
                      ? d.fetchStart - d.navigationStart
                      : 0,
                    domainLookupStart: d.domainLookupStart
                      ? d.domainLookupStart - d.navigationStart
                      : 0,
                    domainLookupEnd: d.domainLookupEnd
                      ? d.domainLookupEnd - d.navigationStart
                      : 0,
                    connectStart: d.connectStart
                      ? d.connectStart - d.navigationStart
                      : 0,
                    secureConnectionStart: d.secureConnectionStart
                      ? d.secureConnectionStart - d.navigationStart
                      : 0,
                    connectEnd: d.connectEnd
                      ? d.connectEnd - d.navigationStart
                      : 0,
                    requestStart: d.requestStart
                      ? d.requestStart - d.navigationStart
                      : 0,
                    responseStart: d.responseStart
                      ? d.responseStart - d.navigationStart
                      : 0,
                    responseEnd: d.responseEnd
                      ? d.responseEnd - d.navigationStart
                      : 0,
                  });
              }
            }
            var g = e.performance.getEntriesByType("resource");
            var y = [];
            for (i = 0; g && i < g.length; i++) {
              d = g[i];
              m = {
                name: d.name,
                initiatorType: d.initiatorType,
                startTime: d.startTime + n,
                redirectStart: d.redirectStart ? d.redirectStart + n : 0,
                redirectEnd: d.redirectEnd ? d.redirectEnd + n : 0,
                fetchStart: d.fetchStart ? d.fetchStart + n : 0,
                domainLookupStart: d.domainLookupStart
                  ? d.domainLookupStart + n
                  : 0,
                domainLookupEnd: d.domainLookupEnd ? d.domainLookupEnd + n : 0,
                connectStart: d.connectStart ? d.connectStart + n : 0,
                secureConnectionStart: d.secureConnectionStart
                  ? d.secureConnectionStart + n
                  : 0,
                connectEnd: d.connectEnd ? d.connectEnd + n : 0,
                requestStart: d.requestStart ? d.requestStart + n : 0,
                responseStart: d.responseStart ? d.responseStart + n : 0,
                responseEnd: d.responseEnd ? d.responseEnd + n : 0,
              };
              if (d.encodedBodySize || d.decodedBodySize || d.transferSize) {
                m.encodedBodySize = d.encodedBodySize;
                m.decodedBodySize = d.decodedBodySize;
                m.transferSize = d.transferSize;
              }
              d.serverTiming &&
                d.serverTiming.length &&
                (m.serverTiming = d.serverTiming);
              this.updateScriptFlags(v, d, m);
              this.updateLinkFlags(p, d, m);
              y.push(m);
            }
            o = o.concat(y);
          } catch (e) {
            return o;
          }
          return o;
        };
        g.updateScriptFlags = function (e, t, n) {
          if (
            ("script" === t.initiatorType || "link" === t.initiatorType) &&
            e[t.name]
          ) {
            var r = e[t.name];
            n.scriptAttrs =
              (r.async ? g.SPECIAL_DATA_SCRIPT_ASYNC_ATTR : 0) |
              (r.defer ? g.SPECIAL_DATA_SCRIPT_DEFER_ATTR : 0);
            while (1 === r.nodeType && "BODY" !== r.nodeName) r = r.parentNode;
            n.scriptAttrs |=
              "BODY" === r.nodeName ? g.SPECIAL_DATA_SCRIPT_LOCAT_ATTR : 0;
          }
        };
        g.updateLinkFlags = function (e, t, n) {
          "link" === t.initiatorType &&
            e[t.name] &&
            e[t.name].rel
              .split(/[\u0009\u000A\u000C\u000D\u0020]+/)
              .find(function (e) {
                e = e.toLowerCase();
                if (g.REL_TYPES[e]) {
                  n.linkAttrs = g.REL_TYPES[e];
                  return true;
                }
                return false;
              });
        };
        g.toBase36 = function (e) {
          if ("number" === typeof e && 0 !== e) return e.toString(36);
          return "string" === typeof e ? e : "";
        };
        function _(t, n, e) {
          Array.prototype.forEach.call(
            t.ownerDocument.getElementsByTagName(e),
            function (e) {
              t.href =
                e.currentSrc || e.src || e.getAttribute("xlink:href") || e.href;
              t.href.match(/^https?:\/\//) && (n[t.href] = e);
            }
          );
        }
        g.getVisibleEntries = function (e) {
          if (!e) return {};
          var t = ["img", "iframe", "image"],
            u = {},
            l,
            d,
            f = e.document,
            m = f.createElement("A");
          l =
            void 0 !== e.pageXOffset
              ? e.pageXOffset
              : (f.documentElement || f.body.parentNode || f.body).scrollLeft;
          d =
            void 0 !== e.pageYOffset
              ? e.pageYOffset
              : (f.documentElement || f.body.parentNode || f.body).scrollTop;
          t.forEach(function (e) {
            var t = f.getElementsByTagName(e),
              n,
              r,
              o,
              i;
            for (r = 0; r < t.length; r++) {
              n = t[r];
              if (!n) continue;
              i =
                n.currentSrc ||
                n.src ||
                ("function" === typeof n.getAttribute &&
                  n.getAttribute("src")) ||
                n.getAttribute("xlink:href");
              m.href = i;
              i = m.href;
              if (!i || u[i]) continue;
              o = n.getBoundingClientRect();
              if ((o.height || n.offsetHeight) && (o.width || n.offsetWidth)) {
                u[i] = [
                  o.height || n.offsetHeight,
                  o.width || n.offsetWidth,
                  Math.round(o.top + d),
                  Math.round(o.left + l),
                ];
                if (!n.naturalHeight && !n.naturalWidth) continue;
                var a, s, c;
                if (
                  n.currentSrc &&
                  (n.srcset ||
                    (n.parentNode &&
                      n.parentNode.nodeName &&
                      "PICTURE" === n.parentNode.nodeName.toUpperCase()))
                ) {
                  a = n.isConnected
                    ? n.ownerDocument.createElement("IMG")
                    : new p.Image();
                  a.src = i;
                } else a = n;
                s = a.naturalHeight || n.naturalHeight;
                c = a.naturalWidth || n.naturalWidth;
                (!s && !c) ||
                  (u[i][0] === s && u[i][1] === c) ||
                  u[i].push(s, c);
              }
            }
          });
          return u;
        };
        g.inArray = function (e, t) {
          var n;
          if ("undefined" === typeof e || "undefined" === typeof t || !t.length)
            return false;
          for (n = 0; n < t.length; n++) if (t[n] === e) return true;
          return false;
        };
        g.getFilteredResourceTiming = function (e, t, n, r) {
          var o = this.findPerformanceEntriesForFrame(e, true, 0, 0),
            i,
            a,
            s = this.getNavStartTime(e),
            c = {};
          if (!o || !o.length) return { entries: [] };
          var u = [];
          for (i = 0; i < o.length; i++) {
            a = o[i];
            if (
              0 === a.name.indexOf("about:") ||
              0 === a.name.indexOf("javascript:")
            )
              continue;
            if (t && s + a.startTime < t) continue;
            if (n && s + a.startTime > n) break;
            if (
              "undefined" !== typeof r &&
              "*" !== r &&
              r.length &&
              (!a.initiatorType || !this.inArray(a.initiatorType, r))
            )
              continue;
            g.accumulateServerTimingEntries(c, a.serverTiming);
            u.push(a);
          }
          var l = g.compressServerTiming(c);
          return {
            entries: u,
            serverTiming: { lookup: l, indexed: g.indexServerTiming(l) },
          };
        };
        g.compressSize = function (e) {
          var t, n, r, o;
          if (e.encodedBodySize || e.decodedBodySize || e.transferSize) {
            t = e.transferSize;
            n = e.encodedBodySize;
            r = e.decodedBodySize;
            o = [n, t ? t - n : "_", r - n];
            return o.map(this.toBase36).join(",").replace(/,+$/, "");
          }
          return "";
        };
        g.cleanupURL = function (e, t) {
          var n;
          if (!e || "[object Array]" === Object.prototype.toString.call(e))
            return "";
          if ("undefined" !== typeof t && e && e.length > t) {
            n = e.indexOf("?");
            e =
              -1 !== n && n < t
                ? e.substr(0, n) + "?..."
                : e.substr(0, t - 3) + "...";
          }
          return e;
        };
        g.trimUrl = function (e, t) {
          var n, r, o;
          if (e && t)
            for (n = 0; n < t.length; n++) {
              o = t[n];
              if ("string" === typeof o) {
                r = e.indexOf(o);
                if (-1 !== r) {
                  e = e.substr(0, r + o.length) + "...";
                  break;
                }
              } else
                o instanceof RegExp &&
                  o.test(e) &&
                  (e = e.replace(o, "$1") + "...");
            }
          return this.cleanupURL(e, g.DEFAULT_URL_LIMIT);
        };
        g.getResourceTiming = function (e, t, n, r) {
          "undefined" === typeof e && (e = p);
          var o = g.getFilteredResourceTiming(e, t, n);
          var i = o.entries,
            a = o.serverTiming;
          if (!i || !i.length) return {};
          return g.compressResourceTiming(e, i, a, r);
        };
        g.compressResourceTiming = function (e, t, i, n) {
          var r,
            o,
            a = {},
            s,
            c,
            u,
            l,
            d = {};
          n || (d = this.getVisibleEntries(e));
          for (r = 0; r < t.length; r++) {
            o = t[r];
            s = this.INITIATOR_TYPES[o.initiatorType];
            "undefined" === typeof s && (s = 0);
            l =
              s +
              [
                this.trimTiming(o.startTime, 0),
                this.trimTiming(o.responseEnd, o.startTime),
                this.trimTiming(o.responseStart, o.startTime),
                this.trimTiming(o.requestStart, o.startTime),
                this.trimTiming(o.connectEnd, o.startTime),
                this.trimTiming(o.secureConnectionStart, o.startTime),
                this.trimTiming(o.connectStart, o.startTime),
                this.trimTiming(o.domainLookupEnd, o.startTime),
                this.trimTiming(o.domainLookupStart, o.startTime),
                this.trimTiming(o.redirectEnd, o.startTime),
                this.trimTiming(o.redirectStart, o.startTime),
              ]
                .map(this.toBase36)
                .join(",")
                .replace(/,+$/, "");
            var f = this.compressSize(o);
            "" !== f &&
              (l += g.SPECIAL_DATA_PREFIX + g.SPECIAL_DATA_SIZE_TYPE + f);
            o.hasOwnProperty("scriptAttrs") &&
              (l +=
                g.SPECIAL_DATA_PREFIX +
                g.SPECIAL_DATA_SCRIPT_TYPE +
                o.scriptAttrs);
            o.hasOwnProperty("linkAttrs") &&
              (l +=
                g.SPECIAL_DATA_PREFIX +
                g.SPECIAL_DATA_LINK_ATTR_TYPE +
                o.linkAttrs);
            o.serverTiming &&
              o.serverTiming.length &&
              (l +=
                g.SPECIAL_DATA_PREFIX +
                g.SPECIAL_DATA_SERVERTIMING_TYPE +
                o.serverTiming.reduce(function (e, t, n) {
                  var r = String(t.duration);
                  "0." === r.substring(0, 2) && (r = r.substring(1));
                  var o = g.identifyServerTimingEntry(
                    i.indexed[t.name].index,
                    i.indexed[t.name].descriptions[t.description]
                  );
                  e += (n > 0 ? "," : "") + r + o;
                  return e;
                }, ""));
            if (
              o.workerStart &&
              "number" === typeof o.workerStart &&
              0 !== o.workerStart
            ) {
              var m = g.roundUpTiming(o.workerStart);
              var p = this.trimTiming(m, o.startTime);
              l +=
                g.SPECIAL_DATA_PREFIX +
                g.SPECIAL_DATA_SERVICE_WORKER_TYPE +
                this.toBase36(p);
            }
            u = c = this.trimUrl(o.name, this.trimUrls);
            g.HOSTNAMES_REVERSED && (u = this.reverseHostname(c));
            if (o.hasOwnProperty("_data")) {
              var v = "";
              for (var h in o._data)
                o._data.hasOwnProperty(h) &&
                  (v +=
                    g.SPECIAL_DATA_PREFIX +
                    g.SPECIAL_DATA_NAMESPACED_TYPE +
                    h +
                    ":" +
                    o._data[h]);
              "undefined" === typeof a[c] ? (a[c] = l + v) : (a[c] += v);
            } else
              void 0 !== a[u]
                ? (a[u] += "|" + l)
                : void 0 !== d[c]
                ? (a[u] =
                    g.SPECIAL_DATA_PREFIX +
                    g.SPECIAL_DATA_DIMENSION_TYPE +
                    d[c].map(this.toBase36).join(",").replace(/,+$/, "") +
                    "|" +
                    l)
                : (a[u] = l);
          }
          return {
            restiming: this.optimizeTrie(this.convertToTrie(a), true),
            servertiming: i.lookup,
          };
        };
        g.reverseHostname = function (e) {
          return e.replace(g.HOSTNAME_REGEX, function (e, t, n, r) {
            return t + g.reverseString(n) + r;
          });
        };
        g.reverseString = function (e) {
          var t = e.length,
            n = "";
          while (t--) n += e[t];
          return n;
        };
        g.accumulateServerTimingEntries = function (n, e) {
          (e || []).forEach(function (e) {
            "undefined" === typeof n[e.name] &&
              (n[e.name] = { count: 0, counts: {} });
            var t = n[e.name];
            t.counts[e.description] = t.counts[e.description] || 0;
            t.counts[e.description]++;
            t.count++;
          });
        };
        g.compressServerTiming = function (r) {
          return Object.keys(r)
            .sort(function (e, t) {
              return r[t].count - r[e].count;
            })
            .reduce(function (e, n) {
              var t = Object.keys(r[n].counts).sort(function (e, t) {
                return r[n].counts[t] - r[n].counts[e];
              });
              e.push(1 === t.length && "" === t[0] ? n : [n].concat(t));
              return e;
            }, []);
        };
        g.indexServerTiming = function (e) {
          return e.reduce(function (e, t, n) {
            var r, o;
            if (Array.isArray(t)) {
              r = t[0];
              o = t.slice(1).reduce(function (e, t, n) {
                e[t] = n;
                return e;
              }, {});
            } else {
              r = t;
              o = { "": 0 };
            }
            e[r] = { index: n, descriptions: o };
            return e;
          }, {});
        };
        g.identifyServerTimingEntry = function (e, t) {
          var n = "";
          e && (n += e);
          t && (n += "." + t);
          n.length && (n = ":" + n);
          return n;
        };
        true;
        !((o = []),
        (i = function () {
          return g;
        }.apply(r, o)),
        void 0 !== i && (n.exports = i));
      })("undefined" !== typeof window ? window : void 0);
    },
  "./common/temp/node_modules/tti-polyfill/tti-polyfill.js": function (
    T,
    O,
    e
  ) {
    (function (b) {
      var E, S;
      (function () {
        var t =
            "undefined" != typeof window && window === this
              ? this
              : "undefined" != typeof b && null != b
              ? b
              : this,
          n =
            "function" == typeof Object.defineProperties
              ? Object.defineProperty
              : function (e, t, n) {
                  e != Array.prototype &&
                    e != Object.prototype &&
                    (e[t] = n.value);
                };
        function r() {
          r = function () {};
          t.Symbol || (t.Symbol = e);
        }
        var o = 0;
        function e(e) {
          return "jscomp_symbol_" + (e || "") + o++;
        }
        function i() {
          r();
          var e = t.Symbol.iterator;
          e = e || (t.Symbol.iterator = t.Symbol("iterator"));
          "function" != typeof Array.prototype[e] &&
            n(Array.prototype, e, {
              configurable: !0,
              writable: !0,
              value: function () {
                return a(this);
              },
            });
          i = function () {};
        }
        function a(e) {
          var t = 0;
          return s(function () {
            return t < e.length ? { done: !1, value: e[t++] } : { done: !0 };
          });
        }
        function s(e) {
          i();
          e = { next: e };
          e[t.Symbol.iterator] = function () {
            return this;
          };
          return e;
        }
        function c(e) {
          i();
          var t = e[Symbol.iterator];
          return t ? t.call(e) : a(e);
        }
        function u(e) {
          if (!(e instanceof Array)) {
            e = c(e);
            for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
            e = n;
          }
          return e;
        }
        var l = 0;
        function d(o, i) {
          var a = XMLHttpRequest.prototype.send,
            s = l++;
          XMLHttpRequest.prototype.send = function (e) {
            for (var t = [], n = 0; n < arguments.length; ++n)
              t[n - 0] = arguments[n];
            var r = this;
            o(s);
            this.addEventListener("readystatechange", function () {
              4 === r.readyState && i(s);
            });
            return a.apply(this, t);
          };
        }
        function f(i, a) {
          var s = fetch;
          fetch = function (e) {
            for (var o = [], t = 0; t < arguments.length; ++t)
              o[t - 0] = arguments[t];
            return new Promise(function (t, n) {
              var r = l++;
              i(r);
              s.apply(null, [].concat(u(o))).then(
                function (e) {
                  a(r);
                  t(e);
                },
                function (e) {
                  a(e);
                  n(e);
                }
              );
            });
          };
        }
        var m = "img script iframe link audio video source".split(" ");
        function p(e, t) {
          e = c(e);
          for (var n = e.next(); !n.done; n = e.next())
            if (
              ((n = n.value),
              t.includes(n.nodeName.toLowerCase()) || p(n.children, t))
            )
              return !0;
          return !1;
        }
        function v(n) {
          var e = new MutationObserver(function (e) {
            e = c(e);
            for (var t = e.next(); !t.done; t = e.next())
              (t = t.value),
                "childList" == t.type && p(t.addedNodes, m)
                  ? n(t)
                  : "attributes" == t.type &&
                    m.includes(t.target.tagName.toLowerCase()) &&
                    n(t);
          });
          e.observe(document, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["href", "src"],
          });
          return e;
        }
        function h(e, t) {
          if (2 < e.length) return performance.now();
          var n = [];
          t = c(t);
          for (var r = t.next(); !r.done; r = t.next())
            (r = r.value),
              n.push({ timestamp: r.start, type: "requestStart" }),
              n.push({ timestamp: r.end, type: "requestEnd" });
          t = c(e);
          for (r = t.next(); !r.done; r = t.next())
            n.push({ timestamp: r.value, type: "requestStart" });
          n.sort(function (e, t) {
            return e.timestamp - t.timestamp;
          });
          e = e.length;
          for (t = n.length - 1; 0 <= t; t--)
            switch (((r = n[t]), r.type)) {
              case "requestStart":
                e--;
                break;
              case "requestEnd":
                e++;
                if (2 < e) return r.timestamp;
                break;
              default:
                throw Error("Internal Error: This should never happen");
            }
          return 0;
        }
        function g(e) {
          e = e || {};
          this.w = !!e.useMutationObserver;
          this.u = e.minValue || null;
          e = window.__tti && window.__tti.e;
          var t = window.__tti && window.__tti.o;
          this.a = e
            ? e.map(function (e) {
                return { start: e.startTime, end: e.startTime + e.duration };
              })
            : [];
          t && t.disconnect();
          this.b = [];
          this.f = new Map();
          this.j = null;
          this.v = -1 / 0;
          this.i = !1;
          this.h = this.c = this.s = null;
          d(this.m.bind(this), this.l.bind(this));
          f(this.m.bind(this), this.l.bind(this));
          j(this);
          this.w && (this.h = v(this.B.bind(this)));
        }
        g.prototype.getFirstConsistentlyInteractive = function () {
          var t = this;
          return new Promise(function (e) {
            t.s = e;
            "complete" == document.readyState
              ? y(t)
              : window.addEventListener("load", function () {
                  y(t);
                });
          });
        };
        function y(e) {
          e.i = !0;
          var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
            n = h(e.g, e.b);
          _(e, Math.max(n + 5e3, t));
        }
        function _(i, e) {
          !i.i ||
            i.v > e ||
            (clearTimeout(i.j),
            (i.j = setTimeout(function () {
              var e = performance.timing.navigationStart,
                t = h(i.g, i.b),
                e =
                  (window.a && window.a.A ? 1e3 * window.a.A().C - e : 0) ||
                  performance.timing.domContentLoadedEventEnd - e;
              if (i.u) var n = i.u;
              else
                n = performance.timing.domContentLoadedEventEnd
                  ? ((n = performance.timing),
                    n.domContentLoadedEventEnd - n.navigationStart)
                  : null;
              var r = performance.now();
              null === n && _(i, Math.max(t + 5e3, r + 1e3));
              var o = i.a;
              t =
                5e3 > r - t
                  ? null
                  : ((t = o.length ? o[o.length - 1].end : e),
                    5e3 > r - t ? null : Math.max(t, n));
              t &&
                (i.s(t),
                clearTimeout(i.j),
                (i.i = !1),
                i.c && i.c.disconnect(),
                i.h && i.h.disconnect());
              _(i, performance.now() + 1e3);
            }, e - performance.now())),
            (i.v = e));
        }
        function j(r) {
          r.c = new PerformanceObserver(function (e) {
            e = c(e.getEntries());
            for (var t = e.next(); !t.done; t = e.next())
              if (
                ((t = t.value),
                "resource" === t.entryType &&
                  (r.b.push({ start: t.fetchStart, end: t.responseEnd }),
                  _(r, h(r.g, r.b) + 5e3)),
                "longtask" === t.entryType)
              ) {
                var n = t.startTime + t.duration;
                r.a.push({ start: t.startTime, end: n });
                _(r, n + 5e3);
              }
          });
          r.c.observe({ entryTypes: ["longtask", "resource"] });
        }
        g.prototype.m = function (e) {
          this.f.set(e, performance.now());
        };
        g.prototype.l = function (e) {
          this.f.delete(e);
        };
        g.prototype.B = function () {
          _(this, performance.now() + 5e3);
        };
        t.Object.defineProperties(g.prototype, {
          g: {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return [].concat(u(this.f.values()));
            },
          },
        });
        var w = {
          getFirstConsistentlyInteractive: function (e) {
            e = e || {};
            return "PerformanceLongTaskTiming" in window
              ? new g(e).getFirstConsistentlyInteractive()
              : Promise.resolve(null);
          },
        };
        true,
          T.exports
            ? (T.exports = w)
            : (true,
              !((E = []),
              (S = function () {
                return w;
              }.apply(O, E)),
              void 0 !== S && (T.exports = S)));
      })();
    }.call(this, e("./node_modules/webpack/buildin/global.js")));
  },
  "./node_modules/webpack/buildin/global.js": function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" === typeof window && (n = window);
    }
    e.exports = n;
  },
  "./src/main/webapp/frontend/packages/enums/PageTypes.js": function (e, t) {
    var n = {
      MAIN_CONTENT: 1,
      CONTENT_COLLECTION: 1,
      PAGE: 2,
      SPLASH_PAGE: 3,
      CONTENT_ITEM: 50,
      NOT_FOUND: 100,
      ERROR: 101,
      SEARCH: 102,
      LOCK_SCREEN: 103,
      POPUP_OVERLAY: 104,
      PROTECTED_CONTENT: 105,
      MEMBER_AREA_ACCESS_DENIED: 106,
      SHOW_CART: 200,
      CHECKOUT: 201,
      ORDER_CONFIRMED: 202,
      DONATE: 203,
      CONTRIBUTION_CONFIRMED: 204,
      COMMERCE_CART_V2: 205,
      SUBSCRIPTION_CONFIRMED: 206,
      ORDER_RECEIVED: 207,
      MEMBERSHIP_CONFIRMED: 208,
      NEWSLETTER_UNSUBSCRIBE: 300,
      COMMERCE_EMAIL_PREVIEW: 301,
    };
    e.exports = n;
  },
  "./src/main/webapp/frontend/packages/enums/StatusConstants.js": function (
    e,
    t
  ) {
    var n = {
      EXPIRED: 1,
      PASTDUE: 2,
      TRIAL: 3,
      BETA: 4,
      REMOVED: 5,
      INTERNAL: 6,
      COMPED: 7,
      PAID: 8,
      V5_LINKED: 11,
      ACTIVE_PARKING_PAGE: 12,
      RESOLD: 13,
      RESOLD_GRACE_PERIOD: 14,
      ENTERPRISE: 15,
    };
    e.exports = n;
  },
  "./src/main/webapp/universal/src/apps/Performance/bootstrap.js": function (
    e,
    t,
    n
  ) {
    "use strict";
    var r = n(
      "./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
    );
    var o = r(
      n("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js")
    );
    var i = r(n("./common/temp/node_modules/@sqs/rum-collector/lib/index.js"));
    var c = r(
      n("./src/main/webapp/frontend/packages/enums/StatusConstants.js")
    );
    var a = r(n("./src/main/webapp/frontend/packages/enums/PageTypes.js"));
    var u = n(
      "./src/main/webapp/universal/src/shared/utils/error-reporter/global-sentry.ts"
    );
    function s(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          }));
        n.push.apply(n, r);
      }
      return n;
    }
    function l(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? s(Object(n), true).forEach(function (e) {
              (0, o.default)(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var d = window.Static && window.Static.SQUARESPACE_CONTEXT;
    var f = window.top !== window;
    var m = Object.freeze(
      (0, o.default)({}, a.default.COMMERCE_CART_V2, "commerce-cart")
    );
    function p() {
      var e = (window.location && window.location.pathname) || "";
      return !f && /^\/config(\/.*)?$/.test(e);
    }
    function v() {
      return {
        inFrame: f,
        templateId: d.templateId || "",
        impersonatedSession: !!d.impersonatedSession,
        pageType: "number" === typeof d.pageType ? d.pageType : -1,
      };
    }
    function h() {
      var e = d.website,
        t = void 0 === e ? {} : e;
      return {
        authenticUrl: t.authenticUrl || "",
        cloneable: !!t.cloneable,
        developerMode: !!t.developerMode,
        isHstsEnabled: !!t.isHstsEnabled,
        language: t.language || "",
        timeZone: t.timeZone || "",
        websiteId: t.id || "",
        websiteType: t.websiteType || -1,
      };
    }
    function g() {
      var e = d.websiteSettings,
        t = void 0 === e ? {} : e;
      return { ampEnabled: !!t.ampEnabled };
    }
    function y() {
      var e = d.collection,
        t = void 0 === e ? {} : e;
      return { collectionType: t.type || -1 };
    }
    function _() {
      return window.Squarespace && "SECTION_CONTEXT" in window.Squarespace;
    }
    function j() {
      if (d.hasOwnProperty("templateVersion"))
        return d.templateVersion.replace(".", "_");
      if (_()) return "8";
      return null;
    }
    function w(e) {
      var t = p();
      var n = m[d.pageType];
      var r = {
        appName: n || "v".concat(e, "-").concat(t ? "config" : "user-sites"),
        context: l({}, v(), {}, h(), {}, g(), {}, y()),
        captureException: function e(t, n) {
          (0, u.withScope)(function (e) {
            e.setTag("project", "rum-collector");
            void 0 !== n && e.setExtra("extras", n);
            (0, u.captureException)(t);
          });
        },
      };
      if (t) {
        var o = d.website.siteStatus.value === c.default.INTERNAL;
        var i = d.authenticatedAccount,
          a = i.createdOn,
          s = i.id;
        r.context.isInternal = o;
        r.context.createdOn = a;
        r.context.memberId = s;
      }
      return r;
    }
    function b() {
      if ((true, d)) {
        var e = j();
        if (null === e) return;
        var t = w(e);
        (0, i.default)(t);
      }
    }
    b();
  },
  "./src/main/webapp/universal/src/shared/utils/error-reporter/global-sentry.ts":
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      t.isSentryConnected =
        t.withScope =
        t.configureScope =
        t.captureEvent =
        t.captureException =
        t.captureMessage =
          void 0;
      var r, o, i, a, s;
      t.withScope = s;
      t.configureScope = a;
      t.captureEvent = i;
      t.captureException = o;
      t.captureMessage = r;
      var c = function e(t) {
        var n;
        for (
          var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1;
          i < r;
          i++
        )
          o[i - 1] = arguments[i];
        (n = console).log.apply(n, ["[Sentry] ".concat(t)].concat(o));
        return "some-error-identifier";
      };
      var u = false;
      t.isSentryConnected = u;
      if (window.SQUARESPACE_SENTRY) {
        t.isSentryConnected = u = true;
        t.captureMessage = r = window.SQUARESPACE_SENTRY.captureMessage;
        t.captureException = o = window.SQUARESPACE_SENTRY.captureException;
        t.captureEvent = i = window.SQUARESPACE_SENTRY.captureEvent;
        t.configureScope = a = window.SQUARESPACE_SENTRY.configureScope;
        t.withScope = s = window.SQUARESPACE_SENTRY.withScope;
      } else {
        t.captureMessage = r = c;
        t.captureException = o = c;
        t.captureEvent = i = c;
        t.configureScope = a = function e() {};
        t.withScope = s = function e() {};
      }
    },
});
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/performance-6e6b2fa5ed79844ae8f58-min.en-US.js.map
