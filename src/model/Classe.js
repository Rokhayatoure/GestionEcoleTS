"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classe = void 0;
var Classe = /** @class */ (function () {
    function Classe(_id, _nom, _niveau, _filiere) {
        this._id = _id;
        this._nom = _nom;
        this._niveau = _niveau;
        this._filiere = _filiere;
    }
    Object.defineProperty(Classe.prototype, "id", {
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
    Object.defineProperty(Classe.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Classe.prototype, "niveau", {
        get: function () {
            return this._niveau;
        },
        set: function (value) {
            this._niveau = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Classe.prototype, "filiere", {
        get: function () {
            return this._filiere;
        },
        set: function (value) {
            this._filiere = value;
        },
        enumerable: false,
        configurable: true
    });
    return Classe;
}());
exports.Classe = Classe;
