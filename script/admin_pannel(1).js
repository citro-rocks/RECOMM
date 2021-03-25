window.addEventListener('load', loadData)

// sve albume mozemo da zapamtimo u globalni niz albums
let albums = []

function loadData() {  
     fetch('http://localhost:3000/albums', {
        method: 'GET'
    }).then(response => response.json()).then(data => {
        console.log(data);
        showAlbums(data)
        // ovde pamtimo sve pribavljene albume u niz albums
        albums = data
    }).catch(error => console.log(error))

    // ovo ne treba
    // fetch('http://localhost:3000/categories', {
    //      method: 'GET'
    //  }).then(response => response.json()).then(data => {
    //      console.log(data);
    //      filterByGanre(data, 'ganre')
    //  }).catch(error => console.log(error))
}


// function filterByGanre(categories, selectId) {
//     const select = document.getElementById(selectId)
//     for(let i = 0; i < categories.length; i++){
//         const option = document.createElement('option')
//         option.innerHTML = categories[i].ganre
//         option.value = categories[i].id
        
//         const optionLink = document.createElement('a')
//         optionLink.href = `ganre.html?ganre=${categories[i].ganre}`
//         option.appendChild(optionLink)
//         select.appendChild(option)
//     }      
// }

const select = document.getElementById('ganre')
// za ovaj select mozemo da postavimo dogadjaj onchange
select.addEventListener('change', filterByGanre) // fja filterByGenre se izvrsava svaki put kad se promeni selektovana opcija

function filterByGanre(event) {
    console.log(event.currentTarget.value) // na ovaj nacin dobijamo vrednost trenutno selektovane opcije
    const selectedValue = event.currentTarget.value
    const filteredAlbums = albums.filter(album => album.ganre === selectedValue) // ovako filtriramo
    // sada treba da pozovemo fju showAlbums i prosledimo joj samo filtrirane albume
    showAlbums(filteredAlbums)
}

function showAlbums(albums){
    const card = document.getElementById('cards')
    card.innerHTML = ''
    for (let i = 0; i < albums.length; i++) {
    const record = document.createElement('div')
    record.setAttribute('class', 'album-card')
    record.style.float = 'left'
    card.appendChild(record)
    // Artist
    const artist = document.createElement('h3')
    artist.innerHTML = albums[i].artist
    record.appendChild(artist)
    // Album
    const album = document.createElement('h4')
    album.innerHTML = albums[i].album
    record.appendChild(album)
    // Kreiranje linka
    const moreInfo = document.createElement('a')
    moreInfo.href = `album_info_edit.html?id=${albums[i].id}`
    const img = document.createElement('img')
    img.src = albums[i].cover
    img.height = 300
    img.width = 300
    moreInfo.appendChild(img)
    record.appendChild(moreInfo)
    
    //delete album
    const deleteAlbum = document.createElement('button')
    deleteAlbum.setAttribute("class", 'album-delete')
    deleteAlbum.innerHTML = 'Delete this album'
    deleteAlbum.onclick = function () {
        const albumid = albums[i].id
        fetch('http://localhost:3000/albums/' + albumid, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            console.log(data);
            alert('Album deleted')
        }).catch(error => console.log(error))
        }
    record.appendChild(deleteAlbum)
    } 
}


