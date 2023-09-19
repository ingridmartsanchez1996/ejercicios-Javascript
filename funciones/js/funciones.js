// **Ejercicios para esta sesion
 
 // * Declara una funcion para cada problema planteado:
 
 // * calcular el perimetro de un circulo
 
 /**
  * Necesitamos el radio del circulo
  * 
  * Expresion matematica que resuelve
  * p = 2 * pi * r
  */
 // Funcion con nombre
 function calcularPerimetroCirculo (radio){
    let perimetro = 2*3.1416*radio
    return `El perimetro calculado es de: ${perimetro} cm`;
 }

 // Funcion con flecha
 const perimetroCirculo = (radio) => perimetro = 2*3.1416*radio


 // * calcular el area de un rectangulo
 /**
  * Necesitamos el area de un rectangulo
  * 
  * Expresion matematica que resuelve
  * a = base * altura
  */
 // Funcion con nombre
 function calcularAreaRectangulo (base, altura){
    let areaRectangulo = base*altura
    console.log("El area del rectangulo es de: " + areaRectangulo)
 }

 // Funcion con flecha
 const areaRectangulo = (base, altura) => area = base*altura

 // * calcular el cuadrado de un numero
 // Funcion con nombre
 function calcularCuadradoNumero (numero){
    let cuadradoNumero = numero**2
    return `El cuadrado del numero es de: ${cuadradoNumero}`
 }
 
 // Funcion con flecha
 const cuadradoNumero = (numero) => cuadradoNum = numero**2

 // * calcular la conversion de grados celsius a farenheit

 // Funcion con nombre
 function calcularGradosFarenheit (gradosCelcius){
    let gradosFarenheit = 9/5 * gradosCelcius + 32
    console.log(gradosFarenheit)
 }

 // Funcion con flecha
 const calcularGradosFarenheint = (gradosCelcius) => gradosFarenheit = 9/5 * gradosCelcius + 32

 // * calcular el valor del voltaje dadas la resistencia y la corriente
 /**
  * Necesitamos la corriente y la resistencia para calcular el voltaje
  * 
  * Expresion matematica que resuelve
  * V = Corriente * Resistencia
  */
  // Funcion con nombre
  function calcularVoltaje (resistencia, corriente){
    let voltaje = resistencia*corriente
    console.log("El voltaje es de: " + voltaje)
  }

  // Funcion con flecha
 const calcularVoltaje = (resistencia, corriente) => voltaje = resistencia*corriente


 // * calcular el volumen de una esfera
 /**
  * Necesitamos el radio de la esfera
  * 
  * Expresion matematica que resuelve
  * V = 4/3 * pi * r^3
  */
  // Funcion con nombre
  function calcularVolumenEsfera (radio){
    let volumenEsfera = 4/3 * 3.1416 * radio**3
    console.log("El volumen de la esfera es de: " + volumenEsfera)
  }

  // Funcion con flecha
  const calcularVolumenEsfera = (radio) => volumenEsfera = 4/3 * 3.1416 * radio**3

 /**  CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */