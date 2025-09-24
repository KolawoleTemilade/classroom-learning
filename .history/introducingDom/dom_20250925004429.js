const h2 = document.querySelector ('h2')
const input = document.body.querySelector ('input')

function getEmail(){
    console.log(h2.innerText)
    
    console.log(userFirstName.value, 'userFirstName')
    console.log(userLastName.value, 'userLastName')
    console.log(userEmail.value, 'userEmail')
    console.log(userPassword.value, 'userPassword')
}
getEmail()

createAccountBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    getEmail()
    console.log("button clicked")
}

)