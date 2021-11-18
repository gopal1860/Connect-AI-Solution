function validate(){
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="AA" && password=="BB"){
        alert("login succesfully");
        return false;
    }
    else{
        alert("login fail");
    }
}