(() => {
  "use strict";
  var n = {
      808: (n, e, t) => {
        t.d(e, { Z: () => d });
        var o = t(81),
          r = t.n(o),
          i = t(645),
          a = t.n(i)()(r());
        a.push([
          n.id,
          '/*\n! tailwindcss v3.0.22 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n.col-start-1 {\n  grid-column-start: 1;\n}\n.col-start-2 {\n  grid-column-start: 2;\n}\n.m-2 {\n  margin: 0.5rem;\n}\n.m-4 {\n  margin: 1rem;\n}\n.m-5 {\n  margin: 1.25rem;\n}\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-screen {\n  height: 100vh;\n}\n.w-32 {\n  width: 8rem;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-full {\n  width: 100%;\n}\n.w-24 {\n  width: 6rem;\n}\n.resize-none {\n  resize: none;\n}\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.grid-flow-row {\n  grid-auto-flow: row;\n}\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-cols-\\[1fr_4fr\\] {\n  grid-template-columns: 1fr 4fr;\n}\n.grid-cols-\\[4fr_1fr\\] {\n  grid-template-columns: 4fr 1fr;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-\\[1fr_2fr_1fr_1fr\\] {\n  grid-template-rows: 1fr 2fr 1fr 1fr;\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.content-start {\n  align-content: flex-start;\n}\n.justify-evenly {\n  justify-content: space-evenly;\n}\n.justify-items-center {\n  justify-items: center;\n}\n.gap-0 {\n  gap: 0px;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.divide-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(2px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(2px * var(--tw-divide-y-reverse));\n}\n.divide-cyan-200 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(165 243 252 / var(--tw-divide-opacity));\n}\n.place-self-end {\n  place-self: end;\n}\n.place-self-center {\n  place-self: center;\n}\n.self-center {\n  align-self: center;\n}\n.justify-self-start {\n  justify-self: start;\n}\n.justify-self-end {\n  justify-self: end;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-cyan-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(165 243 252 / var(--tw-border-opacity));\n}\n.bg-cyan-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(6 182 212 / var(--tw-bg-opacity));\n}\n.bg-cyan-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 211 238 / var(--tw-bg-opacity));\n}\n.bg-cyan-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(103 232 249 / var(--tw-bg-opacity));\n}\n.bg-cyan-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(8 145 178 / var(--tw-bg-opacity));\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-cyan-100 {\n  --tw-text-opacity: 1;\n  color: rgb(207 250 254 / var(--tw-text-opacity));\n}\n.hover\\:bg-cyan-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(14 116 144 / var(--tw-bg-opacity));\n}\n.focus\\:border-cyan-200:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(165 243 252 / var(--tw-border-opacity));\n}\n.focus\\:bg-cyan-400:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 211 238 / var(--tw-bg-opacity));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}',
          "",
        ]);
        const d = a;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  o && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, o, r, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (o)
                for (var d = 0; d < this.length; d++) {
                  var s = this[d][0];
                  null != s && (a[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var c = [].concat(n[l]);
                (o && a[c[0]]) ||
                  (void 0 !== i &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = i)),
                  t &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = t))
                      : (c[2] = t)),
                  r &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = r))
                      : (c[4] = "".concat(r))),
                  e.push(c));
              }
            }),
            e
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var i = {}, a = [], d = 0; d < n.length; d++) {
            var s = n[d],
              l = o.base ? s[0] + o.base : s[0],
              c = i[l] || 0,
              u = "".concat(l, " ").concat(c);
            i[l] = c + 1;
            var p = t(u),
              m = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(m);
            else {
              var g = r(m, o);
              (o.byIndex = d),
                e.splice(d, 0, { identifier: u, updater: g, references: 1 });
            }
            a.push(u);
          }
          return a;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var i = o((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var d = t(i[a]);
              e[d].references--;
            }
            for (var s = o(n, r), l = 0; l < i.length; l++) {
              var c = t(i[l]);
              0 === e[c].references && (e[c].updater(), e.splice(c, 1));
            }
            i = s;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { id: o, exports: {} });
    return n[o](i, i.exports, t), i.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      const n = (n, e, t, o, r) => ({
          getTitle: () => n,
          getDescription: () => e,
          getDueDate: () => t,
          getPriority: () => o,
          setTitle: (e) => {
            n = e;
          },
          setDescription: (n) => {
            e = n;
          },
          setDueDate: (n) => {
            t = n;
          },
          setPriority: (n) => {
            o = n;
          },
        }),
        e = (n) => {
          let e = [],
            t = n;
          return {
            getName: () => t,
            getTodoList: () => e,
            addTodo: (n) => {
              e.push(n);
            },
            removeTodo: (n) => {
              e.splice(n, 1);
            },
          };
        },
        o = (function () {
          document.getElementById("content");
          const n = document.getElementById("list"),
            e = document.getElementById("nav"),
            t = document.getElementById("projectLabel");
          function o(e, t) {
            let o = document.createElement("div");
            o.classList.add(
              "bg-cyan-400",
              "grid",
              "grid-flow-col",
              "grid-cols-4"
            );
            let r = document.createElement("button");
            (r.innerText = "Done"),
              (r.id = t),
              r.classList.add(
                "done-button",
                "bg-cyan-500",
                "hover:bg-cyan-700",
                "text-white",
                "font-bold",
                "py-2",
                "px-4",
                "rounded-full",
                "justify-self-start",
                "m-4"
              ),
              o.appendChild(r);
            let i = document.createElement("div");
            (i.innerText = e.getTitle()),
              i.classList.add("self-center", "align-start"),
              o.appendChild(i);
            let a = document.createElement("div");
            a.classList.add("self-center"),
              (a.innerText = e.getDueDate()),
              o.appendChild(a);
            let d = document.createElement("button");
            (d.innerText = "Edit"),
              d.classList.add(
                "edit-button",
                "bg-cyan-500",
                "hover:bg-cyan-700",
                "text-white",
                "font-bold",
                "py-2",
                "px-4",
                "rounded-full",
                "justify-self-end",
                "m-4"
              ),
              o.appendChild(d),
              n.appendChild(o);
          }
          return {
            addTodo: o,
            updateTodoList: function (e) {
              n.innerText = "";
              for (let n = 0; n < e.length; n++) o(e[n], n);
            },
            addProject: function (n) {
              let t = document.createElement("button");
              t.classList.add(
                "overflow-hidden",
                "bg-cyan-500",
                "hover:bg-cyan-700",
                "text-white",
                "font-bold",
                "py-2",
                "px-4",
                "rounded-full",
                "m-2",
                "w-32"
              ),
                (t.id = n),
                (t.innerHTML = n),
                e.appendChild(t);
            },
            removeProject: function (n) {
              let t = document.getElementById(n);
              e.removeChild(t);
            },
            updateProjectLabel: function (n) {
              t.innerHTML = n;
            },
          };
        })();
      var r = t(379),
        i = t.n(r),
        a = t(795),
        d = t.n(a),
        s = t(569),
        l = t.n(s),
        c = t(565),
        u = t.n(c),
        p = t(216),
        m = t.n(p),
        g = t(589),
        f = t.n(g),
        h = t(808),
        b = {};
      (b.styleTagTransform = f()),
        (b.setAttributes = u()),
        (b.insert = l().bind(null, "head")),
        (b.domAPI = d()),
        (b.insertStyleElement = m()),
        i()(h.Z, b),
        h.Z && h.Z.locals && h.Z.locals;
      (function () {
        const t = document.getElementById("addTodo"),
          r = document.getElementById("confirmButton"),
          i = document.getElementById("todoDialog"),
          a = document.getElementById("todoTitleInput"),
          d = document.getElementById("todoDescriptionInput"),
          s = document.getElementById("todoDateInput"),
          l = document.getElementById("editTodoDialog"),
          c = document.getElementById("editTodoTitleInput"),
          u = document.getElementById("editTodoDescriptionInput"),
          p = document.getElementById("editTodoDateInput"),
          m = document.getElementById("confirmEditButton"),
          g = document.getElementById("indexOfTodo"),
          f = document.getElementById("newProjectDialog"),
          h = document.getElementById("newProjectInput"),
          b = document.getElementById("newProjectButton"),
          y = document.getElementById("confirmNewProjectButton"),
          w = document.getElementById("remove-project-button"),
          v = document.getElementById("projectLabel"),
          x = document.getElementById("Inbox"),
          T = (() => {
            let n = [];
            const e = (e) => {
              for (let t = 0; t < n.length; t++)
                if (n[t].getName() === e) return t;
              return "no match";
            };
            return {
              getTodoLists: () => n,
              addTodoList: (e) => {
                n.push(e);
              },
              removeTodoList: (t) => {
                n.splice(e(t), 1);
              },
              getTodoListByName: (t) => ("no match" === e(t) ? null : n[e(t)]),
            };
          })(),
          E = e("Inbox"),
          L = e("new");
        T.addTodoList(E), T.addTodoList(L);
        let k = T.getTodoLists()[1];
        const I = n(
          "Local storage",
          "A description once again again",
          "date",
          "high"
        );
        k.addTodo(I);
        const z = n(
          "Priority added",
          "A description once again again",
          "date",
          "high"
        );
        k.addTodo(z);
        const C = n(
          "Final tweak",
          "A description once again again",
          "date",
          "high"
        );
        function j() {
          o.updateTodoList(k.getTodoList()),
            o.updateProjectLabel(k.getName()),
            (function () {
              let n = document.getElementsByClassName("done-button");
              for (let e = 0; e < n.length; e++)
                n[e].addEventListener("click", (n) => {
                  k.removeTodo(n.target.id), j();
                });
            })(),
            (function () {
              let n = document.getElementsByClassName("edit-button");
              for (let e = 0; e < n.length; e++)
                n[e].addEventListener("click", (n) => {
                  "function" == typeof l.showModal
                    ? ((c.value = k.getTodoList()[e].getTitle()),
                      (u.value = k.getTodoList()[e].getDescription()),
                      (p.value = k.getTodoList()[e].getDueDate()),
                      (g.value = e),
                      l.showModal())
                    : alert(
                        "The <dialog> API is not supported by this browser"
                      );
                });
            })();
        }
        function B(n) {
          document.getElementById(n).addEventListener("click", (n) => {
            (k = T.getTodoListByName(n.target.id)), j();
          });
        }
        return (
          k.addTodo(C),
          B("new"),
          t.addEventListener("click", function () {
            "function" == typeof i.showModal
              ? i.showModal()
              : alert("The <dialog> API is not supported by this browser");
          }),
          r.addEventListener("click", () => {
            let e = n(a.value, d.value, s.value, "high");
            k.addTodo(e), (a.value = ""), j();
          }),
          m.addEventListener("click", () => {
            k.getTodoList()[g.value].setTitle(c.value),
              k.getTodoList()[g.value].setDescription(u.value),
              k.getTodoList()[g.value].setDueDate(p.value),
              j();
          }),
          b.addEventListener("click", function () {
            "function" == typeof f.showModal
              ? f.showModal()
              : alert("The <dialog> API is not supported by this browser");
          }),
          y.addEventListener("click", () => {
            o.addProject(h.value), B(h.value);
            let n = e(h.value);
            T.addTodoList(n), (h.value = "");
          }),
          x.addEventListener("click", () => {
            (k = T.getTodoListByName("Inbox")), j();
          }),
          w.addEventListener("click", () => {
            "Inbox" !== v.innerHTML &&
              (o.removeProject(k.getName()),
              T.removeTodoList(k.getName()),
              o.updateProjectLabel("Inbox"),
              (k = T.getTodoListByName("Inbox")),
              j());
          }),
          { renderTodoList: j }
        );
      })().renderTodoList();
    })();
})();
