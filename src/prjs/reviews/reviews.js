console.log('Hola')

function nextUser (){
    fetch('https://rickandmortyapi.com/api/character/200')
    .then(response => response.json())
    .then(data=> {
        console.log(data)
        const name = document.querySelector('#name');
        name.textContent = data.name
        const status = document.querySelector('#status');
        status.textContent = data.status
        const gender = document.querySelector('#gender');
        gender.textContent = data.gender
        const img = document.getElementById('img')
        img.src = data.image
    })
}

nextUser()