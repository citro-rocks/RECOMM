window.addEventListener('load', loadData,)

function loadData() {
     fetch('http://localhost:3000/categories', {
         method: 'GET'
     }).then(response => response.json()).then(data => {
         console.log(data);
         loadCategoriesInSelect(data, 'category')
     }).catch(error => console.log(error))

    fetch('http://localhost:3000/albums', {
        method: 'GET'
    }).then(response => response.json()).then(data => {
        console.log(data);
        editAlbum(data)
    }).catch(error => console.log(error))
}

function editAlbum (albums) {
    const dataLoad = document.getElementById('load-data')
    for (let i= 0; i < albums.length; i++) {
        const loadBtn = document.createElement('button')
        loadBtn.innerHTML = 'Load album data'
        loadBtn.onclick = function(){
            document.getElementById('albumId-upd').value = albums[i].id
            document.getElementById('artist-upd').value = albums[i].artist
            document.getElementById('album-upd').value = albums[i].album
            document.getElementById('date-upd').value = albums[i].year
            document.getElementById('ganre-upd').value = albums[i].ganre
            document.getElementById('subganre-upd').value = albums[i].subganre
            document.getElementById('dscr-upd').value = albums[i].description
            document.getElementById('cvr-upd').value = albums[i].cover
            document.getElementById('wiki-upd').value = albums[i].wiki
            document.getElementById('spot-upd').value = albums[i].spotify
            document.getElementById('dzr-upd').value = albums[i].deezer
            document.getElementById('ytb-upd').value = albums[i].youtube
            document.getElementById('fcbk-upd').value = albums[i].facebook
            document.getElementById('insta-upd').value = albums[i].instagram
            document.getElementById('web-upd').value = albums[i].web 
        }
        dataLoad.appendChild(loadBtn)
    }
}

function loadCategoriesInSelect(categories, selectId) {
    const select = document.getElementById('category-upd')
    for (let i= 0; i < categories.length; i++) {
        const option = document.createElement('option')
        option.innerHTML = categories[i].ganre
        option.value = categories[i].ganre
        option.id = categories[i].selectId
        select.appendChild(option)
    }
}


document.getElementById('update-album').addEventListener('click', updateAlbum)
function updateAlbum () {
    const albumId = Number(document.getElementById('albumId-upd').value)
    const artist = document.getElementById('artist-upd').value
    const album = document.getElementById('album-upd').value
    const date = Number(document.getElementById('date-upd').value)
    const ganre = document.getElementById('ganre-upd').value
    const subganre = document.getElementById('subganre-upd').value
    const description = document.getElementById('dscr-upd').value
    const cover = document.getElementById('cvr-upd').value
    const wiki = document.getElementById('wiki-upd').value
    const spotify = document.getElementById('spot-upd').value
    const deezer = document.getElementById('dzr-upd').value
    const youTube = document.getElementById('ytb-upd').value
    const facebook = document.getElementById('fcbk-upd').value
    const instagram = document.getElementById('insta-upd').value
    const web = document.getElementById('web-upd').value

    fetch ('http://localhost:3000/albums', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            albumId: albumId,
            artist: artist,
            album: album,
            year: date,
            ganre: ganre,
            subganre: subganre,
            description: description,
            cover: cover,
            wiki: wiki,
            spotify: spotify,
            deezer: deezer,
            youtube: youTube,
            facebook: facebook,
            instagram: instagram,
            web: web
        })
        }) .then(response => response.json()).then(data => {
            console.log(data);
            alert('Album updated sucsesfuly')
        }).catch(error => console.log(error))

}

  
