let nombre="Pedrito"
let apellido="Suares"
let edad="10"
let esEstudiante=true

//concatenacion de string 
let saludo = "hi," + nombre + " " + apellido + ". tu edad es" + edad + ".";

//cambio de tipo de dato
let edadString=edad.toString();

//uso de metodo de cadena
let nombreMayusculas = nombre.toUpperCase();

// mostrar resultados
document.getElementById("texto").innerHTML =`
   <strong>saludo:</strong> ${saludo}<br>
   <strong>edad como cadena:</strong> ${edadString}<br>
   <strong>nombre en mayusculas:</strong> ${nombreMayusculas}<br>
   <strong>es estudiante:</strong> ${esEstudiante ? "Yes" : "No"}
   `;