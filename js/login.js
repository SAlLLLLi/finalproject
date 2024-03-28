"use strict";


const checkValidity = (user, pass) => {
    if (user.value == "" || pass.value == "") {
        alert("Please provide Username & Password ");
        return false;
    }else if(user.value.length < 7 || user.value.length > 15){
        alert("Username must be between 7 and 15 characters long");
        return false;
    } else if (pass.value.length < 8 || pass.value.length > 18) {
        alert("Password must be between 8 and 18 characters long");
        return false;
    } else if (!/[A-Z]/.test(pass.value)) {
        alert("Password must contain at least one uppercase letter");
        return false;
    } else if (!/[!@#$%^&*]/.test(pass.value)) {
        alert("Password must contain at least one special character");
        return false;
    }
    return true;
};

const login = async (user, pass) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            username: user.value,
            password: pass.value
        });
        alert("Login successful");
        window.location.href = "index.html"; // Redirect to home page
    } catch (error) {
        console.error(error);
    }
};

export { checkValidity, login };
