// var x; /*Variable sin valor*/
// x = true; /*Reasignacion de variable*/

/*------------------------------------------- */
//--Crear varias variables solo con var
// var producto1 = 'computadora', disponible = false, categoria = "Zape";

/*------------------------------------------- */
//--Estilos para escribir variables
// var nombre_producto = "Monito 10"; //underscore
// var nombreProducto = "Monitor 9"; //Camelcase
// var NombreProducto = "Monitor 8"; // Pascal Case
//Esto se puede replicar con let
/*------------------------------------*/

//--Const
// const producto ="M 30"; //Mas usada
// const producto2 = String("M 40");
// const producto3 = new String("M 50");

// console.log(producto)
// console.log(producto2)
// console.log(typeof producto3)

/*--------------------------------------*/
//--Metodos para Strings
//Para ver que tan extenso es un texto (#de letras) - .lenght
// var x = "Javier Milei va a ser el mejor presidente de Argentina"
// console.log(x);
// console.log(x.length);

//Para encontrar una palabra, retorna la posicion - .indexof

// console.log(x.indexOf('Milei'));

//Para encontrar una palabara, retorna si es true o false-.includes

// console.log(x.includes('zapato'));  

// const n1 = 70;
// const n2 = 8;

// console.log(n1 % n2); //Evalua el residuo

//--Metodo con Math

// let resultado;
//     resultado = Math.round(2.5) //Redondea
//     resultado1 = Math.ceil(2.2)// Redondea pero siempre hacia arriba
//     resultado2 = Math.floor(2.3)//Redonde pero siempre hacia abajo
//     resultado3 = Math.sqrt(25)//Raiz cuadrada
//     resultado4 = Math.abs(-200)//De positivo a negativo
//     resultado5 = Math.min(-21,2,3,4,5,6,6,-90,6786)//Escoje el numero mas pequeno
//     resultado6 = Math.max(-21,2,3,4,5,6,6,-90,6786)//Escoje el numero mas grande
// console.log(resultado)
// console.log(resultado1)
// console.log(resultado2)
// console.log(resultado3)
// console.log(resultado4)
// console.log(resultado5)
// console.log(resultado6)

/*--------------------------------------------------*/

//--Orden de la operacion (tener en cuenta para operacion en la web)

// let res;
// res = (20+1)*8
// console.log(res)

//--Incrementos

// let puntaje = 20;
// puntaje++; //Suma de a 1 
// puntaje--; //Resta de a 1
// puntaje+2; //Suma de a 2
// console.log(puntaje)

/*------------------------------------------------------*/

//--Contatenacion

//const Nombre = "Juan Angel";
//const Apellido = "Triana Olarte";

//console.log( "Mi nombre es " + Nombre + " " + Apellido)

//Template SAtrings - String Literals

//console.log(`Mi nombre es ${Nombre} ${Apellido}`)

/*------------------------------------------------------- */

//--Booleans

// const boolean1 = true;
// const boolean2 = false;

// console.log(boolean1);
// console.log(boolean2);

/*------------------------------------------------------- */

//--Objects {}

//const Perro = {
//    Nombre: 'Simba',
//    Apellido: 'LaGasimba',
//    Edad: 6
//}

//Existen 3 formas de llamarlo

//1. Llamar el objeto

//console.log(Perro)

//2. Lamar cada propiedad del objeto

//console.log(Perro.Nombre)
//console.log(Perro.Apellido)
//console.log(Perro.Edad)

//3.LLamar cada propiedad de una fomra diferente

//console.log(Perro["Nombre"])

//--Add properties to an object

//Perro.color = "Gris";
//console.log(Perro)

//--Delete properties of an object

//delete Perro.Edad;
//console.log(Perro)

/*------------------------------------------------------- */

//--To create a variable by an object

// const Perro = {
//     Nombre: 'Simba',
//     Apellido: 'LaGasimba',
//     Edad: 6
// }

