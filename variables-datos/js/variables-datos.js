// Ejercicio para esta sesion
  
 /** Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 */ 
//number 
 
 var numeroCasa = 19;
 var edadIngrid = 27;
 const numeroCohorte = 32;
 var numeroDepartamento = 17;
 var numeroEdificio = 9;
 var numeroPuerta = 15;
 var numeroMascotas = 1;
 var numeroPrimos = 20;
 var tacosComidosSeptiemre = 10;
 var seguidoresInstagram = 500;
 
// string
 const NOMBRE_DE_ALUMNO = "Ingrid Sanchez";
 let nombreCalle = "Tulipanes";
 let numeroCasa = '19' // Solo lo puse para poder convertirlo a NUMBER en el último ejercicio
 let correoAlumno = "generico123@dominio.com";
 let nombreMascota = "Pelos";
 let nombreMadre = "Fernanda";
 let nombreMentor = "Yareri";
 let nombreInstructor = "Fernando";
 let marcaComputadora = "Mac";
 let marcaCelular = "Huawei";
 let appFavorita = "Spotify";


//boolean

 var sexoFemenino = true;
 var sexoMasculino = false;
 var residenciaCDMX = true;
 var residenciaGualajara = false;
 var estudiante = true;
 var trabajador = false;
 var mayorDeEdad = true;
 var casado = false;
 var inscritoBootcamp = true;
 var reprobado = false;
 

 /** Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 */


 // Suma
 var suma = numeroMascotas + numeroPrimos;
 console.log("Suma:", suma);

 // Resta
 var resta = numeroDepartamento - numeroPuerta;
 console.log("Resta:", resta);

 // Multiplicación
 var multiplicacion = seguidoresInstagram * 10;
 console.log("Multiplicación:", multiplicacion);

 // División
 var division = tacosComidosSeptiemre / 29;
 console.log("División:", division);


 /** Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 */

 // Mensaje 1
  let hola = "Hola";
  let mundo = "Mundo"
  
  let saludo = hola + mundo;

  // Mensaje 2
  let mi = "mi";
  let nombre = "nombre";
  let es = "es";
  let ingrid = "Ingrid"

  let miNombre = mi + nombre + es + ingrid

  // Mensaje 3
  let bienvenido = "Bienvenido";
  let a = "a";
  let laCiudadDeMexico = "la Ciudad de Mexico"

  let bienvenidoCDMX = bienvenido + a + laCiudadDeMexico 

  // Mensaje 4
  let ya = "Ya";
  let casi = "casi";
  let esViernes = "es Viernes"
  
  let yaCasi = ya + casi + esViernes

   // Mensaje 5
   let estamos = "estamos";
   let en = "en";
   let laSemana = "la Semana";
   let cinco = "cinco"

   let semanaBootCamp = estamos + en + laSemana + cinco



 /** Declarar 5 variables y convertirlas a otro tipo de dato
 * 
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */
 
 let numeroDeMiCasa = Number(numeroCasa);
 let tacosComidosEnSeptiemre = String(tacosComidosSeptiemre)
 let misSeguidores = String(seguidoresInstagram)
 let miCasa = Number(numeroCasa)
 let numeroDeMisPrimeros = String(numeroPrimos)