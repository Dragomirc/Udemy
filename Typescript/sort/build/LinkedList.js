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
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (number) {
        var node = new Node(number);
        if (!this.head) {
            this.head = node;
        }
        else {
            var currNode = this.head;
            while (currNode.next) {
                currNode = currNode.next;
            }
            currNode.next = node;
        }
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var length = 0;
            var currNode = this.head;
            while (currNode) {
                currNode = currNode.next;
                length++;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var currNode = this.head;
        while (currNode) {
            console.log(" " + currNode.data + " ");
            currNode = currNode.next;
        }
    };
    LinkedList.prototype.at = function (number) {
        var error = new Error('Index out of bounds.');
        if (!this.head) {
            throw error;
        }
        var index = 0;
        var currNode = this.head;
        while (currNode) {
            if (index === number) {
                return currNode;
            }
            currNode = currNode.next;
            index++;
        }
        throw error;
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty!');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
