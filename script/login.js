// fetching albums 
window.addEventListener('load', loadData)

function loadData() {
     fetch('http://localhost:3000/users', {
         method: 'GET'
     }).then(response => response.json()).then(data => {
         console.log(data, 'users');
         userLogin(data, 'users')
     }).catch(error => console.log(error))

}

function userLogin (users) {
    const loging = document.getElementById('login-btn')
    loging.onclick = function() {
        const username = document.getElementById('user').value
        const password = document.getElementById('pass').value
        for(let i = 0; i < users.length; i++) {
            if(username == users[i].username) {
                if(password == users[i].password) {
                    window.location.href = 'admin_pannel.html'
                    return
                }else{
                    alert('wrong')
                }
            }
        }
    }
}

