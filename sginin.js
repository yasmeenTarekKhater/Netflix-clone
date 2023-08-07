var submitBtn=document.getElementById("submitBtn");
submitBtn.disabled=true;
function valid(e){
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    var emailerror=document.getElementById("emailError");
    var passerror=document.getElementById("passwordError");

    if(email.indexOf("@") == -1 || email.length <= 0){
        emailerror.innerHTML="Please enter right email";
        submitBtn.disabled=true;
    }else if(email.indexOf("@") >= -1 && email.length >0){
        emailerror.innerHTML="";
    }
    if(pass.length<4 || pass.length>60){
        passerror.innerHTML="Please enter right password";
        submitBtn.disabled=true;
    }else if(pass.length>4 || pass.length<60){
        passerror.innerHTML="";
    }if(email.indexOf("@")>-1 && email.length>0 && pass.length >=4 && pass.length<60){
        submitBtn.disabled=false;
    }

}