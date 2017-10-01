// path : d3/directives/draggable.directives.ts
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
var d3util_service_1 = require("../d3util.service");
var index_1 = require("../models/index");
var DraggableDirective = (function () {
    function DraggableDirective(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    DraggableDirective.prototype.ngOnInit = function () {
        this.d3Service.applyDraggableBehaviour(this._element, this.node, this.graph);
    };
    return DraggableDirective;
}());
__decorate([
    core_1.Input('draggableNode'),
    __metadata("design:type", index_1.Node)
], DraggableDirective.prototype, "node", void 0);
__decorate([
    core_1.Input('draggableInGraph'),
    __metadata("design:type", index_1.ForceDirectedGraph)
], DraggableDirective.prototype, "graph", void 0);
DraggableDirective = __decorate([
    core_1.Directive({
        selector: '[draggableNode]'
    }),
    __metadata("design:paramtypes", [d3util_service_1.D3Service, core_1.ElementRef])
], DraggableDirective);
exports.DraggableDirective = DraggableDirective;
//# sourceMappingURL=draggable.directive.js.map