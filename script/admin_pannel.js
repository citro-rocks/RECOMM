window.addEventListener('load', loadData)

let albums = []

function loadData() {  
     fetch('http://localhost:3000/albums', {
        method: 'GET'
    }).then(response => response.json()).then(data => {
        console.log(data);
        showAlbums(data)
        albums = data
    }).catch(error => console.log(error))
}


const select = document.getElementById('ganre')
select.addEventListener('change', filterByGanre)

function filterByGanre(event) {
    console.log(event.currentTarget.value);
    const selectedValue = event.currentTarget.value
    const filteredAlbums = albums.filter(albums => albums.ganre === selectedValue)

    showAlbums(filteredAlbums)
}

// Show albums
function showAlbums(albums){
    const card = document.getElementById('cards')
    card.innerHTML = ''
    for (let i = 0; i < albums.length; i++) {
    const record = document.createElement('div')
    record.setAttribute('class', 'card')
    // record.style.float = 'left'
    card.appendChild(record)
    // Kreiranje linka
    const moreInfo = document.createElement('a')
    moreInfo.href = `album_info_edit.html?id=${albums[i].id}`
    const img = document.createElement('img')
    img.src = albums[i].cover
    img.height = 300
    img.width = 300
    moreInfo.appendChild(img)
    record.appendChild(moreInfo)

    const cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')
    record.appendChild(cardBody)
    // Artist
    const artist = document.createElement('h5')
    artist.setAttribute('class', 'card-title')
    artist.innerHTML = albums[i].artist
    cardBody.appendChild(artist)

    // Album
    const album = document.createElement('p')
    album.innerHTML = albums[i].album
    cardBody.appendChild(album)

    //Edit album
    const editBtn = document.createElement('button')
    editBtn.setAttribute("class", 'btn btn-info')
    editBtn.innerHTML = 'Edit album'
    editBtn.onclick = function() {
        location.href = `album_info_edit.html?id=${albums[i].id}`
    }
    cardBody.appendChild(editBtn)
    
    //delete album
    const deleteAlbum = document.createElement('button')
    deleteAlbum.setAttribute("class", 'btn btn-warning')
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
    cardBody.appendChild(deleteAlbum)
    } 
}


