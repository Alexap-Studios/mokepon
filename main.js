console.log('Hello World!');

function juego(){

nombre = document.getElementById("nombre")

nombreofplayer = document.getElementById("nombreofplayer")

buton = document.getElementById("checkbox")

section_1 = document.getElementById("section_1")

buton.addEventListener('click', on)

}

function on(){

  section_1.style.display = 'hide'

  nombre = document.getElementById("nombre").value

  document.querySelector('#nombreofplayer').innerHTML = nombre

  var etiqueta = ['<img src="'];

var myArray = ['mokepon1', 'mokepon2', 'mokepon3'];

var png = ['.png'];

var rand = Math.floor(Math.random()*3);

var valor = myArray[rand]

var etiqueta1 = ['">']

var total = etiqueta + valor +  png + etiqueta1;

document.querySelector("#nombreofplayer").innerHTML = total

personaje = valor

personajeid = ['mokepon1', 'mokepon2', 'mokepon3']

poderes = ['fuego', 'agua', 'tierra']

totalmokepon = personaje + personajeid[rand] + poderes[rand]

if (personaje == personajeid[rand]) {

  personajeid[rand] = poderes[rand]

  console.log(poderes[rand]);

  document.querySelector('#mokepon').innerHTML = totalmokepon

}

}

 window.addEventListener('load', juego)

 numeroaleatorio = Math.floor(Math.random() * 5)

 console.log(numeroaleatorio);
