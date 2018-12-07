'use strict';

const user = document.querySelector('#user');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');


function getUsername() {
    const username = user.value;
    console.log(username);
    fetch(`https://api.github.com/users/${username}`)
     .then(response => response.json())
       .then(data => { 
           const name = data.name;
           name.split(' ');
           for(let i = 0; i<name.length; i++){
               if(name[i] === ' '){
                   i = name.length;
               }else{
                const letra = `<li>${name[i]}</li>`;
                list.innerHTML += letra;
               };
           };
        });
    };
        
btn.addEventListener('click', getUsername);
