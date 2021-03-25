window.addEventListener('load', loadAlbum)

function loadAlbum() {
    const locationSearch = window.location.search
    const albumId = locationSearch.split('=')[1]
    fetch(`http://localhost:3000/albums/${albumId}`, {
        method: 'GET'
    }).then(response => response.json()).then(data => {
        console.log(data)
        drawAlbum(data)
        editAlbum(data)
    }).catch(error => console.log(error))

}

function drawAlbum (albuminfo) {
    
    //Cover
    const divCover = document.getElementById('albumcover')
    const albumCover = document.createElement('img')
    albumCover.src = albuminfo.cover
    albumCover.height = 400
    albumCover.width = 400
    divCover.appendChild(albumCover)

    const divAlbum = document.getElementById('albuminfo')
    //Album Id
    const albumId = document.createElement('h4')
    albumId.innerHTML = 'Album ID: ' + albuminfo.id
    divAlbum.appendChild(albumId)

    //Artist
    const artistName = document.createElement('h3')
    artistName.innerHTML = 'Artist: ' + albuminfo.artist
    divAlbum.appendChild(artistName)

    //Album
    const albumName = document.createElement('h4')
    albumName.innerHTML = 'Album name: ' + albuminfo.album
    divAlbum.appendChild(albumName)

    // Year realised
    const yearReleased = document.createElement('h4')
    yearReleased.innerHTML = 'Year realised: ' + albuminfo.year
    divAlbum.appendChild(yearReleased)

    //Ganre
    const ganre = document.createElement('h4')
    ganre.innerHTML = 'Ganre: ' + albuminfo.ganre
    divAlbum.appendChild(ganre)

    //Subganre
    const subganre = document.createElement('h4')
    subganre.innerHTML = 'Subganre: ' + albuminfo.subganre
    divAlbum.appendChild(subganre)

    // Shoprt description
    const description = document.createElement('h4')
    description.innerHTML = albuminfo.description
    divAlbum.appendChild(description)

    //Wikipedia link
    const wikilink = document.createElement('a')
    wikilink.className = 'wiki-link'
    wikilink.href = albuminfo.wiki
    //wikilink.innerHTML = 'Wikipedia '
    divAlbum.appendChild(wikilink)

    const wikiIcon = document.createElement('img')
    wikiIcon.src = 'images/icons/wiki-logo.png'
    wikiIcon.heigh = 35
    wikiIcon.width = 35
    wikilink.appendChild(wikiIcon)

    //Spotify link
    const spotifylink = document.createElement('a')
    spotifylink.className = 'spotify-link'
    spotifylink.href = albuminfo.spotify
    //spotifylink.innerHTML = 'Spotify '
    divAlbum.appendChild(spotifylink)

    const spotifyIcon = document.createElement('img')
    spotifyIcon.src = 'images/icons/spotify-logo.png'
    spotifyIcon.heigh = 35
    spotifyIcon.width = 35
    spotifylink.appendChild(spotifyIcon)

    //Deezer link
    const deezerlink = document.createElement('a')
    deezerlink.className = 'deezer-link'
    deezerlink.href = albuminfo.deezer
    //deezerlink.innerHTML = 'Deezer '
    divAlbum.appendChild(deezerlink)

    const deezerIcon = document.createElement('img')
    deezerIcon.src = 'images/icons/deezer-logo.png'
    deezerIcon.heigh = 35
    deezerIcon.width = 35
    deezerlink.appendChild(deezerIcon)

    //YouTube link
    const youtubelink = document.createElement('a')
    youtubelink.className = 'youtube-link'
    youtubelink.href = albuminfo.youtube
    //youtubelink.innerHTML = 'YouTube '
    divAlbum.appendChild(youtubelink)

    const youtubeIcon = document.createElement('img')
    youtubeIcon.src = 'images/icons/youtube-logo.png'
    youtubeIcon.heigh = 35
    youtubeIcon.width = 35
    youtubelink.appendChild(youtubeIcon)

    //Facebook link
    const facebooklink = document.createElement('a')
    facebooklink.className = 'facebook-link'
    facebooklink.href = albuminfo.facebook
    //facebooklink.innerHTML = 'Facebook'
    divAlbum.appendChild(facebooklink)

    const facebookIcon = document.createElement('img')
    facebookIcon.src = 'images/icons/facebook-logo.png'
    facebookIcon.heigh = 35
    facebookIcon.width = 35
    facebooklink.appendChild(facebookIcon)

    //Instagram link
    const instagramlink = document.createElement('a')
    instagramlink.className = 'instagram-link'
    instagramlink.href = albuminfo.instagram
    //instagramlink.innerHTML = 'Instagram '
    divAlbum.appendChild(instagramlink)

    const instaIcon = document.createElement('img')
    instaIcon.src = 'images/icons/instagram-logo.png'
    instaIcon.heigh = 35
    instaIcon.width = 35
    instagramlink.appendChild(instaIcon)

    //Website link
    const websitelink = document.createElement('a')
    websitelink.className = 'web-link'
    websitelink.href = albuminfo.web
    //websitelink.innerHTML = 'Website'
    divAlbum.appendChild(websitelink)

    const webIcon = document.createElement('img')
    webIcon.src = 'images/icons/website-logo.png'
    webIcon.heigh = 35
    webIcon.width = 35
    websitelink.appendChild(webIcon)

    
    // Edit Button

    // editBtn.addEventListener('click', function(){
    //     location = 'edit.html'
    // })
    
    
    
    // //Delete Button
    // const deleteAlbum = document.getElementById('btn-dlt')
    // const deleteBtn = document.createElement('button')
    // deleteBtn.innerHTML = 'Delete album'
    // deleteAlbum.appendChild(deleteBtn)
    // deleteBtn.onclick = function () {
    //     for(let i = 0; i < albums.length; i++){
    //         const albumId = albums[i].id
    //         deleteAlbum(albumId)
    //     }
    // }
    // divAlbum.appendChild(deleteAlbum)
}

