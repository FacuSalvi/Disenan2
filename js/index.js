// MENU HAMBURGUESA

const btnMobile = document.getElementById('menu-hamb');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Cerrar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



// VALIDACION DE FORMULARIO

function contactForm() {
  var contactName = document.getElementById("name").value;
  var contactEmail = document.getElementById("email").value;
  var contactMessage = document.getElementById("message").value;
  var contactError_message = document.getElementById("error_message");

  contactError_message.style.padding = "1em";

  var text;

  if (contactName.length < 3) {
    text = "El nombre debe tener al menos 3 caracteres";
    contactError_message.innerHTML = text;
    return false;
  }

  if (contactEmail.indexOf("@") == -1 || contactEmail.length < 6) {
    text = "Ingrese un Email válido";
    contactError_message.innerHTML = text;
    return false;
  }

  if (contactMessage.length <= 10) {
    text = "El mensaje debe tener al menos 10 caracteres";
    contactError_message.innerHTML = text;
    return false;
  }

  alert("Gracias por su mensaje!");
  return true;
}