//Funtion that is called on clicking submit button
function validateForm()
{
    //the statements calls the different function and checks the validation 
    if(validateUname()){
        if(validateEmail()){
            if(validatePassword())
            {}
        }
    }
    return false;
}
//Funtion to check the Username
function validateUname()
{
    //Condtion that checks wheather Username is entered correctly
    if (/^[A-Za-z]+$/.test(register.fname.value))
    {
      return (true)
    }
    alert("Username must have alphabet characters only")
    return (false)
}  

//Funtion to check the emailid 
function validateEmail()
{
    //Condition that checks weather emailid entered is in correct form! 
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(register.email.value))
    {
      return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}   

//Function to check the password and repeat password
function validatePassword()
{
    var password = document.getElementById("psw").value;
        var rptPassword = document.getElementById("psw-repeat").value;
        //Condition that checks the password and repeat password are same!
        if (password == rptPassword) 
        {
            alert("Registered Successfully!");
            return true;
        }
        else
        {  
            alert("Password not matched!")
            return false;
        } 
}