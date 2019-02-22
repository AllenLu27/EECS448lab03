function passwordvalidation(){
  let password1=document.getElementById("password1").value;
  let password2=document.getElementById("password2").value;
  if(password1.length<8)
  {
       alert("Password has to be at least 8 characters long!");
  }
  else if(password1!=password2)
  {
     alert("Passwords don't match!");
  }
  else {
         alert("Password succesfully created!");
  }
}
