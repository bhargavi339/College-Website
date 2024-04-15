const users = [
    {email: 'user1@example.com', password: 'password1'},
    {email: 'user2@example.com', password: 'password2'},
];
function validateSignUp()
{
    const firstName = document.querySelector('input[placeholder="First Name"]').value;
    const lastName = document.querySelector('input[placeholder="Last Name"]').value;
    const username = document.querySelector('input[placeholder="Username"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;
    const confirm_password = document.querySelector('input[placeholder="Confirm Password"]').value;
    const email = document.querySelector('input[placeholder="Email ID"]').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;

    if(!emailRegex.test(email))
    {
        alert("Invalid Email ID.");
        return false;
    }

    if(firstName === ''  ||
       lastName === '' ||
       username === '' || 
       password === '' ||
       confirm_password === '' ||
       email === '' ||
       day === '' || 
       month === '' || 
       year === '' || 
       !gender)
       {
            alert("Please fill all the fields and select a gender");
            return false;
       }
        const user = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
            confirm_password: confirm_password,
            email: email,
            dateofbirth: `${year}-${month}-${day}`,
            gender: gender.value };

        users.push(user);
        alert("Registered Successfully");
        console.log('Users:', users);
        return true;
}