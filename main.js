'use strict'

const eleID_divEspaiModal = document.getElementById("divEspaiModal");
const eleID_barra_missatges = document.getElementById("divBarraMissatges");
const eleID_text_missatge = document.getElementById("h3BarraMissatges");

const eleID_divPresentacio = document.getElementById("divPresentacio");
const eleID_divHospital = document.getElementById("divHospital");
const eleID_divPacient = document.getElementById("divPacient");
const eleID_divPacientsTractactament = document.getElementById("divTractament");


const eleID_divControls = document.getElementById("divControls");

const eleID_btnGestHospitals = document.getElementById("btnGestHospitals");
const eleID_btnGestPacients = document.getElementById("btnGestPacients");
const eleID_btnGestMalalties = document.getElementById("btnGestMalalties");
const eleID_btnGestMetges = document.getElementById("btnGestMetges");

const eleID_btnGestAplicacio = document.getElementById("btnGestAplicacio");

const eleID_h2ResutltatFormControls = document.getElementById("h2ResutltatFormControls");

let hospital = {};

/*
taula_missatges[0][intTitol]="No habilitat"
taula_missatges[0][intMissatge]="Ho sento, encara no està habilitat!"

taula_missatges[1][intTitol]="Camp buit"
taula_missatges[1][intMissatge]="Cal que entris un nombre al camp màxim pacients!"

taula_missatges[2][intTitol]="Camp buit"
taula_missatges[2][intMissatge]="Cal que entris un nom al camp Hospital!"

taula_missatges[3][intTitol]="Camp buit"
taula_missatges[3][intMissatge]="Ho sento, encara no està habilitat!"
 */

const taula_missatges = [
    []
];

const intTitol = 1
const intMissatge = 2;

taula_missatges[0] = [];
taula_missatges[0][intTitol] = "No habilitat";
taula_missatges[0][intMissatge] = "Ho sento, encara no està habilitat!";

taula_missatges[1] = [];
taula_missatges[1][intTitol] = "El camp {0} és obligatori!";
taula_missatges[1][intMissatge] = "Cal que entris un valor al camp {0}!";

taula_missatges[2] = [];
taula_missatges[2][intTitol] = "El camp {0} no conté un nombre vàlid!";
taula_missatges[2][intMissatge] = "Cal que entris un nombre vàlid al camp {0}!";

// debugger;
//    let metge = new Metge('Ivan', 'Soriano', '12345678A', 'Oncologia');
//     alert(JSON.stringify(metge));

function comprovaCampBuit(objecteRebut) {
    let buit = false;
    let valor = "";
// debugger;
    if (objecteRebut.tagName.toLowerCase() === "select") {
        valor = objecteRebut.options[objecteRebut.selectedIndex].value;
    } else {
        valor = objecteRebut.value;
    }

    if (valor === "" || valor === 0) {
        mostraMissatge(1, objecteRebut.id);
        buit = true;
    }

    return buit;
}

function comprovaCampNumero(objecteRebut) {
    switch (isNaN(objecteRebut.value) ? 2 : parseInt(objecteRebut.value) === 0 ? 1 : 0) {
        case 1:
            mostraMissatge(1);
            break;

        case 2:
            mostraMissatge(2);
            break;

    }
    // if (isNaN(objecteRebut.value) || (objecteRebut.value==""))
    //   {
    //     alert("Must input numbers");
    //     return false;
    //   }
}


function mostraMissatge(codiMissatge, nomCamp) {
    /* Amb format JQuery   */
    $('#divEspaiModal').find('#titolModal').text(String.format(taula_missatges[codiMissatge][intTitol], nomCamp));
    $('#divEspaiModal').find('#missatgeModal').text(String.format(taula_missatges[codiMissatge][intMissatge], nomCamp));
    $('#divEspaiModal').modal('show');
}

