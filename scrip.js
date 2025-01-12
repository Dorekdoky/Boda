document.getElementById('rsvp-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const attending = document.getElementById('attending').value;

  alert(`Gracias por tu confirmación, ${name}! Has confirmado que asistirás: ${attending === 'si' ? 'Sí' : 'No'}.`);

  // Aquí puedes agregar código para enviar los datos a tu servidor o a tu correo
  // Ejemplo: usar un servicio de backend para recibir la confirmación o enviar por email.
});
