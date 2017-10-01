// path : d3/models/force-directed-graph.ts
"use strict";
var core_1 = require("@angular/core");
var d3 = require("d3");
var FORCES = {
    LINKS: 1 / 50,
    COLLISION: 1,
    CHARGE: -1
};
var ForceDirectedGraph = (function () {
    function ForceDirectedGraph(nodes, links, options) {
        this.ticker = new core_1.EventEmitter();
        this.nodes = [];
        this.links = [];
        this.nodes = nodes;
        this.links = links;
        this.initSimulation(options);
    }
    ForceDirectedGraph.prototype.initNodes = function () {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.nodes(this.nodes);
    };
    ForceDirectedGraph.prototype.initLinks = function () {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        // Initializing the links force simulation
        this.simulation.force('links', d3.forceLink(this.links)
            .strength(FORCES.LINKS));
    };
    ForceDirectedGraph.prototype.initSimulation = function (options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing simulation');
        }
        /** Creating the simulation */
        if (!this.simulation) {
            var ticker_1 = this.ticker;
            // Creating the force simulation and defining the charges
            this.simulation = d3.forceSimulation()
                .force("charge", d3.forceManyBody()
                .strength(FORCES.CHARGE));
            // Connecting the d3 ticker to an angular event emitter
            this.simulation.on('tick', function () {
                ticker_1.emit(this);
            });
            this.initNodes();
            this.initLinks();
        }
        /** Updating the central force of the simulation */
        this.simulation.force("centers", d3.forceCenter(options.width / 2, options.height / 2));
        /** Restarting the simulation internal timer */
        this.simulation.restart();
    };
    return ForceDirectedGraph;
}());
exports.ForceDirectedGraph = ForceDirectedGraph;
//# sourceMappingURL=force-directed-graph.js.map