// Codigo encriptador
// 1. variables necesarias
var tcampo = document.getElementById("resultado");
var encriptar = [];
var desencriptar = [];


document.getElementById("encriptar").addEventListener("click", function() {
    var mensaje = document.getElementById("texto").value;
    encriptar = []; //Se inicia el arreglo para que comience vacio
    document.getElementById("titulo-mensaje").innerHTML = ''; // El titulo se pone vacio

    //2. Ciclo for que permite detectar la cantidad de letras 
    // Si corresponde a una vocal debera ser encriptada, de lo contrario, no

    for (var i = 0; i <= mensaje.length;) {
        document.getElementById("resultado").innerHTML = '';
        if (mensaje[i] == "a") {
            encriptar.push("ai"); //Agregar contenido al Array encriptar
            i++;
        } else if (mensaje[i] == "e") {
            encriptar.push("enter"); //Agregar contenido al Array encriptar
            i++;
        } else if (mensaje[i] == "i") {
            encriptar.push("imes"); //Agregar contenido al Array encriptar
            i++;
        } else if (mensaje[i] == "o") {
            encriptar.push("ober"); //Agregar contenido al Array encriptar
            i++;
        } else if (mensaje[i] == "u") {
            encriptar.push("ufat"); //Agregar contenido al Array encriptar
            i++;
        } else {
            encriptar.push(mensaje[i]); //Agregar contenido al Array encriptar
            i++;
        }
    }

    // Se agrega el texto al titulo para indicar lo que el proceso realizo
    document.getElementById("titulo-mensaje").innerHTML += 'Su texto se encripto correctamente';
    // Se agrega el contenido del array al campo 
    //el .join se utiliza para quitar las comas al array
    tcampo.innerHTML += encriptar.join('');
});

document.getElementById("desencriptar").addEventListener("click", function() {
    var mensaje = document.getElementById("texto").value;
    desencriptar = []; //Se inicia el arreglo para que comience vacio
    document.getElementById("titulo-mensaje").innerHTML = ''; // El titulo se pone vacio

    //3. Ciclo for que permite detectar la cantidad de letras 
    // Si corresponde a una vocal debera ser encriptada a si misma y moverse cierta cantidad de letras

    for (var j = 0; j <= mensaje.length;) {
        document.getElementById("resultado").innerHTML = '';
        if (mensaje[j] == "a") {
            desencriptar.push("a"); //Agregar contenido al Array desencriptar
            var conteo = (j + 2); //agrega mas numeros a la variable de conteo j y se mueve esa misma cantidad
            j = conteo;
        } else if (mensaje[j] == "e") {
            desencriptar.push("e"); //Agregar contenido al Array desencriptar
            var conteo = (j + 5); //agrega mas numeros a la variable de conteo j y se mueve esa misma cantidad
            j = conteo;
        } else if (mensaje[j] == "i") {
            desencriptar.push("i"); //Agregar contenido al Array desencriptar
            var conteo = (j + 4); //agrega mas numeros a la variable de conteo j y se mueve esa misma cantidad
            j = conteo;
        } else if (mensaje[j] == "o") {
            desencriptar.push("o"); //Agregar contenido al Array desencriptar
            var conteo = (j + 4); //agrega mas numeros a la variable de conteo j y se mueve esa misma cantidad
            j = conteo;
        } else if (mensaje[j] == "u") {
            desencriptar.push("u"); //Agregar contenido al Array desencriptar
            var conteo = (j + 4); //agrega mas numeros a la variable de conteo j y se mueve esa misma cantidad
            j = conteo;
        } else {
            desencriptar.push(mensaje[j]); //Agregar contenido al Array desencriptar
            j++;
        }
    }
    // Se agrega el texto al titulo para indicar lo que el proceso realizo
    document.getElementById("titulo-mensaje").innerHTML += 'Su texto se desencripto correctamente';
    // Se agrega el contenido del array al campo 
    //el .join se utiliza para quitar las comas al array
    tcampo.innerHTML += desencriptar.join('');
});

document.getElementById("copiar").addEventListener("click", function() {
    //4. Copia el texto que se encuentra en la variable tcampo 
    //El innerText encutra el texto en la variable y se agrega
    navigator.clipboard.writeText(tcampo.innerText);
});