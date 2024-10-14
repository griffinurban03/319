//Griffin Urban
function fetchUser() {
    document.getElementById("loginuser").innerHTML = `Authenticating...`;
    return new Promise((resolve, reject) => {
        fetch("./griffinu_Activity12_Login.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON correctly
        })
        .then(data => resolve(data))
        .catch((error) => {
            console.log(error);
            reject(error); // Add reject for error handling
        });
    });
}

function login(userData, userInput, passwordInput) {
    // Check if user and password match the JSON data
    if (userData.user === userInput && userData.password === passwordInput) {
        document.getElementById('loginuser').innerHTML = "User and password correct";
    } else {
        document.getElementById('loginuser').innerHTML = "User and password incorrect";
    }
}

async function useAdmin(userInput, passwordInput) {
    try {
        const userData = await fetchUser();
        login(userData, userInput, passwordInput);
    } catch (error) {
        document.getElementById('loginuser').innerHTML = "Error fetching users.";
    }
}

document.getElementById("loginButton").addEventListener("click", (event) => {
    event.preventDefault();
    // read input
    const userInput = document.getElementById("userInput").value;
    const passwordInput = document.getElementById("passwordInput").value;
    useAdmin(userInput, passwordInput);
});
