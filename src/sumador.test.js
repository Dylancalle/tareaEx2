import SumarCadena from "./sumador.js";

describe("Sumar", () => {
  it("deberia devolver el mismo numero ingresado", () => {
    expect(SumarCadena("5")).toEqual(5);
  });
});


    // como estudiante de primaria
    // quiero poder sumar numeros asi
    // para saber el resultado 
    //- cuando se introdusca los numeros separados por un "-" se mostrara la suma presionando el boton
    //- si se ingresa un texto al inicio que exprese que sera el nuevo separador, mientras este correcto, se usara como nuevo separador y cuando se presione sumar se sumara
    //- si existe algun error, se mostrara una advertencia de que no se puede entender lo introducido y que vuelva a intentar
    //- si alguno de los numeros supero el limite, se mostrara una advertencia de que se supero el limite en algun numero
    