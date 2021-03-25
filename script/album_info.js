window.addEventListener('load', loadAlbum)

function loadAlbum() {
    const locationSearch = window.location.search
    const albumId = locationSearch.split('=')[1]
    fetch(`http://localhost:3000/albums/${albumId}`, {
        method: 'GET'
    }).then(response => response.json()).then(data => {
        console.log(data)
        drawAlbum(data)
    }).catch(error => console.log(error))

    // fetch('http://localhost:3000/albums?=likes', {
    //     method: 'GET'
    // }).then(response => response.json()).then(data => {
    //     console.log(data);
    //     addlike(data)
    // }).catch(error => console.log(error))

}
// function addlike () {
//     // Like
//     const currentIndex = 0
//     const likeAlbum = document.getElementById('like')
//     likeAlbum.addEventListener('click')
//     const showLikes = document.createElement('h4')
//     showLikes.innerHTML = albums.likes[currentIndex] + 1
//     likeAlbum.appendChild(showLikes)

// }


function drawAlbum (albuminfo) {

    //Cover
    const divCover = document.getElementById('albumcover')
    const albumCover = document.createElement('img')
    albumCover.src = albuminfo.cover
    albumCover.height = 400
    albumCover.width = 400
    divCover.appendChild(albumCover)

    const divAlbum = document.getElementById('albuminfo')
    //Artist
    const artistName = document.createElement('h3')
    artistName.innerHTML = 'Artist: ' + albuminfo.artist
    artistName.setAttribute('class', 'artist-name')
    divAlbum.appendChild(artistName)

    //Album
    const albumName = document.createElement('h5')
    albumName.innerHTML = 'Album name: ' + albuminfo.album
    albumName.setAttribute('class', 'album-name')
    divAlbum.appendChild(albumName)


    // Year realised
    const yearReleased = document.createElement('h5')
    yearReleased.innerHTML = 'Year realised: ' + albuminfo.year
    yearReleased.setAttribute('class', 'year')
    divAlbum.appendChild(yearReleased)

    //Ganre
    const ganre = document.createElement('h5')
    ganre.innerHTML = 'Ganre: ' + albuminfo.ganre
    ganre.setAttribute('class', 'ganre')
    divAlbum.appendChild(ganre)

    //Subganre
    const subganre = document.createElement('h5')
    subganre.innerHTML = 'Subganre: ' + albuminfo.subganre
    subganre.setAttribute('class', 'sub')
    divAlbum.appendChild(subganre)

    // Shoprt description
    const description = document.createElement('h5')
    description.innerHTML = albuminfo.description
    description.setAttribute('class', 'descript')
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



}
