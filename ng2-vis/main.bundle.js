webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(85);
	var demo_module_1 = __webpack_require__(327);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(demo_module_1.VisDemoModule);
	

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var Vis = __webpack_require__(83);
	var VisTimelineItems = (function (_super) {
	    __extends(VisTimelineItems, _super);
	    function VisTimelineItems(data, options) {
	        _super.call(this, data, options);
	    }
	    VisTimelineItems.prototype.getLength = function () {
	        return this.length;
	    };
	    VisTimelineItems.prototype.add = function (data, senderId) {
	        return _super.prototype.add.call(this, data, senderId);
	    };
	    VisTimelineItems.prototype.clear = function (senderId) {
	        return _super.prototype.clear.call(this, senderId);
	    };
	    VisTimelineItems.prototype.distinct = function (field) {
	        return _super.prototype.distinct.call(this, field);
	    };
	    VisTimelineItems.prototype.flush = function () {
	        _super.prototype.flush.call(this);
	    };
	    VisTimelineItems.prototype.forEach = function (callback, options) {
	        _super.prototype.forEach.call(this, callback, options);
	    };
	    VisTimelineItems.prototype.getAll = function (options) {
	        return _super.prototype.get.call(this, options);
	    };
	    VisTimelineItems.prototype.getById = function (id, options) {
	        return _super.prototype.get.call(this, id, options);
	    };
	    VisTimelineItems.prototype.getByIds = function (ids, options) {
	        return _super.prototype.get.call(this, ids, options);
	    };
	    VisTimelineItems.prototype.getDataSet = function () {
	        return _super.prototype.getDataSet.call(this);
	    };
	    VisTimelineItems.prototype.getIds = function (options) {
	        return _super.prototype.getIds.call(this, options);
	    };
	    VisTimelineItems.prototype.map = function (callback, options) {
	        return _super.prototype.map.call(this, callback, options);
	    };
	    VisTimelineItems.prototype.max = function (field) {
	        return _super.prototype.max.call(this, field);
	    };
	    VisTimelineItems.prototype.min = function (field) {
	        return _super.prototype.min.call(this, field);
	    };
	    VisTimelineItems.prototype.on = function (event, callback) {
	        _super.prototype.on.call(this, event, callback);
	    };
	    VisTimelineItems.prototype.off = function (event, callback) {
	        _super.prototype.off.call(this, event, callback);
	    };
	    VisTimelineItems.prototype.removeItems = function (ids, senderId) {
	        return _super.prototype.remove.call(this, ids, senderId);
	    };
	    VisTimelineItems.prototype.setOptions = function (options) {
	        _super.prototype.setOptions.call(this, options);
	    };
	    VisTimelineItems.prototype.update = function (data, senderId) {
	        return _super.prototype.update.call(this, data, senderId);
	    };
	    return VisTimelineItems;
	}(Vis.DataSet));
	exports.VisTimelineItems = VisTimelineItems;
	var VisTimelineGroups = (function (_super) {
	    __extends(VisTimelineGroups, _super);
	    function VisTimelineGroups(data, options) {
	        _super.call(this, data, options);
	    }
	    VisTimelineGroups.prototype.getLength = function () {
	        return this.length;
	    };
	    VisTimelineGroups.prototype.add = function (data, senderId) {
	        return _super.prototype.add.call(this, data, senderId);
	    };
	    VisTimelineGroups.prototype.clear = function (senderId) {
	        return _super.prototype.clear.call(this, senderId);
	    };
	    VisTimelineGroups.prototype.distinct = function (field) {
	        return _super.prototype.distinct.call(this, field);
	    };
	    VisTimelineGroups.prototype.flush = function () {
	        _super.prototype.flush.call(this);
	    };
	    VisTimelineGroups.prototype.forEach = function (callback, options) {
	        _super.prototype.forEach.call(this, callback, options);
	    };
	    VisTimelineGroups.prototype.getAll = function (options) {
	        return _super.prototype.get.call(this, options);
	    };
	    VisTimelineGroups.prototype.getById = function (id, options) {
	        return _super.prototype.get.call(this, id, options);
	    };
	    VisTimelineGroups.prototype.getByIds = function (ids, options) {
	        return _super.prototype.get.call(this, ids, options);
	    };
	    VisTimelineGroups.prototype.getDataSet = function () {
	        return _super.prototype.getDataSet.call(this);
	    };
	    VisTimelineGroups.prototype.getIds = function (options) {
	        return _super.prototype.getIds.call(this, options);
	    };
	    VisTimelineGroups.prototype.map = function (callback, options) {
	        return _super.prototype.map.call(this, callback, options);
	    };
	    VisTimelineGroups.prototype.max = function (field) {
	        return _super.prototype.max.call(this, field);
	    };
	    VisTimelineGroups.prototype.min = function (field) {
	        return _super.prototype.min.call(this, field);
	    };
	    VisTimelineGroups.prototype.on = function (event, callback) {
	        _super.prototype.on.call(this, event, callback);
	    };
	    VisTimelineGroups.prototype.off = function (event, callback) {
	        _super.prototype.off.call(this, event, callback);
	    };
	    VisTimelineGroups.prototype.removeItems = function (ids, senderId) {
	        return _super.prototype.remove.call(this, ids, senderId);
	    };
	    VisTimelineGroups.prototype.setOptions = function (options) {
	        _super.prototype.setOptions.call(this, options);
	    };
	    VisTimelineGroups.prototype.update = function (data, senderId) {
	        return _super.prototype.update.call(this, data, senderId);
	    };
	    return VisTimelineGroups;
	}(Vis.DataSet));
	exports.VisTimelineGroups = VisTimelineGroups;
	var VisTimeline = (function (_super) {
	    __extends(VisTimeline, _super);
	    function VisTimeline() {
	        _super.apply(this, arguments);
	    }
	    return VisTimeline;
	}(Vis.Timeline));
	exports.VisTimeline = VisTimeline;
	__export(__webpack_require__(135));
	__export(__webpack_require__(325));
	

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var Vis = __webpack_require__(83);
	var VisNetwork = (function (_super) {
	    __extends(VisNetwork, _super);
	    function VisNetwork() {
	        _super.apply(this, arguments);
	    }
	    return VisNetwork;
	}(Vis.Network));
	exports.VisNetwork = VisNetwork;
	var VisNodes = (function (_super) {
	    __extends(VisNodes, _super);
	    function VisNodes(data, options) {
	        _super.call(this, data, options);
	    }
	    VisNodes.prototype.getLength = function () {
	        return this.length;
	    };
	    VisNodes.prototype.add = function (data, senderId) {
	        return _super.prototype.add.call(this, data, senderId);
	    };
	    VisNodes.prototype.clear = function (senderId) {
	        return _super.prototype.clear.call(this, senderId);
	    };
	    VisNodes.prototype.distinct = function (field) {
	        return _super.prototype.distinct.call(this, field);
	    };
	    VisNodes.prototype.flush = function () {
	        _super.prototype.flush.call(this);
	    };
	    VisNodes.prototype.forEach = function (callback, options) {
	        _super.prototype.forEach.call(this, callback, options);
	    };
	    VisNodes.prototype.getAll = function (options) {
	        return _super.prototype.get.call(this, options);
	    };
	    VisNodes.prototype.getById = function (id, options) {
	        return _super.prototype.get.call(this, id, options);
	    };
	    VisNodes.prototype.getByIds = function (ids, options) {
	        return _super.prototype.get.call(this, ids, options);
	    };
	    VisNodes.prototype.getDataSet = function () {
	        return _super.prototype.getDataSet.call(this);
	    };
	    VisNodes.prototype.getIds = function (options) {
	        return _super.prototype.getIds.call(this, options);
	    };
	    VisNodes.prototype.map = function (callback, options) {
	        return _super.prototype.map.call(this, callback, options);
	    };
	    VisNodes.prototype.max = function (field) {
	        return _super.prototype.max.call(this, field);
	    };
	    VisNodes.prototype.min = function (field) {
	        return _super.prototype.min.call(this, field);
	    };
	    VisNodes.prototype.on = function (event, callback) {
	        _super.prototype.on.call(this, event, callback);
	    };
	    VisNodes.prototype.off = function (event, callback) {
	        _super.prototype.off.call(this, event, callback);
	    };
	    VisNodes.prototype.removeItems = function (ids, senderId) {
	        return _super.prototype.remove.call(this, ids, senderId);
	    };
	    VisNodes.prototype.setOptions = function (options) {
	        _super.prototype.setOptions.call(this, options);
	    };
	    VisNodes.prototype.update = function (data, senderId) {
	        return _super.prototype.update.call(this, data, senderId);
	    };
	    return VisNodes;
	}(Vis.DataSet));
	exports.VisNodes = VisNodes;
	var VisEdges = (function (_super) {
	    __extends(VisEdges, _super);
	    function VisEdges(data, options) {
	        _super.call(this, data, options);
	    }
	    VisEdges.prototype.getLength = function () {
	        return this.length;
	    };
	    VisEdges.prototype.add = function (data, senderId) {
	        return _super.prototype.add.call(this, data, senderId);
	    };
	    VisEdges.prototype.clear = function (senderId) {
	        return _super.prototype.clear.call(this, senderId);
	    };
	    VisEdges.prototype.distinct = function (field) {
	        return _super.prototype.distinct.call(this, field);
	    };
	    VisEdges.prototype.flush = function () {
	        _super.prototype.flush.call(this);
	    };
	    VisEdges.prototype.forEach = function (callback, options) {
	        _super.prototype.forEach.call(this, callback, options);
	    };
	    VisEdges.prototype.getAll = function (options) {
	        return _super.prototype.get.call(this, options);
	    };
	    VisEdges.prototype.getById = function (id, options) {
	        return _super.prototype.get.call(this, id, options);
	    };
	    VisEdges.prototype.getByIds = function (ids, options) {
	        return _super.prototype.get.call(this, ids, options);
	    };
	    VisEdges.prototype.getDataSet = function () {
	        return _super.prototype.getDataSet.call(this);
	    };
	    VisEdges.prototype.getIds = function (options) {
	        return _super.prototype.getIds.call(this, options);
	    };
	    VisEdges.prototype.map = function (callback, options) {
	        return _super.prototype.map.call(this, callback, options);
	    };
	    VisEdges.prototype.max = function (field) {
	        return _super.prototype.max.call(this, field);
	    };
	    VisEdges.prototype.min = function (field) {
	        return _super.prototype.min.call(this, field);
	    };
	    VisEdges.prototype.on = function (event, callback) {
	        _super.prototype.on.call(this, event, callback);
	    };
	    VisEdges.prototype.off = function (event, callback) {
	        _super.prototype.off.call(this, event, callback);
	    };
	    VisEdges.prototype.removeItems = function (ids, senderId) {
	        return _super.prototype.remove.call(this, ids, senderId);
	    };
	    VisEdges.prototype.setOptions = function (options) {
	        _super.prototype.setOptions.call(this, options);
	    };
	    VisEdges.prototype.update = function (data, senderId) {
	        return _super.prototype.update.call(this, data, senderId);
	    };
	    return VisEdges;
	}(Vis.DataSet));
	exports.VisEdges = VisEdges;
	__export(__webpack_require__(324));
	__export(__webpack_require__(134));
	

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var OuterSubscriber = (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber_1.Subscriber));
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(26);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.iterator) {
	        exports.$$iterator = Symbol.iterator;
	    }
	    else if (typeof Symbol.for === 'function') {
	        exports.$$iterator = Symbol.for('iterator');
	    }
	}
	else {
	    if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
	        // Bug for mozilla version
	        exports.$$iterator = '@@iterator';
	    }
	    else if (root_1.root.Map) {
	        // es6-shim specific logic
	        var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
	                exports.$$iterator = key;
	                break;
	            }
	        }
	    }
	    else {
	        exports.$$iterator = '@@iterator';
	    }
	}
	//# sourceMappingURL=iterator.js.map

/***/ },

/***/ 62:
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an Observable or a sequence was queried but has no
	 * elements.
	 *
	 * @see {@link first}
	 * @see {@link last}
	 * @see {@link single}
	 *
	 * @class EmptyError
	 */
	var EmptyError = (function (_super) {
	    __extends(EmptyError, _super);
	    function EmptyError() {
	        var err = _super.call(this, 'no elements in sequence');
	        this.name = err.name = 'EmptyError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return EmptyError;
	}(Error));
	exports.EmptyError = EmptyError;
	//# sourceMappingURL=EmptyError.js.map

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(26);
	var isArray_1 = __webpack_require__(63);
	var isPromise_1 = __webpack_require__(96);
	var Observable_1 = __webpack_require__(11);
	var iterator_1 = __webpack_require__(59);
	var InnerSubscriber_1 = __webpack_require__(145);
	var observable_1 = __webpack_require__(60);
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.closed) {
	        return null;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return null;
	        }
	        else {
	            return result.subscribe(destination);
	        }
	    }
	    if (isArray_1.isArray(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.closed) {
	            destination.complete();
	        }
	    }
	    else if (isPromise_1.isPromise(result)) {
	        result.then(function (value) {
	            if (!destination.closed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) { return destination.error(err); })
	            .then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            root_1.root.setTimeout(function () { throw err; });
	        });
	        return destination;
	    }
	    else if (typeof result[iterator_1.$$iterator] === 'function') {
	        var iterator = result[iterator_1.$$iterator]();
	        do {
	            var item = iterator.next();
	            if (item.done) {
	                destination.complete();
	                break;
	            }
	            destination.next(item.value);
	            if (destination.closed) {
	                break;
	            }
	        } while (true);
	    }
	    else if (typeof result[observable_1.$$observable] === 'function') {
	        var obs = result[observable_1.$$observable]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error(new Error('invalid observable'));
	        }
	        else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    }
	    else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	    return null;
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(11);
	var ScalarObservable_1 = __webpack_require__(89);
	var EmptyObservable_1 = __webpack_require__(87);
	var isScheduler_1 = __webpack_require__(167);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    /**
	     * Creates an Observable that emits some values you specify as arguments,
	     * immediately one after the other, and then emits a complete notification.
	     *
	     * <span class="informal">Emits the arguments you provide, then completes.
	     * </span>
	     *
	     * <img src="./img/of.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the arguments given, and the complete notification thereafter. It can
	     * be used for composing with other Observables, such as with {@link concat}.
	     * By default, it uses a `null` Scheduler, which means the `next`
	     * notifications are sent synchronously, although with a different Scheduler
	     * it is possible to determine when those notifications will be delivered.
	     *
	     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	     * var numbers = Rx.Observable.of(10, 20, 30);
	     * var letters = Rx.Observable.of('a', 'b', 'c');
	     * var interval = Rx.Observable.interval(1000);
	     * var result = numbers.concat(letters).concat(interval);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link throw}
	     *
	     * @param {...T} values Arguments that represent `next` values to be emitted.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the `next` notifications.
	     * @return {Observable<T>} An Observable that emits each given input value.
	     * @static true
	     * @name of
	     * @owner Observable
	     */
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.closed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.closed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(11);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (arg) {
	        var subscriber = arg.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(11);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	        if (scheduler) {
	            this._isScalar = false;
	        }
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.closed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.closed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(57);
	var subscribeToResult_1 = __webpack_require__(64);
	/**
	 * Converts a higher-order Observable into a first-order Observable which
	 * concurrently delivers all values that are emitted on the inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables.</span>
	 *
	 * <img src="./img/mergeAll.png" width="100%">
	 *
	 * `mergeAll` subscribes to an Observable that emits Observables, also known as
	 * a higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, it subscribes to that and delivers all the values from the
	 * inner Observable on the output Observable. The output Observable only
	 * completes once all inner Observables have completed. Any error delivered by
	 * a inner Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var firstOrder = higherOrder.mergeAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
	 * var firstOrder = higherOrder.mergeAll(2);
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link merge}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits values coming from all the
	 * inner Observables emitted by the source Observable.
	 * @method mergeAll
	 * @owner Observable
	 */
	function mergeAll(concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeAllOperator(concurrent));
	}
	exports.mergeAll = mergeAll;
	var MergeAllOperator = (function () {
	    function MergeAllOperator(concurrent) {
	        this.concurrent = concurrent;
	    }
	    MergeAllOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeAllSubscriber(observer, this.concurrent));
	    };
	    return MergeAllOperator;
	}());
	exports.MergeAllOperator = MergeAllOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeAllSubscriber = (function (_super) {
	    __extends(MergeAllSubscriber, _super);
	    function MergeAllSubscriber(destination, concurrent) {
	        _super.call(this, destination);
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	    }
	    MergeAllSubscriber.prototype._next = function (observable) {
	        if (this.active < this.concurrent) {
	            this.active++;
	            this.add(subscribeToResult_1.subscribeToResult(this, observable));
	        }
	        else {
	            this.buffer.push(observable);
	        }
	    };
	    MergeAllSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeAllSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeAllSubscriber = MergeAllSubscriber;
	//# sourceMappingURL=mergeAll.js.map

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var subscribeToResult_1 = __webpack_require__(64);
	var OuterSubscriber_1 = __webpack_require__(57);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link mergeAll}.</span>
	 *
	 * <img src="./img/mergeMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an Observable, and then merging those resulting Observables and
	 * emitting the results of this merger.
	 *
	 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
	 * var letters = Rx.Observable.of('a', 'b', 'c');
	 * var result = letters.mergeMap(x =>
	 *   Rx.Observable.interval(1000).map(i => x+i)
	 * );
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and merging the results of the Observables obtained
	 * from this transformation.
	 * @method mergeMap
	 * @owner Observable
	 */
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	        resultSelector = null;
	    }
	    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
	}
	exports.mergeMap = mergeMap;
	var MergeMapOperator = (function () {
	    function MergeMapOperator(project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
	    };
	    return MergeMapOperator;
	}());
	exports.MergeMapOperator = MergeMapOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeMapSubscriber = (function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            this._tryNext(value);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapSubscriber.prototype._tryNext = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.active++;
	        this._innerSub(result, value, index);
	    };
	    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapSubscriber = MergeMapSubscriber;
	//# sourceMappingURL=mergeMap.js.map

/***/ },

