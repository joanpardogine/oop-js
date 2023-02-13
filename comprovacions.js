'use strict'

function comprovacioInicial() {
    // console.log(`eleID_divEspaiModal = ${eleID_divEspaiModal}`);
    // console.log(`eleID_barra_missatges = ${eleID_barra_missatges}`);
    // console.log(`eleID_text_missatge = ${eleID_text_missatge}`);
    // console.log(`eleID_divHospital = ${eleID_divHospital}`);
    // console.log(`eleID_divPacient = ${eleID_divPacient}`);
    // console.log(`eleID_btnGestHospitals = ${eleID_btnGestHospitals}`);
    // console.log(`eleID_btnGestPacients = ${eleID_btnGestPacients}`);
    // console.log(`eleID_btnGestMalalties = ${eleID_btnGestMalalties}`);
    // console.log(`eleID_btnGestMetges = ${eleID_btnGestMetges}`);
    const eleID_btnCheck = document.getElementById("btnCheck");
    if  (!( (`${eleID_divEspaiModal}` === "[object HTMLDivElement]") &&
           (`${eleID_barra_missatges}` === "[object HTMLDivElement]") &&
           (`${eleID_text_missatge}` === "[object HTMLDivElement]") &&
           (`${eleID_divHospital}` === "[object HTMLDivElement]") &&
           (`${eleID_divPacient}` === "[object HTMLDivElement]") &&
           (`${eleID_btnGestHospitals}` === "[object HTMLDivElement]") &&
           (`${eleID_btnGestPacients}` === "[object HTMLDivElement]") &&
           (`${eleID_btnGestMalalties}` === "[object HTMLDivElement]") &&
           (`${eleID_btnGestMetges}` === "[object HTMLDivElement]") &&
           (`${eleID_btnGestAplicacio}` === "[object HTMLDivElement]") &&
           (`${eleID_h2ResutltatFormControls}` === "[object HTMLDivElement]")
        )) {
        $(eleID_btnCheck).removeClass('btn-primary');
        $(eleID_btnCheck).addClass('btn-success');
        eleID_h2ResutltatFormControls.innerText="Tot ok!"
     }
}
