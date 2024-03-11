const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const errorNombre = document.querySelector(".errorNombre");
const errorAsunto = document.querySelector(".errorAsunto");
const errorMensaje = document.querySelector(".errorMensaje");
const resultado = document.querySelector(".resultado");

// Expresión regular para validar caracteres alfabéticos
const regex = /^[a-zA-Záéíóúñü]+$/;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validar nombre
  if (!regex.test(nombre.value)) {
    errorNombre.textContent = "El nombre es requerido";
    nombre.classList.add("error");
    return;
  } else {
    errorNombre.textContent = "";
    nombre.classList.remove("error");
  }

  // Validar asunto
  if (!regex.test(asunto.value)) {
    errorAsunto.textContent = "El asunto es requerido";
    asunto.classList.add("error");
    return;
  } else {
    errorAsunto.textContent = "El asunto es requerido";
    asunto.classList.remove("error");
  }

  // Validar mensaje
  if (mensaje.value === "") {
    errorMensaje.textContent = "El mensaje es reuerido";
    mensaje.classList.add("error");
    return;
  } else {
    errorMensaje.textContent = "";
    mensaje.classList.remove("error");
  }

  // Si no hay errores, enviar el formulario
  resultado.textContent = "¡Tu mensaje ha sido enviado exitosamente!";
  formulario.reset();
});




//Paleta de colores
const buttons = document.querySelectorAll('button'); 
const mainBox = document.getElementById('caja'); 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.style.backgroundColor; 
    mainBox.style.backgroundColor = color; 
  });
});



//Calculadora
const valor1Input = document.getElementById('valor1');
const valor2Input = document.getElementById('valor2');
const resultadoSpan = document.getElementById('resultado');
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');

btnSumar.addEventListener('click', () => {
  const valor1 = parseFloat(valor1Input.value);
  const valor2 = parseFloat(valor2Input.value);
  const resultado = valor1 + valor2;
  resultadoSpan.textContent = resultado;
});

btnRestar.addEventListener('click', () => {
  const valor1 = parseFloat(valor1Input.value);
  const valor2 = parseFloat(valor2Input.value);
  const resultado = valor1 - valor2;
  resultadoSpan.textContent = resultado >= 0 ? resultado : 0;
});