//Forma antigua
// const Nombre = Perro.Nombre;
// console.log(Nombre)

// const Nombre_y_apellido = `${Perro.Nombre} ${Perro.Apellido} ` ;
// console.log(Nombre_y_apellido)

//Forma nueva DESTRUCTING- Tener en cuenta que el nombre de la variable debe ser el mismo dentro del objeto
// const {Nombre} = Perro;
// console.log(Nombre)

/*------------------------------------------------------- */

//--Methods Objects

// Object.freeze(Objectname); //Hace que no se pueda ni borrar ni agregar nada dentro de un objeto. Que ese congelado.
// Object.isFrozen(Objectname); //Saber si esta o no en freeze

// Object.seal(Objectname); //No se puede agregar o eliminar pero si cambiar
// Object.isSealed(Objectname); //Saber si esta o no en Seal

/*------------------------------------------------------- */

//--Unir las propiedadesd de dos objectos sin modificarlos

//   let Vaselina = {
//       Ingrediente1: 'Petroleo',
//       Ingrediente2: 'Crema'
//   }

//   const Perfume = {
//     Olor: 'Gardenia',
//       Precio: '$100',
//   }


// const Vasefume = {...Vaselina, ...Perfume}

// console.log(Vaselina)
// console.log(Perfume)
//  console.log(Vasefume)

/*------------------------------------------------------- */

//--Arrays []

// let array = ['Hola Mundo', true, false, null, {yo : {Nombre: 'Juan', Apellido:'Triana'}}, [1,2,3]]


//--Acceder a un Array

// console.log(array[0])

//--Acceder a un Array y a un objeto

// console.log(array[4].yo.Nombre)

//--Acceder a todos los arrays

// array.forEach(function(Arrays){
//     console.log(Arrays)
// })

//--Agregar un array que no este dentro los especificados antes - No es muy comun ya que si le pongo una posicion ya existente lo reescribira

// array[6] = 10;

//--Agrega al final o al incio, sin importar la canitdad, lo recomendando es no cambiar los arrays, por esto esta perdiendo su uso

// array.push(60);  //Agrega al incio
// array.push(70,80,90); //Agrega al incio

//array.unshit(1,2,3,4); //Agrega al final

//--Eliminar el primero, el ultimo o uno especifico

//array.pop(); //Elimina el utlimo
//array.shift(); //Elimina el primero
//array.splice(2, 1); //Tener en cuenta que el primer digito dentro del parentesis es, que elemnto quiere elminar basado en el indice, el segundo es cuantos quieres eliminar apartir de ese
                 //Elimina el ultimo

//--Crear un nuevo arreglo pero con los mismo datos - Rest Operator  o Spread Operator

// const newArra = [...array,  20] //Agrega al final
// const newArray = [20, ...array] //Agrega al incio

// console.table(newArray)

/*------------------------------------------------------- */

//--Array's Methods

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

//--Saber si hay alguno de los que se indique dentro del arreglo - forEach

// meses.forEach(function(mes){
//     if(mes == 'Mayo'){
//         console.log('Marzo si esta')
//     }
    
// })

//--Saber si hay alguno de los que se indique dentro del arreglo - Includes - Funaciona bien sin objetos

// const resultado = meses.includes('Marzo');
// console.log(resultado)

//--Si hay objetos se puede utilizar - Some

// let shop = [
//     { Producto: 'Cafe', Precio: 10},
//     { Producto: 'Pan', Precio: 40},
//     { Producto: 'Chocolate', Precio: 50},
//     { Producto: 'Te', Precio: 60}
// ]

// resu = shop.some(function(Comida){
//     return Comida.Producto == 'Te'
// })

// console.log(resu)

//--Reduce - Sumar

// res = shop.reduce(function(Total, Producto, Precio){
//     return   Total + Producto.Precio
// }, 0)

// console.log(res)

//--    Filter Obtener objetos o elementos 

