const h2 = document.body.querySelector ('h2')
const input = document.body.querySelector ('input')

function getEmail(){
    console.log(h2.innerText)
    console.log(input.value)
    console.log(userFirstName.value, 'userFirstName')
    console.log(userLastName.value, 'userLastName')
    console.log(userEmail.value, 'userEmail')
    console.log(userPassword.value, 'userPaa')
}
getEmail()

createAccountBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    getEmail()
    console.log("button clicked")
}

)