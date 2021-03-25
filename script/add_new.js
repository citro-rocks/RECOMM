// window.addEventListener('load', loadData)


// function loadData() {
//      fetch('http://localhost:3000/categories', {
//          method: 'GET'
//      }).then(response => response.json()).then(data => {
//          console.log(data);
//          loadCategoriesInSelect(data, 'category')
//      }).catch(error => console.log(error))
// }

// function loadCategoriesInSelect(categories, selectId) {
//     const select = document.getElementById(selectId)
//     for (let i= 0; i < categories.length; i++) {
//         const option = document.createElement('option')
//         option.innerHTML = categories[i].ganre
//         option.value = categories[i].ganre
//         option.id = categories[i].selectId
//         select.appendChild(option)
//     }
// }


document.getElementById('submit').addEventListener('click', submitInfo)
function submitInfo () {
    const artist = document.getElementById('artist').value
    const album = document.getElementById('album').value
    const date = Number(document.getElementById('date').value)
    const ganre = document.getElementById('ganre').value
    const subganre = document.getElementById('subganre').value
    const description = document.getElementById('dscr').value
    const cover = document.getElementById('cvr').value
    const wiki = document.getElementById('wiki').value
    const spotify = document.getElementById('spot').value
    const deezer = document.getElementById('dzr').value
    const youTube = document.getElementById('ytb').value
    const facebook = document.getElementById('fcbk').value
    const instagram = document.getElementById('insta').value
    const web = document.getElementById('web').value

    fetch ('http://localhost:3000/albums', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
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
        }).catch(error => console.log(error)) 

}