// let res = shop.filter(function(Producto){
//     return Producto.Precio > 50
// },0)

// console.log(res)


/*------------------------------------------------------- */

//--Declare a function  //With this make sense to tghe object

//  function Hola(){
//  	console.log(10 + 10)
//  }

// Hola() //Call it

//--Expression of a function - This is taken like a variable, for that reason if you call it before the function it will give you error  

// const sum = function(){
//     console.log(6 + 3);
// }

// sum();

//--IIFE - Those ones doesn't need be called bc they call their self - prevent that the file read functions of teh another file   

// (function() {
//     console.log('Esta es una funcion que no necesita llamarse por que se invocan a si misma') 
// })(); 

//--Parts of a function

// function sumar(num1, num2){ // num1 and num2 are parameters
//     console.log(num1 + num2)
// }
// sumar(); //Argument or real values
// sumar( 3, 6);

//Example

// function txt(name = 0, wel = 'Welcome', ba = "Back", sir = 'Sr', ){
//     console.log(  name + ` ${wel} ${ba} ${sir}`)
// }
// txt('Angel')

//--Exist some cases that the function and the methods are similar, but u must know hen you could use each one for example

// console.log( parseInt(numero2) ); //This one is a function
// console.log( numero1.toString() ); //This one is a method
//How could i recognize each one? A method is who has a point and the method's name

//--functions using return 

// function sumar(n1, n2){
//     return n1 + n2
// };

// const re = sumar(2, 3);
// console.log(re)

// const resu = (re * 2);
// console.log(resu)

//example

// let Suma = 0;
// let txt = 'Su total a pagar es:'

// function Carrito(precio){
//     return   Suma += precio
// }

// Suma = Carrito(10);
// Suma = Carrito(100);
// Suma = Carrito(90);

// function Impuesto(Suma){
//     return 0.15 * Suma;
// }


// console.log(txt +" "+ '$'+Suma)

// const SubTotal = Impuesto(Suma);

// let text = 'Su total a pagar es: ';

// function Total(){
//     console.log( txt +' '+ (Suma - SubTotal))
// }

// Total()

/*------------------------------------------------------- */

//--Propertie Methods

// const mp3 = {
//     reproducir : function(Num){
//         console.log(`Cancion numero ${Num} Sonando`)
//     },

//     pause : function(Num){
//         console.log(`La cancion numero ${Num} esta pausada`)
//     },

//     NewPlaylist : function(Playlist){
//         console.log(`Nueva playlist: ${Playlist}`)
//     },

//     reproducirCan : function(Playlist, Num){
//         console.log(`Cancion numero ${Num} de la Playlist - ${Playlist} Sonando...`)
//     },

// }

//-Add function outside the main const

// mp3.Reanundar = function(Num){
//     console.log(`Reanudando la cancion numero ${Num}`)
// }

// mp3.reproducir(20)
// mp3.pause(20)
// mp3.Reanundar(20)
// mp3.NewPlaylist('God')
// mp3.reproducirCan('God', 20)

/*-------------------------------------------------------*/

//--Arrow Functions
//It works same as a function, altought it use =>, with this = Undefined .Like it:
// const sum = (num1, num2) =>{
//     console.log(num1+num2)
// }



//It might be works too without the {} .Like it: 

// const sum = (num1, num2) => console.log(num1+num2);  //But it works only if there is only one line       
// sum(200000, 200000)

//The sintaxis is

//var name = (Parameters) => { }

//  const mp3 = (Num => {
//     reproducir : {
//      console.log(`Cancion numero ${Num} Sonando`)
//     console.log(`Hi, ${Num}`)}
// } )

// mp3(20)
// mp3.Reanudar = (Parar => {
//     console.log(`Su cancion ${Parar}`)
// });

// mp3.Reanudar('Esta parada');

/*-------------------------------------------------------*/

