let formulario = document.getElementById('idForm')

let ArrayUsuario = []
formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    let nombre = document.getElementById('inputName').value
    let mail = document.getElementById('inputEmail4').value
    let password = document.getElementById('inputPassword4').value
    let direccion = document.getElementById('inputAddress').value
    let celular = document.getElementById('inputCelular').value
    let ciudad = document.getElementById('inputCity').value
    let estado = document.getElementById('inputState').value
    let codigoPostal = document.getElementById('inputZip').value
    let usuario = {
        nombre: nombre,
        mail: mail,
        password: password,
        direccion: direccion,
        celular: celular,
        ciudad: ciudad,
        estado: estado,
        codigoPostal: codigoPostal
    }

    ArrayUsuario.push(usuario)
    let usuarioJSON = JSON.stringify(ArrayUsuario)
    localStorage.setItem('ArrayUsuario', usuarioJSON)
    console.log(localStorage.getItem('ArrayUsuario'))
    formulario.reset()
})

let registro = document.querySelector('#registrarse')

registro.addEventListener('click', () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Tus datos han sido guardados correctamente`,
        showConfirmButton: false,
        timer: 2500
    })
})

const getSizesPromise = async () => {
  fetch('./sizes.json').then((response) => response.json()).then((data) => {
    console.log(data);
  }).catch((e) => {
      console.log('error');
  })
};

const getSizes = async () => {
  try {
    const response = await fetch('./sizes.json');
    const data = await response.json();
    return data;
  } catch (e) {
    console.log('error');
    return [];
  }
};

const getPrices = async () => {
  const response = await fetch('./prices.json');
  const data = await response.json();
  return data;
};

const renderSizes = (sizes) => {
  let html = ``;
  const sizesElement = document.getElementById('size');


  sizes.forEach(({ price, displayName }) => {
    html += `<option value="${price}">${displayName}</option>`;
  });

  sizesElement.innerHTML = html;
};

const renderEffects = (price) => {
  let html = ``;
  const effectsElement = document.getElementById('effect');
  const EFFECT_NUMBER = 10;
  let counter = 0;

  do {
    html += `<option value="${price * counter}">${counter}</option>`;
    counter++;
  } while (counter <= EFFECT_NUMBER);

  effectsElement.innerHTML = html;
}

const renderDesign = (price) => {
  let html = ``;
  const designElement = document.getElementById('design');
  const EFFECT_NUMBER = 10;
  let counter = 0;

  do {
    html += `<option value="${price * counter}">${counter}</option>`;
    counter++;
  } while (counter <= EFFECT_NUMBER);

  designElement.innerHTML = html;
}

const calculate = (e) => {
  e.preventDefault();
  const designTotal = parseInt(document.getElementById('design').value);
  const effectsTotal = parseInt(document.getElementById('effect').value);
  const sizesTotal = parseInt(document.getElementById('size').value);


  document.getElementById('total').innerText = `${designTotal + effectsTotal + sizesTotal}`;
};

const render = async () => {
  const sizes = await getSizes();
  const prices = await getPrices();

  renderSizes(sizes);
  renderEffects(prices.efecto);
  renderDesign(prices.dibujo);
};

render();


const calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener('click', (e) => {
  calculate(e);
});

class Nails {
    constructor(id, size, precio, tiempo) {
        this.id = id
        this.size = size
        this.precio = precio
        this.tiempo = tiempo
    }
}

const nailsChicas = new Nails(1, "chicas", 350, 90)
const nailsGrandes = new Nails(2, "Grandes", 380, 90)
const nailsExtraGrandes = new Nails(3, "Extra Grandes", 400, 120)

let array = [nailsChicas, nailsGrandes, nailsExtraGrandes]

fetch("./post.php",{
  method: 'POST'
  })
  then(response => response.json())
  then(data => {
  console.log(data)
  })