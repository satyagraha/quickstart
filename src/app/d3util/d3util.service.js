// path : d3/d3.service.ts
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
var index_1 = require("./models/index");
var d3 = require("d3");
var D3Service = (function () {
    /** This service will provide methods to enable user interaction with elements
    * while maintaining the d3 simulations physics
    */
    function D3Service() {
        console.log("D3Service()");
    }
    /** A method to bind a pan and zoom behaviour to an svg element */
    D3Service.prototype.applyZoomableBehaviour = function (svgElement, gElement) {
        console.log("applyZoomableBehaviour", svgElement, gElement);
        var svg = d3.select(svgElement);
        console.log("svg", svg);
        var container = d3.select(gElement.nativeElement);
        var zoomed = function () {
            console.log("zoomed");
            var transform = d3.event.transform;
            container.attr("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
        };
        var zoom = d3.zoom().on("zoom", zoomed);
        svg.call(zoom);
    };
    /** A method to bind a draggable behaviour to an svg element */
    D3Service.prototype.applyDraggableBehaviour = function (elementRef, node, graph) {
        // console.log("applyDraggableBehaviour", elementRef, node, graph)
        var d3element = d3.select(elementRef.nativeElement);
        function started() {
            if (!d3.event.active) {
                graph.simulation.alphaTarget(0.3).restart();
            }
            d3.event.on("drag", dragged).on("end", ended);
            function dragged() {
                node.fx = d3.event.x;
                node.fy = d3.event.y;
            }
            function ended() {
                if (!d3.event.active) {
                    graph.simulation.alphaTarget(0);
                }
                node.fx = null;
                node.fy = null;
            }
        }
        d3element.call(d3.drag()
            .on("start", started));
    };
    /** The interactable graph we will simulate in this article
    * This method does not interact with the document, purely physical calculations with d3
    */
    D3Service.prototype.getForceDirectedGraph = function (nodes, links, options) {
        var graph = new index_1.ForceDirectedGraph(nodes, links, options);
        return graph;
    };
    return D3Service;
}());
D3Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], D3Service);
exports.D3Service = D3Service;
//# sourceMappingURL=d3util.service.js.map