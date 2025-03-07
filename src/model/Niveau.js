"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Niveau = void 0;
var Niveau = /** @class */ (function () {
    function Niveau(_id, _nom) {
        this._id = _id;
        this._nom = _nom;
    }
    Object.defineProperty(Niveau.prototype, "id", {
        // Getters
        get: function () {
            return this._id;
        },
        // Setters
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Niveau.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    return Niveau;
}());
exports.Niveau = Niveau;
