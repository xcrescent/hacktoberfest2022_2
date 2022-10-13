var form = document.querySelector('#validationForm')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("First Name : "+form.fname.value)
    console.log("First Name : "+form.fname.value)
    console.log("Phone Number : "+form.fphone.value)
    console.log("Email : "+form.femail.value)
    console.log("Password : "+form.fpass.value)
})
