'use client'; 
import React from 'react';
import Ejercicio1 from 'Greeting.js';
import Ejercicio2 from'Card.js';
import Ejercicio3 from 'Counter.js';
import Ejercicio4 from 'Product.js'
import Ejercicio5 from 'UserCard.js';
import Ejercicio6 from 'Parent.js';
import Ejercicio7 from 'ToggleSwitch.js';
import Ejercicio8 from 'ToDoList.js';
import Ejercicio9 from 'Counter2.js';
import Ejercicio10 from 'LoginControl.js';
import Ejercicio11 from 'ProductStock.js';
import Ejercicio12 from 'ContactForm.js';
import Ejercicio13 from 'ShoppingList.js';
import Ejercicio14 from 'Dropdown.js';
import Ejercicio15 from 'ImageGallery.js';


const usuarios = [
  { name: 'Juan Pérez', email: 'juan@example.com', username: 'juanperez' },
  { name: 'Ana Gómez', email: 'ana@example.com', username: 'anagomez' },
  { name: 'Carlos Díaz', email: 'carlos@example.com', username: 'carlosdiaz' },
];

export default function Page() {
  return (
    <div>
      <h1>Esta es la página de actividades de refuerzo1</h1>
      <Ejercicio1 name ="Juan"/>
      <Ejercicio2/>
      <Ejercicio3/>
      <Ejercicio4/>
      {usuarios.map((usuarios, index) => (
        <Ejercicio5 key={index} usuario={usuarios} />
      ))}
      <Ejercicio6/>
      <Ejercicio7/>
      <Ejercicio8/>
      <Ejercicio9/>
      <Ejercicio10/>
      <Ejercicio11/>
      <Ejercicio12/>
      <Ejercicio13/>
      <Ejercicio14/>
      <Ejercicio15 imagenes={imagenes}/>
    </div>
  );
}
