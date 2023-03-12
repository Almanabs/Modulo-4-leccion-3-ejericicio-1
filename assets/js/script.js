/* EJERCICIO 1******************* */
const repetir = () => {
    const palabra = document.getElementById("palabra").value;
    const nVeces = document.getElementById("nVeces").value;
  
    const result = document.getElementById("result");
  
    result.innerHTML = palabra.repeat(nVeces);
  };
  repetir();
  
  /*EJERCICIO 2******************  */
  const aplicar = () => {
    const color = document.getElementById("color").value;
    const fondo = document.getElementById("fondo");
  
    fondo.style.background = color;
  };
  aplicar();
  
  /*EJERCICIO 3******************  */
  
  const calcular = () => {
    const primerNumero = document.getElementById("primerNumero").value;
    const segundoNumero = document.getElementById("segundoNumero").value;
    const resultadoNumeros = document.getElementById("resultadoNumeros");
    const operaciones = document.getElementById("operaciones");
  
    let suma = parseFloat(primerNumero) + parseFloat(segundoNumero);
    let resta = parseFloat(primerNumero) - parseFloat(segundoNumero);
    let multiplicacion = parseFloat(primerNumero) * parseFloat(segundoNumero);
    let division = parseFloat(primerNumero) / parseFloat(segundoNumero);
    let resultadoOperaciones = suma + resta + multiplicacion + division;
  
    operaciones.innerHTML = `${primerNumero} + ${segundoNumero} = ${suma} <br>
    ${primerNumero} - ${segundoNumero} = ${resta}<br>
    ${primerNumero} * ${segundoNumero} = ${multiplicacion}<br>
    ${primerNumero} / ${segundoNumero} = ${division}`;
  
    resultadoNumeros.innerHTML =
      "La suma de los resultados es : " + resultadoOperaciones;
  };
  /*EJERCICIO 4******************  */
  
  const invertir = () => {
    const ingresoTexto = document.getElementById("ingresoTexto").value;
    const resultadoInvertido = document.getElementById("resultadoInvertido");
  
    let resultado = ingresoTexto.split("").reverse().join("");
    console.log(ingresoTexto.split(""));
    console.log(ingresoTexto.split("").reverse());
    console.log(ingresoTexto.split("").reverse().join(""));
  
    resultadoInvertido.innerHTML = resultado;
  };