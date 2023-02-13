'use strict'

class Persona {
    constructor(nomRebut, cognomRebut, nifRebut) {
        this.nom = nomRebut;
        this.cognom = cognomRebut;
        this.nif = nifRebut;
    }
    
    get nom() {
        return this._nom;
    }
    set nom(in_nom) {
        this._nom = in_nom;
    }

    get cognom() {
        return this._cognom;
    }
    set cognom(in_cognom) {
        this._cognom = in_cognom;
    }

    get nif() {
        return this._nif;
    }
    set nif(in_nif) {
        this._nif = in_nif;
    }

}