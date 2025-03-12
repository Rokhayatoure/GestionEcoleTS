"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filiere = void 0;
var Filiere = /** @class */ (function () {
    function Filiere(_id, _nom) {
        this._id = _id;
        this._nom = _nom;
    }
    Object.defineProperty(Filiere.prototype, "id", {
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
    Object.defineProperty(Filiere.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    return Filiere;
}());
exports.Filiere = Filiere;