//--If & Else
//The If's structure is: 
//if () {}. Now, If the parameter into () is ok, the stuff into {} will work

// const Num = 40;
// if(Num === 40){
//     console.log('Su numero es valido')
// }else{
//     console.log('Su numero no es valido')
// }

// Link Example

// let Resultado = 40;

// const Aceptado = (Uni => {
//     if( Resultado >= 450){
//         console.log(`You are into ${Uni}`)
//     }else{                                      //Else is there if the "If" isn't right, will apear else 
//         console.log(`You hadn't been accepted` )
//     }
// });

// Aceptado('Harvard')

//-Else if () {}
//Used for give other condition

// let Pasaporte = 'No';
// let Visa = 'No';


// if ( Pasaporte === 'Si' ){
//     console.log('Puede entrar al pais')
// }else if(Visa === 'Si'){
//     console.log('Puede entrar al pais')
// }else{
//     console.log('No puede ingresar al pais')
// }

//-Operadores
// === - Estricto, revisa que sea la variable y el tipo
// == - Revisa la variable
// !== - Diferente a la variable
// < & > Mayor y menor que 

/*-------------------------------------------------------*/

//--Swicht
//-Sintaxix:
//switch(Varibable's name){}
//case (Parameter): To do ; Break; //It is life a if or else if
//default: to do; break:    //If any case is ok, it will be appear. It is like a else

// const Pago = 'Tarjeta';

// switch(Pago) {
//     case('Tarjeta'):
//         console.log('Are you sure to pay with target?'); break;
//     case('Efectivo'):
//     console.log('Are you sure to pay with cash?'); break;
//     default:
//         console.log(`You don't already pay:`); break;
// }

/*-------------------------------------------------------*/
//--For loop - While Loop - Do while Loop
//While vs Do While
//El While, revisa y luego ejecuta
//El Do while, ejecuta al menos una vez y luego revisa
//-For Loop

//  for( let i = 0; i < 5; i++ ) { //(INDICE) {CONDICION}
//      console.log(i);
// }

//Example #pares

// for( let i = 1; i < 10; i++ ) {
//     if( i % 2 === 0 ){
//         console.log(i)
//     } 
// }

//#Impares

// for( let i = 1; i < 10; i++ ) {
//     if( i % 2 === 0 ){
//     } else{
//         console.log(i)
//     }
// }

//-While Loop

// let a = 0; //Indice
    
// while( a < 10 )//Condicion
// { 
//     console.log(a)
//     a++;
// }

//Do while Loop

// let a = 100;

// do{
//     console.log(a);

//     a++;
// } while(a < 10);


/*-------------------------------------------------------*/
//--Exclusive methods of arrays
//-ForEach & map //Se ejecuta el numero de vez que hay en casa elemento
// ForEach vs map
//ForEach - When you want show the elemtns on an array or simply send it to the console- Just for SHOW
// map - If you want to create a new array - Create a new array
//ForEach
//name.ForEach (*parameter*) => console.log(To show);
//map
//name.map (*parameter*) => console.log(To show);

/*-------------------------------------------------------*/
//--This 
//- Refer to the object over that is call a function
// const res = {
//     Nombre: 'Juan',
//     Habitacion: '4',
//     Total: '$100',
//     infor : function(){
//         console.log(`${this.Nombre} de la habitacion ${this.Habitacion} debe ${this.Total}`)
//     } 
// }

// res.infor()

/*-------------------------------------------------------*/
//--POO - Prototype

//-Object Literal
// const Coofe = {
//     Milk : "Entera",
//     Cost : '$500',
//     Size : "Medium"
// }

//-Object Constructor 
//Class is a way where you can stock data what an object has

// function Coffeshop(leche, precio){
//     this.leche = leche;
//     this.precio = precio;
// }

// const Yanuba = new Coffeshop("Deslactosada", 40);
// const JV = new Coffeshop('Entera', 70)

// console.log(Yanuba)
// console.log(JV)

