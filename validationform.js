



function myFunction() {
    document.getElementById("myForm").reset();
  }

  
    

 function check() 
{
    var name=document.getElementById("name").value;
    var adress=document.getElementById("adress").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var comments=document.getElementById("comments").value;
    let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let strongRegex= new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

   if (name.length == 0)
   {
   alert("Name Required");
   return false;
   }

   if(adress.length == 0)
   {
  alert("Adress Required")
  return false;
   }

   if (!regex.test(email))
  {
    alert("Email Required With Valid Form!")
    return false;
    }
    
    if (!strongRegex.test(password))
    {
    alert("Password Required With Valid Form!") ;
    return false;
   }

}


