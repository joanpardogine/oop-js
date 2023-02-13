'use strict'

class Pacient extends Persona {
  constructor(in_nom, in_cognom, in_nif, in_malaltia) {
    super(in_nom, in_cognom, in_nif);
    this.malaltia = in_malaltia;
  }
  get malaltia() {
    return this._malaltia;
  }
  set malaltia(in_malaltia) {
    this._especialitat = in_malaltia;
  }

}