//Example

// const Producto = {
//     leche : "Deslactosada",
//     precio: '$500'
// }

// function fProducto(Producto){
//     return `La leche es ${Producto.leche} y el precio es ${Producto.precio}`
// }

// console.log(FormProducto(producto))


//-Prototype is a function relationship with a type of object
// In other words. Make functions that just is used on a specific object
//This one ios the old version, so don worry if is difficult for you

// function cliente(nombre, Apellido){
//     this.nombre = nombre,
//     this.Apellido = Apellido
// }

// const User = new cliente("Juan", "Triana")

// cliente.prototype.FormatearCliente = function(){
//     return `El nombre es ${this.nombre} y su apellido ${this.Apellido}`
// }

// console.log(User.FormatearCliente())


/*-------------------------------------------------------*/
//--Class
//The name of the classes should be appear in capital letters
//-Sintaxis
//class NAME {}.

// class TIENDA {
//     constructor(Name, Cost, Size){ // Construsctor is used to declare parameters
//         this.Name = Name,
//         this.Cost = Cost,
//         this.Size = Size
//     }

//     LinkTIENDA(){
//         return `It is a ${this.Name}, it cost ${this.Cost} and the dimensions are ${this.Size}`
//     }
// }

// class RESTAURANT extends TIENDA { //extendes is used like a herency for something
//     constructor(Name, Cost){
//     super(Name, Cost)} //Copy or use a function already declared

//     LinkRESTAURANT(){
//         return `It is a ${this.Name}, it cost ${this.Cost}`
//     }
// }

// const Producto1 = new TIENDA("TV", "$200", "20x40")
// const Producto2 = new TIENDA("Smartphone", "$150", "2x4")
// const Producto3 = new TIENDA("Headphones", "$100", "8x0")
// const Producto4 = new TIENDA("Power bank", "$80", "2x6")

// const Foot1 = new RESTAURANT("meat", "$300")
// const Foot2 = new RESTAURANT("rice", "$200")
// const Foot3 = new RESTAURANT("potatoes", "$250")

// console.log(Producto1)
// console.log(Producto2)
// console.log(Producto3)
// console.log(Producto4)
// console.log(Producto1.LinkTIENDA())
// console.log(Producto2.LinkTIENDA())
// console.log(Producto3.LinkTIENDA())
// console.log(Producto4.LinkTIENDA())
// console.log(Foot1.LinkRESTAURANT())
// console.log(Foot2.LinkRESTAURANT())
// console.log(Foot3.LinkRESTAURANT())

/*-------------------------------------------------------*/
//Trycatch -It is for errors that you need to know or the user need know
//Like that a pay didn't was complete, or something like that

// const numero1 = 20;
// const numero3 = 30;

//  try {
//      //Code that must check
//      console.log(numero2);
//  } catch (error) {
//      console.log(error);
// }

// console.log(numero1)
// console.log(numero2)
// console.log(numero3)

/*-------------------------------------------------------*/
//Promises are values that will be, are or never be avalible
//Exist 3 types of promises
//Pending: Waiting...
//Fulfield: Completed.
//Refejcted: Not accepted.

// const UsurarioAutenticado = new Promise((resolve, reject ) => {
//     const aut = false;

//     if(aut){
//         resolve('Bienvenido a...')
//     }else{
//         reject('Vuelve a intentarlo')
//     }
// });

// console.log(UsurarioAutenticado) //Console show Fulfield, bc the if is right        

//-.then for resolve
//-.Cathc for reject

// UsurarioAutenticado
// .then((resultado) => console.log(resultado))
// .catch((error) => console.log(error))


/*-------------------------------------------------------*/

//-Notificacion Api

// const boton = document.querySelector('#boton'); //Link with html

// boton.addEventListener('click', () => { //Method to give a notification
//     Notification.requestPermission()
//         .then( resultado => {
//             console.log(`El resultado es: ${resultado}`)})
            
