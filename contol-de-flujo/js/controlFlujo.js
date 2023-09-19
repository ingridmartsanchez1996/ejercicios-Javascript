/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function edadVotar(edad){
    if(edad >= 18){
        console.log("Puedes votar")
    } else {
        console.log("No tienes edad para votar")
    }  
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

 function calcularCalificaciones(cal1, cal2, cal3, cal4){
    let promedio = (cal1 + cal2 + cal3 + cal4) /4;

    if(promedio >= 7){
        console.log("Aprobado")
    } else {
        console.log("Reprobado")
    }  
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Colocar calificaciones de manera que vayan del 0 al 10
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function numeroDivisiblePor7y8(numero){
    // Para que el numero sea divisible entre 7 y 8, el residuo debe ser 0
    if(numero % 7 == 0 && numero % 8 == 0){
        return true;
    } else {
        return false;
    }  
}

/**let numero = 56

if(numeroDivisiblePor7y8(numero)) {
    console.log(numero + " es divisible por 7 y 8");
    } else {
        console.log(numero + " no es divisible entre 7 y 8")
    }
*/


/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function numeroDivisiblePor4y9(numero){
    // Para el numero ser divisible entre 4 y 9, el residuo debe ser 0
    if(numero % 4 == 0 && numero % 9 == 0){
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }  
}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadora(operacion, numero1, numero2){
    let resultado;

    switch(operacion){
         case 1:
            resultado = numero1 + numero2;
            console.log("Suma:", resultado);
            break;
         case 2:
            resultado = numero1 - numero2;
            console.log("Resta:", resultado);
            break;
         case 3:
            resultado = numero1 * numero2;
            console.log("Multiplicacion:", resultado);
            break;
         case 4:
            // Para comprobar que numero 2 sea diferente a 0 y se pueda hacer la division
            if (numero2 !== 0){
                resultado = numero1 / numero2;
                console.log("Division:", resultado);
            } else {
                console.log("No se puede dividir por cero.");
            }
            break;
         default:
            console.log("No puedo hacer esa operacion")
            break;
    }
    }

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */


function recomendarPelicula(categoria){
    // Para convertir la entrada del usuario a minúsculas antes de evaluarla en el switch
    switch (categoria.toLowerCase()) {
      case "accion":
        console.log("Recomendación de película de acción: Busqueda implacable");
        break;
  
      case "drama":
        console.log("Recomendación de película de drama: La La Land");
        break;
  
      case "comedia":
        console.log("Recomendación de película de comedia: Son como niños");
        break;
  
      case "romance":
        console.log("Recomendación de película de romance: Love at first sight");
        break;
  
      case "suspenso":
        console.log("Recomendación de película de suspenso: Dont worry darling");
        break;
  
      case "terror":
        console.log("Recomendación de película de terror: La monja");
        break;
  
      default:
        console.log("Categoría no válida");
        break;
    }
  }

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */

function cajeroATM(opcion){
    switch (opcion){
      case 1:
        console.log("Opción seleccionada: Retirar dinero");
        break;
  
      case 2:
        console.log("Opción seleccionada: Transferencia");
        break;
  
      case 3:
        console.log("Opción seleccionada: Depósito");
        break;
  
      case 4:
        console.log("Opción seleccionada: Pago de servicios");
        break;
  
      default:
        console.log("Opción no válida.");
        break;
    }
  }

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 */
  

function convertirDivisa(cantidadEnPesos, opcion) {
    switch (opcion) {
      case 1:
        var dolares = cantidadEnPesos / 17.08; // Tasa de cambio a dólares estadounidenses
        console.log(cantidadEnPesos + " pesos mexicanos equivalen a aproximadamente " + dolares.toFixed(2) + " dólares estadounidenses."); 
        //.toFixed(2) para que el resultado tenga dos decimales
        break;
  
      case 2:
        var euros = cantidadEnPesos / 18.24; // Tasa de cambio a euros
        console.log(cantidadEnPesos + " pesos mexicanos equivalen a aproximadamente " + euros.toFixed(2) + " euros.");
        break;
  
      case 3:
        var yenes = cantidadEnPesos / 0.12; // Tasa de cambio aproximada a yenes japoneses
        console.log(cantidadEnPesos + " pesos mexicanos equivalen a aproximadamente " + yenes.toFixed(2) + " yenes japoneses.");
        break;
  
      case 4:
        var libras = cantidadEnPesos / 21.17; // Tasa de cambio aproximada a libras esterlinas
        console.log(cantidadEnPesos + " pesos mexicanos equivalen a aproximadamente " + libras.toFixed(2) + " libras esterlinas.");
        break;
  
      case 5:
        var francos = cantidadEnPesos / 19.02; // Tasa de cambio aproximada a francos suizos
        console.log(cantidadEnPesos + " pesos mexicanos equivalen a aproximadamente " + francos.toFixed(2) + " francos suizos.");
        break;
  
      default:
        console.log("Opción no válida.");
        break;
    }
  }

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

function aplicarCodigoDescuento(precioProducto, codigoDescuento) {
    
    var codigoValido = "DESCUENTO10";
    
    if (codigoDescuento === codigoValido) {
      var precioConDescuento = precioProducto * 0.9; // 10% de descuento
      
      console.log("Precio original: $" + precioProducto.toFixed(2));
      console.log("Descuento aplicado: 10%");
      console.log("Precio con descuento: $" + precioConDescuento.toFixed(2));
     } else {
      console.log("Introduce un código de descuento o tarjeta de regalo válido");
    }
  }

  
  

  
  

  

  
  

  
  
  










