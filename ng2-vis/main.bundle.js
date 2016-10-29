webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(75);
	var demo_module_1 = __webpack_require__(289);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(demo_module_1.VisDemoModule);
	

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(287));
	__export(__webpack_require__(118));
	

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(13);
	var Vis = __webpack_require__(73);
	var VisNetworkService = (function () {
	    function VisNetworkService() {
	        this._networks = [];
	        this.click = new core_1.EventEmitter();
	        this.doubleClick = new core_1.EventEmitter();
	        this.oncontext = new core_1.EventEmitter();
	        this.hold = new core_1.EventEmitter();
	        this.release = new core_1.EventEmitter();
	        this.select = new core_1.EventEmitter();
	        this.selectNode = new core_1.EventEmitter();
	        this.selectEdge = new core_1.EventEmitter();
	        this.deselectNode = new core_1.EventEmitter();
	        this.deselectEdge = new core_1.EventEmitter();
	        this.dragStart = new core_1.EventEmitter();
	        this.dragging = new core_1.EventEmitter();
	        this.dragEnd = new core_1.EventEmitter();
	        this.hoverNode = new core_1.EventEmitter();
	        this.blurNode = new core_1.EventEmitter();
	        this.hoverEdge = new core_1.EventEmitter();
	        this.blurEdge = new core_1.EventEmitter();
	        this.zoom = new core_1.EventEmitter();
	        this.showPopup = new core_1.EventEmitter();
	        this.hidePopup = new core_1.EventEmitter();
	        this.startStabilizing = new core_1.EventEmitter();
	        this.stabilizationProgress = new core_1.EventEmitter();
	        this.stabilizationIterationsDone = new core_1.EventEmitter();
	        this.stabilized = new core_1.EventEmitter();
	        this.resize = new core_1.EventEmitter();
	        this.initRedraw = new core_1.EventEmitter();
	        this.beforeDrawing = new core_1.EventEmitter();
	        this.afterDrawing = new core_1.EventEmitter();
	        this.animationFinished = new core_1.EventEmitter();
	        this.configChange = new core_1.EventEmitter();
	    }
	    VisNetworkService.prototype.create = function (visNetwork, container, data, options) {
	        this._networks[visNetwork] = new Vis.Network(container, data, options);
	    };
	    VisNetworkService.prototype.destroy = function (visNetwork) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].destroy();
	            delete this._networks[visNetwork];
	        }
	    };
	    VisNetworkService.prototype.on = function (visNetwork, eventName) {
	        if (this._networks[visNetwork]) {
	            var that_1 = this;
	            this._networks[visNetwork].on(eventName, function (params) {
	                var emitter = that_1[eventName];
	                if (emitter) {
	                    emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
	                }
	            });
	        }
	    };
	    VisNetworkService.prototype.off = function (visNetwork, eventName) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].off(eventName);
	        }
	    };
	    VisNetworkService.prototype.once = function (visNetwork, eventName) {
	        var _this = this;
	        if (this._networks[visNetwork]) {
	            var that_2 = this;
	            this._networks[visNetwork].on(eventName, function (params) {
	                var emitter = that_2[eventName];
	                if (emitter) {
	                    emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
	                    _this.off(visNetwork, eventName);
	                }
	            });
	        }
	    };
	    VisNetworkService.prototype.setData = function (visNetwork, data) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].setData(data);
	        }
	    };
	    VisNetworkService.prototype.setOptions = function (visNetwork, options) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].setOptions(options);
	        }
	    };
	    VisNetworkService.prototype.selectNodes = function (visNetwork, nodeIds, highlightEdges) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].selectNodes(nodeIds, highlightEdges);
	        }
	    };
	    VisNetworkService.prototype.getSelection = function (visNetwork) {
	        if (this._networks[visNetwork]) {
	            return this._networks[visNetwork].getSelection();
	        }
	        return undefined;
	    };
	    VisNetworkService.prototype.getSelectedNodes = function (visNetwork) {
	        if (this._networks[visNetwork]) {
	            return this._networks[visNetwork].getSelectedNodes();
	        }
	        return undefined;
	    };
	    VisNetworkService.prototype.getSelectedEdges = function (visNetwork) {
	        if (this._networks[visNetwork]) {
	            return this._networks[visNetwork].getSelectedEdges();
	        }
	        return undefined;
	    };
	    VisNetworkService.prototype.unselectAll = function (visNetwork) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].unselectAll();
	        }
	    };
	    VisNetworkService.prototype.fit = function (visNetwork, options) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].fit(options);
	        }
	    };
	    VisNetworkService.prototype.redraw = function (visNetwork) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].redraw();
	        }
	    };
	    VisNetworkService.prototype.enableEditMode = function (visNetwork) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].enableEditMode();
	        }
	    };
	    VisNetworkService.prototype.addEdgeMode = function (visNetwork) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].addEdgeMode();
	        }
	    };
	    VisNetworkService.prototype.disableEditMode = function (visNetwork) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].disableEditMode();
	        }
	    };
	    VisNetworkService.prototype.deleteSelected = function (visNetwork) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].deleteSelected();
	        }
	    };
	    VisNetworkService.prototype.cluster = function (visNetwork, options) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].cluster(options);
	        }
	    };
	    VisNetworkService.prototype.openCluster = function (visNetwork, nodeId, options) {
	        if (this._networks[visNetwork]) {
	            this._networks[visNetwork].openCluster(nodeId, options);
	        }
	    };
	    VisNetworkService.prototype.isCluster = function (visNetwork, nodeId) {
	        if (this._networks[visNetwork]) {
	            return this._networks[visNetwork].isCluster(nodeId);
	        }
	        return false;
	    };
	    VisNetworkService.prototype.getSeed = function (visNetwork) {
	        if (this._networks[visNetwork]) {
	            return this._networks[visNetwork].getSeed();
	        }
	        return -1;
	    };
	    VisNetworkService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], VisNetworkService);
	    return VisNetworkService;
	}());
	exports.VisNetworkService = VisNetworkService;
	