// });

// if(Notification.permission == 'granted') {    //Enviar notifiaciones
//     new Notification('Esta es una notifiacion', {
//         icon: 'descarga.avif',    //Add logotypes
//         body:  'Imagen cualquiera'     //Texto              
//     })
// }

/*-------------------------------------------------------*/
//--Async / Await    //Then the certain time what we did put there, the code will be showed in console
//  function descargarUsuariosNuevos() {
//      return new Promise( resolve => {
//          console.log('Descargando Cliente...');

//         setTimeout(() => {
//             resolve('Listo')
//         }, 4000)
//      })
//  }

//  async function app(){ try {   //Async
//     const resultado = await descargarUsuariosNuevos(); //Await  //Este codigo va dar paso para que el de abajo se haga
//     console.log(resultado)  //Este codigo se va a ejectuar hasta que el de arriba se halla completado
//  } catch (error) {
//     console.log(error)
//  }}

//  app()

//-2 consultas

// function descargarUltimosPedidos(){
//     return new Promise ( resolve => {
//         console.log('Descargando pedidos... Espere...');

//     setTimeout(() =>{
//         resolve('Los pedidos fueron Decargados con exito')
//     },3000)    

//     })
// }


// function descargarUltimosClientes(){
//     return new Promise ( resolve => {
//         console.log('Descargando Clientes... Espere...');

//     setTimeout(() =>{
//         resolve('Los Clientes fueron Decargados con exito')
//     },3000)    

//     })
// }

// function descargarUltimosEnvios(){
//     return new Promise ( resolve => {
//         console.log('Descargando Envios... Espere...');

//     setTimeout(() =>{
//         resolve('Los Envios fueron Decargados con exito')
//     },3000)    

//     })
// }

// async function app() {
//     try {
//         const resultado = await Promise.all([
//             descargarUltimosPedidos(),
//             descargarUltimosClientes(),
//             descargarUltimosEnvios()])
        
//         console.log(resultado) //Like an array
//         console.log(resultado[0]) // Nomral console
//         console.log(resultado[1]) // Nomral console
//         console.log(resultado[2]) // Nomral console

//     } catch (error) {
//         console.log(error)}
// }

// app()



// setTimeout( function(){   //5000 = 5 seconds      //Show something after that time
//     console.log('5 secondw..')
// }, 5000)

// setInterval( function(){   //3000 = 3 seconds      //Show it in intervals of that time
//     console.log('3 seconds..')
// }, 3000)

/*-------------------------------------------------------*/

//--Fetch API - Reemplazo a Ajax (XMLHttpRequest)
//Allow get send and get info of an server. For what? 
// It make that is not neccessaryly refresh the web page
//Consulta en bases de datos, solo en formato JSON (JavaScript Object Notation)
//JSON could be created in any programer language and uses in JS thorugh the Fetch API 

// function obtenerEmpleados() {
//     const archivoEmpleados = 'empleados.json';

//     fetch(archivoEmpleados)                       //Get API, de lo que sea
//         .then(resultado => {                        
//             return resultado.json();
//         })
//         .then( datos => {
//             console.log(datos.empleados)       //1 option

//             const {empleados} = datos          //2 option
//             console.log(empleados)                        
            
//             empleados.forEach(empleado => {
//                 console.log(empleado)           //Array
//                 console.log(empleado.id)        //Id del Array
//                 console.log(empleado.nombre)    //nombre del Array
//                 console.log(empleado.puesto)    //Puesto del Array

//                 document.querySelector('.contenido').textContent = empleado.nombre; //To show in the html
//             });

//         })
// }

// obtenerEmpleados()

//-Fetch with async / await

// async function obtenerEmpleados() {
//     const archivoEmpleados = 'empleados.json';

//     const resultado = await fetch(archivoEmpleados)
//     const datos = await resultado.json()
//     console.log(datos)
// }

// obtenerEmpleados()