function mostraBotons() {
  // debugger;
    eleID_btnGestHospitals.disabled = false;
    eleID_btnGestPacients.disabled = false;
    eleID_btnGestMalalties.disabled = false;
    eleID_btnGestMetges.disabled = false;
    eleID_btnGestAplicacio.disabled = false;

    $(eleID_btnGestHospitals).removeClass('btn-secondary');
    $(eleID_btnGestHospitals).addClass('btn-primary');


    $(eleID_btnGestPacients).removeClass('btn-secondary');
    $(eleID_btnGestPacients).addClass('btn-primary');

    $(eleID_btnGestMalalties).removeClass('btn-secondary');
    $(eleID_btnGestMalalties).addClass('btn-primary');

    $(eleID_btnGestMetges).removeClass('btn-secondary');
    $(eleID_btnGestMetges).addClass('btn-primary');

    $(eleID_btnGestAplicacio).removeClass('btn-secondary');
    $(eleID_btnGestAplicacio).addClass('btn-primary');
}

function amagaBotons() {
    eleID_btnGestHospitals.disabled = true;
    eleID_btnGestPacients.disabled = true;
    eleID_btnGestMalalties.disabled = true;
    eleID_btnGestMetges.disabled = true;
    eleID_btnGestAplicacio.disabled = true;

    $(eleID_btnGestHospitals).removeClass('btn-primary');
    $(eleID_btnGestHospitals).addClass('btn-secondary');

    $(eleID_btnGestPacients).removeClass('btn-primary');
    $(eleID_btnGestPacients).addClass('btn-secondary');

    $(eleID_btnGestMalalties).removeClass('btn-primary');
    $(eleID_btnGestMalalties).addClass('btn-secondary');

    $(eleID_btnGestMetges).removeClass('btn-primary');
    $(eleID_btnGestMetges).addClass('btn-secondary');

    $(eleID_btnGestAplicacio).removeClass('btn-primary');
    $(eleID_btnGestAplicacio).addClass('btn-secondary');
}


/* https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if ( document.getElementById("MyElement").classList.contains('MyClass') )

document.getElementById("MyElement").classList.toggle('MyClass');



https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript

*/

function conteClass(element, nomClass) {
    return (' ' + element.classList + ' ').indexOf(' ' + nomClass + ' ') > -1;
}



function eliminaClass(elementRebut, nomClass) {
    var arrLlistaClasses;

    arrLlistaClasses = elementRebut.className.split(" ");
    if (arrLlistaClasses.indexOf(nomClass) == -1) { // ens indica que no existeix
        elementRebut.className += " " + nomClass;
    }
}

function afegirClass(elementRebut, nomClass) {
    var arrLlistaClasses;

    arrLlistaClasses = elementRebut.className.split(" ");
    if (arrLlistaClasses.indexOf(nomClass) == -1) { // ens indica que no existeix
        elementRebut.className += " " + nomClass;
    }
}



function mostraGestioApp(objecte) {
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divControls.classList.toggle("d-none");
    amagaBotons();
}


function mostraGestioMetges(objecte) {
    mostraMissatge(0);
}

function mostraGestioMalaties(objecte) {
    mostraMissatge(0);
}



function mostraGestioHospital(objecte) {
    document.getElementById('tancaDivHospital').onclick = function tanca() {
        eleID_divPresentacio.classList.toggle("d-none");
        eleID_divHospital.classList.toggle("d-none");
        mostraBotons();
    }
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divHospital.classList.toggle("d-none");
    amagaBotons();
}

function ocultaGestioHospital(objecteRebut) {
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divHospital.classList.toggle("d-none");
    mostraBotons();
}

// CREA UN CONTENIDOR ESPECIFICANT UNA CLASSE O MÉS CLASSES
function crearContenidor(id, classes) {
    let contenidor = null;

    if (typeof id !== "undefined") {
        contenidor = document.createElement("div");
        contenidor.setAttribute("id", id.toString());

        if (classes !== "") {
            contenidor.setAttribute("class", classes);
        }
    } else {
      console.log("ERROR => crearContenidor(id): el paràmetre <<id>> ha d'estar definit!");
    }

    return contenidor;
}

// CREA UN LABEL DE FORMA DINÀMICA ESPECIFICANT UN TEXT I A QUIN INPUT VA DIRIGIDA
function crearLabel(inputFor, text) {
    let label = null

    if (typeof inputFor !== "undefined" && typeof text !== "undefined") {
      label = document.createElement("label");
      label.setAttribute("for", inputFor.toString());
      label.classList.add("font-weight-bold");
      label.innerHTML = text;
    } else {
      console.log("ERROR => crearLabel(for, text): els paràmetre <<inputFor, text>> no poden estar sense definir!");
    }

    return label;
}

