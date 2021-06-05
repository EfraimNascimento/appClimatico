let estado = document.querySelector('#estado');
let cidade = document.querySelector('#cidade');
let consultar = document.querySelector('#btn');

let tempIcon = document.querySelector('.tempIcon');
let local = document.querySelector('.local');
let temperatura = document.querySelector('.temperatura');

consultar.addEventListener('click', () => {
    let key = `bd4ea33ecf905116d12af172e008dbae`;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade.value},${estado.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        local.innerText = `${data.name} / ${data.sys.estado}`;
        temperatura.innerHTML = `${data.main.temp}°<b>C</b>`;

        data.weather.forEach(items => {
            descricaotempo.innerText = items.description;
            
            if (items.id < 250) {
                tempIcon.src = `assets/storm.svg`;
            } else if (items.id < 350) {
                tempIcon.src = `assets/drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon.src = `assets/snow.svg`;
            } else if (items.id < 650) {
                tempIcon.src = `assets/rain.svg`;
            } else if (items.id < 800) {
                tempIcon.src = `assets/atmosphere.svg`;
            } else if (items.id === 800) {
                tempIcon.src = `assets/sun.svg`;
            } else if (items.id > 800) {
                tempIcon.src = `assets/clouds.svg`;
            }
        })

        temperatura.innerHTML = `${data.main.feels_like}°C`;
        
    })
    estado.value = "";
    cidade.value = "";
});