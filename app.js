// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');

const button = document.querySelector('#get-joke');

//Preguntas de autoevaluación:
  // 1. ¿Cuál es la URL exacta que me permite obtener un chiste? 'https://api.chucknorris.io/jokes/random'

  // 2. ¿Qué tipo de petición HTTP debemos realizar para obtener la información? ¿GET o POST? GET

  // 3. ¿Que tipo de dato JavaScript devuelve la respuesta de la API? Object

  // 4. ¿Cuál es la propiedad de este objeto que contiene el texto del chiste? data

async function fetchJoke() {
	const response = await fetch('https://api.chucknorris.io/jokes/random');
	const data = await response.json();
	jokeDIV.textContent = data.value;
}

button.addEventListener('click', fetchJoke);


