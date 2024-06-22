"use strict";

var _puppeteer = require("puppeteer");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var puppeteer = require('puppeteer');
//import puppeteer from "puppeteer";
//utilizo siempre await por lo tanto requiero async (en nuevas versiones de node no hace falta)
function insertToPage() {
  return _insertToPage.apply(this, arguments);
} //insertToPage()
function _insertToPage() {
  _insertToPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var browser, page;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return puppeteer.launch({
            headless: false,
            //si esta en 'new' no puedo ver que hace, si esta en false veo que hace
            slowMo: 600
          });
        case 2:
          browser = _context.sent;
          _context.next = 5;
          return browser.newPage();
        case 5:
          page = _context.sent;
          _context.next = 8;
          return page["goto"]('https://example.com/');
        case 8:
          _context.next = 10;
          return browser.close();
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _insertToPage.apply(this, arguments);
}
function captureScreenShot() {
  return _captureScreenShot.apply(this, arguments);
} //captureScreenShot()
function _captureScreenShot() {
  _captureScreenShot = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var browser, page;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return puppeteer.launch({
            headless: false,
            slowMo: 600
          });
        case 2:
          browser = _context2.sent;
          _context2.next = 5;
          return browser.newPage();
        case 5:
          page = _context2.sent;
          _context2.next = 8;
          return page["goto"]('https://example.com/');
        case 8:
          _context2.next = 10;
          return page.screenshot({
            path: 'example.png'
          });
        case 10:
          _context2.next = 12;
          return browser.close();
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _captureScreenShot.apply(this, arguments);
}
function navegarToMoreInfo() {
  return _navegarToMoreInfo.apply(this, arguments);
} //navegarToMoreInfo()
function _navegarToMoreInfo() {
  _navegarToMoreInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var browser, page;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return puppeteer.launch({
            headless: false,
            slowMo: 600 //cada operacion la relentiza un poco, como hago para ver la pagina final?
          });
        case 2:
          browser = _context3.sent;
          _context3.next = 5;
          return browser.newPage();
        case 5:
          page = _context3.sent;
          _context3.next = 8;
          return page["goto"]('https://example.com/');
        case 8:
          _context3.next = 10;
          return page.click('a[href="https://www.iana.org/domains/example"]');
        case 10:
          _context3.next = 12;
          return new Promise(function (r) {
            return setTimeout(r, 5000);
          });
        case 12:
          _context3.next = 14;
          return browser.close();
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _navegarToMoreInfo.apply(this, arguments);
}
function MostrarElementosdeWeb() {
  return _MostrarElementosdeWeb.apply(this, arguments);
} //MostrarElementosdeWeb()
function _MostrarElementosdeWeb() {
  _MostrarElementosdeWeb = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var browser, page, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return puppeteer.launch({
            headless: false,
            slowMo: 600 //cada operacion la relentiza un poco, como hago para ver la pagina final?
          });
        case 2:
          browser = _context4.sent;
          _context4.next = 5;
          return browser.newPage();
        case 5:
          page = _context4.sent;
          _context4.next = 8;
          return page["goto"]('https://example.com/');
        case 8:
          _context4.next = 10;
          return page.evaluate(function () {
            //con evaluate puedo "hacer" codigo dentro de la pagina
            var titulo = document.querySelector('h1').innerText;
            var texto = document.querySelector('p').innerText;
            var info = document.querySelector('a').innerText;
            // dentro de la pagina guardo titulo, texto, info, ahora hago un return para tener esos valores en mi codigo
            return {
              titulo: titulo,
              texto: texto,
              info: info
            }; //con esto result es un objeto
            /*puedo poner en java de esta manera para abreviar ya que tienen el mismo nombre
            return{
                titulo,
                texto,
                info
            }*/
          });
        case 10:
          result = _context4.sent;
          console.log(result);
          _context4.next = 14;
          return browser.close();
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _MostrarElementosdeWeb.apply(this, arguments);
}
function MostrarElementosdeWebComplicado() {
  return _MostrarElementosdeWebComplicado.apply(this, arguments);
} //MostrarElementosdeWebComplicado()
function _MostrarElementosdeWebComplicado() {
  _MostrarElementosdeWebComplicado = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var browser, page, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return puppeteer.launch({
            headless: false,
            slowMo: 600 //cada operacion la relentiza un poco, como hago para ver la pagina final?
          });
        case 2:
          browser = _context5.sent;
          _context5.next = 5;
          return browser.newPage();
        case 5:
          page = _context5.sent;
          _context5.next = 8;
          return page["goto"]('https://quotes.toscrape.com/');
        case 8:
          _context5.next = 10;
          return page.evaluate(function () {
            //con evaluate puedo "hacer" codigo dentro de la pagina
            var titulo = document.querySelector('a').innerText;
            var quotes = document.querySelectorAll(".quote"); //tiene 10 .quotes, asi q hago arreglo
            var data = _toConsumableArray(quotes).map(function (quote) {
              var texto = quote.querySelector(".text").innerText;
              var author = quote.querySelector(".author").innerText;
              var tag = _toConsumableArray(quote.querySelectorAll(".tag")).map(function (tag) {
                return tag.innerText;
              });
              return {
                texto: texto,
                author: author,
                tag: tag
              };
            });
            return data;

            //con esto result es un objeto
            /*puedo poner en java de esta manera para abreviar ya que tienen el mismo nombre
            return{
                titulo,
                texto,
                info
            }*/
          });
        case 10:
          result = _context5.sent;
          console.log(result);
          _context5.next = 14;
          return browser.close();
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _MostrarElementosdeWebComplicado.apply(this, arguments);
}
function MostrarDolar() {
  return _MostrarDolar.apply(this, arguments);
}
function _MostrarDolar() {
  _MostrarDolar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var browser, page, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return puppeteer.launch({
            headless: false,
            slowMo: 600 //cada operacion la relentiza un poco, como hago para ver la pagina final?
          });
        case 2:
          browser = _context6.sent;
          _context6.next = 5;
          return browser.newPage();
        case 5:
          page = _context6.sent;
          _context6.next = 8;
          return page["goto"]('https://www.infodolar.com/');
        case 8:
          _context6.next = 10;
          return page.evaluate(function () {
            //con evaluate puedo "hacer" codigo dentro de la pagina
            var compraVenta = document.querySelectorAll("#DolarPromedio .colCompraVenta"); //tiene 10 .quotes, asi q hago arreglo
            /*const data = [...compraVenta].map((quote) => {
                const columnDolarBlueVenta = compraVenta[1];
                const columnDolarBlueCompra = compraVenta[0];
                return{
                    columnDolarBlueCompra,
                    columnDolarBlueVenta
                }
            });
            return data*/

            //Hay 27 columnas, las primeras dos son del dolar blue
            var columnDolarBlueVenta = compraVenta[1];
            var columnDolarBlueCompra = compraVenta[0];
            var dolarVentaConAumento = columnDolarBlueVenta.innerText; //"$ 1.280,00\n $ 35,00"
            var dolarCompraConAumento = columnDolarBlueCompra.innerText; //"$ 1.260,00\n $ 35,00"
            //cada uno nos da 2 valores, uno del aumento y otro de la compra o venta
            //separo valor del dolar con el aumento o diferencia
            //los seṕaro
            var valoresDolarVenta = dolarVentaConAumento.split("\n");
            var dolarVenta = valoresDolarVenta[0].trim();
            var aumentoVenta = valoresDolarVenta[1].trim();
            var valoresDolarCompra = dolarCompraConAumento.split("\n");
            var dolarCompra = valoresDolarCompra[0].trim();
            var aumentoCompra = valoresDolarCompra[1].trim();
            return {
              dolarCompra: dolarCompra,
              aumentoCompra: aumentoCompra,
              dolarVenta: dolarVenta,
              aumentoVenta: aumentoVenta
            };
            //con esto result es un objeto
          });
        case 10:
          result = _context6.sent;
          _context6.next = 13;
          return page.screenshot({
            path: 'DolarHoyDia.png'
          });
        case 13:
          console.log(result);
          _context6.next = 16;
          return browser.close();
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _MostrarDolar.apply(this, arguments);
}
MostrarDolar();
global.MostrarDolar = MostrarDolar;
module.exports = {
  MostrarDolar: MostrarDolar
};
