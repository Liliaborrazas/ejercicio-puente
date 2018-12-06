'use strict';

const user = document.querySelector('#user');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');


function getUsername() {
    const username = user.value;
    console.log(username);
    fetch(`https://api.github.com/users/{username}`)
     .then(response => response.json())
       .then(data => { 
           list.innerHTML =`<li>data.name</li>` ;


       });

    
}

btn.addEventListener('click', getUsername)

// 2. Al hacer clic en el botón de buscar se debe:

// 1. Recoger el nick que haya escrito la usuaria en el campo
// 2. Componer la url para hacer la petición según indiquen en la documentación 
// de la API 
// 3. Hacer la petición
// 4. Acceder al nombre completo de la criatura
// 5. Seleccionar solo el nombre descartando los apellidos y espacios ﴾si los hubiese﴿
// 6. Escribir cada letra del nombre, por orden, en nuestra página usando una lista ordenada




// 3. Una vez echo esto podemos animarnos con los estilos para intentar acercarnos a la
//  propuesta gráfica que nos dan.
// Pistas que nos pueden ayudar en el camino
// Hay una serie de métodos que nos van a hacer la vida más fácil. Uno de ellos es 
// .split() aquí lo explican superbien. Ademas recordad que .length nos sirve tanto para arrays como para cadenas y que sabiendo la longitud de una cadena puedo acceder a cada uno de los caracteres como si fuese un array ﴾casi﴿.
// FAQ
// ¿Podemos hacerlo en grupos pequeños? Sí
// Bonus
// –Buah, esto es muy fácil, me lo he ventilado en naíca y me queda medio puente
//  todavía. ¿Qué hago?
// Venga, si alguien lo acaba todo y el código está indentado y ordenado como una
//  patena de las buenas podemos intentar controlar errores:
// Qué pasa si la usuaria no existe?
// Qué pasa si la usuaria no tiene puesto el nombre completo?
// Al turrrón!
//   Recordad que cuando programamos tenemos que huir de los casos específicos: esto
//    tiene que funcionar para cualquier usuario válido de GitHub.
    