// CREAR UN INPUT DE FORMA DINÀMICA ESPECIFICANT UN ID
function crearInput(id, atributsExtra) {
    let input = null;

    if (typeof id !== "undefined") {
      input = document.createElement("input");
      input.setAttribute("id", id.toString());

      if (Array.isArray(atributsExtra)) {
          if (atributsExtra.length > 0) {
              atributsExtra.forEach((atributExtra) => {
                if (typeof atributExtra === "object" && atributExtra !== null) {
                  input.setAttribute(atributExtra.nom.toString(), atributExtra.valor.toString());
                } else {
                  console.log("ERROR => crearInput(id, atributsExtra): el paràmetre <<atributsExtra>> ha de contindre un array amb objectes vàlids!");
                }
              });
          }
      }

      input.classList.add("form-control");
    } else {
      console.log("ERROR => crearInput(id, atributsExtra): el paràmetre <<id>> no pot estar sense definir!");
    }

    return input;
}

// CREA L'OPTION DEL SELECT
function crearOptionSelect(valor, text) {
    let option = null;

    if (typeof valor !== "undefined" && typeof text !== "undefined") {
        option = document.createElement("option");
        option.value = valor;
        option.text = text;
    } else {
      console.log("ERROR => crearOptionSelect(valor, text): els paràmetres han d'estar definits!");
    }

    return option;
}

// CREA UN SELECT
function crearSelect(id, textsOptions) {
  let select = null;

  if (typeof id !== "undefined") {
      select = document.createElement("select");
      select.setAttribute("id", id.toString());
      select.classList.add("form-control");

      // Creem opció per defecte (--- Sense definir ---)
      let optionPerDefecte = crearOptionSelect("-1", "--- Sense definir ---");
      optionPerDefecte.setAttribute("selected", true);
      optionPerDefecte.setAttribute("disabled", true);
      select.appendChild(optionPerDefecte);

      if (typeof Array.isArray(textsOptions)) {
          for (let numeroTextOption = 0; numeroTextOption < textsOptions.length; numeroTextOption++) {
              let option = crearOptionSelect(numeroTextOption.toString(), textsOptions[numeroTextOption].toString());
              if (option !== null) {
                select.appendChild(option);
              }
          }
      } else {
        console.log("ERROR => crearSelect(id, textsOptions): el paràmetre <<valorsOptions>> ha de ser un array de cadenes!");
      }
    } else {
      console.log("ERROR => crearSelect(id, valorsOptions): el paràmetre <<valorsOptions>> no pot estar sense definir!");
    }

  return select;
}

// CREAR UN BOTÓ DE FORMA DINÀMICA ESPECIFICANT UN ID
function crearButton(id, text, attributsExtra) {
    let button = null;

    if (typeof id !== "undefined" && text !== "") {
      button = document.createElement("button");
      button.setAttribute("id", id.toString());
      button.setAttribute("type", "button");
      button.innerText = text;

      if (Array.isArray(attributsExtra)) {
          if (attributsExtra.length > 0) {
              attributsExtra.forEach((attributsExtra) => {
                if (typeof attributsExtra === "object" && attributsExtra !== null) {
                  button.setAttribute(attributsExtra.nom.toString(), attributsExtra.valor.toString());
                }
              });
          }
      }

      button.classList.add("btn");
      button.classList.add("btn-primary");
    } else {
      console.log("ERROR => crearButton(id, text): els paràmetres <<id, text>> no poden estar sense definir!");
    }

    return button;
}

