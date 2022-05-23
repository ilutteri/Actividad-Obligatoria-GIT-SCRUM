let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let usuario = document.querySelector('#usuario');
  let clave = document.querySelector('#password');

  if (usuario.value === '' || clave.value === ''){
    window.alert('Debe completar ambos campos')
  } else if (!/@/.test(usuario.value)){
    window.alert('El nombre de usuario debe contener un arroba (@)')
  } else {
    form.submit;
  }
  
})