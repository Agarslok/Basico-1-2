//-Order to get a organize code

//1- Values
//2- Events
//3- functions

//--querySelector  
//-You call the labels like CSS
//-Important, querySelector returns 0 or 1 elements


// const H3 = document.querySelector('h3')
// console.log(H3)

// const p = document.querySelector('.header__texto p')
// console.log(p)

//-Also, you can modifi anything

// const H3 = document.querySelector('H3')
// H3.textContent = ('SAPE')

//--querySlectorAll
//-You call the labels like CSS
//--Important, querySelector returns 0 or to all elemts that has the same name

// const links = document.querySelectorAll('.navegacion a') 
// console.log(links)  //return all the a
// console.log(links[2]) //return just de third a

//--getElementById
//-Is old, and similar to the 

// const heading2 = document.getElementById('heading');
// console.log(heading2)

/*-------------------------------------------------------*/
//--To create html code with JS

// const nuevoEnlace = document.createElement('A') //The label must be wirte in Capital letters
//-Now the order doesn't matter

// Add href

// nuevoEnlace.href = 'nuevo-enlace.html'

//add text

// nuevoEnlace.textContent = 'Nuevo Enlace'

//add class

// nuevoEnlace.classList.add('navegacion__enlace')

//add to the main document (index.html)

// console.log(nuevoEnlace)

/*-------------------------------------------------------*/

//E--vents  Javascript
//-Is used addEvenListener, and the code after that, will be work
//-addEvenListener is a method
//-The method addEvenListener is called 'Callbacks'

 /*console.log(2)*/

//-Window is the global document, even Document is into Window

 /*window.addEventListener('load', function () { //'load' wait until the window is ready including file JS and the hole HTML
     console.log(4)
 })  

 console.log(6)
 console.log(8)*/

//-Other way to get it

 /*console.log(2)

 window.onload = ( () => {
     console.log(4)
 });

 console.log(6)
 console.log(8)*/

//-DOMContentLoaded

/* document.addEventListener('DOMContentLoaded', function () { //DOMContentLoaded, just wait for HTML, but no for Css, and so on...
     console.log(20)
 });*/

//--Select elemetns and associate an event

//  const BotonEnviar = document.querySelector('.boton--primario')
//  BotonEnviar.addEventListener('click', function(evento){
//      evento.preventDefault(); //It don't recharge the page when the event is cumpled
//      console.log('Enviando...');
//  });

//-Event of Inputs and textarea

/* const Name = document.querySelector('#nombre')
 Name.addEventListener('change', function(){ //Change, when the event must be work when the actions had already been done
     console.log('Escribiendo...')
 }) */ 


/* const Name = document.querySelector('#nombre')
 const Email = document.querySelector('#email')
 const Msj = document.querySelector('#mensaje')

 Name.addEventListener ('input', function(){ //Input, Is in real time
     console.log('Escribiendo...')
 })

 Email.addEventListener ('input', function(){ //Input, Is in real time
     console.log('Escribiendo...')
 })

 Msj.addEventListener ('input', function(){ //Input, Is in real time
     console.log('Escribiendo...')
 }) */

//-or


/* const Name = document.querySelector('#nombre')
 const Email = document.querySelector('#email')
 const Msj = document.querySelector('#mensaje')

 Name.addEventListener  ('input', LeerTexto);
 Email.addEventListener ('input', LeerTexto);
 Msj.addEventListener ('input', LeerTexto);

 function LeerTexto (){
     console.log('Escribiendo...')
 } */

//-Store what is writting the user

/* const datos = { 
    nombre : '',     
    email : '',
    mensaje: ''
}

const Name = document.querySelector('#nombre')
const Email = document.querySelector('#email')
const Msj = document.querySelector('#mensaje')

Name.addEventListener  ('input', LeerTexto);
Email.addEventListener ('input', LeerTexto);
Msj.addEventListener ('input', LeerTexto);
 function LeerTexto(e) {
    datos[e.target.id] = e.target.value;  //Technique for use in hole forms     
    console.log(datos)
} */

//-Submit - For all forms
//-Difference between Submit and link
//-Submit is for all fomrs, specially for send it to the data-base 
//-Link is associated to a botton, and just it
/*const SubmitBoton = document.querySelector('.formulario');  //You must take the hole class, bc a type you can't link it here
SubmitBoton.addEventListener('submit', function(event){
    event.preventDefault();
})*/

/*-------------------------------------------------------*/
//-How put an text when a event is compleated

//-Object
/*const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

//-Values
const Nombre = document.querySelector('#nombre')
const Email = document.querySelector('#email')
const Mensaje = document.querySelector('#mensaje')
const SubmitBoton = document.querySelector('.formulario'); //You must take the hole class, bc a type you can't link it here
const worng = 'Some fields are empty, all fields are mandatory fields'
const rigth = ' Form was send';

//-Events
Nombre.addEventListener('input', LeerTexto)
Email.addEventListener('input', LeerTexto)
Mensaje.addEventListener('input', LeerTexto)
SubmitBoton.addEventListener('submit', Event)

//-Link the object (Datos with input )
function LeerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos)
}

//-Function to get the text when is correct and when is not
function Event(e){
    e.preventDefault();
    //-Validate form

    const {nombre, email, mensaje} = datos
    if(nombre, email, mensaje === ''){

        function ShowWrong(){
            const error = document.createElement('P');
            error.textContent = outcome;
            error.classList.add('error');
        
            SubmitBoton.appendChild(error)
        
            //Disappear 
            setTimeout(()=>{
                error.remove()
            },3000);
            
            
        }
        ShowWrong();
        return;
        
    }
    function ShowRigth(){
        const listo = document.createElement('P');
        listo.textContent = rigth;
        listo.classList.add('correcto')
        SubmitBoton.appendChild(listo)
        

        setTimeout(() => {
            listo.remove()
        },3000);
    }
    ShowRigth()
}*/

//-Abbreviate

/*const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

//-Values
const Nombre = document.querySelector('#nombre')
const Email = document.querySelector('#email')
const Mensaje = document.querySelector('#mensaje')
const SubmitBoton = document.querySelector('.formulario'); //You must take the hole class, bc a type you can't link it here

//-Events
Nombre.addEventListener('input', LeerTexto)
Email.addEventListener('input', LeerTexto)
Mensaje.addEventListener('input', LeerTexto)
SubmitBoton.addEventListener('submit', Event)

//-Link the object (Datos with input )
function LeerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos)
}

//-Function to get the text when is correct and when is not

function Event(e){
    e.preventDefault();
    //-Validate form
    const {nombre, email, mensaje} = datos
    if(nombre, email, mensaje === ''){
        ShowAlert('Some fields are empty, all fields are mandatory fields', true )
        return;
    }
    ShowAlert('Form was send')
}

function ShowAlert(right, Wrong = false){
    let Alert = document.createElement('P')
    Alert.textContent = right;
    
    if(Wrong){
        Alert.classList.add('error')
    }else{
        Alert.classList.add('correcto')
    }
    SubmitBoton.appendChild(Alert)

    
    SubmitBoton.reset(setTimeout(()=>{
        Alert.remove()
    },3000))
}*/









 





    
