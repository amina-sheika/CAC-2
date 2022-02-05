function testname(event)
{
  let code=event.which;
  if(code>47&&code<58)  
    return false;
  else
    return true;
    
}

// function test(event)
// {
//   let code=event.which;
//   if(code>64 && code<91)
//     return false;
//   else
//     return true;
// }

var fullname = document.getElementById('fullname');
var uname = document.getElementById('username');
var pwd = document.getElementById('password');
var span = document.getElementsByTagName('span');
var phno = document.getElementById('phone');
var dob = document.getElementById('birth-date');
var email = document.getElementById('email');
var age = document.getElementById('age');



function checkname()
{
  const regex = /^([a-zA-Z\s.]+)$/;
  
  if (fullname.value.trim() == "" || fullname.value.trim() == null) 
  {
    span[1].innerText="Blank Name!";
    fullname.style.border="2px red solid";
    span[1].style.color = "red";
    
  } 
  if (regex.test(fullname.value.trim()) ) 
  {     
    span[1].innerText = "Valid Name!";
    span[1].style.color = "green";
    fullname.style.border= "2px green solid";
    return true;
  }
  else 
  {
    fullname.style.border="2px red solid";
    span[1].style.color ="red";
    span[1].innerText = "Invalid Name!";
    return false;
  }     
}

function validateUsername()
{
  const regex = /^([a-zA-Z0-9\.@_]+)$/;
  if(uname.value.trim() == "" || uname.value.trim() == null)
  {
    span[2].innerText = "Blank Username!";
    username.style.border = "2px red solid";
    span[2].style.color= "red";
    //validatePassword();
    // return false;
  }
  if(regex.test(uname.value.trim()))
  {
    span[2].innerText="Valid username!";
    span[2].style.color = "green";
    username.style.border = "2px green solid";
    return true;
  }
  else
  {
    span[2].innerText = "Invalid Username!";
    username.style.border = "2px red solid";
     return false;
  }
  // return true;
}

function validatePassword()
{
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^_+={}|:"<>,.?])[A-Za-z\d@$!%*?&]{8,}$/;
  
  if(regex.test(pwd.value.trim()))
  {
    if(pwd.value.trim().length >7 && pwd.value.trim().length < 15)
    {
      span[10].innerText = "Strong Password!";
      pwd.style.border = "2px green solid";
      span[10].style.color= "green";
      return true;
    }
    if(pwd.value.trim().length < 7)
    {
      span[10].innerText = "Weak Password!";
      pwd.style.border = "2px yellow solid";
      span[10].style.color= "lime";
      
    }
  }
  if(pwd.value.trim() == "" || pwd.value.trim() == null)
  {
    span[10].innerText = "Blank Password!";
    pwd.style.border = "2px red solid";
    span[10].style.color= "red";
    
    // return false;
  }
  else
  {
    span[10].innerText = "Invalid Password!";
    pwd.style.border = "2px red solid";
    span[10].style.color= "red";
    return false;
  }
  // validateEmail();
  // return true;
}


function validateEmail()
{
  const regex=/^\w+([\.-]?\w+)+@(.*?).in$/;
  if(email.value.trim() == "" || email.value.trim() == null)
  {
    span[4].innerText = "Blank Email!";
    email.style.border = "2px red solid";
    span[4].style.color= "red";
    
    // return false;
  }
  if(regex.test(email.value.trim()))
  {
    span[2].innerText = "Valid Email!";
    span[2].style.color="green";
    email.style.border="green"; 
    return true;
  }
  else 
  {
    span[2].innerText = "Invalid Email!";
    span[2].style.color="red";
    email.style.border = "2px red solid";

    return false;
  }
  // return true;
}

function validatePhone()
{
  const regex = /^([0-9]{10})$/;
  if(phno.value.trim() == "" || phno.value.trim() == null)
  {
    span[8].innerText = "Blank Phone-number!";
    phno.style.border = "2px red solid";
    span[8].style.color= "red";
    
    // return false;
  }
  if(regex.test(phno.value.trim()))
  {
    span[8].innerText = "Valid Phone-number!";
    span[8].style.color="green";
    email.style.border="green";
    return true;
  }
  if(phno.value.trim().length > 10)
  {
    span[8].innerText = "Invalid Phone!";
    username.style.border = "2px red solid";
    return false;
  }
  // return true;
}

function validatedob()
{
  if(dob.value.trim() == "" || dob.value.trim() == null)
  {
    span[6].innerText = "Blank DOB!";
    dob.style.border = "2px solid red";
    span[6].style.color ="red";
    
  }
  else
  {
    span[6].innerText = "Valid DOB!";
    span[6].style.color = "green";
    dob.style.border = "1px green solid";
    return true;
  }
  return false;
}
function setLStorage(){
  var person = { 'phone': phno.value, 'email': email.value};
  
  // Put the object into storage
  localStorage.setItem('participant', JSON.stringify(person));
  }
function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function validate()
{
  var fullname = document.getElementById('fullname');
  var uname = document.getElementById('username');
  var pwd = document.getElementById('password');
  var email = document.getElementById('email');
  var phno = document.getElementById('phone');
  var dob = document.getElementById('birth-date');
  checkname();
  validateUsername();
  validatePassword();
  validateEmail();
  validatePhone();
  if(checkname && validateUsername() && validateEmail() && validatePhone() && validatePassword()){
    setCookie('fullname',fullname,2);
    setCookie('uname',uname,2);
    setCookie('pwd',pwd,2);
    setCookie('email',email,2);
    setLStorage();
    window.open("DOM.html","_self")

  }
}
    
