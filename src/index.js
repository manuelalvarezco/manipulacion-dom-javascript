/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const API = 'https://platzi-avo.vercel.app/api/avo';
const app = document.querySelector('#app');

window
  .fetch(API)
  .then((resp) => resp.json())
  .then((resp) => {
    const todoItems = [];
    resp.data.forEach(element => {

      // Crear el elemento
      const image = document.createElement('img');
      image.src = 'https://platzi-avo.vercel.app' + element.image;

      const title = document.createElement('h2');
      title.textContent = element.name;
      title.className = 'text-2xl text-red-400';

      const price = document.createElement('div');
      price.textContent = element.price;
      
      const container = document.createElement('div');
      container.append(image, title, price);

      todoItems.push(container);
    })

    app.append(...todoItems);
  })