// CREA EL CONTINGUT DEl FORMULARI DE PACIENT
function crearContingutDivPacient(numeroPacient) {
  // Creem el div que contindrà tots els sub-contenidors de nom, cognom, nif, malaltia
  let divPacient = crearContenidor("divPacient" + numeroPacient.toString(), "form-row mb-3");

  /* NOM */
  // Creem un div "col" per al label i input del nom del pacient
  let divColNomPacient = crearContenidor("colNomPacient" + numeroPacient.toString(), "col");

  // Afegim la label del nom del pacient
  divColNomPacient.appendChild(crearLabel("inputNomPacient" + numeroPacient.toString(), "Nom del pacient: "));

  // Afegim l'input del nom del pacient
  divColNomPacient.appendChild(crearInput("inputNomPacient" + numeroPacient.toString(), [{nom: "type", valor: "text"}, {nom: "maxlength", valor: 100}]));

  // Afegim el contenidor "col" al contenidor "divPacient"
  divPacient.appendChild(divColNomPacient);

  /* COGNOM */
  // Creem un div "col" per al label i input del cognom del pacient
  let divCognomPacient = crearContenidor("colCognomPacient" + numeroPacient.toString(), "col");

  // Afegim la label del nom del pacient
  divCognomPacient.appendChild(crearLabel("inputCognomPacient" + numeroPacient.toString(), "Cognom del pacient: "));

  // Afegim l'input del nom del pacient
  divCognomPacient.appendChild(crearInput("inputCognomPacient" + numeroPacient.toString(), [{nom: "type", valor: "text"}, {nom: "maxlength", valor: 100}]));

  // Afegim el contenidor "col" al contenidor "divPacient"
  divPacient.appendChild(divCognomPacient);

  /* NIF */
  // Creem un div "col" per al label i input del NIF del pacient
  let divNifPacient = crearContenidor("colNifPacient" + numeroPacient.toString(), "col");

  // Afegim la label del nom del pacient
  divNifPacient.appendChild(crearLabel("inputNifPacient" + numeroPacient.toString(), "NIF del pacient: "));

  // Afegim l'input del nom del pacient
  divNifPacient.appendChild(crearInput("inputNifPacient" + numeroPacient.toString(), [{nom: "type", valor: "text"}, {nom: "maxlength", valor: 9}]));

  // Afegim el contenidor "col" al contenidor "divPacient"
  divPacient.appendChild(divNifPacient);

  /* MALALTIA */
  // Creem un div "col" per al label i input de la malaltia del pacient
  let divColMalaltiaPacient = crearContenidor("colMalaltiaPacient" + numeroPacient.toString(), "col");

  // Afegim la label de la malaltia del pacient
  divColMalaltiaPacient.appendChild(crearLabel("selectMalaltiaPacient" + numeroPacient.toString(), "Malaltia del pacient: "));

  // Afegim el select de malalties
  divColMalaltiaPacient.appendChild(crearSelect("selectMalaltiaPacient" + numeroPacient.toString(), llistaMalalties));

  // Afegim el contenidor "col" al contenidor "divPacient"
  divPacient.appendChild(divColMalaltiaPacient);

  // Afegim el contenidor del pacient al formulari
  document.getElementById("dadesPacient").appendChild(divPacient);


}

function mostraGestioPacients() {
    document.getElementById('tancaDivPacient').onclick = function tanca() {
        eleID_divPresentacio.classList.toggle("d-none");
        eleID_divPacient.classList.toggle("d-none");
        mostraBotons();
    }

    // if (typeof document.getElementById("divPacient") !== "undefined" && document.getElementById("divPacient") !== null) {
    //     document.getElementById("dadesPacient").innerHTML = "";
    // }

    for (let pacient = 0; pacient < hospital.maximPacients; pacient++) {
      crearContingutDivPacient(pacient);
    }

    if (!conteClass(eleID_divPacient, "d-none")) {
        afegirClass(eleID_divPacient, "d-none");
    }

    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divPacient.classList.toggle("d-none");
    amagaBotons();
}

function ocultaGestioPacients() {
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divPacient.classList.toggle("d-none");
    mostraBotons();
}