/***/ },

/***/ 120:
/***/ function(module, exports) {

	module.exports = ".network-canvas {\n    width: 600px;\n    height: 400px;\n    border: 1px solid lightgray;\n}"

/***/ },

/***/ 121:
/***/ function(module, exports) {

	module.exports = "<h2>Network example</h2>\n\n<div class=\"network-canvas\" [visNetwork]=\"visNetwork\" [visNetworkData]=\"visNetworkData\" [visNetworkOptions]=\"visNetworkOptions\" (initialized)=\"networkInitialized()\"></div>\n"

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(13);
	var Vis = __webpack_require__(73);
	var vis_network_service_1 = __webpack_require__(118);
	var VisNetworkDirective = (function () {
	    function VisNetworkDirective(elementRef, visNetworkService) {
	        this.elementRef = elementRef;
	        this.visNetworkService = visNetworkService;
	        this.initialized = new core_1.EventEmitter();
	        this._visNetworkContainer = elementRef.nativeElement;
	    }
	    VisNetworkDirective.prototype.ngOnChanges = function (changes) {
	        if (this.visNetwork && this.visNetworkData) {
	            this.createNetwork();
	        }
	    };
	    VisNetworkDirective.prototype.ngOnDestroy = function () {
	        this.visNetworkService.destroy(this.visNetwork);
	    };
	    VisNetworkDirective.prototype.createNetwork = function () {
	        this.visNetworkService.create(this.visNetwork, this._visNetworkContainer, this.visNetworkData, this.visNetworkOptions);
	        this.initialized.emit(this.visNetwork);
	    };
	    __decorate([
	        core_1.Input('visNetwork'), 
	        __metadata('design:type', String)
	    ], VisNetworkDirective.prototype, "visNetwork", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], VisNetworkDirective.prototype, "visNetworkData", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], VisNetworkDirective.prototype, "visNetworkOptions", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], VisNetworkDirective.prototype, "initialized", void 0);
	    VisNetworkDirective = __decorate([
	        core_1.Directive({
	            selector: '[visNetwork]'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, vis_network_service_1.VisNetworkService])
	    ], VisNetworkDirective);
	    return VisNetworkDirective;
	}());
	exports.VisNetworkDirective = VisNetworkDirective;
	

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(13);
	var DemoComponent = (function () {
	    function DemoComponent() {
	    }
	    DemoComponent = __decorate([
	        core_1.Component({
	            selector: 'example-app',
	            template: "\n    <div class=\"examples\">\n      <network-example></network-example>\n    </div>\n  ",
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DemoComponent);
	    return DemoComponent;
	}());
	exports.DemoComponent = DemoComponent;
	

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(13);
	var forms_1 = __webpack_require__(74);
	var platform_browser_1 = __webpack_require__(52);
	var common_1 = __webpack_require__(51);
	var network_example_component_1 = __webpack_require__(290);
	var ng2_vis_1 = __webpack_require__(291);
	var demo_component_1 = __webpack_require__(288);
	var VisDemoModule = (function () {
	    function VisDemoModule() {
	    }
	    VisDemoModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                demo_component_1.DemoComponent,
	                network_example_component_1.VisNetworkExampleComponent
	            ],
	            imports: [
	                platform_browser_1.BrowserModule,
	                forms_1.FormsModule,
	                ng2_vis_1.VisModule,
	                common_1.CommonModule
	            ],
	            providers: [],
	            bootstrap: [demo_component_1.DemoComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], VisDemoModule);
	    return VisDemoModule;
	}());
	exports.VisDemoModule = VisDemoModule;
	

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(13);
	var network_1 = __webpack_require__(117);
	var VisNetworkExampleComponent = (function () {
	    function VisNetworkExampleComponent(visNetworkService) {
	        this.visNetworkService = visNetworkService;
	        this.visNetwork = 'networkId1';
	    }
	    VisNetworkExampleComponent.prototype.networkInitialized = function () {
	        var _this = this;
	        // now we can use the service to register on events
	        this.visNetworkService.on(this.visNetwork, 'click');
	        // open your console/dev tools to see the click params
	        this.visNetworkService.click
	            .subscribe(function (eventData) {
	            if (eventData[0] === _this.visNetwork) {
	                console.log(eventData[1]);
	            }
	        });
	    };
	    VisNetworkExampleComponent.prototype.ngOnInit = function () {
	        this.visNetworkData = {
	            nodes: [
	                { id: '1', label: 'Node 1' },
	                { id: '2', label: 'Node 2' },
	                { id: '3', label: 'Node 3' },
	                { id: '4', label: 'Node 4' },
	                { id: '5', label: 'Node 5' }
	            ],
	            edges: [
	                { from: '1', to: '3' },
	                { from: '1', to: '2' },
	                { from: '2', to: '4' },
	                { from: '2', to: '5' }
	            ]
	        };
	        this.visNetworkOptions = {};
	    };
	    VisNetworkExampleComponent.prototype.ngOnDestroy = function () {
	        this.visNetworkService.off(this.visNetwork, 'click');
	    };
	    VisNetworkExampleComponent = __decorate([
	        core_1.Component({
	            selector: 'network-example',
	            template: __webpack_require__(121),
	            styles: [
	                __webpack_require__(120)
	            ]
	        }), 
	        __metadata('design:paramtypes', [network_1.VisNetworkService])
	    ], VisNetworkExampleComponent);
	    return VisNetworkExampleComponent;
	}());
	exports.VisNetworkExampleComponent = VisNetworkExampleComponent;
	

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(13);
	var network_1 = __webpack_require__(117);
	var VisModule = (function () {
	    function VisModule() {
	    }
	    VisModule = __decorate([
	        core_1.NgModule({
	            exports: [network_1.VisNetworkDirective],
	            declarations: [network_1.VisNetworkDirective],
	            providers: [network_1.VisNetworkService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], VisModule);
	    return VisModule;
	}());
	exports.VisModule = VisModule;
	

/***/ }

});
//# sourceMappingURL=main.map