/***/ 96:
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var index_1 = __webpack_require__(56);
	/**
	 * A service to create, manage and control VisNetwork instances.
	 *
	 * @export
	 * @class VisNetworkService
	 */
	var VisNetworkService = (function () {
	    function VisNetworkService() {
	        /**
	         * Fired when the user clicks the mouse or taps on a touchscreen device.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.click = new core_1.EventEmitter();
	        /**
	         * Fired when the user double clicks the mouse or double taps on a touchscreen device.
	         * Since a double click is in fact 2 clicks, 2 click events are fired, followed by a double click event.
	         * If you do not want to use the click events if a double click event is fired,
	         * just check the time between click events before processing them.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.doubleClick = new core_1.EventEmitter();
	        /**
	         * Fired when the user click on the canvas with the right mouse button.
	         * The right mouse button does not select by default.
	         * You can use the method getNodeAt to select the node if you want.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.oncontext = new core_1.EventEmitter();
	        /**
	         * Fired when the user clicks and holds the mouse or taps and holds on a touchscreen device.
	         * A click event is also fired in this case.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.hold = new core_1.EventEmitter();
	        /**
	         * Fired after drawing on the canvas has been completed.
	         * Can be used to draw on top of the network.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.release = new core_1.EventEmitter();
	        /**
	         * Fired when the selection has changed by user action.
	         * This means a node or edge has been selected, added to the selection or deselected.
	         * All select events are only triggered on click and hold.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.select = new core_1.EventEmitter();
	        /**
	         * Fired when a node has been selected by the user.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.selectNode = new core_1.EventEmitter();
	        /**
	         * Fired when a edge has been selected by the user.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.selectEdge = new core_1.EventEmitter();
	        /**
	         * Fired when a node (or nodes) has (or have) been deselected by the user.
	         * The previous selection is the list of nodes and edges that were selected before the last user event.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.deselectNode = new core_1.EventEmitter();
	        /**
	         * Fired when a edge (or edges) has (or have) been deselected by the user.
	         * The previous selection is the list of nodes and edges that were selected before the last user event.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.deselectEdge = new core_1.EventEmitter();
	        /**
	         * Fired when starting a drag.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.dragStart = new core_1.EventEmitter();
	        /**
	         * Fired when dragging node(s) or the view.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.dragging = new core_1.EventEmitter();
	        /**
	         * Fired when the drag has finished.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.dragEnd = new core_1.EventEmitter();
	        /**
	         * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over a node.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.hoverNode = new core_1.EventEmitter();
	        /**
	         * Fired if the option interaction:{hover:true} is enabled and
	         * the mouse moved away from a node it was hovering over before.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.blurNode = new core_1.EventEmitter();
	        /**
	         * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over an edge.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.hoverEdge = new core_1.EventEmitter();
	        /**
	         * Fired if the option interaction:{hover:true} is enabled and
	         * the mouse moved away from an edge it was hovering over before.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.blurEdge = new core_1.EventEmitter();
	        /**
	         * Fired when the user zooms in or out.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.zoom = new core_1.EventEmitter();
	        /**
	         * Fired when the popup (tooltip) is shown.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.showPopup = new core_1.EventEmitter();
	        /**
	         * Fired when the popup (tooltip) is hidden.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.hidePopup = new core_1.EventEmitter();
	        /**
	         * Fired when stabilization starts.
	         * This is also the case when you drag a node and the physics
	         * simulation restarts to stabilize again.
	         * Stabilization does not neccesarily imply 'without showing'.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.startStabilizing = new core_1.EventEmitter();
	        /**
	         * Fired when a multiple of the updateInterval number of iterations is reached.
	         * This only occurs in the 'hidden' stabilization.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.stabilizationProgress = new core_1.EventEmitter();
	        /**
	         * Fired when the 'hidden' stabilization finishes.
	         * This does not necessarily mean the network is stabilized;
	         * it could also mean that the amount of iterations defined in the options has been reached.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.stabilizationIterationsDone = new core_1.EventEmitter();
	        /**
	         * Fired when the 'hidden' stabilization finishes.
	         * This does not necessarily mean the network is stabilized;
	         * it could also mean that the amount of iterations defined in the options has been reached.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.stabilized = new core_1.EventEmitter();
	        /**
	         * Fired when the size of the canvas has been resized,
	         * either by a redraw call when the container div has changed in size,
	         * a setSize() call with new values or a setOptions() with new width and/or height values.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.resize = new core_1.EventEmitter();
	        /**
	         * Fired before the redrawing begins.
	         * The simulation step has completed at this point.
	         * Can be used to move custom elements before starting drawing the new frame.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.initRedraw = new core_1.EventEmitter();
	        /**
	         * Fired after the canvas has been cleared, scaled and translated to
	         * the viewing position but before all edges and nodes are drawn.
	         * Can be used to draw behind the network.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.beforeDrawing = new core_1.EventEmitter();
	        /**
	         * Fired after drawing on the canvas has been completed.
	         * Can be used to draw on top of the network.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.afterDrawing = new core_1.EventEmitter();
	        /**
	         * Fired when an animation is finished.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.animationFinished = new core_1.EventEmitter();
	        /**
	         * Fired when a user changes any option in the configurator.
	         * The options object can be used with the setOptions method or stringified using JSON.stringify().
	         * You do not have to manually put the options into the network: this is done automatically.
	         * You can use the event to store user options in the database.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkService
	         */
	        this.configChange = new core_1.EventEmitter();
	        this.networks = {};
	    }
	    /**
	     * Creates a new network instance.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {HTMLElement} container The HTML element that contains the network view.
	     * @param {VisNetworkData} data The initial network nodes and edges.
	     * @param {VisNetworkOptions} [options] The network options.
	     *
	     * @throws {Error} Thrown when a network with the same name already exists.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.create = function (visNetwork, container, data, options) {
	        if (this.networks[visNetwork]) {
	            throw new Error("Network with id " + visNetwork + " already exists.");
	        }
	        this.networks[visNetwork] = new index_1.VisNetwork(container, data, options);
	    };
	    /**
	     * Remove the network from the DOM and remove all Hammer bindings and references.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.destroy = function (visNetwork) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].destroy();
	            delete this.networks[visNetwork];
	        }
	    };
	    /**
	     * Activates an event.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisNetworkEvents} eventName The event name.
	     * @param {boolean} preventDefault Stops the default behavior of the event.
	     * @returns {boolean} Returns true when the event was activated.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.on = function (visNetwork, eventName, preventDefault) {
	        if (this.networks[visNetwork]) {
	            var that_1 = this;
	            this.networks[visNetwork].on(eventName, function (params) {
	                var emitter = that_1[eventName];
	                if (emitter) {
	                    emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
	                }
	                if (preventDefault && params.event) {
	                    params.event.preventDefault();
	                }
	            });
	            return true;
	        }
	        return false;
	    };
	    /**
	     * Deactivates an event.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisNetworkEvents} eventName The event name.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.off = function (visNetwork, eventName) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].off(eventName);
	        }
	    };
	    /**
	     * Activates an event listener only once.
	     * After it has taken place, the event listener will be removed.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisNetworkEvents} eventName The event name.
	     * @returns {boolean} Returns true when the event was activated.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.once = function (visNetwork, eventName) {
	        var _this = this;
	        if (this.networks[visNetwork]) {
	            var that_2 = this;
	            this.networks[visNetwork].on(eventName, function (params) {
	                var emitter = that_2[eventName];
	                if (emitter) {
	                    emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
	                    _this.off(visNetwork, eventName);
	                }
	            });
	            return true;
	        }
	        return false;
	    };
	    /**
	     * Override all the data in the network.
	     * If stabilization is enabled in the physics module,
	     * the network will stabilize again.
	     * This method is also performed when first initializing the network.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisNetworkData} data The network data.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.setData = function (visNetwork, data) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].setData(data);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Set the options.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisNetworkOptions} options The network options.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.setOptions = function (visNetwork, options) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].setOptions(options);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Selects the nodes corresponding to the id's in the input array.
	     * This method unselects all other objects before selecting its own objects.
	     * Does not fire events.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisId[]} nodeIds The node ids that should be selected.
	     * @param {boolean} [highlightEdges] If highlightEdges is true or undefined,
	     *                                   the neighbouring edges will also be selected.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.selectNodes = function (visNetwork, nodeIds, highlightEdges) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].selectNodes(nodeIds, highlightEdges);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Returns an object with selected nodes and edges ids.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @returns {{ nodes: VisId[], edges: VisId[] }}
	     * The selected node and edge ids or undefined when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.getSelection = function (visNetwork) {
	        if (this.networks[visNetwork]) {
	            return this.networks[visNetwork].getSelection();
	        }
	        return undefined;
	    };
	    /**
	     * Returns an array of selected node ids.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @returns {VisId[]} The selected node ids or undefined when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.getSelectedNodes = function (visNetwork) {
	        if (this.networks[visNetwork]) {
	            return this.networks[visNetwork].getSelectedNodes();
	        }
	        return undefined;
	    };
	    /**
	     * Returns an array of selected edge ids.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @returns {VisId[]} The selected edge ids or undefined when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.getSelectedEdges = function (visNetwork) {
	        if (this.networks[visNetwork]) {
	            return this.networks[visNetwork].getSelectedEdges();
	        }
	        return undefined;
	    };
	    /**
	     * Unselect all objects.
	     * Does not fire events.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.unselectAll = function (visNetwork) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].unselectAll();
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Zooms out so all nodes fit on the canvas.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisFitOptions} [options] Options to customize.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.fit = function (visNetwork, options) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].fit(options);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Redraw the network.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.redraw = function (visNetwork) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].redraw();
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Programatically enable the edit mode.
	     * Similar effect to pressing the edit button.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.enableEditMode = function (visNetwork) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].enableEditMode();
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Go into addEdge mode.
	     * The explaination from addNodeMode applies here as well.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.addEdgeMode = function (visNetwork) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].addEdgeMode();
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Programatically disable the edit mode.
	     * Similar effect to pressing the close icon
	     * (small cross in the corner of the toolbar).
	     *
	     * @param {string} visNetwork The network name/identifier.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.disableEditMode = function (visNetwork) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].disableEditMode();
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Delete selected.
	     * Having edit mode or manipulation enabled is not required.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.deleteSelected = function (visNetwork) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].deleteSelected();
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Makes a cluster.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisClusterOptions} [options] The joinCondition function is presented with all nodes.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.cluster = function (visNetwork, options) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].cluster(options);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * This method looks at the provided node and makes a cluster of it and all it's connected nodes.
	     * The behaviour can be customized by proving the options object.
	     * All options of this object are explained below.
	     * The joinCondition is only presented with the connected nodes.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisId} nodeId the id of the node
	     * @param {VisClusterOptions} [options] the cluster options
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.clusterByConnection = function (visNetwork, nodeId, options) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].clusterByConnection(nodeId, options);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * This method checks all nodes in the network and those with a equal or higher
	     * amount of edges than specified with the hubsize qualify.
	     * If a hubsize is not defined, the hubsize will be determined as the average
	     * value plus two standard deviations.
	     * For all qualifying nodes, clusterByConnection is performed on each of them.
	     * The options object is described for clusterByConnection and does the same here.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {number} [hubsize] optional hubsize
	     * @param {VisClusterOptions} [options] optional cluster options
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.clusterByHubsize = function (visNetwork, hubsize, options) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].clusterByHubsize(hubsize, options);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * This method will cluster all nodes with 1 edge with their respective connected node.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisClusterOptions} [options] optional cluster options
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.clusterOutliers = function (visNetwork, options) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].clusterOutliers(options);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Nodes can be in clusters.
	     * Clusters can also be in clusters.
	     * This function returns an array of nodeIds showing where the node is.
	     *
	     * Example:
	     * cluster 'A' contains cluster 'B', cluster 'B' contains cluster 'C',
	     * cluster 'C' contains node 'fred'.
	     *
	     * network.clustering.findNode('fred') will return ['A','B','C','fred'].
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisId} nodeId the node id.
	     * @returns {VisId[]} an array of nodeIds showing where the node is
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.findNode = function (visNetwork, nodeId) {
	        if (this.networks[visNetwork]) {
	            return this.networks[visNetwork].findNode(nodeId);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Similar to findNode in that it returns all the edge ids that were
	     * created from the provided edge during clustering.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisId} baseEdgeId the base edge id
	     * @returns {VisId[]} an array of edgeIds
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.getClusteredEdges = function (visNetwork, baseEdgeId) {
	        if (this.networks[visNetwork]) {
	            return this.networks[visNetwork].getClusteredEdges(baseEdgeId);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * When a clusteredEdgeId is available, this method will return the original
	     * baseEdgeId provided in data.edges ie.
	     * After clustering the 'SelectEdge' event is fired but provides only the clustered edge.
	     * This method can then be used to return the baseEdgeId.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisId} clusteredEdgeId
	     * @returns {VisId}
	     *
	     * @memberOf VisNetworkService
	     *
	     */
	    VisNetworkService.prototype.getBaseEdge = function (visNetwork, clusteredEdgeId) {
	        if (this.networks[visNetwork]) {
	            return this.networks[visNetwork].getBaseEdge(clusteredEdgeId);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Visible edges between clustered nodes are not the same edge as the ones provided
	     * in data.edges passed on network creation. With each layer of clustering, copies of
	     * the edges between clusters are created and the previous edges are hidden,
	     * until the cluster is opened. This method takes an edgeId (ie. a base edgeId from data.edges)
	     * and applys the options to it and any edges that were created from it while clustering.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisId} startEdgeId
	     * @param {VisEdgeOptions} [options]
	     *
	     * @memberOf VisNetworkService
	     *
	     */
	    VisNetworkService.prototype.updateEdge = function (visNetwork, startEdgeId, options) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].updateEdge(startEdgeId, options);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Clustered Nodes when created are not contained in the original data.nodes
	     * passed on network creation. This method updates the cluster node.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisId} clusteredNodeId
	     * @param {VisNodeOptions} options
	     *
	     * @memberOf VisNetworkService
	     *
	     */
	    VisNetworkService.prototype.updateClusteredNode = function (visNetwork, clusteredNodeId, options) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].updateClusteredNode(clusteredNodeId, options);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Returns an array of all nodeIds of the nodes that
	     * would be released if you open the cluster.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisId} clusterNodeId the id of the cluster node
	     * @returns {VisId[]}
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.getNodesInCluster = function (visNetwork, clusterNodeId) {
	        if (this.networks[visNetwork]) {
	            return this.networks[visNetwork].getNodesInCluster(clusterNodeId);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Opens the cluster, releases the contained nodes and edges,
	     * removing the cluster node and cluster edges.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisId} nodeId The node id that represents the cluster.
	     * @param {VisOpenClusterOptions} [options] Cluster options.
	     *
	     * @throws {Error} Thrown when the network does not exist.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.openCluster = function (visNetwork, nodeId, options) {
	        if (this.networks[visNetwork]) {
	            this.networks[visNetwork].openCluster(nodeId, options);
	        }
	        else {
	            throw new Error("Network with id " + visNetwork + " not found.");
	        }
	    };
	    /**
	     * Returns true if the node whose ID has been supplied is a cluster.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @param {VisId} nodeId The associated node id.
	     * @returns {boolean} True if the node whose ID has been supplied is a cluster.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.isCluster = function (visNetwork, nodeId) {
	        if (this.networks[visNetwork]) {
	            return this.networks[visNetwork].isCluster(nodeId);
	        }
	        return false;
	    };
	    /**
	     * If you like the layout of your network and would like it to start in the same way next time,
	     * ask for the seed using this method and put it in the layout.randomSeed option.
	     *
	     * @param {string} visNetwork The network name/identifier.
	     * @returns {number} The seed of the current network or -1 when the network is not defined.
	     *
	     * @memberOf VisNetworkService
	     */
	    VisNetworkService.prototype.getSeed = function (visNetwork) {
	        if (this.networks[visNetwork]) {
	            return this.networks[visNetwork].getSeed();
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

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var index_1 = __webpack_require__(43);
	/**
	 * A service to create, manage and control VisTimeline instances.
	 *
	 * @export
	 * @class VisTimelineService
	 */
	var VisTimelineService = (function () {
	    function VisTimelineService() {
	        /**
	         * Fired when the current time bar redraws.
	         * The rate depends on the zoom level.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.currentTimeTick = new core_1.EventEmitter();
	        /**
	         * Fired when clicked inside the Timeline.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.click = new core_1.EventEmitter();
	        /**
	         * Fired when right-clicked inside the Timeline.
	         * Note that in order to prevent the context menu from showing up,
	         * default behavior of the event must be stopped.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.contextmenu = new core_1.EventEmitter();
	        /**
	         * Fired when double clicked inside the Timeline.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.doubleClick = new core_1.EventEmitter();
	        /**
	         * 	Fired after the dragging of a group is finished.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.groupDragged = new core_1.EventEmitter();
	        /**
	         * Fired once after each graph redraw.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.changed = new core_1.EventEmitter();
	        /**
	         * Fired repeatedly when the timeline window is being changed.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.rangechange = new core_1.EventEmitter();
	        /**
	         * Fired once after the timeline window has been changed.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.rangechanged = new core_1.EventEmitter();
	        /**
	         * Fired after the user selects or deselects items by tapping or holding them.
	         * When a use taps an already selected item, the select event is fired again.
	         * Not fired when the method setSelectionis executed.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.select = new core_1.EventEmitter();
	        /**
	         * Fired when the user moves the mouse over an item.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.itemover = new core_1.EventEmitter();
	        /**
	         * Fired when the user moves the mouse out of an item.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.itemout = new core_1.EventEmitter();
	        /**
	         * Fired repeatedly when the user is dragging the custom time bar.
	         * Only available when the custom time bar is enabled.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.timechange = new core_1.EventEmitter();
	        /**
	         * Fired once after the user has dragged the custom time bar.
	         * Only available when the custom time bar is enabled.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineService
	         */
	        this.timechanged = new core_1.EventEmitter();
	        this.timelines = {};
	    }
	    /**
	     * Creates a new timeline instance.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {HTMLElement} container The HTML element that contains the timeline view.
	     * @param {VisTimelineItems} items The initial timeline items.
	     * @param {VisTimelineOptions} [options] The timeline options.
	     *
	     * @throws {Error} Thrown when timeline already exists.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.createWithItems = function (visTimeline, container, items, options) {
	        if (this.timelines[visTimeline]) {
	            throw new Error(this.alreadyExistsError(visTimeline));
	        }
	        this.timelines[visTimeline] = new index_1.VisTimeline(container, items, options);
	    };
	    /**
	     * Creates a new timeline instance.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {HTMLElement} container The HTML element that contains the timeline view.
	     * @param {VisTimelineItems} items The initial timeline items.
	     * @param {VisTimelineGroups} groups The initial timeline groups.
	     * @param {VisTimelineOptions} [options] The timeline options.
	     *
	     * @throws {Error} Thrown when timeline already exists.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.createWithItemsAndGroups = function (visTimeline, container, items, groups, options) {
	        if (this.timelines[visTimeline]) {
	            throw new Error(this.alreadyExistsError(visTimeline));
	        }
	        this.timelines[visTimeline] = new index_1.VisTimeline(container, items, groups, options);
	    };
	    /**
	     * Add new vertical bar representing a custom time that can be dragged by the user.
	     * The id is added as CSS class name of the custom time bar,
	     * allowing to style multiple time bars differently.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisDate} time Parameter time can be a Date, Number, or String, and is new Date() by default.
	     * @param {VisId} [id] Parameter id can be Number or String and is undefined by default.
	     * @returns {VisId} The method returns id of the created bar.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.addCustomTime = function (visTimeline, time, id) {
	        if (this.timelines[visTimeline]) {
	            return this.timelines[visTimeline].addCustomTime(time, id);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Adjust the visible window such that it fits all items.
	     * See also function focus(id).
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisTimelineFitOptions} [options] Optional options.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.fit = function (visTimeline, options) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].fit(options);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Adjust the visible window such that the selected item is centered on screen.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisId} id The id of the item.
	     * @param {VisTimelineFitOptions} [options] Options options.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.focusOnId = function (visTimeline, id, options) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].focus(id, options);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Adjust the visible window such that the selected items are centered on screen.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisId[]} ids The item ids.
	     * @param {VisTimelineFitOptions} [options] Optional options.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.focusOnIds = function (visTimeline, ids, options) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].focus(ids, options);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Get the current time.
	     * Only applicable when option showCurrentTime is true.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @returns {Date} The current time.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.getCurrentTime = function (visTimeline) {
	        if (this.timelines[visTimeline]) {
	            return this.timelines[visTimeline].getCurrentTime();
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Retrieve the custom time from the custom time bar with given id.
	     * Id is undefined by default.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisId} [id] The time bar id.
	     * @returns {Date} The custom time.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.getCustomTime = function (visTimeline, id) {
	        if (this.timelines[visTimeline]) {
	            return this.timelines[visTimeline].getCustomTime(id);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Returns an Object with relevant properties from an event.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {Event} event The event.
	     * @returns {VisTimelineEventPropertiesResult} Properties of an event
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.getEventProperties = function (visTimeline, event) {
	        if (this.timelines[visTimeline]) {
	            return this.timelines[visTimeline].getEventProperties(event);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Get the range of all the items as an object containing min: Date and max: Date.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @returns {{ min: Date, max: Date }} The min and max dates.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.getItemRange = function (visTimeline) {
	        if (this.timelines[visTimeline]) {
	            return this.timelines[visTimeline].getItemRange();
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Get an array with the ids of the currently selected items.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @returns {VisId[]} The currently selected items.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.getSelection = function (visTimeline) {
	        if (this.timelines[visTimeline]) {
	            return this.timelines[visTimeline].getSelection();
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Get an array with the ids of the currently visible items.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @returns {VisId[]} The currently visible items.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.getVisibleItems = function (visTimeline) {
	        if (this.timelines[visTimeline]) {
	            return this.timelines[visTimeline].getVisibleItems();
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Get the current visible window.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @returns {{ start: Date, end: Date }} Returns an object with properties start: Date and end: Date.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.getWindow = function (visTimeline) {
	        if (this.timelines[visTimeline]) {
	            return this.timelines[visTimeline].getWindow();
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * 	Move the window such that given time is centered on screen.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisDate} time Parameter time can be a Date, Number, or String.
	     * @param {VisTimelineFitOptions} [options] Optional options.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.moveTo = function (visTimeline, time, options) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].moveTo(time, options);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Force a redraw of the Timeline.
	     * The size of all items will be recalculated.
	     * Can be useful to manually redraw when option autoResize=false and the window has been resized,
	     * or when the items CSS has been changed.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.redraw = function (visTimeline) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].redraw();
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Remove vertical bars previously added to the timeline via addCustomTime method.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisId} id Parameter id is the ID of the custom vertical bar returned by addCustomTime method.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.removeCustomTime = function (visTimeline, id) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].removeCustomTime(id);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Set a current time.
	     * This can be used for example to ensure that a client's time is synchronized
	     * with a shared server time.
	     * Only applicable when option showCurrentTime is true.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisDate} time time can be a Date object, numeric timestamp, or ISO date string.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.setCurrentTime = function (visTimeline, time) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].setCurrentTime(time);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * 	Adjust the time of a custom time bar.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisDate} time Parameter time can be a Date object, numeric timestamp, or ISO date string.
	     * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.setCustomTime = function (visTimeline, time, id) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].setCustomTime(time, id);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Adjust the title attribute of a custom time bar.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {string} title Parameter title is the string to be set as title.
	     *                       Use empty string to hide the title completely.
	     * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.setCustomTimeTitle = function (visTimeline, title, id) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].setCustomTimeTitle(title, id);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Set both groups and items at once.
	     * Both properties are optional.
	     * This is a convenience method for individually calling both setItems(items) and setGroups(groups).
	     * Both items and groups can be an Array with Objects, a DataSet (offering 2 way data binding),
	     * or a DataView (offering 1 way data binding).
	     * For each of the groups, the items of the timeline are filtered on the property group,
	     * which must correspond with the id of the group.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {{ groups?: VisTimelineGroups; items?: VisTimelineItems }} data The new timline data.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.setData = function (visTimeline, data) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].setData(data);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Set a data set with groups for the Timeline.
	     * For each of the groups, the items of the timeline are filtered on the property group,
	     * which must correspond with the id of the group.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisTimelineGroups} groups a DataSet (offering 2 way data binding)
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.setGroups = function (visTimeline, groups) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].setGroups(groups);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Set a data set with items for the Timeline.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisTimelineItems} items can be an Array with Objects, a DataSet (offering 2 way data binding)
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.setItems = function (visTimeline, items) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].setItems(items);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Set or update options.
	     * It is possible to change any option of the timeline at any time.
	     * You can for example switch orientation on the fly.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisTimelineOptions} options The new options of the timeline.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.setOptions = function (visTimeline, options) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].setOptions(options);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Select one item by its id.#
	     * The currently selected items will be unselected.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisId} id The id of the item that should be selected.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.setSelectionToId = function (visTimeline, id) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].setSelection(id);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Select multiple items by their id.
	     * The currently selected items will be unselected.
	     * To unselect all selected items, call `setSelection([])`.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisId[]} ids The ids of the irems that should be selected.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.setSelectionToIds = function (visTimeline, ids) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].setSelection(ids);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Set the current visible window.
	     *
	     * If the parameter value of start or end is null, the parameter will be left unchanged.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisDate} start The parameters start can be a Date, Number, or String.
	     * @param {VisDate} end The parameters end can be a Date, Number, or String.
	     * @param {VisTimelineFitOptions} [options] Optional options.
	     *
	     * @throws {Error} Thrown when timeline does not exist.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.setWindow = function (visTimeline, start, end, options) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].setWindow(start, end, options);
	        }
	        else {
	            throw new Error(this.doesNotExistError(visTimeline));
	        }
	    };
	    /**
	     * Destroy the Timeline.
	     * The timeline is removed from memory.
	     * All DOM elements and event listeners are cleaned up.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.destroy = function (visTimeline) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].destroy();
	            delete this.timelines[visTimeline];
	        }
	    };
	    /**
	     * Activates an event.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisTimelineEvents} eventName The event name.
	     * @param {boolean} preventDefault Stops the default behavior of the event.
	     * @returns {boolean} Returns true when the event was activated.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.on = function (visTimeline, eventName, preventDefault) {
	        if (this.timelines[visTimeline]) {
	            var that_1 = this;
	            this.timelines[visTimeline].on(eventName, function (params) {
	                var emitter = that_1[eventName];
	                if (emitter) {
	                    emitter.emit(params ? [visTimeline].concat(params) : visTimeline);
	                }
	                if (preventDefault && params.event) {
	                    params.event.preventDefault();
	                }
	            });
	            return true;
	        }
	        return false;
	    };
	    /**
	     * Deactivates an event.
	     *
	     * @param {string} visTimeline The timeline name/identifier.
	     * @param {VisTimelineEvents} eventName The event name.
	     *
	     * @memberOf VisTimelineService
	     */
	    VisTimelineService.prototype.off = function (visTimeline, eventName) {
	        if (this.timelines[visTimeline]) {
	            this.timelines[visTimeline].off(eventName, undefined);
	        }
	    };
	    VisTimelineService.prototype.doesNotExistError = function (visTimeline) {
	        return "Timeline with id " + visTimeline + " does not exist.";
	    };
	    VisTimelineService.prototype.alreadyExistsError = function (visTimeline) {
	        return "Timeline with id " + visTimeline + " already exists.";
	    };
	    VisTimelineService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], VisTimelineService);
	    return VisTimelineService;
	}());
	exports.VisTimelineService = VisTimelineService;
	

/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v3.2.4
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */(function (global, factory) {
	     true ? factory(exports, __webpack_require__(44), __webpack_require__(8), __webpack_require__(144), __webpack_require__(46), __webpack_require__(152), __webpack_require__(153), __webpack_require__(156), __webpack_require__(157), __webpack_require__(159), __webpack_require__(161), __webpack_require__(92), __webpack_require__(163), __webpack_require__(11), __webpack_require__(154), __webpack_require__(155), __webpack_require__(62), __webpack_require__(90), __webpack_require__(160), __webpack_require__(91), __webpack_require__(45), __webpack_require__(158)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/core', 'rxjs/BehaviorSubject', 'rxjs/Subject', 'rxjs/observable/from', 'rxjs/observable/of', 'rxjs/operator/concatMap', 'rxjs/operator/every', 'rxjs/operator/first', 'rxjs/operator/map', 'rxjs/operator/mergeMap', 'rxjs/operator/reduce', 'rxjs/Observable', 'rxjs/operator/catch', 'rxjs/operator/concatAll', 'rxjs/util/EmptyError', 'rxjs/observable/fromPromise', 'rxjs/operator/last', 'rxjs/operator/mergeAll', '@angular/platform-browser', 'rxjs/operator/filter'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.router = global.ng.router || {}),global.ng.common,global.ng.core,global.Rx,global.Rx,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.ng.platformBrowser,global.Rx.Observable.prototype));
	}(this, function (exports,_angular_common,_angular_core,rxjs_BehaviorSubject,rxjs_Subject,rxjs_observable_from,rxjs_observable_of,rxjs_operator_concatMap,rxjs_operator_every,rxjs_operator_first,rxjs_operator_map,rxjs_operator_mergeMap,rxjs_operator_reduce,rxjs_Observable,rxjs_operator_catch,rxjs_operator_concatAll,rxjs_util_EmptyError,rxjs_observable_fromPromise,l,rxjs_operator_mergeAll,_angular_platformBrowser,rxjs_operator_filter) { 'use strict';

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @whatItDoes Name of the primary outlet.
	     *
	     * @stable
	     */
	    var PRIMARY_OUTLET = 'primary';
	    var NavigationCancelingError = (function (_super) {
	        __extends(NavigationCancelingError, _super);
	        function NavigationCancelingError(message) {
	            _super.call(this, message);
	            this.message = message;
	            this.stack = (new Error(message)).stack;
	        }
	        NavigationCancelingError.prototype.toString = function () { return this.message; };
	        return NavigationCancelingError;
	    }(Error));
	    function defaultUrlMatcher(segments, segmentGroup, route) {
	        var path = route.path;
	        var parts = path.split('/');
	        var posParams = {};
	        var consumed = [];
	        var currentIndex = 0;
	        for (var i = 0; i < parts.length; ++i) {
	            if (currentIndex >= segments.length)
	                return null;
	            var current = segments[currentIndex];
	            var p = parts[i];
	            var isPosParam = p.startsWith(':');
	            if (!isPosParam && p !== current.path)
	                return null;
	            if (isPosParam) {
	                posParams[p.substring(1)] = current;
	            }
	            consumed.push(current);
	            currentIndex++;
	        }
	        if (route.pathMatch === 'full' &&
	            (segmentGroup.hasChildren() || currentIndex < segments.length)) {
	            return null;
	        }
	        else {
	            return { consumed: consumed, posParams: posParams };
	        }
	    }

	    function shallowEqualArrays(a, b) {
	        if (a.length !== b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (!shallowEqual(a[i], b[i]))
	                return false;
	        }
	        return true;
	    }
	    function shallowEqual(a, b) {
	        var k1 = Object.keys(a);
	        var k2 = Object.keys(b);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (a[key] !== b[key]) {
	                return false;
	            }
	        }
	        return true;
	    }
	    function flatten(a) {
	        var target = [];
	        for (var i = 0; i < a.length; ++i) {
	            for (var j = 0; j < a[i].length; ++j) {
	                target.push(a[i][j]);
	            }
	        }
	        return target;
	    }
	    function last(a) {
	        return a.length > 0 ? a[a.length - 1] : null;
	    }
	    function merge(m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    }
	    function forEach(map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    }
	    function waitForMap(obj, fn) {
	        var waitFor = [];
	        var res = {};
	        forEach(obj, function (a, k) {
	            if (k === PRIMARY_OUTLET) {
	                waitFor.push(rxjs_operator_map.map.call(fn(k, a), function (_) {
	                    res[k] = _;
	                    return _;
	                }));
	            }
	        });
	        forEach(obj, function (a, k) {
	            if (k !== PRIMARY_OUTLET) {
	                waitFor.push(rxjs_operator_map.map.call(fn(k, a), function (_) {
	                    res[k] = _;
	                    return _;
	                }));
	            }
	        });
	        if (waitFor.length > 0) {
	            var concatted$ = rxjs_operator_concatAll.concatAll.call(rxjs_observable_of.of.apply(void 0, waitFor));
	            var last$ = l.last.call(concatted$);
	            return rxjs_operator_map.map.call(last$, function () { return res; });
	        }
	        else {
	            return rxjs_observable_of.of(res);
	        }
	    }
	    function andObservables(observables) {
	        var merged$ = rxjs_operator_mergeAll.mergeAll.call(observables);
	        return rxjs_operator_every.every.call(merged$, function (result) { return result === true; });
	    }
	    function wrapIntoObservable(value) {
	        if (value instanceof rxjs_Observable.Observable) {
	            return value;
	        }
	        else if (value instanceof Promise) {
	            return rxjs_observable_fromPromise.fromPromise(value);
	        }
	        else {
	            return rxjs_observable_of.of(value);
	        }
	    }

	    /**
	     * @experimental
	     */
	    var ROUTES = new _angular_core.OpaqueToken('ROUTES');
	    var LoadedRouterConfig = (function () {
	        function LoadedRouterConfig(routes, injector, factoryResolver, injectorFactory) {
	            this.routes = routes;
	            this.injector = injector;
	            this.factoryResolver = factoryResolver;
	            this.injectorFactory = injectorFactory;
	        }
	        return LoadedRouterConfig;
	    }());
	    var RouterConfigLoader = (function () {
	        function RouterConfigLoader(loader, compiler) {
	            this.loader = loader;
	            this.compiler = compiler;
	        }
	        RouterConfigLoader.prototype.load = function (parentInjector, loadChildren) {
	            return rxjs_operator_map.map.call(this.loadModuleFactory(loadChildren), function (r) {
	                var ref = r.create(parentInjector);
	                var injectorFactory = function (parent) { return r.create(parent).injector; };
	                return new LoadedRouterConfig(flatten(ref.injector.get(ROUTES)), ref.injector, ref.componentFactoryResolver, injectorFactory);
	            });
	        };
	        RouterConfigLoader.prototype.loadModuleFactory = function (loadChildren) {
	            var _this = this;
	            if (typeof loadChildren === 'string') {
	                return rxjs_observable_fromPromise.fromPromise(this.loader.load(loadChildren));
	            }
	            else {
	                var offlineMode_1 = this.compiler instanceof _angular_core.Compiler;
	                return rxjs_operator_mergeMap.mergeMap.call(wrapIntoObservable(loadChildren()), function (t) { return offlineMode_1 ? rxjs_observable_of.of(t) : rxjs_observable_fromPromise.fromPromise(_this.compiler.compileModuleAsync(t)); });
	            }
	        };
	        return RouterConfigLoader;
	    }());

	    function createEmptyUrlTree() {
	        return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
	    }
	    function containsTree(container, containee, exact) {
	        if (exact) {
	            return equalQueryParams(container.queryParams, containee.queryParams) &&
	                equalSegmentGroups(container.root, containee.root);
	        }
	        else {
	            return containsQueryParams(container.queryParams, containee.queryParams) &&
	                containsSegmentGroup(container.root, containee.root);
	        }
	    }
	    function equalQueryParams(container, containee) {
	        return shallowEqual(container, containee);
	    }
	    function equalSegmentGroups(container, containee) {
	        if (!equalPath(container.segments, containee.segments))
	            return false;
	        if (container.numberOfChildren !== containee.numberOfChildren)
	            return false;
	        for (var c in containee.children) {
	            if (!container.children[c])
	                return false;
	            if (!equalSegmentGroups(container.children[c], containee.children[c]))
	                return false;
	        }
	        return true;
	    }
	    function containsQueryParams(container, containee) {
	        return Object.keys(containee) <= Object.keys(container) &&
	            Object.keys(containee).every(function (key) { return containee[key] === container[key]; });
	    }
	    function containsSegmentGroup(container, containee) {
	        return containsSegmentGroupHelper(container, containee, containee.segments);
	    }
	    function containsSegmentGroupHelper(container, containee, containeePaths) {
	        if (container.segments.length > containeePaths.length) {
	            var current = container.segments.slice(0, containeePaths.length);
	            if (!equalPath(current, containeePaths))
	                return false;
	            if (containee.hasChildren())
	                return false;
	            return true;
	        }
	        else if (container.segments.length === containeePaths.length) {
	            if (!equalPath(container.segments, containeePaths))
	                return false;
	            for (var c in containee.children) {
	                if (!container.children[c])
	                    return false;
	                if (!containsSegmentGroup(container.children[c], containee.children[c]))
	                    return false;
	            }
	            return true;
	        }
	        else {
	            var current = containeePaths.slice(0, container.segments.length);
	            var next = containeePaths.slice(container.segments.length);
	            if (!equalPath(container.segments, current))
	                return false;
	            if (!container.children[PRIMARY_OUTLET])
	                return false;
	            return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
	        }
	    }
	    /**
	     * @whatItDoes Represents the parsed URL.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'template.html'})
	     * class MyComponent {
	     *   constructor(router: Router) {
	     *     const tree: UrlTree =
	     * router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
	     *     const f = tree.fragment; // return 'fragment'
	     *     const q = tree.queryParams; // returns {debug: 'true'}
	     *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
	     *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
	     *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
	     *     g.children['support'].segments; // return 1 segment 'help'
	     *   }
	     * }
	     * ```
	     *
	     * @description
	     *
	     * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
	     * serialized tree.
	     * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
	     *
	     * @stable
	     */
	    var UrlTree = (function () {
	        /**
	         * @internal
	         */
	        function UrlTree(
	            /**
	            * The root segment group of the URL tree.
	             */
	            root, 
	            /**
	             * The query params of the URL.
	             */
	            queryParams, 
	            /**
	             * The fragment of the URL.
	             */
	            fragment) {
	            this.root = root;
	            this.queryParams = queryParams;
	            this.fragment = fragment;
	        }
	        /**
	         * @docsNotRequired
	         */
	        UrlTree.prototype.toString = function () { return new DefaultUrlSerializer().serialize(this); };
	        return UrlTree;
	    }());
	    /**
	     * @whatItDoes Represents the parsed URL segment.
	     *
	     * See {@link UrlTree} for more information.
	     *
	     * @stable
	     */
	    var UrlSegmentGroup = (function () {
	        function UrlSegmentGroup(
	            /**
	             * The URL segments of this group. See {@link UrlSegment} for more information.
	             */
	            segments, 
	            /**
	             * The list of children of this group.
	             */
	            children) {
	            var _this = this;
	            this.segments = segments;
	            this.children = children;
	            /**
	             * The parent node in the url tree.
	             */
	            this.parent = null;
	            forEach(children, function (v, k) { return v.parent = _this; });
	        }
	        /**
	         * Return true if the segment has child segments
	         */
	        UrlSegmentGroup.prototype.hasChildren = function () { return this.numberOfChildren > 0; };
	        Object.defineProperty(UrlSegmentGroup.prototype, "numberOfChildren", {
	            /**
	             * Returns the number of child sements.
	             */
	            get: function () { return Object.keys(this.children).length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @docsNotRequired
	         */
	        UrlSegmentGroup.prototype.toString = function () { return serializePaths(this); };
	        return UrlSegmentGroup;
	    }());
	    /**
	     * @whatItDoes Represents a single URL segment.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'template.html'})
	     * class MyComponent {
	     *   constructor(router: Router) {
	     *     const tree: UrlTree = router.parseUrl('/team;id=33');
	     *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
	     *     const s: UrlSegment[] = g.segments;
	     *     s[0].path; // returns 'team'
	     *     s[0].parameters; // returns {id: 33}
	     *   }
	     * }
	     * ```
	     *
	     * @description
	     *
	     * A UrlSegment is a part of a URL between the two slashes. It contains a path and
	     * the matrix parameters associated with the segment.
	     *
	     * @stable
	     */
	    var UrlSegment = (function () {
	        function UrlSegment(
	            /**
	             * The path part of a URL segment.
	             */
	            path, 
	            /**
	             * The matrix parameters associated with a segment.
	             */
	            parameters) {
	            this.path = path;
	            this.parameters = parameters;
	        }
	        /**
	         * @docsNotRequired
	         */
	        UrlSegment.prototype.toString = function () { return serializePath(this); };
	        return UrlSegment;
	    }());
	    function equalSegments(a, b) {
	        if (a.length !== b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i].path !== b[i].path)
	                return false;
	            if (!shallowEqual(a[i].parameters, b[i].parameters))
	                return false;
	        }
	        return true;
	    }
	    function equalPath(a, b) {
	        if (a.length !== b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i].path !== b[i].path)
	                return false;
	        }
	        return true;
	    }
	    function mapChildrenIntoArray(segment, fn) {
	        var res = [];
	        forEach(segment.children, function (child, childOutlet) {
	            if (childOutlet === PRIMARY_OUTLET) {
	                res = res.concat(fn(child, childOutlet));
	            }
	        });
	        forEach(segment.children, function (child, childOutlet) {
	            if (childOutlet !== PRIMARY_OUTLET) {
	                res = res.concat(fn(child, childOutlet));
	            }
	        });
	        return res;
	    }
	    /**
	     * @whatItDoes Serializes and deserializes a URL string into a URL tree.
	     *
	     * @description The url serialization strategy is customizable. You can
	     * make all URLs case insensitive by providing a custom UrlSerializer.
	     *
	     * See {@link DefaultUrlSerializer} for an example of a URL serializer.
	     *
	     * @stable
	     */
	    var UrlSerializer = (function () {
	        function UrlSerializer() {
	        }
	        return UrlSerializer;
	    }());
	    /**
	     * @whatItDoes A default implementation of the {@link UrlSerializer}.
	     *
	     * @description
	     *
	     * Example URLs:
	     *
	     * ```
	     * /inbox/33(popup:compose)
	     * /inbox/33;open=true/messages/44
	     * ```
	     *
	     * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
	     * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
	     * specify route specific parameters.
	     *
	     * @stable
	     */
	    var DefaultUrlSerializer = (function () {
	        function DefaultUrlSerializer() {
	        }
	        /**
	         * Parse a url into a {@link UrlTree}.
	         */
	        DefaultUrlSerializer.prototype.parse = function (url) {
	            var p = new UrlParser(url);
	            return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
	        };
	        /**
	         * Converts a {@link UrlTree} into a url.
	         */
	        DefaultUrlSerializer.prototype.serialize = function (tree) {
	            var segment = "/" + serializeSegment(tree.root, true);
	            var query = serializeQueryParams(tree.queryParams);
	            var fragment = tree.fragment !== null && tree.fragment !== undefined ? "#" + encodeURI(tree.fragment) : '';
	            return "" + segment + query + fragment;
	        };
	        return DefaultUrlSerializer;
	    }());
	    function serializePaths(segment) {
	        return segment.segments.map(function (p) { return serializePath(p); }).join('/');
	    }
	    function serializeSegment(segment, root) {
	        if (segment.hasChildren() && root) {
	            var primary = segment.children[PRIMARY_OUTLET] ?
	                serializeSegment(segment.children[PRIMARY_OUTLET], false) :
	                '';
	            var children_1 = [];
	            forEach(segment.children, function (v, k) {
	                if (k !== PRIMARY_OUTLET) {
	                    children_1.push(k + ":" + serializeSegment(v, false));
	                }
	            });
	            if (children_1.length > 0) {
	                return primary + "(" + children_1.join('//') + ")";
	            }
	            else {
	                return "" + primary;
	            }
	        }
	        else if (segment.hasChildren() && !root) {
	            var children = mapChildrenIntoArray(segment, function (v, k) {
	                if (k === PRIMARY_OUTLET) {
	                    return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
	                }
	                else {
	                    return [(k + ":" + serializeSegment(v, false))];
	                }
	            });
	            return serializePaths(segment) + "/(" + children.join('//') + ")";
	        }
	        else {
	            return serializePaths(segment);
	        }
	    }
	    function encode(s) {
	        return encodeURIComponent(s);
	    }
	    function decode(s) {
	        return decodeURIComponent(s);
	    }
	    function serializePath(path) {
	        return "" + encode(path.path) + serializeParams(path.parameters);
	    }
	    function serializeParams(params) {
	        return pairs(params).map(function (p) { return (";" + encode(p.first) + "=" + encode(p.second)); }).join('');
	    }
	    function serializeQueryParams(params) {
	        var strs = pairs(params).map(function (p) { return (encode(p.first) + "=" + encode(p.second)); });
	        return strs.length > 0 ? "?" + strs.join("&") : '';
	    }
	    var Pair = (function () {
	        function Pair(first, second) {
	            this.first = first;
	            this.second = second;
	        }
	        return Pair;
	    }());
	    function pairs(obj) {
	        var res = [];
	        for (var prop in obj) {
	            if (obj.hasOwnProperty(prop)) {
	                res.push(new Pair(prop, obj[prop]));
	            }
	        }
	        return res;
	    }
	    var SEGMENT_RE = /^[^\/\(\)\?;=&#]+/;
	    function matchSegments(str) {
	        SEGMENT_RE.lastIndex = 0;
	        var match = str.match(SEGMENT_RE);
	        return match ? match[0] : '';
	    }
	    var QUERY_PARAM_RE = /^[^=\?&#]+/;
	    function matchQueryParams(str) {
	        QUERY_PARAM_RE.lastIndex = 0;
	        var match = str.match(SEGMENT_RE);
	        return match ? match[0] : '';
	    }
	    var QUERY_PARAM_VALUE_RE = /^[^\?&#]+/;
	    function matchUrlQueryParamValue(str) {
	        QUERY_PARAM_VALUE_RE.lastIndex = 0;
	        var match = str.match(QUERY_PARAM_VALUE_RE);
	        return match ? match[0] : '';
	    }
	    var UrlParser = (function () {
	        function UrlParser(url) {
	            this.url = url;
	            this.remaining = url;
	        }
	        UrlParser.prototype.peekStartsWith = function (str) { return this.remaining.startsWith(str); };
	        UrlParser.prototype.capture = function (str) {
	            if (!this.remaining.startsWith(str)) {
	                throw new Error("Expected \"" + str + "\".");
	            }
	            this.remaining = this.remaining.substring(str.length);
	        };
	        UrlParser.prototype.parseRootSegment = function () {
	            if (this.remaining.startsWith('/')) {
	                this.capture('/');
	            }
	            if (this.remaining === '' || this.remaining.startsWith('?') || this.remaining.startsWith('#')) {
	                return new UrlSegmentGroup([], {});
	            }
	            else {
	                return new UrlSegmentGroup([], this.parseChildren());
	            }
	        };
	        UrlParser.prototype.parseChildren = function () {
	            if (this.remaining.length == 0) {
	                return {};
	            }
	            if (this.peekStartsWith('/')) {
	                this.capture('/');
	            }
	            var paths = [];
	            if (!this.peekStartsWith('(')) {
	                paths.push(this.parseSegments());
	            }
	            while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
	                this.capture('/');
	                paths.push(this.parseSegments());
	            }
	            var children = {};
	            if (this.peekStartsWith('/(')) {
	                this.capture('/');
	                children = this.parseParens(true);
	            }
	            var res = {};
	            if (this.peekStartsWith('(')) {
	                res = this.parseParens(false);
	            }
	            if (paths.length > 0 || Object.keys(children).length > 0) {
	                res[PRIMARY_OUTLET] = new UrlSegmentGroup(paths, children);
	            }
	            return res;
	        };
	        UrlParser.prototype.parseSegments = function () {
	            var path = matchSegments(this.remaining);
	            if (path === '' && this.peekStartsWith(';')) {
	                throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
	            }
	            this.capture(path);
	            var matrixParams = {};
	            if (this.peekStartsWith(';')) {
	                matrixParams = this.parseMatrixParams();
	            }
	            return new UrlSegment(decode(path), matrixParams);
	        };
	        UrlParser.prototype.parseQueryParams = function () {
	            var params = {};
	            if (this.peekStartsWith('?')) {
	                this.capture('?');
	                this.parseQueryParam(params);
	                while (this.remaining.length > 0 && this.peekStartsWith('&')) {
	                    this.capture('&');
	                    this.parseQueryParam(params);
	                }
	            }
	            return params;
	        };
	        UrlParser.prototype.parseFragment = function () {
	            if (this.peekStartsWith('#')) {
	                return decodeURI(this.remaining.substring(1));
	            }
	            else {
	                return null;
	            }
	        };
	        UrlParser.prototype.parseMatrixParams = function () {
	            var params = {};
	            while (this.remaining.length > 0 && this.peekStartsWith(';')) {
	                this.capture(';');
	                this.parseParam(params);
	            }
	            return params;
	        };
	        UrlParser.prototype.parseParam = function (params) {
	            var key = matchSegments(this.remaining);
	            if (!key) {
	                return;
	            }
	            this.capture(key);
	            var value = '';
	            if (this.peekStartsWith('=')) {
	                this.capture('=');
	                var valueMatch = matchSegments(this.remaining);
	                if (valueMatch) {
	                    value = valueMatch;
	                    this.capture(value);
	                }
	            }
	            params[decode(key)] = decode(value);
	        };
	        UrlParser.prototype.parseQueryParam = function (params) {
	            var key = matchQueryParams(this.remaining);
	            if (!key) {
	                return;
	            }
	            this.capture(key);
	            var value = '';
	            if (this.peekStartsWith('=')) {
	                this.capture('=');
	                var valueMatch = matchUrlQueryParamValue(this.remaining);
	                if (valueMatch) {
	                    value = valueMatch;
	                    this.capture(value);
	                }
	            }
	            params[decode(key)] = decode(value);
	        };
	        UrlParser.prototype.parseParens = function (allowPrimary) {
	            var segments = {};
	            this.capture('(');
	            while (!this.peekStartsWith(')') && this.remaining.length > 0) {
	                var path = matchSegments(this.remaining);
	                var next = this.remaining[path.length];
	                // if is is not one of these characters, then the segment was unescaped
	                // or the group was not closed
	                if (next !== '/' && next !== ')' && next !== ';') {
	                    throw new Error("Cannot parse url '" + this.url + "'");
	                }
	                var outletName = void 0;
	                if (path.indexOf(':') > -1) {
	                    outletName = path.substr(0, path.indexOf(':'));
	                    this.capture(outletName);
	                    this.capture(':');
	                }
	                else if (allowPrimary) {
	                    outletName = PRIMARY_OUTLET;
	                }
	                var children = this.parseChildren();
	                segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] :
	                    new UrlSegmentGroup([], children);
	                if (this.peekStartsWith('//')) {
	                    this.capture('//');
	                }
	            }
	            this.capture(')');
	            return segments;
	        };
	        return UrlParser;
	    }());

	    var NoMatch = (function () {
	        function NoMatch(segmentGroup) {
	            if (segmentGroup === void 0) { segmentGroup = null; }
	            this.segmentGroup = segmentGroup;
	        }
	        return NoMatch;
	    }());
	    var AbsoluteRedirect = (function () {
	        function AbsoluteRedirect(urlTree) {
	            this.urlTree = urlTree;
	        }
	        return AbsoluteRedirect;
	    }());
	    function noMatch(segmentGroup) {
	        return new rxjs_Observable.Observable(function (obs) { return obs.error(new NoMatch(segmentGroup)); });
	    }
	    function absoluteRedirect(newTree) {
	        return new rxjs_Observable.Observable(function (obs) { return obs.error(new AbsoluteRedirect(newTree)); });
	    }
	    function namedOutletsRedirect(redirectTo) {
	        return new rxjs_Observable.Observable(function (obs) { return obs.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + redirectTo + "'")); });
	    }
	    function canLoadFails(route) {
	        return new rxjs_Observable.Observable(function (obs) { return obs.error(new NavigationCancelingError("Cannot load children because the guard of the route \"path: '" + route.path + "'\" returned false")); });
	    }
	    function applyRedirects(injector, configLoader, urlSerializer, urlTree, config) {
	        return new ApplyRedirects(injector, configLoader, urlSerializer, urlTree, config).apply();
	    }
	    var ApplyRedirects = (function () {
	        function ApplyRedirects(injector, configLoader, urlSerializer, urlTree, config) {
	            this.injector = injector;
	            this.configLoader = configLoader;
	            this.urlSerializer = urlSerializer;
	            this.urlTree = urlTree;
	            this.config = config;
	            this.allowRedirects = true;
	        }
	        ApplyRedirects.prototype.apply = function () {
	            var _this = this;
	            var expanded$ = this.expandSegmentGroup(this.injector, this.config, this.urlTree.root, PRIMARY_OUTLET);
	            var urlTrees$ = rxjs_operator_map.map.call(expanded$, function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup, _this.urlTree.queryParams, _this.urlTree.fragment); });
	            return rxjs_operator_catch._catch.call(urlTrees$, function (e) {
	                if (e instanceof AbsoluteRedirect) {
	                    // after an absolute redirect we do not apply any more redirects!
	                    _this.allowRedirects = false;
	                    // we need to run matching, so we can fetch all lazy-loaded modules
	                    return _this.match(e.urlTree);
	                }
	                else if (e instanceof NoMatch) {
	                    throw _this.noMatchError(e);
	                }
	                else {
	                    throw e;
	                }
	            });
	        };
	        ApplyRedirects.prototype.match = function (tree) {
	            var _this = this;
	            var expanded$ = this.expandSegmentGroup(this.injector, this.config, tree.root, PRIMARY_OUTLET);
	            var mapped$ = rxjs_operator_map.map.call(expanded$, function (rootSegmentGroup) {
	                return _this.createUrlTree(rootSegmentGroup, tree.queryParams, tree.fragment);
	            });
	            return rxjs_operator_catch._catch.call(mapped$, function (e) {
	                if (e instanceof NoMatch) {
	                    throw _this.noMatchError(e);
	                }
	                else {
	                    throw e;
	                }
	            });
	        };
	        ApplyRedirects.prototype.noMatchError = function (e) {
	            return new Error("Cannot match any routes. URL Segment: '" + e.segmentGroup + "'");
	        };
	        ApplyRedirects.prototype.createUrlTree = function (rootCandidate, queryParams, fragment) {
	            var root = rootCandidate.segments.length > 0 ?
	                new UrlSegmentGroup([], (_a = {}, _a[PRIMARY_OUTLET] = rootCandidate, _a)) :
	                rootCandidate;
	            return new UrlTree(root, queryParams, fragment);
	            var _a;
	        };
	        ApplyRedirects.prototype.expandSegmentGroup = function (injector, routes, segmentGroup, outlet) {
	            if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
	                return rxjs_operator_map.map.call(this.expandChildren(injector, routes, segmentGroup), function (children) { return new UrlSegmentGroup([], children); });
	            }
	            else {
	                return this.expandSegment(injector, segmentGroup, routes, segmentGroup.segments, outlet, true);
	            }
	        };
	        ApplyRedirects.prototype.expandChildren = function (injector, routes, segmentGroup) {
	            var _this = this;
	            return waitForMap(segmentGroup.children, function (childOutlet, child) { return _this.expandSegmentGroup(injector, routes, child, childOutlet); });
	        };
	        ApplyRedirects.prototype.expandSegment = function (injector, segmentGroup, routes, segments, outlet, allowRedirects) {
	            var _this = this;
	            var routes$ = rxjs_observable_of.of.apply(void 0, routes);
	            var processedRoutes$ = rxjs_operator_map.map.call(routes$, function (r) {
	                var expanded$ = _this.expandSegmentAgainstRoute(injector, segmentGroup, routes, r, segments, outlet, allowRedirects);
	                return rxjs_operator_catch._catch.call(expanded$, function (e) {
	                    if (e instanceof NoMatch)
	                        return rxjs_observable_of.of(null);
	                    else
	                        throw e;
	                });
	            });
	            var concattedProcessedRoutes$ = rxjs_operator_concatAll.concatAll.call(processedRoutes$);
	            var first$ = rxjs_operator_first.first.call(concattedProcessedRoutes$, function (s) { return !!s; });
	            return rxjs_operator_catch._catch.call(first$, function (e, _) {
	                if (e instanceof rxjs_util_EmptyError.EmptyError) {
	                    if (_this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
	                        return rxjs_observable_of.of(new UrlSegmentGroup([], {}));
	                    }
	                    else {
	                        throw new NoMatch(segmentGroup);
	                    }
	                }
	                else {
	                    throw e;
	                }
	            });
	        };
	        ApplyRedirects.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
	            return segments.length === 0 && !segmentGroup.children[outlet];
	        };
	        ApplyRedirects.prototype.expandSegmentAgainstRoute = function (injector, segmentGroup, routes, route, paths, outlet, allowRedirects) {
	            if (getOutlet$1(route) !== outlet)
	                return noMatch(segmentGroup);
	            if (route.redirectTo !== undefined && !(allowRedirects && this.allowRedirects))
	                return noMatch(segmentGroup);
	            if (route.redirectTo === undefined) {
	                return this.matchSegmentAgainstRoute(injector, segmentGroup, route, paths);
	            }
	            else {
	                return this.expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, paths, outlet);
	            }
	        };
	        ApplyRedirects.prototype.expandSegmentAgainstRouteUsingRedirect = function (injector, segmentGroup, routes, route, segments, outlet) {
	            if (route.path === '**') {
	                return this.expandWildCardWithParamsAgainstRouteUsingRedirect(injector, routes, route, outlet);
	            }
	            else {
	                return this.expandRegularSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet);
	            }
	        };
	        ApplyRedirects.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (injector, routes, route, outlet) {
	            var _this = this;
	            var newTree = this.applyRedirectCommands([], route.redirectTo, {});
	            if (route.redirectTo.startsWith('/')) {
	                return absoluteRedirect(newTree);
	            }
	            else {
	                return rxjs_operator_mergeMap.mergeMap.call(this.lineralizeSegments(route, newTree), function (newSegments) {
	                    var group = new UrlSegmentGroup(newSegments, {});
	                    return _this.expandSegment(injector, group, routes, newSegments, outlet, false);
	                });
	            }
	        };
	        ApplyRedirects.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (injector, segmentGroup, routes, route, segments, outlet) {
	            var _this = this;
	            var _a = match(segmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
	            if (!matched)
	                return noMatch(segmentGroup);
	            var newTree = this.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
	            if (route.redirectTo.startsWith('/')) {
	                return absoluteRedirect(newTree);
	            }
	            else {
	                return rxjs_operator_mergeMap.mergeMap.call(this.lineralizeSegments(route, newTree), function (newSegments) {
	                    return _this.expandSegment(injector, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
	                });
	            }
	        };
	        ApplyRedirects.prototype.matchSegmentAgainstRoute = function (injector, rawSegmentGroup, route, segments) {
	            var _this = this;
	            if (route.path === '**') {
	                if (route.loadChildren) {
	                    return rxjs_operator_map.map.call(this.configLoader.load(injector, route.loadChildren), function (r) {
	                        route._loadedConfig = r;
	                        return rxjs_observable_of.of(new UrlSegmentGroup(segments, {}));
	                    });
	                }
	                else {
	                    return rxjs_observable_of.of(new UrlSegmentGroup(segments, {}));
	                }
	            }
	            else {
	                var _a = match(rawSegmentGroup, route, segments), matched = _a.matched, consumedSegments_1 = _a.consumedSegments, lastChild = _a.lastChild;
	                if (!matched)
	                    return noMatch(rawSegmentGroup);
	                var rawSlicedSegments_1 = segments.slice(lastChild);
	                var childConfig$ = this.getChildConfig(injector, route);
	                return rxjs_operator_mergeMap.mergeMap.call(childConfig$, function (routerConfig) {
	                    var childInjector = routerConfig.injector;
	                    var childConfig = routerConfig.routes;
	                    var _a = split(rawSegmentGroup, consumedSegments_1, rawSlicedSegments_1, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
	                    if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
	                        var expanded$ = _this.expandChildren(childInjector, childConfig, segmentGroup);
	                        return rxjs_operator_map.map.call(expanded$, function (children) { return new UrlSegmentGroup(consumedSegments_1, children); });
	                    }
	                    else if (childConfig.length === 0 && slicedSegments.length === 0) {
	                        return rxjs_observable_of.of(new UrlSegmentGroup(consumedSegments_1, {}));
	                    }
	                    else {
	                        var expanded$ = _this.expandSegment(childInjector, segmentGroup, childConfig, slicedSegments, PRIMARY_OUTLET, true);
	                        return rxjs_operator_map.map.call(expanded$, function (cs) { return new UrlSegmentGroup(consumedSegments_1.concat(cs.segments), cs.children); });
	                    }
	                });
	            }
	        };
	        ApplyRedirects.prototype.getChildConfig = function (injector, route) {
	            var _this = this;
	            if (route.children) {
	                return rxjs_observable_of.of(new LoadedRouterConfig(route.children, injector, null, null));
	            }
	            else if (route.loadChildren) {
	                return rxjs_operator_mergeMap.mergeMap.call(runGuards(injector, route), function (shouldLoad) {
	                    if (shouldLoad) {
	                        if (route._loadedConfig) {
	                            return rxjs_observable_of.of(route._loadedConfig);
	                        }
	                        else {
	                            return rxjs_operator_map.map.call(_this.configLoader.load(injector, route.loadChildren), function (r) {
	                                route._loadedConfig = r;
	                                return r;
	                            });
	                        }
	                    }
	                    else {
	                        return canLoadFails(route);
	                    }
	                });
	            }
	            else {
	                return rxjs_observable_of.of(new LoadedRouterConfig([], injector, null, null));
	            }
	        };
	        ApplyRedirects.prototype.lineralizeSegments = function (route, urlTree) {
	            var res = [];
	            var c = urlTree.root;
	            while (true) {
	                res = res.concat(c.segments);
	                if (c.numberOfChildren === 0) {
	                    return rxjs_observable_of.of(res);
	                }
	                else if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
	                    return namedOutletsRedirect(route.redirectTo);
	                }
	                else {
	                    c = c.children[PRIMARY_OUTLET];
	                }
	            }
	        };
	        ApplyRedirects.prototype.applyRedirectCommands = function (segments, redirectTo, posParams) {
	            var t = this.urlSerializer.parse(redirectTo);
	            return this.applyRedirectCreatreUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
	        };
	        ApplyRedirects.prototype.applyRedirectCreatreUrlTree = function (redirectTo, urlTree, segments, posParams) {
	            var newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
	            return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
	        };
	        ApplyRedirects.prototype.createQueryParams = function (redirectToParams, actualParams) {
	            var res = {};
	            forEach(redirectToParams, function (v, k) {
	                if (v.startsWith(':')) {
	                    res[k] = actualParams[v.substring(1)];
	                }
	                else {
	                    res[k] = v;
	                }
	            });
	            return res;
	        };
	        ApplyRedirects.prototype.createSegmentGroup = function (redirectTo, group, segments, posParams) {
	            var _this = this;
	            var updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
	            var children = {};
	            forEach(group.children, function (child, name) {
	                children[name] = _this.createSegmentGroup(redirectTo, child, segments, posParams);
	            });
	            return new UrlSegmentGroup(updatedSegments, children);
	        };
	        ApplyRedirects.prototype.createSegments = function (redirectTo, redirectToSegments, actualSegments, posParams) {
	            var _this = this;
	            return redirectToSegments.map(function (s) { return s.path.startsWith(':') ? _this.findPosParam(redirectTo, s, posParams) :
	                _this.findOrReturn(s, actualSegments); });
	        };
	        ApplyRedirects.prototype.findPosParam = function (redirectTo, redirectToUrlSegment, posParams) {
	            var pos = posParams[redirectToUrlSegment.path.substring(1)];
	            if (!pos)
	                throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + redirectToUrlSegment.path + "'.");
	            return pos;
	        };
	        ApplyRedirects.prototype.findOrReturn = function (redirectToUrlSegment, actualSegments) {
	            var idx = 0;
	            for (var _i = 0, actualSegments_1 = actualSegments; _i < actualSegments_1.length; _i++) {
	                var s = actualSegments_1[_i];
	                if (s.path === redirectToUrlSegment.path) {
	                    actualSegments.splice(idx);
	                    return s;
	                }
	                idx++;
	            }
	            return redirectToUrlSegment;
	        };
	        return ApplyRedirects;
	    }());
	    function runGuards(injector, route) {
	        var canLoad = route.canLoad;
	        if (!canLoad || canLoad.length === 0)
	            return rxjs_observable_of.of(true);
	        var obs = rxjs_operator_map.map.call(rxjs_observable_from.from(canLoad), function (c) {
	            var guard = injector.get(c);
	            if (guard.canLoad) {
	                return wrapIntoObservable(guard.canLoad(route));
	            }
	            else {
	                return wrapIntoObservable(guard(route));
	            }
	        });
	        return andObservables(obs);
	    }
	    function match(segmentGroup, route, segments) {
	        var noMatch = { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
	        if (route.path === '') {
	            if ((route.pathMatch === 'full') && (segmentGroup.hasChildren() || segments.length > 0)) {
	                return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
	            }
	            else {
	                return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
	            }
	        }
	        var matcher = route.matcher || defaultUrlMatcher;
	        var res = matcher(segments, segmentGroup, route);
	        if (!res)
	            return noMatch;
	        return {
	            matched: true,
	            consumedSegments: res.consumed,
	            lastChild: res.consumed.length,
	            positionalParamSegments: res.posParams
	        };
	    }
	    function split(segmentGroup, consumedSegments, slicedSegments, config) {
	        if (slicedSegments.length > 0 &&
	            containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
	            var s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptySegments(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
	            return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
	        }
	        else if (slicedSegments.length === 0 &&
	            containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
	            var s = new UrlSegmentGroup(segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
	            return { segmentGroup: mergeTrivialChildren(s), slicedSegments: slicedSegments };
	        }
	        else {
	            return { segmentGroup: segmentGroup, slicedSegments: slicedSegments };
	        }
	    }
	    function mergeTrivialChildren(s) {
	        if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
	            var c = s.children[PRIMARY_OUTLET];
	            return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
	        }
	        else {
	            return s;
	        }
	    }
	    function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
	        var res = {};
	        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
	            var r = routes_1[_i];
	            if (emptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet$1(r)]) {
	                res[getOutlet$1(r)] = new UrlSegmentGroup([], {});
	            }
	        }
	        return merge(children, res);
	    }
	    function createChildrenForEmptySegments(routes, primarySegmentGroup) {
	        var res = {};
	        res[PRIMARY_OUTLET] = primarySegmentGroup;
	        for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
	            var r = routes_2[_i];
	            if (r.path === '' && getOutlet$1(r) !== PRIMARY_OUTLET) {
	                res[getOutlet$1(r)] = new UrlSegmentGroup([], {});
	            }
	        }
	        return res;
	    }
	    function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, routes) {
	        return routes
	            .filter(function (r) { return emptyPathRedirect(segmentGroup, slicedSegments, r) &&
	            getOutlet$1(r) !== PRIMARY_OUTLET; })
	            .length > 0;
	    }
	    function containsEmptyPathRedirects(segmentGroup, slicedSegments, routes) {
	        return routes.filter(function (r) { return emptyPathRedirect(segmentGroup, slicedSegments, r); }).length > 0;
	    }
	    function emptyPathRedirect(segmentGroup, slicedSegments, r) {
	        if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full')
	            return false;
	        return r.path === '' && r.redirectTo !== undefined;
	    }
	    function getOutlet$1(route) {
	        return route.outlet ? route.outlet : PRIMARY_OUTLET;
	    }

	    function validateConfig(config) {
	        // forEach doesn't iterate undefined values
	        for (var i = 0; i < config.length; i++) {
	            validateNode(config[i]);
	        }
	    }
	    function validateNode(route) {
	        if (!route) {
	            throw new Error("\n      Invalid route configuration: Encountered undefined route.\n      The reason might be an extra comma.\n       \n      Example: \n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
	        }
	        if (Array.isArray(route)) {
	            throw new Error("Invalid route configuration: Array cannot be specified");
	        }
	        if (route.component === undefined && (route.outlet && route.outlet !== PRIMARY_OUTLET)) {
	            throw new Error("Invalid route configuration of route '" + route.path + "': a componentless route cannot have a named outlet set");
	        }
	        if (!!route.redirectTo && !!route.children) {
	            throw new Error("Invalid configuration of route '" + route.path + "': redirectTo and children cannot be used together");
	        }
	        if (!!route.redirectTo && !!route.loadChildren) {
	            throw new Error("Invalid configuration of route '" + route.path + "': redirectTo and loadChildren cannot be used together");
	        }
	        if (!!route.children && !!route.loadChildren) {
	            throw new Error("Invalid configuration of route '" + route.path + "': children and loadChildren cannot be used together");
	        }
	        if (!!route.redirectTo && !!route.component) {
	            throw new Error("Invalid configuration of route '" + route.path + "': redirectTo and component cannot be used together");
	        }
	        if (!!route.path && !!route.matcher) {
	            throw new Error("Invalid configuration of route '" + route.path + "': path and matcher cannot be used together");
	        }
	        if (route.redirectTo === undefined && !route.component && !route.children &&
	            !route.loadChildren) {
	            throw new Error("Invalid configuration of route '" + route.path + "': one of the following must be provided (component or redirectTo or children or loadChildren)");
	        }
	        if (route.path === undefined) {
	            throw new Error("Invalid route configuration: routes must have path specified");
	        }
	        if (route.path.startsWith('/')) {
	            throw new Error("Invalid route configuration of route '" + route.path + "': path cannot start with a slash");
	        }
	        if (route.path === '' && route.redirectTo !== undefined && route.pathMatch === undefined) {
	            var exp = "The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.";
	            throw new Error("Invalid route configuration of route '{path: \"" + route.path + "\", redirectTo: \"" + route.redirectTo + "\"}': please provide 'pathMatch'. " + exp);
	        }
	        if (route.pathMatch !== undefined && route.pathMatch !== 'full' && route.pathMatch !== 'prefix') {
	            throw new Error("Invalid configuration of route '" + route.path + "': pathMatch can only be set to 'prefix' or 'full'");
	        }
	    }

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var Tree = (function () {
	        function Tree(root) {
	            this._root = root;
	        }
	        Object.defineProperty(Tree.prototype, "root", {
	            get: function () { return this._root.value; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @internal
	         */
	        Tree.prototype.parent = function (t) {
	            var p = this.pathFromRoot(t);
	            return p.length > 1 ? p[p.length - 2] : null;
	        };
	        /**
	         * @internal
	         */
	        Tree.prototype.children = function (t) {
	            var n = findNode(t, this._root);
	            return n ? n.children.map(function (t) { return t.value; }) : [];
	        };
	        /**
	         * @internal
	         */
	        Tree.prototype.firstChild = function (t) {
	            var n = findNode(t, this._root);
	            return n && n.children.length > 0 ? n.children[0].value : null;
	        };
	        /**
	         * @internal
	         */
	        Tree.prototype.siblings = function (t) {
	            var p = findPath(t, this._root, []);
	            if (p.length < 2)
	                return [];
	            var c = p[p.length - 2].children.map(function (c) { return c.value; });
	            return c.filter(function (cc) { return cc !== t; });
	        };
	        /**
	         * @internal
	         */
	        Tree.prototype.pathFromRoot = function (t) { return findPath(t, this._root, []).map(function (s) { return s.value; }); };
	        return Tree;
	    }());
	    function findNode(expected, c) {
	        if (expected === c.value)
	            return c;
	        for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
	            var cc = _a[_i];
	            var r = findNode(expected, cc);
	            if (r)
	                return r;
	        }
	        return null;
	    }
	    function findPath(expected, c, collected) {
	        collected.push(c);
	        if (expected === c.value)
	            return collected;
	        for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
	            var cc = _a[_i];
	            var cloned = collected.slice(0);
	            var r = findPath(expected, cc, cloned);
	            if (r.length > 0)
	                return r;
	        }
	        return [];
	    }
	    var TreeNode = (function () {
	        function TreeNode(value, children) {
	            this.value = value;
	            this.children = children;
	        }
	        TreeNode.prototype.toString = function () { return "TreeNode(" + this.value + ")"; };
	        return TreeNode;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @whatItDoes Represents the state of the router.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'template.html'})
	     * class MyComponent {
	     *   constructor(router: Router) {
	     *     const state: RouterState = router.routerState;
	     *     const root: ActivatedRoute = state.root;
	     *     const child = root.firstChild;
	     *     const id: Observable<string> = child.params.map(p => p.id);
	     *     //...
	     *   }
	     * }
	     * ```
	     *
	     * @description
	     * RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL
	     * segments,
	     * the extracted parameters, and the resolved data.
	     *
	     * See {@link ActivatedRoute} for more information.
	     *
	     * @stable
	     */
	    var RouterState = (function (_super) {
	        __extends$1(RouterState, _super);
	        /**
	         * @internal
	         */
	        function RouterState(root, 
	            /**
	             * The current snapshot of the router state.
	             */
	            snapshot) {
	            _super.call(this, root);
	            this.snapshot = snapshot;
	            setRouterStateSnapshot(this, root);
	        }
	        RouterState.prototype.toString = function () { return this.snapshot.toString(); };
	        return RouterState;
	    }(Tree));
	    function createEmptyState(urlTree, rootComponent) {
	        var snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
	        var emptyUrl = new rxjs_BehaviorSubject.BehaviorSubject([new UrlSegment('', {})]);
	        var emptyParams = new rxjs_BehaviorSubject.BehaviorSubject({});
	        var emptyData = new rxjs_BehaviorSubject.BehaviorSubject({});
	        var emptyQueryParams = new rxjs_BehaviorSubject.BehaviorSubject({});
	        var fragment = new rxjs_BehaviorSubject.BehaviorSubject('');
	        var activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
	        activated.snapshot = snapshot.root;
	        return new RouterState(new TreeNode(activated, []), snapshot);
	    }
	    function createEmptyStateSnapshot(urlTree, rootComponent) {
	        var emptyParams = {};
	        var emptyData = {};
	        var emptyQueryParams = {};
	        var fragment = '';
	        var activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1, {});
	        return new RouterStateSnapshot('', new TreeNode(activated, []));
	    }
	    /**
	     * @whatItDoes Contains the information about a route associated with a component loaded in an
	     * outlet.
	     * ActivatedRoute can also be used to traverse the router state tree.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'./my-component.html'})
	     * class MyComponent {
	     *   constructor(route: ActivatedRoute) {
	     *     const id: Observable<string> = route.params.map(p => p.id);
	     *     const url: Observable<string> = route.url.map(s => s.join(''));
	     *     const user = route.data.map(d => d.user); //includes `data` and `resolve`
	     *   }
	     * }
	     * ```
	     *
	     * @stable
	     */
	    var ActivatedRoute = (function () {
	        /**
	         * @internal
	         */
	        function ActivatedRoute(
	            /**
	             *  The URL segments matched by this route. The observable will emit a new value when
	             *  the array of segments changes.
	             */
	            url, 
	            /**
	             * The matrix parameters scoped to this route. The observable will emit a new value when
	             * the set of the parameters changes.
	             */
	            params, 
	            /**
	             * The query parameters shared by all the routes. The observable will emit a new value when
	             * the set of the parameters changes.
	             */
	            queryParams, 
	            /**
	             * The URL fragment shared by all the routes. The observable will emit a new value when
	             * the URL fragment changes.
	             */
	            fragment, 
	            /**
	             * The static and resolved data of this route. The observable will emit a new value when
	             * any of the resolvers returns a new object.
	             */
	            data, 
	            /**
	             * The outlet name of the route. It's a constant.
	             */
	            outlet, 
	            /**
	             * The component of the route. It's a constant.
	             */
	            component, // TODO: vsavkin: remove |string
	            futureSnapshot) {
	            this.url = url;
	            this.params = params;
	            this.queryParams = queryParams;
	            this.fragment = fragment;
	            this.data = data;
	            this.outlet = outlet;
	            this.component = component;
	            this._futureSnapshot = futureSnapshot;
	        }
	        Object.defineProperty(ActivatedRoute.prototype, "routeConfig", {
	            /**
	             * The configuration used to match this route.
	             */
	            get: function () { return this._futureSnapshot.routeConfig; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRoute.prototype, "root", {
	            /**
	             * The root of the router state.
	             */
	            get: function () { return this._routerState.root; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRoute.prototype, "parent", {
	            /**
	             * The parent of this route in the router state tree.
	             */
	            get: function () { return this._routerState.parent(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRoute.prototype, "firstChild", {
	            /**
	             * The first child of this route in the router state tree.
	             */
	            get: function () { return this._routerState.firstChild(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRoute.prototype, "children", {
	            /**
	             * The children of this route in the router state tree.
	             */
	            get: function () { return this._routerState.children(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRoute.prototype, "pathFromRoot", {
	            /**
	             * The path from the root of the router state tree to this route.
	             */
	            get: function () { return this._routerState.pathFromRoot(this); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @docsNotRequired
	         */
	        ActivatedRoute.prototype.toString = function () {
	            return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
	        };
	        return ActivatedRoute;
	    }());
	    /**
	     * @internal
	     */
	    function inheritedParamsDataResolve(route) {
	        var pathToRoot = route.pathFromRoot;
	        var inhertingStartingFrom = pathToRoot.length - 1;
	        while (inhertingStartingFrom >= 1) {
	            var current = pathToRoot[inhertingStartingFrom];
	            var parent_1 = pathToRoot[inhertingStartingFrom - 1];
	            // current route is an empty path => inherits its parent's params and data
	            if (current.routeConfig && current.routeConfig.path === '') {
	                inhertingStartingFrom--;
	            }
	            else if (!parent_1.component) {
	                inhertingStartingFrom--;
	            }
	            else {
	                break;
	            }
	        }
	        return pathToRoot.slice(inhertingStartingFrom).reduce(function (res, curr) {
	            var params = merge(res.params, curr.params);
	            var data = merge(res.data, curr.data);
	            var resolve = merge(res.resolve, curr._resolvedData);
	            return { params: params, data: data, resolve: resolve };
	        }, { params: {}, data: {}, resolve: {} });
	    }
	    /**
	     * @whatItDoes Contains the information about a route associated with a component loaded in an
	     * outlet
	     * at a particular moment in time. ActivatedRouteSnapshot can also be used to traverse the router
	     * state tree.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'./my-component.html'})
	     * class MyComponent {
	     *   constructor(route: ActivatedRoute) {
	     *     const id: string = route.snapshot.params.id;
	     *     const url: string = route.snapshot.url.join('');
	     *     const user = route.snapshot.data.user;
	     *   }
	     * }
	     * ```
	     *
	     * @stable
	     */
	    var ActivatedRouteSnapshot = (function () {
	        /**
	         * @internal
	         */
	        function ActivatedRouteSnapshot(
	            /**
	             *  The URL segments matched by this route.
	             */
	            url, 
	            /**
	             * The matrix parameters scoped to this route.
	             */
	            params, 
	            /**
	             * The query parameters shared by all the routes.
	             */
	            queryParams, 
	            /**
	             * The URL fragment shared by all the routes.
	             */
	            fragment, 
	            /**
	             * The static and resolved data of this route.
	             */
	            data, 
	            /**
	             * The outlet name of the route.
	             */
	            outlet, 
	            /**
	             * The component of the route.
	             */
	            component, routeConfig, urlSegment, lastPathIndex, resolve) {
	            this.url = url;
	            this.params = params;
	            this.queryParams = queryParams;
	            this.fragment = fragment;
	            this.data = data;
	            this.outlet = outlet;
	            this.component = component;
	            this._routeConfig = routeConfig;
	            this._urlSegment = urlSegment;
	            this._lastPathIndex = lastPathIndex;
	            this._resolve = resolve;
	        }
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "routeConfig", {
	            /**
	             * The configuration used to match this route.
	             */
	            get: function () { return this._routeConfig; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "root", {
	            /**
	             * The root of the router state.
	             */
	            get: function () { return this._routerState.root; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "parent", {
	            /**
	             * The parent of this route in the router state tree.
	             */
	            get: function () { return this._routerState.parent(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "firstChild", {
	            /**
	             * The first child of this route in the router state tree.
	             */
	            get: function () { return this._routerState.firstChild(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "children", {
	            /**
	             * The children of this route in the router state tree.
	             */
	            get: function () { return this._routerState.children(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "pathFromRoot", {
	            /**
	             * The path from the root of the router state tree to this route.
	             */
	            get: function () { return this._routerState.pathFromRoot(this); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @docsNotRequired
	         */
	        ActivatedRouteSnapshot.prototype.toString = function () {
	            var url = this.url.map(function (s) { return s.toString(); }).join('/');
	            var matched = this._routeConfig ? this._routeConfig.path : '';
	            return "Route(url:'" + url + "', path:'" + matched + "')";
	        };
	        return ActivatedRouteSnapshot;
	    }());
	    /**
	     * @whatItDoes Represents the state of the router at a moment in time.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'template.html'})
	     * class MyComponent {
	     *   constructor(router: Router) {
	     *     const state: RouterState = router.routerState;
	     *     const snapshot: RouterStateSnapshot = state.snapshot;
	     *     const root: ActivatedRouteSnapshot = snapshot.root;
	     *     const child = root.firstChild;
	     *     const id: Observable<string> = child.params.map(p => p.id);
	     *     //...
	     *   }
	     * }
	     * ```
	     *
	     * @description
	     * RouterStateSnapshot is a tree of activated route snapshots. Every node in this tree knows about
	     * the "consumed" URL segments, the extracted parameters, and the resolved data.
	     *
	     * @stable
	     */
	    var RouterStateSnapshot = (function (_super) {
	        __extends$1(RouterStateSnapshot, _super);
	        /**
	         * @internal
	         */
	        function RouterStateSnapshot(
	            /** The url from which this snapshot was created */
	            url, root) {
	            _super.call(this, root);
	            this.url = url;
	            setRouterStateSnapshot(this, root);
	        }
	        RouterStateSnapshot.prototype.toString = function () { return serializeNode(this._root); };
	        return RouterStateSnapshot;
	    }(Tree));
	    function setRouterStateSnapshot(state, node) {
	        node.value._routerState = state;
	        node.children.forEach(function (c) { return setRouterStateSnapshot(state, c); });
	    }
	    function serializeNode(node) {
	        var c = node.children.length > 0 ? " { " + node.children.map(serializeNode).join(", ") + " } " : '';
	        return "" + node.value + c;
	    }
	    /**
	     * The expectation is that the activate route is created with the right set of parameters.
	     * So we push new values into the observables only when they are not the initial values.
	     * And we detect that by checking if the snapshot field is set.
	     */
	    function advanceActivatedRoute(route) {
	        if (route.snapshot) {
	            if (!shallowEqual(route.snapshot.queryParams, route._futureSnapshot.queryParams)) {
	                route.queryParams.next(route._futureSnapshot.queryParams);
	            }
	            if (route.snapshot.fragment !== route._futureSnapshot.fragment) {
	                route.fragment.next(route._futureSnapshot.fragment);
	            }
	            if (!shallowEqual(route.snapshot.params, route._futureSnapshot.params)) {
	                route.params.next(route._futureSnapshot.params);
	            }
	            if (!shallowEqualArrays(route.snapshot.url, route._futureSnapshot.url)) {
	                route.url.next(route._futureSnapshot.url);
	            }
	            if (!equalParamsAndUrlSegments(route.snapshot, route._futureSnapshot)) {
	                route.data.next(route._futureSnapshot.data);
	            }
	            route.snapshot = route._futureSnapshot;
	        }
	        else {
	            route.snapshot = route._futureSnapshot;
	            // this is for resolved data
	            route.data.next(route._futureSnapshot.data);
	        }
	    }
	    function equalParamsAndUrlSegments(a, b) {
	        return shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
	    }

	    function createRouterState(curr, prevState) {
	        var root = createNode(curr._root, prevState ? prevState._root : undefined);
	        return new RouterState(root, curr);
	    }
	    function createNode(curr, prevState) {
	        if (prevState && equalRouteSnapshots(prevState.value.snapshot, curr.value)) {
	            var value = prevState.value;
	            value._futureSnapshot = curr.value;
	            var children = createOrReuseChildren(curr, prevState);
	            return new TreeNode(value, children);
	        }
	        else {
	            var value = createActivatedRoute(curr.value);
	            var children = curr.children.map(function (c) { return createNode(c); });
	            return new TreeNode(value, children);
	        }
	    }
	    function createOrReuseChildren(curr, prevState) {
	        return curr.children.map(function (child) {
	            for (var _i = 0, _a = prevState.children; _i < _a.length; _i++) {
	                var p = _a[_i];
	                if (equalRouteSnapshots(p.value.snapshot, child.value)) {
	                    return createNode(child, p);
	                }
	            }
	            return createNode(child);
	        });
	    }
	    function createActivatedRoute(c) {
	        return new ActivatedRoute(new rxjs_BehaviorSubject.BehaviorSubject(c.url), new rxjs_BehaviorSubject.BehaviorSubject(c.params), new rxjs_BehaviorSubject.BehaviorSubject(c.queryParams), new rxjs_BehaviorSubject.BehaviorSubject(c.fragment), new rxjs_BehaviorSubject.BehaviorSubject(c.data), c.outlet, c.component, c);
	    }
	    function equalRouteSnapshots(a, b) {
	        return a._routeConfig === b._routeConfig;
	    }

	    function createUrlTree(route, urlTree, commands, queryParams, fragment) {
	        if (commands.length === 0) {
	            return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
	        }
	        var normalizedCommands = normalizeCommands(commands);
	        validateCommands(normalizedCommands);
	        if (navigateToRoot(normalizedCommands)) {
	            return tree(urlTree.root, new UrlSegmentGroup([], {}), urlTree, queryParams, fragment);
	        }
	        var startingPosition = findStartingPosition(normalizedCommands, urlTree, route);
	        var segmentGroup = startingPosition.processChildren ?
	            updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, normalizedCommands.commands) :
	            updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, normalizedCommands.commands);
	        return tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
	    }
	    function validateCommands(n) {
	        if (n.isAbsolute && n.commands.length > 0 && isMatrixParams(n.commands[0])) {
	            throw new Error('Root segment cannot have matrix parameters');
	        }
	        var c = n.commands.filter(function (c) { return typeof c === 'object' && c.outlets !== undefined; });
	        if (c.length > 0 && c[0] !== n.commands[n.commands.length - 1]) {
	            throw new Error('{outlets:{}} has to be the last command');
	        }
	    }
	    function isMatrixParams(command) {
	        return typeof command === 'object' && command.outlets === undefined &&
	            command.segmentPath === undefined;
	    }
	    function tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
	        if (urlTree.root === oldSegmentGroup) {
	            return new UrlTree(newSegmentGroup, stringify(queryParams), fragment);
	        }
	        else {
	            return new UrlTree(replaceSegment(urlTree.root, oldSegmentGroup, newSegmentGroup), stringify(queryParams), fragment);
	        }
	    }
	    function replaceSegment(current, oldSegment, newSegment) {
	        var children = {};
	        forEach(current.children, function (c, outletName) {
	            if (c === oldSegment) {
	                children[outletName] = newSegment;
	            }
	            else {
	                children[outletName] = replaceSegment(c, oldSegment, newSegment);
	            }
	        });
	        return new UrlSegmentGroup(current.segments, children);
	    }
	    function navigateToRoot(normalizedChange) {
	        return normalizedChange.isAbsolute && normalizedChange.commands.length === 1 &&
	            normalizedChange.commands[0] == '/';
	    }
	    var NormalizedNavigationCommands = (function () {
	        function NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, commands) {
	            this.isAbsolute = isAbsolute;
	            this.numberOfDoubleDots = numberOfDoubleDots;
	            this.commands = commands;
	        }
	        return NormalizedNavigationCommands;
	    }());
	    function normalizeCommands(commands) {
	        if ((typeof commands[0] === 'string') && commands.length === 1 && commands[0] == '/') {
	            return new NormalizedNavigationCommands(true, 0, commands);
	        }
	        var numberOfDoubleDots = 0;
	        var isAbsolute = false;
	        var res = [];
	        var _loop_1 = function(i) {
	            var c = commands[i];
	            if (typeof c === 'object' && c.outlets !== undefined) {
	                var r_1 = {};
	                forEach(c.outlets, function (commands, name) {
	                    if (typeof commands === 'string') {
	                        r_1[name] = commands.split('/');
	                    }
	                    else {
	                        r_1[name] = commands;
	                    }
	                });
	                res.push({ outlets: r_1 });
	                return "continue";
	            }
	            if (typeof c === 'object' && c.segmentPath !== undefined) {
	                res.push(c.segmentPath);
	                return "continue";
	            }
	            if (!(typeof c === 'string')) {
	                res.push(c);
	                return "continue";
	            }
	            if (i === 0) {
	                var parts = c.split('/');
	                for (var j = 0; j < parts.length; ++j) {
	                    var cc = parts[j];
	                    if (j == 0 && cc == '.') {
	                    }
	                    else if (j == 0 && cc == '') {
	                        isAbsolute = true;
	                    }
	                    else if (cc == '..') {
	                        numberOfDoubleDots++;
	                    }
	                    else if (cc != '') {
	                        res.push(cc);
	                    }
	                }
	            }
	            else {
	                res.push(c);
	            }
	        };
	        for (var i = 0; i < commands.length; ++i) {
	            _loop_1(i);
	        }
	        return new NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, res);
	    }
	    var Position = (function () {
	        function Position(segmentGroup, processChildren, index) {
	            this.segmentGroup = segmentGroup;
	            this.processChildren = processChildren;
	            this.index = index;
	        }
	        return Position;
	    }());
	    function findStartingPosition(normalizedChange, urlTree, route) {
	        if (normalizedChange.isAbsolute) {
	            return new Position(urlTree.root, true, 0);
	        }
	        else if (route.snapshot._lastPathIndex === -1) {
	            return new Position(route.snapshot._urlSegment, true, 0);
	        }
	        else {
	            var modifier = isMatrixParams(normalizedChange.commands[0]) ? 0 : 1;
	            var index = route.snapshot._lastPathIndex + modifier;
	            return createPositionApplyingDoubleDots(route.snapshot._urlSegment, index, normalizedChange.numberOfDoubleDots);
	        }
	    }
	    function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
	        var g = group;
	        var ci = index;
	        var dd = numberOfDoubleDots;
	        while (dd > ci) {
	            dd -= ci;
	            g = g.parent;
	            if (!g) {
	                throw new Error('Invalid number of \'../\'');
	            }
	            ci = g.segments.length;
	        }
	        return new Position(g, false, ci - dd);
	    }
	    function getPath(command) {
	        if (typeof command === 'object' && command.outlets)
	            return command.outlets[PRIMARY_OUTLET];
	        return "" + command;
	    }
	    function getOutlets(commands) {
	        if (!(typeof commands[0] === 'object'))
	            return (_a = {}, _a[PRIMARY_OUTLET] = commands, _a);
	        if (commands[0].outlets === undefined)
	            return (_b = {}, _b[PRIMARY_OUTLET] = commands, _b);
	        return commands[0].outlets;
	        var _a, _b;
	    }
	    function updateSegmentGroup(segmentGroup, startIndex, commands) {
	        if (!segmentGroup) {
	            segmentGroup = new UrlSegmentGroup([], {});
	        }
	        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
	            return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
	        }
	        var m = prefixedWith(segmentGroup, startIndex, commands);
	        var slicedCommands = commands.slice(m.commandIndex);
	        if (m.match && m.pathIndex < segmentGroup.segments.length) {
	            var g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
	            g.children[PRIMARY_OUTLET] =
	                new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
	            return updateSegmentGroupChildren(g, 0, slicedCommands);
	        }
	        else if (m.match && slicedCommands.length === 0) {
	            return new UrlSegmentGroup(segmentGroup.segments, {});
	        }
	        else if (m.match && !segmentGroup.hasChildren()) {
	            return createNewSegmentGroup(segmentGroup, startIndex, commands);
	        }
	        else if (m.match) {
	            return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
	        }
	        else {
	            return createNewSegmentGroup(segmentGroup, startIndex, commands);
	        }
	    }
	    function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
	        if (commands.length === 0) {
	            return new UrlSegmentGroup(segmentGroup.segments, {});
	        }
	        else {
	            var outlets_1 = getOutlets(commands);
	            var children_1 = {};
	            forEach(outlets_1, function (commands, outlet) {
	                if (commands !== null) {
	                    children_1[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
	                }
	            });
	            forEach(segmentGroup.children, function (child, childOutlet) {
	                if (outlets_1[childOutlet] === undefined) {
	                    children_1[childOutlet] = child;
	                }
	            });
	            return new UrlSegmentGroup(segmentGroup.segments, children_1);
	        }
	    }
	    function prefixedWith(segmentGroup, startIndex, commands) {
	        var currentCommandIndex = 0;
	        var currentPathIndex = startIndex;
	        var noMatch = { match: false, pathIndex: 0, commandIndex: 0 };
	        while (currentPathIndex < segmentGroup.segments.length) {
	            if (currentCommandIndex >= commands.length)
	                return noMatch;
	            var path = segmentGroup.segments[currentPathIndex];
	            var curr = getPath(commands[currentCommandIndex]);
	            var next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
	            if (currentPathIndex > 0 && curr === undefined)
	                break;
	            if (curr && next && (typeof next === 'object') && next.outlets === undefined) {
	                if (!compare(curr, next, path))
	                    return noMatch;
	                currentCommandIndex += 2;
	            }
	            else {
	                if (!compare(curr, {}, path))
	                    return noMatch;
	                currentCommandIndex++;
	            }
	            currentPathIndex++;
	        }
	        return { match: true, pathIndex: currentPathIndex, commandIndex: currentCommandIndex };
	    }
	    function createNewSegmentGroup(segmentGroup, startIndex, commands) {
	        var paths = segmentGroup.segments.slice(0, startIndex);
	        var i = 0;
	        while (i < commands.length) {
	            if (typeof commands[i] === 'object' && commands[i].outlets !== undefined) {
	                var children = createNewSegmentChldren(commands[i].outlets);
	                return new UrlSegmentGroup(paths, children);
	            }
	            // if we start with an object literal, we need to reuse the path part from the segment
	            if (i === 0 && isMatrixParams(commands[0])) {
	                var p = segmentGroup.segments[startIndex];
	                paths.push(new UrlSegment(p.path, commands[0]));
	                i++;
	                continue;
	            }
	            var curr = getPath(commands[i]);
	            var next = (i < commands.length - 1) ? commands[i + 1] : null;
	            if (curr && next && isMatrixParams(next)) {
	                paths.push(new UrlSegment(curr, stringify(next)));
	                i += 2;
	            }
	            else {
	                paths.push(new UrlSegment(curr, {}));
	                i++;
	            }
	        }
	        return new UrlSegmentGroup(paths, {});
	    }
	    function createNewSegmentChldren(outlets) {
	        var children = {};
	        forEach(outlets, function (commands, outlet) {
	            if (commands !== null) {
	                children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
	            }
	        });
	        return children;
	    }
	    function stringify(params) {
	        var res = {};
	        forEach(params, function (v, k) { return res[k] = "" + v; });
	        return res;
	    }
	    function compare(path, params, segment) {
	        return path == segment.path && shallowEqual(params, segment.parameters);
	    }

	    var NoMatch$1 = (function () {
	        function NoMatch() {
	        }
	        return NoMatch;
	    }());
	    function recognize(rootComponentType, config, urlTree, url) {
	        return new Recognizer(rootComponentType, config, urlTree, url).recognize();
	    }
	    var Recognizer = (function () {
	        function Recognizer(rootComponentType, config, urlTree, url) {
	            this.rootComponentType = rootComponentType;
	            this.config = config;
	            this.urlTree = urlTree;
	            this.url = url;
	        }
	        Recognizer.prototype.recognize = function () {
	            try {
	                var rootSegmentGroup = split$1(this.urlTree.root, [], [], this.config).segmentGroup;
	                var children = this.processSegmentGroup(this.config, rootSegmentGroup, PRIMARY_OUTLET);
	                var root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, this.urlTree.root, -1, {});
	                var rootNode = new TreeNode(root, children);
	                var routeState = new RouterStateSnapshot(this.url, rootNode);
	                this.inheriteParamsAndData(routeState._root);
	                return rxjs_observable_of.of(routeState);
	            }
	            catch (e) {
	                return new rxjs_Observable.Observable(function (obs) { return obs.error(e); });
	            }
	        };
	        Recognizer.prototype.inheriteParamsAndData = function (routeNode) {
	            var _this = this;
	            var route = routeNode.value;
	            var i = inheritedParamsDataResolve(route);
	            route.params = Object.freeze(i.params);
	            route.data = Object.freeze(i.data);
	            routeNode.children.forEach(function (n) { return _this.inheriteParamsAndData(n); });
	        };
	        Recognizer.prototype.processSegmentGroup = function (config, segmentGroup, outlet) {
	            if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
	                return this.processChildren(config, segmentGroup);
	            }
	            else {
	                return this.processSegment(config, segmentGroup, 0, segmentGroup.segments, outlet);
	            }
	        };
	        Recognizer.prototype.processChildren = function (config, segmentGroup) {
	            var _this = this;
	            var children = mapChildrenIntoArray(segmentGroup, function (child, childOutlet) { return _this.processSegmentGroup(config, child, childOutlet); });
	            checkOutletNameUniqueness(children);
	            sortActivatedRouteSnapshots(children);
	            return children;
	        };
	        Recognizer.prototype.processSegment = function (config, segmentGroup, pathIndex, segments, outlet) {
	            for (var _i = 0, config_1 = config; _i < config_1.length; _i++) {
	                var r = config_1[_i];
	                try {
	                    return this.processSegmentAgainstRoute(r, segmentGroup, pathIndex, segments, outlet);
	                }
	                catch (e) {
	                    if (!(e instanceof NoMatch$1))
	                        throw e;
	                }
	            }
	            if (this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
	                return [];
	            }
	            else {
	                throw new NoMatch$1();
	            }
	        };
	        Recognizer.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
	            return segments.length === 0 && !segmentGroup.children[outlet];
	        };
	        Recognizer.prototype.processSegmentAgainstRoute = function (route, rawSegment, pathIndex, segments, outlet) {
	            if (route.redirectTo)
	                throw new NoMatch$1();
	            if ((route.outlet ? route.outlet : PRIMARY_OUTLET) !== outlet)
	                throw new NoMatch$1();
	            if (route.path === '**') {
	                var params = segments.length > 0 ? last(segments).parameters : {};
	                var snapshot_1 = new ActivatedRouteSnapshot(segments, params, Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + segments.length, getResolve(route));
	                return [new TreeNode(snapshot_1, [])];
	            }
	            var _a = match$1(rawSegment, route, segments), consumedSegments = _a.consumedSegments, parameters = _a.parameters, lastChild = _a.lastChild;
	            var rawSlicedSegments = segments.slice(lastChild);
	            var childConfig = getChildConfig(route);
	            var _b = split$1(rawSegment, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _b.segmentGroup, slicedSegments = _b.slicedSegments;
	            var snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, getData(route), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + consumedSegments.length, getResolve(route));
	            if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
	                var children = this.processChildren(childConfig, segmentGroup);
	                return [new TreeNode(snapshot, children)];
	            }
	            else if (childConfig.length === 0 && slicedSegments.length === 0) {
	                return [new TreeNode(snapshot, [])];
	            }
	            else {
	                var children = this.processSegment(childConfig, segmentGroup, pathIndex + lastChild, slicedSegments, PRIMARY_OUTLET);
	                return [new TreeNode(snapshot, children)];
	            }
	        };
	        return Recognizer;
	    }());
	    function sortActivatedRouteSnapshots(nodes) {
	        nodes.sort(function (a, b) {
	            if (a.value.outlet === PRIMARY_OUTLET)
	                return -1;
	            if (b.value.outlet === PRIMARY_OUTLET)
	                return 1;
	            return a.value.outlet.localeCompare(b.value.outlet);
	        });
	    }
	    function getChildConfig(route) {
	        if (route.children) {
	            return route.children;
	        }
	        else if (route.loadChildren) {
	            return route._loadedConfig.routes;
	        }
	        else {
	            return [];
	        }
	    }
	    function match$1(segmentGroup, route, segments) {
	        if (route.path === '') {
	            if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
	                throw new NoMatch$1();
	            }
	            else {
	                return { consumedSegments: [], lastChild: 0, parameters: {} };
	            }
	        }
	        var matcher = route.matcher || defaultUrlMatcher;
	        var res = matcher(segments, segmentGroup, route);
	        if (!res)
	            throw new NoMatch$1();
	        var posParams = {};
	        forEach(res.posParams, function (v, k) { posParams[k] = v.path; });
	        var parameters = merge(posParams, res.consumed[res.consumed.length - 1].parameters);
	        return { consumedSegments: res.consumed, lastChild: res.consumed.length, parameters: parameters };
	    }
	    function checkOutletNameUniqueness(nodes) {
	        var names = {};
	        nodes.forEach(function (n) {
	            var routeWithSameOutletName = names[n.value.outlet];
	            if (routeWithSameOutletName) {
	                var p = routeWithSameOutletName.url.map(function (s) { return s.toString(); }).join('/');
	                var c = n.value.url.map(function (s) { return s.toString(); }).join('/');
	                throw new Error("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
	            }
	            names[n.value.outlet] = n.value;
	        });
	    }
	    function getSourceSegmentGroup(segmentGroup) {
	        var s = segmentGroup;
	        while (s._sourceSegment) {
	            s = s._sourceSegment;
	        }
	        return s;
	    }
	    function getPathIndexShift(segmentGroup) {
	        var s = segmentGroup;
	        var res = (s._segmentIndexShift ? s._segmentIndexShift : 0);
	        while (s._sourceSegment) {
	            s = s._sourceSegment;
	            res += (s._segmentIndexShift ? s._segmentIndexShift : 0);
	        }
	        return res - 1;
	    }
	    function split$1(segmentGroup, consumedSegments, slicedSegments, config) {
	        if (slicedSegments.length > 0 &&
	            containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
	            var s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(segmentGroup, consumedSegments, config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
	            s._sourceSegment = segmentGroup;
	            s._segmentIndexShift = consumedSegments.length;
	            return { segmentGroup: s, slicedSegments: [] };
	        }
	        else if (slicedSegments.length === 0 &&
	            containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
	            var s = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
	            s._sourceSegment = segmentGroup;
	            s._segmentIndexShift = consumedSegments.length;
	            return { segmentGroup: s, slicedSegments: slicedSegments };
	        }
	        else {
	            var s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
	            s._sourceSegment = segmentGroup;
	            s._segmentIndexShift = consumedSegments.length;
	            return { segmentGroup: s, slicedSegments: slicedSegments };
	        }
	    }
	    function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
	        var res = {};
	        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
	            var r = routes_1[_i];
	            if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet$2(r)]) {
	                var s = new UrlSegmentGroup([], {});
	                s._sourceSegment = segmentGroup;
	                s._segmentIndexShift = segmentGroup.segments.length;
	                res[getOutlet$2(r)] = s;
	            }
	        }
	        return merge(children, res);
	    }
	    function createChildrenForEmptyPaths(segmentGroup, consumedSegments, routes, primarySegment) {
	        var res = {};
	        res[PRIMARY_OUTLET] = primarySegment;
	        primarySegment._sourceSegment = segmentGroup;
	        primarySegment._segmentIndexShift = consumedSegments.length;
	        for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
	            var r = routes_2[_i];
	            if (r.path === '' && getOutlet$2(r) !== PRIMARY_OUTLET) {
	                var s = new UrlSegmentGroup([], {});
	                s._sourceSegment = segmentGroup;
	                s._segmentIndexShift = consumedSegments.length;
	                res[getOutlet$2(r)] = s;
	            }
	        }
	        return res;
	    }
	    function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
	        return routes
	            .filter(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r) &&
	            getOutlet$2(r) !== PRIMARY_OUTLET; })
	            .length > 0;
	    }
	    function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
	        return routes.filter(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r); }).length > 0;
	    }
	    function emptyPathMatch(segmentGroup, slicedSegments, r) {
	        if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full')
	            return false;
	        return r.path === '' && r.redirectTo === undefined;
	    }
	    function getOutlet$2(route) {
	        return route.outlet ? route.outlet : PRIMARY_OUTLET;
	    }
	    function getData(route) {
	        return route.data ? route.data : {};
	    }
	    function getResolve(route) {
	        return route.resolve ? route.resolve : {};
	    }

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @whatItDoes Contains all the router outlets created in a component.
	     *
	     * @stable
	     */
	    var RouterOutletMap = (function () {
	        function RouterOutletMap() {
	            /** @internal */
	            this._outlets = {};
	        }
	        /**
	         * Adds an outlet to this map.
	         */
	        RouterOutletMap.prototype.registerOutlet = function (name, outlet) { this._outlets[name] = outlet; };
	        /**
	         * Removes an outlet from this map.
	         */
	        RouterOutletMap.prototype.removeOutlet = function (name) { this._outlets[name] = undefined; };
	        return RouterOutletMap;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @whatItDoes Provides a way to migrate Angular 1 applications to Angular 2.
	     *
	     * @experimental
	     */
	    var UrlHandlingStrategy = (function () {
	        function UrlHandlingStrategy() {
	        }
	        return UrlHandlingStrategy;
	    }());
	    /**
	     * @experimental
	     */
	    var DefaultUrlHandlingStrategy = (function () {
	        function DefaultUrlHandlingStrategy() {
	        }
	        DefaultUrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { return true; };
	        DefaultUrlHandlingStrategy.prototype.extract = function (url) { return url; };
	        DefaultUrlHandlingStrategy.prototype.merge = function (newUrlPart, wholeUrl) { return newUrlPart; };
	        return DefaultUrlHandlingStrategy;
	    }());

	    /**
	     * @whatItDoes Represents an event triggered when a navigation starts.
	     *
	     * @stable
	     */
	    var NavigationStart = (function () {
	        // TODO: vsavkin: make internal
	        function NavigationStart(
	            /** @docsNotRequired */
	            id, 
	            /** @docsNotRequired */
	            url) {
	            this.id = id;
	            this.url = url;
	        }
	        /** @docsNotRequired */
	        NavigationStart.prototype.toString = function () { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"; };
	        return NavigationStart;
	    }());
	    /**
	     * @whatItDoes Represents an event triggered when a navigation ends successfully.
	     *
	     * @stable
	     */
	    var NavigationEnd = (function () {
	        // TODO: vsavkin: make internal
	        function NavigationEnd(
	            /** @docsNotRequired */
	            id, 
	            /** @docsNotRequired */
	            url, 
	            /** @docsNotRequired */
	            urlAfterRedirects) {
	            this.id = id;
	            this.url = url;
	            this.urlAfterRedirects = urlAfterRedirects;
	        }
	        /** @docsNotRequired */
	        NavigationEnd.prototype.toString = function () {
	            return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
	        };
	        return NavigationEnd;
	    }());
	    /**
	     * @whatItDoes Represents an event triggered when a navigation is canceled.
	     *
	     * @stable
	     */
	    var NavigationCancel = (function () {
	        // TODO: vsavkin: make internal
	        function NavigationCancel(
	            /** @docsNotRequired */
	            id, 
	            /** @docsNotRequired */
	            url, 
	            /** @docsNotRequired */
	            reason) {
	            this.id = id;
	            this.url = url;
	            this.reason = reason;
	        }
	        /** @docsNotRequired */
	        NavigationCancel.prototype.toString = function () { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"; };
	        return NavigationCancel;
	    }());
	    /**
	     * @whatItDoes Represents an event triggered when a navigation fails due to an unexpected error.
	     *
	     * @stable
	     */
	    var NavigationError = (function () {
	        // TODO: vsavkin: make internal
	        function NavigationError(
	            /** @docsNotRequired */
	            id, 
	            /** @docsNotRequired */
	            url, 
	            /** @docsNotRequired */
	            error) {
	            this.id = id;
	            this.url = url;
	            this.error = error;
	        }
	        /** @docsNotRequired */
	        NavigationError.prototype.toString = function () {
	            return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
	        };
	        return NavigationError;
	    }());
	    /**
	     * @whatItDoes Represents an event triggered when routes are recognized.
	     *
	     * @stable
	     */
	    var RoutesRecognized = (function () {
	        // TODO: vsavkin: make internal
	        function RoutesRecognized(
	            /** @docsNotRequired */
	            id, 
	            /** @docsNotRequired */
	            url, 
	            /** @docsNotRequired */
	            urlAfterRedirects, 
	            /** @docsNotRequired */
	            state) {
	            this.id = id;
	            this.url = url;
	            this.urlAfterRedirects = urlAfterRedirects;
	            this.state = state;
	        }
	        /** @docsNotRequired */
	        RoutesRecognized.prototype.toString = function () {
	            return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
	        };
	        return RoutesRecognized;
	    }());
	    function defaultErrorHandler(error) {
	        throw error;
	    }
	    /**
	     * @whatItDoes Provides the navigation and url manipulation capabilities.
	     *
	     * See {@link Routes} for more details and examples.
	     *
	     * @ngModule RouterModule
	     *
	     * @stable
	     */
	    var Router = (function () {
	        /**
	         * Creates the router service.
	         */
	        // TODO: vsavkin make internal after the final is out.
	        function Router(rootComponentType, urlSerializer, outletMap, location, injector, loader, compiler, config) {
	            this.rootComponentType = rootComponentType;
	            this.urlSerializer = urlSerializer;
	            this.outletMap = outletMap;
	            this.location = location;
	            this.injector = injector;
	            this.config = config;
	            this.navigations = new rxjs_BehaviorSubject.BehaviorSubject(null);
	            this.routerEvents = new rxjs_Subject.Subject();
	            this.navigationId = 0;
	            /**
	             * Error handler that is invoked when a navigation errors.
	             *
	             * See {@link ErrorHandler} for more information.
	             */
	            this.errorHandler = defaultErrorHandler;
	            /**
	             * Indicates if at least one navigation happened.
	             */
	            this.navigated = false;
	            /**
	             * Extracts and merges URLs. Used for Angular 1 to Angular 2 migrations.
	             */
	            this.urlHandlingStrategy = new DefaultUrlHandlingStrategy();
	            this.resetConfig(config);
	            this.currentUrlTree = createEmptyUrlTree();
	            this.rawUrlTree = this.currentUrlTree;
	            this.configLoader = new RouterConfigLoader(loader, compiler);
	            this.currentRouterState = createEmptyState(this.currentUrlTree, this.rootComponentType);
	            this.processNavigations();
	        }
	        /**
	         * @internal
	         * TODO: this should be removed once the constructor of the router made internal
	         */
	        Router.prototype.resetRootComponentType = function (rootComponentType) {
	            this.rootComponentType = rootComponentType;
	            // TODO: vsavkin router 4.0 should make the root component set to null
	            // this will simplify the lifecycle of the router.
	            this.currentRouterState.root.component = this.rootComponentType;
	        };
	        /**
	         * Sets up the location change listener and performs the initial navigation.
	         */
	        Router.prototype.initialNavigation = function () {
	            this.setUpLocationChangeListener();
	            this.navigateByUrl(this.location.path(true), { replaceUrl: true });
	        };
	        /**
	         * Sets up the location change listener.
	         */
	        Router.prototype.setUpLocationChangeListener = function () {
	            var _this = this;
	            // Zone.current.wrap is needed because of the issue with RxJS scheduler,
	            // which does not work properly with zone.js in IE and Safari
	            this.locationSubscription = this.location.subscribe(Zone.current.wrap(function (change) {
	                var rawUrlTree = _this.urlSerializer.parse(change['url']);
	                setTimeout(function () {
	                    _this.scheduleNavigation(rawUrlTree, { skipLocationChange: change['pop'], replaceUrl: true });
	                }, 0);
	            }));
	        };
	        Object.defineProperty(Router.prototype, "routerState", {
	            /**
	             * Returns the current route state.
	             */
	            get: function () { return this.currentRouterState; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(Router.prototype, "url", {
	            /**
	             * Returns the current url.
	             */
	            get: function () { return this.serializeUrl(this.currentUrlTree); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(Router.prototype, "events", {
	            /**
	             * Returns an observable of route events
	             */
	            get: function () { return this.routerEvents; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Resets the configuration used for navigation and generating links.
	         *
	         * ### Usage
	         *
	         * ```
	         * router.resetConfig([
	         *  { path: 'team/:id', component: TeamCmp, children: [
	         *    { path: 'simple', component: SimpleCmp },
	         *    { path: 'user/:name', component: UserCmp }
	         *  ] }
	         * ]);
	         * ```
	         */
	        Router.prototype.resetConfig = function (config) {
	            validateConfig(config);
	            this.config = config;
	        };
	        /**
	         * @docsNotRequired
	         */
	        Router.prototype.ngOnDestroy = function () { this.dispose(); };
	        /**
	         * Disposes of the router.
	         */
	        Router.prototype.dispose = function () { this.locationSubscription.unsubscribe(); };
	        /**
	         * Applies an array of commands to the current url tree and creates a new url tree.
	         *
	         * When given an activate route, applies the given commands starting from the route.
	         * When not given a route, applies the given command starting from the root.
	         *
	         * ### Usage
	         *
	         * ```
	         * // create /team/33/user/11
	         * router.createUrlTree(['/team', 33, 'user', 11]);
	         *
	         * // create /team/33;expand=true/user/11
	         * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
	         *
	         * // you can collapse static segments like this (this works only with the first passed-in value):
	         * router.createUrlTree(['/team/33/user', userId]);
	         *
	         * // If the first segment can contain slashes, and you do not want the router to split it, you
	         * // can do the following:
	         *
	         * router.createUrlTree([{segmentPath: '/one/two'}]);
	         *
	         * // create /team/33/(user/11//right:chat)
	         * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
	         *
	         * // remove the right secondary node
	         * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
	         *
	         * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
	         *
	         * // navigate to /team/33/user/11/details
	         * router.createUrlTree(['details'], {relativeTo: route});
	         *
	         * // navigate to /team/33/user/22
	         * router.createUrlTree(['../22'], {relativeTo: route});
	         *
	         * // navigate to /team/44/user/22
	         * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
	         * ```
	         */
	        Router.prototype.createUrlTree = function (commands, _a) {
	            var _b = _a === void 0 ? {} : _a, relativeTo = _b.relativeTo, queryParams = _b.queryParams, fragment = _b.fragment, preserveQueryParams = _b.preserveQueryParams, preserveFragment = _b.preserveFragment;
	            var a = relativeTo ? relativeTo : this.routerState.root;
	            var q = preserveQueryParams ? this.currentUrlTree.queryParams : queryParams;
	            var f = preserveFragment ? this.currentUrlTree.fragment : fragment;
	            return createUrlTree(a, this.currentUrlTree, commands, q, f);
	        };
	        /**
	         * Navigate based on the provided url. This navigation is always absolute.
	         *
	         * Returns a promise that:
	         * - is resolved with 'true' when navigation succeeds
	         * - is resolved with 'false' when navigation fails
	         * - is rejected when an error happens
	         *
	         * ### Usage
	         *
	         * ```
	         * router.navigateByUrl("/team/33/user/11");
	         *
	         * // Navigate without updating the URL
	         * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
	         * ```
	         *
	         * In opposite to `navigate`, `navigateByUrl` takes a whole URL
	         * and does not apply any delta to the current one.
	         */
	        Router.prototype.navigateByUrl = function (url, extras) {
	            if (extras === void 0) { extras = { skipLocationChange: false }; }
	            if (url instanceof UrlTree) {
	                return this.scheduleNavigation(this.urlHandlingStrategy.merge(url, this.rawUrlTree), extras);
	            }
	            else {
	                var urlTree = this.urlSerializer.parse(url);
	                return this.scheduleNavigation(this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree), extras);
	            }
	        };
	        /**
	         * Navigate based on the provided array of commands and a starting point.
	         * If no starting route is provided, the navigation is absolute.
	         *
	         * Returns a promise that:
	         * - is resolved with 'true' when navigation succeeds
	         * - is resolved with 'false' when navigation fails
	         * - is rejected when an error happens
	         *
	         * ### Usage
	         *
	         * ```
	         * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
	         *
	         * // Navigate without updating the URL
	         * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true });
	         * ```
	         *
	         * In opposite to `navigateByUrl`, `navigate` always takes a delta
	         * that is applied to the current URL.
	         */
	        Router.prototype.navigate = function (commands, extras) {
	            if (extras === void 0) { extras = { skipLocationChange: false }; }
	            if (typeof extras.queryParams === 'object' && extras.queryParams !== null) {
	                extras.queryParams = this.removeEmptyProps(extras.queryParams);
	            }
	            return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
	        };
	        /**
	         * Serializes a {@link UrlTree} into a string.
	         */
	        Router.prototype.serializeUrl = function (url) { return this.urlSerializer.serialize(url); };
	        /**
	         * Parses a string into a {@link UrlTree}.
	         */
	        Router.prototype.parseUrl = function (url) { return this.urlSerializer.parse(url); };
	        /**
	         * Returns if the url is activated or not.
	         */
	        Router.prototype.isActive = function (url, exact) {
	            if (url instanceof UrlTree) {
	                return containsTree(this.currentUrlTree, url, exact);
	            }
	            else {
	                var urlTree = this.urlSerializer.parse(url);
	                return containsTree(this.currentUrlTree, urlTree, exact);
	            }
	        };
	        Router.prototype.removeEmptyProps = function (params) {
	            return Object.keys(params).reduce(function (result, key) {
	                var value = params[key];
	                if (value !== null && value !== undefined) {
	                    result[key] = value;
	                }
	                return result;
	            }, {});
	        };
	        Router.prototype.processNavigations = function () {
	            var _this = this;
	            rxjs_operator_concatMap.concatMap
	                .call(this.navigations, function (nav) {
	                if (nav) {
	                    _this.executeScheduledNavigation(nav);
	                    // a failed navigation should not stop the router from processing
	                    // further navigations => the catch
	                    return nav.promise.catch(function () { });
	                }
	                else {
	                    return rxjs_observable_of.of(null);
	                }
	            })
	                .subscribe(function () { });
	        };
	        Router.prototype.scheduleNavigation = function (rawUrl, extras) {
	            var prevRawUrl = this.navigations.value ? this.navigations.value.rawUrl : null;
	            if (prevRawUrl && prevRawUrl.toString() === rawUrl.toString()) {
	                return this.navigations.value.promise;
	            }
	            var resolve = null;
	            var reject = null;
	            var promise = new Promise(function (res, rej) {
	                resolve = res;
	                reject = rej;
	            });
	            var id = ++this.navigationId;
	            this.navigations.next({ id: id, rawUrl: rawUrl, prevRawUrl: prevRawUrl, extras: extras, resolve: resolve, reject: reject, promise: promise });
	            // Make sure that the error is propagated even though `processNavigations` catch
	            // handler does not rethrow
	            return promise.catch(function (e) { return Promise.reject(e); });
	        };
	        Router.prototype.executeScheduledNavigation = function (_a) {
	            var _this = this;
	            var id = _a.id, rawUrl = _a.rawUrl, prevRawUrl = _a.prevRawUrl, extras = _a.extras, resolve = _a.resolve, reject = _a.reject;
	            var url = this.urlHandlingStrategy.extract(rawUrl);
	            var prevUrl = prevRawUrl ? this.urlHandlingStrategy.extract(prevRawUrl) : null;
	            var urlTransition = !prevUrl || url.toString() !== prevUrl.toString();
	            if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(rawUrl)) {
	                this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
	                Promise.resolve()
	                    .then(function (_) { return _this.runNavigate(url, rawUrl, extras.skipLocationChange, extras.replaceUrl, id, null); })
	                    .then(resolve, reject);
	            }
	            else if (urlTransition && prevRawUrl && this.urlHandlingStrategy.shouldProcessUrl(prevRawUrl)) {
	                this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
	                Promise.resolve()
	                    .then(function (_) { return _this.runNavigate(url, rawUrl, false, false, id, createEmptyState(url, _this.rootComponentType).snapshot); })
	                    .then(resolve, reject);
	            }
	            else {
	                this.rawUrlTree = rawUrl;
	                resolve(null);
	            }
	        };
	        Router.prototype.runNavigate = function (url, rawUrl, shouldPreventPushState, shouldReplaceUrl, id, precreatedState) {
	            var _this = this;
	            if (id !== this.navigationId) {
	                this.location.go(this.urlSerializer.serialize(this.currentUrlTree));
	                this.routerEvents.next(new NavigationCancel(id, this.serializeUrl(url), "Navigation ID " + id + " is not equal to the current navigation id " + this.navigationId));
	                return Promise.resolve(false);
	            }
	            return new Promise(function (resolvePromise, rejectPromise) {
	                // create an observable of the url and route state snapshot
	                // this operation do not result in any side effects
	                var urlAndSnapshot$;
	                if (!precreatedState) {
	                    var redirectsApplied$ = applyRedirects(_this.injector, _this.configLoader, _this.urlSerializer, url, _this.config);
	                    urlAndSnapshot$ = rxjs_operator_mergeMap.mergeMap.call(redirectsApplied$, function (appliedUrl) {
	                        return rxjs_operator_map.map.call(recognize(_this.rootComponentType, _this.config, appliedUrl, _this.serializeUrl(appliedUrl)), function (snapshot) {
	                            _this.routerEvents.next(new RoutesRecognized(id, _this.serializeUrl(url), _this.serializeUrl(appliedUrl), snapshot));
	                            return { appliedUrl: appliedUrl, snapshot: snapshot };
	                        });
	                    });
	                }
	                else {
	                    urlAndSnapshot$ = rxjs_observable_of.of({ appliedUrl: url, snapshot: precreatedState });
	                }
	                // run preactivation: guards and data resolvers
	                var preActivation;
	                var preactivationTraverse$ = rxjs_operator_map.map.call(urlAndSnapshot$, function (_a) {
	                    var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot;
	                    preActivation =
	                        new PreActivation(snapshot, _this.currentRouterState.snapshot, _this.injector);
	                    preActivation.traverse(_this.outletMap);
	                    return { appliedUrl: appliedUrl, snapshot: snapshot };
	                });
	                var preactivationCheckGuards = rxjs_operator_mergeMap.mergeMap.call(preactivationTraverse$, function (_a) {
	                    var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot;
	                    if (_this.navigationId !== id)
	                        return rxjs_observable_of.of(false);
	                    return rxjs_operator_map.map.call(preActivation.checkGuards(), function (shouldActivate) {
	                        return { appliedUrl: appliedUrl, snapshot: snapshot, shouldActivate: shouldActivate };
	                    });
	                });
	                var preactivationResolveData$ = rxjs_operator_mergeMap.mergeMap.call(preactivationCheckGuards, function (p) {
	                    if (_this.navigationId !== id)
	                        return rxjs_observable_of.of(false);
	                    if (p.shouldActivate) {
	                        return rxjs_operator_map.map.call(preActivation.resolveData(), function () { return p; });
	                    }
	                    else {
	                        return rxjs_observable_of.of(p);
	                    }
	                });
	                // create router state
	                // this operation has side effects => route state is being affected
	                var routerState$ = rxjs_operator_map.map.call(preactivationResolveData$, function (_a) {
	                    var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot, shouldActivate = _a.shouldActivate;
	                    if (shouldActivate) {
	                        var state = createRouterState(snapshot, _this.currentRouterState);
	                        return { appliedUrl: appliedUrl, state: state, shouldActivate: shouldActivate };
	                    }
	                    else {
	                        return { appliedUrl: appliedUrl, state: null, shouldActivate: shouldActivate };
	                    }
	                });
	                // applied the new router state
	                // this operation has side effects
	                var navigationIsSuccessful;
	                var storedState = _this.currentRouterState;
	                var storedUrl = _this.currentUrlTree;
	                routerState$
	                    .forEach(function (_a) {
	                    var appliedUrl = _a.appliedUrl, state = _a.state, shouldActivate = _a.shouldActivate;
	                    if (!shouldActivate || id !== _this.navigationId) {
	                        navigationIsSuccessful = false;
	                        return;
	                    }
	                    _this.currentUrlTree = appliedUrl;
	                    _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, rawUrl);
	                    _this.currentRouterState = state;
	                    if (!shouldPreventPushState) {
	                        var path = _this.urlSerializer.serialize(_this.rawUrlTree);
	                        if (_this.location.isCurrentPathEqualTo(path) || shouldReplaceUrl) {
	                            _this.location.replaceState(path);
	                        }
	                        else {
	                            _this.location.go(path);
	                        }
	                    }
	                    new ActivateRoutes(state, storedState).activate(_this.outletMap);
	                    navigationIsSuccessful = true;
	                })
	                    .then(function () {
	                    _this.navigated = true;
	                    if (navigationIsSuccessful) {
	                        _this.routerEvents.next(new NavigationEnd(id, _this.serializeUrl(url), _this.serializeUrl(_this.currentUrlTree)));
	                        resolvePromise(true);
	                    }
	                    else {
	                        _this.resetUrlToCurrentUrlTree();
	                        _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url), ''));
	                        resolvePromise(false);
	                    }
	                }, function (e) {
	                    if (e instanceof NavigationCancelingError) {
	                        _this.resetUrlToCurrentUrlTree();
	                        _this.navigated = true;
	                        _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url), e.message));
	                        resolvePromise(false);
	                    }
	                    else {
	                        _this.routerEvents.next(new NavigationError(id, _this.serializeUrl(url), e));
	                        try {
	                            resolvePromise(_this.errorHandler(e));
	                        }
	                        catch (ee) {
	                            rejectPromise(ee);
	                        }
	                    }
	                    _this.currentRouterState = storedState;
	                    _this.currentUrlTree = storedUrl;
	                    _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, rawUrl);
	                    _this.location.replaceState(_this.serializeUrl(_this.rawUrlTree));
	                });
	            });
	        };
	        Router.prototype.resetUrlToCurrentUrlTree = function () {
	            var path = this.urlSerializer.serialize(this.rawUrlTree);
	            this.location.replaceState(path);
	        };
	        return Router;
	    }());
	    var CanActivate = (function () {
	        function CanActivate(path) {
	            this.path = path;
	        }
	        Object.defineProperty(CanActivate.prototype, "route", {
	            get: function () { return this.path[this.path.length - 1]; },
	            enumerable: true,
	            configurable: true
	        });
	        return CanActivate;
	    }());
	    var CanDeactivate = (function () {
	        function CanDeactivate(component, route) {
	            this.component = component;
	            this.route = route;
	        }
	        return CanDeactivate;
	    }());
	    var PreActivation = (function () {
	        function PreActivation(future, curr, injector) {
	            this.future = future;
	            this.curr = curr;
	            this.injector = injector;
	            this.checks = [];
	        }
	        PreActivation.prototype.traverse = function (parentOutletMap) {
	            var futureRoot = this.future._root;
	            var currRoot = this.curr ? this.curr._root : null;
	            this.traverseChildRoutes(futureRoot, currRoot, parentOutletMap, [futureRoot.value]);
	        };
	        PreActivation.prototype.checkGuards = function () {
	            var _this = this;
	            if (this.checks.length === 0)
	                return rxjs_observable_of.of(true);
	            var checks$ = rxjs_observable_from.from(this.checks);
	            var runningChecks$ = rxjs_operator_mergeMap.mergeMap.call(checks$, function (s) {
	                if (s instanceof CanActivate) {
	                    return andObservables(rxjs_observable_from.from([_this.runCanActivateChild(s.path), _this.runCanActivate(s.route)]));
	                }
	                else if (s instanceof CanDeactivate) {
	                    // workaround https://github.com/Microsoft/TypeScript/issues/7271
	                    var s2 = s;
	                    return _this.runCanDeactivate(s2.component, s2.route);
	                }
	                else {
	                    throw new Error('Cannot be reached');
	                }
	            });
	            return rxjs_operator_every.every.call(runningChecks$, function (result) { return result === true; });
	        };
	        PreActivation.prototype.resolveData = function () {
	            var _this = this;
	            if (this.checks.length === 0)
	                return rxjs_observable_of.of(null);
	            var checks$ = rxjs_observable_from.from(this.checks);
	            var runningChecks$ = rxjs_operator_concatMap.concatMap.call(checks$, function (s) {
	                if (s instanceof CanActivate) {
	                    return _this.runResolve(s.route);
	                }
	                else {
	                    return rxjs_observable_of.of(null);
	                }
	            });
	            return rxjs_operator_reduce.reduce.call(runningChecks$, function (_, __) { return _; });
	        };
	        PreActivation.prototype.traverseChildRoutes = function (futureNode, currNode, outletMap, futurePath) {
	            var _this = this;
	            var prevChildren = nodeChildrenAsMap(currNode);
	            futureNode.children.forEach(function (c) {
	                _this.traverseRoutes(c, prevChildren[c.value.outlet], outletMap, futurePath.concat([c.value]));
	                delete prevChildren[c.value.outlet];
	            });
	            forEach(prevChildren, function (v, k) { return _this.deactiveRouteAndItsChildren(v, outletMap._outlets[k]); });
	        };
	        PreActivation.prototype.traverseRoutes = function (futureNode, currNode, parentOutletMap, futurePath) {
	            var future = futureNode.value;
	            var curr = currNode ? currNode.value : null;
	            var outlet = parentOutletMap ? parentOutletMap._outlets[futureNode.value.outlet] : null;
	            // reusing the node
	            if (curr && future._routeConfig === curr._routeConfig) {
	                if (!equalParamsAndUrlSegments(future, curr)) {
	                    this.checks.push(new CanDeactivate(outlet.component, curr), new CanActivate(futurePath));
	                }
	                else {
	                    // we need to set the data
	                    future.data = curr.data;
	                    future._resolvedData = curr._resolvedData;
	                }
	                // If we have a component, we need to go through an outlet.
	                if (future.component) {
	                    this.traverseChildRoutes(futureNode, currNode, outlet ? outlet.outletMap : null, futurePath);
	                }
	                else {
	                    this.traverseChildRoutes(futureNode, currNode, parentOutletMap, futurePath);
	                }
	            }
	            else {
	                if (curr) {
	                    this.deactiveRouteAndItsChildren(currNode, outlet);
	                }
	                this.checks.push(new CanActivate(futurePath));
	                // If we have a component, we need to go through an outlet.
	                if (future.component) {
	                    this.traverseChildRoutes(futureNode, null, outlet ? outlet.outletMap : null, futurePath);
	                }
	                else {
	                    this.traverseChildRoutes(futureNode, null, parentOutletMap, futurePath);
	                }
	            }
	        };
	        PreActivation.prototype.deactiveRouteAndItsChildren = function (route, outlet) {
	            var _this = this;
	            var prevChildren = nodeChildrenAsMap(route);
	            var r = route.value;
	            forEach(prevChildren, function (v, k) {
	                if (!r.component) {
	                    _this.deactiveRouteAndItsChildren(v, outlet);
	                }
	                else if (!!outlet) {
	                    _this.deactiveRouteAndItsChildren(v, outlet.outletMap._outlets[k]);
	                }
	                else {
	                    _this.deactiveRouteAndItsChildren(v, null);
	                }
	            });
	            if (!r.component) {
	                this.checks.push(new CanDeactivate(null, r));
	            }
	            else if (outlet && outlet.isActivated) {
	                this.checks.push(new CanDeactivate(outlet.component, r));
	            }
	            else {
	                this.checks.push(new CanDeactivate(null, r));
	            }
	        };
	        PreActivation.prototype.runCanActivate = function (future) {
	            var _this = this;
	            var canActivate = future._routeConfig ? future._routeConfig.canActivate : null;
	            if (!canActivate || canActivate.length === 0)
	                return rxjs_observable_of.of(true);
	            var obs = rxjs_operator_map.map.call(rxjs_observable_from.from(canActivate), function (c) {
	                var guard = _this.getToken(c, future);
	                var observable;
	                if (guard.canActivate) {
	                    observable = wrapIntoObservable(guard.canActivate(future, _this.future));
	                }
	                else {
	                    observable = wrapIntoObservable(guard(future, _this.future));
	                }
	                return rxjs_operator_first.first.call(observable);
	            });
	            return andObservables(obs);
	        };
	        PreActivation.prototype.runCanActivateChild = function (path) {
	            var _this = this;
	            var future = path[path.length - 1];
	            var canActivateChildGuards = path.slice(0, path.length - 1)
	                .reverse()
	                .map(function (p) { return _this.extractCanActivateChild(p); })
	                .filter(function (_) { return _ !== null; });
	            return andObservables(rxjs_operator_map.map.call(rxjs_observable_from.from(canActivateChildGuards), function (d) {
	                var obs = rxjs_operator_map.map.call(rxjs_observable_from.from(d.guards), function (c) {
	                    var guard = _this.getToken(c, c.node);
	                    var observable;
	                    if (guard.canActivateChild) {
	                        observable = wrapIntoObservable(guard.canActivateChild(future, _this.future));
	                    }
	                    else {
	                        observable = wrapIntoObservable(guard(future, _this.future));
	                    }
	                    return rxjs_operator_first.first.call(observable);
	                });
	                return andObservables(obs);
	            }));
	        };
	        PreActivation.prototype.extractCanActivateChild = function (p) {
	            var canActivateChild = p._routeConfig ? p._routeConfig.canActivateChild : null;
	            if (!canActivateChild || canActivateChild.length === 0)
	                return null;
	            return { node: p, guards: canActivateChild };
	        };
	        PreActivation.prototype.runCanDeactivate = function (component, curr) {
	            var _this = this;
	            var canDeactivate = curr && curr._routeConfig ? curr._routeConfig.canDeactivate : null;
	            if (!canDeactivate || canDeactivate.length === 0)
	                return rxjs_observable_of.of(true);
	            var canDeactivate$ = rxjs_operator_mergeMap.mergeMap.call(rxjs_observable_from.from(canDeactivate), function (c) {
	                var guard = _this.getToken(c, curr);
	                var observable;
	                if (guard.canDeactivate) {
	                    observable = wrapIntoObservable(guard.canDeactivate(component, curr, _this.curr));
	                }
	                else {
	                    observable = wrapIntoObservable(guard(component, curr, _this.curr));
	                }
	                return rxjs_operator_first.first.call(observable);
	            });
	            return rxjs_operator_every.every.call(canDeactivate$, function (result) { return result === true; });
	        };
	        PreActivation.prototype.runResolve = function (future) {
	            var resolve = future._resolve;
	            return rxjs_operator_map.map.call(this.resolveNode(resolve, future), function (resolvedData) {
	                future._resolvedData = resolvedData;
	                future.data = merge(future.data, inheritedParamsDataResolve(future).resolve);
	                return null;
	            });
	        };
	        PreActivation.prototype.resolveNode = function (resolve, future) {
	            var _this = this;
	            return waitForMap(resolve, function (k, v) {
	                var resolver = _this.getToken(v, future);
	                return resolver.resolve ? wrapIntoObservable(resolver.resolve(future, _this.future)) :
	                    wrapIntoObservable(resolver(future, _this.future));
	            });
	        };
	        PreActivation.prototype.getToken = function (token, snapshot) {
	            var config = closestLoadedConfig(snapshot);
	            var injector = config ? config.injector : this.injector;
	            return injector.get(token);
	        };
	        return PreActivation;
	    }());
	    var ActivateRoutes = (function () {
	        function ActivateRoutes(futureState, currState) {
	            this.futureState = futureState;
	            this.currState = currState;
	        }
	        ActivateRoutes.prototype.activate = function (parentOutletMap) {
	            var futureRoot = this.futureState._root;
	            var currRoot = this.currState ? this.currState._root : null;
	            this.deactivateChildRoutes(futureRoot, currRoot, parentOutletMap);
	            advanceActivatedRoute(this.futureState.root);
	            this.activateChildRoutes(futureRoot, currRoot, parentOutletMap);
	        };
	        ActivateRoutes.prototype.deactivateChildRoutes = function (futureNode, currNode, outletMap) {
	            var _this = this;
	            var prevChildren = nodeChildrenAsMap(currNode);
	            futureNode.children.forEach(function (c) {
	                _this.deactivateRoutes(c, prevChildren[c.value.outlet], outletMap);
	                delete prevChildren[c.value.outlet];
	            });
	            forEach(prevChildren, function (v, k) { return _this.deactiveRouteAndItsChildren(v, outletMap); });
	        };
	        ActivateRoutes.prototype.activateChildRoutes = function (futureNode, currNode, outletMap) {
	            var _this = this;
	            var prevChildren = nodeChildrenAsMap(currNode);
	            futureNode.children.forEach(function (c) { _this.activateRoutes(c, prevChildren[c.value.outlet], outletMap); });
	        };
	        ActivateRoutes.prototype.deactivateRoutes = function (futureNode, currNode, parentOutletMap) {
	            var future = futureNode.value;
	            var curr = currNode ? currNode.value : null;
	            // reusing the node
	            if (future === curr) {
	                // If we have a normal route, we need to go through an outlet.
	                if (future.component) {
	                    var outlet = getOutlet(parentOutletMap, future);
	                    this.deactivateChildRoutes(futureNode, currNode, outlet.outletMap);
	                }
	                else {
	                    this.deactivateChildRoutes(futureNode, currNode, parentOutletMap);
	                }
	            }
	            else {
	                if (curr) {
	                    this.deactiveRouteAndItsChildren(currNode, parentOutletMap);
	                }
	            }
	        };
	        ActivateRoutes.prototype.activateRoutes = function (futureNode, currNode, parentOutletMap) {
	            var future = futureNode.value;
	            var curr = currNode ? currNode.value : null;
	            // reusing the node
	            if (future === curr) {
	                // advance the route to push the parameters
	                advanceActivatedRoute(future);
	                // If we have a normal route, we need to go through an outlet.
	                if (future.component) {
	                    var outlet = getOutlet(parentOutletMap, future);
	                    this.activateChildRoutes(futureNode, currNode, outlet.outletMap);
	                }
	                else {
	                    this.activateChildRoutes(futureNode, currNode, parentOutletMap);
	                }
	            }
	            else {
	                // if we have a normal route, we need to advance the route
	                // and place the component into the outlet. After that recurse.
	                if (future.component) {
	                    advanceActivatedRoute(future);
	                    var outlet = getOutlet(parentOutletMap, futureNode.value);
	                    var outletMap = new RouterOutletMap();
	                    this.placeComponentIntoOutlet(outletMap, future, outlet);
	                    this.activateChildRoutes(futureNode, null, outletMap);
	                }
	                else {
	                    advanceActivatedRoute(future);
	                    this.activateChildRoutes(futureNode, null, parentOutletMap);
	                }
	            }
	        };
	        ActivateRoutes.prototype.placeComponentIntoOutlet = function (outletMap, future, outlet) {
	            var resolved = [{ provide: ActivatedRoute, useValue: future }, {
	                    provide: RouterOutletMap,
	                    useValue: outletMap
	                }];
	            var config = parentLoadedConfig(future.snapshot);
	            var resolver = null;
	            var injector = null;
	            if (config) {
	                injector = config.injectorFactory(outlet.locationInjector);
	                resolver = config.factoryResolver;
	                resolved.push({ provide: _angular_core.ComponentFactoryResolver, useValue: resolver });
	            }
	            else {
	                injector = outlet.locationInjector;
	                resolver = outlet.locationFactoryResolver;
	            }
	            outlet.activate(future, resolver, injector, _angular_core.ReflectiveInjector.resolve(resolved), outletMap);
	        };
	        ActivateRoutes.prototype.deactiveRouteAndItsChildren = function (route, parentOutletMap) {
	            var _this = this;
	            var prevChildren = nodeChildrenAsMap(route);
	            var outlet = null;
	            // getOutlet throws when cannot find the right outlet,
	            // which can happen if an outlet was in an NgIf and was removed
	            try {
	                outlet = getOutlet(parentOutletMap, route.value);
	            }
	            catch (e) {
	                return;
	            }
	            var childOutletMap = outlet.outletMap;
	            forEach(prevChildren, function (v, k) {
	                if (route.value.component) {
	                    _this.deactiveRouteAndItsChildren(v, childOutletMap);
	                }
	                else {
	                    _this.deactiveRouteAndItsChildren(v, parentOutletMap);
	                }
	            });
	            if (outlet && outlet.isActivated) {
	                outlet.deactivate();
	            }
	        };
	        return ActivateRoutes;
	    }());
	    function parentLoadedConfig(snapshot) {
	        var s = snapshot.parent;
	        while (s) {
	            var c = s._routeConfig;
	            if (c && c._loadedConfig)
	                return c._loadedConfig;
	            if (c && c.component)
	                return null;
	            s = s.parent;
	        }
	        return null;
	    }
	    function closestLoadedConfig(snapshot) {
	        if (!snapshot)
	            return null;
	        var s = snapshot.parent;
	        while (s) {
	            var c = s._routeConfig;
	            if (c && c._loadedConfig)
	                return c._loadedConfig;
	            s = s.parent;
	        }
	        return null;
	    }
	    function nodeChildrenAsMap(node) {
	        return node ? node.children.reduce(function (m, c) {
	            m[c.value.outlet] = c;
	            return m;
	        }, {}) : {};
	    }
	    function getOutlet(outletMap, route) {
	        var outlet = outletMap._outlets[route.outlet];
	        if (!outlet) {
	            var componentName = route.component.name;
	            if (route.outlet === PRIMARY_OUTLET) {
	                throw new Error("Cannot find primary outlet to load '" + componentName + "'");
	            }
	            else {
	                throw new Error("Cannot find the outlet " + route.outlet + " to load '" + componentName + "'");
	            }
	        }
	        return outlet;
	    }

	    /**
	     * @whatItDoes Lets you link to specific parts of your app.
	     *
	     * @howToUse
	     *
	     * Consider the following route configuration:

	     * ```
	     * [{ path: 'user/:name', component: UserCmp }]
	     * ```
	     *
	     * When linking to this `user/:name` route, you can write:
	     *
	     * ```
	     * <a routerLink='/user/bob'>link to user component</a>
	     * ```
	     *
	     * @description
	     *
	     * The RouterLink directives let you link to specific parts of your app.
	     *
	     * Whe the link is static, you can use the directive as follows:
	     *
	     * ```
	     * <a routerLink="/user/bob">link to user component</a>
	     * ```
	     *
	     * If you use dynamic values to generate the link, you can pass an array of path
	     * segments, followed by the params for each segment.
	     *
	     * For instance `['/team', teamId, 'user', userName, {details: true}]`
	     * means that we want to generate a link to `/team/11/user/bob;details=true`.
	     *
	     * Multiple static segments can be merged into one (e.g., `['/team/11/user', userName, {details:
	     true}]`).
	     *
	     * The first segment name can be prepended with `/`, `./`, or `../`:
	     * * If the first segment begins with `/`, the router will look up the route from the root of the
	     app.
	     * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
	     * instead look in the children of the current activated route.
	     * * And if the first segment begins with `../`, the router will go up one level.
	     *
	     * You can set query params and fragment as follows:
	     *
	     * ```
	     * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">link to user
	     component</a>
	     * ```
	     * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
	     *
	     * You can also tell the directive to preserve the current query params and fragment:
	     *
	     * ```
	     * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>link to user
	     component</a>
	     * ```
	     *
	     * The router link directive always treats the provided input as a delta to the current url.
	     *
	     * For instance, if the current url is `/user/(box//aux:team)`.
	     *
	     * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
	     * `/user/(jim//aux:team)`.
	     *
	     * @selector ':not(a)[routerLink]'
	     * @ngModule RouterModule
	     *
	     * See {@link Router.createUrlTree} for more information.
	     *
	     * @stable
	     */
	    var RouterLink = (function () {
	        function RouterLink(router, route, locationStrategy) {
	            this.router = router;
	            this.route = route;
	            this.locationStrategy = locationStrategy;
	            this.commands = [];
	        }
	        Object.defineProperty(RouterLink.prototype, "routerLink", {
	            set: function (data) {
	                if (Array.isArray(data)) {
	                    this.commands = data;
	                }
	                else {
	                    this.commands = [data];
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterLink.prototype.onClick = function () {
	            this.router.navigateByUrl(this.urlTree);
	            return true;
	        };
	        Object.defineProperty(RouterLink.prototype, "urlTree", {
	            get: function () {
	                return this.router.createUrlTree(this.commands, {
	                    relativeTo: this.route,
	                    queryParams: this.queryParams,
	                    fragment: this.fragment,
	                    preserveQueryParams: toBool(this.preserveQueryParams),
	                    preserveFragment: toBool(this.preserveFragment)
	                });
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterLink.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: ':not(a)[routerLink]' },] },
	        ];
	        /** @nocollapse */
	        RouterLink.ctorParameters = [
	            { type: Router, },
	            { type: ActivatedRoute, },
	            { type: _angular_common.LocationStrategy, },
	        ];
	        RouterLink.propDecorators = {
	            'queryParams': [{ type: _angular_core.Input },],
	            'fragment': [{ type: _angular_core.Input },],
	            'preserveQueryParams': [{ type: _angular_core.Input },],
	            'preserveFragment': [{ type: _angular_core.Input },],
	            'routerLink': [{ type: _angular_core.Input },],
	            'onClick': [{ type: _angular_core.HostListener, args: ['click', [],] },],
	        };
	        return RouterLink;
	    }());
	    /**
	     * @whatItDoes Lets you link to specific parts of your app.
	     *
	     * See {@link RouterLink} for more information.
	     *
	     * @selector 'a[routerLink]'
	     * @ngModule RouterModule
	     *
	     * @stable
	     */
	    var RouterLinkWithHref = (function () {
	        function RouterLinkWithHref(router, route, locationStrategy) {
	            var _this = this;
	            this.router = router;
	            this.route = route;
	            this.locationStrategy = locationStrategy;
	            this.commands = [];
	            this.subscription = router.events.subscribe(function (s) {
	                if (s instanceof NavigationEnd) {
	                    _this.updateTargetUrlAndHref();
	                }
	            });
	        }
	        Object.defineProperty(RouterLinkWithHref.prototype, "routerLink", {
	            set: function (data) {
	                if (Array.isArray(data)) {
	                    this.commands = data;
	                }
	                else {
	                    this.commands = [data];
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterLinkWithHref.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
	        RouterLinkWithHref.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
	        RouterLinkWithHref.prototype.onClick = function (button, ctrlKey, metaKey) {
	            if (button !== 0 || ctrlKey || metaKey) {
	                return true;
	            }
	            if (typeof this.target === 'string' && this.target != '_self') {
	                return true;
	            }
	            this.router.navigateByUrl(this.urlTree);
	            return false;
	        };
	        RouterLinkWithHref.prototype.updateTargetUrlAndHref = function () {
	            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
	        };
	        Object.defineProperty(RouterLinkWithHref.prototype, "urlTree", {
	            get: function () {
	                return this.router.createUrlTree(this.commands, {
	                    relativeTo: this.route,
	                    queryParams: this.queryParams,
	                    fragment: this.fragment,
	                    preserveQueryParams: toBool(this.preserveQueryParams),
	                    preserveFragment: toBool(this.preserveFragment)
	                });
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterLinkWithHref.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'a[routerLink]' },] },
	        ];
	        /** @nocollapse */
	        RouterLinkWithHref.ctorParameters = [
	            { type: Router, },
	            { type: ActivatedRoute, },
	            { type: _angular_common.LocationStrategy, },
	        ];
	        RouterLinkWithHref.propDecorators = {
	            'target': [{ type: _angular_core.Input },],
	            'queryParams': [{ type: _angular_core.Input },],
	            'fragment': [{ type: _angular_core.Input },],
	            'routerLinkOptions': [{ type: _angular_core.Input },],
	            'preserveQueryParams': [{ type: _angular_core.Input },],
	            'preserveFragment': [{ type: _angular_core.Input },],
	            'href': [{ type: _angular_core.HostBinding },],
	            'routerLink': [{ type: _angular_core.Input },],
	            'onClick': [{ type: _angular_core.HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey'],] },],
	        };
	        return RouterLinkWithHref;
	    }());
	    function toBool(s) {
	        if (s === '')
	            return true;
	        return !!s;
	    }

	    /**
	     * @whatItDoes Lets you add a CSS class to an element when the link's route becomes active.
	     *
	     * @howToUse
	     *
	     * ```
	     * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
	     * ```
	     *
	     * @description
	     *
	     * The RouterLinkActive directive lets you add a CSS class to an element when the link's route
	     * becomes active.
	     *
	     * Consider the following example:
	     *
	     * ```
	     * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
	     * ```
	     *
	     * When the url is either '/user' or '/user/bob', the active-link class will
	     * be added to the `a` tag. If the url changes, the class will be removed.
	     *
	     * You can set more than one class, as follows:
	     *
	     * ```
	     * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
	     * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
	     * ```
	     *
	     * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
	     * only when the url matches the link exactly.
	     *
	     * ```
	     * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
	     * true}">Bob</a>
	     * ```
	     *
	     * You can assign the RouterLinkActive instance to a template variable and directly check
	     * the `isActive` status.
	     * ```
	     * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
	     *   Bob {{ rla.isActive ? '(already open)' : ''}}
	     * </a>
	     * ```
	     *
	     * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
	     *
	     * ```
	     * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
	     *   <a routerLink="/user/jim">Jim</a>
	     *   <a routerLink="/user/bob">Bob</a>
	     * </div>
	     * ```
	     *
	     * This will set the active-link class on the div tag if the url is either '/user/jim' or
	     * '/user/bob'.
	     *
	     * @selector ':not(a)[routerLink]'
	     * @ngModule RouterModule
	     *
	     * @stable
	     */
	    var RouterLinkActive = (function () {
	        function RouterLinkActive(router, element, renderer) {
	            var _this = this;
	            this.router = router;
	            this.element = element;
	            this.renderer = renderer;
	            this.classes = [];
	            this.routerLinkActiveOptions = { exact: false };
	            this.subscription = router.events.subscribe(function (s) {
	                if (s instanceof NavigationEnd) {
	                    _this.update();
	                }
	            });
	        }
	        Object.defineProperty(RouterLinkActive.prototype, "isActive", {
	            get: function () { return this.hasActiveLink(); },
	            enumerable: true,
	            configurable: true
	        });
	        RouterLinkActive.prototype.ngAfterContentInit = function () {
	            var _this = this;
	            this.links.changes.subscribe(function (s) { return _this.update(); });
	            this.linksWithHrefs.changes.subscribe(function (s) { return _this.update(); });
	            this.update();
	        };
	        Object.defineProperty(RouterLinkActive.prototype, "routerLinkActive", {
	            set: function (data) {
	                if (Array.isArray(data)) {
	                    this.classes = data;
	                }
	                else {
	                    this.classes = data.split(' ');
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterLinkActive.prototype.ngOnChanges = function (changes) { this.update(); };
	        RouterLinkActive.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
	        RouterLinkActive.prototype.update = function () {
	            var _this = this;
	            if (!this.links || !this.linksWithHrefs || !this.router.navigated)
	                return;
	            var isActive = this.hasActiveLink();
	            this.classes.forEach(function (c) {
	                if (c) {
	                    _this.renderer.setElementClass(_this.element.nativeElement, c, isActive);
	                }
	            });
	        };
	        RouterLinkActive.prototype.isLinkActive = function (router) {
	            var _this = this;
	            return function (link) {
	                return router.isActive(link.urlTree, _this.routerLinkActiveOptions.exact);
	            };
	        };
	        RouterLinkActive.prototype.hasActiveLink = function () {
	            return this.links.some(this.isLinkActive(this.router)) ||
	                this.linksWithHrefs.some(this.isLinkActive(this.router));
	        };
	        RouterLinkActive.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[routerLinkActive]',
	                        exportAs: 'routerLinkActive',
	                    },] },
	        ];
	        /** @nocollapse */
	        RouterLinkActive.ctorParameters = [
	            { type: Router, },
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	        ];
	        RouterLinkActive.propDecorators = {
	            'links': [{ type: _angular_core.ContentChildren, args: [RouterLink, { descendants: true },] },],
	            'linksWithHrefs': [{ type: _angular_core.ContentChildren, args: [RouterLinkWithHref, { descendants: true },] },],
	            'routerLinkActiveOptions': [{ type: _angular_core.Input },],
	            'routerLinkActive': [{ type: _angular_core.Input },],
	        };
	        return RouterLinkActive;
	    }());

	    /**
	     * @whatItDoes Acts as a placeholder that Angular dynamically fills based on the current router
	     * state.
	     *
	     * @howToUse
	     *
	     * ```
	     * <router-outlet></router-outlet>
	     * <router-outlet name='left'></router-outlet>
	     * <router-outlet name='right'></router-outlet>
	     * ```
	     *
	     * A router outlet will emit an activate event any time a new component is being instantiated,
	     * and a deactivate event when it is being destroyed.
	     *
	     * ```
	     * <router-outlet
	     *   (activate)='onActivate($event)'
	     *   (deactivate)='onDeactivate($event)'></router-outlet>
	     * ```
	     * @selector 'a[routerLink]'
	     * @ngModule RouterModule
	     *
	     * @stable
	     */
	    var RouterOutlet = (function () {
	        function RouterOutlet(parentOutletMap, location, resolver, name) {
	            this.parentOutletMap = parentOutletMap;
	            this.location = location;
	            this.resolver = resolver;
	            this.name = name;
	            this.activateEvents = new _angular_core.EventEmitter();
	            this.deactivateEvents = new _angular_core.EventEmitter();
	            parentOutletMap.registerOutlet(name ? name : PRIMARY_OUTLET, this);
	        }
	        RouterOutlet.prototype.ngOnDestroy = function () { this.parentOutletMap.removeOutlet(this.name ? this.name : PRIMARY_OUTLET); };
	        Object.defineProperty(RouterOutlet.prototype, "locationInjector", {
	            get: function () { return this.location.injector; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RouterOutlet.prototype, "locationFactoryResolver", {
	            get: function () { return this.resolver; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RouterOutlet.prototype, "isActivated", {
	            get: function () { return !!this.activated; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RouterOutlet.prototype, "component", {
	            get: function () {
	                if (!this.activated)
	                    throw new Error('Outlet is not activated');
	                return this.activated.instance;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RouterOutlet.prototype, "activatedRoute", {
	            get: function () {
	                if (!this.activated)
	                    throw new Error('Outlet is not activated');
	                return this._activatedRoute;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterOutlet.prototype.deactivate = function () {
	            if (this.activated) {
	                var c = this.component;
	                this.activated.destroy();
	                this.activated = null;
	                this.deactivateEvents.emit(c);
	            }
	        };
	        RouterOutlet.prototype.activate = function (activatedRoute, resolver, injector, providers, outletMap) {
	            if (this.isActivated) {
	                throw new Error('Cannot activate an already activated outlet');
	            }
	            this.outletMap = outletMap;
	            this._activatedRoute = activatedRoute;
	            var snapshot = activatedRoute._futureSnapshot;
	            var component = snapshot._routeConfig.component;
	            var factory = resolver.resolveComponentFactory(component);
	            var inj = _angular_core.ReflectiveInjector.fromResolvedProviders(providers, injector);
	            this.activated = this.location.createComponent(factory, this.location.length, inj, []);
	            this.activated.changeDetectorRef.detectChanges();
	            this.activateEvents.emit(this.activated.instance);
	        };
	        RouterOutlet.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'router-outlet' },] },
	        ];
	        /** @nocollapse */
	        RouterOutlet.ctorParameters = [
	            { type: RouterOutletMap, },
	            { type: _angular_core.ViewContainerRef, },
	            { type: _angular_core.ComponentFactoryResolver, },
	            { type: undefined, decorators: [{ type: _angular_core.Attribute, args: ['name',] },] },
	        ];
	        RouterOutlet.propDecorators = {
	            'activateEvents': [{ type: _angular_core.Output, args: ['activate',] },],
	            'deactivateEvents': [{ type: _angular_core.Output, args: ['deactivate',] },],
	        };
	        return RouterOutlet;
	    }());

	    var getDOM = _angular_platformBrowser.__platform_browser_private__.getDOM;

	    /**
	     * @whatItDoes Provides a preloading strategy.
	     *
	     * @experimental
	     */
	    var PreloadingStrategy = (function () {
	        function PreloadingStrategy() {
	        }
	        return PreloadingStrategy;
	    }());
	    /**
	     * @whatItDoes Provides a preloading strategy that preloads all modules as quicky as possible.
	     *
	     * @howToUse
	     *
	     * ```
	     * RouteModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
	     * ```
	     *
	     * @experimental
	     */
	    var PreloadAllModules = (function () {
	        function PreloadAllModules() {
	        }
	        PreloadAllModules.prototype.preload = function (route, fn) {
	            return rxjs_operator_catch._catch.call(fn(), function () { return rxjs_observable_of.of(null); });
	        };
	        return PreloadAllModules;
	    }());
	    /**
	     * @whatItDoes Provides a preloading strategy that does not preload any modules.
	     *
	     * @description
	     *
	     * This strategy is enabled by default.
	     *
	     * @experimental
	     */
	    var NoPreloading = (function () {
	        function NoPreloading() {
	        }
	        NoPreloading.prototype.preload = function (route, fn) { return rxjs_observable_of.of(null); };
	        return NoPreloading;
	    }());
	    /**
	     * The preloader optimistically loads all router configurations to
	     * make navigations into lazily-loaded sections of the application faster.
	     *
	     * The preloader runs in the background. When the router bootstraps, the preloader
	     * starts listening to all navigation events. After every such event, the preloader
	     * will check if any configurations can be loaded lazily.
	     *
	     * If a route is protected by `canLoad` guards, the preloaded will not load it.
	     *
	     * @stable
	     */
	    var RouterPreloader = (function () {
	        function RouterPreloader(router, moduleLoader, compiler, injector, preloadingStrategy) {
	            this.router = router;
	            this.injector = injector;
	            this.preloadingStrategy = preloadingStrategy;
	            this.loader = new RouterConfigLoader(moduleLoader, compiler);
	        }
	        ;
	        RouterPreloader.prototype.setUpPreloading = function () {
	            var _this = this;
	            var navigations = rxjs_operator_filter.filter.call(this.router.events, function (e) { return e instanceof NavigationEnd; });
	            this.subscription = rxjs_operator_concatMap.concatMap.call(navigations, function () { return _this.preload(); }).subscribe(function (v) { });
	        };
	        RouterPreloader.prototype.preload = function () { return this.processRoutes(this.injector, this.router.config); };
	        RouterPreloader.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
	        RouterPreloader.prototype.processRoutes = function (injector, routes) {
	            var res = [];
	            for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
	                var c = routes_1[_i];
	                // we already have the config loaded, just recurce
	                if (c.loadChildren && !c.canLoad && c._loadedConfig) {
	                    var childConfig = c._loadedConfig;
	                    res.push(this.processRoutes(childConfig.injector, childConfig.routes));
	                }
	                else if (c.loadChildren && !c.canLoad) {
	                    res.push(this.preloadConfig(injector, c));
	                }
	                else if (c.children) {
	                    res.push(this.processRoutes(injector, c.children));
	                }
	            }
	            return rxjs_operator_mergeAll.mergeAll.call(rxjs_observable_from.from(res));
	        };
	        RouterPreloader.prototype.preloadConfig = function (injector, route) {
	            var _this = this;
	            return this.preloadingStrategy.preload(route, function () {
	                var loaded = _this.loader.load(injector, route.loadChildren);
	                return rxjs_operator_mergeMap.mergeMap.call(loaded, function (config) {
	                    var c = route;
	                    c._loadedConfig = config;
	                    return _this.processRoutes(config.injector, config.routes);
	                });
	            });
	        };
	        RouterPreloader.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RouterPreloader.ctorParameters = [
	            { type: Router, },
	            { type: _angular_core.NgModuleFactoryLoader, },
	            { type: _angular_core.Compiler, },
	            { type: _angular_core.Injector, },
	            { type: PreloadingStrategy, },
	        ];
	        return RouterPreloader;
	    }());

	    /**
	     * @whatItDoes Contains a list of directives
	     * @stable
	     */
	    var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive];
	    /**
	     * @whatItDoes Is used in DI to configure the router.
	     * @stable
	     */
	    var ROUTER_CONFIGURATION = new _angular_core.OpaqueToken('ROUTER_CONFIGURATION');
	    /**
	     * @docsNotRequired
	     */
	    var ROUTER_FORROOT_GUARD = new _angular_core.OpaqueToken('ROUTER_FORROOT_GUARD');
	    var ROUTER_PROVIDERS = [
	        _angular_common.Location, { provide: UrlSerializer, useClass: DefaultUrlSerializer }, {
	            provide: Router,
	            useFactory: setupRouter,
	            deps: [
	                _angular_core.ApplicationRef, UrlSerializer, RouterOutletMap, _angular_common.Location, _angular_core.Injector, _angular_core.NgModuleFactoryLoader,
	                _angular_core.Compiler, ROUTES, ROUTER_CONFIGURATION, [UrlHandlingStrategy, new _angular_core.Optional()]
	            ]
	        },
	        RouterOutletMap, { provide: ActivatedRoute, useFactory: rootRoute, deps: [Router] },
	        { provide: _angular_core.NgModuleFactoryLoader, useClass: _angular_core.SystemJsNgModuleLoader }, RouterPreloader, NoPreloading,
	        PreloadAllModules, { provide: ROUTER_CONFIGURATION, useValue: { enableTracing: false } }
	    ];
	    /**
	     * @whatItDoes Adds router directives and providers.
	     *
	     * @howToUse
	     *
	     * RouterModule can be imported multiple times: once per lazily-loaded bundle.
	     * Since the router deals with a global shared resource--location, we cannot have
	     * more than one router service active.
	     *
	     * That is why there are two ways to create the module: `RouterModule.forRoot` and
	     * `RouterModule.forChild`.
	     *
	     * * `forRoot` creates a module that contains all the directives, the given routes, and the router
	     * service itself.
	     * * `forChild` creates a module that contains all the directives and the given routes, but does not
	     * include
	     * the router service.
	     *
	     * When registered at the root, the module should be used as follows
	     *
	     * ```
	     * @NgModule({
	     *   imports: [RouterModule.forRoot(ROUTES)]
	     * })
	     * class MyNgModule {}
	     * ```
	     *
	     * For submodules and lazy loaded submodules the module should be used as follows:
	     *
	     * ```
	     * @NgModule({
	     *   imports: [RouterModule.forChild(ROUTES)]
	     * })
	     * class MyNgModule {}
	     * ```
	     *
	     * @description
	     *
	     * Managing state transitions is one of the hardest parts of building applications. This is
	     * especially true on the web, where you also need to ensure that the state is reflected in the URL.
	     * In addition, we often want to split applications into multiple bundles and load them on demand.
	     * Doing this transparently is not trivial.
	     *
	     * The Angular 2 router solves these problems. Using the router, you can declaratively specify
	     * application states, manage state transitions while taking care of the URL, and load bundles on
	     * demand.
	     *
	     * [Read this developer guide](https://angular.io/docs/ts/latest/guide/router.html) to get an
	     * overview of how the router should be used.
	     *
	     * @stable
	     */
	    var RouterModule = (function () {
	        function RouterModule(guard) {
	        }
	        /**
	         * Creates a module with all the router providers and directives. It also optionally sets up an
	         * application listener to perform an initial navigation.
	         *
	         * Options:
	         * * `enableTracing` makes the router log all its internal events to the console.
	         * * `useHash` enables the location strategy that uses the URL fragment instead of the history
	         * API.
	         * * `initialNavigation` disables the initial navigation.
	         * * `errorHandler` provides a custom error handler.
	         */
	        RouterModule.forRoot = function (routes, config) {
	            return {
	                ngModule: RouterModule,
	                providers: [
	                    ROUTER_PROVIDERS, provideRoutes(routes), {
	                        provide: ROUTER_FORROOT_GUARD,
	                        useFactory: provideForRootGuard,
	                        deps: [[Router, new _angular_core.Optional(), new _angular_core.SkipSelf()]]
	                    },
	                    { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} }, {
	                        provide: _angular_common.LocationStrategy,
	                        useFactory: provideLocationStrategy,
	                        deps: [
	                            _angular_common.PlatformLocation, [new _angular_core.Inject(_angular_common.APP_BASE_HREF), new _angular_core.Optional()], ROUTER_CONFIGURATION
	                        ]
	                    },
	                    {
	                        provide: PreloadingStrategy,
	                        useExisting: config && config.preloadingStrategy ? config.preloadingStrategy :
	                            NoPreloading
	                    },
	                    provideRouterInitializer()
	                ]
	            };
	        };
	        /**
	         * Creates a module with all the router directives and a provider registering routes.
	         */
	        RouterModule.forChild = function (routes) {
	            return { ngModule: RouterModule, providers: [provideRoutes(routes)] };
	        };
	        RouterModule.decorators = [
	            { type: _angular_core.NgModule, args: [{ declarations: ROUTER_DIRECTIVES, exports: ROUTER_DIRECTIVES },] },
	        ];
	        /** @nocollapse */
	        RouterModule.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [ROUTER_FORROOT_GUARD,] },] },
	        ];
	        return RouterModule;
	    }());
	    function provideLocationStrategy(platformLocationStrategy, baseHref, options) {
	        if (options === void 0) { options = {}; }
	        return options.useHash ? new _angular_common.HashLocationStrategy(platformLocationStrategy, baseHref) :
	            new _angular_common.PathLocationStrategy(platformLocationStrategy, baseHref);
	    }
	    function provideForRootGuard(router) {
	        if (router) {
	            throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
	        }
	        return 'guarded';
	    }
	    /**
	     * @whatItDoes Registers routes.
	     *
	     * @howToUse
	     *
	     * ```
	     * @NgModule({
	     *   imports: [RouterModule.forChild(ROUTES)],
	     *   providers: [provideRoutes(EXTRA_ROUTES)]
	     * })
	     * class MyNgModule {}
	     * ```
	     *
	     * @stable
	     */
	    function provideRoutes(routes) {
	        return [
	            { provide: _angular_core.ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: routes },
	            { provide: ROUTES, multi: true, useValue: routes }
	        ];
	    }
	    function setupRouter(ref, urlSerializer, outletMap, location, injector, loader, compiler, config, opts, urlHandlingStrategy) {
	        if (opts === void 0) { opts = {}; }
	        var router = new Router(null, urlSerializer, outletMap, location, injector, loader, compiler, flatten(config));
	        if (urlHandlingStrategy) {
	            router.urlHandlingStrategy = urlHandlingStrategy;
	        }
	        if (opts.errorHandler) {
	            router.errorHandler = opts.errorHandler;
	        }
	        if (opts.enableTracing) {
	            var dom_1 = getDOM();
	            router.events.subscribe(function (e) {
	                dom_1.logGroup("Router Event: " + e.constructor.name);
	                dom_1.log(e.toString());
	                dom_1.log(e);
	                dom_1.logGroupEnd();
	            });
	        }
	        return router;
	    }
	    function rootRoute(router) {
	        return router.routerState.root;
	    }
	    function initialRouterNavigation(router, ref, preloader, opts) {
	        return function (bootstrappedComponentRef) {
	            if (bootstrappedComponentRef !== ref.components[0]) {
	                return;
	            }
	            router.resetRootComponentType(ref.componentTypes[0]);
	            preloader.setUpPreloading();
	            if (opts.initialNavigation === false) {
	                router.setUpLocationChangeListener();
	            }
	            else {
	                router.initialNavigation();
	            }
	        };
	    }
	    /**
	     * A token for the router initializer that will be called after the app is bootstrapped.
	     *
	     * @experimental
	     */
	    var ROUTER_INITIALIZER = new _angular_core.OpaqueToken('Router Initializer');
	    function provideRouterInitializer() {
	        return [
	            {
	                provide: ROUTER_INITIALIZER,
	                useFactory: initialRouterNavigation,
	                deps: [Router, _angular_core.ApplicationRef, RouterPreloader, ROUTER_CONFIGURATION]
	            },
	            { provide: _angular_core.APP_BOOTSTRAP_LISTENER, multi: true, useExisting: ROUTER_INITIALIZER }
	        ];
	    }

	    var __router_private__ = {
	        ROUTER_PROVIDERS: ROUTER_PROVIDERS,
	        ROUTES: ROUTES,
	        flatten: flatten
	    };

	    exports.RouterLink = RouterLink;
	    exports.RouterLinkWithHref = RouterLinkWithHref;
	    exports.RouterLinkActive = RouterLinkActive;
	    exports.RouterOutlet = RouterOutlet;
	    exports.NavigationCancel = NavigationCancel;
	    exports.NavigationEnd = NavigationEnd;
	    exports.NavigationError = NavigationError;
	    exports.NavigationStart = NavigationStart;
	    exports.Router = Router;
	    exports.RoutesRecognized = RoutesRecognized;
	    exports.ROUTER_CONFIGURATION = ROUTER_CONFIGURATION;
	    exports.ROUTER_INITIALIZER = ROUTER_INITIALIZER;
	    exports.RouterModule = RouterModule;
	    exports.provideRoutes = provideRoutes;
	    exports.RouterOutletMap = RouterOutletMap;
	    exports.NoPreloading = NoPreloading;
	    exports.PreloadAllModules = PreloadAllModules;
	    exports.PreloadingStrategy = PreloadingStrategy;
	    exports.RouterPreloader = RouterPreloader;
	    exports.ActivatedRoute = ActivatedRoute;
	    exports.ActivatedRouteSnapshot = ActivatedRouteSnapshot;
	    exports.RouterState = RouterState;
	    exports.RouterStateSnapshot = RouterStateSnapshot;
	    exports.PRIMARY_OUTLET = PRIMARY_OUTLET;
	    exports.UrlHandlingStrategy = UrlHandlingStrategy;
	    exports.DefaultUrlSerializer = DefaultUrlSerializer;
	    exports.UrlSegment = UrlSegment;
	    exports.UrlSegmentGroup = UrlSegmentGroup;
	    exports.UrlSerializer = UrlSerializer;
	    exports.UrlTree = UrlTree;
	    exports.__router_private__ = __router_private__;

	}));

/***/ },

/***/ 138:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n  <div class=\"header clearfix\">\r\n    <nav>\r\n      <ul class=\"nav nav-pills pull-right\">\r\n        <li role=\"presentation\" routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\r\n        <li role=\"presentation\" routerLinkActive=\"active\"><a routerLink=\"/network\">Network</a></li>\r\n        <li role=\"presentation\" routerLinkActive=\"active\"><a routerLink=\"/timeline\">Timeline</a></li>\r\n      </ul>\r\n    </nav>\r\n    <h3 class=\"text-muted\">ng2-vis - an angular2 vis.js wrapper</h3>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ },

/***/ 139:
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron\">\r\n  <h1>ng2-vis</h1>\r\n  <p class=\"lead\"><strong>Note:</strong> these examples mimic the ones for <code>vis</code>, but using <code>ng2-vis</code>.</p>\r\n  <p>\r\n    <a class=\"btn btn-lg btn-success\" href=\"https://github.com/seveves/ng2-vis\" role=\"button\">Get it on GitHub</a>\r\n    <a class=\"btn btn-lg btn-success\" href=\"http://visjs.org\" role=\"button\">Check out visjs.org</a>\r\n  </p>\r\n</div>\r\n<h2>Examples</h2>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6 col-md-4\">\r\n    <div class=\"thumbnail\">\r\n      <img src=\"http://visjs.org/images/network.png\" alt=\"Network Examples\">\r\n      <div class=\"caption\">\r\n        <h3>Network</h3>\r\n        <p>Display dynamic, automatically organised, customizable network views.</p>\r\n        <p><a routerLink=\"/network\" class=\"btn btn-primary\" role=\"button\">Examples</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-6 col-md-4\">\r\n    <div class=\"thumbnail\">\r\n      <img src=\"http://visjs.org/images/timeline.png\" alt=\"Timeline Examples\">\r\n      <div class=\"caption\">\r\n        <h3>Timeline</h3>\r\n        <p>Create a fully customizable, interactive timeline with items and ranges.</p>\r\n        <p><a routerLink=\"/timeline\" class=\"btn btn-primary\" role=\"button\">Examples</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ },

/***/ 140:
/***/ function(module, exports) {

	module.exports = ".network-canvas {\r\n    width: 100%;\r\n    height: 400px;\r\n    border: 1px solid lightgray;\r\n}"

/***/ },

/***/ 141:
/***/ function(module, exports) {

	module.exports = "<h2>Network</h2>\r\n<h3>Basic usage</h3>\r\n<div class=\"network-canvas\" [visNetwork]=\"visNetwork\" [visNetworkData]=\"visNetworkData\" [visNetworkOptions]=\"visNetworkOptions\" (initialized)=\"networkInitialized()\"></div>\r\n<button type=\"button\" class=\"btn btn-default\" (click)=\"addNode()\">Add node</button>\r\n<p><strong>Note:</strong> Open your dev tools to see the console output when the network receives click events.</p>\r\n"

/***/ },

/***/ 142:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 143:
/***/ function(module, exports) {

	module.exports = "<h2>Timeline</h2>\r\n<h3>Basic usage</h3>\r\n<div [visTimeline]=\"visTimeline\" [visTimelineItems]=\"visTimelineItems\" (initialized)=\"timelineInitialized()\"></div>\r\n<button type=\"button\" class=\"btn btn-default\" (click)=\"addItem()\">Add and focus</button>\r\n<p><strong>Note:</strong> Open your dev tools to see the console output when the timeline receives click events.</p>"

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(46);
	var ObjectUnsubscribedError_1 = __webpack_require__(93);
	/**
	 * @class BehaviorSubject<T>
	 */
	var BehaviorSubject = (function (_super) {
	    __extends(BehaviorSubject, _super);
	    function BehaviorSubject(_value) {
	        _super.call(this);
	        this._value = _value;
	    }
	    Object.defineProperty(BehaviorSubject.prototype, "value", {
	        get: function () {
	            return this.getValue();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BehaviorSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (subscription && !subscription.closed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    BehaviorSubject.prototype.getValue = function () {
	        if (this.hasError) {
	            throw this.thrownError;
	        }
	        else if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        else {
	            return this._value;
	        }
	    };
	    BehaviorSubject.prototype.next = function (value) {
	        _super.prototype.next.call(this, this._value = value);
	    };
	    return BehaviorSubject;
	}(Subject_1.Subject));
	exports.BehaviorSubject = BehaviorSubject;
	//# sourceMappingURL=BehaviorSubject.js.map

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerSubscriber = (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber_1.Subscriber));
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(11);
	/**
	 * Represents a push-based event or value that an {@link Observable} can emit.
	 * This class is particularly useful for operators that manage notifications,
	 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
	 * others. Besides wrapping the actual delivered value, it also annotates it
	 * with metadata of, for instance, what type of push message it is (`next`,
	 * `error`, or `complete`).
	 *
	 * @see {@link materialize}
	 * @see {@link dematerialize}
	 * @see {@link observeOn}
	 *
	 * @class Notification<T>
	 */
	var Notification = (function () {
	    function Notification(kind, value, exception) {
	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    /**
	     * Delivers to the given `observer` the value wrapped by this Notification.
	     * @param {Observer} observer
	     * @return
	     */
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.exception);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    /**
	     * Given some {@link Observer} callbacks, deliver the value represented by the
	     * current Notification to the correctly corresponding callback.
	     * @param {function(value: T): void} next An Observer `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.exception);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    /**
	     * Takes an Observer or its individual callback functions, and calls `observe`
	     * or `do` methods accordingly.
	     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
	     * the `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    /**
	     * Returns a simple Observable that just delivers the notification represented
	     * by this Notification instance.
	     * @return {any}
	     */
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.exception);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	        throw new Error('unexpected notification kind value');
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `next` from a
	     * given value.
	     * @param {T} value The `next` value.
	     * @return {Notification<T>} The "next" Notification representing the
	     * argument.
	     */
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return this.undefinedValueNotification;
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `error` from a
	     * given error.
	     * @param {any} [err] The `error` exception.
	     * @return {Notification<T>} The "error" Notification representing the
	     * argument.
	     */
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `complete`.
	     * @return {Notification<any>} The valueless "complete" Notification.
	     */
	    Notification.createComplete = function () {
	        return this.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}());
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(11);
	var ScalarObservable_1 = __webpack_require__(89);
	var EmptyObservable_1 = __webpack_require__(87);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayLikeObservable = (function (_super) {
	    __extends(ArrayLikeObservable, _super);
	    function ArrayLikeObservable(arrayLike, scheduler) {
	        _super.call(this);
	        this.arrayLike = arrayLike;
	        this.scheduler = scheduler;
	        if (!scheduler && arrayLike.length === 1) {
	            this._isScalar = true;
	            this.value = arrayLike[0];
	        }
	    }
	    ArrayLikeObservable.create = function (arrayLike, scheduler) {
	        var length = arrayLike.length;
	        if (length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        else if (length === 1) {
	            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
	        }
	        else {
	            return new ArrayLikeObservable(arrayLike, scheduler);
	        }
	    };
	    ArrayLikeObservable.dispatch = function (state) {
	        var arrayLike = state.arrayLike, index = state.index, length = state.length, subscriber = state.subscriber;
	        if (subscriber.closed) {
	            return;
	        }
	        if (index >= length) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(arrayLike[index]);
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, arrayLike = _a.arrayLike, scheduler = _a.scheduler;
	        var length = arrayLike.length;
	        if (scheduler) {
	            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
	                arrayLike: arrayLike, index: index, length: length, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < length && !subscriber.closed; i++) {
	                subscriber.next(arrayLike[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayLikeObservable;
	}(Observable_1.Observable));
	exports.ArrayLikeObservable = ArrayLikeObservable;
	//# sourceMappingURL=ArrayLikeObservable.js.map

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(63);
	var isPromise_1 = __webpack_require__(96);
	var PromiseObservable_1 = __webpack_require__(88);
	var IteratorObservable_1 = __webpack_require__(151);
	var ArrayObservable_1 = __webpack_require__(86);
	var ArrayLikeObservable_1 = __webpack_require__(149);
	var iterator_1 = __webpack_require__(59);
	var Observable_1 = __webpack_require__(11);
	var observeOn_1 = __webpack_require__(162);
	var observable_1 = __webpack_require__(60);
	var isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromObservable = (function (_super) {
	    __extends(FromObservable, _super);
	    function FromObservable(ish, scheduler) {
	        _super.call(this, null);
	        this.ish = ish;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable from an Array, an array-like object, a Promise, an
	     * iterable object, or an Observable-like object.
	     *
	     * <span class="informal">Converts almost anything to an Observable.</span>
	     *
	     * <img src="./img/from.png" width="100%">
	     *
	     * Convert various other objects and data types into Observables. `from`
	     * converts a Promise or an array-like or an
	     * [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
	     * object into an Observable that emits the items in that promise or array or
	     * iterable. A String, in this context, is treated as an array of characters.
	     * Observable-like objects (contains a function named with the ES2015 Symbol
	     * for Observable) can also be converted through this operator.
	     *
	     * @example <caption>Converts an array to an Observable</caption>
	     * var array = [10, 20, 30];
	     * var result = Rx.Observable.from(array);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Convert an infinite iterable (from a generator) to an Observable</caption>
	     * function* generateDoubles(seed) {
	     *   var i = seed;
	     *   while (true) {
	     *     yield i;
	     *     i = 2 * i; // double it
	     *   }
	     * }
	     *
	     * var iterator = generateDoubles(3);
	     * var result = Rx.Observable.from(iterator).take(10);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link fromEvent}
	     * @see {@link fromEventPattern}
	     * @see {@link fromPromise}
	     *
	     * @param {ObservableInput<T>} ish A subscribable object, a Promise, an
	     * Observable-like, an Array, an iterable or an array-like object to be
	     * converted.
	     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
	     * emissions of values.
	     * @return {Observable<T>} The Observable whose values are originally from the
	     * input object that was converted.
	     * @static true
	     * @name from
	     * @owner Observable
	     */
	    FromObservable.create = function (ish, scheduler) {
	        if (ish != null) {
	            if (typeof ish[observable_1.$$observable] === 'function') {
	                if (ish instanceof Observable_1.Observable && !scheduler) {
	                    return ish;
	                }
	                return new FromObservable(ish, scheduler);
	            }
	            else if (isArray_1.isArray(ish)) {
	                return new ArrayObservable_1.ArrayObservable(ish, scheduler);
	            }
	            else if (isPromise_1.isPromise(ish)) {
	                return new PromiseObservable_1.PromiseObservable(ish, scheduler);
	            }
	            else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
	                return new IteratorObservable_1.IteratorObservable(ish, scheduler);
	            }
	            else if (isArrayLike(ish)) {
	                return new ArrayLikeObservable_1.ArrayLikeObservable(ish, scheduler);
	            }
	        }
	        throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
	    };
	    FromObservable.prototype._subscribe = function (subscriber) {
	        var ish = this.ish;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            return ish[observable_1.$$observable]().subscribe(subscriber);
	        }
	        else {
	            return ish[observable_1.$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
	        }
	    };
	    return FromObservable;
	}(Observable_1.Observable));
	exports.FromObservable = FromObservable;
	//# sourceMappingURL=FromObservable.js.map

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(26);
	var Observable_1 = __webpack_require__(11);
	var iterator_1 = __webpack_require__(59);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IteratorObservable = (function (_super) {
	    __extends(IteratorObservable, _super);
	    function IteratorObservable(iterator, scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        if (iterator == null) {
	            throw new Error('iterator cannot be null.');
	        }
	        this.iterator = getIterator(iterator);
	    }
	    IteratorObservable.create = function (iterator, scheduler) {
	        return new IteratorObservable(iterator, scheduler);
	    };
	    IteratorObservable.dispatch = function (state) {
	        var index = state.index, hasError = state.hasError, iterator = state.iterator, subscriber = state.subscriber;
	        if (hasError) {
	            subscriber.error(state.error);
	            return;
	        }
	        var result = iterator.next();
	        if (result.done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(result.value);
	        state.index = index + 1;
	        if (subscriber.closed) {
	            return;
	        }
	        this.schedule(state);
	    };
	    IteratorObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, iterator = _a.iterator, scheduler = _a.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(IteratorObservable.dispatch, 0, {
	                index: index, iterator: iterator, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                var result = iterator.next();
	                if (result.done) {
	                    subscriber.complete();
	                    break;
	                }
	                else {
	                    subscriber.next(result.value);
	                }
	                if (subscriber.closed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return IteratorObservable;
	}(Observable_1.Observable));
	exports.IteratorObservable = IteratorObservable;
	var StringIterator = (function () {
	    function StringIterator(str, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = str.length; }
	        this.str = str;
	        this.idx = idx;
	        this.len = len;
	    }
	    StringIterator.prototype[iterator_1.$$iterator] = function () { return (this); };
	    StringIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.str.charAt(this.idx++)
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return StringIterator;
	}());
	var ArrayIterator = (function () {
	    function ArrayIterator(arr, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = toLength(arr); }
	        this.arr = arr;
	        this.idx = idx;
	        this.len = len;
	    }
	    ArrayIterator.prototype[iterator_1.$$iterator] = function () { return this; };
	    ArrayIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.arr[this.idx++]
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return ArrayIterator;
	}());
	function getIterator(obj) {
	    var i = obj[iterator_1.$$iterator];
	    if (!i && typeof obj === 'string') {
	        return new StringIterator(obj);
	    }
	    if (!i && obj.length !== undefined) {
	        return new ArrayIterator(obj);
	    }
	    if (!i) {
	        throw new TypeError('object is not iterable');
	    }
	    return obj[iterator_1.$$iterator]();
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) {
	        return 0;
	    }
	    if (len === 0 || !numberIsFinite(len)) {
	        return len;
	    }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) {
	        return 0;
	    }
	    if (len > maxSafeInteger) {
	        return maxSafeInteger;
	    }
	    return len;
	}
	function numberIsFinite(value) {
	    return typeof value === 'number' && root_1.root.isFinite(value);
	}
	function sign(value) {
	    var valueAsNumber = +value;
	    if (valueAsNumber === 0) {
	        return valueAsNumber;
	    }
	    if (isNaN(valueAsNumber)) {
	        return valueAsNumber;
	    }
	    return valueAsNumber < 0 ? -1 : 1;
	}
	//# sourceMappingURL=IteratorObservable.js.map

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromObservable_1 = __webpack_require__(150);
	exports.from = FromObservable_1.FromObservable.create;
	//# sourceMappingURL=from.js.map

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(86);
	exports.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=of.js.map

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(57);
	var subscribeToResult_1 = __webpack_require__(64);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 * @method catch
	 * @owner Observable
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return (operator.caught = caught);
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
	    };
	    return CatchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, destination);
	        this.selector = selector;
	        this.caught = caught;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.
	    CatchSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var result = void 0;
	            try {
	                result = this.selector(err, this.caught);
	            }
	            catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.unsubscribe();
	            this.destination.remove(this);
	            subscribeToResult_1.subscribeToResult(this, result);
	        }
	    };
	    return CatchSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=catch.js.map

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeAll_1 = __webpack_require__(91);
	/**
	 * Converts a higher-order Observable into a first-order Observable by
	 * concatenating the inner Observables in order.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by putting one
	 * inner Observable after the other.</span>
	 *
	 * <img src="./img/concatAll.png" width="100%">
	 *
	 * Joins every Observable emitted by the source (a higher-order Observable), in
	 * a serial fashion. It subscribes to each inner Observable only after the
	 * previous inner Observable has completed, and merges all of their values into
	 * the returned observable.
	 *
	 * __Warning:__ If the source Observable emits Observables quickly and
	 * endlessly, and the inner Observables it emits generally complete slower than
	 * the source emits, you can run into memory issues as the incoming Observables
	 * collect in an unbounded buffer.
	 *
	 * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
	 * var firstOrder = higherOrder.concatAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concat}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 * @see {@link exhaust}
	 * @see {@link mergeAll}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @return {Observable} An Observable emitting values from all the inner
	 * Observables concatenated.
	 * @method concatAll
	 * @owner Observable
	 */
	function concatAll() {
	    return this.lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatAll = concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMap_1 = __webpack_require__(92);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, in a serialized fashion waiting for each one to complete before
	 * merging the next.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link concatAll}.</span>
	 *
	 * <img src="./img/concatMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each new inner Observable is
	 * concatenated with the previous inner Observable.
	 *
	 * __Warning:__ if source values arrive endlessly and faster than their
	 * corresponding inner Observables can complete, it will result in memory issues
	 * as inner Observables amass in an unbounded buffer waiting for their turn to
	 * be subscribed to.
	 *
	 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concat}
	 * @see {@link concatAll}
	 * @see {@link concatMapTo}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} an observable of values merged from the projected
	 * Observables as they were subscribed to, one at a time. Optionally, these
	 * values may have been projected from a passed `projectResult` argument.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking values from each projected inner
	 * Observable sequentially.
	 * @method concatMap
	 * @owner Observable
	 */
	function concatMap(project, resultSelector) {
	    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
	}
	exports.concatMap = concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
	 * @param {function} predicate a function for determining if an item meets a specified condition.
	 * @param {any} [thisArg] optional object to use for `this` in the callback
	 * @return {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
	 * @method every
	 * @owner Observable
	 */
	function every(predicate, thisArg) {
	    return this.lift(new EveryOperator(predicate, thisArg, this));
	}
	exports.every = every;
	var EveryOperator = (function () {
	    function EveryOperator(predicate, thisArg, source) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	    }
	    EveryOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
	    };
	    return EveryOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var EverySubscriber = (function (_super) {
	    __extends(EverySubscriber, _super);
	    function EverySubscriber(destination, predicate, thisArg, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	        this.index = 0;
	        this.thisArg = thisArg || this;
	    }
	    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
	        this.destination.next(everyValueMatch);
	        this.destination.complete();
	    };
	    EverySubscriber.prototype._next = function (value) {
	        var result = false;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (!result) {
	            this.notifyComplete(false);
	        }
	    };
	    EverySubscriber.prototype._complete = function () {
	        this.notifyComplete(true);
	    };
	    return EverySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=every.js.map

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	var EmptyError_1 = __webpack_require__(62);
	/**
	 * Emits only the first value (or the first value that meets some condition)
	 * emitted by the source Observable.
	 *
	 * <span class="informal">Emits only the first value. Or emits only the first
	 * value that passes some test.</span>
	 *
	 * <img src="./img/first.png" width="100%">
	 *
	 * If called with no arguments, `first` emits the first value of the source
	 * Observable, then completes. If called with a `predicate` function, `first`
	 * emits the first value of the source that matches the specified condition. It
	 * may also take a `resultSelector` function to produce the output value from
	 * the input value, and a `defaultValue` to emit in case the source completes
	 * before it is able to emit a valid value. Throws an error if `defaultValue`
	 * was not provided and a matching element is not found.
	 *
	 * @example <caption>Emit only the first click that happens on the DOM</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Emits the first click that happens on a DIV</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link find}
	 * @see {@link take}
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
	 * An optional function called with each item to test for condition matching.
	 * @param {function(value: T, index: number): R} [resultSelector] A function to
	 * produce the value on the output Observable based on the values
	 * and the indices of the source Observable. The arguments passed to this
	 * function are:
	 * - `value`: the value that was emitted on the source.
	 * - `index`: the "index" of the value from the source.
	 * @param {R} [defaultValue] The default value emitted in case no valid value
	 * was found on the source.
	 * @return {Observable<T|R>} an Observable of the first item that matches the
	 * condition.
	 * @method first
	 * @owner Observable
	 */
	function first(predicate, resultSelector, defaultValue) {
	    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.first = first;
	var FirstOperator = (function () {
	    function FirstOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    FirstOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	    };
	    return FirstOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FirstSubscriber = (function (_super) {
	    __extends(FirstSubscriber, _super);
	    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.index = 0;
	        this.hasCompleted = false;
	    }
	    FirstSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._emit = function (value, index) {
	        if (this.resultSelector) {
	            this._tryResultSelector(value, index);
	            return;
	        }
	        this._emitFinal(value);
	    };
	    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this._emitFinal(result);
	    };
	    FirstSubscriber.prototype._emitFinal = function (value) {
	        var destination = this.destination;
	        destination.next(value);
	        destination.complete();
	        this.hasCompleted = true;
	    };
	    FirstSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
	            destination.next(this.defaultValue);
	            destination.complete();
	        }
	        else if (!this.hasCompleted) {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return FirstSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=first.js.map

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	var EmptyError_1 = __webpack_require__(62);
	/**
	 * Returns an Observable that emits only the last item emitted by the source Observable.
	 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
	 * the last item from the source Observable, the resulting Observable will emit the last item
	 * from the source Observable that satisfies the predicate.
	 *
	 * <img src="./img/last.png" width="100%">
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 * @param {function} predicate - the condition any source emitted item has to satisfy.
	 * @return {Observable} an Observable that emits only the last item satisfying the given condition
	 * from the source, or an NoSuchElementException if no such items are emitted.
	 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
	 * @method last
	 * @owner Observable
	 */
	function last(predicate, resultSelector, defaultValue) {
	    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.last = last;
	var LastOperator = (function () {
	    function LastOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    LastOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	    };
	    return LastOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var LastSubscriber = (function (_super) {
	    __extends(LastSubscriber, _super);
	    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.hasValue = false;
	        this.index = 0;
	        if (typeof defaultValue !== 'undefined') {
	            this.lastValue = defaultValue;
	            this.hasValue = true;
	        }
	    }
	    LastSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.lastValue = result;
	        this.hasValue = true;
	    };
	    LastSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.hasValue) {
	            destination.next(this.lastValue);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return LastSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=last.js.map

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	exports.MapOperator = MapOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	var Notification_1 = __webpack_require__(146);
	/**
	 * @see {@link Notification}
	 *
	 * @param scheduler
	 * @param delay
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method observeOn
	 * @owner Observable
	 */
	function observeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return this.lift(new ObserveOnOperator(scheduler, delay));
	}
	exports.observeOn = observeOn;
	var ObserveOnOperator = (function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
	    };
	    return ObserveOnOperator;
	}());
	exports.ObserveOnOperator = ObserveOnOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ObserveOnSubscriber = (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (arg) {
	        var notification = arg.notification, destination = arg.destination;
	        notification.observe(destination);
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}());
	exports.ObserveOnMessage = ObserveOnMessage;
	//# sourceMappingURL=observeOn.js.map

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * Applies an accumulator function over the source Observable, and returns the
	 * accumulated result when the source completes, given an optional seed value.
	 *
	 * <span class="informal">Combines together all values emitted on the source,
	 * using an accumulator function that knows how to join a new source value into
	 * the accumulation from the past.</span>
	 *
	 * <img src="./img/reduce.png" width="100%">
	 *
	 * Like
	 * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
	 * `reduce` applies an `accumulator` function against an accumulation and each
	 * value of the source Observable (from the past) to reduce it to a single
	 * value, emitted on the output Observable. Note that `reduce` will only emit
	 * one value, only when the source Observable completes. It is equivalent to
	 * applying operator {@link scan} followed by operator {@link last}.
	 *
	 * Returns an Observable that applies a specified `accumulator` function to each
	 * item emitted by the source Observable. If a `seed` value is specified, then
	 * that value will be used as the initial value for the accumulator. If no seed
	 * value is specified, the first item of the source is used as the seed.
	 *
	 * @example <caption>Count the number of click events that happened in 5 seconds</caption>
	 * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
	 *   .takeUntil(Rx.Observable.interval(5000));
	 * var ones = clicksInFiveSeconds.mapTo(1);
	 * var seed = 0;
	 * var count = ones.reduce((acc, one) => acc + one, seed);
	 * count.subscribe(x => console.log(x));
	 *
	 * @see {@link count}
	 * @see {@link expand}
	 * @see {@link mergeScan}
	 * @see {@link scan}
	 *
	 * @param {function(acc: R, value: T): R} accumulator The accumulator function
	 * called on each source value.
	 * @param {R} [seed] The initial accumulation value.
	 * @return {Observable<R>} An observable of the accumulated values.
	 * @return {Observable<R>} An Observable that emits a single value that is the
	 * result of accumulating the values emitted by the source Observable.
	 * @method reduce
	 * @owner Observable
	 */
	function reduce(accumulator, seed) {
	    return this.lift(new ReduceOperator(accumulator, seed));
	}
	exports.reduce = reduce;
	var ReduceOperator = (function () {
	    function ReduceOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ReduceOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ReduceSubscriber(subscriber, this.accumulator, this.seed));
	    };
	    return ReduceOperator;
	}());
	exports.ReduceOperator = ReduceOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ReduceSubscriber = (function (_super) {
	    __extends(ReduceSubscriber, _super);
	    function ReduceSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.hasValue = false;
	        this.acc = seed;
	        this.accumulator = accumulator;
	        this.hasSeed = typeof seed !== 'undefined';
	    }
	    ReduceSubscriber.prototype._next = function (value) {
	        if (this.hasValue || (this.hasValue = this.hasSeed)) {
	            this._tryReduce(value);
	        }
	        else {
	            this.acc = value;
	            this.hasValue = true;
	        }
	    };
	    ReduceSubscriber.prototype._tryReduce = function (value) {
	        var result;
	        try {
	            result = this.accumulator(this.acc, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.acc = result;
	    };
	    ReduceSubscriber.prototype._complete = function () {
	        if (this.hasValue || this.hasSeed) {
	            this.destination.next(this.acc);
	        }
	        this.destination.complete();
	    };
	    return ReduceSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ReduceSubscriber = ReduceSubscriber;
	//# sourceMappingURL=reduce.js.map

/***/ },

/***/ 167:
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/// <reference path="../lib/vs/index.d.ts" />
	__export(__webpack_require__(43));
	__export(__webpack_require__(56));
	

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var vis_network_service_1 = __webpack_require__(134);
	/**
	 * Use this directive with a div container to show network data.
	 *
	 * @export
	 * @class VisNetworkDirective
	 * @implements {OnInit}
	 * @implements {OnDestroy}
	 * @implements {OnChanges}
	 */
	var VisNetworkDirective = (function () {
	    /**
	     * Creates an instance of VisNetworkDirective.
	     *
	     * @param {ElementRef} elementRef The HTML element reference.
	     * @param {VisNetworkService} visNetworkService The VisNetworkService.
	     *
	     * @memberOf VisNetworkDirective
	     */
	    function VisNetworkDirective(elementRef, visNetworkService) {
	        this.elementRef = elementRef;
	        this.visNetworkService = visNetworkService;
	        /**
	         * This event will be raised when the network is initialized.
	         * At this point of time the network is successfully registered
	         * with the VisNetworkService and you can register to events.
	         * The event data is the name of the network as a string.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisNetworkDirective
	         */
	        this.initialized = new core_1.EventEmitter();
	        this.isInitialized = false;
	        this.visNetworkContainer = elementRef.nativeElement;
	    }
	    /**
	     * Create the network when at least visNetwork and visNetworkData
	     * are defined.
	     *
	     * @memberOf VisNetworkDirective
	     */
	    VisNetworkDirective.prototype.ngOnInit = function () {
	        if (!this.isInitialized && this.visNetwork && this.visNetworkData) {
	            this.createNetwork();
	        }
	    };
	    /**
	     * Update the network data or options on reference changes to
	     * the visNetworkData or visNetworkOptions properties.
	     *
	     * @param {{[propName: string]: SimpleChange}} changes
	     *
	     * @memberOf VisNetworkDirective
	     */
	    VisNetworkDirective.prototype.ngOnChanges = function (changes) {
	        if (!this.isInitialized && this.visNetwork && this.visNetworkData) {
	            this.createNetwork();
	        }
	        for (var propertyName in changes) {
	            if (changes.hasOwnProperty(propertyName)) {
	                var change = changes[propertyName];
	                if (!change.isFirstChange()) {
	                    if (propertyName === 'visNetworkData') {
	                        this.visNetworkService.setData(this.visNetwork, changes[propertyName].currentValue);
	                    }
	                    if (propertyName === 'visNetworkOptions') {
	                        this.visNetworkService.setOptions(this.visNetwork, changes[propertyName].currentValue);
	                    }
	                }
	            }
	        }
	    };
	    /**
	     * Calls the destroy function for this network instance.
	     *
	     *
	     * @memberOf VisNetworkDirective
	     */
	    VisNetworkDirective.prototype.ngOnDestroy = function () {
	        this.isInitialized = false;
	        this.visNetworkService.destroy(this.visNetwork);
	    };
	    VisNetworkDirective.prototype.createNetwork = function () {
	        this.visNetworkService.create(this.visNetwork, this.visNetworkContainer, this.visNetworkData, this.visNetworkOptions);
	        this.isInitialized = true;
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
	            selector: '[visNetwork]',
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, vis_network_service_1.VisNetworkService])
	    ], VisNetworkDirective);
	    return VisNetworkDirective;
	}());
	exports.VisNetworkDirective = VisNetworkDirective;
	

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var vis_timeline_service_1 = __webpack_require__(135);
	var index_1 = __webpack_require__(43);
	/**
	 * Use this directive with a div container to show timeline data.
	 *
	 * @export
	 * @class VisTimelineDirective
	 * @implements {OnInit}
	 * @implements {OnDestroy}
	 * @implements {OnChanges}
	 */
	var VisTimelineDirective = (function () {
	    /**
	     * Creates an instance of VisTimelineDirective.
	     *
	     * @param {ElementRef} elementRef The HTML element reference.
	     * @param {VisTimelineService} visTimelineService The VisTimelineService.
	     *
	     * @memberOf VisTimelineDirective
	     */
	    function VisTimelineDirective(elementRef, visTimelineService) {
	        this.elementRef = elementRef;
	        this.visTimelineService = visTimelineService;
	        /**
	         * This event will be raised when the timline is initialized.
	         * At this point of time the timeline is successfully registered
	         * with the VisNetworkService and you can register to events.
	         * The event data is the name of the timeline as a string.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf VisTimelineDirective
	         */
	        this.initialized = new core_1.EventEmitter();
	        this.isInitialized = false;
	        this.visTimelineContainer = elementRef.nativeElement;
	    }
	    /**
	     * Create the timeline when at least visNetwork and visNetworkData
	     * are defined.
	     *
	     * @memberOf VisTimelineDirective
	     */
	    VisTimelineDirective.prototype.ngOnInit = function () {
	        if (!this.isInitialized && this.visTimeline && this.visTimelineItems) {
	            this.createTimeline();
	        }
	    };
	    /**
	     * Update the timeline data, groups or options on reference changes to
	     * the visTimelineItems, visTimelineGroups or visTimelineOptions properties.
	     *
	     * @param {{[propName: string]: SimpleChange}} changes
	     *
	     * @memberOf VisTimelineDirective
	     */
	    VisTimelineDirective.prototype.ngOnChanges = function (changes) {
	        if (!this.isInitialized && this.visTimeline && this.visTimelineItems) {
	            this.createTimeline();
	        }
	        for (var propertyName in changes) {
	            if (changes.hasOwnProperty(propertyName)) {
	                var change = changes[propertyName];
	                if (!change.isFirstChange()) {
	                    if (propertyName === 'visTimelineItems') {
	                        this.visTimelineService.setItems(this.visTimeline, changes[propertyName].currentValue);
	                    }
	                    if (propertyName === 'visTimelineOptions') {
	                        this.visTimelineService.setOptions(this.visTimeline, changes[propertyName].currentValue);
	                    }
	                    if (propertyName === 'visTimelineGroups') {
	                        this.visTimelineService.setGroups(this.visTimeline, changes[propertyName].currentValue);
	                    }
	                }
	            }
	        }
	    };
	    /**
	     * Calls the destroy function for this timeline instance.
	     *
	     *
	     * @memberOf VisTimelineDirective
	     */
	    VisTimelineDirective.prototype.ngOnDestroy = function () {
	        this.isInitialized = false;
	        this.visTimelineService.destroy(this.visTimeline);
	    };
	    VisTimelineDirective.prototype.createTimeline = function () {
	        if (this.visTimelineGroups) {
	            this.visTimelineService.createWithItemsAndGroups(this.visTimeline, this.visTimelineContainer, this.visTimelineItems, this.visTimelineGroups, this.visTimelineOptions);
	        }
	        else {
	            this.visTimelineService.createWithItems(this.visTimeline, this.visTimelineContainer, this.visTimelineItems, this.visTimelineOptions);
	        }
	        this.isInitialized = true;
	        this.initialized.emit(this.visTimeline);
	    };
	    __decorate([
	        core_1.Input('visTimeline'), 
	        __metadata('design:type', String)
	    ], VisTimelineDirective.prototype, "visTimeline", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', index_1.VisTimelineItems)
	    ], VisTimelineDirective.prototype, "visTimelineItems", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', index_1.VisTimelineGroups)
	    ], VisTimelineDirective.prototype, "visTimelineGroups", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], VisTimelineDirective.prototype, "visTimelineOptions", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], VisTimelineDirective.prototype, "initialized", void 0);
	    VisTimelineDirective = __decorate([
	        core_1.Directive({
	            selector: '[visTimeline]',
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, vis_timeline_service_1.VisTimelineService])
	    ], VisTimelineDirective);
	    return VisTimelineDirective;
	}());
	exports.VisTimelineDirective = VisTimelineDirective;
	

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var DemoComponent = (function () {
	    function DemoComponent() {
	    }
	    DemoComponent = __decorate([
	        core_1.Component({
	            selector: 'example-app',
	            template: __webpack_require__(138),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DemoComponent);
	    return DemoComponent;
	}());
	exports.DemoComponent = DemoComponent;
	

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var forms_1 = __webpack_require__(84);
	var platform_browser_1 = __webpack_require__(45);
	var common_1 = __webpack_require__(44);
	var router_1 = __webpack_require__(137);
	var network_example_component_1 = __webpack_require__(329);
	var timeline_example_component_1 = __webpack_require__(330);
	var ng2_vis_1 = __webpack_require__(331);
	var demo_component_1 = __webpack_require__(326);
	var home_component_1 = __webpack_require__(328);
	var VisDemoModule = (function () {
	    function VisDemoModule() {
	    }
	    VisDemoModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                demo_component_1.DemoComponent,
	                home_component_1.HomeComponent,
	                network_example_component_1.VisNetworkExampleComponent,
	                timeline_example_component_1.VisTimelineExampleComponent
	            ],
	            imports: [
	                platform_browser_1.BrowserModule,
	                forms_1.FormsModule,
	                ng2_vis_1.VisModule,
	                common_1.CommonModule,
	                router_1.RouterModule.forRoot([
	                    { path: 'timeline', component: timeline_example_component_1.VisTimelineExampleComponent },
	                    { path: '', redirectTo: '/home', pathMatch: 'full' },
	                    { path: 'home', component: home_component_1.HomeComponent },
	                    { path: 'network', component: network_example_component_1.VisNetworkExampleComponent },
	                    { path: '**', component: home_component_1.HomeComponent }
	                ])
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

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home-example',
	            template: __webpack_require__(139),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;
	

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var network_1 = __webpack_require__(56);
	var ExampleNetworkData = (function () {
	    function ExampleNetworkData() {
	    }
	    return ExampleNetworkData;
	}());
	var VisNetworkExampleComponent = (function () {
	    function VisNetworkExampleComponent(visNetworkService) {
	        this.visNetworkService = visNetworkService;
	        this.visNetwork = 'networkId1';
	    }
	    VisNetworkExampleComponent.prototype.addNode = function () {
	        var newId = this.visNetworkData.nodes.getLength() + 1;
	        this.visNetworkData.nodes.add({ id: newId.toString(), label: 'Node ' + newId });
	        this.visNetworkService.fit(this.visNetwork);
	    };
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
	        var nodes = new network_1.VisNodes([
	            { id: '1', label: 'Node 1' },
	            { id: '2', label: 'Node 2' },
	            { id: '3', label: 'Node 3' },
	            { id: '4', label: 'Node 4' },
	            { id: '5', label: 'Node 5', title: 'Title of Node 5' }]);
	        var edges = new network_1.VisEdges([
	            { from: '1', to: '3' },
	            { from: '1', to: '2' },
	            { from: '2', to: '4' },
	            { from: '2', to: '5' }]);
	        this.visNetworkData = {
	            nodes: nodes,
	            edges: edges
	        };
	        this.visNetworkOptions = {};
	    };
	    VisNetworkExampleComponent.prototype.ngOnDestroy = function () {
	        this.visNetworkService.off(this.visNetwork, 'click');
	    };
	    VisNetworkExampleComponent = __decorate([
	        core_1.Component({
	            selector: 'network-example',
	            template: __webpack_require__(141),
	            styles: [
	                __webpack_require__(140)
	            ]
	        }), 
	        __metadata('design:paramtypes', [network_1.VisNetworkService])
	    ], VisNetworkExampleComponent);
	    return VisNetworkExampleComponent;
	}());
	exports.VisNetworkExampleComponent = VisNetworkExampleComponent;
	

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(8);
	var timeline_1 = __webpack_require__(43);
	var VisTimelineExampleComponent = (function () {
	    function VisTimelineExampleComponent(visTimelineService) {
	        this.visTimelineService = visTimelineService;
	        this.visTimeline = 'timelineId1';
	    }
	    VisTimelineExampleComponent.prototype.timelineInitialized = function () {
	        var _this = this;
	        console.log('timeline initialized');
	        // now we can use the service to register on events
	        this.visTimelineService.on(this.visTimeline, 'click');
	        // open your console/dev tools to see the click params
	        this.visTimelineService.click
	            .subscribe(function (eventData) {
	            if (eventData[0] === _this.visTimeline) {
	                console.log(eventData[1]);
	            }
	        });
	    };
	    VisTimelineExampleComponent.prototype.addItem = function () {
	        var newLength = this.visTimelineItems.getLength() + 1;
	        this.visTimelineItems.add({ id: newLength, content: 'item ' + newLength, start: Date.now() });
	        this.visTimelineService.focusOnIds(this.visTimeline, [1, newLength]);
	    };
	    VisTimelineExampleComponent.prototype.ngOnInit = function () {
	        this.visTimelineItems = new timeline_1.VisTimelineItems([
	            { id: 1, content: 'item 1', start: '2016-04-20' },
	            { id: 2, content: 'item 2', start: '2016-04-14' },
	            { id: 3, content: 'item 3', start: '2016-04-18' },
	            { id: 4, content: 'item 4', start: '2016-04-16', end: '2016-04-19' },
	            { id: 5, content: 'item 5', start: '2016-04-25' },
	            { id: 6, content: 'item 6', start: '2016-04-27', type: 'point' }
	        ]);
	    };
	    VisTimelineExampleComponent.prototype.ngOnDestroy = function () {
	        this.visTimelineService.off(this.visTimeline, 'click');
	    };
	    VisTimelineExampleComponent = __decorate([
	        core_1.Component({
	            selector: 'timeline-example',
	            template: __webpack_require__(143),
	            styles: [
	                __webpack_require__(142)
	            ]
	        }), 
	        __metadata('design:paramtypes', [timeline_1.VisTimelineService])
	    ], VisTimelineExampleComponent);
	    return VisTimelineExampleComponent;
	}());
	exports.VisTimelineExampleComponent = VisTimelineExampleComponent;
	

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(8);
	var index_1 = __webpack_require__(56);
	var index_2 = __webpack_require__(43);
	__export(__webpack_require__(323));
	var VisModule = (function () {
	    function VisModule() {
	    }
	    VisModule = __decorate([
	        core_1.NgModule({
	            declarations: [index_1.VisNetworkDirective, index_2.VisTimelineDirective],
	            exports: [index_1.VisNetworkDirective, index_2.VisTimelineDirective],
	            providers: [index_1.VisNetworkService, index_2.VisTimelineService],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], VisModule);
	    return VisModule;
	}());
	exports.VisModule = VisModule;
	

/***/ }

});
//# sourceMappingURL=main.map