// CREA EL CONTINGUT DEl FORMULARI DE PACIENTS EN TRACTAMENT
function crearContingutDivPacientEnTractament(numeroPacient) {
  // Creem el div que contindrà tots els sub-contenidors de nom, cognom, nif, malaltia
  let divPacientEnTractament = crearContenidor("divPacientEnTractament" + numeroPacient.toString(), "form-row mb-3");

  /* NOM */
  // Creem un div "col" per al label i input del nom del pacient
  let divColNomPacientEnTractament = crearContenidor("colNomPacientEnTractament" + numeroPacient.toString(), "col");

  // Afegim la label del nom del pacient
  divColNomPacientEnTractament.appendChild(crearLabel("inputColNomPacientTractament" + numeroPacient.toString(), "Nom del pacient: "));

  // Afegim l'input del nom del pacient
  divColNomPacientEnTractament.appendChild(crearInput("inputColNomPacientTractament" + numeroPacient.toString(), [{nom: "type", valor: "text"}, {nom: "readonly", valor: "true"}, {nom: "value", valor: hospital.pacientsIngressats[numeroPacient].nom}]));

  // Afegim el contenidor "col" al contenidor "divPacientEnTractament"
  divPacientEnTractament.appendChild(divColNomPacientEnTractament);

  /* MALALTIA */
  // Creem un div "col" per al label i input de la malaltia del pacient
  let divColMalaltiaPacientEnTractament = crearContenidor("colMalaltiaPacientTractament" + numeroPacient.toString(), "col");

  // Afegim la label de la malaltia del pacient
  divColMalaltiaPacientEnTractament.appendChild(crearLabel("inputMalaltiaPacientTractament" + numeroPacient.toString(), "Malaltia del pacient: "));

  // Afegim l'input de la malaltia
  divColMalaltiaPacientEnTractament.appendChild(crearInput("inputMalaltiaPacientEnTractament" + numeroPacient.toString(), [{nom: "type", valor: "text"}, {nom: "readonly", valor: "true"}, {nom: "value", valor: llistaMalalties[hospital.pacientsIngressats[numeroPacient].malaltia]}]));

  // Afegim el contenidor "col" al contenidor "divPacientEnTractament"
  divPacientEnTractament.appendChild(divColMalaltiaPacientEnTractament, "col flex flex-column");

  let divColBotonsPacientEnTractament = crearContenidor("colBotonsPacientEnTractament" + numeroPacient.toString())

  /* DONAR D'ALTA */
  // Afegim el botó al contenidor "divPacientEnTractament"
  divColBotonsPacientEnTractament.appendChild(crearButton("botoAltaPacientEnTractament" + numeroPacient.toString(), "Donar d'alta", [{nom: "class", valor: "btn-success h-50 mb-1 ml-2 mr-1 w-100"}, {nom: "onclick", valor: "pacientsEnTractamentDonarDalta(" + numeroPacient + ")"}]));

  /* MORIR */
  // Afegim el botó al contenidor "divPacientEnTractament"danger
  divColBotonsPacientEnTractament.appendChild(crearButton("botoMorirPacientEnTractament" + numeroPacient.toString(), "Morir", [{nom: "class", valor: "btn-danger h-50 ml-2 mr-1 w-100"}, {nom: "onclick", valor: "pacientsEnTractamentMorir(" + numeroPacient + ")"}]));

  // Afegim el contenidor "col" al contenidor "divPacientEnTractament"
  divPacientEnTractament.appendChild(divColBotonsPacientEnTractament);

  // Afegim el contenidor del pacient al formulari
  document.getElementById("dadesPacientTractament").appendChild(divPacientEnTractament);
}

function mostraGestioPacientsEnTractament() {
    document.getElementById('tancaDivTractament').onclick = function tanca() {
        eleID_divPresentacio.classList.toggle("d-none");
        eleID_divPacientsTractactament.classList.toggle("d-none");
        mostraBotons();
    }

    for (let pacient = 0; pacient < hospital.maximPacients; pacient++) {
      crearContingutDivPacientEnTractament(pacient);
    }

    if (!conteClass(eleID_divPacient, "d-none")) {
        afegirClass(eleID_divPacient, "d-none");
    }

    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divPacientsTractactament.classList.toggle("d-none");
    amagaBotons();
}

function ocultaGestioPacientsTractament() {
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divPacientsTractactament.classList.toggle("d-none");
    mostraBotons();
}

function ocultaControls() {
    eleID_divPresentacio.classList.toggle("d-none");
    eleID_divControls.classList.toggle("d-none");
    mostraBotons();
}

