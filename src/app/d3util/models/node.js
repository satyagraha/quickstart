"use strict";
var demo_config_1 = require("../../demo.config");
var Node = (function () {
    function Node(id) {
        var _this = this;
        this.linkCount = 0;
        this.normal = function () {
            return Math.sqrt(_this.linkCount / demo_config_1.default.N);
        };
        this.id = id;
    }
    Object.defineProperty(Node.prototype, "r", {
        get: function () {
            return 50 * this.normal() + 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "fontSize", {
        get: function () {
            return (30 * this.normal() + 10) + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "color", {
        get: function () {
            var index = Math.floor(demo_config_1.default.SPECTRUM.length * this.normal());
            return demo_config_1.default.SPECTRUM[index];
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());
exports.Node = Node;
//# sourceMappingURL=node.js.map