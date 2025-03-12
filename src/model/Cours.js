"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cours = void 0;
var Cours = /** @class */ (function () {
    function Cours(_id, _dateCours, _duree, _classe // En supposant que la durée est exprimée en minutes
    ) {
        this._id = _id;
        this._dateCours = _dateCours;
        this._duree = _duree;
        this._classe = _classe;
    }
    Object.defineProperty(Cours.prototype, "id", {
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
    Object.defineProperty(Cours.prototype, "dateCours", {
        get: function () {
            return this._dateCours;
        },
        set: function (value) {
            this._dateCours = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "duree", {
        get: function () {
            return this._duree;
        },
        set: function (value) {
            this._duree = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "classe", {
        get: function () {
            return this._classe;
        },
        set: function (value) {
            this._classe = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cours;
}());
exports.Cours = Cours;