// SETEJA LA VARIABLE AMB LA CLASSE HOSPITAL, QUÉ CONTÉ LES DADES DEL FORMULARI D'ALTA D'HOSPITAL
function crearHospital() {
    if (!comprovaCampBuit(document.getElementById("inputNomHospital")) &&
        !comprovaCampBuit(document.getElementById("maximPacientsHospital")) &&
        !comprovaCampBuit(document.getElementById("maximMetgesHospital"))) {
        // Creem l'objecte Hospital amb les dades introduïdes formulari
        hospital = new Hospital (
          document.getElementById("inputNomHospital").value,
          document.getElementById("maximPacientsHospital").value,
          document.getElementById("maximMetgesHospital").value
        );

        // Ocultem aquest formulari
        ocultaGestioHospital();

        // Mostrem el formulari de gestió de pacients
        mostraGestioPacients();
    }
}

// SETEJA LA VARIABLE AMB LA CLASSE PACIENT, QUÉ CONTÉ LES DADES DEL FORMULARI D'ALTA DE PACIENTS
function ingressarPacients() {
  let campsBuits = false;
  let numeroPacient = 0;
// debugger;
  // Creem l'objecte Pacient amb les dades introduïdes formulari
  while (numeroPacient < hospital.maximPacients && !campsBuits) {
      if (!comprovaCampBuit(document.getElementById("inputNomPacient" + numeroPacient.toString())) &&
          !comprovaCampBuit(document.getElementById("inputCognomPacient" + numeroPacient.toString())) &&
          !comprovaCampBuit(document.getElementById("inputNifPacient" + numeroPacient.toString())) &&
          !comprovaCampBuit(document.getElementById("selectMalaltiaPacient" + numeroPacient.toString()))) {

          // Afegim l'objecte pacients a l'array de "pacientsIngressats" amb les dades introduïdes formulari
          hospital.pacientsIngressats.push(new Pacient (
            document.getElementById("inputNomPacient" + numeroPacient.toString()).value,
            document.getElementById("inputCognomPacient" + numeroPacient.toString()).value,
            document.getElementById("inputNifPacient" + numeroPacient.toString()).value,
            document.getElementById("selectMalaltiaPacient" + numeroPacient.toString()).value
          ));

          numeroPacient++;
      } else {
        campsBuits = true;
      }
  }

  if (!campsBuits) {
      ocultaGestioPacients();
      mostraGestioPacientsEnTractament();
  }
}

function pacientsEnTractamentDonarDalta(llitPacient) {
  hospital.donarDaltaPacient(llitPacient);
  document.getElementById("divPacientEnTractament" + llitPacient.toString()).remove();

  if (totsLlitsBuits())
  dadesPacientTractament.innerHTML = ('<p class="text-center">L\'Hospital ' + hospital.nomHospital + ' no té cap pacient ingressat en aquests moments.</p>' +
  '<div class="text-center">' +
    '<button type="button" class="btn btn-primary mt-4" onClick="window.location.reload()">Tornar a començar</button>' +
  '</div>');
}

function pacientsEnTractamentMorir(llitPacient) {
  hospital.morirPacient(llitPacient);
  document.getElementById("divPacientEnTractament" + llitPacient.toString()).remove();

  if (totsLlitsBuits())
    dadesPacientTractament.innerHTML = ('<p class="text-center">L\'Hospital ' + hospital.nomHospital + ' no té cap pacient ingressat en aquests moments.</p>' +
    '<div class="text-center">' +
      '<button type="button" class="btn btn-primary mt-4" onClick="window.location.reload()">Tornar a començar</button>' +
    '</div>');
}

function totsLlitsBuits() {
  var llitsBuits = true;
  var llit = 0;

  while(llitsBuits && llit < hospital.pacientsIngressats.length) {
    llitsBuits = Object.keys(hospital.pacientsIngressats[llit]).length === 0;
    llit++;
  }

  return llitsBuits;
}

String.format = function() {
  let s = arguments[0];
  for (let i = 0; i <= arguments.length; i++) {
    let reg = new RegExp("\\{" + i + "\\}", "gm");
    s = s.replace(reg, arguments[i + 1]);
  }

  return s;
}
