//Redirect to the login page if not already logged in
if(localStorage.getItem("loggedInUser") === null || localStorage.loggedInUser == ""){
    window.location = "login.html";
}

//Execute when page is fully loaded
$(document).ready(function(){
    
    //Fetch dynamic details of logged-in user
    let users = JSON.parse(localStorage.users);
            
    users.forEach(user => {
        if(localStorage.loggedInUser == user.email){
            email = user.email;
            password = user.password;
            phone = user.phone;
            address = user.address;
            image = user.image;
            userName = user.name;
        }
    });

    $("form #user-name").attr("value",userName);
    $("form #user-image").attr("src",image);
    $("form #user-email").attr("value",email);
    $("form #user-password").attr("value",password);
    $("form #user-confirm-password").attr("value",password);
    $("form #user-phone").attr("value",phone);
    $("form #user-address").html(address);

    /*Click on the hidden input type file field, to open file explored to select new image, 
    when the edit icon is clicked*/
    $('#edit-image').click(function(){
        $('#new-image').click();
    });

    //Function triggered when the image is changed; to preview the new image
    $('#new-image').change(function(event){

        var tmppath = URL.createObjectURL(event.target.files[0]);
	    $("#user-image").fadeIn("fast").attr('src',tmppath);
    });

    //Function to handle the save button click event
    $('#save-changes').click(function(event){
        event.preventDefault();

        if(confirm("Save changes?")){

            let newPassword = $("form #user-password").val();
            let newConfirmPassword = $("form #user-confirm-password").val();
            let newPhoneNumber = $("form #user-phone").val();
            let newAddress = $("form #user-address").val();

            if(newPassword == newConfirmPassword){

                users.forEach(user => {
                    if(localStorage.loggedInUser == user.email){
                        user.password = newPassword;
                        user.phone = newPhoneNumber;
                        user.address = newAddress;
                    }
                });
        
                localStorage.setItem("users", JSON.stringify(users));
        
                
                alert("Changes saved successfully!");
                location.reload();
            }
            else {
                alert("Passwords do not match!");
                location.reload();
            }

        }
        
    });

});