function editAlbum (album) {
    // const dataLoad = document.getElementById('load-data')
    // const loadBtn = document.createElement('button')
    // loadBtn.innerHTML = 'Load album data'
    // dataLoad.appendChild(loadBtn)
    // loadBtn.onclick = function(){
    //     for (let i= 0; i < albums.length; i++) {
        document.getElementById('albumId-upd').value = album.id // id ne treba da moze korisnik da menja, pa smo rekli da taj input bude hidden (treba da se doda u html za input type='hidden')
        document.getElementById('artist-upd').value = album.artist
        document.getElementById('album-upd').value = album.album
        document.getElementById('date-upd').value = album.year
        document.getElementById('ganre-upd').value = album.ganre
        document.getElementById('subganre-upd').value = album.subganre
        document.getElementById('dscr-upd').value = album.description
        document.getElementById('cvr-upd').value = album.cover
        document.getElementById('wiki-upd').value = album.wiki
        document.getElementById('spot-upd').value = album.spotify
        document.getElementById('dzr-upd').value = album.deezer
        document.getElementById('ytb-upd').value = album.youtube
        document.getElementById('fcbk-upd').value = album.facebook
        document.getElementById('insta-upd').value = album.instagram
        document.getElementById('web-upd').value = album.web 
    //     }
    // }
}

document.getElementById('update-album').addEventListener('click', updateAlbum)
function updateAlbum() {
    // ovde preuzimamo sve podatke
    const id = document.getElementById('albumId-upd').value 
    const artist = document.getElementById('artist-upd').value
    const album = document.getElementById('album-upd').value
    const date = document.getElementById('date-upd').value
    const ganre = document.getElementById('ganre-upd').value
    const subganre = document.getElementById('subganre-upd').value
    const dsc = document.getElementById('dscr-upd').value
    const cvr = document.getElementById('cvr-upd').value
    const wiki = document.getElementById('wiki-upd').value
    const spot = document.getElementById('spot-upd').value
    const dzr = document.getElementById('dzr-upd').value
    const ytb = document.getElementById('ytb-upd').value
    const fcbk = document.getElementById('fcbk-upd').value
    const insta = document.getElementById('insta-upd').value
    const web = document.getElementById('web-upd').value

    // i sada izvrsavamo PUT metodu kako bi azurirali podatke u db
    fetch (`http://localhost:3000/albums/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            artist: artist,
            album: album,
            year: date,
            ganre: ganre,
            subganre: subganre,
            description: dsc,
            cover: cvr,
            wiki: wiki,
            spotify: spot,
            deezer: dzr,
            youtube: ytb,
            facebook: fcbk,
            instagram: insta,
            web: web
        })
        }) .then(response => response.json()).then(data => {
            console.log(data);
        }).catch(error => console.log(error)) 

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
