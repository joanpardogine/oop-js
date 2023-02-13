'use strict'

class Metge extends Persona {
  constructor(nom, cognom, nif, especialitat) {
    super(nom, cognom, nif);
    this.especialitat = especialitat;
  }

  get especialitat() {
    return this._especialitat;
  }
  set especialitat(in_especialitat) {
    this._especialitat = in_especialitat;
  }

};