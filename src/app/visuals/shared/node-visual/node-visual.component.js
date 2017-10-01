"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var index_1 = require("../../../d3/index");
var NodeVisualComponent = (function () {
    function NodeVisualComponent() {
    }
    return NodeVisualComponent;
}());
__decorate([
    core_1.Input('nodeVisual'),
    __metadata("design:type", index_1.Node)
], NodeVisualComponent.prototype, "node", void 0);
NodeVisualComponent = __decorate([
    core_1.Component({
        selector: '[nodeVisual]',
        template: "\n    <svg:g [attr.transform]=\"'translate(' + node.x + ',' + node.y + ')'\">\n      <svg:circle\n          class=\"node\"\n          [attr.fill]=\"node.color\"\n          cx=\"0\"\n          cy=\"0\"\n          [attr.r]=\"node.r\">\n      </svg:circle>\n      <svg:text\n          class=\"node-name\"\n          [attr.font-size]=\"node.fontSize\">\n        {{node.id}}\n      </svg:text>\n    </svg:g>\n  ",
        styleUrls: ['./node-visual.component.css']
    })
], NodeVisualComponent);
exports.NodeVisualComponent = NodeVisualComponent;
//# sourceMappingURL=node-visual.component.js.map