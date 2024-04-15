const users = [
    {email: 'user1@example.com', password: 'password1'},
    {email: 'user2@example.com', password: 'password2'},
];

function validateSignIn()
{
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;

    if(email === '' || password === '')
    {
        alert("Please enter the Email ID and Password");
        return false;
    }

    const user = users.find(u => u.email === email && u.password === password);
       
    if(user)
    {
        alert("Login Successful");
        let anchelement=document.createElement("a");
        anchelement.href='HomePage.html';
        anchelement.textContent='Login';
        window.location.href('HomePage.html');
        return true;
    }
    else
    {
        alert("Invalid Email ID or Password. Please try again.")
        return false;
    }
}