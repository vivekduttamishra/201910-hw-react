"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point2D = /** @class */ (function () {
    function Point2D() {
    }
    return Point2D;
}());
var CanvasPoint = /** @class */ (function (_super) {
    __extends(CanvasPoint, _super);
    function CanvasPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CanvasPoint;
}(Point2D));
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint() {
    }
    return VirtualPoint;
}());
