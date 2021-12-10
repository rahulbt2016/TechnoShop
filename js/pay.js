function validateForm()
{
    if(validateCardnum()){
        if(validateCVC()){

        }
    }
    return false;
}
function validateCardnum()
{
    
    if(/^4[0-9]{12}(?:[0-9]{3})?$/.test(pay.cardn.value))
    {
        return true;
    }
    alert("Please enter valid Card number!");
    return false;
}
function validateCVC()
{
    
    if(/^[0-9]{3,4}$/.test(pay.cvcnum.value))
    {
        alert("Payment Successfull!")
        return true;
    }
    alert("Invalid CVC Number!");
    return false;
}