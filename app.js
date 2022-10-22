const form = document.querySelector('#validationForm');
function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("First Name : "+form.fname.value)
    console.log("First Name : "+form.flname.value)
    console.log("Phone Number : "+form.fphone.value)
    console.log("Email : "+form.femail.value)
    console.log("Password : "+form.fpass.value)

})

function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
form.fname.addEventListener('input',()=>{
    var name = form.fname.value;   

 if(name.match(/^[a-zA-Z ]{4,}$/)){
    clearErrors();
  }
    else{
    seterror("fname",'*Name too short and alphabets only.');
    }

})
form.flname.addEventListener('input',()=>{
    var name = form.flname.value;   

 if(name.match(/^[a-zA-Z]{4,}$/)){
    clearErrors();
  }
    else{
    seterror("lname",'*Name too short and alphabets only.');
    }
    
})
form.fphone.addEventListener('input',()=>{
    var number = form.fphone.value;
   
    if(number.match(/^\d{10}$/)){
        clearErrors();
    }
    else{
        seterror("phone",'*incorrect phone number');
    }
})
form.femail.addEventListener('input',()=>{
    var email = form.femail.value;
    if (email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
        clearErrors();
    }
    else{
        seterror("email",'incorrect email address');
    }
})
form.fpass.addEventListener('input',()=>{
    var pass = form.fpass.value;
    if(pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/)){
        clearErrors();
    }
    else{
seterror("pass",'Password should contain one capital,one special and atleast 8 in length');
    }
})
form.fcpass.addEventListener('input',()=>{
    var pass = form.fpass.value;
    var cpass = form.fcpass.value;
    if (pass==cpass){
        clearErrors();
    } 
    else{
seterror("cpass",'Password does not match.');
    }
})
