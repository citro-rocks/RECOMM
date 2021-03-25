// fetching albums 
window.addEventListener('load', loadData)

function loadData() {
     fetch('http://localhost:3000/albums', {
         method: 'GET'
     }).then(response => response.json()).then(data => {
         console.log(data);
         loadLatest(data, 'albums')
     }).catch(error => console.log(error))

     fetch('http://localhost:3000/categories', {
        method: 'GET'
    }).then(response => response.json()).then(data => {
        console.log(data);
        loadGanre(data, 'ganre')
    }).catch(error => console.log(error))

}


function loadLatest(albums) {
    const showLatest = document.getElementById('latest')
    showLatest.innerHTML = ''
    for (let i = albums.length - 1; i >= albums.length - 6; i--) {
        const latest = document.createElement('div')
        latest.style.float = 'left'
        latest.setAttribute("class", "latest-card")
        showLatest.appendChild(latest)

        const linkToAlbum = document.createElement('a')
        linkToAlbum.href = `album_info.html?id=${albums[i].id}`
        const img = document.createElement('img')
        img.src = albums[i].cover
        img.height = 200
        img.width = 200
        linkToAlbum.appendChild(img)
        latest.appendChild(linkToAlbum)
    }
}

function loadGanre (categories) {
    const ganreBox = document.getElementById('ganre-blocks')
    ganreBox.innerHTML = ''
    for (let i = 0; i < categories.length; i++) {
        const block = document.createElement('div')
        block.setAttribute('class', 'ganre-link')
        block.style.float = 'left'
        const ganreLi = document.createElement('li')
        ganreLi.setAttribute('class', 'd-flex justify-content-center')
        const ganreTitle = document.createElement('a')
        ganreTitle.href = `ganre.html?ganre=${categories[i].ganre}`
        ganreTitle.innerHTML = categories[i].ganre
        ganreTitle.setAttribute('class', 'text-center')
        ganreLi.appendChild(ganreTitle)
        block.appendChild(ganreLi)
        ganreBox.appendChild(block)
    }
}

