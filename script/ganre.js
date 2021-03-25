window.addEventListener('load', loadGanre)

function loadGanre() {
    const locationSearch = window.location.search
    const ganre = locationSearch.split('=')[1]
    fetch(`http://localhost:3000/albums?ganre=${ganre}`, {
       method: 'GET'
   }).then(response => response.json()).then(data => {
       console.log(data);
       showAlbums(data)
   }).catch(error => console.log(error))
}

function showAlbums(albums) {
    const card = document.getElementById('byganre')
    card.innerHTML = ''
    for (let i = 0; i < albums.length; i++) {
    const record = document.createElement('div')
    record.setAttribute('class', 'album-card')
    record.style.float = 'left'
    card.appendChild(record)
    // Kreiranje linka
    const moreInfo = document.createElement('a')
    moreInfo.href = `album_info.html?id=${albums[i].id}`
    // Cover
    const img = document.createElement('img')
    img.src = albums[i].cover
    img.height = 300
    img.width = 300
    moreInfo.appendChild(img)
    record.appendChild(moreInfo)
    // Artist
    const artist = document.createElement('h3')
    artist.innerHTML = albums[i].artist
    record.appendChild(artist)
    // Album
    const album = document.createElement('h4')
    album.innerHTML = albums[i].album
    record.appendChild(album)
    }

}
