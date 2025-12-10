
function Email() {
  const email= document.getElementById("InputEmail");
  if (email.checkValidity()) {
    document.getElementById("email").innerHTML = "";
  }
  else{
    document.getElementById("email").innerHTML = "Please enter a valid Email Id";
  }
}

 
function Mobile() {
  const mob= document.getElementById("InputMob");
  
  if (!mob.checkValidity()) {
    document.getElementById("phno").innerHTML = "Mobile number should always be only Numbers.";
  }
  else{
    document.getElementById("phno").innerHTML = "";
  }
}
function success(){
  var form = document.getElementById("contact-form");
  if (form.checkValidity()) {
    // alert("Success");
  }
}


function Username() {
  const name= document.getElementById("InputName");
  if (name.checkValidity()) {
    document.getElementById("name").innerHTML = "";
  }
  else{
    document.getElementById("name").innerHTML = "Username should only contain 4-20 letters.";
  }
}
// eslint-disable-next-line
export default {Email, Mobile, success, Username};