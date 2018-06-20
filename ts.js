(function(b) {
    function e(g) {
        if (a[g])
            return a[g].exports;
        var l = a[g] = {
            i: g,
            l: !1,
            exports: {}
        };
        b[g].call(l.exports, l, l.exports, e);
        l.l = !0;
        return l.exports
    }
    var a = {};
    e.m = b;
    e.c = a;
    e.d = function(g, a, f) {
        e.o(g, a) || Object.defineProperty(g, a, {
            configurable: !1,
            enumerable: !0,
            get: f
        })
    }
    ;
    e.n = function(g) {
        var a = g && g.__esModule ? function() {
            return g["default"]
        }
        : function() {
            return g
        }
        ;
        e.d(a, "a", a);
        return a
    }
    ;
    e.o = function(a, l) {
        return Object.prototype.hasOwnProperty.call(a, l)
    }
    ;
    e.p = "//vr0.6rooms.com/tao/v11/";
    return e(e.s = "sZR/")
}
)({
    "+itZ": function(b, e, a) {
        a.d(e, "q", function() {
            return g
        });
        a.d(e, "p", function() {
            return l
        });
        a.d(e, "j", function() {
            return f
        });
        a.d(e, "i", function() {
            return c
        });
        a.d(e, "h", function() {
            return n
        });
        a.d(e, "g", function() {
            return d
        });
        a.d(e, "f", function() {
            return h
        });
        a.d(e, "e", function() {
            return k
        });
        a.d(e, "m", function() {
            return m
        });
        a.d(e, "l", function() {
            return B
        });
        a.d(e, "k", function() {
            return r
        });
        a.d(e, "b", function() {
            return t
        });
        a.d(e, "a", function() {
            return p
        });
        a.d(e, "c", function() {
            return u
        });
        a.d(e, "d", function() {
            return v
        });
        a.d(e, "s", function() {
            return y
        });
        a.d(e, "n", function() {
            return F
        });
        a.d(e, "r", function() {
            return Z
        });
        a.d(e, "t", function() {
            return O
        });
        a.d(e, "o", function() {
            return A
        });
        var g = [{
            text: "\u5e93\u5b58",
            inventory: 1
        }, {
            text: "\u521d\u7ea7",
            flag: 1
        }, {
            text: "\u4e2d\u7ea7",
            flag: 2
        }, {
            text: "\u9ad8\u7ea7",
            flag: 3
        }, {
            text: "\u8c6a\u534e",
            flag: 4
        }, {
            text: "\u7279\u6b8a",
            flag: 5
        }, {
            text: "\u8da3\u5473",
            flag: 6
        }, {
            text: "\u4f34\u821e",
            flag: 7
        }, {
            text: "\u8d35\u65cf",
            flag: 8
        }, {
            text: "\u5957\u793c",
            flag: 9
        }, {
            text: "\u5b88\u62a4",
            flag: 10
        }]
          , l = [["1\u4e2a", "1"], ["5\u4e2a", "5"], ["10\u4e2a", "10"], ["20\u4e2a", "20"], ["V(50\u4e2a)", "50"], ["\u5fc3(99\u4e2a)", "99"], ["\u7b11\u8138(100\u4e2a)", "100"], ["LOVE(300\u4e2a)", "300"], ["\u7231\u4e4b\u7bad(520\u4e2a)", "520"], ["\u6bd4\u7ffc\u53cc\u98de(999\u4e2a)", "999"], ["\u4e00\u751f\u4e00\u4e16(1314\u4e2a)", "1314"], ["\u751f\u751f\u4e16\u4e16(3344\u4e2a)", "3344"]]
          , f = "//vr0.6rooms.com/img/emotion"
          , c = [32, 32]
          , n = {
            0: "/\u72c2\u7b11",
            1: "/\u5927\u7b11",
            2: "/\u60ca\u8bb6",
            3: "/\u5bb3\u7f9e",
            4: "/\u7a83\u7b11",
            5: "/\u53d1\u6012",
            6: "/\u5927\u54ed",
            7: "/\u8272\u8272",
            8: "/\u574f\u7b11",
            9: "/\u706b\u5927",
            10: "/\u6c57",
            11: "/\u5978\u7b11",
            12: "/\u6b22\u8fce",
            13: "/\u518d\u89c1",
            14: "/\u767d\u773c",
            15: "/\u6316\u9f3b",
            16: "/\u9876",
            17: "/\u80dc\u5229",
            18: "/\u6b27\u8036",
            19: "/\u62b1\u62f3",
            20: "/\u56e7",
            21: "/\u6de1\u5b9a",
            22: "/\u7f8e\u5973",
            23: "/\u9753\u4ed4",
            24: "/\u795e\u9a6c",
            25: "/\u5f00\u5fc3",
            26: "/\u7ed9\u529b",
            27: "/\u98de\u543b",
            28: "/\u7728\u773c",
            29: "/V5",
            30: "/\u6765\u5427",
            31: "/\u56f4\u89c2",
            32: "/\u98d8\u8fc7",
            33: "/\u5730\u96f7",
            34: "/\u83dc\u5200",
            35: "/\u5e05",
            36: "/\u5ba1\u89c6",
            37: "/\u65e0\u8bed",
            38: "/\u65e0\u5948",
            39: "/\u4eb2\u4eb2",
            40: "/\u52fe\u5f15",
            41: "/\u540e\u540e",
            42: "/\u5410\u8840",
            44: "/\u5a9a\u773c",
            45: "/\u6101\u4eba",
            46: "/\u80bf\u4e48\u4e86",
            47: "/\u8c03\u620f",
            48: "/\u62bd",
            49: "/\u54fc\u54fc",
            50: "/bs",
            52: "/\u9e21\u51bb",
            53: "/\u773c\u998b",
            54: "/\u70ed\u6c57",
            55: "/\u8f93",
            56: "/\u77f3\u5316",
            57: "/\u8511\u89c6",
            58: "/\u54ed",
            59: "/\u9a82"
        }
          , d = "//vr0.6rooms.com/img/emotion-guard"
          , h = [56, 59.5]
          , k = {
            10: "/\u88ab\u6241",
            11: "/\u53d8\u8138",
            12: "/\u5403\u996d",
            13: "/\u5439\u88d9\u5b50",
            14: "/\u6253\u52ab",
            15: "/\u61a8\u7b11",
            16: "/\u6cea\u6d41\u6ee1\u9762",
            17: "/\u50bb\u7b11",
            18: "/\u60ca\u5413",
            19: "/\u60ca\u6050",
            20: "/\u597d\u56e7",
            21: "/\u8e72\u5899\u89d2",
            22: "/\u53ef\u7231",
            23: "/\u59d4\u5c48\u843d\u6cea",
            24: "/\u62a0\u9f3b",
            25: "/\u4eb2\u4e00\u4e2a",
            26: "/\u8272\u8ff7\u8ff7",
            27: "/\u95ea\u95ea\u53d1\u5149",
            28: "/\u8650",
            29: "/\u5e78\u798f",
            30: "/\u88c5\u5e05",
            31: "/\u62cd\u7816",
            32: "/\u5de6\u5410",
            33: "/\u53f3\u5410",
            34: "/\u5de6\u95ea",
            35: "/\u53f3\u8eb2",
            0: "/\u767d\u5bcc\u7f8e",
            1: "/\u5fc3\u52a8\u7684\u611f\u89c9",
            2: "/\u5144\u5f1f\u4eec\u4e0a",
            3: "/\u6c42\u4ea4\u5f80",
            4: "/\u5ac1\u7ed9\u6211\u5427",
            5: "/\u5728\u4e00\u8d77",
            6: "/\u770b\u597d\u8001\u5a46",
            7: "/\u597d\u57fa\u53cb",
            8: "/\u5c4c\u7206\u4e86",
            9: "/\u8d70\u4f60"
        }
          , m = "//vr0.6rooms.com/img/emotion-vip"
          , B = [84, 17]
          , r = {
            0: "/\u55e8\u8d77\u6765",
            1: "/\u771f\u597d\u542c",
            2: "/\u9738\u6c14",
            3: "/\u7ea2\u5305\u5237\u8d77\u6765",
            4: "/\u592a\u6f02\u4eae\u4e86",
            5: "/\u9a6c\u4e0a\u6295\u7968",
            6: "/\u73ab\u7470\u5728\u54ea\u91cc",
            7: "/\u571f\u8c6a\u6765\u5566",
            8: "/\u7231\u6b7b\u4f60\u4e86",
            9: "/\u5575\u4e00\u4e2a",
            10: "/\u65b0\u8d27\u6c42\u5173\u6ce8",
            11: "/\u8981\u62b1\u62b1",
            12: "/\u5192\u4e2a\u6ce1",
            13: "/\u6709\u9ed1\u5e55",
            14: "/\u7231\u4f601314",
            15: "/\u597d\u751c\u5440",
            16: "/\u5751\u7239",
            17: "/\u5973\u6c49\u5b50",
            18: "/\u9f13\u638c",
            19: "/\u52a0\u6cb9",
            20: "/\u5929\u7136\u5446",
            21: "/\u8d5e"
        }
          , t = "\u62db\u5546\u94f6\u884c \u4e2d\u56fd\u5de5\u5546\u94f6\u884c \u4e2d\u56fd\u519c\u4e1a\u94f6\u884c \u4e2d\u56fd\u5efa\u8bbe\u94f6\u884c \u4ea4\u901a\u94f6\u884c \u4e0a\u6d77\u6d66\u4e1c\u53d1\u5c55\u94f6\u884c \u4e2d\u56fd\u6c11\u751f\u94f6\u884c \u5149\u5927\u94f6\u884c \u5174\u4e1a\u94f6\u884c \u5e7f\u53d1\u94f6\u884c \u5e73\u5b89\u94f6\u884c \u4e2d\u56fd\u94f6\u884c \u4e2d\u4fe1\u94f6\u884c \u534e\u590f\u94f6\u884c \u4e0a\u6d77\u94f6\u884c \u83b1\u5546\u94f6\u884c \u5e7f\u4e1c\u5357\u7ca4\u94f6\u884c \u91d1\u534e\u94f6\u884c \u5b81\u590f\u94f6\u884c \u664b\u4e2d\u94f6\u884c \u65e5\u7167\u94f6\u884c \u629a\u987a\u94f6\u884c \u519c\u6751\u4fe1\u7528\u5408\u4f5c\u793e \u5176\u4ed6".split(" ")
          , p = "allowEdit"
          , u = "denyEdit"
          , v = "denyEditIfExit"
          , y = "_null_"
          , F = [463]
          , Z = 44
          , O = 58
          , A = /^(?:1[3-8]\d)\d{5}(\d{3}|\*{3})$/
    },
    "+z1K": function(b, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            randrange: function(a, l) {
                return a + Math.floor(Math.random() * (l - a))
            },
            shuffleArray: function(a) {
                for (var l = a.length, f, c; l; )
                    c = Math.floor(Math.random() * l--),
                    f = a[l],
                    a[l] = a[c],
                    a[c] = f;
                return a
            }
        }
    },
    "592r": function(b, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        b = (b = a("vzCy")) && b.__esModule ? b : {
            default: b
        };
        a = a("agns");
        var g = function f(c, a) {
            f.superclass.constructor.call(this);
            this.onOpen = this.onOpen.bind(this);
            this.onClose = this.onClose.bind(this);
            this.onMessage = this.onMessage.bind(this);
            this.onError = this.onError.bind(this);
            this._core = null;
            this._queue = [];
            c && this.connect(c, a)
        };
        (0,
        a.extend)(g, b.default, {
            connect: function(f, c) {
                if ("WebSocket"in self) {
                    this._core && (this.cleanQueue(),
                    this.destroyCore());
                    var a = c ? new self.WebSocket(f,c) : new self.WebSocket(f);
                    a.onopen = this.onOpen;
                    a.onclose = this.onClose;
                    a.onmessage = this.onMessage;
                    a.onerror = this.onError;
                    this.url = a.url;
                    this.protocol = a.protocol;
                    this._core = a
                } else
                    this.emit("nonsupport")
            },
            send: function(f) {
                this.isOpen() ? (this._core.send(f),
                this.emit("send", f)) : this._queue.push(f)
            },
            close: function() {
                this.destroyCore();
                this.cleanQueue()
            },
            sendQueue: function() {
                for (var f = this._queue, c; c = f.shift(); )
                    this._core.send(c),
                    this.emit("send", c)
            },
            destroyCore: function() {
                var f = this._core;
                f && (f.onopen = f.onmessage = f.onclose = f.onerror = null,
                f.close(),
                this._core = null)
            },
            cleanQueue: function() {
                this._queue = []
            },
            onOpen: function(f) {
                this.emit("open", f);
                this.sendQueue()
            },
            onClose: function(f) {
                this.emit("close", f)
            },
            onMessage: function(f) {
                this.emit("message", f.data, f)
            },
            onError: function(f) {
                this.emit("error", f)
            },
            isConnecting: function() {
                return this._core && 0 == this._core.readyState
            },
            isOpen: function() {
                return this._core && 1 == this._core.readyState
            },
            isClosing: function() {
                return this._core && 2 == this._core.readyState
            },
            isClosed: function() {
                return !this._core || 3 == this._core.readyState
            }
        });
        e.default = g
    },
    CPiQ: function(b, e, a) {
        b = function() {
            this.uid = this.ticket = "";
            this.userInfo = null;
            self.addEventListener("message", this._messageHanlder.bind(this))
        }
        ;
        b.prototype = {
            isLogin: function() {
                return !!this.ticket
            },
            _messageHanlder: function(a) {
                a = JSON.parse(a.data);
                var l = a.content;
                "user-state-update" == a.cmd && (this.ticket = l.ticket,
                this.uid = l.uid,
                this.userInfo = l.userInfo)
            }
        };
        e.a = new b
    },
    Jvqk: function(b, e, a) {
        b = a("agns");
        a.n(b);
        var g = a("+z1K")
          , l = a.n(g)
          , f = a("fiJj")
          , c = a("zx4i")
          , n = a("kFTT")
          , d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(c) {
            return typeof c
        }
        : function(c) {
            return c && "function" === typeof Symbol && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
        }
          , h = function() {
            return function(c, d) {
                if (Array.isArray(c))
                    return c;
                if (Symbol.iterator in Object(c)) {
                    var f = []
                      , a = !0
                      , h = !1
                      , n = void 0;
                    try {
                        for (var g = c[Symbol.iterator](), l; !(a = (l = g.next()).done) && (f.push(l.value),
                        !d || f.length !== d); a = !0)
                            ;
                    } catch (e) {
                        h = !0,
                        n = e
                    } finally {
                        try {
                            if (!a && g["return"])
                                g["return"]()
                        } finally {
                            if (h)
                                throw n;
                        }
                    }
                    return f
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        }();
        a = function m() {
            m.superclass.constructor.call(this);
            this._addressPool = [];
            this._addressPoolIndex = 0;
            this._authKey = "";
            this._waitQueue = [];
            this._onGlobalBatchMessage = this._onGlobalBatchMessage.bind(this)
        }
        ;
        Object(b.extend)(a, c.a, {
            getAddressPool: function() {
                var c = this
                  , d = this._loginData;
                return Object(f.b)("coop-mobile-chatConf.php", {
                    type: "chat",
                    ruid: d.roomid,
                    uid: d.uid
                }).then(function(d) {
                    if ("001" == d.flag)
                        return c._addressPool = l.a.shuffleArray(d.content.websock),
                        c._addressPool;
                    throw Error(d.content);
                })
            },
            getAddress: function() {
                var c = this._addressPool;
                return c[this._addressPoolIndex++ % c.length]
            },
            onReceiveMessage: function(c) {
                if ("001" != c.flag)
                    this.emit("receiveerr", c),
                    this.emit("receiveerr:" + c.flag, c);
                else {
                    var d = c.content;
                    this._emitReceiveEvent(d);
                    if (408 == d.typeID || 404 == d.typeID)
                        this._authKey = (d.content["404"] ? d.content["404"].content : d.content).authKey,
                        this._dumpWaitQueue();
                    if (1413 == d.typeID)
                        for (var a = d.content, h = 0; h < a.length; h++)
                            this._emitReceiveEvent(a[h]);
                    416 == d.typeID && Object(f.b)("room-getRoomMsgSys.php", {
                        t: c.content.content
                    }).then(this._onGlobalBatchMessage)
                }
                701 == c.content.typeID && (this.emit("receiveres", c.content.content),
                this.emit("receiveres:" + c.content.content.t, c.content.content))
            },
            sendMsg: function(d, f) {
                this._authKey || "priv_info" == d ? c.a.prototype.sendMsg.call(this, d, f) : this._waitQueue.push([d, f])
            },
            close: function() {
                this._authKey = "";
                this._waitQueue = [];
                c.a.prototype.close.call(this)
            },
            _emitReceiveEvent: function(c) {
                n.a.filter(c) && this.emit("receive:" + c.typeID, c)
            },
            _onGlobalBatchMessage: function(c) {
                for (var d = 0; d < c.content.length; d++)
                    this._emitReceiveEvent(c.content[d])
            },
            _dumpWaitQueue: function() {
                for (var c; c = this._waitQueue.shift(); ) {
                    var f = h(c, 2);
                    c = f[0];
                    (f = f[1]) && "object" == ("undefined" === typeof f ? "undefined" : d(f)) && (f.ak = f.ak || this._authKey);
                    this.sendMsg(c, f)
                }
            }
        });
        e.a = new a
    },
    "Qfv+": function(b, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var g, l, f = null, c, n, d, h, k, m, B, r, t, p, u, v, y, F, Z, O = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], A = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], K = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], q = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], S = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], N = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], C = function() {
            this.list = this.next = null
        }, da = function() {
            this.n = this.b = this.e = 0;
            this.t = null
        }, W = function(c, d, f, a, h, n) {
            this.BMAX = 16;
            this.N_MAX = 288;
            this.status = 0;
            this.root = null;
            this.m = 0;
            var g = Array(this.BMAX + 1), m, l, e, p, k, b, r, t = Array(this.BMAX + 1), u, B, v, q = new da, w = Array(this.BMAX);
            p = Array(this.N_MAX);
            var y, z = Array(this.BMAX + 1), A, F, G;
            G = this.root = null;
            for (k = 0; k < g.length; k++)
                g[k] = 0;
            for (k = 0; k < t.length; k++)
                t[k] = 0;
            for (k = 0; k < w.length; k++)
                w[k] = null;
            for (k = 0; k < p.length; k++)
                p[k] = 0;
            for (k = 0; k < z.length; k++)
                z[k] = 0;
            m = 256 < d ? c[256] : this.BMAX;
            u = c;
            B = 0;
            k = d;
            do
                g[u[B]]++,
                B++;
            while (0 < --k);if (g[0] == d)
                this.root = null,
                this.status = this.m = 0;
            else {
                for (b = 1; b <= this.BMAX && 0 == g[b]; b++)
                    ;
                r = b;
                n < b && (n = b);
                for (k = this.BMAX; 0 != k && 0 == g[k]; k--)
                    ;
                e = k;
                n > k && (n = k);
                for (A = 1 << b; b < k; b++,
                A <<= 1)
                    if (0 > (A -= g[b])) {
                        this.status = 2;
                        this.m = n;
                        return
                    }
                if (0 > (A -= g[k]))
                    this.status = 2,
                    this.m = n;
                else {
                    g[k] += A;
                    z[1] = b = 0;
                    u = g;
                    B = 1;
                    for (v = 2; 0 < --k; )
                        z[v++] = b += u[B++];
                    u = c;
                    k = B = 0;
                    do
                        0 != (b = u[B++]) && (p[z[b]++] = k);
                    while (++k < d);d = z[e];
                    z[0] = k = 0;
                    u = p;
                    B = 0;
                    p = -1;
                    y = t[0] = 0;
                    v = null;
                    for (F = 0; r <= e; r++)
                        for (c = g[r]; 0 < c--; ) {
                            for (; r > y + t[1 + p]; ) {
                                y += t[1 + p];
                                p++;
                                F = (F = e - y) > n ? n : F;
                                if ((l = 1 << (b = r - y)) > c + 1)
                                    for (l -= c + 1,
                                    v = r; ++b < F && !((l <<= 1) <= g[++v]); )
                                        l -= g[v];
                                y + b > m && y < m && (b = m - y);
                                F = 1 << b;
                                t[1 + p] = b;
                                v = Array(F);
                                for (l = 0; l < F; l++)
                                    v[l] = new da;
                                G = null == G ? this.root = new C : G.next = new C;
                                G.next = null;
                                G.list = v;
                                w[p] = v;
                                0 < p && (z[p] = k,
                                q.b = t[p],
                                q.e = 16 + b,
                                q.t = v,
                                b = (k & (1 << y) - 1) >> y - t[p],
                                w[p - 1][b].e = q.e,
                                w[p - 1][b].b = q.b,
                                w[p - 1][b].n = q.n,
                                w[p - 1][b].t = q.t)
                            }
                            q.b = r - y;
                            B >= d ? q.e = 99 : u[B] < f ? (q.e = 256 > u[B] ? 16 : 15,
                            q.n = u[B++]) : (q.e = h[u[B] - f],
                            q.n = a[u[B++] - f]);
                            l = 1 << r - y;
                            for (b = k >> y; b < F; b += l)
                                v[b].e = q.e,
                                v[b].b = q.b,
                                v[b].n = q.n,
                                v[b].t = q.t;
                            for (b = 1 << r - 1; 0 != (k & b); b >>= 1)
                                k ^= b;
                            for (k ^= b; (k & (1 << y) - 1) != z[p]; )
                                y -= t[p],
                                p--
                        }
                    this.m = t[1];
                    this.status = 0 != A && 1 != e ? 1 : 0
                }
            }
        }, z = function(c) {
            for (; k < c; ) {
                var d = h, f;
                f = F.length == Z ? -1 : F.charCodeAt(Z++) & 255;
                h = d | f << k;
                k += 8
            }
        }, G = function(c) {
            return h & O[c]
        }, w = function(c) {
            h >>= c;
            k -= c
        }, L = function(c, d, f) {
            var a, h, k;
            if (0 == f)
                return 0;
            for (k = 0; ; ) {
                z(v);
                h = p.list[G(v)];
                for (a = h.e; 16 < a; ) {
                    if (99 == a)
                        return -1;
                    w(h.b);
                    a -= 16;
                    z(a);
                    h = h.t[G(a)];
                    a = h.e
                }
                w(h.b);
                if (16 == a)
                    l &= 32767,
                    c[d + k++] = g[l++] = h.n;
                else {
                    if (15 == a)
                        break;
                    z(a);
                    r = h.n + G(a);
                    w(a);
                    z(y);
                    h = u.list[G(y)];
                    for (a = h.e; 16 < a; ) {
                        if (99 == a)
                            return -1;
                        w(h.b);
                        a -= 16;
                        z(a);
                        h = h.t[G(a)];
                        a = h.e
                    }
                    w(h.b);
                    z(a);
                    t = l - h.n - G(a);
                    for (w(a); 0 < r && k < f; )
                        r--,
                        t &= 32767,
                        l &= 32767,
                        c[d + k++] = g[l++] = g[t++]
                }
                if (k == f)
                    return f
            }
            m = -1;
            return k
        }, R = function(c, d, f) {
            var a, h, k, n, b, g, l, m = Array(316);
            for (a = 0; a < m.length; a++)
                m[a] = 0;
            z(5);
            g = 257 + G(5);
            w(5);
            z(5);
            l = 1 + G(5);
            w(5);
            z(4);
            a = 4 + G(4);
            w(4);
            if (286 < g || 30 < l)
                return -1;
            for (h = 0; h < a; h++)
                z(3),
                m[N[h]] = G(3),
                w(3);
            for (; 19 > h; h++)
                m[N[h]] = 0;
            v = 7;
            h = new W(m,19,19,null,null,v);
            if (0 != h.status)
                return -1;
            p = h.root;
            v = h.m;
            n = g + l;
            for (a = k = 0; a < n; )
                if (z(v),
                b = p.list[G(v)],
                h = b.b,
                w(h),
                h = b.n,
                16 > h)
                    m[a++] = k = h;
                else if (16 == h) {
                    z(2);
                    h = 3 + G(2);
                    w(2);
                    if (a + h > n)
                        return -1;
                    for (; 0 < h--; )
                        m[a++] = k
                } else {
                    17 == h ? (z(3),
                    h = 3 + G(3),
                    w(3)) : (z(7),
                    h = 11 + G(7),
                    w(7));
                    if (a + h > n)
                        return -1;
                    for (; 0 < h--; )
                        m[a++] = 0;
                    k = 0
                }
            v = 9;
            h = new W(m,g,257,A,K,v);
            0 == v && (h.status = 1);
            if (0 != h.status)
                return -1;
            p = h.root;
            v = h.m;
            for (a = 0; a < l; a++)
                m[a] = m[a + g];
            y = 6;
            h = new W(m,l,0,q,S,y);
            u = h.root;
            y = h.m;
            return 0 == y && 257 < g || 0 != h.status ? -1 : L(c, d, f)
        }, X = function(a, b, e) {
            var D, E;
            for (D = 0; D < e && (!B || -1 != m); ) {
                if (0 < r) {
                    if (0 != m)
                        for (; 0 < r && D < e; )
                            r--,
                            t &= 32767,
                            l &= 32767,
                            a[b + D++] = g[l++] = g[t++];
                    else {
                        for (; 0 < r && D < e; )
                            r--,
                            l &= 32767,
                            z(8),
                            a[b + D++] = g[l++] = G(8),
                            w(8);
                        0 == r && (m = -1)
                    }
                    if (D == e)
                        break
                }
                if (-1 == m) {
                    if (B)
                        break;
                    z(1);
                    0 != G(1) && (B = !0);
                    w(1);
                    z(2);
                    m = G(2);
                    w(2);
                    p = null;
                    r = 0
                }
                switch (m) {
                case 0:
                    E = a;
                    var F = b + D
                      , C = e - D
                      , H = void 0
                      , H = k & 7;
                    w(H);
                    z(16);
                    H = G(16);
                    w(16);
                    z(16);
                    if (H != (~h & 65535))
                        E = -1;
                    else {
                        w(16);
                        r = H;
                        for (H = 0; 0 < r && H < C; )
                            r--,
                            l &= 32767,
                            z(8),
                            E[F + H++] = g[l++] = G(8),
                            w(8);
                        0 == r && (m = -1);
                        E = H
                    }
                    break;
                case 1:
                    if (null != p)
                        E = L(a, b + D, e - D);
                    else
                        a: {
                            E = a;
                            F = b + D;
                            C = e - D;
                            if (null == f) {
                                for (var x = void 0, H = Array(288), x = void 0, x = 0; 144 > x; x++)
                                    H[x] = 8;
                                for (; 256 > x; x++)
                                    H[x] = 9;
                                for (; 280 > x; x++)
                                    H[x] = 7;
                                for (; 288 > x; x++)
                                    H[x] = 8;
                                n = 7;
                                x = new W(H,288,257,A,K,n);
                                if (0 != x.status) {
                                    alert("HufBuild error: " + x.status);
                                    E = -1;
                                    break a
                                }
                                f = x.root;
                                n = x.m;
                                for (x = 0; 30 > x; x++)
                                    H[x] = 5;
                                d = 5;
                                x = new W(H,30,0,q,S,d);
                                if (1 < x.status) {
                                    f = null;
                                    alert("HufBuild error: " + x.status);
                                    E = -1;
                                    break a
                                }
                                c = x.root;
                                d = x.m
                            }
                            p = f;
                            u = c;
                            v = n;
                            y = d;
                            E = L(E, F, C)
                        }
                    break;
                case 2:
                    E = null != p ? L(a, b + D, e - D) : R(a, b + D, e - D);
                    break;
                default:
                    E = -1
                }
                if (-1 == E)
                    return B ? 0 : -1;
                D += E
            }
            return D
        };
        e.default = function(c) {
            var d;
            null == g && (g = Array(65536));
            k = h = l = 0;
            m = -1;
            B = !1;
            r = t = 0;
            p = null;
            F = c;
            Z = 0;
            for (var a = Array(1024), f = []; 0 < (c = X(a, 0, a.length)); ) {
                var b = Array(c);
                for (d = 0; d < c; d++)
                    b[d] = String.fromCharCode(a[d]);
                f[f.length] = b.join("")
            }
            F = null;
            return f.join("")
        }
    },
    RfPX: function(b, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function(a) {
            var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, b = c.method, b = void 0 === b ? "GET" : b, d = c.data, d = void 0 === d ? null : d, h = c.dataType, k = void 0 === h ? "json" : h, h = c.timeout, h = void 0 === h ? 0 : h, m = c.withCredentials, m = void 0 === m ? !1 : m, c = c.context, e = void 0 === c ? null : c, r = new XMLHttpRequest, t, p, c = new Promise(function(c, a) {
                t = c;
                p = a
            }
            ), u = function(c) {
                var d = this.status
                  , h = this.statusText
                  , b = this.responseText;
                if ("timeout" == c.type)
                    p(l("Timeout error", a, e));
                else if (200 <= d && 300 > d || 304 == d)
                    try {
                        b = "xml" == k ? this.responseXML : "json" == k ? JSON.parse(b) : b,
                        t(e ? {
                            context: e,
                            response: b
                        } : b)
                    } catch (g) {
                        p(l("Parse JSON error", a, e))
                    }
                else
                    p(l("Network error " + h, a, e));
                r = u = null
            };
            "POST" != b && d && (a = g.default.make(a, d));
            r.open(b, a, !0);
            r.timeout = h;
            r.withCredentials = m;
            r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            r.onload = r.onerror = r.ontimeout = u;
            r.send("POST" == b && d ? g.default.param(d, !0) : null);
            c.abort = function() {
                r && (r.abort(),
                p(l("XMLHttpRequest aborted manually", a, e)))
            }
            ;
            return c
        }
        ;
        var g = (b = a("TkXE")) && b.__esModule ? b : {
            default: b
        }
          , l = function(a) {
            var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ""
              , b = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
              , d = Error(a + (c ? " - " + c : c));
            d.url = c;
            d.context = b;
            return d
        }
    },
    TkXE: function(b, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var g = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(c) {
            return typeof c
        }
        : function(c) {
            return c && "function" === typeof Symbol && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
        }
          , l = a("agns")
          , f = /^(https?:)?(?:\/\/)?((?:[\d\w.-]+\.[a-z]{2,6}|[\d.]+))?(:\d+)?([^?#]+)?(\?[^#]*)?(#.*)?$/;
        e.default = {
            rurl: f,
            parse: function(c) {
                var a;
                if ("string" == typeof c) {
                    var d = a = f.exec(c);
                    if (d) {
                        a = d[1] || "";
                        var h = d[2] || ""
                          , b = d[3] ? d[3].slice(1) : "";
                        a = {
                            protocol: a,
                            hostname: h,
                            port: b,
                            host: h + (b ? ":" + b : ""),
                            pathname: d[4] || "",
                            search: d[5] && "?" != d[5] ? d[5] : "",
                            hash: d[6] && "#" != d[6] ? d[6] : "",
                            href: c
                        }
                    }
                } else
                    "object" == ("undefined" === typeof c ? "undefined" : g(c)) && (a = (c.protocol ? c.protocol + "//" : c.hostname ? "//" : "") + (c.hostname || "") + (c.port ? ":" + c.port : "") + (c.pathname || "") + (c.search || "") + (c.hash || ""));
                return a
            },
            make: function(c, a) {
                var d = this.parse(c)
                  , h = this.param(d.search)
                  , h = this.param((0,
                l.merge)(h, a));
                d.search = h ? "?" + h : "";
                return this.parse(d)
            },
            param: function(c) {
                var a;
                if ("object" == ("undefined" === typeof c ? "undefined" : g(c))) {
                    var d = [];
                    Object.keys(c).forEach(function(a) {
                        var f = c[a];
                        "undefined" !== typeof f && d.push(a + "=" + encodeURIComponent(f))
                    });
                    a = d.join("&")
                } else
                    "string" == typeof c && (c = 0 == c.indexOf("?") || 0 == c.indexOf("#") ? c.slice(1) : c,
                    a = {},
                    c && c.split("&").forEach(function(c, d) {
                        var f = c.split("=");
                        a[f[0]] = decodeURIComponent(f[1])
                    }));
                return a
            }
        }
    },
    V6zD: function(b, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        b = (b = a("vzCy")) && b.__esModule ? b : {
            default: b
        };
        a = a("agns");
        var g = function f() {
            f.superclass.constructor.call(this)
        };
        (0,
        a.extend)(g, b.default, {
            subscribe: function(a, c) {
                this.on(a, c)
            },
            unsubscribe: function(a, c) {
                c ? this.removeListener(a, c) : this.removeAllListeners(a)
            },
            publish: function(a) {
                this.emit.apply(this, [].slice.call(arguments, 0))
            }
        });
        e.default = new g
    },
    agns: function(b, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var g = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }
          , l = e.isObject = function(a) {
            return "object" == ("undefined" === typeof a ? "undefined" : g(a)) && !!a
        }
          , f = e.mix = function d(a, c, f, b, g) {
            var e, p, u;
            if (b && b.length)
                for (e = 0,
                p = b.length; e < p; ++e)
                    u = b[e],
                    c.hasOwnProperty(u) && (g && l(a[u]) ? d(a[u], c[u]) : !f && u in a || (a[u] = c[u]));
            else
                for (e in c)
                    c.hasOwnProperty(e) && (g && l(a[e]) ? d(a[e], c[e], f, b, !0) : !f && e in a || (a[e] = c[e]));
            return a
        }
          , c = e.merge = function() {
            for (var a = arguments, c = {}, b = 0, g = a.length; b < g; b++)
                f(c, a[b], !0);
            return c
        }
        ;
        e.extend = function(a, c, b, g) {
            if (!c || !a)
                return a;
            var e = Object.prototype
              , l = c.prototype
              , t = Object.create(l);
            a.prototype = t;
            t.constructor = a;
            a.superclass = l;
            c !== Object && l.constructor === e.constructor && (l.constructor = c);
            b && f(t, b, !0);
            g && f(a, g, !0);
            return a
        }
        ;
        e.omit = function() {
            var a = arguments[0]
              , f = [].slice.call(arguments, 1)
              , b = "function" == typeof f[0] ? f[0] : null
              , g = c({}, a);
            b ? Object.keys(g).forEach(function(a) {
                b(a) && delete g[a]
            }) : f.forEach(function(a) {
                delete g[a]
            });
            return g
        }
    },
    fiJj: function(b, e, a) {
        e.a = function() {
            Object.keys(h).forEach(function(a) {
                return h[a].abort()
            });
            h = {}
        }
        ;
        e.b = function(a) {
            var d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
              , f = arguments[2]
              , b = arguments[3]
              , e = "object" == ("undefined" === typeof __pda ? "undefined" : n(__pda)) ? __pda : {}
              , B = l()()
              , O = e.apidomain
              , d = Object(g.mix)(d, {
                padapi: a,
                av: e.av,
                encpass: m,
                logiuid: k
            })
              , e = 0 == a.indexOf("yl-") ? "/yl/index.php" : "/coop/mobile/index.php"
              , f = c()("//" + O + e, {
                data: d,
                method: f ? "POST" : "GET",
                dataType: b,
                context: {
                    id: B,
                    ticket: d.encpass
                }
            })
              , b = f.then(r, t);
            h[B] = f;
            b.abort = f.abort;
            return b
        }
        ;
        var g = a("agns");
        a.n(g);
        b = a("jFXU");
        var l = a.n(b);
        b = a("V6zD");
        var f = a.n(b);
        b = a("RfPX");
        var c = a.n(b)
          , n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }
          , d = "undefined" != typeof WorkerGlobalScope
          , h = {}
          , k = ""
          , m = "";
        d ? self.addEventListener("message", function(a) {
            a = JSON.parse(a.data);
            "user-state-update" == a.cmd && (a = a.content || {},
            k = a.uid,
            m = a.ticket)
        }, !1) : f.a.subscribe("user-state-update", function(a, c, d) {
            k = a;
            m = c
        });
        var B = function(a, c) {
            d ? self.postMessge(JSON.stringify({
                cmd: a,
                content: c
            })) : f.a.publish(a, c)
        }
          , r = function(a) {
            var c = a.context;
            a = a.response;
            var d = c.ticket;
            delete h[c.id];
            a.key && d && a.key != d && B("user-state-receive-new-ticket", a.key);
            a.flag && "203" == a.flag && B("user-state-broken", d);
            return a
        }
          , t = function(a) {
            delete h[a.context.id];
            throw a;
        }
    },
    jFXU: function(b, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function() {
            return (++g).toString(36)
        }
        ;
        var g = Date.now()
    },
    kFTT: function(b, e, a) {
        var g = a("CPiQ")
          , l = a("+itZ");
        b = function() {
            this._record = {
                time: 0,
                count: 0
            }
        }
        ;
        b.prototype = {
            filter: function(a) {
                var c = !0;
                switch (a.typeID) {
                case 123:
                    c = this.filterWelcome(a);
                    break;
                case 201:
                    c = this.filterGift(a)
                }
                return c
            },
            filterWelcome: function(a) {
                return this.throttle(a.tm, g.a.info && g.a.info.rid == a.content.rid)
            },
            filterGift: function(a) {
                var c = g.a.info && g.a.info.uid == a.fid
                  , b = -1 < l.n.indexOf(a.content.item);
                return this.throttle(a.tm, c || !b)
            },
            throttle: function(a, c) {
                var b = this._record
                  , d = !0;
                b.time != a ? (b.time = a,
                b.count = 1) : (b.count++,
                !c && 3 < b.count && (d = !1));
                return d
            }
        };
        e.a = new b
    },
    "sZR/": function(b, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var g = a("Jvqk")
          , l = {}
          , f = function(a) {
            return function(f) {
                self.postMessage(JSON.stringify({
                    cmd: "eventEmit",
                    content: {
                        event: a,
                        data: f
                    }
                }))
            }
        };
        self.addEventListener("message", function(a) {
            a = JSON.parse(a.data);
            switch (a.cmd) {
            case "init":
                self.__pda = a.content;
                self.postMessage(JSON.stringify({
                    cmd: "ready",
                    content: void 0
                }));
                break;
            case "login":
                (g.a.isOpen() || g.a.isConnecting()) && g.a.close();
                g.a.login(a.content);
                break;
            case "sendMsg":
                g.a.sendMsg(a.content[0], a.content[1]);
                break;
            case "newListener":
                a = a.content;
                l[a] || (g.a.on(a, f(a)),
                l[a] = 1);
                break;
            case "closeSocket":
                g.a.close();
                break;
            case "close":
                g.a.close(),
                self.close()
            }
        })
    },
    twhX: function(b, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var g, l, f, c, n = null, d, h, k, m, B, r, t, p, u, v, y, F, Z, O, A, K, q, S, N, C, da, W, z, G, w, L, R, X, J, P, Q, D, E, I, T, H, x, ea, aa, ra, ja, ka, U, la, sa, ba, fa, V, ca, ma, ta, ga = function() {
            this.dl = this.fc = 0
        }, ua = function() {
            this.extra_bits = this.static_tree = this.dyn_tree = null;
            this.max_code = this.max_length = this.elems = this.extra_base = 0
        };
        b = function(a, c, d, f) {
            this.good_length = a;
            this.max_lazy = c;
            this.nice_length = d;
            this.max_chain = f
        }
        ;
        var Ma = function() {
            this.next = null;
            this.len = 0;
            this.ptr = Array(8192);
            this.off = 0
        }
          , va = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
          , ha = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
          , Na = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
          , Aa = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
          , wa = [new b(0,0,0,0), new b(4,4,8,4), new b(4,5,16,8), new b(4,6,32,32), new b(4,4,16,16), new b(8,16,32,32), new b(8,16,128,128), new b(8,32,128,256), new b(32,128,258,1024), new b(32,258,258,4096)]
          , na = function(a) {
            n[h + d++] = a;
            if (8192 == h + d && 0 != d) {
                var c;
                null != g ? (a = g,
                g = g.next) : a = new Ma;
                a.next = null;
                a.len = a.off = 0;
                null == l ? l = f = a : f = f.next = a;
                a.len = d - h;
                for (c = 0; c < a.len; c++)
                    a.ptr[c] = n[h + c];
                d = h = 0
            }
        }
          , oa = function(a) {
            a &= 65535;
            8190 > h + d ? (n[h + d++] = a & 255,
            n[h + d++] = a >>> 8) : (na(a & 255),
            na(a >>> 8))
        }
          , pa = function() {
            y = (y << 5 ^ m[q + 3 - 1] & 255) & 8191;
            F = t[32768 + y];
            t[q & 32767] = F;
            t[32768 + y] = q
        }
          , Y = function(a, c) {
            M(c[a].fc, c[a].dl)
        }
          , Ba = function(a, c, d) {
            return a[c].fc < a[d].fc || a[c].fc == a[d].fc && x[c] <= x[d]
        }
          , Ca = function(a, c, d) {
            var f;
            for (f = 0; f < d && ta < ma.length; f++)
                a[c + f] = ma.charCodeAt(ta++) & 255;
            return f
        }
          , Da = function(a) {
            var c = da, d = q, f, b = K, h = 32506 < q ? q - 32506 : 0, g = q + 258, e = m[d + b - 1], l = m[d + b];
            K >= G && (c >>= 2);
            do
                if (f = a,
                m[f + b] == l && m[f + b - 1] == e && m[f] == m[d] && m[++f] == m[d + 1]) {
                    d += 2;
                    for (f++; m[++d] == m[++f] && m[++d] == m[++f] && m[++d] == m[++f] && m[++d] == m[++f] && m[++d] == m[++f] && m[++d] == m[++f] && m[++d] == m[++f] && m[++d] == m[++f] && d < g; )
                        ;
                    f = 258 - (g - d);
                    d = g - 258;
                    if (f > b) {
                        S = a;
                        b = f;
                        if (258 <= f)
                            break;
                        e = m[d + b - 1];
                        l = m[d + b]
                    }
                }
            while ((a = t[a & 32767]) > h && 0 != --c);return b
        }
          , xa = function() {
            var a, c, d = 65536 - C - q;
            if (-1 == d)
                d--;
            else if (65274 <= q) {
                for (a = 0; 32768 > a; a++)
                    m[a] = m[a + 32768];
                S -= 32768;
                q -= 32768;
                v -= 32768;
                for (a = 0; 8192 > a; a++)
                    c = t[32768 + a],
                    t[32768 + a] = 32768 <= c ? c - 32768 : 0;
                for (a = 0; 32768 > a; a++)
                    c = t[a],
                    t[a] = 32768 <= c ? c - 32768 : 0;
                d += 32768
            }
            N || (a = Ca(m, q + C, d),
            0 >= a ? N = !0 : C += a)
        }
          , Oa = function(a, f, b) {
            var g;
            if (!c) {
                if (!N) {
                    u = p = 0;
                    var e, n;
                    if (0 == X[0].dl) {
                        P.dyn_tree = w;
                        P.static_tree = R;
                        P.extra_bits = va;
                        P.extra_base = 257;
                        P.elems = 286;
                        P.max_length = 15;
                        P.max_code = 0;
                        Q.dyn_tree = L;
                        Q.static_tree = X;
                        Q.extra_bits = ha;
                        Q.extra_base = 0;
                        Q.elems = 30;
                        Q.max_length = 15;
                        Q.max_code = 0;
                        D.dyn_tree = J;
                        D.static_tree = null;
                        D.extra_bits = Na;
                        D.extra_base = 0;
                        D.elems = 19;
                        D.max_length = 7;
                        for (n = e = D.max_code = 0; 28 > n; n++)
                            for (ra[n] = e,
                            g = 0; g < 1 << va[n]; g++)
                                ea[e++] = n;
                        ea[e - 1] = n;
                        for (n = e = 0; 16 > n; n++)
                            for (ja[n] = e,
                            g = 0; g < 1 << ha[n]; g++)
                                aa[e++] = n;
                        for (e >>= 7; 30 > n; n++)
                            for (ja[n] = e << 7,
                            g = 0; g < 1 << ha[n] - 7; g++)
                                aa[256 + e++] = n;
                        for (g = 0; 15 >= g; g++)
                            E[g] = 0;
                        for (g = 0; 143 >= g; )
                            R[g++].dl = 8,
                            E[8]++;
                        for (; 255 >= g; )
                            R[g++].dl = 9,
                            E[9]++;
                        for (; 279 >= g; )
                            R[g++].dl = 7,
                            E[7]++;
                        for (; 287 >= g; )
                            R[g++].dl = 8,
                            E[8]++;
                        Ea(R, 287);
                        for (g = 0; 30 > g; g++)
                            X[g].dl = 5,
                            X[g].fc = Fa(g, 5);
                        Ga()
                    }
                    for (g = 0; 8192 > g; g++)
                        t[32768 + g] = 0;
                    W = wa[z].max_lazy;
                    G = wa[z].good_length;
                    da = wa[z].max_chain;
                    v = q = 0;
                    C = Ca(m, 0, 65536);
                    if (0 >= C)
                        N = !0,
                        C = 0;
                    else {
                        for (N = !1; 262 > C && !N; )
                            xa();
                        for (g = y = 0; 2 > g; g++)
                            y = (y << 5 ^ m[g] & 255) & 8191
                    }
                    l = null;
                    h = d = 0;
                    3 >= z ? (K = 2,
                    A = 0) : (A = 2,
                    O = 0);
                    k = !1
                }
                c = !0;
                if (0 == C)
                    return k = !0,
                    0
            }
            if ((g = Ha(a, f, b)) == b)
                return b;
            if (k)
                return g;
            if (3 >= z)
                for (; 0 != C && null == l; ) {
                    pa();
                    0 != F && 32506 >= q - F && (A = Da(F),
                    A > C && (A = C));
                    if (3 <= A)
                        if (n = ia(q - S, A - 3),
                        C -= A,
                        A <= W) {
                            A--;
                            do
                                q++,
                                pa();
                            while (0 != --A);q++
                        } else
                            q += A,
                            A = 0,
                            y = m[q] & 255,
                            y = (y << 5 ^ m[q + 1] & 255) & 8191;
                    else
                        n = ia(0, m[q] & 255),
                        C--,
                        q++;
                    n && (qa(0),
                    v = q);
                    for (; 262 > C && !N; )
                        xa()
                }
            else
                for (; 0 != C && null == l; ) {
                    pa();
                    K = A;
                    Z = S;
                    A = 2;
                    0 != F && K < W && 32506 >= q - F && (A = Da(F),
                    A > C && (A = C),
                    3 == A && 4096 < q - S && A--);
                    if (3 <= K && A <= K) {
                        n = ia(q - 1 - Z, K - 3);
                        C -= K - 1;
                        K -= 2;
                        do
                            q++,
                            pa();
                        while (0 != --K);O = 0;
                        A = 2;
                        q++;
                        n && (qa(0),
                        v = q)
                    } else
                        0 != O ? ia(0, m[q - 1] & 255) && (qa(0),
                        v = q) : O = 1,
                        q++,
                        C--;
                    for (; 262 > C && !N; )
                        xa()
                }
            0 == C && (0 != O && ia(0, m[q - 1] & 255),
            qa(1),
            k = !0);
            return g + Ha(a, g + f, b - g)
        }
          , Ha = function(a, c, f) {
            var b, e, k;
            for (b = 0; null != l && b < f; ) {
                e = f - b;
                e > l.len && (e = l.len);
                for (k = 0; k < e; k++)
                    a[c + b + k] = l.ptr[l.off + k];
                l.off += e;
                l.len -= e;
                b += e;
                0 == l.len && (e = l,
                l = l.next,
                e.next = g,
                g = e)
            }
            if (b == f)
                return b;
            if (h < d) {
                e = f - b;
                e > d - h && (e = d - h);
                for (k = 0; k < e; k++)
                    a[c + b + k] = n[h + k];
                h += e;
                b += e;
                d == h && (d = h = 0)
            }
            return b
        }
          , Ga = function() {
            var a;
            for (a = 0; 286 > a; a++)
                w[a].fc = 0;
            for (a = 0; 30 > a; a++)
                L[a].fc = 0;
            for (a = 0; 19 > a; a++)
                J[a].fc = 0;
            w[256].fc = 1;
            ba = U = la = sa = V = ca = 0;
            fa = 1
        }
          , ya = function(a, c) {
            for (var d = I[c], f = c << 1; f <= T; ) {
                f < T && Ba(a, I[f + 1], I[f]) && f++;
                if (Ba(a, d, I[f]))
                    break;
                I[c] = I[f];
                c = f;
                f <<= 1
            }
            I[c] = d
        }
          , Ea = function(a, c) {
            var d = Array(16), f = 0, b;
            for (b = 1; 15 >= b; b++)
                f = f + E[b - 1] << 1,
                d[b] = f;
            for (f = 0; f <= c; f++)
                b = a[f].dl,
                0 != b && (a[f].fc = Fa(d[b]++, b))
        }
          , za = function(a) {
            var c = a.dyn_tree, d = a.static_tree, f = a.elems, b, g = -1, e = f;
            T = 0;
            H = 573;
            for (b = 0; b < f; b++)
                0 != c[b].fc ? (I[++T] = g = b,
                x[b] = 0) : c[b].dl = 0;
            for (; 2 > T; )
                b = I[++T] = 2 > g ? ++g : 0,
                c[b].fc = 1,
                x[b] = 0,
                V--,
                null != d && (ca -= d[b].dl);
            a.max_code = g;
            for (b = T >> 1; 1 <= b; b--)
                ya(c, b);
            do
                b = I[1],
                I[1] = I[T--],
                ya(c, 1),
                d = I[1],
                I[--H] = b,
                I[--H] = d,
                c[e].fc = c[b].fc + c[d].fc,
                x[e] = x[b] > x[d] + 1 ? x[b] : x[d] + 1,
                c[b].dl = c[d].dl = e,
                I[1] = e++,
                ya(c, 1);
            while (2 <= T);I[--H] = I[1];
            e = a.dyn_tree;
            b = a.extra_bits;
            var f = a.extra_base, d = a.max_code, h = a.max_length, l = a.static_tree, k, n, m, q, p = 0;
            for (n = 0; 15 >= n; n++)
                E[n] = 0;
            e[I[H]].dl = 0;
            for (a = H + 1; 573 > a; a++)
                k = I[a],
                n = e[e[k].dl].dl + 1,
                n > h && (n = h,
                p++),
                e[k].dl = n,
                k > d || (E[n]++,
                m = 0,
                k >= f && (m = b[k - f]),
                q = e[k].fc,
                V += q * (n + m),
                null != l && (ca += q * (l[k].dl + m)));
            if (0 != p) {
                do {
                    for (n = h - 1; 0 == E[n]; )
                        n--;
                    E[n]--;
                    E[n + 1] += 2;
                    E[h]--;
                    p -= 2
                } while (0 < p);for (n = h; 0 != n; n--)
                    for (k = E[n]; 0 != k; )
                        b = I[--a],
                        b > d || (e[b].dl != n && (V += (n - e[b].dl) * e[b].fc,
                        e[b].fc = n),
                        k--)
            }
            Ea(c, g)
        }
          , Ia = function(a, c) {
            var d, b = -1, f, g = a[0].dl, e = 0, h = 7, k = 4;
            0 == g && (h = 138,
            k = 3);
            a[c + 1].dl = 65535;
            for (d = 0; d <= c; d++)
                f = g,
                g = a[d + 1].dl,
                ++e < h && f == g || (e < k ? J[f].fc += e : 0 != f ? (f != b && J[f].fc++,
                J[16].fc++) : 10 >= e ? J[17].fc++ : J[18].fc++,
                e = 0,
                b = f,
                0 == g ? (h = 138,
                k = 3) : f == g ? (h = 6,
                k = 3) : (h = 7,
                k = 4))
        }
          , Ja = function(a, c) {
            var d, f = -1, b, g = a[0].dl, e = 0, h = 7, k = 4;
            0 == g && (h = 138,
            k = 3);
            for (d = 0; d <= c; d++)
                if (b = g,
                g = a[d + 1].dl,
                !(++e < h && b == g)) {
                    if (e < k) {
                        do
                            Y(b, J);
                        while (0 != --e)
                    } else
                        0 != b ? (b != f && (Y(b, J),
                        e--),
                        Y(16, J),
                        M(e - 3, 2)) : 10 >= e ? (Y(17, J),
                        M(e - 3, 3)) : (Y(18, J),
                        M(e - 11, 7));
                    e = 0;
                    f = b;
                    0 == g ? (h = 138,
                    k = 3) : b == g ? (h = 6,
                    k = 3) : (h = 7,
                    k = 4)
                }
        }
          , qa = function(a) {
            var c, d, b, f;
            f = q - v;
            ka[sa] = ba;
            za(P);
            za(Q);
            Ia(w, P.max_code);
            Ia(L, Q.max_code);
            za(D);
            for (b = 18; 3 <= b && 0 == J[Aa[b]].dl; b--)
                ;
            V += 3 * (b + 1) + 14;
            c = V + 3 + 7 >> 3;
            d = ca + 3 + 7 >> 3;
            d <= c && (c = d);
            if (f + 4 <= c && 0 <= v)
                for (M(0 + a, 3),
                Ka(),
                oa(f),
                oa(~f),
                b = 0; b < f; b++)
                    na(m[v + b]);
            else if (d == c)
                M(2 + a, 3),
                La(R, X);
            else {
                M(4 + a, 3);
                f = P.max_code + 1;
                c = Q.max_code + 1;
                b += 1;
                M(f - 257, 5);
                M(c - 1, 5);
                M(b - 4, 4);
                for (d = 0; d < b; d++)
                    M(J[Aa[d]].dl, 3);
                Ja(w, f - 1);
                Ja(L, c - 1);
                La(w, L)
            }
            Ga();
            0 != a && Ka()
        }
          , ia = function(a, c) {
            r[U++] = c;
            0 == a ? w[c].fc++ : (a--,
            w[ea[c] + 256 + 1].fc++,
            L[(256 > a ? aa[a] : aa[256 + (a >> 7)]) & 255].fc++,
            B[la++] = a,
            ba |= fa);
            fa <<= 1;
            0 == (U & 7) && (ka[sa++] = ba,
            ba = 0,
            fa = 1);
            if (2 < z && 0 == (U & 4095)) {
                var d = 8 * U, b = q - v, f;
                for (f = 0; 30 > f; f++)
                    d += L[f].fc * (5 + ha[f]);
                d >>= 3;
                if (la < parseInt(U / 2) && d < parseInt(b / 2))
                    return !0
            }
            return 8191 == U || 8192 == la
        }
          , La = function(a, c) {
            var d, b = 0, f = 0, g = 0, e = 0, h, k;
            if (0 != U) {
                do
                    0 == (b & 7) && (e = ka[g++]),
                    d = r[b++] & 255,
                    0 == (e & 1) ? Y(d, a) : (h = ea[d],
                    Y(h + 256 + 1, a),
                    k = va[h],
                    0 != k && (d -= ra[h],
                    M(d, k)),
                    d = B[f++],
                    h = (256 > d ? aa[d] : aa[256 + (d >> 7)]) & 255,
                    Y(h, c),
                    k = ha[h],
                    0 != k && (d -= ja[h],
                    M(d, k))),
                    e >>= 1;
                while (b < U)
            }
            Y(256, a)
        }
          , M = function(a, c) {
            u > 16 - c ? (p |= a << u,
            oa(p),
            p = a >> 16 - u,
            u += c - 16) : (p |= a << u,
            u += c)
        }
          , Fa = function(a, c) {
            var d = 0;
            do
                d |= a & 1,
                a >>= 1,
                d <<= 1;
            while (0 < --c);return d >> 1
        }
          , Ka = function() {
            8 < u ? oa(p) : 0 < u && na(p);
            u = p = 0
        };
        e.default = function(a, d) {
            var b, e;
            ma = a;
            ta = 0;
            "undefined" == typeof d && (d = 6);
            (b = d) ? 1 > b ? b = 1 : 9 < b && (b = 9) : b = 6;
            z = b;
            N = c = !1;
            if (null == n) {
                g = l = f = null;
                n = Array(8192);
                m = Array(65536);
                B = Array(8192);
                r = Array(32832);
                t = Array(65536);
                w = Array(573);
                for (b = 0; 573 > b; b++)
                    w[b] = new ga;
                L = Array(61);
                for (b = 0; 61 > b; b++)
                    L[b] = new ga;
                R = Array(288);
                for (b = 0; 288 > b; b++)
                    R[b] = new ga;
                X = Array(30);
                for (b = 0; 30 > b; b++)
                    X[b] = new ga;
                J = Array(39);
                for (b = 0; 39 > b; b++)
                    J[b] = new ga;
                P = new ua;
                Q = new ua;
                D = new ua;
                E = Array(16);
                I = Array(573);
                x = Array(573);
                ea = Array(256);
                aa = Array(512);
                ra = Array(29);
                ja = Array(30);
                ka = Array(1024)
            }
            for (var h = Array(1024), k = []; 0 < (b = Oa(h, 0, h.length)); ) {
                var p = Array(b);
                for (e = 0; e < b; e++)
                    p[e] = String.fromCharCode(h[e]);
                k[k.length] = p.join("")
            }
            ma = null;
            return k.join("")
        }
    },
    vzCy: function(b, e) {
        function a() {
            this._events = this._events || {};
            this._maxListeners = this._maxListeners || void 0
        }
        function g(a) {
            return "function" === typeof a
        }
        function l(a) {
            return "object" === typeof a && null !== a
        }
        b.exports = a;
        a.EventEmitter = a;
        a.prototype._events = void 0;
        a.prototype._maxListeners = void 0;
        a.defaultMaxListeners = 10;
        a.prototype.setMaxListeners = function(a) {
            if ("number" !== typeof a || 0 > a || isNaN(a))
                throw TypeError("n must be a positive number");
            this._maxListeners = a;
            return this
        }
        ;
        a.prototype.emit = function(a) {
            var c, b, d, e;
            this._events || (this._events = {});
            if ("error" === a && (!this._events.error || l(this._events.error) && !this._events.error.length)) {
                c = arguments[1];
                if (c instanceof Error)
                    throw c;
                b = Error('Uncaught, unspecified "error" event. (' + c + ")");
                b.context = c;
                throw b;
            }
            b = this._events[a];
            if (void 0 === b)
                return !1;
            if (g(b))
                switch (arguments.length) {
                case 1:
                    b.call(this);
                    break;
                case 2:
                    b.call(this, arguments[1]);
                    break;
                case 3:
                    b.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    c = Array.prototype.slice.call(arguments, 1),
                    b.apply(this, c)
                }
            else if (l(b))
                for (c = Array.prototype.slice.call(arguments, 1),
                e = b.slice(),
                b = e.length,
                d = 0; d < b; d++)
                    e[d].apply(this, c);
            return !0
        }
        ;
        a.prototype.addListener = function(b, c) {
            var e;
            if (!g(c))
                throw TypeError("listener must be a function");
            this._events || (this._events = {});
            this._events.newListener && this.emit("newListener", b, g(c.listener) ? c.listener : c);
            this._events[b] ? l(this._events[b]) ? this._events[b].push(c) : this._events[b] = [this._events[b], c] : this._events[b] = c;
            l(this._events[b]) && !this._events[b].warned && (e = void 0 !== this._maxListeners ? this._maxListeners : a.defaultMaxListeners) && 0 < e && this._events[b].length > e && (this._events[b].warned = !0,
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[b].length),
            "function" === typeof console.trace && console.trace());
            return this
        }
        ;
        a.prototype.on = a.prototype.addListener;
        a.prototype.once = function(a, b) {
            function e() {
                this.removeListener(a, e);
                d || (d = !0,
                b.apply(this, arguments))
            }
            if (!g(b))
                throw TypeError("listener must be a function");
            var d = !1;
            e.listener = b;
            this.on(a, e);
            return this
        }
        ;
        a.prototype.removeListener = function(a, b) {
            var e, d, h;
            if (!g(b))
                throw TypeError("listener must be a function");
            if (!this._events || !this._events[a])
                return this;
            e = this._events[a];
            h = e.length;
            d = -1;
            if (e === b || g(e.listener) && e.listener === b)
                delete this._events[a],
                this._events.removeListener && this.emit("removeListener", a, b);
            else if (l(e)) {
                for (; 0 < h--; )
                    if (e[h] === b || e[h].listener && e[h].listener === b) {
                        d = h;
                        break
                    }
                if (0 > d)
                    return this;
                1 === e.length ? (e.length = 0,
                delete this._events[a]) : e.splice(d, 1);
                this._events.removeListener && this.emit("removeListener", a, b)
            }
            return this
        }
        ;
        a.prototype.removeAllListeners = function(a) {
            var b;
            if (!this._events)
                return this;
            if (!this._events.removeListener)
                return 0 === arguments.length ? this._events = {} : this._events[a] && delete this._events[a],
                this;
            if (0 === arguments.length) {
                for (b in this._events)
                    "removeListener" !== b && this.removeAllListeners(b);
                this.removeAllListeners("removeListener");
                this._events = {};
                return this
            }
            b = this._events[a];
            if (g(b))
                this.removeListener(a, b);
            else if (b)
                for (; b.length; )
                    this.removeListener(a, b[b.length - 1]);
            delete this._events[a];
            return this
        }
        ;
        a.prototype.listeners = function(a) {
            return this._events && this._events[a] ? g(this._events[a]) ? [this._events[a]] : this._events[a].slice() : []
        }
        ;
        a.prototype.listenerCount = function(a) {
            if (this._events) {
                a = this._events[a];
                if (g(a))
                    return 1;
                if (a)
                    return a.length
            }
            return 0
        }
        ;
        a.listenerCount = function(a, b) {
            return a.listenerCount(b)
        }
    },
    zx4i: function(b, e, a) {
        b = a("agns");
        a.n(b);
        var g = a("Qfv+")
          , l = a.n(g)
          , g = a("twhX")
          , f = a.n(g)
          , g = a("592r");
        a = a.n(g);
        var c = function() {
            return function(a, b) {
                if (Array.isArray(a))
                    return a;
                if (Symbol.iterator in Object(a)) {
                    var c = []
                      , e = !0
                      , f = !1
                      , g = void 0;
                    try {
                        for (var l = a[Symbol.iterator](), t; !(e = (t = l.next()).done) && (c.push(t.value),
                        !b || c.length !== b); e = !0)
                            ;
                    } catch (p) {
                        f = !0,
                        g = p
                    } finally {
                        try {
                            if (!e && l["return"])
                                l["return"]()
                        } finally {
                            if (f)
                                throw g;
                        }
                    }
                    return c
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        }()
          , g = function d() {
            d.superclass.constructor.call(this);
            this._logined = !1;
            this._loginData = null;
            this._loginFailCount = 0;
            this._doLogin = this._doLogin.bind(this);
            this._heartbeatTimer = null;
            this._heartbeat = this._heartbeat.bind(this);
            this._timeoutTimer = null;
            this._doTimeout = this._doTimeout.bind(this);
            this.on("login.success", this._onLoginSuccess)
        };
        Object(b.extend)(g, a.a, {
            getAddressPool: function() {},
            getAddress: function() {},
            onReceiveMessage: function(a) {},
            onMessage: function(a) {
                a = this.explode(a.data);
                "receivemessage" == a.command ? (a.content = "yes" == a.enc ? this.decode(a.content) : atob(a.content),
                a.content = this.stripZeroCharCode(a.content),
                this._debugLog("[" + this.url + "] receivemessage: \n" + a.content),
                a.content = JSON.parse(a.content),
                this.onReceiveMessage(a.content)) : "result" == a.command ? this.emit(a.content, a) : "network.error" != a.command && "SecurityError" != a.command || this.emit(a.command, a);
                this.emit("message", a.command, a.content)
            },
            login: function(a) {
                this._loginData = a;
                this.on("network.error", this._onNetworkError);
                this.on("SecurityError", this._onSecurityError);
                this.on("login.failed", this._onLoginFailed);
                this.on("close", this._onClose);
                this.on("error", this._onError);
                this.getAddressPool().then(this._doLogin)
            },
            sendMsg: function(a, b) {
                var c;
                c = JSON.stringify({
                    t: a,
                    content: b
                });
                this._debugLog("%c[" + this.url + "] send: \n" + c, "color:blue;");
                c = ["command=sendmessage", "content=" + this.encode(c)];
                this.convey(c)
            },
            convey: function(a) {
                var b = a[0];
                (this._logined || "command=login" == b) && this.send(this.implode(a))
            },
            implode: function(a) {
                a.push("");
                return a.join("\r\n")
            },
            explode: function(a) {
                var b = {};
                a.split("\r\n").reduce(function(a, b) {
                    if (b && -1 < b.indexOf("=")) {
                        var d = b.split("=")
                          , d = c(d, 2);
                        a[d[0]] = d[1]
                    }
                    return a
                }, b);
                return b
            },
            decode: function(a) {
                a = a.replace(/\(|\)|@/g, function(a) {
                    switch (a) {
                    case "(":
                        return "+";
                    case ")":
                        return "/";
                    case "@":
                        return "="
                    }
                });
                a = atob(a);
                return a = l()(a, 6)
            },
            encode: function(a) {
                a = f()(this.encodeToUtf8(a), 6);
                a = btoa(a);
                return a = a.replace(/\+|\/|=/g, function(a) {
                    switch (a) {
                    case "+":
                        return "(";
                    case "/":
                        return ")";
                    case "=":
                        return "@"
                    }
                })
            },
            encodeToUtf8: function(a) {
                return unescape(encodeURIComponent(a))
            },
            stripZeroCharCode: function(a) {
                for (var b = [], c = 0; c < a.length; c++)
                    0 < a.charCodeAt(c) && b.push(a[c]);
                return b.join("")
            },
            startHeartbeat: function() {
                this._heartbeatTimer = setTimeout(this._heartbeat, 1E3)
            },
            stopHeartbeat: function() {
                clearTimeout(this._heartbeatTimer)
            },
            close: function() {
                this._debugLog("Manually close " + this.url + ".");
                clearTimeout(this._doLoginTimer);
                this._doLoginTimer = null;
                this._logined = !1;
                this.stopHeartbeat();
                this.removeAllListeners("network.error");
                this.removeAllListeners("SecurityError");
                this.removeAllListeners("login.failed");
                this.removeAllListeners("close");
                this.removeAllListeners("error");
                this.destroyCore();
                this.cleanQueue()
            },
            _doLogin: function() {
                var a = this._loginData
                  , b = this.getAddress()
                  , c = Object.keys(a).map(function(b) {
                    return b + "=" + a[b]
                });
                c.unshift("command=login");
                this.connect("ws://" + b);
                this.convey(c);
                this._doLoginTimer = null;
                this._cancelTimeout();
                this._timeoutTimer = setTimeout(this._doTimeout, 2E3);
                this._debugLog(this._loginFailCount + "th login to: " + b + "\n" + c.join("\r\n"))
            },
            _heartbeat: function() {
                this.stopHeartbeat();
                this.convey(["command=sendmessage", "content=y8vPLwAA"]);
                this._heartbeatTimer = setTimeout(this._heartbeat, 16E3)
            },
            _doTimeout: function() {
                this._debugLog("Timeout (2000ms) " + this.url);
                this._onLoginFail()
            },
            _cancelTimeout: function() {
                clearTimeout(this._timeoutTimer)
            },
            _onLoginFail: function() {
                this._doLoginTimer || (this.stopHeartbeat(),
                this._cancelTimeout(),
                this._logined = !1,
                this._loginFailCount++,
                this._doLoginTimer = setTimeout(this._doLogin, 1E3))
            },
            _onLoginSuccess: function() {
                this._debugLog("Login Success " + this.url);
                this._logined = !0;
                this._loginFailCount = 0;
                this.startHeartbeat();
                this._cancelTimeout()
            },
            _onNetworkError: function() {
                this._debugLog("Network Error " + this.url);
                this._onLoginFail()
            },
            _onSecurityError: function() {
                this._debugLog("Security Error " + this.url);
                this._onLoginFail()
            },
            _onLoginFailed: function() {
                this._debugLog("Login Fail " + this.url);
                this._onLoginFail()
            },
            _onClose: function(a) {
                this._debugLog(this.url + " " + a.code + " closed.");
                this._onLoginFail()
            },
            _onError: function(a) {
                this._debugLog(this.url + " error.");
                this._onLoginFail()
            },
            _debugLog: function(a, b) {
                this.emit("debuglog", a)
            }
        });
        e.a = g
    }
});
