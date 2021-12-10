//Js functions to print alert msg and remove the item when they click ok button 
function validateForm(){
    alert("Are you sure you want to remove this item!!!")
    if(onclick="ok"){
        document.getElementById('product1').remove();
    }
}
function validateFormm(){
    alert("Are you sure you want to remove this item!!!")
    if(onclick="ok"){
        document.getElementById('product').remove(); 
        
    }
}
function validateCart(){
    alert("Thanks for Shopping with us. We are redirecting You to the checkout page.")
}
//Js functions for contact us page
function validate()
{
     
    if(valid()){
        if(validateEmail()){
           {}
        }
    }
}
function valid()
{
    
    if (/^[A-Za-z]+$/.test(f1.name.value))
    {
      return (true)
    }
    alert("Username must have alphabet characters only")
    return (false)
}  


function validateEmail()
{
     
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(f1.email.value))
    {
      return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}   
function validateProduct()
{
    window.confirm("Are you sure you want to add this product into cart??");
    if(onclick="ok"){
        alert("Item added into the cart sucessfully");
    }
    else{
        alert("Item was not added please try another one");
    }
}
