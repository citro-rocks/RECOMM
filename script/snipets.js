window.addEventListener('load', loadData)
function loadData() {
    // Ucitavanje tabele
     fetch('http://localhost:3000/albums', {
         method: 'GET'
     }).then(response => response.json()).then(data => {
         console.log(data);
         fillTable(data)
     }).catch(error => console.log(error))

     // Prikaz albuma
     fetch('http://localhost:3000/albums', {
        method: 'GET'
    }).then(response => response.json()).then(data => {
        console.log(data);
        showAlbums(data)
    }).catch(error => console.log(error))

    // Filtriranje po zanru
    fetch('http://localhost:3000/categories', {
         method: 'GET'
     }).then(response => response.json()).then(data => {
         console.log(data);
         filterByGanre(data, 'ganre')
     }).catch(error => console.log(error))

     // Ucitavanje kategorija
     fetch('http://localhost:3000/categories', {
         method: 'GET'
     }).then(response => response.json()).then(data => {
         console.log(data);
         loadCategoriesInSelect(data, 'category')
     }).catch(error => console.log(error))
}

function fillTable(albums) {
    const table = document.getElementById('albums')
for (let i = 0; i < albums.length; i++) {
    const tr = document.createElement('tr')
    table.appendChild(tr)
    // Artist
    const td1 = document.createElement('td')
    td1.innerHTML = albums[i].artist
    tr.appendChild(td1)
    // Album
    const td2 = document.createElement('td')
    td2.innerHTML = albums[i].album
    tr.appendChild(td2)
    // Year
    const td3 = document.createElement('td')
    td3.innerHTML = albums[i].year
    tr.appendChild(td3)
    // Ganre
    const td4 = document.createElement('td')
    td4.innerHTML = albums[i].ganre
    tr.appendChild(td4)
    //Subganre
    const td5 = document.createElement('td')
    td5.innerHTML = albums[i].subganre
    tr.appendChild(td5)
    //Short description
    const td6 = document.createElement('td')
    td6.innerHTML = albums[i].description
    tr.appendChild(td6)
    //cover
    const td7 = document.createElement('td')
    tr.appendChild(td7)
    const image = document.createElement('img')
    image.src = albums[i].cover
    image.width = 100
    image.height = 100
    td7.appendChild(image)
    //wiki
    const td8 = document.createElement('td')
    td8.innerHTML = albums[i].wiki
    tr.appendChild(td8)
    //spotify
    const td9 = document.createElement('td')
    td9.innerHTML = albums[i].spotify
    tr.appendChild(td9)
    //deezer
    const td10 = document.createElement('td')
    td10.innerHTML = albums[i].deezer
    tr.appendChild(td10)
    //youtube
    const td11 = document.createElement('td')
    td11.innerHTML = albums[i].youtube
    tr.appendChild(td11)
    //facebook
    const td12 = document.createElement('td')
    td12.innerHTML = albums[i].facebook
    tr.appendChild(td12)
    //instagram
    const td13 = document.createElement('td')
    td13.innerHTML = albums[i].instagram
    tr.appendChild(td13)
    //website
    const td14 = document.createElement('td')
    td14.innerHTML = albums[i].web
    tr.appendChild(td14)
    }
}